/**
 * 共用 quiz 引擎。
 * - drill/review/daily/kaiwa：逐題即時回饋（作答→對錯＋詳解→下一題）。
 * - mock：不回饋、線性作答、倒數計時、交卷（時間到自動交卷），結束渲染 MockResult。
 * 每題的顯示 permutation 存進 ItemRecord，mock 交卷回顧才對得上高亮。
 */
import { useEffect, useRef, useState } from 'react'
import type { Level } from '../../content/types'
import type { SessionItem, SessionPlan } from '../../lib/session'
import { scoreMock, type MockResultSummary } from '../../lib/score'
import { rateForLevel, stopSpeaking } from '../../lib/tts'
import { todayKey } from '../../lib/rng'
import { useT } from '../../lib/i18n'
import { useProgress } from '../../store/progress'
import { ChoiceInteraction, type AnswerDetail } from './ChoiceInteraction'
import { OrderInteraction } from './OrderInteraction'
import { ListeningInteraction } from './ListeningInteraction'
import { PassagePanel } from './PassagePanel'
import { Explanation } from './Explanation'
import { SessionResult, correctAnswerText } from './SessionResult'
import { MockResult } from '../jlpt/MockResult'
import { Timer } from '../common/Timer'
import './quiz.css'

export interface QuizSessionProps {
  plan: SessionPlan
  level?: Level
  onExit: () => void
}

/** 每題作答紀錄（含顯示 permutation，回顧高亮用） */
export interface ItemRecord {
  questionId: string
  correct: boolean
  /** choice/listening：顯示 permutation（display 位置 → 原始選項 index） */
  order?: number[]
  /** choice/listening：使用者選的顯示位置 */
  chosenDisplay?: number
  /** order 題：使用者排入的片段原始 index 序列 */
  arranged?: number[]
}

/** 從 unitId 前 2 字推題目所屬級別；推不出用 fallback ?? 'n3' */
function itemLevel(item: SessionItem, fallback?: Level): Level {
  const p = item.unitId.slice(0, 2)
  if (Object.hasOwn(rateForLevel, p)) return p as Level
  return fallback ?? 'n3'
}

/** 同一 passage 連續小題的區段（第 x/y 題） */
function passageRun(items: SessionItem[], idx: number): { x: number; y: number } | null {
  const p = items[idx].passage
  if (!p) return null
  let start = idx
  while (start > 0 && items[start - 1].passage?.id === p.id) start--
  let end = idx
  while (end + 1 < items.length && items[end + 1].passage?.id === p.id) end++
  return { x: idx - start + 1, y: end - start + 1 }
}

export function QuizSession({ plan, level, onExit }: QuizSessionProps) {
  const items = plan.items
  const isMock = plan.mode === 'mock'

  const recordAnswer = useProgress((s) => s.recordAnswer)
  const recordMock = useProgress((s) => s.recordMock)
  const recordDaily = useProgress((s) => s.recordDaily)
  const settings = useProgress((s) => s.settings)
  const T = useT()

  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<'answer' | 'feedback' | 'done'>('answer')
  const [records, setRecords] = useState<(ItemRecord | null)[]>(() => items.map(() => null))
  const [summary, setSummary] = useState<MockResultSummary | null>(null)
  /** 重考時 +1，強制互動元件重掛（重新 shuffle） */
  const [sessionKey, setSessionKey] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(plan.timeLimitSec ?? 0)
  const endAtRef = useRef(Date.now() + (plan.timeLimitSec ?? 0) * 1000)
  const finalizedRef = useRef(false)

  // 換題／卸載時停掉 TTS
  useEffect(() => {
    stopSpeaking()
    return () => stopSpeaking()
  }, [idx])

  const finalizeMock = () => {
    if (finalizedRef.current) return
    finalizedRef.current = true
    stopSpeaking()
    const correctIds = new Set<string>()
    items.forEach((it, i) => {
      const ok = records[i]?.correct ?? false
      recordAnswer(it.unitId, it.question.id, ok)
      if (ok) correctIds.add(it.question.id)
    })
    const lv = level ?? itemLevel(items[0])
    const s = scoreMock(lv, items, correctIds)
    recordMock(lv, s.total)
    setSummary(s)
    setPhase('done')
  }
  const submitRef = useRef(finalizeMock)
  submitRef.current = finalizeMock

  // mock 倒數；時間到自動交卷
  useEffect(() => {
    if (!isMock || phase === 'done' || !plan.timeLimitSec) return
    const t = setInterval(() => {
      const left = Math.ceil((endAtRef.current - Date.now()) / 1000)
      setSecondsLeft(Math.max(0, left))
      if (left <= 0) submitRef.current()
    }, 500)
    return () => clearInterval(t)
  }, [isMock, phase, sessionKey, plan.timeLimitSec])

  if (items.length === 0) {
    return (
      <div className="qz">
        <p className="qz-empty">{T.noItems}</p>
        <div className="qz-actions">
          <button type="button" className="qz-btn qz-btn--primary" onClick={onExit}>{T.ret}</button>
        </div>
      </div>
    )
  }

  const item = items[idx]
  const q = item.question
  const rec = records[idx]
  const revealed = phase === 'feedback'

  const handleAnswer = (ans: AnswerDetail | null) => {
    if (isMock) {
      // mock：暫存作答（可改選），交卷時一次寫入 progress
      setRecords((rs) => rs.map((r, i) => (i === idx ? (ans ? { questionId: q.id, ...ans } : null) : r)))
      return
    }
    if (!ans || phase !== 'answer') return
    recordAnswer(item.unitId, q.id, ans.correct)
    setRecords((rs) => rs.map((r, i) => (i === idx ? { questionId: q.id, ...ans } : r)))
    setPhase('feedback')
  }

  /** 即時回饋模式：下一題／完成 */
  const goNext = () => {
    if (idx + 1 < items.length) {
      setIdx(idx + 1)
      setPhase('answer')
      return
    }
    if (plan.mode === 'daily') {
      const correct = records.filter((r) => r?.correct).length
      recordDaily(todayKey(), correct, items.length)
    }
    setPhase('done')
  }

  const confirmSubmit = () => {
    const un = records.filter((r) => r === null).length
    const msg = un > 0 ? T.submitConfirmLeft(un) : T.submitConfirm
    if (window.confirm(msg)) finalizeMock()
  }

  const mockNext = () => {
    if (idx + 1 < items.length) setIdx(idx + 1)
    else confirmSubmit()
  }

  const retry = () => {
    finalizedRef.current = false
    setRecords(items.map(() => null))
    setIdx(0)
    setPhase('answer')
    setSummary(null)
    endAtRef.current = Date.now() + (plan.timeLimitSec ?? 0) * 1000
    setSecondsLeft(plan.timeLimitSec ?? 0)
    setSessionKey((k) => k + 1)
  }

  const handleExit = () => {
    if (isMock && phase !== 'done' && !window.confirm(T.leaveConfirm)) return
    stopSpeaking()
    onExit()
  }

  if (phase === 'done') {
    if (isMock && summary) {
      return (
        <MockResult
          level={level ?? itemLevel(items[0])}
          summary={summary}
          items={items}
          records={records}
          onRetry={retry}
          onExit={onExit}
        />
      )
    }
    return <SessionResult plan={plan} records={records} onExit={onExit} />
  }

  const run = passageRun(items, idx)
  const rate = settings.ttsRate ?? rateForLevel[itemLevel(item, level)]

  return (
    <div className="qz">
      <header className="qz-head">
        <button type="button" className="qz-btn qz-btn--ghost" onClick={handleExit}>{T.leave}</button>
        <span className="qz-title">{plan.title}</span>
        {isMock && plan.timeLimitSec ? <Timer secondsLeft={secondsLeft} /> : null}
        {isMock && (
          <button type="button" className="qz-btn qz-btn--warn" onClick={confirmSubmit}>{T.submit}</button>
        )}
      </header>
      <div className="qz-progressbar">
        <div className="qz-progressbar-fill" style={{ width: `${((idx + 1) / items.length) * 100}%` }} />
      </div>
      <div className="qz-counter">{T.counter(idx + 1, items.length)}</div>
      {item.passage && run && (
        <PassagePanel key={item.passage.id} passage={item.passage} index={run.x} total={run.y} />
      )}
      <div key={`${sessionKey}-${q.id}`}>
        {q.kind === 'choice' && (
          <ChoiceInteraction
            question={q}
            showFurigana={settings.showFurigana}
            revealed={revealed}
            chosenDisplay={rec?.chosenDisplay ?? null}
            disabled={revealed}
            onAnswer={handleAnswer}
          />
        )}
        {q.kind === 'order' && (
          <OrderInteraction question={q} revealed={revealed} disabled={revealed} onAnswer={handleAnswer} />
        )}
        {q.kind === 'listening' && (
          <ListeningInteraction
            question={q}
            rate={rate}
            mock={isMock}
            revealed={revealed}
            chosenDisplay={rec?.chosenDisplay ?? null}
            disabled={revealed}
            onAnswer={handleAnswer}
          />
        )}
      </div>
      {revealed && rec && (
        <Explanation correct={rec.correct} explanation={q.explanation} correctAnswer={correctAnswerText(q)} />
      )}
      <div className="qz-actions">
        {isMock ? (
          <button type="button" className="qz-btn qz-btn--primary" onClick={mockNext}>
            {idx + 1 < items.length ? (rec ? T.next : T.skip) : T.submit}
          </button>
        ) : revealed ? (
          <button type="button" className="qz-btn qz-btn--primary" onClick={goNext}>
            {idx + 1 < items.length ? T.next : T.finish}
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default QuizSession

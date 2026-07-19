/**
 * 模擬考入口——確認頁（題數、時限、估分聲明）→ mockPlan 產卷 → QuizSession（mock 模式）。
 * plan 為 null（該級某科完全沒內容）→「此級內容尚未齊全」。
 * 中斷續做：偵測到該級未完成快照 → 確認頁優先提供「繼續上次的作答」；
 * 進行中狀態由 QuizSession 回報、寫進 progress persist（關分頁不再歸零）。
 */
import { useEffect, useMemo, useState } from 'react'
import type { Level } from '../../content/types'
import { LEVEL_LABEL } from '../../content/registry'
import { questionsByUnit } from '../../content/jlpt'
import { mockPlan } from '../../lib/score'
import { rebuildPendingPlan, type PendingSession, type SessionPlan } from '../../lib/session'
import { useProgress } from '../../store/progress'
import { useView } from '../../state'
import { useT } from '../../lib/i18n'
import { QuizSession, type SnapshotState } from '../quiz/QuizSession'

export interface MockExamProps {
  level: Level
  /** 不傳則預設回該級首頁 */
  onExit?: () => void
}

type PendingInit =
  | { kind: 'none' }
  | { kind: 'resume'; snap: PendingSession; plan: SessionPlan }
  /** 快照存在但題目重建失敗（內容改版）→ 作廢 */
  | { kind: 'stale' }

export function MockExam({ level, onExit }: MockExamProps) {
  const setView = useView((s) => s.setView)
  const savePendingMock = useProgress((s) => s.savePendingMock)
  const clearPendingMock = useProgress((s) => s.clearPendingMock)
  const T = useT()
  const [started, setStarted] = useState(false)
  const [resuming, setResuming] = useState(false)
  const plan = useMemo(() => mockPlan(level, questionsByUnit), [level])
  // 快照只在掛載時讀一次（之後的寫入是本 session 自己產生的）
  const [pending] = useState<PendingInit>(() => {
    const snap = useProgress.getState().pendingMocks[level]
    if (!snap) return { kind: 'none' }
    const rebuilt = rebuildPendingPlan(snap, questionsByUnit)
    return rebuilt ? { kind: 'resume', snap, plan: rebuilt } : { kind: 'stale' }
  })
  useEffect(() => {
    if (pending.kind === 'stale') clearPendingMock(level)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const exit = onExit ?? (() => setView({ name: 'level', level }))

  const activePlan = resuming && pending.kind === 'resume' ? pending.plan : plan

  if (!activePlan) {
    return (
      <div className="qz qz-mock-intro">
        <h2>{T.mockTitle(LEVEL_LABEL[level])}</h2>
        <p className="qz-empty">{T.mockNotReady}</p>
        <div className="qz-actions">
          <button type="button" className="qz-btn qz-btn--primary" onClick={exit}>{T.ret}</button>
        </div>
      </div>
    )
  }

  if (started) {
    const handleSnapshot = (s: SnapshotState) => {
      savePendingMock(level, {
        kind: 'mock',
        level,
        questionIds: activePlan.items.map((i) => i.question.id),
        records: s.records,
        idx: s.idx,
        timeLimitSec: activePlan.timeLimitSec,
        secondsLeft: s.secondsLeft,
        savedAt: new Date().toISOString(),
      })
    }
    return (
      <QuizSession
        plan={activePlan}
        level={level}
        onExit={exit}
        resume={
          resuming && pending.kind === 'resume'
            ? {
                idx: pending.snap.idx,
                records: pending.snap.records,
                secondsLeft: pending.snap.secondsLeft ?? pending.snap.timeLimitSec,
              }
            : undefined
        }
        onSnapshot={handleSnapshot}
        onClearSnapshot={() => clearPendingMock(level)}
      />
    )
  }

  const minutes = Math.max(1, Math.round((activePlan.timeLimitSec ?? 0) / 60))
  const canResume = pending.kind === 'resume'
  return (
    <div className="qz qz-mock-intro">
      <h2>{T.mockTitle(LEVEL_LABEL[level])}</h2>
      <ul className="qz-mock-meta">
        <li>{T.mockMetaCount(activePlan.items.length)}</li>
        <li>{T.mockMetaTime(minutes)}</li>
        <li>{T.mockMetaRules}</li>
      </ul>
      <p className="qz-disclaimer">
        {T.mockDisclaimer}
      </p>
      {canResume && (
        <p className="qz-resume-note">
          ⏸ {T.mockResumeNotice(pending.snap.idx + 1, pending.snap.questionIds.length)}
        </p>
      )}
      <div className="qz-actions">
        {canResume ? (
          <>
            <button
              type="button"
              className="qz-btn qz-btn--primary"
              onClick={() => {
                setResuming(true)
                setStarted(true)
              }}
            >
              {T.continueExam}
            </button>
            <button
              type="button"
              className="qz-btn"
              onClick={() => {
                if (!window.confirm(T.resumeDiscardConfirm)) return
                clearPendingMock(level)
                setResuming(false)
                setStarted(true)
              }}
            >
              {T.restartExam}
            </button>
          </>
        ) : (
          <button type="button" className="qz-btn qz-btn--primary" onClick={() => setStarted(true)}>
            {T.startExam}
          </button>
        )}
        <button type="button" className="qz-btn" onClick={exit}>{T.ret}</button>
      </div>
    </div>
  )
}

export default MockExam

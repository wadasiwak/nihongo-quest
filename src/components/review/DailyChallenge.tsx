/**
 * 每日一練——日期 seed 全球同題（dailyPlan）。
 * 已完成→成績＋打卡 streak＋可重玩（不計分，改用 drill mode 避開 recordDaily）。
 */
import { useMemo, useState } from 'react'
import type { SessionPlan } from '../../lib/session'
import { dailyPlan } from '../../lib/session'
import { questionsByUnit } from '../../content/jlpt'
import { todayKey } from '../../lib/rng'
import { dailyStreak, useProgress } from '../../store/progress'
import { useView } from '../../state'
import { QuizSession } from '../quiz/QuizSession'
import './review.css'

type Phase = 'quiz' | 'result' | 'replay'

export function DailyChallenge() {
  const dailyDone = useProgress((s) => s.dailyDone)
  const setView = useView((s) => s.setView)

  const today = todayKey()
  const plan = useMemo(() => dailyPlan(questionsByUnit, today), [today])
  const replayPlan = useMemo<SessionPlan | null>(
    () => (plan ? { ...plan, mode: 'drill', title: `每日一練 ${today}（重玩・不計分）` } : null),
    [plan, today],
  )

  const [phase, setPhase] = useState<Phase>(() =>
    useProgress.getState().dailyDone[todayKey()] ? 'result' : 'quiz',
  )

  if (!plan) {
    return (
      <div className="rv-view">
        <h2 className="rv-title">每日一練</h2>
        <div className="rv-empty">
          <p>題庫建置中，過幾天再來吧！</p>
          <button className="rv-btn" onClick={() => setView({ name: 'home' })}>回首頁</button>
        </div>
      </div>
    )
  }

  if (phase === 'quiz') {
    return (
      <QuizSession
        plan={plan}
        onExit={() => {
          // 做完（引擎已 recordDaily）→ 看成績；中途離開 → 回首頁
          if (useProgress.getState().dailyDone[today]) setPhase('result')
          else setView({ name: 'home' })
        }}
      />
    )
  }

  if (phase === 'replay' && replayPlan) {
    return <QuizSession plan={replayPlan} onExit={() => setPhase('result')} />
  }

  const done = dailyDone[today]
  const streak = dailyStreak(dailyDone)

  return (
    <div className="rv-view">
      <h2 className="rv-title">每日一練 {today}</h2>
      <div className="dl-result">
        <p>今日已完成！</p>
        <div className="dl-score">
          {done?.score ?? 0}<small> / {done?.total ?? plan.items.length}</small>
        </div>
        <p className="dl-streak">連續打卡 {streak} 天 🔥</p>
        <p className="dl-hint">每天一組新題目，明天再來保持手感！</p>
        <div className="dl-actions">
          <button className="rv-btn-ghost" onClick={() => setPhase('replay')}>
            再玩一次（不計分）
          </button>
          <button className="rv-btn" onClick={() => setView({ name: 'home' })}>回首頁</button>
        </div>
      </div>
    </div>
  )
}

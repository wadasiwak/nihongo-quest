/**
 * 模擬考入口——確認頁（題數、時限、估分聲明）→ mockPlan 產卷 → QuizSession（mock 模式）。
 * plan 為 null（該級某科完全沒內容）→「此級內容尚未齊全」。
 */
import { useMemo, useState } from 'react'
import type { Level } from '../../content/types'
import { LEVEL_LABEL } from '../../content/registry'
import { questionsByUnit } from '../../content/jlpt'
import { mockPlan } from '../../lib/score'
import { useView } from '../../state'
import { useT } from '../../lib/i18n'
import { QuizSession } from '../quiz/QuizSession'

export interface MockExamProps {
  level: Level
  /** 不傳則預設回該級首頁 */
  onExit?: () => void
}

export function MockExam({ level, onExit }: MockExamProps) {
  const setView = useView((s) => s.setView)
  const T = useT()
  const [started, setStarted] = useState(false)
  const plan = useMemo(() => mockPlan(level, questionsByUnit), [level])
  const exit = onExit ?? (() => setView({ name: 'level', level }))

  if (!plan) {
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
    return <QuizSession plan={plan} level={level} onExit={exit} />
  }

  const minutes = Math.max(1, Math.round((plan.timeLimitSec ?? 0) / 60))
  return (
    <div className="qz qz-mock-intro">
      <h2>{T.mockTitle(LEVEL_LABEL[level])}</h2>
      <ul className="qz-mock-meta">
        <li>{T.mockMetaCount(plan.items.length)}</li>
        <li>{T.mockMetaTime(minutes)}</li>
        <li>{T.mockMetaRules}</li>
      </ul>
      <p className="qz-disclaimer">
        {T.mockDisclaimer}
      </p>
      <div className="qz-actions">
        <button type="button" className="qz-btn qz-btn--primary" onClick={() => setStarted(true)}>
          {T.startExam}
        </button>
        <button type="button" className="qz-btn" onClick={exit}>{T.ret}</button>
      </div>
    </div>
  )
}

export default MockExam

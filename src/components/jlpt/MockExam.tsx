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
import { QuizSession } from '../quiz/QuizSession'

export interface MockExamProps {
  level: Level
  /** 不傳則預設回該級首頁 */
  onExit?: () => void
}

export function MockExam({ level, onExit }: MockExamProps) {
  const setView = useView((s) => s.setView)
  const [started, setStarted] = useState(false)
  const plan = useMemo(() => mockPlan(level, questionsByUnit), [level])
  const exit = onExit ?? (() => setView({ name: 'level', level }))

  if (!plan) {
    return (
      <div className="qz qz-mock-intro">
        <h2>{LEVEL_LABEL[level]} 迷你模擬考</h2>
        <p className="qz-empty">此級內容尚未齊全，模擬考暫未開放。等各科題庫補齊後就能開考！</p>
        <div className="qz-actions">
          <button type="button" className="qz-btn qz-btn--primary" onClick={exit}>返回</button>
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
      <h2>{LEVEL_LABEL[level]} 迷你模擬考</h2>
      <ul className="qz-mock-meta">
        <li>📝 題數：{plan.items.length} 題</li>
        <li>⏱ 時限：{minutes} 分鐘（時間到自動交卷）</li>
        <li>➡️ 線性作答、不能回頭，過程中不顯示對錯；聽解每題限播 2 次</li>
      </ul>
      <p className="qz-disclaimer">
        ⚠️ 估分僅供參考：本站為縮編版模擬考，估分依答對率線性換算，與正式 JLPT 成績無直接對應。
      </p>
      <div className="qz-actions">
        <button type="button" className="qz-btn qz-btn--primary" onClick={() => setStarted(true)}>
          開始作答
        </button>
        <button type="button" className="qz-btn" onClick={exit}>返回</button>
      </div>
    </div>
  )
}

export default MockExam

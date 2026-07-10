/**
 * drill/review/daily/kaiwa 的結束畫面——分數＋逐題對錯列表（可展開看詳解）。
 * 另輸出 stemText/correctAnswerText/chosenAnswerText 給 MockResult 共用。
 */
import type { LeafQuestion, SessionPlan } from '../../lib/session'
import type { ItemRecord } from './QuizSession'

/** 題幹摘要（列表列用） */
export function stemText(q: LeafQuestion): string {
  if (q.kind === 'order') return `${q.before}＿★＿${q.after}`
  if (q.kind === 'listening') return q.question || q.script[0]?.text || '（聽解）'
  return q.stem
}

/** 正解文字 */
export function correctAnswerText(q: LeafQuestion): string {
  if (q.kind === 'order') return q.before + q.segments.join('') + q.after
  return q.options[q.answerIndex]
}

/** 使用者作答文字（依存下的 permutation / 排列還原） */
export function chosenAnswerText(q: LeafQuestion, rec: ItemRecord | null): string {
  if (!rec) return '未作答'
  if (q.kind === 'order') {
    if (!rec.arranged || rec.arranged.length === 0) return '未作答'
    return rec.arranged.map((i) => q.segments[i]).join('')
  }
  if (rec.order && rec.chosenDisplay !== undefined) {
    return q.options[rec.order[rec.chosenDisplay]]
  }
  return '未作答'
}

export interface SessionResultProps {
  plan: SessionPlan
  records: (ItemRecord | null)[]
  onExit: () => void
}

export function SessionResult({ plan, records, onExit }: SessionResultProps) {
  const total = plan.items.length
  const correct = records.filter((r) => r?.correct).length
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <div className="qz qz-result">
      <h2>{plan.title}</h2>
      <div className="qz-score-line">
        答對 <b>{correct}</b> / {total} 題（{pct}%）
      </div>
      <ul className="qz-review-list">
        {plan.items.map((item, i) => {
          const rec = records[i]
          const ok = rec?.correct ?? false
          const q = item.question
          return (
            <li key={q.id}>
              <details className="qz-review-item">
                <summary>
                  <span className={`qz-mark ${ok ? 'qz-mark--ok' : 'qz-mark--bad'}`}>{ok ? '〇' : '✕'}</span>
                  <span className="qz-review-stem" lang="ja">
                    {i + 1}. {stemText(q)}
                  </span>
                </summary>
                <div className="qz-review-body">
                  {!ok && (
                    <p>
                      你的答案：<span lang="ja">{chosenAnswerText(q, rec)}</span>
                    </p>
                  )}
                  <p>
                    正解：<span lang="ja">{correctAnswerText(q)}</span>
                  </p>
                  {q.explanation && <p className="qz-explain-text">{q.explanation}</p>}
                </div>
              </details>
            </li>
          )
        })}
      </ul>
      <div className="qz-actions">
        <button type="button" className="qz-btn qz-btn--primary" onClick={onExit}>
          返回
        </button>
      </div>
    </div>
  )
}

export default SessionResult

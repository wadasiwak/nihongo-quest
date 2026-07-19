/**
 * 並べ替え★（文の文法２）互動。
 * 4 片段 shuffle 顯示為按鈕，點擊依序排入答案列（可點答案列取消）；
 * 排滿 4 格判定＝排列完全等於 segments 原序（陣列順序＝唯一正解語序）。
 */
import { useMemo, useState } from 'react'
import type { OrderQuestion } from '../../content/types'
import { makeOrder, type AnswerDetail } from './ChoiceInteraction'
import { useT } from '../../lib/i18n'

export interface OrderInteractionProps {
  question: OrderQuestion
  revealed: boolean
  disabled?: boolean
  /** 中斷續做：已作答題的排列從紀錄帶回 */
  initialArranged?: number[]
  /** 排滿時回報作答；取消片段（未滿）回報 null（mock 撤銷暫答用） */
  onAnswer: (ans: AnswerDetail | null) => void
}

export function OrderInteraction({ question, revealed, disabled, initialArranged, onAnswer }: OrderInteractionProps) {
  const T = useT()
  // 片段按鈕的顯示順序（顯示時才 shuffle）
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const display = useMemo(() => makeOrder(question.segments.length), [question.id])
  /** 已排入答案列的片段（原始 index，依排入順序）；續做時從紀錄還原 */
  const [placed, setPlaced] = useState<number[]>(() =>
    initialArranged && initialArranged.length === question.segments.length ? initialArranged : [],
  )
  const locked = Boolean(disabled) || revealed

  const place = (orig: number) => {
    if (locked || placed.includes(orig)) return
    const next = [...placed, orig]
    setPlaced(next)
    if (next.length === question.segments.length) {
      onAnswer({ correct: next.every((v, i) => v === i), arranged: next })
    }
  }

  const unplace = (slot: number) => {
    if (locked || slot >= placed.length) return
    setPlaced(placed.filter((_, i) => i !== slot))
    onAnswer(null)
  }

  return (
    <div className="qz-interaction">
      <div className="qz-order-sentence" lang="ja">
        {question.before && <span className="qz-order-fixed">{question.before}</span>}
        {question.segments.map((_, slot) => {
          const orig = placed[slot]
          const filled = orig !== undefined
          let cls = 'qz-slot'
          if (slot === question.starIndex) cls += ' qz-slot--star'
          if (revealed && filled) cls += orig === slot ? ' qz-slot--correct' : ' qz-slot--wrong'
          return (
            <button
              key={slot}
              type="button"
              className={cls}
              disabled={!filled || locked}
              onClick={() => unplace(slot)}
              aria-label={slot === question.starIndex ? T.slotLabelStar(slot + 1) : T.slotLabel(slot + 1)}
            >
              {filled ? question.segments[orig] : slot === question.starIndex ? '★' : '＿＿'}
            </button>
          )
        })}
        {question.after && <span className="qz-order-fixed">{question.after}</span>}
      </div>
      <p className="qz-hint">{T.orderHint}</p>
      <div className="qz-segments">
        {display.map((orig) => (
          <button
            key={orig}
            type="button"
            className="qz-seg"
            lang="ja"
            disabled={placed.includes(orig) || locked}
            onClick={() => place(orig)}
          >
            {question.segments[orig]}
          </button>
        ))}
      </div>
    </div>
  )
}

export default OrderInteraction

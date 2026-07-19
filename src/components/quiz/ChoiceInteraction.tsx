/**
 * 單選互動——正解固定在 answerIndex（慣例 0），「顯示時」才以 permutation shuffle。
 * permutation 由 onAnswer 回傳給引擎存進 session 紀錄，mock 交卷回顧才對得上高亮。
 */
import { useMemo } from 'react'
import type { ChoiceQuestion } from '../../content/types'

/** 各互動元件回報給引擎的作答明細（引擎補上 questionId 即為 ItemRecord） */
export interface AnswerDetail {
  correct: boolean
  /** choice/listening：顯示 permutation（display 位置 → 原始選項 index） */
  order?: number[]
  /** choice/listening：使用者選的「顯示」位置 */
  chosenDisplay?: number
  /** order 題：使用者排入的片段原始 index 序列 */
  arranged?: number[]
}

/** 產生 0..n-1 的隨機 permutation（顯示時才 shuffle） */
export function makeOrder(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export const CIRCLED = ['①', '②', '③', '④', '⑤', '⑥']

export interface ChoiceInteractionProps {
  question: ChoiceQuestion
  showFurigana: boolean
  /** 是否已揭曉（即時回饋模式作答後 true；mock 恆 false） */
  revealed: boolean
  /** 目前選取的顯示位置（引擎從紀錄帶回；未選為 null） */
  chosenDisplay: number | null
  /** 中斷續做：已作答題的 permutation 從紀錄帶回，確保選取高亮對得上 */
  savedOrder?: number[]
  disabled?: boolean
  onAnswer: (ans: AnswerDetail) => void
}

export function ChoiceInteraction({
  question,
  showFurigana,
  revealed,
  chosenDisplay,
  savedOrder,
  disabled,
  onAnswer,
}: ChoiceInteractionProps) {
  // 顯示時才 shuffle：per 題固定的 permutation（續做時用紀錄裡存的）
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const order = useMemo(
    () => (savedOrder && savedOrder.length === question.options.length ? savedOrder : makeOrder(question.options.length)),
    [question.id],
  )
  const correctDisplay = order.indexOf(question.answerIndex)

  return (
    <div className="qz-interaction">
      <p className="qz-stem" lang="ja">{question.stem}</p>
      {showFurigana && question.stemReading && (
        <p className="qz-reading" lang="ja">{question.stemReading}</p>
      )}
      <div className="qz-options">
        {order.map((orig, disp) => {
          let cls = 'qz-opt'
          if (revealed) {
            if (disp === correctDisplay) cls += ' qz-opt--correct'
            else if (disp === chosenDisplay) cls += ' qz-opt--wrong'
          } else if (disp === chosenDisplay) {
            cls += ' qz-opt--selected'
          }
          return (
            <button
              key={disp}
              type="button"
              className={cls}
              disabled={disabled}
              onClick={() => onAnswer({ correct: disp === correctDisplay, chosenDisplay: disp, order })}
            >
              <span className="qz-opt-num">{CIRCLED[disp] ?? disp + 1}</span>
              <span lang="ja">{question.options[orig]}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ChoiceInteraction

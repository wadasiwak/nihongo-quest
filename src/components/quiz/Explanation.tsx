/**
 * 即時回饋詳解框——對錯標示＋正解＋繁中詳解。
 */
export interface ExplanationProps {
  correct: boolean
  explanation: string
  /** 正解文字（choice/listening＝正解選項；order＝完整正解句） */
  correctAnswer?: string
}

export function Explanation({ correct, explanation, correctAnswer }: ExplanationProps) {
  return (
    <div className={`qz-explain ${correct ? 'qz-explain--ok' : 'qz-explain--bad'}`}>
      <p className="qz-explain-verdict">{correct ? '〇 答對了！' : '✕ 答錯了'}</p>
      {correctAnswer && (
        <p className="qz-explain-answer">
          正解：<span lang="ja">{correctAnswer}</span>
        </p>
      )}
      {explanation && <p className="qz-explain-text">{explanation}</p>}
    </div>
  )
}

export default Explanation

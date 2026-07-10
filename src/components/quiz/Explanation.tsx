/**
 * 即時回饋詳解框——對錯標示＋正解＋繁中詳解。
 */
import { useT } from '../../lib/i18n'
export interface ExplanationProps {
  correct: boolean
  explanation: string
  /** 正解文字（choice/listening＝正解選項；order＝完整正解句） */
  correctAnswer?: string
}

export function Explanation({ correct, explanation, correctAnswer }: ExplanationProps) {
  const T = useT()
  return (
    <div className={`qz-explain ${correct ? 'qz-explain--ok' : 'qz-explain--bad'}`}>
      <p className="qz-explain-verdict">{correct ? T.correctVerdict : T.wrongVerdict}</p>
      {correctAnswer && (
        <p className="qz-explain-answer">
          {T.correctAnswerLabel}<span lang="ja">{correctAnswer}</span>
        </p>
      )}
      {explanation && <p className="qz-explain-text">{explanation}</p>}
    </div>
  )
}

export default Explanation

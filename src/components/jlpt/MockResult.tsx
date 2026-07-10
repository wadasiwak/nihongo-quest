/**
 * 模擬考結果——各科估分條（score/max/單科線）、總分/180、合格對照、
 * 逐題回顧（用存下的 permutation 正確高亮你的選擇與正解）。
 */
import type { Level } from '../../content/types'
import { LEVEL_LABEL } from '../../content/registry'
import type { MockResultSummary } from '../../lib/score'
import type { SessionItem } from '../../lib/session'
import type { ItemRecord } from '../quiz/QuizSession'
import { CIRCLED } from '../quiz/ChoiceInteraction'
import { chosenAnswerText, correctAnswerText, stemText } from '../quiz/SessionResult'
import { pickExplanation, useT } from '../../lib/i18n'

export interface MockResultProps {
  level: Level
  summary: MockResultSummary
  items: SessionItem[]
  records: (ItemRecord | null)[]
  onRetry: () => void
  onExit: () => void
}

export function MockResult({ level, summary, items, records, onRetry, onExit }: MockResultProps) {
  const T = useT()
  return (
    <div className="qz qz-result">
      <h2>{T.mockResultTitle(LEVEL_LABEL[level])}</h2>
      <div className={`qz-verdict ${summary.pass ? 'qz-verdict--pass' : 'qz-verdict--fail'}`}>
        {summary.pass ? T.passEst : T.failEst}
      </div>
      <div className="qz-total">
        {T.totalEst}<b>{summary.total}</b> / {summary.totalMax}　{T.passLineLabel(summary.passLineTotal)}
      </div>
      <div className="qz-sections">
        {summary.sections.map((s) => (
          <div key={s.label} className="qz-section-row">
            <div className="qz-section-label">
              <span>{s.label}</span>
              <span className="qz-section-nums">
                {T.sectionNums(s.score, s.max, s.correct, s.total, s.passLine)}
              </span>
            </div>
            <div className="qz-bar">
              <div
                className={`qz-bar-fill${s.score >= s.passLine ? '' : ' qz-bar-fill--fail'}`}
                style={{ width: `${s.max > 0 ? (s.score / s.max) * 100 : 0}%` }}
              />
              <div className="qz-bar-line" style={{ left: `${s.max > 0 ? (s.passLine / s.max) * 100 : 0}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="qz-disclaimer">
        {T.mockResultDisclaimer}
      </p>
      <h3>{T.reviewHeader}</h3>
      <ul className="qz-review-list">
        {items.map((item, i) => {
          const rec = records[i]
          const q = item.question
          const ok = rec?.correct ?? false
          const order = rec?.order
          const chosen = rec?.chosenDisplay
          return (
            <li key={q.id}>
              <details className="qz-review-item">
                <summary>
                  <span className={`qz-mark ${ok ? 'qz-mark--ok' : 'qz-mark--bad'}`}>{ok ? '〇' : '✕'}</span>
                  <span className="qz-review-stem" lang="ja">
                    {i + 1}. {stemText(q)}
                  </span>
                  {!rec && <span className="qz-tag">{T.unanswered}</span>}
                </summary>
                <div className="qz-review-body">
                  {q.kind === 'listening' && (
                    <div className="qz-script" lang="ja">
                      {q.script.map((line, j) => (
                        <p key={j}>
                          <span className="qz-script-speaker">{line.speaker}</span>
                          {line.text}
                        </p>
                      ))}
                    </div>
                  )}
                  {q.kind !== 'order' && order ? (
                    <div className="qz-review-options">
                      {order.map((orig, disp) => {
                        const isCorrect = orig === q.answerIndex
                        const isChosen = chosen === disp
                        let cls = 'qz-review-opt'
                        if (isCorrect) cls += ' qz-review-opt--correct'
                        else if (isChosen) cls += ' qz-review-opt--wrong'
                        return (
                          <div key={disp} className={cls}>
                            <span className="qz-opt-num">{CIRCLED[disp] ?? disp + 1}</span>
                            <span lang="ja">{q.options[orig]}</span>
                            {isCorrect && <span className="qz-tag qz-tag--ok">{T.correctTag}</span>}
                            {isChosen && <span className="qz-tag">{T.yourChoiceTag}</span>}
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <>
                      <p>
                        {T.yourAnswerLabel}<span lang="ja">{chosenAnswerText(q, rec)}</span>
                      </p>
                      <p>
                        {T.correctAnswerLabel}<span lang="ja">{correctAnswerText(q)}</span>
                      </p>
                    </>
                  )}
                  {q.explanation && <p className="qz-explain-text">{pickExplanation(q)}</p>}
                </div>
              </details>
            </li>
          )
        })}
      </ul>
      <div className="qz-actions">
        <button type="button" className="qz-btn qz-btn--primary" onClick={onRetry}>{T.retryExam}</button>
        <button type="button" className="qz-btn" onClick={onExit}>{T.exit}</button>
      </div>
    </div>
  )
}

export default MockResult

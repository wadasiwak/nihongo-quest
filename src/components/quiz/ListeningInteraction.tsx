/**
 * 聽解互動——script 預設不顯示、TTS 播放；mock 限播 2 次。
 * 無日文語音時降級為讀稿模式（banner＋全文顯示、播放鈕 disabled）。
 */
import { useEffect, useMemo, useState } from 'react'
import type { ListeningQuestion } from '../../content/types'
import { jaVoiceAvailable, stopSpeaking, ttsInit, ttsSupported } from '../../lib/tts'
import TTSButton from '../common/TTSButton'
import SpeedControl from '../common/SpeedControl'
import { CIRCLED, makeOrder, type AnswerDetail } from './ChoiceInteraction'
import { useT } from '../../lib/i18n'

export const MOCK_PLAY_LIMIT = 2

export interface ListeningInteractionProps {
  question: ListeningQuestion
  /** 實際 TTS 語速（settings.ttsRate ?? rateForLevel[級別]，引擎算好傳入） */
  rate: number
  mock: boolean
  revealed: boolean
  chosenDisplay: number | null
  /** 中斷續做：已作答題的 permutation 從紀錄帶回，確保選取高亮對得上 */
  savedOrder?: number[]
  disabled?: boolean
  onAnswer: (ans: AnswerDetail) => void
}

export function ListeningInteraction({
  question,
  rate,
  mock,
  revealed,
  chosenDisplay,
  savedOrder,
  disabled,
  onAnswer,
}: ListeningInteractionProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const order = useMemo(
    () => (savedOrder && savedOrder.length === question.options.length ? savedOrder : makeOrder(question.options.length)),
    [question.id],
  )
  const correctDisplay = order.indexOf(question.answerIndex)
  const T = useT()
  const [degraded, setDegraded] = useState(() => !ttsSupported())
  const [plays, setPlays] = useState(0)

  // 提早偵測「支援 TTS 但無日文 voice」以便降級；離開題目時停掉 TTS
  useEffect(() => {
    let alive = true
    if (ttsSupported()) {
      void ttsInit().then(() => {
        if (alive && !jaVoiceAvailable()) setDegraded(true)
      })
    }
    return () => {
      alive = false
      stopSpeaking()
    }
  }, [])

  const playsLeft = Math.max(0, MOCK_PLAY_LIMIT - plays)
  const playDisabled = degraded || (mock && playsLeft <= 0)
  const noVoiceTip = T.noVoiceShort
  const spoken = question.spokenOptions === true

  return (
    <div className="qz-interaction">
      {degraded && <div className="qz-banner">{T.degradedBanner}</div>}
      <div className="qz-listen-bar">
        <TTSButton
          label={mock && !degraded ? T.playLeft(playsLeft) : T.play}
          lines={question.script}
          rate={rate}
          disabled={playDisabled}
          disabledTooltip={degraded ? noVoiceTip : T.playsUsedUp}
          onPlay={() => setPlays((p) => p + 1)}
          onNoVoice={() => setDegraded(true)}
        />
        {question.question !== '' && (
          <TTSButton
            small
            label={T.readQuestion}
            text={question.question}
            rate={rate}
            disabled={degraded}
            disabledTooltip={noVoiceTip}
            onNoVoice={() => setDegraded(true)}
          />
        )}
        <SpeedControl />
      </div>
      {degraded && (
        <div className="qz-script" lang="ja">
          {question.script.map((line, i) => (
            <p key={i}>
              <span className="qz-script-speaker">{line.speaker}</span>
              {line.text}
            </p>
          ))}
        </div>
      )}
      {question.question !== '' && <p className="qz-stem" lang="ja">{question.question}</p>}
      <div className="qz-options">
        {order.map((orig, disp) => {
          let cls = 'qz-opt'
          if (revealed) {
            if (disp === correctDisplay) cls += ' qz-opt--correct'
            else if (disp === chosenDisplay) cls += ' qz-opt--wrong'
          } else if (disp === chosenDisplay) {
            cls += ' qz-opt--selected'
          }
          const showText = !spoken || degraded || revealed
          return (
            <div key={disp} className="qz-opt-row">
              <button
                type="button"
                className={cls}
                disabled={disabled}
                onClick={() => onAnswer({ correct: disp === correctDisplay, chosenDisplay: disp, order })}
              >
                <span className="qz-opt-num">{CIRCLED[disp] ?? disp + 1}</span>
                {showText && <span lang="ja">{question.options[orig]}</span>}
              </button>
              {spoken && (
                <TTSButton
                  small
                  label="▶"
                  text={question.options[orig]}
                  rate={rate}
                  disabled={degraded}
                  disabledTooltip={noVoiceTip}
                  onNoVoice={() => setDegraded(true)}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListeningInteraction

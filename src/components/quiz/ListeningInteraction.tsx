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

export const MOCK_PLAY_LIMIT = 2

export interface ListeningInteractionProps {
  question: ListeningQuestion
  /** 實際 TTS 語速（settings.ttsRate ?? rateForLevel[級別]，引擎算好傳入） */
  rate: number
  mock: boolean
  revealed: boolean
  chosenDisplay: number | null
  disabled?: boolean
  onAnswer: (ans: AnswerDetail) => void
}

export function ListeningInteraction({
  question,
  rate,
  mock,
  revealed,
  chosenDisplay,
  disabled,
  onAnswer,
}: ListeningInteractionProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const order = useMemo(() => makeOrder(question.options.length), [question.id])
  const correctDisplay = order.indexOf(question.answerIndex)
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
  const noVoiceTip = '此瀏覽器無日文語音'
  const spoken = question.spokenOptions === true

  return (
    <div className="qz-interaction">
      {degraded && <div className="qz-banner">此瀏覽器無日文語音，聽解改為閱讀腳本練習</div>}
      <div className="qz-listen-bar">
        <TTSButton
          label={mock && !degraded ? `▶ 播放（剩 ${playsLeft} 次）` : '▶ 播放'}
          lines={question.script}
          rate={rate}
          disabled={playDisabled}
          disabledTooltip={degraded ? noVoiceTip : '播放次數已用完'}
          onPlay={() => setPlays((p) => p + 1)}
          onNoVoice={() => setDegraded(true)}
        />
        {question.question !== '' && (
          <TTSButton
            small
            label="🔈 唸問題"
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

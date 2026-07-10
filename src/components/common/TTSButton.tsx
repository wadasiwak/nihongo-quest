/**
 * TTS 播放按鈕——onClick 內先 ttsInit()（iOS 需 user gesture），再 speak/speakLines。
 * disabled 時以外層 span title 顯示 tooltip（disabled button 收不到 hover 事件）。
 * 播放中再點一次＝停止。
 */
import { useState } from 'react'
import type { ScriptLine } from '../../content/types'
import { speak, speakLines, stopSpeaking, ttsInit } from '../../lib/tts'

export interface TTSButtonProps {
  /** 按鈕文字，預設「▶ 播放」 */
  label?: string
  /** 唸單段文字（與 lines 擇一） */
  text?: string
  /** 逐行唸腳本（優先於 text） */
  lines?: ScriptLine[]
  rate?: number
  pitch?: number
  small?: boolean
  disabled?: boolean
  /** disabled 時的 tooltip 說明 */
  disabledTooltip?: string
  /** 實際開始播放時呼叫（mock 計播放次數用） */
  onPlay?: () => void
  /** ttsInit 後發現無日文語音時呼叫（UI 降級用） */
  onNoVoice?: () => void
}

export function TTSButton({
  label = '▶ 播放',
  text,
  lines,
  rate = 1,
  pitch,
  small,
  disabled,
  disabledTooltip,
  onPlay,
  onNoVoice,
}: TTSButtonProps) {
  const [playing, setPlaying] = useState(false)

  const handleClick = async () => {
    if (disabled) return
    if (playing) {
      stopSpeaking()
      return
    }
    const ok = await ttsInit()
    if (!ok) {
      onNoVoice?.()
      return
    }
    onPlay?.()
    setPlaying(true)
    try {
      if (lines && lines.length > 0) await speakLines(lines, rate)
      else if (text) await speak(text, { rate, pitch })
    } finally {
      setPlaying(false)
    }
  }

  const cls = `qz-btn qz-tts${small ? ' qz-btn--sm' : ''}${playing ? ' qz-tts--playing' : ''}`
  return (
    <span className="qz-tts-wrap" title={disabled ? disabledTooltip : undefined}>
      <button type="button" className={cls} disabled={disabled} onClick={() => void handleClick()}>
        {playing ? '⏸ 停止' : label}
      </button>
    </span>
  )
}

export default TTSButton

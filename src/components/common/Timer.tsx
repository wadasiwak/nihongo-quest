/**
 * 倒數計時顯示（mm:ss），剩不到 60 秒轉警示色。純顯示元件，倒數由引擎驅動。
 */
export interface TimerProps {
  secondsLeft: number
}

export function Timer({ secondsLeft }: TimerProps) {
  const s = Math.max(0, secondsLeft)
  const mm = String(Math.floor(s / 60)).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  return (
    <span className={`qz-timer${s < 60 ? ' qz-timer--warn' : ''}`} role="timer" aria-label="剩餘時間">
      {mm}:{ss}
    </span>
  )
}

export default Timer

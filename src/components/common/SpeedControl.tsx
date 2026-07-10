/**
 * TTS 語速控制——0.5~1.25 滑桿，寫回 settings.ttsRate；null＝依級別自動（顯示「自動」）。
 */
import { useProgress } from '../../store/progress'

export function SpeedControl() {
  const ttsRate = useProgress((s) => s.settings.ttsRate)
  const updateSettings = useProgress((s) => s.updateSettings)

  return (
    <span className="qz-speed">
      <label className="qz-speed-label">
        語速
        <input
          type="range"
          min={0.5}
          max={1.25}
          step={0.05}
          value={ttsRate ?? 0.9}
          onChange={(e) => updateSettings({ ttsRate: Number(e.target.value) })}
          aria-label="語速"
        />
      </label>
      <span className="qz-speed-value">{ttsRate === null ? '自動' : `${ttsRate.toFixed(2)}×`}</span>
      {ttsRate !== null && (
        <button
          type="button"
          className="qz-btn qz-btn--ghost qz-btn--sm"
          onClick={() => updateSettings({ ttsRate: null })}
        >
          恢復自動
        </button>
      )}
    </span>
  )
}

export default SpeedControl

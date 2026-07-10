/**
 * TTS 語速控制——0.5~1.25 滑桿，寫回 settings.ttsRate；null＝依級別自動（顯示「自動」）。
 */
import { useProgress } from '../../store/progress'
import { useT } from '../../lib/i18n'

export function SpeedControl() {
  const ttsRate = useProgress((s) => s.settings.ttsRate)
  const updateSettings = useProgress((s) => s.updateSettings)
  const T = useT()

  return (
    <span className="qz-speed">
      <label className="qz-speed-label">
        {T.speedLabel}
        <input
          type="range"
          min={0.5}
          max={1.25}
          step={0.05}
          value={ttsRate ?? 0.9}
          onChange={(e) => updateSettings({ ttsRate: Number(e.target.value) })}
          aria-label={T.speedLabel}
        />
      </label>
      <span className="qz-speed-value">{ttsRate === null ? T.autoShort : `${ttsRate.toFixed(2)}×`}</span>
      {ttsRate !== null && (
        <button
          type="button"
          className="qz-btn qz-btn--ghost qz-btn--sm"
          onClick={() => updateSettings({ ttsRate: null })}
        >
          {T.restoreAuto}
        </button>
      )}
    </span>
  )
}

export default SpeedControl

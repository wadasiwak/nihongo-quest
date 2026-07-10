/**
 * 設定面板——語速／振り仮名／翻譯開關＋備份匯出匯入。
 * 可嵌入面板元件（放進 Home 或彈窗都行），不含頁面框架。
 */
import { useRef, useState } from 'react'
import { exportData, useProgress } from '../../store/progress'
import { useLang, useT } from '../../lib/i18n'
import '../review/review.css'

const RATE_MIN = 0.5
const RATE_MAX = 1.25
const RATE_STEP = 0.05

export function SettingsPanel() {
  const settings = useProgress((s) => s.settings)
  const updateSettings = useProgress((s) => s.updateSettings)
  const importData = useProgress((s) => s.importData)
  const fileRef = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null)
  const T = useT()
  const lang = useLang((s) => s.lang)
  const setLang = useLang((s) => s.setLang)

  const handleExport = () => {
    const blob = new Blob([exportData()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'nihongo-quest-backup.json'
    a.click()
    URL.revokeObjectURL(url)
    setMsg({ ok: true, text: T.exportedMsg })
  }

  const handleImportFile = async (file: File | undefined) => {
    if (!file) return
    try {
      const text = await file.text()
      const ok = importData(text)
      setMsg(ok
        ? { ok: true, text: T.importOk }
        : { ok: false, text: T.importBadFormat })
    } catch {
      setMsg({ ok: false, text: T.importReadFail })
    }
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <div className="sp-panel">
      <div className="sp-row">
        <div className="sp-label-line">
          <span className="sp-label">{T.languageLabel}</span>
          <span className="sp-actions">
            <button
              className={`sp-btn-sm${lang === 'zh' ? ' sp-btn-sm--on' : ''}`}
              onClick={() => setLang('zh')}
            >
              中文
            </button>
            <button
              className={`sp-btn-sm${lang === 'en' ? ' sp-btn-sm--on' : ''}`}
              onClick={() => setLang('en')}
            >
              English
            </button>
          </span>
        </div>
      </div>

      <div className="sp-row">
        <div className="sp-label-line">
          <span className="sp-label">{T.ttsRateLabel}</span>
          <span className="sp-value">
            {settings.ttsRate === null
              ? T.autoByLevel
              : `${settings.ttsRate.toFixed(2)}×`}
          </span>
          {settings.ttsRate !== null && (
            <button className="sp-btn-sm" onClick={() => updateSettings({ ttsRate: null })}>
              {T.resetAuto}
            </button>
          )}
        </div>
        <input
          className="sp-slider"
          type="range"
          min={RATE_MIN}
          max={RATE_MAX}
          step={RATE_STEP}
          value={settings.ttsRate ?? 0.9}
          onChange={(e) => updateSettings({ ttsRate: Number(e.target.value) })}
          aria-label={T.ttsRateLabel}
        />
      </div>

      <label className="sp-toggle">
        <input
          type="checkbox"
          checked={settings.showFurigana}
          onChange={(e) => updateSettings({ showFurigana: e.target.checked })}
        />
        {T.showFuriganaLabel}
      </label>

      <label className="sp-toggle">
        <input
          type="checkbox"
          checked={settings.showTranslation}
          onChange={(e) => updateSettings({ showTranslation: e.target.checked })}
        />
        {T.showTranslationLabel}
      </label>

      <div className="sp-row">
        <span className="sp-label">{T.backupLabel}</span>
        <div className="sp-actions">
          <button className="rv-btn-ghost" onClick={handleExport}>{T.exportBtn}</button>
          <button className="rv-btn-ghost" onClick={() => fileRef.current?.click()}>
            {T.importBtn}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept=".json,application/json"
            style={{ display: 'none' }}
            onChange={(e) => void handleImportFile(e.target.files?.[0])}
          />
        </div>
        {msg && (
          <div className={`sp-msg ${msg.ok ? 'sp-msg-ok' : 'sp-msg-err'}`}>{msg.text}</div>
        )}
      </div>

      <p className="sp-note">
        {T.storageNote}
      </p>
    </div>
  )
}

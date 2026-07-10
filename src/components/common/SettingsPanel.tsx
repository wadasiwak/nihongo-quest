/**
 * 設定面板——語速／振り仮名／翻譯開關＋備份匯出匯入。
 * 可嵌入面板元件（放進 Home 或彈窗都行），不含頁面框架。
 */
import { useRef, useState } from 'react'
import { exportData, useProgress } from '../../store/progress'
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

  const handleExport = () => {
    const blob = new Blob([exportData()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'nihongo-quest-backup.json'
    a.click()
    URL.revokeObjectURL(url)
    setMsg({ ok: true, text: '已匯出備份檔 nihongo-quest-backup.json。' })
  }

  const handleImportFile = async (file: File | undefined) => {
    if (!file) return
    try {
      const text = await file.text()
      const ok = importData(text)
      setMsg(ok
        ? { ok: true, text: '匯入成功！學習進度已還原。' }
        : { ok: false, text: '匯入失敗：檔案格式不對（要選 nihongo-quest 匯出的備份檔）。' })
    } catch {
      setMsg({ ok: false, text: '匯入失敗：讀不到這個檔案。' })
    }
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <div className="sp-panel">
      <div className="sp-row">
        <div className="sp-label-line">
          <span className="sp-label">朗讀語速</span>
          <span className="sp-value">
            {settings.ttsRate === null
              ? '自動（依級別）'
              : `${settings.ttsRate.toFixed(2)}×`}
          </span>
          {settings.ttsRate !== null && (
            <button className="sp-btn-sm" onClick={() => updateSettings({ ttsRate: null })}>
              重設為自動
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
          aria-label="朗讀語速"
        />
      </div>

      <label className="sp-toggle">
        <input
          type="checkbox"
          checked={settings.showFurigana}
          onChange={(e) => updateSettings({ showFurigana: e.target.checked })}
        />
        顯示假名注音（振り仮名）
      </label>

      <label className="sp-toggle">
        <input
          type="checkbox"
          checked={settings.showTranslation}
          onChange={(e) => updateSettings({ showTranslation: e.target.checked })}
        />
        顯示中文翻譯
      </label>

      <div className="sp-row">
        <span className="sp-label">資料備份</span>
        <div className="sp-actions">
          <button className="rv-btn-ghost" onClick={handleExport}>匯出備份</button>
          <button className="rv-btn-ghost" onClick={() => fileRef.current?.click()}>
            匯入備份
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
        學習進度只存在這台裝置的瀏覽器（localStorage），不會上傳到任何伺服器。
        換裝置或清瀏覽器資料前，記得先「匯出備份」，再到新環境「匯入備份」還原。
      </p>
    </div>
  )
}

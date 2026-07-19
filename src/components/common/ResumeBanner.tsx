/**
 * 中斷續做橫幅——Home / LevelHome 偵測 progress 裡未完成的模擬考／單元練習快照，
 * 提供「繼續」（導向對應頁面）與「放棄」（confirm 後清快照）。
 * LevelHome 傳 level 只顯示該級的快照。
 */
import type { Level } from '../../content/types'
import { LEVELS, LEVEL_LABEL, unitById } from '../../content/registry'
import { useProgress } from '../../store/progress'
import { useView } from '../../state'
import { unitTitle, useT } from '../../lib/i18n'
import './resume.css'

interface Row {
  key: string
  title: string
  meta: string
  go: () => void
  discard: () => void
}

export function ResumeBanner({ level }: { level?: Level }) {
  const pendingMocks = useProgress((s) => s.pendingMocks)
  const pendingDrill = useProgress((s) => s.pendingDrill)
  const pendingSprint = useProgress((s) => s.pendingSprint)
  const clearPendingMock = useProgress((s) => s.clearPendingMock)
  const clearPendingDrill = useProgress((s) => s.clearPendingDrill)
  const clearPendingSprint = useProgress((s) => s.clearPendingSprint)
  const setView = useView((s) => s.setView)
  const T = useT()

  const rows: Row[] = []
  for (const l of LEVELS) {
    const snap = pendingMocks[l]
    if (!snap || (level && l !== level)) continue
    const min =
      snap.secondsLeft != null ? Math.max(1, Math.round(snap.secondsLeft / 60)) : null
    rows.push({
      key: `mock-${l}`,
      title: T.resumeMockTitle,
      meta: `${LEVEL_LABEL[l]}・${T.resumeMeta(snap.idx + 1, snap.questionIds.length)}${
        min != null ? `・${T.resumeTimeLeft(min)}` : ''
      }`,
      go: () => setView({ name: 'mock', level: l }),
      discard: () => clearPendingMock(l),
    })
  }
  const drillUnit = pendingDrill?.unitId ? unitById[pendingDrill.unitId] : undefined
  if (pendingDrill && drillUnit && (!level || pendingDrill.level === level)) {
    rows.push({
      key: 'drill',
      title: T.resumeDrillTitle,
      meta: `${LEVEL_LABEL[pendingDrill.level]}・${unitTitle(drillUnit)}・${T.resumeMeta(
        pendingDrill.idx + 1,
        pendingDrill.questionIds.length,
      )}`,
      go: () => setView({ name: 'drill', unitId: pendingDrill.unitId! }),
      discard: clearPendingDrill,
    })
  }
  if (pendingSprint && (!level || pendingSprint.level === level)) {
    const l = pendingSprint.level
    rows.push({
      key: 'sprint',
      title: T.resumeSprintTitle,
      meta: `${LEVEL_LABEL[l]}・${T.resumeMeta(pendingSprint.idx + 1, pendingSprint.questionIds.length)}`,
      go: () => setView({ name: 'sprint', level: l }),
      discard: clearPendingSprint,
    })
  }

  if (rows.length === 0) return null
  return (
    <div className="resume-banners">
      {rows.map((r) => (
        <div key={r.key} className="resume-banner">
          <span className="resume-icon" aria-hidden="true">⏸</span>
          <span className="resume-text">
            <span className="resume-title">{r.title}</span>
            <span className="resume-meta">{r.meta}</span>
          </span>
          <button type="button" className="resume-go" onClick={r.go}>
            {T.resumeGo}
          </button>
          <button
            type="button"
            className="resume-discard"
            onClick={() => {
              if (window.confirm(T.resumeDiscardConfirm)) r.discard()
            }}
          >
            {T.resumeDiscard}
          </button>
        </div>
      ))}
    </div>
  )
}

export default ResumeBanner

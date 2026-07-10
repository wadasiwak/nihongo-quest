/**
 * 學習統計——級別×科目彙總正確率表、最弱 3 單元、錯題本／打卡／模考最佳。
 * 點單元列可直接跳該單元 drill。
 */
import { useMemo } from 'react'
import type { Level, Section } from '../../content/types'
import { LEVELS, LEVEL_LABEL, SECTION_LABEL, unitById, units } from '../../content/registry'
import { dailyStreak, dueWrongIds, useProgress } from '../../store/progress'
import { useView } from '../../state'
import { sectionLabel, unitTitle, useLang, useT } from '../../lib/i18n'
import './review.css'

const SECTIONS: Section[] = ['vocab', 'grammar', 'reading', 'listening']
const MIN_ATTEMPTED_FOR_WEAK = 5

interface UnitRow {
  unitId: string
  label: string
  attempted: number
  correct: number
  acc: number
}

const pct = (correct: number, attempted: number) =>
  attempted === 0 ? 0 : Math.round((correct / attempted) * 100)

export function StatsView() {
  const unitStats = useProgress((s) => s.unitStats)
  const wrong = useProgress((s) => s.wrong)
  const dailyDone = useProgress((s) => s.dailyDone)
  const mockBest = useProgress((s) => s.mockBest)
  const setView = useView((s) => s.setView)
  const T = useT()
  const lang = useLang((s) => s.lang)

  const { agg, unitRows } = useMemo(() => {
    const agg: Partial<Record<Level, Partial<Record<Section, { a: number; c: number }>>>> = {}
    const rows: UnitRow[] = []
    for (const u of units) {
      const s = unitStats[u.unitId]
      if (!s || s.attempted === 0) continue
      const byLevel = (agg[u.level] ??= {})
      const cell = (byLevel[u.section] ??= { a: 0, c: 0 })
      cell.a += s.attempted
      cell.c += s.correct
      rows.push({
        unitId: u.unitId,
        label: `${LEVEL_LABEL[u.level]}・${unitTitle(u)}`,
        attempted: s.attempted,
        correct: s.correct,
        acc: pct(s.correct, s.attempted),
      })
    }
    return { agg, unitRows: rows }
  }, [unitStats, lang])

  const weakest = useMemo(
    () => unitRows
      .filter((r) => r.attempted >= MIN_ATTEMPTED_FOR_WEAK)
      .sort((a, b) => a.acc - b.acc || b.attempted - a.attempted)
      .slice(0, 3),
    [unitRows],
  )

  const levelsWithData = LEVELS.filter((l) => agg[l])
  const unclearedCount = Object.values(wrong).filter((e) => !e.cleared).length
  const clearedCount = Object.values(wrong).length - unclearedCount
  const dueCount = dueWrongIds(wrong).length
  const streak = dailyStreak(dailyDone)
  const mockLevels = LEVELS.filter((l) => mockBest[l])

  const gotoDrill = (unitId: string) => {
    if (unitById[unitId]) setView({ name: 'drill', unitId })
  }

  if (unitRows.length === 0) {
    return (
      <div className="rv-view">
        <h2 className="rv-title">{T.statsTitle}</h2>
        <div className="rv-empty">
          <p>{T.statsEmpty1}</p>
          <p>{T.statsEmpty2}</p>
          <button className="rv-btn" onClick={() => setView({ name: 'home' })}>{T.goPractice}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="rv-view">
      <h2 className="rv-title">{T.statsTitle}</h2>

      {weakest.length > 0 && (
        <div className="st-weak">
          <h3>{T.weakTitle(MIN_ATTEMPTED_FOR_WEAK)}</h3>
          {weakest.map((r) => (
            <button key={r.unitId} className="st-unit-row" onClick={() => gotoDrill(r.unitId)}>
              <span className="st-unit-name">{r.label}</span>
              <span className="st-unit-acc">
                <strong>{r.acc}%</strong>（{r.correct}/{r.attempted}）
              </span>
            </button>
          ))}
        </div>
      )}

      <h3 className="rv-section-h">{T.accTable}</h3>
      <div className="st-table-wrap">
        <table className="st-table">
          <thead>
            <tr>
              <th>{T.levelCol}</th>
              {SECTIONS.map((sec) => <th key={sec}>{sectionLabel(sec, SECTION_LABEL[sec])}</th>)}
            </tr>
          </thead>
          <tbody>
            {levelsWithData.map((level) => (
              <tr key={level}>
                <th>{LEVEL_LABEL[level]}</th>
                {SECTIONS.map((sec) => {
                  const cell = agg[level]?.[sec]
                  return cell
                    ? (
                      <td key={sec}>
                        {pct(cell.c, cell.a)}%
                        <small>{cell.c}/{cell.a}</small>
                      </td>
                    )
                    : <td key={sec} className="st-na">—</td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="rv-section-h">{T.overview}</h3>
      <div className="st-tiles">
        <div className="st-tile">
          <div className="st-tile-label">{T.streakTile}</div>
          <div className="st-tile-value">{streak}<small>{T.daysUnit}</small></div>
        </div>
        <div className="st-tile">
          <div className="st-tile-label">{T.wrongUnclearedTile}</div>
          <div className="st-tile-value">{unclearedCount}<small>{T.qUnit}{T.wrongUnclearedVal(dueCount)}</small></div>
        </div>
        <div className="st-tile">
          <div className="st-tile-label">{T.wrongClearedTile}</div>
          <div className="st-tile-value">{clearedCount}<small>{T.qUnit}</small></div>
        </div>
        {mockLevels.map((l) => (
          <div className="st-tile" key={l}>
            <div className="st-tile-label">{T.mockBestTile(LEVEL_LABEL[l])}</div>
            <div className="st-tile-value">
              {mockBest[l]!.score}<small>{T.mockBestVal(mockBest[l]!.date)}</small>
            </div>
          </div>
        ))}
      </div>
      <p className="rv-sub">
        <button className="rv-btn-ghost" onClick={() => setView({ name: 'wrong' })}>{T.goWrong}</button>
      </p>

      <h3 className="rv-section-h">{T.unitDetail}</h3>
      <div>
        {unitRows.map((r) => (
          <button key={r.unitId} className="st-unit-row" onClick={() => gotoDrill(r.unitId)}>
            <span className="st-unit-name">{r.label}</span>
            <span className="st-unit-acc">
              <strong>{r.acc}%</strong>（{r.correct}/{r.attempted}）
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

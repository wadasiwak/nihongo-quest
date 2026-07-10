/**
 * 學習統計——級別×科目彙總正確率表、最弱 3 單元、錯題本／打卡／模考最佳。
 * 點單元列可直接跳該單元 drill。
 */
import { useMemo } from 'react'
import type { Level, Section } from '../../content/types'
import { LEVELS, LEVEL_LABEL, SECTION_LABEL, unitById, units } from '../../content/registry'
import { dailyStreak, dueWrongIds, useProgress } from '../../store/progress'
import { useView } from '../../state'
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
        label: `${LEVEL_LABEL[u.level]}・${u.title}`,
        attempted: s.attempted,
        correct: s.correct,
        acc: pct(s.correct, s.attempted),
      })
    }
    return { agg, unitRows: rows }
  }, [unitStats])

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
        <h2 className="rv-title">學習統計</h2>
        <div className="rv-empty">
          <p>還沒有作答紀錄，先去做幾題吧！</p>
          <p>做題後這裡會顯示各級別、各科目的正確率與弱點分析。</p>
          <button className="rv-btn" onClick={() => setView({ name: 'home' })}>去做題</button>
        </div>
      </div>
    )
  }

  return (
    <div className="rv-view">
      <h2 className="rv-title">學習統計</h2>

      {weakest.length > 0 && (
        <div className="st-weak">
          <h3>最弱 3 單元（作答 ≥{MIN_ATTEMPTED_FOR_WEAK} 題）——點一下去補強</h3>
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

      <h3 className="rv-section-h">級別 × 科目正確率</h3>
      <div className="st-table-wrap">
        <table className="st-table">
          <thead>
            <tr>
              <th>級別</th>
              {SECTIONS.map((sec) => <th key={sec}>{SECTION_LABEL[sec]}</th>)}
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

      <h3 className="rv-section-h">總覽</h3>
      <div className="st-tiles">
        <div className="st-tile">
          <div className="st-tile-label">每日一練連續打卡</div>
          <div className="st-tile-value">{streak}<small>天</small></div>
        </div>
        <div className="st-tile">
          <div className="st-tile-label">錯題本・未克服</div>
          <div className="st-tile-value">{unclearedCount}<small>題（今日到期 {dueCount}）</small></div>
        </div>
        <div className="st-tile">
          <div className="st-tile-label">錯題本・已克服</div>
          <div className="st-tile-value">{clearedCount}<small>題</small></div>
        </div>
        {mockLevels.map((l) => (
          <div className="st-tile" key={l}>
            <div className="st-tile-label">{LEVEL_LABEL[l]} 模考最佳</div>
            <div className="st-tile-value">
              {mockBest[l]!.score}<small>分・{mockBest[l]!.date}</small>
            </div>
          </div>
        ))}
      </div>
      <p className="rv-sub">
        <button className="rv-btn-ghost" onClick={() => setView({ name: 'wrong' })}>前往錯題本</button>
      </p>

      <h3 className="rv-section-h">各單元明細（點一下可去練習）</h3>
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

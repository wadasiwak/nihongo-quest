/** 級別頁——列出該級已有內容的單元（空單元隱藏），與迷你模擬考入口。 */
import type { Level, Section } from '../../content/types'
import { LEVEL_LABEL, SECTION_LABEL, units } from '../../content/registry'
import { questionsByUnit } from '../../content/jlpt'
import { useProgress } from '../../store/progress'
import { useView } from '../../state'
import { sectionLabel, unitGoal, unitTitle, useT } from '../../lib/i18n'
import { ResumeBanner } from '../common/ResumeBanner'
import './levelhome.css'

const SECTIONS: Section[] = ['vocab', 'grammar', 'reading', 'listening']

export function LevelHome({ level }: { level: Level }) {
  const setView = useView((s) => s.setView)
  const { unitStats, mockBest } = useProgress()
  const T = useT()

  const levelUnits = units.filter((u) => u.level === level)
  const filled = levelUnits.filter((u) => questionsByUnit[u.unitId]?.length)
  const mockReady = SECTIONS.every((s) => filled.some((u) => u.section === s))
  const best = mockBest[level]

  return (
    <div className="level-home">
      <header className="page-header">
        <button className="back-btn" onClick={() => setView({ name: 'home' })}>{T.backHome}</button>
        <h1>{T.levelPractice(LEVEL_LABEL[level])}</h1>
      </header>

      <ResumeBanner level={level} />

      {filled.length === 0 && <p className="empty-note">{T.levelEmpty}</p>}

      {SECTIONS.map((section) => {
        const sectionUnits = filled.filter((u) => u.section === section)
        if (sectionUnits.length === 0) return null
        return (
          <section key={section}>
            <h2>{sectionLabel(section, SECTION_LABEL[section])}</h2>
            <div className="unit-list">
              {sectionUnits.map((u) => {
                const qs = questionsByUnit[u.unitId]
                const count = qs.reduce((n, q) => n + (q.kind === 'passage' ? q.questions.length : 1), 0)
                const stat = unitStats[u.unitId]
                const acc = stat && stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : null
                return (
                  <button key={u.unitId} className="unit-row" onClick={() => setView({ name: 'drill', unitId: u.unitId })}>
                    <span className="unit-title">{unitTitle(u)}</span>
                    <span className="unit-goal">{unitGoal(u)}</span>
                    <span className="unit-meta">
                      {T.unitMetaCount(count)}
                      {acc !== null && T.unitMetaAcc(acc)}
                    </span>
                  </button>
                )
              })}
            </div>
          </section>
        )
      })}

      <section>
        <h2>{T.mockSection}</h2>
        {mockReady ? (
          <button className="mock-entry" onClick={() => setView({ name: 'mock', level })}>
            <span className="unit-title">🎯 {T.mockTitle(LEVEL_LABEL[level])}</span>
            <span className="unit-meta">
              {T.mockEntryMeta}
              {best && T.mockBestSuffix(best.score)}
            </span>
          </button>
        ) : (
          <p className="empty-note">{T.mockLocked}</p>
        )}
      </section>
    </div>
  )
}

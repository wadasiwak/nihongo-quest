/** 級別頁——列出該級已有內容的單元（空單元隱藏），與迷你模擬考入口。 */
import type { Level, Section } from '../../content/types'
import { LEVEL_LABEL, SECTION_LABEL, units } from '../../content/registry'
import { questionsByUnit } from '../../content/jlpt'
import { useProgress } from '../../store/progress'
import { useView } from '../../state'
import './levelhome.css'

const SECTIONS: Section[] = ['vocab', 'grammar', 'reading', 'listening']

export function LevelHome({ level }: { level: Level }) {
  const setView = useView((s) => s.setView)
  const { unitStats, mockBest } = useProgress()

  const levelUnits = units.filter((u) => u.level === level)
  const filled = levelUnits.filter((u) => questionsByUnit[u.unitId]?.length)
  const mockReady = SECTIONS.every((s) => filled.some((u) => u.section === s))
  const best = mockBest[level]

  return (
    <div className="level-home">
      <header className="page-header">
        <button className="back-btn" onClick={() => setView({ name: 'home' })}>← 首頁</button>
        <h1>{LEVEL_LABEL[level]} 練習</h1>
      </header>

      {filled.length === 0 && <p className="empty-note">此級內容準備中，敬請期待。</p>}

      {SECTIONS.map((section) => {
        const sectionUnits = filled.filter((u) => u.section === section)
        if (sectionUnits.length === 0) return null
        return (
          <section key={section}>
            <h2>{SECTION_LABEL[section]}</h2>
            <div className="unit-list">
              {sectionUnits.map((u) => {
                const qs = questionsByUnit[u.unitId]
                const count = qs.reduce((n, q) => n + (q.kind === 'passage' ? q.questions.length : 1), 0)
                const stat = unitStats[u.unitId]
                const acc = stat && stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : null
                return (
                  <button key={u.unitId} className="unit-row" onClick={() => setView({ name: 'drill', unitId: u.unitId })}>
                    <span className="unit-title">{u.title}</span>
                    <span className="unit-goal">{u.goal}</span>
                    <span className="unit-meta">
                      {count} 題{acc !== null && `・正確率 ${acc}%`}
                    </span>
                  </button>
                )
              })}
            </div>
          </section>
        )
      })}

      <section>
        <h2>模擬考</h2>
        {mockReady ? (
          <button className="mock-entry" onClick={() => setView({ name: 'mock', level })}>
            <span className="unit-title">🎯 {LEVEL_LABEL[level]} 迷你模擬考</span>
            <span className="unit-meta">
              照官方配分縮編・計時作答・估分僅供參考{best && `｜最佳 ${best.score}/180`}
            </span>
          </button>
        ) : (
          <p className="empty-note">四科內容齊全後開放模擬考。</p>
        )}
      </section>
    </div>
  )
}

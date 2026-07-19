/** 級別頁——列出該級已有內容的單元（空單元隱藏），與考前衝刺、迷你模擬考入口。 */
import { useMemo } from 'react'
import type { Level, Section } from '../../content/types'
import { LEVEL_LABEL, SECTION_LABEL, units } from '../../content/registry'
import { questionsByUnit } from '../../content/jlpt'
import { allItems, sprintWeakUnitIds, SPRINT_SIZE } from '../../lib/session'
import { useProgress } from '../../store/progress'
import { useView } from '../../state'
import { sectionLabel, unitGoal, unitTitle, useT } from '../../lib/i18n'
import { ResumeBanner } from '../common/ResumeBanner'
import './levelhome.css'

const SECTIONS: Section[] = ['vocab', 'grammar', 'reading', 'listening']

export function LevelHome({ level }: { level: Level }) {
  const setView = useView((s) => s.setView)
  const { unitStats, mockBest, wrong, sprintLast } = useProgress()
  const T = useT()

  const levelUnits = units.filter((u) => u.level === level)
  const filled = levelUnits.filter((u) => questionsByUnit[u.unitId]?.length)
  const mockReady = SECTIONS.every((s) => filled.some((u) => u.section === s))
  const best = mockBest[level]

  // 衝刺入口卡素材：本級未克服錯題數＋弱點單元數（與 sprintPlan 同一套判定）
  const levelQuestionIds = useMemo(
    () =>
      new Set(
        allItems(questionsByUnit)
          .filter((it) => it.unitId.startsWith(`${level}-`))
          .map((it) => it.question.id),
      ),
    [level],
  )
  const sprintWrongCount = Object.entries(wrong).filter(
    ([id, e]) => !e.cleared && levelQuestionIds.has(id),
  ).length
  const sprintWeakCount = sprintWeakUnitIds(level, unitStats, questionsByUnit).length
  const lastSprint = sprintLast[level]

  return (
    <div className="level-home">
      <header className="page-header">
        <button className="back-btn" onClick={() => setView({ name: 'home' })}>{T.backHome}</button>
        <h1>{T.levelPractice(LEVEL_LABEL[level])}</h1>
      </header>

      <ResumeBanner level={level} />

      {filled.length === 0 && <p className="empty-note">{T.levelEmpty}</p>}

      {filled.length > 0 && (
        <section>
          <h2>{T.sprintSection}</h2>
          <button className="mock-entry sprint-entry" onClick={() => setView({ name: 'sprint', level })}>
            <span className="unit-title">🔥 {T.sprintTitle(LEVEL_LABEL[level])}</span>
            <span className="unit-meta">
              {sprintWrongCount > 0 || sprintWeakCount > 0
                ? T.sprintEntryMeta(sprintWrongCount, sprintWeakCount, SPRINT_SIZE)
                : T.sprintEntryCold(SPRINT_SIZE)}
              {lastSprint && T.sprintLastSuffix(lastSprint.score, lastSprint.total)}
            </span>
          </button>
        </section>
      )}

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

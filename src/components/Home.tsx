/** 首頁——只顯示已有內容的單元/場景/卡片（骨架先行、內容漸進）。 */
import { useState } from 'react'
import { LEVELS, LEVEL_LABEL, units, KAIWA_SCENE_IDS } from '../content/registry'
import { questionsByUnit } from '../content/jlpt'
import { scenes } from '../content/kaiwa'
import { cardsByLevel } from '../content/cards'
import { useProgress, dailyStreak, dueWrongIds } from '../store/progress'
import { useView } from '../state'
import { todayKey } from '../lib/rng'
import { sceneTitle, useLang, useT } from '../lib/i18n'
import { SettingsPanel } from './common/SettingsPanel'
import { ResumeBanner } from './common/ResumeBanner'
import './home.css'

export function Home() {
  const setView = useView((s) => s.setView)
  const { dailyDone, wrong } = useProgress()
  const [showSettings, setShowSettings] = useState(false)
  const T = useT()
  const lang = useLang((s) => s.lang)
  const setLang = useLang((s) => s.setLang)

  const today = todayKey()
  const doneToday = dailyDone[today]
  const streak = dailyStreak(dailyDone)
  const dueWrong = dueWrongIds(wrong).length
  const hasAnyContent = Object.keys(questionsByUnit).length > 0
  const cardLevels = LEVELS.filter((l) => cardsByLevel[l]?.length)

  return (
    <div className="home">
      <header className="home-header">
        <button
          type="button"
          className="lang-btn"
          aria-label={lang === 'en' ? '切換為中文介面' : 'Switch to English'}
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
        >
          {lang === 'en' ? '中文' : 'EN'}
        </button>
        <h1>{T.appTitle}</h1>
        <p className="home-sub">{T.appSub}</p>
      </header>

      <ResumeBanner />

      {hasAnyContent && (
        <button className="daily-banner" onClick={() => setView({ name: 'daily' })}>
          <span className="daily-icon">📅</span>
          <span className="daily-text">
            {doneToday ? T.dailyDoneBanner(doneToday.score, doneToday.total) : T.dailyPrompt}
          </span>
          {streak > 0 && <span className="daily-streak">{T.streakDays(streak)}</span>}
        </button>
      )}

      <section>
        <h2>{T.jlptSection}</h2>
        <div className="level-grid">
          {LEVELS.map((level) => {
            const levelUnits = units.filter((u) => u.level === level)
            const filled = levelUnits.filter((u) => questionsByUnit[u.unitId]?.length)
            const count = filled.reduce((sum, u) => {
              const qs = questionsByUnit[u.unitId]
              return sum + qs.reduce((n, q) => n + (q.kind === 'passage' ? q.questions.length : 1), 0)
            }, 0)
            const empty = filled.length === 0
            return (
              <button
                key={level}
                className={`level-card${empty ? ' level-card--empty' : ''}`}
                disabled={empty}
                onClick={() => setView({ name: 'level', level })}
              >
                <span className="level-name">{LEVEL_LABEL[level]}</span>
                <span className="level-meta">
                  {empty ? T.contentPreparing : T.levelMeta(count, filled.length, levelUnits.length)}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {scenes.length > 0 && (
        <section>
          <h2>{T.kaiwaSection}</h2>
          <div className="entry-grid">
            <button className="entry-card" onClick={() => setView({ name: 'kaiwa' })}>
              <span className="entry-icon">🗾</span>
              <span className="entry-title">{T.kaiwaEntry}</span>
              <span className="entry-meta">
                {T.kaiwaEntryMeta(
                  scenes.filter((s) => s.category === 'tourism').length,
                  KAIWA_SCENE_IDS.tourism.length,
                  scenes.filter((s) => s.category === 'business').length,
                  KAIWA_SCENE_IDS.business.length,
                )}
              </span>
            </button>
          </div>
          {/* 場景直達 chip——觀光/商務兩組，點了直接進場景（#kaiwa/<scene>） */}
          <div className="kaiwa-chip-groups">
            {(['tourism', 'business'] as const).map((cat) => {
              const group = scenes.filter((s) => s.category === cat)
              if (group.length === 0) return null
              return (
                <div key={cat} className="kaiwa-chip-group">
                  <span className="kaiwa-chip-label">
                    {cat === 'tourism' ? T.catTourism : T.catBusiness}
                  </span>
                  <div className="kaiwa-chips">
                    {group.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        className="kaiwa-chip"
                        onClick={() => setView({ name: 'scene', sceneId: s.id })}
                      >
                        <span aria-hidden="true">{s.icon}</span> {sceneTitle(s.title, s.titleJa)}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {(cardLevels.length > 0 || hasAnyContent) && (
        <section>
          <h2>{T.reviewSection}</h2>
          <div className="entry-grid">
            {cardLevels.length > 0 && (
              <button className="entry-card" onClick={() => setView({ name: 'cards', level: cardLevels[0] })}>
                <span className="entry-icon">🃏</span>
                <span className="entry-title">{T.cardsEntry}</span>
                <span className="entry-meta">
                  {T.cardsEntryMeta(cardLevels.map((l) => LEVEL_LABEL[l]).join('・'))}
                </span>
              </button>
            )}
            <button className="entry-card" onClick={() => setView({ name: 'wrong' })}>
              <span className="entry-icon">📕</span>
              <span className="entry-title">{T.wrongEntry}</span>
              <span className="entry-meta">{dueWrong > 0 ? T.wrongEntryDue(dueWrong) : T.wrongEntryEmpty}</span>
            </button>
            <button className="entry-card" onClick={() => setView({ name: 'stats' })}>
              <span className="entry-icon">📊</span>
              <span className="entry-title">{T.statsEntry}</span>
              <span className="entry-meta">{T.statsEntryMeta}</span>
            </button>
          </div>
        </section>
      )}

      <footer className="home-footer">
        <button className="link-btn" onClick={() => setShowSettings((v) => !v)}>
          {T.settingsBtn}
          {showSettings ? T.settingsCollapse : ''}
        </button>
        {showSettings && <SettingsPanel />}
        <p className="fine-print">{T.finePrint}</p>
        <p className="fine-print">© 2026 wadasiwak. All rights reserved.</p>
      </footer>
    </div>
  )
}

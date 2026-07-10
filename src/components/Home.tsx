/** 首頁——只顯示已有內容的單元/場景/卡片（骨架先行、內容漸進）。 */
import { useState } from 'react'
import { LEVELS, LEVEL_LABEL, units, KAIWA_SCENE_IDS } from '../content/registry'
import { questionsByUnit } from '../content/jlpt'
import { scenes } from '../content/kaiwa'
import { cardsByLevel } from '../content/cards'
import { useProgress, dailyStreak, dueWrongIds } from '../store/progress'
import { useView } from '../state'
import { todayKey } from '../lib/rng'
import { SettingsPanel } from './common/SettingsPanel'
import './home.css'

export function Home() {
  const setView = useView((s) => s.setView)
  const { dailyDone, wrong } = useProgress()
  const [showSettings, setShowSettings] = useState(false)

  const today = todayKey()
  const doneToday = dailyDone[today]
  const streak = dailyStreak(dailyDone)
  const dueWrong = dueWrongIds(wrong).length
  const hasAnyContent = Object.keys(questionsByUnit).length > 0
  const cardLevels = LEVELS.filter((l) => cardsByLevel[l]?.length)

  return (
    <div className="home">
      <header className="home-header">
        <h1>日語道場</h1>
        <p className="home-sub">JLPT N5～N1 原創練習題・觀光與商務情境會話</p>
      </header>

      {hasAnyContent && (
        <button className="daily-banner" onClick={() => setView({ name: 'daily' })}>
          <span className="daily-icon">📅</span>
          <span className="daily-text">
            {doneToday
              ? `今日一練完成 ${doneToday.score}/${doneToday.total}`
              : '每日一練——全球同一天、同一組題'}
          </span>
          {streak > 0 && <span className="daily-streak">🔥 {streak} 天</span>}
        </button>
      )}

      <section>
        <h2>JLPT 級別練習</h2>
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
                  {empty ? '內容準備中' : `${count} 題・${filled.length}/${levelUnits.length} 題型`}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {scenes.length > 0 && (
        <section>
          <h2>情境會話</h2>
          <div className="entry-grid">
            <button className="entry-card" onClick={() => setView({ name: 'kaiwa' })}>
              <span className="entry-icon">🗾</span>
              <span className="entry-title">觀光・商務會話</span>
              <span className="entry-meta">
                {scenes.filter((s) => s.category === 'tourism').length}/{KAIWA_SCENE_IDS.tourism.length} 觀光・
                {scenes.filter((s) => s.category === 'business').length}/{KAIWA_SCENE_IDS.business.length} 商務
              </span>
            </button>
          </div>
        </section>
      )}

      {(cardLevels.length > 0 || hasAnyContent) && (
        <section>
          <h2>複習工具</h2>
          <div className="entry-grid">
            {cardLevels.length > 0 && (
              <button className="entry-card" onClick={() => setView({ name: 'cards', level: cardLevels[0] })}>
                <span className="entry-icon">🃏</span>
                <span className="entry-title">單字卡</span>
                <span className="entry-meta">間隔複習 {cardLevels.map((l) => LEVEL_LABEL[l]).join('・')}</span>
              </button>
            )}
            <button className="entry-card" onClick={() => setView({ name: 'wrong' })}>
              <span className="entry-icon">📕</span>
              <span className="entry-title">錯題本</span>
              <span className="entry-meta">{dueWrong > 0 ? `今日到期 ${dueWrong} 題` : '答錯自動收錄'}</span>
            </button>
            <button className="entry-card" onClick={() => setView({ name: 'stats' })}>
              <span className="entry-icon">📊</span>
              <span className="entry-title">弱點統計</span>
              <span className="entry-meta">找出最需要加強的題型</span>
            </button>
          </div>
        </section>
      )}

      <footer className="home-footer">
        <button className="link-btn" onClick={() => setShowSettings((v) => !v)}>
          ⚙ 設定{showSettings ? '（收合）' : ''}
        </button>
        {showSettings && <SettingsPanel />}
        <p className="fine-print">
          本站為個人學習輔助工具，與 JLPT 主辦單位無關；題目皆為原創、模擬考估分僅供參考。
        </p>
        <p className="fine-print">© 2026 wadasiwak. All rights reserved.</p>
      </footer>
    </div>
  )
}

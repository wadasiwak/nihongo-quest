/**
 * 跨 session 進度 store——zustand persist + partialize（world-quest 模式）。
 * 全部欄位綁「穩定內容 id」，重產內容不壞進度；key 帶版本 nihongo-quest-save-v1。
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Level } from '../content/types'
import type { Rating, SrsEntry } from '../lib/srs'
import { addDays, newEntry, review } from '../lib/srs'
import { todayKey } from '../lib/rng'

export interface WrongEntry {
  count: number
  lastWrongAt: string
  /** 下次到期日（錯後 1/3/7 天重現） */
  nextDue: string
  /** 連續答對次數；≥2 視為已克服 */
  streak: number
  cleared: boolean
}

export interface Settings {
  /** null = 依級別預設 */
  ttsRate: number | null
  showFurigana: boolean
  showTranslation: boolean
}

interface ProgressState {
  wrong: Record<string, WrongEntry>
  unitStats: Record<string, { attempted: number; correct: number }>
  mockBest: Partial<Record<Level, { score: number; date: string }>>
  dailyDone: Record<string, { score: number; total: number }>
  srs: Record<string, SrsEntry>
  settings: Settings

  recordAnswer: (unitId: string, questionId: string, correct: boolean) => void
  recordMock: (level: Level, score: number) => void
  recordDaily: (dateKey: string, score: number, total: number) => void
  rateCard: (cardId: string, rating: Rating) => void
  updateSettings: (patch: Partial<Settings>) => void
  importData: (json: string) => boolean
}

const WRONG_STEPS = [1, 3, 7]

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      wrong: {},
      unitStats: {},
      mockBest: {},
      dailyDone: {},
      srs: {},
      settings: { ttsRate: null, showFurigana: true, showTranslation: true },

      recordAnswer: (unitId, questionId, correct) => {
        const today = todayKey()
        const { wrong, unitStats } = get()
        const stat = unitStats[unitId] ?? { attempted: 0, correct: 0 }
        const nextStats = {
          ...unitStats,
          [unitId]: { attempted: stat.attempted + 1, correct: stat.correct + (correct ? 1 : 0) },
        }
        const entry = wrong[questionId]
        let nextWrong = wrong
        if (!correct) {
          nextWrong = {
            ...wrong,
            [questionId]: {
              count: (entry?.count ?? 0) + 1,
              lastWrongAt: today,
              nextDue: addDays(today, WRONG_STEPS[0]),
              streak: 0,
              cleared: false,
            },
          }
        } else if (entry && !entry.cleared) {
          const streak = entry.streak + 1
          nextWrong = {
            ...wrong,
            [questionId]: {
              ...entry,
              streak,
              cleared: streak >= 2,
              nextDue: addDays(today, WRONG_STEPS[Math.min(streak, WRONG_STEPS.length - 1)]),
            },
          }
        }
        set({ unitStats: nextStats, wrong: nextWrong })
      },

      recordMock: (level, score) => {
        const { mockBest } = get()
        const best = mockBest[level]
        if (!best || score > best.score) {
          set({ mockBest: { ...mockBest, [level]: { score, date: todayKey() } } })
        }
      },

      recordDaily: (dateKey, score, total) => {
        const { dailyDone } = get()
        const prev = dailyDone[dateKey]
        if (!prev || score > prev.score) {
          set({ dailyDone: { ...dailyDone, [dateKey]: { score, total } } })
        }
      },

      rateCard: (cardId, rating) => {
        const today = todayKey()
        const { srs } = get()
        const entry = srs[cardId] ?? newEntry(today)
        set({ srs: { ...srs, [cardId]: review(entry, rating, today) } })
      },

      updateSettings: (patch) => set({ settings: { ...get().settings, ...patch } }),

      importData: (json) => {
        try {
          const data = JSON.parse(json)
          if (typeof data !== 'object' || data === null || data.__app !== 'nihongo-quest') return false
          set({
            wrong: data.wrong ?? {},
            unitStats: data.unitStats ?? {},
            mockBest: data.mockBest ?? {},
            dailyDone: data.dailyDone ?? {},
            srs: data.srs ?? {},
            settings: { ...get().settings, ...(data.settings ?? {}) },
          })
          return true
        } catch {
          return false
        }
      },
    }),
    {
      name: 'nihongo-quest-save-v1',
      version: 1,
      partialize: (s) => ({
        wrong: s.wrong,
        unitStats: s.unitStats,
        mockBest: s.mockBest,
        dailyDone: s.dailyDone,
        srs: s.srs,
        settings: s.settings,
      }),
    },
  ),
)

/** 匯出備份 JSON（SettingsPanel 用） */
export function exportData(): string {
  const s = useProgress.getState()
  return JSON.stringify(
    {
      __app: 'nihongo-quest',
      exportedAt: todayKey(),
      wrong: s.wrong,
      unitStats: s.unitStats,
      mockBest: s.mockBest,
      dailyDone: s.dailyDone,
      srs: s.srs,
      settings: s.settings,
    },
    null,
    2,
  )
}

/** 今日到期的錯題 id（未 cleared 且 nextDue ≤ 今天） */
export function dueWrongIds(wrong: Record<string, WrongEntry>): string[] {
  const today = todayKey()
  return Object.entries(wrong)
    .filter(([, e]) => !e.cleared && e.nextDue <= today)
    .map(([id]) => id)
}

/** 連續打卡天數（由 dailyDone key 往回推） */
export function dailyStreak(dailyDone: Record<string, { score: number; total: number }>): number {
  let streak = 0
  let day = todayKey()
  if (!dailyDone[day]) day = addDays(day, -1) // 今天還沒玩，從昨天起算
  while (dailyDone[day]) {
    streak += 1
    day = addDays(day, -1)
  }
  return streak
}

/**
 * SessionPlan 組卷——drill / review / daily / kaiwa 共用（mock 在 score.ts）。
 * 題組（PassageSet）攤平成連續小題、共享 passage 引用；引擎只看 SessionItem。
 */
import type { ChoiceQuestion, JlptQuestion, Level, ListeningQuestion, OrderQuestion } from '../content/types'
import { unitById } from '../content/registry'
import { t, unitTitle } from './i18n'
import { seededShuffle } from './rng'

export type LeafQuestion = ChoiceQuestion | OrderQuestion | ListeningQuestion

export interface PassageRef {
  id: string
  title?: string
  text: string
}

export interface SessionItem {
  /** 來源單元 id（kaiwa drill 用 sceneId） */
  unitId: string
  question: LeafQuestion
  /** 題組小題共享同一個 PassageRef（=== 比對可判同組） */
  passage?: PassageRef
}

export type SessionMode = 'drill' | 'mock' | 'review' | 'daily' | 'kaiwa'

export interface SessionPlan {
  mode: SessionMode
  title: string
  items: SessionItem[]
  /** mock 才有 */
  timeLimitSec?: number
}

/** 每題作答紀錄（含顯示 permutation——回顧高亮與中斷續做還原都靠它） */
export interface ItemRecord {
  questionId: string
  correct: boolean
  /** choice/listening：顯示 permutation（display 位置 → 原始選項 index） */
  order?: number[]
  /** choice/listening：使用者選的顯示位置 */
  chosenDisplay?: number
  /** order 題：使用者排入的片段原始 index 序列 */
  arranged?: number[]
}

/**
 * 中斷續做快照——存「題目 id 列表」精確重建卷面
 * （不存 seed：抽題/洗牌邏輯改版也不會壞掉舊快照）。
 */
export interface PendingSession {
  kind: 'mock' | 'drill'
  level: Level
  /** drill 快照的來源單元 */
  unitId?: string
  /** 卷面題目 id（順序＝卷面順序） */
  questionIds: string[]
  records: (ItemRecord | null)[]
  idx: number
  timeLimitSec?: number
  /** mock：快照當下的剩餘秒數（續做時從這裡凍結繼續） */
  secondsLeft?: number
  /** 快照時刻（ISO） */
  savedAt: string
}

/** 由快照重建 SessionPlan；題目已下架或紀錄對不上 → null（快照作廢） */
export function rebuildPendingPlan(
  snap: PendingSession,
  questionsByUnit: Record<string, JlptQuestion[]>,
): SessionPlan | null {
  if (!Array.isArray(snap.questionIds) || snap.questionIds.length === 0) return null
  if (!Array.isArray(snap.records) || snap.records.length !== snap.questionIds.length) return null
  if (!Number.isInteger(snap.idx) || snap.idx < 0 || snap.idx >= snap.questionIds.length) return null
  const index = itemIndex(questionsByUnit)
  const items: SessionItem[] = []
  for (let i = 0; i < snap.questionIds.length; i++) {
    const item = index.get(snap.questionIds[i])
    if (!item) return null
    const rec = snap.records[i]
    if (rec && rec.questionId !== snap.questionIds[i]) return null
    items.push(item)
  }
  if (snap.kind === 'mock') {
    return { mode: 'mock', title: t().mockPlanTitle(snap.level.toUpperCase()), items, timeLimitSec: snap.timeLimitSec }
  }
  const unit = snap.unitId ? unitById[snap.unitId] : undefined
  if (!unit) return null
  return { mode: 'drill', title: `${unit.level.toUpperCase()}・${unitTitle(unit)}`, items }
}

/** Fisher–Yates（非 seed 版）：drill/kaiwa 每次進入洗一次題序 */
export function shuffleArray<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** 題組攤平：小題轉成 choice leaf、掛 passage 引用 */
export function flattenUnit(unitId: string, questions: JlptQuestion[]): SessionItem[] {
  const items: SessionItem[] = []
  for (const q of questions) {
    if (q.kind === 'passage') {
      const ref: PassageRef = { id: q.id, title: q.passageTitle, text: q.passage }
      for (const sub of q.questions) {
        items.push({
          unitId,
          passage: ref,
          question: {
            kind: 'choice',
            id: sub.id,
            stem: sub.stem,
            options: sub.options,
            answerIndex: sub.answerIndex,
            explanation: sub.explanation,
            explanationEn: sub.explanationEn,
          },
        })
      }
    } else {
      items.push({ unitId, question: q })
    }
  }
  return items
}

/** 全站 leaf 題目（unitId 排序後攤平——daily seed 的確定性不依賴 import 順序） */
export function allItems(questionsByUnit: Record<string, JlptQuestion[]>): SessionItem[] {
  return Object.keys(questionsByUnit)
    .sort()
    .flatMap((unitId) => flattenUnit(unitId, questionsByUnit[unitId]))
}

/** leaf 題目 id → SessionItem（錯題本重組卷用） */
export function itemIndex(questionsByUnit: Record<string, JlptQuestion[]>): Map<string, SessionItem> {
  const map = new Map<string, SessionItem>()
  for (const item of allItems(questionsByUnit)) map.set(item.question.id, item)
  return map
}

export function drillPlan(unitId: string, questionsByUnit: Record<string, JlptQuestion[]>): SessionPlan | null {
  const unit = unitById[unitId]
  const questions = questionsByUnit[unitId]
  if (!unit || !questions?.length) return null
  return {
    mode: 'drill',
    title: `${unit.level.toUpperCase()}・${unitTitle(unit)}`,
    // 每次進入洗一次頂層題序（題組整塊移動、小題順序不變），回應「每次題目都一樣」
    items: flattenUnit(unitId, shuffleArray(questions)),
  }
}

export const DAILY_SIZE = 10

/** 每日一練：日期 seed，全球同天同題（pool 先按 id 排序再 shuffle） */
export function dailyPlan(questionsByUnit: Record<string, JlptQuestion[]>, dateKey: string): SessionPlan | null {
  const pool = allItems(questionsByUnit)
  if (pool.length === 0) return null
  pool.sort((a, b) => a.question.id.localeCompare(b.question.id))
  const items = seededShuffle(pool, `daily-${dateKey}`).slice(0, DAILY_SIZE)
  return { mode: 'daily', title: t().dailyPlanTitle(dateKey), items }
}

/** 錯題本重刷：由到期錯題 id 組卷（上限 20 題） */
export function reviewPlan(dueIds: string[], questionsByUnit: Record<string, JlptQuestion[]>): SessionPlan | null {
  const index = itemIndex(questionsByUnit)
  const items = dueIds.map((id) => index.get(id)).filter((x): x is SessionItem => Boolean(x)).slice(0, 20)
  if (items.length === 0) return null
  return { mode: 'review', title: t().reviewPlanTitle(items.length), items }
}

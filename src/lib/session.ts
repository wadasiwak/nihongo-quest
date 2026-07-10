/**
 * SessionPlan 組卷——drill / review / daily / kaiwa 共用（mock 在 score.ts）。
 * 題組（PassageSet）攤平成連續小題、共享 passage 引用；引擎只看 SessionItem。
 */
import type { ChoiceQuestion, JlptQuestion, ListeningQuestion, OrderQuestion } from '../content/types'
import { unitById } from '../content/registry'
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
    title: `${unit.level.toUpperCase()}・${unit.title}`,
    items: flattenUnit(unitId, questions),
  }
}

export const DAILY_SIZE = 10

/** 每日一練：日期 seed，全球同天同題（pool 先按 id 排序再 shuffle） */
export function dailyPlan(questionsByUnit: Record<string, JlptQuestion[]>, dateKey: string): SessionPlan | null {
  const pool = allItems(questionsByUnit)
  if (pool.length === 0) return null
  pool.sort((a, b) => a.question.id.localeCompare(b.question.id))
  const items = seededShuffle(pool, `daily-${dateKey}`).slice(0, DAILY_SIZE)
  return { mode: 'daily', title: `每日一練 ${dateKey}`, items }
}

/** 錯題本重刷：由到期錯題 id 組卷（上限 20 題） */
export function reviewPlan(dueIds: string[], questionsByUnit: Record<string, JlptQuestion[]>): SessionPlan | null {
  const index = itemIndex(questionsByUnit)
  const items = dueIds.map((id) => index.get(id)).filter((x): x is SessionItem => Boolean(x)).slice(0, 20)
  if (items.length === 0) return null
  return { mode: 'review', title: `錯題重刷（${items.length} 題）`, items }
}

/**
 * 迷你模擬考組卷與估分。
 * 配分結構照官方：N1~N3 三科各 0~60；N4/N5「言語知識・読解」合併 0~120＋聽解 0~60。
 * 合格線（總分/單科下限）照官方公開值；本站題數是縮編版，估分按答對率
 * 線性換算——僅供參考，UI 必須標注。
 */
import { t } from './i18n'
import type { JlptQuestion, Level, Section, UnitSlug } from '../content/types'
import { units } from '../content/registry'
import type { SessionItem, SessionPlan } from './session'
import { flattenUnit } from './session'

/** 各題型抽題配額（縮編自官方題數比例） */
const MOCK_QUOTA: Record<UnitSlug, number> = {
  kanji: 5, hyoki: 4, gokeisei: 3, bunmyaku: 5, iikae: 4, yoho: 4,
  keishiki: 6, narabekae: 4, bunsho: 4,
  tanbun: 3, chubun: 3, chobun: 3, togo: 2, shucho: 3, joho: 2,
  kadai: 4, pointo: 4, gaiyo: 3, hatsuwa: 3, sokuji: 5,
}

/** 每題作答秒數預算（依科目） */
const SEC_PER_ITEM: Record<Section, number> = { vocab: 40, grammar: 70, reading: 140, listening: 75 }

/** 官方合格線 */
const PASS_LINE: Record<Level, number> = { n1: 100, n2: 90, n3: 95, n4: 90, n5: 80 }

function shuffleInPlace<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * 組一份迷你模擬考。該級某科完全沒內容 → 回 null（等內容補齊才開放）。
 * 題組單元抽「整組」維持文章＋小題完整；其他單元隨機抽 quota 題。
 */
export function mockPlan(level: Level, questionsByUnit: Record<string, JlptQuestion[]>): SessionPlan | null {
  const levelUnits = units.filter((u) => u.level === level)
  const sections: Section[] = ['vocab', 'grammar', 'reading', 'listening']
  for (const s of sections) {
    if (!levelUnits.some((u) => u.section === s && questionsByUnit[u.unitId]?.length)) return null
  }
  const items: SessionItem[] = []
  let timeLimitSec = 0
  for (const unit of levelUnits) {
    const questions = questionsByUnit[unit.unitId]
    if (!questions?.length) continue
    const quota = unit.section === 'listening' && unit.slug === 'togo' ? 2 : MOCK_QUOTA[unit.slug]
    let picked: SessionItem[]
    if (unit.kind === 'passage') {
      picked = []
      for (const set of shuffleInPlace([...questions])) {
        if (picked.length >= quota) break
        picked.push(...flattenUnit(unit.unitId, [set]))
      }
    } else {
      picked = shuffleInPlace(flattenUnit(unit.unitId, [...questions])).slice(0, quota)
    }
    items.push(...picked)
    timeLimitSec += picked.length * SEC_PER_ITEM[unit.section]
  }
  if (items.length === 0) return null
  return { mode: 'mock', title: t().mockPlanTitle(level.toUpperCase()), items, timeLimitSec }
}

export interface MockSection {
  label: string
  correct: number
  total: number
  /** 換算後得分 */
  score: number
  max: number
  /** 單科下限 */
  passLine: number
}

export interface MockResultSummary {
  sections: MockSection[]
  total: number
  totalMax: 180
  passLineTotal: number
  pass: boolean
}

/** 依作答結果估分（answers: 題目 id → 是否答對；items 提供 section 歸屬） */
export function scoreMock(
  level: Level,
  items: SessionItem[],
  correctIds: Set<string>,
): MockResultSummary {
  const bySection: Record<Section, { correct: number; total: number }> = {
    vocab: { correct: 0, total: 0 },
    grammar: { correct: 0, total: 0 },
    reading: { correct: 0, total: 0 },
    listening: { correct: 0, total: 0 },
  }
  for (const item of items) {
    const unit = units.find((u) => u.unitId === item.unitId)
    if (!unit) continue
    bySection[unit.section].total += 1
    if (correctIds.has(item.question.id)) bySection[unit.section].correct += 1
  }
  const ratio = (s: { correct: number; total: number }) => (s.total === 0 ? 0 : s.correct / s.total)
  const combineLang = level === 'n4' || level === 'n5'
  const sections: MockSection[] = []
  if (combineLang) {
    const lang = {
      correct: bySection.vocab.correct + bySection.grammar.correct + bySection.reading.correct,
      total: bySection.vocab.total + bySection.grammar.total + bySection.reading.total,
    }
    sections.push({ label: '言語知識・読解', ...lang, score: Math.round(ratio(lang) * 120), max: 120, passLine: 38 })
  } else {
    const lang = {
      correct: bySection.vocab.correct + bySection.grammar.correct,
      total: bySection.vocab.total + bySection.grammar.total,
    }
    sections.push({ label: '言語知識（文字・語彙・文法）', ...lang, score: Math.round(ratio(lang) * 60), max: 60, passLine: 19 })
    sections.push({ label: '読解', ...bySection.reading, score: Math.round(ratio(bySection.reading) * 60), max: 60, passLine: 19 })
  }
  sections.push({ label: '聴解', ...bySection.listening, score: Math.round(ratio(bySection.listening) * 60), max: 60, passLine: 19 })
  const total = sections.reduce((sum, s) => sum + s.score, 0)
  const pass = total >= PASS_LINE[level] && sections.every((s) => s.score >= s.passLine)
  return { sections, total, totalMax: 180, passLineTotal: PASS_LINE[level], pass }
}

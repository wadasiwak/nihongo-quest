/**
 * View state + URL hash 同步（qianshi 模式）。
 * hash 格式：#n3 / #n3/vocab-kanji / #n3/mock / #kaiwa / #kaiwa/tour-airport /
 *           #cards/n5 / #wrong / #stats / #daily
 * hashToView 嚴格驗證：level 枚舉、unitId 查 registry、sceneId 查內容索引，不合法一律回 home。
 */
import { create } from 'zustand'
import type { Level } from './content/types'
import { LEVELS, unitById } from './content/registry'
import { sceneById } from './content/kaiwa'

export type View =
  | { name: 'home' }
  | { name: 'level'; level: Level }
  | { name: 'drill'; unitId: string }
  | { name: 'mock'; level: Level }
  | { name: 'kaiwa' }
  | { name: 'scene'; sceneId: string }
  | { name: 'cards'; level: Level }
  | { name: 'wrong' }
  | { name: 'stats' }
  | { name: 'daily' }

export function viewToHash(v: View): string {
  switch (v.name) {
    case 'home': return ''
    case 'level': return `#${v.level}`
    case 'drill': {
      const u = unitById[v.unitId]
      return u ? `#${u.level}/${u.section}-${u.slug}` : ''
    }
    case 'mock': return `#${v.level}/mock`
    case 'kaiwa': return '#kaiwa'
    case 'scene': return `#kaiwa/${v.sceneId}`
    case 'cards': return `#cards/${v.level}`
    case 'wrong': return '#wrong'
    case 'stats': return '#stats'
    case 'daily': return '#daily'
  }
}

const isLevel = (s: string): s is Level => (LEVELS as string[]).includes(s)

export function hashToView(hash: string): View {
  const h = hash.replace(/^#/, '')
  if (!h) return { name: 'home' }
  const parts = h.split('/')
  if (parts.length === 1) {
    const [p] = parts
    if (isLevel(p)) return { name: 'level', level: p }
    if (p === 'kaiwa') return { name: 'kaiwa' }
    if (p === 'wrong') return { name: 'wrong' }
    if (p === 'stats') return { name: 'stats' }
    if (p === 'daily') return { name: 'daily' }
  } else if (parts.length === 2) {
    const [a, b] = parts
    if (a === 'kaiwa' && sceneById[b]) return { name: 'scene', sceneId: b }
    if (a === 'cards' && isLevel(b)) return { name: 'cards', level: b }
    if (isLevel(a) && b === 'mock') return { name: 'mock', level: a }
    if (isLevel(a) && unitById[`${a}-${b}`]) return { name: 'drill', unitId: `${a}-${b}` }
  }
  return { name: 'home' }
}

interface UiState {
  view: View
  setView: (view: View) => void
}

export const useView = create<UiState>((set) => ({
  view: hashToView(window.location.hash),
  setView: (view) => {
    set({ view })
    const h = viewToHash(view)
    // push（非 replace）讓瀏覽器返回鍵可以一路退回上一頁
    if (h !== window.location.hash) {
      history.pushState(null, '', h || window.location.pathname + window.location.search)
    }
  },
}))

const syncFromLocation = () => {
  useView.setState({ view: hashToView(window.location.hash) })
}
window.addEventListener('hashchange', syncFromLocation)
window.addEventListener('popstate', syncFromLocation)

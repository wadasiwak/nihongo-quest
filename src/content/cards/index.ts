/// <reference types="vite/client" />
/** 單字卡匯總——`n5.ts`~`n1.ts` 落地自動收錄。 */
import type { Level, VocabCard } from '../types'

const modules = import.meta.glob<{ cards: VocabCard[] }>('./n*.ts', { eager: true })

export const cardsByLevel: Partial<Record<Level, VocabCard[]>> = {}
for (const [file, mod] of Object.entries(modules)) {
  const level = file.match(/(n[1-5])\.ts$/)?.[1] as Level | undefined
  if (level && Array.isArray(mod.cards) && mod.cards.length > 0) {
    cardsByLevel[level] = mod.cards
  }
}

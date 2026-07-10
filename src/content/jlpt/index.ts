/// <reference types="vite/client" />
/**
 * JLPT 題庫匯總——import.meta.glob 自動收錄 `${level}/${section}-${slug}.ts`，
 * 內容檔落地即自動出現，無需改本檔（骨架先行、內容漸進）。
 */
import type { JlptQuestion } from '../types'

const modules = import.meta.glob<{ questions: JlptQuestion[] }>('./n*/*.ts', { eager: true })

export const questionsByUnit: Record<string, JlptQuestion[]> = {}
for (const [file, mod] of Object.entries(modules)) {
  const m = file.match(/^\.\/(n[1-5])\/([a-z]+)-([a-z]+)\.ts$/)
  if (m && Array.isArray(mod.questions) && mod.questions.length > 0) {
    questionsByUnit[`${m[1]}-${m[2]}-${m[3]}`] = mod.questions
  }
}

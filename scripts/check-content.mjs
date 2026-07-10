#!/usr/bin/env node
/**
 * 內容驗證器。
 *   node scripts/check-content.mjs            # 全量（CI gate）
 *   node scripts/check-content.mjs <檔路徑>    # 單檔（內容 agent 交付前自驗）
 *
 * 分 ERROR（exit 1）/ WARN 兩級；末尾印各級×各科題數統計。
 * 空單元（無檔或空陣列）＝尚未收錄，跳過不擋（骨架先行、內容漸進）；
 * 1 ≤ 題數 < expectedCount ＝半吊子，ERROR。
 */
import { readFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const errors = []
const warns = []
const err = (file, msg) => errors.push(`${file}: ${msg}`)
const warn = (file, msg) => warns.push(`${file}: ${msg}`)

/** 讀 TS 檔 → 剝型別 → data:URL 動態 import（檔內只允許 type import，無 runtime import） */
async function loadTs(relFile) {
  const src = readFileSync(path.join(ROOT, relFile), 'utf8')
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText
  return import('data:text/javascript;base64,' + Buffer.from(js, 'utf8').toString('base64'))
}

/* ---------- 規則工具 ---------- */
const KANA_ONLY = /^[ぁ-ゖァ-ヺー]+$/u          // 假名欄位（含長音）
const HAS_KANA = /[ぁ-ゖァ-ヺ]/u                // 日文欄位至少要有假名（防貼成中文）
const HAS_CJK = /[㐀-鿿]/u
// 簡體字黑名單：只掃「繁中欄位」（explanation/zh/title/note）。
// 挑選原則：該字形非日文漢字也非繁體（如 学/写/会/据 是日文常用字，不列）。
const SIMPLIFIED =
  /[们说汉这还让过时问题头买卖车东门马鸟电饭馆读课谁气应该认识爱药证组织经济义议记计讲词译试验阶层铁钱为务动网线场报见观觉现实发员边术处优严丽]/u

function checkZhText(file, label, text, { min = 0, max = 250 } = {}) {
  if (typeof text !== 'string' || text.length < min) {
    err(file, `${label} 缺漏或不足 ${min} 字`)
    return
  }
  if (min > 0 && !HAS_CJK.test(text)) err(file, `${label} 不含中文`)
  const hit = text.match(SIMPLIFIED)
  if (hit) err(file, `${label} 含簡體字「${hit[0]}」`)
  if (text.length > max) warn(file, `${label} 超過 ${max} 字（${text.length}）`)
}

function checkOptions(file, qid, options, expected) {
  if (!Array.isArray(options) || options.length !== expected) {
    err(file, `${qid} options 應恰 ${expected} 個`)
    return false
  }
  if (options.some((o) => typeof o !== 'string' || !o.trim())) {
    err(file, `${qid} 有空白選項`)
    return false
  }
  if (new Set(options).size !== options.length) err(file, `${qid} 選項重複`)
  return true
}

function checkAnswerIndex(file, qid, idx, optionCount) {
  if (!Number.isInteger(idx) || idx < 0 || idx >= optionCount) err(file, `${qid} answerIndex 超出範圍`)
  else if (idx !== 0) warn(file, `${qid} answerIndex=${idx}（慣例正解放 0）`)
}

/* ---------- JLPT 題目驗證 ---------- */
const globalIds = new Set()
function registerId(file, id) {
  if (globalIds.has(id)) err(file, `id 重複：${id}`)
  globalIds.add(id)
}

function checkChoice(file, q, unit, idRe) {
  if (!idRe.test(q.id)) err(file, `id 格式錯：${q.id}`)
  registerId(file, q.id)
  if (typeof q.stem !== 'string' || !q.stem.trim()) err(file, `${q.id} stem 空`)
  else {
    // hyoki 的 stem 可為純假名詞、yoho 的 stem 是目標詞本身（可為純漢字詞），不適用此檢查
    if (!HAS_KANA.test(q.stem) && !['hyoki', 'yoho'].includes(unit.slug)) warn(file, `${q.id} stem 無假名，確認是日文？`)
    if (['bunmyaku', 'keishiki', 'gokeisei'].includes(unit.slug) && !q.stem.includes('（　）'))
      err(file, `${q.id} stem 缺挖空記號「（　）」`)
    if (['kanji', 'hyoki', 'iikae'].includes(unit.slug) && !(q.stem.includes('【') && q.stem.includes('】')))
      err(file, `${q.id} stem 缺目標詞記號【】`)
  }
  if (q.stemReading != null && !KANA_ONLY.test(q.stemReading)) err(file, `${q.id} stemReading 非全假名`)
  if (checkOptions(file, q.id, q.options, unit.optionCount)) {
    checkAnswerIndex(file, q.id, q.answerIndex, unit.optionCount)
    if (unit.slug === 'kanji' && q.options.some((o) => !KANA_ONLY.test(o)))
      err(file, `${q.id} 漢字読み選項必須全假名`)
  }
  checkZhText(file, `${q.id} explanation`, q.explanation, { min: 40 })
}

function checkOrder(file, q, unit, idRe) {
  if (!idRe.test(q.id)) err(file, `id 格式錯：${q.id}`)
  registerId(file, q.id)
  if (!Array.isArray(q.segments) || q.segments.length !== 4) err(file, `${q.id} segments 應恰 4 個`)
  else {
    if (q.segments.some((s) => typeof s !== 'string' || !s.trim())) err(file, `${q.id} 有空白片段`)
    if (new Set(q.segments).size !== 4) err(file, `${q.id} 片段重複`)
  }
  if (!Number.isInteger(q.starIndex) || q.starIndex < 0 || q.starIndex > 3) err(file, `${q.id} starIndex 超出範圍`)
  if (typeof q.before !== 'string' || typeof q.after !== 'string') err(file, `${q.id} before/after 缺漏`)
  else if (!q.before.trim() && !q.after.trim()) err(file, `${q.id} before/after 至少一個非空`)
  checkZhText(file, `${q.id} explanation`, q.explanation, { min: 40 })
}

function checkPassage(file, q, unit, idRe) {
  if (!idRe.test(q.id)) err(file, `id 格式錯：${q.id}`)
  registerId(file, q.id)
  if (typeof q.passage !== 'string' || !q.passage.trim()) err(file, `${q.id} passage 空`)
  else {
    if (!HAS_KANA.test(q.passage)) err(file, `${q.id} passage 不像日文（無假名）`)
    if (unit.passageChars) {
      const [lo, hi] = unit.passageChars
      const n = q.passage.length
      if (n < lo || n > hi) err(file, `${q.id} passage ${n} 字，超出 [${lo}, ${hi}]`)
    }
    if (unit.slug === 'togo' && !(q.passage.includes('Ａ') && q.passage.includes('Ｂ')))
      err(file, `${q.id} 統合理解 passage 需含「Ａ」「Ｂ」兩篇標示`)
  }
  if (!Array.isArray(q.questions) || q.questions.length === 0) {
    err(file, `${q.id} 沒有小題`)
    return 0
  }
  if (unit.perSet) {
    const [lo, hi] = unit.perSet
    if (q.questions.length < lo || q.questions.length > hi)
      warn(file, `${q.id} 小題數 ${q.questions.length}，建議 [${lo}, ${hi}]`)
  }
  q.questions.forEach((sub, i) => {
    const want = `${q.id}-q${i + 1}`
    if (sub.id !== want) err(file, `小題 id 應為 ${want}，實為 ${sub.id}`)
    registerId(file, sub.id)
    if (typeof sub.stem !== 'string' || !sub.stem.trim()) err(file, `${sub.id} stem 空`)
    if (unit.slug === 'bunsho' && !/【[１-４1-4]】/u.test(sub.stem))
      err(file, `${sub.id} 文章文法小題 stem 需指向挖空記號【Ｎ】`)
    if (checkOptions(file, sub.id, sub.options, unit.optionCount))
      checkAnswerIndex(file, sub.id, sub.answerIndex, unit.optionCount)
    checkZhText(file, `${sub.id} explanation`, sub.explanation, { min: 40 })
  })
  return q.questions.length
}

function checkListening(file, q, unit, idRe) {
  if (!idRe.test(q.id)) err(file, `id 格式錯：${q.id}`)
  registerId(file, q.id)
  if (!Array.isArray(q.script) || q.script.length === 0) err(file, `${q.id} script 空`)
  else {
    let total = 0
    for (const line of q.script) {
      if (!['男', '女', '旁白'].includes(line.speaker)) err(file, `${q.id} speaker 非法：${line.speaker}`)
      if (typeof line.text !== 'string' || !line.text.trim()) err(file, `${q.id} script 有空行`)
      else {
        if (!HAS_KANA.test(line.text)) err(file, `${q.id} script 不像日文（無假名）：${line.text.slice(0, 20)}`)
        total += line.text.length
      }
    }
    if (total < 20) err(file, `${q.id} script 合計 ${total} 字 < 20`)
    if (q.script.length > 10) warn(file, `${q.id} script ${q.script.length} 行 > 10`)
  }
  const needSpoken = unit.slug === 'hatsuwa' || unit.slug === 'sokuji'
  if (needSpoken && q.spokenOptions !== true) err(file, `${q.id} ${unit.slug} 需 spokenOptions: true`)
  if (!needSpoken && q.spokenOptions) err(file, `${q.id} 此題型不可 spokenOptions`)
  if (unit.slug === 'sokuji') {
    if (q.question !== '') warn(file, `${q.id} 即時応答 question 建議留空字串`)
  } else if (typeof q.question !== 'string' || !q.question.trim()) {
    err(file, `${q.id} question 空`)
  }
  if (checkOptions(file, q.id, q.options, unit.optionCount))
    checkAnswerIndex(file, q.id, q.answerIndex, unit.optionCount)
  checkZhText(file, `${q.id} explanation`, q.explanation, { min: 40 })
}

/** 驗一個 JLPT 單元檔；回傳小題數（passage 展開計） */
function checkUnitQuestions(file, unit, questions) {
  const idRe = new RegExp(`^${unit.unitId}-\\d{3}$`)
  let count = 0
  for (const q of questions) {
    if (q.kind !== unit.kind) {
      err(file, `${q.id ?? '?'} kind=${q.kind}，本單元應為 ${unit.kind}`)
      continue
    }
    if (unit.kind === 'choice') { checkChoice(file, q, unit, idRe); count++ }
    else if (unit.kind === 'order') { checkOrder(file, q, unit, idRe); count++ }
    else if (unit.kind === 'passage') count += checkPassage(file, q, unit, idRe)
    else if (unit.kind === 'listening') { checkListening(file, q, unit, idRe); count++ }
  }
  return count
}

/* ---------- 會話場景驗證 ---------- */
function checkScene(file, scene, expectedId, category) {
  if (scene.id !== expectedId) err(file, `scene id 應為 ${expectedId}，實為 ${scene.id}`)
  if (scene.category !== category) err(file, `category 應為 ${category}`)
  checkZhText(file, 'title', scene.title, { min: 2, max: 20 })
  if (typeof scene.titleJa !== 'string' || !HAS_KANA.test(scene.titleJa)) err(file, 'titleJa 不像日文')
  if (typeof scene.icon !== 'string' || !scene.icon) err(file, 'icon 缺')
  if (!['n1', 'n2', 'n3', 'n4', 'n5'].includes(scene.suggestedLevel)) err(file, 'suggestedLevel 非法')
  if (!Array.isArray(scene.dialogues) || scene.dialogues.length < 2 || scene.dialogues.length > 4)
    err(file, `dialogues 應 2~4 段（${scene.dialogues?.length ?? 0}）`)
  for (const d of scene.dialogues ?? []) {
    if (!new RegExp(`^${expectedId}-d\\d$`).test(d.id)) err(file, `對話 id 格式錯：${d.id}`)
    registerId(file, d.id)
    if (!Array.isArray(d.lines) || d.lines.length < 6 || d.lines.length > 12)
      warn(file, `${d.id} 行數 ${d.lines?.length ?? 0}，建議 6~12`)
    for (const line of d.lines ?? []) {
      if (!['男', '女'].includes(line.gender)) err(file, `${d.id} gender 非法`)
      if (typeof line.ja !== 'string' || !HAS_KANA.test(line.ja)) err(file, `${d.id} ja 不像日文：${String(line.ja).slice(0, 15)}`)
      else if (/[一-鿿]/u.test(line.ja) && !line.reading) warn(file, `${d.id}「${line.ja.slice(0, 12)}…」含漢字但無 reading`)
      if (line.reading != null && !/^[ぁ-ゖァ-ヺー、。？！?!\s]+$/u.test(line.reading)) err(file, `${d.id} reading 非全假名`)
      checkZhText(file, `${d.id} zh`, line.zh, { min: 1 })
    }
  }
  if (!Array.isArray(scene.phrases) || scene.phrases.length < 8 || scene.phrases.length > 15)
    err(file, `phrases 應 8~15 句（${scene.phrases?.length ?? 0}）`)
  for (const p of scene.phrases ?? []) {
    if (typeof p.ja !== 'string' || !HAS_KANA.test(p.ja)) err(file, `phrase ja 不像日文`)
    checkZhText(file, 'phrase zh', p.zh, { min: 1 })
    if (p.note != null) checkZhText(file, 'phrase note', p.note, { min: 1, max: 60 })
  }
  if (!Array.isArray(scene.drills) || scene.drills.length < 5 || scene.drills.length > 10)
    err(file, `drills 應 5~10 題（${scene.drills?.length ?? 0}）`)
  const drillRe = new RegExp(`^${expectedId}-\\d{3}$`)
  const drillUnitChoice = { unitId: expectedId, slug: 'drill', kind: 'choice', optionCount: 4 }
  const drillUnitOrder = { unitId: expectedId, slug: 'drill', kind: 'order', optionCount: 4 }
  for (const q of scene.drills ?? []) {
    if (q.kind === 'choice') checkChoice(file, q, drillUnitChoice, drillRe)
    else if (q.kind === 'order') checkOrder(file, q, drillUnitOrder, drillRe)
    else err(file, `drill kind 非法：${q.kind}`)
  }
}

/* ---------- 單字卡驗證 ---------- */
const POS = ['名詞', '動詞', 'い形容詞', 'な形容詞', '副詞', '接続詞', '表現']
function checkCards(file, cards, level) {
  const idRe = new RegExp(`^${level}-card-\\d{3}$`)
  for (const c of cards) {
    if (!idRe.test(c.id)) err(file, `card id 格式錯：${c.id}`)
    registerId(file, c.id)
    if (typeof c.term !== 'string' || !c.term.trim()) err(file, `${c.id} term 空`)
    if (typeof c.reading !== 'string' || !KANA_ONLY.test(c.reading)) err(file, `${c.id} reading 非全假名`)
    if (!POS.includes(c.pos)) err(file, `${c.id} pos 非法：${c.pos}`)
    checkZhText(file, `${c.id} zh`, c.zh, { min: 1, max: 20 })
    if (typeof c.example !== 'string' || !HAS_KANA.test(c.example)) err(file, `${c.id} example 不像日文`)
    else if (c.term && !c.example.includes(c.term)) {
      const stemForm = c.term.slice(0, Math.max(1, c.term.length - 1))
      if (!c.example.includes(stemForm)) warn(file, `${c.id} example 未含 term「${c.term}」（活用形請確認）`)
    }
    checkZhText(file, `${c.id} exampleZh`, c.exampleZh, { min: 1 })
    if (c.level !== level) err(file, `${c.id} level 應為 ${level}`)
  }
}

/* ---------- 主流程 ---------- */
const registry = await loadTs('src/content/registry.ts')
const { units, KAIWA_SCENE_IDS, CARDS_EXPECTED } = registry

const singleFile = process.argv[2] ? path.relative(ROOT, path.resolve(process.argv[2])) : null
const stats = {} // level -> section -> count

async function processUnit(unit) {
  const rel = `src/content/jlpt/${unit.level}/${unit.section}-${unit.slug}.ts`
  if (singleFile && rel !== singleFile) return
  if (!existsSync(path.join(ROOT, rel))) {
    if (singleFile) err(rel, '檔案不存在')
    return
  }
  let mod
  try {
    mod = await loadTs(rel)
  } catch (e) {
    err(rel, `載入失敗：${e.message}`)
    return
  }
  const questions = mod.questions
  if (!Array.isArray(questions)) { err(rel, '缺 export const questions'); return }
  if (questions.length === 0) { console.log(`  ${unit.unitId}: 空（尚未收錄，跳過）`); return }
  const count = checkUnitQuestions(rel, unit, questions)
  if (count < unit.expectedCount)
    err(rel, `${unit.unitId} 僅 ${count} 題 < 目標 ${unit.expectedCount}（半吊子不准上；要嘛補齊要嘛清空）`)
  ;(stats[unit.level] ??= {})[unit.section] = (stats[unit.level][unit.section] ?? 0) + count
}

for (const unit of units) await processUnit(unit)

// 會話
for (const [category, ids] of Object.entries(KAIWA_SCENE_IDS)) {
  for (const id of ids) {
    const rel = `src/content/kaiwa/${category}/${id.replace(/^(tour|biz)-/, '')}.ts`
    if (singleFile && rel !== singleFile) continue
    if (!existsSync(path.join(ROOT, rel))) { if (singleFile) err(rel, '檔案不存在'); continue }
    try {
      const mod = await loadTs(rel)
      if (!mod.scene) err(rel, '缺 export const scene')
      else checkScene(rel, mod.scene, id, category)
      ;(stats.kaiwa ??= {})[category] = (stats.kaiwa[category] ?? 0) + 1
    } catch (e) { err(rel, `載入失敗：${e.message}`) }
  }
}

// 卡片
for (const level of ['n5', 'n4', 'n3', 'n2', 'n1']) {
  const rel = `src/content/cards/${level}.ts`
  if (singleFile && rel !== singleFile) continue
  if (!existsSync(path.join(ROOT, rel))) { if (singleFile) err(rel, '檔案不存在'); continue }
  try {
    const mod = await loadTs(rel)
    if (!Array.isArray(mod.cards)) { err(rel, '缺 export const cards'); continue }
    if (mod.cards.length === 0) { console.log(`  cards/${level}: 空（跳過）`); continue }
    checkCards(rel, mod.cards, level)
    if (mod.cards.length < CARDS_EXPECTED)
      err(rel, `${level} 卡片僅 ${mod.cards.length} 張 < ${CARDS_EXPECTED}`)
    ;(stats.cards ??= {})[level] = mod.cards.length
  } catch (e) { err(rel, `載入失敗：${e.message}`) }
}

/* ---------- 回報 ---------- */
if (!singleFile) {
  console.log('\n== 內容統計 ==')
  for (const level of ['n5', 'n4', 'n3', 'n2', 'n1']) {
    const s = stats[level]
    if (!s) { console.log(`${level.toUpperCase()}: （無內容）`); continue }
    const row = ['vocab', 'grammar', 'reading', 'listening'].map((k) => `${k} ${s[k] ?? 0}`).join(' / ')
    console.log(`${level.toUpperCase()}: ${row}`)
  }
  if (stats.kaiwa) console.log(`會話: 觀光 ${stats.kaiwa.tourism ?? 0}/${KAIWA_SCENE_IDS.tourism.length} 景、商務 ${stats.kaiwa.business ?? 0}/${KAIWA_SCENE_IDS.business.length} 景`)
  if (stats.cards) console.log(`卡片: ${Object.entries(stats.cards).map(([l, n]) => `${l.toUpperCase()} ${n}`).join(' / ')}`)
}

for (const w of warns) console.log(`WARN  ${w}`)
for (const e of errors) console.log(`ERROR ${e}`)
console.log(`\ncheck 完成：${errors.length} errors, ${warns.length} warns`)
process.exit(errors.length > 0 ? 1 : 0)

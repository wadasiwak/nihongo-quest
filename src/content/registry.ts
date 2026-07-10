/**
 * 單元註冊表——全站 JLPT 題庫的 canonical 矩陣。
 *
 * 依 jlpt.jp 官方「大問のねらい」PDF（N1~N5）逐級覆核（2026-07-10）：
 * - 表記 僅 N2~N5；語形成 僅 N2；用法 N1~N4（N5 無）
 * - 読解：長文 僅 N1/N3；統合理解・主張理解 僅 N1/N2
 * - 聴解：概要理解 N1~N3；発話表現 N3~N5；統合理解 僅 N1/N2
 *
 * 內容 agent MUST 使用這裡宣告的 unitId，不可自創（id 治理）。
 * 內容檔路徑規則：`src/content/jlpt/${level}/${section}-${slug}.ts`，
 * 檔內 `export const questions: JlptQuestion[]`。
 * 未建檔或空陣列＝尚未收錄：首頁自動隱藏、check 跳過（骨架先行、內容漸進）。
 */
import type { Level, Section, UnitSlug, QuestionKind } from './types'

export interface UnitMeta {
  /** `${level}-${section}-${slug}`，如 n3-vocab-kanji */
  unitId: string
  level: Level
  section: Section
  slug: UnitSlug
  kind: QuestionKind
  /** 顯示名（繁中＋官方大問名） */
  title: string
  /** 官方ねらい的繁中摘要 */
  goal: string
  /** 目標題數（passage 類計小題總數）；1 ≤ 實際 < expectedCount 視為半吊子，check ERROR */
  expectedCount: number
  /** 每題選項數 */
  optionCount: 3 | 4
  /** passage 類：文章字數區間（日文字元，照官方各級目安放寬） */
  passageChars?: [number, number]
  /** passage 類：每篇文章的小題數區間 */
  perSet?: [number, number]
}

/** 各 slug 的靜態屬性（級別無關） */
const SLUG_DEF: Record<UnitSlug, {
  section: Section
  kind: QuestionKind
  title: string
  goal: string
  expectedCount: number
  optionCount: 3 | 4
  perSet?: [number, number]
}> = {
  kanji:     { section: 'vocab', kind: 'choice', title: '漢字讀音（漢字読み）', goal: '漢字詞的讀法', expectedCount: 20, optionCount: 4 },
  hyoki:     { section: 'vocab', kind: 'choice', title: '寫法（表記）', goal: '假名詞的漢字（N5 含カタカナ）寫法', expectedCount: 20, optionCount: 4 },
  gokeisei:  { section: 'vocab', kind: 'choice', title: '語形成', goal: '派生語與複合語知識', expectedCount: 20, optionCount: 4 },
  bunmyaku:  { section: 'vocab', kind: 'choice', title: '前後文選詞（文脈規定）', goal: '依文脈選出語意合適的詞', expectedCount: 20, optionCount: 4 },
  iikae:     { section: 'vocab', kind: 'choice', title: '近義替換（言い換え類義）', goal: '選出與題目詞語意最接近的說法', expectedCount: 20, optionCount: 4 },
  yoho:      { section: 'vocab', kind: 'choice', title: '用法', goal: '判斷詞語在句中的正確用法', expectedCount: 20, optionCount: 4 },
  keishiki:  { section: 'grammar', kind: 'choice', title: '文法形式（文の文法１）', goal: '選出符合句意的文法形式', expectedCount: 20, optionCount: 4 },
  narabekae: { section: 'grammar', kind: 'order', title: '句子重組★（文の文法２）', goal: '組出語法正確且語意通順的句子', expectedCount: 20, optionCount: 4 },
  bunsho:    { section: 'grammar', kind: 'passage', title: '文章文法（文章の文法）', goal: '判斷符合文章脈絡的表達', expectedCount: 8, optionCount: 4, perSet: [3, 4] },
  tanbun:    { section: 'reading', kind: 'passage', title: '內容理解・短文', goal: '讀懂生活工作等主題的短文', expectedCount: 8, optionCount: 4, perSet: [1, 2] },
  chubun:    { section: 'reading', kind: 'passage', title: '內容理解・中文', goal: '理解中篇文章的因果與要點', expectedCount: 8, optionCount: 4, perSet: [2, 3] },
  chobun:    { section: 'reading', kind: 'passage', title: '內容理解・長文', goal: '掌握長篇文章的概要與筆者想法', expectedCount: 8, optionCount: 4, perSet: [3, 4] },
  togo:      { section: 'reading', kind: 'passage', title: '統合理解', goal: '比較統整多篇文本', expectedCount: 6, optionCount: 4, perSet: [2, 3] },
  shucho:    { section: 'reading', kind: 'passage', title: '主張理解・長文', goal: '掌握評論類文章的主張與意見', expectedCount: 6, optionCount: 4, perSet: [3, 4] },
  joho:      { section: 'reading', kind: 'passage', title: '資訊檢索（情報検索）', goal: '從廣告、通知等素材找出所需資訊', expectedCount: 6, optionCount: 4, perSet: [1, 2] },
  kadai:     { section: 'listening', kind: 'listening', title: '課題理解', goal: '聽出解決課題所需的資訊、判斷下一步', expectedCount: 10, optionCount: 4 },
  pointo:    { section: 'listening', kind: 'listening', title: '重點理解（ポイント理解）', goal: '依事先提示聚焦聽取重點', expectedCount: 10, optionCount: 4 },
  gaiyo:     { section: 'listening', kind: 'listening', title: '概要理解', goal: '聽懂整段獨白的主旨與說話者意圖', expectedCount: 10, optionCount: 4 },
  hatsuwa:   { section: 'listening', kind: 'listening', title: '發話表現（発話表現）', goal: '依情境選出合適的說法（官方為看圖，本站以情境說明代替）', expectedCount: 10, optionCount: 3 },
  sokuji:    { section: 'listening', kind: 'listening', title: '即時應答（即時応答）', goal: '聽短句選出合適的回應', expectedCount: 12, optionCount: 3 },
}

/** 聽解的統合理解與讀解 slug 同名，聽解版屬性另定義 */
const LISTENING_TOGO = { kind: 'listening' as QuestionKind, title: '統合理解（聽解）', goal: '聽較長內容、比較統整多項資訊', expectedCount: 6, optionCount: 4 as const }

/** 各級允許的題型矩陣（官方 PDF 覆核定案；順序＝官方大問順序） */
const LEVEL_MATRIX: Record<Level, { vocab: UnitSlug[]; grammar: UnitSlug[]; reading: UnitSlug[]; listening: UnitSlug[] }> = {
  n1: {
    vocab: ['kanji', 'bunmyaku', 'iikae', 'yoho'],
    grammar: ['keishiki', 'narabekae', 'bunsho'],
    reading: ['tanbun', 'chubun', 'chobun', 'togo', 'shucho', 'joho'],
    listening: ['kadai', 'pointo', 'gaiyo', 'sokuji', 'togo'],
  },
  n2: {
    vocab: ['kanji', 'hyoki', 'gokeisei', 'bunmyaku', 'iikae', 'yoho'],
    grammar: ['keishiki', 'narabekae', 'bunsho'],
    reading: ['tanbun', 'chubun', 'togo', 'shucho', 'joho'],
    listening: ['kadai', 'pointo', 'gaiyo', 'sokuji', 'togo'],
  },
  n3: {
    vocab: ['kanji', 'hyoki', 'bunmyaku', 'iikae', 'yoho'],
    grammar: ['keishiki', 'narabekae', 'bunsho'],
    reading: ['tanbun', 'chubun', 'chobun', 'joho'],
    listening: ['kadai', 'pointo', 'gaiyo', 'hatsuwa', 'sokuji'],
  },
  n4: {
    vocab: ['kanji', 'hyoki', 'bunmyaku', 'iikae', 'yoho'],
    grammar: ['keishiki', 'narabekae', 'bunsho'],
    reading: ['tanbun', 'chubun', 'joho'],
    listening: ['kadai', 'pointo', 'hatsuwa', 'sokuji'],
  },
  n5: {
    vocab: ['kanji', 'hyoki', 'bunmyaku', 'iikae'],
    grammar: ['keishiki', 'narabekae', 'bunsho'],
    reading: ['tanbun', 'chubun', 'joho'],
    listening: ['kadai', 'pointo', 'hatsuwa', 'sokuji'],
  },
}

/** 文章字數區間（日文字元）——照官方目安放寬上下界 */
const PASSAGE_CHARS: Partial<Record<UnitSlug, Partial<Record<Level, [number, number]>>>> = {
  tanbun: { n1: [170, 260], n2: [170, 260], n3: [130, 220], n4: [90, 200], n5: [60, 130] },
  chubun: { n1: [420, 580], n2: [420, 580], n3: [290, 420], n4: [370, 520], n5: [190, 310] },
  chobun: { n1: [850, 1150], n3: [460, 650] },
  togo:   { n1: [480, 720], n2: [480, 720] },   // Ａ＋Ｂ 合計
  shucho: { n1: [850, 1150], n2: [740, 1050] },
  joho:   { n1: [550, 800], n2: [550, 800], n3: [440, 700], n4: [290, 500], n5: [170, 330] },
  bunsho: { n1: [350, 700], n2: [350, 700], n3: [250, 550], n4: [200, 450], n5: [150, 400] },
}

/**
 * 各單元 expectedCount 覆寫——N1（用戶備考）與 N5（入門引流）已擴充加倍，
 * 鎖定新門檻防止內容回退（check：1 ≤ 實際 < expected ⇒ ERROR）。
 */
const EXPECTED_OVERRIDE: Record<string, number> = {
  'n5-vocab-kanji': 40, 'n5-vocab-hyoki': 40, 'n5-vocab-bunmyaku': 40, 'n5-vocab-iikae': 40,
  'n5-grammar-keishiki': 40, 'n5-grammar-narabekae': 40, 'n5-grammar-bunsho': 16,
  'n5-reading-tanbun': 16, 'n5-reading-chubun': 16, 'n5-reading-joho': 12,
  'n5-listening-kadai': 20, 'n5-listening-pointo': 20, 'n5-listening-hatsuwa': 20, 'n5-listening-sokuji': 24,
  'n1-vocab-kanji': 40, 'n1-vocab-bunmyaku': 40, 'n1-vocab-iikae': 40, 'n1-vocab-yoho': 40,
  'n1-grammar-keishiki': 40, 'n1-grammar-narabekae': 40, 'n1-grammar-bunsho': 16,
  'n1-reading-tanbun': 16, 'n1-reading-chubun': 16, 'n1-reading-chobun': 16,
  'n1-reading-togo': 12, 'n1-reading-shucho': 12, 'n1-reading-joho': 12,
  'n1-listening-kadai': 20, 'n1-listening-pointo': 20, 'n1-listening-gaiyo': 20,
  'n1-listening-sokuji': 24, 'n1-listening-togo': 12,
}

function buildUnits(): UnitMeta[] {
  const units: UnitMeta[] = []
  for (const level of ['n5', 'n4', 'n3', 'n2', 'n1'] as Level[]) {
    const matrix = LEVEL_MATRIX[level]
    for (const section of ['vocab', 'grammar', 'reading', 'listening'] as Section[]) {
      for (const slug of matrix[section]) {
        const isListeningTogo = section === 'listening' && slug === 'togo'
        const def = SLUG_DEF[slug]
        const unitId = `${level}-${section}-${slug}`
        units.push({
          unitId,
          level,
          section,
          slug,
          kind: isListeningTogo ? LISTENING_TOGO.kind : def.kind,
          title: isListeningTogo ? LISTENING_TOGO.title : def.title,
          goal: isListeningTogo ? LISTENING_TOGO.goal : def.goal,
          expectedCount:
            EXPECTED_OVERRIDE[unitId] ?? (isListeningTogo ? LISTENING_TOGO.expectedCount : def.expectedCount),
          optionCount: isListeningTogo ? LISTENING_TOGO.optionCount : def.optionCount,
          passageChars: PASSAGE_CHARS[slug]?.[level],
          perSet: isListeningTogo ? undefined : def.perSet,
        })
      }
    }
  }
  return units
}

export const units: UnitMeta[] = buildUnits()

export const unitById: Record<string, UnitMeta> = Object.fromEntries(
  units.map((u) => [u.unitId, u]),
)

/** 內容檔相對路徑（給 check script 與文件用） */
export function unitFile(u: UnitMeta): string {
  return `src/content/jlpt/${u.level}/${u.section}-${u.slug}.ts`
}

/**
 * 情境會話場景 manifest（id 治理：內容 agent MUST 用這些 id）。
 * 檔案路徑：`src/content/kaiwa/${category}/${id 去前綴}.ts`，檔內 `export const scene: KaiwaScene`。
 */
export const KAIWA_SCENE_IDS: { tourism: string[]; business: string[] } = {
  tourism: ['tour-airport', 'tour-restaurant', 'tour-directions', 'tour-shopping', 'tour-hotel', 'tour-transport', 'tour-emergency'],
  business: ['biz-meeting', 'biz-interview', 'biz-phone', 'biz-email', 'biz-keigo', 'biz-visit'],
}

/** 單字卡每級最低完成張數（0=未收錄跳過；1~79=半吊子 ERROR） */
export const CARDS_EXPECTED = 80

export const LEVELS: Level[] = ['n5', 'n4', 'n3', 'n2', 'n1']

export const LEVEL_LABEL: Record<Level, string> = {
  n5: 'N5', n4: 'N4', n3: 'N3', n2: 'N2', n1: 'N1',
}

export const SECTION_LABEL: Record<Section, string> = {
  vocab: '單字・語彙', grammar: '文法', reading: '讀解', listening: '聽解',
}

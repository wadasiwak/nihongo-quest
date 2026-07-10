/**
 * nihongo-quest 內容 schema —— 本檔即內容生產 agent 的 prompt 文件。
 *
 * 所有內容檔都是 plain literals designed to be LLM-generatable：
 * 不呼叫函式、不用展開運算子，直接寫物件字面值，`npm run check -- <檔>` 可單檔自驗。
 *
 * ## 內容鐵則（每個內容 agent 必守）
 * 1. 題目全部原創自撰。嚴禁抄襲 JLPT 真題、市售題庫、網路流傳題目。
 *    題型「格式」照官方（jlpt.jp 大問のねらい），題目「文字」必須是新寫的。
 * 2. 正解唯一：干擾項必須明確錯（文法錯、語意不通、或不合語境），
 *    不可出現「也勉強說得通」的選項。並べ替え的 segments 只能有一種自然語序。
 * 3. 解說（explanation）用繁體中文、台灣用語，禁止簡體字與中國大陸用語。
 * 4. 假名規則：reading 類欄位一律全ひらがな（外來語保留カタカナ與長音「ー」）、
 *    助詞照書寫形（は寫「は」不寫「わ」）、和語長音照假名遣（おう／えい）。
 * 5. 難度貼合級別：N5 用初級語彙文型，不可混入高級詞；N1 反之不可過易。
 * 6. id 必須照 registry.ts 宣告的 unitId 加三位數流水號，不可自創前綴。
 */

/** JLPT 級別（小寫） */
export type Level = 'n1' | 'n2' | 'n3' | 'n4' | 'n5'

/** 科別 */
export type Section = 'vocab' | 'grammar' | 'reading' | 'listening'

/**
 * 題型單元 slug（對照官方大問名，各級允許矩陣宣告在 registry.ts）：
 * - vocab:    kanji(漢字読み) hyoki(表記) gokeisei(語形成,僅N2) bunmyaku(文脈規定)
 *             iikae(言い換え類義) yoho(用法,N1~N4)
 * - grammar:  keishiki(文の文法1・文法形式の判断) narabekae(文の文法2・文の組み立て★)
 *             bunsho(文章の文法・文章cloze題組)
 * - reading:  tanbun(内容理解・短文) chubun(中文) chobun(長文,僅N1/N3)
 *             togo(統合理解,僅N1/N2) shucho(主張理解,僅N1/N2) joho(情報検索)
 * - listening:kadai(課題理解) pointo(ポイント理解) gaiyo(概要理解,N1~N3)
 *             hatsuwa(発話表現,N3~N5) sokuji(即時応答) togo(統合理解,僅N1/N2)
 */
export type UnitSlug =
  | 'kanji' | 'hyoki' | 'gokeisei' | 'bunmyaku' | 'iikae' | 'yoho'
  | 'keishiki' | 'narabekae' | 'bunsho'
  | 'tanbun' | 'chubun' | 'chobun' | 'togo' | 'shucho' | 'joho'
  | 'kadai' | 'pointo' | 'gaiyo' | 'hatsuwa' | 'sokuji'

/** 四種互動型別 */
export type QuestionKind = 'choice' | 'order' | 'passage' | 'listening'

interface QuestionBase {
  /**
   * id 格式：`${level}-${section}-${slug}-NNN`（NNN 三位數流水號，001 起）。
   * 例：n3-vocab-kanji-001、n5-listening-kadai-012。全站不可重複。
   */
  id: string
  /**
   * 繁體中文詳解，40~200 字：說明正解為何對，並至少點出 1 個干擾項為何錯。
   * 文法題須點名文型（如「〜ばかりか」）並給中文語感；單字題附該詞中文詞義。
   */
  explanation: string
}

/**
 * 單選題——語彙全題型、文の文法1 用這個骨架。
 *
 * 範例（n5 漢字読み）：
 * {
 *   id: 'n5-vocab-kanji-001',
 *   stem: 'まいあさ 【水】を のみます。',
 *   options: ['みず', 'すい', 'みす', 'こおり'],
 *   answerIndex: 0,
 *   explanation: '「水」單獨作名詞時訓讀「みず」（水）。「すい」是音讀，用於「水曜日」等複合詞；「みす」濁音錯誤；「こおり」是「氷」（冰）的讀法。',
 * }
 */
export interface ChoiceQuestion extends QuestionBase {
  kind: 'choice'
  /**
   * 題幹（日文）。慣例：
   * - kanji/hyoki/iikae/yoho：把目標詞用【】括起，如「まいあさ 【水】を のみます。」
   * - bunmyaku/keishiki/gokeisei：挖空處用全形括號「（　）」（內含全形空格）。
   * - N5/N4 題幹用分かち書き（詞間半形空格）、少用未學漢字。
   */
  stem: string
  /** N5/N4 題幹含漢字時的全ひらがな讀法（選填；N3 以上免） */
  stemReading?: string
  /** 恰 4 個選項，彼此相異。正解一律放 index 0（顯示時前端才 shuffle）。 */
  options: string[]
  /** 恆為 0（慣例；check 會驗範圍） */
  answerIndex: number
}

/**
 * 並べ替え★（文の文法2・文の組み立て）。
 * segments 的「陣列順序＝唯一正解語序」，顯示時前端 shuffle。
 * starIndex＝★ 在正解語序中的位置（0~3），作答問「★ 處是哪個片段」。
 *
 * 範例（n3）：
 * {
 *   id: 'n3-grammar-narabekae-001',
 *   before: '駅の前に',
 *   after: 'ができました。',
 *   segments: ['最近', '若い人に', '人気の', 'カフェ'],
 *   starIndex: 2,
 *   explanation: '正解語序為「最近 若い人に 人気の カフェ」…（略）',
 * }
 */
export interface OrderQuestion extends QuestionBase {
  kind: 'order'
  /** ★句前段（可空字串，但 before/after 至少一個非空） */
  before: string
  /** ★句後段 */
  after: string
  /** 恰 4 個片段，相異非空；陣列順序＝唯一正解語序 */
  segments: string[]
  /** ★ 位置 0~3 */
  starIndex: number
}

/** 題組內的小題（讀解各題型、文章の文法 cloze 用） */
export interface SubQuestion {
  /** id＝`${題組id}-qN`（N 從 1 起），如 n4-reading-tanbun-003-q1 */
  id: string
  /** 小題題幹。文章の文法的挖空處在 passage 內以【１】【２】…標號，小題 stem 寫「【１】に入るものはどれか。」 */
  stem: string
  /** 恰 4 個選項，正解放 index 0 */
  options: string[]
  answerIndex: number
  /** 繁中詳解 40~200 字（同 QuestionBase.explanation 規格） */
  explanation: string
}

/**
 * 題組——讀解（tanbun/chubun/chobun/togo/shucho/joho）與文章の文法（bunsho）。
 * passage 為原創文章；字數區間依 registry 該單元的 passageChars（官方各級不同，
 * 如 N5 短文約 80 字、N1 長文約 1000 字——見 registry 各單元宣告）。
 * - togo（統合理解）：passage 內含兩篇對照文，以「Ａ」「Ｂ」段落標示。
 * - joho（情報検索）：passage 用純文字表格/條列模擬廣告・通知（可用全形線框）。
 * - bunsho（文章の文法）：passage 內以【１】~【４】標挖空處，每空一個小題。
 * 此型別的 explanation 留空字串即可（詳解放在各小題）。
 */
export interface PassageSet extends QuestionBase {
  kind: 'passage'
  /** 文章標題（選填，joho/通知類建議有） */
  passageTitle?: string
  /** 原創日文文章。N5/N4 用平易書き下ろし文體 */
  passage: string
  /** 1~4 個小題 */
  questions: SubQuestion[]
}

/** 聽解 script 的一行（前端逐行 TTS，男/女聲以 pitch 區分；旁白用於狀況說明） */
export interface ScriptLine {
  speaker: '男' | '女' | '旁白'
  /** 口語體日文（聽解是「聽」的內容，用です・ます或常體對話，不用書面語） */
  text: string
}

/**
 * 聽解題（kadai/pointo/gaiyo/hatsuwa/sokuji/togo）。
 * script 由 TTS 唸出、畫面預設不顯示（無日文 voice 時降級為讀稿模式）。
 *
 * 各題型形式：
 * - kadai/pointo/togo：對話 script（4~10 行）＋question＋4 個「文字顯示」選項。
 * - gaiyo：獨白 script（3~6 行、同一 speaker）＋question＋4 個文字選項。
 * - hatsuwa（N3~N5）：旁白 1~2 行描述情境（官方是看插圖，本站以情境說明文代替），
 *   問「這時該說什麼」，3 個選項、spokenOptions: true（選項也由 TTS 唸）。
 * - sokuji：script 為單句發話（1 行），question 留空字串，
 *   3 個應答選項、spokenOptions: true。
 */
export interface ListeningQuestion extends QuestionBase {
  kind: 'listening'
  /** 読み上げ腳本，1~10 行，合計 ≥20 字 */
  script: ScriptLine[]
  /** 質問文（TTS 唸；sokuji 留空字串） */
  question: string
  /** kadai/pointo/gaiyo/togo 恰 4 個；hatsuwa/sokuji 恰 3 個。正解放 index 0 */
  options: string[]
  answerIndex: number
  /** hatsuwa/sokuji 必為 true（選項用 TTS 唸、畫面顯示①②③）；其他題型省略 */
  spokenOptions?: boolean
}

export type JlptQuestion = ChoiceQuestion | OrderQuestion | PassageSet | ListeningQuestion

/* ======================== 情境會話 ======================== */

/** 對話單行 */
export interface DialogueLine {
  /** 角色名（繁中或日文皆可，如「店員」「客人」「面接官」），同一 Dialogue 內一致 */
  speaker: string
  /** TTS 聲線用 */
  gender: '男' | '女'
  /** 日文台詞（口語體、自然） */
  ja: string
  /** ja 含漢字時必填：全ひらがな讀法 */
  reading?: string
  /** 繁體中文翻譯 */
  zh: string
}

export interface Dialogue {
  /** `${sceneId}-dN`，如 tour-airport-d1 */
  id: string
  /** 繁中小節名，如「報到劃位」 */
  title: string
  /** 6~12 行 */
  lines: DialogueLine[]
}

/** 常用句 */
export interface Phrase {
  ja: string
  /** ja 含漢字時必填 */
  reading?: string
  zh: string
  /** 使用時機/文化提醒（選填，繁中 ≤60 字） */
  note?: string
}

/**
 * 情境會話場景。id 前綴：觀光 tour-、專業 biz-。
 * drills 是該場景的練習題（填空用 ChoiceQuestion、語序用 OrderQuestion），
 * 題目 id 格式 `${sceneId}-NNN`（如 tour-airport-001），素材取自本場景的對話與常用句。
 */
export interface KaiwaScene {
  /** 如 tour-airport、biz-meeting */
  id: string
  category: 'tourism' | 'business'
  /** 繁中場景名，如「機場報到」 */
  title: string
  /** 日文場景名，如「空港でチェックイン」 */
  titleJa: string
  /** 單一 emoji */
  icon: string
  /** 建議程度（決定 TTS 預設語速；觀光多為 n5/n4、商務多為 n3~n1） */
  suggestedLevel: Level
  /** 2~4 段對話 */
  dialogues: Dialogue[]
  /** 8~15 句常用句 */
  phrases: Phrase[]
  /** 5~10 題練習 */
  drills: Array<ChoiceQuestion | OrderQuestion>
}

/* ======================== 單字卡 ======================== */

export type PartOfSpeech =
  | '名詞' | '動詞' | 'い形容詞' | 'な形容詞' | '副詞' | '接続詞' | '表現'

/**
 * 單字卡。id 格式 `${level}-card-NNN`。
 * 選詞依級別社群共識詞表方向（官方 2010 後不公布詞表），例句必須自撰原創。
 */
export interface VocabCard {
  id: string
  /** 表記（一般書寫形；純假名詞就寫假名） */
  term: string
  /** 全ひらがな讀法（term 為假名時照抄） */
  reading: string
  pos: PartOfSpeech
  /** 繁中詞義（≤20 字） */
  zh: string
  /** 原創日文例句，必須包含 term（動詞可為活用形） */
  example: string
  /** 例句繁中翻譯 */
  exampleZh: string
  level: Level
}

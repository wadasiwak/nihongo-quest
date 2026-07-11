/**
 * UI 雙語（繁中/英文）——語言 store＋全站 UI 字典。
 * - 語言存 localStorage 'nq-lang'，並同步 <html lang>（頁尾導流 widget 據此切語言）。
 * - 「內容」不翻：題目詳解、卡片中譯、會話中譯維持繁中；場景標題在英文模式改顯示日文題名。
 * - 元件用 useT()（reactive）；非元件（session/score 的計畫標題）用 t()。
 */
import { create } from 'zustand'
import type { Section } from '../content/types'
import type { UnitMeta } from '../content/registry'

export type UiLang = 'zh' | 'en'

const LS_KEY = 'nq-lang'

function applyLang(lang: UiLang) {
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant-TW'
  document.title =
    lang === 'en'
      ? 'Nihongo Quest — JLPT N5–N1 drills & Japanese conversation'
      : '日語道場 — JLPT N5～N1 練習題與情境會話'
}

const initialLang: UiLang = (() => {
  try {
    return localStorage.getItem(LS_KEY) === 'en' ? 'en' : 'zh'
  } catch {
    return 'zh'
  }
})()
applyLang(initialLang)

interface LangState {
  lang: UiLang
  setLang: (lang: UiLang) => void
}

export const useLang = create<LangState>((set) => ({
  lang: initialLang,
  setLang: (lang) => {
    try {
      localStorage.setItem(LS_KEY, lang)
    } catch {
      /* private mode 等存不進去就算了，本次 session 仍生效 */
    }
    applyLang(lang)
    set({ lang })
  },
}))

export const getLang = (): UiLang => useLang.getState().lang

/* ============================ 字典 ============================ */

const zh = {
  /* 共用 */
  backHome: '← 首頁',
  back: '← 返回',
  ret: '返回',
  leave: '← 離開',
  exit: '離開',
  goHome: '回首頁',
  goPractice: '去做題',

  /* Home */
  appTitle: '日語道場',
  appSub: 'JLPT N5～N1 原創練習題・觀光與商務情境會話',
  dailyDoneBanner: (score: number, total: number) => `今日一練完成 ${score}/${total}`,
  dailyPrompt: '每日一練——全球同一天、同一組題',
  streakDays: (n: number) => `🔥 ${n} 天`,
  jlptSection: 'JLPT 級別練習',
  contentPreparing: '內容準備中',
  levelMeta: (count: number, filled: number, total: number) => `${count} 題・${filled}/${total} 題型`,
  kaiwaSection: '情境會話',
  kaiwaEntry: '觀光・商務會話',
  kaiwaEntryMeta: (t1: number, t2: number, b1: number, b2: number) =>
    `${t1}/${t2} 觀光・${b1}/${b2} 商務`,
  reviewSection: '複習工具',
  cardsEntry: '單字卡',
  cardsEntryMeta: (levels: string) => `間隔複習 ${levels}`,
  wrongEntry: '錯題本',
  wrongEntryDue: (n: number) => `今日到期 ${n} 題`,
  wrongEntryEmpty: '答錯自動收錄',
  statsEntry: '弱點統計',
  statsEntryMeta: '找出最需要加強的題型',
  settingsBtn: '⚙ 設定',
  settingsCollapse: '（收合）',
  finePrint: '本站為個人學習輔助工具，與 JLPT 主辦單位無關；題目皆為原創、模擬考估分僅供參考。',

  /* LevelHome */
  levelPractice: (level: string) => `${level} 練習`,
  levelEmpty: '此級內容準備中，敬請期待。',
  unitMetaCount: (n: number) => `${n} 題`,
  unitMetaAcc: (acc: number) => `・正確率 ${acc}%`,
  mockSection: '模擬考',
  mockTitle: (level: string) => `${level} 迷你模擬考`,
  mockEntryMeta: '照官方配分縮編・計時作答・估分僅供參考',
  mockBestSuffix: (score: number) => `｜最佳 ${score}/180`,
  mockLocked: '四科內容齊全後開放模擬考。',

  /* MockExam */
  mockNotReady: '此級內容尚未齊全，模擬考暫未開放。等各科題庫補齊後就能開考！',
  mockMetaCount: (n: number) => `📝 題數：${n} 題`,
  mockMetaTime: (m: number) => `⏱ 時限：${m} 分鐘（時間到自動交卷）`,
  mockMetaRules: '➡️ 線性作答、不能回頭，過程中不顯示對錯；聽解每題限播 2 次',
  mockDisclaimer:
    '⚠️ 估分僅供參考：本站為縮編版模擬考，估分依答對率線性換算，與正式 JLPT 成績無直接對應。',
  startExam: '開始作答',

  /* MockResult */
  mockResultTitle: (level: string) => `${level} 迷你模擬考結果`,
  passEst: '合格（估）🎉',
  failEst: '未達合格線（估）',
  totalEst: '總分（估）',
  passLineLabel: (n: number) => `合格線 ${n}`,
  sectionNums: (score: number, max: number, correct: number, total: number, passLine: number) =>
    `${score} / ${max}（答對 ${correct}/${total}，單科線 ${passLine}）`,
  mockResultDisclaimer:
    '⚠️ 本站為縮編模擬、估分僅供參考：題數為官方縮編版，估分依答對率線性換算，與正式 JLPT 成績無直接對應。',
  reviewHeader: '逐題回顧',
  unanswered: '未作答',
  correctTag: '正解',
  yourChoiceTag: '你的選擇',
  yourAnswerLabel: '你的答案：',
  correctAnswerLabel: '正解：',
  retryExam: '再考一次',

  /* QuizSession */
  noItems: '本次練習沒有題目。',
  submitConfirmLeft: (n: number) => `還有 ${n} 題未作答，確定要交卷嗎？`,
  submitConfirm: '確定要交卷嗎？',
  leaveConfirm: '確定要離開嗎？本次作答不會計分。',
  submit: '交卷',
  reshuffleTitle: '換題目順序',
  reshuffleConfirm: '重新洗牌並從第 1 題開始？（已作答的紀錄會保留）',
  counter: (i: number, n: number) => `第 ${i} / ${n} 題`,
  next: '下一題 →',
  skip: '略過 →',
  finish: '完成',

  /* OrderInteraction */
  orderHint: '點下方片段依序排入句子，點已排入的片段可取消；★ 為作答重點位置。',
  slotLabel: (n: number) => `第 ${n} 格`,
  slotLabelStar: (n: number) => `★ 位置（第 ${n} 格）`,

  /* ListeningInteraction */
  noVoiceShort: '此瀏覽器無日文語音',
  degradedBanner: '此瀏覽器無日文語音，聽解改為閱讀腳本練習',
  play: '▶ 播放',
  playLeft: (n: number) => `▶ 播放（剩 ${n} 次）`,
  readQuestion: '🔈 唸問題',
  playsUsedUp: '播放次數已用完',

  /* SessionResult / Explanation */
  scoreLinePrefix: '答對 ',
  scoreLineSuffix: (total: number, pct: number) => ` / ${total} 題（${pct}%）`,
  listeningFallback: '（聽解）',
  correctVerdict: '〇 答對了！',
  wrongVerdict: '✕ 答錯了',

  /* PassagePanel */
  passageDefaultTitle: '本文',
  passageCount: (i: number, t: number) => `第 ${i} / ${t} 題`,
  expand: '展開 ▾',
  collapse: '收合 ▴',

  /* Kaiwa */
  catTourism: '觀光日語',
  catBusiness: '商務・專業',
  kaiwaEmpty: '情境會話內容建置中，敬請期待。',
  building: '內容建置中',
  suggested: (level: string) => `建議 ${level}`,
  sceneMeta: (d: number, p: number) => `${d} 段對話・${p} 常用句`,
  tabDialogue: '對話',
  tabPhrases: '常用句',
  tabDrill: '練習',
  sceneNotFound: '找不到這個場景，內容可能還在建置中。',
  sceneTtsNote: '此裝置沒有日文語音，播放功能停用——文字內容仍可正常閱讀。',
  dialogueEmpty: '對話內容建置中',
  phrasesEmpty: '常用句內容建置中',
  noVoiceTip: '此裝置沒有日文語音，無法播放',
  furiganaToggle: (on: boolean) => `假名 ${on ? 'ON' : 'OFF'}`,
  translationOn: '中文 ON',
  translationOff: '隱藏中文（練聽力）',
  playAllDialogue: '▶ 整段連播',
  stopBtn: '■ 停止',
  playThisLine: '唸這一行',
  playAllPhrases: '▶ 全部連播',
  playThisPhrase: '唸這一句',

  /* Cards */
  cardsTitle: '單字卡',
  cardsEmpty1: '單字卡建置中，敬請期待！',
  cardsEmpty2: '之後會有 N5～N1 各級單字卡，用間隔複習幫你記牢。',
  srsNote: '間隔複習（SRS）：到期的卡優先，每次最多帶 10 張新卡。',
  totalCards: (n: number) => `共 ${n} 張`,
  dueCards: (n: number) => `今日到期 ${n} 張`,
  newCards: (n: number) => `新卡 ${n} 張`,
  startReview: '開始複習',
  noCardsToday: '今天沒有到期或新的卡片，明天再來吧！',
  sessionDone: '本次複習完成 🎉',
  reviewedUnit: ' 張複習',
  learnedUnit: ' 張新學',
  againNote: '評「再來一次」的卡已排回今天，之後還會出現。',
  deckStatus: (level: string, n: number) => `${level} 單字卡・剩 ${n} 張`,
  flipToFront: '翻回正面',
  flipToBack: '翻到背面',
  pronounce: '🔊 發音',
  flipHint: '點卡片翻面（空白鍵）',
  sayExample: '🔊 唸例句',
  flipToAnswer: '翻面看答案',
  rateAgain: '再來一次',
  rateHard: '困難',
  rateGood: '良好',
  rateEasy: '簡單',

  /* WrongBook */
  itemGone: '（題目已下架，找不到內容）',
  listeningItem: '（聽解題）',
  dueBadge: '今日到期',
  wrongTimes: (n: number) => `錯 ${n} 次`,
  clearedMark: '已克服 ✓',
  streakProgress: (s: number) => `連對進度 ${s}/2`,
  nextReview: (d: string) => `下次複習 ${d}`,
  wrongTitle: '錯題本',
  wrongEmpty1: '還沒有錯題，去做題吧！',
  wrongEmpty2: '做題時答錯的題目會自動收進來，隔 1／3／7 天提醒你重刷。',
  redoDue: (n: number) => `重刷到期錯題（${n}）`,
  wrongSub: '答錯後隔 1／3／7 天到期重現；連續答對 2 次即視為克服。',
  dueSection: (n: number) => `今日到期（${n}）`,
  noDueToday: '今天沒有到期的錯題，太棒了！',
  unclearedSection: (n: number) => `全部未克服（${n}）`,
  allCleared: '所有錯題都克服了！',
  clearedSection: (n: number) => `已克服（${n}）`,

  /* StatsView */
  statsTitle: '學習統計',
  statsEmpty1: '還沒有作答紀錄，先去做幾題吧！',
  statsEmpty2: '做題後這裡會顯示各級別、各科目的正確率與弱點分析。',
  weakTitle: (min: number) => `最弱 3 單元（作答 ≥${min} 題）——點一下去補強`,
  accTable: '級別 × 科目正確率',
  levelCol: '級別',
  overview: '總覽',
  streakTile: '每日一練連續打卡',
  daysUnit: '天',
  wrongUnclearedTile: '錯題本・未克服',
  wrongUnclearedVal: (due: number) => `題（今日到期 ${due}）`,
  wrongClearedTile: '錯題本・已克服',
  qUnit: '題',
  mockBestTile: (level: string) => `${level} 模考最佳`,
  mockBestVal: (date: string) => `分・${date}`,
  goWrong: '前往錯題本',
  unitDetail: '各單元明細（點一下可去練習）',

  /* DailyChallenge */
  dailyTitle: '每日一練',
  dailyEmpty: '題庫建置中，過幾天再來吧！',
  dailyTitleDate: (d: string) => `每日一練 ${d}`,
  doneToday: '今日已完成！',
  streakLine: (n: number) => `連續打卡 ${n} 天 🔥`,
  dailyHint: '每天一組新題目，明天再來保持手感！',
  replayBtn: '再玩一次（不計分）',

  /* Settings */
  languageLabel: '介面語言',
  ttsRateLabel: '朗讀語速',
  autoByLevel: '自動（依級別）',
  resetAuto: '重設為自動',
  showFuriganaLabel: '顯示假名注音（振り仮名）',
  showTranslationLabel: '顯示中文翻譯',
  backupLabel: '資料備份',
  exportBtn: '匯出備份',
  importBtn: '匯入備份',
  exportedMsg: '已匯出備份檔 nihongo-quest-backup.json。',
  importOk: '匯入成功！學習進度已還原。',
  importBadFormat: '匯入失敗：檔案格式不對（要選 nihongo-quest 匯出的備份檔）。',
  importReadFail: '匯入失敗：讀不到這個檔案。',
  storageNote:
    '學習進度只存在這台裝置的瀏覽器（localStorage），不會上傳到任何伺服器。換裝置或清瀏覽器資料前，記得先「匯出備份」，再到新環境「匯入備份」還原。',

  /* SpeedControl / TTSButton / Timer */
  speedLabel: '語速',
  autoShort: '自動',
  restoreAuto: '恢復自動',
  playDefault: '▶ 播放',
  stopPlaying: '⏸ 停止',
  timeLeft: '剩餘時間',

  /* session/score 計畫標題 */
  sceneDrillTitle: (scene: string) => `${scene}練習`,
  sceneDrillEmpty: '練習題建置中',
  dailyPlanTitle: (date: string) => `每日一練 ${date}`,
  replayPlanTitle: (date: string) => `每日一練 ${date}（重玩・不計分）`,
  reviewPlanTitle: (n: number) => `錯題重刷（${n} 題）`,
  mockPlanTitle: (level: string) => `${level} 迷你模擬考`,
}

type Strings = typeof zh

const en: Strings = {
  backHome: '← Home',
  back: '← Back',
  ret: 'Back',
  leave: '← Leave',
  exit: 'Leave',
  goHome: 'Home',
  goPractice: 'Start practicing',

  appTitle: 'Nihongo Quest',
  appSub: 'Original JLPT N5–N1 drills · travel & business Japanese',
  dailyDoneBanner: (score, total) => `Daily done ${score}/${total}`,
  dailyPrompt: 'Daily challenge — same questions worldwide, every day',
  streakDays: (n) => `🔥 ${n}-day`,
  jlptSection: 'JLPT practice by level',
  contentPreparing: 'Coming soon',
  levelMeta: (count, filled, total) => `${count} questions · ${filled}/${total} types`,
  kaiwaSection: 'Conversation',
  kaiwaEntry: 'Travel & business scenes',
  kaiwaEntryMeta: (t1, t2, b1, b2) => `${t1}/${t2} travel · ${b1}/${b2} business`,
  reviewSection: 'Review tools',
  cardsEntry: 'Flashcards',
  cardsEntryMeta: (levels) => `Spaced repetition ${levels}`,
  wrongEntry: 'Mistake notebook',
  wrongEntryDue: (n) => `${n} due today`,
  wrongEntryEmpty: 'Wrong answers auto-collected',
  statsEntry: 'Weakness stats',
  statsEntryMeta: 'Find the question types to work on',
  settingsBtn: '⚙ Settings',
  settingsCollapse: ' (hide)',
  finePrint:
    'A personal study aid, not affiliated with the JLPT organizers; all questions are original and mock-exam scores are rough estimates only.',

  levelPractice: (level) => `${level} Practice`,
  levelEmpty: 'Content for this level is in the works — stay tuned.',
  unitMetaCount: (n) => `${n} questions`,
  unitMetaAcc: (acc) => ` · accuracy ${acc}%`,
  mockSection: 'Mock exam',
  mockTitle: (level) => `${level} Mini Mock Exam`,
  mockEntryMeta: 'Scaled-down official format · timed · estimated score for reference only',
  mockBestSuffix: (score) => ` | best ${score}/180`,
  mockLocked: 'The mock exam opens once all four sections have content.',

  mockNotReady:
    'This level is not complete yet, so the mock exam is unavailable. It opens once every section has questions!',
  mockMetaCount: (n) => `📝 Questions: ${n}`,
  mockMetaTime: (m) => `⏱ Time limit: ${m} min (auto-submits when time is up)`,
  mockMetaRules: '➡️ Linear answering, no going back, no feedback during the exam; listening plays at most twice per question',
  mockDisclaimer:
    '⚠️ Estimates only: this is a scaled-down mock exam and scores are converted linearly from your accuracy, with no direct mapping to official JLPT results.',
  startExam: 'Start',

  mockResultTitle: (level) => `${level} Mini Mock Result`,
  passEst: 'Pass (est.) 🎉',
  failEst: 'Below the pass line (est.)',
  totalEst: 'Total (est.)',
  passLineLabel: (n) => `pass line ${n}`,
  sectionNums: (score, max, correct, total, passLine) =>
    `${score} / ${max} (${correct}/${total} correct, section line ${passLine})`,
  mockResultDisclaimer:
    '⚠️ Scaled-down mock, estimates only: question counts are reduced from the official format and scores are converted linearly from accuracy, with no direct mapping to official JLPT results.',
  reviewHeader: 'Question review',
  unanswered: 'Unanswered',
  correctTag: 'Correct',
  yourChoiceTag: 'Your choice',
  yourAnswerLabel: 'Your answer: ',
  correctAnswerLabel: 'Answer: ',
  retryExam: 'Retake',

  noItems: 'No questions in this session.',
  submitConfirmLeft: (n) => `${n} questions are still unanswered. Submit anyway?`,
  submitConfirm: 'Submit now?',
  leaveConfirm: 'Leave now? This attempt will not be recorded.',
  submit: 'Submit',
  reshuffleTitle: 'Shuffle question order',
  reshuffleConfirm: 'Shuffle the questions and start over from #1? (Answers already recorded are kept.)',
  counter: (i, n) => `Question ${i} / ${n}`,
  next: 'Next →',
  skip: 'Skip →',
  finish: 'Finish',

  orderHint:
    'Tap the segments below to place them in order; tap a placed segment to remove it. ★ marks the position you are asked about.',
  slotLabel: (n) => `Slot ${n}`,
  slotLabelStar: (n) => `★ position (slot ${n})`,

  noVoiceShort: 'No Japanese voice in this browser',
  degradedBanner: 'No Japanese voice in this browser — listening questions switch to script reading',
  play: '▶ Play',
  playLeft: (n) => `▶ Play (${n} left)`,
  readQuestion: '🔈 Read question',
  playsUsedUp: 'No plays left',

  scoreLinePrefix: '',
  scoreLineSuffix: (total, pct) => ` / ${total} correct (${pct}%)`,
  listeningFallback: '(listening)',
  correctVerdict: '〇 Correct!',
  wrongVerdict: '✕ Incorrect',

  passageDefaultTitle: 'Passage',
  passageCount: (i, t) => `Question ${i} / ${t}`,
  expand: 'Expand ▾',
  collapse: 'Collapse ▴',

  catTourism: 'Travel Japanese',
  catBusiness: 'Business & professional',
  kaiwaEmpty: 'Conversation content is in the works — stay tuned.',
  building: 'Coming soon',
  suggested: (level) => `Suggested ${level}`,
  sceneMeta: (d, p) => `${d} dialogues · ${p} phrases`,
  tabDialogue: 'Dialogues',
  tabPhrases: 'Phrases',
  tabDrill: 'Drills',
  sceneNotFound: 'Scene not found — it may still be under construction.',
  sceneTtsNote: 'No Japanese voice on this device, so playback is disabled — all text remains readable.',
  dialogueEmpty: 'Dialogues coming soon',
  phrasesEmpty: 'Phrases coming soon',
  noVoiceTip: 'No Japanese voice on this device — cannot play',
  furiganaToggle: (on) => `Furigana ${on ? 'ON' : 'OFF'}`,
  translationOn: 'Translation ON',
  translationOff: 'Hide translation (train your ear)',
  playAllDialogue: '▶ Play all',
  stopBtn: '■ Stop',
  playThisLine: 'Play this line',
  playAllPhrases: '▶ Play all',
  playThisPhrase: 'Play this phrase',

  cardsTitle: 'Flashcards',
  cardsEmpty1: 'Flashcards are in the works — stay tuned!',
  cardsEmpty2: 'Decks for N5–N1 are coming, with spaced repetition to make them stick.',
  srsNote: 'Spaced repetition (SRS): due cards come first, plus up to 10 new cards per session.',
  totalCards: (n) => `${n} cards`,
  dueCards: (n) => `${n} due today`,
  newCards: (n) => `${n} new`,
  startReview: 'Start review',
  noCardsToday: 'No cards due or new today — come back tomorrow!',
  sessionDone: 'Session complete 🎉',
  reviewedUnit: ' reviewed',
  learnedUnit: ' newly learned',
  againNote: 'Cards rated "Again" are back in today\'s queue and will come around again.',
  deckStatus: (level, n) => `${level} flashcards · ${n} left`,
  flipToFront: 'Flip to front',
  flipToBack: 'Flip to back',
  pronounce: '🔊 Pronounce',
  flipHint: 'Tap card to flip (Space)',
  sayExample: '🔊 Read example',
  flipToAnswer: 'Flip for answer',
  rateAgain: 'Again',
  rateHard: 'Hard',
  rateGood: 'Good',
  rateEasy: 'Easy',

  itemGone: '(question removed — content not found)',
  listeningItem: '(listening question)',
  dueBadge: 'Due today',
  wrongTimes: (n) => `missed ${n}×`,
  clearedMark: 'Cleared ✓',
  streakProgress: (s) => `streak ${s}/2`,
  nextReview: (d) => `next review ${d}`,
  wrongTitle: 'Mistake Notebook',
  wrongEmpty1: 'No mistakes yet — go practice!',
  wrongEmpty2: 'Wrong answers are collected here automatically and resurface after 1 / 3 / 7 days.',
  redoDue: (n) => `Redo due mistakes (${n})`,
  wrongSub: 'Missed questions resurface after 1 / 3 / 7 days; two correct answers in a row clears one.',
  dueSection: (n) => `Due today (${n})`,
  noDueToday: 'Nothing due today — great job!',
  unclearedSection: (n) => `All uncleared (${n})`,
  allCleared: 'All mistakes cleared!',
  clearedSection: (n) => `Cleared (${n})`,

  statsTitle: 'Study Stats',
  statsEmpty1: 'No answers recorded yet — try a few questions first!',
  statsEmpty2: 'Accuracy by level and section, plus weakness analysis, will show up here.',
  weakTitle: (min) => `Weakest 3 units (≥${min} answered) — tap to shore up`,
  accTable: 'Accuracy by level × section',
  levelCol: 'Level',
  overview: 'Overview',
  streakTile: 'Daily challenge streak',
  daysUnit: 'days',
  wrongUnclearedTile: 'Mistakes · uncleared',
  wrongUnclearedVal: (due) => ` (${due} due today)`,
  wrongClearedTile: 'Mistakes · cleared',
  qUnit: '',
  mockBestTile: (level) => `${level} mock best`,
  mockBestVal: (date) => ` pts · ${date}`,
  goWrong: 'Open mistake notebook',
  unitDetail: 'Per-unit detail (tap to practice)',

  dailyTitle: 'Daily Challenge',
  dailyEmpty: 'The question bank is still growing — check back in a few days!',
  dailyTitleDate: (d) => `Daily Challenge ${d}`,
  doneToday: 'Done for today!',
  streakLine: (n) => `${n}-day streak 🔥`,
  dailyHint: 'A fresh set every day — come back tomorrow to keep the momentum!',
  replayBtn: 'Play again (unscored)',

  languageLabel: 'Language',
  ttsRateLabel: 'Speech rate',
  autoByLevel: 'Auto (by level)',
  resetAuto: 'Reset to auto',
  showFuriganaLabel: 'Show furigana',
  showTranslationLabel: 'Show Chinese translation',
  backupLabel: 'Data backup',
  exportBtn: 'Export',
  importBtn: 'Import',
  exportedMsg: 'Backup exported as nihongo-quest-backup.json.',
  importOk: 'Import successful! Progress restored.',
  importBadFormat: 'Import failed: wrong file format (choose a backup exported from nihongo-quest).',
  importReadFail: 'Import failed: could not read this file.',
  storageNote:
    'Progress is stored only in this browser (localStorage) and never uploaded. Before switching devices or clearing browser data, export a backup first, then import it in the new environment.',

  speedLabel: 'Speed',
  autoShort: 'Auto',
  restoreAuto: 'Back to auto',
  playDefault: '▶ Play',
  stopPlaying: '⏸ Stop',
  timeLeft: 'Time left',

  sceneDrillTitle: (scene) => `${scene} drills`,
  sceneDrillEmpty: 'Drills coming soon',
  dailyPlanTitle: (date) => `Daily Challenge ${date}`,
  replayPlanTitle: (date) => `Daily Challenge ${date} (replay · unscored)`,
  reviewPlanTitle: (n) => `Mistake redo (${n} questions)`,
  mockPlanTitle: (level) => `${level} Mini Mock Exam`,
}

const STR: Record<UiLang, Strings> = { zh, en }

/** 元件內 reactive 取字典 */
export function useT(): Strings {
  const lang = useLang((s) => s.lang)
  return STR[lang]
}

/** 非元件（lib）取字典——以呼叫當下語言為準 */
export function t(): Strings {
  return STR[getLang()]
}

/* ==================== 單元標題／科別（英文版） ==================== */

const SECTION_LABEL_EN: Record<Section, string> = {
  vocab: 'Vocabulary',
  grammar: 'Grammar',
  reading: 'Reading',
  listening: 'Listening',
}

const UNIT_TITLE_EN: Record<string, string> = {
  kanji: 'Kanji Reading (漢字読み)',
  hyoki: 'Orthography (表記)',
  gokeisei: 'Word Formation (語形成)',
  bunmyaku: 'Context Fill-in (文脈規定)',
  iikae: 'Paraphrase (言い換え類義)',
  yoho: 'Usage (用法)',
  keishiki: 'Grammar Forms (文の文法１)',
  narabekae: 'Sentence Scramble ★ (文の文法２)',
  bunsho: 'Text Grammar (文章の文法)',
  tanbun: 'Comprehension · Short Passages',
  chubun: 'Comprehension · Mid-length Passages',
  chobun: 'Comprehension · Long Passages',
  togo: 'Integrated Comprehension',
  shucho: 'Thematic Comprehension (Essays)',
  joho: 'Information Retrieval (情報検索)',
  kadai: 'Task-based Listening (課題理解)',
  pointo: 'Point Listening (ポイント理解)',
  gaiyo: 'Gist Listening (概要理解)',
  hatsuwa: 'Verbal Expressions (発話表現)',
  sokuji: 'Quick Response (即時応答)',
  'listening-togo': 'Integrated Listening (統合理解)',
}

const UNIT_GOAL_EN: Record<string, string> = {
  kanji: 'Read kanji words correctly',
  hyoki: 'Write kana words with the right kanji (katakana included at N5)',
  gokeisei: 'Derived and compound word knowledge',
  bunmyaku: 'Pick the word that fits the context',
  iikae: 'Choose the expression closest in meaning',
  yoho: "Judge a word's correct usage in a sentence",
  keishiki: 'Choose the grammar form the sentence calls for',
  narabekae: 'Arrange segments into a correct, natural sentence',
  bunsho: 'Choose expressions that fit the flow of a text',
  tanbun: 'Understand short passages on everyday topics',
  chubun: 'Grasp the causes and key points of mid-length texts',
  chobun: "Follow the outline and the author's view in long texts",
  togo: 'Compare and synthesize multiple texts',
  shucho: "Grasp the writer's claims and opinions in essays",
  joho: 'Find what you need in ads, notices and listings',
  kadai: 'Catch the information needed to solve a task and decide what to do next',
  pointo: 'Listen for points flagged in advance',
  gaiyo: "Get the gist and the speaker's intent from a monologue",
  hatsuwa: 'Choose what to say in a given situation',
  sokuji: 'Pick the right reply to a short utterance',
  'listening-togo': 'Compare and integrate information across longer audio',
}

function unitKey(u: UnitMeta): string {
  return u.section === 'listening' && u.slug === 'togo' ? 'listening-togo' : u.slug
}

/** 單元顯示名（依當前語言） */
export function unitTitle(u: UnitMeta): string {
  return getLang() === 'en' ? UNIT_TITLE_EN[unitKey(u)] ?? u.title : u.title
}

/** 單元ねらい摘要（依當前語言） */
export function unitGoal(u: UnitMeta): string {
  return getLang() === 'en' ? UNIT_GOAL_EN[unitKey(u)] ?? u.goal : u.goal
}

/** 科別標籤（依當前語言） */
export function sectionLabel(section: Section, zhLabel: string): string {
  return getLang() === 'en' ? SECTION_LABEL_EN[section] : zhLabel
}

/** 詳解：英文模式優先用 explanationEn，缺漏 fallback 繁中 */
export function pickExplanation(q: { explanation: string; explanationEn?: string }): string {
  return getLang() === 'en' && q.explanationEn ? q.explanationEn : q.explanation
}

/** 場景標題：英文模式顯示日文題名（學習情境下比中文名更合適） */
export function sceneTitle(title: string, titleJa: string): string {
  return getLang() === 'en' ? titleJa : title
}

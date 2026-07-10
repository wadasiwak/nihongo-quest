import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  // ===== 名詞 6 題（001~006）=====
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-001',
    stem: '駅前のパン屋は、新しいスタッフを（　）するために、ポスターを貼った。',
    options: ['募集', '応募', '出席', '参加'],
    answerIndex: 0,
    explanation:
      '「募集」（招募）指店家等公開徵求人員，「スタッフを募集する」是徵人啟事的固定說法。「応募」方向相反，是應徵者去報名（〜に応募する），店家不能「スタッフを応募する」；「出席」「参加」是出席、參加活動，語境完全不合。',
    explanationEn:
      '「募集」 (to recruit) means a shop or company publicly seeking people; 「スタッフを募集する」 is the set phrase in job postings. 「応募」 works in the opposite direction — the applicant applies (「〜に応募する」), so a shop cannot 「スタッフを応募する」; 「出席」 (attend) and 「参加」 (participate) refer to events and are completely out of context.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-002',
    stem: '電気代を（　）するために、使わない部屋の電気はこまめに消している。',
    options: ['節約', '貯金', '削除', '減少'],
    answerIndex: 0,
    explanation:
      '「節約」（節省）指減少不必要的花費，「電気代を節約する」是常見搭配。「貯金」是把錢存起來，對象是存款而非電費；「削除」用於刪除資料、文字；「減少」是自動詞性質的漢語，不能直接說「電気代を減少する」，要用「減少させる」。',
    explanationEn:
      '「節約」 (to save, economize) means cutting unnecessary expenses; 「電気代を節約する」 is a common collocation. 「貯金」 means putting money into savings — its object is savings, not a utility bill; 「削除」 is for deleting data or text; 「減少」 is intransitive in nature, so you cannot say 「電気代を減少する」 — it would require 「減少させる」.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-003',
    stem: '電車の事故で、大事な会議に３０分も（　）してしまった。',
    options: ['遅刻', '延期', '中止', '欠席'],
    answerIndex: 0,
    explanation:
      '「遅刻」（遲到）指比規定時間晚到，可以搭配「３０分」表示遲到的長度。「延期」是把日期往後延，主語應是主辦方且不會說「３０分延期してしまった」；「中止」是取消；「欠席」是缺席，人根本沒到，與「３０分」的長度表現矛盾。',
    explanationEn:
      '「遅刻」 (to be late) means arriving after the appointed time and naturally combines with 「３０分」 to say how late. 「延期」 means postponing a date — the organizer would be the subject, and 「３０分延期してしまった」 is unnatural; 「中止」 means cancellation; 「欠席」 means not showing up at all, which contradicts the 30-minute duration.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-004',
    stem: '夏休みに読んだ本の（　）を、四百字にまとめて提出した。',
    options: ['感想', '感覚', '感情', '感心'],
    answerIndex: 0,
    explanation:
      '「感想」（感想、讀後感）指看完、讀完某物後的想法，「本の感想を書く」是讀書心得的固定說法。「感覚」是身體或直覺上的感覺；「感情」是喜怒哀樂等情緒本身；「感心」是對他人表現的佩服（〜に感心する），都不能當作「整理成四百字提交」的內容。',
    explanationEn:
      '「感想」 (impressions, thoughts) refers to what you think after reading or watching something; 「本の感想を書く」 is the set phrase for a book report. 「感覚」 is a physical or intuitive sensation; 「感情」 means the emotions themselves; 「感心」 is admiration for someone\'s performance (「〜に感心する」) — none can be something you summarize in 400 characters and submit.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-005',
    stem: 'このレポートの提出の（　）は、今週の金曜日までだ。',
    options: ['期限', '時刻', '時期', '時代'],
    answerIndex: 0,
    explanation:
      '「期限」（期限、截止日）指最後可接受的時間點，與「〜までだ」呼應，「提出の期限」＝繳交期限。「時刻」是幾點幾分的鐘點，不會用星期幾表示；「時期」是大致的時節、階段，不能接「まで」表截止；「時代」指歷史或人生的時代，語境不合。',
    explanationEn:
      '「期限」 (deadline) is the last acceptable point in time and pairs with 「〜までだ」; 「提出の期限」 means the submission deadline. 「時刻」 is a clock time in hours and minutes, never expressed by a day of the week; 「時期」 is a rough season or phase and cannot take 「まで」 as a cutoff; 「時代」 refers to a historical era, which does not fit here.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-006',
    stem: '来週の打ち合わせですが、ご（　）のいい日を教えていただけますか。',
    options: ['都合', '事情', '場合', '様子'],
    answerIndex: 0,
    explanation:
      '「都合」（方便與否、時間安排）用於詢問對方時間上方不方便，「ご都合のいい日」是商務邀約的固定表現。「事情」是背後的緣由、內情，沒有「事情のいい日」的說法；「場合」是「〜的情況」，不能加「ご」修飾日期；「様子」是樣子、狀況，搭配也不成立。',
    explanationEn:
      '「都合」 (convenience, availability) is used to ask whether a time works for someone; 「ご都合のいい日」 is the fixed business expression for arranging a meeting. 「事情」 means underlying circumstances — 「事情のいい日」 is not a valid phrase; 「場合」 means "in the case of" and cannot take 「ご」 to describe a date; 「様子」 (appearance, state) does not collocate here either.',
  },

  // ===== 動詞 6 題（007~012）=====
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-007',
    stem: '足にけがをしていたが、最後まで（　）して走り続けた。',
    options: ['我慢', '遠慮', '賛成', '反省'],
    answerIndex: 0,
    explanation:
      '「我慢する」（忍耐）指忍住疼痛、不滿等繼續撐下去，與「腳受傷仍跑完全程」的語境相符。「遠慮する」是顧慮他人而客氣、推辭，對象是人際場面而非疼痛；「賛成する」是贊成意見；「反省する」是反省過錯，都無法說明忍痛跑步的行為。',
    explanationEn:
      '「我慢する」 (to endure) means bearing pain or discomfort and pushing on, which fits running to the end despite an injured leg. 「遠慮する」 means holding back out of politeness toward others — a social situation, not physical pain; 「賛成する」 means agreeing with an opinion; 「反省する」 means reflecting on one\'s mistakes. None can describe running through pain.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-008',
    stem: 'チェックインの前に、ホテルのフロントに荷物を（　）、近くを散歩した。',
    options: ['預けて', 'しまって', '隠して', '貯めて'],
    answerIndex: 0,
    explanation:
      '「預ける」（寄放、託管）指把物品暫時交給對方保管，「フロントに荷物を預ける」是旅館場景的固定說法。「しまう」是把東西收進自己的抽屜、櫃子裡，不能收進「櫃檯這個對象」；「隠す」是藏起來不讓人發現；「貯める」是儲存金錢、點數，語境皆不合。',
    explanationEn:
      '「預ける」 (to leave in someone\'s care) means temporarily handing an item over for safekeeping; 「フロントに荷物を預ける」 is the set phrase in hotel situations. 「しまう」 means putting things away in your own drawer or closet, not handing them to a front desk; 「隠す」 means hiding something from view; 「貯める」 is for saving up money or points. None fit this context.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-009',
    stem: 'タクシーを使ったおかげで、なんとか最終電車に（　）。',
    options: ['間に合った', '追いついた', '近づいた', '届いた'],
    answerIndex: 0,
    explanation:
      '「間に合う」（趕上、來得及）指在時限前趕到，「最終電車に間に合う」與「おかげで」（多虧）的正面結果相呼應。「追いつく」是追上前方移動中的人或車，不能用於趕上發車時間；「近づく」只是靠近，沒有趕上的意思；「届く」是物品送達或搆得到，主語應是東西。',
    explanationEn:
      '「間に合う」 (to make it in time) means arriving before a deadline; 「最終電車に間に合う」 matches the positive outcome implied by 「おかげで」 (thanks to). 「追いつく」 means catching up with a person or vehicle moving ahead of you, not making a departure time; 「近づく」 merely means getting closer; 「届く」 is for items being delivered or something being within reach — its subject should be a thing.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-010',
    stem: '重い本を入れすぎて、紙袋が（　）しまった。',
    options: ['破れて', '割れて', '折れて', '切れて'],
    answerIndex: 0,
    explanation:
      '「破れる」（破掉）用於紙、布等薄的東西被撐破、撕破，「紙袋が破れる」是自然搭配。「割れる」用於玻璃、盤子等硬物碎裂；「折れる」用於棒狀物折斷（如骨頭、樹枝）；「切れる」用於繩線斷掉或東西用完，都不用於描述紙袋破裂。',
    explanationEn:
      '「破れる」 (to tear) is used for thin materials like paper or cloth ripping open; 「紙袋が破れる」 is the natural collocation. 「割れる」 is for hard objects such as glass or plates shattering; 「折れる」 is for stick-shaped things snapping, like bones or branches; 「切れる」 is for strings breaking or supplies running out — none describe a paper bag tearing.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-011',
    stem: '家を出る前に、窓のかぎを閉めたかどうか（　）。',
    options: ['確かめた', '数えた', '試した', '計った'],
    answerIndex: 0,
    explanation:
      '「確かめる」（確認）指查證某事是否屬實，常接「〜かどうか」，「かぎを閉めたか確かめる」是日常固定用法。「数える」是數數量；「試す」是試用、測試性能，對象應是物品或能力；「計る」是測量時間、長度，都不能接「〜かどうか」表示確認事實。',
    explanationEn:
      '「確かめる」 (to check, verify) means making sure whether something is true and commonly takes 「〜かどうか」; 「かぎを閉めたか確かめる」 is everyday usage. 「数える」 means counting quantities; 「試す」 means trying out or testing an object or ability; 「計る」 means measuring time or length — none of them can take 「〜かどうか」 to express confirming a fact.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-012',
    stem: '日本に来て半年がたち、やっと新しい生活に（　）きた。',
    options: ['慣れて', '覚えて', '知って', '決めて'],
    answerIndex: 0,
    explanation:
      '「慣れる」（習慣）指反覆經驗後不再感到吃力，助詞用「に」，「生活に慣れる」與「やっと〜てきた」的漸變語感相符。「覚える」（記住）和「決める」（決定）都是他動詞，助詞應用「を」；「知る」是知道資訊，不能表達逐漸適應的過程。',
    explanationEn:
      '「慣れる」 (to get used to) means no longer finding something a struggle after repeated experience; it takes the particle 「に」, and 「生活に慣れる」 matches the gradual nuance of 「やっと〜てきた」. 「覚える」 (to memorize) and 「決める」 (to decide) are transitive verbs requiring 「を」; 「知る」 means knowing information and cannot express a gradual process of adapting.',
  },

  // ===== 形容詞 4 題（013~016）=====
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-013',
    stem: '田中さんはパソコンに（　）ので、困ったときはいつも彼に聞いている。',
    options: ['詳しい', '細かい', '深い', '正しい'],
    answerIndex: 0,
    explanation:
      '「詳しい」（熟悉、精通）搭配「〜に詳しい」表示對某領域很了解，正好呼應「有問題就問他」。「細かい」是細小、瑣碎，「パソコンに細かい」不成立；「深い」是深的，形容知識時要說「知識が深い」，不能接「に」；「正しい」是正確的，語境不合。',
    explanationEn:
      '「詳しい」 in the pattern 「〜に詳しい」 means being very knowledgeable about a field, which matches always asking him when in trouble. 「細かい」 means small or fussy — 「パソコンに細かい」 does not work; 「深い」 means deep, and for knowledge you would say 「知識が深い」, not use 「に」; 「正しい」 means correct and does not fit the context.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-014',
    stem: 'うちの犬はとても（　）、知らない人が来てもほとんどほえない。',
    options: ['おとなしくて', 'そそっかしくて', 'ずうずうしくて', 'あわただしくて'],
    answerIndex: 0,
    explanation:
      '「おとなしい」（乖巧、安靜）形容性格溫順不吵鬧，與「陌生人來也幾乎不叫」的描述一致。「そそっかしい」是冒失、粗心；「ずうずうしい」是厚臉皮；「あわただしい」是匆忙慌亂，多形容時間或氣氛，三者都無法說明狗安靜不叫的性格。',
    explanationEn:
      '「おとなしい」 (gentle, well-behaved) describes a docile, quiet temperament, consistent with a dog that barely barks even when strangers come. 「そそっかしい」 means careless or scatterbrained; 「ずうずうしい」 means shameless or pushy; 「あわただしい」 means hectic and usually describes time or an atmosphere — none of the three explain the dog\'s quiet nature.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-015',
    stem: '十年ぶりに母校を訪ねて、（　）気持ちでいっぱいになった。',
    options: ['懐かしい', '珍しい', '怪しい', '詳しい'],
    answerIndex: 0,
    explanation:
      '「懐かしい」（懷念的）形容回想起過去而感到溫暖思念，「十年ぶりに母校を訪ねる」正是典型觸發懷念的場景。「珍しい」是罕見的，母校對本人而言並不稀奇；「怪しい」是可疑的；「詳しい」是熟悉、詳細的，都不能形容重回母校的心情。',
    explanationEn:
      '「懐かしい」 (nostalgic) describes the warm longing felt when recalling the past; 「十年ぶりに母校を訪ねる」 is the classic scene that triggers nostalgia. 「珍しい」 means rare — your own alma mater is hardly a novelty to you; 「怪しい」 means suspicious; 「詳しい」 means knowledgeable or detailed. None can describe the feeling of revisiting your old school.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-016',
    stem: 'この町では、昔から漁業が（　）で、港には毎朝多くの船が並ぶ。',
    options: ['盛ん', '熱心', '得意', '器用'],
    answerIndex: 0,
    explanation:
      '「盛ん」（興盛、盛行）形容產業、活動蓬勃發展，「漁業が盛んだ」是介紹地方特色的固定說法。「熱心」（熱衷）的主語應是人（研究に熱心だ），產業本身不能「熱心」；「得意」是擅長，主語也是人；「器用」是手巧，同樣只能形容人，語境皆不合。',
    explanationEn:
      '「盛ん」 (thriving, flourishing) describes industries or activities in full swing; 「漁業が盛んだ」 is the set phrase for introducing a region\'s specialty. 「熱心」 (enthusiastic) requires a human subject (「研究に熱心だ」) — an industry itself cannot be 「熱心」; 「得意」 (good at) also takes a person as subject; 「器用」 (dexterous) likewise only describes people.',
  },

  // ===== 副詞 4 題（017~020）=====
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-017',
    stem: '駅で（　）高校時代の友人に会って、びっくりした。',
    options: ['たまたま', 'わざわざ', 'いよいよ', 'そろそろ'],
    answerIndex: 0,
    explanation:
      '「たまたま」（碰巧、偶然）表示沒有計畫、偶然發生，與後句「びっくりした」（嚇了一跳）呼應——正因為是偶遇才會驚訝。「わざわざ」是特地、專程，表示刻意安排，與驚訝矛盾；「いよいよ」是「終於（重頭戲要來了）」；「そろそろ」是「差不多該〜了」，都不能修飾偶遇。',
    explanationEn:
      '「たまたま」 (by chance) marks something unplanned, which matches the following 「びっくりした」 — you are surprised precisely because the meeting was accidental. 「わざわざ」 means going out of your way on purpose, which contradicts the surprise; 「いよいよ」 means "at last (the big moment is here)"; 「そろそろ」 means "it\'s about time to" — neither can modify a chance encounter.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-018',
    stem: 'あの大学に（　）入りたくて、毎日夜遅くまで勉強している。',
    options: ['どうしても', 'なかなか', 'ちっとも', 'めったに'],
    answerIndex: 0,
    explanation:
      '「どうしても」（無論如何都要）強調不管怎樣都想實現的強烈願望，搭配「入りたい」正好表達非上這所大學不可的決心。「なかなか」接肯定時意思是「相當地」，不能修飾願望「入りたい」；「ちっとも」「めったに」都必須搭配否定形（〜ない），接肯定句文法就錯了。',
    explanationEn:
      '「どうしても」 (no matter what) stresses a strong desire to achieve something at all costs; with 「入りたい」 it expresses the determination to get into this particular university. 「なかなか」 with an affirmative means "quite, fairly" and cannot modify the desire 「入りたい」; 「ちっとも」 and 「めったに」 both require a negative (「〜ない」), so they are grammatically wrong in an affirmative sentence.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-019',
    stem: '五年ぶりに会ったが、彼は（　）元気そうで、安心した。',
    options: ['相変わらず', '今にも', 'せっかく', 'たまに'],
    answerIndex: 0,
    explanation:
      '「相変わらず」（依舊、和以前一樣）表示與過去相比沒有變化，正合「五年ぶりに会った」的重逢語境——他還是老樣子很有精神，所以放心。「今にも」是「眼看就要〜」，後面要接「泣きそうだ」等即將發生的事；「せっかく」是「難得、好不容易」；「たまに」是「偶爾」，描述頻率，與單次重逢矛盾。',
    explanationEn:
      '「相変わらず」 (as always) means unchanged compared with before, fitting the reunion context of 「五年ぶりに会った」 — he is his usual energetic self, hence the relief. 「今にも」 means "at any moment" and must precede something imminent like 「泣きそうだ」; 「せっかく」 means "with much effort, a rare chance"; 「たまに」 (occasionally) describes frequency and contradicts a single reunion.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-bunmyaku-020',
    stem: '（　）かぎを家の中に置いたまま、ドアを閉めてしまった。',
    options: ['うっかり', 'しっかり', 'はっきり', 'ゆっくり'],
    answerIndex: 0,
    explanation:
      '「うっかり」（不小心、一時疏忽）表示無意間犯錯，與「〜てしまった」的懊悔語氣相呼應，把鑰匙鎖在家裡正是典型的粗心失誤。「しっかり」是牢牢地、確實地，語感恰好相反；「はっきり」是清楚地，修飾說話、記憶；「ゆっくり」是慢慢地，都不能表達疏忽犯錯。',
    explanationEn:
      '「うっかり」 (carelessly, absent-mindedly) marks an unintentional slip and echoes the regretful tone of 「〜てしまった」; locking your key inside the house is the classic careless mistake. 「しっかり」 means firmly or properly — the exact opposite nuance; 「はっきり」 means clearly and modifies speech or memory; 「ゆっくり」 means slowly. None can express a careless error.',
  },
]

import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-001',
    stem: '先月この会社に（　）ばかりなので、まだ仕事に慣れていません。',
    options: ['入った', '入る', '入って', '入り'],
    answerIndex: 0,
    explanation:
      '「〜たばかりだ」表「才剛做完不久」，前面必須接動詞た形，故「入った」正確。「入るばかり」是「就只剩下要…」的用法，與「還不習慣工作」的語境不合；「入って」「入り」都不能直接接「ばかりなので」表剛完成。',
    explanationEn:
      '「〜たばかりだ」 means "just did something a short while ago" and must follow the plain past (ta-form), so 「入った」 is correct. 「入るばかり」 with the dictionary form means "all that is left to do is...", which clashes with "not yet used to the job"; 「入って」 and 「入り」 cannot attach to 「ばかりなので」 to express recent completion.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-002',
    stem: '弟は勉強もしないで、一日中ゲームを（　）いる。',
    options: ['してばかり', 'するばかり', 'したばかり', 'しようばかり'],
    answerIndex: 0,
    explanation:
      '「〜てばかりいる」表「老是、光是做某事」，帶責備語氣，動詞用て形接「ばかりいる」，故「してばかりいる」正確。「したばかり」是「才剛做完」，後面不能接「いる」；「するばかり」「しようばかり」接續錯誤，都無法與句尾「いる」構成文型。',
    explanationEn:
      '「〜てばかりいる」 means "does nothing but..." with a reproachful tone; the verb takes the te-form before 「ばかりいる」, so 「してばかり」いる is correct. 「したばかり」 means "just finished doing" and cannot be followed by 「いる」; 「するばかり」 and 「しようばかり」 are grammatically impossible connections that cannot combine with the sentence-final 「いる」.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-003',
    stem: '田中さんは10年もアメリカに住んでいたのだから、英語が上手な（　）だ。',
    options: ['はず', 'せい', 'つもり', 'ばかり'],
    answerIndex: 0,
    explanation:
      '「〜はずだ」表根據依據所做的合理推測（照理說應該…），前句「住了十年美國」正是推測依據，故「上手なはずだ」正確。「せいだ」用於歸咎壞結果的原因，語境不合；「つもりだ」是「自以為…」，與前句的客觀推理矛盾。',
    explanationEn:
      '「〜はずだ」 expresses a well-grounded expectation ("he should be..."), and the first clause "he lived in America for ten years" is exactly that grounds, so 「上手なはずだ」 is correct. 「せいだ」 blames something for a bad outcome, which does not fit; 「つもりだ」 here would mean "he fancies himself good at English", contradicting the objective reasoning of the sentence.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-004',
    stem: 'なるほど、彼女は10年もパリに住んでいたのか。道理でフランス語が上手な（　）だ。',
    options: ['わけ', 'はず', 'つもり', 'ところ'],
    answerIndex: 0,
    explanation:
      '「〜わけだ」表「難怪、怪不得」，用於得知理由後對已確認事實的恍然大悟，與「道理で」是固定搭配，故「わけだ」正確。「はずだ」是對尚未確認之事的推測，這裡法語流利是已知事實，不能用；「ところだ」表動作階段，接續與語意皆不合。',
    explanationEn:
      '「〜わけだ」 means "no wonder / that explains it", used when a known fact suddenly makes sense after learning the reason, and it pairs idiomatically with 「道理で」, so it is correct. 「はずだ」 is an inference about something not yet confirmed, but her fluent French is an already-established fact; 「ところだ」 marks the stage of an action and fits neither the grammar nor the meaning here.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-005',
    stem: '昨夜コーヒーを飲みすぎた（　）、なかなか眠れなかった。',
    options: ['せいで', 'おかげで', 'ながら', 'とおりに'],
    answerIndex: 0,
    explanation:
      '「〜せいで」表造成壞結果的原因（都怪…），後句「睡不著」是負面結果，故「せいで」正確。「おかげで」用於帶感謝語氣的好結果，與負面結果不合；「ながら」須接動詞ます形表同時進行，接續錯誤；「とおりに」表「照著…」，語意不通。',
    explanationEn:
      '「〜せいで」 assigns blame for a bad outcome ("because of / thanks to, in the negative sense"), and the result clause "could not fall asleep" is negative, so it is correct. 「おかげで」 credits a positive outcome with gratitude, so it clashes with the bad result; 「ながら」 must attach to the masu-stem to mean "while doing", so the connection is wrong; 「とおりに」 ("just as / following...") makes no sense here.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-006',
    stem: '先生が丁寧に教えてくださった（　）、試験に合格できました。',
    options: ['おかげで', 'せいで', 'くせに', 'ばかりに'],
    answerIndex: 0,
    explanation:
      '「〜おかげで」表「托…的福」，用於好結果並帶感謝之意，後句「考試合格」是正面結果，故正確。「せいで」與「ばかりに」都用於歸咎壞結果的原因，語境相反；「くせに」表「明明…卻」的責難語氣，與感謝老師的語境完全不合。',
    explanationEn:
      '「〜おかげで」 means "thanks to..." and is used for good outcomes with a nuance of gratitude; passing the exam is a positive result, so it is correct. 「せいで」 and 「ばかりに」 both blame a cause for a bad outcome — the opposite context; 「くせに」 conveys reproach ("even though..."), which is completely at odds with thanking the teacher.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-007',
    stem: 'スープが冷めない（　）、早く飲んでください。',
    options: ['うちに', 'あとで', 'までに', 'ながら'],
    answerIndex: 0,
    explanation:
      '「〜ないうちに」表「趁著還沒…的時候」，「冷めないうちに」即「趁還沒涼」，故正確。「までに」表動作的最後期限，前面不接「冷めない」這種狀態否定；「あとで」表「…之後」，與「還沒涼」語意矛盾；「ながら」接續錯誤且語意不通。',
    explanationEn:
      '「〜ないうちに」 means "while something has not yet happened", so 「冷めないうちに」 is "before the soup gets cold" — correct. 「までに」 marks a deadline for an action and does not follow a stative negative like 「冷めない」; 「あとで」 ("after...") contradicts the idea of the soup not yet being cold; 「ながら」 is both grammatically and semantically impossible here.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-008',
    stem: '授業中に携帯が鳴ってしまった。ちょうど先生が大事な説明をしている（　）だったので、とても恥ずかしかった。',
    options: ['ところ', 'ばかり', 'はず', 'つもり'],
    answerIndex: 0,
    explanation:
      '「〜ているところだ」表「正在做…的當下」，與「ちょうど」搭配強調正巧碰上那個時間點，故「しているところだった」正確。「ばかり」表剛完成時須接た形，「しているばかり」不成立；「はず」「つもり」分別表推測與打算，接在此處語意不通。',
    explanationEn:
      '「〜ているところだ」 means "right in the middle of doing...", and with 「ちょうど」 it stresses that the phone rang at exactly that moment, so 「しているところだった」 is correct. 「ばかり」 in the "just finished" sense requires the ta-form, so 「しているばかり」 does not work; 「はず」 (expectation) and 「つもり」 (intention) make no sense in this slot.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-009',
    stem: '子どものころ、嫌いな野菜を母に無理やり（　）。',
    options: ['食べさせられた', '食べさせた', '食べられた', '食べさせてもらった'],
    answerIndex: 0,
    explanation:
      '使役受身「食べさせられる」表「被迫吃」，主詞「我」被媽媽強迫，符合「無理やり」的語境，故正確。「食べさせた」是使役，變成「我逼媽媽吃」，主客顛倒；「食べられた」是單純受身「被媽媽吃掉」，語意不通；「食べさせてもらった」帶請託受惠語氣，與「被強迫」矛盾。',
    explanationEn:
      'The causative-passive 「食べさせられた」 means "I was made to eat", with the speaker forced by his or her mother — matching 「無理やり」 (against my will), so it is correct. Plain causative 「食べさせた」 reverses the roles ("I made my mother eat"); plain passive 「食べられた」 would mean the vegetables were eaten by the mother, which is nonsense; 「食べさせてもらった」 implies gratefully receiving a favor, contradicting being forced.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-010',
    stem: '後ろの席の人にも聞こえる（　）、大きな声で話した。',
    options: ['ように', 'ために', 'ことに', 'ばかりに'],
    answerIndex: 0,
    explanation:
      '「〜ように」表目的，前面接「聞こえる」這類非意志動詞（可能・自動詞），故「聞こえるように」正確。「ために」同樣表目的，但前面必須接意志動詞且前後主語一致，接非意志的「聞こえる」是典型錯誤；「ばかりに」表「就因為…（導致壞結果）」，語意不合。',
    explanationEn:
      '「〜ように」 expresses purpose and takes non-volitional verbs (potential or intransitive) such as 「聞こえる」, so 「聞こえるように」 ("so that the people in the back can hear too") is correct. 「ために」 also expresses purpose but requires a volitional verb with the same subject in both clauses — attaching it to non-volitional 「聞こえる」 is a classic mistake; 「ばかりに」 means "just because... (with a bad result)" and does not fit.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-011',
    stem: 'うわさによると、駅前のあの書店は来月閉店する（　）。',
    options: ['らしい', 'ことにする', 'ようになる', 'ばかりだ'],
    answerIndex: 0,
    explanation:
      '「〜らしい」表根據傳聞或跡象的推測（聽說好像…），與「うわさによると」呼應，故正確。「ことにする」表說話者自己的決定，別人的書店要不要收不是自己能決定的；「ようになる」表能力或習慣的變化，語意不合；「ばかりだ」表「就只剩…」，與傳聞語境不搭。',
    explanationEn:
      '「〜らしい」 expresses an inference based on hearsay or outward signs ("apparently / I hear that..."), which echoes 「うわさによると」 ("according to the rumor"), so it is correct. 「ことにする」 states the speaker\'s own decision, but whether someone else\'s bookstore closes is not the speaker\'s to decide; 「ようになる」 marks a change in ability or habit, which does not fit; 「ばかりだ」 ("all that remains is...") clashes with the hearsay context.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-012',
    stem: '先生、コーヒーとお茶と、どちらを（　）か。',
    options: ['召し上がります', 'いただきます', '拝見します', '申します'],
    answerIndex: 0,
    explanation:
      '詢問老師（上位者）要喝什麼，須用尊敬語抬高對方動作，「飲む・食べる」的尊敬語是「召し上がる」，故正確。「いただく」是謙讓語，只能用於自己的動作，用在老師身上反而失禮；「拝見する」是「見る」的謙讓語、「申す」是「言う」的謙讓語，動詞本身就選錯了。',
    explanationEn:
      'When asking a teacher (a superior) what they will drink, you must use respectful language (sonkeigo) to elevate their action; the honorific form of 「飲む・食べる」 is 「召し上がる」, so it is correct. 「いただく」 is humble language (kenjougo) used only for one\'s own actions — applying it to the teacher is actually rude; 「拝見する」 is the humble form of 「見る」 and 「申す」 the humble form of 「言う」, so those verbs are wrong to begin with.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-013',
    stem: '明日の午後、こちらから御社に（　）ます。',
    options: ['伺い', 'いらっしゃい', 'お越しになり', 'お見えになり'],
    answerIndex: 0,
    explanation:
      '說話者要去對方公司，是自己的動作，須用謙讓語壓低自己，「行く・訪ねる」的謙讓語是「伺う」，故「伺います」正確。「いらっしゃる」「お越しになる」「お見えになる」都是「來・去」的尊敬語，只能用於對方的動作，用在自己身上是典型的敬語誤用。',
    explanationEn:
      'The speaker is visiting the other party\'s company — their own action — so humble language is required to lower oneself; the humble form of 「行く・訪ねる」 is 「伺う」, making 「伺います」 correct. 「いらっしゃる」, 「お越しになる」, and 「お見えになる」 are all honorific forms of "come/go" reserved for the other party\'s actions; using them for oneself is a textbook keigo error.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-014',
    stem: 'この曲を聞く（　）、高校時代のことを思い出す。',
    options: ['たびに', 'とおりに', 'かわりに', 'ばかりに'],
    answerIndex: 0,
    explanation:
      '「〜たびに」表「每當…就…」，每次聽這首歌都會想起高中時代，語意最合。「とおりに」表「照著…做」，聽歌與回憶之間沒有遵循關係；「かわりに」表「代替、作為交換」，語意不通；「ばかりに」表「就因為…才落得壞結果」，此句並非負面結果。',
    explanationEn:
      '「〜たびに」 means "every time... (something happens)": every time the speaker hears this song, memories of high school come back — the best fit. 「とおりに」 means "following / just as instructed", but there is no such compliance relation between hearing a song and remembering; 「かわりに」 ("instead of / in exchange") makes no sense; 「ばかりに」 means "just because..., a bad result followed", yet nothing negative happens here.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-015',
    stem: '来月から大阪支社で働く（　）なりました。',
    options: ['ことに', 'ように', 'ばかりに', 'とおりに'],
    answerIndex: 0,
    explanation:
      '「〜ことになる」表由外部（多為組織）決定的結果，「調到大阪分公司」是公司的人事安排，故「ことになりました」正確。「ようになる」表能力或習慣逐漸產生的變化，不能用於「下個月起」這種尚未開始的既定安排；「ばかりに」「とおりに」接在此處語意皆不通。',
    explanationEn:
      '「〜ことになる」 expresses an outcome decided externally, typically by an organization; being transferred to the Osaka branch is a company personnel decision, so 「ことになりました」 is correct. 「ようになる」 describes a gradual change in ability or habit and cannot be used for a fixed arrangement starting next month; 「ばかりに」 and 「とおりに」 make no sense in this slot.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-016',
    stem: '毎日練習を続けたので、長い距離も泳げる（　）なった。',
    options: ['ように', 'ことに', 'ばかりに', 'ために'],
    answerIndex: 0,
    explanation:
      '「〜ようになる」表能力或狀態的變化（變得會…），前接可能形「泳げる」正是典型用法，故正確。「ことになる」表外部決定的結果，「會游長距離」是能力變化而非誰決定的事；「ばかりになった」是「就只等…」的用法，語境不合；「ためになった」則變成「有益處」，語意不通。',
    explanationEn:
      '「〜ようになる」 expresses a change in ability or state ("came to be able to..."), and following the potential form 「泳げる」 is its textbook use, so it is correct. 「ことになる」 marks an externally decided outcome, but becoming able to swim long distances is an ability change, not someone\'s decision; 「ばかりになった」 means "everything is ready and only... remains", which does not fit; 「ためになった」 would mean "it was beneficial", which is nonsense here.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-017',
    stem: '明日は大事な会議があるので、熱があっても休む（　）。',
    options: ['わけにはいかない', 'わけだ', 'わけがない', 'わけではない'],
    answerIndex: 0,
    explanation:
      '「〜わけにはいかない」表基於社會常理或責任「不能…」，因為有重要會議所以不能請假，語意最合。「わけだ」表「難怪」，語境不符；「わけがない」表「不可能…」的強烈否定推測；「わけではない」表部分否定「並不是…」，兩者接在此處都講不通。',
    explanationEn:
      '「〜わけにはいかない」 means "cannot afford to..." for social or moral reasons: with an important meeting tomorrow, taking the day off is not an option, so it fits best. 「わけだ」 means "no wonder", which does not match the context; 「わけがない」 is a strong denial ("there is no way that..."); 「わけではない」 is partial negation ("it is not that..."); neither makes sense in this sentence.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-018',
    stem: '部屋の電気がついている。中に誰かいる（　）。',
    options: ['に違いない', 'ことはない', 'ものではない', 'はずがない'],
    answerIndex: 0,
    explanation:
      '「〜に違いない」表根據眼前跡象做出的高確信推測（一定是…），「燈亮著」正是判斷依據，故正確。「はずがない」表「不可能有人在」，與燈亮的證據矛盾；「ことはない」表「沒必要…」，「ものではない」表「不該…」的訓誡，兩者語意都不合。',
    explanationEn:
      '「〜に違いない」 expresses a highly confident inference from visible evidence ("must be..."), and the light being on is exactly that evidence, so it is correct. 「はずがない」 would claim it is impossible that anyone is inside, contradicting the evidence of the light; 「ことはない」 means "there is no need to..." and 「ものではない」 is an admonition ("one should not..."), so neither fits the meaning.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-019',
    stem: '今朝は寝坊して、朝ご飯を食べ（　）家を出た。',
    options: ['ずに', 'なくて', 'ずで', 'ないに'],
    answerIndex: 0,
    explanation:
      '「〜ずに」表「沒做…就…」的附帶狀況，等於「〜ないで」，「沒吃早餐就出門」故「食べずに」正確。「なくて」表原因理由（因為沒…所以…），不能用來描述附帶狀況，是典型混淆點；「ずで」「ないに」都是不存在的接續形式。',
    explanationEn:
      '「〜ずに」 describes an attendant circumstance "without doing...", equivalent to 「〜ないで」, so 「食べずに」 ("left home without eating breakfast") is correct. 「なくて」 expresses cause or reason ("because... did not..."), not an attendant circumstance — a classic point of confusion; 「ずで」 and 「ないに」 are connection forms that simply do not exist.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-020',
    stem: 'この小説は、読め（　）読むほど面白くなる。',
    options: ['ば', 'たら', 'と', 'なら'],
    answerIndex: 0,
    explanation:
      '「〜ば〜ほど」（越…越…）是固定句型：同一動詞先用ば形、再重複辭書形接「ほど」，故「読めば読むほど」正確。「たら」「と」「なら」雖然都是條件形式，但都不能與「ほど」構成這個句型，「読めたら読むほど」等說法皆不成立。',
    explanationEn:
      '「〜ば〜ほど」 ("the more..., the more...") is a fixed pattern: the same verb appears first in the ba-form, then repeats in the dictionary form before 「ほど」, so 「読めば読むほど」 is correct. Although 「たら」, 「と」, and 「なら」 are all conditional forms, none of them can combine with 「ほど」 to build this pattern — combinations like 「読めたら読むほど」 are simply ungrammatical.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-021',
    stem: '兄は怒り（　）性格で、小さなことでもすぐ大きな声を出す。',
    options: ['っぽい', 'っぽく', 'っぽさ', 'っぽければ'],
    answerIndex: 0,
    explanation:
      '「〜っぽい」接動詞ます形，表「容易…、有…傾向」，整體當い形容詞用；修飾名詞「性格」須用辭書形，故「怒りっぽい」正確。「っぽく」是連用形，只能修飾後面的動詞或形容詞，不能直接接名詞；「っぽさ」是名詞化形式，後面不能再接「性格」；「っぽければ」是條件形，接續不合。',
    explanationEn:
      '「〜っぽい」 attaches to the masu-stem and means "tends to / easily becomes...", functioning as an i-adjective; to modify the noun 「性格」 it must be in the plain form, so 「怒りっぽい」 is correct. 「っぽく」 is the adverbial form and can only modify a following verb or adjective, not a noun; 「っぽさ」 is a nominalization that cannot be followed by 「性格」; the conditional 「っぽければ」 does not fit this slot.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-022',
    stem: '一人暮らしを始めてから、食事の時間が不規則になり（　）だ。',
    options: ['がち', 'がちに', 'がちな', 'がちの'],
    answerIndex: 0,
    explanation:
      '「〜がちだ」接動詞ます形，表「動不動就…、常常變成…」的（多為負面）傾向，句尾接「だ」時須用原形「がち」，故「なりがちだ」正確。「がちに」是連用修飾形，後面必須接動詞；「がちな」「がちの」是連體形，後面必須接名詞，三者直接接「だ」都不成立。',
    explanationEn:
      '「〜がちだ」 attaches to the masu-stem and expresses a (usually undesirable) tendency, "tends to end up..."; before sentence-final 「だ」 the bare form 「がち」 is required, so 「なりがちだ」 is correct. 「がちに」 is adverbial and must be followed by a verb; 「がちな」 and 「がちの」 are attributive forms that must precede a noun — none of the three can connect directly to 「だ」.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-023',
    stem: '出張中の部長の（　）、今日の会議には私が出席します。',
    options: ['かわりに', 'うちに', 'たびに', 'ばかりに'],
    answerIndex: 0,
    explanation:
      '「名詞＋の＋かわりに」表「代替…」，部長出差由我代為出席會議，語意正確。「うちに」前面須接表時間或狀態的詞（如「留守のうちに」），「部長のうちに」不成立；「たびに」表「每當…」，前面須接動作或事件名詞；「ばかりに」表「就因為…導致壞結果」，接續與語意皆不合。',
    explanationEn:
      '"Noun + の + かわりに" means "in place of...": the manager is away on a business trip, so the speaker attends the meeting instead — correct. 「うちに」 must follow a word expressing a time span or state (e.g. 「留守のうちに」), so 「部長のうちに」 does not work; 「たびに」 ("every time...") requires an action or event noun; 「ばかりに」 ("just because..., a bad result followed") fits neither the connection nor the meaning.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-024',
    stem: '彼女は交換留学生（　）、一年間京都の大学で学んだ。',
    options: ['として', 'にとって', 'に対して', 'について'],
    answerIndex: 0,
    explanation:
      '「〜として」表身分、資格（以…的身分），「以交換留學生的身分在京都的大學學習了一年」語意正確。「にとって」表「對…而言」，後面通常接評價或感受，不能接「学んだ」這種動作句；「に対して」表動作針對的對象；「について」表談論的主題，兩者接在此處語意都不通。',
    explanationEn:
      '「〜として」 marks a role or capacity: "as an exchange student, she studied at a university in Kyoto for a year" — correct. 「にとって」 means "for / from the standpoint of" and is normally followed by an evaluation or feeling, not an action like 「学んだ」; 「に対して」 marks the target of an action and 「について」 marks a topic of discussion — neither makes sense here.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-025',
    stem: '初めて海外で暮らす私（　）、言葉の壁は想像以上に大きな問題だった。',
    options: ['にとって', 'として', 'に対して', 'によって'],
    answerIndex: 0,
    explanation:
      '「〜にとって」表「對…而言、站在…的立場來看」，後面接「大きな問題だった」這類評價句，「對第一次在國外生活的我而言」語意正確。「として」表身分資格，接在此處講不通；「に対して」表動作針對的對象或對比；「によって」表手段、原因或依據，三者都無法與後句的評價語意搭配。',
    explanationEn:
      '「〜にとって」 means "for / from the perspective of" and is followed by an evaluative statement like 「大きな問題だった」, so "for me, living abroad for the first time" is correct. 「として」 marks a role or qualification and makes no sense here; 「に対して」 marks the target of an action or a contrast; 「によって」 expresses means, cause, or basis — none of them pairs with the evaluative predicate.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-026',
    stem: '彼は目上の人（　）は、いつも丁寧な言葉づかいで話す。',
    options: ['に対して', 'にとって', 'について', 'によって'],
    answerIndex: 0,
    explanation:
      '「〜に対して」表動作、態度所針對的對象（對…、向…），「對長輩總是用有禮貌的措辭說話」語意正確。「にとって」表「對…而言」，後面須接評價而非說話態度的對象；「について」表談論主題（關於…），與「丁寧に話す」不搭；「によって」表手段或依據，接在此處皆不合。',
    explanationEn:
      '「〜に対して」 marks the person toward whom an action or attitude is directed ("toward..."), so "he always speaks politely to his superiors" is correct. 「にとって」 ("for...") must be followed by an evaluation, not the target of a speaking manner; 「について」 marks a topic ("about...") and does not pair with speaking politely; 「によって」 expresses means or basis — none of them fits.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-027',
    stem: '次の会議では、新製品の宣伝方法（　）話し合う予定だ。',
    options: ['について', 'に対して', 'にとって', 'として'],
    answerIndex: 0,
    explanation:
      '「〜について」表談論、思考的主題（就…、關於…），與「話し合う」搭配，「針對宣傳方法進行討論」語意正確。「に対して」表動作指向的對象或對比，不與「話し合う」搭配使用；「にとって」表「對…而言」，後面須接評價或感受；「として」表身分資格，接在此處語意皆不合。',
    explanationEn:
      '「〜について」 marks the topic being discussed or considered ("about / concerning...") and collocates with 「話し合う」, so "discuss the promotion plan for the new product" is correct. 「に対して」 marks the target of an action or a contrast and does not pair with 「話し合う」; 「にとって」 ("for...") requires an evaluative or emotional predicate; 「として」 marks a role — neither fits here.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-028',
    stem: '私が旅行に行っている（　）に、庭の花がすっかり枯れてしまった。',
    options: ['間', 'あと', '前', 'たび'],
    answerIndex: 0,
    explanation:
      '「〜ている間に」表「在…的期間（發生了另一件事）」，前接「行っている」，「我去旅行的期間花全枯了」語意通順，故正確。「あと」前面須接動詞た形（行ったあとに）；「前」前面須接辭書形（行く前に）；「たび」前面也須接辭書形，三者接在「ている」後面都是接續錯誤。',
    explanationEn:
      '「〜ている間に」 means "while... (something else happened)"; following 「行っている」 it correctly says the garden flowers withered completely during the speaker\'s trip. 「あと」 requires the ta-form (行ったあとに), 「前」 requires the dictionary form (行く前に), and 「たび」 also requires the dictionary form — attaching any of them to the ている form is a connection error.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-029',
    stem: 'プレゼンをしている（　）に、突然マイクの音が出なくなってしまった。',
    options: ['最中', 'とたん', 'うえ', 'かぎり'],
    answerIndex: 0,
    explanation:
      '「〜ている最中に」表「正在做…的節骨眼上（發生了意外）」，簡報進行到一半麥克風突然沒聲音，故「している最中に」正確。「とたん」表「一…就…」，必須接動詞た形（したとたんに），接「している」是接續錯誤；「うえ」表累加（不但…而且）、「かぎり」表「只要…就」，語意皆不合。',
    explanationEn:
      '「〜ている最中に」 means "right in the middle of doing... (when something unexpected happened)": the microphone suddenly cut out mid-presentation, so it is correct. 「とたん」 ("the moment...") must follow the ta-form (したとたんに), so attaching it to 「している」 is a connection error; 「うえ」 ("on top of that") and 「かぎり」 ("as long as") both fail semantically.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-030',
    stem: 'ゆうべは疲れていて、電気を（　）まま寝てしまった。',
    options: ['つけた', 'つける', 'つけて', 'つけよう'],
    answerIndex: 0,
    explanation:
      '「〜たまま」表「維持某狀態不變就做了另一件事」，前面必須接動詞た形，「燈開著就睡著了」故「つけたまま」正確。「つけるまま」接辭書形不構成「維持狀態」的文型；「つけてまま」「つけようまま」在文法上都不成立——「まま」不能接て形或意向形。',
    explanationEn:
      '「〜たまま」 means "with a state left as it is (while doing something else)" and must follow the ta-form, so 「つけたまま」 ("fell asleep with the light on") is correct. 「つけるまま」 with the dictionary form does not create the "unchanged state" pattern; 「つけてまま」 and 「つけようまま」 are ungrammatical — 「まま」 cannot attach to the te-form or the volitional form.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-031',
    stem: '引っ越しの日は人手が足りないので、兄にも手伝いに（　）。',
    options: ['来てほしい', '来たい', '来よう', '来られたい'],
    answerIndex: 0,
    explanation:
      '「〜てほしい」表希望別人做某動作，希望的對象用「に」標示，「希望哥哥也來幫忙」故「来てほしい」正確。「来たい」是說話者自己想來，與「兄にも」矛盾；「来よう」是意向形，表說話者自己的意志；「来られたい」不是日語中成立的形式，三個干擾項皆錯。',
    explanationEn:
      "「〜てほしい」 expresses wanting someone else to do something, with that person marked by 「に」, so 「来てほしい」 (\"I want my brother to come help too\") is correct. 「来たい」 expresses the speaker's own desire to come, contradicting 「兄にも」; 「来よう」 is the volitional form expressing the speaker's own intention; 「来られたい」 is simply not a valid Japanese form.",
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-032',
    stem: '体調が悪いときは、無理をしないで早めに病院へ（　）べきだ。',
    options: ['行く', '行った', '行って', '行き'],
    answerIndex: 0,
    explanation:
      '「〜べきだ」表基於常理的義務或忠告（應該…），前面必須接動詞辭書形，故「行くべきだ」正確。「行ったべきだ」「行ってべきだ」「行きべきだ」都是接續錯誤——「べき」不能接た形、て形或ます形。只有「する」例外，可說成「すべきだ」。',
    explanationEn:
      '「〜べきだ」 expresses obligation or advice based on common sense ("should...") and must follow the dictionary form, so 「行くべきだ」 is correct. 「行ったべきだ」, 「行ってべきだ」, and 「行きべきだ」 are all connection errors — 「べき」 cannot attach to the ta-form, te-form, or masu-stem. The only exception is 「する」, which may also become 「すべきだ」.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-033',
    stem: '駅に着いてから財布がないことに気づいた。家を出る前に、かばんの中を（　）よかった。',
    options: ['確かめれば', '確かめると', '確かめては', '確かめるなら'],
    answerIndex: 0,
    explanation:
      '「〜ばよかった」表對過去的後悔（早知道就…），動詞用ば形接「よかった」，故「確かめればよかった」正確。「確かめるとよかった」的「と」不能用來表達對過去的後悔；「確かめてはよかった」形式不成立；「確かめるならよかった」的「なら」用於承接對方提起的話題做假設，接在此處語意不通。',
    explanationEn:
      '「〜ばよかった」 expresses regret about the past ("I should have..."), with the verb in the ba-form before 「よかった」, so 「確かめればよかった」 is correct. 「確かめるとよかった」 cannot express regret about the past with 「と」; 「確かめてはよかった」 is not a valid form; 「確かめるならよかった」 misuses 「なら」, which supposes a situation raised in conversation, so it makes no sense here.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-034',
    stem: '今年の夏は、去年（　）暑くないので、エアコンなしで眠れる日も多い。',
    options: ['ほど', 'ばかり', 'こそ', 'だけ'],
    answerIndex: 0,
    explanation:
      '「ＡはＢほど〜ない」表「Ａ不如Ｂ那麼…」的比較句型，「今年夏天不像去年那麼熱」故「ほど」正確；注意此句型的述語必須是否定形。「ばかり」「こそ」都不能用在這種比較否定中；「だけ」會變成「只有去年不熱」的意思，語意完全不通。',
    explanationEn:
      '"A は B ほど〜ない" is the comparative pattern "A is not as ... as B", so "this summer is not as hot as last year" takes 「ほど」; note that the predicate of this pattern must be negative. 「ばかり」 and 「こそ」 cannot be used in this negative comparison; 「だけ」 would twist the sentence into "only last year is not hot", which is nonsensical.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-035',
    stem: '兄（　）、弟は口数が少なく、めったに感情を表に出さない。',
    options: ['に比べて', 'について', 'に加えて', 'にとって'],
    answerIndex: 0,
    explanation:
      '「〜に比べて」表比較的基準（和…相比），「和哥哥相比，弟弟話少、不太表露感情」語意正確。「について」表談論主題（關於哥哥…），後面應接說明內容而非比較；「に加えて」表累加（除了哥哥之外還…），與句意不合；「にとって」表「對…而言」，後面須接評價句，皆不成立。',
    explanationEn:
      '「〜に比べて」 marks the standard of comparison ("compared with..."), so "compared with his older brother, the younger brother is quiet and rarely shows emotion" is correct. 「について」 marks a topic ("about the brother") and should be followed by an explanation, not a comparison; 「に加えて」 means "in addition to", which does not fit; 「にとって」 ("for...") requires an evaluative predicate — none works.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-036',
    stem: '敬語の使い方は、相手や場面（　）変わるので、注意が必要だ。',
    options: ['によって', 'にとって', 'に対して', 'につれて'],
    answerIndex: 0,
    explanation:
      '「〜によって」在此表「依…而（不同）」，常與「違う・変わる」搭配，「敬語用法依對象和場合而改變」故正確。「にとって」表「對…而言」，不能與「変わる」構成「因…而異」的句型；「に対して」表針對的對象；「につれて」表「隨著…逐漸…」，前面須接表變化的詞，「場面につれて」不成立。',
    explanationEn:
      '「〜によって」 here means "varies depending on..." and typically pairs with 「違う・変わる」, so "keigo usage changes depending on the listener and the situation" is correct. 「にとって」 ("for...") cannot combine with 「変わる」 to mean "differ by..."; 「に対して」 marks a target; 「につれて」 ("as... gradually...") must follow a word expressing change, so 「場面につれて」 does not hold.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-037',
    stem: 'ニュースによると、来年の春から電車の運賃が上がる（　）。',
    options: ['ということだ', 'というものだ', 'ということにした', 'というところだ'],
    answerIndex: 0,
    explanation:
      '「〜ということだ」表傳聞（據說…），與「ニュースによると」前後呼應，故正確。「というものだ」用於對事物本質的斷定或感慨；「ということにした」是「（自己）決定當作…」，電車票價調漲不是說話者能決定的事；「というところだ」表「大約是…的程度」，語意皆不合。',
    explanationEn:
      "「〜ということだ」 reports hearsay (\"it is said that...\"), echoing 「ニュースによると」 (\"according to the news\"), so it is correct. 「というものだ」 asserts the essential nature of something with emotion; 「ということにした」 means the speaker decided to treat something as settled, but a train fare hike is not the speaker's decision; 「というところだ」 means \"roughly at the level of...\" — none fits.",
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-038',
    stem: 'あの店のケーキは、味（　）、見た目の美しさでも評判になっている。',
    options: ['はもちろん', 'をもちろん', 'にもちろん', 'がもちろん'],
    answerIndex: 0,
    explanation:
      '「〜はもちろん」表「…自不用說，連…也」，助詞固定用「は」，「味道自不用說，連外觀的美也備受好評」故正確。「をもちろん」「にもちろん」「がもちろん」都是不存在的搭配——在這個文型裡「もちろん」只能與「は」結合，其他助詞在文法上皆不成立。',
    explanationEn:
      '「〜はもちろん」 means "not to mention... / A goes without saying, and B as well", and the particle is fixed as 「は」, so "the taste goes without saying, and the beautiful appearance is also praised" is correct. 「をもちろん」, 「にもちろん」, and 「がもちろん」 are nonexistent combinations — in this pattern 「もちろん」 can only follow 「は」, so every other particle is ungrammatical.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-039',
    stem: '発表まではまだ一週間もあるのだから、そんなにあわてる（　）よ。落ち着いて準備しよう。',
    options: ['ことはない', 'わけがない', 'ものがない', 'はずがある'],
    answerIndex: 0,
    explanation:
      '「〜ことはない」表「沒有必要…」，常用於安慰或建議對方，「還有一整週，不必那麼慌張」語意正確。「わけがない」表「不可能…」的強烈否定推測，與後句「冷靜準備吧」的安撫語氣不合；「ものがない」不構成任何文型；「はずがある」不是日語中成立的說法（只有「はずがない」）。',
    explanationEn:
      '「〜ことはない」 means "there is no need to..." and is often used to reassure or advise, so "with a whole week left, there is no need to panic" is correct. 「わけがない」 is a strong denial ("there is no way that..."), clashing with the soothing "let\'s calm down and prepare"; 「ものがない」 does not form any pattern; 「はずがある」 does not exist in Japanese — only 「はずがない」 does.',
  },
  {
    kind: 'choice',
    id: 'n3-grammar-keishiki-040',
    stem: '先生は昨日の展覧会で、私の描いた絵を（　）そうだ。',
    options: ['ご覧になった', '拝見した', 'お目にかかった', 'ご覧した'],
    answerIndex: 0,
    explanation:
      '主語是老師（上位者），須用尊敬語抬高對方的動作，「見る」的尊敬語是「ご覧になる」，故「ご覧になった」正確。「拝見する」是「見る」的謙讓語，只能用於自己的動作，用在老師身上反而失禮；「お目にかかる」是「会う」的謙讓語，動詞本身就選錯；「ご覧した」混用尊敬與謙讓的形式，並不存在。',
    explanationEn:
      "The subject is the teacher (a superior), so respectful language must elevate their action; the honorific form of 「見る」 is 「ご覧になる」, making 「ご覧になった」 correct. 「拝見する」 is the humble form of 「見る」, used only for one's own actions — applying it to the teacher would be rude; 「お目にかかる」 is the humble form of 「会う」, so the verb itself is wrong; 「ご覧した」 mixes honorific and humble morphology and does not exist.",
  },
]

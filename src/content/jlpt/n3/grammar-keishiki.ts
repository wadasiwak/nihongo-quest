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
]

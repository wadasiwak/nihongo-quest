import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-001',
    stem: '弟は【しょっちゅう】携帯電話をなくして、家族を困らせている。',
    options: ['よく', 'たまに', 'めったに', 'ずっと'],
    answerIndex: 0,
    explanation:
      '「しょっちゅう」是口語的「經常、三天兩頭」，換成「よく」語意最接近。「たまに」（偶爾）與「めったに」（幾乎不）頻率方向相反；「ずっと」是「一直持續」，指狀態延續而非發生頻率，都不等值。',
    explanationEn:
      '「しょっちゅう」 is a colloquial word for "constantly, all the time," so 「よく」 (often) is the closest replacement. 「たまに」 (occasionally) and 「めったに」 (hardly ever) point in the opposite frequency direction; 「ずっと」 means "continuously," describing a lasting state rather than how often something happens. None are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-002',
    stem: '火事だと聞いて、みんな【あわてて】外へ逃げ出した。',
    options: ['急いで', 'ゆっくり', 'こっそり', 'いきなり'],
    answerIndex: 0,
    explanation:
      '「あわてて」是「慌張地、急忙地」，此處重點在動作匆忙，換成「急いで」（趕緊地）最接近。「いきなり」是「突然」，形容事情發生得毫無預兆，不是描述動作匆忙；「こっそり」（偷偷地）、「ゆっくり」（慢慢地）語意都不合。',
    explanationEn:
      '「あわてて」 means "in a fluster, hurriedly"; the focus here is the rushed movement, so 「急いで」 (in a hurry) is the closest match. 「いきなり」 means "suddenly," describing an event that happens without warning, not a hurried action; 「こっそり」 (secretly) and 「ゆっくり」 (slowly) do not fit the meaning either.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-003',
    stem: 'その新商品は発売されると、【たちまち】売り切れてしまった。',
    options: ['あっという間に', '少しずつ', 'やっと', 'しばらくして'],
    answerIndex: 0,
    explanation:
      '「たちまち」是「立刻、轉眼間」，強調變化在極短時間內發生，與「あっという間に」（一眨眼就）同義。「少しずつ」（一點一點地）速度方向相反；「しばらくして」（過了一陣子）表示隔了一段時間才發生，時間感不等值。',
    explanationEn:
      '「たちまち」 means "instantly, in no time," stressing that a change happens within an extremely short span — synonymous with 「あっという間に」 (in the blink of an eye). 「少しずつ」 (little by little) points in the opposite direction in speed; 「しばらくして」 (after a while) implies a delay before it happened, so the sense of timing is not equivalent; 「やっと」 implies effort before finally succeeding.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-004',
    stem: '一日中歩き回って、すっかり【くたびれて】しまった。',
    options: ['疲れて', '飽きて', '眠くなって', '痩せて'],
    answerIndex: 0,
    explanation:
      '「くたびれる」是「疲累、筋疲力盡」，與「疲れる」同義。「飽きる」是「膩了、厭煩」，指心理上失去興趣而非體力消耗；「眠くなる」（想睡）是疲勞可能的結果但語意不同；「痩せる」（變瘦）完全是另一回事。',
    explanationEn:
      '「くたびれる」 means "to be worn out, exhausted" and is synonymous with 「疲れる」. 「飽きる」 means "to get tired of, be fed up" — losing interest mentally, not running out of physical energy; 「眠くなる」 (to get sleepy) may result from fatigue but means something different; 「痩せる」 (to lose weight) is an entirely different matter.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-005',
    stem: 'この病気は【あらゆる】年代の人に起こる可能性がある。',
    options: ['すべての', 'ほとんどの', 'いくつかの', '主な'],
    answerIndex: 0,
    explanation:
      '「あらゆる」是「所有的、一切的」，涵蓋範圍無一例外，等於「すべての」。「ほとんどの」（大部分的）仍留有例外，程度不等值；「いくつかの」（幾個）範圍更小；「主な」（主要的）只指其中重要的部分，都不能替換。',
    explanationEn:
      '「あらゆる」 means "every, all without exception," covering the full range, and equals 「すべての」. 「ほとんどの」 (most) still leaves room for exceptions, so the degree is not equivalent; 「いくつかの」 (a few) covers an even smaller range; 「主な」 (main) picks out only the important part. None can replace it.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-006',
    stem: 'うちから会社まで【だいたい】一時間かかります。',
    options: ['約', 'ちょうど', '少なくとも', 'たった'],
    answerIndex: 0,
    explanation:
      '「だいたい」表示「大約、大概」的概數，與「約」同義。「ちょうど」是「正好、不多不少」，反而強調精確；「少なくとも」（至少）給的是下限，方向不同；「たった」（僅僅）帶有「很少」的評價語氣，皆不等值。',
    explanationEn:
      '「だいたい」 expresses an approximate figure, "about, roughly," and is synonymous with 「約」. 「ちょうど」 means "exactly, no more no less," stressing precision instead; 「少なくとも」 (at least) gives a lower bound, a different direction; 「たった」 (merely) carries an evaluative tone of "so little." None are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-007',
    stem: '新しい掃除機が届いたので、【さっそく】使ってみた。',
    options: ['すぐに', 'あとで', 'ゆっくり', 'ようやく'],
    answerIndex: 0,
    explanation:
      '「さっそく」是「立刻、馬上（迫不及待地）」，換成「すぐに」語意最接近。「ようやく」是「好不容易、終於」，暗示等待或努力了很久才實現，時間感相反；「あとで」（待會）與「ゆっくり」（慢慢地）也都不合。',
    explanationEn:
      '「さっそく」 means "right away (eagerly, without delay)," so 「すぐに」 is the closest in meaning. 「ようやく」 means "finally, at long last," implying a long wait or effort before realization — the opposite sense of timing; 「あとで」 (later) and 「ゆっくり」 (slowly) do not fit either.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-008',
    stem: '父は健康のためにお酒を【めったに】飲まない。',
    options: ['ほとんど', 'ぜんぜん', 'ときどき', 'よく'],
    answerIndex: 0,
    explanation:
      '「めったに〜ない」是「很少、難得」，等於「ほとんど〜ない」（幾乎不）。「ぜんぜん飲まない」是「完全不喝」，把頻率說成零，程度過強；「ときどき」「よく」接否定後語意不通，也與原句頻率方向不符。',
    explanationEn:
      '「めったに〜ない」 means "rarely, seldom," equivalent to 「ほとんど〜ない」 (hardly ever). 「ぜんぜん飲まない」 means "never drinks at all," reducing the frequency to zero — too strong; 「ときどき」 and 「よく」 make no sense combined with the negative and also point the wrong way in frequency.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-009',
    stem: '【おそらく】明日の試合は中止になるだろう。',
    options: ['たぶん', '必ず', 'まさか', '意外に'],
    answerIndex: 0,
    explanation:
      '「おそらく」是書面語感的「恐怕、大概」，表示高機率的推測，與「たぶん」同義，常和句尾「だろう」呼應。「必ず」（一定）是百分之百的斷定，確信度過強；「まさか」（難道、萬萬沒想到）表示不敢相信，方向相反。',
    explanationEn:
      '「おそらく」 is a somewhat formal "probably," expressing a high-probability guess; it is synonymous with 「たぶん」 and often pairs with sentence-final 「だろう」. 「必ず」 (definitely) asserts 100% certainty — too strong; 「まさか」 expresses disbelief ("no way"), the opposite direction; 「意外に」 (surprisingly) compares against expectations rather than making a guess.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-010',
    stem: '【ふだん】は自転車で通学していますが、雨の日はバスに乗ります。',
    options: ['いつも', 'たまに', '最近', '昔'],
    answerIndex: 0,
    explanation:
      '「ふだん」是「平常、平時」，指一般情況下的習慣，此處換成「いつも」（總是、平常都）語意最接近。「たまに」（偶爾）頻率相反；「最近」（近來）與「昔」（以前）講的是時間點的今昔，不是常態習慣，都不等值。',
    explanationEn:
      '「ふだん」 means "usually, ordinarily," referring to what one does under normal circumstances; here 「いつも」 (always, normally) is the closest replacement. 「たまに」 (occasionally) reverses the frequency; 「最近」 (recently) and 「昔」 (long ago) refer to points in time — present versus past — not to a habitual norm. None are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-011',
    stem: '会議は【とっくに】終わっていた。',
    options: ['ずっと前に', 'たった今', 'もうすぐ', '少し前に'],
    answerIndex: 0,
    explanation:
      '「とっくに」是「早就、老早」，表示事情在很久之前就已完成，等於「ずっと前に」。「少し前に」（不久前）雖然也是過去，但時間距離短得多，程度不等值；「たった今」（就在剛才）更近；「もうすぐ」（快要）根本還沒發生。',
    explanationEn:
      '「とっくに」 means "long ago, well before now," indicating something was completed far in the past — equivalent to 「ずっと前に」. 「少し前に」 (a little while ago) is also past but a much shorter distance back, so the degree differs; 「たった今」 (just now) is even more recent; 「もうすぐ」 (soon) means it has not even happened yet.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-012',
    stem: '久しぶりに会ったが、彼は【相変わらず】元気だった。',
    options: ['前と同じように', '前よりずっと', 'めずらしく', '思ったより'],
    answerIndex: 0,
    explanation:
      '「相変わらず」（あいかわらず）是「一如往常、還是老樣子」，等於「前と同じように」。「前よりずっと」（比以前更）表示程度有變化，方向不同；「めずらしく」（難得地）暗示平常並非如此，正好與「老樣子」相反；「思ったより」（比想像中）是與預期比較，皆不等值。',
    explanationEn:
      '「相変わらず」 (read あいかわらず) means "same as ever, as always" and equals 「前と同じように」. 「前よりずっと」 (much more than before) implies a change in degree, a different direction; 「めずらしく」 (unusually) suggests this is not how he normally is — the exact opposite of "same as ever"; 「思ったより」 (than expected) compares against expectations. None are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-013',
    stem: '【うっかり】約束の時間を忘れてしまった。',
    options: ['不注意で', 'わざと', 'あわてて', '仕方なく'],
    answerIndex: 0,
    explanation:
      '「うっかり」是「不小心、一時疏忽」，等於「不注意で」，常與「〜てしまう」搭配表示懊悔。「わざと」（故意地）有意圖性，方向完全相反；「あわてて」（慌張地）描述的是動作匆忙的樣子，不是疏忽；「仕方なく」（不得已）也不合。',
    explanationEn:
      '「うっかり」 means "carelessly, by a momentary slip," equal to 「不注意で」, and often pairs with 「〜てしまう」 to express regret. 「わざと」 (on purpose) involves intent — completely the opposite direction; 「あわてて」 (in a fluster) describes rushed movement, not a lapse of attention; 「仕方なく」 (having no choice) does not fit either.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-014',
    stem: '猫は窓の外を【じっと】見つめていた。',
    options: ['動かないで', 'ちらっと', 'こっそり', 'ぼんやり'],
    answerIndex: 0,
    explanation:
      '「じっと」是「一動也不動地、目不轉睛地」，換成「動かないで」（不動地）最接近。「ちらっと」（瞥一眼）是視線只停留一瞬間，持續時間相反；「ぼんやり」（發呆地、心不在焉地）缺乏專注感；「こっそり」（偷偷地）強調不被發現，語意都不等值。',
    explanationEn:
      '「じっと」 means "fixedly, without moving, with an unwavering gaze," so 「動かないで」 (without moving) is the closest match. 「ちらっと」 (with a quick glance) keeps the gaze for only an instant — the opposite duration; 「ぼんやり」 (absent-mindedly, vacantly) lacks the sense of focus; 「こっそり」 (secretly) stresses not being noticed. None are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-015',
    stem: '何度も書き直して、【ようやく】レポートが完成した。',
    options: ['やっと', 'すぐに', 'すでに', 'たまたま'],
    answerIndex: 0,
    explanation:
      '「ようやく」是「終於、好不容易」，暗示經過長時間努力後才實現，與「やっと」同義。「すぐに」（馬上）表示毫不費時，時間感相反；「すでに」（已經）只陳述完成的事實，沒有「費了一番功夫」的語感；「たまたま」（碰巧）表示偶然，皆不等值。',
    explanationEn:
      '「ようやく」 means "finally, at long last," implying achievement only after prolonged effort — synonymous with 「やっと」. 「すぐに」 (immediately) implies it took no time at all, the opposite sense; 「すでに」 (already) merely states the fact of completion without the nuance of hard-won effort; 「たまたま」 (by chance) indicates coincidence. None are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-016',
    stem: '【あいにく】その日は先約があって、パーティーには行けません。',
    options: ['残念ながら', '幸いなことに', 'たまたま', '確かに'],
    answerIndex: 0,
    explanation:
      '「あいにく」是「不湊巧、很遺憾」，用於情況不如人意時，等於「残念ながら」（很遺憾地）。「幸いなことに」（幸好）評價方向完全相反；「たまたま」（碰巧）只表示偶然，沒有「可惜」的負面語感；「確かに」（的確）是表示同意，都不等值。',
    explanationEn:
      '「あいにく」 means "unfortunately, as luck would have it," used when circumstances do not go as hoped — equal to 「残念ながら」 (regrettably). 「幸いなことに」 (fortunately) is the exact opposite evaluation; 「たまたま」 (by chance) only expresses coincidence, without the regretful tone; 「確かに」 (certainly) expresses agreement. None are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-017',
    stem: '田中さんはこの辺りの道に【くわしい】。',
    options: ['よく知っている', '興味を持っている', '慣れている', '自信がある'],
    answerIndex: 0,
    explanation:
      '「くわしい」接在「〜に」後表示「對…很熟、知之甚詳」，等於「よく知っている」。「慣れている」（習慣了）指身體適應而非知識豐富，程度與面向不同；「興味を持っている」（感興趣）與「自信がある」（有信心）都不代表真的瞭解，皆不等值。',
    explanationEn:
      '「くわしい」 following 「〜に」 means "to know something inside out," equal to 「よく知っている」. 「慣れている」 (to be used to) refers to physical adaptation rather than rich knowledge — a different aspect and degree; 「興味を持っている」 (to be interested) and 「自信がある」 (to be confident) do not imply actually knowing the area well. None are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-018',
    stem: '楽しみにしていた旅行が中止になって、【がっかりした】。',
    options: ['残念に思った', '腹を立てた', 'びっくりした', '恥ずかしくなった'],
    answerIndex: 0,
    explanation:
      '「がっかりする」是「失望、沮喪」，指期待落空時的心情，等於「残念に思った」（覺得遺憾）。「腹を立てた」（生氣）是憤怒情緒，方向不同；「びっくりした」（嚇一跳）是驚訝；「恥ずかしくなった」（感到丟臉）是羞恥感，都不是失望。',
    explanationEn:
      '「がっかりする」 means "to be disappointed, dejected" — the feeling when hopes fall through — and equals 「残念に思った」 (felt it was a shame). 「腹を立てた」 (got angry) is anger, a different emotion; 「びっくりした」 (was startled) is surprise; 「恥ずかしくなった」 (became embarrassed) is shame. None of them mean disappointment.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-019',
    stem: '昨日彼の家を訪ねたが、【留守だった】。',
    options: ['家にいなかった', '寝ていた', '留守番をしていた', '引っ越していた'],
    answerIndex: 0,
    explanation:
      '「留守」（るす）是「不在家」，等於「家にいなかった」。注意「留守番をしていた」是「留在家裡看家」，人反而在家，方向完全相反，是最容易誤選的陷阱；「寝ていた」（在睡覺）與「引っ越していた」（已搬走）雖然也可能導致沒見到人，但語意都不等值。',
    explanationEn:
      '「留守」 (read るす) means "to be away from home," equal to 「家にいなかった」. Note that 「留守番をしていた」 means staying home to watch the house — the person is actually at home, the complete opposite, making it the trap most easily chosen by mistake; 「寝ていた」 (was sleeping) and 「引っ越していた」 (had moved away) could also explain not meeting him, but neither is equivalent in meaning.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-iikae-020',
    stem: '空が暗くなり、雨が【徐々に】強くなってきた。',
    options: ['少しずつ', '急に', 'かなり', 'すっかり'],
    answerIndex: 0,
    explanation:
      '「徐々に」（じょじょに）是「逐漸地、慢慢地」，強調變化緩慢推進，等於「少しずつ」（一點一點地）。「急に」（突然）變化速度相反；「かなり」（相當）只講程度高低，不含漸進的過程；「すっかり」（完全）表示變化徹底完成，皆不等值。',
    explanationEn:
      '「徐々に」 (read じょじょに) means "gradually, slowly," stressing that a change advances little at a time — equal to 「少しずつ」 (bit by bit). 「急に」 (suddenly) is the opposite speed of change; 「かなり」 (considerably) only expresses degree, without the sense of a gradual process; 「すっかり」 (completely) means the change is thoroughly finished. None are equivalent.',
  },
]

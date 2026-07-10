import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  // ---------- 可能形・意向形（001~002） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-001',
    stem: 'にほんごの しんぶんは まだ （　）が、まんがは よめます。',
    options: ['よめません', 'よみられません', 'よめられません', 'よむられません'],
    answerIndex: 0,
    explanation:
      '考可能形。五段動詞「よむ」的可能形是把語尾改成え段再加る，變成「よめる」，否定禮貌形即「よめません」（還看不懂）。「よみられません」是把一段動詞的「られる」誤套在五段動詞上；「よめられません」同時做了兩次可能變化，都是不存在的活用。',
    explanationEn:
      'This tests the potential form. For a godan verb like 「よむ」, change the final syllable to the え row and add る, giving 「よめる」; its polite negative is 「よめません」 (can\'t read them yet). 「よみられません」 wrongly applies the ichidan 「られる」 pattern to a godan verb, and 「よめられません」 applies the potential change twice — neither conjugation exists.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-002',
    stem: 'なつやすみは かぞくと おきなわへ （　）と おもって います。',
    options: ['いこう', 'いくう', 'いきよう', 'いけよう'],
    answerIndex: 0,
    explanation:
      '「〜（よ）うと思っています」表示打算，前面接意向形。五段動詞「いく」的意向形是把語尾改成お段再加う，即「いこう」（打算去）。「いきよう」是把一段動詞的「よう」誤接在ます形上；「いけよう」誤用可能形當語幹，都是錯誤活用。',
    explanationEn:
      '「〜（よ）うと思っています」 expresses a plan and takes the volitional form. For the godan verb 「いく」, change the ending to the お row and add う, giving 「いこう」 (I\'m thinking of going). 「いきよう」 wrongly attaches the ichidan 「よう」 to the ます stem, and 「いけよう」 wrongly builds on the potential form — both are incorrect conjugations.',
  },

  // ---------- 條件形 と・ば・たら・なら（003~006） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-003',
    stem: 'はるに なる（　）、さくらが さきます。',
    options: ['と', 'のに', 'ても', 'ながら'],
    answerIndex: 0,
    explanation:
      '「〜と」接辭書形，表示只要前項成立、後項必然發生的自然規律：「一到春天，櫻花就會開」。「のに」表逆接（明明…卻…），與句意相反；「ても」必須接て形（なっても），接辭書形不合文法；「ながら」接ます形語幹且表同時動作，也不能用。',
    explanationEn:
      '「〜と」 follows the dictionary form and expresses a natural, automatic result: whenever spring comes, the cherry blossoms bloom. 「のに」 means "even though" and contradicts the meaning; 「ても」 must attach to the て form (なっても), so it can\'t follow the dictionary form; 「ながら」 attaches to the ます stem and describes simultaneous actions, so it doesn\'t work either.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-004',
    stem: 'この くすりを （　）、すぐ ねつが さがりますよ。',
    options: ['のめば', 'のむば', 'のみば', 'のんば'],
    answerIndex: 0,
    explanation:
      '考假定形「〜ば」。五段動詞「のむ」要把語尾改成え段再接ば，變成「のめば」（只要吃了藥，燒就會退）。「のむば」直接把ば接在辭書形後、「のみば」接在ます形語幹後，都是不存在的接續方式；「のんば」則是誤用音便形，也不合文法。',
    explanationEn:
      'This tests the conditional 「〜ば」. For the godan verb 「のむ」, change the ending to the え row and attach ば, giving 「のめば」 (if you take this medicine, your fever will go down right away). 「のむば」 attaches ば to the dictionary form and 「のみば」 to the ます stem — neither connection exists; 「のんば」 misuses the sound-change form and is also ungrammatical.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-005',
    stem: 'うちへ （　）、すぐ てを あらいます。',
    options: ['かえったら', 'かえるたら', 'かえりたら', 'かえらたら'],
    answerIndex: 0,
    explanation:
      '「〜たら」表示前項實現之後做後項，接續方式是動詞た形加ら。「かえる」（五段）的た形是「かえった」，所以正解是「かえったら」（一到家就馬上洗手）。「かえるたら」把たら直接接辭書形、「かえりたら」接ます形語幹，都是錯誤接續。',
    explanationEn:
      '「〜たら」 means doing the second action once the first has happened, and is formed by adding ら to the た form. The た form of the godan verb 「かえる」 is 「かえった」, so 「かえったら」 is correct (as soon as I get home, I wash my hands). 「かえるたら」 attaches たら to the dictionary form and 「かえりたら」 to the ます stem — both are wrong connections.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-006',
    stem: 'にほんの おかしを かう（　）、あの みせが やすいですよ。',
    options: ['なら', 'たら', 'ば', 'と'],
    answerIndex: 0,
    explanation:
      '「〜なら」接辭書形，針對對方提到或假設的話題給建議：「如果要買日本點心的話，那家店很便宜喔」。「たら」必須接た形（かったら），接辭書形不合文法；「ば」也要先變假定形（かえば）；「と」雖接辭書形，但後項只能是必然結果，不能用來給評價或建議。',
    explanationEn:
      '「〜なら」 follows the dictionary form and gives advice about a topic that was raised or assumed: "If you\'re going to buy Japanese sweets, that shop is cheap." 「たら」 must follow the た form (かったら), so it can\'t attach to the dictionary form; 「ば」 also requires the conditional form (かえば) first; 「と」 does follow the dictionary form, but its second clause can only be an automatic result, not an opinion or recommendation.',
  },

  // ---------- 受身・使役（007~008） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-007',
    stem: 'きのう、わたしは せんせいに （　）。',
    options: ['ほめられました', 'ほめました', 'ほめさせました', 'ほめまれました'],
    answerIndex: 0,
    explanation:
      '考受身形。動作者用「に」標示、主語是承受動作的人，所以要用「ほめる」的受身「ほめられる」：「我昨天被老師稱讚了」。「ほめました」是主動形，稱讚的對象應該用「を」而不是「に」，與句型不合；「ほめさせました」是使役（讓某人稱讚），語意不通；「ほめまれました」是不存在的活用。',
    explanationEn:
      'This tests the passive form. The doer is marked with 「に」 and the subject receives the action, so we need the passive of 「ほめる」, which is 「ほめられる」: "Yesterday I was praised by my teacher." 「ほめました」 is the active form, whose object would take 「を」 rather than 「に」, so it doesn\'t fit; 「ほめさせました」 is causative (make someone praise), which makes no sense here; 「ほめまれました」 is not a real conjugation.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-008',
    stem: 'ははは まいにち わたしに やさいを （　）。',
    options: ['たべさせます', 'たべらせます', 'たべされます', 'たべさせります'],
    answerIndex: 0,
    explanation:
      '考使役形。一段動詞「たべる」的使役是去る加「させる」，變成「たべさせる」：「媽媽每天讓（叫）我吃蔬菜」，被使役的人用「に」標示。「たべらせます」是把五段動詞的「せる」誤套在一段動詞上；「たべされます」「たべさせります」都是不存在的活用形。',
    explanationEn:
      'This tests the causative form. For the ichidan verb 「たべる」, drop る and add 「させる」, giving 「たべさせる」: "My mother makes me eat vegetables every day," with the person being made to act marked by 「に」. 「たべらせます」 wrongly applies the godan 「せる」 pattern to an ichidan verb, and 「たべされます」 and 「たべさせります」 are conjugations that don\'t exist.',
  },

  // ---------- 授受表現 てあげる・てもらう・てくれる（009~011） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-009',
    stem: 'いもうとは まだ じが よめないので、わたしが えほんを よんで （　）。',
    options: ['あげました', 'もらいました', 'くれました', 'いただきました'],
    answerIndex: 0,
    explanation:
      '「〜てあげる」表示自己（或己方）為別人做某事：妹妹還不識字，所以「我唸繪本給她聽」。「もらいました」是請別人為自己做，但妹妹不識字，不可能唸給我聽，語意矛盾；「くれました」的給予者必須是別人，主語不能是「わたし」；「いただきました」是もらう的謙讓語，方向同樣不對。',
    explanationEn:
      '「〜てあげる」 means doing something for someone else\'s benefit: my little sister can\'t read yet, so "I read the picture book to her." 「もらいました」 means having someone do something for you, but a sister who can\'t read couldn\'t read to me — a contradiction; with 「くれました」 the giver must be someone other than the speaker, so the subject can\'t be 「わたし」; 「いただきました」 is the humble form of もらう, so its direction is wrong too.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-010',
    stem: 'じてんしゃが こわれたので、あにに （　）。',
    options: ['なおしてもらいました', 'なおしてあげました', 'なおしてくれました', 'なおしてさしあげました'],
    answerIndex: 0,
    explanation:
      '「〜てもらう」表示請別人為自己做某事，做的人用「に」標示：「腳踏車壞了，所以請哥哥幫我修理」。「なおしてくれました」的給予者要用「が」（あにが），接在「あにに」後面不合文法；「なおしてあげました」變成我幫哥哥修，跟自己的車壞掉的情境相反；「さしあげました」是あげる的謙讓語，方向同樣錯誤。',
    explanationEn:
      '「〜てもらう」 means having someone do something for you, with the doer marked by 「に」: "My bicycle broke, so I had my older brother fix it." With 「なおしてくれました」 the giver takes 「が」 (あにが), so it can\'t follow 「あにに」; 「なおしてあげました」 would mean I fixed it for my brother, the opposite of a situation where my own bike broke; 「さしあげました」 is the humble form of あげる, so its direction is wrong as well.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-011',
    stem: 'たんじょうびに ともだちが うたを うたって （　）。',
    options: ['くれました', 'あげました', 'もらいました', 'やりました'],
    answerIndex: 0,
    explanation:
      '「〜てくれる」表示別人為我（說話者）做某事，給予者用「が」標示：「生日時朋友唱歌給我聽」。「あげました」用於我方為別人做事，受益者是自己時不能用；「もらいました」會變成「朋友請別人唱歌」，和句意不合；「やりました」是あげる的更隨便說法，方向一樣錯誤。',
    explanationEn:
      '「〜てくれる」 means someone does something for the speaker, with the giver marked by 「が」: "On my birthday, my friend sang a song for me." 「あげました」 is for when you do something for others, so it can\'t be used when you are the one benefiting; 「もらいました」 would mean the friend had someone else sing, which doesn\'t match; 「やりました」 is an even more casual form of あげる, wrong in direction in the same way.',
  },

  // ---------- ておく・てしまう（012~013） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-012',
    stem: 'あしたの じゅぎょうで つかう プリントは、もう （　） おきました。',
    options: ['コピーして', 'コピーし', 'コピーする', 'コピーした'],
    answerIndex: 0,
    explanation:
      '「〜ておく」表示為了之後的需要事先做好準備，前面必須接動詞て形：「明天上課要用的講義已經先影印好了」。「コピーし」是ます形語幹、「コピーする」是辭書形、「コピーした」是た形，都不能直接接「おく」，只有て形「コピーして」是正確接續。',
    explanationEn:
      '「〜ておく」 means doing something in advance to prepare for later, and must follow the verb\'s て form: "I have already photocopied the handouts for tomorrow\'s class." 「コピーし」 is the ます stem, 「コピーする」 the dictionary form, and 「コピーした」 the た form — none of them can connect directly to 「おく」; only the て form 「コピーして」 is the correct connection.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-013',
    stem: 'たいせつな かさを でんしゃの なかに わすれて （　）。',
    options: ['しまいました', 'おきました', 'みました', 'ありました'],
    answerIndex: 0,
    explanation:
      '「〜てしまう」表示做了無法挽回的事、帶有懊悔的心情：「不小心把重要的雨傘忘在電車裡了」。「おきました」（〜ておく）表示為將來預先準備，「故意先忘記」語意矛盾；「みました」（〜てみる）是嘗試做做看，忘記不是能嘗試的動作；「ありました」（〜てある）表示動作結果的存續，接續與語意都不通。',
    explanationEn:
      '「〜てしまう」 expresses that something irreversible happened, with a feeling of regret: "I accidentally left my precious umbrella on the train." 「おきました」 (〜ておく) means preparing in advance, and deliberately forgetting in advance is a contradiction; 「みました」 (〜てみる) means trying something out, but forgetting isn\'t an action you can try; 「ありました」 (〜てある) describes the lasting result of a deliberate action, which fits neither the grammar nor the meaning.',
  },

  // ---------- そうだ 樣態・傳聞（014~015） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-014',
    stem: 'わあ、この ケーキ、とても （　）そうですね。',
    options: ['おいし', 'おいしい', 'おいしくて', 'おいしく'],
    answerIndex: 0,
    explanation:
      '看到眼前的蛋糕發出「わあ」的驚嘆，是根據外觀判斷的樣態「〜そうだ」，い形容詞要去掉語尾い再接そう，所以是「おいしそう」（看起來很好吃）。「おいしいそうです」變成傳聞（聽說很好吃），和親眼看到的情境不合；「おいしくて」「おいしく」後面都不能直接接そうだ。',
    explanationEn:
      'The speaker exclaims 「わあ」 at a cake right in front of them, so this is the appearance 「〜そうだ」, a judgment from what they see. With い-adjectives you drop the final い before そう, giving 「おいしそう」 (looks delicious). 「おいしいそうです」 would be hearsay (I heard it\'s delicious), which doesn\'t match seeing it with your own eyes; 「おいしくて」 and 「おいしく」 cannot connect directly to そうだ.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-015',
    stem: 'てんきよほうに よると、あしたは ゆきが （　）そうです。',
    options: ['ふる', 'ふり', 'ふって', 'ふった'],
    answerIndex: 0,
    explanation:
      '「〜によると…そうだ」是傳聞用法，把消息來源聽到的內容照樣轉述，動詞用常體：明天會下雪，所以接辭書形「ふる」。「ふり」接そう會變成樣態（看起來要下了），和「てんきよほうによると」的傳聞句型矛盾；「ふった」是過去式，與「あした」的時間矛盾；「ふって」則無法接そうだ。',
    explanationEn:
      '「〜によると…そうだ」 is the hearsay pattern, reporting what a source said with the verb in plain form: it will snow tomorrow, so the dictionary form 「ふる」 is used. 「ふり」 before そう would make it the appearance usage (it looks about to fall), which clashes with the hearsay marker 「てんきよほうによると」; 「ふった」 is past tense and contradicts 「あした」; 「ふって」 cannot connect to そうだ at all.',
  },

  // ---------- はずだ・かもしれない（016~017） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-016',
    stem: 'きのう にもつを おくったと あにが いって いました。あしたには （　）はずです。',
    options: ['とどく', 'とどき', 'とどいて', 'とどこう'],
    answerIndex: 0,
    explanation:
      '「〜はずだ」表示根據依據做出的合理推斷（照理說應該…），前面接動詞常體，所以用辭書形「とどく」：哥哥昨天已寄出，明天應該會送到。「とどき」是ます形語幹、「とどいて」是て形，都不能直接接はず；「とどこう」是意向形，表示意志，跟推斷句型完全不合。',
    explanationEn:
      '「〜はずだ」 expresses a logical expectation based on evidence (it should...), and takes the plain form, so the dictionary form 「とどく」 is used: my brother said he sent the package yesterday, so it should arrive tomorrow. 「とどき」 is the ます stem and 「とどいて」 the て form, neither of which can attach to はず; 「とどこう」 is the volitional form, which expresses intention and doesn\'t fit a deduction at all.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-017',
    stem: 'ゆきが たくさん ふって いますね。でんしゃが （　）かもしれません。',
    options: ['おくれる', 'おくれ', 'おくれて', 'おくれよう'],
    answerIndex: 0,
    explanation:
      '「〜かもしれない」表示或許、說不定，確信度不高的推測，前面接動詞常體，所以用辭書形「おくれる」：雪下得很大，電車說不定會誤點。「おくれ」是ます形語幹、「おくれて」是て形，都不能直接接かもしれない；「おくれよう」是意向形，表示打算，與推測語意不合。',
    explanationEn:
      '「〜かもしれない」 means "might" — a guess with low certainty — and takes the plain form, so the dictionary form 「おくれる」 is used: it\'s snowing heavily, so the train might be delayed. 「おくれ」 is the ます stem and 「おくれて」 the て form, neither of which can attach to かもしれない; 「おくれよう」 is the volitional form, expressing intention, which doesn\'t fit a guess.',
  },

  // ---------- すぎる・やすい・にくい（018~020） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-018',
    stem: 'ゆうべ おかしを （　）すぎて、おなかが いたく なりました。',
    options: ['たべ', 'たべる', 'たべて', 'たべた'],
    answerIndex: 0,
    explanation:
      '「〜すぎる」表示程度過頭（太…、…過度），動詞要用ます形語幹來接，「たべます」去ます得到「たべ」，所以是「たべすぎて」（吃太多，肚子痛了起來）。「たべる」（辭書形）、「たべて」（て形）、「たべた」（た形）都不能直接接すぎる，屬於接續錯誤。',
    explanationEn:
      '「〜すぎる」 means doing something to excess (too much), and attaches to the ます stem: dropping ます from 「たべます」 gives 「たべ」, so 「たべすぎて」 is correct (I ate too many sweets and my stomach started to hurt). 「たべる」 (dictionary form), 「たべて」 (て form), and 「たべた」 (た form) cannot connect directly to すぎる — they are all wrong connections.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-019',
    stem: 'この ペンは かるくて、とても （　）やすいです。',
    options: ['かき', 'かく', 'かいて', 'かか'],
    answerIndex: 0,
    explanation:
      '「〜やすい」表示容易做某動作，接在動詞ます形語幹後：「かきます」去ます得到「かき」，「かきやすい」＝很好寫。這枝筆很輕，所以非常好寫。「かく」是辭書形、「かいて」是て形、「かか」是ない形語幹，都不能接やすい，只有ます形語幹是正確接續。',
    explanationEn:
      '「〜やすい」 means "easy to do" and attaches to the ます stem: dropping ます from 「かきます」 gives 「かき」, so 「かきやすい」 means easy to write with. This pen is light, so it\'s very easy to write with. 「かく」 is the dictionary form, 「かいて」 the て form, and 「かか」 the ない-form stem — none of them can attach to やすい; only the ます stem is the correct connection.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-020',
    stem: 'この ほんは じが ちいさくて、（　）です。',
    options: ['よみにくい', 'よみやすい', 'よむにくい', 'よんでにくい'],
    answerIndex: 0,
    explanation:
      '「〜にくい」接動詞ます形語幹，表示難以做某動作：字很小，所以「よみにくい」（很難讀）。「よみやすい」（容易讀）與「じが ちいさくて」的原因相矛盾，語意不通；「よむにくい」把にくい接在辭書形後、「よんでにくい」接在て形後，都是錯誤接續。',
    explanationEn:
      '「〜にくい」 attaches to the ます stem and means "hard to do": the print is small, so the book is 「よみにくい」 (hard to read). 「よみやすい」 (easy to read) contradicts the reason given in 「じが ちいさくて」, so the meaning doesn\'t work; 「よむにくい」 attaches にくい to the dictionary form and 「よんでにくい」 to the て form — both are wrong connections.',
  },
]

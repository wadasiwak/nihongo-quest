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

  // ---------- 命令形・禁止形・なさい（021~023） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-021',
    stem: 'ちちは おとうとに 「もう おそいから、はやく （　）」と いいました。',
    options: ['ねろ', 'ねるな', 'ねって', 'ねら'],
    answerIndex: 0,
    explanation:
      '考命令形。一段動詞「ねる」的命令形是去る加ろ，變成「ねろ」：爸爸對弟弟說「已經很晚了，快睡！」。「ねるな」是禁止形（不准睡），和「已經很晚了」的語境正好相反；「ねって」「ねら」都是不存在的活用形，接續完全錯誤。',
    explanationEn:
      'This tests the imperative form. For the ichidan verb 「ねる」, drop る and add ろ, giving 「ねろ」: the father tells his little brother, "It\'s late — go to sleep!" 「ねるな」 is the prohibitive form (don\'t sleep), the opposite of what the context calls for; 「ねって」 and 「ねら」 are conjugations that don\'t exist.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-022',
    stem: 'としょかんの 人に 「ここでは おおきな こえで （　）」と いわれました。',
    options: ['はなすな', 'はなせ', 'はなします', 'はなした'],
    answerIndex: 0,
    explanation:
      '考禁止形「〜な」：辭書形「はなす」直接加「な」變成「はなすな」（不准說話），是圖書館館員的警告「不要在這裡大聲說話」。「はなせ」是命令形（快說！），和圖書館要安靜的語境完全相反；「はなします」「はなした」是敘述用的禮貌形和た形，不能當作禁止的指示。',
    explanationEn:
      'This tests the prohibitive 「〜な」: attach な directly to the dictionary form 「はなす」 to get 「はなすな」 (don\'t talk) — the librarian warns, "Don\'t talk loudly here." 「はなせ」 is the imperative (Speak up!), the exact opposite of keeping quiet in a library; 「はなします」 and 「はなした」 are a polite form and a past form used for statements, not prohibitions.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-023',
    stem: 'もう おそいですから、はやく いえに （　）なさい。',
    options: ['かえり', 'かえる', 'かえって', 'かえった'],
    answerIndex: 0,
    explanation:
      '「〜なさい」是父母師長對晚輩的溫和命令，接動詞ます形語幹：「かえります」去ます得「かえり」，「かえりなさい」＝「快回家吧」。辭書形「かえる」、て形「かえって」、た形「かえった」都不能直接接なさい，屬於接續錯誤。',
    explanationEn:
      '「〜なさい」 is a gentle command used by parents and teachers, and attaches to the ます stem: dropping ます from 「かえります」 gives 「かえり」, so 「かえりなさい」 means "go home now." The dictionary form 「かえる」, て form 「かえって」, and た form 「かえった」 cannot connect to なさい.',
  },

  // ---------- てみる・てある（024~025） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-024',
    stem: 'この みせの あたらしい ジュースを （　）みませんか。',
    options: ['のんで', 'のみ', 'のむ', 'のんだ'],
    answerIndex: 0,
    explanation:
      '「〜てみる」表示嘗試做做看，前面必須接動詞て形：「のんでみませんか」＝「要不要喝喝看？」。「のみ」是ます形語幹、「のむ」是辭書形、「のんだ」是た形，都不能直接接「みる」，只有て形「のんで」是正確接續。',
    explanationEn:
      '「〜てみる」 means to try doing something and must follow the て form: 「のんでみませんか」 means "won\'t you try drinking it?" 「のみ」 is the ます stem, 「のむ」 the dictionary form, and 「のんだ」 the た form — none of them can connect to 「みる」; only the て form 「のんで」 works.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-025',
    stem: 'へやの かべに らいねんの カレンダーが （　） あります。',
    options: ['かけて', 'かかって', 'かけ', 'かける'],
    answerIndex: 0,
    explanation:
      '「〜てあります」表示某人做好的動作結果還留著，前面接他動詞的て形：「カレンダーがかけてあります」＝「（有人把）月曆掛好了掛在那裡」。「かかって」是自動詞「かかる」的て形，後面要接「います」，接「あります」不合文法；「かけ」「かける」都不能直接接あります。',
    explanationEn:
      '「〜てあります」 describes the lasting result of an action someone performed, and takes the て form of a transitive verb: 「かけてあります」 means the calendar has been hung up. 「かかって」 is the て form of the intransitive 「かかる」, which must be followed by 「います」, not 「あります」; 「かけ」 and 「かける」 cannot connect directly either.',
  },

  // ---------- という・し・のに・ために（026~029） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-026',
    stem: 'えきの ちかくに 「さくら」（　） いう パンやが あります。',
    options: ['と', 'を', 'に', 'の'],
    answerIndex: 0,
    explanation:
      '「〜という＋名詞」用來介紹名稱：「『さくら』というパンや」＝「一家叫做『さくら』的麵包店」，名稱後面用引用助詞「と」接「いう」。「を」是受詞助詞、「に」表對象或場所、「の」是連體助詞，都不能和「いう」組成介紹名稱的句型。',
    explanationEn:
      '「〜という + noun」 introduces a name: 「『さくら』というパンや」 means "a bakery called Sakura," with the quotative particle 「と」 linking the name to 「いう」. 「を」 marks objects, 「に」 marks targets or places, and 「の」 links nouns — none of them combine with 「いう」 to introduce a name.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-027',
    stem: 'この レストランは、りょうりが おいしい（　）、みせの 人も しんせつだし、いつも こんで います。',
    options: ['し', 'たり', 'ので', 'のに'],
    answerIndex: 0,
    explanation:
      '「〜し、〜し」用來並列舉出幾個理由：「菜好吃、店員又親切，所以總是很多客人」。後半已經有「しんせつだし」，前半也要用「し」並列。「たり」要接た形（おいしかったり），接續錯誤；「ので」雖表原因，但和後面的「し」不成對；「のに」是逆接，語意不合。',
    explanationEn:
      '「〜し、〜し」 lists reasons side by side: the food is delicious and the staff are friendly, so the place is always crowded. Since the second half already has 「しんせつだし」, the first half needs 「し」 too. 「たり」 must follow the た form (おいしかったり); 「ので」 gives a reason but doesn\'t pair with the following 「し」; 「のに」 is contrastive and doesn\'t fit.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-028',
    stem: 'たくさん べんきょうした（　）、テストの てんが わるかったです。',
    options: ['のに', 'ので', 'から', 'たら'],
    answerIndex: 0,
    explanation:
      '「〜のに」表示逆接（明明…卻…）：「明明用功讀了很多書，考試分數卻很差」，前後語意相反時用のに。「ので」「から」都是表原因的順接，會變成「因為用功所以分數差」，前後矛盾；「たら」要直接接在た形後寫成「したら」，「したたら」是不存在的接續。',
    explanationEn:
      '「〜のに」 expresses contrast (even though...): "Even though I studied a lot, my test score was bad." 「ので」 and 「から」 mark causes, which would absurdly mean the studying caused the bad score; 「たら」 attaches directly to the た form as 「したら」, so adding it here would produce the non-existent 「したたら」.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-029',
    stem: 'じぶんの みせを （　）ために、まいにち おかねを ためて います。',
    options: ['もつ', 'もって', 'もち', 'もった'],
    answerIndex: 0,
    explanation:
      '表目的的「〜ために」前面接動詞辭書形：「みせをもつために」＝「為了擁有自己的店（而每天存錢）」。「もって」是て形、「もち」是ます形語幹，都不能接ために；「もった」接ために會變成表原因（因為擁有了店），和「正在存錢」的語意矛盾。',
    explanationEn:
      'The purpose pattern 「〜ために」 takes the dictionary form: 「みせをもつために」 means "in order to own my own shop (I save money every day)." The て form 「もって」 and the ます stem 「もち」 cannot attach to ために; 「もった」 + ために would express a cause (because I owned a shop), contradicting the fact that the speaker is still saving.',
  },

  // ---------- 敬語入門（030~031） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-030',
    stem: 'せんせいは もう いえに （　）に なりました。',
    options: ['おかえり', 'かえり', 'おかえって', 'かえる'],
    answerIndex: 0,
    explanation:
      '尊敬語句型「お＋ます形語幹＋になる」用來抬高對方的動作：「おかえりになりました」＝「（老師）已經回家了」。「かえり」少了表示尊敬的接頭語「お」，句型不完整；「おかえって」是把お接在て形上、「かえる」是辭書形，都不合「お〜になる」的接續。',
    explanationEn:
      'The honorific pattern 「お + ます stem + になる」 elevates a superior\'s action: 「おかえりになりました」 means the teacher has already gone home. 「かえり」 lacks the honorific prefix 「お」, so the pattern is incomplete; 「おかえって」 wrongly attaches お to the て form, and 「かえる」 is the dictionary form — neither fits 「お〜になる」.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-031',
    stem: 'にもつが おもそうですね。わたしが （　）しましょう。',
    options: ['おもち', 'もち', 'おもって', 'おもちに'],
    answerIndex: 0,
    explanation:
      '謙讓語句型「お＋ます形語幹＋する」用來降低自己、抬高對方：「おもちしましょう」＝「我來幫您拿吧」。「もち」少了謙讓的「お」，不成句型；「おもって」把お接在て形上，接續錯誤；「おもちに」多了「に」，是和尊敬語「お〜になる」混淆造成的錯誤。',
    explanationEn:
      'The humble pattern 「お + ます stem + する」 lowers the speaker to show respect: 「おもちしましょう」 means "let me carry that for you." 「もち」 lacks the humble 「お」; 「おもって」 wrongly attaches お to the て form; 「おもちに」 adds an extra 「に」, confusing this with the honorific 「お〜になる」 pattern.',
  },

  // ---------- だす・自他動詞・てくる（032~034） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-032',
    stem: 'えいがかんで、となりの せきの あかちゃんが きゅうに （　）だしました。',
    options: ['なき', 'なく', 'ないて', 'ないた'],
    answerIndex: 0,
    explanation:
      '「〜だす」表示動作突然開始（…了起來），接動詞ます形語幹：「なきます」去ます得「なき」，「なきだしました」＝「突然哭了起來」，正好和「きゅうに」呼應。辭書形「なく」、て形「ないて」、た形「ないた」都不能接だす，接續全部錯誤。',
    explanationEn:
      '「〜だす」 means an action suddenly starts and attaches to the ます stem: dropping ます from 「なきます」 gives 「なき」, so 「なきだしました」 means "suddenly burst out crying," matching 「きゅうに」. The dictionary form 「なく」, て form 「ないて」, and た form 「ないた」 cannot attach to だす.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-033',
    stem: 'けさ おきたら、かぜで まどが （　）、へやが さむく なって いました。',
    options: ['あいて', 'あけて', 'あいで', 'あけって'],
    answerIndex: 0,
    explanation:
      '主語是「まどが」、原因是風，沒有人為的動作者，要用自動詞「あく」的て形「あいて」：「窗戶被風吹開了，房間變得很冷」。「あけて」是他動詞「あける」，需要有人當主語、受詞用「を」標示，接在「まどが」後面不合文法；「あいで」「あけって」都是不存在的活用。',
    explanationEn:
      'The subject is 「まどが」 and the cause is the wind — nobody performed the action — so the intransitive 「あく」 in its て form 「あいて」 is needed: the window came open in the wind and the room got cold. 「あけて」 is the transitive 「あける」, which requires a human subject and an object marked with 「を」, so it can\'t follow 「まどが」; 「あいで」 and 「あけって」 don\'t exist.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-034',
    stem: 'さいきん、この まちには がいこくからの かんこうきゃくが （　）きました。',
    options: ['ふえて', 'ふえ', 'ふえる', 'ふえた'],
    answerIndex: 0,
    explanation:
      '「〜てくる」表示變化一路持續到現在（…起來了），前面接動詞て形：「ふえてきました」＝「（外國觀光客）越來越多了」。「ふえ」是ます形語幹、「ふえる」是辭書形、「ふえた」是た形，都不能直接接「きました」，只有て形「ふえて」是正確接續。',
    explanationEn:
      '「〜てくる」 expresses a change that has continued up to the present, and takes the て form: 「ふえてきました」 means foreign tourists "have been increasing." 「ふえ」 is the ます stem, 「ふえる」 the dictionary form, and 「ふえた」 the た form — none can connect to 「きました」; only the て form 「ふえて」 is correct.',
  },

  // ---------- おわる・かた・がる（035~037） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-035',
    stem: 'その ほんを （　）おわったら、わたしにも かして ください。',
    options: ['よみ', 'よむ', 'よんで', 'よんだ'],
    answerIndex: 0,
    explanation:
      '「〜おわる」表示動作做完（…完），接動詞ます形語幹：「よみます」去ます得「よみ」，「よみおわったら」＝「等你看完那本書之後」。辭書形「よむ」、て形「よんで」、た形「よんだ」都不能接おわる，屬於接續錯誤。',
    explanationEn:
      '「〜おわる」 means to finish doing something and attaches to the ます stem: dropping ます from 「よみます」 gives 「よみ」, so 「よみおわったら」 means "once you finish reading that book." The dictionary form 「よむ」, て form 「よんで」, and た form 「よんだ」 cannot attach to おわる.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-036',
    stem: 'あたらしい せんたくきの （　）かたが よく わかりません。',
    options: ['つかい', 'つかう', 'つかって', 'つかった'],
    answerIndex: 0,
    explanation:
      '「動詞ます形語幹＋かた」表示做法（…的方法）：「つかいます」去ます得「つかい」，「つかいかた」＝「使用方法」，整句是「不太清楚新洗衣機的用法」。辭書形「つかう」、て形「つかって」、た形「つかった」都不能接「かた」，只有ます形語幹是正確接續。',
    explanationEn:
      '「ます stem + かた」 means "how to do something": dropping ます from 「つかいます」 gives 「つかい」, so 「つかいかた」 means "how to use it" — the speaker doesn\'t quite understand how to use the new washing machine. The dictionary form 「つかう」, て form 「つかって」, and た form 「つかった」 cannot attach to 「かた」.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-037',
    stem: 'いもうとは、わたしの あたらしい くつを （　）がって います。',
    options: ['ほし', 'ほしい', 'ほしくて', 'ほしければ'],
    answerIndex: 0,
    explanation:
      '「〜がる」用來描述第三者的願望或感覺，い形容詞要去掉語尾い再接がる：「ほしい」去い得「ほし」，「ほしがっています」＝「妹妹很想要（我的新鞋）」。「ほしい」沒去語尾、「ほしくて」是て形、「ほしければ」是假定形，都不能接がる。',
    explanationEn:
      '「〜がる」 describes a third person\'s desire or feeling; an い-adjective drops its final い before がる: 「ほしい」 becomes 「ほし」, so 「ほしがっています」 means my little sister wants my new shoes. 「ほしい」 keeps its ending, 「ほしくて」 is the て form, and 「ほしければ」 the conditional — none can attach to がる.',
  },

  // ---------- つもり・尊敬動詞・つづける（038~040） ----------
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-038',
    stem: 'らいしゅうの にちようび、ともだちと テニスを （　）つもりです。',
    options: ['する', 'した', 'して', 'しよう'],
    answerIndex: 0,
    explanation:
      '「〜つもりだ」表示打算，前面接動詞辭書形：「するつもりです」＝「打算（下週日）打網球」。「した」接つもり會變成「自以為已經做過了」，和「らいしゅう」的未來時間矛盾；「して」「しよう」都不能接つもり，屬於接續錯誤。',
    explanationEn:
      '「〜つもりだ」 expresses an intention and takes the dictionary form: 「するつもりです」 means "I plan to play tennis next Sunday." 「した」 + つもり would mean "I believe I already did it," contradicting the future word 「らいしゅう」; 「して」 and 「しよう」 cannot connect to つもり at all.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-039',
    stem: 'やまだ せんせいは いま、にかいの きょうしつに （　）。',
    options: ['いらっしゃいます', 'おります', 'まいります', 'いたします'],
    answerIndex: 0,
    explanation:
      '「いらっしゃる」是「いる」的尊敬語，用來抬高老師的動作：「きょうしつにいらっしゃいます」＝「老師現在在二樓的教室」。「おります」是「いる」的謙讓語，只能用在自己這一方；「まいります」是「行く／来る」的謙讓語；「いたします」是「する」的謙讓語，用在老師身上都不合適。',
    explanationEn:
      '「いらっしゃる」 is the honorific form of 「いる」, used to elevate the teacher: 「きょうしつにいらっしゃいます」 means the teacher is in the second-floor classroom now. 「おります」 is the humble form of 「いる」, used only for one\'s own side; 「まいります」 is humble for 「行く／来る」; 「いたします」 is humble for 「する」 — all three are wrong when describing a teacher.',
  },
  {
    kind: 'choice',
    id: 'n4-grammar-keishiki-040',
    stem: 'マラソンの せんしゅたちは、あさから ずっと （　）つづけて います。',
    options: ['はしり', 'はしる', 'はしって','はしった'],
    answerIndex: 0,
    explanation:
      '「〜つづける」表示動作持續不斷（一直…），接動詞ます形語幹：「はしります」去ます得「はしり」，「はしりつづけています」＝「（選手們）從早上一直跑到現在」。辭書形「はしる」、て形「はしって」、た形「はしった」都不能接つづける，接續錯誤。',
    explanationEn:
      '「〜つづける」 means to keep doing something and attaches to the ます stem: dropping ます from 「はしります」 gives 「はしり」, so 「はしりつづけています」 means the marathon runners have kept running since morning. The dictionary form 「はしる」, て form 「はしって」, and た form 「はしった」 cannot attach to つづける.',
  },
]

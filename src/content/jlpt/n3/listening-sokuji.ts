import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n3-listening-sokuji-001',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、今日は用事があるので、お先に失礼します。' },
    ],
    question: '',
    options: [
      'お疲れさまでした。また明日。',
      '失礼なことを言わないでください。',
      'はい、お先にどうぞ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「お先に失礼します」是下班先走時的慣用寒暄，正確回應是「お疲れさまでした」慰勞對方。「失礼なことを言わないでください」把慣用語中的「失礼」誤解成「沒禮貌」，答非所問；「お先にどうぞ」是讓對方先走（如讓路、讓電梯）時說的，場合不對。',
    explanationEn:
      '「お先に失礼します」 is the set phrase for leaving work before others, and the proper reply is 「お疲れさまでした」 to acknowledge their day\'s work. 「失礼なことを言わないでください」 misreads the 「失礼」 in the set phrase as literal rudeness and answers the wrong thing; 「お先にどうぞ」 is used to let someone go ahead of you, as at a door or elevator, so the situation does not match.',
  },
  {
    id: 'n3-listening-sokuji-002',
    kind: 'listening',
    script: [
      { speaker: '男', text: '悪いんだけど、この資料、明日までに目を通しておいてもらえない？' },
    ],
    question: '',
    options: [
      'うん、分かった。明日までだね。',
      '目が悪いから、眼鏡をかけてるんだ。',
      'うん、読んでもらえてよかったね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「目を通す」是慣用語「過目、瀏覽」，對方委婉請託「幫我先看過資料」，答應並確認期限的「うん、分かった。明日までだね」最自然。「目が悪い」只是抓到同一個字「目」卻答非所問；「読んでもらえてよかったね」授受方向顛倒，說得像是別人幫對方讀過了，不成回應。',
    explanationEn:
      '「目を通す」 is an idiom meaning to look through or skim a document; the speaker is politely asking the listener to review the materials, so agreeing and confirming the deadline with 「うん、分かった。明日までだね」 is the natural reply. Mentioning bad eyesight merely latches onto the character 「目」 and misses the point; 「読んでもらえてよかったね」 reverses the benefactive direction, as if someone had already read it for the speaker, so it fails as a response.',
  },
  {
    id: 'n3-listening-sokuji-003',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'あれ、来週の会議って、3時からでしたっけ？' },
    ],
    question: '',
    options: [
      'ええ、3時から第2会議室でやりますよ。',
      'そんなに？3時間もかかったんですか。',
      '会議はもう終わりましたよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜でしたっけ」是向對方確認記憶中資訊的說法，回答應直接確認「對，3點開始」並可補充地點。「3時間もかかったんですか」把「3時から」聽成「3時間」，時間點與時間長度混淆；「もう終わりましたよ」與題幹說的「来週の会議」矛盾，下週的會議不可能已結束。',
    explanationEn:
      '「〜でしたっけ」 asks the listener to confirm a half-remembered fact, so the reply should confirm it directly — yes, it starts at three — and may add the room. 「3時間もかかったんですか」 mishears 「3時から」 (from three o\'clock) as 「3時間」 (three hours), confusing a start time with a duration; 「もう終わりましたよ」 contradicts the premise, since next week\'s meeting cannot already be over.',
  },
  {
    id: 'n3-listening-sokuji-004',
    kind: 'listening',
    script: [
      { speaker: '男', text: '隣の部屋の人、夜遅くまでうるさくて、全然眠れないんですよ。' },
    ],
    question: '',
    options: [
      'それは大変ですね。一度注意してみたらどうですか。',
      'うるさい音楽がお好きなんですね。',
      '私は毎晩ぐっすり眠れますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方在抱怨鄰居吵到睡不著，先表達同情「それは大変ですね」再給建議，是最合適的回應。「うるさい音楽がお好きなんですね」抓到「うるさい」一詞卻曲解成對方喜歡吵鬧的音樂，答非所問；「私は毎晩ぐっすり眠れますよ」只顧著說自己睡得好，完全沒有回應對方的困擾。',
    explanationEn:
      'The speaker is complaining that a noisy neighbor keeps him awake, so first sympathizing with 「それは大変ですね」 and then offering advice is the best response. 「うるさい音楽がお好きなんですね」 latches onto 「うるさい」 and twists it into the speaker liking loud music, missing the point; 「私は毎晩ぐっすり眠れますよ」 just brags about one\'s own sound sleep and never addresses the speaker\'s trouble at all.',
  },
  {
    id: 'n3-listening-sokuji-005',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、この傘、駅までちょっと貸してもらえませんか。' },
    ],
    question: '',
    options: [
      'いいですよ。どうぞ使ってください。',
      'ありがとうございます。じゃあ、お借りしますね。',
      'ええ、駅までは歩いて10分ぐらいですよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「貸してもらえませんか」是請對方把傘借給自己，被拜託的一方答應時說「いいですよ。どうぞ使ってください」。「じゃあ、お借りしますね」授受方向顛倒，那是「借入方」得到允許後說的話，不能用來回應請託；「駅までは歩いて10分」只抓到「駅」這個字，回答的是路程而非借傘。',
    explanationEn:
      '「貸してもらえませんか」 asks the listener to lend the umbrella, so the person being asked grants it with 「いいですよ。どうぞ使ってください」. 「じゃあ、お借りしますね」 reverses the roles — that is what the borrower says after getting permission, not a reply to the request; and stating that the station is a ten-minute walk latches onto the word 「駅」 and answers about distance instead of the umbrella.',
  },
  {
    id: 'n3-listening-sokuji-006',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'お世話になっております。山田商事の田中と申します。' },
    ],
    question: '',
    options: [
      'こちらこそ、いつもお世話になっております。',
      '田中はただいま席を外しております。',
      'お世話をするのは大変でしょうね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「お世話になっております」是商務電話與往來的固定寒暄，回應也用固定句「こちらこそ、いつもお世話になっております」。「田中はただいま席を外しております」是有人「找」田中時的應對，但這裡田中是來電報名字的本人，抓到同名卻答非所問；「お世話をするのは大変でしょうね」把慣用寒暄誤解成字面的「照顧人」。',
    explanationEn:
      '「お世話になっております」 is the fixed business greeting on calls and in correspondence, and the reply is equally formulaic: 「こちらこそ、いつもお世話になっております」. 「田中はただいま席を外しております」 is what you say when someone is asking for Tanaka — but here Tanaka is the caller introducing himself, so it only matches the name and misses the situation; 「お世話をするのは大変でしょうね」 takes the set greeting literally as caring for someone.',
  },
  {
    id: 'n3-listening-sokuji-007',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'ねえ、今晩、仕事の帰りにみんなで飲みに行かない？' },
    ],
    question: '',
    options: [
      'ごめん、今日はちょっと用事があって。',
      'うん、飲み物なら買っておいたよ。',
      '昨日はほんとうに楽しかったね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜ない？」是口語的邀約，委婉拒絕時用「ごめん、今日はちょっと用事があって」，以「ちょっと〜て」收尾留下餘韻是很自然的婉拒。「飲み物なら買っておいたよ」只抓到「飲み」一字，把喝酒聚會誤答成飲料採買；「昨日は楽しかったね」時態錯誤，邀約說的是今晚，不是回顧昨天。',
    explanationEn:
      '「〜ない？」 is a casual invitation, and a soft refusal like 「ごめん、今日はちょっと用事があって」, trailing off with 「ちょっと〜て」, is the natural way to decline. 「飲み物なら買っておいたよ」 latches onto 「飲み」 and mistakes an invitation to go drinking for a question about buying beverages; 「昨日は楽しかったね」 gets the time frame wrong — the invitation is about tonight, not a memory of yesterday.',
  },
  {
    id: 'n3-listening-sokuji-008',
    kind: 'listening',
    script: [
      { speaker: '男', text: '悪いけど、荷物を運ぶから、ちょっと手を貸してくれない？' },
    ],
    question: '',
    options: [
      'うん、いいよ。何を運べばいい？',
      'うん、貸してくれてありがとう。',
      '手を洗ってから食べたほうがいいよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「手を貸す」是慣用語「幫忙」，對方請求協助搬行李，答應並確認要做什麼的「うん、いいよ。何を運べばいい？」最自然。「貸してくれてありがとう」授受方向顛倒，變成感謝對方借東西給自己，與「請你幫我」的方向相反；「手を洗ってから」只抓到「手」這個字，答非所問。',
    explanationEn:
      '「手を貸す」 is an idiom meaning to lend a hand; the speaker is asking for help carrying luggage, so agreeing and asking what to carry — 「うん、いいよ。何を運べばいい？」 — is the natural reply. 「貸してくれてありがとう」 reverses the benefactive direction into thanking the other person for lending something, the opposite of being asked to help; and telling him to wash his hands before eating merely latches onto the word 「手」, answering nothing.',
  },
  {
    id: 'n3-listening-sokuji-009',
    kind: 'listening',
    script: [
      { speaker: '女', text: '明日の待ち合わせなんだけど、駅前に変更してもいいかな？' },
    ],
    question: '',
    options: [
      'うん、いいよ。じゃあ、駅前でね。',
      'うん、変更しないほうがいいと思うよ。',
      '駅前はいつも人が多くてにぎやかだよね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てもいいかな」是徵求同意的確認句，同意時回「うん、いいよ」並複述新地點確認即可。「うん、変更しないほうがいいと思うよ」肯否方向自相矛盾，先說「うん」表示同意卻接著反對變更，不成立的回應；「人が多くてにぎやか」只抓到「駅前」一詞聊起感想，沒有回答能不能改地點。',
    explanationEn:
      '「〜てもいいかな」 seeks the listener\'s consent, so agreeing with 「うん、いいよ」 and repeating the new spot to confirm is all that is needed. 「うん、変更しないほうがいいと思うよ」 contradicts itself — the opening 「うん」 signals agreement but the rest opposes the change, so it does not hold together; and chatting about how crowded and lively the station area is latches onto 「駅前」 without ever answering whether the location can be changed.',
  },
  {
    id: 'n3-listening-sokuji-010',
    kind: 'listening',
    script: [
      { speaker: '男', text: '先日はごちそうさまでした。本当においしかったです。' },
    ],
    question: '',
    options: [
      'いいえ、お口に合ったならよかったです。',
      'じゃあ、遠慮なくいただきます。',
      'はい、今度ごちそうしてください。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方為前幾天的招待道謝，主人回「お口に合ったならよかったです」（合您胃口就好）是標準的謙遜回應。「遠慮なくいただきます」是「開動前」接受招待時說的，時機完全不對；「今度ごちそうしてください」反過來向道謝的客人要求請客，立場顛倒又失禮，不是自然回應。',
    explanationEn:
      'The speaker is thanking the host for a meal the other day, and the host\'s standard modest reply is 「お口に合ったならよかったです」 — glad it suited your taste. 「遠慮なくいただきます」 is said when accepting food before eating, so the timing is completely wrong; 「今度ごちそうしてください」 turns around and demands that the thanking guest treat next time, reversing the roles and sounding rude rather than natural.',
  },
  {
    id: 'n3-listening-sokuji-011',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、ちょっと暑いので、エアコンの温度を下げてもらってもいいですか。' },
    ],
    question: '',
    options: [
      'あ、暑かったですか。すぐ下げますね。',
      'ええ、上げてくれてありがとうございます。',
      'この店は値段が下がっていて安いですよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てもらってもいいですか」是委婉請託，被拜託方答應並馬上行動的「すぐ下げますね」最合適。「上げてくれてありがとう」錯了兩層：動作方向「上げる」與請求的「下げる」相反，授受表現也說得像對方已為自己做了什麼；「値段が下がって」抓到同一個動詞「下がる」卻扯到價格，答非所問。',
    explanationEn:
      '「〜てもらってもいいですか」 is a gentle request, so the person asked should agree and act at once: 「すぐ下げますね」. 「上げてくれてありがとう」 is wrong on two levels — 「上げる」 goes in the opposite direction from the requested 「下げる」, and the benefactive phrasing implies the other person already did something for the speaker; the remark about falling prices grabs the same verb 「下がる」 but wanders off to shop prices, answering nothing.',
  },
  {
    id: 'n3-listening-sokuji-012',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'コピー機の調子が悪いみたいなんですが、ちょっと見てもらえますか。' },
    ],
    question: '',
    options: [
      'はい、分かりました。今すぐ確認します。',
      '私もこのごろ体の調子が悪いんです。',
      'ええ、コピーを見せてあげましたよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「調子が悪い」指機器狀況不佳，對方請求「見てもらえますか」（能幫忙看看嗎），答應並立刻處理的「今すぐ確認します」是正確回應。「体の調子が悪い」只抓到「調子が悪い」同一詞卻講自己的身體，答非所問；「見せてあげました」授受與時態都錯，變成過去已把影本拿給別人看，牛頭不對馬嘴。',
    explanationEn:
      '「調子が悪い」 here means the machine is acting up, and 「見てもらえますか」 asks the listener to take a look, so agreeing and dealing with it right away — 「今すぐ確認します」 — is the correct response. Talking about one\'s own poor health only matches the phrase 「調子が悪い」 while ignoring the copier; 「見せてあげましたよ」 is wrong in both benefactive direction and tense, claiming to have already shown a copy to someone, which is a complete mismatch.',
  },
  {
    id: 'n3-listening-sokuji-013',
    kind: 'listening',
    script: [
      { speaker: '男', text: '悪いけど、この封筒、会社の帰りにポストに出しておいてくれない？' },
    ],
    question: '',
    options: [
      'うん、いいよ。切手は貼ってある？',
      'うん、さっきポストに手紙が届いてたよ。',
      'うん、封筒なら机の上にたくさんあるよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方拜託「ポストに出しておいてくれない？」，是請自己下班回家路上幫忙投遞信件，答應並確認「切手は貼ってある？」（貼郵票了嗎）最自然。「手紙が届いてた」方向顛倒，說的是「收到」信而不是「寄出」信；「封筒なら机の上にたくさんある」只抓到「封筒」一詞，回答的是文具庫存，完全沒回應對方的請託。',
    explanationEn:
      'The speaker asks a favor with 「ポストに出しておいてくれない？」 — mail this envelope on the way home — so agreeing and checking 「切手は貼ってある？」 (is a stamp on it?) is the natural reply. 「手紙が届いてたよ」 reverses the direction, talking about mail that arrived rather than mail to send; and saying there are plenty of envelopes on the desk merely latches onto the word 「封筒」, answering about stationery stock instead of the request.',
  },
  {
    id: 'n3-listening-sokuji-014',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'あれ、顔色が悪いですよ。今日は早く帰って、病院に行ったほうがいいんじゃないですか。' },
    ],
    question: '',
    options: [
      'ありがとうございます。そうさせてもらいます。',
      'ええ、病院なら駅の前にありますよ。',
      '顔なら毎朝ちゃんと洗っていますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方關心自己氣色差、勸早點回去看醫生，接受好意的「ありがとうございます。そうさせてもらいます」最合適，「〜させてもらう」表示承對方好意照做。「病院なら駅の前にあります」把對方的關心誤當成在問路，答非所問；「顔なら毎朝洗っています」只抓到「顔」這個字，把「顔色が悪い」（氣色差）曲解成臉沒洗乾淨。',
    explanationEn:
      'The speaker worries that the listener looks pale and urges them to go home early and see a doctor, so accepting the kindness with 「ありがとうございます。そうさせてもらいます」 is best — 「〜させてもらう」 means acting on the other person\'s goodwill. Pointing out that the hospital is in front of the station mistakes the concern for a request for directions; and insisting one washes one\'s face every morning latches onto 「顔」, twisting 「顔色が悪い」 (looking unwell) into a matter of face-washing.',
  },
  {
    id: 'n3-listening-sokuji-015',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'こちらのお薬は、一日三回、毎日食事の後に飲んでくださいね。' },
    ],
    question: '',
    options: [
      'はい、わかりました。食後ですね。',
      'いいえ、食事ならもう済ませましたよ。',
      'そんなにたくさんは食べられませんよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '藥師在說明服藥方式「一日三回、食事の後に」，病人複誦重點確認的「はい、わかりました。食後ですね」是最自然的回應。「食事ならもう済ませました」把服藥時間的說明誤解成「吃過飯了沒」的提問，答非所問；「たくさんは食べられません」把「飲む」（服藥）混淆成「食べる」（吃東西），完全沒聽懂指示。',
    explanationEn:
      'The pharmacist is explaining the dosage — three times a day, after meals — so repeating the key point to confirm, 「はい、わかりました。食後ですね」, is the natural response. 「食事ならもう済ませましたよ」 mistakes the instruction about timing for a question about whether one has eaten; and 「そんなにたくさんは食べられません」 confuses 「飲む」 (taking medicine) with 「食べる」 (eating), showing the instruction was not understood at all.',
  },
  {
    id: 'n3-listening-sokuji-016',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'もしもし、ごめん、今、電車の中だから、降りたらこちらからかけ直してもいい？' },
    ],
    question: '',
    options: [
      'うん、わかった。じゃあ、待ってるね。',
      'ううん、電車はまだ来ていないよ。',
      'うん、昨日はかけ直してくれてありがとう。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方表示人在電車上不方便講電話，提議下車後回撥，同意並表示等候的「うん、わかった。じゃあ、待ってるね」最自然。「電車はまだ来ていない」只抓到「電車」一詞，答的是自己等車的狀況，與對方的提議無關；「昨日はかけ直してくれてありがとう」時態錯誤，把「等一下要回撥」說成昨天已經發生的事來道謝。',
    explanationEn:
      'The caller says he is on the train and offers to call back after getting off, so agreeing and saying you will wait — 「うん、わかった。じゃあ、待ってるね」 — is the natural reply. 「電車はまだ来ていないよ」 latches onto the word 「電車」 and talks about waiting for a train, unrelated to the offer; and thanking him for calling back yesterday gets the time frame wrong, treating a future callback as something that already happened.',
  },
  {
    id: 'n3-listening-sokuji-017',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、住民票を一枚もらいたいんですが、どこに並べばいいですか。' },
    ],
    question: '',
    options: [
      'あちらの三番の窓口にどうぞ。',
      '住所ならこの紙に書いてありますよ。',
      '一枚だけでは足りないと思いますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方在市公所詢問申請住民票該「どこに並べばいいですか」（在哪裡排隊），直接指引窗口的「あちらの三番の窓口にどうぞ」是正確應對。「住所ならこの紙に書いてあります」只抓到「住」字，答的是地址而不是排隊地點；「一枚だけでは足りない」擅自評論對方需要幾張，既沒回答問題，也顯得多管閒事。',
    explanationEn:
      'The visitor at the city office asks 「どこに並べばいいですか」 — where to line up for a residence certificate — so directing them with 「あちらの三番の窓口にどうぞ」 is the correct response. Saying the address is written on this paper only picks up the character 「住」 and answers about an address, not where to queue; and declaring that one copy will not be enough presumes to judge how many they need, answering nothing and overstepping.',
  },
  {
    id: 'n3-listening-sokuji-018',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'ごめん、日曜日の公園の掃除、急に用事ができて、参加できなくなっちゃったんだ。' },
    ],
    question: '',
    options: [
      'そうなんだ。じゃあ、また次のときにお願いね。',
      'うん、公園はとてもきれいになったよ。',
      'じゃあ、日曜日に公園で会おうね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方為週日的公園打掃臨時不能參加而道歉，體諒地回「じゃあ、また次のときにお願いね」（那下次再麻煩你）最自然。「公園はとてもきれいになった」時態錯誤，打掃是週日才要進行的活動，不可能已經變乾淨；「日曜日に公園で会おうね」與對方明說「參加不了」直接矛盾，等於完全沒聽懂對方的話。',
    explanationEn:
      'The speaker apologizes that something came up and he can no longer join the Sunday park cleanup, so the understanding reply 「じゃあ、また次のときにお願いね」 — asking him to help next time — is the natural one. Saying the park has become very clean gets the tense wrong, since the cleanup has not happened yet; and proposing to meet at the park on Sunday directly contradicts his statement that he cannot attend, as if his words were never heard.',
  },
  {
    id: 'n3-listening-sokuji-019',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'お客様がいらっしゃったから、会議室にお茶をお願いできる？' },
    ],
    question: '',
    options: [
      'はい、すぐお持ちします。何人分ですか。',
      '私はコーヒーのほうが好きなんですが。',
      'お客様はもうお帰りになりましたよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方請自己送茶到會議室招待客人，答應並確認人數的「はい、すぐお持ちします。何人分ですか」最合適。「私はコーヒーのほうが好き」把招待客人的請託誤當成在問自己想喝什麼，答非所問；「もうお帰りになりました」與對方說的「いらっしゃったから」（客人剛到）矛盾，不能成立。',
    explanationEn:
      'The speaker asks for tea to be brought to the meeting room for visitors, so agreeing and confirming the number — 「はい、すぐお持ちします。何人分ですか」 — is the best reply. Stating a personal preference for coffee mistakes the hosting request for a question about what the listener wants to drink; and saying the visitors have already left contradicts 「いらっしゃったから」, which says they have just arrived, so it cannot stand.',
  },
  {
    id: 'n3-listening-sokuji-020',
    kind: 'listening',
    script: [
      { speaker: '男', text: '来月の町内会の集まり、場所が公民館に変わったって知ってた？' },
    ],
    question: '',
    options: [
      'ううん、知らなかった。教えてくれてありがとう。',
      'うん、場所はまだ決まっていないらしいよ。',
      'そうそう、集まりはとても楽しかったね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方告知下個月町內會的集會地點改到公民館，並用「知ってた？」確認，回「ううん、知らなかった。教えてくれてありがとう」承接新資訊並道謝最自然。「場所はまだ決まっていないらしい」與對方明說的「公民館に変わった」矛盾；「集まりはとても楽しかったね」時態錯誤，集會是下個月的事，還沒有舉行。',
    explanationEn:
      'The speaker shares that next month\'s neighborhood meeting has moved to the community center and checks with 「知ってた？」, so replying 「ううん、知らなかった。教えてくれてありがとう」 — acknowledging the news and thanking him — is the natural response. Claiming the venue is still undecided contradicts his clear statement 「公民館に変わった」; and reminiscing that the gathering was fun gets the tense wrong, since it is next month and has not taken place yet.',
  },
]

import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n2-listening-sokuji-001',
    kind: 'listening',
    script: [
      { speaker: '女', text: '折り入ってお願いしたいことがあるんですが、今ちょっとお時間よろしいでしょうか。' },
    ],
    question: '',
    options: [
      'ええ、構いませんよ。何でしょう、改まって。',
      '時間なら、そこの時計を見れば分かりますよ。',
      'はい、先ほどお願いしておきました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「折り入って」表示鄭重、慎重地拜託，是有要事相求的開場白，回應「ええ、構いませんよ」答應撥出時間最自然。「時計を見れば分かります」只抓到「時間」一詞卻答非所問；「お願いしておきました」變成自己已拜託別人，授受方向顛倒，不成回應。',
    explanationEn:
      '「折り入って」signals a serious, earnest request, so the speaker is opening a weighty favor; agreeing to make time with 「ええ、構いませんよ」 is the natural reply. Pointing at the clock latches onto the word 「時間」 but answers a different question entirely, and 「お願いしておきました」 reverses the direction of the request, as if the listener had already asked someone else for a favor.',
  },
  {
    id: 'n2-listening-sokuji-002',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'この機械の故障、部品ももう手に入らないし、正直、もうお手上げですよ。' },
    ],
    question: '',
    options: [
      'そこまで言うなら、専門の業者に相談するしかなさそうですね。',
      '質問があるときは、手を上げて言ってください。',
      '無事に直してもらえて、何よりでしたね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '慣用句「お手上げだ」意為「束手無策、投降」，對方表示已無計可施，建議「找專門業者商量」是合理回應。「手を上げて質問して」把慣用句誤解成字面的「舉手」，答非所問；「直してもらえて何より」與事實相反——機器根本沒修好，肯否弄錯。',
    explanationEn:
      'The idiom 「お手上げだ」 means to be at a complete loss, out of options. Since the speaker has given up, suggesting they consult a professional repair service is the sensible response. 「手を上げて」 misreads the idiom literally as raising one\'s hand to ask questions, and 「無事に直してもらえて」 congratulates a successful repair that never happened, getting the facts backwards.',
  },
  {
    id: 'n2-listening-sokuji-003',
    kind: 'listening',
    script: [
      { speaker: '女', text: '随分と楽しそうにおしゃべりしてるね。締め切りは明日だって、分かってるよね？' },
    ],
    question: '',
    options: [
      'すみません、すぐに作業に戻ります。',
      'はい、明日が来るのがとても楽しみです。',
      'ええ、締め切りを延ばしてあげましょうか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '這句表面在確認截止日，實際是諷刺對方在聊天不工作，聽出弦外之音後道歉並回去工作才是正確反應。「明日が楽しみ」把諷刺當成字面聊天接下去，完全沒聽懂；「延ばしてあげましょうか」授受方向顛倒——被催促的人反而要「幫」上司延期，立場錯亂。',
    explanationEn:
      'On the surface this confirms the deadline, but it is really a sarcastic jab at someone chatting instead of working; catching that implication, apologizing and getting back to work is the right reaction. 「明日が来るのがとても楽しみです」 takes the sarcasm at face value and keeps chatting, missing the point entirely, while 「延ばしてあげましょうか」 flips the power relationship — the person being scolded offers to extend the deadline for the boss.',
  },
  {
    id: 'n2-listening-sokuji-004',
    kind: 'listening',
    script: [
      { speaker: '男', text: '正直なところ、あの新人が出した企画書、なかなか悪くないんじゃないかと思うんだけど。' },
    ],
    question: '',
    options: [
      'ええ、私も結構よく書けてると思いました。',
      'そうですね、早く書き直させたほうがいいですね。',
      '新人は企画書を出さなくてもいいんですか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「悪くないんじゃないか」是雙重否定，實際是委婉的肯定「寫得不錯」，因此附和稱讚最貼切。「書き直させたほうがいい」把雙重否定聽成單純的「悪い」，肯否相反；「出さなくてもいいんですか」只抓到「新人」「企画書」等字眼卻答非所問，沒有回應評價本身。',
    explanationEn:
      '「悪くないんじゃないか」 is a double negative that works as understated praise — the proposal is actually pretty good — so agreeing that it is well written fits best. 「書き直させたほうがいい」 hears the double negative as a plain 「悪い」 and reverses the evaluation, while 「出さなくてもいいんですか」 merely picks up the words 「新人」 and 「企画書」 without responding to the assessment at all.',
  },
  {
    id: 'n2-listening-sokuji-005',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'お忙しいところ恐縮ですが、この見積もり、今日中に確認していただけると助かるんですが。' },
    ],
    question: '',
    options: [
      '分かりました。夕方までには目を通しておきます。',
      'ええ、確認していただいて本当に助かりました。',
      '見積もりなら、もっと安くしてくれる店もありますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜していただけると助かるんですが」是商務上婉轉的請託，答應並承諾「傍晚前過目」最恰當。「確認していただいて助かりました」授受方向顛倒，變成對方已經替自己確認完畢；「安くしてくれる店」只抓到「見積もり」一詞就扯到比價，答非所問。',
    explanationEn:
      '「〜していただけると助かるんですが」 is a polite business request, so accepting it and promising to look the estimate over by evening is the appropriate reply. 「確認していただいて助かりました」 reverses giver and receiver, thanking the other person as if they had already done the checking, and the remark about a cheaper shop grabs the word 「見積もり」 and veers off into price comparison, answering a question nobody asked.',
  },
  {
    id: 'n2-listening-sokuji-006',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'あのう、夜分に申し訳ないんですが、テレビの音、もう少し下げていただけないでしょうか。' },
    ],
    question: '',
    options: [
      'あ、すみません、うるさかったですね。すぐ小さくします。',
      'じゃあ、遠慮なくもっと大きくさせてもらいますね。',
      'このテレビ、先月安く買ったばかりなんですよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '這是深夜對鄰居音量的委婉抗議，正確反應是道歉並立刻調小聲音。「もっと大きくさせてもらいます」方向完全相反，把「調小」聽成「可以開大」；「安く買ったばかり」只抓到「テレビ」一詞就聊起購物，答非所問，完全沒回應抱怨。',
    explanationEn:
      'This is a polite late-night complaint from a neighbor about the TV volume, so the right reaction is to apologize and turn it down immediately. 「もっと大きくさせてもらいます」 goes in exactly the opposite direction, treating the request to lower the volume as permission to raise it, and the comment about buying the TV cheaply last month latches onto the word 「テレビ」 to chat about shopping, never addressing the complaint.',
  },
  {
    id: 'n2-listening-sokuji-007',
    kind: 'listening',
    script: [
      { speaker: '女', text: '田中さんって本当に顔が広いですね。どこへ行っても知り合いに会うんだから。' },
    ],
    question: '',
    options: [
      'この仕事を長くやっていると、自然と付き合いが増えるんですよ。',
      'そうですか？顔はそんなに大きくないと思いますけど。',
      'ええ、知らない人ばかりで、いつも困ってるんです。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '慣用句「顔が広い」指「交遊廣闊、人面廣」，被這麼稱讚時謙虛說明「做久了自然認識的人多」最自然。「顔は大きくない」把慣用句誤解成字面的臉大小，答非所問；「知らない人ばかりで困ってる」與「到處遇到熟人」的前提相反，肯否錯誤。',
    explanationEn:
      'The idiom 「顔が広い」 means to be well connected and know many people. When complimented this way, modestly explaining that contacts naturally accumulate after years in the job is the most natural reply. Saying one\'s face is not that big misreads the idiom as literal face size, and claiming to be surrounded by strangers contradicts the premise that the person runs into acquaintances everywhere.',
  },
  {
    id: 'n2-listening-sokuji-008',
    kind: 'listening',
    script: [
      { speaker: '男', text: '今度の海外出張、行きたくないわけではないんですが、日程がちょっと厳しくて…。' },
    ],
    question: '',
    options: [
      'じゃあ、日程さえ調整できれば、行ってもらえるということですね。',
      'そんなに嫌なら、無理に行けとは言いませんよ。',
      '日程表なら、さっき机の上に置いておきましたよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「行きたくないわけではない」是雙重否定，意思是「並非不想去」，問題只在日程，因此確認「只要調整日程就願意去吧」最能接住話意。「そんなに嫌なら」把雙重否定聽成單純的「不想去」，肯否相反；「日程表なら机の上に」只抓到「日程」一詞卻答非所問。',
    explanationEn:
      '「行きたくないわけではない」 is a double negative meaning he is not unwilling to go — the only obstacle is the schedule — so confirming 「日程さえ調整できれば、行ってもらえる」 picks up his intent precisely. 「そんなに嫌なら」 hears the double negative as flat refusal and reverses his meaning, while the remark about the schedule sheet on the desk just latches onto the word 「日程」 and answers something else entirely.',
  },
  {
    id: 'n2-listening-sokuji-009',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'あら、今日は随分早い出社ね。明日は雪でも降るんじゃない？' },
    ],
    question: '',
    options: [
      'たまには早く来ることもありますよ。勘弁してください。',
      '天気予報によると、明日は一日晴れだそうですよ。',
      'いつも早いって褒めていただいて、うれしいです。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「明日は雪でも降るんじゃない？」是揶揄「太陽打西邊出來了」的定番說法，諷刺對方平常都遲到，苦笑求饒「勘弁してください」是聽懂挖苦後的自然反應。「天気予報では晴れ」把揶揄當成真的在聊天氣，答非所問；「褒めていただいて」把諷刺誤解成稱讚，語意方向完全相反。',
    explanationEn:
      '「明日は雪でも降るんじゃない？」 is a stock teasing line — like saying the sun must have risen in the west — implying the person is usually late. A wry plea of 「勘弁してください」 shows the listener caught the jab. Citing the weather forecast treats the tease as a genuine question about tomorrow\'s weather, and taking it as praise for always being early reverses the meaning of the sarcasm completely.',
  },
  {
    id: 'n2-listening-sokuji-010',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'この報告書、全部英語でまとめ直すとなると、なかなか骨が折れそうだなあ。' },
    ],
    question: '',
    options: [
      '大変そうですね。よかったら半分手伝いましょうか。',
      'えっ、大丈夫ですか。すぐ病院に行ったほうがいいですよ。',
      '英語でまとめてもらえて、本当に助かりました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '慣用句「骨が折れる」意為「費力、辛苦」，對方在感嘆工作吃力，提議「幫忙分擔一半」是體貼且合理的回應。「病院に行ったほうがいい」把慣用句誤解成字面的骨折，答非所問；「まとめてもらえて助かりました」授受關係顛倒——報告根本還沒寫，卻說成對方已替自己完成。',
    explanationEn:
      'The idiom 「骨が折れる」 means a task is laborious and demanding; the speaker is sighing about a tough job ahead, so offering to take on half of it is a considerate, fitting response. Urging him to go to the hospital misreads the idiom as a literal broken bone, and thanking him with 「まとめてもらえて助かりました」 inverts the situation — the report has not even been written, yet it is treated as already done for the listener.',
  },
  {
    id: 'n2-listening-sokuji-011',
    kind: 'listening',
    script: [
      { speaker: '女', text: '先週こちらで買ったばかりの掃除機なんですが、もう動かなくなってしまったんです。' },
    ],
    question: '',
    options: [
      '大変申し訳ございません。すぐに新しいものとお取り替えいたします。',
      'それはよかったですね。これからも大切にお使いください。',
      '店内の掃除でしたら、毎朝きちんとしておりますが。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '這是顧客對「剛買就故障」的客訴，店員先道歉再提出換貨才是正確應對。「それはよかったですね」把故障當成好事來祝賀，肯否完全錯誤；「店内の掃除なら毎朝して」只抓到「掃除」的字眼就答成打掃店面，答非所問，沒有處理商品故障的問題。',
    explanationEn:
      'This is a customer complaint that a vacuum cleaner bought just last week has already stopped working, so the clerk should apologize first and offer a replacement. 「それはよかったですね」 congratulates the customer on a breakdown, getting the sentiment completely wrong, and the reply about cleaning the store every morning latches onto the word 「掃除」 and talks about mopping floors, never dealing with the defective product.',
  },
  {
    id: 'n2-listening-sokuji-012',
    kind: 'listening',
    script: [
      { speaker: '男', text: '君の気持ちも分からなくはないけど、今回はこちらから先方に謝るしかないと思うよ。' },
    ],
    question: '',
    options: [
      'そうですね。明日、直接伺ってお詫びしてきます。',
      '私の気持ちなんて、全然分かってくれないんですね。',
      'では、先方にこちらへ謝りに来てもらいましょう。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「分からなくはない」是雙重否定，表示「並非不能理解你的心情」，整句是先體諒再勸說去道歉，因此接受建議「明天親自登門致歉」最恰當。「全然分かってくれない」把雙重否定聽成「不理解」，肯否相反；「先方に謝りに来てもらう」授受方向顛倒，變成要對方來道歉，與勸告內容背道而馳。',
    explanationEn:
      '「分からなくはない」 is a double negative meaning "I do understand how you feel"; the whole line shows sympathy first and then urges the listener to apologize to the other party, so accepting the advice and promising to visit and apologize tomorrow fits best. 「全然分かってくれない」 hears the double negative as a lack of understanding, reversing the meaning, and having the other party come apologize flips the direction of the apology, going against the advice entirely.',
  },
]

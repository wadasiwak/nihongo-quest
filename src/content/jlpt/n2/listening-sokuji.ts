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
  {
    id: 'n2-listening-sokuji-013',
    kind: 'listening',
    script: [
      { speaker: '女', text: '君に頼むと本当に話が早いね。もう先方とのアポまで取ってくれたのか。' },
    ],
    question: '',
    options: [
      '恐れ入ります。早めに動いておきました。',
      'すみません、これからはもっとゆっくり話します。',
      '先方は話が長くて、少し困りました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '慣用句「話が早い」指「溝通順暢、辦事俐落」，這裡是稱讚對方動作快、連拜訪的約都先敲好了，謙虛回應「恐れ入ります」並說明自己提前行動最自然。「ゆっくり話します」把慣用句誤解成說話速度太快而道歉，答非所問；「先方は話が長くて」只抓到「話」的字眼，完全沒有回應稱讚本身。',
    explanationEn:
      'The idiom 「話が早い」 praises someone as quick on the uptake and efficient — here the listener has even set up the appointment already — so a modest 「恐れ入ります」 acknowledging the compliment and explaining that one acted early is the natural reply. Apologizing and promising to speak more slowly misreads the idiom as literal talking speed, and complaining that the client was long-winded merely latches onto the word 「話」 without responding to the praise.',
  },
  {
    id: 'n2-listening-sokuji-014',
    kind: 'listening',
    script: [
      { speaker: '男', text: '悪いけど、今ちょっと手が離せなくてね。その電話、代わりに出てもらえないかな。' },
    ],
    question: '',
    options: [
      'わかりました。私が出ておきますね。',
      '手なら、さっき洗ったばかりですけど。',
      'はい、先ほどお電話しておきました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「手が離せない」是慣用句，意為「正在忙、抽不開身」，對方拜託代接電話，答應「私が出ておきますね」是正確回應。「手なら洗ったばかり」把慣用句誤解成字面的「手」，答非所問；「お電話しておきました」時序與方向都錯——電話正響著等人接，卻回答成自己已經打過電話了。',
    explanationEn:
      'The idiom 「手が離せない」 means to be tied up and unable to step away; the speaker asks the listener to answer the phone in his place, so agreeing with 「私が出ておきますね」 is the right response. The remark about having just washed one\'s hands takes the idiom literally, and 「お電話しておきました」 gets both timing and direction wrong — the phone is ringing to be answered, yet the reply claims a call was already made.',
  },
  {
    id: 'n2-listening-sokuji-015',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'せっかくのご提案なんですが、社内で検討した結果、今回は見送らせていただくことになりまして。' },
    ],
    question: '',
    options: [
      'そうですか、残念です。またの機会にぜひお願いいたします。',
      'ありがとうございます。では、玄関までお見送りいたします。',
      'ご採用いただけて、大変うれしく思います。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「見送らせていただく」在商務場合是「這次不採用」的婉轉說法，被回絕時得體的反應是表達遺憾並期待下次機會。「玄関までお見送り」把「見送る」誤解成字面的送客，答非所問；「ご採用いただけて」把拒絕聽成錄用，肯否完全相反，沒聽懂婉轉的回絕。',
    explanationEn:
      'In business, 「見送らせていただく」 is a polite way of declining a proposal, so the graceful reply is to express regret and hope for a future opportunity. Offering to see the speaker to the door misreads 「見送る」 in its literal sense of seeing someone off, and rejoicing over being accepted takes the rejection as an acceptance, reversing the meaning entirely.',
  },
  {
    id: 'n2-listening-sokuji-016',
    kind: 'listening',
    script: [
      { speaker: '男', text: '申し訳ございません。あいにく田中はただいま席を外しておりまして。' },
    ],
    question: '',
    options: [
      'では、お戻りになりましたら、折り返しお電話をいただけますか。',
      '椅子を外に運ぶなんて、大変ですね。',
      '田中さんに直接つながって、よかったです。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「席を外す」是「暫時不在座位上」的慣用表現，電話中得知要找的人不在，請對方回來後回電是最自然的應對。「椅子を外に運ぶ」把慣用句誤解成字面的搬椅子，答非所問；「直接つながって、よかった」與「田中不在」的前提互相矛盾，肯否錯誤。',
    explanationEn:
      '「席を外す」 is the set expression for being away from one\'s desk; on hearing that Tanaka is unavailable, asking for a call back once he returns is the natural move. Sympathizing about carrying chairs outside takes the phrase literally, and being glad to have reached Tanaka directly contradicts the very premise that he is away.',
  },
  {
    id: 'n2-listening-sokuji-017',
    kind: 'listening',
    script: [
      { speaker: '女', text: '今日の部長の話、経費の無駄遣いのことばかりで、耳が痛かったわ。' },
    ],
    question: '',
    options: [
      '私も、自分のことを言われているようで、反省しましたよ。',
      '早めに耳鼻科で診てもらったほうがいいですよ。',
      '部長の声は、そんなに大きかったんですか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '慣用句「耳が痛い」意為「別人的話正中自己的短處，聽了刺耳慚愧」，附和「我也像被說中一樣在反省」最能接住話意。「耳鼻科で診てもらう」把慣用句誤解成耳朵真的痛，答非所問；「声が大きかった」也是往字面的音量去理解，完全沒聽懂比喻。',
    explanationEn:
      'The idiom 「耳が痛い」 means the remarks hit painfully close to home; echoing that with 「自分のことを言われているようで、反省しました」 matches the sentiment perfectly. Recommending an ear-nose-throat doctor treats the idiom as a physical earache, and asking whether the boss\'s voice was that loud likewise goes literal about volume, missing the metaphor.',
  },
  {
    id: 'n2-listening-sokuji-018',
    kind: 'listening',
    script: [
      { speaker: '男', text: '今回のミスは大目に見るけど、次からは提出する前に、必ず数字を確認してよ。' },
    ],
    question: '',
    options: [
      '申し訳ありませんでした。以後、必ず確認いたします。',
      'ありがとうございます。では、次も確認しなくていいんですね。',
      '部長は本当に目が大きくていらっしゃいますね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「大目に見る」意為「寬容、不追究」，上司雖然放過這次失誤，重點在「下次務必確認數字」的告誡，因此道歉並承諾改進才是正確反應。「次も確認しなくていい」把告誡聽反了，肯否相反；「目が大きい」把慣用句誤解成字面的眼睛大小，答非所問。',
    explanationEn:
      '「大目に見る」 means to let something slide this once; the boss forgives the mistake but the real point is the warning to always verify the numbers before submitting, so apologizing and promising to do so is correct. 「次も確認しなくていいんですね」 hears the warning backwards, and complimenting the boss\'s large eyes takes the idiom literally, answering nothing at all.',
  },
  {
    id: 'n2-listening-sokuji-019',
    kind: 'listening',
    script: [
      { speaker: '女', text: '部長のサインをもらわないことには、この契約の手続きは進められないのよ。' },
    ],
    question: '',
    options: [
      'では、今から部長のところへ行ってきます。',
      'じゃあ、サインがなくても進められるんですね。',
      '有名な選手のサインなら、私も持っていますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '文型「〜ないことには…ない」表示「不先…就無法…」，意即拿到部長簽名是手續的前提，回答「今から部長のところへ」正確接住指示。「サインがなくても進められる」與文型的意思正好相反；「有名な選手のサイン」只抓到「サイン」一詞就聊起簽名收藏，答非所問。',
    explanationEn:
      'The pattern 「〜ないことには…ない」 means nothing can proceed until the condition is met — the manager\'s signature is a prerequisite — so heading straight to the manager\'s office responds correctly. Saying the procedure can move ahead without the signature reverses the grammar\'s meaning, and boasting about owning a famous athlete\'s autograph merely latches onto the word 「サイン」 and talks about collecting.',
  },
  {
    id: 'n2-listening-sokuji-020',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'ずいぶん立派な報告書だねえ。表紙だけは。' },
    ],
    question: '',
    options: [
      'すみません、中身もすぐに手直しします。',
      'ありがとうございます。デザインを勉強したかいがありました。',
      'では、表紙を外してから提出いたします。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '句尾補上「表紙だけは」是話中帶刺的說法，暗指「只有封面像樣、內容不行」，聽懂諷刺後道歉並表示會修改內容才是正確反應。「ありがとうございます」把挖苦當成稱讚，語意方向完全相反；「表紙を外して提出」只在字面上處理「表紙」，沒聽出對方真正批評的是內容。',
    explanationEn:
      'Tacking on 「表紙だけは」 turns the compliment into sarcasm — only the cover is impressive, implying the content is not. Catching the jab, apologizing, and offering to fix the contents is the right reaction. Thanking him for praising the design takes the sarcasm at face value, and offering to remove the cover before submitting deals only with the literal cover, missing that the real target is the contents.',
  },
  {
    id: 'n2-listening-sokuji-021',
    kind: 'listening',
    script: [
      { speaker: '女', text: '差し支えなければ、こちらの資料を一部いただいてもよろしいでしょうか。' },
    ],
    question: '',
    options: [
      'ええ、どうぞ。ご自由にお持ちください。',
      'そうですね、机の間が狭くて少し差し支えますね。',
      '資料をくださって、ありがとうございます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「差し支えなければ」是「如果不會造成困擾的話」的客氣開場，對方請求索取一份資料，回答「どうぞ。ご自由にお持ちください」爽快允諾最自然。「机の間が狭くて差し支える」把固定用法拆開照字面亂用，答非所問；「くださって、ありがとう」授受方向顛倒——是對方想拿資料，不是給自己資料。',
    explanationEn:
      '「差し支えなければ」 is a courteous opener meaning "if it is no trouble"; the speaker is asking to take a copy of the material, so granting it with 「どうぞ。ご自由にお持ちください」 is the natural answer. The remark about desks being cramped rips the set phrase apart and uses it literally, and thanking the speaker for giving materials reverses the direction — she wants to receive a copy, not hand one over.',
  },
  {
    id: 'n2-listening-sokuji-022',
    kind: 'listening',
    script: [
      { speaker: '男', text: '二年がかりの例のプロジェクトがようやく終わってね。肩の荷が下りたよ。' },
    ],
    question: '',
    options: [
      'お疲れさまでした。今夜はゆっくり休んでください。',
      '重い荷物なら、私がお持ちしましょうか。',
      '新しいプロジェクトが始まるんですね。おめでとうございます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '慣用句「肩の荷が下りる」意為「卸下重擔、如釋重負」，對方感慨費時兩年的案子終於結束，慰勞他「お疲れさまでした」並請他好好休息最貼切。「荷物なら私が持ちましょう」把慣用句誤解成字面的行李，答非所問；「新しいプロジェクトが始まる」與「終わった」的內容相反，也沒接住鬆一口氣的心情。',
    explanationEn:
      'The idiom 「肩の荷が下りる」 means a weight has been lifted from one\'s shoulders; the speaker is relieved that a two-year project is finally over, so acknowledging his effort with 「お疲れさまでした」 and urging him to rest fits best. Offering to carry his heavy luggage misreads the idiom literally, and congratulating him on a new project starting contradicts what he said about the project ending.',
  },
]

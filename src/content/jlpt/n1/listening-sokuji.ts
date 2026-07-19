import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n1-listening-sokuji-001',
    kind: 'listening',
    script: [
      { speaker: '男', text: '販路のことなら、佐藤部長は業界に顔が広いから、一度相談してみたらどうかな。' },
    ],
    question: '',
    options: [
      'そうですね、部長にご紹介をお願いしてみます。',
      'そうですか、そんなに顔が大きい方なんですね。',
      'では、広い会議室を押さえておきます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「顔が広い」是慣用句「人脈廣、交遊廣闊」，對方建議去找部長牽線，回答「請部長幫忙介紹」最切題。「顔が大きい」把慣用句按字面理解成臉的大小，答非所問；「広い会議室」只是抓到「広い」一詞，跟人脈毫無關係。',
    explanationEn:
      '「顔が広い」 is an idiom meaning well-connected, with a wide network. The speaker suggests consulting the department head for sales channels, so asking him for an introduction is the fitting reply. Taking 「顔が大きい」 literally as the size of someone\'s face misses the idiom entirely, and booking a 「広い会議室」 merely latches onto the word 「広い」 and has nothing to do with connections.',
  },
  {
    id: 'n1-listening-sokuji-002',
    kind: 'listening',
    script: [
      { speaker: '女', text: '今度いらした支店長、あのご地位にしては腰が低い方でいらっしゃいますね。' },
    ],
    question: '',
    options: [
      'ええ、どなたにも丁寧に接していらっしゃいますよね。',
      'そうですか、背はむしろ高いほうだと思いますけど。',
      'ええ、腰を痛めて治療に通われているそうですよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「腰が低い」是慣用句「謙虛、待人客氣」，稱讚身居高位卻不擺架子，回答「對誰都很客氣」是自然的附和。「背は高い」把慣用句誤解成身高；「腰を痛めて」按字面理解成腰部病痛，兩者都答非所問。',
    explanationEn:
      '「腰が低い」 is an idiom meaning humble and courteous. The speaker is praising the new branch manager for having no airs despite his rank, so agreeing that he treats everyone politely is the natural response. Talking about his height misreads the idiom as physical stature, and mentioning a bad back takes 「腰」 literally as a medical complaint — both replies miss the point.',
  },
  {
    id: 'n1-listening-sokuji-003',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'この企画書ね、悪くはないんだけど、もうひと工夫ほしいところだねえ。' },
    ],
    question: '',
    options: [
      '承知しました。構成を練り直して再提出いたします。',
      'お褒めいただき光栄です。では、このまま進めます。',
      'では、その工夫は別の者に頼んでみます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「悪くはないが、もうひと工夫ほしい」是日式婉曲批評，真意是「還不夠好，要再修改」，所以回答「重新修改後再提出」才正確。把它當成稱讚而「このまま進めます」完全誤讀弦外之音；「別の者に頼む」則答非所問，對方要的是提案者本人再下功夫。',
    explanationEn:
      '「悪くはないんだけど、もうひと工夫ほしい」 is classic indirect Japanese criticism: it really means the proposal is not good enough yet and needs revision, so promising to rework and resubmit is correct. Treating it as praise and proceeding as-is completely misses the implied message, and offering to hand the 「工夫」 to someone else misses the point — the boss wants the proposer personally to improve it.',
  },
  {
    id: 'n1-listening-sokuji-004',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'ずいぶんごゆっくりのお出ましですこと。会議はとっくに始まっていますよ。' },
    ],
    question: '',
    options: [
      '申し訳ありません。以後、時間には気をつけます。',
      'ありがとうございます。おかげさまでゆっくり休めました。',
      'それでは、私もごゆっくりどうぞ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「ごゆっくりのお出まし」表面是敬語，實為皮肉，諷刺對方遲到，正確反應是道歉「以後、時間には気をつけます」。把皮肉當成真的慰勞而道謝，完全聽錯言外之意；「ごゆっくりどうぞ」是招待客人時請對方慢慢來的用語，場合和方向都不對。',
    explanationEn:
      '「ごゆっくりのお出まし」 sounds like polite language but is sarcasm — a barbed way of saying you are late, since the meeting started long ago. The correct reaction is to apologize and promise to watch the time. Thanking the speaker for the rest takes the sarcasm at face value as genuine concern, and 「ごゆっくりどうぞ」 is a host\'s phrase inviting a guest to take their time — wrong in both situation and direction.',
  },
  {
    id: 'n1-listening-sokuji-005',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'つまらないものですが、ほんの気持ちですので、どうぞお納めください。' },
    ],
    question: '',
    options: [
      'そんな、ご丁寧に。ありがたく頂戴いたします。',
      'つまらないものでしたら、遠慮させていただきます。',
      'はい、では倉庫のほうに納めておきます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「つまらないものですが」是送禮時的謙遜套語，並非真的說東西無趣，收禮方應以「ご丁寧に、頂戴いたします」道謝收下。「つまらないなら遠慮する」把謙遜語按字面當真而拒收，嚴重失禮；「倉庫に納める」把慣用的「お納めください（請收下）」誤解成收納入庫。',
    explanationEn:
      '「つまらないものですが」 is a set humble phrase used when presenting a gift — it does not literally mean the gift is boring. The receiver should thank the giver and accept it graciously, as in 「ご丁寧に。ありがたく頂戴いたします」. Declining the gift because it is "boring" takes the humble formula at face value and is seriously rude, while putting it in the warehouse misreads the formulaic 「お納めください」 (please accept this) as stock storage.',
  },
  {
    id: 'n1-listening-sokuji-006',
    kind: 'listening',
    script: [
      { speaker: '女', text: '今回の異動の件だけど、あなたにとって決して悪い話ではないと思うのよ。' },
    ],
    question: '',
    options: [
      'そうですか。では、前向きに検討させていただきます。',
      'そんなに悪いお話でしたら、お断りするしかありませんね。',
      '承知しました。この話は誰にも漏らしません。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「悪い話ではない」是二重否定，實際是委婉的肯定「對你是好事」，因此回答「前向きに検討します」最貼切。「悪い話ならお断りする」把肯定聽成否定，正好把意思弄反；「誰にも漏らしません」則把「話」誤解成需要保密的消息，答非所問。',
    explanationEn:
      '「悪い話ではない」 is a double negative that works as an understated positive: the transfer is actually a good deal for you. Replying 「前向きに検討させていただきます」 (I\'ll consider it positively) fits best. Refusing because it is "such a bad offer" hears the affirmation as a negation and gets the meaning backwards, and promising not to leak it misreads 「話」 as confidential information — off the point entirely.',
  },
  {
    id: 'n1-listening-sokuji-007',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'うちの新人にはほとほと手を焼いていてね。何度注意しても同じミスばかりだよ。' },
    ],
    question: '',
    options: [
      'それはご苦労なさいますね。指導のやり方を変えてみては？',
      'えっ、やけどをされたんですか。お大事になさってください。',
      '同じミスを繰り返されるなんて、課長も困った方ですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「手を焼く」是慣用句「傷腦筋、難以應付」，抱怨新人難帶，回以慰勞並建議換個指導方式最自然。「やけど」把慣用句按字面理解成燙傷；第三個選項把犯錯的人搞錯成說話的課長本人，主客顛倒，等於指責對方，完全不成回應。',
    explanationEn:
      '「手を焼く」 is an idiom meaning to have trouble handling someone. The speaker is venting about a hard-to-train newcomer, so sympathizing and suggesting a different coaching approach is the natural reply. Asking about a burn (「やけど」) takes the idiom literally as a scald, and the third option mixes up who keeps making mistakes — blaming the section chief himself inverts speaker and subject and amounts to an accusation, not a response.',
  },
  {
    id: 'n1-listening-sokuji-008',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'この件はまだ内密にね。彼女なら口が堅いから、相談しても差し支えないわよ。' },
    ],
    question: '',
    options: [
      'そうですね。彼女になら安心して打ち明けられます。',
      'えっ、彼女、そんなにおしゃべりな方なんですか。',
      'では、彼女には絶対に知られないようにします。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「口が堅い」是慣用句「守得住祕密」，對方是說可以放心找她商量，所以「安心して打ち明けられます」才是正確回應。「おしゃべり」把意思聽成完全相反的「大嘴巴」；「彼女には知られないように」也把「可以商量」反轉成「要瞞著她」，肯否顛倒。',
    explanationEn:
      '「口が堅い」 is an idiom meaning able to keep a secret. The speaker says it is fine to consult her precisely because she is discreet, so answering that you can confide in her with peace of mind is correct. Calling her a chatterbox (「おしゃべり」) hears the exact opposite meaning, and vowing to keep it from her flips "you may consult her" into "hide it from her" — both invert the affirmation.',
  },
  {
    id: 'n1-listening-sokuji-009',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'この味付けは、個性的と言えば個性的だが、万人受けはしないかもしれないね。' },
    ],
    question: '',
    options: [
      'ご指摘ごもっともです。もう少し万人向けに調整してみます。',
      '個性的とは最高の褒め言葉ですね。この味でいきましょう。',
      'かしこまりました。では一万人分ご用意いたします。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「個性的と言えば個性的だが〜」是婉曲批評的定型句，真意是「太有個性、大眾難以接受，該調整」。因此接受指摘並修改才對。把「個性的」當成純粹稱讚而堅持原味，誤讀了轉折後的重點；「一万人分用意」把「万人受け（受大眾歡迎）」按字面理解成人數，牛頭不對馬嘴。',
    explanationEn:
      '「個性的と言えば個性的だが〜」 is a set pattern of softened criticism: the real message is that the flavor is too idiosyncratic to please the general public and should be adjusted, so accepting the comment and offering to tweak it is correct. Taking 「個性的」 as pure praise and keeping the flavor ignores the point after the pivot; preparing servings for ten thousand people reads 「万人受け」 (broad appeal) literally as a head count — completely beside the point.',
  },
  {
    id: 'n1-listening-sokuji-010',
    kind: 'listening',
    script: [
      { speaker: '女', text: '先日のご講演、大変勉強になりました。さすがのご見識でいらっしゃいますね。' },
    ],
    question: '',
    options: [
      'いえいえ、まだまだ勉強不足で、お恥ずかしい限りです。',
      'それはよかったですね。講演なさった先生にお伝えしておきます。',
      'こちらこそ、あなたのご講演で勉強させていただきました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方當面稱讚自己的演講，日語禮儀上應以謙遜回應，「まだまだ勉強不足で」正是標準的自謙答法。「講演した先生に伝えます」把演講者聽成別人，忘了對方就是在稱讚自己；第三個選項把授受方向顛倒，說成是對方演講、自己受教，跟事實相反。',
    explanationEn:
      'The speaker is complimenting the listener\'s own lecture to their face, and Japanese etiquette calls for a modest deflection — 「まだまだ勉強不足で、お恥ずかしい限りです」 is the standard humble reply. Offering to pass the message to "the professor who lectured" forgets that the compliment is aimed at oneself, and the third option reverses giver and receiver, claiming it was the other person\'s lecture — contrary to the facts.',
  },
  {
    id: 'n1-listening-sokuji-011',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'ご提案の件ですが、検討の余地がないわけではございませんので、少々お時間を。' },
    ],
    question: '',
    options: [
      '承知いたしました。よいお返事をお待ちしております。',
      'そうですか。余地がないのでしたら、今回は諦めます。',
      'では、お時間を差し上げますので、ご自由にお使いください。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「検討の余地がないわけではない」是二重否定的商務婉曲說法，意思是「還有考慮空間」，並請對方給點時間，所以回答「等候佳音」才對。「余地がないなら諦めます」只聽到前半就當成拒絕，把肯定聽反；「時間を差し上げます」把慣用的「お時間をください」誤當成授受物品，語意不通。',
    explanationEn:
      '「検討の余地がないわけではございません」 is business double-negative softening that means there is still room for consideration, and the speaker asks for a little time — so replying that you will await a favorable answer is correct. Giving up "since there is no room" catches only the first half and hears the affirmative as a refusal; 「お時間を差し上げます」 mistakes the set request 「少々お時間を（ください）」 for handing over an object, which makes no sense.',
  },
  {
    id: 'n1-listening-sokuji-012',
    kind: 'listening',
    script: [
      { speaker: '女', text: '新しい営業の彼、説明が立て板に水で、聞いているこちらが追いつかないくらいよ。' },
    ],
    question: '',
    options: [
      'へえ、そんなに話が流暢なんですか。一度聞いてみたいですね。',
      '板が濡れてしまったんですか。早く拭いたほうがいいですよ。',
      'そんなに水泳がお得意なら、大会に出られそうですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「立て板に水」是慣用句，形容說話流利滔滔不絕，正確回應是接「話が流暢」並表示想聽聽看。「板が濡れた」把慣用句拆成字面的木板和水，完全誤解；「水泳が得意」只抓到「水」字就聯想到游泳，與說話流利毫無關聯，兩者都是按字面理解慣用句的典型錯誤。',
    explanationEn:
      '「立て板に水」 is an idiom describing fluent, unstoppable speech — like water poured down a standing board. The right response picks up on the fluency and expresses interest in hearing him. Worrying about a wet board splits the idiom into a literal plank and water, and praising his swimming latches onto the word 「水」 alone — both are textbook cases of taking an idiom literally.',
  },
  {
    id: 'n1-listening-sokuji-013',
    kind: 'listening',
    script: [
      { speaker: '男', text: '今度入ったアルバイトの子、実によく気が利くね。頼む前にお茶まで出してくれたよ。' },
    ],
    question: '',
    options: [
      'ええ、言われる前に動けるなんて大したものですね。',
      'そうですか、気が短いのはちょっと困りますね。',
      '利き手が違うと、仕事もやりにくいでしょうね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「気が利く」是慣用句「機靈、體貼周到」，稱讚工讀生不用交代就主動奉茶，附和「言われる前に動ける」最自然。「気が短い」是完全不同的慣用句（性急），把稱讚聽成缺點；「利き手」只抓到「利く」的音，扯到慣用手，與機靈毫無關係。',
    explanationEn:
      '「気が利く」 is an idiom meaning attentive and quick to anticipate needs. The speaker is praising the part-timer for serving tea before even being asked, so agreeing that acting before being told is impressive is the natural echo. 「気が短い」 is a different idiom entirely (short-tempered), turning the compliment into a flaw; 「利き手」 grabs only the sound of 「利く」 and drifts to dominant hands, which has nothing to do with attentiveness.',
  },
  {
    id: 'n1-listening-sokuji-014',
    kind: 'listening',
    script: [
      { speaker: '女', text: '今度ペアを組む田中さんとはね、初対面のときから不思議と馬が合うのよ。' },
    ],
    question: '',
    options: [
      '気の合う相手と仕事ができるのは何よりですね。',
      'へえ、お二人とも乗馬がご趣味だったんですか。',
      'それでは、別のパートナーを探したほうがよさそうですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「馬が合う」是慣用句「合得來、投緣」，對方說和搭檔一拍即合，回以「気の合う相手と仕事ができるのは何より」是正確的附和。「乗馬が趣味」把「馬」按字面理解成騎馬；「別のパートナーを探す」把「合得來」聽成了相反的「處不來」，肯否顛倒。',
    explanationEn:
      '「馬が合う」 is an idiom meaning to hit it off, to get along naturally. The speaker says she clicked with her new partner from their first meeting, so replying that working with someone compatible is a wonderful thing is the right affirmation. Asking whether both enjoy horseback riding takes 「馬」 literally, and suggesting she find a different partner hears "we get along" as its opposite — the polarity is flipped.',
  },
  {
    id: 'n1-listening-sokuji-015',
    kind: 'listening',
    script: [
      { speaker: '男', text: '山本先輩には入社以来ずっと世話になりっぱなしでね、いまだに頭が上がらないんだ。' },
    ],
    question: '',
    options: [
      'それだけ恩を感じていらっしゃるんですね。',
      '首の調子が悪いなら、早めに病院で診てもらったほうがいいですよ。',
      'そんなに威張る先輩なら、一度注意したほうがいいですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「頭が上がらない」是慣用句，表示受恩深重而在對方面前抬不起頭、心存敬意，所以回答「恩を感じている」才切題。「首の調子が悪い」把慣用句按字面理解成脖子的毛病；「威張る先輩」把說話者自發的感恩誤解成前輩仗勢欺人，方向完全弄錯。',
    explanationEn:
      '「頭が上がらない」 is an idiom expressing deep indebtedness — one cannot hold one\'s head up before a benefactor out of respect, so replying that he must feel truly grateful hits the mark. Recommending a hospital for neck trouble takes the idiom literally as a physical ailment, and calling the senior an overbearing bully misreads the speaker\'s voluntary gratitude as intimidation — the direction is completely wrong.',
  },
  {
    id: 'n1-listening-sokuji-016',
    kind: 'listening',
    script: [
      { speaker: '女', text: '移転先の新しいオフィスはね、駅から目と鼻の先だから、通勤がずいぶん楽になったわ。' },
    ],
    question: '',
    options: [
      'それは便利ですね。雨の日も傘がいらないくらいでしょう。',
      '目と鼻の具合が悪いんですか。花粉症かもしれませんよ。',
      'そんなに遠くなったんですか。引っ越しをお考えになったら？',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「目と鼻の先」是慣用句「近在咫尺」，對方說新辦公室離車站極近、通勤變輕鬆，回答「それは便利ですね」是自然的附和。「目と鼻の具合」把慣用句按字面理解成眼睛鼻子不舒服；「そんなに遠く」把「極近」聽成了相反的「很遠」，語意完全顛倒。',
    explanationEn:
      '「目と鼻の先」 is an idiom meaning extremely close, a stone\'s throw away. The speaker says the new office is right by the station and the commute has become much easier, so 「それは便利ですね」 is the natural agreement. Asking about eye and nose trouble takes the idiom literally as symptoms, and lamenting that the office is now "so far away" hears "very close" as its exact opposite — the meaning is completely inverted.',
  },
  {
    id: 'n1-listening-sokuji-017',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'せっかく皆が盛り上がっているところに水を差すようで悪いんだが、予算の件は確認済みかな。' },
    ],
    question: '',
    options: [
      'いえ、大事なご指摘です。先に確認いたします。',
      'かしこまりました。ただいまお水をお持ちします。',
      'ええ、盛り上がっていますね。では乾杯の続きをしましょう。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「水を差す」是慣用句「潑冷水、掃興」，說話者先致歉再提出預算疑慮，正確回應是接受指摘並先去確認。「お水をお持ちします」把慣用句按字面理解成端水；「乾杯の続き」無視對方鄭重提出的疑慮，只顧著繼續起鬨，完全沒聽懂發話的重點。',
    explanationEn:
      '「水を差す」 is an idiom meaning to dampen the mood, to throw cold water on things. The speaker apologizes in advance for spoiling the fun and then raises a serious question about the budget, so the right response is to accept the point and go check first. Offering to bring a glass of water takes the idiom literally, and continuing the toast ignores the concern he took pains to raise — both miss the point of the utterance.',
  },
  {
    id: 'n1-listening-sokuji-018',
    kind: 'listening',
    script: [
      { speaker: '女', text: '彼ね、担当していたプロジェクトが中止になってから、すっかり腑抜けのようになってしまって。' },
    ],
    question: '',
    options: [
      'よほどショックだったんでしょうね。今度声をかけてみます。',
      'お腹の具合が悪いなら、消化のいいものを勧めてあげてください。',
      'そんなに張り切っているなら、次の案件も任せられますね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「腑抜け」是慣用語，形容人失魂落魄、提不起勁，對方擔心同事因企畫中止而一蹶不振，回以體諒並表示會去關心最恰當。「お腹の具合」把「腑（內臟）」按字面理解成腸胃毛病；「張り切っている」把委靡不振聽成幹勁十足，意思正好相反。',
    explanationEn:
      '「腑抜け」 is an expression describing someone listless and drained of spirit. The speaker is worried a colleague has been crushed since his project was canceled, so responding with sympathy and offering to reach out is most appropriate. Recommending easily digestible food takes 「腑」 (innards) literally as a stomach problem, and saying he is "so fired up" hears dejection as enthusiasm — the exact opposite meaning.',
  },
  {
    id: 'n1-listening-sokuji-019',
    kind: 'listening',
    script: [
      { speaker: '男', text: '決算の直前だからね、今はもう猫の手も借りたいほどの忙しさなんだよ。' },
    ],
    question: '',
    options: [
      '大変ですね。私にお手伝いできることがあれば言ってください。',
      'それでしたら、うちの猫を連れてまいりましょうか。',
      'そんなにお暇なら、ゆっくり休暇が取れていいですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「猫の手も借りたい」是慣用句，形容忙到人手極度不足，聽到對方訴苦，主動表示「有需要幫忙就說」最得體。「猫を連れてくる」把慣用句按字面理解成真的要借貓；「お暇なら」把忙翻天聽成很閒，意思完全相反，兩者都答非所問。',
    explanationEn:
      '「猫の手も借りたい」 is an idiom for being so busy you would take help from anyone — even a cat. Hearing the complaint, offering your own help (「お手伝いできることがあれば」) is the considerate reply. Proposing to bring your cat over takes the idiom literally as actually borrowing a cat, and remarking on all his free time hears frantic busyness as leisure — the exact opposite; both responses miss the mark.',
  },
  {
    id: 'n1-listening-sokuji-020',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'あの人ったら、お使いに出たきり戻らないと思ったら、どこかで油を売っていたらしいのよ。' },
    ],
    question: '',
    options: [
      'また道草ですか。困った人ですねえ。',
      'へえ、いつの間に副業を始められたんですか。',
      'それは働き者ですね。皆も見習わないと。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「油を売る」是慣用句「摸魚、閒晃偷懶」，對方在抱怨那人跑腿途中四處閒逛，附和「また道草ですか」才是正確回應。「副業を始めた」把慣用句按字面理解成真的在賣油；「働き者」把偷懶聽成勤快，還說要大家看齊，意思完全顛倒。',
    explanationEn:
      '「油を売る」 is an idiom meaning to loaf around, to dawdle instead of working. The speaker is complaining that the person wandered off during an errand, so chiming in with 「また道草ですか」 (dawdling again?) is the correct response. Asking about a new side business takes the idiom literally as actually selling oil, and calling him a hard worker everyone should emulate hears slacking as diligence — the meaning is completely reversed.',
  },
  {
    id: 'n1-listening-sokuji-021',
    kind: 'listening',
    script: [
      { speaker: '男', text: '彼とは学生時代からの付き合いでね、気の置けない仲だから何でも話せるんだ。' },
    ],
    question: '',
    options: [
      'そういうご友人がいらっしゃるのは、うらやましい限りです。',
      'そうですか、油断できない方なんですね。私も気をつけます。',
      'では、大事な荷物は別の場所に置いたほうがいいですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「気の置けない」是慣用句「不用拘束客套、可以交心」，是正面的意思，回答「うらやましい」是自然的附和。「油断できない」是最典型的誤解，把它當成「不能大意的危險人物」，語意正好相反；「荷物を別の場所に置く」只抓到「置く」的字面，與交情毫無關係。',
    explanationEn:
      '「気の置けない」 is an idiom meaning a relationship needing no reserve or formality — a friend you can be completely open with, a positive expression. Replying that such a friendship is enviable is the natural agreement. Hearing it as 「油断できない」 (someone you can\'t let your guard down around) is the classic misinterpretation, giving the exact opposite meaning; moving your valuables elsewhere merely latches onto the literal 「置く」 and has nothing to do with friendship.',
  },
  {
    id: 'n1-listening-sokuji-022',
    kind: 'listening',
    script: [
      { speaker: '女', text: '例の新しいシステムねえ、値段が値段だけに、導入には正直二の足を踏んでいるのよ。' },
    ],
    question: '',
    options: [
      '迷いますよね。急がず、じっくり検討なさってはいかがですか。',
      'ダンスのステップでしたら、いい教室をご紹介しますよ。',
      'もう導入を決められたんですね。おめでとうございます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「二の足を踏む」是慣用句「猶豫不決、裹足不前」，對方因價格高而遲遲不敢導入，建議「不用急、仔細評估」最貼切。「ダンスのステップ」把「踏む」按字面聯想到跳舞踩步；「もう決められた」把還在猶豫聽成已經拍板，與發話內容相反。',
    explanationEn:
      '「二の足を踏む」 is an idiom meaning to hesitate, to balk at taking the plunge. The speaker is holding back on adopting the system because of the steep price, so advising her not to rush and to weigh it carefully fits best. Offering a dance class takes 「踏む」 literally as dance steps, and congratulating her on the decision hears ongoing hesitation as a done deal — contrary to what she said.',
  },
  {
    id: 'n1-listening-sokuji-023',
    kind: 'listening',
    script: [
      { speaker: '男', text: '通訳なら鈴木さんに頼むといい。彼の語学力は折り紙付きだと、部長も太鼓判を押していたよ。' },
    ],
    question: '',
    options: [
      'それは心強いですね。ぜひお願いしてみます。',
      'へえ、鈴木さんは折り紙もお上手なんですね。',
      'そうですか。では通訳は別の方を手配しないといけませんね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「折り紙付き」是慣用語「有可靠保證、公認一流」，對方推薦鈴木的語言能力掛保證，回答「心強いですね、お願いします」最切題。「折り紙も上手」把慣用語按字面理解成擅長摺紙；「別の方を手配」明明對方在推薦鈴木，卻要另找他人，等於完全沒聽懂推薦之意。',
    explanationEn:
      '「折り紙付き」 is an idiom meaning certified, guaranteed first-rate (and 「太鼓判を押す」 likewise means to vouch for). Suzuki\'s language skills come endorsed by the department head, so replying that this is reassuring and you will ask him is on target. Complimenting Suzuki\'s origami takes the idiom literally as paper folding, and arranging a different interpreter defies the whole recommendation — as if the endorsement was never understood.',
  },
  {
    id: 'n1-listening-sokuji-024',
    kind: 'listening',
    script: [
      { speaker: '女', text: '昨日はね、二十年ぶりに学生時代の友人と会って、夜遅くまで話に花が咲いたのよ。' },
    ],
    question: '',
    options: [
      'それは楽しいひとときを過ごされたんですね。',
      'へえ、どんなお花を育てていらっしゃるんですか。',
      '話が全然弾まなかったんですか。それは残念でしたね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「話に花が咲く」是慣用句，形容聊得起勁、話題一個接一個停不下來，回答「楽しいひとときを過ごされた」是正確的附和。「お花を育てる」把慣用句按字面理解成種花；「話が弾まなかった」把聊得盡興聽成了相反的冷場，肯否顛倒，兩者都沒聽懂慣用句。',
    explanationEn:
      '「話に花が咲く」 is an idiom describing conversation that blossoms — one topic leading happily to the next for hours. The speaker reunited with an old friend and talked late into the night, so replying that she must have had a delightful time is the correct affirmation. Asking what flowers she grows takes the idiom literally as gardening, and concluding the conversation fell flat hears a lively evening as an awkward one — the polarity is reversed; both miss the idiom.',
  },
  {
    id: 'n1-listening-sokuji-025',
    kind: 'listening',
    script: [
      { speaker: '男', text: '明日の役員会でうちの案が通るかどうかはもう運次第だ。こうなったら腹をくくって結果を待つしかないな。' },
    ],
    question: '',
    options: [
      'そうですね、ここまで来たら覚悟を決めて待ちましょう。',
      'お腹をひもでくくったりしたら、苦しくて動けませんよ。',
      'では、腹ごしらえに何か食べに行きましょうか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「腹をくくる」是慣用句「下定決心、做好心理準備接受結果」。對方說事已至此只能沉住氣等結果，附和「覚悟を決めて待ちましょう」最貼切。「ひもでくくる」把慣用句按字面理解成用繩子綁肚子；「腹ごしらえ」只抓到「腹」字就扯到先吃飽再說，兩者都答非所問。',
    explanationEn:
      '「腹をくくる」 is an idiom meaning to brace oneself and resolve to accept whatever comes. The speaker says the outcome is now up to fate and all they can do is steel themselves and wait, so agreeing to make up their minds and wait is the fitting reply. Tying one\'s belly with a cord takes 「くくる」 literally as binding, and suggesting a meal (「腹ごしらえ」) merely latches onto the word 「腹」 — both miss the point.',
  },
  {
    id: 'n1-listening-sokuji-026',
    kind: 'listening',
    script: [
      { speaker: '女', text: '来月から予算が三割も削られるそうでね、部長もすっかり頭を抱えていらっしゃるのよ。' },
    ],
    question: '',
    options: [
      'それは深刻ですね。皆で何か打開策を考えませんと。',
      '頭が痛いんでしたら、お薬を差し上げましょうか。',
      'お荷物を抱えていらっしゃるなら、私がお持ちします。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「頭を抱える」是慣用句「一籌莫展、傷透腦筋」。部長為預算被砍三成而發愁，回以「深刻ですね、打開策を考えませんと」表示一起想辦法最切題。「薬を差し上げる」把慣用句按字面理解成真的頭痛；「荷物を抱える」按字面理解成抱著行李，跟煩惱毫無關係。',
    explanationEn:
      '「頭を抱える」 is an idiom meaning to be at one\'s wits\' end over a problem. The department head is agonizing over a thirty-percent budget cut, so calling it serious and proposing to think of countermeasures together is the right response. Offering medicine reads the idiom literally as a headache, and offering to carry the luggage takes 「抱える」 literally as holding baggage — neither relates to the worry.',
  },
  {
    id: 'n1-listening-sokuji-027',
    kind: 'listening',
    script: [
      { speaker: '男', text: '先方とどうしても条件が折り合わなくてね、今回の提携の話は一旦白紙に戻すことになったよ。' },
    ],
    question: '',
    options: [
      'そうですか。残念ですが、また一からやり直しですね。',
      'その白い紙でしたら、元の棚に戻しておきますよ。',
      '契約がまとまったんですね。おめでとうございます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「白紙に戻す」是慣用句「讓事情回到原點、當作沒談過重新來過」。合作案因條件談不攏而歸零，回答「残念ですが、一からやり直し」才聽懂了發話。「白い紙を棚に戻す」把慣用句按字面理解成歸還紙張；「契約がまとまった」把破局聽成談成，意思正好相反。',
    explanationEn:
      '「白紙に戻す」 is an idiom meaning to take things back to a blank slate, as if the talks never happened. The partnership deal fell through over terms, so lamenting it and noting they must start over from scratch shows correct understanding. Offering to put the white paper back on the shelf takes the idiom literally as returning stationery, and congratulating them on closing the contract hears a collapse as a success — the exact opposite.',
  },
  {
    id: 'n1-listening-sokuji-028',
    kind: 'listening',
    script: [
      { speaker: '女', text: '彼ったら、自分の遅刻は棚に上げて、人の時間の使い方にばかり文句を言うのよ。' },
    ],
    question: '',
    options: [
      '本当に、まずご自分の行いを反省してほしいものですね。',
      '棚の上のお荷物でしたら、脚立を使って下ろしましょうか。',
      'それほど時間に厳しい方なら、皆も見習うべきですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「棚に上げる」是慣用句「把自己的過錯擱著不提、只顧指責別人」。對方抱怨他自己遲到卻愛挑剔別人，附和「先反省自己的行為吧」才是聽懂抱怨的回應。「棚の上の荷物」把慣用句按字面理解成置物架上的東西；「見習うべき」把批評聽成稱讚他守時，完全沒聽出言外的不滿。',
    explanationEn:
      '「棚に上げる」 is an idiom meaning to shelve one\'s own faults while criticizing others. The speaker complains that he ignores his own tardiness yet nitpicks everyone\'s time management, so agreeing that he should reflect on his own conduct first is the right response. Offering to fetch luggage off the shelf with a stepladder takes the idiom literally, and praising him as strict about time to be emulated turns the complaint into a compliment — the implied criticism is completely missed.',
  },
  {
    id: 'n1-listening-sokuji-029',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'この件は場数を踏んできた私に任せて、大船に乗ったつもりでいてくれていいよ。' },
    ],
    question: '',
    options: [
      '心強い限りです。では、安心してお任せいたします。',
      '船に乗るなら、酔い止めを用意したほうがいいですよ。',
      'そんなに頼りないのでしたら、別の方にお願いしますね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「大船に乗ったつもりで」是慣用句「像搭上大船一樣儘管放心」，對方拍胸脯保證交給他就好，回答「心強い限りです、安心してお任せします」最貼切。「酔い止め」把慣用句按字面理解成真的要搭船；「頼りない」把要人放心的保證聽成靠不住，肯否正好顛倒。',
    explanationEn:
      '「大船に乗ったつもりで」 is an idiom meaning "rest easy, as if aboard a great ship" — the seasoned speaker is vouching that everything can be left to him. Replying that this is reassuring and entrusting it to him with peace of mind fits perfectly. Recommending seasickness medicine takes the idiom literally as an actual voyage, and calling him unreliable and asking someone else flips the reassurance into distrust — the polarity is reversed.',
  },
  {
    id: 'n1-listening-sokuji-030',
    kind: 'listening',
    script: [
      { speaker: '女', text: '息子が初めて一人で海外に行っているんだけどね、もう三日も連絡がないから気が気でないのよ。' },
    ],
    question: '',
    options: [
      'それはご心配ですね。無事だといいのですが。',
      'そんなに平気でいられるなんて、肝が据わっていらっしゃいますね。',
      '気の合うお友達とご一緒なら、心配いりませんね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「気が気でない」是慣用句「坐立難安、擔心得不得了」。兒子隻身出國三天沒消息令她焦慮，回以「ご心配ですね、無事だといいのですが」的體諒最恰當。「平気でいられる」把焦慮聽成處變不驚，意思正好相反；「気の合う友達」只抓到「気」字扯到朋友投緣，答非所問。',
    explanationEn:
      '「気が気でない」 is an idiom meaning to be so anxious one cannot settle down. Her son is abroad alone for the first time and has not been in touch for three days, so sympathizing with her worry and hoping he is safe is the appropriate reply. Admiring how calm and steel-nerved she is hears her anxiety as composure — the exact opposite — and mentioning congenial friends (「気の合う」) merely latches onto the word 「気」 and misses the point.',
  },
  {
    id: 'n1-listening-sokuji-031',
    kind: 'listening',
    script: [
      { speaker: '男', text: '今夜は結婚記念日だからね、腕によりをかけて妻の好物をこしらえるつもりなんだ。' },
    ],
    question: '',
    options: [
      'それは奥様もお喜びになるでしょうね。',
      '腕を痛めていらっしゃるなら、お料理は無理なさらないほうがいいですよ。',
      'よりを戻されたんですか。それはおめでとうございます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「腕によりをかける」是慣用句「拿出全副本領、大顯身手」，常用於做菜。他要為結婚紀念日親手做妻子愛吃的菜，回答「奥様も喜ぶでしょう」是自然的附和。「腕を痛めている」把慣用句按字面理解成手臂受傷；「よりを戻す」是「重修舊好」的另一個慣用句，只抓到「より」的字面就扯到復合，牛頭不對馬嘴。',
    explanationEn:
      '「腕によりをかける」 is an idiom meaning to put all one\'s skill into something, often cooking. He plans to cook his wife\'s favorite dishes for their anniversary, so replying that she will surely be delighted is the natural response. Warning him not to cook with an injured arm takes 「腕」 literally as a physical injury, and congratulating him on getting back together mistakes it for the separate idiom 「よりを戻す」 (to reconcile) — grabbing the word 「より」 and missing entirely.',
  },
  {
    id: 'n1-listening-sokuji-032',
    kind: 'listening',
    script: [
      { speaker: '女', text: '引っ越しの手伝いを探していたところにあなたが来てくれるなんて、まさに渡りに船だわ。' },
    ],
    question: '',
    options: [
      'お役に立てそうで何よりです。何でもお申し付けください。',
      '船で川を渡るんですか。車のほうが早いと思いますよ。',
      'お邪魔なようでしたら、日を改めて伺いますね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「渡りに船」是慣用句「正愁沒辦法時，及時出現的好機會」。她正在找人幫忙搬家時對方剛好來訪，等於雪中送炭，回答「お役に立てそうで何より」順勢答應幫忙最正確。「船で川を渡る」把慣用句按字面理解成真的要坐船渡河；「お邪魔でしたら」把對方的歡迎聽成嫌棄，方向完全相反。',
    explanationEn:
      '「渡りに船」 is an idiom for a godsend — just the right help arriving exactly when needed, like a boat appearing at a river crossing. She was looking for moving help when you showed up, so saying you are glad to be of use and inviting her to ask anything is correct. Discussing an actual boat trip across the river takes the idiom literally, and offering to come back another day hears her welcome as annoyance — the direction is completely reversed.',
  },
  {
    id: 'n1-listening-sokuji-033',
    kind: 'listening',
    script: [
      { speaker: '男', text: '会議で一時間も揉めていたのにね、社長の鶴の一声であっさり方針が決まったよ。' },
    ],
    question: '',
    options: [
      'やはりトップの一言は重みが違いますね。',
      'へえ、社長は鶴を飼っていらっしゃるんですか。',
      'それで、結論はまた持ち越しになったんですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「鶴の一声」是慣用句「有權威者一句話讓眾人的爭論瞬間定案」。吵了一小時後社長一句話拍板，回答「トップの一言は重みが違う」是聽懂後的自然感想。「鶴を飼っている」把慣用句按字面理解成真的養鶴；「持ち越し」把已經定案聽成懸而未決，與發話內容相反。',
    explanationEn:
      '「鶴の一声」 is an idiom for the single authoritative word that instantly settles a long dispute — "the voice of the crane". After an hour of wrangling, one word from the president decided the policy, so remarking that a word from the top carries different weight is the natural reaction. Asking whether the president keeps cranes takes the idiom literally as pet birds, and concluding the decision was postponed again hears a settled matter as unresolved — contrary to what was said.',
  },
  {
    id: 'n1-listening-sokuji-034',
    kind: 'listening',
    script: [
      { speaker: '女', text: '来週はね、子どもたちを実家に預けて、久しぶりに温泉で羽を伸ばしてくるつもりなの。' },
    ],
    question: '',
    options: [
      'いいですね。たまには思い切り息抜きなさってください。',
      'お布団から羽が出ているなら、縫っておきましょうか。',
      'ご実家のお手伝いだなんて、休む暇もありませんね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「羽を伸ばす」是慣用句「擺脫平日的拘束、盡情放鬆」。她要把孩子託給娘家、久違地去溫泉透透氣，回答「思い切り息抜きなさってください」是自然的祝福。「布団の羽」把慣用句按字面理解成棉被跑出羽毛；「実家の手伝い」把去放鬆聽成回娘家幹活，完全弄反了發話的重點。',
    explanationEn:
      '「羽を伸ばす」 is an idiom meaning to spread one\'s wings — to relax freely, released from daily constraints. She is leaving the kids with her parents and heading to a hot spring for a long-awaited break, so encouraging her to unwind to her heart\'s content is the natural reply. Offering to sew up feathers poking out of the futon takes 「羽」 literally as bedding stuffing, and pitying her for "helping out at her parents\' home" mistakes her getaway for chores — the point of the utterance is inverted.',
  },
  {
    id: 'n1-listening-sokuji-035',
    kind: 'listening',
    script: [
      { speaker: '男', text: '例の統合の件を部長に尋ねてみたんだがね、はっきり答えずにお茶を濁されてしまったよ。' },
    ],
    question: '',
    options: [
      'まだ公にできない事情でもあるんでしょうかね。',
      '濁ったお茶なんて、淹れ直してもらえばよかったのに。',
      'そこまで詳しく説明していただけたなら、安心ですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「お茶を濁す」是慣用句「含糊其辭、敷衍搪塞」。部長對整併一事避而不答，推測「大概還有不能公開的隱情吧」才是聽懂後的自然回應。「淹れ直してもらえば」把慣用句按字面理解成茶真的混濁了；「詳しく説明していただけた」把敷衍搪塞聽成詳盡說明，意思正好相反。',
    explanationEn:
      '「お茶を濁す」 is an idiom meaning to give an evasive, noncommittal answer — to muddy the waters. The department head dodged the question about the merger, so speculating that there must be circumstances not yet public shows correct understanding. Suggesting he should have had the cloudy tea rebrewed takes the idiom literally as bad tea, and feeling reassured by such a "thorough explanation" hears evasion as full disclosure — the exact opposite.',
  },
  {
    id: 'n1-listening-sokuji-036',
    kind: 'listening',
    script: [
      { speaker: '女', text: '現場は納期を延ばせと言うし、お客様は早くしろとおっしゃるし、私はすっかり板挟みなのよ。' },
    ],
    question: '',
    options: [
      'どちらの言い分も分かるだけに、おつらいお立場ですね。',
      '板に挟まれたんですか。おけがはありませんでしたか。',
      'どちらからも頼りにされて、うらやましい限りですわ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「板挟み」是慣用語「夾在對立的兩方之間左右為難」。她被現場和客戶兩頭夾攻、進退不得，回以「おつらいお立場ですね」的體諒最正確。「おけがはありませんでしたか」把慣用語按字面理解成被木板夾傷；「うらやましい」把左右為難聽成兩邊都器重的好事，完全沒聽懂她的苦處。',
    explanationEn:
      '「板挟み」 is an expression for being caught between two opposing sides — squeezed like something wedged between boards. The site crew demands a deadline extension while the client demands speed, so sympathizing that hers is a painful position, precisely because both sides have a point, is the right reply. Asking whether she was injured takes the idiom literally as being pinched by actual boards, and envying her for being relied on by both sides mistakes her predicament for popularity — her distress goes unheard.',
  },
]

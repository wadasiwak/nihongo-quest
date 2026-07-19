import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n4-listening-hatsuwa-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '先週、友だちにまんがを借りました。まだ全部読んでいません。' },
      { speaker: '旁白', text: '友だちに何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'このまんが、もう少し借りてもいいですか。',
      'このまんが、もう少し貸してもいいですか。',
      'このまんが、もう少し借りてあげましょうか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '想把借來的東西再多借一陣子，要徵求對方許可，用「借りてもいいですか」（我可以再借一下嗎）。「貸してもいいですか」授受方向相反，變成在問「我可以把它借給別人嗎」，說話立場錯了；「借りてあげましょうか」把借東西說成是幫對方的忙，授受關係完全顛倒，語意不通。',
    explanationEn:
      'To keep a borrowed item a little longer, you ask the owner\'s permission with 「借りてもいいですか」— "may I borrow it a bit longer?" 「貸してもいいですか」 flips the direction of lending: it asks "may I lend it (to someone)?", which is the wrong standpoint here; 「借りてあげましょうか」 frames borrowing as a favor you do for the other person, completely reversing the giver-receiver relationship, so it makes no sense.',
  },
  {
    id: 'n4-listening-hatsuwa-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '授業で、先生の説明が速くて、よく聞き取れませんでした。' },
      { speaker: '旁白', text: '先生に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、もう一度言っていただけませんか。',
      'すみません、もう一度言ってあげましょうか。',
      'すみません、もう一度言ってもいいですか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '請老師再說一次，對上位者要用謙讓的授受表現「〜ていただけませんか」（能否請您〜）。「言ってあげましょうか」是「我來為您說一次吧」，授受方向相反，對老師說更是失禮；「言ってもいいですか」是徵求「自己說」的許可，要重說的人變成了自己，對象方向錯誤。',
    explanationEn:
      'When asking a teacher to repeat something, use the humble request form 「〜ていただけませんか」— "could you possibly say it again?" — appropriate toward a superior. 「言ってあげましょうか」 means "shall I say it for you?", reversing the direction of the favor and sounding rude to a teacher; 「言ってもいいですか」 asks permission for you yourself to speak, so the person doing the repeating is wrong.',
  },
  {
    id: 'n4-listening-hatsuwa-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '友だちが入院したので、お見舞いに来ました。' },
      { speaker: '旁白', text: '帰るとき、友だちに何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'どうぞ、お大事にしてください。',
      'どうぞ、お大事にしました。',
      'どうぞ、お大事にしてあげます。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '探病離開時對病人說「お大事にしてください」（請保重身體），是慰問的固定說法。「お大事にしました」是過去式，變成陳述「我保重過了」，時態和主語都不對；「お大事にしてあげます」用了「〜てあげる」，變成「我來替你保重」，保重的人應該是病人自己，授受方向錯誤。',
    explanationEn:
      'When leaving after a hospital visit, you say 「お大事にしてください」— "please take care of yourself" — the set expression of sympathy for a sick person. 「お大事にしました」 is past tense, turning it into a statement like "I took care of myself," wrong in both tense and subject; 「お大事にしてあげます」 uses 〜てあげる, meaning "I will take care for you," but the one who should take care is the patient, so the benefactive direction is wrong.',
  },
  {
    id: 'n4-listening-hatsuwa-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'アルバイトに行くとちゅうで、電車が止まってしまいました。店長に電話します。' },
      { speaker: '旁白', text: '何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、電車が止まって、少し遅れそうです。',
      'すみません、電車が止まって、少し遅れたそうです。',
      'すみません、電車が止まって、少し遅れてください。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '事先打電話報告「可能會遲到」，用樣態的「〜そうです」（看樣子會遲到）最合適。「遅れたそうです」是傳聞用法（聽說遲到了），像在轉述別人的事，還用了過去式，自己報告遲到不會這樣說；「遅れてください」是請店長遲到，變成命令對方，語意完全不通。',
    explanationEn:
      'When calling ahead to warn that you may be late, the conjectural 「〜そうです」 attached to the verb stem — 「遅れそうです」, "it looks like I\'ll be late" — is the right choice. 「遅れたそうです」 is the hearsay usage ("I hear someone was late"), reporting another person\'s situation in the past tense, which no one would use about their own lateness; 「遅れてください」 literally asks the manager to be late — a nonsensical command.',
  },
  {
    id: 'n4-listening-hatsuwa-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '今度の土曜日、川でバーベキューをします。クラスの友だちもさそいたいです。' },
      { speaker: '旁白', text: '友だちに何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      '土曜日にバーベキューをするんですが、よかったら来ませんか。',
      '土曜日にバーベキューをするんですが、よかったら来てあげませんか。',
      '土曜日にバーベキューをするんですが、よかったら来ましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '邀約用「〜んですが、よかったら来ませんか」（要不要來），先說明情況再邀請，是最自然的說法。「来てあげませんか」加上「〜てあげる」，變成要求對方施恩「來給我看」，邀朋友這樣說很失禮，授受用法錯誤；「来ましたか」是過去式，在問「你那時來了嗎」，活動還沒發生，時態不對。',
    explanationEn:
      'The natural invitation pattern is 「〜んですが、よかったら来ませんか」— first explain the situation, then invite with the negative question "won\'t you come, if you like?" 「来てあげませんか」 adds 〜てあげる, which frames the friend\'s coming as a favor they would graciously grant you — a misuse of the benefactive that sounds presumptuous; 「来ましたか」 is past tense, asking "did you come?", but the barbecue has not happened yet, so the tense is wrong.',
  },
  {
    id: 'n4-listening-hatsuwa-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '電車の中で、おなかの大きい女の人が立っています。席をゆずりたいです。' },
      { speaker: '旁白', text: '何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'どうぞ、ここに座ってください。',
      'すみません、ここに座らせてください。',
      'すみません、ここに座ってもいいですか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '讓座時請對方坐下，用「どうぞ、座ってください」（請坐）。「座らせてください」是使役形，意思是「請讓我坐」，變成自己要坐那個位子，方向完全相反；「座ってもいいですか」是在徵求「自己可以坐嗎」的許可，同樣是自己要坐，都和讓座給對方的情境相反。',
    explanationEn:
      'When giving up your seat, you invite the other person to sit with 「どうぞ、ここに座ってください」— "please, sit here." 「座らせてください」 is the causative, meaning "please let me sit," which claims the seat for yourself — the exact opposite direction; 「座ってもいいですか」 asks permission for you yourself to sit, so both wrong options have the speaker taking the seat instead of offering it.',
  },
  {
    id: 'n4-listening-hatsuwa-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '旅行に来ています。家族みんなで写真を撮りたいです。近くの人にたのみます。' },
      { speaker: '旁白', text: '何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、写真を撮っていただけませんか。',
      'すみません、写真を撮ってあげましょうか。',
      'すみません、写真を撮られませんか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '請陌生人幫忙拍照，用客氣的「撮っていただけませんか」（能否請您幫我們拍）。「撮ってあげましょうか」是「我幫你拍好嗎」，授受方向相反，變成主動要幫對方拍照；「撮られませんか」用了被動形，像在問對方「要不要被拍」，既不是請託也不合語境，語意不通。',
    explanationEn:
      'To ask a stranger to take your photo, use the polite request 「撮っていただけませんか」— "could you possibly take a picture for us?" 「撮ってあげましょうか」 means "shall I take one for you?", reversing the favor into an offer to photograph the other person; 「撮られませんか」 uses the passive, sounding like "won\'t you be photographed?", which is neither a request nor appropriate to the situation.',
  },
  {
    id: 'n4-listening-hatsuwa-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '駅で、前を歩いている人のポケットからハンカチが落ちました。' },
      { speaker: '旁白', text: 'その人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'あのう、ハンカチが落ちましたよ。',
      'あのう、ハンカチを落としましょうか。',
      'あのう、ハンカチを落としてもいいですか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '提醒別人東西掉了，用自動詞「落ちる」的過去式加終助詞「よ」：「落ちましたよ」（掉了喔）。「落としましょうか」是意向形「我來幫你弄掉好嗎」，把提醒說成要幫忙丟東西，語意不通；「落としてもいいですか」是徵求「我可以弄掉它嗎」的許可，和提醒撿東西的情境完全無關。',
    explanationEn:
      'To alert someone that they dropped something, use the intransitive verb 「落ちる」 in the past tense with the final particle よ: 「ハンカチが落ちましたよ」— "your handkerchief fell!" 「落としましょうか」 is a volitional offer, "shall I drop it for you?", which turns the warning into a nonsensical offer; 「落としてもいいですか」 asks permission — "may I drop it?" — completely unrelated to pointing out a dropped item.',
  },
  {
    id: 'n4-listening-hatsuwa-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '服の店で、いいシャツを見つけました。買う前に着てみたいです。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'このシャツ、着てみてもいいですか。',
      'このシャツ、着てみてください。',
      'このシャツ、着てみましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '想試穿要向店員徵求許可，用「〜てみてもいいですか」（我可以試穿看看嗎），是「〜てみる」加「〜てもいい」的組合。「着てみてください」是請店員穿穿看，要穿的對象弄錯了；「着てみましたか」是過去式，在問店員「你穿過了嗎」，既問錯對象時態也不對。',
    explanationEn:
      'To try on clothes, you ask the shop staff for permission with 「着てみてもいいですか」— "may I try this on?" — combining 〜てみる (try doing) with 〜てもいい (permission). 「着てみてください」 asks the clerk to try the shirt on, so the wrong person would be wearing it; 「着てみましたか」 is past tense, asking the clerk "have you tried it on?", wrong in both addressee and tense.',
  },
  {
    id: 'n4-listening-hatsuwa-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '近所のおばあさんが、重そうな荷物を持って歩いています。手伝いたいです。' },
      { speaker: '旁白', text: '何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      '重そうですね。持ちましょうか。',
      '重そうですね。持ってくれませんか。',
      '重そうですね。持ってあげましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '主動提議幫忙，用意向形「持ちましょうか」（我來幫您拿好嗎）最自然。「持ってくれませんか」是「能不能幫我拿」，授受方向相反，變成請老奶奶幫自己拿行李；「持ってあげましたか」是過去式，在問對方「你幫別人拿過了嗎」，既不是提議、時態也不對。',
    explanationEn:
      'To volunteer help, the volitional 「持ちましょうか」— "shall I carry that for you?" — is the natural offer. 「持ってくれませんか」 means "could you carry this for me?", reversing the favor so that you are asking the elderly woman to carry your luggage; 「持ってあげましたか」 is past tense, asking "did you carry it for someone?", which is neither an offer nor in the right tense.',
  },
  {
    id: 'n4-listening-hatsuwa-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '図書館で借りた本を、コーヒーで汚してしまいました。本を返しに行きます。' },
      { speaker: '旁白', text: '図書館の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、借りた本を汚してしまいました。',
      'すみません、借りた本を汚されてしまいました。',
      'すみません、借りた本を汚してもいいですか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '自己弄髒了借來的書要道歉，用「汚してしまいました」（〜てしまう：表示懊悔的過失）最合適。「汚されてしまいました」是被動形，變成「書被別人弄髒了」，像在推卸責任，主語弄錯；「汚してもいいですか」是徵求「可以弄髒嗎」的許可，事情已經發生了，語意完全不通。',
    explanationEn:
      'To apologize for staining a borrowed book yourself, 「汚してしまいました」 (〜てしまう expressing a regrettable mistake) is the right form. 「汚されてしまいました」 is passive — "the book got stained by someone" — which shifts the blame away from you, so the subject is wrong; 「汚してもいいですか」 asks permission to stain it, but the damage is already done, so it makes no sense.',
  },
  {
    id: 'n4-listening-hatsuwa-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '授業で先生がプリントを配りましたが、一枚足りなくて、もらえませんでした。' },
      { speaker: '旁白', text: '先生に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、プリントがもらえませんでした。もう一枚いただけませんか。',
      'すみません、プリントをもう一枚あげましょうか。',
      'すみません、プリントをもらったことがありますか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '沒拿到講義要向先生說明情況並請求，用「もらえませんでした」加上謙讓的「もう一枚いただけませんか」（能否再給我一張）最合適。「あげましょうか」變成自己要發講義給先生，授受方向相反；「もらったことがありますか」是問先生「你拿過講義嗎」的經驗問句，答非所問，語意不通。',
    explanationEn:
      'When you did not receive a handout, you explain the situation and make a polite request: 「もらえませんでした。もう一枚いただけませんか」— "I could not get one; could I have another?" 「あげましょうか」 offers to hand a printout to the teacher, reversing the direction of giving; 「もらったことがありますか」 asks the teacher about their past experience of receiving handouts — an absurd non-request.',
  },
  {
    id: 'n4-listening-hatsuwa-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '熱が出て学校を休んだので、漢字のテストが受けられませんでした。別の日に受けたいです。' },
      { speaker: '旁白', text: '先生に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、テストを別の日に受けさせていただけませんか。',
      'すみません、テストを別の日に受けてくださいませんか。',
      'すみません、テストを別の日に受けてあげましょうか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '想請先生讓自己改天補考，用使役形加授受的「受けさせていただけませんか」（能否讓我考）最恰當，是 N4 的重要文型。「受けてくださいませんか」是請先生去考試，考試的人弄錯了；「受けてあげましょうか」把考試說成施恩給先生，授受方向和語意都不通。',
    explanationEn:
      'To ask the teacher to let you take the test on another day, the causative plus receiving form 「受けさせていただけませんか」— "would you kindly let me take it?" — is the right N4 pattern. 「受けてくださいませんか」 asks the teacher to take the test, so the wrong person would be the test-taker; 「受けてあげましょうか」 frames taking the test as a favor done for the teacher, wrong in both direction and sense.',
  },
  {
    id: 'n4-listening-hatsuwa-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '昨日この店で買ったくつが小さかったです。大きいのに替えたいです。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'このくつ、少し小さいので、大きいサイズに替えていただけませんか。',
      'このくつ、少し小さいので、大きいサイズに替えてあげましょうか。',
      'このくつ、少し小さいので、大きいサイズに替わりましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '想換尺寸要客氣地請店員幫忙，用「替えていただけませんか」（能否幫我換）。「替えてあげましょうか」是「我幫你換好嗎」，變成客人要幫店員換鞋，授受方向相反；「替わりましたか」用自動詞的過去式，變成在問「已經換好了嗎」，請託都還沒提出就問結果，動詞和時態都不對。',
    explanationEn:
      'To exchange the shoes, you politely ask the clerk with 「替えていただけませんか」— "could you exchange these for me?" 「替えてあげましょうか」 means "shall I exchange them for you?", reversing the favor so the customer serves the clerk; 「替わりましたか」 uses the intransitive verb in the past tense, asking "has it already been exchanged?" before even making the request — wrong verb and wrong tense.',
  },
  {
    id: 'n4-listening-hatsuwa-015',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '店で大きいストーブを買いました。車がないので、家まで持って帰れません。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、これ、家まで届けてもらえませんか。',
      'すみません、これ、家まで届けてあげましょうか。',
      'すみません、これ、家まで届いてもいいですか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '想請店家送貨到家，用「届けてもらえませんか」（能否幫我送）。「届けてあげましょうか」是「我幫你送好嗎」，變成客人要幫店員送貨，授受方向相反；「届いてもいいですか」用了自動詞「届く」（送達），變成在問「東西可以到嗎」，不成請託。他動詞「届ける」和自動詞「届く」的混用是常見的錯誤。',
    explanationEn:
      'To ask the store to deliver, use 「届けてもらえませんか」— "could you deliver this to my house?" 「届けてあげましょうか」 offers to deliver it for the clerk, reversing the favor; 「届いてもいいですか」 mistakenly uses the intransitive 「届く」 (to arrive), asking "may it arrive?", which is no request at all — a classic transitive/intransitive mix-up between 「届ける」 and 「届く」.',
  },
  {
    id: 'n4-listening-hatsuwa-016',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '店で友だちの誕生日プレゼントを買いました。きれいな紙で包んでほしいです。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、これ、プレゼント用に包んでいただけませんか。',
      'すみません、これ、プレゼント用に包んであげましょうか。',
      'すみません、これ、プレゼント用に包んでもいいですか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '請店員包裝禮物用「包んでいただけませんか」（能否幫我包）最合適。「包んであげましょうか」是「我幫你包好嗎」，變成客人要替店員包東西，授受方向相反；「包んでもいいですか」是徵求「自己來包」的許可，可是想要的是店員代為包裝，做動作的人弄錯了。',
    explanationEn:
      'To have a gift wrapped, ask the clerk with 「包んでいただけませんか」— "could you wrap this for me?" 「包んであげましょうか」 means "shall I wrap it for you?", turning the customer into the one doing the favor; 「包んでもいいですか」 asks permission to wrap it yourself, but what you want is for the clerk to do the wrapping, so the actor is wrong.',
  },
  {
    id: 'n4-listening-hatsuwa-017',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '電車が駅に着きましたが、ドアの近くに人がたくさん立っています。降りたいです。' },
      { speaker: '旁白', text: '何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、降ります。通していただけませんか。',
      'すみません、ここで降りてくださいませんか。',
      'すみません、電車を降りてあげましょうか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '下車時請人讓路，先說明「降ります」再用「通していただけませんか」（能否讓我過）請求最自然。「ここで降りてくださいませんか」是請別的乘客下車，下車的人弄錯了；「降りてあげましょうか」用「〜てあげる」把自己下車說成施恩給別人，語意完全不通。',
    explanationEn:
      'To get off a crowded train, you announce 「降ります」 and then request passage with 「通していただけませんか」— "could you let me through?" 「ここで降りてくださいませんか」 asks the other passengers to get off the train, so the wrong person would leave; 「降りてあげましょうか」 uses 〜てあげる to frame your own getting off as a favor to someone, which makes no sense.',
  },
  {
    id: 'n4-listening-hatsuwa-018',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '新幹線で、自分の予約した席に、知らない人が座っています。' },
      { speaker: '旁白', text: 'その人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'あのう、すみません。そこは私の席だと思うんですが。',
      'あのう、すみません。私の席に座ってください。',
      'あのう、すみません。そこに座ったことがありますか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '發現自己的座位被坐，用委婉的「そこは私の席だと思うんですが」提醒對方最自然，句尾的「〜と思うんですが」能緩和語氣、避免衝突。「私の席に座ってください」是邀請對方坐自己的位子，和想請對方離開的目的相反；「座ったことがありますか」是問對方的經驗，答非所問，語意不通。',
    explanationEn:
      'When someone is sitting in your reserved seat, the soft 「そこは私の席だと思うんですが」— "I believe that is my seat" — raises the issue politely, with the trailing 「〜と思うんですが」 cushioning the tone. 「私の席に座ってください」 invites the person to sit in your seat, the opposite of asking them to move; 「座ったことがありますか」 asks about their past experience of sitting there — an irrelevant question.',
  },
  {
    id: 'n4-listening-hatsuwa-019',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '母が台所で晩ご飯を作っています。とても忙しそうです。手伝いたいです。' },
      { speaker: '旁白', text: '母に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'お母さん、忙しそうだね。何か手伝おうか。',
      'お母さん、忙しそうだね。ちょっと手伝ってくれない？',
      'お母さん、忙しそうだね。手伝わなくてもいい？',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '主動提出幫忙用意向形「手伝おうか」（我來幫忙吧）最自然。「手伝ってくれない？」是請母親幫自己的忙，授受方向相反，想幫忙的人變成了被幫的人；「手伝わなくてもいい？」是在問「可以不幫嗎」，想偷懶的語氣和想幫忙的情境完全相反。',
    explanationEn:
      'To volunteer help, the volitional 「手伝おうか」— "shall I help with something?" — is the natural offer. 「手伝ってくれない？」 asks your mother to help you instead, reversing the direction of the favor; 「手伝わなくてもいい？」 asks "is it okay if I do not help?", the tone of someone trying to get out of helping — the exact opposite of the situation.',
  },
  {
    id: 'n4-listening-hatsuwa-020',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '今から出かけますが、外は強い雨です。駅まで歩くと20分かかります。父は家にいます。' },
      { speaker: '旁白', text: '父に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'お父さん、雨だから、車で駅まで送ってくれない？',
      'お父さん、雨だから、車で駅まで送ってあげようか。',
      'お父さん、雨だから、車で駅まで送られてくれない？',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '拜託父親開車送自己，口語的請託用「送ってくれない？」（可以送我嗎）最自然。「送ってあげようか」是「我送你去好嗎」，變成自己要開車送父親，授受方向相反；「送られてくれない？」把被動形硬塞進請託句裡，日文裡沒有這種說法，文法錯誤。',
    explanationEn:
      'To ask your father for a ride, the casual request 「送ってくれない？」— "could you drive me to the station?" — is the natural choice. 「送ってあげようか」 means "shall I drive you there?", offering to drive your father instead; 「送られてくれない？」 jams the passive form into the request pattern, a combination that simply does not exist in Japanese — grammatically broken.',
  },
]

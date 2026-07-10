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
]

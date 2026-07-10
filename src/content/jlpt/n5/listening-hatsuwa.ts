import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n5-listening-hatsuwa-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'レストランで水がほしいです。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、お水をください。',
      'すみません、お水をあげましょうか。',
      'すみません、お水をくれました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '向店員要東西用「〜をください」（請給我〜），是點餐時最自然的說法。「あげましょうか」是「我給你水好嗎」，授受方向相反，變成客人要給店員水；「くれました」是過去式的陳述句，表示「已經給我了」，不是請求，語境完全不合。',
    explanationEn:
      'To ask a server for something, use 「〜をください」 (please give me), the most natural way to order. 「あげましょうか」 means "shall I give you some water?" — the giving direction is reversed, as if the customer were offering water to the server. 「くれました」 is a past-tense statement meaning someone already gave it, not a request, so it does not fit the situation at all.',
  },
  {
    id: 'n5-listening-hatsuwa-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '教室で消しゴムを忘れました。' },
      { speaker: '旁白', text: '友だちに何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      '消しゴムを貸してください。',
      '消しゴムを借りてください。',
      '消しゴムを貸しましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '想向別人借東西，要請對方「借出」，所以用「貸してください」（請借給我）。「借りてください」授受方向相反，變成叫朋友去向別人借，不是自己要借；「貸しましたか」是過去式疑問句，在問對方「你借出去了嗎」，不是請求幫忙。',
    explanationEn:
      'To borrow something, you ask the other person to lend it, so 「貸してください」 (please lend me) is correct. 「借りてください」 reverses the direction — it tells your friend to go borrow from someone else, not to lend to you. 「貸しましたか」 is a past-tense question asking "did you lend it?", which is not a request for help.',
  },
  {
    id: 'n5-listening-hatsuwa-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '友だちとの約束の時間に遅れました。' },
      { speaker: '旁白', text: '友だちに何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      '遅くなって、ごめんなさい。',
      '遅くなっても、いいですか。',
      '遅くなって、ありがとう。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '遲到後向朋友道歉，用「〜て、ごめんなさい」（因為〜，對不起）最自然。「遅くなってもいいですか」是事前徵求許可「我可以遲到嗎」，人都已經遲到了才問，語境不合；「ありがとう」是道謝，遲到了還向對方道謝，語意完全不通。',
    explanationEn:
      'To apologize for being late, 「遅くなって、ごめんなさい」 (sorry for being late) is the natural choice. 「遅くなってもいいですか」 asks for permission in advance — "may I be late?" — which makes no sense when you have already arrived late. 「ありがとう」 expresses thanks, and thanking your friend for your own lateness is completely illogical.',
  },
  {
    id: 'n5-listening-hatsuwa-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '駅へ行きたいですが、道がわかりません。' },
      { speaker: '旁白', text: '近くの人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、駅はどこですか。',
      'すみません、駅へ行ってください。',
      'すみません、駅はどこへ行きますか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '問路時用「〜はどこですか」（〜在哪裡）詢問地點，是最基本的問法。「駅へ行ってください」是請對方去車站，那是對計程車司機說的話，對路人說等於命令他去車站；「駅はどこへ行きますか」把車站當成會移動的主語，問「車站要去哪裡」，語意不通。',
    explanationEn:
      'To ask where a place is, use 「〜はどこですか」 (where is ...?), the most basic way to ask for directions. 「駅へ行ってください」 tells the other person to go to the station — something you would say to a taxi driver, but to a passerby it sounds like an order. 「駅はどこへ行きますか」 treats the station as something that moves and asks where the station is going, which makes no sense.',
  },
  {
    id: 'n5-listening-hatsuwa-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '朝、学校で先生に会いました。' },
      { speaker: '旁白', text: '先生に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'おはようございます。',
      'おはよう。',
      'おやすみなさい。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '早上遇到老師要用鄭重形「おはようございます」。「おはよう」是對家人、朋友等平輩用的隨便說法，對老師、上司這樣打招呼不夠尊敬，是敬語對象的錯誤；「おやすみなさい」是睡前道晚安的話，時間場合都不對。',
    explanationEn:
      'When you meet a teacher in the morning, use the polite form 「おはようございます」. Plain 「おはよう」 is a casual greeting for family and friends, not respectful enough for a teacher or a boss — the politeness level does not match the listener. 「おやすみなさい」 means "good night" and is said before going to bed, so both the time and the situation are wrong.',
  },
  {
    id: 'n5-listening-hatsuwa-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '友だちの家に着きました。' },
      { speaker: '旁白', text: '家に入るとき、何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'おじゃまします。',
      'いらっしゃいませ。',
      'おじゃましました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '進別人家門時說「おじゃまします」（打擾了），是拜訪時的固定寒暄。「いらっしゃいませ」是店員迎接客人的用語，立場相反，客人自己不會說；「おじゃましました」是過去式，要離開對方家時才說「打擾您了」，進門時說時態不對。',
    explanationEn:
      'When entering someone\'s home, the set phrase is 「おじゃまします」 (excuse me for intruding). 「いらっしゃいませ」 is what shop staff say to welcome customers — the roles are reversed, since a visitor would never say it. 「おじゃましました」 is past tense and is said when leaving the house, so using it as you walk in is the wrong tense and timing.',
  },
  {
    id: 'n5-listening-hatsuwa-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '店で青いかばんが買いたいです。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'この青いかばんをください。',
      'この青いかばんはいかがですか。',
      'この青いかばんを買いましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '買東西時對店員說「〜をください」（請給我〜）表示要買這個，最自然。「いかがですか」是店員向客人推薦商品的說法，立場相反；「買いましたか」是過去式疑問句，在問店員「你買了嗎」，既問錯對象時態也不對，不是購買時說的話。',
    explanationEn:
      'When buying something, telling the clerk 「〜をください」 (I\'ll take this one, please) is the natural way to say you want it. 「いかがですか」 is what a clerk says to recommend an item to a customer — the roles are reversed. 「買いましたか」 is a past-tense question asking the clerk whether they bought it — wrong person and wrong tense, not something you say when making a purchase.',
  },
  {
    id: 'n5-listening-hatsuwa-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '荷物がとても重いです。友だちに手伝ってほしいです。' },
      { speaker: '旁白', text: '何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、ちょっと手伝ってくれませんか。',
      'すみません、ちょっと手伝ってあげましょうか。',
      'すみません、ちょっと手伝ってくれましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '請別人幫忙用「〜てくれませんか」（能不能幫我〜），委婉又自然。「手伝ってあげましょうか」是「我來幫你好嗎」，授受方向相反，變成自己要幫對方；「手伝ってくれましたか」是過去式，在問「你幫過我了嗎」，不是請求，語境不合。',
    explanationEn:
      'To ask someone for help, use 「〜てくれませんか」 (could you ... for me?), which is polite and natural. 「手伝ってあげましょうか」 means "shall I help you?" — the direction of the favor is reversed, offering your own help instead. 「手伝ってくれましたか」 is past tense, asking "did you help me?", which is not a request and does not fit the situation.',
  },
  {
    id: 'n5-listening-hatsuwa-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '日曜日、友だちと映画が見たいです。' },
      { speaker: '旁白', text: '友だちに何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      '日曜日、いっしょに映画を見ませんか。',
      '日曜日、いっしょに映画を見ましたか。',
      '日曜日、いっしょに映画を見なさい。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '邀請別人做某事用「〜ませんか」（要不要一起〜），是最常見的邀約句型。「見ましたか」是過去式，在問「上週日看了嗎」，不是邀約；「見なさい」是上對下的命令形，媽媽對小孩、老師對學生才會用，拿來邀朋友非常失禮，語氣完全不對。',
    explanationEn:
      'To invite someone to do something together, use 「〜ませんか」 (won\'t you ... with me?), the standard invitation pattern. 「見ましたか」 is past tense, asking whether they already watched it — not an invitation. 「見なさい」 is a top-down command form used by a mother to a child or a teacher to a student; using it to invite a friend sounds very rude and completely wrong in tone.',
  },
  {
    id: 'n5-listening-hatsuwa-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '先生に借りた本を、今日返します。' },
      { speaker: '旁白', text: '先生に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      '本、ありがとうございました。',
      '本、ありがとう。',
      'どういたしまして。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '還書時向老師道謝，事情已結束所以用過去式的鄭重形「ありがとうございました」。「ありがとう」是對朋友的隨便說法，對老師道謝不夠尊敬，敬語對象錯誤；「どういたしまして」（不客氣）是被道謝的一方回答的話，立場相反，自己道謝時不會說。',
    explanationEn:
      'When returning the book to your teacher, the favor is finished, so you thank them with the polite past-tense 「ありがとうございました」. Plain 「ありがとう」 is a casual form for friends and is not respectful enough toward a teacher. 「どういたしまして」 (you\'re welcome) is what the person being thanked says in reply — the roles are reversed, so you would never say it when giving thanks yourself.',
  },
  {
    id: 'n5-listening-hatsuwa-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '電車の中で、おばあさんが立っています。席をゆずりたいです。' },
      { speaker: '旁白', text: '何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'どうぞ、すわってください。',
      'すみません、すわってもいいですか。',
      'どうぞ、すわりました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '讓座給別人時用「どうぞ、〜てください」（請坐），把座位讓給對方。「すわってもいいですか」是徵求許可「我可以坐嗎」，變成自己想坐，方向完全相反；「すわりました」是過去式陳述「坐下了」，既不是請對方坐，語意也不通。',
    explanationEn:
      'To offer your seat, say 「どうぞ、すわってください」 (please, have a seat), giving the seat to the other person. 「すわってもいいですか」 asks for permission — "may I sit down?" — which means you want the seat yourself, the exact opposite direction. 「すわりました」 is a past-tense statement meaning "sat down"; it is not an offer and makes no sense here.',
  },
  {
    id: 'n5-listening-hatsuwa-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '電車が止まって、会社に着く時間に間に合いません。' },
      { speaker: '旁白', text: '会社の人に電話で何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、少し遅れます。',
      'すみません、少し遅れてください。',
      'すみません、少し遅れましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '打電話說明自己會遲到，用非過去形「遅れます」表示接下來會發生的事，最自然。「遅れてください」是「請你遲到」，變成要求公司的人遲到，對象方向錯誤；「遅れましたか」是過去式疑問句，在問對方「你遲到了嗎」，不是說明自己的狀況。',
    explanationEn:
      'When calling to say you will be late, use the non-past 「遅れます」 to describe what is about to happen — the natural choice. 「遅れてください」 means "please be late", telling the person at the office to be late — the request points at the wrong person. 「遅れましたか」 is a past-tense question asking whether the other person was late, not an explanation of your own situation.',
  },
  {
    id: 'n5-listening-hatsuwa-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '公園で友だちと写真がとりたいです。' },
      { speaker: '旁白', text: '近くの人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、写真をとってくれませんか。',
      'すみません、写真をとってあげましょうか。',
      'すみません、写真をとりましたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '請路人幫忙拍照，用「〜てくれませんか」（能不能幫我〜）委婉請求。「とってあげましょうか」是「我幫你拍好嗎」，授受方向相反，變成自己主動要幫對方拍；「とりましたか」是過去式疑問句，在問對方「你拍了嗎」，不是請求幫忙，語境不合。',
    explanationEn:
      'To ask a passerby to take a photo for you, use the polite request 「〜てくれませんか」 (could you ... for me?). 「とってあげましょうか」 means "shall I take one for you?" — the direction of the favor is reversed, offering to photograph the other person instead. 「とりましたか」 is a past-tense question asking "did you take it?", which is not a request and does not fit the scene.',
  },
  {
    id: 'n5-listening-hatsuwa-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '友だちに借りた傘を返します。' },
      { speaker: '旁白', text: '友だちに何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'この傘、返します。ありがとう。',
      'この傘、返してください。',
      'この傘、貸してください。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '把借來的東西還給對方時，說「返します」（還你）並道謝，最自然。「返してください」是請對方還給自己，授受方向相反，明明是自己要還傘卻變成向對方討傘；「貸してください」是「請借給我」，是借東西時說的話，現在是要還傘，語境完全相反。',
    explanationEn:
      'When giving back something you borrowed, saying 「返します」 (I\'m returning this) plus a word of thanks is the natural choice. 「返してください」 asks the other person to return it to you — the direction is reversed, as if you were demanding your friend\'s umbrella when you are the one returning it. 「貸してください」 means "please lend it to me", said when borrowing — the exact opposite of returning.',
  },
  {
    id: 'n5-listening-hatsuwa-015',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'デパートにいます。トイレに行きたいです。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、トイレはどこですか。',
      'すみません、トイレはどこでしたか。',
      'すみません、トイレに行ってください。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '詢問場所位置用「〜はどこですか」（〜在哪裡），是問廁所最基本的說法。「どこでしたか」是過去式，像在問「廁所原本在哪裡」，現在要找廁所卻用過去式，時態不對；「トイレに行ってください」是請店員去上廁所，對象方向錯誤，語意不通。',
    explanationEn:
      'To ask where a place is, use 「〜はどこですか」 (where is ...?), the most basic way to ask for the restroom. 「どこでしたか」 is past tense, as if asking where the restroom used to be — the wrong tense when you are looking for it right now. 「トイレに行ってください」 tells the store clerk to go to the restroom — the request targets the wrong person and makes no sense.',
  },
  {
    id: 'n5-listening-hatsuwa-016',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '友だちの家で遊びました。もう帰る時間です。' },
      { speaker: '旁白', text: '帰るとき、何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'そろそろ失礼します。',
      'おじゃまします。',
      'いってらっしゃい。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '要從別人家告辭時說「そろそろ失礼します」（差不多該告辭了），是離開時的固定說法。「おじゃまします」是進門時說的寒暄，人要走了才說，時機完全相反；「いってらっしゃい」是留在家裡的人送別人出門時說的話，立場相反，客人自己不會說。',
    explanationEn:
      'When it is time to leave someone\'s home, the set phrase is 「そろそろ失礼します」 (I should be going now). 「おじゃまします」 is the greeting said when entering the house, so saying it as you leave gets the timing exactly backwards. 「いってらっしゃい」 is what the person staying home says to see someone off — the roles are reversed, and a guest would never say it.',
  },
  {
    id: 'n5-listening-hatsuwa-017',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '熱があります。今日、学校を休みたいです。' },
      { speaker: '旁白', text: '先生に電話で何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、熱がありますから、今日は休みます。',
      'すみません、熱がありますから、今日は休んでください。',
      'すみません、熱がありますから、今日は休みました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '打電話請假，說明理由後用非過去形「休みます」表示今天要請假，最自然。「休んでください」是「請您休息」，變成要求老師去休息，對象方向錯誤；「休みました」是過去式「已經請假了」，今天的假還沒開始請就用過去式，時態不對。',
    explanationEn:
      'When calling in sick, you give the reason and then use the non-past 「休みます」 to say you will be absent today — the natural way. 「休んでください」 means "please take a rest", telling the teacher to rest — the request points at the wrong person. 「休みました」 is past tense, "I was absent", but today\'s absence has not happened yet, so the tense is wrong.',
  },
  {
    id: 'n5-listening-hatsuwa-018',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'レストランで食事が終わりました。お金を払いたいです。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、お会計をお願いします。',
      'すみません、お金をくれませんか。',
      'すみません、お会計をお願いしました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '在餐廳結帳時說「お会計をお願いします」（麻煩結帳），是最常用的固定說法。「お金をくれませんか」是「能不能給我錢」，變成向店員要錢，授受方向完全相反；「お願いしました」是過去式，現在才要拜託結帳卻說「已經拜託過了」，時態不對，不是請求。',
    explanationEn:
      'To ask for the bill at a restaurant, the standard set phrase is 「お会計をお願いします」 (the check, please). 「お金をくれませんか」 means "could you give me some money?" — asking the staff for money, with the giving direction completely reversed. 「お願いしました」 is past tense, "I already asked", said before you have even made the request — wrong tense and not a request at all.',
  },
  {
    id: 'n5-listening-hatsuwa-019',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '先生が「日本語が上手ですね」と言いました。' },
      { speaker: '旁白', text: '何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'いいえ、まだまだです。',
      'はい、とても上手です。',
      'いいえ、けっこうです。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '被稱讚時，日語習慣謙虛地回答「いいえ、まだまだです」（沒有沒有，還差得遠）。「はい、とても上手です」是同意並稱讚自己很厲害，不合日語的謙遜語用習慣，對老師這樣說更顯失禮；「けっこうです」是婉拒別人給東西時說的「不用了」，不是回應稱讚的話，語境不合。',
    explanationEn:
      'When praised in Japanese, the customary modest reply is 「いいえ、まだまだです」 (oh no, I still have a long way to go). 「はい、とても上手です」 agrees with the praise and compliments yourself, which goes against Japanese modesty conventions and sounds especially rude toward a teacher. 「けっこうです」 means "no, thank you" when declining an offer — not a response to a compliment, so the context is wrong.',
  },
  {
    id: 'n5-listening-hatsuwa-020',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '店でりんごが買いたいです。値段がわかりません。' },
      { speaker: '旁白', text: '店の人に何と言いますか。' },
    ],
    question: '何と言いますか。',
    options: [
      'すみません、このりんごはいくらですか。',
      'すみません、このりんごはいくつですか。',
      'すみません、このりんごはいくらでしたか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '問價格用「いくらですか」（多少錢），是購物時最基本的問法。「いくつですか」是問數量「有幾個」，不是問價錢，疑問詞用錯；「いくらでしたか」是過去式，像在問「當時是多少錢」，現在站在店裡問眼前商品的價格卻用過去式，時態不對。',
    explanationEn:
      'To ask a price, use 「いくらですか」 (how much is it?), the most basic shopping question. 「いくつですか」 asks about quantity — "how many?" — so it uses the wrong question word for a price. 「いくらでしたか」 is past tense, as if asking how much it cost back then; using the past tense for an item right in front of you in the shop is the wrong tense.',
  },
]

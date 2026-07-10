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
  },
]

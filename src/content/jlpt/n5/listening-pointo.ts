import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n5-listening-pointo-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: '田中さん、昨日のパーティー、どうして来ませんでしたか。' },
      { speaker: '男', text: 'すみません。行きたかったですが……。' },
      { speaker: '女', text: '仕事が忙しかったですか。' },
      { speaker: '男', text: 'いいえ、仕事は5時に終わりました。でも、夜、熱が出ましたから、家で寝ていました。' },
      { speaker: '女', text: 'そうですか。今日は大丈夫ですか。' },
      { speaker: '男', text: 'はい、もう大丈夫です。' },
    ],
    question: '男の人はどうして昨日パーティーに来ませんでしたか。',
    options: ['熱が出たから', '仕事が忙しかったから', '雨が降ったから', '朝早く起きたから'],
    answerIndex: 0,
    explanation:
      '男の人說「熱が出ましたから、家で寝ていました」，所以沒去派對的原因是發燒。「仕事が忙しかった」是女の人的猜測，被男の人以「いいえ、仕事は5時に終わりました」明確否定，是典型的被否定干擾項；下雨和早起在對話中完全沒有提到。',
    explanationEn:
      'The man says 「熱が出ましたから、家で寝ていました」 — he did not come to the party because he had a fever and stayed in bed. Being busy at work was only the woman\'s guess, and he denies it clearly with 「いいえ、仕事は5時に終わりました」, a classic rejected distractor. Rain and getting up early are never mentioned in the conversation.',
  },
  {
    id: 'n5-listening-pointo-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で女の人と男の人が話しています。' },
      { speaker: '女', text: '山田さんはスポーツが好きですね。何が一番好きですか。' },
      { speaker: '男', text: 'そうですね。子供の時はテニスが一番好きでした。' },
      { speaker: '女', text: 'じゃあ、今もテニスですか。' },
      { speaker: '男', text: 'いいえ、今は水泳が一番好きです。毎週プールへ行きますよ。' },
      { speaker: '女', text: 'いいですね。サッカーはどうですか。' },
      { speaker: '男', text: 'サッカーはテレビで見ますが、あまりしません。' },
    ],
    question: '男の人は今、何のスポーツが一番好きですか。',
    options: ['水泳', 'テニス', 'サッカー', '野球'],
    answerIndex: 0,
    explanation:
      '男の人說「今は水泳が一番好きです」，現在最喜歡的是游泳。網球是「子供の時」（小時候）最喜歡的，時間點不對，而且他自己用「いいえ、今は水泳が」更正了；足球只是在電視上看，他說「あまりしません」；棒球在對話中沒有出現。',
    explanationEn:
      'The man says 「今は水泳が一番好きです」 — swimming is his favorite sport now. Tennis was his favorite 「子供の時」 (when he was a child), so the time frame is wrong, and he corrects it himself with 「いいえ、今は水泳が」. Soccer he only watches on TV and says 「あまりしません」 (he rarely plays it), and baseball never appears in the dialogue.',
  },
  {
    id: 'n5-listening-pointo-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学で男の人と女の人が話しています。' },
      { speaker: '男', text: 'リンさんはいつ日本へ来ましたか。' },
      { speaker: '女', text: '去年の9月に来ました。' },
      { speaker: '男', text: 'そうですか。大学は4月からじゃありませんか。' },
      { speaker: '女', text: 'はい、大学は今年の4月からです。その前に日本語学校で勉強しました。' },
      { speaker: '男', text: 'お兄さんも日本にいますね。' },
      { speaker: '女', text: 'はい、兄は2年前に来ました。' },
    ],
    question: '女の人はいつ日本へ来ましたか。',
    options: ['去年の9月', '今年の4月', '2年前', '去年の4月'],
    answerIndex: 0,
    explanation:
      '女の人一開始就說「去年の9月に来ました」，來日本的時間是去年9月。「今年の4月」是她開始上大學的時間，不是來日本的時間，屬於對話中出現但對應錯誤的干擾項；「2年前」是哥哥來日本的時間；「去年の4月」把年份和月份混在一起，對話中沒有這個時間。',
    explanationEn:
      'The woman says right away 「去年の9月に来ました」 — she came to Japan last September. 「今年の4月」 is when she started university, not when she arrived, so it is a distractor that appears in the dialogue but answers the wrong question. "Two years ago" is when her older brother came, and "last April" mixes up the year and month — that date never appears at all.',
  },
  {
    id: 'n5-listening-pointo-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が話しています。' },
      { speaker: '男', text: '佐藤さん、そのくつ、いいですね。デパートで買いましたか。' },
      { speaker: '女', text: 'いいえ、デパートは高いですから、買いませんでした。駅前の小さい店で買いました。' },
      { speaker: '男', text: 'そうですか。インターネットで買いませんでしたか。' },
      { speaker: '女', text: 'インターネットでもよく買いますが、くつは店ではいてから買います。' },
      { speaker: '男', text: 'そうですね。私も今度その店へ行きます。' },
    ],
    question: '女の人はくつをどこで買いましたか。',
    options: ['駅前の小さい店', 'デパート', 'インターネット', 'スーパー'],
    answerIndex: 0,
    explanation:
      '女の人說「駅前の小さい店で買いました」，鞋子是在車站前的小店買的。百貨公司被她以「デパートは高いですから、買いませんでした」明確否定；網路購物她雖然常用，但她說鞋子要「店ではいてから買います」（在店裡試穿後才買），兩者都是出現過但被排除的干擾項；超市沒有被提到。',
    explanationEn:
      'The woman says 「駅前の小さい店で買いました」 — she bought the shoes at a small shop in front of the station. She explicitly rules out the department store with 「デパートは高いですから、買いませんでした」, and although she often shops online, she says that for shoes she buys 「店ではいてから買います」 (only after trying them on in a shop). Both are mentioned-but-excluded distractors, and the supermarket is never brought up.',
  },
  {
    id: 'n5-listening-pointo-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で女の人と男の人が話しています。' },
      { speaker: '女', text: '田中さん、今日は歩いて来ましたね。どうしてですか。運動ですか。' },
      { speaker: '男', text: 'いいえ、運動じゃありません。昨日、自転車が壊れましたから。' },
      { speaker: '女', text: 'そうですか。バスに乗りませんでしたか。' },
      { speaker: '男', text: '今日は天気がいいですから、乗りませんでした。' },
      { speaker: '女', text: '新しい自転車を買いますか。' },
      { speaker: '男', text: 'いいえ、店の人が明日直しますから、買いません。' },
    ],
    question: '男の人はどうして今日歩いて来ましたか。',
    options: ['自転車が壊れたから', '運動がしたかったから', '雨が降ったから', 'バスがなかったから'],
    answerIndex: 0,
    explanation:
      '男の人說「昨日、自転車が壊れましたから」，走路來的原因是腳踏車壞了。「運動ですか」是女の人的猜測，被他以「いいえ、運動じゃありません」直接否定，是典型干擾項；他還說「今日は天気がいい」，所以「雨が降ったから」不對；公車有但他自己選擇不搭，不是「バスがなかった」。',
    explanationEn:
      'The man says 「昨日、自転車が壊れましたから」 — he walked because his bicycle broke yesterday. Exercise was the woman\'s guess, which he denies directly with 「いいえ、運動じゃありません」, a classic distractor. He also says 「今日は天気がいい」, so rain cannot be the reason, and the bus was running — he simply chose not to take it, so "there was no bus" is wrong too.',
  },
  {
    id: 'n5-listening-pointo-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '教室で男の人と女の人が話しています。' },
      { speaker: '男', text: '中村さんの誕生日はいつですか。今月の20日ですね。' },
      { speaker: '女', text: 'いいえ、20日は妹の誕生日です。私は来月の10日です。' },
      { speaker: '男', text: 'そうですか。じゃあ、みんなでパーティーをしましょう。10日は何曜日ですか。' },
      { speaker: '女', text: '土曜日です。でも、その日は家族と出かけますから……。' },
      { speaker: '男', text: 'じゃあ、パーティーは次の日の11日にしましょう。' },
      { speaker: '女', text: 'はい、お願いします。' },
    ],
    question: '女の人の誕生日はいつですか。',
    options: ['来月の10日', '今月の20日', '来月の11日', '来月の20日'],
    answerIndex: 0,
    explanation:
      '女の人說「私は来月の10日です」，她的生日是下個月10日。「今月の20日」是男の人的猜測，被她以「いいえ、20日は妹の誕生日です」更正，那是妹妹的生日；「来月の11日」是改期後開派對的日子，不是生日本身，是對話中出現但對應錯誤的干擾項。',
    explanationEn:
      'The woman says 「私は来月の10日です」 — her birthday is the 10th of next month. "The 20th of this month" was the man\'s guess, which she corrects with 「いいえ、20日は妹の誕生日です」: that is her younger sister\'s birthday. "The 11th of next month" is the rescheduled party date, not her actual birthday — a distractor that appears in the dialogue but matches the wrong thing.',
  },
  {
    id: 'n5-listening-pointo-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: '山下さん、京都旅行はどうでしたか。' },
      { speaker: '男', text: 'とても楽しかったですよ。' },
      { speaker: '女', text: '何が一番よかったですか。' },
      { speaker: '男', text: '料理が一番よかったです。魚がおいしかったです。' },
      { speaker: '女', text: 'お寺はどうでしたか。' },
      { speaker: '男', text: 'お寺もきれいでしたが、人が多かったですから、少し疲れました。' },
    ],
    question: '男の人は旅行で何が一番よかったと言っていますか。',
    options: ['料理', 'お寺', '買い物', 'ホテル'],
    answerIndex: 0,
    explanation:
      '男の人明確說「料理が一番よかったです」，最棒的是料理。寺廟雖然他也說「きれいでした」，但接著用「人が多かったですから、少し疲れました」降低評價，只是對話中出現過的干擾項，不是「一番」；購物和飯店在對話中都沒有被提到。',
    explanationEn:
      'The man states clearly 「料理が一番よかったです」 — the food was the best part of the trip. He does say the temples were 「きれいでした」, but then lowers the rating with 「人が多かったですから、少し疲れました」 (it was crowded and a bit tiring), so the temples are only a mentioned distractor, not his number one. Shopping and the hotel are never brought up in the dialogue.',
  },
  {
    id: 'n5-listening-pointo-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で男の人と女の人が話しています。' },
      { speaker: '男', text: 'もうすぐ夏休みですね。どこかへ行きますか。' },
      { speaker: '女', text: 'はい、友だちと沖縄へ行きます。' },
      { speaker: '男', text: 'いいですね。去年も沖縄へ行きましたか。' },
      { speaker: '女', text: 'いいえ、去年は家族と北海道へ行きました。' },
      { speaker: '男', text: '沖縄で何をしますか。' },
      { speaker: '女', text: '海で泳ぎたいです。' },
    ],
    question: '女の人は今年の夏休みにどこへ行きますか。',
    options: ['沖縄', '北海道', '東京', '京都'],
    answerIndex: 0,
    explanation:
      '女の人說「友だちと沖縄へ行きます」，今年暑假要去沖繩。北海道是「去年」和家人去的地方，她用「いいえ、去年は」明確區分了時間，是典型的時間錯置干擾項；東京和京都在對話中完全沒有出現。題目問的是「今年の夏休み」，要注意聽時間詞。',
    explanationEn:
      'The woman says 「友だちと沖縄へ行きます」 — this summer she is going to Okinawa with friends. Hokkaido is where she went 「去年」 (last year) with her family, and she separates the two clearly with 「いいえ、去年は」, making it a classic wrong-time distractor. Tokyo and Kyoto never appear. Since the question asks about this year\'s summer vacation, listen carefully for the time words.',
  },
  {
    id: 'n5-listening-pointo-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: '鈴木さん、眠そうですね。昨日も遅くまで仕事をしましたか。' },
      { speaker: '男', text: 'いいえ、昨日は仕事が早く終わりました。' },
      { speaker: '女', text: 'じゃあ、どうして眠いですか。' },
      { speaker: '男', text: '夜遅くまでテレビでサッカーの試合を見ましたから。' },
      { speaker: '女', text: 'ああ、昨日の試合ですね。私は早く寝ましたから、見ませんでした。' },
      { speaker: '男', text: 'とてもいい試合でしたよ。でも、今日は眠いです。' },
    ],
    question: '男の人はどうして眠いですか。',
    options: ['夜遅くまでサッカーの試合を見たから', '遅くまで仕事をしたから', '朝早く走ったから', '本を読んだから'],
    answerIndex: 0,
    explanation:
      '男の人說「夜遅くまでテレビでサッカーの試合を見ましたから」，想睡是因為熬夜看足球比賽。「遅くまで仕事をした」是女の人的猜測，被他以「いいえ、昨日は仕事が早く終わりました」否定，是典型的被否定干擾項；早上跑步和看書在對話中都沒有提到。',
    explanationEn:
      'The man says 「夜遅くまでテレビでサッカーの試合を見ましたから」 — he is sleepy because he stayed up late watching a soccer match on TV. Working late was the woman\'s guess, which he denies with 「いいえ、昨日は仕事が早く終わりました」, a classic rejected distractor. Running in the morning and reading a book are never mentioned in the conversation.',
  },
  {
    id: 'n5-listening-pointo-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学で男の人と女の人が話しています。' },
      { speaker: '男', text: '木村さんは喫茶店でアルバイトをしていますね。毎日ですか。' },
      { speaker: '女', text: 'いいえ、毎日じゃありません。火曜日と金曜日だけです。' },
      { speaker: '男', text: '週末はしませんか。' },
      { speaker: '女', text: '前は土曜日もしていましたが、今は勉強がありますから、していません。' },
      { speaker: '男', text: 'そうですか。じゃあ、金曜日に店へ行きますよ。' },
      { speaker: '女', text: 'はい、来てください。' },
    ],
    question: '女の人は今、いつアルバイトをしていますか。',
    options: ['火曜日と金曜日', '火曜日と土曜日', '毎日', '土曜日と日曜日'],
    answerIndex: 0,
    explanation:
      '女の人說「火曜日と金曜日だけです」，現在只有星期二和星期五打工。「毎日」被她以「いいえ、毎日じゃありません」直接否定；星期六是「前は」（以前）曾經打工的日子，她說現在「していません」，是時間錯置的干擾項。題目問「今」，要注意現在與過去的區別。',
    explanationEn:
      'The woman says 「火曜日と金曜日だけです」 — she now works part-time only on Tuesdays and Fridays. "Every day" is denied directly with 「いいえ、毎日じゃありません」. Saturday is when she used to work, marked by 「前は」 (before), and she says she no longer does (「していません」) — a wrong-time distractor. The question asks about now, so pay attention to present versus past.',
  },
  {
    id: 'n5-listening-pointo-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で女の人と男の人が話しています。' },
      { speaker: '女', text: '林さん、今朝の授業に遅れましたね。また朝寝坊をしましたか。' },
      { speaker: '男', text: 'いいえ、今日は6時に起きました。' },
      { speaker: '女', text: 'じゃあ、どうしてですか。' },
      { speaker: '男', text: '電車が駅で止まりましたから。30分ぐらい動きませんでした。' },
      { speaker: '女', text: 'それは大変でしたね。' },
      { speaker: '男', text: 'ええ、次からもっと早い電車に乗ります。' },
    ],
    question: '男の人はどうして授業に遅れましたか。',
    options: ['電車が止まったから', '朝寝坊をしたから', '道が分からなかったから', '体の調子が悪かったから'],
    answerIndex: 0,
    explanation:
      '男の人說「電車が駅で止まりましたから」，遲到的原因是電車停駛了30分鐘。「朝寝坊をしましたか」是女の人的猜測，被他以「いいえ、今日は6時に起きました」明確否定，是典型的被否定干擾項；迷路和身體不舒服在對話中完全沒有提到。',
    explanationEn:
      'The man says 「電車が駅で止まりましたから」 — he was late because the train stopped at a station for about thirty minutes. Oversleeping was only the woman\'s guess (「また朝寝坊をしましたか」), and he denies it clearly with 「いいえ、今日は6時に起きました」, a classic rejected distractor. Getting lost and feeling unwell are never mentioned in the conversation.',
  },
  {
    id: 'n5-listening-pointo-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '教室で男の人と女の人が話しています。' },
      { speaker: '男', text: 'アンナさんは日本語が上手ですね。どうして日本語を勉強していますか。アニメが好きですか。' },
      { speaker: '女', text: 'アニメも時々見ますが、それが理由じゃありません。' },
      { speaker: '男', text: 'じゃあ、どうしてですか。' },
      { speaker: '女', text: '来年から東京の会社で働きますから、勉強しています。' },
      { speaker: '男', text: 'そうですか。旅行もしますか。' },
      { speaker: '女', text: '旅行はお金がありませんから、あまりしません。' },
    ],
    question: '女の人はどうして日本語を勉強していますか。',
    options: ['日本の会社で働くから', 'アニメが好きだから', '旅行がしたいから', '日本人の友だちがいるから'],
    answerIndex: 0,
    explanation:
      '女の人說「来年から東京の会社で働きますから、勉強しています」，學日語是為了在日本的公司工作。「アニメが好きですか」是男の人的猜測，被她以「それが理由じゃありません」否定；旅行她說「お金がありませんから、あまりしません」，也被排除；日本朋友在對話中沒有出現。',
    explanationEn:
      'The woman says 「来年から東京の会社で働きますから、勉強しています」 — she studies Japanese because she will work at a company in Tokyo from next year. Anime was the man\'s guess, which she rejects with 「それが理由じゃありません」 (that is not the reason). Travel is also ruled out — she says 「お金がありませんから、あまりしません」 — and a Japanese friend is never mentioned.',
  },
  {
    id: 'n5-listening-pointo-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: '高橋さん、今日は早く帰りますね。どこか痛いですか。' },
      { speaker: '男', text: 'いいえ、元気ですよ。今日は母が国から来ますから、空港へ行きます。' },
      { speaker: '女', text: 'そうですか。仕事は大丈夫ですか。' },
      { speaker: '男', text: 'はい、今日の仕事はもう終わりました。' },
      { speaker: '女', text: 'じゃあ、気をつけて。' },
      { speaker: '男', text: 'ありがとうございます。お先に失礼します。' },
    ],
    question: '男の人はどうして今日早く帰りますか。',
    options: ['お母さんが来るから', '体が痛いから', '仕事が多いから', '病院へ行くから'],
    answerIndex: 0,
    explanation:
      '男の人說「今日は母が国から来ますから、空港へ行きます」，提早回家是因為要去機場接媽媽。「どこか痛いですか」是女の人的猜測，被他以「いいえ、元気ですよ」明確否定；工作他說「もう終わりました」，所以「仕事が多いから」不對；醫院在對話中沒有提到。',
    explanationEn:
      'The man says 「今日は母が国から来ますから、空港へ行きます」 — he is leaving early because his mother is arriving from his home country and he is going to the airport. Being in pain was the woman\'s guess, which he denies clearly with 「いいえ、元気ですよ」. He also says his work 「もう終わりました」 (is already finished), so "too much work" is wrong, and a hospital is never mentioned.',
  },
  {
    id: 'n5-listening-pointo-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で男の人と女の人が話しています。' },
      { speaker: '男', text: '田村さん、新しい映画を見に行きませんか。今日はどうですか。' },
      { speaker: '女', text: 'すみません、今日はピアノの練習がありますから……。' },
      { speaker: '男', text: 'じゃあ、金曜日は？' },
      { speaker: '女', text: '金曜日はアルバイトがあります。土曜日はどうですか。' },
      { speaker: '男', text: '土曜日ですね。いいですよ。じゃあ、土曜日に行きましょう。' },
      { speaker: '女', text: 'はい、楽しみにしています。' },
    ],
    question: '二人はいつ映画を見に行きますか。',
    options: ['土曜日', '今日', '金曜日', '日曜日'],
    answerIndex: 0,
    explanation:
      '最後兩人約定「じゃあ、土曜日に行きましょう」，所以是星期六去看電影。「今日」被女の人以「ピアノの練習がありますから」婉拒；「金曜日」也因為「アルバイトがあります」被排除，兩者都是對話中出現但被否定的干擾項；星期日在對話中沒有出現。',
    explanationEn:
      'The two finally agree with 「じゃあ、土曜日に行きましょう」, so they will see the movie on Saturday. Today is politely declined by the woman because 「ピアノの練習がありますから」 (she has piano practice), and Friday is ruled out because 「アルバイトがあります」 (she has a part-time job). Both are mentioned-then-rejected distractors, and Sunday never appears in the conversation.',
  },
  {
    id: 'n5-listening-pointo-015',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '教室で女の人と男の人が話しています。' },
      { speaker: '女', text: '中野さん、漢字のテストは明日ですね。' },
      { speaker: '男', text: 'いいえ、明日じゃありませんよ。来週の水曜日です。' },
      { speaker: '女', text: 'えっ、そうですか。よかった。明日だと思いました。' },
      { speaker: '男', text: '明日は作文の宿題を出す日ですよ。' },
      { speaker: '女', text: 'ああ、そうでした。じゃあ、今晩、作文を書きます。' },
      { speaker: '男', text: '私はもう書きましたよ。' },
    ],
    question: '漢字のテストはいつですか。',
    options: ['来週の水曜日', '明日', '今晩', '来週の月曜日'],
    answerIndex: 0,
    explanation:
      '男の人說「いいえ、明日じゃありませんよ。来週の水曜日です」，漢字考試是下週三。「明日」是女の人的誤會，被他直接否定並更正，而且明天其實是交作文作業的日子，是典型的被更正干擾項；「今晩」是女の人要寫作文的時間，和考試無關；下週一在對話中沒有出現。',
    explanationEn:
      'The man says 「いいえ、明日じゃありませんよ。来週の水曜日です」 — the kanji test is next Wednesday. "Tomorrow" was the woman\'s misunderstanding, which he directly denies and corrects; tomorrow is actually the day to hand in the essay homework, making it a classic corrected distractor. "Tonight" is just when she plans to write the essay, unrelated to the test, and next Monday never appears.',
  },
  {
    id: 'n5-listening-pointo-016',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学で男の人と女の人が話しています。' },
      { speaker: '男', text: 'マリーさんは夏に国へ帰りますか。' },
      { speaker: '女', text: 'はい、帰ります。' },
      { speaker: '男', text: '来月の初めですか。' },
      { speaker: '女', text: 'いいえ、来月の初めはまだ授業がありますから、来月の25日に帰ります。' },
      { speaker: '男', text: 'いつ日本へ戻りますか。' },
      { speaker: '女', text: '9月の10日に戻ります。' },
    ],
    question: '女の人はいつ国へ帰りますか。',
    options: ['来月の25日', '来月の初め', '9月の10日', '今月の25日'],
    answerIndex: 0,
    explanation:
      '女の人說「来月の25日に帰ります」，回國的日子是下個月25日。「来月の初め」是男の人的猜測，被她以「まだ授業がありますから」否定，是被否定的干擾項；「9月の10日」是她回到日本的日子，不是回國的日子，屬於對應錯誤的干擾項；「今月の25日」把月份弄錯了。',
    explanationEn:
      'The woman says 「来月の25日に帰ります」 — she goes back to her country on the 25th of next month. The beginning of next month was the man\'s guess, rejected with 「まだ授業がありますから」 (she still has classes then). September 10th is when she returns to Japan, not when she leaves — a distractor matching the wrong event — and "the 25th of this month" has the wrong month.',
  },
  {
    id: 'n5-listening-pointo-017',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: 'もう12時ですね。昼ご飯、会社の食堂で食べませんか。' },
      { speaker: '男', text: '食堂は今、人がとても多いですよ。' },
      { speaker: '女', text: 'そうですね。じゃあ、隣のレストランは？' },
      { speaker: '男', text: 'あそこは高いですから……。今日は天気がいいですから、公園でお弁当を食べませんか。' },
      { speaker: '女', text: 'いいですね。じゃあ、コンビニでお弁当を買って、公園へ行きましょう。' },
      { speaker: '男', text: 'はい、行きましょう。' },
    ],
    question: '二人はどこで昼ご飯を食べますか。',
    options: ['公園', '会社の食堂', 'レストラン', 'コンビニ'],
    answerIndex: 0,
    explanation:
      '男の人提議「公園でお弁当を食べませんか」，女の人同意，所以是在公園吃午餐。食堂因為「人がとても多い」被排除，餐廳因為「高いですから」被排除，都是對話中出現但被否定的干擾項；便利商店只是「買便當」的地方，不是吃飯的地方，屬於對應錯誤的干擾項。',
    explanationEn:
      'The man suggests 「公園でお弁当を食べませんか」 and the woman agrees, so they eat lunch in the park. The company cafeteria is ruled out because 「人がとても多い」 (very crowded), and the restaurant because 「高いですから」 (too expensive) — both mentioned-then-rejected distractors. The convenience store is only where they buy the boxed lunches, not where they eat, so it matches the wrong role.',
  },
  {
    id: 'n5-listening-pointo-018',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '電話で男の人と女の人が話しています。' },
      { speaker: '男', text: 'もしもし、小川さん。明日の3時、駅前で会いましょうか。' },
      { speaker: '女', text: 'うーん、駅前は人が多いですから、ちょっと……。' },
      { speaker: '男', text: 'じゃあ、どこがいいですか。' },
      { speaker: '女', text: '図書館の前はどうですか。駅から近いですし、静かですよ。' },
      { speaker: '男', text: 'いいですね。じゃあ、明日3時に図書館の前で。' },
      { speaker: '女', text: 'はい、じゃあ、また明日。' },
    ],
    question: '二人は明日どこで会いますか。',
    options: ['図書館の前', '駅前', 'デパートの前', '学校の前'],
    answerIndex: 0,
    explanation:
      '女の人提議「図書館の前はどうですか」，男の人回答「いいですね」並確認「図書館の前で」，所以碰面地點是圖書館前。「駅前」是男の人一開始的提議，被女の人以「人が多いですから、ちょっと……」婉拒，是被否定的干擾項；百貨公司前和學校前在對話中都沒有出現。',
    explanationEn:
      'The woman suggests 「図書館の前はどうですか」, and the man replies 「いいですね」 and confirms 「図書館の前で」, so they meet in front of the library. In front of the station was the man\'s first suggestion, politely declined by the woman with 「人が多いですから、ちょっと……」 (too crowded) — a rejected distractor. The department store and the school never appear in the conversation.',
  },
  {
    id: 'n5-listening-pointo-019',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で女の人と男の人が話しています。' },
      { speaker: '女', text: '森さんは日本の食べ物の中で、何が一番好きですか。おすしですか。' },
      { speaker: '男', text: 'おすしもおいしいですが、一番じゃありません。ラーメンが一番好きです。' },
      { speaker: '女', text: 'へえ、よく食べますか。' },
      { speaker: '男', text: 'はい、週に3回食べます。カレーもよく食べますが、ラーメンのほうが好きです。' },
      { speaker: '女', text: '私はてんぷらが一番好きです。' },
      { speaker: '男', text: 'てんぷらもいいですね。' },
    ],
    question: '男の人は何が一番好きですか。',
    options: ['ラーメン', 'おすし', 'カレー', 'てんぷら'],
    answerIndex: 0,
    explanation:
      '男の人明確說「ラーメンが一番好きです」，最喜歡的是拉麵。「おすし」是女の人的猜測，被他以「一番じゃありません」否定；咖哩他雖然常吃，但他說「ラーメンのほうが好きです」做了比較；「てんぷら」是女の人自己最喜歡的食物，不是男の人的，屬於對應錯誤的干擾項。',
    explanationEn:
      'The man states clearly 「ラーメンが一番好きです」 — ramen is his favorite. Sushi was the woman\'s guess, which he rejects with 「一番じゃありません」 (it is not his number one). He eats curry often, but the comparison 「ラーメンのほうが好きです」 puts ramen above it. Tempura is the woman\'s own favorite, not his, so it is a distractor attached to the wrong person.',
  },
  {
    id: 'n5-listening-pointo-020',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '教室で男の人と女の人が話しています。' },
      { speaker: '男', text: '青木さんは学校の授業の中で、何が一番好きですか。' },
      { speaker: '女', text: '音楽が一番好きです。歌を歌う時間が楽しいですから。' },
      { speaker: '男', text: 'そうですか。数学はどうですか。' },
      { speaker: '女', text: '数学は難しいですから、あまり好きじゃありません。' },
      { speaker: '男', text: '英語は？' },
      { speaker: '女', text: '英語も好きですが、音楽のほうが好きです。' },
    ],
    question: '女の人は何の授業が一番好きですか。',
    options: ['音楽', '数学', '英語', '体育'],
    answerIndex: 0,
    explanation:
      '女の人一開始就說「音楽が一番好きです」，最喜歡的課是音樂。數學被她以「難しいですから、あまり好きじゃありません」明確排除；英語她雖然也喜歡，但她說「音楽のほうが好きです」做了比較，兩者都是對話中出現但被比下去的干擾項；體育在對話中沒有出現。',
    explanationEn:
      'The woman says at the start 「音楽が一番好きです」 — music is her favorite class. Math is clearly excluded with 「難しいですから、あまり好きじゃありません」 (too difficult, she does not like it much). She likes English too, but the comparison 「音楽のほうが好きです」 ranks music higher — both are distractors that appear but lose the comparison. PE never appears in the conversation.',
  },
]

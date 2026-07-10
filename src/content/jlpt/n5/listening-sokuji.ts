import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n5-listening-sokuji-001',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、この近くに銀行はありますか。' },
    ],
    question: '',
    options: [
      'はい、あそこの角にありますよ。',
      '銀行は九時から開きますよ。',
      'いいえ、行きませんでした。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方在問附近「有沒有銀行」，自然的回應是告知位置：「はい、あそこの角にありますよ」（有，就在那個轉角）。第二個選項雖然也提到「銀行」，但回答的是營業時間，答非所問；第三個選項把「ありますか」誤當成問「去不去」，還用過去式回答，完全不合語境。',
    explanationEn:
      'She is asking whether there is a bank nearby, so the natural reply tells her where it is: 「はい、あそこの角にありますよ」 (yes, right at that corner). The second option also mentions a bank but answers about opening hours, missing the question. The third treats 「ありますか」 as if it asked about going somewhere and even replies in the past tense — completely out of context.',
  },
  {
    id: 'n5-listening-sokuji-002',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'あのう、学校の夏休みはいつから始まりますか。' },
    ],
    question: '',
    options: [
      '来週の金曜日からですよ。',
      '夏休みに海へ行きました。',
      'いいえ、始まりませんよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「いつから」是問時間起點的疑問詞問句，要用具體時間回答：「来週の金曜日からですよ」（從下週五開始）。第二個選項雖然用了「夏休み」這個詞，卻在講過去去了海邊，答非所問；第三個選項用「いいえ」回答，但疑問詞問句不能用はい／いいえ回應。',
    explanationEn:
      '「いつから」 asks when something starts, so the answer must give a concrete time: 「来週の金曜日からですよ」 (from next Friday). The second option reuses the word 「夏休み」 but talks about a past trip to the sea, which does not answer the question. The third replies 「いいえ」, but a question-word question cannot be answered with yes or no.',
  },
  {
    id: 'n5-listening-sokuji-003',
    kind: 'listening',
    script: [
      { speaker: '女', text: '今晩、いっしょに駅前の新しいレストランへ行きませんか。' },
    ],
    question: '',
    options: [
      'いいですね。ぜひ行きましょう。',
      'そのレストランはおいしかったですよ。',
      'いいえ、行きたいです。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜ませんか」是邀約（勧誘），接受時用「いいですね。〜ましょう」回應最自然。第二個選項雖然也講到「レストラン」，但用過去式評論味道，等於沒有回答要不要去；第三個選項「いいえ」（拒絕）後面卻接「行きたいです」（想去），肯定與否定方向互相矛盾。',
    explanationEn:
      '「〜ませんか」 is an invitation, and the natural way to accept is 「いいですね。ぜひ行きましょう」 (sounds great, let\'s go). The second option also mentions the restaurant, but it comments on the food in the past tense and never answers whether to go. The third starts with 「いいえ」 (declining) yet continues with 「行きたいです」 (I want to go), so the yes and no directions contradict each other.',
  },
  {
    id: 'n5-listening-sokuji-004',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'すみませんが、この荷物をちょっと持ってくれませんか。' },
    ],
    question: '',
    options: [
      'ええ、いいですよ。',
      'はい、持ってもらいました。',
      '荷物は三つありますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てくれませんか」是請託（依頼），答應時說「ええ、いいですよ」（好啊，可以喔）最自然。第二個選項「持ってもらいました」是「請別人幫我拿了」，授受方向相反，變成回話的人接受了幫忙；第三個選項雖然用了「荷物」，卻在報行李數量，答非所問。',
    explanationEn:
      '「〜てくれませんか」 is a request, and the natural way to agree is 「ええ、いいですよ」 (sure, no problem). The second option 「持ってもらいました」 means "someone carried it for me" — the giving-receiving direction is reversed, as if the responder were the one who received help. The third reuses 「荷物」 but just reports how many bags there are, missing the point.',
  },
  {
    id: 'n5-listening-sokuji-005',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'はじめまして、山田です。どうぞよろしくお願いします。' },
    ],
    question: '',
    options: [
      'こちらこそ、よろしくお願いします。',
      'おかげさまで、元気です。',
      'はい、お願いしました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '初次見面的自我介紹，固定回應是「こちらこそ、よろしくお願いします」（我才要請您多指教）。第二個選項是回答「お元気ですか」時用的寒暄，場合不對；第三個選項雖然沿用了「お願い」，但改成過去式「お願いしました」（我拜託過了），語意完全不通。',
    explanationEn:
      'The set reply to a first-meeting self-introduction is 「こちらこそ、よろしくお願いします」 (the pleasure is mine, please treat me well too). The second option is the phrase you use to answer 「お元気ですか」, so it fits the wrong situation. The third recycles 「お願い」 but turns it into the past tense 「お願いしました」 (I already asked), which makes no sense here.',
  },
  {
    id: 'n5-listening-sokuji-006',
    kind: 'listening',
    script: [
      { speaker: '男', text: '遅れてすみません。電車が来なかったんです。' },
    ],
    question: '',
    options: [
      'いいえ、大丈夫ですよ。',
      '電車はとても速いですね。',
      'どういたしまして。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方為遲到道歉，自然的回應是安撫對方：「いいえ、大丈夫ですよ」（不會，沒關係喔）。第二個選項雖然也提到「電車」，但評論電車很快，答非所問；第三個選項「どういたしまして」是回應「ありがとう」（道謝）用的，不能拿來回應道歉，方向用錯。',
    explanationEn:
      'He is apologizing for being late, so the natural response reassures him: 「いいえ、大丈夫ですよ」 (no, it\'s fine). The second option also mentions the train but comments on how fast trains are, which does not respond to the apology. The third, 「どういたしまして」, is the reply to 「ありがとう」 (thanks), not to an apology — it answers the wrong kind of remark.',
  },
  {
    id: 'n5-listening-sokuji-007',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、ここで写真を撮ってもいいですか。' },
    ],
    question: '',
    options: [
      'ええ、どうぞ。',
      'はい、写真を見ました。',
      'いいえ、撮ってくださいね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てもいいですか」是徵求許可，同意時說「ええ、どうぞ」（可以，請）最自然。第二個選項雖然用了「写真」，卻回答「看過照片了」，答非所問；第三個選項先說「いいえ」（不行）卻又接「撮ってくださいね」（請拍吧），否定與許可互相矛盾，語意不通。',
    explanationEn:
      '「〜てもいいですか」 asks for permission, and the natural way to grant it is 「ええ、どうぞ」 (sure, go ahead). The second option reuses 「写真」 but answers that the speaker looked at a photo, which does not address the question. The third says 「いいえ」 (no) yet follows with 「撮ってくださいね」 (please take one) — the refusal and the permission contradict each other.',
  },
  {
    id: 'n5-listening-sokuji-008',
    kind: 'listening',
    script: [
      { speaker: '男', text: '田中さんは、日曜日はいつも何をしていますか。' },
    ],
    question: '',
    options: [
      'たいてい家で本を読んでいます。',
      'はい、いつもしていますよ。',
      '日曜日は天気がよかったですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「何をしていますか」是問平常做什麼的疑問詞問句，要具體回答活動內容：「たいてい家で本を読んでいます」（多半在家看書）。第二個選項用「はい」回答，但疑問詞問句不能用はい／いいえ回應；第三個選項雖然重複了「日曜日」，卻在聊天氣，答非所問。',
    explanationEn:
      '「何をしていますか」 asks what he usually does, so the reply must name a concrete activity: 「たいてい家で本を読んでいます」 (I usually read books at home). The second option answers 「はい」, but a question-word question cannot be answered with yes or no. The third repeats 「日曜日」 yet talks about the weather, which does not answer the question.',
  },
  {
    id: 'n5-listening-sokuji-009',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、このりんごは一ついくらですか。' },
    ],
    question: '',
    options: [
      '一つ百円です。',
      'りんごを三つください。',
      'はい、とても安いですよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「いくらですか」是問價錢，店員自然的回答是報價：「一つ百円です」（一個一百日圓）。第二個選項雖然也用了「りんご」，但那是客人點購時說的話，立場顛倒了；第三個選項用「はい」回應疑問詞問句，而且只說很便宜、沒報價錢，答非所問。',
    explanationEn:
      '「いくらですか」 asks the price, so the shopkeeper naturally quotes it: 「一つ百円です」 (one hundred yen each). The second option also uses 「りんご」, but it is what a customer says when ordering — the roles are flipped. The third answers 「はい」 to a question-word question and only says the apples are cheap without ever giving a price.',
  },
  {
    id: 'n5-listening-sokuji-010',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'ちょっと寒いですね。窓を閉めましょうか。' },
    ],
    question: '',
    options: [
      'はい、お願いします。',
      '窓から海が見えますよ。',
      'いいえ、閉めましょう。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜ましょうか」在這裡是主動提議幫忙（要不要幫你關窗），接受時說「はい、お願いします」（好，麻煩你了）。第二個選項雖然也講到「窓」，卻在介紹窗外看得到海，答非所問；第三個選項先用「いいえ」拒絕、後面卻說「閉めましょう」（關吧），肯定否定方向互相矛盾。',
    explanationEn:
      '「〜ましょうか」 here is an offer to help — shall I close the window? — and the natural way to accept is 「はい、お願いします」 (yes, please). The second option also mentions 「窓」 but describes the ocean view from the window, missing the point. The third begins with 「いいえ」 to refuse yet then says 「閉めましょう」 (let\'s close it), so the yes and no directions contradict each other.',
  },
  {
    id: 'n5-listening-sokuji-011',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、今日はお先に失礼します。また明日。' },
    ],
    question: '',
    options: [
      'おつかれさまでした。',
      'いってらっしゃい。',
      'はい、失礼しました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '同事說「お先に失礼します」（我先走了）下班離開時，留下來的人要回「おつかれさまでした」（辛苦了）。第二個選項「いってらっしゃい」是送家人或同事「外出之後還會回來」時說的，用在下班道別場合不對；第三個選項沿用「失礼」一詞卻說成道歉的「失礼しました」，答非所問。',
    explanationEn:
      'When a coworker leaves for the day saying 「お先に失礼します」 (I\'m heading out first), the person staying replies 「おつかれさまでした」 (thanks for your hard work). The second option 「いってらっしゃい」 is for seeing off someone who will come back later, so it does not fit an end-of-day goodbye. The third recycles 「失礼」 but turns it into the apology 「失礼しました」, which answers the wrong thing.',
  },
  {
    id: 'n5-listening-sokuji-012',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'あのう、これ、京都のお土産です。どうぞ。' },
    ],
    question: '',
    options: [
      'わあ、ありがとうございます。',
      'どういたしまして。',
      'はい、あげますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方遞上伴手禮說「どうぞ」，收禮的人自然要道謝：「わあ、ありがとうございます」。第二個選項「どういたしまして」是被人道謝之後的回話，立場顛倒成送禮的一方；第三個選項「あげます」是「我給你」，授受方向相反——收禮的人應該說もらいます，不會說あげます。',
    explanationEn:
      'He is handing over a souvenir with 「どうぞ」, so the receiver naturally says thank you: 「わあ、ありがとうございます」. The second option 「どういたしまして」 is what you say after being thanked, which flips the roles as if the responder were the giver. The third, 「あげます」, means "I\'ll give it to you" — the giving direction is reversed; the receiver would say もらいます, never あげます.',
  },
  {
    id: 'n5-listening-sokuji-013',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'ただいま。今日は仕事がたくさんあって、とても疲れました。' },
    ],
    question: '',
    options: [
      'おかえりなさい。おつかれさまでした。',
      'いってらっしゃい。気をつけてね。',
      '仕事は九時から始まりますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '家人說「ただいま」（我回來了）進門，固定回應是「おかえりなさい」（歡迎回來），對方說很累再加一句「おつかれさまでした」慰勞最自然。第二個選項「いってらっしゃい」是送人「出門」時說的，方向剛好相反；第三個選項雖然沿用「仕事」一詞，卻在報上班時間，答非所問。',
    explanationEn:
      'When a family member comes home saying 「ただいま」 (I\'m home), the set reply is 「おかえりなさい」 (welcome back), and since she says she is tired, adding 「おつかれさまでした」 to sympathize is most natural. The second option 「いってらっしゃい」 is said when seeing someone off as they leave — the opposite direction. The third recycles 「仕事」 but reports what time work starts, missing the point.',
  },
  {
    id: 'n5-listening-sokuji-014',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'じゃ、いってきます。夕方の六時ごろに帰りますね。' },
    ],
    question: '',
    options: [
      'いってらっしゃい。気をつけて。',
      'はい、おかえりなさい。',
      '夕方から雨が降りましたよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方說「いってきます」（我出門了），留在家裡的人固定回「いってらっしゃい」（路上小心、慢走）。第二個選項「おかえりなさい」是迎接「回到家」的人說的，用在出門時方向相反；第三個選項雖然重複了「夕方」一詞，卻用過去式在報天氣，答非所問。',
    explanationEn:
      'When someone says 「いってきます」 (I\'m off), the person staying home replies with the set phrase 「いってらっしゃい」 (take care, see you later). The second option 「おかえりなさい」 welcomes someone who has just come home, so using it as he leaves points the wrong way. The third repeats the word 「夕方」 but reports past weather, which does not respond to him at all.',
  },
  {
    id: 'n5-listening-sokuji-015',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'あ、鈴木さん、お久しぶりですね。お元気でしたか。' },
    ],
    question: '',
    options: [
      'ええ、おかげさまで元気でしたよ。',
      'はじめまして、鈴木です。',
      '元気な人が好きですよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '久別重逢被問「お元気でしたか」（近來好嗎），自然的回應是「ええ、おかげさまで元気でしたよ」（託您的福，一直都好）。第二個選項「はじめまして」是初次見面的招呼，但對方都說「久しぶり」了，表示兩人早就認識，場合完全不對；第三個選項雖然沿用「元気」一詞，卻在講喜歡有活力的人，答非所問。',
    explanationEn:
      'Asked 「お元気でしたか」 (have you been well?) after a long time apart, the natural reply is 「ええ、おかげさまで元気でしたよ」 (yes, thanks to you I\'ve been fine). The second option 「はじめまして」 is a first-meeting greeting, but she already said 「久しぶり」, showing they know each other — completely the wrong occasion. The third recycles 「元気」 but talks about liking energetic people, missing the point.',
  },
  {
    id: 'n5-listening-sokuji-016',
    kind: 'listening',
    script: [
      { speaker: '男', text: '今日はいい天気ですね。あたたかくて気持ちがいいですね。' },
    ],
    question: '',
    options: [
      'そうですね。ほんとうにいい天気ですね。',
      'いいえ、今日は月曜日ですよ。',
      '天気予報は毎朝見ますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「いい天気ですね」是以「ね」尋求同感的天氣寒暄，回應時附和對方：「そうですね。ほんとうにいい天気ですね」最自然。第二個選項用「いいえ」回答，還把話題聽成在問星期幾，答非所問；第三個選項雖然沿用「天気」一詞，卻在講自己每天早上看氣象預報的習慣，沒有回應對方的寒暄。',
    explanationEn:
      '「いい天気ですね」 is weather small talk where the final ね invites agreement, so the natural reply agrees: 「そうですね。ほんとうにいい天気ですね」 (yes, it really is lovely). The second option answers 「いいえ」 and reacts as if asked what day of the week it is, missing the point. The third recycles 「天気」 but talks about the habit of watching the forecast every morning, never responding to the small talk.',
  },
  {
    id: 'n5-listening-sokuji-017',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、この図書館は何時まで開いていますか。' },
    ],
    question: '',
    options: [
      '夜の八時までですよ。',
      '朝の九時から開きますよ。',
      'はい、開いていますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「何時まで」是問營業「到幾點」，要用「〜まで」的時間點回答：「夜の八時までですよ」（開到晚上八點）。第二個選項雖然也在講開館時間，但回答的是「から」（幾點開始開門），方向和問題相反；第三個選項用「はい」回應疑問詞問句，而且完全沒報時間，答非所問。',
    explanationEn:
      '「何時まで」 asks until what time the library stays open, so the answer needs a 「〜まで」 time: 「夜の八時までですよ」 (until eight at night). The second option also talks about library hours, but it gives the opening time with 「から」 — the opposite of what was asked. The third answers 「はい」 to a question-word question and never gives any time at all.',
  },
  {
    id: 'n5-listening-sokuji-018',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'すみません、二人なんですが、席は空いていますか。' },
    ],
    question: '',
    options: [
      'はい、こちらのテーブルへどうぞ。',
      '席は全部で五十ありますよ。',
      'いいえ、二人で来ました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '客人問「席は空いていますか」（有空位嗎），店員自然的回應是帶位：「はい、こちらのテーブルへどうぞ」（有的，這邊的桌子請）。第二個選項雖然沿用「席」一詞，卻在報店裡總共有幾個位子，答非所問；第三個選項把「二人」聽成在問來了幾個人，立場顛倒成客人這一方，語意不通。',
    explanationEn:
      'The customer asks 「席は空いていますか」 (do you have a free table?), so the staff naturally shows them in: 「はい、こちらのテーブルへどうぞ」 (yes, this table please). The second option recycles 「席」 but reports the total number of seats in the restaurant, missing the point. The third mishears 「二人」 as a question about how many people came and answers as if it were the customer — the roles are flipped and it makes no sense.',
  },
  {
    id: 'n5-listening-sokuji-019',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'もしもし、田中ですが、山田さんはいらっしゃいますか。' },
    ],
    question: '',
    options: [
      'はい、少々お待ちください。',
      'はい、田中さんはいますよ。',
      'いいえ、電話番号を知りません。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '電話裡對方報上姓名並要找山田さん，接電話的人自然回「はい、少々お待ちください」（好的，請稍等），表示去請山田さん來聽。第二個選項把打電話來的「田中さん」誤當成要找的人，對象聽錯了；第三個選項回答「不知道電話號碼」，但對方是要找人、不是在問號碼，答非所問。',
    explanationEn:
      'The caller gives her name and asks for 山田さん, so the person answering naturally says 「はい、少々お待ちください」 (one moment, please) while going to get him. The second option mixes up the people — it treats the caller, 田中さん, as the person being asked for. The third answers about not knowing a phone number, but the caller wants a person, not a number, so it misses the question.',
  },
  {
    id: 'n5-listening-sokuji-020',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'あのう、すみません。駅までどうやって行きますか。' },
    ],
    question: '',
    options: [
      'この道をまっすぐ行ってください。',
      'はい、行きますよ。',
      '駅で友達に会いましたよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「どうやって行きますか」是問去車站的方法或路線，要具體指路：「この道をまっすぐ行ってください」（沿這條路直走）。第二個選項用「はい」回答，但疑問詞問句不能用はい／いいえ回應，而且沒有說明走法；第三個選項雖然沿用「駅」一詞，卻用過去式在講在車站遇到朋友的事，答非所問。',
    explanationEn:
      '「どうやって行きますか」 asks how to get to the station, so the reply must give actual directions: 「この道をまっすぐ行ってください」 (go straight along this street). The second option answers 「はい」, but a question-word question cannot be answered with yes or no, and it explains nothing about the route. The third recycles 「駅」 but tells a past-tense story about meeting a friend at the station, missing the question.',
  },
  {
    id: 'n5-listening-sokuji-021',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'そのかばん、すてきですね。色もとてもかわいいです。' },
    ],
    question: '',
    options: [
      'ありがとうございます。母にもらいました。',
      'どういたしまして。',
      'かばんの中に本がありますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '被稱讚包包很好看，自然的回應是先道謝再補一句來歷：「ありがとうございます。母にもらいました」（謝謝，這是媽媽給我的）。第二個選項「どういたしまして」是「被道謝」之後說的話，這裡對方是稱讚不是道謝，立場顛倒；第三個選項雖然沿用「かばん」一詞，卻在報包包裡裝了什麼，答非所問。',
    explanationEn:
      'When your bag is complimented, the natural reply is to thank the person and add a little background: 「ありがとうございます。母にもらいました」 (thank you, my mother gave it to me). The second option 「どういたしまして」 is what you say after being thanked, but this is a compliment, not thanks — the roles are flipped. The third recycles 「かばん」 but just reports what is inside the bag, missing the point.',
  },
  {
    id: 'n5-listening-sokuji-022',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'もしもし、すみません。電車が遅れているので、少し遅れます。' },
    ],
    question: '',
    options: [
      'わかりました。気をつけて来てくださいね。',
      '遅れてすみませんでした。',
      '電車はとても便利ですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方打電話來說電車誤點、自己會晚一點到，聽的人自然回「わかりました。気をつけて来てくださいね」（知道了，路上小心）。第二個選項「遅れてすみませんでした」是「遲到的本人」該說的道歉，立場顛倒成自己在道歉；第三個選項雖然沿用「電車」一詞，卻在評論電車很方便，答非所問。',
    explanationEn:
      'He calls to say the train is delayed and he will be a little late, so the listener naturally replies 「わかりました。気をつけて来てくださいね」 (got it, please come safely). The second option 「遅れてすみませんでした」 is the apology the late person themselves would give — the roles are flipped, as if the listener were apologizing. The third recycles 「電車」 but comments that trains are convenient, missing the point.',
  },
  {
    id: 'n5-listening-sokuji-023',
    kind: 'listening',
    script: [
      { speaker: '女', text: '田中さん、こちらはわたしの友達の佐藤さんです。' },
    ],
    question: '',
    options: [
      'はじめまして。田中です。よろしくお願いします。',
      'お久しぶりですね。お元気でしたか。',
      '友達はたくさんいますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '朋友介紹「こちらは友達の佐藤さんです」，被介紹認識新朋友時要說「はじめまして。田中です。よろしくお願いします」自我介紹並請對方多指教。第二個選項「お久しぶり」是對好久不見的舊識說的，但這是經人介紹的初次見面，場合不對；第三個選項雖然沿用「友達」一詞，卻在講自己朋友很多，答非所問。',
    explanationEn:
      'A friend introduces someone with 「こちらはわたしの友達の佐藤さんです」, so the person being introduced replies 「はじめまして。田中です。よろしくお願いします」 — introducing himself and asking for good relations. The second option 「お久しぶりですね」 is for an old acquaintance you have not seen in a while, but this is a first meeting through an introduction — the wrong occasion. The third recycles 「友達」 but brags about having many friends, missing the point.',
  },
  {
    id: 'n5-listening-sokuji-024',
    kind: 'listening',
    script: [
      { speaker: '男', text: '昨日から頭が痛くて、今日は会社を休みました。' },
    ],
    question: '',
    options: [
      'それはいけませんね。お大事に。',
      'おめでとうございます。',
      '頭がいいですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方說頭痛請假在家休息，慰問時說「それはいけませんね。お大事に」（那可不好，請多保重）最自然，「お大事に」是對身體不舒服的人的固定慰問語。第二個選項「おめでとうございます」是道賀用語，對生病的人說完全不合場合；第三個選項雖然沿用「頭」一詞，「頭がいい」卻是稱讚人聰明，語意完全不同，答非所問。',
    explanationEn:
      'He says he has a headache and took the day off, so the natural reply is sympathy: 「それはいけませんね。お大事に」 (that\'s too bad — take care of yourself). 「お大事に」 is the set phrase for someone who is unwell. The second option 「おめでとうございます」 offers congratulations, completely wrong for illness. The third recycles the word 「頭」, but 「頭がいいですね」 praises someone for being smart — a totally different meaning, missing the point.',
  },
]

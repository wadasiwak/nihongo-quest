import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n5-listening-kadai-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'デパートで女の人と店員が話しています。' },
      { speaker: '女', text: 'すみません、そのかばんを見せてください。' },
      { speaker: '男', text: 'はい、どうぞ。色は黒と白と赤がありますよ。' },
      { speaker: '女', text: 'そうですね。黒はちょっと……。白はありますか。' },
      { speaker: '男', text: 'すみません、白は今ありません。' },
      { speaker: '女', text: 'じゃあ、赤をください。' },
    ],
    question: '女の人はどのかばんを買いますか。',
    options: ['赤いかばん', '白いかばん', '黒いかばん', '青いかばん'],
    answerIndex: 0,
    explanation:
      '女の人最後說「赤をください」，所以買紅色的包。黑色被她自己以「黒はちょっと……」婉拒；白色雖然她想要，但店員說「白は今ありません」（白色現在沒貨），是典型「出現過但被否定」的干擾項；藍色在對話中完全沒出現。',
    explanationEn:
      'The woman ends by saying 「赤をください」, so she buys the red bag. She turned down black herself with 「黒はちょっと……」. She did want white, but the clerk said 「白は今ありません」 (white is out of stock right now) — a classic distractor that is mentioned and then ruled out. Blue never appears in the conversation.',
  },
  {
    id: 'n5-listening-kadai-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で男の人と女の人が話しています。' },
      { speaker: '男', text: '明日、いっしょに映画を見ませんか。' },
      { speaker: '女', text: 'いいですね。何時に会いましょうか。' },
      { speaker: '男', text: '映画は3時からです。2時半はどうですか。' },
      { speaker: '女', text: 'すみません、2時半はちょっと……。2時50分はどうですか。' },
      { speaker: '男', text: 'うーん、それは遅いですね。じゃあ、2時40分にしましょう。' },
      { speaker: '女', text: 'はい、わかりました。' },
    ],
    question: '二人は明日、何時に会いますか。',
    options: ['2時40分', '2時半', '2時50分', '3時'],
    answerIndex: 0,
    explanation:
      '男の人最後提議「2時40分にしましょう」，女の人回答「わかりました」，所以見面時間是2點40分。2點半被女の人以「ちょっと……」婉拒；2點50分被男の人說「それは遅いですね」否定；3點是電影開始的時間，不是見面時間。',
    explanationEn:
      'The man finally proposes 「2時40分にしましょう」 and the woman answers 「わかりました」, so they will meet at 2:40. The woman politely declined 2:30 with 「ちょっと……」; the man rejected 2:50 as 「それは遅いですね」 (too late); and 3:00 is when the movie starts, not the meeting time.',
  },
  {
    id: 'n5-listening-kadai-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'レストランで女の人と店の人が話しています。' },
      { speaker: '女', text: 'すみません、サンドイッチとコーヒーをください。' },
      { speaker: '男', text: 'すみません、サンドイッチは今ありません。カレーはいかがですか。' },
      { speaker: '女', text: 'じゃあ、カレーをください。' },
      { speaker: '男', text: 'はい。飲み物はコーヒーでいいですか。' },
      { speaker: '女', text: 'あ、コーヒーじゃなくて、紅茶をお願いします。' },
      { speaker: '男', text: 'はい、カレーと紅茶ですね。' },
    ],
    question: '女の人は何を注文しますか。',
    options: ['カレーと紅茶', 'サンドイッチとコーヒー', 'カレーとコーヒー', 'サンドイッチと紅茶'],
    answerIndex: 0,
    explanation:
      '店員最後確認「カレーと紅茶ですね」，這就是最終的訂單。三明治雖然一開始被點了，但店員說「サンドイッチは今ありません」（現在沒有）；咖啡也被女の人自己用「コーヒーじゃなくて、紅茶をお願いします」更正掉了，兩者都是被否定的干擾項。',
    explanationEn:
      'The waiter confirms the final order at the end: 「カレーと紅茶ですね」 — curry and black tea. The sandwich was ordered first, but the waiter said 「サンドイッチは今ありません」 (none available today), and the woman herself replaced the coffee with 「コーヒーじゃなくて、紅茶をお願いします」. Both are distractors that get cancelled during the conversation.',
  },
  {
    id: 'n5-listening-kadai-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '道で女の人が男の人に聞いています。' },
      { speaker: '女', text: 'すみません、駅はどこですか。' },
      { speaker: '男', text: '駅ですか。この道をまっすぐ行ってください。' },
      { speaker: '女', text: 'まっすぐですね。' },
      { speaker: '男', text: 'はい。それから、二つ目の角を右に曲がってください。左じゃないですよ、右です。' },
      { speaker: '女', text: '二つ目の角を右ですね。ありがとうございます。' },
    ],
    question: '女の人はどうやって駅へ行きますか。',
    options: [
      'まっすぐ行って、二つ目の角を右に曲がる',
      'まっすぐ行って、二つ目の角を左に曲がる',
      'まっすぐ行って、一つ目の角を右に曲がる',
      '一つ目の角を左に曲がって、まっすぐ行く',
    ],
    answerIndex: 0,
    explanation:
      '男の人指路說「この道をまっすぐ行ってください」「二つ目の角を右に曲がってください」，所以是直走後在第二個轉角右轉。「左」在對話中被明確否定：「左じゃないですよ、右です」，是課題理解常見的更正型干擾項；「一つ目の角」（第一個轉角）對話中沒有提到。',
    explanationEn:
      'The man gives directions: 「この道をまっすぐ行ってください」 and 「二つ目の角を右に曲がってください」 — go straight, then turn right at the second corner. "Left" is explicitly denied in the dialogue with 「左じゃないですよ、右です」, a typical correction-style distractor in task-comprehension questions, and the first corner is never mentioned at all.',
  },
  {
    id: 'n5-listening-kadai-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '教室で男の人と女の人が話しています。' },
      { speaker: '男', text: 'すみません、消しゴムを貸してください。' },
      { speaker: '女', text: 'いいですよ。あ、ペンもいりますか。' },
      { speaker: '男', text: 'ペンはありますから、大丈夫です。でも、辞書もいいですか。' },
      { speaker: '女', text: 'すみません、辞書は今使っています。' },
      { speaker: '男', text: 'そうですか。じゃあ、消しゴムだけお願いします。' },
      { speaker: '女', text: 'はい、どうぞ。' },
    ],
    question: '男の人は何を借りますか。',
    options: ['消しゴム', '辞書', 'ペン', '消しゴムと辞書'],
    answerIndex: 0,
    explanation:
      '男の人最後說「消しゴムだけお願いします」，所以只借橡皮擦。辭典雖然他想借，但女の人說「辞書は今使っています」（正在用）而借不到；筆是女の人主動提議，被男の人以「ペンはありますから、大丈夫です」拒絕。「消しゴムと辞書」漏掉了辭典被拒的資訊，也是錯的。',
    explanationEn:
      'The man finally says 「消しゴムだけお願いします」, so he borrows only the eraser. He wanted the dictionary too, but the woman said 「辞書は今使っています」 (she is using it right now), so he cannot have it. The pen was her own offer, which he declined with 「ペンはありますから、大丈夫です」. The option with both eraser and dictionary misses that the dictionary was refused.',
  },
  {
    id: 'n5-listening-kadai-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で男の人と女の人が話しています。' },
      { speaker: '男', text: '明日の天気はどうですか。' },
      { speaker: '女', text: '午前は晴れですが、午後から雨ですよ。' },
      { speaker: '男', text: 'そうですか。明日は午後から出かけますから、傘を持って行きます。' },
      { speaker: '女', text: '帽子もいりますか。' },
      { speaker: '男', text: '午後は雨ですから、帽子はいりません。傘だけでいいです。' },
    ],
    question: '男の人は明日、何を持って行きますか。',
    options: ['傘', '帽子', '傘と帽子', '何も持って行かない'],
    answerIndex: 0,
    explanation:
      '女の人說明天「午後から雨ですよ」，男の人下午才出門，所以說「傘を持って行きます」，最後又確認「傘だけでいいです」，只帶雨傘。帽子是女の人主動問的，被男の人以「帽子はいりません」明確否定，是被否定的干擾項；「傘と帽子」多算了帽子，同樣不對。',
    explanationEn:
      'The woman says 「午後から雨ですよ」 (rain from the afternoon), and since the man goes out in the afternoon he says 「傘を持って行きます」 and then confirms 「傘だけでいいです」 — he takes only the umbrella. The hat was the woman\'s suggestion, which he clearly rejects with 「帽子はいりません」, so both the hat option and the umbrella-plus-hat option are wrong.',
  },
  {
    id: 'n5-listening-kadai-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '駅で女の人と駅の人が話しています。' },
      { speaker: '女', text: 'すみません、さくら公園へ行きたいです。電車で行きますか。' },
      { speaker: '男', text: '電車は速いですが、今日は止まっています。バスで行ってください。' },
      { speaker: '女', text: 'バスですね。何番のバスですか。' },
      { speaker: '男', text: '3番です。2番はさくら病院へ行きますから、気をつけてください。' },
      { speaker: '女', text: '3番のバスですね。ありがとうございます。' },
    ],
    question: '女の人はどうやってさくら公園へ行きますか。',
    options: ['3番のバスで行く', '2番のバスで行く', '電車で行く', '歩いて行く'],
    answerIndex: 0,
    explanation:
      '站務員說「3番です」，所以搭3號公車去櫻花公園。電車雖然快，但被「今日は止まっています」（今天停駛）否定；2號公車在對話中出現過，但站務員提醒「2番はさくら病院へ行きます」，是去醫院的車，屬於出現過但方向錯誤的干擾項；走路去對話中沒有提到。',
    explanationEn:
      'The station staff says 「3番です」, so she takes bus number 3 to Sakura Park. The train would be fast, but it is ruled out with 「今日は止まっています」 (not running today). Bus number 2 does appear in the dialogue, but the staff warns 「2番はさくら病院へ行きます」 — it goes to the hospital, so it is a distractor with the wrong destination. Walking is never mentioned.',
  },
  {
    id: 'n5-listening-kadai-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '教室で先生と男の学生が話しています。' },
      { speaker: '女', text: '田中さん、宿題を出してください。' },
      { speaker: '男', text: 'すみません、先生。今日、宿題を家に忘れました。' },
      { speaker: '女', text: 'そうですか。じゃあ、明日の朝、出してください。' },
      { speaker: '男', text: '明日の朝ですね。わかりました。' },
      { speaker: '女', text: 'それから、来週テストがありますから、本の20ページを読んでください。' },
      { speaker: '男', text: 'はい、わかりました。' },
    ],
    question: '男の学生は明日の朝、何をしますか。',
    options: ['宿題を出す', 'テストを受ける', '本の20ページを読む', '宿題を家に持って帰る'],
    answerIndex: 0,
    explanation:
      '學生今天忘記帶作業，老師說「明日の朝、出してください」，所以他明天早上要做的事是交作業。考試是「来週」（下週）才有，時間點不對；「本の20ページを読んでください」是為下週考試做的準備，也不是明天早上要做的事，兩者都是對話中出現過但時間錯置的干擾項。',
    explanationEn:
      'The student forgot his homework today, and the teacher says 「明日の朝、出してください」, so what he does tomorrow morning is hand in the homework. The test is 「来週」 (next week), so the timing is wrong, and 「本の20ページを読んでください」 is preparation for that test, not a task for tomorrow morning. Both are distractors that appear in the dialogue but at the wrong time.',
  },
  {
    id: 'n5-listening-kadai-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '男の人と女の人が電話で話しています。' },
      { speaker: '男', text: 'もしもし、山田さん。今、駅に着きました。' },
      { speaker: '女', text: 'あ、すみません。今から家を出ますから、少し待ってください。' },
      { speaker: '男', text: 'わかりました。じゃあ、駅の中の喫茶店で待っています。' },
      { speaker: '女', text: '駅の前じゃなくて、中の喫茶店ですね。' },
      { speaker: '男', text: 'はい、そうです。コーヒーを飲んで待っていますよ。' },
    ],
    question: '男の人はどこで待ちますか。',
    options: ['駅の中の喫茶店', '駅の前', '女の人の家', 'バス停'],
    answerIndex: 0,
    explanation:
      '男の人說「駅の中の喫茶店で待っています」，所以他在車站裡面的咖啡店等。「駅の前」（車站前面）在女の人的確認句「駅の前じゃなくて、中の喫茶店ですね」中出現，但被「じゃなくて」明確否定，是更正型干擾項；女の人的家和公車站在對話中都沒有被提到。',
    explanationEn:
      'The man says 「駅の中の喫茶店で待っています」, so he waits at the coffee shop inside the station. "In front of the station" does appear, but only in the woman\'s confirmation 「駅の前じゃなくて、中の喫茶店ですね」, where 「じゃなくて」 explicitly rules it out — a correction-style distractor. The woman\'s house and the bus stop are never mentioned.',
  },
  {
    id: 'n5-listening-kadai-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '病院で医者と女の人が話しています。' },
      { speaker: '男', text: 'どうしましたか。' },
      { speaker: '女', text: '昨日から頭が痛いです。' },
      { speaker: '男', text: 'そうですか。じゃあ、薬を出しますから、一日に3回飲んでください。' },
      { speaker: '女', text: 'ご飯の前に飲みますか。' },
      { speaker: '男', text: 'いいえ、ご飯の後で飲んでください。それから、今日はお風呂に入らないでくださいね。' },
      { speaker: '女', text: 'はい、わかりました。' },
    ],
    question: '女の人は薬をいつ飲みますか。',
    options: ['ご飯の後で、一日に3回', 'ご飯の前に、一日に3回', 'ご飯の後で、一日に2回', '寝る前に、一日に1回'],
    answerIndex: 0,
    explanation:
      '醫生說「一日に3回飲んでください」和「ご飯の後で飲んでください」，所以是飯後、一天三次。「ご飯の前」是女の人自己問的，被醫生以「いいえ」明確否定，是典型干擾項；「一日に2回」「一日に1回」的次數與對話中的「3回」不符，睡前服藥更是完全沒有提到。',
    explanationEn:
      'The doctor says 「一日に3回飲んでください」 and 「ご飯の後で飲んでください」, so she takes the medicine after meals, three times a day. "Before meals" was the woman\'s own question, which the doctor flatly denies with 「いいえ」 — a classic distractor. Twice or once a day contradicts the 「3回」 in the dialogue, and taking it before bed is never mentioned at all.',
  },
  {
    id: 'n5-listening-kadai-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '郵便局で男の人と郵便局の人が話しています。' },
      { speaker: '男', text: 'すみません、この手紙をアメリカに送りたいです。' },
      { speaker: '女', text: 'はい。飛行機ですか、船ですか。' },
      { speaker: '男', text: '船は安いですか。' },
      { speaker: '女', text: 'はい、安いですが、一か月かかりますよ。飛行機は一週間です。' },
      { speaker: '男', text: '一か月は長いですね。じゃあ、飛行機でお願いします。' },
      { speaker: '女', text: 'はい、わかりました。' },
    ],
    question: '男の人は手紙をどうやって送りますか。',
    options: ['飛行機で送る', '船で送る', '電車で送る', '自分で持って行く'],
    answerIndex: 0,
    explanation:
      '男の人最後說「飛行機でお願いします」，所以用航空郵件寄。船運雖然便宜，但要花一個月，被男の人以「一か月は長いですね」否定，是出現過但被拒絕的干擾項；電車寄送和自己送去在對話中完全沒有出現。',
    explanationEn:
      'The man finally says 「飛行機でお願いします」, so he sends the letter by airmail. Sea mail is cheaper but takes a month, and he rejects it with 「一か月は長いですね」 (a month is too long) — a distractor that is mentioned and then turned down. Sending it by train or delivering it himself never comes up in the conversation.',
  },
  {
    id: 'n5-listening-kadai-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '花屋で女の人と店の人が話しています。' },
      { speaker: '女', text: 'すみません、母の誕生日に花を買いたいです。' },
      { speaker: '男', text: 'そうですか。この赤い花はどうですか。人気がありますよ。' },
      { speaker: '女', text: 'きれいですね。でも、母は黄色が好きですから、その黄色い花をください。' },
      { speaker: '男', text: 'はい。何本にしますか。3本ですか、5本ですか。' },
      { speaker: '女', text: '5本お願いします。' },
      { speaker: '男', text: 'はい、黄色い花を5本ですね。' },
    ],
    question: '女の人はどの花を買いますか。',
    options: ['黄色い花を5本', '赤い花を5本', '黄色い花を3本', '赤い花を3本'],
    answerIndex: 0,
    explanation:
      '店員最後確認「黄色い花を5本ですね」，這就是最終購買的內容。紅花是店員推薦的，但女の人說媽媽喜歡黃色，等於婉拒了紅花，是被更正的干擾項；「3本」是店員問句裡出現的數字，被女の人「5本お願いします」的回答排除了。',
    explanationEn:
      'The shopkeeper\'s final confirmation 「黄色い花を5本ですね」 states exactly what she buys: five yellow flowers. The red flowers were the shopkeeper\'s recommendation, but the woman effectively declines them by saying her mother likes yellow — a corrected distractor. "Three" only appears in the shopkeeper\'s question and is ruled out by her answer 「5本お願いします」.',
  },
  {
    id: 'n5-listening-kadai-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で男の人と女の人が話しています。' },
      { speaker: '男', text: 'このシャツ、洗いたいです。洗濯機で洗ってもいいですか。' },
      { speaker: '女', text: 'ちょっと見せてください。ああ、これは洗濯機はだめですよ。' },
      { speaker: '男', text: 'じゃあ、どうしますか。' },
      { speaker: '女', text: '手で洗ってください。お湯じゃなくて、冷たい水で洗ってくださいね。' },
      { speaker: '男', text: '冷たい水で、手で洗いますね。わかりました。' },
    ],
    question: '男の人はシャツをどうやって洗いますか。',
    options: ['冷たい水で手で洗う', '洗濯機で洗う', 'お湯で手で洗う', '店に持って行く'],
    answerIndex: 0,
    explanation:
      '女の人指示「手で洗ってください」「冷たい水で洗ってください」，男の人也複誦確認，所以是用冷水手洗。洗衣機被女の人以「洗濯機はだめですよ」明確否定；「お湯」（熱水）也在「お湯じゃなくて」中被更正掉，兩者都是典型的被否定干擾項；送去店裡洗完全沒有提到。',
    explanationEn:
      'The woman instructs 「手で洗ってください」 and 「冷たい水で洗ってください」, and the man repeats it back, so he washes the shirt by hand in cold water. The washing machine is clearly forbidden with 「洗濯機はだめですよ」, and hot water is corrected away with 「お湯じゃなくて」 — both are typical rejected distractors. Taking the shirt to a shop is never mentioned.',
  },
  {
    id: 'n5-listening-kadai-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '図書館で男の学生と図書館の人が話しています。' },
      { speaker: '男', text: 'すみません、この本を3冊借りたいです。' },
      { speaker: '女', text: 'はい。あ、すみません、この料理の本は今日は貸すことができません。' },
      { speaker: '男', text: 'そうですか。じゃあ、この2冊をお願いします。いつまでですか。' },
      { speaker: '女', text: '二週間です。来週の金曜日じゃなくて、再来週の金曜日までに返してください。' },
      { speaker: '男', text: '再来週の金曜日ですね。わかりました。' },
    ],
    question: '男の学生は本を何冊借りますか。',
    options: ['2冊', '3冊', '1冊', '4冊'],
    answerIndex: 0,
    explanation:
      '學生原本想借3本，但館員說其中那本料理書「今日は貸すことができません」（今天不能外借），於是他改說「この2冊をお願いします」，最後借的是2本。「3冊」是一開始說的數字，已被更正，是典型干擾項；1本和4本在對話中都沒有出現。',
    explanationEn:
      'The student first wanted to borrow three books, but the librarian says the cooking book 「今日は貸すことができません」 (cannot be checked out today), so he changes to 「この2冊をお願いします」 — he borrows two books. "Three" is the initial number that got corrected, a classic distractor, and one or four books never appear in the dialogue.',
  },
  {
    id: 'n5-listening-kadai-015',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で女の人が男の人と話しています。女の人はこれからコンビニへ行きます。' },
      { speaker: '女', text: 'コンビニへ行きますが、何かいりますか。' },
      { speaker: '男', text: 'じゃあ、お茶を一本お願いします。あ、パンもお願いします。' },
      { speaker: '女', text: 'お茶とパンですね。牛乳はまだありますか。' },
      { speaker: '男', text: '牛乳は昨日買いましたから、大丈夫です。' },
      { speaker: '女', text: 'わかりました。じゃあ、行ってきます。' },
    ],
    question: '女の人はコンビニで何を買いますか。',
    options: ['お茶とパン', 'お茶と牛乳', 'パンと牛乳', 'お茶とパンと牛乳'],
    answerIndex: 0,
    explanation:
      '男の人拜託的是「お茶を一本」和「パン」，女の人也複誦「お茶とパンですね」確認，所以買茶和麵包。牛奶是女の人主動問的，被男の人以「昨日買いましたから、大丈夫です」（昨天買了，不用）否定，是出現過但被排除的干擾項；含牛奶的其他選項因此都不對。',
    explanationEn:
      'The man asks for 「お茶を一本」 and 「パン」, and the woman confirms by repeating 「お茶とパンですね」, so she buys tea and bread. Milk was her own question, and the man declines it with 「昨日買いましたから、大丈夫です」 (he bought some yesterday, so it is not needed) — a mentioned-but-excluded distractor, which makes every option containing milk wrong.',
  },
  {
    id: 'n5-listening-kadai-016',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '映画館で男の人が店の人と話しています。' },
      { speaker: '男', text: 'すみません、7時の映画のチケットを2枚ください。' },
      { speaker: '女', text: 'はい。席は前と後ろ、どちらがいいですか。' },
      { speaker: '男', text: '前の席をお願いします。' },
      { speaker: '女', text: 'すみません、前の席はもうありません。後ろの席と真ん中の席がありますが。' },
      { speaker: '男', text: 'そうですか。後ろは見えませんから、真ん中をお願いします。' },
      { speaker: '女', text: 'はい、真ん中の席を2枚ですね。' },
    ],
    question: '男の人はどの席にしますか。',
    options: ['真ん中の席', '前の席', '後ろの席', '一番後ろの席'],
    answerIndex: 0,
    explanation:
      '男の人最後說「真ん中をお願いします」，店員也確認「真ん中の席を2枚ですね」，所以選中間的位子。前排是他原本想要的，但被店員以「前の席はもうありません」（已經沒了）否定；後排雖然還有位子，被男の人自己以「後ろは見えませんから」拒絕，兩者都是被否定的干擾項。',
    explanationEn:
      'The man finally says 「真ん中をお願いします」 and the clerk confirms 「真ん中の席を2枚ですね」, so he takes seats in the middle. The front seats were his first choice, but the clerk rules them out with 「前の席はもうありません」 (already sold out); the back seats are available but he refuses them himself with 「後ろは見えませんから」 (he cannot see from the back). Both are rejected distractors.',
  },
  {
    id: 'n5-listening-kadai-017',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で男の人と女の人が明日のピクニックについて話しています。' },
      { speaker: '男', text: '明日の公園のピクニック、何を持って行きましょうか。' },
      { speaker: '女', text: '私はおにぎりを作りますから、田中さんは飲み物をお願いします。' },
      { speaker: '男', text: 'わかりました。じゃあ、カメラも持って行きましょうか。' },
      { speaker: '女', text: 'カメラは山田さんが持って来ますから、いりませんよ。' },
      { speaker: '男', text: 'そうですか。じゃあ、飲み物だけですね。' },
      { speaker: '女', text: 'はい、お願いします。' },
    ],
    question: '男の人は明日、何を持って行きますか。',
    options: ['飲み物', 'おにぎり', 'カメラ', '飲み物とカメラ'],
    answerIndex: 0,
    explanation:
      '女の人分工說「田中さんは飲み物をお願いします」，男の人最後也確認「飲み物だけですね」，所以他只帶飲料。飯糰是女の人自己要做的；相機雖然男の人主動提議，但被「山田さんが持って来ますから、いりません」否定，是被否定的干擾項，「飲み物とカメラ」因此也不對。',
    explanationEn:
      'The woman assigns the tasks with 「田中さんは飲み物をお願いします」, and the man confirms 「飲み物だけですね」 at the end, so he brings only the drinks. The rice balls are what the woman herself will make, and although the man offered to bring a camera, it is rejected with 「山田さんが持って来ますから、いりません」 — Yamada will bring one — which also makes the drinks-plus-camera option wrong.',
  },
  {
    id: 'n5-listening-kadai-018',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で先生が男の学生と話しています。' },
      { speaker: '女', text: '田中さん、この机を音楽の教室に運んでください。' },
      { speaker: '男', text: 'はい。一人で運びますか。' },
      { speaker: '女', text: '重いですから、一人はだめですよ。山田さんと二人で運んでください。' },
      { speaker: '男', text: 'わかりました。いすも運びますか。' },
      { speaker: '女', text: 'いすはいいです。机だけお願いします。' },
      { speaker: '男', text: 'はい、わかりました。' },
    ],
    question: '男の学生はこれから何をしますか。',
    options: [
      '山田さんと二人で机を運ぶ',
      '一人で机を運ぶ',
      '机といすを運ぶ',
      '山田さんと二人でいすを運ぶ',
    ],
    answerIndex: 0,
    explanation:
      '老師指示「山田さんと二人で運んでください」，搬的東西是「机だけ」，所以正解是和山田同學兩個人搬桌子。「一人で」是學生自己問的，被老師以「一人はだめですよ」明確否定；椅子也被「いすはいいです。机だけお願いします」排除，兩者都是被否定的干擾項。',
    explanationEn:
      'The teacher instructs 「山田さんと二人で運んでください」 and the item is 「机だけ」, so the correct answer is carrying the desk together with Yamada. Doing it alone was the student\'s own question, which the teacher clearly denies with 「一人はだめですよ」, and the chairs are excluded with 「いすはいいです。机だけお願いします」. Both are rejected distractors.',
  },
  {
    id: 'n5-listening-kadai-019',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '店で女の人と男の人が話しています。二人は友だちのプレゼントを選んでいます。' },
      { speaker: '女', text: '鈴木さんの誕生日のプレゼント、この時計はどうですか。' },
      { speaker: '男', text: 'いいですが、ちょっと高いですね。' },
      { speaker: '女', text: 'そうですね。じゃあ、このカップは？' },
      { speaker: '男', text: 'カップは去年あげましたよ。あ、このかばんはどうですか。' },
      { speaker: '女', text: 'いいですね。高くないし、鈴木さんは青が好きですから、この青いのにしましょう。' },
      { speaker: '男', text: 'そうしましょう。' },
    ],
    question: '二人は何を買いますか。',
    options: ['青いかばん', '時計', 'カップ', '青い時計'],
    answerIndex: 0,
    explanation:
      '兩人最後說「この青いのにしましょう」「そうしましょう」，指的是男の人提議的包包，所以買藍色的包。時鐘被男の人以「ちょっと高いですね」（有點貴）婉拒；杯子被「去年あげましたよ」（去年送過了）否定，都是出現過但被排除的干擾項；「青い時計」把顏色和物品錯誤組合，也不對。',
    explanationEn:
      'The two agree at the end with 「この青いのにしましょう」 and 「そうしましょう」, referring to the bag the man suggested, so they buy the blue bag. The watch was declined with 「ちょっと高いですね」 (a bit expensive), and the cup was ruled out with 「去年あげましたよ」 (they gave one last year) — both mentioned-but-excluded distractors. "Blue watch" wrongly combines the color with the wrong item.',
  },
  {
    id: 'n5-listening-kadai-020',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で男の人と女の人が掃除について話しています。' },
      { speaker: '女', text: '今日はいっしょに家を掃除しましょう。' },
      { speaker: '男', text: 'いいですよ。私は台所を掃除しましょうか。' },
      { speaker: '女', text: '台所は昨日私が掃除しましたから、きれいですよ。トイレをお願いします。' },
      { speaker: '男', text: 'わかりました。窓もふきますか。' },
      { speaker: '女', text: '窓は私がふきますから、トイレだけお願いします。' },
      { speaker: '男', text: 'はい、じゃあ、始めましょう。' },
    ],
    question: '男の人はどこを掃除しますか。',
    options: ['トイレ', '台所', '窓', 'トイレと窓'],
    answerIndex: 0,
    explanation:
      '女の人指定「トイレをお願いします」，最後又確認「トイレだけお願いします」，所以男の人負責打掃廁所。廚房是男の人主動提議的，被「台所は昨日私が掃除しましたから」否定；窗戶也被「窓は私がふきますから」（我來擦）排除，兩者都是分工中被否定的干擾項，「トイレと窓」因此也錯。',
    explanationEn:
      'The woman assigns 「トイレをお願いします」 and later confirms 「トイレだけお願いします」, so the man cleans the toilet. He offered to do the kitchen, but it is rejected with 「台所は昨日私が掃除しましたから」 (she cleaned it yesterday), and the windows are excluded with 「窓は私がふきますから」 (she will wipe them herself). Both are rejected distractors, which also makes the toilet-plus-windows option wrong.',
  },
]

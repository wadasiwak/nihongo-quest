import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n4-listening-kadai-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'スーパーで店長と新しいアルバイトの女の人が話しています。' },
      { speaker: '女', text: '店長、おはようございます。今日から働きます、山下です。よろしくお願いします。' },
      { speaker: '男', text: 'よろしく。じゃあ、まず制服に着替えてください。制服は奥の部屋にありますよ。' },
      { speaker: '女', text: 'はい。着替えたら、掃除をしましょうか。' },
      { speaker: '男', text: '掃除は午後でいいですよ。それより、飲み物を棚に並べてほしいんです。' },
      { speaker: '女', text: 'わかりました。レジもやりましょうか。' },
      { speaker: '男', text: 'レジは研修を受けてからね。今日は並べる仕事だけお願いします。' },
      { speaker: '女', text: 'はい、わかりました。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: ['制服に着替える', '飲み物を棚に並べる', '店の掃除をする', 'レジの仕事をする'],
    answerIndex: 0,
    explanation:
      '店長第一個指示是「まず制服に着替えてください」，所以最先做的是換制服。把飲料排上架雖然是今天的主要工作，但要在換好制服之後才做，順序不對；掃除被店長說「午後でいいですよ」延到下午；收銀則被「研修を受けてからね」否定，今天還不能做。',
    explanationEn:
      'The manager\'s very first instruction is 「まず制服に着替えてください」, so changing into the uniform comes first. Shelving the drinks is her main task today, but it happens only after she has changed, so the order is wrong; the cleaning is pushed to the afternoon with 「掃除は午後でいいですよ」; and the register is ruled out for today by 「レジは研修を受けてからね」— she needs training first.',
  },
  {
    id: 'n4-listening-kadai-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '郵便局で男の人と局の女の人が話しています。' },
      { speaker: '男', text: 'すみません、この荷物を大阪に送りたいんですが。' },
      { speaker: '女', text: 'はい。あら、箱が少し壊れていますね。このままでは送れませんよ。' },
      { speaker: '男', text: 'そうですか。どうすればいいですか。' },
      { speaker: '女', text: 'あちらで新しい箱が買えますから、荷物を入れ替えてください。' },
      { speaker: '男', text: 'わかりました。この紙にも住所を書くんですよね。' },
      { speaker: '女', text: 'ええ。でも、先に箱を替えてから書いてください。箱の大きさで料金が変わりますから。' },
      { speaker: '男', text: 'そうですね。じゃあ、そうします。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: ['新しい箱を買って荷物を入れ替える', '紙に住所を書く', '料金を払う', '荷物を家に持って帰る'],
    answerIndex: 0,
    explanation:
      '局員說「先に箱を替えてから書いてください」，因為箱子大小會影響運費，所以最先要做的是買新箱子、把東西換裝進去。在單子上寫地址是男の人自己提到的步驟，但被更正為換箱之後才做，屬於順序顛倒的干擾項；付錢要更之後；把包裹帶回家對話中完全沒提到。',
    explanationEn:
      'The clerk says 「先に箱を替えてから書いてください」— switch boxes first, because the box size determines the shipping fee. So buying a new box and repacking comes first. Writing the address on the form is a step the man himself brings up, but it gets corrected to come after the box swap, making it a sequence-trap distractor; paying comes even later; and taking the package back home is never mentioned in the conversation.',
  },
  {
    id: 'n4-listening-kadai-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '市民プールの受付で女の人と受付の男の人が話しています。' },
      { speaker: '女', text: 'すみません、プールの会員になりたいんですが。' },
      { speaker: '男', text: 'ありがとうございます。では、この申込書に名前と住所を書いてください。' },
      { speaker: '女', text: 'はい。ほかに何か要りますか。' },
      { speaker: '男', text: '会員カードを作りますから、写真が一枚必要です。お持ちですか。' },
      { speaker: '女', text: 'あ、持っていません。どうしましょう。' },
      { speaker: '男', text: '駅前に写真の機械がありますよ。先に撮ってきてから書いたほうが早いです。' },
      { speaker: '女', text: 'わかりました。じゃあ、行ってきます。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: ['駅前で写真を撮ってくる', '申込書に名前と住所を書く', '会員カードを受け取る', 'プールで泳ぐ'],
    answerIndex: 0,
    explanation:
      '女の人沒帶照片，受付建議「先に撮ってきてから書いたほうが早いです」，她也回答「じゃあ、行ってきます」，所以最先做的是去車站前拍照。填申込書雖然一開始就被要求，但已被更正為拍完照再寫，是順序顛倒的干擾項；會員卡要等資料齊全後才做得出來，下水游泳更是之後的事。',
    explanationEn:
      'The woman does not have a photo with her, and the receptionist advises 「先に撮ってきてから書いたほうが早いです」— it is quicker to take the photo first and fill in the form afterward. She agrees with 「じゃあ、行ってきます」, so her first move is going to the photo booth by the station. Filling out the application form was requested at the start but has been reordered to come after the photo, making it a sequence trap; the membership card can only be made once everything is submitted, and swimming comes even later.',
  },
  {
    id: 'n4-listening-kadai-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '料理教室で先生と男の人が話しています。' },
      { speaker: '女', text: '今日はカレーを作ります。まず、野菜を切ってください。' },
      { speaker: '男', text: 'はい。お肉も切りますか。' },
      { speaker: '女', text: 'お肉は私が切りますから、大丈夫です。あ、野菜の前に、お米を洗っておいてください。' },
      { speaker: '男', text: 'わかりました。あのう、その前に手を洗ってからでいいですか。' },
      { speaker: '女', text: 'もちろんです。じゃあ、お願いしますね。' },
      { speaker: '男', text: 'はい、すぐやります。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: ['手を洗う', 'お米を洗う', '野菜を切る', 'お肉を切る'],
    answerIndex: 0,
    explanation:
      '順序在對話中一路被更新：先生先說切菜，再改成「野菜の前に、お米を洗っておいてください」，最後男の人問「その前に手を洗ってからでいいですか」，先生回答「もちろんです」，所以最先做的是洗手。洗米、切菜都對，但排在洗手之後，是順序型干擾項；切肉被先生以「私が切りますから」否定，不是他的工作。',
    explanationEn:
      'The task order keeps getting updated: the teacher first says to cut the vegetables, then revises it with 「野菜の前に、お米を洗っておいてください」, and finally the man asks 「その前に手を洗ってからでいいですか」, to which she replies 「もちろんです」. So washing his hands comes first. Washing the rice and cutting the vegetables are both real tasks but come after hand-washing, making them sequence traps; cutting the meat is ruled out by the teacher\'s 「私が切りますから」— that is her job, not his.',
  },
  {
    id: 'n4-listening-kadai-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'アパートで女の人と管理人の男の人が話しています。' },
      { speaker: '女', text: 'すみません、部屋の水が出ないんですが。' },
      { speaker: '男', text: 'ああ、今日は水道の工事をしているんですよ。3時ごろ終わります。' },
      { speaker: '女', text: 'そうですか。困ったなあ。今すぐ水を使いたいんです。' },
      { speaker: '男', text: 'それなら、隣の建物の水道が使えますよ。入り口の横にあります。' },
      { speaker: '女', text: 'わかりました。工事の会社に電話しなくてもいいですか。' },
      { speaker: '男', text: 'ええ、電話はしなくても大丈夫ですよ。' },
      { speaker: '女', text: 'よかった。じゃあ、行ってきます。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: ['隣の建物へ水を使いに行く', '3時まで部屋で待つ', '工事の会社に電話する', '管理人の部屋で水をもらう'],
    answerIndex: 0,
    explanation:
      '女の人說「今すぐ水を使いたいんです」，管理員告訴她「隣の建物の水道が使えますよ」，她最後回答「じゃあ、行ってきます」，所以是去隔壁棟用水。等到3點是工程結束的時間，但她等不了，與「今すぐ」矛盾；打給施工公司被管理員以「電話はしなくても大丈夫ですよ」明確否定；到管理員房間取水對話中沒有提到。',
    explanationEn:
      'The woman says 「今すぐ水を使いたいんです」— she needs water right now — and the building manager tells her 「隣の建物の水道が使えますよ」. She answers 「じゃあ、行ってきます」, so she is heading to the neighboring building to use the water there. Waiting until 3 o\'clock is when the construction ends, but that contradicts her 「今すぐ」; calling the construction company is explicitly ruled out by the manager\'s 「電話はしなくても大丈夫ですよ」; and getting water from the manager\'s room is never mentioned.',
  },
  {
    id: 'n4-listening-kadai-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '自転車屋で男の人と店の女の人が話しています。' },
      { speaker: '男', text: 'すみません、自転車が壊れてしまったんですが、直せますか。' },
      { speaker: '女', text: '見せてください。ああ、直せますよ。でも、2時間ぐらいかかります。' },
      { speaker: '男', text: 'そうですか。ここで待っていてもいいですか。' },
      { speaker: '女', text: '待てますが、長いですよ。近くにスーパーがありますから、買い物でもして来たらどうですか。' },
      { speaker: '男', text: 'そうですね。じゃあ、そうします。5時までに戻ればいいですか。' },
      { speaker: '女', text: 'はい、5時には終わっていますよ。' },
      { speaker: '男', text: 'わかりました。お願いします。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: ['近くのスーパーへ買い物に行く', '店の中で修理を待つ', '新しい自転車を買う', '明日また店に来る'],
    answerIndex: 0,
    explanation:
      '店員建議「買い物でもして来たらどうですか」，男の人回答「じゃあ、そうします」，所以接下來是去附近的超市買東西。在店裡等是他自己先提的想法，但被店員以「長いですよ」勸退，屬於被更正的干擾項；修理今天5點前就會好，所以「明日また来る」不對；買新腳踏車對話中完全沒有出現。',
    explanationEn:
      'The shop clerk suggests 「買い物でもして来たらどうですか」, and the man replies 「じゃあ、そうします」, so his next move is to go shopping at the nearby supermarket. Waiting in the shop was his own initial idea, but the clerk talks him out of it with 「長いですよ」, making it a corrected-plan distractor; the repair will be done by 5 o\'clock today, so coming back tomorrow is wrong; and buying a new bicycle never comes up in the conversation.',
  },
  {
    id: 'n4-listening-kadai-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '美術館の入り口で女の人と係の男の人が話しています。' },
      { speaker: '女', text: 'すみません、大人一枚お願いします。' },
      { speaker: '男', text: '1200円です。あ、スマホのアプリをお持ちですか。アプリのクーポンで200円安くなりますよ。' },
      { speaker: '女', text: 'へえ、いいですね。でも、まだアプリを入れていません。' },
      { speaker: '男', text: '今ここでダウンロードできますよ。1分ぐらいで終わります。' },
      { speaker: '女', text: 'じゃあ、先に入れてから買います。学生証でも安くなりますか。' },
      { speaker: '男', text: '学生の方だけです。すみません。' },
      { speaker: '女', text: 'そうですか。私は学生じゃないから、アプリでお願いします。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: ['スマホにアプリを入れる', '1200円払って切符を買う', '学生証を見せる', '美術館の中に入る'],
    answerIndex: 0,
    explanation:
      '女の人說「先に入れてから買います」，所以最先做的是在手機上下載APP，拿到折價券再買票。付1200円買票是一開始的做法，但知道有折扣後已被她自己更正，順序也不對；出示學生證這條路被她自己以「私は学生じゃないから」否定；進美術館參觀要等買好票之後才行。',
    explanationEn:
      'The woman says 「先に入れてから買います」— she will install the app first and then buy the ticket, so downloading the app onto her phone comes first, to get the 200-yen coupon. Paying the full 1200 yen was the original plan, but she corrects it herself once she learns about the discount, so it is both outdated and out of order; the student-ID route is ruled out by her own words 「私は学生じゃないから」; and entering the museum only happens after the ticket is bought.',
  },
  {
    id: 'n4-listening-kadai-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '歯医者の受付で男の人と受付の女の人が話しています。' },
      { speaker: '男', text: 'すみません、予約した田中です。歯が痛くて……。' },
      { speaker: '女', text: '田中さんですね。こちらは初めてですか。' },
      { speaker: '男', text: 'はい、初めてです。' },
      { speaker: '女', text: 'では、保険証をお願いします。' },
      { speaker: '男', text: 'はい、これです。' },
      { speaker: '女', text: 'ありがとうございます。次に、この紙に名前と生年月日を書いてください。書き終わったら、あちらの椅子に座って待っていてくださいね。' },
      { speaker: '男', text: 'わかりました。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: ['紙に名前と生年月日を書く', '保険証を出す', '椅子に座って待つ', '歯を見てもらう'],
    answerIndex: 0,
    explanation:
      '健保卡在對話中已經交出去了（「はい、これです」），受付接著說「次に、この紙に名前と生年月日を書いてください」，所以接下來要做的是填寫單子。「保険証を出す」是已經完成的事，不是接下來的行動；坐在椅子上等要在「書き終わったら」之後，順序不對；看牙齒是最後才輪到的診療步驟。',
    explanationEn:
      'The insurance card has already been handed over during the conversation (「はい、これです」), and the receptionist then says 「次に、この紙に名前と生年月日を書いてください」, so the next thing to do is fill in the form. Handing over the insurance card is an already-completed action, not what comes next — a classic trap; sitting down to wait only happens 「書き終わったら」, after he finishes writing; and having his teeth examined is the final step of the visit.',
  },
  {
    id: 'n4-listening-kadai-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '日本語教室で先生と男の学生が話しています。' },
      { speaker: '女', text: 'リンさん、来月のスピーチ大会に出ますよね。' },
      { speaker: '男', text: 'はい。もう原稿を書き始めてもいいですか。' },
      { speaker: '女', text: 'その前に、まずテーマを決めて、私にメールで送ってください。' },
      { speaker: '男', text: 'わかりました。テーマは「私の国の料理」にしようと思っています。' },
      { speaker: '女', text: 'いいですね。私が読んで大丈夫だったら、原稿を書き始めてください。' },
      { speaker: '男', text: 'はい。原稿は全部覚えなければなりませんか。' },
      { speaker: '女', text: 'いいえ、覚えなくてもいいですよ。紙を見ながら話せますから。' },
      { speaker: '男', text: '安心しました。じゃあ、今日メールします。' },
    ],
    question: '男の学生はこのあとまず何をしますか。',
    options: ['テーマを先生にメールで送る', 'スピーチの原稿を書く', '原稿を全部覚える', 'スピーチ大会で発表する'],
    answerIndex: 0,
    explanation:
      '學生想先寫講稿，但先生更正說「その前に、まずテーマを決めて、私にメールで送ってください」，他最後也說「今日メールします」，所以最先做的是把主題寄給先生。寫講稿要等先生看過主題、確認沒問題之後才開始，是順序顛倒的干擾項；背講稿被先生以「覚えなくてもいいですよ」否定；上台發表是下個月比賽當天的事。',
    explanationEn:
      'The student wants to start writing his speech draft, but the teacher corrects him: 「その前に、まずテーマを決めて、私にメールで送ってください」. He confirms with 「今日メールします」, so emailing the topic to the teacher comes first. Writing the draft only starts after the teacher has read and approved the topic, making it a sequence-trap distractor; memorizing the script is ruled out by the teacher\'s 「覚えなくてもいいですよ」; and giving the speech happens at next month\'s contest.',
  },
  {
    id: 'n4-listening-kadai-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ホテルのフロントで男の人とフロントの女の人が話しています。' },
      { speaker: '男', text: 'すみません、今日予約している佐藤ですが、チェックインできますか。' },
      { speaker: '女', text: 'すみません、チェックインは3時からなんです。今はまだ1時ですから……。' },
      { speaker: '男', text: 'そうですか。じゃあ、それまで外で昼ご飯を食べてきます。' },
      { speaker: '女', text: 'はい。重い荷物は、ここで預かることができますよ。' },
      { speaker: '男', text: '助かります。じゃあ、この二つをお願いします。' },
      { speaker: '女', text: 'わかりました。3時になったら、またフロントへ来てくださいね。' },
      { speaker: '男', text: 'はい、ありがとうございます。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: ['フロントに荷物を預ける', '昼ご飯を食べに行く', '部屋に入って休む', '3時までロビーで待つ'],
    answerIndex: 0,
    explanation:
      '男の人說「この二つをお願いします」，當場把兩件行李交給櫃台，所以最先做的是寄放行李，之後才出去吃午餐。吃午餐是他接著要做的事，但在寄放行李之後，屬於順序型干擾項；進房間休息被「チェックインは3時からなんです」擋下，現在還做不到；在大廳等到3點對話中沒有人提議。',
    explanationEn:
      'The man says 「この二つをお願いします」 and hands his two bags to the front desk on the spot, so leaving his luggage comes first, and only then does he go out for lunch. Eating lunch is indeed his next plan, but it happens after depositing the bags, making it a sequence trap; going up to his room is blocked by 「チェックインは3時からなんです」— check-in has not started yet; and waiting in the lobby until 3 is never suggested by anyone.',
  },
]

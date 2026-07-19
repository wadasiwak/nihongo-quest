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
  {
    id: 'n4-listening-kadai-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '教室で先生と男の学生が明日の遠足について話しています。' },
      { speaker: '女', text: '明日の遠足はバスで行きます。今からバスの席を決めますから、まずこの紙に名前を書いてください。' },
      { speaker: '男', text: 'はい。先生、お弁当の注文もするんですよね。' },
      { speaker: '女', text: '注文は名前を書いた後で受け付けます。' },
      { speaker: '男', text: 'わかりました。飲み物はどうしますか。' },
      { speaker: '女', text: '飲み物は明日、自分で持って来てください。' },
      { speaker: '男', text: 'はい、じゃあ、書きます。' },
    ],
    question: '男の学生はこのあとまず何をしますか。',
    options: ['紙に名前を書く', 'お弁当を注文する', '飲み物を持って来る', 'バスの席に座る'],
    answerIndex: 0,
    explanation:
      '先生說「まずこの紙に名前を書いてください」，所以最先要做的是在紙上寫名字。訂便當被先生說「名前を書いた後で受け付けます」，要寫完名字才受理，順序不對；飲料是「明日、自分で持って来てください」，是明天的事；坐上巴士的座位更是遠足當天才會做的事。',
    explanationEn:
      'The teacher\'s first instruction is 「まずこの紙に名前を書いてください」, so writing his name on the paper comes first. Ordering the boxed lunch is accepted only 「名前を書いた後で」— after writing the name — so its order is wrong; drinks are for tomorrow (「明日、自分で持って来てください」); and taking a seat on the bus happens on the day of the excursion itself.',
  },
  {
    id: 'n4-listening-kadai-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学で男の学生と女の学生がサークルのポスターについて話しています。' },
      { speaker: '男', text: '新しい人を集めるポスター、写真はもう選んだよ。あとは説明の文だけだね。' },
      { speaker: '女', text: '文はもう書いたよ。これ、どうかな。' },
      { speaker: '男', text: 'いいね。じゃあ、すぐ印刷しようか。' },
      { speaker: '女', text: '待って。印刷の前に、部長に文を見せて、チェックしてもらわなければならないよ。' },
      { speaker: '男', text: 'そうだった。じゃあ、部長の教室に行ってくるよ。' },
      { speaker: '女', text: 'お願い。私は印刷の紙を準備しておくね。' },
    ],
    question: '男の学生はこのあとまず何をしますか。',
    options: ['部長に文を見せに行く', 'ポスターを印刷する', 'ポスターの写真を選ぶ', '印刷の紙を準備する'],
    answerIndex: 0,
    explanation:
      '男の学生本來想馬上印，但女の学生更正說「印刷の前に、部長に文を見せて、チェックしてもらわなければならないよ」，他也回答「部長の教室に行ってくるよ」，所以最先做的是拿文章給部長看。印海報要等部長確認之後才行，是順序顛倒的干擾項；照片已經選好，是完成的事；準備印刷用紙是女の学生說「私が準備しておく」的工作。',
    explanationEn:
      'The male student wants to print right away, but the female student corrects him: 「印刷の前に、部長に文を見せて、チェックしてもらわなければならないよ」. He replies 「部長の教室に行ってくるよ」, so showing the text to the club president comes first. Printing only happens after the check, making it a sequence trap; the photo has already been chosen; and preparing the printing paper is her job (「私は印刷の紙を準備しておくね」).',
  },
  {
    id: 'n4-listening-kadai-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校の図書室で男の学生と図書室の先生が話しています。' },
      { speaker: '男', text: 'すみません、この辞書を家に借りて帰りたいんですが。' },
      { speaker: '女', text: 'ごめんなさい。辞書は借りられないんです。図書室の中で使ってください。' },
      { speaker: '男', text: 'そうですか。でも、家で宿題に使いたいんです。' },
      { speaker: '女', text: 'それなら、使いたいページをコピーしたらどうですか。' },
      { speaker: '男', text: 'あ、いいですね。そうします。' },
      { speaker: '女', text: 'コピーの機械を使う前に、カウンターでカードを借りてくださいね。' },
      { speaker: '男', text: 'わかりました。' },
    ],
    question: '男の学生はこのあとまず何をしますか。',
    options: ['カウンターでカードを借りる', '辞書のページをコピーする', '辞書を家に持って帰る', '図書室で宿題をする'],
    answerIndex: 0,
    explanation:
      '図書室の先生說使用影印機之前「カウンターでカードを借りてくださいね」，男の学生回答「わかりました」，所以最先做的是到櫃檯借卡片。影印辭典的頁面要在借到卡片之後，順序不對；把辭典帶回家被「辞書は借りられないんです」明確否定；在圖書室寫作業則和他想在家寫作業的需求不符。',
    explanationEn:
      'The librarian tells him to borrow a card at the counter before using the copier (「コピーの機械を使う前に、カウンターでカードを借りてくださいね」), and he agrees, so getting the card comes first. Copying the dictionary pages happens only after that; taking the dictionary home is explicitly denied by 「辞書は借りられないんです」; and doing homework in the library contradicts his wish to work at home.',
  },
  {
    id: 'n4-listening-kadai-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '本屋で女の人と店の男の人が話しています。' },
      { speaker: '女', text: 'すみません、旅行の雑誌「歩く京都」はありますか。' },
      { speaker: '男', text: '申し訳ありません。その雑誌は今、売り切れなんです。' },
      { speaker: '女', text: 'そうですか。困ったなあ。今週使いたいんです。' },
      { speaker: '男', text: '駅前の店にはまだあると思いますよ。今、電話で聞いてみましょうか。' },
      { speaker: '女', text: 'お願いします。' },
      { speaker: '男', text: 'はい、二冊あるそうです。お名前を言っておきましたから、今日中に取りに行ってください。' },
      { speaker: '女', text: 'ありがとうございます。すぐ行きます。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: ['駅前の店へ雑誌を取りに行く', 'この店で雑誌が来るのを待つ', '来週もう一度この店に来る', '別の雑誌を買う'],
    answerIndex: 0,
    explanation:
      '店員打電話確認站前的分店還有兩本，並說「今日中に取りに行ってください」，女の人回答「すぐ行きます」，所以接下來是到站前的店取雜誌。在這家店等是不可能的，因為店員只說「売り切れなんです」、沒說會補貨；下週再來和她「今週使いたいんです」的需求矛盾；買別的雜誌對話中沒有出現。',
    explanationEn:
      'The clerk phones the branch by the station, confirms two copies remain, and says 「今日中に取りに行ってください」. The woman answers 「すぐ行きます」, so she is heading to the station-front store to pick up the magazine. Waiting at this store is pointless — it is 「売り切れ」 with no restock mentioned; coming back next week contradicts her need to use it this week (「今週使いたいんです」); and buying a different magazine never comes up.',
  },
  {
    id: 'n4-listening-kadai-015',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ケーキ屋で女の人と店の男の人が話しています。' },
      { speaker: '女', text: 'すみません、明日の誕生日ケーキを予約したいんですが。' },
      { speaker: '男', text: 'ありがとうございます。ケーキの上にお名前を書くことができますよ。' },
      { speaker: '女', text: 'じゃあ、お願いします。' },
      { speaker: '男', text: 'では、まずこの紙に、書く名前と受け取りの時間を書いてください。' },
      { speaker: '女', text: 'はい。お金は今払いますか。' },
      { speaker: '男', text: 'いいえ、明日、受け取るときで大丈夫です。ろうそくは無料でお付けしますよ。' },
      { speaker: '女', text: 'よかった。じゃあ、書きますね。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: ['紙に名前と時間を書く', 'お金を払う', 'ケーキを受け取る', 'ろうそくを買う'],
    answerIndex: 0,
    explanation:
      '店員說「まずこの紙に、書く名前と受け取りの時間を書いてください」，女の人也回答「じゃあ、書きますね」，所以最先做的是在單子上填名字和取貨時間。付錢被店員以「明日、受け取るときで大丈夫です」延到明天；取蛋糕也是明天的事；蠟燭是「無料でお付けしますよ」免費附送的，不用買。',
    explanationEn:
      'The clerk says 「まずこの紙に、書く名前と受け取りの時間を書いてください」, and the woman replies 「じゃあ、書きますね」, so filling in the name and pickup time on the form comes first. Payment is deferred to tomorrow with 「明日、受け取るときで大丈夫です」; picking up the cake is also tomorrow; and the candles come free (「無料でお付けしますよ」), so there is nothing to buy.',
  },
  {
    id: 'n4-listening-kadai-016',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '駅で男の人と駅員の女の人が話しています。' },
      { speaker: '男', text: 'すみません、桜山駅まで行きたいんですが、次の急行に乗ればいいですか。' },
      { speaker: '女', text: '急行は桜山には止まりませんよ。' },
      { speaker: '男', text: 'えっ、そうなんですか。じゃあ、各駅停車で行きます。' },
      { speaker: '女', text: '各駅停車だと一時間かかりますよ。急行で中山駅まで行って、そこで各駅停車に乗り換えたほうが早いです。三十分ぐらいですから。' },
      { speaker: '男', text: 'そうですか。切符はこのままでいいですか。' },
      { speaker: '女', text: 'ええ、買い直さなくても大丈夫ですよ。急行は2番線から出ます。' },
      { speaker: '男', text: 'ありがとうございます。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: ['2番線で急行に乗る', 'この駅から各駅停車に乗る', '切符を買い直す', 'バスで桜山駅へ行く'],
    answerIndex: 0,
    explanation:
      '駅員建議搭急行到中山駅再轉各駅停車比較快，男の人接受了，而且駅員說「急行は2番線から出ます」，所以接下來是到2番線搭急行。直接搭各駅停車是他一度想做的，但被「一時間かかりますよ」勸退，是被更正的干擾項；重買車票被「買い直さなくても大丈夫ですよ」否定；搭巴士對話中沒有出現。',
    explanationEn:
      'The station attendant recommends taking the express to Nakayama Station and transferring to a local train — about thirty minutes instead of an hour — and the man accepts. Since 「急行は2番線から出ます」, boarding the express on track 2 comes first. Taking the local train from here was his fallback idea, but she talks him out of it with 「一時間かかりますよ」; rebuying the ticket is denied by 「買い直さなくても大丈夫ですよ」; and a bus is never mentioned.',
  },
  {
    id: 'n4-listening-kadai-017',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'バス会社の営業所で女の人と係の男の人が話しています。' },
      { speaker: '女', text: 'すみません、さっきのバスに紙の袋を忘れてしまったんですが。' },
      { speaker: '男', text: '何時のバスですか。' },
      { speaker: '女', text: '2時ごろ、駅前から乗りました。' },
      { speaker: '男', text: 'そのバスはまだ走っていますね。終点に4時に着きますから、着いたら運転手が調べます。' },
      { speaker: '女', text: 'じゃあ、終点まで取りに行きましょうか。' },
      { speaker: '男', text: 'いいえ、行かなくていいですよ。4時過ぎにここに電話をください。あれば、この営業所に届きますから。' },
      { speaker: '女', text: 'わかりました。じゃあ、そうします。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: ['4時過ぎに営業所に電話する', '今すぐ終点まで取りに行く', '交番に行って聞く', '新しい袋を買いに行く'],
    answerIndex: 0,
    explanation:
      '係の人說「4時過ぎにここに電話をください」，東西找到後會送到營業所，女の人也回答「そうします」，所以接下來要做的是4點過後打電話到營業所確認。自己去終點站取被「行かなくていいですよ」明確否定，是被更正的干擾項；去派出所問和買新袋子對話中都沒有出現，屬於無中生有的選項。',
    explanationEn:
      'The staff member tells her 「4時過ぎにここに電話をください」— the bus reaches its last stop at four, the driver will check, and the bag will be sent to this office if found. She agrees with 「そうします」, so calling the office after four is her next move. Going to the terminal herself is explicitly ruled out by 「行かなくていいですよ」, a corrected distractor; asking at a police box and buying a new bag never come up in the conversation.',
  },
  {
    id: 'n4-listening-kadai-018',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '観光案内所で女の人と係の男の人が話しています。' },
      { speaker: '女', text: 'すみません、自転車を借りたいんですが。' },
      { speaker: '男', text: 'はい。ご利用は初めてですか。' },
      { speaker: '女', text: 'はい、初めてです。' },
      { speaker: '男', text: 'では、先に外に並んでいる自転車の中から、好きなのを選んで来てください。番号を教えてもらえれば、こちらで申し込みの紙を用意しますので。' },
      { speaker: '女', text: 'わかりました。お金は先に払いますか。' },
      { speaker: '男', text: 'お金は返すときにお願いします。5時までに戻って来てくださいね。' },
      { speaker: '女', text: 'はい、じゃあ、見て来ます。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: ['外で自転車を選ぶ', '申し込みの紙を書く', 'お金を払う', '自転車を返しに行く'],
    answerIndex: 0,
    explanation:
      '係の人說「先に外に並んでいる自転車の中から、好きなのを選んで来てください」，女の人也回答「じゃあ、見て来ます」，所以最先做的是到外面挑腳踏車。申込用的紙要等她選好、告知號碼之後店家才會準備，填寫在挑車之後，順序不對；付錢被「お金は返すときにお願いします」延到還車時；還車是5點前才要做的最後一步。',
    explanationEn:
      'The attendant says 「先に外に並んでいる自転車の中から、好きなのを選んで来てください」, and the woman replies 「じゃあ、見て来ます」, so choosing a bicycle outside comes first. The application form is prepared only after she reports the bike\'s number, so filling it in comes later; payment is deferred until the return (「お金は返すときにお願いします」); and returning the bike by five is the very last step.',
  },
  {
    id: 'n4-listening-kadai-019',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で母親と息子が話しています。' },
      { speaker: '男', text: 'お母さん、宿題が終わったから、ゲームをしてもいい？' },
      { speaker: '女', text: 'いいけど、その前に、玄関の靴を並べてくれない？もうすぐお客さんが来るから。' },
      { speaker: '男', text: 'わかった。お風呂の掃除はしなくてもいい？' },
      { speaker: '女', text: 'お風呂は夕方でいいよ。それから、牛乳も買って来てほしいんだけど……。' },
      { speaker: '男', text: '今から？' },
      { speaker: '女', text: 'やっぱり牛乳はいいわ。お父さんが帰りに買って来るから。じゃあ、先に靴をお願いね。' },
      { speaker: '男', text: 'はーい、わかった。' },
    ],
    question: '息子はこのあとまず何をしますか。',
    options: ['玄関の靴を並べる', 'お風呂の掃除をする', '牛乳を買いに行く', 'ゲームをする'],
    answerIndex: 0,
    explanation:
      '母親說客人快來了，「その前に、玄関の靴を並べてくれない？」，最後又叮嚀「じゃあ、先に靴をお願いね」，所以最先做的是把玄關的鞋子排好。洗浴室被「お風呂は夕方でいいよ」延到傍晚；買牛奶先被提出、隨後又被「お父さんが帰りに買って来るから」收回，是被更正的干擾項；打電動要等鞋子排好之後才行。',
    explanationEn:
      'The mother asks him to line up the shoes in the entryway first because a guest is coming (「その前に、玄関の靴を並べてくれない？」) and closes with 「じゃあ、先に靴をお願いね」, so tidying the shoes comes first. Cleaning the bath is pushed to the evening with 「お風呂は夕方でいいよ」; the milk errand is proposed and then withdrawn (「お父さんが帰りに買って来るから」), a corrected distractor; and the video game must wait until the shoes are done.',
  },
  {
    id: 'n4-listening-kadai-020',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で男の人と女の人が明日の旅行の準備をしています。' },
      { speaker: '女', text: 'ねえ、かばんに服はもう入れた？' },
      { speaker: '男', text: 'まだだよ。今からやるところ。' },
      { speaker: '女', text: 'その前に、カメラの電池を充電しておいて。時間がかかるから、先にしたほうがいいよ。' },
      { speaker: '男', text: 'そうだね。薬も買っておいたほうがいいかな。' },
      { speaker: '女', text: '薬はうちにあるから、大丈夫。' },
      { speaker: '男', text: 'わかった。かばんは今夜、車に運んでおく？' },
      { speaker: '女', text: 'それは明日の朝でいいよ。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: ['カメラの電池を充電する', 'かばんに服を入れる', '薬を買いに行く', 'かばんを車に運ぶ'],
    answerIndex: 0,
    explanation:
      '女の人說裝行李之前「カメラの電池を充電しておいて。時間がかかるから、先にしたほうがいいよ」（〜ておく：事先做好），男の人也同意，所以最先做的是幫相機電池充電。把衣服裝進包包是他原本要做的事，但被更正為充電之後，是順序型干擾項；買藥被「薬はうちにあるから、大丈夫」否定；把包包搬上車被延到明天早上。',
    explanationEn:
      'The wife tells him to charge the camera battery before packing: 「カメラの電池を充電しておいて。時間がかかるから、先にしたほうがいいよ」 (〜ておく: do it in advance), and he agrees, so charging comes first. Packing the clothes was his original plan but is reordered to after the charging, a sequence trap; buying medicine is denied with 「薬はうちにあるから、大丈夫」; and carrying the bags to the car is postponed to tomorrow morning.',
  },
]

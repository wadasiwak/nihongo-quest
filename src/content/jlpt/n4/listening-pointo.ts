import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n4-listening-pointo-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '料理教室で女の人と男の人が話しています。' },
      { speaker: '女', text: '田中さん、この教室に入ったんですね。どうしてですか。テレビの料理番組を見たからですか。' },
      { speaker: '男', text: 'いいえ、番組はあまり見ません。実は、来月、国の友だちが日本へ遊びに来るんです。' },
      { speaker: '女', text: 'へえ、そうなんですか。' },
      { speaker: '男', text: 'それで、友だちに日本料理を作ってあげたいと思って、習い始めました。' },
      { speaker: '女', text: 'いいですね。何を作ってあげるんですか。' },
      { speaker: '男', text: 'てんぷらを作るつもりです。' },
    ],
    question: '男の人はどうして料理教室に入りましたか。',
    options: [
      '友だちに日本料理を作ってあげたいから',
      'テレビの料理番組を見たから',
      'てんぷらが食べたいから',
      '先生に習うように言われたから',
    ],
    answerIndex: 0,
    explanation:
      '男の人說「友だちに日本料理を作ってあげたいと思って、習い始めました」，動機是想做日本料理給來訪的朋友吃（〜てあげたい：為別人做某事）。「テレビの料理番組」是女の人的猜測，被他以「いいえ、番組はあまり見ません」明確否定；「てんぷら」只是打算做的菜，不是入教室的原因；被老師要求在對話中沒有出現。',
    explanationEn:
      'The man says 「友だちに日本料理を作ってあげたいと思って、習い始めました」— his motivation is wanting to cook Japanese food for a friend who is visiting (〜てあげたい: to do something for someone else\'s benefit). The TV cooking show is only the woman\'s guess, which he flatly denies with 「いいえ、番組はあまり見ません」; tempura is merely the dish he plans to make, not his reason for joining; and being told to enroll by a teacher never appears in the conversation.',
  },
  {
    id: 'n4-listening-pointo-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が花見について話しています。' },
      { speaker: '男', text: '来週、みんなで花見をしませんか。土曜日はどうですか。' },
      { speaker: '女', text: '天気予報によると、土曜日は雨が降りそうですよ。' },
      { speaker: '男', text: 'そうですか。じゃあ、日曜日はどうですか。' },
      { speaker: '女', text: '日曜日は晴れるそうです。でも、午前は公園に人が多いですから、午後にしませんか。' },
      { speaker: '男', text: 'いいですね。じゃあ、日曜日の午後にしましょう。' },
      { speaker: '女', text: 'はい、みんなに知らせておきます。' },
    ],
    question: '二人はいつ花見をしますか。',
    options: ['日曜日の午後', '土曜日', '日曜日の午前', '来週の金曜日'],
    answerIndex: 0,
    explanation:
      '最後兩人說「日曜日の午後にしましょう」，賞花定在星期日下午。星期六因為「雨が降りそうだ」（〜そうだ：看樣子會下雨）被排除；星期日上午因為「人が多い」被女の人提議改到下午，是被更正的干擾項；星期五在對話中沒有出現。要一路聽到最後的結論才能作答。',
    explanationEn:
      'The two finally agree with 「日曜日の午後にしましょう」, so the cherry-blossom viewing is set for Sunday afternoon. Saturday is eliminated because 「雨が降りそうですよ」 (〜そうだ: it looks like it will rain); Sunday morning gets revised because the park is crowded then (「人が多い」), making it a corrected distractor; Friday never comes up. You have to follow the conversation all the way to the final decision to answer correctly.',
  },
  {
    id: 'n4-listening-pointo-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で女の学生と男の学生が話しています。' },
      { speaker: '女', text: '山田さんは、いつもどこで試験の勉強をしていますか。家ですか。' },
      { speaker: '男', text: 'いいえ、家では弟がテレビを見ていて、うるさくて勉強できないんです。' },
      { speaker: '女', text: 'じゃあ、駅前のカフェですか。' },
      { speaker: '男', text: 'カフェは静かですが、長い時間いると、お金がかかりますから……。いつも図書館でしています。夜8時まで使えますよ。' },
      { speaker: '女', text: 'そうですか。じゃあ、私も今度行ってみます。' },
      { speaker: '男', text: 'ええ、一緒に勉強しましょう。' },
    ],
    question: '男の学生はいつもどこで勉強していますか。',
    options: ['図書館', '家', '駅前のカフェ', '学校の教室'],
    answerIndex: 0,
    explanation:
      '男の学生說「いつも図書館でしています」，平常都在圖書館唸書。「家」被他以「うるさくて勉強できない」（可能形否定：沒辦法唸書）排除；「カフェ」雖然安靜，但「長い時間いると、お金がかかります」（〜と：一〜就〜），也被他自己否定；學校教室在對話中沒有提到。',
    explanationEn:
      'The male student says 「いつも図書館でしています」— he always studies at the library. Home is ruled out because his little brother watches TV and it is too noisy: 「うるさくて勉強できない」 (potential form, negative: he cannot study); the cafe is quiet but he rejects it himself since 「長い時間いると、お金がかかります」 (〜と: whenever you stay long, it gets expensive); a school classroom is never mentioned in the conversation.',
  },
  {
    id: 'n4-listening-pointo-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学で男の学生と女の学生が文化祭について話しています。' },
      { speaker: '男', text: '昨日の文化祭、お疲れさまでした。何が一番人気がありましたか。' },
      { speaker: '女', text: 'クラスの劇が一番人気がありましたよ。教室に入れない人もいました。' },
      { speaker: '男', text: 'へえ、すごいですね。歌のコンサートはどうでしたか。' },
      { speaker: '女', text: 'コンサートも良かったですが、雨で外のステージが使えませんでしたから、お客さんが少なかったです。' },
      { speaker: '男', text: 'そうですか。食べ物の店はどうでしたか。' },
      { speaker: '女', text: 'カレーの店は昼はたくさん売れましたが、夕方は残ってしまいました。' },
    ],
    question: '文化祭で何が一番人気がありましたか。',
    options: ['クラスの劇', '歌のコンサート', 'カレーの店', 'ダンス'],
    answerIndex: 0,
    explanation:
      '女の学生明確說「クラスの劇が一番人気がありましたよ」，最受歡迎的是班上的話劇，甚至有人進不了教室（入れない：可能形否定）。演唱會因為下雨「ステージが使えませんでした」而觀眾少，是次要選項；咖哩店傍晚「残ってしまいました」（〜てしまう：遺憾地剩下來），也不是最受歡迎的；ダンス在對話中沒有出現。',
    explanationEn:
      'The female student states clearly 「クラスの劇が一番人気がありましたよ」— the class play was the most popular, so much so that some people could not even get into the classroom (入れない: negative potential form). The concert drew few visitors because rain made the outdoor stage unusable (「ステージが使えませんでした」); the curry stall sold well at lunch but had leftovers in the evening (「残ってしまいました」, 〜てしまう expressing regret); and a dance never appears in the conversation.',
  },
  {
    id: 'n4-listening-pointo-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で女の学生と男の学生が話しています。' },
      { speaker: '女', text: '木村さん、昨日サッカーの練習に来ませんでしたね。雨だったからですか。' },
      { speaker: '男', text: 'いいえ、雨は朝やみましたから、練習はありましたよ。実は、家の階段で転んで、足にけがをしてしまったんです。' },
      { speaker: '女', text: 'えっ、大丈夫ですか。' },
      { speaker: '男', text: '病院で見てもらいました。大きいけがじゃありませんが、一週間は運動してはいけないと言われました。' },
      { speaker: '女', text: 'それは残念ですね。来週の試合はどうしますか。' },
      { speaker: '男', text: '試合までには治ると思いますから、出るつもりです。' },
    ],
    question: '男の学生はどうして昨日練習を休みましたか。',
    options: ['足にけがをしてしまったから', '雨が降っていたから', '病気になったから', '試合がなかったから'],
    answerIndex: 0,
    explanation:
      '男の学生說「階段で転んで、足にけがをしてしまったんです」（〜てしまう：懊惱地弄傷了），缺席原因是腳受傷。「雨」是女の学生的猜測，被他以「いいえ、雨は朝やみましたから、練習はありました」否定；他去醫院是因為受傷不是生病，「病気になった」語意不符；比賽是下週的事，與昨天缺席無關。',
    explanationEn:
      'The male student explains 「階段で転んで、足にけがをしてしまったんです」 (〜てしまう conveying his frustration) — he missed practice because he hurt his leg falling on the stairs at home. Rain is only the female student\'s guess, denied with 「いいえ、雨は朝やみましたから、練習はありました」; he went to the hospital for an injury, not an illness, so getting sick does not fit; and the match is next week, unrelated to yesterday\'s absence.',
  },
  {
    id: 'n4-listening-pointo-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学の食堂で男の学生と女の留学生が話しています。' },
      { speaker: '男', text: 'ワンさんは夏休みに国へ帰りますか。' },
      { speaker: '女', text: 'はい、帰るつもりです。' },
      { speaker: '男', text: '休みが始まる7月の終わりに帰るんですか。' },
      { speaker: '女', text: 'すぐ帰りたいんですが、8月の初めまで大学でレポートを書かなければなりませんから、8月10日に帰ります。' },
      { speaker: '男', text: 'そうですか。いつ日本へ戻りますか。' },
      { speaker: '女', text: '9月の初めに戻ります。' },
    ],
    question: '女の留学生はいつ国へ帰りますか。',
    options: ['8月10日', '7月の終わり', '8月の初め', '9月の初め'],
    answerIndex: 0,
    explanation:
      '女の留学生說「8月10日に帰ります」，回國日期是8月10日。「7月の終わり」是暑假開始的時間，她雖然想馬上回去，但因為「レポートを書かなければなりません」（〜なければならない：不得不）而無法成行，是被否定的干擾項；「8月の初め」是報告的期限，不是回國日；「9月の初め」是回到日本的時間，方向相反。',
    explanationEn:
      'The exchange student says 「8月10日に帰ります」, so she goes home on August 10. The end of July is when vacation starts — she would like to leave right away, but 「レポートを書かなければなりません」 (〜なければならない: she has to write a report), so that option is ruled out; the beginning of August is the report deadline, not her departure date; and the beginning of September is when she returns to Japan — the opposite direction of travel.',
  },
  {
    id: 'n4-listening-pointo-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '電話で男の人と女の人が明日の待ち合わせについて話しています。' },
      { speaker: '男', text: 'もしもし、明日の美術館ですが、どこで会いましょうか。駅の前はどうですか。' },
      { speaker: '女', text: '駅の前は今、工事をしていて、人も多いですから、ちょっと……。' },
      { speaker: '男', text: 'じゃあ、駅の中の本屋はどうですか。' },
      { speaker: '女', text: 'あの本屋は先月閉まってしまいましたよ。' },
      { speaker: '男', text: 'えっ、そうなんですか。じゃあ、美術館の入口の前にしましょうか。' },
      { speaker: '女', text: 'はい、そうしましょう。10時にお願いします。' },
    ],
    question: '二人は明日どこで会いますか。',
    options: ['美術館の入口の前', '駅の前', '駅の中の本屋', '美術館の喫茶店'],
    answerIndex: 0,
    explanation:
      '最後男の人提議「美術館の入口の前にしましょうか」，女の人答應「そうしましょう」，所以碰面地點是美術館入口前。「駅の前」因為施工又人多被女の人婉拒（ちょっと……是委婉拒絕）；「駅の中の本屋」上個月已經「閉まってしまいました」（〜てしまう），無法碰面；美術館的咖啡廳在對話中沒有出現。',
    explanationEn:
      'The man finally proposes 「美術館の入口の前にしましょうか」 and the woman agrees with 「そうしましょう」, so they will meet in front of the museum entrance. The station front is politely declined because of construction and crowds — her trailing 「ちょっと……」 is a soft refusal; the bookstore inside the station 「閉まってしまいました」 (〜てしまう) — it closed last month, so meeting there is impossible; and a museum cafe never appears in the conversation.',
  },
  {
    id: 'n4-listening-pointo-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が話しています。' },
      { speaker: '男', text: '佐藤さんは犬が好きですよね。飼わないんですか。' },
      { speaker: '女', text: '飼いたいんですが、今のアパートでは動物が飼えないんです。' },
      { speaker: '男', text: 'そうですか。動物のアレルギーがあるのかと思いました。' },
      { speaker: '女', text: 'いいえ、アレルギーはありません。子供の時は家で犬を飼っていましたよ。' },
      { speaker: '男', text: 'じゃあ、引っ越したら飼えますね。' },
      { speaker: '女', text: 'ええ、来年広い部屋に引っ越して、飼おうと思っています。' },
    ],
    question: '女の人はどうして今、犬を飼っていませんか。',
    options: ['アパートで動物が飼えないから', 'アレルギーがあるから', '犬が好きじゃないから', '世話をする時間がないから'],
    answerIndex: 0,
    explanation:
      '女の人說「今のアパートでは動物が飼えないんです」（飼えない：可能形否定，不能養），現在不養狗是因為公寓禁止養動物。「アレルギー」是男の人的猜測，被她以「いいえ、アレルギーはありません」明確否定；她說「飼いたい」而且小時候養過狗，可見不是不喜歡狗；沒時間照顧在對話中沒有提到。',
    explanationEn:
      'The woman says 「今のアパートでは動物が飼えないんです」 (飼えない: negative potential form — pets are not allowed), so the reason she has no dog now is her apartment\'s no-pets rule. The allergy is the man\'s guess, which she explicitly denies with 「いいえ、アレルギーはありません」; she says 「飼いたい」 and kept a dog as a child, so disliking dogs is clearly wrong; and having no time to care for one is never mentioned.',
  },
  {
    id: 'n4-listening-pointo-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: 'チンさん、日本の会社で働き始めて3か月ですね。仕事はどうですか。' },
      { speaker: '男', text: '毎日楽しいですが、大変なこともあります。' },
      { speaker: '女', text: '漢字を読むのが難しいですか。' },
      { speaker: '男', text: '漢字は大学の時にたくさん勉強しましたから、大丈夫です。一番大変なのは敬語です。電話で敬語がうまく使えなくて、いつも困っています。' },
      { speaker: '女', text: '敬語は日本人も難しいですよ。少しずつ覚えれば、大丈夫です。' },
      { speaker: '男', text: 'ありがとうございます。頑張ります。' },
    ],
    question: '男の人は仕事で何が一番大変だと言っていますか。',
    options: ['敬語を使うこと', '漢字を読むこと', '朝早く起きること', '電話の番号を覚えること'],
    answerIndex: 0,
    explanation:
      '男の人明確說「一番大変なのは敬語です」，最辛苦的是敬語，講電話時「うまく使えなくて」（可能形否定：用不好）很困擾。「漢字」是女の人的猜測，被他以「大学の時にたくさん勉強しましたから、大丈夫です」否定；早起沒有被提到；「電話」雖然在對話中出現，但難的是電話中的敬語，不是背電話號碼，屬於字眼相同但語意錯置的干擾項。',
    explanationEn:
      'The man states plainly 「一番大変なのは敬語です」— what troubles him most is keigo (honorific language), since on the phone 「うまく使えなくて」 (negative potential: he cannot use it well). Kanji is the woman\'s guess, dismissed with 「大学の時にたくさん勉強しましたから、大丈夫です」; getting up early is never mentioned; and although the word "phone" does appear, the difficulty is keigo on the phone, not memorizing phone numbers — a distractor that recycles a keyword with the wrong meaning.',
  },
  {
    id: 'n4-listening-pointo-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: '山本さん、今日は早く帰るんですか。具合が悪いんですか。' },
      { speaker: '男', text: 'いいえ、元気ですよ。今日、母が田舎から出てくるんです。' },
      { speaker: '女', text: 'そうですか。' },
      { speaker: '男', text: '母は東京の駅がよく分かりませんから、駅まで迎えに行ってあげなければならないんです。' },
      { speaker: '女', text: 'それは早く行ったほうがいいですね。残った仕事は私がやっておきますよ。' },
      { speaker: '男', text: 'すみません。お願いします。' },
    ],
    question: '男の人はどうして今日早く帰りますか。',
    options: ['母を駅まで迎えに行くから', '具合が悪いから', '病院へ行くから', '出張があるから'],
    answerIndex: 0,
    explanation:
      '男の人說「駅まで迎えに行ってあげなければならないんです」（〜てあげる＋〜なければならない：得去接她），早退是為了到車站接從鄉下來的母親。「具合が悪い」是女の人的猜測，被他以「いいえ、元気ですよ」直接否定，是典型的被否定干擾項；去醫院和出差在對話中都沒有出現。剩下的工作是女の人主動說「やっておきます」（〜ておく：先做好）幫忙處理。',
    explanationEn:
      'The man says 「駅まで迎えに行ってあげなければならないんです」 (〜てあげる plus 〜なければならない: he has to go pick her up) — he is leaving early to meet his mother, who is coming up from the countryside, at the station. Feeling unwell is the woman\'s guess, immediately denied with 「いいえ、元気ですよ」— a classic denied distractor; the hospital and a business trip never come up. As for the leftover work, the woman volunteers 「やっておきます」 (〜ておく: to take care of it in advance).',
  },
  {
    id: 'n4-listening-pointo-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で女の学生と男の学生がバスケットボールの試合について話しています。' },
      { speaker: '女', text: '明日の試合、10時からだよね。' },
      { speaker: '男', text: 'あ、それが、変わったんだ。体育館が午前中、工事で使えなくなって、午後1時からになったよ。' },
      { speaker: '女', text: 'そうなんだ。じゃあ、集合は何時？' },
      { speaker: '男', text: '12時半に体育館の前だよ。' },
      { speaker: '女', text: 'わかった。試合は何時ごろ終わるの？' },
      { speaker: '男', text: '3時ごろだと思うよ。' },
    ],
    question: '明日の試合は何時から始まりますか。',
    options: ['午後1時', '午前10時', '12時半', '午後3時'],
    answerIndex: 0,
    explanation:
      '男の学生說時間改了：「体育館が午前中、工事で使えなくなって、午後1時からになったよ」，所以比賽從下午1點開始。「午前10時」是變更前的舊時間，是被更正的干擾項；「12時半」是集合的時間，不是比賽開始的時間；「午後3時」是預計結束的時間，方向剛好相反。',
    explanationEn:
      'The male student explains that the time has changed: 「体育館が午前中、工事で使えなくなって、午後1時からになったよ」— the gym is unavailable in the morning due to construction, so the game now starts at 1 p.m. Ten a.m. is the old, superseded time; 12:30 is when they gather (「12時半に体育館の前」), not the start; and 3 p.m. is when the game is expected to end.',
  },
  {
    id: 'n4-listening-pointo-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '学校で女の学生と男の学生が昼ご飯について話しています。' },
      { speaker: '女', text: '山口さんは、いつもお弁当だね。食堂は使わないの？高いから？' },
      { speaker: '男', text: 'いや、食堂は安いよ。実は、来年から一人で住むから、料理の練習をしたくて、毎朝自分でお弁当を作っているんだ。' },
      { speaker: '女', text: 'へえ、えらいね。作るのに時間がかかるでしょう？' },
      { speaker: '男', text: 'もう慣れたから、20分ぐらいでできるよ。' },
      { speaker: '女', text: 'すごいね。私も作ってみようかな。' },
    ],
    question: '男の学生はどうして毎日お弁当を作っていますか。',
    options: ['料理の練習をしたいから', '食堂は高いから', '短い時間で作れるから', '食堂の料理が嫌いだから'],
    answerIndex: 0,
    explanation:
      '男の学生說「来年から一人で住むから、料理の練習をしたくて、毎朝自分でお弁当を作っているんだ」，做便當是為了練習做菜。「食堂は高いから」是女の学生的猜測，被他以「いや、食堂は安いよ」否定，是典型的被否定干擾項；「20分ぐらいでできる」是熟練後花的時間，不是做便當的理由；討厭食堂的菜在對話中沒有出現。',
    explanationEn:
      'The male student says 「来年から一人で住むから、料理の練習をしたくて、毎朝自分でお弁当を作っているんだ」— he makes his own lunch every morning to practice cooking before living alone next year. The cafeteria being expensive is the female student\'s guess, denied with 「いや、食堂は安いよ」— a classic denied distractor; the twenty minutes is how long it takes him now that he is used to it, not his reason; and disliking the cafeteria food is never mentioned.',
  },
  {
    id: 'n4-listening-pointo-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '服の店で女の人と店の男の人が話しています。' },
      { speaker: '女', text: 'すみません、この白いシャツを一枚ください。' },
      { speaker: '男', text: 'ありがとうございます。あ、こちらの青いシャツは今、二枚買うと安くなりますよ。' },
      { speaker: '女', text: 'へえ、いいですね。じゃあ、青いのを二枚もらいます。' },
      { speaker: '男', text: 'では、白いシャツと青いシャツ二枚で、全部で三枚ですね。' },
      { speaker: '女', text: 'あ、ごめんなさい。やっぱり白はやめます。青だけにします。' },
      { speaker: '男', text: 'かしこまりました。' },
    ],
    question: '女の人はシャツを何枚買いますか。',
    options: ['2枚', '3枚', '1枚', '4枚'],
    answerIndex: 0,
    explanation:
      '女の人最後說「やっぱり白はやめます。青だけにします」，所以買的是藍色兩件、共2枚。「3枚」是店員一度確認的數量（白1件＋青2件），但白色隨後被取消，是被更正的干擾項；「1枚」是最初只買白色時的數量，也已經改變；「4枚」在對話中沒有出現。要聽到最後的更正才能答對。',
    explanationEn:
      'The woman finally says 「やっぱり白はやめます。青だけにします」, so she buys only the two blue shirts — two in total. Three is the count the clerk once confirmed (one white plus two blue), but the white shirt is then canceled, making it a corrected distractor; one was her very first order of just the white shirt, also superseded; four never appears. You must catch the last-minute change to answer correctly.',
  },
  {
    id: 'n4-listening-pointo-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '店のサービスカウンターで女の人と店の男の人が話しています。' },
      { speaker: '女', text: 'すみません、先週買ったこのかばんを返したいんですが。' },
      { speaker: '男', text: 'かしこまりました。色が気に入りませんでしたか。' },
      { speaker: '女', text: 'いいえ、色は気に入っています。ポケットの数もちょうどいいんです。でも、思ったより重くて、肩が痛くなってしまって。' },
      { speaker: '男', text: 'そうでしたか。壊れているところはありませんね。' },
      { speaker: '女', text: 'はい、ありません。お願いします。' },
    ],
    question: '女の人はどうしてかばんを返しますか。',
    options: ['かばんが重いから', '色が気に入らないから', 'ポケットが少ないから', 'かばんが壊れていたから'],
    answerIndex: 0,
    explanation:
      '女の人說「思ったより重くて、肩が痛くなってしまって」，退貨的原因是包包比想像中重、背了肩膀痛。「色」被她以「色は気に入っています」否定；「ポケットが少ない」也被「ポケットの数もちょうどいいんです」否定；「壊れていた」被最後的「はい、ありません」排除。三個干擾項都是對話中出現但被否定的資訊。',
    explanationEn:
      'The woman explains 「思ったより重くて、肩が痛くなってしまって」— the bag is heavier than she expected and makes her shoulder hurt, so weight is why she returns it. The color is ruled out by 「色は気に入っています」; too few pockets by 「ポケットの数もちょうどいいんです」; and damage by her final 「はい、ありません」— all three distractors are details mentioned in the conversation and then denied.',
  },
  {
    id: 'n4-listening-pointo-015',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '女の人と男の人が駅前の本屋のセールについて話しています。' },
      { speaker: '女', text: '駅前の本屋、セールをするそうですよ。今日からですか。' },
      { speaker: '男', text: 'いえ、私は木曜日からだと聞きましたが……。ちょっと店に電話で聞いてみますね。' },
      { speaker: '女', text: 'お願いします。' },
      { speaker: '男', text: 'わかりました。セールは金曜日から日曜日までだそうです。' },
      { speaker: '女', text: '金曜日からですね。じゃあ、金曜日の朝、一緒に行きませんか。' },
      { speaker: '男', text: 'いいですね。そうしましょう。' },
    ],
    question: '本屋のセールはいつから始まりますか。',
    options: ['金曜日', '今日', '木曜日', '日曜日'],
    answerIndex: 0,
    explanation:
      '男の人打電話向書店確認後說「セールは金曜日から日曜日までだそうです」（〜そうだ：傳聞），所以特賣從星期五開始。「今日から」是女の人一開始的猜測，「木曜日」是男の人原本聽說的日期，兩者都被電話確認的結果更正，是被否定的干擾項；「日曜日」是特賣結束的日子，不是開始的日子。',
    explanationEn:
      'After phoning the bookstore, the man reports 「セールは金曜日から日曜日までだそうです」 (〜そうだ: hearsay), so the sale starts on Friday. "From today" is the woman\'s initial guess and Thursday is what the man had heard before — both are overridden by the phone confirmation, making them denied distractors; Sunday is the day the sale ends, not when it begins.',
  },
  {
    id: 'n4-listening-pointo-016',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '駅のホームで女の人と男の人が話しています。' },
      { speaker: '女', text: 'あれ、10時の電車、まだ来ませんね。' },
      { speaker: '男', text: 'さっき放送がありましたよ。動物が線路に入って、20分ぐらい遅れるそうです。' },
      { speaker: '女', text: 'じゃあ、10時20分ですね。喫茶店でコーヒーでも飲んで来ようかな。' },
      { speaker: '男', text: '20分しかありませんから、危ないですよ。ホームの椅子で待ちましょう。' },
      { speaker: '女', text: 'そうですね。そうします。' },
    ],
    question: '電車は何時ごろ来ますか。',
    options: ['10時20分ごろ', '10時ちょうど', '9時40分ごろ', '10時40分ごろ'],
    answerIndex: 0,
    explanation:
      '男の人轉述廣播內容：「動物が線路に入って、20分ぐらい遅れるそうです」（〜そうだ：傳聞），10點的電車誤點約20分鐘，所以大約10點20分才會來。「10時ちょうど」是原本的時刻表時間，已被誤點的消息更正；「9時40分」在對話中沒有出現；「10時40分」把誤點算成40分鐘，數字錯誤。',
    explanationEn:
      'The man relays the station announcement: 「動物が線路に入って、20分ぐらい遅れるそうです」 (〜そうだ: hearsay) — an animal got onto the tracks and the 10 o\'clock train is about twenty minutes late, so it arrives around 10:20. Ten sharp is the original timetable, now superseded by the delay; 9:40 never comes up; and 10:40 miscalculates the delay as forty minutes.',
  },
  {
    id: 'n4-listening-pointo-017',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '駅で近所の男の人と女の人が話しています。' },
      { speaker: '男', text: 'おはようございます。田中さん、いつもこの6時半の電車ですね。会社は8時半からでしょう？早いですね。' },
      { speaker: '女', text: 'ええ。でも、仕事が早く始まるからじゃないんです。7時半の電車は人が多くて、座れないんですよ。' },
      { speaker: '男', text: 'ああ、確かにあの時間は込みますね。' },
      { speaker: '女', text: 'この電車なら必ず座れますから、座って本を読んで行くんです。' },
      { speaker: '男', text: 'なるほど。それはいいですね。' },
    ],
    question: '女の人はどうして早い電車に乗りますか。',
    options: ['座って行きたいから', '仕事が早く始まるから', '会社が遠いから', '朝ご飯を会社で食べるから'],
    answerIndex: 0,
    explanation:
      '女の人說「この電車なら必ず座れますから、座って本を読んで行くんです」（座れる：可能形），搭早班車是因為一定有位子坐。「仕事が早く始まるから」被她自己以「仕事が早く始まるからじゃないんです」直接否定，是典型的被否定干擾項；公司很遠、在公司吃早餐對話中都沒有出現，而且上班時間是8點半，並不特別早。',
    explanationEn:
      'The woman says 「この電車なら必ず座れますから、座って本を読んで行くんです」 (座れる: potential form) — she takes the earlier train because she can always get a seat and read on the way. Work starting early is denied in her own words, 「仕事が早く始まるからじゃないんです」— a classic denied distractor; the office being far away and eating breakfast at work are never mentioned, and her workday starts at 8:30, hardly early.',
  },
  {
    id: 'n4-listening-pointo-018',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '駅の窓口で男の人と駅員の女の人が話しています。' },
      { speaker: '男', text: 'すみません、青海行きの切符をください。大人二枚と、子ども二枚です。' },
      { speaker: '女', text: 'お子様はおいくつですか。' },
      { speaker: '男', text: '上の子は8歳で、下の子は5歳です。' },
      { speaker: '女', text: '5歳のお子様は切符が要りませんよ。無料です。' },
      { speaker: '男', text: 'そうなんですか。じゃあ、大人二枚と子ども一枚でお願いします。' },
      { speaker: '女', text: 'かしこまりました。' },
    ],
    question: '男の人は切符を全部で何枚買いますか。',
    options: ['3枚', '4枚', '2枚', '5枚'],
    answerIndex: 0,
    explanation:
      '男の人原本要買「大人二枚と子ども二枚」，但駅員說明「5歳のお子様は切符が要りませんよ。無料です」，他於是改成「大人二枚と子ども一枚」，所以總共買3張。「4枚」是更正前的數量，是被否定的干擾項；「2枚」漏算了8歲孩子要買的兒童票；「5枚」在對話中沒有出現。',
    explanationEn:
      'The man first asks for two adult and two child tickets, but the clerk explains 「5歳のお子様は切符が要りませんよ。無料です」— the five-year-old rides free — so he changes his order to 「大人二枚と子ども一枚」: three tickets in total. Four is the pre-correction number, a denied distractor; two forgets the child ticket the eight-year-old still needs; five never appears in the conversation.',
  },
  {
    id: 'n4-listening-pointo-019',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で男の人と女の人が話しています。' },
      { speaker: '男', text: 'ただいま。あれ、今日は晩ご飯、作らないの？' },
      { speaker: '女', text: 'うん、今晩は外で食べようと思って。' },
      { speaker: '男', text: 'いいね。あ、もしかして、今日、誕生日だった？' },
      { speaker: '女', text: '違うよ。私の誕生日は来週でしょう？今日の午後からガスが止まっていて、料理ができないの。ガス会社の工事で、夜9時まで使えないんだって。' },
      { speaker: '男', text: 'そうなんだ。じゃあ、駅前の新しい店に行ってみようか。' },
      { speaker: '女', text: 'うん、そうしよう。' },
    ],
    question: '二人はどうして今晩、外で食べますか。',
    options: ['ガスが止まっていて料理ができないから', '女の人の誕生日だから', '料理を作りたくないから', '新しい店が安いから'],
    answerIndex: 0,
    explanation:
      '女の人說「今日の午後からガスが止まっていて、料理ができないの」，因為瓦斯公司施工、晚上9點前都不能用瓦斯，所以今晚在外面吃。「誕生日」是男の人的猜測，被她以「違うよ。私の誕生日は来週でしょう？」否定，是典型的被否定干擾項；不想做菜、新開的店比較便宜在對話中都沒有出現。',
    explanationEn:
      'The woman explains 「今日の午後からガスが止まっていて、料理ができないの」— the gas has been off since this afternoon because of utility company work and stays unusable until 9 p.m., so they will eat out tonight. The birthday is the man\'s guess, denied with 「違うよ。私の誕生日は来週でしょう？」— hers is next week; not wanting to cook and the new restaurant being cheap are never mentioned.',
  },
  {
    id: 'n4-listening-pointo-020',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '家で母親と息子が話しています。' },
      { speaker: '男', text: 'お母さん、今度の日曜日、おばあちゃんの家に行くんだよね。' },
      { speaker: '女', text: 'それがね、おばあちゃん、日曜日は出かけるんだって。だから、土曜日に行くことにしたよ。' },
      { speaker: '男', text: '土曜日か。午後は友だちとサッカーの約束があるんだけど……。' },
      { speaker: '女', text: '大丈夫。お昼を一緒に食べて、2時ごろには帰るから。朝10時に家を出るよ。' },
      { speaker: '男', text: 'よかった。わかった。' },
    ],
    question: '二人はいつおばあちゃんの家に行きますか。',
    options: ['今度の土曜日', '今度の日曜日', '来週の日曜日', '今日の午後'],
    answerIndex: 0,
    explanation:
      '母親說奶奶星期日要出門，「だから、土曜日に行くことにしたよ」（〜ことにする：表示決定），所以是這個星期六去。「日曜日」是原本的計畫，因為奶奶有事被更正，是被否定的干擾項；「来週の日曜日」和「今日の午後」在對話中都沒有出現；而且母親說吃完午餐2點左右就回家，不影響兒子下午的足球約定。',
    explanationEn:
      'The mother says the grandmother will be out on Sunday, 「だから、土曜日に行くことにしたよ」 (〜ことにする: to decide on), so they will visit this Saturday. Sunday was the original plan, corrected because of the grandmother\'s outing — a denied distractor; next Sunday and this afternoon never come up; and since they will be home by around two after lunch, the son\'s afternoon soccer plans are safe.',
  },
]

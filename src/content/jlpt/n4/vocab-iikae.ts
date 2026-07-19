import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-001',
    stem: 'きのう 田中さんの 家へ 行きましたが、【るす】でした。',
    stemReading: 'きのうたなかさんのいえへいきましたがるすでした',
    options: [
      '田中さんは 家に いませんでした。',
      '田中さんは 家で 寝て いました。',
      '田中さんは 家に いました。',
      '田中さんの 家は 遠かったです。',
    ],
    answerIndex: 0,
    explanation:
      '「るす」（留守）指「人不在家」，等於「家に いませんでした」。「寝て いました」是在家睡覺，人其實在家；「家に いました」方向完全相反；「家は 遠かったです」講的是距離遠，和在不在家無關，皆不等值。',
    explanationEn:
      '「るす」 (留守) means being away from home, so it equals 「家に いませんでした」 (he wasn\'t home). 「寝て いました」 means he was asleep at home — he was actually there; 「家に いました」 says the exact opposite; 「家は 遠かったです」 is about distance and says nothing about whether he was in.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-002',
    stem: '母は 朝ごはんの 【したく】を して います。',
    stemReading: 'はははあさごはんのしたくをしています',
    options: [
      '母は 朝ごはんの じゅんびを して います。',
      '母は 朝ごはんを 食べて います。',
      '母は 朝ごはんの かたづけを して います。',
      '母は 朝ごはんを 買いに 行きました。',
    ],
    answerIndex: 0,
    explanation:
      '「したく」（支度）＝「じゅんび」（準備），指做飯前的準備工作。「食べて います」是已經在吃，不是準備；「かたづけ」是飯後收拾，時間方向相反；「買いに 行きました」只是去買東西，和在家做準備不同，皆不等值。',
    explanationEn:
      '「したく」 (支度) means the same as 「じゅんび」 — preparations, here getting breakfast ready. 「食べて います」 means she is already eating, not preparing; 「かたづけ」 is the cleaning up done after the meal — the opposite end of it; 「買いに 行きました」 is just going out shopping, not preparing at home.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-003',
    stem: 'その ニュースを 聞いて、とても 【おどろきました】。',
    stemReading: 'そのにゅーすをきいてとてもおどろきました',
    options: [
      'その ニュースを 聞いて、とても びっくりしました。',
      'その ニュースを 聞いて、とても よろこびました。',
      'その ニュースを 聞いて、とても かなしく なりました。',
      'その ニュースを 聞いて、とても つかれました。',
    ],
    answerIndex: 0,
    explanation:
      '「おどろく」（驚訝）＝口語的「びっくりする」，意思最接近。「よろこびました」是高興、「かなしく なりました」是難過，都是具體的喜怒哀樂而非驚訝；「つかれました」是疲累，和聽到消息的反應無關，皆不等值。',
    explanationEn:
      '「おどろく」 (to be surprised) matches the more colloquial 「びっくりする」, the closest in meaning. 「よろこびました」 means being glad and 「かなしく なりました」 means becoming sad — specific emotions, not surprise; 「つかれました」 (got tired) is unrelated to reacting to news.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-004',
    stem: '【きゅうに】 雨が ふって きました。',
    stemReading: 'きゅうにあめがふってきました',
    options: [
      'とつぜん 雨が ふって きました。',
      'すこしずつ 雨が ふって きました。',
      'やっと 雨が ふって きました。',
      'また 雨が ふって きました。',
    ],
    answerIndex: 0,
    explanation:
      '「きゅうに」（急に，突然）＝「とつぜん」。「すこしずつ」是一點一點慢慢地，變化速度和「突然」正好相反；「やっと」是「終於」，帶有等了很久的語感；「また」是「又、再次」，講次數而非突然性，皆不等值。',
    explanationEn:
      '「きゅうに」 (急に, suddenly) is equivalent to 「とつぜん」. 「すこしずつ」 means little by little — the opposite pace of change; 「やっと」 means "finally" and implies a long wait; 「また」 means "again", which is about repetition rather than suddenness.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-005',
    stem: 'この 川で およぐのは 【きけんです】。',
    stemReading: 'このかわでおよぐのはきけんです',
    options: [
      'この 川で およぐのは あぶないです。',
      'この 川で およぐのは むずかしいです。',
      'この 川で およぐのは あんぜんです。',
      'この 川で およぐのは たいへんです。',
    ],
    answerIndex: 0,
    explanation:
      '「きけん」（危険）＝「あぶない」（危險）。「あんぜんです」是「安全」，方向完全相反；「むずかしいです」是難度高、「たいへんです」是辛苦費力，都只講困難程度，沒有「有生命危險」的意思，皆不等值。',
    explanationEn:
      '「きけん」 (危険) means the same as 「あぶない」 (dangerous). 「あんぜんです」 means "safe" — the exact opposite; 「むずかしいです」 (difficult) and 「たいへんです」 (tough, demanding) only describe difficulty and carry no sense of danger to life.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-006',
    stem: '【だんだん】 さむく なって きました。',
    stemReading: 'だんだんさむくなってきました',
    options: [
      'すこしずつ さむく なって きました。',
      'きゅうに さむく なって きました。',
      'まえより あつく なって きました。',
      'ずっと さむい ままです。',
    ],
    answerIndex: 0,
    explanation:
      '「だんだん」（漸漸地）＝「すこしずつ」，表示慢慢變化。「きゅうに」是突然一下子變冷，變化速度不同；「あつく なって きました」是變熱，方向相反；「ずっと さむい ままです」是一直維持寒冷、沒有變化，皆不等值。',
    explanationEn:
      '「だんだん」 (gradually) equals 「すこしずつ」, describing slow change. 「きゅうに」 would mean it turned cold all at once — a different pace; 「あつく なって きました」 means getting hotter, the opposite direction; 「ずっと さむい ままです」 means it has stayed cold with no change at all.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-007',
    stem: 'きょうの テストは 【ひじょうに】 むずかしかったです。',
    stemReading: 'きょうのてすとはひじょうにむずかしかったです',
    options: [
      'きょうの テストは とても むずかしかったです。',
      'きょうの テストは すこし むずかしかったです。',
      'きょうの テストは ぜんぜん むずかしくなかったです。',
      'きょうの テストは いつもより かんたんでした。',
    ],
    answerIndex: 0,
    explanation:
      '「ひじょうに」（非常に）＝「とても」，表示程度很高。「すこし」只有一點點難，程度不等值；「ぜんぜん むずかしくなかった」是完全不難、「いつもより かんたんでした」是比平常簡單，兩者方向都相反。',
    explanationEn:
      '「ひじょうに」 (非常に) equals 「とても」, marking a very high degree. 「すこし」 means only a little difficult — a much weaker degree; 「ぜんぜん むずかしくなかったです」 (not difficult at all) and 「いつもより かんたんでした」 (easier than usual) both reverse the meaning entirely.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-008',
    stem: 'わたしは 友だちに 【あやまりました】。',
    stemReading: 'わたしはともだちにあやまりました',
    options: [
      'わたしは 友だちに 「ごめんなさい」と 言いました。',
      'わたしは 友だちに 「ありがとう」と 言いました。',
      'わたしは 友だちに 「おめでとう」と 言いました。',
      'わたしは 友だちに 「さようなら」と 言いました。',
    ],
    answerIndex: 0,
    explanation:
      '「あやまる」（謝る，道歉）＝說「ごめんなさい」。「ありがとう」是道謝（あやまる和「ありがとう」常被混淆，但道歉是「謝罪」不是「感謝」）；「おめでとう」是祝賀；「さようなら」是道別，皆不是道歉。',
    explanationEn:
      '「あやまる」 (謝る, to apologize) means saying 「ごめんなさい」. 「ありがとう」 is thanking — learners often mix up apologizing and thanking, but あやまる is apology, not gratitude; 「おめでとう」 is congratulating; 「さようなら」 is saying goodbye. None of them are an apology.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-009',
    stem: 'きのう 京都の お寺を 【けんぶつしました】。',
    stemReading: 'きのうきょうとのおてらをけんぶつしました',
    options: [
      'きのう 京都の お寺を 見に 行きました。',
      'きのう 京都の お寺を そうじしました。',
      'きのう 京都の お寺に とまりました。',
      'きのう 京都の お寺の 話を 聞きました。',
    ],
    answerIndex: 0,
    explanation:
      '「けんぶつ」（見物）＝去參觀、遊覽，等於「見に 行きました」。「そうじしました」是打掃、「とまりました」是住宿，都不是參觀；「話を 聞きました」只是聽別人說，並沒有親自去看，皆不等值。',
    explanationEn:
      '「けんぶつ」 (見物) means going to see the sights, so it equals 「見に 行きました」 (went to see it). 「そうじしました」 is cleaning and 「とまりました」 is staying overnight — neither is sightseeing; 「話を 聞きました」 means only hearing about the temple without actually going to see it.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-010',
    stem: '【さいきん】、あまり 運動して いません。',
    stemReading: 'さいきんあまりうんどうしていません',
    options: [
      'このごろ、あまり 運動して いません。',
      'むかしは、あまり 運動して いませんでした。',
      'きのうだけ、運動しませんでした。',
      'これからは、運動しない つもりです。',
    ],
    answerIndex: 0,
    explanation:
      '「さいきん」（最近）＝「このごろ」，指離現在很近的這段期間。「むかしは」是很久以前，時間方向相反；「きのうだけ」只限昨天一天，範圍不等值；「これからは」講的是未來的打算，不是最近的狀態。',
    explanationEn:
      '「さいきん」 (recently) equals 「このごろ」 (these days), the period leading up to now. 「むかしは」 points to the distant past — the wrong time frame; 「きのうだけ」 limits it to just yesterday, far too narrow; 「これからは」 talks about future plans, not the recent state of things.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-011',
    stem: 'きょうは 電車が 【すいて いました】。',
    stemReading: 'きょうはでんしゃがすいていました',
    options: [
      'きょうは 電車に 人が すくなかったです。',
      'きょうは 電車に 人が おおかったです。',
      'きょうは 電車が はやく 来ました。',
      'きょうは 電車が 止まって いました。',
    ],
    answerIndex: 0,
    explanation:
      '「すいて いる」（空いている）指車廂空、人少，等於「人が すくなかった」。「人が おおかった」是「こんで いた」（擁擠），方向完全相反；「はやく 来ました」講班次時間；「止まって いました」是停駛，皆與人多人少無關。',
    explanationEn:
      '「すいて いる」 (空いている) means the train was uncrowded, so it equals 「人が すくなかったです」 (there were few people). 「人が おおかったです」 describes a crowded train (こんで いた) — the exact opposite; 「はやく 来ました」 is about arrival time and 「止まって いました」 means the train had stopped — neither relates to how crowded it was.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-012',
    stem: 'レストランで 家族と 【しょくじを しました】。',
    stemReading: 'れすとらんでかぞくとしょくじをしました',
    options: [
      'レストランで 家族と ごはんを 食べました。',
      'レストランで 家族と 話だけ しました。',
      'レストランで 家族と 買い物を しました。',
      'レストランで 家族と りょうりを 作りました。',
    ],
    answerIndex: 0,
    explanation:
      '「しょくじを する」（食事をする）＝「ごはんを 食べる」（吃飯）。「話だけ しました」是只聊天沒吃東西；「買い物を しました」是購物；「りょうりを 作りました」是做菜，做菜不等於用餐，皆不等值。',
    explanationEn:
      '「しょくじを する」 (食事をする) means the same as 「ごはんを 食べる」 — to have a meal. 「話だけ しました」 means only talking without eating; 「買い物を しました」 is shopping; 「りょうりを 作りました」 is cooking, and cooking is not the same as eating a meal.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-013',
    stem: 'この ペンを 使っても 【かまいません】よ。',
    stemReading: 'このぺんをつかってもかまいませんよ',
    options: [
      'この ペンを 使っても いいですよ。',
      'この ペンを 使っては いけませんよ。',
      'この ペンを 使わなければ なりませんよ。',
      'この ペンを 使わないで くださいよ。',
    ],
    answerIndex: 0,
    explanation:
      '「〜ても かまいません」＝「〜ても いいです」，表示許可（做了也沒關係）。「〜ては いけません」和「〜ないで ください」都是禁止，方向相反；「〜なければ なりません」是義務（非用不可），把「可以用」變成「必須用」，語意過強不等值。',
    explanationEn:
      '「〜ても かまいません」 equals 「〜ても いいです」, granting permission — it\'s fine to do it. 「〜ては いけません」 and 「〜ないで ください」 are both prohibitions, the opposite direction; 「〜なければ なりません」 expresses obligation, turning "you may use it" into "you must use it", which is far too strong.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-014',
    stem: 'きょうの しゅくだいは 【やさしかったです】。',
    stemReading: 'きょうのしゅくだいはやさしかったです',
    options: [
      'きょうの しゅくだいは かんたんでした。',
      'きょうの しゅくだいは むずかしかったです。',
      'きょうの しゅくだいは すくなかったです。',
      'きょうの しゅくだいは おもしろかったです。',
    ],
    answerIndex: 0,
    explanation:
      '「やさしい」（易しい，簡單）＝「かんたん」（簡単）。「むずかしかった」是難，方向相反；「すくなかった」講的是量少，量少不代表簡單；「おもしろかった」是有趣，和難易度是不同層面，皆不等值。',
    explanationEn:
      '「やさしい」 (易しい, easy) equals 「かんたん」 (簡単, simple). 「むずかしかったです」 means difficult — the opposite; 「すくなかったです」 is about the amount of homework, and a small amount isn\'t necessarily easy; 「おもしろかったです」 means interesting, a completely different dimension from difficulty.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-015',
    stem: '山の 上から 見た けしきは 【うつくしかったです】。',
    stemReading: 'やまのうえからみたけしきはうつくしかったです',
    options: [
      '山の 上から 見た けしきは きれいでした。',
      '山の 上から 見た けしきは めずらしかったです。',
      '山の 上から けしきは よく 見えませんでした。',
      '山の 上から 見た けしきは こわかったです。',
    ],
    answerIndex: 0,
    explanation:
      '「うつくしい」（美しい，美麗）＝「きれい」。「めずらしかった」是罕見稀奇，稀奇不等於美；「よく 見えませんでした」是看不清楚，根本沒欣賞到景色；「こわかった」是可怕，方向相反，皆不等值。',
    explanationEn:
      '「うつくしい」 (美しい, beautiful) equals 「きれい」. 「めずらしかったです」 means rare or unusual, which is not the same as beautiful; 「よく 見えませんでした」 means the view couldn\'t be seen properly at all; 「こわかったです」 means scary — the opposite kind of impression.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-016',
    stem: '先生は わたしの さくぶんを 【ほめました】。',
    stemReading: 'せんせいはわたしのさくぶんをほめました',
    options: [
      '先生は 「じょうずに 書けましたね」と 言いました。',
      '先生は 「ここが まちがって いますよ」と 言いました。',
      '先生は 「もう いちど 書いて ください」と 言いました。',
      '先生は 「あした 出して ください」と 言いました。',
    ],
    answerIndex: 0,
    explanation:
      '「ほめる」（褒める，稱讚）＝說「寫得很好」這類肯定的話。「まちがって いますよ」是指出錯誤，接近「注意する」；「もう いちど 書いて ください」是要求重寫，表示不滿意；「あした 出して ください」只是交件指示，皆不是稱讚。',
    explanationEn:
      '「ほめる」 (褒める, to praise) means saying something approving like 「じょうずに 書けましたね」 (you wrote it well). Pointing out 「ここが まちがって いますよ」 is correcting, closer to a warning; 「もう いちど 書いて ください」 asks for a rewrite, implying dissatisfaction; 「あした 出して ください」 is just a submission instruction, not praise.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-017',
    stem: 'その えいがは 【ちっとも】 おもしろくなかったです。',
    stemReading: 'そのえいがはちっともおもしろくなかったです',
    options: [
      'その えいがは ぜんぜん おもしろくなかったです。',
      'その えいがは あまり おもしろくなかったです。',
      'その えいがは すこし おもしろかったです。',
      'その えいがは とても おもしろかったです。',
    ],
    answerIndex: 0,
    explanation:
      '「ちっとも〜ない」＝「ぜんぜん〜ない」，是全面否定（一點也不）。「あまり〜ない」只是「不太」，是部分否定，程度不等值；「すこし おもしろかった」承認有一點有趣，和全面否定矛盾；「とても おもしろかった」方向完全相反。',
    explanationEn:
      '「ちっとも〜ない」 equals 「ぜんぜん〜ない」 — a total negation, "not at all". 「あまり〜ない」 is only "not very", a partial negation of weaker degree; 「すこし おもしろかったです」 admits it was a bit interesting, contradicting the total negation; 「とても おもしろかったです」 is the complete opposite.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-018',
    stem: '会議の 時間が 決まったら、【しらせて】 ください。',
    stemReading: 'かいぎのじかんがきまったらしらせてください',
    options: [
      '会議の 時間が 決まったら、教えて ください。',
      '会議の 時間が 決まったら、しらべて ください。',
      '会議の 時間が 決まったら、書いて おいて ください。',
      '会議の 時間を はやく 決めて ください。',
    ],
    answerIndex: 0,
    explanation:
      '「しらせる」（知らせる，通知）＝「教える」（告訴我）。「しらべる」（調べる）是「調查」，只是字形相近意思完全不同；「書いて おいて ください」是先寫下來，沒有傳達給我；「はやく 決めて ください」是催促決定，不是要求通知。',
    explanationEn:
      '「しらせる」 (知らせる, to notify) equals 「教える」 here — let me know. 「しらべる」 (調べる) means "to look into/investigate" — it looks similar but means something completely different; 「書いて おいて ください」 is writing it down without telling me; 「はやく 決めて ください」 urges a decision rather than asking to be informed.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-019',
    stem: '弟は まいにち 【ねっしんに】 べんきょうして います。',
    stemReading: 'おとうとはまいにちねっしんにべんきょうしています',
    options: [
      '弟は まいにち いっしょうけんめい べんきょうして います。',
      '弟は ときどき べんきょうして います。',
      '弟は あそびながら べんきょうして います。',
      '弟は すこしだけ べんきょうして います。',
    ],
    answerIndex: 0,
    explanation:
      '「ねっしんに」（熱心に，認真投入地）＝「いっしょうけんめい」（一生懸命，拚命努力地）。「ときどき」講頻率不講態度，且和「まいにち」矛盾；「あそびながら」是邊玩邊讀，態度相反；「すこしだけ」是只讀一點點，程度不等值。',
    explanationEn:
      '「ねっしんに」 (熱心に, earnestly) equals 「いっしょうけんめい」 (一生懸命, with all one\'s effort). 「ときどき」 (sometimes) is about frequency, not attitude, and contradicts 「まいにち」; 「あそびながら」 (while playing) is the opposite attitude; 「すこしだけ」 (only a little) is a much weaker degree.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-020',
    stem: 'すぐ 【もどります】から、ここで 待って いて ください。',
    stemReading: 'すぐもどりますからここでまっていてください',
    options: [
      'すぐ また ここに 来ますから、ここで 待って いて ください。',
      'きょうは もう ここに 来ませんから、ここで 待って いて ください。',
      'ゆっくり 行きますから、ここで 待って いて ください。',
      'はじめて ここに 来ますから、ここで 待って いて ください。',
    ],
    answerIndex: 0,
    explanation:
      '「もどる」（戻る，返回原處）＝「また ここに 来る」（再回到這裡）。「もう 来ません」是不再回來，方向完全相反且與「請等我」矛盾；「ゆっくり 行きます」講的是離開的速度；「はじめて 来ます」是第一次來，沒有「回來」的意思。',
    explanationEn:
      '「もどる」 (戻る, to return to where one was) equals 「また ここに 来る」 (to come back here). 「もう 来ません」 means never coming back — the exact opposite, contradicting "please wait here"; 「ゆっくり 行きます」 is about how slowly one leaves; 「はじめて 来ます」 means coming for the first time, with no sense of returning.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-021',
    stem: '日曜日は 【たいてい】 家に います。',
    stemReading: 'にちようびはたいていいえにいます',
    options: [
      '日曜日は ほとんど いつも 家に います。',
      '日曜日は ときどき 家に います。',
      '日曜日は ぜんぜん 家に いません。',
      '日曜日だけ 家に いません。',
    ],
    answerIndex: 0,
    explanation:
      '「たいてい」（大抵）＝大多數時候、幾乎總是，等於「ほとんど いつも」。「ときどき」（有時）頻率低得多，程度不等值；「ぜんぜん〜いません」是完全不在家，方向相反；「日曜日だけ〜いません」變成只有星期日不在，語意完全不同。',
    explanationEn:
      '「たいてい」 means most of the time, equal to 「ほとんど いつも」 (almost always). 「ときどき」 (sometimes) is a much lower frequency; 「ぜんぜん〜いません」 means never being home — the opposite; 「日曜日だけ〜いません」 changes it to being out only on Sundays.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-022',
    stem: 'しゅくだいは 【ぜんぶ】 おわりました。',
    stemReading: 'しゅくだいはぜんぶおわりました',
    options: [
      'しゅくだいは みんな おわりました。',
      'しゅくだいは はんぶん おわりました。',
      'しゅくだいは まだ おわって いません。',
      'しゅくだいは すこしだけ おわりました。',
    ],
    answerIndex: 0,
    explanation:
      '「ぜんぶ」（全部）＝全都，等於口語的「みんな」，表示作業一項不剩全寫完了。「はんぶん」（一半）只完成一半，數量不等值；「まだ おわって いません」是還沒做完，方向相反；「すこしだけ」是只做了一點點，差距更大，皆不等值。',
    explanationEn:
      '「ぜんぶ」 (all) equals the colloquial 「みんな」 here — every last bit of the homework is done. 「はんぶん」 (half) means only half finished; 「まだ おわって いません」 means it is not done yet — the opposite; 「すこしだけ」 (just a little) is an even smaller amount.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-023',
    stem: '母の 元気な 声を 聞いて、【あんしんしました】。',
    stemReading: 'ははのげんきなこえをきいてあんしんしました',
    options: [
      '母の 元気な 声を 聞いて、もう しんぱいしなく なりました。',
      '母の 元気な 声を 聞いて、もっと しんぱいに なりました。',
      '母の 元気な 声を 聞いて、びっくりしました。',
      '母の 元気な 声を 聞いて、かなしく なりました。',
    ],
    answerIndex: 0,
    explanation:
      '「あんしんする」（安心する）＝放下心來，等於「もう しんぱいしなく なりました」（不再擔心了）。「もっと しんぱいに なりました」是變得更擔心，方向正好相反；「びっくりしました」是嚇一跳、「かなしく なりました」是變難過，都不是「放心」。',
    explanationEn:
      '「あんしんする」 (安心する, to be relieved) equals 「もう しんぱいしなく なりました」 — no longer worried. 「もっと しんぱいに なりました」 means becoming even more worried, the exact opposite; 「びっくりしました」 is being startled and 「かなしく なりました」 is becoming sad — neither is relief.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-024',
    stem: 'じゅぎょうは 【もうすぐ】 おわります。',
    stemReading: 'じゅぎょうはもうすぐおわります',
    options: [
      'じゅぎょうは あと すこしで おわります。',
      'じゅぎょうは たった いま おわりました。',
      'じゅぎょうは ずっと あとで おわります。',
      'じゅぎょうは もう おわって います。',
    ],
    answerIndex: 0,
    explanation:
      '「もうすぐ」＝馬上、再過不久，等於「あと すこしで」，表示課還沒結束但快了。「たった いま おわりました」和「もう おわって います」都是已經結束，時態不合；「ずっと あとで」是還要很久才結束，時間感相反，皆不等值。',
    explanationEn:
      '「もうすぐ」 (very soon) equals 「あと すこしで」 — class has not ended yet but will shortly. 「たった いま おわりました」 and 「もう おわって います」 both say it has already ended — the wrong tense; 「ずっと あとで」 means it will end much later, the opposite sense of timing.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-025',
    stem: '【このあいだ】、駅で 田中さんに 会いました。',
    stemReading: 'このあいだえきでたなかさんにあいました',
    options: [
      'すこし まえに、駅で 田中さんに 会いました。',
      'ずっと むかしに、駅で 田中さんに 会いました。',
      'きょう、駅で 田中さんに 会いました。',
      'まいにち、駅で 田中さんに 会って います。',
    ],
    answerIndex: 0,
    explanation:
      '「このあいだ」（この間）＝前幾天、不久前，等於「すこし まえに」。「ずっと むかしに」是很久以前，時間距離不等值；「きょう」是今天，又太近；「まいにち〜会って います」變成每天都見面，講的是頻率而非最近的某一次，皆不正確。',
    explanationEn:
      '「このあいだ」 (この間) means the other day, equal to 「すこし まえに」 (a little while ago). 「ずっと むかしに」 (long ago) is far too distant; 「きょう」 (today) is too recent; 「まいにち〜会って います」 turns it into meeting every day — frequency instead of one recent occasion.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-026',
    stem: 'みんな 【だまって】、先生の 話を 聞いて いました。',
    stemReading: 'みんなだまってせんせいのはなしをきいていました',
    options: [
      'みんな なにも 話さないで、先生の 話を 聞いて いました。',
      'みんな 大きな 声で 話しながら、先生の 話を 聞いて いました。',
      'みんな わらいながら、先生の 話を 聞いて いました。',
      'みんな ねながら、先生の 話を 聞いて いました。',
    ],
    answerIndex: 0,
    explanation:
      '「だまる」（黙る）＝閉口不說話。「だまって 聞いて いました」等於「なにも 話さないで 聞いて いました」。「大きな 声で 話しながら」是邊大聲講話邊聽，方向正好相反；「わらいながら」是邊笑、「ねながら」是邊睡，都不是「安靜不出聲」。',
    explanationEn:
      '「だまる」 (黙る) means to stay silent, so 「だまって 聞いて いました」 equals listening 「なにも 話さないで」 — without saying anything. 「大きな 声で 話しながら」 (talking loudly) is the exact opposite; 「わらいながら」 (while laughing) and 「ねながら」 (while sleeping) are different states, not silence.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-027',
    stem: 'かれは いつも 【まじめに】 はたらいて います。',
    stemReading: 'かれはいつもまじめにはたらいています',
    options: [
      'かれは いつも いっしょうけんめい はたらいて います。',
      'かれは いつも すこしだけ はたらいて います。',
      'かれは いつも あそびながら はたらいて います。',
      'かれは ぜんぜん はたらいて いません。',
    ],
    answerIndex: 0,
    explanation:
      '「まじめに」（真面目に）＝認真踏實地，等於「いっしょうけんめい」（一生懸命，拚命努力地）。「すこしだけ」是只做一點點，程度不等值；「あそびながら」是邊玩邊做，態度相反；「ぜんぜん はたらいて いません」是完全不工作，方向完全相反。',
    explanationEn:
      '「まじめに」 (真面目に, earnestly) equals 「いっしょうけんめい」 (一生懸命, with all one\'s effort). 「すこしだけ」 (only a little) is a much weaker degree; 「あそびながら」 (while playing around) is the opposite attitude; 「ぜんぜん はたらいて いません」 means not working at all — the complete opposite.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-028',
    stem: 'これは 【たいせつな】 しゃしんですから、なくさないで ください。',
    stemReading: 'これはたいせつなしゃしんですからなくさないでください',
    options: [
      'これは だいじな しゃしんですから、なくさないで ください。',
      'これは ふるい しゃしんですから、なくさないで ください。',
      'これは めずらしい しゃしんですから、なくさないで ください。',
      'これは やすい しゃしんですから、なくさないで ください。',
    ],
    answerIndex: 0,
    explanation:
      '「たいせつ」（大切）＝重要、珍貴，等於「だいじ」（大事）。「ふるい」（舊的）和「めずらしい」（罕見的）講的是照片的年代和稀有度，不等於「珍貴」；「やすい」（便宜的）更沒有珍惜的意思，皆不等值。',
    explanationEn:
      '「たいせつ」 (大切, precious) equals 「だいじ」 (大事). 「ふるい」 (old) and 「めずらしい」 (rare) describe the photo\'s age and rarity, which is not the same as being treasured; 「やすい」 (cheap) carries no sense of value at all.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-029',
    stem: 'けんこうの ために、まいあさ 【うんどうして】 います。',
    stemReading: 'けんこうのためにまいあさうんどうしています',
    options: [
      'けんこうの ために、まいあさ からだを うごかして います。',
      'けんこうの ために、まいあさ くすりを のんで います。',
      'けんこうの ために、まいばん はやく ねて います。',
      'けんこうの ために、まいあさ ほんを よんで います。',
    ],
    answerIndex: 0,
    explanation:
      '「うんどうする」（運動する）＝活動身體、做運動，等於「からだを うごかす」。「くすりを のんで います」是吃藥、「はやく ねて います」是早睡、「ほんを よんで います」是看書，雖然都可以是為了健康做的事，但都不是「運動」，皆不等值。',
    explanationEn:
      '「うんどうする」 (運動する, to exercise) equals 「からだを うごかす」 — moving your body. Taking medicine (「くすりを のんで います」), going to bed early, and reading books may all be done for health, but none of them is exercise.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-030',
    stem: 'そふは からだが 【つよくて】、ほとんど びょうきを しません。',
    stemReading: 'そふはからだがつよくてほとんどびょうきをしません',
    options: [
      'そふは からだが じょうぶで、ほとんど びょうきを しません。',
      'そふは からだが よわくて、よく びょうきを します。',
      'そふは ちからが なくて、おもい ものが もてません。',
      'そふは せが たかくて、とても 大きいです。',
    ],
    answerIndex: 0,
    explanation:
      '「からだが つよい」＝身體強健，等於「じょうぶ」（丈夫，結實硬朗），所以幾乎不生病。「よわくて、よく びょうきを します」方向完全相反；「ちからが なくて」講的是力氣小，不等於健康不好；「せが たかくて」講身高，和體質無關。',
    explanationEn:
      '「からだが つよい」 (having a strong constitution) equals 「じょうぶ」 (丈夫, robust), which is why he hardly ever gets sick. 「よわくて、よく びょうきを します」 is the exact opposite; 「ちからが なくて」 is about muscle strength, not health; 「せが たかくて」 is about height.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-031',
    stem: 'きょねん、【はじめて】 ひこうきに のりました。',
    stemReading: 'きょねんはじめてひこうきにのりました',
    options: [
      'きょねんまで、いちども ひこうきに のった ことが ありませんでした。',
      'きょねんも、なんかいも ひこうきに のりました。',
      'きょねんは、ひこうきに のりませんでした。',
      'むかしから、よく ひこうきに のって いました。',
    ],
    answerIndex: 0,
    explanation:
      '「はじめて」（初めて）＝第一次，表示去年之前一次也沒搭過飛機，等於「きょねんまで、いちども のった ことが ありませんでした」。「なんかいも」是搭過很多次、「よく のって いました」是以前常搭，都和第一次矛盾；「のりませんでした」是去年沒搭，方向相反。',
    explanationEn:
      '「はじめて」 (for the first time) means you had never been on a plane before last year, equal to 「きょねんまで、いちども のった ことが ありませんでした」. 「なんかいも」 (many times) and 「よく のって いました」 (used to fly often) contradict a first time; 「のりませんでした」 says you did not fly last year at all.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-iikae-032',
    stem: 'あしたの かいぎには 【かならず】 来て ください。',
    stemReading: 'あしたのかいぎにはかならずきてください',
    options: [
      'あしたの かいぎには ぜったいに 来て ください。',
      'あしたの かいぎには できれば 来て ください。',
      'あしたの かいぎには 来なくても いいです。',
      'あしたの かいぎには すこし はやく 来て ください。',
    ],
    answerIndex: 0,
    explanation:
      '「かならず」（必ず）＝一定、無論如何都要，等於「ぜったいに」。「できれば」（可以的話）把語氣弱化成有空再來，程度不等值；「来なくても いいです」是不來也行，方向相反；「すこし はやく 来て ください」講的是提早到，不是必須出席。',
    explanationEn:
      '「かならず」 (必ず, without fail) equals 「ぜったいに」 (absolutely). 「できれば」 (if possible) weakens it to "come if you can"; 「来なくても いいです」 says attendance is optional — the opposite; 「すこし はやく 来て ください」 is about coming early, not about having to come.',
  },
]

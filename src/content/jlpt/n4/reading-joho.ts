import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n4-reading-joho-001',
    kind: 'passage',
    passageTitle: 'さくら町夏祭り　ボランティア募集',
    passage:
      'さくら町夏祭り　ボランティア募集\n８月２日（土）にさくら公園で夏祭りを行います。手伝ってくれる人をさがしています。\n\n〔仕事〕\n①会場の準備　　８月１日（金）午後１時～５時　　中学生以上\n②飲み物の店　　８月２日（土）午前１０時～午後３時　　１８歳以上\n③子どもゲーム　８月２日（土）午後１時～６時　　中学生以上\n④後片付け　　　８月３日（日）午前９時～１２時　　どなたでも\n\n・申し込みは、７月２５日（金）までに、町のホームページからしてください。\n・②の仕事をする人は、７月３０日（水）の説明会に必ず出てください。\n・お弁当は、②と③の人にだけ出ます。\n\nさくら町　まつり事務所',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-joho-001-q1',
        stem: 'リンさんは１６歳の高校生で、土曜日しか手伝えません。リンさんができる仕事はどれですか。',
        options: [
          '③子どもゲーム',
          '②飲み物の店',
          '①会場の準備',
          '④後片付け',
        ],
        answerIndex: 0,
        explanation:
          '要同時比對「日期」與「年齡」兩個條件：林同學只有週六（８月２日）有空、年齡１６歲。①在週五、④在週日，日期不合；②雖在週六但要求「１８歳以上」，年齡不合。只有③「子どもゲーム」是週六且「中学生以上」，兩個條件都符合。',
        explanationEn:
          'Two conditions must be checked together: the date and the age. Rin is only free on Saturday (August 2) and is 16 years old. Job ① is on Friday and ④ is on Sunday, so the dates don\'t match; ② is on Saturday but requires 「１８歳以上」, so the age doesn\'t match. Only ③, the children\'s games, is on Saturday and open to 「中学生以上」, satisfying both conditions.',
      },
      {
        id: 'n4-reading-joho-001-q2',
        stem: '②の仕事をしたい人は、何をしなければなりませんか。',
        options: [
          '７月２５日までに申し込んで、７月３０日の説明会に出る',
          '７月３０日までにホームページから申し込む',
          '説明会に出れば、申し込みはしなくてもいい',
          '８月１日の会場の準備にも出る',
        ],
        answerIndex: 0,
        explanation:
          '做②的人有兩個條件：所有人共通的「７月２５日前從網站報名」，加上②專屬的「７月３０日の説明会に必ず出てください」，兩件事都要做。「７月３０日までに申し込む」把報名期限與說明會日期混在一起；「説明会に出れば申し込みはしなくてもいい」文中沒有這種替代規定；「準備にも出る」是①的工作，與②無關。',
        explanationEn:
          'People taking job ② have two requirements: the common rule of applying through the town website by July 25, plus the ②-specific rule 「７月３０日の説明会に必ず出てください」 — both must be done. "Apply by July 30" mixes up the application deadline with the briefing date; "if you attend the briefing you don\'t need to apply" is a substitute rule that appears nowhere in the notice; and helping with the venue setup is job ①, which has nothing to do with ②.',
      },
    ],
  },
  {
    id: 'n4-reading-joho-002',
    kind: 'passage',
    passageTitle: 'みどりスーパー　夏の特売',
    passage:
      'みどりスーパー　夏の特売\n７月１１日（金）～１３日（日）の３日間、特売を行います。\n\n・くだもの　　　　２割引（１１日だけ）\n・魚と肉　　　　　３割引（１２日だけ）\n・アイスクリーム　半額（３日間ずっと）\n\n★ポイントカードを持っている方が１，０００円以上買うと、たまごを一パックプレゼントします。\n★店の駐車場は工事中です。車で来る方は、となりの市営駐車場をご利用ください。２，０００円以上買った方は、駐車料金が１時間無料になります。\n\n・アイスクリームは、お一人様５つまでです。\n・特売の品物は、なくなりしだい終わりです。\n\n営業時間　午前９時～午後８時（３日間とも同じです）\nみなさまのご来店をお待ちしています。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-joho-002-q1',
        stem: '田中さんはポイントカードを持っています。１２日に肉を買って、全部で１，２００円払いました。田中さんは何がもらえますか。',
        options: [
          'たまごを一パックもらえる',
          'たまごと、駐車料金１時間無料の両方がもらえる',
          '何ももらえない',
          'アイスクリームが一つもらえる',
        ],
        answerIndex: 0,
        explanation:
          '拿雞蛋的條件有兩個：持有集點卡＋買滿１，０００円。田中兩者都符合，可拿一盒雞蛋。停車費１小時免費的條件是買滿２，０００円，田中只買了１，２００円，所以「両方がもらえる」不對；「何ももらえない」也錯，雞蛋的兩個條件已經達成；冰淇淋是半價商品，不是贈品。',
        explanationEn:
          'The free eggs have two conditions: having a point card and spending at least 1,000 yen. Tanaka meets both, so she gets one pack of eggs. The one hour of free parking requires spending at least 2,000 yen, and Tanaka spent only 1,200 yen, so "gets both" is wrong; "gets nothing" is also wrong, since both conditions for the eggs are met; and the ice cream is a half-price sale item, not a free gift.',
      },
      {
        id: 'n4-reading-joho-002-q2',
        stem: 'ヤンさんは、魚とアイスクリームの両方を安く買いたいです。いつ行けばいいですか。',
        options: [
          '１２日',
          '１１日',
          '１３日',
          '３日間のうち、いつでもいい',
        ],
        answerIndex: 0,
        explanation:
          '要比對兩樣商品的折扣日：魚只有１２日打七折（３割引），冰淇淋則三天都半價，兩個條件的交集只有１２日，這天兩樣都能便宜買到。「１１日」打折的是水果，魚是原價；「１３日」魚也是原價；「いつでもいい」錯在魚的折扣只限１２日一天。',
        explanationEn:
          'Compare the discount days of the two items: fish is 30% off (３割引) only on the 12th, while ice cream is half price on all three days. The only day both overlap is the 12th, when both can be bought cheaply. On the 11th the discount is on fruit and fish is full price; on the 13th fish is also full price; and "any of the three days" fails because the fish discount is limited to the 12th alone.',
      },
    ],
  },
  {
    id: 'n4-reading-joho-003',
    kind: 'passage',
    passageTitle: '電車の時間が変わります',
    passage:
      '電車をご利用のみなさまへ\n\n線路の工事のため、７月１４日（月）から１８日（金）まで、電車の時間が変わります。\n\n・午前９時から午後４時までは、ひかり駅～やま駅の間の電車が、１時間に２本になります（いつもは１時間に４本です）。\n・午前９時より前と、午後４時より後は、いつもどおりです。\n・１６日（水）は工事が休みのため、一日中いつもどおり走ります。\n・お急ぎの方は、駅前から出る臨時バスをご利用ください。臨時バスは、工事の間、毎日午前８時から午後６時まで、３０分ごとに出ます。料金は電車と同じです。\n・くわしい時間は、駅のポスターと、みなみ鉄道のホームページで見ることができます。\n\nご迷惑をおかけしますが、よろしくお願いします。\nみなみ鉄道',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-joho-003-q1',
        stem: '７月１６日（水）の午前１０時に、ひかり駅からやま駅まで電車で行きたいです。電車はどうなっていますか。',
        options: [
          'いつもどおり、１時間に４本ある',
          '１時間に２本になっている',
          '動いていないので、臨時バスに乗らなければならない',
          '午後４時まで走らない',
        ],
        answerIndex: 0,
        explanation:
          '要比對「日期」與「時間」兩個條件：１６日雖在工事期間（１４日～１８日）內、上午１０點也在減班時段（９時～１６時）內，但公告特別寫「１６日（水）は工事が休みのため、一日中いつもどおり走ります」，所以電車照常１小時４班。「１時間に２本」是１６日以外的平日白天才對；「動いていない」錯，工事期間電車只是減班，並沒有停駛。',
        explanationEn:
          'Both the date and the time must be checked: the 16th falls within the construction period (14th–18th) and 10 a.m. is within the reduced-service hours (9:00–16:00), but the notice specifically says 「１６日（水）は工事が休みのため、一日中いつもどおり走ります」, so trains run as usual at four per hour. "Two per hour" would only be true on the other weekdays during the daytime; "not running, so you must take the shuttle bus" is wrong — during the construction the trains are merely reduced, not stopped.',
      },
    ],
  },
  {
    id: 'n4-reading-joho-004',
    kind: 'passage',
    passageTitle: '来週のクラスについて',
    passage:
      '日本語教室のみなさんへ\n\n来週のクラスについて、お知らせします。\n\n・火曜日の会話クラスは、先生が出張のため、休みです。かわりに、金曜日の同じ時間（午後７時～９時）に行います。教室はいつもと同じ、３階の３０１教室です。\n・木曜日の漢字クラスは、いつもの３階の教室が使えないため、２階の２０１教室で行います。時間は変わりません。\n・金曜日に来られない会話クラスの人は、木曜日の漢字クラスに出てもいいです。出たい人は、水曜日までに、事務所にメールで知らせてください。\n・月曜日と水曜日のクラスは、いつもどおりです。\n・質問がある人は、事務所に聞いてください。事務所は、平日の午前１０時から午後５時まで開いています。\n\nさくら日本語教室　事務所',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-joho-004-q1',
        stem: '会話クラスのチンさんは、金曜日の夜はいつもアルバイトがあります。来週、クラスに出たいチンさんはどうしますか。',
        options: [
          '水曜日までに事務所にメールして、木曜日の漢字クラスに出る',
          '火曜日に、いつもの教室へ行く',
          '金曜日の午後７時に、３０１教室へ行く',
          '木曜日に、３階の教室へ行く',
        ],
        answerIndex: 0,
        explanation:
          '陳同學週五晚上要打工，不能去改到週五的会話クラス；公告說這種人可以改上週四的漢字クラス，但條件是「水曜日までに事務所にメールで知らせてください」，所以要先在週三前寄信，再去週四上課。「火曜日に行く」錯，週二已停課；「木曜日に３階へ行く」錯，漢字クラス的教室已改到２階的２０１教室。',
        explanationEn:
          'Chin works Friday evenings, so she can\'t attend the conversation class that was moved to Friday. The notice says such students may join the Thursday kanji class instead, on the condition 「水曜日までに事務所にメールで知らせてください」 — so she must email the office by Wednesday and then attend on Thursday. Going on Tuesday is wrong because that class is canceled; going to the third floor on Thursday is wrong because the kanji class has moved to room 201 on the second floor.',
      },
    ],
  },
  {
    id: 'n4-reading-joho-005',
    kind: 'passage',
    passageTitle: 'みなみ市民体育館　秋のスポーツ教室',
    passage:
      'みなみ市民体育館　秋のスポーツ教室\n１０月から１２月まで、四つの教室を行います。はじめての方も大丈夫です。\n\n①たっきゅう教室　　　毎週火曜日　午後７時～９時　　　１５歳以上　３，０００円\n②バドミントン教室　　毎週水曜日　午前１０時～１１時半　１５歳以上　３，０００円\n③ヨガ教室　　　　　　毎週金曜日　午前１０時～１１時　　どなたでも　２，５００円\n④子ども体操教室　　　毎週土曜日　午前９時～１０時　　　小学生　　　２，０００円\n\n・申し込みは、９月２０日（土）までに、体育館の受付か、ホームページからしてください。\n・ラケットとボールは、体育館のものを使うことができます。\n・ヨガ教室に出る方は、大きいタオルを持ってきてください。\n・お金は、教室のはじめての日に、受付ではらってください。\n\nみなみ市民体育館',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-joho-005-q1',
        stem: '会社員のパクさんは、月曜日から金曜日の午後６時まで仕事があります。パクさんが出られる教室はどれですか。',
        options: [
          '①たっきゅう教室',
          '②バドミントン教室',
          '③ヨガ教室',
          '④子ども体操教室',
        ],
        answerIndex: 0,
        explanation:
          '要比對「時間」與「對象」兩個條件：朴先生平日下午六點前都在工作，所以只能參加平日晚上或週末的教室。②和③都在平日上午，時間不合；④雖在週六上午，但對象限「小学生」，成人的朴先生不能參加。只有①桌球教室在週二晚上七點開始、對象１５歳以上，兩個條件都符合。',
        explanationEn:
          'Two conditions must be matched: the schedule and the eligibility. Pak works weekdays until 6 p.m., so only weekday-evening or weekend classes are possible. Classes ② and ③ are on weekday mornings, so the times don\'t work; ④ is on Saturday morning but is limited to 「小学生」, so an adult can\'t join. Only ①, the table-tennis class on Tuesday from 7 p.m. for ages 15 and up, satisfies both conditions.',
      },
      {
        id: 'n4-reading-joho-005-q2',
        stem: 'ヨガ教室に出たい人は、どうしますか。',
        options: [
          '９月２０日までに申し込んで、教室の日に大きいタオルを持って行く',
          '９月２０日までに、受付でお金をはらっておく',
          '教室の日に、体育館のタオルをかりる',
          'はじめての日に、ホームページから申し込む',
        ],
        answerIndex: 0,
        explanation:
          '想上瑜伽教室要做兩件事：所有教室共通的「９月２０日までに」報名，加上瑜伽教室專屬的「大きいタオルを持ってきてください」。「先はらっておく」錯，錢是「教室のはじめての日」才在櫃檯付；「体育館のタオルをかりる」錯，可以借的是球拍和球，毛巾要自己帶；「はじめての日に申し込む」錯，報名期限是９月２０日，不是第一天上課時。',
        explanationEn:
          'Joining the yoga class involves two things: the common rule of applying 「９月２０日までに」, plus the yoga-specific instruction 「大きいタオルを持ってきてください」. Paying in advance is wrong — the fee is paid at the front desk on 「教室のはじめての日」; borrowing a towel from the gym is wrong — only rackets and balls can be borrowed, towels must be your own; and applying on the first day is wrong because the application deadline is September 20.',
      },
    ],
  },
  {
    id: 'n4-reading-joho-006',
    kind: 'passage',
    passageTitle: '中央図書館　秋の読書週間イベント',
    passage:
      '中央図書館　秋の読書週間イベント\n１１月１日（土）から９日（日）まで、下のイベントを行います。\n\n①おはなし会（子ども向け）　１１月１日（土）・８日（土）　午前１１時～\n　→申し込みはいりません。\n②映画会「山の物語」　１１月２日（日）　午後２時～\n　→先着３０名。１０月２５日から、図書館のカウンターで券をもらってください。\n③古本市　１１月８日（土）・９日（日）　午前１０時～午後４時\n　→一さつ１００円です。\n④としょかんクイズ　期間中いつでも\n　→クイズに全部答えた方に、しおりをプレゼントします。\n\n・映画会の券は、お一人二まいまでです。電話ではもらえません。\n・古本市では、ふくろを売っていませんので、かばんを持ってきてください。\n・イベントの間も、本はいつもどおりかりることができます。\n\n中央図書館',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-joho-006-q1',
        stem: '田中さんは、映画会に行きたいです。田中さんは、何をしなければなりませんか。',
        options: [
          '１０月２５日から、図書館のカウンターで券をもらう',
          '１１月２日に、電話で申し込む',
          '申し込みはいらないので、そのまま行く',
          'カウンターで券を買う',
        ],
        answerIndex: 0,
        explanation:
          '映画会寫著「１０月２５日から、図書館のカウンターで券をもらってください」，要先到櫃檯領票。「電話で申し込む」錯，注意事項明說券「電話ではもらえません」；「申し込みはいらない」是①おはなし会的規定，不是映画会；「券を買う」錯，公告寫的是「もらってください」，票是免費領取，不是購買。',
        explanationEn:
          'The film-showing entry says 「１０月２５日から、図書館のカウンターで券をもらってください」 — you must pick up a ticket at the library counter from October 25. Applying by phone is wrong because the notes state tickets 「電話ではもらえません」; "no application needed, just go" is the rule for ①, the storytelling event, not the film; and buying a ticket is wrong — the notice says 「もらってください」, so tickets are free to pick up, not sold.',
      },
      {
        id: 'n4-reading-joho-006-q2',
        stem: '古本市について、合っているものはどれですか。',
        options: [
          'かばんを持って行ったほうがいい',
          '会場でふくろを売っている',
          '土曜日だけ行われる',
          '本を一さつ買うと、しおりがもらえる',
        ],
        answerIndex: 0,
        explanation:
          '注意事項寫「古本市では、ふくろを売っていませんので、かばんを持ってきてください」，所以帶包包去比較好，選項一正確。「ふくろを売っている」正好相反，會場不賣袋子；「土曜日だけ」錯，古本市在８日（土）和９日（日）兩天舉行；「しおりがもらえる」錯，書籤是④としょかんクイズ全部答對的人的贈品，與買書無關。',
        explanationEn:
          'The notes say 「古本市では、ふくろを売っていませんので、かばんを持ってきてください」, so bringing a bag is advised and option 1 is correct. "Bags are sold at the venue" is the opposite of the notice; "held only on Saturday" is wrong because the used-book fair runs on both the 8th (Sat) and 9th (Sun); and getting a bookmark is wrong — the bookmark is the prize for answering all of quiz ④, not for buying a book.',
      },
    ],
  },
  {
    id: 'n4-reading-joho-007',
    kind: 'passage',
    passageTitle: 'ひがし公園　もみじまつりのお知らせ',
    passage:
      'ひがし公園　もみじまつりのお知らせ\n１１月１５日（土）と１６日（日）の午前１０時から午後４時まで、ひがし公園でもみじまつりを行います。\n\n・食べ物や飲み物の店が出ます。\n・両日とも、午後１時から、公園のステージでたいこのコンサートがあります。\n・１５日（土）だけ、夜８時まで、もみじのライトアップを見ることができます。\n・雨の日もまつりは行いますが、雨が強いときは、ステージのコンサートは中止です。中止のときは、朝９時までに市のホームページでお知らせします。\n・公園にちゅうしゃじょうはありません。電車かバスで来てください。\n・会場にごみばこはありません。ごみは持って帰ってください。\n\nひがし市かんこう課',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-joho-007-q1',
        stem: 'もみじのライトアップは、いつ見ることができますか。',
        options: [
          '１５日（土）の夜だけ',
          '１６日（日）の夜だけ',
          '両日の夜',
          '両日の午後４時まで',
        ],
        answerIndex: 0,
        explanation:
          '公告寫「１５日（土）だけ、夜８時まで、もみじのライトアップを見ることができます」，點燈只在１５日（週六）晚上，選項一正確。「１６日の夜」與「両日の夜」都錯在「だけ」這個字，點燈限定１５日一天；「午後４時まで」錯，下午四點是祭典一般活動的結束時間，點燈是到晚上八點。',
        explanationEn:
          'The notice says 「１５日（土）だけ、夜８時まで、もみじのライトアップを見ることができます」 — the illumination is on the night of the 15th (Saturday) only, so option 1 is correct. "The 16th" and "both nights" both fail because of the word 「だけ」, which limits it to the 15th; and "until 4 p.m. on both days" is wrong — 4 p.m. is when the general festival ends, while the illumination runs until 8 p.m.',
      },
    ],
  },
  {
    id: 'n4-reading-joho-008',
    kind: 'passage',
    passageTitle: 'みなみ公民館　冬の音楽会のお知らせ',
    passage:
      'みなみ公民館　冬の音楽会のお知らせ\n１２月２０日（土）午後２時から４時まで、公民館のホールで、冬の音楽会を行います。町の高校生が、ピアノやバイオリンをえんそうします。\n\n・お金はいりませんが、券がひつようです。\n・券は、１２月１日から、公民館の受付でもらうことができます（お一人二まいまで）。\n・電話やメールでの申し込みはできません。\n・小学生より小さいお子さんは、券がなくても、家の人といっしょに入ることができます。\n・ホールに入ることができるのは、午後１時半からです。\n・当日、券をわすれた方は、入ることができませんので、ご注意ください。\n・ホールの中では、飲み物を飲むことができません。\n\nみなみ公民館',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-joho-008-q1',
        stem: '音楽会に行きたい人は、券をどうしますか。',
        options: [
          '１２月１日から、公民館の受付でもらう',
          '電話かメールで申し込む',
          '当日、ホールでお金をはらって買う',
          '券はいらないので、そのまま行く',
        ],
        answerIndex: 0,
        explanation:
          '公告寫「券は、１２月１日から、公民館の受付でもらうことができます」，要在１２月１日之後到公民館櫃檯領票。「電話かメールで」錯，公告明說「電話やメールでの申し込みはできません」；「お金をはらって買う」錯，「お金はいりません」，票是免費的，而且當天忘記帶票的人不能入場；「券はいらない」只適用於比小學生年紀小、和家人同行的孩子。',
        explanationEn:
          'The notice says 「券は、１２月１日から、公民館の受付でもらうことができます」 — tickets are picked up at the community-center front desk from December 1. Applying by phone or email is wrong because the notice states 「電話やメールでの申し込みはできません」; paying at the hall on the day is wrong since 「お金はいりません」 — tickets are free, and anyone who forgets their ticket cannot enter; and "no ticket needed" applies only to children younger than elementary-school age accompanied by family.',
      },
    ],
  },
]

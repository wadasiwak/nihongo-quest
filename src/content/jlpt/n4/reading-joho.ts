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
]

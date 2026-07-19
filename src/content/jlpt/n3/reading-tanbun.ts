import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n3-reading-tanbun-001',
    kind: 'passage',
    passage:
      '営業部の皆様\nお疲れさまです。来週月曜日に予定していた営業会議は、会議室が使えなくなったため、火曜日の午後三時に変更になりました。場所は同じ三階の第一会議室です。資料は前日までにメールで送りますので、印刷は各自でお願いします。当日出席できない方は、今週金曜日までに佐藤に連絡してください。\n佐藤',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-tanbun-001-q1',
        stem: '会議に出席できない人は、どうしなければならないか。',
        options: [
          '金曜日までに佐藤さんに連絡する',
          '前日までに資料を印刷して佐藤さんに送る',
          '月曜日に第一会議室へ行く',
          '火曜日までに会議室を予約する',
        ],
        answerIndex: 0,
        explanation:
          '依據「当日出席できない方は、今週金曜日までに佐藤に連絡してください」，不能出席的人要在本週五前聯絡佐藤。「資料を印刷して佐藤さんに送る」錯，資料是佐藤寄出、大家「各自」印，不用回傳；「月曜日に第一会議室へ行く」錯，會議已改到週二；「会議室を予約する」錯，訂會議室不是與會者要做的事，文中也沒有這個要求。',
        explanationEn:
          'The notice says 「当日出席できない方は、今週金曜日までに佐藤に連絡してください」, so anyone who cannot attend must contact Sato by this Friday. Printing the materials and sending them to Sato is wrong — Sato sends the materials and everyone prints their own copy, with nothing to send back; going to the meeting room on Monday is wrong because the meeting was moved to Tuesday; reserving the meeting room is not something attendees are asked to do anywhere in the notice.',
      },
    ],
  },
  {
    id: 'n3-reading-tanbun-002',
    kind: 'passage',
    passageTitle: 'エレベーター点検のお知らせ',
    passage:
      'ビルをご利用の皆様へ\n十月十日（木）の午前九時から正午まで、エレベーターの点検を行います。点検の間はエレベーターが使えませんので、階段をご利用ください。荷物が多いなどの理由で階段の利用が難しい方は、前日までに一階の管理室にご相談ください。点検の時間が変わる場合は、入口の掲示板でお知らせします。\n管理室',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-tanbun-002-q1',
        stem: '荷物が多くて階段を使うのが難しい人は、どうすればいいか。',
        options: [
          '前日までに管理室に相談する',
          '当日の朝、掲示板で点検の時間を知らせる',
          '正午まで一階の管理室で待つ',
          '点検の間だけエレベーターを使う',
        ],
        answerIndex: 0,
        explanation:
          '依據「階段の利用が難しい方は、前日までに一階の管理室にご相談ください」，行動不便或行李多的人要在前一天先找管理室商量。「掲示板で点検の時間を知らせる」錯，公佈欄是管理室用來通知時間變更的，不是住戶要做的事；「正午まで管理室で待つ」文中沒有這個指示；「点検の間だけエレベーターを使う」正好相反，檢修期間電梯不能使用。',
        explanationEn:
          'The notice says 「階段の利用が難しい方は、前日までに一階の管理室にご相談ください」, so people who have trouble using the stairs should consult the first-floor management office by the day before. Posting the inspection time on the bulletin board is wrong — the board is how the office announces schedule changes, not something residents do; waiting in the office until noon is never instructed; using the elevator only during the inspection is the exact opposite, since the elevator is out of service then.',
      },
    ],
  },
  {
    id: 'n3-reading-tanbun-003',
    kind: 'passage',
    passage:
      '仕事で何かを頼まれたとき、私は必ずメモを取るようにしている。若いころは、簡単な内容なら覚えられると思って、メモを取らなかった。しかし、忙しくなると細かい部分を忘れてしまい、相手にもう一度聞いて、迷惑をかけたことがある。それからは、どんなに簡単なことでも書くようになった。メモを取るのは時間がかかるように見えて、実は仕事を早く進める方法なのだと思う。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-tanbun-003-q1',
        stem: '筆者がメモを取るようになったのは、なぜか。',
        options: [
          '細かい部分を忘れて、相手に迷惑をかけたことがあるから',
          '若いころ、簡単な内容が覚えられなかったから',
          'メモを取るように相手に頼まれたから',
          'メモを取ると仕事に時間がかかるから',
        ],
        answerIndex: 0,
        explanation:
          '依據「細かい部分を忘れてしまい、相手にもう一度聞いて、迷惑をかけたことがある。それからは…書くようになった」，契機是忘記細節、給對方添了麻煩。「若いころ覚えられなかった」錯，筆者年輕時是「覚えられると思って」才不記的；「相手に頼まれた」文中沒有，被拜託的是工作本身；「時間がかかるから」相反，筆者認為記筆記其實是讓工作更快的方法。',
        explanationEn:
          'The passage states 「細かい部分を忘れてしまい、相手にもう一度聞いて、迷惑をかけたことがある」 and that the writer started writing everything down after that — forgetting details and troubling the other person was the trigger. "Could not remember things when young" is wrong: the writer skipped notes precisely because he thought he could remember; "the other person asked him to take notes" appears nowhere — what was requested was the work itself; "because notes take time" is backwards, since the writer concludes note-taking actually speeds work up.',
      },
    ],
  },
  {
    id: 'n3-reading-tanbun-004',
    kind: 'passage',
    passage:
      '株式会社山田商事 営業部 田中様\nいつもお世話になっております。さくら印刷の中村です。先日ご注文いただいたパンフレットの件でご連絡いたしました。工場の機械の故障により、お届けが予定より三日ほど遅れて、二十日ごろになりそうです。誠に申し訳ございません。それより早く必要な場合は、先に半分だけお送りすることもできますので、ご希望でしたらお知らせください。\nさくら印刷 中村',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-tanbun-004-q1',
        stem: 'このメールで中村さんが一番伝えたいことは何か。',
        options: [
          'パンフレットが届く日が予定より遅れること',
          'パンフレットの注文が半分になったこと',
          '工場の機械を新しくすること',
          '田中さんが二十日に工場へ行くこと',
        ],
        answerIndex: 0,
        explanation:
          '這封信的核心是「お届けが予定より三日ほど遅れて、二十日ごろになりそうです」，也就是交貨延遲的通知與道歉。「注文が半分になった」錯，「半分だけお送りする」是提議先寄一半應急，訂購數量沒有變；「機械を新しくする」錯，文中只說機器故障，沒提換新；「田中さんが工場へ行く」文中完全沒有提到。',
        explanationEn:
          'The heart of this e-mail is 「お届けが予定より三日ほど遅れて、二十日ごろになりそうです」 — notifying and apologizing that delivery will be about three days late. "The order was halved" is wrong: 「半分だけお送りする」 is only an offer to ship half early as a stopgap, and the order quantity is unchanged; "replacing the factory machine" is wrong because the text mentions only a breakdown, not a new machine; Tanaka visiting the factory is never mentioned at all.',
      },
    ],
  },
  {
    id: 'n3-reading-tanbun-005',
    kind: 'passage',
    passageTitle: '社員食堂の工事について',
    passage:
      '社員の皆様へ\n来月一日から十日まで、社員食堂を新しくするための工事を行います。この間、食堂は利用できませんが、二階の休憩室でお弁当の販売を行います。数に限りがありますので、確実に買いたい方は、前の日の午後五時までに、食堂の入口に置いてある用紙で申し込んでください。工事の間、休憩室は昼の時間に大変込みますので、席は譲り合ってご利用ください。\n総務部',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-tanbun-005-q1',
        stem: '工事の間、お弁当を確実に買いたい人は、どうするか。',
        options: [
          '前の日の午後五時までに、用紙で申し込む',
          '当日の朝、二階の休憩室に並ぶ',
          '総務部に電話して席を予約する',
          '食堂の入口でお弁当を受け取る',
        ],
        answerIndex: 0,
        explanation:
          '依據「確実に買いたい方は、前の日の午後五時までに…用紙で申し込んでください」，想確保買到便當要在前一天下午五點前用申請單登記。「当日の朝、休憩室に並ぶ」錯，便當數量有限，排隊不保證買得到，公告要求的是事先申請；「席を予約する」錯，座位是「譲り合って」使用，沒有預約制；「食堂の入口で受け取る」錯，入口放的是申請單，販售地點在二樓休息室。',
        explanationEn:
          'The notice says 「確実に買いたい方は、前の日の午後五時までに」 apply using the form, so those who want to be sure of getting a boxed lunch must sign up by 5 p.m. the day before. Lining up in the break room that morning does not guarantee a lunch since quantities are limited — advance application is what is required; reserving a seat is wrong because seats are shared 「譲り合って」 with no reservation system; picking up lunches at the cafeteria entrance is wrong — the entrance only holds the application forms, and sales take place in the second-floor break room.',
      },
      {
        id: 'n3-reading-tanbun-005-q2',
        stem: 'このお知らせの内容と合っているものはどれか。',
        options: [
          '工事の間、社員食堂は利用できない',
          '工事の間、休憩室は利用できない',
          'お弁当は食堂の入口で販売される',
          '工事は来月の二十日まで続く',
        ],
        answerIndex: 0,
        explanation:
          '依據「この間、食堂は利用できません」，施工期間員工餐廳不能使用，正解。「休憩室は利用できない」正好相反，休息室反而成了賣便當的地方，只是中午會很擁擠；「食堂の入口で販売される」錯，入口放的是申請用紙，販賣在二樓休息室；「二十日まで続く」錯，工期是下個月一日到十日。',
        explanationEn:
          'The notice states 「この間、食堂は利用できません」, so the staff cafeteria cannot be used during the construction — that matches. "The break room cannot be used" is the opposite: the break room is where boxed lunches will be sold, it will merely be crowded at lunchtime; "lunches are sold at the cafeteria entrance" is wrong because the entrance only holds application forms and sales happen in the second-floor break room; "construction lasts until the 20th" is wrong — the work runs from the 1st to the 10th of next month.',
      },
    ],
  },
  {
    id: 'n3-reading-tanbun-006',
    kind: 'passage',
    passage:
      '私は最近、会社へ行く前に一つ手前の駅で降りて、二十分ほど歩くことにしている。始めたきっかけは、健康診断で運動不足だと言われたことだ。最初は面倒だと思ったが、続けるうちに、歩きながらその日の仕事の順番を考えられることに気がついた。おかげで、会社に着いてからすぐに仕事が始められる。運動のつもりで始めた習慣だが、今では頭の準備の時間として続けている。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-tanbun-006-q1',
        stem: '筆者が歩くことを始めたきっかけは何か。',
        options: [
          '健康診断で運動不足だと言われたこと',
          '仕事の順番を考える時間がほしかったこと',
          '会社が駅から歩いて二十分かかること',
          '会社に着いてすぐ仕事が始められなかったこと',
        ],
        answerIndex: 0,
        explanation:
          '依據「始めたきっかけは、健康診断で運動不足だと言われたことだ」，開始走路的契機是健檢被說運動不足。「仕事の順番を考える時間がほしかった」錯，思考工作順序是持續之後才「気がついた」的好處，不是起因；「会社が駅から二十分かかる」錯，二十分鐘是他刻意提前一站下車走的路程；「すぐ仕事が始められなかった」文中沒有這樣說，那只是走路帶來的改善結果的反面推測。',
        explanationEn:
          'The passage says 「始めたきっかけは、健康診断で運動不足だと言われたことだ」 — the trigger was being told at a health checkup that he lacked exercise. "Wanted time to plan the day\'s tasks" is wrong: thinking through the work order is a benefit he only noticed after continuing, not the starting reason; "the office is a twenty-minute walk from the station" is wrong because the twenty minutes comes from deliberately getting off one stop early; "could not start work right away" is never stated — it is merely a back-formed guess from the improvement walking brought.',
      },
      {
        id: 'n3-reading-tanbun-006-q2',
        stem: '筆者は今、何のために歩き続けているか。',
        options: [
          '仕事を始める前の頭の準備をするため',
          '運動不足を直すためだけ',
          '健康診断を受けるため',
          '電車に乗る時間を短くするため',
        ],
        answerIndex: 0,
        explanation:
          '文末「今では頭の準備の時間として続けている」點明現在持續走路是為了在上班前整理思緒。「運動不足を直すためだけ」錯在「だけ」，運動確實是最初目的，但筆者明說現在的定位已經變成頭腦的準備時間；「健康診断を受けるため」錯，健檢只是當初的契機；「電車に乗る時間を短くするため」錯，提前一站下車反而是多花時間走路。',
        explanationEn:
          'The closing line 「今では頭の準備の時間として続けている」 makes clear that the writer now keeps walking to get his mind ready before work. "Only to fix his lack of exercise" fails on "only": exercise was indeed the original goal, but the writer explicitly reframes the habit as mental preparation time; "to take a health checkup" is wrong because the checkup was merely the initial trigger; "to shorten the train ride" is wrong since getting off one stop early actually costs extra time walking.',
      },
    ],
  },
  {
    id: 'n3-reading-tanbun-007',
    kind: 'passage',
    passageTitle: '防災訓練のお知らせ',
    passage:
      'ひまわり町内会の皆様\n十一月九日（日）の午前十時から、ひまわり公園で防災訓練を行います。消防署の方に、消火器の使い方や、けがをした人の運び方を教えていただきます。参加を希望する方は、十一月二日までに、班長に名前を伝えてください。当日は動きやすい服装で来て、飲み物を各自でお持ちください。雨の場合は、場所を町内会館に変えて行います。\nひまわり町内会',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-tanbun-007-q1',
        stem: '防災訓練に参加したい人は、どうしなければならないか。',
        options: [
          '十一月二日までに班長に名前を伝える',
          '十一月九日までに消防署に電話する',
          '当日の朝、町内会館に集まる',
          '班長に飲み物を届けてもらうように頼む',
        ],
        answerIndex: 0,
        explanation:
          '依據「参加を希望する方は、十一月二日までに、班長に名前を伝えてください」，想參加的人要在十一月二日前向班長報名。「消防署に電話する」錯，消防署人員是來教學的，不是報名窗口；「町内会館に集まる」錯，集合地點是ひまわり公園，會館只是雨天的備案；飲料是「各自」攜帶，不能請班長送來。',
        explanationEn:
          'The notice says 「参加を希望する方は、十一月二日までに、班長に名前を伝えてください」, so those who want to join must give their name to the group leader by November 2. Calling the fire station is wrong — the firefighters come to teach, they do not take sign-ups; gathering at the community hall is wrong because the venue is Himawari Park and the hall is only the rainy-day backup; drinks are something each participant brings, not something to have the leader deliver.',
      },
      {
        id: 'n3-reading-tanbun-007-q2',
        stem: 'このお知らせの内容と合っているものはどれか。',
        options: [
          '雨の日は、訓練の場所が町内会館に変わる',
          '雨の日は、訓練が別の日に延期される',
          '訓練に参加する人は、消火器を持って行く',
          '訓練は消防署の中で行われる予定だ',
        ],
        answerIndex: 0,
        explanation:
          '依據「雨の場合は、場所を町内会館に変えて行います」，下雨時只是改地點照常舉行，正解。「別の日に延期される」錯，公告說的是換場地而不是延期；「消火器を持って行く」錯，滅火器的「使い方」是消防署人員教的內容，參加者要自備的是飲料；訓練地點是ひまわり公園（雨天改町内会館），不是在消防署。',
        explanationEn:
          'The notice states 「雨の場合は、場所を町内会館に変えて行います」 — in rain the drill still takes place, only the venue moves to the community hall, so that option matches. "Postponed to another day" is wrong because the notice changes the place, not the date; "participants bring a fire extinguisher" is wrong — how to use one is what the firefighters teach, and what participants bring is a drink; the drill is held at Himawari Park (or the hall in rain), not inside the fire station.',
      },
    ],
  },
  {
    id: 'n3-reading-tanbun-008',
    kind: 'passage',
    passage:
      '私は一日中座って仕事をしているせいか、去年から腰が痛くなってしまった。病院へ行くと、医者に「薬より、まず体を動かすことが大切ですよ」と言われた。それから私は、一時間に一度は席を立って、軽く体を伸ばすことにしている。始めたばかりのころは、仕事が止まる気がして落ち着かなかった。しかし今では、腰が楽になっただけでなく、短い休みのあとのほうが仕事に集中できると感じている。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-tanbun-008-q1',
        stem: '筆者が体を伸ばすようになったのは、なぜか。',
        options: [
          '腰が痛くなり、医者に体を動かすように言われたから',
          '薬を飲んでも腰の痛みが治らなかったから',
          '短い休みを取ると仕事に集中できるから',
          '医者に一時間ごとに薬を飲むように言われたから',
        ],
        answerIndex: 0,
        explanation:
          '依據「腰が痛くなってしまった。病院へ行くと、医者に『薬より、まず体を動かすことが大切ですよ』と言われた。それから私は…」，契機是腰痛就醫、被醫生建議先活動身體。「薬を飲んでも治らなかった」錯，文中沒說吃過藥，「薬より」只是醫生的比較說法；「集中できるから」是持續之後才發現的好處，不是開始的原因；醫生建議的是活動身體，不是按時吃藥。',
        explanationEn:
          'The passage says his back began to hurt, and at the hospital the doctor told him 「薬より、まず体を動かすことが大切ですよ」 — the trigger was the back pain and the doctor\'s advice to move his body. "Medicine did not cure the pain" is wrong: the text never says he took any, and 「薬より」 is merely the doctor\'s comparison; better concentration is a benefit noticed only after continuing, not the starting reason; and the doctor recommended moving, not taking medicine every hour.',
      },
      {
        id: 'n3-reading-tanbun-008-q2',
        stem: '席を立って体を伸ばすことについて、筆者は今どう思っているか。',
        options: [
          '腰にいいだけでなく、仕事の集中にも役立っている',
          '仕事が止まる気がして、今も落ち着かない',
          '腰は楽になったが、仕事は遅くなった',
          '医者に言われたので、仕方なく続けている',
        ],
        answerIndex: 0,
        explanation:
          '文末「今では、腰が楽になっただけでなく、短い休みのあとのほうが仕事に集中できると感じている」，可見筆者現在給予正面評價。「今も落ち着かない」錯，那是「始めたばかりのころ」的感覺，後面用「しかし今では」明確轉折；「仕事は遅くなった」與集中力提高的敘述相反；「仕方なく続けている」的消極語氣文中完全沒有。',
        explanationEn:
          'The ending says 「今では、腰が楽になっただけでなく、短い休みのあとのほうが仕事に集中できると感じている」, so the writer now rates the habit positively. "Still feels restless" is wrong — that was how he felt 「始めたばかりのころ」, explicitly reversed by 「しかし今では」; "work got slower" contradicts the improved concentration; and "continues reluctantly" carries a grudging tone found nowhere in the passage.',
      },
    ],
  },
]

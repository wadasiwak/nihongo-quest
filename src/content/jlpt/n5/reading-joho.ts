import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n5-reading-joho-001',
    passageTitle: 'みどり市民プールの お知らせ',
    passage:
      '【あいて いる 時間】\n・月曜日～金曜日　午前１０時～午後８時\n・土曜日と 日曜日　午前９時～午後５時\n※水曜日の 午前は そうじを しますから、入る ことが できません。\n\n【水泳教室】\n・子どもの 教室　火曜日と 木曜日　午後４時～５時\n・大人の 教室　　水曜日　午後６時～７時\n\n【お金】\n・大人　３００円　　・子ども　１００円\n・教室は １回 ５００円です。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-joho-001-q1',
        stem: '田中さんは 大人です。水曜日に プールで 何が できますか。',
        options: [
          '午後に およぐ ことと、大人の 教室に 入る ことが できる。',
          '午前に およぐ ことが できる。',
          '子どもの 教室に 入る ことが できる。',
          '水曜日は 休みなので、何も できない。',
        ],
        answerIndex: 0,
        explanation:
          '要同時比對兩個條件：週三「上午」因清掃不能入場，但下午照常開放；且大人教室正好在週三晚上六點到七點。所以田中先生週三下午可以游泳，也能參加大人教室。「午前に およぐ」違反清掃公告；「子どもの 教室」對象是小孩且在週二、週四；週三並非全日休館，「何も できない」也錯。',
        explanationEn:
          'You must combine two conditions: on Wednesday the pool is closed in the morning for cleaning but open as usual in the afternoon, and the adult swimming class happens to be on Wednesday from 6 to 7 p.m. So Mr. Tanaka can swim in the afternoon and also join the adult class. Swimming in the morning breaks the cleaning notice; the children\'s class is for kids and runs on Tuesday and Thursday; and the pool is not closed all day Wednesday, so "nothing" is also wrong.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-joho-002',
    passageTitle: 'さくら食堂の メニュー',
    passage:
      '【食べ物】\n・カレーライス　　６００円\n・ラーメン　　　　５５０円\n・サンドイッチ　　４００円\n・スパゲッティ　　６５０円\n\n【飲み物】\n・コーヒー　２００円\n・ジュース　２５０円\n・お茶　　　１５０円\n\n★セット：食べ物と 飲み物を いっしょに 買うと、ぜんぶで ５０円 安く なります。\n★毎週 金曜日は、カレーライスだけ １００円 安く なります。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-joho-002-q1',
        stem: '食べ物と 飲み物を 一つずつ 買います。いちばん 安いのは いくらですか。',
        options: ['５００円', '５５０円', '６００円', '４００円'],
        answerIndex: 0,
        explanation:
          '要比對兩個條件：先選出最便宜的餐點（三明治４００圓）和最便宜的飲料（茶１５０圓），合計５５０圓；再套用「餐點＋飲料成套便宜５０圓」的規則，得５００圓。「５５０円」是漏算成套折扣；「４００円」只買了餐點、不符合各買一樣的題意，都不對。',
        explanationEn:
          'Two steps are needed: first pick the cheapest food (the sandwich at 400 yen) and the cheapest drink (tea at 150 yen), which total 550 yen; then apply the set rule that buying food and a drink together takes 50 yen off, giving 500 yen. The 550-yen option misses the set discount, and the 400-yen option is food only, which does not match buying one of each.',
      },
      {
        id: 'n5-reading-joho-002-q2',
        stem: '金曜日に カレーライスと コーヒーを 買います。いくら はらいますか。',
        options: ['６５０円', '７００円', '７５０円', '８００円'],
        answerIndex: 0,
        explanation:
          '要同時套用兩個規則：週五咖哩飯便宜１００圓（６００→５００圓），加咖啡２００圓是７００圓；又因為餐點和飲料一起買再減５０圓，最後付６５０圓。「７００円」漏了成套折扣；「７５０円」漏了週五咖哩優惠；「８００円」兩個折扣都沒算，皆為錯誤。',
        explanationEn:
          'Two rules apply at the same time: on Friday curry rice is 100 yen cheaper (600 down to 500 yen), and with coffee at 200 yen that makes 700 yen; then, because food and a drink are bought together, another 50 yen comes off, so you pay 650 yen. The 700-yen option misses the set discount, the 750-yen option misses the Friday curry discount, and the 800-yen option misses both.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-joho-003',
    passageTitle: 'ひがし図書館からの お知らせ',
    passage:
      '【かりる とき】\n・本は 一人 五さつまで、二週間 かりる ことが できます。\n・ＣＤは 一人 二まいまで、一週間です。\n\n【休みの 日】\n・毎月 第三月曜日\n・十二月二十九日から 一月三日まで\n\n【返す とき】\n・休みの 日は、入り口の ポストに 本を 入れて ください。\n・ＣＤは ポストに 入れないで ください。ＣＤは 図書館が あいて いる 日に 返して ください。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-joho-003-q1',
        stem: '図書館が 休みの 日に、返す ことが できるのは どれですか。',
        options: [
          '本だけ ポストに 入れて 返す ことが できる。',
          '本も ＣＤも ポストに 入れて 返す ことが できる。',
          'ＣＤだけ ポストに 入れて 返す ことが できる。',
          '本も ＣＤも 返す ことが できない。',
        ],
        answerIndex: 0,
        explanation:
          '要對照「返す とき」的兩條規定：休館日書可以投入門口的還書箱，但ＣＤ明文禁止投入，必須等開館日歸還。所以休館日能還的只有書。「本も ＣＤも ポストに」違反ＣＤ不可投箱的規定；「本も ＣＤも 返す ことが できない」則忽略了書可以投箱這一條，都不正確。',
        explanationEn:
          'Check both rules under 「返す とき」: on closed days books may be dropped into the box at the entrance, but CDs must not go in it (「ＣＤは ポストに 入れないで ください」) and have to be returned on a day the library is open. So on a closed day only books can be returned. Returning both in the box breaks the CD rule, and "nothing can be returned" ignores that books may go in the box.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-joho-004',
    passageTitle: '四月の 日本語教室の よてい',
    passage:
      '【毎週の クラス】\n・火曜日　午後６時～８時　会話の クラス\n・木曜日　午後６時～８時　かんじの クラス\n\n【四月だけの よてい】\n・十四日（土）午前１０時から　お花見パーティー\n・二十八日（土）午後２時から　テスト\n\n★十七日（火）は 先生が 休みですから、クラスは ありません。\n★テストの 日は、えんぴつと 学生カードを 持って きて ください。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-joho-004-q1',
        stem: '四月十七日に 教室で 何が ありますか。',
        options: [
          '何も ない。',
          '会話の クラスが ある。',
          'かんじの クラスが ある。',
          'テストが ある。',
        ],
        answerIndex: 0,
        explanation:
          '要比對兩個資訊：十七日是週二，照「毎週の クラス」本來有會話課；但★的注意事項寫明十七日老師休假、當天停課。所以正確答案是「什麼都沒有」。「会話の クラスが ある」只看了每週課表、漏看停課公告；「テスト」在二十八日，日期不符，都是錯的。',
        explanationEn:
          'Combine two pieces of information: the 17th is a Tuesday, which normally has the conversation class, but the starred note says the teacher is off on the 17th and there is no class that day. So the correct answer is that nothing happens. Choosing the conversation class means reading only the weekly schedule and missing the cancellation note, and the test is on the 28th, so the date does not match.',
      },
      {
        id: 'n5-reading-joho-004-q2',
        stem: 'テストの 日に ついて、ただしいのは どれですか。',
        options: [
          '二十八日の 午後に あって、えんぴつが いる。',
          '十四日の 午前に ある。',
          '学生カードは 持って いかなくても いい。',
          '火曜日の 夜に ある。',
        ],
        answerIndex: 0,
        explanation:
          '要合併兩處資訊：行事曆寫考試在二十八日（週六）下午兩點開始，★又寫考試當天要帶鉛筆和學生證，所以「二十八日下午、需要鉛筆」正確。「十四日の 午前」是賞花派對的時間；「学生カードは 持って いかなくても いい」與注意事項相反；考試在週六，不是週二晚上，皆錯。',
        explanationEn:
          'Merge two parts of the notice: the schedule says the test is on the 28th (a Saturday) starting at 2 p.m., and the starred note says to bring a pencil and your student card on test day. So "the afternoon of the 28th, and you need a pencil" is correct. The morning of the 14th is the cherry-blossom party; leaving the student card at home contradicts the note; and the test is on a Saturday afternoon, not a Tuesday night.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-joho-005',
    passageTitle: 'みなみ駅から 病院へ 行く バスの 時刻表',
    passage:
      '【３番バス（病院行き）】\n・みなみ駅を 出る 時間：午前８時、９時３０分、１１時\n・駅から 病院まで ２０分 かかります。\n・お金：２２０円\n\n【５番バス（病院行き）】\n・みなみ駅を 出る 時間：午前８時１５分、９時４５分\n・駅から 病院まで ４０分 かかります。\n・お金：１８０円\n\n★日曜日は ５番バスは 休みです。３番バスは 毎日 あります。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-joho-005-q1',
        stem: 'リンさんは 午前９時に みなみ駅に 着きました。午前１０時までに 病院に 着きたいです。どの バスに 乗りますか。',
        options: [
          '３番バスの ９時３０分の バスに 乗る。',
          '５番バスの ９時４５分の バスに 乗る。',
          '３番バスの １１時の バスに 乗る。',
          '５番バスの ８時１５分の バスに 乗る。',
        ],
        answerIndex: 0,
        explanation:
          '要同時比對「出發時刻」和「車程」兩個條件：三號公車九點半發車、車程二十分鐘，九點五十分到院，趕得上十點。五號的九點四十五分發車雖然搭得到，但車程四十分鐘，十點二十五分才到，太晚；八點十五分那班在林小姐到站前就開走了；十一點那班更是遠遠超過十點，皆不符合。',
        explanationEn:
          'Compare both the departure time and the ride length: the No. 3 bus leaves at 9:30 and takes 20 minutes, arriving at 9:50 — in time for 10:00. The 9:45 No. 5 bus can be caught, but it takes 40 minutes and arrives at 10:25, which is too late; the 8:15 bus leaves before Ms. Lin even reaches the station; and the 11:00 bus arrives long after 10:00, so none of the others work.',
      },
      {
        id: 'n5-reading-joho-005-q2',
        stem: '日曜日に、いちばん 安い お金で 病院へ 行きたいです。ただしいのは どれですか。',
        options: [
          '３番バスに 乗る。２２０円 はらう。',
          '５番バスに 乗る。１８０円 はらう。',
          '３番バスに 乗る。１８０円 はらう。',
          '５番バスに 乗る。２２０円 はらう。',
        ],
        answerIndex: 0,
        explanation:
          '要比對「票價」和「行駛日」兩個條件：五號公車雖然只要１８０圓比較便宜，但★寫明週日停駛，所以週日只能搭每天都有的三號公車，付２２０圓。「５番バスに 乗る」的兩個選項都忽略了週日停駛的公告；「３番バスで １８０円」則是把五號的票價套錯到三號公車上，皆為錯誤。',
        explanationEn:
          'Weigh the fare against the operating days: the No. 5 bus is cheaper at 180 yen, but the starred note says it does not run on Sundays, so on Sunday the only choice is the No. 3 bus, which runs every day and costs 220 yen. Both options that pick the No. 5 bus ignore the Sunday suspension, and "No. 3 bus for 180 yen" wrongly attaches the No. 5 fare to the No. 3 bus.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-joho-006',
    passageTitle: 'スーパーはなの ちらし',
    passage:
      '【毎日の ねだん】\n・ぎゅうにゅう　１本　１５０円\n・パン　１つ　１２０円\n・りんご　１つ　８０円\n・たまご　１パック　２００円\n\n【曜日の サービス】\n・月曜日：たまごが １パック １００円に なります。\n・金曜日：りんごが １つ ５０円に なります。\n\n★毎日 午後６時から、パンは 半分の ねだん（６０円）に なります。\n★やすい 品物は、なくなったら おわりです。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-joho-006-q1',
        stem: '月曜日の 午後７時に、たまご １パックと パン １つを 買います。いくら はらいますか。',
        options: ['１６０円', '２２０円', '２６０円', '３２０円'],
        answerIndex: 0,
        explanation:
          '要同時套用兩個優惠：週一雞蛋一盒變１００圓；晚上七點已過六點，麵包是半價６０圓，合計１６０圓。「２２０円」是算了週一雞蛋優惠、卻漏了麵包晚間半價；「２６０円」是只算麵包半價、漏了週一雞蛋優惠；「３２０円」則是兩個優惠都沒算的原價，皆為錯誤。',
        explanationEn:
          'Apply two discounts at once: on Monday a pack of eggs drops to 100 yen, and since 7 p.m. is after 6 p.m., bread is half price at 60 yen, so the total is 160 yen. The 220-yen option counts the Monday egg discount but misses the evening bread discount; the 260-yen option does the opposite; and the 320-yen option is the full price with no discounts applied at all.',
      },
      {
        id: 'n5-reading-joho-006-q2',
        stem: '金曜日の 午前に、りんごを ２つと ぎゅうにゅうを １本 買います。いくら はらいますか。',
        options: ['２５０円', '３１０円', '２８０円', '２００円'],
        answerIndex: 0,
        explanation:
          '要比對「星期幾」和「數量」兩個條件：週五蘋果一顆變５０圓，兩顆共１００圓，加牛奶１５０圓，合計２５０圓。「３１０円」是用原價８０圓算蘋果、漏看週五優惠；「２８０円」是只給一顆蘋果打折（５０＋８０＋１５０）；「２００円」是只算了一顆蘋果加牛奶，數量不對，皆錯。',
        explanationEn:
          'Check both the day and the quantity: on Friday apples drop to 50 yen each, so two apples cost 100 yen, and adding milk at 150 yen gives a total of 250 yen. The 310-yen option uses the regular 80-yen apple price and misses the Friday sale; the 280-yen option discounts only one of the two apples; and the 200-yen option counts just one apple plus the milk, so the quantity is wrong.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-joho-007',
    passageTitle: 'ひかり美術館　入館の ご案内',
    passage:
      '【あいて いる 時間】\n・午前９時３０分～午後５時\n※午後４時３０分の あとは、入る ことが できません。\n\n【休みの 日】\n・毎週 月曜日\n\n【入館料（にゅうかんりょう）】\n・大人　８００円\n・学生　４００円\n・６さいより 小さい 子ども　ただ\n\n★毎月 十五日は、みんな 半分の ねだんに なります。\n★１０人より 多い グループは、一人 １００円 安く なります。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-joho-007-q1',
        stem: '学生の ヤンさんは、一人で 十五日（火曜日）に 美術館へ 行きます。いくら はらいますか。',
        options: ['２００円', '４００円', '３００円', '８００円'],
        answerIndex: 0,
        explanation:
          '要合併兩處資訊：楊同學是學生，票價４００圓；而★寫每月十五日所有人半價，所以付２００圓。當天是週二，不是休館的週一，可以入館。「４００円」是漏看十五日半價的公告；「３００円」是誤用「十人以上團體減１００圓」的規則，但他是一個人去；「８００円」是大人的票價，身分不符，皆為錯誤。',
        explanationEn:
          'Combine two pieces of information: Yan is a student, so the base ticket is 400 yen, and the starred note says everyone pays half price on the 15th of each month, so he pays 200 yen. The 15th is a Tuesday, not the closed Monday, so the museum is open. The 400-yen option misses the half-price day; the 300-yen option wrongly applies the 100-yen group discount, but he is going alone; and 800 yen is the adult price, which does not match his status.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-joho-008',
    passageTitle: 'あおば日本語教室　新しい 生徒 ぼしゅうの ポスター',
    passage:
      'あおば日本語教室で いっしょに 日本語を 勉強しませんか。\n\n【クラス】\n・はじめての クラス（ひらがなから 勉強します）\n　土曜日　午前１０時～１２時\n・会話の クラス（かんたんな 話が できる 人）\n　日曜日　午前１０時～１２時\n\n【お金】\n・１か月　３０００円\n・はじめての クラスだけ、テキストの お金 １０００円が いります。\n\n★もうしこみは 電話か メールで して ください。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-joho-008-q1',
        stem: 'リサさんは かんたんな 日本語の 話が できます。この 教室に 入る とき、はじめの 月に ぜんぶで いくら はらいますか。',
        options: ['３０００円', '４０００円', '１０００円', '６０００円'],
        answerIndex: 0,
        explanation:
          '要比對兩個條件：麗莎會說簡單的日語，符合「会話の クラス」的對象，所以上會話班；而課本費１０００圓只有「はじめての クラス」才需要，會話班不用，因此第一個月只付月費３０００圓。「４０００円」是誤把課本費也算進去；「１０００円」只算了課本費；「６０００円」是算成兩個月的月費，皆為錯誤。',
        explanationEn:
          'Match two conditions: Lisa can hold a simple conversation in Japanese, so she belongs in the conversation class, and the 1000-yen textbook fee applies only to the beginners\' class, so in her first month she pays just the 3000-yen monthly fee. The 4000-yen option wrongly adds the textbook fee; the 1000-yen option counts only the textbook fee; and the 6000-yen option would be two months of fees.',
      },
    ],
  },
]

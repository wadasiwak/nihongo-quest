import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n3-reading-joho-001',
    kind: 'passage',
    passageTitle: '秋の市民講座　受講生募集',
    passage:
      'みどり市民センター　秋の市民講座　受講生募集\n\n10月から12月までの3か月間、下の四つの講座を開きます。\n\n①水彩画入門\n・対象：16歳以上\n・日時：毎週火曜日　午前10時～12時\n・受講料：月3,500円（ほかに教材費が月500円かかります）\n\n②パンとお菓子の教室\n・対象：20歳以上\n・日時：毎週土曜日　午後2時～4時\n・受講料：月6,000円（材料費をふくみます）\n\n③はじめてのヨガ\n・対象：16歳以上\n・日時：毎週水曜日　午後7時～8時30分\n・受講料：月4,500円（教材費はかかりません）\n\n④こども書道教室\n・対象：小学1年生～6年生\n・日時：毎週日曜日　午前9時～10時\n・受講料：月3,000円（筆と紙は各自で用意してください）\n\n【申し込み方法】\n・電話またはセンターのホームページからお申し込みください。\n・初回に入会金1,000円が必要です。ただし、学生と60歳以上の方は半額の500円になります。\n・教材費・材料費は、毎月、受講料といっしょにお支払いください。\n・申し込みの締め切りは9月20日です。ただし、定員になりしだい受付を終わります。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-joho-001-q1',
        stem: '会社員のハンさん（26歳）は、平日の夜か週末に受けられて、1か月に払う金額が5,000円以内の講座を探している。ハンさんの希望に合う講座はどれか。',
        options: [
          '③はじめてのヨガ',
          '②パンとお菓子の教室',
          '①水彩画入門',
          '④こども書道教室',
        ],
        answerIndex: 0,
        explanation:
          '三個條件要同時成立：平日晚上或週末、每月總花費5,000日圓以內、年齡符合。③在週三晚上7點到8點半、月費4,500日圓且無教材費，全部符合。②雖然在週六，但月費6,000日圓超出預算；①在週二上午，上班族無法參加；④只收小學生，年齡不符。',
        explanationEn:
          'Three conditions must hold at once: weekday evenings or weekends, a total monthly cost within 5,000 yen, and meeting the age requirement. Course ③ runs Wednesday evenings from 7:00 to 8:30, costs 4,500 yen per month with no materials fee, and satisfies everything. Course ② is on Saturdays but its 6,000 yen monthly fee exceeds the budget; ① meets on Tuesday mornings, impossible for an office worker; ④ accepts only elementary school children, so the age does not match.',
      },
      {
        id: 'n3-reading-joho-001-q2',
        stem: '大学生のリンさん（19歳）は「①水彩画入門」に申し込むつもりだ。最初の月に払うお金は、全部でいくらか。',
        options: ['4,500円', '5,000円', '4,000円', '3,500円'],
        answerIndex: 0,
        explanation:
          '林同學是學生，依簡章「学生と60歳以上の方は半額」，入會金1,000日圓減半成500日圓；再加第一個月的受講料3,500日圓與教材費500日圓，合計4,500日圓。選5,000日圓是忘了學生入會金減半；選4,000日圓是漏算教材費；選3,500日圓則只算了月費。',
        explanationEn:
          'Lin is a student, and the notice says 「学生と60歳以上の方は半額」, so the 1,000 yen enrollment fee is halved to 500 yen; adding the first month\'s tuition of 3,500 yen and the 500 yen materials fee gives a total of 4,500 yen. Choosing 5,000 yen means forgetting the student discount on the enrollment fee; 4,000 yen omits the materials fee; 3,500 yen counts only the monthly tuition.',
      },
    ],
  },
  {
    id: 'n3-reading-joho-002',
    kind: 'passage',
    passageTitle: 'さくらスーパー　アルバイト募集',
    passage:
      'さくらスーパー西口店　アルバイト募集\n\nいっしょに働いてくれる方を募集しています。下のＡ～Ｄから希望の仕事を選んで、お気軽にご応募ください。\n\nＡ　レジ係\n・時間：午前9時～午後5時の間で4時間以上\n・時給：1,100円\n・条件：18歳以上（高校生は不可）。週3日以上働ける方。\n\nＢ　品出し（早朝）\n・時間：午前6時～9時\n・時給：1,250円\n・条件：18歳以上。週2日からOK。\n\nＣ　品出し（夕方）\n・時間：午後5時～9時\n・時給：1,100円\n・条件：16歳以上。高校生も可。ただし、高校生は午後8時までとします。週2日からOK。\n\nＤ　店内そうじ\n・時間：午前5時30分～7時30分\n・時給：1,000円\n・条件：年齢は問いません。週5日働ける方。\n\n【応募方法】\nまず電話で面接の日を予約してから、履歴書を持って店に来てください。制服は店が貸しますので、買う必要はありません。交通費は1日500円まで出ます。まじめに働けば、時給が上がることもあります。わからないことがあれば、店長の山田までお電話ください。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-joho-002-q1',
        stem: '大学生のヤンさん（20歳）は、授業が毎日午前10時半に始まるので、朝の時間に週2日働きたい。時給は1,200円以上がいい。ヤンさんの希望に合う仕事はどれか。',
        options: ['Ｂ　品出し（早朝）', 'Ｄ　店内そうじ', 'Ａ　レジ係', 'Ｃ　品出し（夕方）'],
        answerIndex: 0,
        explanation:
          '要同時滿足早上時段、每週2天、時薪1,200日圓以上三個條件。Ｂ在早上6點到9點、時薪1,250日圓、每週2天起，且20歲符合年齡，全部吻合。Ｄ雖然也在清晨，但時薪只有1,000日圓而且要每週5天；Ａ在白天與上課衝突且時薪不足；Ｃ是傍晚時段，不合「朝の時間」。',
        explanationEn:
          'Three conditions must be met at once: morning hours, two days a week, and an hourly wage of at least 1,200 yen. Job Ｂ runs 6 to 9 a.m., pays 1,250 yen per hour, accepts from two days a week, and Yang at 20 satisfies the age requirement — everything fits. Ｄ is also early morning but pays only 1,000 yen and demands five days a week; Ａ is during the daytime, clashing with classes, and pays too little; Ｃ is an evening shift, not the morning hours he wants.',
      },
      {
        id: 'n3-reading-joho-002-q2',
        stem: '高校生のモリさん（17歳）は、学校が終わる午後4時より後の時間に、週2日働きたい。モリさんが応募できる仕事はどれか。',
        options: ['Ｃ　品出し（夕方）', 'Ａ　レジ係', 'Ｂ　品出し（早朝）', 'Ｄ　店内そうじ'],
        answerIndex: 0,
        explanation:
          '森同學17歲、是高中生，要同時看年齡、身分與時段。Ｃ寫明16歲以上、高中生可（做到晚上8點）、每週2天起，時段在下午5點以後，全部符合。Ａ雖然年齡寫18歲以上還特別註明高校生不可；Ｂ和Ｄ都在清晨，不符合放學後的時段條件，Ｄ還要求每週5天。',
        explanationEn:
          'Mori is 17 and a high school student, so age, student status, and time slot must all be checked. Job Ｃ explicitly allows ages 16 and up, welcomes high school students (working until 8 p.m.), starts from two days a week, and runs after 5 p.m. — everything matches. Ａ requires age 18 or older and even states that high school students are not accepted; Ｂ and Ｄ are both early-morning shifts that fail the after-school condition, and Ｄ additionally demands five days a week.',
      },
    ],
  },
  {
    id: 'n3-reading-joho-003',
    kind: 'passage',
    passageTitle: 'わかば動物園「夜の動物園」',
    passage:
      'わかば動物園　夏の特別イベント「夜の動物園」\n\n昼間は見られない動物たちの夜の姿を見に来ませんか。園内には明かりがともり、夜だけの特別ガイドツアーもあります。家族でも、友だち同士でも、どうぞお楽しみください。\n\n■開催日：8月の毎週土曜日・日曜日\n■時間：午後5時～9時（入園は午後8時までにお願いします）\n\n■入園料（夜の部）\n・大人（高校生以上）：1,200円\n・子ども（4歳～中学生）：500円\n・3歳以下：無料\n\n■前売り券\nコンビニで前売り券を買うと、大人は200円引き、子どもは100円引きになります。前売り券が買えるのは、行く日の前の日までです。当日、動物園の入り口では買えませんので、ご注意ください。\n\n■注意\n・雨が強い日は中止になることがあります。中止の場合、入園料はお返しします。中止かどうかは、当日の午後3時に動物園のホームページでお知らせします。\n・ペットを連れての入園はできません。\n・動物が驚きますので、カメラのフラッシュは使わないでください。\n・駐車場には数に限りがあります。できるだけ電車・バスをご利用ください。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-joho-003-q1',
        stem: 'タンさんの家族は、父（38歳）、母（36歳）、高校1年生の姉（15歳）、小学生の弟（10歳）、3歳の妹の5人だ。前の日にコンビニで前売り券を買って行くと、入園料は全部でいくらか。',
        options: ['3,400円', '2,800円', '4,100円', '3,800円'],
        answerIndex: 0,
        explanation:
          '先分年齡：高中生以上算大人，所以父、母加上高一的姊姊共3位大人；10歲的弟弟算兒童；3歲的妹妹免費。再套預售優惠：大人1,200－200＝1,000日圓、兒童500－100＝400日圓，合計3×1,000＋400＝3,400日圓。選2,800是把姊姊誤算成兒童；選4,100是忘了預售折扣照當日價計算。',
        explanationEn:
          'First sort by age: high school students and older count as adults, so the father, mother, and first-year high school sister make three adults; the 10-year-old brother is a child; the 3-year-old sister enters free. Then apply the advance-ticket discount: adults 1,200 - 200 = 1,000 yen, children 500 - 100 = 400 yen, so the total is 3 x 1,000 + 400 = 3,400 yen. Choosing 2,800 yen miscounts the sister as a child; 4,100 yen ignores the advance discount and uses same-day prices.',
      },
    ],
  },
  {
    id: 'n3-reading-joho-004',
    kind: 'passage',
    passageTitle: 'みなと市民マラソン大会　参加者募集',
    passage:
      '第20回みなと市民マラソン大会　参加者募集\n\n11月23日（日）に、みなと海岸公園で市民マラソン大会を開きます。走るのが好きな方なら、市の外にお住まいの方でも参加できます。秋の海を見ながら、いっしょに走りましょう。\n\n■コースと参加費\nＡ　ファミリーコース（2km）\n・対象：小学生以上（小学生は保護者といっしょに走ってください）\n・参加費：大人1,000円、中学生以下500円\n\nＢ　5kmコース\n・対象：中学生以上\n・参加費：1,500円\n\nＣ　ハーフマラソン（21km）\n・対象：18歳以上\n・参加費：3,000円\n\n■割引\nみなと市内に住んでいる方は、参加費が300円引きになります。申し込みのとき、住所がわかるものを見せてください。\n\n■申し込み\n・締め切り：10月31日\n・大会のホームページから申し込んでください。電話では受け付けていません。\n・参加費は申し込みのときに払います。一度払った参加費は、雨で中止になった場合をのぞいて、お返しできませんので、ご注意ください。\n・走り終わった方には、記念のタオルをさしあげます。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-joho-004-q1',
        stem: '高校1年生のオウさん（16歳）は、となりの市からこの大会に参加する。出られるコースの中で、いちばん長いコースに申し込むと、参加費はいくらか。',
        options: ['1,500円', '1,200円', '3,000円', '2,700円'],
        answerIndex: 0,
        explanation:
          '王同學16歲，Ｃ半程馬拉松限18歲以上所以不能報名，他能參加的最長距離是Ｂ的5公里組（限國中生以上），參加費1,500日圓；而且他住在鄰市，不符合「市內居民減300日圓」的條件，不能打折。選1,200日圓是誤用了市民折扣；選3,000日圓是忽略了Ｃ的年齡限制。',
        explanationEn:
          'Ou is 16, so course Ｃ, the half marathon restricted to ages 18 and over, is closed to him; the longest course he can enter is Ｂ, the 5 km course (junior high students and older), with a 1,500 yen entry fee. Living in the neighboring city, he does not qualify for the 300 yen discount for city residents, so no reduction applies. Choosing 1,200 yen wrongly applies the resident discount; choosing 3,000 yen overlooks the age limit on course Ｃ.',
      },
    ],
  },
  {
    id: 'n3-reading-joho-005',
    kind: 'passage',
    passageTitle: 'みなと引っ越しセンター　スタッフ募集',
    passage:
      'みなと引っ越しセンター　スタッフ募集\n\n春の引っ越しシーズンに向けて、いっしょに働く仲間を募集します。下のＡ～Ｄから希望の仕事を選んで、ご応募ください。\n\nＡ　引っ越し作業スタッフ\n・仕事：荷物を運ぶ、トラックに積む\n・時間：午前8時～午後5時\n・時給：1,400円\n・条件：18歳以上。体力に自信のある方。週2日からOK。\n\nＢ　トラック運転手\n・仕事：トラックの運転と荷物運び\n・時間：午前8時～午後5時\n・時給：1,600円\n・条件：21歳以上で、運転免許を取ってから3年以上の方。週3日以上働ける方。\n\nＣ　事務スタッフ\n・仕事：電話の受付、書類作り\n・時間：午前9時～午後6時の間で4時間以上\n・時給：1,150円\n・条件：18歳以上。パソコンで文字が打てる方。週3日以上働ける方。\n\nＤ　ダンボール回収スタッフ\n・仕事：使い終わったダンボール箱を車で回収する\n・時間：午後1時～5時\n・時給：1,200円\n・条件：18歳以上で、運転免許のある方。週2日からOK。\n\n【応募方法】\n・ホームページの応募フォームからお申し込みください。電話では受け付けていません。\n・面接の日には、写真をはった履歴書をお持ちください。\n・Ａの作業スタッフは、3月と4月だけ時給が200円上がります。\n・昼ごはんは会社が用意します。交通費は1か月10,000円まで出ます。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-joho-005-q1',
        stem: '大学生のチンさん（19歳）は、運転免許を持っていない。体を動かす仕事を週2日だけしたいと思っている。チンさんの希望に合う仕事はどれか。',
        options: [
          'Ａ　引っ越し作業スタッフ',
          'Ｂ　トラック運転手',
          'Ｃ　事務スタッフ',
          'Ｄ　ダンボール回収スタッフ',
        ],
        answerIndex: 0,
        explanation:
          '條件是：不需要駕照、能活動身體、每週只做2天。Ａ是搬運工作、18歲以上、「週2日からOK」，全部符合。Ｂ要21歲以上且持照3年以上，19歲又無照的陳同學不符；Ｃ是坐辦公室的事務工作，不是活動身體的工作，而且要每週3天以上；Ｄ雖然每週2天起，但條件寫明要有駕照，也不符合。',
        explanationEn:
          'The conditions are: no driver\'s license needed, physical work, and only two days a week. Job Ａ is moving work, open to ages 18 and up, and says 「週2日からOK」 — everything fits. Ｂ requires being at least 21 with a license held for three years or more, impossible for a 19-year-old without one; Ｃ is desk work, not physical, and demands three or more days a week; Ｄ starts from two days a week but explicitly requires a driver\'s license, so it does not qualify either.',
      },
      {
        id: 'n3-reading-joho-005-q2',
        stem: 'キムさん（25歳）は、3月にＡの仕事をすることになった。キムさんが3月にもらえる時給はいくらか。',
        options: ['1,600円', '1,400円', '1,200円', '1,800円'],
        answerIndex: 0,
        explanation:
          'Ａ的時薪是1,400日圓，但應募方法欄寫明「Ａの作業スタッフは、3月と4月だけ時給が200円上がります」，所以3月的時薪是1,400＋200＝1,600日圓。選1,400日圓是漏看了3月、4月加薪的說明；1,200日圓是誤用了Ｄ的時薪；1,800日圓是把200日圓的加成多算了一次。',
        explanationEn:
          'Job Ａ pays 1,400 yen per hour, but the application section states 「Ａの作業スタッフは、3月と4月だけ時給が200円上がります」, so in March the wage is 1,400 + 200 = 1,600 yen. Choosing 1,400 yen means missing the note about the March-April raise; 1,200 yen mistakenly uses job Ｄ\'s wage; 1,800 yen adds the 200 yen bonus twice.',
      },
    ],
  },
  {
    id: 'n3-reading-joho-006',
    kind: 'passage',
    passageTitle: 'ひばり公民館　スマートフォン教室のご案内',
    passage:
      'ひばり公民館　スマートフォン教室のご案内\n\nスマートフォンの使い方を、少人数のクラスでゆっくり学べます。ご自分のスマートフォンをお持ちください。お持ちでない方には、教室の間だけ練習用のスマートフォンをお貸しします。\n\n①はじめてコース\n・内容：電源の入れ方、電話のかけ方、文字の打ち方\n・日時：毎週月曜日　午前10時～11時30分\n・回数と料金：全4回　2,000円\n\n②便利に使うコース\n・内容：地図やカメラの使い方、メッセージの送り方\n・日時：毎週木曜日　午前10時～11時30分\n・回数と料金：全4回　2,000円\n・対象：①を受けた方、または基本の操作ができる方\n\n③安全に使うコース\n・内容：こまったメールへの対応、パスワードの管理\n・日時：第2・第4金曜日　午後2時～3時30分\n・回数と料金：全2回　1,500円\n・対象：メールを使ったことがある方\n\n④写真コース\n・内容：写真のとり方、写真の整理、家族への送り方\n・日時：毎週水曜日　午後2時～3時30分\n・回数と料金：全4回　2,500円\n・対象：基本の操作ができる方\n\n【申し込み方法】\n・公民館の受付に来るか、お電話でお申し込みください。\n・65歳以上の方は、どのコースも料金が500円引きになります。\n・二つ以上のコースに申し込む方は、二つ目のコースが300円引きになります（65歳以上の割引と一緒に使えます）。\n・締め切りは、各コースが始まる日の1週間前です。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-joho-006-q1',
        stem: 'モリさん（68歳）はスマートフォンを買ったばかりで、電話のかけ方も文字の打ち方も分からない。モリさんが最初に受けるのがいいコースはどれか。',
        options: [
          '①はじめてコース',
          '②便利に使うコース',
          '③安全に使うコース',
          '④写真コース',
        ],
        answerIndex: 0,
        explanation:
          '森先生連打電話、打字都還不會，也就是不會「基本の操作」。①沒有任何參加條件，內容正是開機、打電話、打字等入門操作，最適合。②的對象是「①を受けた方、または基本の操作ができる方」；④也要求「基本の操作ができる方」；③要求「メールを使ったことがある方」——這三個條件他目前都不符合。',
        explanationEn:
          'Mr. Mori cannot yet make calls or type, meaning he lacks the basic operations. Course ① has no entry requirement and covers exactly the beginner skills — powering on, making calls, typing — so it is the right first course. Course ② is for 「①を受けた方、または基本の操作ができる方」, course ④ also requires basic operation skills, and course ③ requires having used e-mail — none of which he currently satisfies.',
      },
      {
        id: 'n3-reading-joho-006-q2',
        stem: 'タナカさん（70歳）は、スマートフォンの基本の操作はできる。②と④の二つのコースに申し込むと、全部でいくら払うか。',
        options: ['3,200円', '3,500円', '4,500円', '2,900円'],
        answerIndex: 0,
        explanation:
          '②2,000日圓＋④2,500日圓＝4,500日圓。田中先生70歲，適用「65歳以上の方は、どのコースも料金が500円引き」，兩門課共減1,000日圓；又報了兩門課，「二つ目のコースが300円引き」再減300日圓，兩種折扣可併用，合計4,500－1,000－300＝3,200日圓。選3,500是漏掉第二門課的300日圓折扣；4,500是完全沒打折；2,900是把300日圓折扣誤算成兩門課都減。',
        explanationEn:
          'Courses ② and ④ cost 2,000 + 2,500 = 4,500 yen. At 70, Tanaka gets the senior discount of 500 yen off every course, saving 1,000 yen across the two; taking two courses also earns 300 yen off the second one, and the notice says the discounts can be combined, so the total is 4,500 - 1,000 - 300 = 3,200 yen. Choosing 3,500 yen misses the 300 yen multi-course discount; 4,500 yen applies no discounts at all; 2,900 yen wrongly applies the 300 yen reduction to both courses.',
      },
    ],
  },
]

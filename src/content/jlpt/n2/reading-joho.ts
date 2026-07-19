import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n2-reading-joho-001',
    kind: 'passage',
    passageTitle: 'あおば商工会議所　ビジネス研修講座　受講者募集',
    passage:
      'あおば商工会議所　ビジネス研修講座　受講者募集\n\n働く方のスキルアップを応援するため、下記の四つの研修講座を開講します。ご希望の講座を選び、期限までにお申し込みください。\n\n①ビジネス文書基礎\n・対象：社会人経験3年未満の方\n・日時：毎週月曜日　19時～21時（全6回）\n・受講料：12,000円（教材費込み）※会員企業の社員は10,000円\n\n②プレゼンテーション実践\n・対象：どなたでも\n・日時：毎週木曜日　19時～21時（全8回）\n・受講料：20,000円（このほか教材費2,000円が必要）\n\n③データ分析入門\n・対象：ノートパソコンを持参できる方\n・日時：毎週土曜日　10時～12時（全10回）\n・受講料：25,000円（教材費込み）\n\n④マネジメント基礎\n・対象：部下を持つ管理職の方\n・日時：毎週土曜日　14時～17時（全5回）\n・受講料：30,000円（教材費込み）\n\n【申し込み方法】\n・①と②はホームページからのみ受け付けます。③と④は窓口または郵送でお申し込みください。いずれの講座も、電話での申し込みはできません。\n・会員企業にお勤めの方は、受講料が2割引になります（①を除く。①は上記の会員料金が適用されます）。教材費は割引の対象外です。\n・締め切りは各講座の開講日の10日前です。ただし、定員に達し次第、受付を終了します。\n・申し込み後の取り消しは開講日の3日前まで可能です。それ以降は受講料をお返しできませんので、ご注意ください。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-joho-001-q1',
        stem: '会社員のリンさんは社会人5年目で、会員企業に勤めている。平日の夜に受けられて、支払う金額が合計18,000円以内の講座を探している。リンさんの希望に合う講座はどれか。',
        options: [
          '②プレゼンテーション実践',
          '①ビジネス文書基礎',
          '③データ分析入門',
          '④マネジメント基礎',
        ],
        answerIndex: 0,
        explanation:
          '要同時核對三個條件：平日晚上、總額18,000日圓以內、資格符合。②在週四晚上，會員折扣後受講料20,000×0.8＝16,000日圓，加教材費2,000日圓（不打折）合計剛好18,000日圓，全部符合。①雖然更便宜，但對象限「社會人經驗未滿3年」，5年資歷的林小姐資格不符；③④都在週六，不是平日晚上，④還限管理職。',
        explanationEn:
          'Three conditions must be checked together: weekday evenings, a total of at most 18,000 yen, and eligibility. Course ② meets on Thursday evenings; with the member discount the fee is 20,000 × 0.8 = 16,000 yen, plus the non-discountable 2,000 yen materials fee — exactly 18,000 yen, so everything fits. Course ① is cheaper but limited to people with under three years of work experience, so Lin, in her fifth year, does not qualify; ③ and ④ are held on Saturdays, not weekday evenings, and ④ is additionally restricted to managers.',
      },
      {
        id: 'n2-reading-joho-001-q2',
        stem: '会員企業に勤める課長のグエンさんは「④マネジメント基礎」を受けたい。申し込み方法と支払う金額の組み合わせとして、正しいものはどれか。',
        options: [
          '窓口か郵送で申し込み、24,000円を支払う。',
          'ホームページから申し込み、24,000円を支払う。',
          '窓口か郵送で申し込み、30,000円を支払う。',
          '電話で申し込み、27,000円を支払う。',
        ],
        answerIndex: 0,
        explanation:
          '④的報名方式依簡章是「窗口或郵寄」，且會員企業員工受講料打八折：30,000×0.8＝24,000日圓（④教材費已含在內，無另計）。第二個選項的金額對，但④不能從網站報名（網站限①②）；第三個選項忘了會員折扣；第四個選項錯在「電話での申し込みはできません」，任何講座都不受理電話報名。',
        explanationEn:
          'According to the flyer, course ④ must be applied for at the counter or by mail, and member-company employees get 20% off the fee: 30,000 × 0.8 = 24,000 yen (④\'s materials fee is already included, so nothing is added). The second option has the right amount, but ④ cannot be applied for on the website — that route is only for ① and ②; the third option forgets the member discount; the fourth fails because 「電話での申し込みはできません」 — no course accepts telephone applications.',
      },
    ],
  },
  {
    id: 'n2-reading-joho-002',
    kind: 'passage',
    passageTitle: 'グリーンハイツ　入居者募集',
    passage:
      'グリーンハイツ　入居者募集（さくら台駅から徒歩8分）\n\n現在、下記の4部屋の入居者を募集しています。ご希望の方は、まず内見（部屋の見学）にお越しください。\n\nＡ号室（1階・1K）\n・家賃：58,000円　管理費：3,000円\n・敷金1か月分・礼金なし\n・条件：単身者に限る。楽器の演奏・ペットの飼育は不可。\n\nＢ号室（2階・1LDK）\n・家賃：75,000円　管理費：5,000円\n・敷金1か月分・礼金1か月分\n・条件：二人入居可。小型犬1匹まで飼育可（飼育する場合は家賃に5,000円が加算されます）。\n\nＣ号室（3階・2LDK）\n・家賃：92,000円　管理費：5,000円\n・敷金2か月分・礼金1か月分\n・条件：家族向け。ペット不可。楽器の演奏は平日の昼間のみ可。\n\nＤ号室（1階・1DK）\n・家賃：63,000円　管理費：3,000円\n・敷金・礼金なし\n・条件：単身者・二人入居可。ペット不可。ただし、契約期間は2年以上に限ります。\n\n【内見・申し込みについて】\n・内見をご希望の方は、前日までにお電話でご予約ください。当日のご予約はお受けできません。\n・申し込みは、内見の後、店頭で申込書にご記入いただきます。ホームページや電話での申し込みはできません。\n・入居審査の際、収入を証明する書類が必要です。\n・学生の方は保証人を立てていただきます。社会人の方は、保証会社の利用（初回のみ家賃の50％）でも構いません。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-joho-002-q1',
        stem: 'モウさん夫婦は小型犬を1匹飼っている。毎月の支払い（家賃と管理費の合計）が85,000円以内の部屋を探している。モウさん夫婦が入居できる部屋はどれか。',
        options: ['Ｂ号室', 'Ａ号室', 'Ｃ号室', 'Ｄ号室'],
        answerIndex: 0,
        explanation:
          '三個條件：可兩人入住、可養小型犬、每月支出85,000日圓以內。Ｂ號室兩人可住、可養一隻小型犬，養狗加5,000日圓後家賃80,000日圓，加管理費5,000日圓正好85,000日圓，全部符合。Ａ號室限單身且禁寵物；Ｃ號室雖適合家庭但「ペット不可」；Ｄ號室也是禁養寵物，即使月支出66,000日圓最便宜也不能選。',
        explanationEn:
          'Three conditions: two occupants allowed, a small dog allowed, and monthly rent plus management fee within 85,000 yen. Room B allows couples and one small dog; with the 5,000 yen pet surcharge the rent becomes 80,000 yen, plus the 5,000 yen management fee — exactly 85,000 yen, so it fits. Room A is limited to single tenants and bans pets; Room C suits families but says 「ペット不可」; Room D also bans pets, so even though its 66,000 yen a month is the cheapest, it cannot be chosen.',
      },
      {
        id: 'n2-reading-joho-002-q2',
        stem: '留学生のパクさん（大学生・一人暮らし）は、敷金も礼金もかからない部屋に入居したい。パクさんの部屋の選び方と申し込みの手順として、正しいものはどれか。',
        options: [
          'Ｄ号室を選び、前日までに電話で内見を予約し、内見後に店頭で申し込む。保証人も必要だ。',
          'Ｄ号室を選び、ホームページから申し込む。学生なので保証会社を利用すればよい。',
          'Ａ号室を選び、当日電話をすれば内見でき、その場で申し込める。',
          'Ｂ号室を選び、前日までに電話で予約する。敷金・礼金は不要だ。',
        ],
        answerIndex: 0,
        explanation:
          '「敷金・礼金皆免」的只有Ｄ號室，且Ｄ可單身入住。程序上，內見須前一天以前電話預約、報名要在內見後於店頭填申込書，而朴同學是學生，依規定必須找保證人。第二個選項錯在網站不受理報名，且保證會社只開放給社會人；第三個選項錯在Ａ號室要敷金1個月，且當日不能預約內見；Ｂ號室敷金禮金各1個月，並非全免。',
        explanationEn:
          'Only Room D charges neither deposit nor key money, and it accepts single tenants. As for the procedure, a viewing must be booked by phone by the day before, the application form is filled out at the shop after the viewing, and since Park is a student he must provide a guarantor. The second option fails because applications via the website are not accepted and the guarantor-company option is open only to working adults; the third fails because Room A requires one month\'s deposit and same-day viewing bookings are refused; Room B charges one month each of deposit and key money, so it is not free of either.',
      },
    ],
  },
  {
    id: 'n2-reading-joho-003',
    kind: 'passage',
    passageTitle: 'みなと市　合同企業説明会のご案内',
    passage:
      'みなと市　合同企業説明会のご案内\n\n来春卒業予定の学生の方、および転職を希望する社会人の方を対象に、合同企業説明会を開催します。参加を希望される方は、下記の内容をよくご確認ください。\n\n■日時・会場\n・第1回：10月12日（土）13時～17時　みなと市民ホール\n・第2回：11月9日（土）10時～16時　中央産業会館\n\n■参加企業\n・第1回：製造業・ＩＴ関連企業を中心に40社\n・第2回：サービス業・小売業を中心に35社\n\n■参加費：無料\n\n■参加方法\n・学生の方：予約は不要です。当日、受付で学生証をご提示ください。\n・社会人の方：ホームページからの事前予約が必要です（各回とも開催日の3日前まで）。当日の受付はできませんので、ご注意ください。\n\n■模擬面接コーナー（第2回のみ）\n・第2回の会場では、面接の練習ができる「模擬面接コーナー」を行います。参加を希望する方は、履歴書を1通お持ちください。\n・模擬面接は先着20名までとし、当日13時から会場内の特設受付で申し込みを受け付けます。\n\n■注意事項\n・会場内での録音・録画はご遠慮ください。\n・第1回の会場には駐車場がありません。公共交通機関をご利用ください。第2回の会場には無料駐車場（80台）がありますが、数に限りがありますので、満車の際はご了承ください。\n・当日の資料は受付でお渡しします。事前の郵送は行いません。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-joho-003-q1',
        stem: '転職を考えている会社員のオウさんは、ＩＴ企業の説明を聞きたい。また、模擬面接も受けてみたい。オウさんがしなければならないことについて、正しいものはどれか。',
        options: [
          '両方の回とも3日前までにホームページで予約し、第2回には履歴書を持って行く。',
          '予約は必要ないが、両方の回に学生証と履歴書を持って行く。',
          '第1回だけ予約すればよく、模擬面接は第1回の会場で受けられる。',
          '第2回だけに参加すればよく、予約なしで当日の受付から入場できる。',
        ],
        answerIndex: 0,
        explanation:
          '王先生要對照身分、場次、期限、攜帶物四項：IT企業只在第1回，模擬面試只在第2回，所以兩場都得去；他是社會人，兩場都必須在3天前上網預約，且模擬面試要自備履歷書一份。第二個選項的「免預約＋學生證」是學生的規則，不適用社會人；第三個選項錯在模擬面試設在第2回會場；第四個選項則漏了IT企業場次，且社會人不能當天報到入場。',
        explanationEn:
          'Four things must be cross-checked: status, sessions, deadlines, and what to bring. IT companies appear only at the first session and the mock interviews only at the second, so Ou must attend both; as a working adult he must reserve on the website at least three days before each session, and the mock interview requires bringing one resume. The second option applies the students\' rule (no reservation, show a student ID) to a working adult; the third wrongly places the mock interviews at the first session\'s venue; the fourth drops the IT session, and working adults cannot enter through same-day registration anyway.',
      },
    ],
  },
  {
    id: 'n2-reading-joho-004',
    kind: 'passage',
    passageTitle: 'みどり市　省エネ家電買い替え補助金のご案内',
    passage:
      'みどり市　省エネ家電買い替え補助金のご案内\n\nみどり市では、家庭の省エネを進めるため、古い家電を省エネ家電に買い替えた方に、購入費用の一部を補助します。\n\n■対象者\n次のすべてに当てはまる方が対象です。\n・みどり市内に住民登録があること\n・市税を滞納していないこと\n・過去にこの補助金を受け取っていないこと\n\n■対象となる家電と補助額\n・エアコン：購入額の3分の1（上限30,000円）\n・冷蔵庫：購入額の3分の1（上限40,000円）\n・給湯器：購入額の3分の1（上限50,000円）\n※いずれも市内の店舗で購入したものに限ります。インターネットでの購入は対象外です。\n※買い替え前の古い家電をリサイクル（適正な処分）に出したことが条件です。\n\n■申請方法\n・申請書（市のホームページからダウンロードできます）に、次の三つの書類を添えて、市役所環境課の窓口に提出するか、郵送してください。メールでの申請は受け付けていません。\n　①購入した店舗の領収書のコピー\n　②古い家電のリサイクル券のコピー\n　③本人確認書類のコピー\n・申請期間は9月1日から12月28日までです。ただし、予算がなくなり次第、期間内でも受付を終了します。\n・補助金は、審査の後、約1か月で指定の口座に振り込まれます。その場での現金のお渡しはできません。\n\n■お問い合わせ\nみどり市役所環境課（平日8時30分～17時）',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-joho-004-q1',
        stem: 'みどり市に住むハヤシさん（市税の滞納なし・この補助金の申請は初めて）は、10月に市内の電器店で150,000円の冷蔵庫を買い、古い冷蔵庫をリサイクルに出した。ハヤシさんが受け取れる補助金の額と申請のしかたについて、正しいものはどれか。',
        options: [
          '40,000円。申請書に領収書などのコピーを添えて、窓口に出すか郵送する。',
          '50,000円。申請書に領収書などのコピーを添えて、窓口に出すか郵送する。',
          '40,000円。申請書と必要な書類を、メールで環境課に送る。',
          '50,000円。購入した店舗で申請すれば、その場で現金がもらえる。',
        ],
        answerIndex: 0,
        explanation:
          '林先生符合三項資格（市內設籍、無欠稅、首次申請），且在市內店鋪購買並回收舊機，符合補助條件。金額是購入額三分之一：150,000÷3＝50,000日圓，但冰箱上限40,000日圓，故只能領40,000日圓。申請方式限窗口提出或郵寄。第二個選項忘了套用上限；第三個選項錯在「メールでの申請は受け付けていません」；第四個選項錯在補助金是審查後匯入帳戶，不能當場領現。',
        explanationEn:
          'Hayashi meets all three eligibility rules (registered resident, no tax arrears, first-time applicant), bought at a shop in the city, and recycled the old unit, so he qualifies. The subsidy is one third of the price: 150,000 ÷ 3 = 50,000 yen, but refrigerators are capped at 40,000 yen, so he receives 40,000 yen, applying at the counter or by mail. The second option forgets to apply the cap; the third fails because 「メールでの申請は受け付けていません」; the fourth is wrong because the money is transferred to a bank account after review — it is never handed over in cash on the spot.',
      },
    ],
  },
  {
    id: 'n2-reading-joho-005',
    kind: 'passage',
    passageTitle: 'みなと市ものづくり技術展　出展者募集',
    passage:
      'みなと市ものづくり技術展　出展者募集\n\n市内のものづくり企業の技術を広く紹介するため、「みなと市ものづくり技術展」を開催します。出展を希望する企業は、下記をご確認のうえ、お申し込みください。\n\n■開催日時：３月５日（木）・６日（金）　１０時～１７時\n■会場：みなと産業交流センター　大ホール\n\n■出展できる方\n・市内に本社または工場がある企業\n・製造業、またはものづくりを支える情報技術関連の企業\n\n■出展料（２日間・税込み）\n・Ａ：標準ブース（間口２ｍ）　４０，０００円\n・Ｂ：広型ブース（間口４ｍ）　７０，０００円\n・Ｃ：実演ブース（間口４ｍ・電源付き、機械の実演ができます）　９０，０００円\n※創業５年以内の企業は、出展料が半額になります（Ｃを除く）。\n※長机１台といす２脚は無料で貸し出します。追加の机は１台２，０００円です。\n\n■申し込み方法\n・市のホームページから申込書をダウンロードし、メールでお送りください。窓口・郵送では受け付けません。\n・締め切り：１月３１日（金）※ブースの数に達し次第、受付を終了します。\n・出展の可否は、２月１４日（金）までにメールでお知らせします。\n\n■注意事項\n・実演を行う場合は、申込書に機械の種類と大きさを必ずご記入ください。\n・出展料は、出展決定の通知を受け取ってから２月末日までにお振り込みください。申し込みの時にお支払いいただく必要はありません。\n・当日の搬入は、前日の１５時から１８時の間にお願いします。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-joho-005-q1',
        stem: '市内に本社があるＩＴ企業のキムさんの会社は、創業３年目である。機械の実演はせず、できるだけ安いブースで出展し、机を１台追加で借りたい。キムさんの会社が支払う金額は、全部でいくらか。',
        options: ['２２，０００円', '４２，０００円', '３７，０００円', '２０，０００円'],
        answerIndex: 0,
        explanation:
          '金先生的公司是資訊技術相關企業且總公司在市內，符合出展資格。不做實演，最便宜的是標準攤位（Ａ）40,000日圓；創業3年適用「創業5年以內半價」變20,000日圓，再加追加桌子1台2,000日圓，合計22,000日圓。42,000日圓是忘了半價優惠；37,000日圓是誤選廣型攤位（Ｂ）打對折再加桌；20,000日圓則漏算了追加的桌子費用。',
        explanationEn:
          'Kim\'s company is an IT-related firm headquartered in the city, so it qualifies. With no live demonstration, the cheapest option is the standard booth (A) at 40,000 yen; being three years old, the company gets the founded-within-five-years half-price rate, 20,000 yen, plus 2,000 yen for one extra table — 22,000 yen in total. 42,000 yen forgets the half-price discount; 37,000 yen mistakenly halves the wide booth (B) and adds the table; 20,000 yen leaves out the extra table fee.',
      },
      {
        id: 'n2-reading-joho-005-q2',
        stem: '機械の実演をしたい会社の申し込みのしかたとして、正しいものはどれか。',
        options: [
          '申込書に機械の種類と大きさを書き、１月３１日までにメールで送る。出展料は決定の通知を受けてから振り込む。',
          '申込書を窓口に持って行き、その場で出展料９０，０００円を支払う。',
          'メールで申し込めば、創業５年以内の会社は実演ブースも半額で使える。',
          '申込書を郵送で送り、出展料は２月１４日までに振り込む。',
        ],
        answerIndex: 0,
        explanation:
          '實演要用Ｃ攤位，注意事項規定申込書上「機械の種類と大きさを必ずご記入ください」，申請一律從網站下載申込書後以電子郵件寄出、期限1月31日，出展費則是「出展決定の通知を受け取ってから」2月底前匯款。第二個選項錯在「窓口・郵送では受け付けません」且申請時不必付費；第三個選項錯在半價優惠「Ｃを除く」；第四個選項除了不能郵寄，2月14日是通知可否的期限而非匯款期限。',
        explanationEn:
          'A demonstration requires booth C, and the notes say the application form must state 「機械の種類と大きさ」; all applications are made by downloading the form from the website and sending it by email by January 31, and the fee is paid by bank transfer by the end of February, only after receiving the acceptance notice. The second option fails because 「窓口・郵送では受け付けません」 and no payment is due at application time; the third fails because the half-price discount applies 「Ｃを除く」 — not to demonstration booths; the fourth uses mail, which is not accepted, and February 14 is the deadline for the acceptance notice, not for payment.',
      },
    ],
  },
  {
    id: 'n2-reading-joho-006',
    kind: 'passage',
    passageTitle: 'ひまわりスポーツセンター　トレーニング室利用案内',
    passage:
      'ひまわりスポーツセンター　トレーニング室利用案内\n\nトレーニング室には、ランニングマシンや筋力トレーニングの機器があり、どなたでも利用できます（１６歳未満の方は利用できません）。\n\n■利用時間\n・平日：９時～２２時\n・土日祝日：９時～１８時\n※毎月第３月曜日は、機器点検のため終日利用できません。\n\n■利用料金（１回・２時間まで）\n・市内在住・在勤の方：３００円\n・市外の方：５００円\n・６５歳以上の方：２００円（市内・市外を問いません）\n※２時間を超える場合は、１時間ごとに１００円が加算されます。\n※お得な回数券（１１回分）：市内の方３，０００円、市外の方５，０００円\n\n■はじめて利用する方へ\n・初回は、機器の使い方を学ぶ「利用者講習会」（無料・約６０分）を必ず受けてください。講習会を受けていない方は、トレーニング室を利用できません。\n・講習会は毎週水曜日１９時と土曜日１０時に行います。前日までに、電話または受付窓口でお申し込みください。\n・講習会の当日は、運動できる服装と室内用の運動靴、本人確認書類（市内在住・在勤の確認にも使います）をお持ちください。\n\n■注意事項\n・利用の当日は、受付で利用料を支払い、利用証を受け取ってください。\n・混雑時は、ランニングマシンの利用を１人３０分までとさせていただくことがあります。\n・タオルの貸し出しは行っていません。各自でご用意ください。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-joho-006-q1',
        stem: '市内の会社に勤めるチンさん（４０歳）は、トレーニング室を初めて利用したいと考えている。チンさんがまずしなければならないことは何か。',
        options: [
          '前日までに電話か受付窓口で申し込んで、無料の利用者講習会を受ける。',
          '利用したい日に受付で５００円を払い、そのままトレーニング室に入る。',
          '回数券５，０００円を買ってから、利用者講習会に申し込む。',
          '毎月第３月曜日に行われる利用者講習会に参加する。',
        ],
        answerIndex: 0,
        explanation:
          '案內明定初次利用者「必ず」要先上免費的利用者講習會，且「講習会を受けていない方は、トレーニング室を利用できません」；講習會要在前一天以前用電話或窗口報名。第二個選項錯在未受講不能進場，且陳先生是市內在勤，費用是300日圓不是500日圓；買回數券並非必要條件，市內的人也是3,000日圓；第四個選項錯在講習會辦在週三與週六，第3個週一整天休館。',
        explanationEn:
          'The notice says first-time users 「必ず」 must take the free orientation session, and 「講習会を受けていない方は、トレーニング室を利用できません」; sign-up is by phone or at the reception desk by the day before. The second option fails because entry without the session is not allowed, and Chin works in the city, so his fee would be 300 yen, not 500. Buying a ticket book is not required, and the in-city price is 3,000 yen anyway. The fourth option fails because sessions are held on Wednesdays and Saturdays, while the third Monday of each month is a full-day closure for equipment inspection.',
      },
      {
        id: 'n2-reading-joho-006-q2',
        stem: '市外に住むオウさん（６８歳・講習会は受講済み）が、平日にトレーニング室を３時間利用する場合、支払う利用料はいくらか。',
        options: ['３００円', '６００円', '２００円', '５００円'],
        answerIndex: 0,
        explanation:
          '王先生68歲，適用「６５歳以上の方：２００円」且「市内・市外を問いません」，所以基本費不是市外的500日圓而是200日圓。利用3小時超過「１回・２時間まで」的範圍，超出的1小時加收100日圓，合計300日圓。600日圓是誤用市外料金500再加100；200日圓漏算了超時加價；500日圓則是只看市外料金、又忘了65歲以上優惠與加價規則。',
        explanationEn:
          'Ou is 68, so the senior rate applies: 「６５歳以上の方：２００円」, and it holds 「市内・市外を問いません」, overriding the 500 yen non-resident fee. Three hours exceeds the two-hour base (「１回・２時間まで」) by one hour, adding 100 yen, for a total of 300 yen. 600 yen wrongly starts from the 500 yen non-resident fee plus the surcharge; 200 yen forgets the extra-hour charge; 500 yen applies only the non-resident rate while ignoring both the senior discount and the surcharge rule.',
      },
    ],
  },
]

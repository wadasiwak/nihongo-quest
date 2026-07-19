import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n1-reading-joho-001',
    kind: 'passage',
    passageTitle: '『環境情報学研究』投稿規程（抜粋）',
    passage:
      '『環境情報学研究』投稿規程（抜粋）\n\n１．投稿資格\n投稿は本学会の会員に限る。ただし、共著の場合は、筆頭著者が会員であれば共著者は非会員でも差し支えない。また、編集委員会が執筆を依頼した原稿については、この限りではない。\n\n２．原稿の種別と分量（いずれも図表・注・文献を含む）\n・研究論文：独創的な知見を含む未発表の研究。20,000字以内。\n・研究ノート：速報性を重視した短い報告。10,000字以内。\n・実践報告：教育・調査の現場における取り組みの報告。12,000字以内。\nなお、他誌に投稿中の原稿、および既に発表された原稿は受け付けない。\n\n３．審査\n研究論文と研究ノートは、2名の査読者による審査を経て掲載の可否を決定する。実践報告は編集委員会による審査のみとする。修正のうえ再投稿を求められた原稿は、指定された期日までに再提出しない場合、新規の投稿として扱う。\n\n４．掲載料\n研究論文は30,000円、研究ノートおよび実践報告は15,000円とする。筆頭著者が学生会員の場合、掲載料は半額とする。ただし、カラー図版を使用する場合は、種別を問わず1点につき10,000円を別途申し受け、この費用には学生割引を適用しない。\n\n５．締め切り\n本誌は6月と12月の年2回発行とし、6月号は前年12月末日、12月号は当年6月末日を投稿の締め切りとする。締め切りを過ぎた原稿は、次の号への投稿として扱う。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-001-q1',
        stem: '大学院生のチンさん（本学会の学生会員）は、非会員である指導教員を共著者に加え、自身を筆頭著者として研究論文を投稿し、採用された。カラー図版を2点使用する場合、チンさんが支払う金額は合計いくらか。',
        options: ['35,000円', '25,000円', '50,000円', '15,000円'],
        answerIndex: 0,
        explanation:
          '研究論文掲載料30,000日圓，筆頭著者是學生會員可減半成15,000日圓；彩色圖版每張10,000日圓、2張共20,000日圓，且規程明示此費用「不適用學生折扣」，合計35,000日圓。選25,000是把彩圖費也打了對折；選50,000是漏掉學生半價；選15,000是漏算彩圖費。又筆頭著者是會員即可投稿，指導教員非會員無妨。',
        explanationEn:
          'The publication fee for a research paper is 30,000 yen, halved to 15,000 yen because the first author is a student member; color figures cost 10,000 yen each, so two come to 20,000 yen, and the rules state 「この費用には学生割引を適用しない」 — the student discount does not apply to that part. The total is therefore 35,000 yen. Choosing 25,000 halves the color-figure fee as well; 50,000 misses the student half-price; 15,000 forgets the color figures. Note also that only the first author needs to be a member, so the non-member advisor poses no problem.',
      },
      {
        id: 'n1-reading-joho-001-q2',
        stem: '正会員のトウさんは、速報性のある研究成果を図表を含めて11,000字にまとめた。これを今年の12月号に掲載してもらいたい。トウさんがすべきことはどれか。',
        options: [
          '原稿を10,000字以内に収め、6月末日までに研究ノートとして投稿する。',
          '現在の原稿のまま、12月末日までに研究ノートとして投稿する。',
          '現在の原稿のまま、6月末日までに実践報告として投稿する。',
          '原稿を10,000字以内に収め、12月末日までに研究ノートとして投稿する。',
        ],
        answerIndex: 0,
        explanation:
          '要交叉核對三個條件：內容是重視速報性的研究成果，種別應為研究ノート；研究ノート上限10,000字，11,000字超標必須刪減；12月號的截稿日是「当年6月末日」。三者兼顧的只有第一個選項。「12月末日」是隔年6月號的截稿日，趕不上12月號；實踐報告限教育・調査現場的取組報告，研究速報不符該種別定義。',
        explanationEn:
          'Three conditions must be cross-checked: the content is a research result prioritizing timeliness, so the category should be a research note (研究ノート); research notes are capped at 10,000 characters, so the 11,000-character manuscript must be trimmed; and the deadline for the December issue is 「当年6月末日」 — the end of June of the same year. Only the first option satisfies all three. 「12月末日」 is the deadline for the following June issue and would miss the December issue, and practice reports are limited to accounts of hands-on work in education or fieldwork, so a rapid research report does not fit that category.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-002',
    kind: 'passage',
    passageTitle: 'あおば国際財団　私費外国人留学生奨学金　募集要項',
    passage:
      'あおば国際財団　私費外国人留学生奨学金　募集要項\n\n１．支給内容\n月額80,000円を4月から翌年3月まで1年間支給する。返還の義務はない。採用人数は20名程度。\n\n２．応募資格（次のすべてを満たすこと）\n（１）日本国内の大学の学部3年生・4年生、または大学院修士課程に在籍する私費外国人留学生であること（博士課程は対象外）。\n（２）前年度の成績評価係数が2.5以上であること。\n（３）仕送りが月平均90,000円以下であること（入学料・授業料は含まない）。\n（４）他の団体から給付型奨学金を受けていないこと。ただし、貸与型奨学金および授業料減免との併用は妨げない。\nなお、過去に本財団の奨学金を受けた者は、応募することができない。\n\n３．提出書類\n（１）申請書（本財団所定の様式に限る）\n（２）在学証明書および成績証明書\n（３）指導教員の推薦状（学部生は学部長の推薦状でも可）\n（４）住民票の写し\n\n４．選考\n書類選考の通過者に対し、2月中旬に本財団事務所で面接を行う。オンラインでの面接は実施しない。結果は3月上旬に全員へ文書で通知する。\n\n５．申請方法・期限\n1月31日必着。郵送のみ受け付け、持参および電子メールによる提出は認めない。書類に不備がある場合は受理しない。提出された書類は返却しない。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-002-q1',
        stem: '次の4人の私費外国人留学生のうち、この奨学金に応募できるのは誰か。',
        options: [
          '学部4年生で、成績評価係数2.8、仕送りは月平均85,000円、貸与型奨学金を受けているキムさん',
          '修士課程1年生で、成績評価係数3.2、仕送りは月平均70,000円、民間団体の給付型奨学金を受けているワンさん',
          '学部3年生で、成績評価係数2.9、仕送りは月平均80,000円、3年前に本財団の奨学金を受けたことがあるサリさん',
          '博士課程2年生で、成績評価係数3.5、仕送りは月平均60,000円、ほかの奨学金を受けていないメイさん',
        ],
        answerIndex: 0,
        explanation:
          '應募資格要同時滿足在學身分、成績、仕送り、他獎學金四項。金同學：學部4年生、係數2.8高於2.5、仕送り85,000低於90,000，雖然領貸與型獎學金，但要項明示貸與型可併用，全部過關。王同學領的是給付型，違反第（4）項本文；莎莉同學曾受本財團獎學金，依「なお」的例外條款不得再應募；梅同學是博士課程，明文排除在對象外。',
        explanationEn:
          'Eligibility requires meeting all four conditions: enrollment status, grades, monthly allowance, and other scholarships. Kim is a fourth-year undergraduate, her GPA coefficient of 2.8 exceeds 2.5, her allowance of 85,000 yen is under 90,000, and although she receives a loan-type scholarship, the guidelines explicitly permit combining with loan-type aid — she passes on every point. Wang receives a grant-type scholarship, violating clause (4); Sari once received this foundation\'s scholarship and is barred by the 「なお」 proviso; and Mei is a doctoral student, explicitly excluded from eligibility.',
      },
      {
        id: 'n1-reading-joho-002-q2',
        stem: '学部3年生のラマさんがこの奨学金を申請する。募集要項の内容と合っているものはどれか。',
        options: [
          '指導教員の推薦状の代わりに、学部長の推薦状を提出してもよい。',
          '期限に間に合わないときは、電子メールで申請書を送ってもよい。',
          '遠方に住んでいる場合は、面接をオンラインで受けることができる。',
          '書類に不備があっても、いったん受理された後に補正すればよい。',
        ],
        answerIndex: 0,
        explanation:
          '提出書類第（3）項規定推薦狀原則上由指導教員出具，但括號附了例外：「学部生は学部長の推薦状でも可」。拉瑪同學是學部生，適用此例外，第一個選項正確。其餘皆與要項相反：申請只收郵寄，明文不接受親送與電子郵件；面接明文不以線上方式實施；書類不備者根本不予受理，沒有事後補正的餘地。',
        explanationEn:
          'Document clause (3) requires a letter of recommendation from the academic advisor in principle, but the parenthesis adds an exception: 「学部生は学部長の推薦状でも可」. Lama is an undergraduate, so the exception applies and the first option is correct. The rest contradict the guidelines: applications are accepted by post only, with hand delivery and email explicitly refused; interviews are explicitly not held online; and applications with incomplete documents are simply not accepted, leaving no room for fixing them afterward.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-003',
    kind: 'passage',
    passageTitle: '株式会社ミライ電子　キャリア採用　募集職種一覧',
    passage:
      '株式会社ミライ電子　キャリア採用　募集職種一覧\n\n現在、以下の4職種で経験者を募集しています。応募は1名につき1職種に限ります。\n\nＡ　ソフトウェア開発（勤務地：東京）\n・応募条件：ソフトウェア開発の実務経験3年以上。ただし、当社が指定する技術資格の保有者は、実務経験1年以上で応募できます。\n・語学：不問\n・勤務形態：フレックスタイム制。在宅勤務は週3日まで可。\n\nＢ　海外営業（勤務地：大阪）\n・応募条件：法人営業の実務経験2年以上。ビジネスレベルの英語力（TOEIC800点以上が目安）。\n・海外出張が月1回程度あります。在宅勤務は不可。\n\nＣ　品質管理（勤務地：名古屋）\n・応募条件：実務経験は問いません。理系の学士以上の学位が必須。\n・交替勤務（早番・遅番）があります。在宅勤務は不可。\n\nＤ　データ分析（勤務地：東京）\n・応募条件：統計解析の実務経験2年以上、または大学院で統計学を専攻し修了した方。\n・勤務形態：原則として在宅勤務。ただし、週2日は東京本社への出社が必要です。\n\n【応募方法】\n当社採用サイトから、履歴書と職務経歴書を提出してください。郵送・メールでの応募は受け付けません。書類選考の後、面接を2回（うち1回はオンライン可）行います。応募書類に記載された経験・資格については、面接の際に証明書等の提示を求めます。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-003-q1',
        stem: 'グエンさんは大学院で統計学を専攻して修了したが、実務経験は一度もない。TOEICのスコアは850点で、できるだけ在宅で働きたいと考えている。グエンさんについて正しいものはどれか。',
        options: [
          'Ｄに応募できるが、採用されても完全な在宅勤務はできない。',
          '実務経験がないため、応募できる職種は一つもない。',
          'Ｄに応募し、採用されれば完全な在宅勤務ができる。',
          '英語力を生かしてＢに応募すれば、在宅で働くことができる。',
        ],
        answerIndex: 0,
        explanation:
          'Ｄ的應募條件是「実務経験2年以上」或「大学院で統計学を専攻し修了」二擇一，阮同學符合後者，沒有實務經驗也能應募。但Ｄ的勤務形態雖以在宅為原則，後面跟著例外條款：每週須進東京本社2天，所以不可能完全在宅。說「一つもない」是漏看了Ｄ的替代條件（Ｃ也不問經驗）；Ｂ要求法人營業經驗2年以上且明文在宅不可，英語分數夠也不行。',
        explanationEn:
          'Position D\'s requirement is either 「実務経験2年以上」 or 「大学院で統計学を専攻し修了」 — one of the two suffices, and Nguyen meets the latter, so he can apply despite having no work experience. However, although D\'s work style is remote in principle, the proviso that follows requires two days per week at the Tokyo head office, so fully remote work is impossible. The option saying there is nothing he can apply for overlooks D\'s alternative condition (C also asks for no experience); B requires two or more years of corporate sales experience and explicitly bans remote work, so a good English score does not help.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-004',
    kind: 'passage',
    passageTitle: 'ひかり市生涯学習センター　会議室利用案内',
    passage:
      'ひかり市生涯学習センター　会議室利用案内\n\n■会議室と利用料金（1時間あたり）\n・大会議室（定員50名）：3,000円\n・中会議室（定員20名）：1,500円\n・小会議室（定員8名）：800円\n利用時間は午前9時から午後9時までです。定員を超える人数での利用はできません。\n\n■申し込み\n利用日の3か月前から7日前まで、窓口または市のホームページで受け付けます。市内で活動する登録団体は、6か月前から申し込むことができます。\n\n■割引と割増\n・市内の登録団体が利用する場合、利用料金は半額になります。\n・参加費を集めるなど営利を目的とする利用は、料金が2倍になります。この場合、登録団体であっても割引は適用されません。\n\n■支払い\n利用料金は、利用日の3日前までに窓口でお支払いください。当日のお支払いはできませんので、ご注意ください。\n\n■キャンセル\n利用日の7日前までの取り消しは無料です。6日前から前日までは利用料金の半額、当日は全額をお支払いいただきます。ただし、気象警報の発表により利用できなかった場合は、全額をお返しします。\n\n■注意事項\n・室内での飲食はご遠慮ください。ただし、蓋付きの飲み物は持ち込むことができます。\n・機材（プロジェクター等）は無料で貸し出しますが、事前の予約が必要です。\n・利用後は、机と椅子を元の位置に戻してください。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-004-q1',
        stem: '市内の登録団体である読書会（会員12名、参加費は集めない）が、3週間後の土曜日に会議室を3時間利用したい。最も安く利用する場合、支払う利用料金はいくらか。',
        options: ['2,250円', '4,500円', '1,200円', '9,000円'],
        answerIndex: 0,
        explanation:
          '先看定員：12人超過小會議室的定員8名，規約明示不得超員使用，可用的最小房間是中會議室（定員20名）。中會議室每小時1,500日圓、3小時共4,500日圓；讀書會是市內登錄團體、不收參加費屬非營利，適用半價成2,250日圓。選4,500是漏掉登錄團體折扣；選1,200是硬用定員不足的小會議室再打折；選9,000是誤套營利加倍條款。',
        explanationEn:
          'Check capacity first: twelve people exceed the small room\'s capacity of eight, and the rules explicitly forbid exceeding capacity, so the smallest usable room is the medium room (capacity twenty). The medium room costs 1,500 yen per hour, or 4,500 yen for three hours; the reading club is a registered local group that collects no fees, hence non-profit, so the half-price discount brings it to 2,250 yen. Choosing 4,500 misses the registered-group discount; 1,200 forces the undersized small room and then discounts it; 9,000 wrongly applies the for-profit doubling clause.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-005',
    kind: 'passage',
    passageTitle: 'みどり市商店街にぎわい創出事業補助金　公募要領',
    passage:
      'みどり市商店街にぎわい創出事業補助金　公募要領\n\n１．目的\n商店街の活性化を図るため、市内の商店街で新たな取り組みを行う事業者に対し、その経費の一部を補助する。\n\n２．補助対象者\n市内の商店街で小売業または飲食業を営む事業者とする。ただし、市税を滞納している者、および過去にこの補助金の交付を受けたことがある者は対象としない。\n\n３．補助率と上限額\n補助率は補助対象経費の2分の1以内とし、上限額は40万円とする。ただし、開業から1年未満の事業者（以下「新規開業者」という）については、補助率を3分の2以内とし、上限額を60万円とする。\n\n４．補助対象経費\n店舗の改装費、看板の製作費、広告宣伝費、および設備の購入費とする。なお、消耗品費、人件費、ならびに交付決定の通知を受ける前に支出した経費は、対象としない。\n\n５．申請方法\n9月30日までに、申請書および事業計画書を市のホームページから電子申請すること。窓口への持参および郵送による申請は受け付けない。審査の結果は、10月末日までに申請者全員に文書で通知する。\n\n６．事業の実施と報告\n補助対象の事業は、交付決定後に着手し、翌年2月末日までに完了しなければならない。事業の完了後30日以内に実績報告書を提出しない場合は、交付決定を取り消すことがある。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-005-q1',
        stem: 'リンさんは、開業して8か月になる飲食店を市内の商店街で営んでいる（市税の滞納はなく、この補助金を受けたこともない）。店舗改装費60万円、設備購入費30万円、人件費15万円、合計105万円の事業を計画している場合、交付される補助金は最大いくらか。',
        options: ['60万円', '70万円', '45万円', '40万円'],
        answerIndex: 0,
        explanation:
          '先篩對象經費：人件費明列為對象外，對象經費是改裝費60萬＋設備費30萬＝90萬日圓。林先生開業8個月，屬「新規開業者」，補助率適用3分之2即60萬日圓，恰好等於新規開業者的上限60萬。選70萬是把人件費也算進去乘3分之2；選45萬是誤用一般事業者的2分之1補助率；選40萬是誤套一般上限，漏看了新規開業者的例外條款。',
        explanationEn:
          'Filter the eligible expenses first: personnel costs are explicitly excluded, so the eligible amount is the 600,000 yen renovation plus the 300,000 yen equipment, i.e. 900,000 yen. Having been open for eight months, Lin qualifies as a 「新規開業者」, so the two-thirds subsidy rate applies, giving 600,000 yen — exactly the 600,000 yen cap for new businesses. Choosing 700,000 includes the personnel costs before multiplying by two-thirds; 450,000 wrongly uses the general one-half rate; 400,000 wrongly applies the general cap and overlooks the new-business exception clause.',
      },
      {
        id: 'n1-reading-joho-005-q2',
        stem: 'この公募要領の内容と合っているものはどれか。',
        options: [
          '交付決定の通知を受ける前に支払った経費は、補助の対象にならない。',
          '申請書は、郵送または窓口への持参で提出することもできる。',
          '過去にこの補助金を受けた事業者も、新たな取り組みであれば申請できる。',
          '実績報告書は、翌年度の末日までに提出すればよい。',
        ],
        answerIndex: 0,
        explanation:
          '第4項的「なお」但書明定：交付決定通知前支出的經費不列入補助對象，第一個選項與此一致。其餘皆與要領相反：申請方式明文只收電子申請，不受理郵寄與親送；曾受領本補助金者依第2項的但書排除，不得再申請；實績報告書須在事業完成後30日內提出，否則可能被取消交付決定，並非隔年度交件即可。',
        explanationEn:
          'The 「なお」 proviso in section 4 states that expenses paid before receiving the grant-decision notice are not eligible for the subsidy, which matches the first option. The rest contradict the guidelines: applications are accepted electronically only, with postal and in-person submission refused; past recipients of this subsidy are excluded by the proviso in section 2 and may not apply again; and the results report must be submitted within 30 days of completing the project — otherwise the grant decision may be revoked — not merely by the end of the following fiscal year.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-006',
    kind: 'passage',
    passageTitle: '第12回アジア環境科学国際会議　参加要項',
    passage:
      '第12回アジア環境科学国際会議　参加要項\n\n１．開催概要\n会期：11月18日（水）～20日（金）\n会場：みなと国際会議場\n使用言語：英語および日本語\n\n２．参加登録費\n・早期登録（9月30日まで）：一般 25,000円、学生 12,000円\n・通常登録（10月1日～11月10日）：一般 30,000円、学生 15,000円\n参加登録費には、要旨集および昼食が含まれる。11月19日夜の懇親会（会費6,000円）に参加する場合は、登録の際に別途申し込むこと。懇親会の当日申し込みは受け付けない。なお、学生料金の適用を受けるには、登録の際に学生証の写しを提出すること。\n\n３．発表の申し込み\n口頭発表またはポスター発表を希望する者は、8月31日までに要旨（英語、400語以内）を大会ウェブサイトから提出すること。締め切り後の要旨の差し替えは、理由を問わず認めない。採否は9月20日までに通知する。\n発表者は、一般・学生を問わず、早期登録期間内に参加登録を完了しなければならない。期間内に登録がない場合、発表は取り消される。\n\n４．オンライン参加\n講演の視聴のみを目的とするオンライン参加を認める（参加費：一般 10,000円、学生 5,000円）。オンラインでの発表は認めない。ただし、ポスター発表に限り、やむを得ない事情があると大会委員会が認めた場合は、事前に録画した映像による発表を認めることがある。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-006-q1',
        stem: '修士課程の学生のパクさんは、この会議で口頭発表を行い、懇親会にも参加するつもりである。要項に従って手続きをする場合、パクさんが支払う金額は合計いくらか。',
        options: ['18,000円', '21,000円', '12,000円', '31,000円'],
        answerIndex: 0,
        explanation:
          '發表者不分一般・學生，都必須在早期登錄期間內完成登錄，否則發表會被取消，所以朴同學適用學生早期費12,000日圓；懇親會費6,000日圓不含在登錄費內須另繳，合計18,000日圓。選21,000是誤用通常期的學生費15,000，但發表者不能拖到通常期；選12,000是漏算懇親會費；選31,000是誤用一般早期費，朴同學提交學生證影本即可適用學生費。',
        explanationEn:
          'Presenters, whether general or student, must complete registration within the early-registration period or their presentation is cancelled, so Park pays the early student fee of 12,000 yen; the banquet fee of 6,000 yen is not included in the registration fee and must be paid separately, giving a total of 18,000 yen. Choosing 21,000 wrongly uses the regular-period student fee of 15,000, but a presenter cannot wait until the regular period; 12,000 forgets the banquet fee; 31,000 wrongly uses the general early fee — by submitting a copy of his student ID, Park qualifies for the student rate.',
      },
      {
        id: 'n1-reading-joho-006-q2',
        stem: 'この参加要項の内容と合っているものはどれか。',
        options: [
          '事情によっては、ポスター発表を事前に録画した映像で行うことが認められる場合がある。',
          '要旨は、締め切り後でも採否の通知前であれば差し替えることができる。',
          '懇親会の会費は、参加登録費に含まれている。',
          '発表者は、11月10日までに参加登録を完了すればよい。',
        ],
        answerIndex: 0,
        explanation:
          '第4項雖明文「オンラインでの発表は認めない」，但緊接著的「ただし」設了例外：限海報發表、有不得已事由且經大會委員會認可時，可用事前錄影的方式發表，第一個選項正確。要旨在截止後不論理由一律不得抽換；懇親會費6,000日圓須於登錄時另外申請，不含在登錄費內；發表者必須在早期登錄期間（9月30日前）完成登錄，11月10日只是通常登錄的截止日。',
        explanationEn:
          'Section 4 states 「オンラインでの発表は認めない」, but the 「ただし」 that follows carves out an exception: for poster presentations only, when the committee recognizes unavoidable circumstances, a presentation by pre-recorded video may be allowed — so the first option is correct. Abstracts may not be replaced after the deadline for any reason; the 6,000 yen banquet fee is not included in the registration fee and must be requested separately at registration; and presenters must complete registration within the early period (by September 30) — November 10 is merely the regular registration deadline.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-007',
    kind: 'passage',
    passageTitle: '中央図書館　文献複写サービスのご案内',
    passage:
      '中央図書館　文献複写サービスのご案内\n\n■複写できる資料\n複写できるのは、当館が所蔵する資料に限ります。著作権法の定めにより、複写できる範囲は著作物の一部分（半分まで）、お一人につき1部のみです。\n雑誌・新聞の最新号は複写できません。ただし、次の号が発行された後であれば、掲載されている個々の記事や論文は、その全体を複写することができます。\n\n■料金と申し込み\n白黒：1枚10円　カラー：1枚50円\n複写をご希望の方は、1階カウンターで申込書にご記入のうえ、資料とともにお出しください。料金は現金でお支払いください。\n\n■郵送複写サービス\n来館が難しい方のために、複写物を郵送でお送りするサービスを行っています。ご利用いただけるのは、当館の利用者カードをお持ちの方のみです。複写料金のほかに、送料と手数料200円をご負担いただきます。お申し込みはホームページの専用フォームからのみ受け付けます。電話や窓口でのお申し込みはできません。\n\n■ご注意\n・複写は職員が行います。ご自身のカメラやスマートフォンで資料を撮影することはできません。\n・他の図書館から取り寄せた資料の複写については、所蔵している図書館の定めに従います。\n・複写物のご利用は、調査研究の目的に限ります。複写物を他人に配ったり、インターネット上に掲載したりすることはできません。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-007-q1',
        stem: '大学生のホアンさんは、先週発行されたばかりの雑誌『環境と社会』の最新号に掲載されている論文を、全体を手元に置いてじっくり読みたいと考えている。ホアンさんについて、案内の内容と合っているものはどれか。',
        options: [
          '次の号が発行されるのを待てば、その論文の全体を複写してもらうことができる。',
          '最新号であっても、その論文の半分までなら複写してもらうことができる。',
          '自分のスマートフォンでその論文を撮影すれば、すぐに全体を手に入れられる。',
          '利用者カードがなくても、郵送複写を申し込めばその論文の全体を送ってもらえる。',
        ],
        answerIndex: 0,
        explanation:
          '規定分三層：原則上著作物只能複印一半；雜誌最新號則連一半都不能印；但「ただし」的例外指出下一號發行後，最新號裡的個別論文即可全篇複印。黃同學想要論文全篇，等下一號發行是唯一合規的做法。說最新號可印一半，是被原則規定誤導、漏看最新號的禁止條款；自行用手機拍攝明文禁止；郵寄複印限持有利用者卡的人，且最新號本來就不能複印。',
        explanationEn:
          'The rules have three layers: in principle only half of a copyrighted work may be copied; the latest issue of a magazine may not be copied at all, not even half; but the 「ただし」 exception says that once the next issue is published, individual articles in the former latest issue may be copied in full. Since Hoang wants the whole article, waiting for the next issue is the only compliant route. Saying half of the latest issue can be copied is misled by the general rule and misses the latest-issue ban; photographing with one\'s own phone is explicitly forbidden; and mail-order copying is limited to holders of a user card — besides, the latest issue cannot be copied in the first place.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-008',
    kind: 'passage',
    passageTitle: 'さくら市民農園　利用規約（抜粋）',
    passage:
      'さくら市民農園　利用規約（抜粋）\n\n１．利用できる方\n市内に住所を有する個人に限ります。1世帯につき1区画までです。営利を目的とした栽培はできません。\n\n２．区画と利用料\n1区画（約15平方メートル）　年額6,000円\n利用料は、年度の初めに一括してお支払いください。年度の途中で利用をやめた場合でも、利用料はお返ししません。\n\n３．利用期間\n利用期間は、4月1日から翌年3月31日までの1年間です。希望する場合は1回に限り更新することができ、同一の方が続けて利用できるのは最長2年間です。ただし、利用期間が満了した後、新たな応募者の数が区画の数に満たない場合は、引き続き利用することができます。\n\n４．栽培のきまり\n・栽培できるのは、野菜、草花およびハーブ類です。樹木や果樹など、複数の年にわたって育てる植物を植えることはできません。\n・農薬を使用する場合は、事前に管理事務所に届け出てください。\n・区画の中に物置などの工作物を設けることはできません。支柱やビニールトンネルなど、簡易なものは差し支えありません。\n\n５．利用の取り消し\n次のいずれかに当てはまる場合は、利用の承認を取り消すことがあります。取り消しとなった場合も、利用料は返還しません。\n・2か月以上、耕作をせずに区画を放置した場合\n・区画を他人に貸したり、譲ったりした場合\n・この規約に違反し、管理事務所の指導に従わない場合',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-008-q1',
        stem: 'この利用規約の内容と合っているものはどれか。',
        options: [
          '2年間利用した人でも、新たな応募者が少なければ、3年目も続けて利用できる。',
          '収穫した野菜は、市内の直売所で販売してもよい。',
          '区画にブルーベリーなどの果樹を植えてもよい。',
          '年度の途中で利用をやめた場合は、残りの期間の利用料が返金される。',
        ],
        answerIndex: 0,
        explanation:
          '利用期間原則上最長2年，但第3項附了例外條款：期滿後若新應募者人數未達區畫數量，可以繼續利用，所以用滿2年的人在應募者不足時能種第3年，第一個選項正確。販賣收成違反第1項「不得以營利為目的栽培」；藍莓是果樹，屬於跨年生長的植物，明文不得種植；年度中途退出時，利用料明文不予退還。',
        explanationEn:
          'The usage period is at most two years in principle, but section 3 adds an exception: if, after the term expires, the number of new applicants falls short of the number of plots, continued use is allowed — so someone who has used a plot for two full years can farm a third year when applicants are scarce, making the first option correct. Selling the harvest violates section 1\'s ban on cultivation for profit; blueberries are fruit trees, plants grown over multiple years, which are explicitly prohibited; and the fee is explicitly non-refundable if one quits partway through the year.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-009',
    kind: 'passage',
    passageTitle: 'みなと市民マラソン大会　参加要項',
    passage:
      'みなと市民マラソン大会　参加要項\n\n１．種目と参加資格\n・フルマラソン：大会当日に18歳以上で、5時間30分以内に完走できる方\n・ハーフマラソン：大会当日に16歳以上の方\n・10km：中学生以上の方\n・ファンラン（3km）：どなたでも参加できます。ただし、小学生以下は保護者との同伴参加に限ります。\nなお、複数の種目に申し込むことはできません。\n\n２．申込期間と抽選\n申し込みは6月1日から7月31日まで、大会公式サイトでのみ受け付けます（郵送・電話は不可）。フルマラソンは、申し込みが定員8,000人を超えた場合は抽選とし、結果は8月20日までにメールで通知します。ハーフマラソン・10km・ファンランは先着順とし、定員に達し次第締め切ります。\n\n３．参加費\n・フルマラソン：8,000円\n・ハーフマラソン：6,000円\n・10km：4,000円\n・ファンラン：2,000円\n市内在住または市内在勤・在学の方は、種目を問わず参加費が1,000円引きになります。また、高校生以下は参加費が半額になります。ただし、二つの割引を同時に受けることはできず、割引額の大きい方のみを適用します。入金後の参加費は、理由を問わず返金しません。\n\n４．当日の受付\nスタートの90分前までに、会場の受付で本人確認書類を提示してください。代理人による受付および出走は認めません。受付をしないまま出走することはできません。\n\n５．荒天時の対応\n雨天でも大会は実施します。ただし、気象警報の発表や災害などにより、大会を中止することがあります。中止の場合でも参加費は返金しませんが、参加賞を後日郵送します。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-009-q1',
        stem: '市内の高校に在学する17歳のコウさんは、ハーフマラソンに申し込みたい。参加要項に従う場合、コウさんが支払う参加費はいくらか。',
        options: ['3,000円', '5,000円', '2,000円', '6,000円'],
        answerIndex: 0,
        explanation:
          'ハーフ的參加資格是大會當日16歲以上，17歲的コウ同學可以報名。原價6,000日圓；他同時符合市內在學減1,000日圓與高校生以下半額兩種折扣，但要項明定兩種折扣不得併用、只適用折扣額較大者，所以付半額3,000日圓。選5,000是套用了折扣額較小的市內折扣；選2,000是把兩種折扣疊加；選6,000是漏看折扣規定。',
        explanationEn:
          'The half marathon requires runners to be at least 16 on race day, so 17-year-old Kou may enter. The base fee is 6,000 yen; he qualifies for both the 1,000-yen discount for those living, working, or studying in the city and the half-price rate for high school students and younger, but the rules state the two discounts cannot be combined and only the larger one applies — 「割引額の大きい方のみを適用します」 — so he pays the half price of 3,000 yen. Choosing 5,000 applies the smaller in-city discount; 2,000 stacks both discounts; 6,000 overlooks the discount rules entirely.',
      },
      {
        id: 'n1-reading-joho-009-q2',
        stem: 'この参加要項の内容と合っているものはどれか。',
        options: [
          '大会が中止になった場合、参加費は返金されないが、参加賞は後で送られてくる。',
          '雨が降った場合、大会は中止になる。',
          'フルマラソンの申し込みは、先着順で受け付けられる。',
          '本人が受付に行けない場合は、家族が代わりに受付をすることができる。',
        ],
        answerIndex: 0,
        explanation:
          '第5項明定：大會中止時參加費不退還，但參加賞會後日郵寄，第一個選項與此一致。其餘皆與要項相反：雨天照常舉行，只有氣象警報或災害等才可能中止；フルマラソン在申込超過定員8,000人時採抽選，先着順的是ハーフ、10km與ファンラン；代理受付與代理出走都明文不被承認。',
        explanationEn:
          'Section 5 states that even if the event is cancelled, the entry fee is not refunded but the participation prize is mailed afterward, matching the first option. The event is held even in rain — 「雨天でも大会は実施します」 — and may be cancelled only for weather warnings or disasters; the full marathon goes to a lottery when applications exceed the 8,000-runner capacity, while first-come-first-served applies to the half, 10km, and fun run; and registration or running by a proxy is explicitly not allowed.',
      },
    ],
  },
  {
    id: 'n1-reading-joho-010',
    kind: 'passage',
    passageTitle: 'シェアサイクル「みんなのちゃり」利用案内',
    passage:
      'シェアサイクル「みんなのちゃり」利用案内\n\n１．利用登録\nご利用には、専用アプリからの会員登録が必要です。登録できるのは16歳以上の方で、16歳・17歳の方は保護者の同意書の提出が必要です。支払いはクレジットカードまたは指定の電子マネーに限り、現金はご利用いただけません。\n\n２．料金プラン\n・都度プラン（基本料金なし）：最初の30分165円、以降15分ごとに110円\n・月額プラン（月2,200円）：1回30分以内の利用が何度でも無料。30分を超えた分は、15分ごとに110円かかります。\n・1日パス（1,650円）：購入した当日に限り有効。1回60分以内の利用が何度でも無料。60分を超えた分は、15分ごとに110円かかります。\n\n３．電動アシスト車\n一部のポートでは電動アシスト車を貸し出しています。プランの種類を問わず、1回の利用につき110円の追加料金がかかります。\n\n４．返却\n自転車は、借りたポート以外を含め、市内のどのポートにも返却できます。ポートに空きがない場合は、アプリで近くの別のポートを確認し、そちらへ返却してください。ポート以外の場所に放置した場合は、回収手数料として3,300円を申し受けます。\n返却の際は、鍵をかけたうえで、必ずアプリの返却ボタンを押してください。返却の操作が完了するまで、利用料金は発生し続けますのでご注意ください。\n\n５．故障・事故\n故障している自転車を見つけた場合は、アプリからご連絡ください。利用中に故障が起きた場合は、報告を受けた時点で利用を終了したものとして扱います。事故を起こした場合は、必ず警察と当社のサポートセンターに連絡してください。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-joho-010-q1',
        stem: '月額プランの会員のリンさんは、電動アシスト車を1回50分利用した。この利用について、リンさんが月額料金のほかに支払う金額はいくらか。',
        options: ['330円', '220円', '110円', '550円'],
        answerIndex: 0,
        explanation:
          '月額プラン每次利用30分以內免費，超過的部分每15分110日圓；騎50分超過了20分，跨兩個計費單位共220日圓。另外電動アシスト車不分方案、每次利用加收110日圓，合計330日圓。選220是漏算電動車的追加料金；選110是誤以為50分全在免費範圍內、只付電動車費；選550是沒套用月額プラン的免費30分、從頭計費再加電動車費。',
        explanationEn:
          'On the monthly plan, each ride is free for the first 30 minutes and the excess is charged at 110 yen per 15 minutes; a 50-minute ride runs 20 minutes over, spanning two billing units for 220 yen. Electric-assist bikes also cost an extra 110 yen per ride regardless of plan — 「プランの種類を問わず、1回の利用につき110円の追加料金」 — so the total is 330 yen. Choosing 220 forgets the electric-assist surcharge; 110 wrongly assumes the whole 50 minutes is free and pays only the surcharge; 550 ignores the free 30 minutes, bills from the start, and adds the surcharge.',
      },
      {
        id: 'n1-reading-joho-010-q2',
        stem: 'この利用案内の内容と合っているものはどれか。',
        options: [
          '17歳の人が会員登録をするには、保護者の同意書を提出する必要がある。',
          '利用料金は、現金で支払うこともできる。',
          '自転車は、借りたポートと同じポートに返却しなければならない。',
          '鍵をかければ、アプリを操作しなくても返却は完了する。',
        ],
        answerIndex: 0,
        explanation:
          '第1項明定16歲、17歲的人登錄時必須提出保護者的同意書，第一個選項正確。其餘皆與案內相反：支付方式限信用卡或指定的電子錢包，明文不能用現金；第4項明示可以歸還到市內任何一個ポート，不限借車的那一個；歸還時必須按下アプリ的返却ボタン，操作完成之前利用料金會持續產生。',
        explanationEn:
          'Section 1 states that riders aged 16 or 17 must submit a parental consent form — 「16歳・17歳の方は保護者の同意書の提出が必要です」 — so the first option is correct. The rest contradict the guide: payment is limited to credit cards or designated e-money, with cash explicitly not accepted; section 4 says bikes may be returned to any port in the city, not only the one they were borrowed from; and returning is not complete until the return button in the app is pressed, with charges continuing until then.',
      },
    ],
  },
]

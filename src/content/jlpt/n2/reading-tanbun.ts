import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n2-reading-tanbun-001',
    kind: 'passage',
    passage:
      '「効率」という言葉が好まれる時代である。無駄を省き、短時間で成果を出すことが何よりも評価される。しかし私は、仕事における無駄が必ずしも悪だとは思わない。一見遠回りに見える雑談から新しい企画が生まれたり、失敗した実験が思わぬ発見につながったりすることは珍しくないからだ。もちろん、単なる怠慢を無駄と呼んで正当化するつもりはない。ただ、効率だけを追い求めるあまり、偶然が生む価値まで切り捨ててしまうとすれば、それこそもったいない話ではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-001-q1',
        stem: '筆者の考えに合うのはどれか。',
        options: [
          '効率ばかりを求めて、偶然が生む価値を失うのは惜しい',
          '短時間で成果を出すことが何よりも大切だ',
          '雑談や失敗した実験は、単なる怠慢だから省くべきだ',
          '仕事の無駄は、すべて新しい発見につながる',
        ],
        answerIndex: 0,
        explanation:
          '筆者在結尾說「効率だけを追い求めるあまり、偶然が生む価値まで切り捨ててしまうとすれば、それこそもったいない」，主張別為了效率丟掉偶然的價值。「短時間で成果を出すことが大切」是筆者要反思的時代風氣，非其主張；「単なる怠慢」筆者明言不打算正當化，但也沒把雜談、失敗歸為怠慢；「すべて発見につながる」過度概括，原文只說「珍しくない」。',
        explanationEn:
          'The writer concludes that if the pursuit of efficiency alone makes us discard the value born of chance, 「それこそもったいない」 ("that would be the real waste"), which matches the correct option. "Producing results quickly matters most" is the prevailing attitude the writer questions, not his own view; the writer explicitly refuses to justify 「単なる怠慢」 but never labels chatting or failed experiments as laziness; "all waste leads to new discoveries" overgeneralizes — the text only says such cases are 「珍しくない」 ("not rare").',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-002',
    kind: 'passage',
    passageTitle: '配送料金改定のお知らせ',
    passage:
      '株式会社みどり食品 購買部 山本様\nいつもお世話になっております。東西物流の小林です。さて、九月一日より当社の配送料金を改定させていただくことになりました。燃料費の高騰が続き、従来の料金を維持することが困難になったためでございます。誠に恐縮ですが、何とぞご理解いただきますようお願い申し上げます。なお、八月三十一日までにご契約いただいた分については、現行の料金を適用いたします。詳細は添付の新料金表をご覧ください。\n東西物流 小林',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-002-q1',
        stem: 'このメールで小林さんが最も伝えたいことは何か。',
        options: [
          '九月から配送料金が変わること',
          '八月末で配送の契約が終了すること',
          '燃料費の高騰を抑える方法を検討していること',
          '新しい料金表を送ってほしいこと',
        ],
        answerIndex: 0,
        explanation:
          '主旨在「九月一日より当社の配送料金を改定させていただくことになりました」，即通知九月起調整運費。「八月末で契約が終了」錯，八月三十一日前簽約的部分是「適用現行料金」，不是契約結束；「高騰を抑える方法」錯，燃料費上漲是漲價的理由，信中沒說要抑制它；「料金表を送ってほしい」相反，新料金表是小林附在信裡給對方看的。',
        explanationEn:
          'The main point is 「九月一日より当社の配送料金を改定させていただくことになりました」 — a notice that shipping rates change from September 1. "The contract ends at the end of August" is wrong: orders contracted by August 31 simply keep the current rates; "considering ways to curb fuel costs" is wrong because rising fuel costs are given as the reason for the increase, not something to be curbed; "please send the new rate table" reverses the situation — Kobayashi attached the table himself for the client to read.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-003',
    kind: 'passage',
    passage:
      '近年、紙の辞書の売り上げが減り続けている。電子辞書やスマートフォンのアプリで手軽に調べられるようになったためだ。ところが、一部の出版社は紙の辞書の改訂をやめようとしない。改訂には長い年月と多額の費用がかかるにもかかわらず、である。その理由の一つは、辞書の内容そのものが電子版の土台になっているからだ。紙をやめて改訂の作業まで止めてしまえば、電子版の質もいずれ保てなくなる。紙の辞書は、売れなくても簡単には捨てられない存在なのである。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-003-q1',
        stem: '出版社が紙の辞書の改訂を続けるのは、なぜか。',
        options: [
          '改訂をやめると、電子版の質も保てなくなるから',
          '紙の辞書の売り上げが増え続けているから',
          '改訂に費用がほとんどかからなくなったから',
          '紙の辞書のほうが電子辞書より手軽に調べられるから',
        ],
        answerIndex: 0,
        explanation:
          '理由在「辞書の内容そのものが電子版の土台になっている」「改訂の作業まで止めてしまえば、電子版の質もいずれ保てなくなる」。「売り上げが増え続けている」與開頭「減り続けている」相反；「費用がかからなくなった」錯，原文說改訂「多額の費用がかかるにもかかわらず」仍持續；「手軽に調べられる」是電子辭典的優點，套到紙本辭典上是文中字眼的誤用。',
        explanationEn:
          'The reason is stated directly: 「辞書の内容そのものが電子版の土台になっている」, and if revision work stopped, 「電子版の質もいずれ保てなくなる」. "Sales keep increasing" contradicts the opening 「減り続けている」; "revision hardly costs anything now" contradicts the statement that they continue 「多額の費用がかかるにもかかわらず」; "paper dictionaries are handier to consult" misapplies to paper what the passage says about electronic dictionaries and smartphone apps.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-004',
    kind: 'passage',
    passage:
      '「若者の読書離れ」が問題だとよく言われる。だが、彼らは本当に文字を読まなくなったのだろうか。電車の中を見れば、ほとんどの人がスマートフォンで何かを読んでいる。ニュース、友人の投稿、長い解説記事。読む量だけなら、むしろ昔より増えているのかもしれない。変わったのは量ではなく、読み方だろう。短い文章を次々と流し読みする一方で、一冊の本と長い時間向き合う機会は確かに減った。問われるべきは「読むか読まないか」ではなく、「どう読むか」なのではないか。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-004-q1',
        stem: '若者の読書について、筆者はどのように考えているか。',
        options: [
          '読む量よりも、読み方が変わったことに注目すべきだ',
          '若者は昔に比べて文字をほとんど読まなくなった',
          '一冊の本と長い時間向き合う機会は増えている',
          'スマートフォンで文章を読むのはやめたほうがいい',
        ],
        answerIndex: 0,
        explanation:
          '筆者主張「変わったのは量ではなく、読み方だろう」「問われるべきは…『どう読むか』」，重點在閱讀方式的變化。「文字をほとんど読まなくなった」與筆者「読む量なら昔より増えているかもしれない」的觀察相反；「向き合う機会は増えている」錯，原文說「確かに減った」；「やめたほうがいい」文中沒有，筆者並未否定用手機閱讀本身。',
        explanationEn:
          'The writer argues 「変わったのは量ではなく、読み方だろう」 and that the real question is 「どう読むか」 — the focus should be on how reading has changed, not how much. "Young people hardly read text anymore" contradicts the observation that the amount read may even have increased; "time spent facing a single book has increased" is wrong because the text says it has 「確かに減った」; "they should stop reading on smartphones" appears nowhere — the writer never condemns phone reading itself.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-005',
    kind: 'passage',
    passage:
      '働く人の睡眠不足が問題になっている。ある調査によると、日本の労働者の平均睡眠時間は世界的に見ても短く、四割近くの人が「日中に強い眠気を感じる」と答えたという。睡眠不足は集中力を低下させ、思わぬ事故やミスを招きかねない。こうした状況を受けて、昼休みに短い仮眠を認める企業が現れ始めた。仮眠というと怠けている印象を持つ人もいまだに多いが、十五分程度の仮眠が午後の作業効率を高めることは、研究でも確かめられている。導入した企業からは、社員のミスが減ったという報告もある。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-005-q1',
        stem: '昼休みの仮眠を認める企業が現れたのは、なぜか。',
        options: [
          '睡眠不足による事故やミスを防ぎたいから',
          '社員が昼休みに怠けているとわかったから',
          '日本の労働者の睡眠時間が世界的に見て長いから',
          '日中に眠気を感じる人が減ってきたから',
        ],
        answerIndex: 0,
        explanation:
          '文章先指出睡眠不足「思わぬ事故やミスを招きかねない」，接著說「こうした状況を受けて」企業開始允許午睡，因果關係明確。「怠けているとわかった」錯，「怠けている印象」是部分人對午睡的偏見，不是企業的動機；「睡眠時間が長い」與「世界的に見ても短く」相反；「眠気を感じる人が減ってきた」錯，調查說近四成的人感到強烈睏意，是問題存在的證據。',
        explanationEn:
          'The passage says sleep deprivation 「思わぬ事故やミスを招きかねない」, and then, 「こうした状況を受けて」, companies began allowing naps — a clear causal link. "They found employees slacking off" is wrong: the impression of laziness is a lingering prejudice about naps, not the companies\' motive; "Japanese workers sleep long hours" contradicts 「世界的に見ても短く」; "fewer people feel sleepy" is wrong — nearly forty percent reporting strong daytime sleepiness is evidence that the problem exists.',
      },
      {
        id: 'n2-reading-tanbun-005-q2',
        stem: 'この文章の内容と合っているのはどれか。',
        options: [
          '短い仮眠の効果は、研究でも確認されている',
          '仮眠を認める企業は、まだ一つもない',
          '四割近くの労働者が、昼休みに仮眠を取っている',
          '仮眠に対する悪い印象は、すでになくなった',
        ],
        answerIndex: 0,
        explanation:
          '「十五分程度の仮眠が午後の作業効率を高めることは、研究でも確かめられている」與正解一致。「まだ一つもない」錯，原文說允許午睡的企業「現れ始めた」；「四割近く」是回答「日中に強い眠気を感じる」的人的比例，不是午睡的人數，屬文中數字的張冠李戴；「悪い印象はなくなった」錯，原文說抱持怠惰印象的人「いまだに多い」。',
        explanationEn:
          '「十五分程度の仮眠が午後の作業効率を高めることは、研究でも確かめられている」 matches the correct option. "Not a single company allows naps yet" contradicts 「現れ始めた」; "nearly forty percent take naps at lunchtime" misattributes the figure, which is the share who feel strong daytime sleepiness, not the share who nap; "the bad image of napping has already disappeared" is wrong because the text says people holding that impression are 「いまだに多い」.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-006',
    kind: 'passage',
    passageTitle: '空調設備工事のお知らせ',
    passage:
      '社員各位\n総務部からのお知らせです。本社ビルの空調設備の入れ替え工事を、十一月十五日から十七日までの三日間にわたって行います。工事期間中、五階と六階のフロアは使用できません。該当フロアの部署は、三階の共用スペースで勤務するか、在宅勤務に切り替えてください。在宅勤務を希望する方は、十一月十日までに所属長の承認を得たうえで、総務部に届け出てください。なお、騒音が予想されるため、期間中の来客との打ち合わせは、できるだけオンラインで行うようお願いします。\n総務部',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-006-q1',
        stem: '工事の間、五階で働いている社員はどうしなければならないか。',
        options: [
          '三階の共用スペースで働くか、在宅勤務にする',
          '六階のフロアに移動して勤務する',
          '十一月十日まで在宅勤務をする',
          '来客との打ち合わせをすべて中止する',
        ],
        answerIndex: 0,
        explanation:
          '依據「該当フロアの部署は、三階の共用スペースで勤務するか、在宅勤務に切り替えてください」，五樓的員工要二選一。「六階に移動」錯，六樓同樣「使用できません」；「十一月十日まで在宅勤務」錯，十日是申請在宅勤務的期限，不是在宅勤務的期間；「すべて中止」錯，通知只要求會議「できるだけオンラインで」進行，並非全部取消。',
        explanationEn:
          'According to 「該当フロアの部署は、三階の共用スペースで勤務するか、在宅勤務に切り替えてください」, fifth-floor staff must choose one of those two options. Moving to the sixth floor is wrong since that floor is equally 「使用できません」; "work from home until November 10" confuses the application deadline with the work-from-home period; "cancel all client meetings" overstates the notice, which only asks that meetings be held online 「できるだけ」 ("as much as possible").',
      },
      {
        id: 'n2-reading-tanbun-006-q2',
        stem: '在宅勤務をしたい社員は、まず何をする必要があるか。',
        options: [
          '所属長の承認を得る',
          '総務部に工事の予定を届け出る',
          '三階の共用スペースを予約する',
          '十一月十五日までに総務部へ連絡する',
        ],
        answerIndex: 0,
        explanation:
          '「所属長の承認を得たうえで、総務部に届け出てください」表示順序是先取得主管核准，再向總務部申報，所以「まず」要做的是取得所屬主管的承認。「工事の予定を届け出る」錯，要申報的是自己在宅勤務一事，工程是總務部通知大家的；「共用スペースを予約する」文中沒有預約的要求；「十一月十五日までに」錯，期限是十一月十日，十五日是工程開始日。',
        explanationEn:
          '「所属長の承認を得たうえで、総務部に届け出てください」 sets the order: first obtain the supervisor\'s approval, then notify General Affairs — so the first step is getting the approval. "Report the construction schedule" is wrong: what must be reported is one\'s own remote work, and the construction itself was announced by General Affairs; nothing in the notice mentions reserving the shared space; "by November 15" is wrong because the deadline is November 10 — the 15th is when the construction starts.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-007',
    kind: 'passage',
    passage:
      'ポイントが二倍になる日を狙って買い物をする人は多い。私もその一人だったが、ある月の家計簿を見て考え込んでしまった。ポイントのために出かけた日に限って、予定になかった物まで買い込んでいたのである。得をしたつもりが、支出はむしろ増えていた。ポイントとは、店が客を呼ぶための仕組みであって、客のための割引とは限らない。「お得」という言葉を目にしたときこそ、それは本当に必要な買い物なのかと、一度立ち止まって考える必要があるだろう。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-007-q1',
        stem: '筆者の考えに合うのはどれか。',
        options: [
          '「お得」に見えるときこそ、必要な買い物かどうか立ち止まって考えるべきだ',
          'ポイントが二倍になる日に買い物をすれば、支出を減らすことができる',
          'ポイントは客のための割引だから、ためないともったいない',
          '家計簿をつければ、予定になかった物を買わずにすむ',
        ],
        answerIndex: 0,
        explanation:
          '結論在最後一句：「『お得』という言葉を目にしたときこそ…一度立ち止まって考える必要がある」，看到「划算」時更該停下來想想是否真的需要。「支出を減らすことができる」與筆者的親身經驗「支出はむしろ増えていた」相反；「客のための割引」被「客のための割引とは限らない」直接否定；「家計簿をつければ買わずにすむ」錯，記帳只是讓筆者發現問題的契機，文中沒說能防止亂買。',
        explanationEn:
          'The conclusion is the final sentence: precisely when we see the word 「お得」 ("a good deal"), we should 「一度立ち止まって考える」 whether the purchase is truly necessary. "Shopping on double-point days reduces spending" contradicts the writer\'s own experience that 「支出はむしろ増えていた」; "points are a discount for customers" is directly denied by 「客のための割引とは限らない」; "keeping a household ledger stops impulse buys" is wrong — the ledger merely revealed the problem, and the text never claims it prevents unplanned purchases.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-008',
    kind: 'passage',
    passage:
      '有給休暇は労働者の権利であるにもかかわらず、日本ではその取得率が低いままだと言われる。理由としてよく挙げられるのは、「周りに迷惑がかかる」という遠慮である。自分が休めば、その分の仕事を誰かが引き受けざるを得ない。そう思うと、申請をためらってしまうのだ。しかし、見方を変えれば、これは個人の気持ちの問題ではなく、職場の仕組みの問題である。一人が休んでも仕事が回るように、日ごろから情報を共有し、仕事を分担しておく。休みやすい職場とは、そうした準備のある職場のことなのだ。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-008-q1',
        stem: '有給休暇の取得をためらう理由として、本文で挙げられているのはどれか。',
        options: [
          '自分の仕事を周りの人が引き受けることになり、迷惑がかかると思うから',
          '有給休暇が労働者の権利として認められていないから',
          '休みの申請の手続きが複雑で、時間がかかるから',
          '休むと、その月の給料が減ってしまうから',
        ],
        answerIndex: 0,
        explanation:
          '文中理由是「『周りに迷惑がかかる』という遠慮」：自己一休，工作就得由別人「引き受けざるを得ない」，因此不敢申請。「権利として認められていない」與開頭「労働者の権利であるにもかかわらず」矛盾，有薪假本來就是權利；「手続きが複雑」文中完全沒提；「給料が減る」也沒有根據，有給休暇本就是帶薪休假，此選項只是利用「休む」一詞的干擾。',
        explanationEn:
          'The stated reason is the hesitation that 「周りに迷惑がかかる」: if you take a day off, someone else 「引き受けざるを得ない」 (has no choice but to take over) your work, so people hesitate to apply. "Not recognized as a right" contradicts the opening 「労働者の権利であるにもかかわらず」; complicated procedures are never mentioned; a pay cut has no basis either — paid leave is paid by definition, and that option merely reuses the word 「休む」 out of context.',
      },
      {
        id: 'n2-reading-tanbun-008-q2',
        stem: '筆者の考えに合うのはどれか。',
        options: [
          '休暇を取りにくいのは、個人の気持ちではなく職場の仕組みの問題だ',
          '周りに遠慮する気持ちさえなくせば、誰でもすぐに休めるようになる',
          '一人が休むと仕事が回らないのは、当然のことで変えようがない',
          '日本の有給休暇の取得率は、近年大きく上がってきている',
        ],
        answerIndex: 0,
        explanation:
          '筆者主張「これは個人の気持ちの問題ではなく、職場の仕組みの問題である」，解方是平日就共享資訊、分擔工作。「遠慮する気持ちさえなくせば」把問題又推回個人心態，正是筆者否定的方向；「変えようがない」錯，筆者認為只要平時準備好，一個人休假工作照樣能運轉；「取得率は上がってきている」與開頭「低いままだ」不符。',
        explanationEn:
          'The writer argues 「これは個人の気持ちの問題ではなく、職場の仕組みの問題である」 — the fix is routinely sharing information and dividing up work. "If people just stopped holding back, anyone could take leave" pushes the problem back onto individual feelings, exactly what the writer rejects; "it is inevitable that work stalls when one person is away" is wrong because the writer holds that with everyday preparation the work still 「回る」; "the take-up rate has risen sharply" contradicts the opening 「低いままだ」.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-009',
    kind: 'passage',
    passage:
      '二十四時間営業のコンビニは、眠らない都市の象徴だった。深夜でも明かりがついていて、いつでも同じ物が買える。その安心感に、私たちはすっかり慣れてしまった。ところが近年、人手不足を背景に、深夜の営業をやめる店が少しずつ現れている。「不便になる」と嘆く声もあるが、考えてみれば、深夜に買い物が必要になる場面は年に数えるほどしかない。むしろ、いつでも開いているという安心のために、誰かが夜通し働き続けてきたのである。当たり前だと思っていた便利さの裏側に目を向けるとき、多少の不便は受け入れざるを得ないのではないか。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-009-q1',
        stem: '深夜の営業をやめる店が現れているのは、なぜか。',
        options: [
          '働く人が足りなくなってきたから',
          '深夜に買い物をする客が年々増えているから',
          '「不便になる」という声が多く寄せられたから',
          '深夜は明かりをつけてはいけなくなったから',
        ],
        answerIndex: 0,
        explanation:
          '原文明言「人手不足を背景に、深夜の営業をやめる店が少しずつ現れている」，原因是人手不足。「客が年々増えている」文中沒有此說，筆者反而說深夜需要買東西的場面一年沒幾次；「『不便になる』という声」是對停止深夜營業的抱怨，不是停止的原因，方向相反；「明かりをつけてはいけない」錯，「明かり」只是描寫深夜也亮著燈的景象，並無禁止照明的規定。',
        explanationEn:
          'The passage states it plainly: 「人手不足を背景に、深夜の営業をやめる店が少しずつ現れている」 — the cause is the labor shortage. "Late-night shoppers are increasing" appears nowhere; the writer instead says occasions requiring a midnight purchase are 「年に数えるほど」; the complaints of 「不便になる」 are a reaction against ending late-night hours, not the reason for it; "lights are no longer allowed at night" misuses 「明かり」, which merely describes the stores staying lit — no lighting ban is mentioned.',
      },
      {
        id: 'n2-reading-tanbun-009-q2',
        stem: '筆者の考えに合うのはどれか。',
        options: [
          '便利さを支えてきた人に目を向け、多少の不便は受け入れるべきだ',
          '深夜でも買い物ができる安心感は、何よりも守るべきだ',
          '深夜に買い物が必要になる場面は、誰にでも毎日のようにある',
          '深夜の営業をやめれば、コンビニで働きたい人が増える',
        ],
        answerIndex: 0,
        explanation:
          '結尾「当たり前だと思っていた便利さの裏側に目を向けるとき、多少の不便は受け入れざるを得ないのではないか」即筆者主張：想到有人徹夜工作支撐這份方便，就該接受一點不便。「安心感は何よりも守るべきだ」方向相反，那份安心正是靠「誰かが夜通し働き続けてきた」換來的；「毎日のようにある」與「年に数えるほどしかない」矛盾；「働きたい人が増える」文中並未提及。',
        explanationEn:
          'The closing line — when we look at the hidden side of the convenience we took for granted, 「多少の不便は受け入れざるを得ないのではないか」 — is the writer\'s claim: accept some inconvenience, mindful that 「誰かが夜通し働き続けてきた」 to sustain it. "The reassurance of midnight shopping must be protected above all" points the opposite way, since that reassurance is exactly what someone\'s overnight labor paid for; "such occasions arise almost daily" contradicts 「年に数えるほどしかない」; "more people will want to work at convenience stores" is never suggested.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-010',
    kind: 'passage',
    passageTitle: '座席のフリーアドレス化について',
    passage:
      '社員各位\n総務部からのお知らせです。来月一日より、三階の営業部フロアで、固定席を廃止し、毎朝好きな席を選んで働く「フリーアドレス制」を試験的に導入します。部署を越えた交流を増やすことが目的です。これに伴い、個人の荷物はすべて各自のロッカーに保管し、退社時には机の上に何も残さないようにしてください。書類の置き忘れが続いた場合は、固定席に戻すことも検討します。他のフロアへの導入は、三階での結果を確認したうえで判断します。ご協力をお願いいたします。\n総務部',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-010-q1',
        stem: 'フリーアドレス制を導入する目的は何か。',
        options: [
          '部署を越えた社員の交流を増やすこと',
          '書類の置き忘れをなくすこと',
          '個人のロッカーの数を減らすこと',
          '三階のフロアを他の部署に貸すこと',
        ],
        answerIndex: 0,
        explanation:
          '通知明寫「部署を越えた交流を増やすことが目的です」。「置き忘れをなくす」錯，文件遺留是導入後要注意的規則（違反可能恢復固定席），不是導入目的；「ロッカーの数を減らす」錯，置物櫃是配套措施——個人物品改放各自的置物櫃，沒說要減少；「他の部署に貸す」文中完全沒有，通知只說其他樓層是否導入要看三樓的結果再判斷。',
        explanationEn:
          'The notice states the purpose outright: 「部署を越えた交流を増やすことが目的です」. "Eliminating misplaced documents" is wrong — left-behind papers are a rule to observe after introduction (repeat offenses may bring back fixed seats), not the aim; "reducing the number of lockers" is wrong since lockers are a supporting measure for storing personal items, with no reduction mentioned; "lending the third floor to another department" appears nowhere — the notice only says expansion to other floors depends on the third-floor results.',
      },
      {
        id: 'n2-reading-tanbun-010-q2',
        stem: 'このお知らせの内容と合っているのはどれか。',
        options: [
          '帰るときは、机の上に何も残してはいけない',
          '来月から、すべてのフロアでフリーアドレス制が始まる',
          '個人の荷物は、毎朝机の中に入れなければならない',
          '書類を置き忘れた社員は、すぐに固定席に戻される',
        ],
        answerIndex: 0,
        explanation:
          '「退社時には机の上に何も残さないようにしてください」與正解一致。「すべてのフロアで」錯，先在三樓試辦，其他樓層要看結果再判斷；「机の中に入れる」錯，個人物品要收進「各自のロッカー」，不是桌子裡；「すぐに固定席に戻される」錯，原文是「置き忘れが続いた場合は…検討します」，是持續發生才會考慮，不是立刻恢復。',
        explanationEn:
          '「退社時には机の上に何も残さないようにしてください」 matches the correct option. "All floors start next month" is wrong — it is a trial on the third floor only, with other floors decided after reviewing the results; "put belongings inside the desk" is wrong because personal items go into 「各自のロッカー」, not the desk; "offenders are immediately returned to fixed seats" overstates 「置き忘れが続いた場合は…検討します」, which says a return will merely be considered if it keeps happening.',
      },
    ],
  },
  {
    id: 'n2-reading-tanbun-011',
    kind: 'passage',
    passage:
      '贈り物を選ぶとき、相手に何がほしいかを直接聞くべきかどうか、私はいつも迷う。聞けば確実に喜ばれる物を渡せるが、開けるまでの楽しみは消えてしまう。聞かずに選べば驚きは生まれるものの、好みを外すおそれがある。以前は、聞くのは手抜きのようで気が引けた。だが最近は、こう考えるようになった。大事なのは品物そのものではなく、相手のことをあれこれ考えた時間なのだと。聞いたうえで選んでも、聞かずに選んでも、その時間さえあれば、贈り物は十分に気持ちを伝えてくれるのではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-tanbun-011-q1',
        stem: '贈り物について、筆者は今、どのように考えているか。',
        options: [
          '相手のことを考えた時間があれば、聞いても聞かなくても気持ちは伝わる',
          '直接聞くのは手抜きだから、聞かずに選んだほうがいい',
          '開けるまでの楽しみこそ大事だから、驚きのある物を選ぶべきだ',
          '好みを外さないように、必ず相手に聞いてから選ぶべきだ',
        ],
        answerIndex: 0,
        explanation:
          '筆者現在的想法在「だが最近は」之後：「大事なのは品物そのものではなく、相手のことをあれこれ考えた時間」，只要有這段時間，「聞いたうえで選んでも、聞かずに選んでも」心意都能傳達。「手抜きだから聞かないほうがいい」是「以前は」的顧慮，已被推翻；「驚きのある物を選ぶべきだ」「必ず聞いてから選ぶべきだ」各執一端，筆者的結論恰是兩種做法都可以，並未指定其一。',
        explanationEn:
          'The writer\'s current view follows 「だが最近は」: what matters is not the item itself but 「相手のことをあれこれ考えた時間」, and given that time, feelings come through 「聞いたうえで選んでも、聞かずに選んでも」. "Asking is lazy, so choose without asking" is the writer\'s former hesitation, since overturned; "pick something surprising" and "always ask first" each cling to one side, while the writer\'s conclusion is precisely that either approach works — neither is prescribed.',
      },
    ],
  },
]

import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n2-reading-togo-001',
    passage:
      'Ａ\n在宅勤務が一般的になって数年がたつ。私は、この働き方をこれからも続けるべきだと考えている。何より、通勤に費やしていた往復二時間が自分の時間になったことが大きい。その分、早朝に集中して仕事を進めたり、家族と夕食をとったりできるようになった。通勤の疲れがない分、体調も安定し、静かな環境で資料を作る作業も以前よりはるかにはかどる。確かに、画面越しのやり取りでは相手の表情が読み取りにくく、意思疎通に時間がかかる場面もある。しかし、それは連絡の仕方を工夫すれば十分に補えるものであり、在宅勤務そのものを否定する理由にはならないだろう。\n\nＢ\n在宅勤務には通勤の負担がないという利点があることは認めざるを得ない。それでも私は、週に数日は出社して顔を合わせるべきだと考える。画面越しの会議では用件しか話さないため、対面のときのような何気ない雑談が生まれにくい。だが、新しい発想はむしろそうした雑談から生まれることが多いのだ。また、入社したばかりの社員は、先輩の仕事ぶりをそばで見ることで多くを学ぶ。効率だけを重視して在宅勤務一色にしてしまえば、会社としての力が長い目で見て弱まりかねない。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-togo-001-q1',
        stem: 'ＡとＢのどちらの文章にも述べられていることは何か。',
        options: [
          '画面越しのやり取りには、対面に比べて不便な点があるということ',
          '在宅勤務を続ければ、会社としての力が必ず弱まるということ',
          '通勤時間がなくなったことで、家族と過ごす時間が増えたということ',
          '新しい発想は、社員同士の何気ない雑談から生まれることが多いということ',
        ],
        answerIndex: 0,
        explanation:
          'Ａ說「画面越しのやり取りでは相手の表情が読み取りにくい」，Ｂ說「画面越しの会議では…雑談が生まれにくい」，兩篇都承認隔著螢幕溝通有不便之處。家人共進晚餐只出現在Ａ；雜談產生新發想只出現在Ｂ；「会社の力が弱まりかねない」是Ｂ的擔憂且語氣是「可能」，不是「必ず」，皆非兩篇共通內容。',
        explanationEn:
          'A says 「画面越しのやり取りでは相手の表情が読み取りにくく」 and B says that in on-screen meetings casual small talk rarely arises — both texts acknowledge that communicating through a screen has its inconveniences. Dinner with family appears only in A; new ideas born from small talk appears only in B; the company weakening is B\'s worry alone, and it is phrased as a possibility with 「かねない」, not as something that "necessarily" happens — so none of those are common to both texts.',
      },
      {
        id: 'n2-reading-togo-001-q2',
        stem: '在宅勤務について、ＡとＢはどのように考えているか。',
        options: [
          'Ａは工夫すれば課題を補えるので続けるべきだと考え、Ｂは出社して顔を合わせることも必要だと考えている。',
          'Ａは意思疎通の問題は解決できないと考え、Ｂは在宅勤務を完全にやめるべきだと考えている。',
          'ＡもＢも、仕事の効率を上げるためには在宅勤務だけにするのがよいと考えている。',
          'Ａは家族との時間より仕事を優先すべきだと考え、Ｂは新入社員だけが出社すればよいと考えている。',
        ],
        answerIndex: 0,
        explanation:
          'Ａ的結論是溝通課題「連絡の仕方を工夫すれば十分に補える」，主張繼續在宅勤務；Ｂ雖承認在宅的優點，仍主張「週に数日は出社して顔を合わせるべきだ」。選項2 說反了：Ａ認為問題可以解決，Ｂ也只反對「在宅勤務一色」而非全面廢止；選項4 中Ｂ舉新進員工只是例子之一，並未說只有新人要出社。',
        explanationEn:
          'A concludes that the communication problem 「連絡の仕方を工夫すれば十分に補える」 and argues for continuing to work from home; B, while granting the advantages, insists that people 「週に数日は出社して顔を合わせるべきだ」. Option 2 reverses both positions: A believes the problem can be solved, and B opposes only going fully remote (「在宅勤務一色」), not remote work as such; in option 4, B mentions new employees merely as one example and never says that only they should come to the office.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n2-reading-togo-002',
    passage:
      'Ａ\n私は数年前から、本はほとんど電子書籍で読んでいる。決め手は持ち運びの手軽さだ。何百冊分もの本が薄い端末一つに収まるので、旅行にも通勤にも好きなだけ「本棚」を持っていける。文字の大きさを自由に変えられるのもありがたく、目が疲れた日には大きな文字でゆっくり読める。読みたいと思った瞬間に購入してすぐ読み始められる点も、紙の本にはない魅力だ。もっとも、端末の充電が切れれば読めなくなるし、読み終えた本を人に貸せないのは不便である。それでも、この身軽さを一度知ってしまうと、もう元には戻れない。\n\nＢ\n電子書籍の便利さは理解しているつもりだが、私は今でも紙の本を選んでいる。ページをめくりながら読み進めると、「あの場面は後ろのほうにあった」というように、内容が場所の感覚とともに記憶に残る気がするからだ。残りのページの厚みで物語の終わりが近いと感じられるのも、紙ならではの楽しみだろう。読み終えた本を友人に貸したり、古書店に売ったりできるのもよい。ただ、本が増えるたびに置き場所に頭を悩ませているのも事実で、書棚に入りきらない本が床に積まれている。それでも、手元に本という「物」が残る安心感は手放しがたい。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-togo-002-q1',
        stem: 'ＡとＢに共通して述べられていることは何か。',
        options: [
          '自分の選んだ読み方にも、不便な点があるということ',
          '紙の本で読むと、内容が記憶に残りやすいということ',
          '電子書籍は、読みたいと思ったときにすぐ買って読めるということ',
          '置き場所に困った本は、古書店に売るのがよいということ',
        ],
        answerIndex: 0,
        explanation:
          'Ａ承認電子書籍「充電が切れれば読めなくなる」「人に貸せないのは不便」，Ｂ承認紙本「置き場所に頭を悩ませている」——兩人都坦承自己選的方式有缺點。內容容易留在記憶只出現在Ｂ；想讀馬上能買只出現在Ａ；「賣給古書店」是Ｂ舉的紙本優點之一，並非兩篇共通的主張。',
        explanationEn:
          'A admits e-books have drawbacks — unreadable once 「充電が切れれば」 and impossible to lend to others — while B admits paper books pile up, 「置き場所に頭を悩ませている」: both writers concede that the reading style they chose has inconveniences. Content staying in memory appears only in B; buying and reading a book the moment one wants appears only in A; selling to a used bookstore is one advantage B cites for paper, not a claim shared by both texts.',
      },
      {
        id: 'n2-reading-togo-002-q2',
        stem: '本の読み方について、ＡとＢはどのように考えているか。',
        options: [
          'Ａは身軽に読める電子書籍を選び、Ｂは物として手元に残る紙の本を選んでいる。',
          'Ａは紙の本にはもう魅力がないと考え、Ｂは電子書籍を使うべきではないと考えている。',
          'ＡもＢも、場面によって紙と電子書籍を使い分けるのが最もよいと考えている。',
          'Ａは文字の大きさを変えられる紙の本を好み、Ｂは持ち運びやすい電子書籍を好んでいる。',
        ],
        answerIndex: 0,
        explanation:
          'Ａ看重「持ち運びの手軽さ」等於「身軽さ」而選電子書籍；Ｂ看重「手元に本という『物』が残る安心感」而選紙本。選項4 把兩人立場對調：可變字級是電子書籍的特點、Ａ才是電子派。選項2 語氣過強——Ａ也承認紙本可外借的好處，Ｂ也說「電子書籍の便利さは理解している」，兩人都沒有全盤否定對方。',
        explanationEn:
          'A chooses e-books for their lightness — 「持ち運びの手軽さ」, carrying a whole bookshelf in one thin device; B chooses paper for the reassurance that a physical object, 「本という『物』」, remains at hand. Option 4 swaps their positions: adjustable font size is an e-book feature and A is the e-book reader. Option 2 overstates both views: A still concedes paper\'s merits such as lending, and B says 「電子書籍の便利さは理解している」 — neither dismisses the other side entirely.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n2-reading-togo-003',
    passage:
      'Ａ\n買い物の支払いをほぼキャッシュレスに切り替えて一年になるが、もっと早くそうすればよかったと思っている。第一に、支払いが一瞬で済む。レジの前で小銭を数える必要がなく、後ろに並ぶ人を気にしなくてよい。第二に、いつ何にいくら使ったかが自動的に記録されるので、家計の管理が格段に楽になった。現金のころは月末に使い道の分からない出費が必ずあったが、今はそれがない。目に見えないお金は使いすぎるとよく言われるものの、記録を毎晩確認する習慣をつければ、むしろ現金より無駄遣いは減るのではないだろうか。\n\nＢ\nキャッシュレス決済が便利であることは否定しない。しかし、社会全体が現金を手放してしまってよいかといえば、話は別である。停電や通信障害が起きれば、電子的な支払いは一切できなくなる。災害の多いこの国で、それはあまりに危うい。また、機器の操作に不慣れな高齢者が、買い物の場で取り残されることも心配だ。子どもにとっても、硬貨や紙幣を実際に手にして、それが減っていくのを見ることが、お金の大切さを学ぶ第一歩になる。便利さを追いかけるあまり、現金でも支払えるという当たり前の選択肢まで失ってはならないと思う。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-togo-003-q1',
        stem: 'お金の管理について、Ａはどのように述べているか。',
        options: [
          '支払いの記録が自動的に残るので、現金のころより管理が楽になった。',
          '目に見えないお金は、どうしても現金より使いすぎてしまう。',
          'キャッシュレスにしてからも、使い道の分からない出費が毎月ある。',
          '記録を毎晩確認する習慣をつけても、無駄遣いはなかなか減らない。',
        ],
        answerIndex: 0,
        explanation:
          'Ａ在第二點明說「いつ何にいくら使ったかが自動的に記録されるので、家計の管理が格段に楽になった」。選項2 是Ａ用「〜ものの」讓步後反駁的世間說法，不是Ａ的主張；選項3 說反了——「使い道の分からない出費」是現金時代的事，「今はそれがない」；選項4 與Ａ「むしろ現金より無駄遣いは減る」的結論相反。',
        explanationEn:
          'A states in the second point that because 「いつ何にいくら使ったかが自動的に記録される」, 「家計の管理が格段に楽になった」. Option 2 is the common claim that A concedes with 「〜ものの」 and then rebuts, not A\'s own view; option 3 reverses the text — expenses of unknown purpose belonged to the cash days, and 「今はそれがない」; option 4 contradicts A\'s conclusion that with the habit of checking the records every night, waste actually decreases compared with cash.',
      },
      {
        id: 'n2-reading-togo-003-q2',
        stem: 'ＡとＢの考えについて、合っているものはどれか。',
        options: [
          'Ａはキャッシュレスの利点を高く評価し、Ｂは現金で支払える手段も残すべきだと考えている。',
          'Ａは災害時に支払えなくなることを心配し、Ｂはキャッシュレスの便利さを認めていない。',
          'ＡもＢも、高齢者こそ早くキャッシュレスに切り替えるべきだと考えている。',
          'Ａは現金の生活に戻りたいと考え、Ｂは子どもにキャッシュレスを使わせたいと考えている。',
        ],
        answerIndex: 0,
        explanation:
          'Ａ整篇列舉快速結帳、自動記帳等優點，後悔沒有更早改用；Ｂ開頭即說「便利であることは否定しない」，但主張「現金でも支払えるという当たり前の選択肢まで失ってはならない」。選項2 把立場弄反：擔心災害斷電的是Ｂ，且Ｂ承認其便利性；選項3 中Ｂ反而擔心高齡者被拋下；選項4 兩句都與原文相反。',
        explanationEn:
          'A spends the whole passage praising cashless payment — instant checkout, automatic records — and regrets not switching sooner; B opens by conceding its convenience but insists society must not lose 「現金でも支払えるという当たり前の選択肢」. Option 2 swaps the two: the worry about disasters and outages belongs to B, and B does acknowledge the convenience; in option 3, B actually fears the elderly will be left behind, the opposite of urging them to switch; both halves of option 4 contradict the passages.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n2-reading-togo-004',
    passage:
      'Ａ\n私の勤める会社では、昨年から社員の副業が認められるようになった。私はこの制度を歓迎している。収入が増えるという直接の利点はもちろんだが、それ以上に大きいのは、本業では得られない経験が積めることだ。私自身、休日に地域の店のホームページ作りを手伝うようになってから、客の立場で物事を考える習慣がつき、本業の企画の仕事にも良い影響が出ている。働きすぎになるのではという心配の声もあるが、労働時間を自分で管理するのは社会人として当然のことであり、副業を禁止する理由にはならないと思う。\n\nＢ\n社員の副業を認める会社が増えている。視野が広がる、収入の助けになるといった利点があることは、私も認めている。ただ、会社が制度として認める以上、働く人の健康を守る仕組みを先に整えるべきではないだろうか。本業のあとに深夜まで別の仕事をすれば、疲れがたまり、本業に支障が出かねない。しかも、本業と副業を合わせた労働時間は、本人にしか分からないのが実情だ。だからこそ、届け出を義務づけて全体の労働時間を会社が把握できるようにするなど、制度の整備が欠かせない。それができないまま、ただ「認める」だけでは、かえって社員のためにならないと思う。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-togo-004-q1',
        stem: 'ＡとＢのどちらの文章にも述べられていることは何か。',
        options: [
          '副業には、収入の面での利点があるということ',
          '労働時間を自分で管理するのは、社会人として当然だということ',
          '副業をすれば、本業に必ず支障が出るということ',
          '会社は届け出によって、社員全体の労働時間を把握すべきだということ',
        ],
        answerIndex: 0,
        explanation:
          'Ａ說副業「収入が増えるという直接の利点」，Ｂ也承認「収入の助けになるといった利点がある」，收入面的好處是兩篇共通內容。「労働時間を自分で管理するのは当然」只是Ａ的主張，Ｂ反而認為個人時間外人無從掌握；「届け出を義務づけて把握すべき」只出現在Ｂ；Ｂ說的是「支障が出かねない」（有可能），不是「必ず」，且Ａ並未提及。',
        explanationEn:
          'A cites 「収入が増えるという直接の利点」 and B likewise concedes 「収入の助けになるといった利点がある」 — the financial benefit is stated in both texts. That workers should manage their own hours is A\'s claim alone; B argues the opposite, that total hours are known only to the worker. Requiring notification so the company can track hours appears only in B. And B says trouble for the main job 「出かねない」 — merely possible, not "necessarily" — and A never mentions it.',
      },
      {
        id: 'n2-reading-togo-004-q2',
        stem: '社員の副業について、ＡとＢはどのように考えているか。',
        options: [
          'Ａは本業にも良い影響があるとして歓迎し、Ｂは健康を守る仕組みを整えたうえで認めるべきだと考えている。',
          'Ａは収入を増やすためだけの制度だと考え、Ｂは副業を禁止すべきだと考えている。',
          'ＡもＢも、労働時間の管理は会社に任せるべきだと考えている。',
          'Ａは働きすぎによる健康被害を心配し、Ｂは社員の自主性に任せればよいと考えている。',
        ],
        answerIndex: 0,
        explanation:
          'Ａ舉自身經驗說副業讓「本業の企画の仕事にも良い影響が出ている」而歡迎制度；Ｂ承認利點，但主張「働く人の健康を守る仕組みを先に整えるべき」，是有條件的贊成。選項2 錯在Ａ明說收入之外「それ以上に大きいのは経験」，Ｂ也沒有主張禁止；選項4 立場對調——擔心健康的是Ｂ，主張自我管理即可的是Ａ；選項3 與Ａ「自分で管理するのは当然」相反。',
        explanationEn:
          'A welcomes the scheme, citing his own experience that a side job has had 「本業の企画の仕事にも良い影響」; B concedes the benefits but argues the company should first build 「働く人の健康を守る仕組み」 — conditional approval. Option 2 fails because A explicitly values the experience gained even more than the income (「それ以上に大きいのは」), and B never calls for a ban. Option 4 swaps the two: it is B who worries about health, and A who trusts self-management. Option 3 contradicts A\'s view that managing one\'s own hours is a matter of course.',
      },
    ],
  },
]

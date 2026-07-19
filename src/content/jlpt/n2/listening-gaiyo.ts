import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n2-listening-gaiyo-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '講演会で、働き方の専門家が話しています。' },
      { speaker: '男', text: 'テレワークが広がって、通勤時間が減り、自分のペースで働けるようになったという声をよく聞きます。私自身、この流れを否定するつもりはありません。' },
      { speaker: '男', text: 'ただ、テレワークが定着するにつれて、社員同士のちょっとした雑談が失われつつあることには、注意が必要です。' },
      { speaker: '男', text: '実は、新しいアイデアの多くは、会議の場ではなく、廊下や休憩室での何気ない会話から生まれると言われています。' },
      { speaker: '男', text: 'ですから、これからの会社に求められるのは、社員をオフィスに戻すことではなく、離れていても気軽に話せる場をいかに作るかということなんです。' },
    ],
    question: '専門家が最も言いたいことは何ですか。',
    options: [
      'テレワークでも気軽に雑談できる場を作ることが大切だ',
      'テレワークのおかげで通勤時間が減った',
      '新しいアイデアの多くは会議の場から生まれる',
      '社員は全員オフィスに戻って働くべきだ',
    ],
    answerIndex: 0,
    explanation:
      '講者先肯定遠距工作，再用「ただ」點出閒聊「失われつつある」的隱憂，最後以「求められるのは〜気軽に話せる場をいかに作るか」收束，主旨是要打造遠距下也能閒聊的環境。「通勤時間が減った」只是開頭引用的細節；「アイデアは会議から生まれる」與獨白中「会議の場ではなく」相反；「オフィスに戻すべき」也被明確否定。',
    explanationEn:
      'The speaker first affirms telework, then uses 「ただ」 to raise the concern that casual chatting is 「失われつつある」, and concludes with 「求められるのは〜気軽に話せる場をいかに作るか」 — his main point is creating spaces for casual conversation even when working remotely. Shorter commutes are just a detail cited at the start; the idea that new ideas come from meetings contradicts his statement 「会議の場ではなく」; and bringing everyone back to the office is explicitly rejected.',
  },
  {
    id: 'n2-listening-gaiyo-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで、女の人がキャッシュレス決済について話しています。' },
      { speaker: '女', text: '最近は、現金を全く使わずに買い物を済ませる人が増えています。会計が早く済みますし、店側にとっても現金を管理する手間が省けるなど、利点は数え切れません。' },
      { speaker: '女', text: 'しかしその一方で、スマートフォンの操作に慣れていないお年寄りが、レジの前で戸惑う場面も目にするようになりました。' },
      { speaker: '女', text: '中には、現金が使えない店だと知って、買い物そのものをあきらめて帰ってしまう人もいるそうです。' },
      { speaker: '女', text: '便利さを追求すること自体は結構ですが、誰かを置き去りにするようでは意味がありません。技術の進歩に人への配慮が伴ってこそ、本当に豊かな社会だと言えるのではないでしょうか。' },
    ],
    question: '女の人の話の主なテーマは何ですか。',
    options: [
      'キャッシュレス化には取り残される人への配慮が必要だ',
      'キャッシュレス決済は会計が早く済んで便利だ',
      '店はすべて現金の取り扱いをやめるべきだ',
      'お年寄りの間でスマートフォンが広まりつつある',
    ],
    answerIndex: 0,
    explanation:
      '講者先承認無現金支付的優點，再用「しかしその一方で」帶出長者被排除的問題，最後主張「技術の進歩に人への配慮が伴ってこそ」，主旨是推動無現金化時要顧及跟不上的人。「会計が早く済む」只是開頭列舉的優點細節；「現金の取り扱いをやめるべき」與其主張方向相反；「お年寄りにスマホが広まりつつある」獨白中並沒有這樣說。',
    explanationEn:
      'The speaker first acknowledges the merits of cashless payment, then uses 「しかしその一方で」 to introduce the problem of elderly people being left out, and finally argues 「技術の進歩に人への配慮が伴ってこそ」 — her theme is that going cashless requires consideration for those who cannot keep up. Faster checkout is merely an advantage listed at the beginning; stores dropping cash entirely runs against her position; and the claim that smartphones are spreading among the elderly is never made in the talk.',
  },
  {
    id: 'n2-listening-gaiyo-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社の会議で、女の人が顧客アンケートの結果を報告しています。' },
      { speaker: '女', text: '先月実施しましたお客様アンケートの結果がまとまりましたので、ご報告します。まず、製品の性能については、九割近くのお客様から満足しているとの回答をいただきました。' },
      { speaker: '女', text: '一方、不満として最も多かったのは、意外にも取扱説明書に関するものでした。専門用語が多く、初めて使う人には理解しがたいという意見が目立ちます。' },
      { speaker: '女', text: '実際、お客様相談室への問い合わせの半分以上は、説明書を読めば分かるはずの内容だったそうです。' },
      { speaker: '女', text: 'つまり、今、私たちが優先して改善すべきなのは、製品そのものではなく、説明書の分かりやすさだということです。次回の会議までに改訂案をご用意します。' },
    ],
    question: '女の人が最も伝えたいことは何ですか。',
    options: [
      '取扱説明書を分かりやすく改善する必要がある',
      '九割近くの客が製品の性能に満足している',
      '製品そのものの性能を高めるべきだ',
      'お客様相談室の担当者を増やすべきだ',
    ],
    answerIndex: 0,
    explanation:
      '報告用「つまり」總結：「優先して改善すべきなのは、製品そのものではなく、説明書の分かりやすさだ」，並預告要提改訂案，主旨即改善說明書。「九割が満足」是鋪陳用的問卷細節；「製品の性能を高めるべき」正好被「製品そのものではなく」否定；「相談室の担当者を増やす」獨白中完全沒有提出。',
    explanationEn:
      'The report wraps up with 「つまり」: 「優先して改善すべきなのは、製品そのものではなく、説明書の分かりやすさだ」, and she promises a revision draft, so improving the manual is her main message. The ninety-percent satisfaction figure is background detail from the survey; improving the product itself is exactly what 「製品そのものではなく」 rules out; and adding staff to the customer service desk is never proposed anywhere in the talk.',
  },
  {
    id: 'n2-listening-gaiyo-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'テレビのインタビュー番組で、栄養の専門家が話しています。' },
      { speaker: '男', text: '朝食は一日の中で最も大切な食事だと、昔からよく言われてきましたね。' },
      { speaker: '男', text: 'ですが、私が本当に問題だと考えているのは、食べるか食べないかということよりも、何を食べているかということなんです。' },
      { speaker: '男', text: '例えば、菓子パンと甘い飲み物だけという朝食では、血糖値が急に上がって、かえって午前中に眠くなりかねません。' },
      { speaker: '男', text: '忙しい朝に完璧な食事を用意しろとは言いません。卵や果物を一品加えるだけでも十分です。量より、まず中身を見直してみてください。' },
    ],
    question: '専門家が最も言いたいことは何ですか。',
    options: [
      '朝食は食べるかどうかより中身を見直すことが大切だ',
      '菓子パンだけの朝食では午前中に眠くなりかねない',
      '朝は完璧な食事を用意しなければならない',
      '朝食は抜いたほうが健康にいい',
    ],
    answerIndex: 0,
    explanation:
      '專家明言問題「食べるか食べないかということよりも、何を食べているか」，最後再以「量より、まず中身を見直して」收尾，主旨是重新檢視早餐內容。「菓子パンだけだと眠くなりかねない」只是支持主張的一個例子，屬細節；「完璧な食事を用意しなければ」被「用意しろとは言いません」直接否定；「抜いたほうがいい」獨白從頭到尾都沒有主張。',
    explanationEn:
      'The expert states the real issue as 「食べるか食べないかということよりも、何を食べているか」 and closes with 「量より、まず中身を見直して」, so his main point is to reexamine what breakfast consists of. Getting sleepy after a pastry-only breakfast is just one supporting example; preparing a perfect meal is directly denied with 「用意しろとは言いません」; and skipping breakfast is never advocated at any point in the talk.',
  },
  {
    id: 'n2-listening-gaiyo-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '市民向けの講演会で、防災の専門家が話しています。' },
      { speaker: '男', text: '災害への備えと聞くと、水や食料の備蓄を思い浮かべる方が多いでしょう。もちろん、それも欠かせません。' },
      { speaker: '男', text: 'しかし、過去の大きな地震を調べてみると、倒れた家から助け出された人の多くは、消防や警察ではなく、実は近所の人に救われているんです。' },
      { speaker: '男', text: 'どんなに物を備えても、あなたがそこにいると気づいてくれる人がいなければ、助かりようがありません。' },
      { speaker: '男', text: '日ごろから近所の人と声をかけ合う関係を作っておくこと。それこそが、いざというときに命を守る何よりの備えだと、私は今日一番お伝えしたいのです。' },
    ],
    question: '専門家が最も言いたいことは何ですか。',
    options: [
      '日ごろの近所付き合いが災害のときに命を守る',
      '水や食料の備蓄は災害への備えとして欠かせない',
      '地震のときは消防や警察がすぐに助けに来てくれる',
      '家具が倒れないように固定しておくべきだ',
    ],
    answerIndex: 0,
    explanation:
      '講者用「しかし」轉折，指出震災中多數人是被鄰居救出，並以「日ごろから近所の人と声をかけ合う関係を作っておくこと。それこそが〜何よりの備え」明示結論，主旨是平日的鄰里關係才是保命關鍵。「備蓄は欠かせません」只是開頭讓步的細節；「消防や警察がすぐ助けてくれる」與獨白內容相反；「家具の固定」則完全沒有被提到。',
    explanationEn:
      'The speaker pivots with 「しかし」, noting that most people rescued from collapsed houses were saved by neighbors, and makes his conclusion explicit: 「日ごろから近所の人と声をかけ合う関係を作っておくこと。それこそが〜何よりの備え」 — everyday neighborhood ties are what save lives. Stockpiling water and food is only a concession made at the start; the idea that fire and police will arrive quickly contradicts the talk; and securing furniture is never mentioned at all.',
  },
  {
    id: 'n2-listening-gaiyo-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで、女の人が空き家問題について話しています。' },
      { speaker: '女', text: '今、全国で空き家が増え続けています。放置された空き家は、倒壊の恐れがあるだけでなく、地域の景観や治安にも悪影響を及ぼしかねません。' },
      { speaker: '女', text: 'そのため、危険な空き家は取り壊すべきだという声が多いのですが、取り壊しには多額の費用がかかる上、その後の土地が空いたままになるという問題も残ります。' },
      { speaker: '女', text: '一方、最近では、古い空き家をカフェや宿泊施設に作り替えて、かえって町の魅力に変えている地域も出てきました。' },
      { speaker: '女', text: '空き家を厄介者だと決めつけるのではなく、地域の資源として生かしていく。これからの時代に求められているのは、そうした発想の転換ではないでしょうか。' },
    ],
    question: '女の人の話の主なテーマは何ですか。',
    options: [
      '空き家は壊すのではなく地域の資源として生かすべきだ',
      '放置された空き家は景観や治安に悪影響を及ぼしかねない',
      '空き家の取り壊し費用は年々安くなってきている',
      '危険な空き家はすぐに取り壊したほうがいい',
    ],
    answerIndex: 0,
    explanation:
      '講者先鋪陳空屋的弊害與拆除派的主張，再用「一方」舉出改建咖啡廳、旅宿的成功例，最後以「地域の資源として生かしていく〜発想の転換」總結，主旨是活用而非拆除。「景観や治安への悪影響」只是開頭鋪陳的細節；「取り壊し費用が安くなっている」獨白中沒說，反而說要花大錢；「すぐに取り壊したほうがいい」是講者要聽眾跳脫的舊思維，與主旨相反。',
    explanationEn:
      'After outlining the harms of vacant houses and the calls for demolition, the speaker uses 「一方」 to introduce successful conversions into cafes and lodgings, then concludes with 「地域の資源として生かしていく〜発想の転換」 — the theme is using empty houses as community resources rather than tearing them down. The harm to scenery and safety is just background detail; demolition costs are said to be high, not getting cheaper; and demolishing dangerous houses right away is precisely the old mindset she urges listeners to move beyond.',
  },
  {
    id: 'n2-listening-gaiyo-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社の会議で、男の人が新製品の販売状況を報告しています。' },
      { speaker: '男', text: '発売から三か月がたちましたので、新しい調理器具の販売状況をご報告します。売り上げは目標を二割ほど上回っており、数字の上では順調と言えます。' },
      { speaker: '男', text: 'ただ、購入者のデータを詳しく見ますと、意外な事実が分かりました。二十代向けに開発した商品にもかかわらず、実際の購入者の六割は六十歳以上だったんです。' },
      { speaker: '男', text: '操作が簡単で、表示の文字が大きい点が、シニアの方々に評価されたようです。' },
      { speaker: '男', text: 'せっかくシニア層に売れているのに、宣伝は今も若者向けの雑誌やSNS中心のままです。今後は広告の出し方を、実際のお客様に合わせて見直すべきだと考えます。' },
    ],
    question: '男の人が最も言いたいことは何ですか。',
    options: [
      '実際の購入者に合わせて宣伝の方法を見直すべきだ',
      '新製品の売り上げは目標を二割ほど上回っている',
      '商品の操作をもっと簡単にするべきだ',
      'シニア向けの新しい調理器具を開発するべきだ',
    ],
    answerIndex: 0,
    explanation:
      '報告的結論在最後一句：「広告の出し方を、実際のお客様に合わせて見直すべきだ」，前面的銷售數字與購買者分析都是為此鋪陳，主旨是調整宣傳策略。「目標を二割上回っている」只是開頭報告的業績細節；「操作をもっと簡単に」不成立，操作簡單正是被銀髮族肯定的優點；「シニア向けの新開発」獨白中並沒有提案。',
    explanationEn:
      'The conclusion comes in the final line: 「広告の出し方を、実際のお客様に合わせて見直すべきだ」 — advertising should be redirected toward the actual buyers, and the sales figures and buyer analysis before it are all setup for that point. Exceeding the sales target by twenty percent is just an opening detail; making the product simpler to operate makes no sense because its easy operation is exactly what seniors praised; and developing a new senior-oriented product is never proposed in the report.',
  },
  {
    id: 'n2-listening-gaiyo-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'テレビで、心理学の専門家が子どものほめ方について話しています。' },
      { speaker: '女', text: '子どもはほめて育てたほうがいいと、よく言われますね。ただ、ほめ方によってはかえって逆効果になりかねないことは、あまり知られていません。' },
      { speaker: '女', text: '例えば、テストの点数だけを取り上げて「頭がいいね」とほめ続けると、子どもは失敗を恐れて、難しいことに挑戦しなくなる傾向があるんです。' },
      { speaker: '女', text: '一方、「毎日こつこつ練習を続けたね」というように努力の過程をほめられた子どもは、たとえ失敗しても、また挑戦しようとします。' },
      { speaker: '女', text: 'つまり、大事なのはほめる回数を増やすことではなく、結果ではなく過程に目を向けてほめることなんです。' },
    ],
    question: '専門家が最も言いたいことは何ですか。',
    options: [
      '結果ではなく努力の過程をほめることが大切だ',
      '子どもはほめる回数が多ければ多いほど伸びる',
      '点数を取り上げてほめると挑戦する子どもに育つ',
      '子どもをほめて育てるのはやめたほうがいい',
    ],
    answerIndex: 0,
    explanation:
      '專家對比兩種稱讚方式後，用「つまり、大事なのは〜結果ではなく過程に目を向けてほめること」直接點出主旨：要稱讚努力的過程。「回数が多いほど伸びる」被「ほめる回数を増やすことではなく」否定；「点数をほめると挑戦する子に育つ」與獨白所說「挑戦しなくなる」正好相反；「ほめるのをやめたほうがいい」說得太過，她只是提醒稱讚的方式，並未反對稱讚本身。',
    explanationEn:
      'After contrasting the two styles of praise, the expert states her point directly: 「つまり、大事なのは〜結果ではなく過程に目を向けてほめること」 — praise the process of effort, not the result. Praising more often is rejected by 「ほめる回数を増やすことではなく」; praising test scores producing challenge-loving children is the exact opposite of her claim that such children 「挑戦しなくなる」; and giving up on praise altogether overstates her position, since she only cautions about how to praise, not against praising itself.',
  },
  {
    id: 'n2-listening-gaiyo-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '観光業界の集まりで、女の人が講演しています。' },
      { speaker: '女', text: '長年、観光の世界では、訪れる人の数を増やすことが何よりの目標とされてきました。' },
      { speaker: '女', text: 'しかし、観光客が増えすぎた町では、道路の渋滞やごみの増加に住民が悩まされ、観光客の側も、混雑のせいでゆっくり楽しめないという不満を抱えています。' },
      { speaker: '女', text: '数を追い求めた結果、町の人も旅行者も幸せになれないのでは、本末転倒だと言わざるを得ません。' },
      { speaker: '女', text: 'これからの観光に必要なのは、より多くの人を呼ぶことではなく、一人一人に長く滞在してもらい、その土地を深く味わってもらうことではないでしょうか。' },
    ],
    question: '女の人の話の主なテーマは何ですか。',
    options: [
      '観光は客の数よりも滞在の質を重視するべきだ',
      '観光客が増えると道路の渋滞やごみが増える',
      '観光客の数をさらに増やす方法を考えるべきだ',
      '住民は観光客の受け入れに賛成している',
    ],
    answerIndex: 0,
    explanation:
      '講者批評追求人數是「本末転倒」，最後主張「より多くの人を呼ぶことではなく、一人一人に長く滞在してもらい、深く味わってもらうこと」，主旨是從衝人數轉向重視停留品質。「渋滞やごみが増える」只是說明弊害的細節；「数をさらに増やす方法」與主張正好相反；「住民は受け入れに賛成」不成立，獨白說的是居民深受其擾。',
    explanationEn:
      'The speaker criticizes chasing visitor numbers as 「本末転倒」 and concludes with 「より多くの人を呼ぶことではなく、一人一人に長く滞在してもらい、深く味わってもらうこと」 — tourism should shift from headcounts to the quality of each stay. Traffic jams and garbage are only details illustrating the harm; finding ways to attract even more tourists is the opposite of her argument; and residents welcoming tourists contradicts the talk, which describes them as suffering from the crowds.',
  },
  {
    id: 'n2-listening-gaiyo-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで、男の人がAIと仕事について話しています。' },
      { speaker: '男', text: 'AI、つまり人工知能の進歩によって、多くの仕事が失われるのではないか。そんな不安の声を、最近よく耳にします。' },
      { speaker: '男', text: '確かに、データ入力のような単純な作業は、すでにAIに置き換えられつつあります。この流れは、もはや止めようがありません。' },
      { speaker: '男', text: 'しかし、歴史を振り返れば、新しい技術は仕事を奪うと同時に、それまでなかった新しい仕事を生み出してもきました。' },
      { speaker: '男', text: 'ですから、私たちが今すべきなのは、AIを恐れて避けることではなく、AIを道具として使いこなす力を身につけることだと思うのです。' },
    ],
    question: '男の人が最も言いたいことは何ですか。',
    options: [
      'AIを恐れるよりも使いこなす力を身につけるべきだ',
      '単純な作業はすでにAIに置き換えられつつある',
      'AIの進歩は法律で止めるべきだ',
      'AIが新しい仕事を生み出すことはない',
    ],
    answerIndex: 0,
    explanation:
      '講者用「ですから、私たちが今すべきなのは〜AIを道具として使いこなす力を身につけること」作結，主旨是與其害怕不如學會駕馭 AI。「単純な作業が置き換えられつつある」只是承認現狀的細節；「法律で止めるべき」不成立，他說這股潮流「止めようがありません」；「新しい仕事を生み出すことはない」與獨白中「新しい仕事を生み出してもきました」正好相反。',
    explanationEn:
      'The speaker concludes with 「ですから、私たちが今すべきなのは〜AIを道具として使いこなす力を身につけること」 — rather than fearing AI, we should learn to master it as a tool. Simple tasks already being replaced by AI is a detail he concedes along the way; stopping AI by law contradicts his remark that the trend 「止めようがありません」; and the claim that AI creates no new jobs is the exact opposite of his statement 「新しい仕事を生み出してもきました」.',
  },
  {
    id: 'n2-listening-gaiyo-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'テレビで、アナウンサーが週休三日制について伝えています。' },
      { speaker: '男', text: '週に三日休む、いわゆる週休三日制を試験的に取り入れる企業が増えています。ある会社が一年間試したところ、意外な結果が出ました。' },
      { speaker: '男', text: '働く時間が減ったにもかかわらず、社員一人当たりの成果は、始める前とほとんど変わらなかったというのです。' },
      { speaker: '男', text: '社員たちは、休みを増やすために、目的のはっきりしない会議をやめ、資料を簡単にするなど、仕事のやり方そのものを見直したそうです。' },
      { speaker: '男', text: 'つまり、成果を決めるのは、机に向かう時間の長さではないということです。この結果は、週休三日制を取り入れない会社にとっても、大きなヒントになるのではないでしょうか。' },
    ],
    question: 'アナウンサーが最も伝えたいことは何ですか。',
    options: [
      '大切なのは働く時間の長さではなく仕事のやり方だ',
      '週休三日制を取り入れる企業が増えている',
      '休みを増やすと社員の成果は必ず上がる',
      '目的のはっきりしない会議は増え続けている',
    ],
    answerIndex: 0,
    explanation:
      '報導核心在結尾：「成果を決めるのは、机に向かう時間の長さではない」，社員靠重新檢視工作方式，工時減少成果卻不變，這對未導入的公司也是啟示。「取り入れる企業が増えている」只是開頭鋪陳的現象；「成果は必ず上がる」說得太過，報導說的是「ほとんど変わらなかった」；會議是被社員「やめ」的對象，並非持續增加。',
    explanationEn:
      'The core of the report comes at the end: 「成果を決めるのは、机に向かう時間の長さではない」 — by rethinking how they worked, employees kept output steady despite shorter hours, a hint even for companies not adopting the system. The rise in companies trying four-day weeks is just the opening background; claiming results always improve overstates the finding, which was that output 「ほとんど変わらなかった」; and pointless meetings were something employees eliminated, not something on the increase.',
  },
  {
    id: 'n2-listening-gaiyo-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'セミナーで、経営コンサルタントの女の人がオフィスの座席について話しています。' },
      { speaker: '女', text: '社員の席を決めず、毎日好きな場所で働く、いわゆるフリーアドレスを取り入れる会社が増えています。' },
      { speaker: '女', text: '部署を越えた交流が生まれると期待されがちですが、私が調査した会社では、結局毎日同じ席に座る人が大半で、置き場のない書類が机にあふれ、かえって不満が増えたところもありました。' },
      { speaker: '女', text: '一方で、うまくいっている会社は、座る場所を週ごとに変える決まりを作ったり、立ち話ができる場所を設けたりと、始めた後も工夫を重ねています。' },
      { speaker: '女', text: 'つまり、この仕組みは取り入れること自体が目的ではなく、入れた後にどう運用するかで成果が決まるのです。' },
    ],
    question: 'コンサルタントが最も言いたいことは何ですか。',
    options: [
      'フリーアドレスは取り入れた後の運用の工夫で成果が決まる',
      'フリーアドレスを取り入れる会社が増えている',
      'フリーアドレスにすれば必ず交流が生まれる',
      '社員の席は固定したほうがいい',
    ],
    answerIndex: 0,
    explanation:
      '講者以「つまり」總結：「取り入れること自体が目的ではなく、入れた後にどう運用するかで成果が決まる」，主旨是導入後的營運巧思才是成敗關鍵。「取り入れる会社が増えている」只是開場背景；「必ず交流が生まれる」被調查結果推翻——多數人仍天天坐同一個位子、不滿反增；「席は固定したほうがいい」講者並未主張，她也舉出運用得當的成功例子。',
    explanationEn:
      'The consultant concludes with 「つまり」: 「取り入れること自体が目的ではなく、入れた後にどう運用するかで成果が決まる」 — success depends on how free-address seating is run after adoption. The growing number of adopting companies is mere opening background; the idea that it automatically creates interaction is refuted by her finding that most people sat in the same seats every day and complaints even grew; and she never argues for fixed seating, since she also cites companies making the system work well.',
  },
  {
    id: 'n2-listening-gaiyo-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '新入社員向けの研修で、マナーの講師が話しています。' },
      { speaker: '女', text: '敬語と聞くと、皆さん、尊敬語や謙譲語の正しい形を覚えなければと、身構えるのではないでしょうか。' },
      { speaker: '女', text: 'もちろん基本の形は大切です。しかし、形がどんなに完璧でも、早口で面倒くさそうに言われたら、相手はどう感じるでしょう。' },
      { speaker: '女', text: '逆に、多少言い間違えても、相手の目を見て、丁寧に話そうとする新人を、悪く思うお客様はほとんどいません。' },
      { speaker: '女', text: '敬語とは、単なる言葉の決まりではなく、相手を大切に思う気持ちを表す道具です。まず、その気持ちを持つこと。形は使ううちに、後から必ずついてきます。' },
    ],
    question: '講師が最も言いたいことは何ですか。',
    options: [
      '敬語は形よりも相手を大切に思う気持ちが大事だ',
      '尊敬語や謙譲語の正しい形を完璧に覚えるべきだ',
      '敬語を言い間違えると客を怒らせてしまう',
      '新入社員は早口で話さないほうがいい',
    ],
    answerIndex: 0,
    explanation:
      '講師的結論是「敬語とは〜相手を大切に思う気持ちを表す道具」，先有心意、形式後來自然跟上，主旨是心意重於形式。「完璧に覚えるべき」與「形がどんなに完璧でも」之後的轉折方向相反；「言い間違えると怒らせる」不成立，她說即使講錯，客人也幾乎不會反感；「早口」只是舉例中的細節，並非整段的主張。',
    explanationEn:
      'The instructor\'s conclusion is that keigo is 「相手を大切に思う気持ちを表す道具」 — hold the right attitude first and the correct forms will follow, so sincerity matters more than form. Memorizing perfect honorific forms runs against her pivot after 「形がどんなに完璧でも」; the claim that mistakes anger customers is contradicted, since she says almost no customer thinks badly of a polite newcomer who misspeaks; and speaking too fast is only a detail in her example, not her main argument.',
  },
  {
    id: 'n2-listening-gaiyo-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで、アナウンサーが台風の影響について伝えています。' },
      { speaker: '男', text: '大型の台風が近づいているため、鉄道各社は、あす午後からの計画運休を発表しました。夕方以降、首都圏のほとんどの電車が止まる見込みです。' },
      { speaker: '男', text: '計画運休には、不便だという声も少なくありません。しかし以前、走っていた電車が途中で止まり、大勢の乗客が長い時間閉じ込められたことがありました。' },
      { speaker: '男', text: 'あらかじめ止めておくのは、こうした危険と駅の混乱を防ぐためなのです。' },
      { speaker: '男', text: '各社とも、あすの朝に最新の運行情報を発表するとしています。お出かけの予定がある方は、必ず出発前に確認し、早めの行動を心がけてください。' },
    ],
    question: 'アナウンサーが最も伝えたいことは何ですか。',
    options: [
      '出発前に運行情報を確認して早めに行動してほしい',
      '計画運休は不便だからやめるべきだ',
      '台風はあすの朝には遠くへ離れる見込みだ',
      'あすの夕方も電車は平常どおり動く予定だ',
    ],
    answerIndex: 0,
    explanation:
      '報導最後直接呼籲：「必ず出発前に確認し、早めの行動を心がけてください」，提醒聽眾出門前確認最新運行資訊並提早行動，這是整段最想傳達的訊息。「不便だからやめるべき」與報導立場相反——播報員說明計畫性停駛是為了防止危險與車站混亂；颱風只說正在接近，沒說會遠離；傍晚之後「ほとんどの電車が止まる見込み」，平常運行的選項與內容相反。',
    explanationEn:
      'The report ends with a direct appeal: 「必ず出発前に確認し、早めの行動を心がけてください」 — check the latest service information before leaving and act early, which is the main message. Saying planned suspensions should be abolished contradicts the announcer, who explains they prevent danger and station chaos; the typhoon is described as approaching, not moving away; and trains running normally in the evening is the opposite of the forecast that most lines 「止まる見込み」.',
  },
]

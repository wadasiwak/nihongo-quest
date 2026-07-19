import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n2-listening-pointo-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が新商品について話しています。' },
      { speaker: '女', text: '課長、秋に発売予定だった新型の掃除機、延期になったって本当ですか。' },
      { speaker: '男', text: 'ああ、残念ながら来年の春まで延期せざるを得なくなったんだ。' },
      { speaker: '女', text: 'どうしてですか。競合他社が似たような製品を出したからでしょうか。' },
      { speaker: '男', text: 'それも気にはなったが、うちの製品には独自の機能があるから、競争の面では問題ないと判断したんだ。実は最終の品質検査で、モーターに不具合が見つかってね。' },
      { speaker: '女', text: 'そうだったんですか。デザインの変更で遅れているのかと思っていました。' },
      { speaker: '男', text: 'デザインはとっくに確定しているよ。安全に関わることだから、原因を徹底的に調べない限り発売はできない。' },
      { speaker: '女', text: '確かに、発売を急いで事故でも起きたら、会社の信用を失いかねませんね。' },
    ],
    question: '新商品の発売はどうして延期になりましたか。',
    options: [
      '品質検査で不具合が見つかったから',
      '競合他社が似た製品を発売したから',
      'デザインの変更が遅れているから',
      '会社が信用を失ってしまったから',
    ],
    answerIndex: 0,
    explanation:
      '課長明說「最終の品質検査で、モーターに不具合が見つかって」，這才是延期主因。競爭對手雖被提到，但他判斷「競争の面では問題ない」，是被排除的次要因素；設計「とっくに確定している」（早已定案）；「信用を失いかねない」是假設性的後果，不是已發生的事實。',
    explanationEn:
      'The section chief states plainly that 「最終の品質検査で、モーターに不具合が見つかって」, so a defect found in the final quality inspection is the real reason for the delay. The rival company\'s product was considered but dismissed with the judgment that 「競争の面では問題ない」; the design 「とっくに確定している」, meaning it was settled long ago; and losing the company\'s credibility is only a hypothetical consequence expressed with 「信用を失いかねない」, not something that has happened.',
  },
  {
    id: 'n2-listening-pointo-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学で女の学生と男の学生が進路について話しています。' },
      { speaker: '女', text: '田村君、就職しないで大学院に進学するんだってね。やっぱり今の就職状況が厳しいから？' },
      { speaker: '男', text: 'いや、実は内定は一つもらっていたんだ。だから就職できなかったわけじゃないよ。' },
      { speaker: '女', text: 'え、内定を断ってまで進学するの？ご両親に勧められたとか？' },
      { speaker: '男', text: '親は最初、反対していたくらいだよ。僕は環境問題の研究を続けたくて、その分野の第一人者と言われる先生がうちの大学院にいらっしゃるんだ。その先生のもとで研究したい、というのが一番の理由かな。' },
      { speaker: '女', text: 'へえ。成績優秀者は奨学金がもらえるって聞いたけど、それも大きいんじゃない？' },
      { speaker: '男', text: '経済的に助かるのは確かだけど、お金のためというより、どうしてもこの研究をやり遂げたいんだ。' },
    ],
    question: '男の学生が大学院に進学する一番の理由は何ですか。',
    options: [
      '研究の指導を受けたい先生が大学院にいるから',
      '就職状況が厳しくて内定がもらえなかったから',
      '両親に進学を勧められたから',
      '奨学金がもらえるから',
    ],
    answerIndex: 0,
    explanation:
      '男學生明確說想在「第一人者と言われる先生のもとで研究したい」，並自己標明「一番の理由」。就職難被「内定は一つもらっていた」直接否定；父母「最初、反対していた」，可見不是父母建議；獎學金他說「お金のためというより」，是被降級的次要好處。',
    explanationEn:
      'The student explicitly says he wants to study under a professor called 「第一人者と言われる先生」 at his university\'s graduate school, and he himself labels this 「一番の理由」. The tough job market is ruled out because he had actually received a job offer (「内定は一つもらっていた」); his parents 「最初、反対していた」, so it was not their suggestion; and the scholarship is downgraded with 「お金のためというより」, making it only a secondary benefit.',
  },
  {
    id: 'n2-listening-pointo-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が先週行われた新人研修について話しています。' },
      { speaker: '男', text: '佐藤さん、先週の新人研修はどうだった？会場がずいぶん狭かったって聞いたけど。' },
      { speaker: '女', text: 'ええ、確かに狭くて窮屈でしたが、それは我慢できる程度でした。' },
      { speaker: '男', text: 'じゃあ、講師の説明が分かりにくかったとか？' },
      { speaker: '女', text: 'いえ、講師の方は話し上手で、説明そのものは丁寧でしたよ。問題は、内容が理論ばかりで、実際の業務とかけ離れていたことなんです。せっかく三日間にわたって行ったのに、現場ですぐ使える知識がほとんどなくて。' },
      { speaker: '男', text: 'なるほど。時間が長すぎたという声もあったようだね。' },
      { speaker: '女', text: '長さより中身の問題です。来年は実務に即した内容に見直すべきだと思います。' },
    ],
    question: '女の人は研修の何が一番問題だったと言っていますか。',
    options: [
      '内容が実際の業務とかけ離れていたこと',
      '会場が狭かったこと',
      '講師の説明が分かりにくかったこと',
      '研修の時間が長すぎたこと',
    ],
    answerIndex: 0,
    explanation:
      '女の人指出核心問題是「内容が理論ばかりで、実際の業務とかけ離れていた」，最後又強調「長さより中身の問題」。會場狹窄她說「我慢できる程度」，是被降級的小缺點；講師「話し上手で、説明そのものは丁寧」被直接否定；時間過長也被「長さより中身」排除。',
    explanationEn:
      'The woman identifies the core problem as 「内容が理論ばかりで、実際の業務とかけ離れていた」 — the training was all theory and disconnected from actual work — and she reinforces it at the end with 「長さより中身の問題」. The cramped venue is downgraded to a tolerable annoyance with 「我慢できる程度」, the instructor is directly praised as 「話し上手で、説明そのものは丁寧」, and the complaint about length is likewise dismissed by her closing remark.',
  },
  {
    id: 'n2-listening-pointo-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '劇場の前で女の人と男の人が話しています。' },
      { speaker: '女', text: 'あれ、今夜の公演、中止になったんですか。ずっと楽しみにしていたのに。' },
      { speaker: '男', text: 'ええ、貼り紙によると、主演の俳優さんが昨日の稽古で足を骨折したそうですよ。' },
      { speaker: '女', text: 'まあ。台風が近づいていると聞いたので、てっきりそのせいかと思いました。' },
      { speaker: '男', text: '台風は今朝のうちに逸れたので、天気のほうは問題なかったみたいです。' },
      { speaker: '女', text: '代役を立てるわけにはいかなかったんでしょうか。それとも、チケットの売れ行きがよくなかったとか。' },
      { speaker: '男', text: 'いえ、チケットは発売初日に完売するほどの人気だったそうです。ほとんど一人芝居のような作品ですから、代役では成り立たないんでしょうね。' },
      { speaker: '女', text: 'そうですか。じゃあ、払い戻しの手続きを確認しなくちゃ。' },
    ],
    question: '今夜の公演はどうして中止になりましたか。',
    options: [
      '主演の俳優がけがをしたから',
      '台風で天気が悪くなるから',
      'チケットの売れ行きが悪かったから',
      '稽古が公演に間に合わなかったから',
    ],
    answerIndex: 0,
    explanation:
      '男の人轉述貼出的公告：「主演の俳優さんが昨日の稽古で足を骨折した」，這是中止的直接原因。颱風「今朝のうちに逸れた」（已轉向），天氣沒有問題；票房「発売初日に完売するほどの人気」，與事實相反；「稽古」只是受傷發生的場合，並非排練來不及。',
    explanationEn:
      'The man relays the posted notice: 「主演の俳優さんが昨日の稽古で足を骨折した」, so the lead actor\'s injury is the direct cause of the cancellation. The typhoon 「今朝のうちに逸れた」 (had already veered away), so weather was not an issue; ticket sales were the opposite of poor, since they were popular enough that 「発売初日に完売するほどの人気」; and the rehearsal is merely where the injury happened, not a case of rehearsals failing to finish in time.',
  },
  {
    id: 'n2-listening-pointo-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'レストランで女の店員が店長の男の人と話しています。' },
      { speaker: '女', text: '店長、来月から野菜の仕入れ先を変えるそうですね。今のところより安くなるんですか。' },
      { speaker: '男', text: 'いや、実は値段はむしろ少し高くなるんだ。' },
      { speaker: '女', text: 'えっ、それなのに変えるんですか。今の業者さん、配達がよく遅れていましたから、それが原因でしょうか。' },
      { speaker: '男', text: '遅れは確かに何度かあったけど、事前に連絡をくれていたから、営業に支障が出るほどではなかったよ。決め手は品質なんだ。今の業者は日によって野菜の状態にばらつきがあって、料理の味が安定しなくてね。' },
      { speaker: '女', text: 'なるほど。新しい業者さんは、お店から近いんでしたっけ。' },
      { speaker: '男', text: 'いや、むしろ遠くなるよ。ただ、契約農家から直接仕入れているから、一年を通して品質が安定しているんだ。素材の味で勝負するうちの店には、これ以上の条件はないよ。' },
    ],
    question: '店長が仕入れ先を変える一番の理由は何ですか。',
    options: [
      '野菜の品質が安定しているから',
      '仕入れの値段が安くなるから',
      '今の業者の配達の遅れで営業に支障が出たから',
      '新しい業者が店から近いから',
    ],
    answerIndex: 0,
    explanation:
      '店長自己點名「決め手は品質」，新業者「一年を通して品質が安定している」才是換約主因。價格「むしろ少し高くなる」，與選項相反；配達遲到雖然發生過，但「営業に支障が出るほどではなかった」，是被降級排除的次要理由；距離也是「むしろ遠くなる」。',
    explanationEn:
      'The manager himself names the deciding factor with 「決め手は品質なんだ」: the new supplier buys directly from contract farmers, so 「一年を通して品質が安定している」. Price actually works against the change, since it will 「むしろ少し高くなる」; the current supplier\'s late deliveries did happen but 「営業に支障が出るほどではなかった」, so they are downgraded and excluded; and the new supplier is in fact farther away (「むしろ遠くなる」), the opposite of that option.',
  },
  {
    id: 'n2-listening-pointo-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が新しい会計システムについて話しています。' },
      { speaker: '男', text: '例の新しい会計システム、導入が見送りになったって聞いたけど、予算が足りなかったの？' },
      { speaker: '女', text: 'いえ、費用は当初の見積もりの範囲内に収まっていました。' },
      { speaker: '男', text: 'じゃあ、セキュリティに問題でもあったのかな。' },
      { speaker: '女', text: 'セキュリティは専門機関の審査に合格していますから、その点は心配ないんです。問題は現場なんですよ。操作が複雑すぎて、経理部のベテラン社員からも「使いこなせない」という声が相次いだんです。' },
      { speaker: '男', text: 'ああ、それは研修をすれば済むというものでもないしね。' },
      { speaker: '女', text: 'ええ。無理に導入すれば、かえって業務が滞りかねません。操作画面を改善してもらった上で、改めて検討することになりました。' },
    ],
    question: '新しいシステムの導入はどうして見送りになりましたか。',
    options: [
      '操作が複雑で社員が使いこなせないから',
      '費用が予算を超えてしまったから',
      'セキュリティに問題が見つかったから',
      '業務が滞ってしまったから',
    ],
    answerIndex: 0,
    explanation:
      '女の人說「操作が複雑すぎて」、連資深社員都「使いこなせない」，抱怨聲不斷，這是暫緩導入的主因。費用「見積もりの範囲内に収まって」被否定；資安「審査に合格しています」也被排除；「業務が滞りかねない」是勉強導入時可能發生的後果，並非既成事實。',
    explanationEn:
      'The woman explains that 「操作が複雑すぎて」 and that even veteran accounting staff kept saying 「使いこなせない」, so the system being too complex for employees to master is why the rollout was postponed. Cost is denied because the fees stayed within the original estimate; security passed an external review, so that concern is eliminated; and work grinding to a halt is only a feared outcome of forcing the rollout, expressed as 「業務が滞りかねません」, not something that has already occurred.',
  },
  {
    id: 'n2-listening-pointo-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学で男の学生と女の学生がボランティア活動について話しています。' },
      { speaker: '男', text: '週末はいつも被災地のボランティアに行ってるんだって？就職活動のためにやってる人も多いらしいね。' },
      { speaker: '女', text: '確かに履歴書に書けるとは思うけど、私はそのために始めたわけじゃないの。' },
      { speaker: '男', text: 'じゃあ、誰かに誘われたとか？' },
      { speaker: '女', text: '誘ってくれたのはサークルの先輩なんだけど、断ろうと思えば断れたし。実はね、高校のとき、地元が水害にあって、全国から来たボランティアの人たちに助けてもらったの。今度は自分が恩返しをする番だと思って。' },
      { speaker: '男', text: 'そうだったんだ。ボランティアで単位がもらえる授業もあるって聞いたけど。' },
      { speaker: '女', text: 'それは別の授業の話よ。単位とは関係なく、これからも続けるつもり。' },
    ],
    question: '女の学生がボランティアを始めた一番の理由は何ですか。',
    options: [
      '昔ボランティアに助けてもらった恩返しをしたいから',
      '就職活動のときに役立つから',
      '先輩に誘われて断れなかったから',
      '大学の単位がもらえるから',
    ],
    answerIndex: 0,
    explanation:
      '女學生說出關鍵經歷：高中時老家遭水災、受過志工幫助，「今度は自分が恩返しをする番」才是初衷。就活加分被「そのために始めたわけじゃない」否定；學長雖然邀她，但「断ろうと思えば断れた」，是被降級的契機而非主因；學分「別の授業の話」，完全無關。',
    explanationEn:
      'The student reveals the key experience: in high school her hometown was hit by flooding and volunteers from all over the country helped her, so she feels 「今度は自分が恩返しをする番だ」 — it is her turn to repay the kindness. Job-hunting benefits are denied with 「そのために始めたわけじゃない」; the senior\'s invitation is downgraded to a mere trigger since 「断ろうと思えば断れた」; and course credit is dismissed as 「別の授業の話」, completely unrelated.',
  },
  {
    id: 'n2-listening-pointo-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで女のアナウンサーが商店街の会長にインタビューしています。' },
      { speaker: '女', text: '会長、この商店街では最近、空き店舗が増えているそうですね。郊外に大型ショッピングセンターができた影響でしょうか。' },
      { speaker: '男', text: 'お客さんの流れが変わったのは事実ですが、うちは昔ながらの品ぞろえで常連のお客さんをつかんでいますから、売り上げ自体はそれほど落ちていないんです。' },
      { speaker: '女', text: 'では、駐車場が少ないことが問題なのでしょうか。' },
      { speaker: '男', text: 'それは市と協力して、近くに新しい駐車場を作ることで解決のめどが立ちました。深刻なのは後継者不足です。店主の高齢化が進んでいるのに、跡を継ぐ若い人がいなくて、店を閉めざるを得ないところが増えているんです。' },
      { speaker: '女', text: 'なるほど。それで空き店舗が増えているんですね。' },
      { speaker: '男', text: 'ええ。今は若い人がここで開業しやすいように、家賃を補助する制度を検討しているところです。' },
    ],
    question: '会長は商店街の何が一番深刻な問題だと言っていますか。',
    options: [
      '店を継ぐ若い人がいないこと',
      '大型ショッピングセンターに客を取られたこと',
      '駐車場が足りないこと',
      '家賃が高くて開業できないこと',
    ],
    answerIndex: 0,
    explanation:
      '会長明說「深刻なのは後継者不足です」：店主高齡化、無人接班，只好歇業，空店鋪因此增加。大型購物中心的影響被「売り上げ自体はそれほど落ちていない」降級排除；停車場問題「解決のめどが立ちました」（已有解決眉目）；房租只是正在研議的補助制度話題，並非他指的癥結。',
    explanationEn:
      'The association head states directly 「深刻なのは後継者不足です」: shop owners are aging, no young people are taking over, and stores are forced to close, which is why vacancies keep increasing. The shopping center\'s impact is downgraded because 「売り上げ自体はそれほど落ちていない」; the parking shortage already has a solution in sight (「解決のめどが立ちました」); and rent only comes up as part of a subsidy program under consideration, not as the problem he is pointing to.',
  },
  {
    id: 'n2-listening-pointo-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人がオフィスの移転について話しています。' },
      { speaker: '女', text: '来月、オフィスが駅前のビルに移転するでしょう。やっぱり今より家賃が安いんですか。' },
      { speaker: '男', text: 'いや、駅前だから家賃はかえって高くなるんだよ。' },
      { speaker: '女', text: 'そうなんですか。じゃあ、今のオフィスが手狭になったからですか。ここ数年で社員もずいぶん増えましたし。' },
      { speaker: '男', text: '広さも理由の一つではあるけど、それだけならフロアを一つ借り足せば済む話だからね。決め手は交通の便だよ。うちはお客様との打ち合わせが多いのに、今の場所は駅からバスで二十分もかかるだろう。' },
      { speaker: '女', text: '確かに、お越しいただくたびに、取引先の方にはご不便をおかけしていましたね。' },
      { speaker: '男', text: '移転先は駅から歩いて三分だ。お客様も来やすくなるし、こちらの営業も動きやすくなるはずだよ。' },
    ],
    question: 'オフィスを移転する一番の決め手は何ですか。',
    options: [
      '交通の便がよくなること',
      '家賃が今より安くなること',
      '社員が増えて手狭になったこと',
      '営業の成績が落ちていること',
    ],
    answerIndex: 0,
    explanation:
      '男の人親口說「決め手は交通の便」：現址距車站要搭二十分鐘公車，客戶來訪不便，新址步行三分鐘。房租「かえって高くなる」，與選項相反；空間不足雖是「理由の一つ」，但「フロアを一つ借り足せば済む」，被降級排除；業績下滑對話中從未提及，只說搬遷後行動會更靈活。',
    explanationEn:
      'The man says outright 「決め手は交通の便だよ」: the current office is a twenty-minute bus ride from the station, which inconveniences visiting clients, while the new location is a three-minute walk. Rent will actually be higher (「かえって高くなる」), the opposite of that option; lack of space is acknowledged as 「理由の一つ」 but downgraded because 「フロアを一つ借り足せば済む」; and falling sales are never mentioned — he only says the sales team will be able to move around more easily after the move.',
  },
  {
    id: 'n2-listening-pointo-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が海外勤務について話しています。' },
      { speaker: '男', text: '中村さん、海外勤務を希望しているんだって？やっぱり語学力を生かしたいから？' },
      { speaker: '女', text: '英語が話せるのは確かに強みだと思うけど、それが目的というわけじゃないの。' },
      { speaker: '男', text: '海外勤務は給料が上がるって聞いたことがあるよ。手当も付くんでしょう？' },
      { speaker: '女', text: '手当は付くけど、物価の高い都市だと生活費でほとんど消えるらしいわ。そうじゃなくて、今担当している商品を現地の市場に合わせて売り出す仕事を、企画の段階から任せてもらえるの。日本にいたらできない経験だから、どうしても挑戦したくて。' },
      { speaker: '男', text: 'なるほど、仕事の中身にひかれたんだね。ご家族は反対しなかったの？' },
      { speaker: '女', text: '夫は昔から海外で暮らしてみたいと言っていたくらいだから、むしろ賛成してくれたわ。' },
    ],
    question: '女の人が海外勤務を希望する一番の理由は何ですか。',
    options: [
      '現地で企画の段階から仕事を任せてもらえるから',
      '語学力を生かして働きたいから',
      '給料や手当が増えるから',
      '夫が海外で暮らしたがっているから',
    ],
    answerIndex: 0,
    explanation:
      '女の人說重點在工作內容：能「企画の段階から任せてもらえる」，是在日本得不到的歷練，所以「どうしても挑戦したい」。語言能力被「それが目的というわけじゃない」降級排除；津貼「生活費でほとんど消える」，不是誘因；丈夫贊成只是沒有阻力，並非她申請的理由。',
    explanationEn:
      'The woman says the appeal is the work itself: she would be entrusted with launching her current product in the local market 「企画の段階から任せてもらえる」, an experience impossible in Japan, which is why 「どうしても挑戦したくて」. Language skills are set aside with 「それが目的というわけじゃない」; the allowance is no incentive because 「生活費でほとんど消える」; and her husband\'s approval merely means there is no obstacle at home, not that his wishes are her reason for applying.',
  },
  {
    id: 'n2-listening-pointo-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が来週の出張について話しています。' },
      { speaker: '男', text: '森田さん、来週の出張、行き先が大阪から福岡に変わったって聞いたけど、本当？' },
      { speaker: '女', text: 'ええ、そうなんです。' },
      { speaker: '男', text: 'どうして？先方の担当者の都合が悪くなったの？' },
      { speaker: '女', text: 'いえ、担当の方の日程は問題なかったんです。実は、先方が福岡に新しい工場を建てたでしょう。せっかくならその工場を見てほしいと先方に言われて、打ち合わせごと福岡で行うことになったんです。' },
      { speaker: '男', text: 'なるほど。飛行機が取れなかったとか、そういう話じゃないんだ。' },
      { speaker: '女', text: 'ええ、便はすぐ取れました。工場を実際に見れば次の提案にも生かせますから、かえってよかったと思っています。' },
    ],
    question: '出張先はどうして福岡に変わりましたか。',
    options: [
      '先方の新しい工場を見ることになったから',
      '先方の担当者の都合が悪くなったから',
      '大阪行きの飛行機が取れなかったから',
      '先方との打ち合わせが中止になったから',
    ],
    answerIndex: 0,
    explanation:
      '女の人說明對方在福岡蓋了新工廠，先方主動提出「せっかくならその工場を見てほしい」，於是連同會議一起改到福岡舉行，這才是變更的原因。負責人的行程被「日程は問題なかった」否定；機票「便はすぐ取れました」，並非訂不到；會議不但沒有取消，反而是「打ち合わせごと福岡で」照常進行，選項與事實相反。',
    explanationEn:
      'The woman explains that the client built a new factory in Fukuoka and themselves proposed 「せっかくならその工場を見てほしい」, so the meeting was moved to Fukuoka together with a factory visit — that is the reason for the change. The contact person\'s schedule is denied as a cause with 「日程は問題なかった」, the flight was booked without trouble (「便はすぐ取れました」), and far from being canceled, the meeting is simply being held in Fukuoka instead.',
  },
  {
    id: 'n2-listening-pointo-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が定例会議の変更について話しています。' },
      { speaker: '女', text: '課長、来月から定例会議が月曜の朝から木曜の夕方に変わるそうですね。月曜だと会議室が取りにくいからですか。' },
      { speaker: '男', text: 'いや、部屋は年間で押さえてあるから、その心配はないんだ。' },
      { speaker: '女', text: 'では、週明けだと資料の準備が間に合わないという、あの声のせいでしょうか。' },
      { speaker: '男', text: 'その意見も確かにあったが、それだけなら開始を一時間遅らせれば済む話だ。実はね、来月からシンガポール支社も会議に加わることになったんだよ。向こうとの時差を考えると、こちらの木曜の夕方が一番都合がいいんだ。' },
      { speaker: '女', text: 'そうだったんですか。海外と一緒となると、資料も英語にしないといけませんね。' },
      { speaker: '男', text: 'ああ、それはおいおい相談しよう。' },
    ],
    question: '定例会議はどうして木曜の夕方に変わりますか。',
    options: [
      '海外の支社が会議に参加することになったから',
      '月曜は会議室が取りにくいから',
      '資料の準備が間に合わないから',
      '会議を英語で行うことになったから',
    ],
    answerIndex: 0,
    explanation:
      '課長說出關鍵：「シンガポール支社も会議に加わることになった」，考量時差後「木曜の夕方が一番都合がいい」，海外支社參加才是變更主因。會議室「年間で押さえてある」被否定；資料來不及的意見雖然存在，但「開始を一時間遅らせれば済む」被降級排除；英語只是女の人聯想到的後續課題，「おいおい相談しよう」，並非變更原因。',
    explanationEn:
      'The section chief reveals the key fact: 「シンガポール支社も会議に加わることになった」, and considering the time difference, 「木曜の夕方が一番都合がいい」 — the overseas branch joining the meeting is the real reason. The room concern is denied because it 「年間で押さえてある」; the complaint about materials not being ready is acknowledged but downgraded since 「開始を一時間遅らせれば済む」; and holding the meeting in English is merely a future topic to discuss later (「おいおい相談しよう」), not the cause.',
  },
  {
    id: 'n2-listening-pointo-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人が商談から戻った女の人と話しています。' },
      { speaker: '男', text: '大田さん、今日の南陽産業さんとの商談、手応えはどうだった？' },
      { speaker: '女', text: '悪くありませんでした。ただ、先方が一番こだわっていたのは、意外なところでしたよ。' },
      { speaker: '男', text: '価格だろう？あそこは値段に厳しいと有名だから。' },
      { speaker: '女', text: '値下げの話も出ましたが、そこは想定の範囲内でした。納期についても、今の体制で問題ないそうです。決め手になりそうなのは、少ない数からでも注文できるかどうかなんです。倉庫を小さくして、在庫をなるべく持たない方針に変えたそうで。' },
      { speaker: '男', text: 'なるほど、それでか。うちは小さな注文にも対応できるから、そこを前面に出そう。' },
      { speaker: '女', text: 'ええ、次回の提案書はその点を中心にまとめます。' },
    ],
    question: '取引先が一番重視している条件は何ですか。',
    options: [
      '少ない数から注文できること',
      '価格を下げること',
      '納期を早めること',
      '倉庫を大きくすること',
    ],
    answerIndex: 0,
    explanation:
      '女の人指出對方最在意的是「少ない数からでも注文できるかどうか」，因為對方縮小倉庫、改採盡量不囤庫存的方針，這是最可能的決勝點。降價雖被提出，但「想定の範囲内」，不是最重視的條件；交期「今の体制で問題ない」被排除；倉庫是對方「小さくして」，選項「大きくする」正好相反。',
    explanationEn:
      'The woman reports that what the client cares about most is 「少ない数からでも注文できるかどうか」, because they have downsized their warehouse and shifted to holding as little inventory as possible. Price cuts did come up but were 「想定の範囲内」, so not the top concern; the delivery schedule is fine as is (「今の体制で問題ない」); and the client is making its warehouse smaller, so enlarging it is the exact opposite of what was said.',
  },
  {
    id: 'n2-listening-pointo-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が服装の決まりの変更について話しています。' },
      { speaker: '女', text: '部長、来月から服装が自由になるって本当ですか。夏の軽装なら、もうやっていますけど。' },
      { speaker: '男', text: 'ああ、今度は一年を通じて自由になるんだ。' },
      { speaker: '女', text: '冷房の設定を上げて、電気代を減らすのが狙いですか。' },
      { speaker: '男', text: '節約なら今の夏の軽装で十分効果が出ているよ。実はね、一番の狙いは採用なんだ。就職説明会で学生から、服装が堅い会社は古い感じがするという声が多くてね。若い人に選んでもらえる会社にしたいんだよ。' },
      { speaker: '女', text: 'そういうことでしたか。でも、取引先に失礼になりませんか。' },
      { speaker: '男', text: 'お客様にお会いする日はスーツと決まっているから、心配ないよ。' },
    ],
    question: '服装の決まりはどうして変わりますか。',
    options: [
      '若い人に選ばれる会社にしたいから',
      '電気代を減らしたいから',
      '取引先に頼まれたから',
      '夏の軽装の効果がなかったから',
    ],
    answerIndex: 0,
    explanation:
      '部長明言「一番の狙いは採用なんだ」：說明會上學生反映服裝拘謹的公司顯得老派，公司希望「若い人に選んでもらえる会社にしたい」，這是放寬服裝規定的主因。省電費被「今の夏の軽装で十分効果が出ている」排除；客戶並沒有提出要求，只是女の人擔心失禮；夏季輕裝並非沒有效果，該選項與對話內容相反。',
    explanationEn:
      'The department head states plainly 「一番の狙いは採用なんだ」: students at job fairs say companies with stiff dress codes feel old-fashioned, and the firm wants to be 「若い人に選んでもらえる会社」 — attracting young talent is the real aim. Cutting electricity costs is ruled out because the current summer dress-down already delivers enough savings; the clients never requested the change (the woman merely worries about rudeness); and the summer policy did work, so saying it had no effect contradicts the dialogue.',
  },
  {
    id: 'n2-listening-pointo-015',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が来月の海外出張について話しています。' },
      { speaker: '男', text: '西さん、来月のベトナム出張、なくなったんだって？楽しみにしてたのに、残念だね。予算が削られたの？' },
      { speaker: '女', text: 'いえ、費用はもう承認されていたんです。' },
      { speaker: '男', text: 'じゃあ、ビザの手続きが間に合わなかったとか？' },
      { speaker: '女', text: '書類はとっくにそろえてありました。実は、見学する予定だった先方の工場が、設備の入れ替え工事に入ってしまって。来月いっぱいは中に入れないそうなんです。' },
      { speaker: '男', text: 'ああ、それじゃ行っても仕方ないね。' },
      { speaker: '女', text: 'ええ。打ち合わせだけオンラインで先に済ませて、工場の見学は工事が終わる再来月に、改めて出張することになりました。' },
    ],
    question: '女の人はどうして来月の出張に行かないことになりましたか。',
    options: [
      '先方の工場が工事中で見学できないから',
      '出張の予算が削られたから',
      'ビザの手続きが間に合わなかったから',
      '先方との打ち合わせがなくなったから',
    ],
    answerIndex: 0,
    explanation:
      '女の人說明主因：預定參觀的對方工廠進入設備更換工程，「来月いっぱいは中に入れない」，去了也看不到，所以下個月的出差取消。預算被「もう承認されていた」否定；簽證文件「とっくにそろえてありました」也不是問題；會議並沒有消失，而是改成先以線上進行，工廠參觀延到下下個月再出差，選項與事實不符。',
    explanationEn:
      'The woman explains the real cause: the client\'s factory they planned to tour has begun replacing its equipment and 「来月いっぱいは中に入れない」, so there is no point going next month. The budget was already approved, ruling that option out; the visa paperwork 「とっくにそろえてありました」, so it was never a problem; and the meeting itself was not canceled — it will simply be held online first, with the factory visit rescheduled for the month after next.',
  },
  {
    id: 'n2-listening-pointo-016',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が新しいプロジェクトのリーダーについて話しています。' },
      { speaker: '女', text: '課長、今度の新製品のプロジェクト、リーダーは中村さんに決まったそうですね。海外の会社とも組むから、英語力で選ばれたんですか。' },
      { speaker: '男', text: 'いや、英語だけなら中村より上の者もいるよ。通訳も付くしね。' },
      { speaker: '女', text: 'では、経験の長さでしょうか。' },
      { speaker: '男', text: '経験なら課内で一番若いくらいだ。決め手はね、調整力だよ。今度の計画は開発、営業、工場と、関わる部署が多いだろう。中村は前の仕事で、もめていた部署の間に入って、見事にまとめてくれたんだ。' },
      { speaker: '女', text: 'ああ、あの件ですか。確かにあれは中村さんでなければ、まとまらなかったでしょうね。' },
      { speaker: '男', text: 'そういうことだ。本人は指名されて驚いていたけどね。' },
    ],
    question: '中村さんはどうしてリーダーに選ばれましたか。',
    options: [
      '部署の間をまとめる調整力があるから',
      '英語力がだれよりも高いから',
      '課内でいちばん経験が長いから',
      '本人が強く希望したから',
    ],
    answerIndex: 0,
    explanation:
      '課長點名「決め手はね、調整力だよ」：這次計畫牽涉開發、營業、工廠多個部門，中村過去曾居中化解部門間的糾紛、漂亮收場，這是獲選主因。英語被「英語だけなら中村より上の者もいる」否定；經驗反而是「課内で一番若いくらい」；本人並未爭取，聽到指名還「驚いていた」，可見不是自己強烈希望。',
    explanationEn:
      'The section chief names the deciding factor: 「決め手はね、調整力だよ」 — the project spans development, sales, and the factory, and Nakamura once stepped in between quarreling departments and pulled them together brilliantly. English ability is denied with 「英語だけなら中村より上の者もいるよ」; far from being the most experienced, he is about the youngest in the section; and he never volunteered — he was surprised at being named himself.',
  },
]

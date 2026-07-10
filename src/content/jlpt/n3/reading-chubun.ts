import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n3-reading-chubun-001',
    passage:
      '私は長い間、夜遅くまで起きて仕事をする生活を続けていた。夜のほうが集中できると思っていたからだ。しかし最近、朝早く起きて仕事をするようにしたところ、同じ仕事が半分の時間で終わるようになった。\nなぜだろうと考えてみて、気がついたことがある。夜は「まだ時間がある」と思って、つい携帯を見たり、飲み物を用意したりしてしまう。一方、朝は家を出る時間が決まっているので、それまでに終わらせようという気持ちが自然に生まれるのだ。\nもちろん、夜のほうが集中できるという人もいるだろう。大切なのは、朝か夜かということではなく、「終わりの時間」を自分で決めることだと思う。時間に限りがあると感じたとき、人は本当の力を出せるのではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-chubun-001-q1',
        stem: '「気がついたこと」とあるが、どんなことか。',
        options: [
          '夜は時間があると思って別のことをしてしまうが、朝は終わりの時間があるので集中できるということ',
          '夜のほうが集中できると考えている人が、自分のまわりに多いということ',
          '朝は忙しくて、飲み物を用意する時間さえないということ',
          '携帯を見るのをやめれば、仕事の量が半分になるということ',
        ],
        answerIndex: 0,
        explanation:
          '第二段整段就是「気がついたこと」的內容：夜晚覺得「還有時間」而分心，早晨因為有出門時間這個期限，自然產生「在那之前做完」的心情。選項2「夜のほうが集中できる人」是第三段的讓步，不是筆者的發現；選項3、4 只是借用「飲み物」「携帯」「半分」等文中字眼，文章並沒有這樣說。',
        explanationEn:
          'The whole second paragraph is the content of 「気がついたこと」: at night the writer feels there is still time and gets distracted, while in the morning the fixed departure time naturally creates the urge to finish before it. Option 2, about people who concentrate better at night, is a concession made in the third paragraph, not the writer\'s discovery; options 3 and 4 merely recycle words from the text such as 「飲み物」, 「携帯」, and "half", saying things the passage never claims.',
      },
      {
        id: 'n3-reading-chubun-001-q2',
        stem: '筆者の仕事が朝は半分の時間で終わるのは、なぜか。',
        options: [
          '家を出る時間までに終わらせようという気持ちが生まれるから',
          '朝のほうが夜より体の調子がよく、頭がよく働くから',
          '朝にする仕事の量は、夜の半分に決められているから',
          '朝は携帯や飲み物が近くに置いていないから',
        ],
        answerIndex: 0,
        explanation:
          '因果在第二段末：早晨「家を出る時間が決まっている」→「それまでに終わらせようという気持ちが自然に生まれる」，所以效率提高。選項2 的身體狀況文中完全沒提；選項3 誤用「半分」——變成一半的是「時間」不是工作量；選項4 文中說的是夜晚「つい携帯を見たり」，並非早晨手邊沒有這些東西。',
        explanationEn:
          'The cause is given at the end of paragraph two: since 「家を出る時間が決まっている」 in the morning, 「それまでに終わらせようという気持ちが自然に生まれる」 — the fixed departure time creates the drive to finish, which boosts efficiency. Option 2 mentions physical condition, which the passage never discusses; option 3 misuses "half" — what is halved is the time, not the workload; option 4 twists the text, which says the writer idly checks the phone at night, not that these things are absent in the morning.',
      },
      {
        id: 'n3-reading-chubun-001-q3',
        stem: 'この文章で筆者がもっとも言いたいことは何か。',
        options: [
          '「終わりの時間」を自分で決めることが大切だ',
          'だれでも朝型の生活に変えたほうがいい',
          '夜に集中できる人は、本当の力を出せない',
          '仕事中は携帯を見ないようにするべきだ',
        ],
        answerIndex: 0,
        explanation:
          '主旨在最後一段：「大切なのは、朝か夜かということではなく、『終わりの時間』を自分で決めることだ」。選項2 正好被「朝か夜かということではなく」否定；選項3 曲解了讓步句「夜のほうが集中できるという人もいるだろう」，筆者並未貶低夜型的人；選項4 的「携帯」只是舉例說明夜晚容易分心，不是文章的結論。',
        explanationEn:
          'The main point sits in the final paragraph: what matters is not morning versus night but deciding your own finishing time — 「大切なのは、朝か夜かということではなく」. Option 2 is directly negated by that very phrase; option 3 distorts the concessive line 「夜のほうが集中できるという人もいるだろう」 — the writer never belittles night people; option 4 elevates the phone, which is only an example of nighttime distraction, into the conclusion of the essay.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n3-reading-chubun-002',
    passage:
      'スーパーでは、閉店の時間が近づくと、弁当や総菜に値引きのシールがはられる。それを待って買い物をする客も少なくない。安く買えるのだから、客にとってはありがたいことだ。\nしかし、店にとっても、値引きは決して損なだけの方法ではないという。売れ残った食品は、捨てるのにもお金がかかる。値引きをして売ってしまえば、捨てる量が減り、その分の費用もかからない。つまり、安くしても売ったほうが得になる場合が多いのだ。\nさらに最近は、値引きの商品を選ぶことを「食品を無駄にしない行動」だと考える人も増えている。以前は、値引き品を買うのは恥ずかしいと感じる人もいたが、今では環境のためによいことだと、堂々と選ばれるようになった。値引きシールの意味は、時代とともに変わってきたと言えるだろう。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-chubun-002-q1',
        stem: '「その分の費用」とは、何の費用か。',
        options: [
          '売れ残った食品を捨てるためにかかる費用',
          '商品に値引きのシールをはるためにかかる費用',
          '弁当や総菜を新しく作るためにかかる費用',
          '閉店後に店の中を片づけるためにかかる費用',
        ],
        answerIndex: 0,
        explanation:
          '指示詞「その分」承接前一句「売れ残った食品は、捨てるのにもお金がかかる」：降價賣掉後要丟棄的量減少，丟棄的費用也就省下來了。選項2 借用文中的「シール」、選項3 借用「弁当や総菜」、選項4 借用「閉店」等字眼，但文章都沒有提到這些費用，是典型的文中字眼陷阱。',
        explanationEn:
          'The demonstrative 「その分」 points back to the previous sentence, 「売れ残った食品は、捨てるのにもお金がかかる」: selling items at a discount reduces the amount thrown away, so the disposal cost is saved. Option 2 borrows 「シール」 from the text, option 3 borrows 「弁当や総菜」, and option 4 borrows the word for closing time, but the passage never mentions any of those costs — a classic trap of recycled wording.',
      },
      {
        id: 'n3-reading-chubun-002-q2',
        stem: '値引きが店にとって損なだけではないのは、なぜか。',
        options: [
          '捨てる食品が減って、捨てるための費用がかからなくなるから',
          '値引きを待つ客が増えて、店が有名になるから',
          '食品を無駄にしない店として、環境のためのお金がもらえるから',
          '売れ残りがなくなり、閉店の時間を早くできるから',
        ],
        answerIndex: 0,
        explanation:
          '理由在第二段：賣剩的食品連丟棄都要花錢，降價賣掉可以減少丟棄量、省下費用，所以「安くしても売ったほうが得になる」。選項2 的「値引きを待つ客」文中確有出現，但那是說明顧客的行為，和店家不虧損的理由無關；選項3 把「環境のためによい」偷換成可以拿到錢；選項4 的提早打烊文中沒有提到。',
        explanationEn:
          'The reason is in paragraph two: unsold food costs money even to throw away, so discounting it reduces waste and saves that cost — hence 「安くしても売ったほうが得になる」. Option 2\'s customers waiting for discounts do appear in the text, but only to describe shopper behavior, not why the store avoids a loss; option 3 twists "good for the environment" into the store receiving money; option 4\'s earlier closing time is mentioned nowhere.',
      },
      {
        id: 'n3-reading-chubun-002-q3',
        stem: '値引き品を買う人の気持ちは、どのように変わったと言っているか。',
        options: [
          '恥ずかしいと感じていたのが、環境によいことだと堂々と選ぶようになった',
          '環境のために買っていたのが、安さのために買うようになった',
          'ありがたいと思っていたのが、恥ずかしいと感じるようになった',
          '値引き品は質が悪いと考えて、だんだん買わなくなった',
        ],
        answerIndex: 0,
        explanation:
          '第三段明確對比：「以前は…恥ずかしいと感じる人もいたが、今では環境のためによいことだと、堂々と選ばれるようになった」。選項2 把前後順序整個顛倒，是常見的因果反轉陷阱；選項3 也是把變化方向弄反；選項4 的「質が悪い」文中完全沒有提到，且與「買う人が増えている」的敘述矛盾。',
        explanationEn:
          'Paragraph three draws the contrast explicitly: some people used to feel embarrassed buying discounted items, but now they choose them openly as something good for the environment — 「堂々と選ばれるようになった」. Option 2 reverses the before-and-after order, a common inversion trap; option 3 likewise flips the direction of the change; option 4\'s claim about poor quality appears nowhere and contradicts the statement that more people are buying these items.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n3-reading-chubun-003',
    passage:
      '先日、部屋の整理をしていたら、学生時代に友人からもらった手紙が出てきた。読み返してみると、その時の友人の声や、手紙を読んだ場所まで思い出されて、なつかしい気持ちになった。\n今はメールやメッセージで、簡単に連絡が取れる。便利になったことは間違いない。しかし、画面の中の言葉は、読んだあとに残らない。何年もたってから読み返して、当時のことを思い出すということは、ほとんどないだろう。\n手紙は、書くのにも届くのにも時間がかかる。だが、その時間こそが、相手のことをゆっくり考える時間なのだと思う。急ぎの用事はメールで、ゆっくり伝えたい気持ちは手紙で。これからは、そんなふうに使い分けていきたいと思っている。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-chubun-003-q1',
        stem: '「その時間」とは、どんな時間か。',
        options: [
          '手紙を書いたり、手紙が届いたりするのにかかる時間',
          '部屋の整理をするのにかかる時間',
          '学生時代のことをなつかしく思い出す時間',
          'メールやメッセージで連絡を取る時間',
        ],
        answerIndex: 0,
        explanation:
          '指示詞「その時間」承接前一句「手紙は、書くのにも届くのにも時間がかかる」，筆者認為正是這段時間才是「相手のことをゆっくり考える時間」。選項2 的「部屋の整理」、選項3 的「学生時代」都是第一段開頭的字眼，與這裡的指涉無關；選項4 更相反——文中說 e-mail 的特點是「簡単に連絡が取れる」，不需要時間。',
        explanationEn:
          'The demonstrative 「その時間」 refers to the preceding sentence, 「手紙は、書くのにも届くのにも時間がかかる」 — and the writer argues that this very time is when one thinks slowly about the other person. Option 2\'s tidying the room and option 3\'s school days are wording from the opening paragraph, unrelated to this reference; option 4 is the exact opposite, since the passage highlights that e-mail lets you reach people 「簡単に」, taking no time.',
      },
      {
        id: 'n3-reading-chubun-003-q2',
        stem: 'この文章で筆者が言いたいことは何か。',
        options: [
          '急ぎの連絡はメールでして、ゆっくり伝えたい気持ちは手紙で伝えたい',
          'メールは便利なので、手紙はもう書く必要がない',
          '手紙は時間がかかるので、急ぎの用事に向いている',
          '昔の手紙は、読み返さずに整理して捨てたほうがいい',
        ],
        answerIndex: 0,
        explanation:
          '結論在最後：「急ぎの用事はメールで、ゆっくり伝えたい気持ちは手紙で」使い分けたい，也就是兩者各有用途。選項2 只取「便利になった」一句，忽略了後半對手紙價值的肯定；選項3 把用途配反了——費時的手紙正好不適合急事；選項4 與筆者重讀舊信而感到懷念的敘述完全相反。',
        explanationEn:
          'The conclusion comes at the end: 「急ぎの用事はメールで、ゆっくり伝えたい気持ちは手紙で」 — the writer wants to use each medium for what it does best. Option 2 seizes only on the remark that things became convenient and ignores the later affirmation of letters\' value; option 3 assigns the roles backwards, since time-consuming letters are precisely unsuited to urgent business; option 4 flatly contradicts the writer\'s fond experience of rereading old letters.',
      },
    ],
  },
]

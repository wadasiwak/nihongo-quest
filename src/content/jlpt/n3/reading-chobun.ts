import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n3-reading-chobun-001',
    passageTitle: '手書きのすすめ',
    passage:
      '私は会社で「まだ紙のノートを使っているんですか」と後輩に驚かれたことがある。会議の記録も予定の管理も、今はスマートフォン一つでできる時代だ。実際、私も一度はすべての記録をスマートフォンに移してみた。入力は速いし、検索も簡単で、確かに便利だと感じた。\nところが、しばらくして気がついたことがある。画面に打ち込んだ内容を、私はほとんど覚えていないのだ。紙に書いていたころは、書いた場所やページの汚れまで含めて内容を思い出せたのに、データにしたとたん、記録は「あとで探せばいいもの」になり、頭の中から消えてしまった。\n考えてみれば当然かもしれない。手で書くときは、時間がかかる分、何を残すか選ばなければならない。要点を短くまとめようとして、書きながら内容を整理している。つまり、手書きの面倒くささそのものが、頭を働かせていたのである。入力が速くなった分だけ、考える時間も減っていたわけだ。\nもちろん、スマートフォンをやめるつもりはない。調べ物や連絡には、これほど便利な道具はないだろう。ただ、道具は速ければ速いほどいいというものではないと思う。じっくり考えたいことは紙に書き、すぐ処理したいことはスマートフォンに任せる。目的によって道具を使い分けることこそ、本当の意味で道具を使いこなすということではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-chobun-001-q1',
        stem: '記録をすべてスマートフォンに移したとき、筆者は最初どう感じたか。',
        options: [
          '入力も検索も簡単で、便利だと感じた。',
          '紙のノートより使いにくいと感じた。',
          '内容が前よりよく覚えられると感じた。',
          '後輩に笑われそうで恥ずかしいと感じた。',
        ],
        answerIndex: 0,
        explanation:
          '第一段末尾寫「入力は速いし、検索も簡単で、確かに便利だと感じた」，可見筆者一開始的感想是「方便」。「使いにくい」與此相反；「よく覚えられる」更是顛倒了後文「ほとんど覚えていない」的事實；「恥ずかしい」文中沒有提到，後輩只是感到驚訝而已。',
        explanationEn:
          'The first paragraph ends with 「入力は速いし、検索も簡単で、確かに便利だと感じた」, so the writer\'s initial impression was that the smartphone was convenient. "Harder to use than a paper notebook" says the opposite; "could remember the content better" inverts the later admission that he remembered almost nothing; feeling embarrassed is never mentioned — the junior colleague was merely surprised.',
      },
      {
        id: 'n3-reading-chobun-001-q2',
        stem: '筆者が「気がついたこと」とは何か。',
        options: [
          'スマートフォンに打ち込んだ内容をほとんど覚えていないこと',
          '紙のノートに書いた内容をすっかり忘れてしまったこと',
          'スマートフォンでは記録を検索できないこと',
          'ページの汚れでノートが読めなくなっていたこと',
        ],
        answerIndex: 0,
        explanation:
          '「気がついた」的內容緊接在後：「画面に打ち込んだ内容を、私はほとんど覚えていないのだ」，也就是打進手機的內容記不住。相反地，紙本時代連「書いた場所やページの汚れ」都能幫助回想，所以「紙に書いた内容を忘れた」正好說反；「検索できない」與前文「検索も簡単」矛盾；「ノートが読めない」是把文中字眼胡亂拼湊，文章並無此事。',
        explanationEn:
          'What the writer noticed follows immediately: 「画面に打ち込んだ内容を、私はほとんど覚えていないのだ」 — he barely remembers anything he typed into the phone. By contrast, in the paper-notebook days even 「書いた場所やページの汚れ」 helped him recall the content, so "forgot what he wrote on paper" says the reverse; "cannot search records on a smartphone" contradicts the earlier remark that searching is easy; "the notebook became unreadable" is a jumble of words from the text describing something that never happens.',
      },
      {
        id: 'n3-reading-chobun-001-q3',
        stem: '筆者によると、手書きが頭を働かせるのはなぜか。',
        options: [
          '時間がかかる分、何を残すか選び、書きながら内容を整理するから',
          '書いた場所やページの汚れを覚えるのに集中力が必要だから',
          '入力より速く書こうとして、頭の回転が速くなるから',
          '面倒な作業をがまんすることで、心が鍛えられるから',
        ],
        answerIndex: 0,
        explanation:
          '第三段說明理由：手寫「時間がかかる分、何を残すか選ばなければならない」，並且「書きながら内容を整理している」，所以麻煩本身讓頭腦運轉。「場所や汚れを覚える」是回想時的線索，不是動腦的原因；手寫明明比輸入慢，「入力より速く書こうとする」不合文意；「心が鍛えられる」（磨練心志）文中完全沒有提及。',
        explanationEn:
          'Paragraph three gives the reason: because handwriting 「時間がかかる分、何を残すか選ばなければならない」, and the writer organizes the content while writing — the very inconvenience is what makes the brain work. Remembering the place and the smudges on the page is a cue for recall, not the reason the mind engages; handwriting is slower than typing, so "trying to write faster than typing" contradicts the text; "training one\'s spirit" through tedious work is never mentioned at all.',
      },
      {
        id: 'n3-reading-chobun-001-q4',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '目的に合わせて、紙とスマートフォンを使い分けるべきだ。',
          'スマートフォンをやめて、紙のノートに戻るべきだ。',
          '道具は入力や検索が速いものほど優れている。',
          '大切な記録は、あとで探せるようにデータで残すべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '結論在最後一段：「目的によって道具を使い分けることこそ、本当の意味で道具を使いこなすということではないだろうか」，即依目的區分使用紙本與手機。筆者明言「スマートフォンをやめるつもりはない」，所以「紙に戻るべきだ」過頭了；「速いほど優れている」被「速ければ速いほどいいというものではない」直接否定；「データで残すべきだ」只是文中描述的現象，並非主張。',
        explanationEn:
          'The conclusion is in the last paragraph: 「目的によって道具を使い分けることこそ、本当の意味で道具を使いこなすということではないだろうか」 — using paper and smartphone according to purpose is truly mastering one\'s tools. The writer explicitly says 「スマートフォンをやめるつもりはない」, so "should go back to paper" overshoots; "the faster the tool, the better" is directly denied by 「速ければ速いほどいいというものではない」; "should keep records as data" is only a phenomenon the passage describes, not the writer\'s claim.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n3-reading-chobun-002',
    passageTitle: '食品ロスを減らすために',
    passage:
      'まだ食べられるのに捨てられてしまう食品は「食品ロス」と呼ばれ、日本では年間数百万トンにもなるという。食品ロスと聞くと、店で売れ残った弁当などを思い浮かべる人が多いが、実は全体の半分近くは家庭から出ている。つまり、この問題は私たちの毎日の生活と深く関係しているのである。\n家庭で食品が捨てられる大きな原因の一つが、期限表示への誤解だ。食品の袋には「消費期限」か「賞味期限」のどちらかが書かれている。消費期限は「安全に食べられる期限」で、これを過ぎたものは食べないほうがいい。一方、賞味期限は「おいしく食べられる期限」であり、過ぎたからといって、すぐに食べられなくなるわけではない。ところが、この二つの違いを知らずに、賞味期限が一日過ぎただけで捨ててしまう人が少なくないそうだ。\nもう一つの原因は買いすぎである。安売りのたびにまとめて買い、使い切れないまま冷蔵庫の奥で忘れてしまう。これを防ぐには、買い物に行く前に冷蔵庫の中を確認し、必要な分だけ買うことが大切だ。\n国や企業の努力ももちろん必要だが、家庭から出る分は、私たちの行動しだいで今日からでも減らせる。期限表示の意味を正しく知ること、そして買いすぎないこと。そうした一人一人の小さな心がけこそが、この大きな問題を解決する第一歩になるのではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-chobun-002-q1',
        stem: '食品ロスが私たちの生活と深く関係していると筆者が言うのはなぜか。',
        options: [
          '食品ロス全体の半分近くが家庭から出ているから',
          '店で売れ残った弁当を買う人が多いから',
          '日本人は毎日必ず食品を捨てているから',
          '食品ロスのほとんどは店から出ているから',
        ],
        answerIndex: 0,
        explanation:
          '第一段指出，多數人以為食品浪費來自店家，「実は全体の半分近くは家庭から出ている」，接著用「つまり」導出「與我們的生活深切相關」，因果關係明確。「ほとんどは店から出ている」與文意相反；「売れ残った弁当を買う」文中只是舉例大家的印象，不是理由；「毎日必ず捨てている」文中並沒有這種說法。',
        explanationEn:
          'The first paragraph notes that most people picture stores as the source of food waste, but 「実は全体の半分近くは家庭から出ている」, and 「つまり」 then draws the conclusion that the problem is deeply tied to our daily lives — the reasoning is explicit. "Most of it comes from stores" reverses the text; "many people buy unsold boxed lunches" is only the common image given as an example, not the reason; "Japanese people throw away food every single day" is stated nowhere.',
      },
      {
        id: 'n3-reading-chobun-002-q2',
        stem: '「賞味期限」について、この文章の内容と合っているものはどれか。',
        options: [
          'おいしく食べられる期限で、過ぎてもすぐに食べられなくなるわけではない。',
          '安全に食べられる期限で、過ぎたものは食べないほうがいい。',
          '過ぎたら一日以内に必ず捨てなければならない期限である。',
          '消費期限と同じ意味で、どちらが書かれていても違いはない。',
        ],
        answerIndex: 0,
        explanation:
          '第二段明確定義：賞味期限是「おいしく食べられる期限」，而且「過ぎたからといって、すぐに食べられなくなるわけではない」。「安全に食べられる期限」是消費期限的定義，正是文章要澄清的混淆點；「必ず捨てなければならない」把「有人過一天就丟」的錯誤行為當成規定；文章通篇在講兩者的差異，「同じ意味」顯然不對。',
        explanationEn:
          'Paragraph two defines it clearly: 「賞味期限」 is the deadline for eating food at its best, and 「過ぎたからといって、すぐに食べられなくなるわけではない」 — passing it does not make food immediately inedible. "The deadline for eating safely" is the definition of 「消費期限」, exactly the confusion the passage sets out to clear up; "must be thrown away within a day" turns the mistaken behavior of some people into a rule; and since the whole passage explains the difference between the two labels, "they mean the same thing" is plainly wrong.',
      },
      {
        id: 'n3-reading-chobun-002-q3',
        stem: '買いすぎを防ぐ方法として、筆者が挙げているのはどれか。',
        options: [
          '買い物に行く前に冷蔵庫の中を確認し、必要な分だけ買う。',
          '安売りの日にまとめて買って、冷蔵庫の奥にしまっておく。',
          '賞味期限の長い食品だけを選んで買うようにする。',
          '食品を買う回数を減らして、外食を増やすようにする。',
        ],
        answerIndex: 0,
        explanation:
          '第三段寫道「買い物に行く前に冷蔵庫の中を確認し、必要な分だけ買うことが大切だ」，即出門購物前先確認冰箱、只買需要的量。「安売りの日にまとめて買う」正是文中造成浪費的行為本身，不是對策；「賞味期限の長い食品だけ選ぶ」和「外食を増やす」文中都沒有提到，屬於無中生有的選項。',
        explanationEn:
          'Paragraph three states 「買い物に行く前に冷蔵庫の中を確認し、必要な分だけ買うことが大切だ」 — check the refrigerator before shopping and buy only what you need. Stocking up on bargain days is precisely the wasteful behavior the passage describes, not the remedy; choosing only foods with long best-before dates and eating out more often appear nowhere in the text — they are fabricated options.',
      },
      {
        id: 'n3-reading-chobun-002-q4',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '一人一人の小さな心がけが、食品ロスを減らす第一歩になる。',
          '食品ロスの解決は、国や企業の努力に任せるべきだ。',
          '期限が過ぎた食品は、安全のためすぐに捨てるべきだ。',
          '家庭から出る食品ロスを減らすことは、ほぼ不可能である。',
        ],
        answerIndex: 0,
        explanation:
          '結論段寫「一人一人の小さな心がけこそが、この大きな問題を解決する第一歩になるのではないだろうか」，強調個人的小小用心。筆者說國家與企業的努力「も必要」，但重點是家庭部分「私たちの行動しだいで今日からでも減らせる」，所以「任せるべきだ」與「ほぼ不可能」都不對；「すぐに捨てるべきだ」更是與澄清賞味期限誤解的整段內容背道而馳。',
        explanationEn:
          'The closing paragraph says 「一人一人の小さな心がけこそが、この大きな問題を解決する第一歩になるのではないだろうか」, stressing each individual\'s small everyday care. The writer grants that government and corporate efforts are also needed, but the point is that household waste 「私たちの行動しだいで今日からでも減らせる」, so both "should be left to the government and companies" and "nearly impossible" are wrong; "should throw expired food away immediately" runs against the entire paragraph clearing up the best-before-date misunderstanding.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n3-reading-chobun-003',
    passageTitle: '運動会がくれたもの',
    passage:
      '今のマンションに住み始めて三年になるが、私は近所の人の顔をほとんど知らなかった。あいさつをするのは、同じ階の田中さんぐらいで、それ以外の人とは、エレベーターで会っても黙ったままだった。仕事が忙しいのだから仕方がない、と自分では思っていた。\nそんな私が、この秋、町内の運動会に参加した。きっかけは、娘が学校で誘いのプリントをもらってきて、「出たい」と言い出したことだ。正直なところ、私は面倒だと思ったが、楽しみにしている娘のためだと思って、親子で申し込んだ。\nところが、行ってみると、予想とはまったく違った。綱引きで隣に並んだのは、いつもエレベーターで黙って会うだけだった男性だった。一緒に汗をかいて、転びそうになって笑い合ううちに、自然に話せるようになった。帰るころには、何人もの人と「また来年も出ましょう」とあいさつを交わしていた。\nそれからは、町で近所の人に会うと、声をかけられることが増えた。娘も、運動会で知り合った友達と公園で遊ぶようになった。私はどの競技で何位になったか、ほとんど覚えていない。それでも、あの日、順位より大切なものをもらった気がしている。地域の行事は、忙しい人こそ、一度出てみる価値があると思う。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-chobun-003-q1',
        stem: '運動会に出る前、筆者と近所の人との関係はどうだったか。',
        options: [
          '同じ階の田中さん以外とは、ほとんど付き合いがなかった。',
          'エレベーターで会う人とは、よく話をしていた。',
          '田中さんとも、あいさつをしたことがなかった。',
          '娘の友達の親とだけ、親しくしていた。',
        ],
        answerIndex: 0,
        explanation:
          '第一段寫道，會打招呼的「同じ階の田中さんぐらいで、それ以外の人とは、エレベーターで会っても黙ったままだった」，可見交往僅止於田中先生。「よく話をしていた」與「黙ったまま」相反；「田中さんとも、あいさつをしたことがなかった」錯，田中先生正是少數會打招呼的對象；「娘の友達の親」錯，女兒是在運動會之後才交到附近的朋友。',
        explanationEn:
          'Paragraph one says the only neighbor he greeted was 「同じ階の田中さんぐらい」, and with everyone else he stayed silent even in the elevator — his neighborhood ties stopped at Mr. Tanaka. "Often chatted with people in the elevator" contradicts 「黙ったままだった」; "had never even greeted Mr. Tanaka" is wrong since Tanaka was precisely the one person he did greet; "was close only with the parents of his daughter\'s friends" fails because the daughter made local friends only after the sports day.',
      },
      {
        id: 'n3-reading-chobun-003-q2',
        stem: '筆者が運動会に参加したきっかけは何か。',
        options: [
          '娘が誘いのプリントをもらってきて、出たいと言ったこと',
          '近所の人と知り合いになりたかったこと',
          'いつもエレベーターで会う男性に誘われたこと',
          '田中さんに親子での参加を頼まれたこと',
        ],
        answerIndex: 0,
        explanation:
          '第二段明言「きっかけは、娘が学校で誘いのプリントをもらってきて、『出たい』と言い出したことだ」，而且筆者本人覺得麻煩，是為了女兒才報名。「知り合いになりたかった」錯，與鄰居熟起來是參加後意外的收穫，不是動機；「男性に誘われた」錯，那位男性是在綱引き才真正認識的；「田中さんに頼まれた」文中完全沒有提到。',
        explanationEn:
          'Paragraph two states it outright: 「きっかけは、娘が学校で誘いのプリントをもらってきて、『出たい』と言い出したことだ」 — and the writer, who found it a bother, signed up for his daughter\'s sake. "Wanted to get to know the neighbors" is wrong: those ties were an unexpected reward after joining, not his motive; "was invited by the man from the elevator" is wrong since he only truly met that man during the tug-of-war; being asked by Mr. Tanaka appears nowhere in the text.',
      },
      {
        id: 'n3-reading-chobun-003-q3',
        stem: '「順位より大切なもの」とは、何だと考えられるか。',
        options: [
          '近所の人と声をかけ合えるようになったこと',
          '綱引きで一位になったこと',
          '運動をして体が丈夫になったこと',
          '来年の運動会に必ず出られる権利',
        ],
        answerIndex: 0,
        explanation:
          '運動會之後「町で近所の人に会うと、声をかけられることが増えた」，女兒也交到朋友，因此「順位より大切なもの」指的是與鄰居之間的交流與連結。「一位になった」錯，筆者說自己幾乎不記得名次，且與「順位より」的語意矛盾；「体が丈夫になった」錯，文中只提到一起流汗，健康不是重點；「来年の…権利」是無中生有，「また来年も」只是道別的招呼語。',
        explanationEn:
          'After the sports day, neighbors began calling out to him around town and his daughter made friends, so 「順位より大切なもの」 refers to the new connection with his neighbors. "Winning first place in the tug-of-war" is wrong — he says he barely remembers any rankings, and it contradicts the very phrase "more important than rank"; "becoming physically stronger" is wrong since sweating together is mentioned but health is not the point; a guaranteed right to enter next year is fabricated — 「また来年も」 was merely a parting greeting.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n3-reading-chobun-004',
    passageTitle: '朝ごはんという合図',
    passage:
      '朝ごはんを食べない人が増えているという。ある調査によると、二十代では四人に一人が、ほとんど毎朝、何も食べずに家を出るそうだ。理由として多いのは、「時間がない」「朝は食欲がない」「少しでも長く寝ていたい」というものだ。\nしかし、朝ごはんには大切な働きがある。人の体は、寝ている間もエネルギーを使い続けている。だから朝起きたときの体は、車で言えば、ガソリンが少なくなった状態なのだ。朝ごはんは、そこにエネルギーを入れると同時に、体と頭に「一日が始まった」と知らせる合図にもなる。朝食を取っている学生のほうが成績がよいという調査結果もあるそうだ。\nとはいえ、「朝は食欲がない」という人に、無理に食べろと言っても続かないだろう。実は、朝、食欲がないのは、夜遅い時間に食事をしていることが原因である場合が多いという。夕食の時間を少し早くするだけで、朝、自然におなかがすくようになるのだ。また、最初からきちんとした食事を作る必要はない。バナナ一本と牛乳一杯からでも十分だ。\n朝ごはんは、一日の体のリズムを作るスイッチだ。「食べる時間がない」とあきらめるのではなく、食べるために少しだけ早く起きる。その小さな習慣が、午前中の体と頭の調子を変えてくれるはずだ。',
    explanation: '',
    questions: [
      {
        id: 'n3-reading-chobun-004-q1',
        stem: '朝ごはんを食べない理由として、この文章で挙げられていないものはどれか。',
        options: [
          '朝ごはんを作るとお金がかかるから',
          '食べる時間がないから',
          '朝は食欲がないから',
          '少しでも長く寝ていたいから',
        ],
        answerIndex: 0,
        explanation:
          '第一段列出的理由是「時間がない」「朝は食欲がない」「少しでも長く寝ていたい」三項，其餘三個選項都在其中。「お金がかかるから」文中完全沒有出現，所以是「挙げられていないもの」，為正解。此題問的是「沒有被提到」的選項，要小心別把文中確實出現的理由選成答案。',
        explanationEn:
          'The reasons listed in paragraph one are 「時間がない」, 「朝は食欲がない」, and 「少しでも長く寝ていたい」 — the other three options all appear there. Cost, however, is never mentioned anywhere in the passage, so "because making breakfast costs money" is the one NOT given, making it correct. Note that this question asks for the reason that is absent, so be careful not to pick one of the reasons the text actually states.',
      },
      {
        id: 'n3-reading-chobun-004-q2',
        stem: '「ガソリンが少なくなった状態」とは、どんな状態か。',
        options: [
          '寝ている間にエネルギーが使われて、体のエネルギーが足りなくなった状態',
          '車を長く運転して、体が疲れてしまった状態',
          '夜遅くに食事をして、おなかがいっぱいの状態',
          '朝ごはんを食べすぎて、眠くなってしまった状態',
        ],
        answerIndex: 0,
        explanation:
          '前一句說「人の体は、寝ている間もエネルギーを使い続けている。だから朝起きたときの体は…」，把身體比喻成汽車、能量比喻成汽油：睡眠期間持續消耗，早上起床時能量所剩不多。「車を運転して疲れた」是把比喻當成真的開車；「おなかがいっぱい」正好相反，那是「朝食欲がない」的原因段落的內容；「食べすぎて眠くなった」文中沒有這種敘述。',
        explanationEn:
          'The preceding sentence says 「人の体は、寝ている間もエネルギーを使い続けている」, comparing the body to a car and energy to gasoline: fuel keeps burning during sleep, so the tank is low by morning. "Tired from driving a long time" takes the metaphor literally as actual driving; "full from a late-night meal" is the opposite state and belongs to the paragraph explaining why people lack appetite; "sleepy from eating too much breakfast" appears nowhere in the passage.',
      },
      {
        id: 'n3-reading-chobun-004-q3',
        stem: '朝、食欲がない人に対して、筆者はどうすればいいと言っているか。',
        options: [
          '夕食の時間を早くして、簡単な物から食べ始めればいい。',
          '食欲がなくても、無理をしてきちんとした食事を取るべきだ。',
          '朝は何も食べないで、昼にたくさん食べればいい。',
          '成績を上げるために、食べる前に勉強するべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '第三段給出兩個建議：「夕食の時間を少し早くするだけで、朝、自然におなかがすくようになる」、「バナナ一本と牛乳一杯からでも十分だ」，即提早晚餐、從簡單的食物開始。「無理をして…取るべきだ」被「無理に食べろと言っても続かないだろう」否定；「昼にたくさん食べればいい」文中沒有提到；「食べる前に勉強する」是亂用文中「成績」一詞，文章只說吃早餐的學生成績較好。',
        explanationEn:
          'Paragraph three offers two suggestions: 「夕食の時間を少し早くするだけで、朝、自然におなかがすくようになる」, and that 「バナナ一本と牛乳一杯からでも十分だ」 — eat dinner earlier and start with something simple. "Force yourself to eat a proper meal" is denied by the line that forcing people 「続かないだろう」; eating a big lunch instead is never suggested; and "study before eating" misuses the word "grades" — the passage only reports that students who eat breakfast tend to do better.',
      },
    ],
  },
]

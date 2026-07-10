import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n2-listening-kadai-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が来週の海外出張について話しています。' },
      { speaker: '女', text: '高橋くん、シンガポール出張の準備、進んでる？プレゼン資料はもうできた？' },
      { speaker: '男', text: '日本語版は完成したんですが、英語版の翻訳がまだ途中でして。' },
      { speaker: '女', text: '翻訳はそんなに急がなくていいわ。現地のスタッフがチェックしてくれることになったから、送るのは木曜で間に合うって。' },
      { speaker: '男', text: '助かります。あと、先方にお渡しするサンプルなんですが、まだ倉庫から届いていなくて。' },
      { speaker: '女', text: 'え、それは困るわね。明日の便で送らないと間に合わないから、すぐ倉庫に発送状況を確認して。' },
      { speaker: '男', text: 'わかりました。航空券の控えの印刷もしておきましょうか。' },
      { speaker: '女', text: 'それは私が総務からもらってくるから大丈夫。じゃ、頼んだわよ。' },
      { speaker: '男', text: 'はい、ただちに連絡します。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: [
      '倉庫にサンプルの発送状況を確認する',
      '資料の英語版の翻訳を仕上げる',
      '航空券の控えを印刷する',
      '現地のスタッフに資料を送る',
    ],
    answerIndex: 0,
    explanation:
      '樣品還沒從倉庫送到，女の人指示「すぐ倉庫に発送状況を確認して」，男の人也回答「ただちに連絡します」，所以第一件事是向倉庫確認。翻譯被「急がなくていい」延後，寄給當地員工是週四前即可，順序都在後面；機票存根是女の人自己去總務拿，不是他的工作。',
    explanationEn:
      'The samples have not arrived from the warehouse yet, and the woman instructs him with 「すぐ倉庫に発送状況を確認して」; he answers 「ただちに連絡します」, so his first task is to check the shipping status with the warehouse. The translation was deprioritized with 「急がなくていい」, sending materials to the local staff only needs to happen by Thursday, and the flight ticket copies are something the woman will get from general affairs herself, so none of those come first.',
  },
  {
    id: 'n2-listening-kadai-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が新商品の企画書について話しています。' },
      { speaker: '男', text: '佐々木さん、昨日出してもらった企画書、部長に見せたら、何か所か直してほしいところがあるそうだよ。' },
      { speaker: '女', text: 'そうですか。どこを直せばよろしいでしょうか。' },
      { speaker: '男', text: 'まず、三ページ目の売上予測ね。去年のデータのままになってるから、最新のものに差し替えてほしいって。' },
      { speaker: '女', text: '申し訳ありません、すぐ直します。デザイン案の写真も替えたほうがいいでしょうか。' },
      { speaker: '男', text: '写真はこのままでいいそうだ。あと、競合他社の分析も加えてほしいと言っていたけど、それは来週の会議までで構わないって。' },
      { speaker: '女', text: 'わかりました。では、データを直したら、もう一度部長にお出しすればいいですか。' },
      { speaker: '男', text: 'いや、提出する前に僕が確認するから、できたら持ってきて。' },
      { speaker: '女', text: 'はい、承知しました。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: [
      '売上予測のデータを最新のものに差し替える',
      'デザイン案の写真を差し替える',
      '競合他社の分析を書き加える',
      '企画書を部長に提出する',
    ],
    answerIndex: 0,
    explanation:
      '部長指出銷售預測還是去年的資料，要求換成最新版，女の人也說「すぐ直します」，所以第一步是更新資料。照片被「このままでいい」否定，不必換；競爭對手分析在下週會議前補上即可，排在後面；重新提交前還要先給男の人確認，更不是第一步。',
    explanationEn:
      'The department head pointed out that the sales forecast still uses last year\'s data and asked for it to be replaced with the latest figures; the woman says 「すぐ直します」, so updating that data is her first step. The photos were rejected as unnecessary with 「このままでいい」, the competitor analysis only needs to be added before next week\'s meeting, and before resubmitting she must first show the document to the man for checking, so submission is even further down the line.',
  },
  {
    id: 'n2-listening-kadai-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人がお客様からのクレームについて話しています。' },
      { speaker: '女', text: '課長、先ほどお客様から、届いた商品の色が注文と違うというお電話がありました。' },
      { speaker: '男', text: 'それは申し訳ないことをしたね。それで、どう対応したの？' },
      { speaker: '女', text: 'ひとまずお詫びして、確認のうえ折り返しご連絡すると申し上げました。' },
      { speaker: '男', text: 'じゃあ、まず出荷記録を調べて、こちらのミスかどうか確かめてくれる？正式な謝罪の連絡はそれからだ。' },
      { speaker: '女', text: 'わかりました。代わりの商品も手配しておきましょうか。' },
      { speaker: '男', text: '手配は原因がはっきりしてからでいい。ああ、本社への報告書は僕が上げておくから、君は書かなくていいよ。' },
      { speaker: '女', text: '承知しました。では、すぐに調べます。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: [
      '出荷記録を調べる',
      'お客様に謝罪の電話をかける',
      '代わりの商品を手配する',
      '本社に報告書を出す',
    ],
    answerIndex: 0,
    explanation:
      '課長指示「まず出荷記録を調べて」確認是否為己方疏失，女の人最後也說「すぐに調べます」，所以第一步是查出貨紀錄。正式道歉電話被「それからだ」排在調查之後；替代商品的安排要等原因確定；給總公司的報告書課長說由他自己處理，不是女の人的工作。',
    explanationEn:
      'The section chief instructs 「まず出荷記録を調べて」 to determine whether the mistake was on their side, and the woman closes with 「すぐに調べます」, so checking the shipping records comes first. The formal apology call is explicitly placed after the investigation with 「それからだ」, arranging a replacement product must wait until the cause is clear, and the report to headquarters is something the chief says he will handle himself.',
  },
  {
    id: 'n2-listening-kadai-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '展示会の会場で男の人と女の人が設営の準備をしています。' },
      { speaker: '男', text: '中村さん、ブースの看板は業者さんがもう取り付けてくれたね。次はパンフレットを並べようか。' },
      { speaker: '女', text: 'あ、お待ちください。パンフレット、さっき確認したら、印刷がずれている不良品が交じっていたんです。' },
      { speaker: '男', text: 'えっ、本当？じゃあ、並べる前に全部チェックして、不良品を抜いておかないと。' },
      { speaker: '女', text: 'そうですね。数が足りなくなりそうなら、追加をお願いしないといけませんね。' },
      { speaker: '男', text: '追加の注文は僕が印刷会社に連絡するから、君は選別を進めて。' },
      { speaker: '女', text: '助かります。あと、机の配置換えはどうしますか。' },
      { speaker: '男', text: 'それは午後、アルバイトの人たちが来てからで大丈夫。' },
      { speaker: '女', text: 'わかりました。では、始めます。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: [
      'パンフレットを確認して不良品を抜く',
      '印刷会社に追加の注文をする',
      '机の配置を換える',
      'ブースに看板を取り付ける',
    ],
    answerIndex: 0,
    explanation:
      '小冊子混入了印刷歪掉的不良品，男の人說「全部チェックして、不良品を抜いておかないと」並要她「選別を進めて」，所以第一步是檢查並挑出不良品。向印刷公司追加訂購是男の人負責聯絡；換桌子的配置要等下午工讀生來了再做；招牌業者已經裝好了，不需要再裝。',
    explanationEn:
      'Defective pamphlets with misaligned printing got mixed in, and the man says 「全部チェックして、不良品を抜いておかないと」 and tells her 「選別を進めて」, so her first task is to inspect the pamphlets and pull out the bad ones. Ordering extra copies is the man\'s job since he will contact the printing company himself, rearranging the desks can wait until the part-time workers arrive in the afternoon, and the booth sign has already been installed by the contractor.',
  },
  {
    id: 'n2-listening-kadai-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が社内システムの不具合について話しています。' },
      { speaker: '女', text: '森さん、大変。さっきから受注システムにログインできないって、営業部から問い合わせが来てるの。' },
      { speaker: '男', text: 'こちらでも確認しました。サーバーの障害のようで、今、保守会社に調査を依頼しているところです。' },
      { speaker: '女', text: '復旧までどのくらいかかりそう？' },
      { speaker: '男', text: 'まだ何とも言えないそうです。長引くと、今日の出荷に影響が出かねません。' },
      { speaker: '女', text: 'じゃあ、まず全社にメールで障害のお知らせを流して。問い合わせがこれ以上増えると対応しきれないから。' },
      { speaker: '男', text: 'わかりました。原因をまとめた報告書はどうしますか。' },
      { speaker: '女', text: 'それは復旧してからでいいわ。営業部への個別の説明は私が行くから。' },
      { speaker: '男', text: 'はい、すぐに送ります。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: [
      '社内に障害を知らせるメールを送る',
      '障害の原因をまとめた報告書を書く',
      '営業部に説明に行く',
      '保守会社に調査を依頼する',
    ],
    answerIndex: 0,
    explanation:
      '為了避免詢問持續湧入，女の人指示「まず全社にメールで障害のお知らせを流して」，男の人回答「すぐに送ります」，所以第一步是發送全公司的故障通知信。原因報告書被「復旧してからでいい」延後；向營業部個別說明是女の人親自去；委託維護公司調查已經在進行中（依頼しているところ），不必再做。',
    explanationEn:
      'To stop the flood of inquiries, the woman instructs 「まず全社にメールで障害のお知らせを流して」, and the man replies 「すぐに送ります」, so sending a company-wide outage notification email is his first task. The incident report is postponed with 「復旧してからでいい」, the individual explanation to the sales department is something the woman will do in person, and the request to the maintenance company is already underway, as shown by 「依頼しているところ」, so it does not need to be done again.',
  },
  {
    id: 'n2-listening-kadai-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が取引先に出す見積書について話しています。' },
      { speaker: '男', text: '石田さん、明日提出する見積書なんだけど、単価が先月の価格表のままになってるよ。今月から原材料費が上がっただろう。' },
      { speaker: '女', text: 'あ、申し訳ありません。すぐ新しい価格表で計算し直します。' },
      { speaker: '男', text: 'うん。それから、納期の欄が空欄になっていたけど。' },
      { speaker: '女', text: '納期は工場の生産スケジュール次第なので、確認してから入れようと思っていまして。' },
      { speaker: '男', text: '工場には僕がこのあと電話するから、君は金額の修正を先に済ませて。' },
      { speaker: '女', text: '承知しました。できあがったら、課長の承認をいただいてから先方にお送りすればよろしいですね。' },
      { speaker: '男', text: 'そう。送るのはあくまで承認が出てからだよ。焦って送らないように。' },
      { speaker: '女', text: 'はい、気をつけます。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: [
      '新しい価格表で見積書の金額を計算し直す',
      '工場に納期を問い合わせる',
      '見積書を取引先に送る',
      '課長に見積書の承認をもらう',
    ],
    answerIndex: 0,
    explanation:
      '單價還停留在上個月的價格表，男の人要求「金額の修正を先に済ませて」，女の人也說「すぐ計算し直します」，所以第一步是用新價格表重算金額。向工廠確認交期由男の人打電話，是別人負責；課長的核准要等修改完成之後；寄給客戶更被叮嚀「承認が出てから」，順序都在後面。',
    explanationEn:
      'The unit prices are still based on last month\'s price list, and the man tells her 「金額の修正を先に済ませて」; she also says she will recalculate right away, so redoing the figures with the new price list comes first. Asking the factory about the delivery date is handled by the man, who will phone them himself; the section chief\'s approval only comes after the corrections are done; and sending the quote to the client is explicitly warned to happen only 「承認が出てから」, so all of those come later.',
  },
  {
    id: 'n2-listening-kadai-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が新製品発表会の案内状について話しています。' },
      { speaker: '女', text: '大西くん、来月の発表会の案内状、発送の準備はどう？' },
      { speaker: '男', text: '宛名の印刷までは終わりました。あとは封筒に入れるだけです。' },
      { speaker: '女', text: 'ちょっと待って。招待するお客様のリスト、営業部が今朝更新したそうよ。何社か追加になったんだって。' },
      { speaker: '男', text: 'えっ、そうなんですか。じゃあ、まず新しいリストと印刷済みの宛名を照らし合わせないといけませんね。' },
      { speaker: '女', text: 'そうして。足りない分の宛名は、その後で印刷すればいいから。' },
      { speaker: '男', text: 'わかりました。会場の地図も同封するんでしたよね。' },
      { speaker: '女', text: '地図は今、デザイン担当が作り直しているから、届くのを待って。封筒に入れるのはそれからね。' },
      { speaker: '男', text: '承知しました。では、リストの確認から始めます。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: [
      '新しいリストと印刷済みの宛名を照らし合わせる',
      '足りない分の宛名を印刷する',
      '案内状を封筒に入れる',
      '会場の地図を作り直す',
    ],
    answerIndex: 0,
    explanation:
      '營業部今早更新了邀請名單，男の人說要「新しいリストと印刷済みの宛名を照らし合わせないと」，最後也宣告「リストの確認から始めます」，所以第一步是核對名單與收件人名條。補印不足的名條是核對之後的事；裝入信封要等地圖送到，被「それからね」延後；地圖是設計負責人在重做，不是他的工作。',
    explanationEn:
      'The sales department updated the guest list this morning, and the man says 「新しいリストと印刷済みの宛名を照らし合わせないといけませんね」, then declares 「リストの確認から始めます」, so cross-checking the new list against the printed address labels is his first step. Printing the missing labels only happens after that check, stuffing the envelopes is pushed back with 「それからね」 because they must wait for the map, and redoing the map itself is the designer\'s job, not his.',
  },
  {
    id: 'n2-listening-kadai-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が採用面接の準備について話しています。' },
      { speaker: '男', text: '藤田さん、金曜の面接なんだけど、部長が急に出張になってね。時間を変更せざるを得なくなったんだ。' },
      { speaker: '女', text: 'そうですか。応募者の方には私からご連絡しましょうか。' },
      { speaker: '男', text: 'いや、その前に、まず部長の空いている時間を秘書さんに確認してくれる？候補の日時がないと、先方に伝えようがないから。' },
      { speaker: '女', text: '確かにそうですね。面接室の予約の変更はどうしましょう。' },
      { speaker: '男', text: 'それは新しい日程が決まってからで十分だよ。' },
      { speaker: '女', text: 'わかりました。評価シートの準備でしたら、昨日のうちに済ませてあります。' },
      { speaker: '男', text: 'さすが、助かるよ。じゃあ、よろしく頼むね。' },
      { speaker: '女', text: 'はい、すぐに確認いたします。' },
    ],
    question: '女の人はこのあとまず何をしますか。',
    options: [
      '秘書に部長の空いている時間を確認する',
      '応募者に日程の変更を連絡する',
      '面接室の予約を変更する',
      '面接の評価シートを準備する',
    ],
    answerIndex: 0,
    explanation:
      '男の人說「その前に、まず部長の空いている時間を秘書さんに確認してくれる？」，理由是沒有候補時段就無從通知對方，女の人也回答「すぐに確認いたします」，所以第一步是向秘書確認部長的空檔。聯絡應徵者被「その前に」擋在後面；面試室改約要等新日程確定；評價表昨天就準備好了，不需要再做。',
    explanationEn:
      'The man says 「その前に、まず部長の空いている時間を秘書さんに確認してくれる？」, reasoning that without candidate time slots there is nothing to tell the applicant, and the woman answers 「すぐに確認いたします」, so checking the manager\'s availability with the secretary comes first. Contacting the applicant is explicitly blocked until then by 「その前に」, rebooking the interview room can wait until the new schedule is fixed, and the evaluation sheets were already finished yesterday, so nothing needs to be done there.',
  },
  {
    id: 'n2-listening-kadai-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が来週の社内研修について話しています。' },
      { speaker: '女', text: '岡田くん、来週の研修の参加者、結局何人になった？' },
      { speaker: '男', text: '四十二人です。当初の予定より十人ほど増えました。' },
      { speaker: '女', text: 'それだと今の会議室では入りきらないわね。まず、大会議室が空いているかどうか、総務に問い合わせてもらえる？' },
      { speaker: '男', text: 'わかりました。テキストの増刷も必要になりますね。' },
      { speaker: '女', text: '増刷は部屋が確保できてからでいいわ。人数がまた変わりかねないし。' },
      { speaker: '男', text: '講師の先生へのご連絡はどうしましょう。' },
      { speaker: '女', text: '先生には私から人数の変更をお伝えしておく。受付用の名簿は前の日に印刷すれば間に合うから。' },
      { speaker: '男', text: '承知しました。では、総務に電話してみます。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: [
      '総務に大会議室が空いているか問い合わせる',
      'テキストを追加で印刷する',
      '講師に参加人数の変更を伝える',
      '受付用の名簿を印刷する',
    ],
    answerIndex: 0,
    explanation:
      '參加人數增加到四十二人，現有會議室坐不下，女の人指示「まず、大会議室が空いているかどうか、総務に問い合わせて」，男の人最後也說「総務に電話してみます」，所以第一步是向總務詢問大會議室。教材加印要等場地確保之後，因為人數還可能變動；通知講師由女の人親自處理；報到名冊前一天再印就來得及，都不是現在做的事。',
    explanationEn:
      'Attendance has grown to forty-two people, too many for the current room, so the woman instructs 「まず、大会議室が空いているかどうか、総務に問い合わせてもらえる？」 and the man ends with 「総務に電話してみます」; asking general affairs about the large meeting room is therefore his first task. Printing extra textbooks must wait until the room is secured because the headcount could still change, contacting the instructor is something the woman will do herself, and the reception roster can be printed the day before, so none of these are done now.',
  },
  {
    id: 'n2-listening-kadai-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が部品の納期の遅れについて話しています。' },
      { speaker: '男', text: '参りました。例の部品、仕入先から納品が一週間遅れるという連絡が来まして。' },
      { speaker: '女', text: '一週間？それじゃ、うちの製品の出荷にも影響が出るじゃない。' },
      { speaker: '男', text: 'ええ。お客様に納期を延ばしていただくよう、お願いするしかないかと。' },
      { speaker: '女', text: '待って。その前に、ほかの仕入先で同じ部品をすぐ出せるところがないか、当たってみて。前に取引したことのある会社があったでしょう。' },
      { speaker: '男', text: 'ああ、確かに。では、まずそちらに在庫があるか問い合わせてみます。' },
      { speaker: '女', text: 'お願い。お客様へのご連絡は、それでも間に合わないと分かってからにしましょう。課長への報告は私がしておくから。' },
      { speaker: '男', text: '助かります。すぐ電話します。' },
    ],
    question: '男の人はこのあとまず何をしますか。',
    options: [
      '別の仕入先に部品の在庫を問い合わせる',
      'お客様に納期の延期をお願いする',
      '課長に納期の遅れを報告する',
      '製品の出荷日を変更する',
    ],
    answerIndex: 0,
    explanation:
      '男の人原本想直接請客戶延後交期，但被女の人「待って。その前に」更正，改為先詢問其他往來過的供應商有沒有同款零件的庫存，他也說「すぐ電話します」，所以第一步是向別的供應商詢問庫存。向客戶請求延期要等確定真的來不及才做；向課長報告是女の人負責；更改出貨日只是被提到的可能影響，對話中並沒有決定要做。',
    explanationEn:
      'The man initially wanted to ask the customer for a deadline extension, but the woman corrects him with 「待って。その前に」 and tells him to first check whether another supplier they have dealt with before can ship the same part right away; he says 「すぐ電話します」, so asking the other supplier about stock comes first. Requesting an extension from the customer happens only if that route turns out to be too slow, reporting to the section chief is the woman\'s job, and changing the shipping date is merely a possible consequence mentioned in passing, never decided on.',
  },
]

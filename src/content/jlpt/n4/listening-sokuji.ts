import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n4-listening-sokuji-001',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみませんが、この漢字の読み方を教えてもらえませんか。' },
    ],
    question: '',
    options: [
      'ええ、いいですよ。これは「にわ」と読みますよ。',
      'はい、漢字を教えてくれてありがとう。',
      'いいえ、その本はまだ読んでいません。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てもらえませんか」是請對方幫忙的依頼句，這裡是拜託對方教漢字的唸法，自然的回應是答應並直接教：「ええ、いいですよ。これは『にわ』と読みますよ」。第二個選項用「教えてくれてありがとう」，變成感謝對方教自己，授受方向完全相反；第三個選項抓住「読む」這個詞，卻回答書還沒讀，答非所問。',
    explanationEn:
      '「〜てもらえませんか」 is a request for a favor — here, asking someone to teach the reading of a kanji. The natural response is to agree and teach it right away: 「ええ、いいですよ。これは「にわ」と読みますよ」. The second option, 「教えてくれてありがとう」, thanks the other person for teaching, reversing who does the favor; the third latches onto the word 「読む」 but answers about not having read a book yet — completely off topic.',
  },
  {
    id: 'n4-listening-sokuji-002',
    kind: 'listening',
    script: [
      { speaker: '男', text: '来週の土曜日、みんなで山に登りに行くんだけど、一緒にどう？' },
    ],
    question: '',
    options: [
      'いいね、ぜひ行きたい。何時に集まるの？',
      'うん、あの山はとても高かったよ。',
      'ううん、山には登らなかったよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「一緒にどう？」是邀約（勧誘）的口語說法，回應應該表達要不要參加：「いいね、ぜひ行きたい」並順勢確認集合時間，最自然。第二個選項雖然也講「山」，卻用過去式描述山很高，答非所問；第三個選項把還沒發生的邀約用過去否定「登らなかった」回答，時態和語意都不合。',
    explanationEn:
      '「一緒にどう？」 is a casual invitation, so the reply should say whether you will join: 「いいね、ぜひ行きたい」 accepts and naturally follows up by asking what time to meet. The second option also mentions the mountain but describes in the past tense how tall it was — not an answer to an invitation; the third responds to a future event with the past negative 「登らなかった」, wrong in both tense and meaning.',
  },
  {
    id: 'n4-listening-sokuji-003',
    kind: 'listening',
    script: [
      { speaker: '女', text: '先生、ちょっと気分が悪いので、早く帰ってもいいですか。' },
    ],
    question: '',
    options: [
      'いいですよ。お大事にしてくださいね。',
      'はい、私も早く帰りたいです。',
      'いいえ、まだ帰っていませんよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てもいいですか」是請求許可的文型，學生因身體不舒服想早退，老師允許時說「いいですよ」，再加上探病慣用句「お大事に」（請保重）最自然。第二個選項抓住「早く帰る」卻變成說自己也想早點回家，答非所問；第三個選項回答「還沒回去」，把許可問句誤當成詢問事實，不合語境。',
    explanationEn:
      '「〜てもいいですか」 asks for permission — the student feels unwell and wants to leave early. Granting it with 「いいですよ」 plus the set phrase 「お大事にしてくださいね」 (take care of yourself) is the natural teacherly response. The second option grabs onto "going home early" but says the speaker also wants to leave early — beside the point; the third answers "no, I haven\'t gone home yet," mistaking the permission request for a factual question.',
  },
  {
    id: 'n4-listening-sokuji-004',
    kind: 'listening',
    script: [
      { speaker: '男', text: '引っ越しの手伝い、本当にありがとう。とても助かったよ。' },
    ],
    question: '',
    options: [
      'いやいや、大したことないよ。また何かあったら言ってね。',
      'うん、手伝ってくれて本当にありがとう。',
      '引っ越しは来月にすることにしたんだ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方在道謝，說搬家時受了幫助，被感謝的一方謙虛回應「大したことないよ」（沒什麼啦），再補一句「また何かあったら言ってね」最自然。第二個選項反過來感謝對方「手伝ってくれてありがとう」，授受方向顛倒——幫忙的人是自己，不該道謝；第三個選項說搬家改到下個月，但對話中搬家已經結束，語意矛盾。',
    explanationEn:
      'The speaker is thanking you for help with a move, so the person being thanked responds modestly: 「いやいや、大したことないよ」 (oh, it was nothing) and adds 「また何かあったら言ってね」. The second option thanks the other person back with 「手伝ってくれてありがとう」, but you were the one who helped, so there is nothing to thank them for — the favor direction is reversed; the third says the move has been postponed to next month, contradicting the fact that it is already over.',
  },
  {
    id: 'n4-listening-sokuji-005',
    kind: 'listening',
    script: [
      { speaker: '女', text: '先週貸したマンガ、もう読んだ？どうだった？' },
    ],
    question: '',
    options: [
      'うん、すごく面白かったよ。続きも読みたいな。',
      'うん、明日そのマンガを貸してあげるよ。',
      'マンガなら駅前の本屋で売ってるよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「どうだった？」是詢問感想的問句，對方想知道借出去的漫畫好不好看，用「すごく面白かったよ」給感想並用過去式回答最自然。第二個選項說「貸してあげるよ」，變成自己要借漫畫給對方，但借出的人是對方，授受方向相反；第三個選項抓住「マンガ」卻回答哪裡有賣，答非所問。',
    explanationEn:
      '「どうだった？」 asks for your impressions — the friend wants to know how the manga she lent you was, so giving a past-tense opinion like 「すごく面白かったよ」 is the natural reply. The second option says 「貸してあげるよ」, offering to lend the manga to her, but she is the one who lent it — the lending direction is backwards; the third latches onto 「マンガ」 and answers where manga are sold, which is not what was asked.',
  },
  {
    id: 'n4-listening-sokuji-006',
    kind: 'listening',
    script: [
      { speaker: '男', text: '会議で使うから、この書類をコピーしておいてくれない？' },
    ],
    question: '',
    options: [
      'わかりました。何枚コピーすればいいですか。',
      'はい、コピーしてくれてありがとうございます。',
      'コピー機なら二階の部屋にありますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜ておいてくれない？」結合了事先準備的「〜ておく」和請託的「〜てくれない？」，是拜託對方先把文件影印好。接受請託後確認細節「何枚コピーすればいいですか」（要印幾份）最自然。第二個選項道謝「コピーしてくれてありがとう」，把該做事的人弄反了，授受方向錯誤；第三個選項只回答影印機在哪裡，沒有回應請託本身，答非所問。',
    explanationEn:
      '「〜ておいてくれない？」 combines 〜ておく (do in advance) with the casual request 〜てくれない？ — the speaker is asking you to copy the documents before the meeting. Accepting and then confirming a detail, 「何枚コピーすればいいですか」 (how many copies?), is the natural response. The second option thanks the speaker for copying, flipping who is supposed to do the work; the third only says where the copier is, never responding to the request itself.',
  },
  {
    id: 'n4-listening-sokuji-007',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、この店の前に自転車を止めてもいいですか。' },
    ],
    question: '',
    options: [
      'すみませんが、ここはだめなんです。あちらにお願いします。',
      'はい、私も自転車で来ました。',
      'いいえ、バスはここには止まりませんよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てもいいですか」是請求許可，這裡問能不能在店門前停腳踏車。拒絕許可時用「すみませんが、ここはだめなんです」，並指引別的地方，是最自然的回應。第二個選項抓住「自転車」卻回答自己也是騎車來的，答非所問；第三個選項把「止める」（停放）聽成「止まる」（巴士停靠），主題完全跑掉。',
    explanationEn:
      '「〜てもいいですか」 asks for permission — here, whether one may park a bicycle in front of the shop. To refuse, 「すみませんが、ここはだめなんです」 followed by directing the person elsewhere is the natural response. The second option seizes on 「自転車」 but just says the speaker also came by bike, which answers nothing; the third confuses the transitive 「止める」 (to park something) with the intransitive 「止まる」 and talks about where buses stop — a completely different topic.',
  },
  {
    id: 'n4-listening-sokuji-008',
    kind: 'listening',
    script: [
      { speaker: '男', text: '今度の日曜日、うちで一緒に映画を見ない？新しいDVDを借りたんだ。' },
    ],
    question: '',
    options: [
      'いいね。何時ごろ行けばいい？',
      '映画館なら駅の前にあるよ。',
      'うん、その映画はもう返してしまったよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜ない？」是口語的邀約說法，對方邀請週日到家裡看電影，答應後接著問「何時ごろ行けばいい？」（幾點過去好）最自然，也用到 N4 的「〜ばいい」。第二個選項抓住「映画」卻回答電影院在哪，可是對方明明說在家看 DVD，答非所問；第三個選項說 DVD 已經還掉了，但借片的人是對方，自己不可能拿去還，語意不通。',
    explanationEn:
      '「〜ない？」 is a casual invitation — the friend is inviting you to watch a movie at his place on Sunday. Accepting and asking 「何時ごろ行けばいい？」 (around what time should I come?) is the natural reply, using the N4 pattern 〜ばいい. The second option latches onto "movie" and gives directions to a cinema, but he clearly said they would watch a DVD at home; the third claims the DVD has already been returned, yet he is the one who rented it, so that makes no sense.',
  },
  {
    id: 'n4-listening-sokuji-009',
    kind: 'listening',
    script: [
      { speaker: '女', text: '新しいアパートはどう？駅から近くて便利でしょう？' },
    ],
    question: '',
    options: [
      'うん、買い物にも便利で、とても気に入ってるよ。',
      'うん、駅はあの角を曲がったところだよ。',
      '今、いいアパートを探しているんだ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜はどう？」是詢問感想，對方想知道住進新公寓後的心得，回答「買い物にも便利で、とても気に入ってる」給出具體感想最自然。第二個選項抓住「駅」這個詞，卻在報路告訴對方車站怎麼走，答非所問；第三個選項說「正在找公寓」，但對話前提是已經搬進新公寓了，語意矛盾。',
    explanationEn:
      '「〜はどう？」 asks how you like something — the friend wants your impressions of the new apartment. Answering with a concrete opinion, 「買い物にも便利で、とても気に入ってるよ」 (convenient for shopping too, I really like it), is the natural reply. The second option grabs the word 「駅」 and gives directions to the station, which was not the question; the third says you are still looking for an apartment, contradicting the premise that you have already moved in.',
  },
  {
    id: 'n4-listening-sokuji-010',
    kind: 'listening',
    script: [
      { speaker: '男', text: '悪いけど、駅に着いたら電話してくれる？迎えに行くから。' },
    ],
    question: '',
    options: [
      'うん、わかった。着いたらすぐ電話するね。',
      'うん、電話してくれてありがとう。',
      'ごめん、駅はちょっと遠いから歩けないよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜たら…てくれる？」是「到了車站之後打電話給我」的請託，用到 N4 的條件形「〜たら」。接受請託的自然回應是「着いたらすぐ電話するね」，答應由自己來打電話。第二個選項說「電話してくれてありがとう」，變成感謝對方打電話來，授受方向相反；第三個選項抓住「駅」卻在講走不到車站，答非所問。',
    explanationEn:
      'The request 「駅に着いたら電話してくれる？」 uses the N4 conditional 〜たら: call me once you arrive at the station, and I will come pick you up. The natural acceptance is 「着いたらすぐ電話するね」— promising that you will make the call. The second option, 「電話してくれてありがとう」, thanks the other person for calling, reversing who is supposed to phone whom; the third seizes on 「駅」 and complains the station is too far to walk to, missing the point entirely.',
  },
  {
    id: 'n4-listening-sokuji-011',
    kind: 'listening',
    script: [
      { speaker: '女', text: '風邪はもう治った？先週はとても大変そうだったね。' },
    ],
    question: '',
    options: [
      'うん、おかげさまで、もうすっかり元気になったよ。',
      'うん、昨日から風邪をひいてしまったんだ。',
      '薬屋なら隣の町にあるよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方關心「感冒好了嗎」，肯定回答時用慣用句「おかげさまで」（託您的福）加上「すっかり元気になった」最自然，也呼應了 N4 的「〜そうだった」（看起來很嚴重）。第二個選項用「うん」肯定卻接著說昨天才感冒，肯否方向前後矛盾；第三個選項抓住生病的話題回答藥局在哪，答非所問。',
    explanationEn:
      'The friend asks whether your cold is better, so the natural positive answer uses the set phrase 「おかげさまで」 (thanks to you) plus 「もうすっかり元気になったよ」 (I\'m completely well again), matching her observation with 〜そうだった (you seemed to be having a hard time). The second option says 「うん」 in agreement but then claims the cold started yesterday — internally contradictory; the third stays on the illness theme but answers where a pharmacy is, which was never asked.',
  },
  {
    id: 'n4-listening-sokuji-012',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'すみません、その辞書、ちょっと使わせてもらってもいいですか。' },
    ],
    question: '',
    options: [
      'ええ、どうぞ。今は使っていませんから。',
      'はい、貸してくれてありがとうございます。',
      'その辞書は駅前の本屋で買いましたよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「使わせてもらってもいいですか」是 N4 的使役形加授受動詞，禮貌地請求許可「能不能讓我用一下」。同意時說「ええ、どうぞ。今は使っていませんから」最自然。第二個選項說「貸してくれてありがとう」，變成自己被借了東西而道謝，授受方向相反——想借的人是對方；第三個選項抓住「辞書」卻回答在哪裡買的，答非所問。',
    explanationEn:
      '「使わせてもらってもいいですか」 combines the causative with a receiving verb — an N4 pattern for politely asking "would you let me use it for a moment?" Granting the request with 「ええ、どうぞ。今は使っていませんから」 (go ahead, I\'m not using it now) is the natural reply. The second option thanks the speaker with 「貸してくれてありがとう」 as if you had been lent something, but the one who wants to borrow is the other person; the third grabs onto 「辞書」 and answers where the dictionary was bought — not what was asked.',
  },
  {
    id: 'n4-listening-sokuji-013',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'ねえ、明日の数学の授業、教室が変わるって聞いたんだけど、どこか知ってる？' },
    ],
    question: '',
    options: [
      'うん、二階の201教室だって。',
      'ううん、数学の宿題はまだやってないよ。',
      'うん、教室はもう掃除してあるよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方在問「教室換到哪裡，你知道嗎」，回答新教室的地點「二階の201教室だって」（〜って：轉述聽來的消息）最自然。第二個選項抓住「数学」這個詞，卻回答作業還沒寫，答非所問；第三個選項抓住「教室」回答已經打掃好了（〜てある：表示狀態），和「換到哪間教室」的問題完全無關。',
    explanationEn:
      'The question is where the math class has moved to, so giving the new location — 「二階の201教室だって」 (〜って marking hearsay) — is the natural answer. The second option latches onto the word 「数学」 and talks about unfinished homework; the third grabs 「教室」 and reports that it has been cleaned (〜てある: resultant state) — neither answers where the class will be held.',
  },
  {
    id: 'n4-listening-sokuji-014',
    kind: 'listening',
    script: [
      { speaker: '男', text: '先生、この作文は、いつまでに出せばいいですか。' },
    ],
    question: '',
    options: [
      '金曜日までに出してください。',
      'ええ、私が出してあげますよ。',
      'いいえ、作文はまだ読んでいませんよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '學生用「いつまでに出せばいいですか」（〜ばいい：該怎麼做才好）問繳交期限，先生回答期限「金曜日までに出してください」（〜までに：在期限之前）最自然。第二個選項說「私が出してあげます」，變成先生要替學生交作文，授受方向不通；第三個選項回答還沒讀作文，既答非所問，也不是期限。',
    explanationEn:
      'The student asks for the deadline with 「いつまでに出せばいいですか」 (〜ばいい: what should I do), so the teacher naturally answers with a deadline: 「金曜日までに出してください」 (〜までに: by that day). The second option, 「私が出してあげますよ」, has the teacher submitting the essay for the student — a nonsensical favor; the third says the essay has not been read yet, which answers nothing about a deadline.',
  },
  {
    id: 'n4-listening-sokuji-015',
    kind: 'listening',
    script: [
      { speaker: '女', text: '昨日休んじゃったから、授業のノート、コピーさせてもらえない？' },
    ],
    question: '',
    options: [
      'いいよ。昼休みに貸してあげるね。',
      'うん、コピーしてくれてありがとう。',
      'そのノート、駅前の店で買ったんだよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「コピーさせてもらえない？」是使役形加授受動詞的請託（能不能讓我影印），答應並約好「昼休みに貸してあげるね」最自然。第二個選項說「コピーしてくれてありがとう」，變成感謝對方影印給自己，授受方向顛倒——被拜託的人明明是自己；第三個選項抓住「ノート」回答筆記本在哪裡買的，答非所問。',
    explanationEn:
      '「コピーさせてもらえない？」 is a causative-plus-receiving request — "would you let me copy your notes?" Agreeing and arranging it with 「昼休みに貸してあげるね」 (I will lend them to you at lunch break) is the natural reply. The second option thanks the asker for copying, reversing who does whom the favor — you are the one being asked; the third seizes on 「ノート」 and says where the notebook was bought, which is beside the point.',
  },
  {
    id: 'n4-listening-sokuji-016',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'いらっしゃいませ。今日は何かお探しですか。' },
    ],
    question: '',
    options: [
      'ええ、あたたかい手袋を探しているんですが。',
      'いいえ、まだ何も買っていませんよ。',
      'はい、この店は何でも安いですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '店員問「何かお探しですか」（在找什麼商品嗎），回答想找的東西「あたたかい手袋を探しているんですが」最自然，句尾的「〜が」帶出請對方幫忙找的語氣。第二個選項把問題聽成「買了什麼了嗎」，回答還沒買，答非所問；第三個選項只稱讚店裡東西便宜，沒有回應「在找什麼」的詢問。',
    explanationEn:
      'The clerk asks 「何かお探しですか」— "are you looking for something?" — so naming what you want, 「あたたかい手袋を探しているんですが」 (warm gloves), is the natural reply, with the trailing 「〜が」 inviting the clerk\'s help. The second option mishears it as "have you bought anything?" and answers about not buying yet; the third merely compliments the shop\'s low prices, never answering what you are looking for.',
  },
  {
    id: 'n4-listening-sokuji-017',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'お会計は800円です。ポイントカードはお持ちですか。' },
    ],
    question: '',
    options: [
      'いいえ、持っていません。すぐ作れますか。',
      'はい、お金はカードで払います。',
      'いいえ、ポイントカードを作ってあげましょうか。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '店員問有沒有集點卡，沒有的話回答「持っていません」，並順勢問「すぐ作れますか」（可能形：能馬上辦嗎）最自然。第二個選項把「ポイントカード」聽成付款用的信用卡，回答要刷卡付錢，字眼相近但答非所問；第三個選項說要幫店員辦集點卡，「〜てあげましょうか」的授受方向完全顛倒。',
    explanationEn:
      'Asked whether you have a point card, the natural reply is 「いいえ、持っていません」 plus the follow-up 「すぐ作れますか」 (potential form: can I make one right away?). The second option confuses the loyalty card with a payment card and answers about paying by credit card — a similar word with the wrong meaning; the third offers to make a point card for the clerk, with 「〜てあげましょうか」 reversing the favor entirely.',
  },
  {
    id: 'n4-listening-sokuji-018',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'すみません、このセーターの白いのはありませんか。' },
    ],
    question: '',
    options: [
      '申し訳ありません。白は今、売り切れなんです。',
      'はい、白はよくお似合いでしたよ。',
      'いいえ、私はセーターを持っていませんよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '客人在問「有沒有白色的」，店員回答庫存狀況「白は今、売り切れなんです」（〜んです：說明情況）最自然。第二個選項用過去式說「白色很適合您」，可是客人根本還沒試穿過白色的，時態和事實都不合；第三個選項回答店員自己沒有毛衣，把對商品的詢問當成個人物品的問題，答非所問。',
    explanationEn:
      'The customer asks whether the sweater comes in white, so reporting the stock — 「白は今、売り切れなんです」 (〜んです giving the explanation) — is the natural answer. The second option says in the past tense that white suited the customer, though they have never tried it on — wrong in both tense and fact; the third says the clerk personally owns no sweater, mistaking a question about merchandise for a personal one.',
  },
  {
    id: 'n4-listening-sokuji-019',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'お客さん、道がとても込んでいますから、少し時間がかかりますよ。' },
    ],
    question: '',
    options: [
      '大丈夫ですよ。時間はたくさんありますから。',
      'いいえ、道は込んでいませんよ。',
      'じゃあ、切符を二枚お願いします。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '計程車司機提醒塞車會多花時間，乘客要回應自己能不能接受，「大丈夫ですよ。時間はたくさんありますから」表示不趕時間，最自然。第二個選項直接否定司機眼前看到的路況，不成回應，也很失禮；第三個選項要買兩張票，可是搭計程車不用買票，把場景當成了車站，語意不通。',
    explanationEn:
      'The taxi driver warns that heavy traffic will make the ride longer, so the passenger should respond to that: 「大丈夫ですよ。時間はたくさんありますから」— no rush, plenty of time. The second option flatly denies the congestion the driver can see right in front of him — not a response, and rude besides; the third orders two tickets, but taxis have no tickets — the speaker has confused the scene with a train station.',
  },
  {
    id: 'n4-listening-sokuji-020',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、空港へ行くバスはどこから出ますか。' },
    ],
    question: '',
    options: [
      '3番乗り場ですよ。あそこの青い看板の所です。',
      'いいえ、飛行機はもう出発しましたよ。',
      'ええ、バスにはもう乗りました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方在問機場巴士的搭車地點，回答具體位置「3番乗り場ですよ」並指出目標「青い看板の所」最自然。第二個選項抓住「空港」這個詞，回答飛機已經起飛，答非所問；第三個選項說自己已經搭過巴士了，把「從哪裡發車」的問題當成「搭了沒」，人稱和語意都不合。',
    explanationEn:
      'The question is where the airport bus departs from, so giving the concrete spot — 「3番乗り場ですよ」, over by the blue sign — is the natural answer. The second option latches onto 「空港」 and reports that the plane has already left, which was not asked; the third says the speaker has already ridden the bus, treating "where does it leave from" as "have you boarded yet" — wrong person and wrong meaning.',
  },
  {
    id: 'n4-listening-sokuji-021',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'しまった、定期券を家に忘れて来ちゃった。切符を買わなくちゃ。' },
    ],
    question: '',
    options: [
      'あそこの機械で買えるよ。急ごう。',
      'へえ、定期券って便利だね。',
      'うん、切符はもう捨てちゃったよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方發現忘記帶月票，說「切符を買わなくちゃ」（〜なくちゃ：得買票才行），回應告訴他哪裡能買「あそこの機械で買えるよ」（買える：可能形）最自然。第二個選項抓住「定期券」感嘆月票很方便，完全沒回應眼前的困擾；第三個選項說票已經丟掉了，可是票根本還沒買，語意矛盾。',
    explanationEn:
      'The friend realizes he left his commuter pass at home and says 「切符を買わなくちゃ」 (〜なくちゃ: I have to buy a ticket), so pointing him to where he can buy one — 「あそこの機械で買えるよ」 (買える: potential form) — is the natural response. The second option muses that commuter passes are convenient, ignoring the problem at hand; the third claims the ticket has already been thrown away, though none has been bought yet — contradictory.',
  },
  {
    id: 'n4-listening-sokuji-022',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'ねえ、ちょっと汗をかいたから、お風呂、先に入ってもいい？' },
    ],
    question: '',
    options: [
      'いいよ。ゆっくり入って。',
      'うん、私は昨日入ったよ。',
      'ありがとう。先に入ってくれて助かったよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「先に入ってもいい？」是徵求先洗澡的許可，同意時說「いいよ。ゆっくり入って」最自然。第二個選項回答自己昨天洗過了，和「現在能不能先洗」無關，答非所問；第三個選項感謝對方「先洗了澡」，可是對方才剛開口問、根本還沒去洗，時態不合，「〜てくれて」的授受也不成立。',
    explanationEn:
      '「先に入ってもいい？」 asks permission to take the bath first, so granting it with 「いいよ。ゆっくり入って」 (go ahead, take your time) is the natural reply. The second option says the speaker bathed yesterday, irrelevant to whether the other person may go first now; the third thanks them for having bathed first, but they have only just asked and have not gone in yet — wrong tense, and the favor in 「〜てくれて」 never happened.',
  },
  {
    id: 'n4-listening-sokuji-023',
    kind: 'listening',
    script: [
      { speaker: '女', text: '晩ご飯までに、自分の部屋を片付けておいてね。' },
    ],
    question: '',
    options: [
      'わかった。すぐやるよ。',
      'ありがとう。片付けてくれて助かったよ。',
      '今日の晩ご飯はカレーがいいな。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「片付けておいてね」用「〜ておく」要求在晚飯前先把房間整理好，接受指示回答「わかった。すぐやるよ」最自然。第二個選項變成感謝對方幫忙整理了房間，可是被要求整理的人是自己，授受方向顛倒；第三個選項抓住「晩ご飯」點菜說想吃咖哩，完全沒回應整理房間的要求，答非所問。',
    explanationEn:
      '「片付けておいてね」 uses 〜ておく to ask that the room be tidied up before dinner, so accepting with 「わかった。すぐやるよ」 (got it, I will do it right away) is the natural reply. The second option thanks the speaker for tidying up, but you are the one being told to tidy — the favor is reversed; the third grabs onto 「晩ご飯」 and requests curry, never responding to the actual instruction.',
  },
  {
    id: 'n4-listening-sokuji-024',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'ごめん、卵を買うのを忘れちゃった。悪いけど、スーパーで買って来てくれない？' },
    ],
    question: '',
    options: [
      'いいよ。ほかに何か要る物はある？',
      'ううん、卵はもう全部食べちゃったよ。',
      'うん、買って来てくれてありがとう。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「買って来てくれない？」是請對方去買東西回來的請託，答應並確認「ほかに何か要る物はある？」（還需要別的嗎）最自然。第二個選項回答蛋已經吃完了，可是對方是忘了買、不是在問還剩多少，答非所問；第三個選項感謝對方買回來，可是被拜託去買的人是自己，授受方向顛倒，時態也不對。',
    explanationEn:
      '「買って来てくれない？」 asks you to go buy something and bring it back, so agreeing and checking 「ほかに何か要る物はある？」 (anything else you need?) is the natural response. The second option reports that the eggs are all eaten, but the issue is that he forgot to buy them, not how many are left; the third thanks him for buying them, though you are the one being asked to go — reversed favor and wrong tense.',
  },
]

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
]

import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n5-listening-sokuji-001',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、この近くに銀行はありますか。' },
    ],
    question: '',
    options: [
      'はい、あそこの角にありますよ。',
      '銀行は九時から開きますよ。',
      'いいえ、行きませんでした。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方在問附近「有沒有銀行」，自然的回應是告知位置：「はい、あそこの角にありますよ」（有，就在那個轉角）。第二個選項雖然也提到「銀行」，但回答的是營業時間，答非所問；第三個選項把「ありますか」誤當成問「去不去」，還用過去式回答，完全不合語境。',
  },
  {
    id: 'n5-listening-sokuji-002',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'あのう、学校の夏休みはいつから始まりますか。' },
    ],
    question: '',
    options: [
      '来週の金曜日からですよ。',
      '夏休みに海へ行きました。',
      'いいえ、始まりませんよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「いつから」是問時間起點的疑問詞問句，要用具體時間回答：「来週の金曜日からですよ」（從下週五開始）。第二個選項雖然用了「夏休み」這個詞，卻在講過去去了海邊，答非所問；第三個選項用「いいえ」回答，但疑問詞問句不能用はい／いいえ回應。',
  },
  {
    id: 'n5-listening-sokuji-003',
    kind: 'listening',
    script: [
      { speaker: '女', text: '今晩、いっしょに駅前の新しいレストランへ行きませんか。' },
    ],
    question: '',
    options: [
      'いいですね。ぜひ行きましょう。',
      'そのレストランはおいしかったですよ。',
      'いいえ、行きたいです。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜ませんか」是邀約（勧誘），接受時用「いいですね。〜ましょう」回應最自然。第二個選項雖然也講到「レストラン」，但用過去式評論味道，等於沒有回答要不要去；第三個選項「いいえ」（拒絕）後面卻接「行きたいです」（想去），肯定與否定方向互相矛盾。',
  },
  {
    id: 'n5-listening-sokuji-004',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'すみませんが、この荷物をちょっと持ってくれませんか。' },
    ],
    question: '',
    options: [
      'ええ、いいですよ。',
      'はい、持ってもらいました。',
      '荷物は三つありますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てくれませんか」是請託（依頼），答應時說「ええ、いいですよ」（好啊，可以喔）最自然。第二個選項「持ってもらいました」是「請別人幫我拿了」，授受方向相反，變成回話的人接受了幫忙；第三個選項雖然用了「荷物」，卻在報行李數量，答非所問。',
  },
  {
    id: 'n5-listening-sokuji-005',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'はじめまして、山田です。どうぞよろしくお願いします。' },
    ],
    question: '',
    options: [
      'こちらこそ、よろしくお願いします。',
      'おかげさまで、元気です。',
      'はい、お願いしました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '初次見面的自我介紹，固定回應是「こちらこそ、よろしくお願いします」（我才要請您多指教）。第二個選項是回答「お元気ですか」時用的寒暄，場合不對；第三個選項雖然沿用了「お願い」，但改成過去式「お願いしました」（我拜託過了），語意完全不通。',
  },
  {
    id: 'n5-listening-sokuji-006',
    kind: 'listening',
    script: [
      { speaker: '男', text: '遅れてすみません。電車が来なかったんです。' },
    ],
    question: '',
    options: [
      'いいえ、大丈夫ですよ。',
      '電車はとても速いですね。',
      'どういたしまして。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方為遲到道歉，自然的回應是安撫對方：「いいえ、大丈夫ですよ」（不會，沒關係喔）。第二個選項雖然也提到「電車」，但評論電車很快，答非所問；第三個選項「どういたしまして」是回應「ありがとう」（道謝）用的，不能拿來回應道歉，方向用錯。',
  },
  {
    id: 'n5-listening-sokuji-007',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、ここで写真を撮ってもいいですか。' },
    ],
    question: '',
    options: [
      'ええ、どうぞ。',
      'はい、写真を見ました。',
      'いいえ、撮ってくださいね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜てもいいですか」是徵求許可，同意時說「ええ、どうぞ」（可以，請）最自然。第二個選項雖然用了「写真」，卻回答「看過照片了」，答非所問；第三個選項先說「いいえ」（不行）卻又接「撮ってくださいね」（請拍吧），否定與許可互相矛盾，語意不通。',
  },
  {
    id: 'n5-listening-sokuji-008',
    kind: 'listening',
    script: [
      { speaker: '男', text: '田中さんは、日曜日はいつも何をしていますか。' },
    ],
    question: '',
    options: [
      'たいてい家で本を読んでいます。',
      'はい、いつもしていますよ。',
      '日曜日は天気がよかったですね。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「何をしていますか」是問平常做什麼的疑問詞問句，要具體回答活動內容：「たいてい家で本を読んでいます」（多半在家看書）。第二個選項用「はい」回答，但疑問詞問句不能用はい／いいえ回應；第三個選項雖然重複了「日曜日」，卻在聊天氣，答非所問。',
  },
  {
    id: 'n5-listening-sokuji-009',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、このりんごは一ついくらですか。' },
    ],
    question: '',
    options: [
      '一つ百円です。',
      'りんごを三つください。',
      'はい、とても安いですよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「いくらですか」是問價錢，店員自然的回答是報價：「一つ百円です」（一個一百日圓）。第二個選項雖然也用了「りんご」，但那是客人點購時說的話，立場顛倒了；第三個選項用「はい」回應疑問詞問句，而且只說很便宜、沒報價錢，答非所問。',
  },
  {
    id: 'n5-listening-sokuji-010',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'ちょっと寒いですね。窓を閉めましょうか。' },
    ],
    question: '',
    options: [
      'はい、お願いします。',
      '窓から海が見えますよ。',
      'いいえ、閉めましょう。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '「〜ましょうか」在這裡是主動提議幫忙（要不要幫你關窗），接受時說「はい、お願いします」（好，麻煩你了）。第二個選項雖然也講到「窓」，卻在介紹窗外看得到海，答非所問；第三個選項先用「いいえ」拒絕、後面卻說「閉めましょう」（關吧），肯定否定方向互相矛盾。',
  },
  {
    id: 'n5-listening-sokuji-011',
    kind: 'listening',
    script: [
      { speaker: '女', text: 'すみません、今日はお先に失礼します。また明日。' },
    ],
    question: '',
    options: [
      'おつかれさまでした。',
      'いってらっしゃい。',
      'はい、失礼しました。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '同事說「お先に失礼します」（我先走了）下班離開時，留下來的人要回「おつかれさまでした」（辛苦了）。第二個選項「いってらっしゃい」是送家人或同事「外出之後還會回來」時說的，用在下班道別場合不對；第三個選項沿用「失礼」一詞卻說成道歉的「失礼しました」，答非所問。',
  },
  {
    id: 'n5-listening-sokuji-012',
    kind: 'listening',
    script: [
      { speaker: '男', text: 'あのう、これ、京都のお土産です。どうぞ。' },
    ],
    question: '',
    options: [
      'わあ、ありがとうございます。',
      'どういたしまして。',
      'はい、あげますよ。',
    ],
    answerIndex: 0,
    spokenOptions: true,
    explanation:
      '對方遞上伴手禮說「どうぞ」，收禮的人自然要道謝：「わあ、ありがとうございます」。第二個選項「どういたしまして」是被人道謝之後的回話，立場顛倒成送禮的一方；第三個選項「あげます」是「我給你」，授受方向相反——收禮的人應該說もらいます，不會說あげます。',
  },
]

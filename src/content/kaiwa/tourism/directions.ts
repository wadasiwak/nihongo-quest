import type { KaiwaScene } from '../../types'

export const scene: KaiwaScene = {
  id: 'tour-directions',
  category: 'tourism',
  title: '問路',
  titleJa: '道を聞く',
  icon: '🗺️',
  suggestedLevel: 'n5',
  dialogues: [
    {
      id: 'tour-directions-d1',
      title: '問景點怎麼走',
      lines: [
        {
          speaker: '觀光客',
          gender: '男',
          ja: 'すみません。ちょっといいですか。',
          zh: '不好意思，可以打擾一下嗎？',
        },
        {
          speaker: '路人',
          gender: '女',
          ja: 'はい、何ですか。',
          reading: 'はい、なんですか。',
          zh: '好的，什麼事呢？',
        },
        {
          speaker: '觀光客',
          gender: '男',
          ja: '桜公園へ行きたいです。どう行きますか。',
          reading: 'さくらこうえんへいきたいです。どういきますか。',
          zh: '我想去櫻花公園，該怎麼走呢？',
        },
        {
          speaker: '路人',
          gender: '女',
          ja: '桜公園ですね。この道をまっすぐ行ってください。',
          reading: 'さくらこうえんですね。このみちをまっすぐいってください。',
          zh: '櫻花公園啊。請沿這條路直走。',
        },
        {
          speaker: '觀光客',
          gender: '男',
          ja: 'まっすぐですね。',
          zh: '直走對吧。',
        },
        {
          speaker: '路人',
          gender: '女',
          ja: 'はい。二つ目の信号を右に曲がってください。',
          reading: 'はい。ふたつめのしんごうをみぎにまがってください。',
          zh: '對。在第二個紅綠燈右轉。',
        },
        {
          speaker: '觀光客',
          gender: '男',
          ja: 'ここから何分ぐらいかかりますか。',
          reading: 'ここからなんぷんぐらいかかりますか。',
          zh: '從這裡過去大概要幾分鐘呢？',
        },
        {
          speaker: '路人',
          gender: '女',
          ja: '歩いて十分ぐらいですよ。',
          reading: 'あるいてじゅっぷんぐらいですよ。',
          zh: '走路大概十分鐘喔。',
        },
        {
          speaker: '觀光客',
          gender: '男',
          ja: '分かりました。ありがとうございます。',
          reading: 'わかりました。ありがとうございます。',
          zh: '我知道了，謝謝您。',
        },
      ],
    },
    {
      id: 'tour-directions-d2',
      title: '問最近的車站・廁所・便利商店',
      lines: [
        {
          speaker: '旅客',
          gender: '女',
          ja: 'すみません、一番近い駅はどこですか。',
          reading: 'すみません、いちばんちかいえきはどこですか。',
          zh: '不好意思，最近的車站在哪裡呢？',
        },
        {
          speaker: '路人',
          gender: '男',
          ja: '駅ですか。あの橋を渡ってください。',
          reading: 'えきですか。あのはしをわたってください。',
          zh: '車站嗎？請先過那座橋。',
        },
        {
          speaker: '旅客',
          gender: '女',
          ja: '橋を渡るんですね。',
          reading: 'はしをわたるんですね。',
          zh: '要過橋對吧。',
        },
        {
          speaker: '路人',
          gender: '男',
          ja: 'はい。渡って、左に曲がると、すぐ駅が見えますよ。',
          reading: 'はい。わたって、ひだりにまがると、すぐえきがみえますよ。',
          zh: '對。過橋後左轉，馬上就能看到車站了。',
        },
        {
          speaker: '旅客',
          gender: '女',
          ja: 'ありがとうございます。あと、この近くにコンビニはありますか。',
          reading: 'ありがとうございます。あと、このちかくにコンビニはありますか。',
          zh: '謝謝。另外，這附近有便利商店嗎？',
        },
        {
          speaker: '路人',
          gender: '男',
          ja: 'コンビニは駅の前にありますよ。',
          reading: 'コンビニはえきのまえにありますよ。',
          zh: '便利商店就在車站前面喔。',
        },
        {
          speaker: '旅客',
          gender: '女',
          ja: 'すみません、トイレはどこにありますか。',
          zh: '不好意思，廁所在哪裡呢？',
        },
        {
          speaker: '路人',
          gender: '男',
          ja: 'トイレはあのデパートの二階にあります。',
          reading: 'トイレはあのデパートのにかいにあります。',
          zh: '廁所在那間百貨公司的二樓。',
        },
        {
          speaker: '旅客',
          gender: '女',
          ja: '分かりました。助かりました。',
          reading: 'わかりました。たすかりました。',
          zh: '我知道了，真是幫了大忙。',
        },
      ],
    },
    {
      id: 'tour-directions-d3',
      title: '迷路請人幫忙看地圖',
      lines: [
        {
          speaker: '觀光客',
          gender: '女',
          ja: 'あの、すみません。道に迷いました。',
          reading: 'あの、すみません。みちにまよいました。',
          zh: '那個，不好意思，我迷路了。',
        },
        {
          speaker: '路人',
          gender: '男',
          ja: '大丈夫ですか。どこへ行きたいですか。',
          reading: 'だいじょうぶですか。どこへいきたいですか。',
          zh: '還好嗎？您想去哪裡呢？',
        },
        {
          speaker: '觀光客',
          gender: '女',
          ja: 'このホテルです。この地図を見てください。',
          reading: 'このホテルです。このちずをみてください。',
          zh: '這間飯店。請幫我看一下這張地圖。',
        },
        {
          speaker: '路人',
          gender: '男',
          ja: 'ああ、ここですね。今、私たちはこの角にいます。',
          reading: 'ああ、ここですね。いま、わたしたちはこのかどにいます。',
          zh: '啊，是這裡啊。我們現在在地圖上的這個轉角。',
        },
        {
          speaker: '觀光客',
          gender: '女',
          ja: 'そうですか。ホテルは遠いですか。',
          reading: 'そうですか。ホテルはとおいですか。',
          zh: '這樣啊。飯店很遠嗎？',
        },
        {
          speaker: '路人',
          gender: '男',
          ja: 'いいえ、近いですよ。あの横断歩道を渡って、左側にあります。',
          reading: 'いいえ、ちかいですよ。あのおうだんほどうをわたって、ひだりがわにあります。',
          zh: '不會，很近喔。過那個斑馬線，就在左手邊。',
        },
        {
          speaker: '觀光客',
          gender: '女',
          ja: '本当ですか。よかったです。',
          reading: 'ほんとうですか。よかったです。',
          zh: '真的嗎？太好了。',
        },
        {
          speaker: '路人',
          gender: '男',
          ja: '一緒に行きましょうか。',
          reading: 'いっしょにいきましょうか。',
          zh: '要不要我陪您一起去？',
        },
        {
          speaker: '觀光客',
          gender: '女',
          ja: 'いいえ、大丈夫です。どうもありがとうございました。',
          reading: 'いいえ、だいじょうぶです。どうもありがとうございました。',
          zh: '不用了，沒問題的。非常感謝您。',
        },
      ],
    },
  ],
  phrases: [
    {
      ja: '右に曲がってください。',
      reading: 'みぎにまがってください。',
      zh: '請右轉。',
    },
    {
      ja: '左に曲がってください。',
      reading: 'ひだりにまがってください。',
      zh: '請左轉。',
    },
    {
      ja: 'まっすぐ行ってください。',
      reading: 'まっすぐいってください。',
      zh: '請直走。',
    },
    {
      ja: '道を渡ってください。',
      reading: 'みちをわたってください。',
      zh: '請過馬路。',
      note: '「渡る」用於過馬路、過橋，前面的助詞用「を」。',
    },
    {
      ja: '歩いて何分ぐらいかかりますか。',
      reading: 'あるいてなんぷんぐらいかかりますか。',
      zh: '走路大約要幾分鐘？',
    },
    {
      ja: '右側にあります。',
      reading: 'みぎがわにあります。',
      zh: '在右手邊。',
      note: '左邊是「左側（ひだりがわ）」。',
    },
    {
      ja: '一番近い駅はどこですか。',
      reading: 'いちばんちかいえきはどこですか。',
      zh: '最近的車站在哪裡？',
    },
    {
      ja: 'この近くにコンビニはありますか。',
      reading: 'このちかくにコンビニはありますか。',
      zh: '這附近有便利商店嗎？',
    },
    {
      ja: '道に迷いました。',
      reading: 'みちにまよいました。',
      zh: '我迷路了。',
    },
    {
      ja: 'ここはどこですか。',
      zh: '這裡是哪裡？',
      note: '迷路時指著地圖問這句，對方比較容易幫你定位。',
    },
    {
      ja: '駅の前にあります。',
      reading: 'えきのまえにあります。',
      zh: '在車站前面。',
    },
    {
      ja: 'もう一度お願いします。',
      reading: 'もういちどおねがいします。',
      zh: '請再說一次。',
      note: '聽不懂對方指路時的救命句，搭配鞠躬更有禮貌。',
    },
  ],
  drills: [
    {
      id: 'tour-directions-001',
      kind: 'choice',
      stem: 'この 道を まっすぐ（　）ください。',
      options: ['行って', '行きて', '行いて', '行かって'],
      answerIndex: 0,
      explanation:
        '「〜てください」前面要接動詞て形。「行く」是五段動詞的例外音便，て形是「行って」。「行きて」是把ます形「行きます」去掉ます直接加て的常見錯誤；「行いて」套用了「書く→書いて」的イ音便規則，但「行く」是例外，不適用。',
      explanationEn:
        '「〜てください」 requires the te-form of the verb. 「行く」 is an exceptional godan verb whose te-form is 「行って」 with a small tsu. 「行きて」 is the common mistake of dropping ます from 「行きます」 and adding て directly; 「行いて」 applies the i-sound-change rule of 「書く→書いて」, but 「行く」 is the one exception to that rule, so it does not apply.',
    },
    {
      id: 'tour-directions-002',
      kind: 'choice',
      stem: 'あの 橋を（　）、左に 曲がって ください。',
      options: ['渡って', '登って', '止まって', '消して'],
      answerIndex: 0,
      explanation:
        '「橋を渡る」（過橋）是固定搭配，指從一端走到另一端，過馬路也說「道を渡る」。「登る」是往上爬（山、樓梯），用在過橋的語境語意不通；「止まる」是自動詞，不能接「橋を」；「消す」是關掉、擦掉，完全不合語境。',
      explanationEn:
        '「橋を渡る」 (to cross a bridge) is the set collocation for going from one side to the other; crossing a street is likewise 「道を渡る」. 「登る」 means to climb up (a mountain or stairs) and makes no sense for a bridge crossing; 「止まる」 is intransitive and cannot take 「橋を」 as its object; 「消す」 means to turn off or erase — completely out of place here.',
    },
    {
      id: 'tour-directions-003',
      kind: 'choice',
      stem: '駅まで 歩いて（　）ぐらい かかりますか。',
      options: ['なんぷん', 'なんじ', 'なんにん', 'なんばん'],
      answerIndex: 0,
      explanation:
        '問「花多少時間」用「なんぷん（何分）＋かかりますか」。「なんじ（何時）」問的是幾點鐘這個時刻，不能和表示花費時間的「かかります」搭配；「なんにん（何人）」問人數、「なんばん（何番）」問號碼，都和句意不合。',
      explanationEn:
        'To ask how long something takes, use 「なんぷん」 (何分, how many minutes) with 「かかりますか」. 「なんじ」 (何時) asks for a clock time — a point in time — so it cannot pair with 「かかります」, which expresses duration; 「なんにん」 (何人) asks how many people and 「なんばん」 (何番) asks for a number, neither of which fits the sentence.',
    },
    {
      id: 'tour-directions-004',
      kind: 'choice',
      stem: 'コンビニは 駅の 前（　）あります。',
      options: ['に', 'を', 'へ', 'で'],
      answerIndex: 0,
      explanation:
        '表示東西存在的場所，用「場所＋に＋あります」，所以「駅の前にあります」正確。「で」表示動作發生的場所（如「駅で買います」），不能和存在動詞「あります」搭配；「を」接他動詞的受詞、「へ」表示移動方向，在這裡都不對。',
      explanationEn:
        'The location where something exists is marked with place + 「に」 + 「あります」, so 「駅の前にあります」 is correct. 「で」 marks where an action takes place (as in 「駅で買います」) and does not go with the existence verb 「あります」; 「を」 marks the object of a transitive verb and 「へ」 marks direction of movement, so both are wrong here.',
    },
    {
      id: 'tour-directions-005',
      kind: 'order',
      before: 'この 道を',
      after: 'ください。',
      segments: ['まっすぐ', '行って、', 'あの 橋を', '渡って'],
      starIndex: 2,
      explanation:
        '正解語序是「この道を まっすぐ 行って、あの橋を 渡って ください」：先直走、再過橋，用て形依動作順序連接。「この道を」後面若直接接「あの橋を」，會出現兩個「を」相連、文法不通，所以「まっすぐ行って、」必須放在前面。★處是「あの橋を」。',
      explanationEn:
        'The correct order is 「この道を まっすぐ 行って、あの橋を 渡って ください」: go straight first, then cross the bridge, with te-forms linking the actions in sequence. If 「あの橋を」 came right after 「この道を」, two 「を」 phrases would collide ungrammatically, so 「まっすぐ行って、」 must come first. The starred slot is 「あの橋を」.',
    },
    {
      id: 'tour-directions-006',
      kind: 'order',
      before: '',
      after: 'ありますか。',
      segments: ['一番', '近い', 'コンビニは', 'どこに'],
      starIndex: 1,
      explanation:
        '正解語序是「一番 近い コンビニは どこに ありますか」（最近的便利商店在哪裡）。「一番」是副詞，必須放在形容詞「近い」前面構成最高級「一番近い」，再一起修飾名詞「コンビニ」；「どこに」要緊接在「ありますか」前面詢問存在的地點，放到其他位置都不自然。★處是「近い」。',
      explanationEn:
        'The correct order is 「一番 近い コンビニは どこに ありますか」 (where is the nearest convenience store?). 「一番」 is an adverb that must precede the adjective 「近い」 to form the superlative 「一番近い」, which then modifies 「コンビニ」; 「どこに」 must sit directly before 「ありますか」 to ask about location, and any other placement sounds unnatural. The starred slot is 「近い」.',
    },
  ],
}

/**
 * N2 聽解・統合理解（統合理解）
 * 形式：較長的「說明＋兩人討論」script（旁白開場→一人說明多個選項→夫婦/同僚統整比較後做決定）。
 * 正解需統整多項資訊（價格・時間・條件）才能選出；干擾項＝對話中被比較後放棄的選項。
 * 正解一律 options[0]、answerIndex: 0（前端顯示時 shuffle）。
 */
import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n2-listening-togo-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '旅行会社で、店員が日帰りバスツアーについて説明しています。' },
      { speaker: '女', text: '当社の日帰りツアーは四つございます。まず「富士山ハイキングツアー」は、山道を四時間ほど歩く本格的なコースで、九千円です。' },
      { speaker: '女', text: '次に「海鮮市場食べ歩きツアー」は、朝六時に駅を出発して、市場で新鮮な海の幸を楽しんでいただきます。八千円です。' },
      { speaker: '女', text: '「温泉と庭園めぐりツアー」は、歩く距離が短く、昼食付きで一万二千円。最後の「果物狩りツアー」は午後だけの半日コースで、六千円とお手頃です。' },
      { speaker: '旁白', text: '説明を聞いて、夫婦が話しています。' },
      { speaker: '男', text: '海鮮市場、うまそうだなあ。でも朝六時出発か。うちからだと五時前に家を出ないと間に合わないよ。' },
      { speaker: '女', text: 'それはちょっと無理ね。ハイキングはどう？あ、だめだ、私、膝を痛めてるんだった。四時間も歩けないわ。' },
      { speaker: '男', text: 'じゃあ、果物狩りは？一番安いし。' },
      { speaker: '女', text: '半日だけじゃ物足りないわよ、せっかくの休みだもの。温泉のは高いけど、昼食も付いてるし、あまり歩かなくていいんでしょう？' },
      { speaker: '男', text: 'そうだな。たまにはゆっくりするか。じゃ、これで申し込もう。' },
    ],
    question: '二人はどのツアーに申し込みますか。',
    options: [
      '温泉と庭園めぐりツアー',
      '海鮮市場食べ歩きツアー',
      '富士山ハイキングツアー',
      '果物狩りツアー',
    ],
    answerIndex: 0,
    explanation:
      '兩人逐一排除：海鮮市場行程因清晨六點出發、從家裡趕不上而放棄；健行因太太膝蓋受傷走不了四小時；採果行程只有半天，被嫌不夠盡興。溫泉行程雖然最貴，但含午餐且幾乎不用走路，最後兩人決定報名溫泉與庭園之旅。三個干擾項都是對話中出現、卻被比較後否決的選項。',
    explanationEn:
      'The couple eliminates the options one by one: the seafood market tour departs at 6 a.m., too early to reach from home; the hiking tour is out because the wife has a bad knee and cannot walk for four hours; and the fruit-picking tour is only half a day, which she finds unsatisfying for a precious day off. The hot spring and garden tour is the most expensive but includes lunch and requires little walking, so they sign up for it. All three distractors are options mentioned and then rejected during the comparison.',
  },
  {
    id: 'n2-listening-togo-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '電器店で、店員が掃除機について説明しています。' },
      { speaker: '男', text: 'こちらの四台が人気です。Ａはコードレスタイプで、本体が一・五キロととても軽いんですが、充電式なので一回二十分しか使えません。Ｂは吸引力が一番強いモデルですが、重さが五キロあって、音もかなり大きめです。' },
      { speaker: '男', text: 'Ｃはロボット掃除機で、外出中に自動で掃除してくれます。ただ、階段は掃除できません。Ｄは昔ながらの紙パック式で、一番お手頃な一万円。吸引力は標準的ですね。' },
      { speaker: '旁白', text: '説明を聞いて、夫婦が話しています。' },
      { speaker: '女', text: 'ロボット掃除機、楽でいいと思ったけど、うちは二階建てだから、階段は結局自分でやらなきゃいけないのよね。' },
      { speaker: '男', text: 'そうだね。じゃあ、吸引力の強いやつは？' },
      { speaker: '女', text: '五キロもあるのを、階段の上り下りで運ぶの？それに音が大きいと、赤ちゃんが起きちゃうわ。' },
      { speaker: '男', text: '確かに。安い紙パック式でもいいけど、コードがあると、二階で使うたびに差し替えるのが面倒だな。' },
      { speaker: '女', text: 'うちは部屋が少ないから、二十分あれば十分よ。軽いのが一番。' },
      { speaker: '男', text: 'そうだな。じゃ、これにしよう。' },
    ],
    question: '二人はどの掃除機を買うことにしましたか。',
    options: [
      'コードレスタイプの軽い掃除機',
      '吸引力が一番強い掃除機',
      'ロボット掃除機',
      '紙パック式の掃除機',
    ],
    answerIndex: 0,
    explanation:
      '對話中依序否決三台：掃地機器人因家裡是兩層樓、樓梯還是得自己掃；吸力最強款五公斤太重、聲音大會吵醒寶寶；紙袋式雖便宜，但有插頭，上二樓每次都要換插座很麻煩。太太指出家裡房間少、充一次可用二十分鐘已足夠，輕便最重要，因此兩人決定買無線輕量款。',
    explanationEn:
      'Three models are rejected in turn: the robot vacuum cannot handle stairs, and their house has two floors, so they would still clean the stairs themselves; the strongest-suction model weighs five kilograms — too heavy to carry up and down — and its noise would wake the baby; the paper-bag model is cheap but corded, meaning the plug must be switched every time they clean upstairs. The wife notes that with few rooms, twenty minutes of battery is plenty and lightness matters most, so they choose the light cordless model.',
  },
  {
    id: 'n2-listening-togo-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '携帯電話の店で、店員が料金プランについて説明しています。' },
      { speaker: '女', text: 'プランは四つございます。「無制限プラン」は月七千円でデータが使い放題。「二十ギガプラン」は月五千円です。' },
      { speaker: '女', text: '「ライトプラン」は三ギガで月二千円と一番お安いんですが、三ギガを超えると速度が遅くなります。それから「家族プラン」は、ご家族二人以上でご契約いただくと、お一人月四千円で十五ギガまで使えます。' },
      { speaker: '旁白', text: '説明を聞いて、夫婦が話しています。' },
      { speaker: '男', text: '無制限で七千円は高いなあ。俺は通勤中に動画を見るけど、先月使ったのは十ギガだから、使い放題までは要らないし。' },
      { speaker: '女', text: '私はメールと地図ぐらいだから、一番安い三ギガので十分よ。' },
      { speaker: '男', text: 'じゃ、俺が二十ギガプランにすると、五千円と二千円で合計七千円か。家族プランだと二人で八千円だから、そっちのほうが千円高いな。' },
      { speaker: '女', text: 'あら、本当。じゃあ、別々でいいんじゃない？' },
      { speaker: '男', text: 'でも君の三ギガ、超えたら遅くなるんだよ。この前も旅行先で地図が開けないって怒ってたじゃないか。家族プランなら、二人とも十五ギガで安心だよ。' },
      { speaker: '女', text: 'それもそうね。千円の差なら、そっちにしましょう。' },
    ],
    question: '二人はどのプランを選びましたか。',
    options: [
      '家族プラン',
      '二十ギガプラン',
      'ライトプラン',
      '無制限プラン',
    ],
    answerIndex: 0,
    explanation:
      '需統整價格與用量：先生每月約用十GB，無限流量方案七千圓被嫌太貴；一度比較「先生二十GB＋太太最便宜方案」合計七千圓的組合，看似比家庭方案八千圓划算，但太太的三GB方案超量會限速，之前旅行連地圖都開不了。家庭方案每人十五GB、只差一千圓更安心，最後兩人選了家庭方案。',
    explanationEn:
      'This requires combining prices and usage. The husband uses about 10 GB a month, so the 7,000-yen unlimited plan is dismissed as too expensive. They briefly compare the split of his 20 GB plan plus her cheapest plan (7,000 yen total) against the family plan (8,000 yen for two), which looks 1,000 yen cheaper — but her 3 GB plan throttles after the limit, and she once could not even open a map while traveling. With 15 GB each for only 1,000 yen more, the family plan wins, and that is what they choose.',
  },
  {
    id: 'n2-listening-togo-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'カルチャーセンターで、係の人が秋の講座について説明しています。' },
      { speaker: '男', text: '秋の新講座は四つです。「初めてのヨガ」は毎週火曜の午前十時から。「イタリア料理教室」は土曜の午後で、受講料のほかに毎回材料費が二千円かかります。' },
      { speaker: '男', text: '「ビジネス英会話」は水曜の夜七時から。「デジタルカメラ写真講座」は日曜の朝九時からで、初心者向けの内容です。' },
      { speaker: '旁白', text: '説明を聞いて、会社の同僚の男の人と女の人が話しています。' },
      { speaker: '女', text: 'ねえ、何か一緒に習わない？ヨガ、体によさそうよ。' },
      { speaker: '男', text: '平日の午前中は仕事があるから、無理だよ。英会話は夜だけど、水曜はうちの部署、毎週会議で遅くなるだろう。' },
      { speaker: '女', text: 'そうだった。じゃ、イタリア料理は？土曜だし。' },
      { speaker: '男', text: '材料費が毎回二千円は痛いなあ。全部で十回だから、受講料と合わせるとかなりの額になるよ。' },
      { speaker: '女', text: '確かにね。あ、写真のは日曜の朝か。私、この間カメラを買ったばかりなの。初心者向けっていうのも、ちょうどいいわ。' },
      { speaker: '男', text: '俺も日曜の朝なら空いてるよ。よし、それにしよう。' },
    ],
    question: '二人はどの講座に申し込むことにしましたか。',
    options: [
      'デジタルカメラ写真講座',
      'イタリア料理教室',
      'ビジネス英会話',
      '初めてのヨガ',
    ],
    answerIndex: 0,
    explanation:
      '兩人是上班族同事：瑜伽在平日上午，要上班去不了；商用英語會話在週三晚上，男方部門每週三固定開會到很晚；義大利料理教室雖在週六，但每次另收兩千圓材料費，十堂課加上學費太傷荷包。攝影講座在週日早上、又是初學者取向，女方剛買了相機，兩人因此決定報名攝影講座。',
    explanationEn:
      'The two are office coworkers, so scheduling rules most options out: yoga is on weekday mornings when they work; business English is on Wednesday nights, but the man\'s department has a late meeting every Wednesday; and the Italian cooking class, though on Saturdays, charges an extra 2,000 yen in ingredient fees per session, which over ten sessions plus tuition adds up to a painful amount. The photography course meets on Sunday mornings, is aimed at beginners, and the woman has just bought a camera, so they decide to enroll in that one.',
  },
  {
    id: 'n2-listening-togo-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '不動産屋で、店員が四つの部屋を紹介しています。' },
      { speaker: '男', text: 'ご予算に合いそうなのはこの四件です。一つ目は駅から徒歩三分のワンルームで、家賃八万円。二つ目は徒歩十二分の２ＤＫで八万五千円、南向きで日当たりがいいですよ。' },
      { speaker: '男', text: '三つ目は駅前の２ＬＤＫで、建物は新しいんですが十二万円。四つ目はバスで十五分の２ＤＫで、七万円とお安くなっています。' },
      { speaker: '旁白', text: '説明を聞いて、夫婦が話しています。' },
      { speaker: '女', text: '私、在宅勤務だから、仕事用の部屋は絶対に必要よ。ワンルームは、まず無理ね。' },
      { speaker: '男', text: 'だね。駅前の２ＬＤＫは広くていいけど、十二万は予算オーバーだよ。家賃は十万までって決めただろう。' },
      { speaker: '女', text: 'そうね。じゃあ、一番安いバスの物件は？七万円なら余裕もできるし。' },
      { speaker: '男', text: 'いや、俺は毎日電車通勤だから、駅までバスに乗るのはきついよ。朝は道も混むしさ。' },
      { speaker: '女', text: 'それもそうか。徒歩十二分のほうは、歩けない距離じゃないし、日当たりがいいなら、家で仕事する私にはうれしいな。' },
      { speaker: '男', text: '家賃も予算内だしね。じゃ、週末にそこを見に行きましょう。' },
    ],
    question: '二人はどの部屋を見に行くことにしましたか。',
    options: [
      '駅から徒歩十二分の２ＤＫ',
      '駅前の新しい２ＬＤＫ',
      'バスで十五分の２ＤＫ',
      '駅から徒歩三分のワンルーム',
    ],
    answerIndex: 0,
    explanation:
      '要同時滿足格局、預算、通勤三個條件：太太在家工作需要獨立工作間，單間套房首先出局；站前新屋雖寬敞，但月租十二萬超出兩人設定的十萬上限；搭公車的物件最便宜，先生卻因每天搭電車通勤、還要先搭公車到站太辛苦而否決。步行十二分鐘的２ＤＫ租金在預算內、朝南採光好，兩人決定週末去看這間。',
    explanationEn:
      'Three conditions must be satisfied at once: layout, budget, and commute. The wife works from home and needs a dedicated workroom, so the one-room studio is out immediately; the new 2LDK by the station is spacious but its 120,000-yen rent exceeds their agreed 100,000-yen cap; and the cheapest bus-access unit is vetoed by the husband, who commutes by train daily and does not want an extra bus ride on congested morning roads. The 2DK twelve minutes\' walk from the station is within budget, faces south with good sunlight — a plus for her home office — so they arrange to view it on the weekend.',
  },
  {
    id: 'n2-listening-togo-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'スポーツクラブの受付で、係の人が会員の種類について説明しています。' },
      { speaker: '女', text: '会員は四種類ございます。「フルタイム会員」は月一万円で、いつでもご利用いただけます。「デイ会員」は平日の朝から夕方五時までで、月六千円です。' },
      { speaker: '女', text: '「ナイト会員」は平日の夜六時から十一時までで月七千円。「ウィークエンド会員」は土日だけのご利用で、月五千円です。' },
      { speaker: '旁白', text: '説明を聞いて、男の人が妻と話しています。' },
      { speaker: '男', text: '平日の昼間は仕事だから、デイ会員はありえないな。仕事帰りに通うなら、ナイト会員か。' },
      { speaker: '女', text: 'でもあなた、最近残業ばかりじゃない。夜六時に会社を出られる日なんて、週に一日あるかどうかでしょう。' },
      { speaker: '男', text: '確かになあ。それじゃ、月七千円がもったいないか。フルタイムなら、いつでも行けるけど。' },
      { speaker: '女', text: '一万円払っても、結局行けるのは週末だけになりそうよ。' },
      { speaker: '男', text: '言われてみればそうだ。土日の朝なら必ず時間が取れるし、一番安いのでいいや。' },
      { speaker: '女', text: 'そうよ。まずは続けられるかどうか、様子を見ましょう。' },
    ],
    question: '男の人はどうすることにしましたか。',
    options: [
      'ウィークエンド会員になる',
      'ナイト会員になる',
      'フルタイム会員になる',
      'デイ会員になる',
    ],
    answerIndex: 0,
    explanation:
      '男方平日白天要上班，「デイ会員」直接排除；「ナイト会員」看似適合下班後去，但他近來加班多，能六點下班的日子一週不到一天，七千圓太浪費；「フルタイム会員」雖然隨時可用，太太點出他實際上大概只有週末去得成，付一萬圓不划算。統整之後，只有週末一定有空、又最便宜的「ウィークエンド会員」最合理。',
    explanationEn:
      'The man works weekday daytimes, so the day membership is ruled out immediately. The night membership looks right for after work, but he has been doing so much overtime that he can leave by six barely one day a week, making 7,000 yen a waste. The full-time membership allows access anytime, yet his wife points out he would realistically only go on weekends, so 10,000 yen is not worth it. Putting it all together, the weekend membership — the cheapest option and the only time he is reliably free — is the sensible choice, and that is what he picks.',
  },
  {
    id: 'n2-listening-togo-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で、男の人が調べた出張の交通手段について、女の人と話しています。' },
      { speaker: '男', text: '来週の広島出張、行き方を四つ調べたよ。新幹線は片道一万五千円で四時間、駅は会場のすぐそばだ。飛行機は早めに予約すれば一万円だけど、空港から会場までバスでさらに一時間かかる。' },
      { speaker: '男', text: '夜行バスなら六千円で一番安い。朝の六時に着くから、時間には余裕があるね。あとはレンタカーという手もあって、二人で割れば一人七千円くらいだ。' },
      { speaker: '女', text: '会議は朝十時からでしょう。夜行バスで着いてすぐだと、疲れた顔で先方に会うことになるわよ。大事な商談なのに。' },
      { speaker: '男', text: 'それもそうだな。レンタカーはどう？帰りに寄り道もできるし。' },
      { speaker: '女', text: '片道五時間も運転するの？着いたころにはくたくたよ。それに帰りの車内では報告書もまとめたいし。' },
      { speaker: '男', text: 'じゃあ、安い飛行機かな。' },
      { speaker: '女', text: '朝一番の便でも、空港からの移動を入れると十時ぎりぎりよ。バスが渋滞したら間に合わないわ。多少高くても、時間が読めるほうにしましょう。' },
      { speaker: '男', text: '確かに、遅刻したら元も子もないな。そうしよう。' },
    ],
    question: '二人はどうやって広島へ行くことにしましたか。',
    options: [
      '新幹線で行く',
      '飛行機で行く',
      '夜行バスで行く',
      'レンタカーで行く',
    ],
    answerIndex: 0,
    explanation:
      '逐一排除：夜行巴士雖最便宜、時間充裕，但一下車就見客戶會滿臉倦容，不適合重要商談；租車單程要開五小時，抵達時已精疲力盡，回程車上還想整理報告書；便宜的飛機加上機場到會場的一小時巴士，十點的會議只能壓線，塞車就遲到。新幹線雖貴，但車站就在會場旁、時間可掌握，最後兩人選了新幹線。',
    explanationEn:
      'The options fall one by one: the overnight bus is cheapest and arrives early, but they would meet the client looking exhausted before an important negotiation; the rental car means five hours of driving each way, leaving them worn out, and she wants to write the report on the way back; the cheap flight plus the hour-long airport bus makes the 10 a.m. meeting a razor-thin arrival that one traffic jam would ruin. The Shinkansen costs more but stops right by the venue with a predictable schedule, so they take the bullet train.',
  },
  {
    id: 'n2-listening-togo-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社の会議で、情報システム部の男の人がウェブ会議のシステムについて説明しています。' },
      { speaker: '男', text: '候補は四つです。Ａ社のものは無料ですが、一回の会議が四十分までという制限があります。Ｂ社は月三千円で、時間は無制限、会議の録画もできます。' },
      { speaker: '男', text: 'Ｃ社は月五千円と高めですが、資料の翻訳など機能が最も豊富です。ただ、画面が複雑で、慣れるまで研修が必要でしょう。Ｄ社は月二千円と手頃ですが、海外との接続が不安定だという評判があります。' },
      { speaker: '旁白', text: '説明を聞いて、女の人と男の人が話しています。' },
      { speaker: '女', text: 'うちは毎週、上海の工場と打ち合わせがあるから、海外につながりにくいのは論外ね。' },
      { speaker: '男', text: 'ですね。無料のは魅力ですが、定例会議はいつも一時間を超えますから、四十分では途中で切れてしまいます。' },
      { speaker: '女', text: '機能が多いのはよさそうだけど、パソコンが苦手な人も使うのよ。研修までして覚えさせるのは大変だわ。' },
      { speaker: '男', text: 'それに翻訳は今のところ要りませんしね。録画ができれば、欠席した人にあとで見てもらえますし。' },
      { speaker: '女', text: 'そうね。値段も手頃だし、それに決めましょう。' },
    ],
    question: '二人はどの会社のシステムを選びましたか。',
    options: [
      '録画ができるＢ社のシステム',
      '無料で使えるＡ社のシステム',
      '機能が豊富なＣ社のシステム',
      '月二千円のＤ社のシステム',
    ],
    answerIndex: 0,
    explanation:
      '需對照各系統的限制與公司的條件：每週要與上海工廠開會，連線不穩的Ｄ社首先出局；免費的Ａ社有四十分鐘上限，例會超過一小時會中斷；Ｃ社功能多但畫面複雜，還得辦研習才會用，翻譯功能目前也用不到。Ｂ社時間無限制、可錄影讓缺席者事後補看、月費三千圓也合理，因此雀屏中選。',
    explanationEn:
      'Matching each system against the company\'s needs: they meet the Shanghai factory weekly, so D with its unstable overseas connections is out immediately; free system A cuts off at forty minutes while their regular meetings run over an hour; C is feature-rich but complicated enough to require training, and its translation function is not needed yet. B has unlimited time, recording that lets absentees catch up later, and a reasonable 3,000-yen monthly fee, so B is the one they pick.',
  },
  {
    id: 'n2-listening-togo-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で、女の人が考えたお祝いの品について、男の人と話しています。' },
      { speaker: '女', text: '来月の丸山物産さんの創立三十周年、お祝いの品の候補を四つ考えました。まず定番の胡蝶蘭。それから社名と記念日を入れた置き時計。あとは高級ワインのセットと、先方が好きな品を選べるカタログギフトです。' },
      { speaker: '男', text: 'なるほど。花は華やかでいいけど、ああいう式には各社から山ほど届くだろう。うちのだと分からなくなりそうだな。' },
      { speaker: '女', text: 'それに、先方の新しい事務所はあまり広くないと聞きました。置き場所に困らせてしまうかもしれません。' },
      { speaker: '男', text: 'ワインはどうかな。確か、あそこの社長は大のお酒好きだって……。' },
      { speaker: '女', text: 'それが、健康のために去年からお酒をやめられたそうなんです。' },
      { speaker: '男', text: 'そうか、危ないところだった。選べるギフトは便利だけど、お祝いとしては味気ないと思われないかな。' },
      { speaker: '女', text: 'ええ、正式なお祝いには少し軽い印象ですね。やっぱり、社名入りで長く飾っていただけるものにしましょうか。' },
      { speaker: '男', text: 'そうだな。それなら記念にも残るし、それでいこう。' },
    ],
    question: '二人は何を贈ることにしましたか。',
    options: [
      '社名と記念日を入れた置き時計',
      '胡蝶蘭',
      '高級ワインのセット',
      'カタログギフト',
    ],
    answerIndex: 0,
    explanation:
      '四樣賀禮逐一比較：蝴蝶蘭在這類典禮上各家都送，難以留下印象，對方新辦公室又不寬敞、恐怕沒地方擺；社長去年起為了健康戒酒，紅酒差點送錯；型錄禮品雖方便，當正式賀禮顯得輕率。刻有公司名與紀念日的座鐘能長久擺飾、留作紀念，最後兩人決定送座鐘。',
    explanationEn:
      'The four gift ideas are weighed in turn: orchids arrive by the truckload from every company at such ceremonies, so theirs would be lost in the crowd, and the client\'s new office is too small to display them; the wine set nearly backfired because the president gave up alcohol last year for his health; the catalog gift is convenient but feels too casual for a formal celebration. The clock engraved with the company name and anniversary date can be displayed for years as a keepsake, so that is what they send.',
  },
  {
    id: 'n2-listening-togo-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社の会議で、総務の女の人が社員の昼食についての案を説明しています。' },
      { speaker: '女', text: '社員アンケートで、昼食に不便を感じるという声が多かったため、案を四つ用意しました。一つ目はお弁当の配達で、前の日までの注文が必要です。二つ目は昼だけ来てもらう移動販売車。ただし、駐車スペースの確保が条件です。' },
      { speaker: '女', text: '三つ目は近くの飲食店と提携して、社員証を見せると一割引きにしてもらう案。四つ目は社内にパンと軽食の自動販売機を置く案です。' },
      { speaker: '旁白', text: '説明を聞いて、男の人と女の人が話しています。' },
      { speaker: '男', text: '移動販売車は面白いけど、うちの駐車場は来客用でいつも埋まってるよ。場所がないだろう。' },
      { speaker: '女', text: 'そうですね。自動販売機は手軽ですが、パンと軽食だけでは、毎日のお昼には物足りないという声が出そうです。' },
      { speaker: '男', text: '弁当の配達は、前の日までに頼まないといけないのか。急に外回りが入る営業には、無駄になりそうだな。' },
      { speaker: '女', text: 'ええ、うちは外出の多い社員ばかりですから。その点、提携割引なら注文の手間もなく、外に出て気分転換にもなります。会社の費用もほとんどかかりませんし。' },
      { speaker: '男', text: 'じゃあ、まずはそれで進めてもらおうか。' },
    ],
    question: '会社はどの案を進めることにしましたか。',
    options: [
      '近くの飲食店と提携して割引してもらう案',
      'お弁当を配達してもらう案',
      '移動販売車に来てもらう案',
      'パンと軽食の自動販売機を置く案',
    ],
    answerIndex: 0,
    explanation:
      '統整各案的條件：行動餐車需要停車空間，但停車場長期被來客用車占滿；自動販賣機只有麵包輕食，天天當午餐嫌不夠；便當配送必須前一天訂餐，業務常臨時外出，容易造成浪費。與鄰近餐廳合作、出示員工證打九折，不必預訂、能出門轉換心情、公司幾乎零成本，因此決定先推動特約折扣案。',
    explanationEn:
      'Each plan is checked against the company\'s constraints: the food truck needs parking, but the lot is always full of visitors\' cars; the vending machine offers only bread and snacks, too meager for a daily lunch; boxed-lunch delivery requires ordering by the previous day, which would go to waste for sales staff who head out on short notice. The partnership discount — ten percent off by showing an employee badge — needs no pre-ordering, gets people out for a change of pace, and costs the company almost nothing, so that plan goes ahead.',
  },
  {
    id: 'n2-listening-togo-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で、女の人がパソコンの画面を見ながら、男の人と出張のホテルについて話しています。' },
      { speaker: '女', text: '来週の仙台出張のホテル、候補が四つあります。一つ目は会場の隣のホテルで一泊一万二千円。二つ目は駅前で九千円、朝食付きです。三つ目は同じ駅前で八千円ですが、朝食はありません。四つ目は駅からバスで十五分の五千円の宿です。' },
      { speaker: '男', text: '会場の隣は便利だけど、うちの決まりでは一泊一万円までだろう。' },
      { speaker: '女', text: 'ええ、申請しても通らないと思います。では、一番安いのはどうでしょう。浮いた分でタクシーも使えますし。' },
      { speaker: '男', text: 'バスで十五分は困るよ。商談は朝八時半からだ。朝のバスは本数も少ないし、道が混んだら遅れかねない。' },
      { speaker: '女', text: 'それもそうですね。じゃあ、駅前のどちらかですが、千円の差で朝食が付くかどうかです。' },
      { speaker: '男', text: '当日の朝は資料の最終確認もあるから、外へ食べに出る時間はないよ。ホテルの中で済ませられるほうが安心だ。' },
      { speaker: '女', text: 'わかりました。では、こちらで予約します。' },
    ],
    question: '女の人はどのホテルを予約しますか。',
    options: [
      '朝食付きの駅前のホテル',
      '会場の隣のホテル',
      '朝食なしの駅前のホテル',
      '駅からバスで十五分のホテル',
    ],
    answerIndex: 0,
    explanation:
      '要同時滿足規定、時間、行程三個條件：會場旁的飯店一晚一萬二，超過公司一晚一萬圓的上限；最便宜的住宿要搭十五分鐘公車，早上班次少又可能塞車，趕不上八點半的商談；車站前兩間只差一千圓，因為當天早上還要做資料的最後確認、沒時間外出覓食，能在飯店內解決早餐的那間更穩妥，於是預約附早餐的站前飯店。',
    explanationEn:
      'Three constraints apply: company rules, timing, and the morning schedule. The hotel next to the venue costs 12,000 yen, over the 10,000-yen expense cap; the cheapest inn requires a fifteen-minute bus ride with sparse morning service and possible traffic, too risky for an 8:30 negotiation; between the two station-front hotels, only 1,000 yen apart, the man notes there is no time to go out for breakfast because of the final document check that morning, so eating inside the hotel is safer — the woman books the station-front hotel with breakfast included.',
  },
  {
    id: 'n2-listening-togo-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '事務所で、事務機器の会社の男の人が複合機について説明しています。' },
      { speaker: '男', text: 'ご提案する複合機は四機種です。最上位のＡは印刷が非常に速く、月々のリース料は三万円。Ｂは標準型でカラー印刷ができ、月二万円です。' },
      { speaker: '男', text: 'Ｃは小型で月一万円とお安いんですが、白黒専用になります。Ｄは中古の再生品で月八千円。ただ、古い機種ですので、故障の際は部品の取り寄せに一週間ほどかかることがあります。' },
      { speaker: '旁白', text: '説明を聞いて、会社の女の人と男の人が話しています。' },
      { speaker: '女', text: '中古の値段は魅力だけど、修理に一週間って。請求書が出せなくなったら、仕事にならないわ。' },
      { speaker: '男', text: 'ですね。白黒専用のは、どうします？うちは来月から、商品のちらしを自分たちで刷ることになったでしょう。' },
      { speaker: '女', text: 'そうなのよ。ちらしがカラーで刷れないんじゃ、意味がないわね。' },
      { speaker: '男', text: '一番速いのはどうです？見た目もかっこいいですし。' },
      { speaker: '女', text: 'うちの印刷の量で、あの速さは要らないわよ。リース料が今より高くなったら、経費を減らすどころじゃないじゃない。' },
      { speaker: '男', text: 'それもそうですね。じゃあ、機能と値段のつり合いが取れたこれにしましょう。' },
    ],
    question: '二人はどの複合機を選びましたか。',
    options: [
      'カラー印刷ができる標準型の複合機',
      '印刷が速い最上位の複合機',
      '白黒専用の小型の複合機',
      '中古の再生品の複合機',
    ],
    answerIndex: 0,
    explanation:
      '中古機雖然月租最低，但故障時零件調貨要一週，開不出帳單會影響業務；小型機只能印黑白，下個月起要自製彩色傳單，不符需求；最高階機種印得快卻月租三萬，以公司的印量用不到那種速度，租金變貴反而無助於節省經費。標準型能印彩色、月租兩萬，功能與價格最均衡，因此兩人選了標準型。',
    explanationEn:
      'The used machine has the lowest fee, but a breakdown means waiting a week for parts, and being unable to print invoices would halt work; the compact model is monochrome-only, useless now that they will print color flyers themselves from next month; the top model is fast but costs 30,000 yen a month — speed they do not need at their print volume, and a higher fee defeats the goal of cutting expenses. The standard model prints in color for 20,000 yen, the best balance of function and price, so that is their choice.',
  },
]

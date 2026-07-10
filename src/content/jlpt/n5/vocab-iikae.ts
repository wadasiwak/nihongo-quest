import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-001',
    stem: '【ゆうべ】 ともだちに でんわを かけました。',
    options: [
      'きのうの よる でんわを かけました。',
      'きょうの あさ でんわを かけました。',
      'おとといの よる でんわを かけました。',
      'きのうの ひる でんわを かけました。',
    ],
    answerIndex: 0,
    explanation:
      '「ゆうべ」（昨晚）＝「きのうの よる」，所以第一句意思最接近。「きょうの あさ」是今天早上，日期與時段都不同；「おとといの よる」是前天晚上，往前多了一天；「きのうの ひる」雖然同一天但時段是中午，皆不等值。',
    explanationEn:
      '「ゆうべ」 means "last night," the same as 「きのうの よる」, so the first sentence is the closest match. 「きょうの あさ」 is this morning — wrong day and wrong time of day; 「おとといの よる」 is the night before last, one day too far back; 「きのうの ひる」 is the right day but at noon, so none of them are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-002',
    stem: 'えきの まえに ひとが 【おおぜい】 いました。',
    options: [
      'えきの まえに ひとが たくさん いました。',
      'えきの まえに ひとが すこし いました。',
      'えきの まえに ひとが ひとりも いませんでした。',
      'えきの まえに ひとが ふたり いました。',
    ],
    answerIndex: 0,
    explanation:
      '「おおぜい」專指「人很多」，改寫成「たくさん いました」意思最接近。「すこし」是「少數幾個」，數量方向相反；「ひとりも いませんでした」是「一個人也沒有」，完全否定；「ふたり」是具體的兩個人，都和「大批人潮」不等值。',
    explanationEn:
      '「おおぜい」 specifically means "a large crowd of people," so 「たくさん いました」 (there were many) is the closest rewording. 「すこし」 means only a few — the opposite direction; 「ひとりも いませんでした」 means there was not a single person; 「ふたり」 is exactly two people, so none of these match a big crowd.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-003',
    stem: 'わたしの へやは 【せまい】です。',
    options: [
      'わたしの へやは ひろくないです。',
      'わたしの へやは おおきいです。',
      'わたしの へやは ふるいです。',
      'わたしの へやは きれいじゃないです。',
    ],
    answerIndex: 0,
    explanation:
      '「せまい」（狹窄）的反義詞是「ひろい」（寬敞），因此「ひろくないです」是最接近的改寫。「おおきい」（大）方向相反；「ふるい」（舊）講的是新舊；「きれいじゃない」（不乾淨、不漂亮）講的是整潔美觀，都不是空間大小的問題。',
    explanationEn:
      '「せまい」 means "narrow, cramped"; its opposite is 「ひろい」 (spacious), so 「ひろくないです」 (not spacious) is the closest rewording. 「おおきい」 (big) points the opposite way; 「ふるい」 (old) is about age; 「きれいじゃない」 (not clean/pretty) is about tidiness — none of them describe how much space the room has.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-004',
    stem: '【おととい】 えいがを みました。',
    options: [
      'ふつかまえに えいがを みました。',
      'きのう えいがを みました。',
      'ふつかごに えいがを みます。',
      'いっしゅうかんまえに えいがを みました。',
    ],
    answerIndex: 0,
    explanation:
      '「おととい」（前天）＝「ふつかまえ」（兩天前）。「きのう」只往前一天，天數不對；「ふつかごに みます」是「兩天後要看」，時間方向整個相反；「いっしゅうかんまえ」是一週前，距離差太多，皆不能替換。',
    explanationEn:
      '「おととい」 means "the day before yesterday," which equals 「ふつかまえ」 (two days ago). 「きのう」 (yesterday) goes back only one day; 「ふつかごに みます」 means "will watch two days from now" — the time direction is reversed; 「いっしゅうかんまえ」 is a whole week ago, far too long, so none of them can replace it.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-005',
    stem: 'この りょうりは 【まずい】です。',
    options: [
      'この りょうりは おいしくないです。',
      'この りょうりは おいしいです。',
      'この りょうりは あまいです。',
      'この りょうりは つめたいです。',
    ],
    answerIndex: 0,
    explanation:
      '「まずい」（難吃）就是「おいしくない」（不好吃），意思最接近。「おいしい」（好吃）恰好相反；「あまい」（甜）只是描述味道的一種，甜不等於難吃；「つめたい」（冰涼）描述溫度，與好不好吃無關。',
    explanationEn:
      '「まずい」 (tastes bad) means the same as 「おいしくない」 (not tasty), so that is the closest match. 「おいしい」 (tasty) is the exact opposite; 「あまい」 (sweet) only describes one kind of flavor, and sweet does not mean bad-tasting; 「つめたい」 (cold) describes temperature, not how the food tastes.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-006',
    stem: 'ちちは ぎんこうに 【つとめて います】。',
    options: [
      'ちちは ぎんこうで はたらいて います。',
      'ちちは ぎんこうで おかねを かりて います。',
      'ちちは ぎんこうで べんきょうして います。',
      'ちちは ぎんこうを やすんで います。',
    ],
    answerIndex: 0,
    explanation:
      '「つとめる」（任職）＝「はたらく」（工作），「銀行に つとめて いる」就是「在銀行上班」。「おかねを かりて いる」是向銀行借錢，只是客人；「べんきょうして いる」是在唸書；「やすんで いる」是請假休息，方向相反，都不等值。',
    explanationEn:
      '「つとめる」 (to be employed) means the same as 「はたらく」 (to work), so working at a bank is the correct rewording. 「おかねを かりて いる」 means borrowing money from the bank — just being a customer; 「べんきょうして いる」 means studying there; 「やすんで いる」 means taking the day off, the opposite of working.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-007',
    stem: 'きのう ともだちと 【きっさてん】へ いきました。',
    options: [
      'コーヒーや おちゃを のむ みせへ いきました。',
      'ほんを かう みせへ いきました。',
      'くすりを かう みせへ いきました。',
      'かみを きる みせへ いきました。',
    ],
    answerIndex: 0,
    explanation:
      '「きっさてん」（咖啡廳）是喝咖啡、紅茶等飲料的店，所以第一句是正確的改寫。「ほんを かう みせ」是書店（ほんや）；「くすりを かう みせ」是藥局（くすりや）；「かみを きる みせ」是理髮店（とこや），都是別種店。',
    explanationEn:
      '「きっさてん」 is a coffee shop — a place where you drink coffee, tea, and other drinks — so the first sentence is the correct rewording. A shop where you buy books is a bookstore; a shop where you buy medicine is a pharmacy; a shop where you get your hair cut is a barbershop — all different kinds of shops.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-008',
    stem: 'がっこうで にほんごを 【ならって います】。',
    options: [
      'がっこうで にほんごを べんきょうして います。',
      'がっこうで にほんごを おしえて います。',
      'がっこうで にほんごで はなして います。',
      'がっこうで にほんごを わすれて います。',
    ],
    answerIndex: 0,
    explanation:
      '「ならう」（跟人學習）與「べんきょうする」（唸書、學習）意思最接近，都是自己在學。「おしえる」（教）是把知識教給別人，立句方向恰好相反；「にほんごで はなす」只是用日語交談；「わすれる」（忘記）更是不相干，皆不能替換。',
    explanationEn:
      '「ならう」 (to learn from someone) is closest to 「べんきょうする」 (to study) — in both cases you are the learner. 「おしえる」 (to teach) points the opposite way, giving knowledge to others; 「にほんごで はなす」 just means talking in Japanese; 「わすれる」 (to forget) is unrelated, so none of them can replace it.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-009',
    stem: 'わたしは ともだちに ほんを 【かりました】。',
    options: [
      'ともだちが わたしに ほんを かしました。',
      'わたしが ともだちに ほんを かしました。',
      'わたしは ともだちに ほんを あげました。',
      'わたしは ともだちに ほんを かえしました。',
    ],
    answerIndex: 0,
    explanation:
      '「かりる」（借入）：我向朋友借書，換個角度說就是「朋友借（かす）書給我」，所以第一句等值。第二句「わたしが かしました」變成我借出、方向相反；「あげました」是把書送給朋友；「かえしました」是把書還給朋友，都不是「借入」。',
    explanationEn:
      '「かりる」 means "to borrow": I borrowed a book from my friend, which seen from the other side means my friend lent (「かす」) the book to me — so the first sentence is equivalent. The second sentence makes me the lender, reversing the direction; 「あげました」 means giving the book away; 「かえしました」 means returning it — neither is borrowing.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-010',
    stem: 'この うたは 【ゆうめい】です。',
    options: [
      'みんな この うたを しって います。',
      'だれも この うたを しりません。',
      'わたしだけ この うたを しって います。',
      'みんな この うたを わすれました。',
    ],
    answerIndex: 0,
    explanation:
      '「ゆうめい」（有名）表示大家都知道，所以「みんな しって います」意思最接近。「だれも しりません」（沒有人知道）恰好相反；「わたしだけ しって います」只有我知道，正是「不有名」；「みんな わすれました」是大家都忘了，也與有名不符。',
    explanationEn:
      '「ゆうめい」 (famous) means that everyone knows it, so 「みんな しって います」 is the closest match. 「だれも しりません」 (nobody knows it) is the exact opposite; 「わたしだけ しって います」 (only I know it) is precisely what "not famous" would look like; 「みんな わすれました」 (everyone forgot it) also contradicts being famous.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-011',
    stem: '【けさ】 パンを たべました。',
    options: [
      'きょうの あさ パンを たべました。',
      'きのうの あさ パンを たべました。',
      'きょうの ばん パンを たべました。',
      'きのうの ばん パンを たべました。',
    ],
    answerIndex: 0,
    explanation:
      '「けさ」（今早）＝「きょうの あさ」。「きのうの あさ」是昨天早上，日期不對；「きょうの ばん」雖是今天但時段是晚上；「きのうの ばん」則是「ゆうべ」的意思，日期時段都不同，皆不能替換。',
    explanationEn:
      '「けさ」 means "this morning," the same as 「きょうの あさ」. 「きのうの あさ」 is yesterday morning — wrong day; 「きょうの ばん」 is the right day but in the evening; 「きのうの ばん」 means last night, which is 「ゆうべ」 — wrong day and wrong time, so none of them can replace it.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-012',
    stem: 'ははは いま 【だいどころ】に います。',
    options: [
      'ははは りょうりを つくる ところに います。',
      'ははは からだを あらう ところに います。',
      'ははは くるまを とめる ところに います。',
      'ははは ねる ところに います。',
    ],
    answerIndex: 0,
    explanation:
      '「だいどころ」（廚房）是做菜的地方，所以「りょうりを つくる ところ」是正確的改寫。「からだを あらう ところ」是浴室（おふろ）；「くるまを とめる ところ」是停車的地方；「ねる ところ」是寢室，都是家裡的別的空間。',
    explanationEn:
      '「だいどころ」 (kitchen) is the place where you cook, so 「りょうりを つくる ところ」 is the correct rewording. The place where you wash your body is the bath; the place where you park the car is a parking spot; the place where you sleep is the bedroom — all different rooms or spaces in the home.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-013',
    stem: 'きのうの しゅくだいは 【やさしかった】です。',
    options: [
      'きのうの しゅくだいは むずかしくなかったです。',
      'きのうの しゅくだいは むずかしかったです。',
      'きのうの しゅくだいは おおくなかったです。',
      'きのうの しゅくだいは ながかったです。',
    ],
    answerIndex: 0,
    explanation:
      '「やさしい」在此指「簡單」，反義詞是「むずかしい」（難），因此「むずかしくなかった」（不難）是最接近的說法。「むずかしかった」方向相反；「おおくなかった」（不多）講的是份量；「ながかった」（很長）講的是長度，都不是難易度。',
    explanationEn:
      'Here 「やさしい」 means "easy"; its opposite is 「むずかしい」 (difficult), so 「むずかしくなかった」 (was not difficult) is the closest rewording. 「むずかしかった」 points the opposite way; 「おおくなかった」 (was not much) is about the amount of homework; 「ながかった」 (was long) is about length — neither is about difficulty.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-014',
    stem: 'あには いま 【でかけて います】。',
    options: [
      'あには いま いえに いません。',
      'あには いま いえに います。',
      'あには いま へやで ねて います。',
      'あには いま おふろに はいって います。',
    ],
    answerIndex: 0,
    explanation:
      '「でかけて いる」（外出中）表示人不在家，所以「いえに いません」意思最接近。「いえに います」（在家）恰好相反；「ねて いる」和「おふろに はいって いる」雖然也是在做某件事，但人都還在家裡，與「外出」矛盾。',
    explanationEn:
      '「でかけて いる」 (to be out) means the person is not at home, so 「いえに いません」 is the closest match. 「いえに います」 (is at home) is the exact opposite; sleeping in his room or taking a bath both mean he is still inside the house, which contradicts being out.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-015',
    stem: 'まいばん 【くだもの】を たべます。',
    options: [
      'まいばん りんごや みかんなどを たべます。',
      'まいばん にくや さかななどを たべます。',
      'まいばん パンや ごはんなどを たべます。',
      'まいばん おかしや ケーキなどを たべます。',
    ],
    answerIndex: 0,
    explanation:
      '「くだもの」（水果）的代表例是蘋果、橘子，所以第一句是正確的改寫。「にくや さかな」是肉和魚；「パンや ごはん」是主食；「おかしや ケーキ」是零食甜點，雖然都是食物，但類別完全不同，不能代替「水果」。',
    explanationEn:
      '「くだもの」 means "fruit," and apples and mandarin oranges are typical examples, so the first sentence is the correct rewording. 「にくや さかな」 is meat and fish; 「パンや ごはん」 is bread and rice — staple foods; 「おかしや ケーキ」 is snacks and cake. They are all food, but entirely different categories from fruit.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-016',
    stem: '【おととし】 かぞくと おきなわへ いきました。',
    options: [
      'にねんまえに おきなわへ いきました。',
      'きょねん おきなわへ いきました。',
      'さんねんまえに おきなわへ いきました。',
      'ふつかまえに おきなわへ いきました。',
    ],
    answerIndex: 0,
    explanation:
      '「おととし」（前年）＝「にねんまえ」（兩年前）。「きょねん」（去年）只往前一年；「さんねんまえ」（三年前）多算了一年；「ふつかまえ」（兩天前）把「年」混成「天」，是「おととい」的意思，皆與前年不等值。',
    explanationEn:
      '「おととし」 means "the year before last," which equals 「にねんまえ」 (two years ago). 「きょねん」 (last year) goes back only one year; 「さんねんまえ」 (three years ago) is one year too many; 「ふつかまえ」 (two days ago) confuses years with days — that would be 「おととい」. None of them match.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-017',
    stem: 'にちようびに 【せんたく】を しました。',
    options: [
      'にちようびに ふくを あらいました。',
      'にちようびに へやを そうじしました。',
      'にちようびに さらを あらいました。',
      'にちようびに りょうりを つくりました。',
    ],
    answerIndex: 0,
    explanation:
      '「せんたく」（洗衣服）＝「ふくを あらう」，所以第一句是正確的改寫。「そうじ」是打掃房間；「さらを あらう」雖然也是「洗」，但洗的是盤子（洗碗），對象不同；「りょうりを つくる」是做菜，都是別的家事。',
    explanationEn:
      '「せんたく」 means "doing the laundry," the same as 「ふくを あらう」 (washing clothes), so the first sentence is correct. 「そうじ」 is cleaning the room; 「さらを あらう」 also uses "wash," but the object is dishes, so it means washing up; 「りょうりを つくる」 is cooking — all different household chores.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-018',
    stem: 'きょうは 【ひま】です。',
    options: [
      'きょうは いそがしくないです。',
      'きょうは いそがしいです。',
      'きょうは げんきじゃないです。',
      'きょうは つかれて います。',
    ],
    answerIndex: 0,
    explanation:
      '「ひま」（空閒）的反義詞是「いそがしい」（忙碌），因此「いそがしくないです」是最接近的改寫。「いそがしいです」方向恰好相反；「げんきじゃない」（沒精神）和「つかれて いる」（很累）講的是身體狀態，有空與否和累不累是兩回事。',
    explanationEn:
      '「ひま」 (free, having time) is the opposite of 「いそがしい」 (busy), so 「いそがしくないです」 (not busy) is the closest rewording. 「いそがしいです」 points the opposite way; 「げんきじゃない」 (not feeling well) and 「つかれて いる」 (tired) describe physical condition — having free time and being tired are different things.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-019',
    stem: 'がっこうは えきの 【そば】に あります。',
    options: [
      'がっこうは えきの ちかくに あります。',
      'がっこうは えきから とおい ところに あります。',
      'がっこうは えきの なかに あります。',
      'がっこうは びょういんの ちかくに あります。',
    ],
    answerIndex: 0,
    explanation:
      '「そば」（旁邊、附近）＝「ちかく」，所以第一句意思最接近。「えきから とおい ところ」（離車站很遠）距離方向相反；「えきの なか」（車站裡面）是在車站內部，不是在旁邊；「びょういんの ちかく」換成了醫院，地標整個不同。',
    explanationEn:
      '「そば」 (beside, near) means the same as 「ちかく」, so the first sentence is the closest match. 「えきから とおい ところ」 (far from the station) reverses the distance; 「えきの なか」 (inside the station) is inside, not next to it; 「びょういんの ちかく」 swaps the landmark for a hospital, changing the location entirely.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-020',
    stem: 'けさ ちちと こうえんを 【さんぽしました】。',
    options: [
      'こうえんを ゆっくり あるきました。',
      'こうえんを はやく はしりました。',
      'こうえんで およぎました。',
      'こうえんを そうじしました。',
    ],
    answerIndex: 0,
    explanation:
      '「さんぽする」（散步）就是悠閒地走路，改寫成「ゆっくり あるきました」意思最接近。「はしる」（跑）是跑步、慢跑，速度與方式都不同；「およぐ」（游泳）是在水裡的活動；「そうじする」（打掃）更與散步無關，皆不能替換。',
    explanationEn:
      '「さんぽする」 (to take a walk) means walking in a leisurely way, so 「ゆっくり あるきました」 is the closest rewording. 「はしる」 (to run) is jogging or running — different speed and manner; 「およぐ」 (to swim) is an activity in the water; 「そうじする」 (to clean) has nothing to do with a stroll.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-021',
    stem: '【あさって】 ともだちと うみへ いきます。',
    options: [
      'ふつかごに ともだちと うみへ いきます。',
      'あした ともだちと うみへ いきます。',
      'ふつかまえに ともだちと うみへ いきました。',
      'いっしゅうかんごに ともだちと うみへ いきます。',
    ],
    answerIndex: 0,
    explanation:
      '「あさって」（後天）＝「ふつかご」（兩天後）。「あした」（明天）只往後一天，天數不對；「ふつかまえに いきました」是兩天前去過了，時間方向整個相反；「いっしゅうかんご」是一週後，距離差太多，皆不能替換。',
    explanationEn:
      '「あさって」 means "the day after tomorrow," which equals 「ふつかご」 (two days from now). 「あした」 (tomorrow) is only one day ahead; 「ふつかまえに いきました」 means "went two days ago," reversing the time direction; 「いっしゅうかんご」 is a whole week later — far too long, so none of them fit.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-022',
    stem: '【こんばん】 テレビで サッカーを みます。',
    options: [
      'きょうの よる サッカーを みます。',
      'きのうの よる サッカーを みました。',
      'きょうの あさ サッカーを みます。',
      'あしたの よる サッカーを みます。',
    ],
    answerIndex: 0,
    explanation:
      '「こんばん」（今晚）＝「きょうの よる」，所以第一句意思最接近。「きのうの よる」是昨天晚上，也就是「ゆうべ」，日期不對；「きょうの あさ」雖是今天但時段是早上；「あしたの よる」是明天晚上，皆與今晚不等值。',
    explanationEn:
      '「こんばん」 means "tonight," the same as 「きょうの よる」, so the first sentence is the closest match. 「きのうの よる」 is last night, which is 「ゆうべ」 — wrong day; 「きょうの あさ」 is the right day but in the morning; 「あしたの よる」 is tomorrow night, so none of them are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-023',
    stem: '【まいあさ】 コーヒーを のみます。',
    options: [
      'まいにち あさ コーヒーを のみます。',
      'まいにち よる コーヒーを のみます。',
      'ときどき あさ コーヒーを のみます。',
      'きょうの あさだけ コーヒーを のみました。',
    ],
    answerIndex: 0,
    explanation:
      '「まいあさ」（每天早上）＝「まいにち あさ」，第一句是正確的改寫。「まいにち よる」雖然也是每天，但時段變成晚上；「ときどき」（有時）頻率不對，每天早上是天天都喝；「きょうの あさだけ」只有今天早上一次，皆不能替換。',
    explanationEn:
      '「まいあさ」 (every morning) equals 「まいにち あさ」, so the first sentence is the correct rewording. 「まいにち よる」 is also every day, but the time of day becomes night; 「ときどき」 (sometimes) has the wrong frequency, since every morning means daily; 「きょうの あさだけ」 means only this one morning — none of these can replace it.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-024',
    stem: 'まいにち しちじに 【ゆうはん】を たべます。',
    options: [
      'まいにち よる ごはんを たべます。',
      'まいにち あさ ごはんを たべます。',
      'まいにち ひる ごはんを たべます。',
      'まいにち おかしを たべます。',
    ],
    answerIndex: 0,
    explanation:
      '「ゆうはん」（晚飯）＝「よる（の） ごはん」，所以第一句意思最接近。「あさ ごはん」是早餐（あさごはん）；「ひる ごはん」是午餐（ひるごはん），時段都不對；「おかし」（點心零食）根本不是正餐，皆不能代替「晚飯」。',
    explanationEn:
      '「ゆうはん」 means "dinner," the same as the evening meal 「よる ごはん」, so the first sentence is the closest match. 「あさ ごはん」 is breakfast and 「ひる ごはん」 is lunch — wrong times of day; 「おかし」 (sweets, snacks) is not a proper meal at all, so none of these can replace it.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-025',
    stem: 'きのう レストランで かぞくと 【しょくじを しました】。',
    options: [
      'レストランで かぞくと ごはんを たべました。',
      'レストランで かぞくと かいものを しました。',
      'レストランで かぞくと りょうりを つくりました。',
      'レストランで かぞくと しゃしんを とりました。',
    ],
    answerIndex: 0,
    explanation:
      '「しょくじを する」（用餐）＝「ごはんを たべる」（吃飯），第一句是正確的改寫。「かいものを する」是購物；「りょうりを つくる」是自己動手做菜，在餐廳是廚師做而不是客人做；「しゃしんを とる」是拍照，皆與「吃飯」不等值。',
    explanationEn:
      '「しょくじを する」 (to have a meal) means the same as 「ごはんを たべる」 (to eat), so the first sentence is correct. 「かいものを する」 is shopping; 「りょうりを つくる」 is cooking yourself — at a restaurant the chef cooks, not the customer; 「しゃしんを とる」 is taking photos. None of them mean eating a meal.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-026',
    stem: 'にちようびに へやの 【そうじを しました】。',
    options: [
      'にちようびに へやを きれいに しました。',
      'にちようびに ふくを あらいました。',
      'にちようびに へやで りょうりを つくりました。',
      'にちようびに へやを ひろく しました。',
    ],
    answerIndex: 0,
    explanation:
      '「そうじを する」（打掃）就是把房間弄乾淨，改寫成「きれいに しました」意思最接近。「ふくを あらう」是洗衣服（せんたく），家事種類不同；「りょうりを つくる」是做菜；「ひろく する」是把房間變寬敞，打掃不會改變房間大小，皆不能替換。',
    explanationEn:
      '「そうじを する」 (to clean) means making the room clean, so 「きれいに しました」 is the closest rewording. 「ふくを あらう」 is doing the laundry, a different chore; 「りょうりを つくる」 is cooking; 「ひろく する」 means making the room bigger — cleaning does not change the size of a room.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-027',
    stem: '【りょうしん】と りょこうに いきました。',
    options: [
      'ちちと ははと りょこうに いきました。',
      'あにと あねと りょこうに いきました。',
      'そふと そぼと りょこうに いきました。',
      'ちちと あにと りょこうに いきました。',
    ],
    answerIndex: 0,
    explanation:
      '「りょうしん」（雙親）指父親和母親，所以「ちちと はは」是正確的改寫。「あにと あね」是哥哥和姊姊，屬於兄弟姊妹（きょうだい）；「そふと そぼ」是祖父和祖母；「ちちと あに」是父親和哥哥，成員組合都不對，皆不能代替「雙親」。',
    explanationEn:
      '「りょうしん」 means "parents," that is, father and mother, so 「ちちと はは」 is the correct rewording. 「あにと あね」 (older brother and older sister) are siblings; 「そふと そぼ」 are grandfather and grandmother; 「ちちと あに」 is father and older brother — the wrong combination, so none can mean "parents."',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-028',
    stem: 'あねは ことし 【はたち】に なりました。',
    options: [
      'あねは ことし にじゅっさいに なりました。',
      'あねは ことし じゅうはっさいに なりました。',
      'あねは ことし じゅっさいに なりました。',
      'あねは ことし さんじゅっさいに なりました。',
    ],
    answerIndex: 0,
    explanation:
      '「はたち」是「二十歲」的特別讀法，＝「にじゅっさい」，所以第一句等值。「じゅうはっさい」是十八歲；「じゅっさい」是十歲；「さんじゅっさい」是三十歲，數字都不對。年齡中只有二十歲有「はたち」這個特殊唸法，要特別記住。',
    explanationEn:
      '「はたち」 is the special reading for "twenty years old," equal to 「にじゅっさい」, so the first sentence is equivalent. 「じゅうはっさい」 is eighteen, 「じゅっさい」 is ten, and 「さんじゅっさい」 is thirty — all the wrong numbers. Twenty is the only age with the special reading 「はたち」, so be sure to remember it.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-029',
    stem: 'まいしゅう どようびに 【としょかん】へ いきます。',
    options: [
      'ほんを よんだり かりたり する ところへ いきます。',
      'ほんを かう ところへ いきます。',
      'えを みる ところへ いきます。',
      'えいがを みる ところへ いきます。',
    ],
    answerIndex: 0,
    explanation:
      '「としょかん」（圖書館）是看書、借書的地方，所以第一句是正確的改寫。「ほんを かう ところ」是書店（ほんや），書要用買的不是借的；「えを みる ところ」是美術館；「えいがを みる ところ」是電影院，都是別的場所。',
    explanationEn:
      '「としょかん」 (library) is a place where you read and borrow books, so the first sentence is the correct rewording. A place where you buy books is a bookstore — there you buy, not borrow; a place where you look at paintings is an art museum; a place where you watch movies is a cinema — all different places.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-030',
    stem: 'ごごから 【ゆうびんきょく】へ いきます。',
    options: [
      'てがみや はがきを だす ところへ いきます。',
      'おかねを だしたり いれたり する ところへ いきます。',
      'でんしゃに のる ところへ いきます。',
      'やさいや くだものを かう ところへ いきます。',
    ],
    answerIndex: 0,
    explanation:
      '「ゆうびんきょく」（郵局）是寄信、寄明信片的地方，所以第一句是正確的改寫。「おかねを だしたり いれたり する ところ」是銀行（ぎんこう）；「でんしゃに のる ところ」是車站（えき）；「やさいや くだものを かう ところ」是蔬果店，都是別的場所。',
    explanationEn:
      '「ゆうびんきょく」 (post office) is where you send letters and postcards, so the first sentence is the correct rewording. A place where you take out and deposit money is a bank; a place where you board trains is a station; a place where you buy vegetables and fruit is a grocery shop — all different places.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-031',
    stem: 'すみません、【おてあらい】は どこですか。',
    options: [
      'トイレは どこですか。',
      'だいどころは どこですか。',
      'げんかんは どこですか。',
      'エレベーターは どこですか。',
    ],
    answerIndex: 0,
    explanation:
      '「おてあらい」是「トイレ」（廁所）比較禮貌的說法，兩者可以互換，所以第一句等值。「だいどころ」（廚房）是做菜的地方；「げんかん」（玄關）是進門脫鞋的地方；「エレベーター」（電梯）是上下樓的設備，都是別的場所，皆不能替換。',
    explanationEn:
      '「おてあらい」 is the more polite word for 「トイレ」 (restroom), and the two are interchangeable, so the first sentence is equivalent. 「だいどころ」 (kitchen) is where you cook; 「げんかん」 (entryway) is where you take off your shoes; 「エレベーター」 (elevator) takes you between floors — all different places, so none can replace it.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-032',
    stem: 'この くつは 【きたない】です。',
    options: [
      'この くつは きれいじゃないです。',
      'この くつは きれいです。',
      'この くつは あたらしいです。',
      'この くつは ちいさいです。',
    ],
    answerIndex: 0,
    explanation:
      '「きたない」（髒）的反義詞是「きれい」（乾淨），因此「きれいじゃないです」是最接近的改寫。「きれいです」方向恰好相反；「あたらしい」（新）講的是新舊，新鞋也可能弄髒；「ちいさい」（小）講的是尺寸，都不是乾不乾淨的問題。',
    explanationEn:
      '「きたない」 (dirty) is the opposite of 「きれい」 (clean), so 「きれいじゃないです」 (not clean) is the closest rewording. 「きれいです」 points the opposite way; 「あたらしい」 (new) is about age — even new shoes can get dirty; 「ちいさい」 (small) is about size — neither is about cleanliness.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-033',
    stem: 'きのうの えいがは 【つまらなかった】です。',
    options: [
      'きのうの えいがは おもしろくなかったです。',
      'きのうの えいがは おもしろかったです。',
      'きのうの えいがは みじかかったです。',
      'きのうの えいがは こわかったです。',
    ],
    answerIndex: 0,
    explanation:
      '「つまらない」（無聊）的反義詞是「おもしろい」（有趣），因此「おもしろくなかった」（不有趣）是最接近的改寫。「おもしろかった」方向恰好相反；「みじかかった」（很短）講的是長度；「こわかった」（很恐怖）是另一種感想，皆不等值。',
    explanationEn:
      '「つまらない」 (boring) is the opposite of 「おもしろい」 (interesting), so 「おもしろくなかった」 (was not interesting) is the closest rewording. 「おもしろかった」 points the opposite way; 「みじかかった」 (was short) is about length; 「こわかった」 (was scary) is a different kind of impression — none are equivalent.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-034',
    stem: 'この みせの りょうりは 【やすい】です。',
    options: [
      'この みせの りょうりは たかくないです。',
      'この みせの りょうりは たかいです。',
      'この みせの りょうりは おいしいです。',
      'この みせの りょうりは すくないです。',
    ],
    answerIndex: 0,
    explanation:
      '「やすい」（便宜）的反義詞是「たかい」（貴），因此「たかくないです」（不貴）是最接近的改寫。「たかいです」方向恰好相反；「おいしい」（好吃）講的是味道，便宜不代表好吃；「すくない」（份量少）講的是量，都不是價格的問題。',
    explanationEn:
      '「やすい」 (cheap) is the opposite of 「たかい」 (expensive), so 「たかくないです」 (not expensive) is the closest rewording. 「たかいです」 points the opposite way; 「おいしい」 (delicious) is about taste — cheap does not mean tasty; 「すくない」 (small in amount) is about quantity — neither is about price.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-035',
    stem: 'おとうとは やさいが 【きらい】です。',
    options: [
      'おとうとは やさいが すきじゃないです。',
      'おとうとは やさいが すきです。',
      'おとうとは やさいを まいにち たべます。',
      'おとうとは やさいを かいたいです。',
    ],
    answerIndex: 0,
    explanation:
      '「きらい」（討厭）就是「すきじゃない」（不喜歡），意思最接近。「すきです」（喜歡）恰好相反；「まいにち たべます」是每天都吃，討厭的東西通常不會天天吃；「かいたいです」是想買，更與討厭矛盾，皆不能替換。',
    explanationEn:
      '「きらい」 (to dislike) means the same as 「すきじゃない」 (to not like), so that is the closest match. 「すきです」 (likes) is the exact opposite; 「まいにち たべます」 (eats them every day) contradicts disliking them — you would not eat something you hate daily; 「かいたいです」 (wants to buy them) also contradicts dislike.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-036',
    stem: 'この まちは 【にぎやか】です。',
    options: [
      'この まちは しずかじゃないです。',
      'この まちは しずかです。',
      'この まちは ひとが すくないです。',
      'この まちは ふるいです。',
    ],
    answerIndex: 0,
    explanation:
      '「にぎやか」（熱鬧）的反義詞是「しずか」（安靜），因此「しずかじゃないです」是最接近的改寫。「しずかです」方向恰好相反；「ひとが すくない」（人很少）也和熱鬧相反，熱鬧的街上人應該很多；「ふるい」（老舊）講的是新舊，皆不等值。',
    explanationEn:
      '「にぎやか」 (lively, bustling) is the opposite of 「しずか」 (quiet), so 「しずかじゃないです」 (not quiet) is the closest rewording. 「しずかです」 points the opposite way; 「ひとが すくない」 (few people) also contradicts liveliness — a bustling town should be full of people; 「ふるい」 (old) is about age, not atmosphere.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-037',
    stem: '【おなかが すきました】。',
    options: [
      'なにか たべたいです。',
      'なにか のみたいです。',
      'なにも たべたくないです。',
      'おなかが いたいです。',
    ],
    answerIndex: 0,
    explanation:
      '「おなかが すきました」（肚子餓了）表示想吃東西，所以「なにか たべたいです」意思最接近。「なにか のみたい」是口渴想喝東西，對應「のどが かわきました」；「なにも たべたくない」方向相反；「おなかが いたい」是肚子痛，是身體不舒服，皆不等值。',
    explanationEn:
      '「おなかが すきました」 (I am hungry) means you want to eat, so 「なにか たべたいです」 is the closest match. 「なにか のみたい」 means being thirsty, which corresponds to 「のどが かわきました」; 「なにも たべたくない」 points the opposite way; 「おなかが いたい」 means having a stomachache — feeling sick, not hungry.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-038',
    stem: 'きょうは いもうとの 【たんじょうび】です。',
    options: [
      'きょうは いもうとが うまれた ひです。',
      'きょうは いもうとが けっこんした ひです。',
      'きょうは いもうとが がっこうに はいった ひです。',
      'きょうは いもうとが りょこうに いく ひです。',
    ],
    answerIndex: 0,
    explanation:
      '「たんじょうび」（生日）就是出生的日子，所以「うまれた ひ」是正確的改寫。「けっこんした ひ」是結婚的日子（結婚紀念日）；「がっこうに はいった ひ」是入學的日子；「りょこうに いく ひ」是去旅行的日子，都是別的日子，皆不能替換。',
    explanationEn:
      '「たんじょうび」 (birthday) is the day someone was born, so 「うまれた ひ」 is the correct rewording. The day she got married is a wedding anniversary; the day she entered school is her first day of school; the day she goes on a trip is a travel day — all different days, so none can replace it.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-039',
    stem: 'らいねん 【がいこく】で はたらきたいです。',
    options: [
      'らいねん ほかの くにで はたらきたいです。',
      'らいねん じぶんの くにで はたらきたいです。',
      'らいねん おおきい かいしゃで はたらきたいです。',
      'らいねん ちかくの まちで はたらきたいです。',
    ],
    answerIndex: 0,
    explanation:
      '「がいこく」（外國）＝「ほかの くに」（別的國家），所以第一句意思最接近。「じぶんの くに」（自己的國家）恰好相反；「おおきい かいしゃ」（大公司）講的是公司規模不是地點；「ちかくの まち」（附近的城鎮）還在國內，皆不能代替「外國」。',
    explanationEn:
      '「がいこく」 (a foreign country) means the same as 「ほかの くに」 (another country), so the first sentence is the closest match. 「じぶんの くに」 (your own country) is the exact opposite; 「おおきい かいしゃ」 (a big company) is about company size, not location; 「ちかくの まち」 (a nearby town) is still inside the country.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-iikae-040',
    stem: 'なつやすみに ともだちと 【プール】へ いきました。',
    options: [
      'およぐ ところへ いきました。',
      'かいものを する ところへ いきました。',
      'テニスを する ところへ いきました。',
      'しゃしんを とる ところへ いきました。',
    ],
    answerIndex: 0,
    explanation:
      '「プール」（游泳池）是游泳的地方，所以「およぐ ところ」是正確的改寫。「かいものを する ところ」是商店或百貨公司；「テニスを する ところ」是網球場，雖然也是運動場所但項目不同；「しゃしんを とる ところ」是拍照的地方，皆不能替換。',
    explanationEn:
      '「プール」 (swimming pool) is a place for swimming, so 「およぐ ところ」 is the correct rewording. A place where you shop is a store or department store; a place where you play tennis is a tennis court — also for sports, but a different one; a place where you take photos is unrelated, so none can replace it.',
  },
]

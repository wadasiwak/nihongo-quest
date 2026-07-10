import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  // ---------- 助詞（001~008）：は/が/を/に/で/へ/と/から/まで/より ----------
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-001',
    stem: 'まいあさ パン（　） たべます。',
    options: ['を', 'が', 'に', 'で'],
    answerIndex: 0,
    explanation:
      '「たべます」是他動詞，動作的對象要用助詞「を」標示，「パンを たべます」＝「吃麵包」。「が」標主語，不能拿來標他動詞的受詞；「に」表時間點或到達點、「で」表場所或手段，接在「パン」後面都文法不通。',
    explanationEn:
      '「たべます」 is a transitive verb, so its direct object is marked with 「を」: 「パンを たべます」 means "I eat bread." 「が」 marks the subject and cannot mark the object of a transitive verb; 「に」 marks a point in time or a destination and 「で」 a place or means — neither works after 「パン」.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-002',
    stem: 'まいばん １１じ（　） ねます。',
    options: ['に', 'へ', 'を', 'が'],
    answerIndex: 0,
    explanation:
      '具體時刻（１１じ）後面要接表時間點的助詞「に」，「１１じに ねます」＝「十一點睡覺」。「へ」表移動方向，時刻不是移動的目的地；「を」標受詞、「が」標主語，接在時刻後面都不合文法。',
    explanationEn:
      'A specific clock time like 「１１じ」 takes the time particle 「に」: 「１１じに ねます」 means "I go to bed at eleven." 「へ」 shows the direction of movement, and a time is not somewhere you move to; 「を」 marks an object and 「が」 a subject, so neither fits after a clock time.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-003',
    stem: 'としょかん（　） ほんを よみます。',
    options: ['で', 'に', 'を', 'と'],
    answerIndex: 0,
    explanation:
      '「よみます」是動作動詞，進行動作的場所要用「で」，「としょかんで ほんを よみます」＝「在圖書館看書」。「に」用於存在句（あります／います）或到達點，不能標動作發生的場所；「と」表共同行動的對象，圖書館不是人，語意不通。',
    explanationEn:
      '「よみます」 is an action verb, and the place where an action happens is marked with 「で」: 「としょかんで ほんを よみます」 means "I read books at the library." 「に」 is for existence sentences (あります／います) or destinations, not for where an action takes place; 「と」 marks a person you act together with, and a library is not a person.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-004',
    stem: 'にちようびに ともだち（　） いっしょに こうえんへ いきました。',
    options: ['と', 'を', 'に', 'で'],
    answerIndex: 0,
    explanation:
      '「〜と いっしょに」是固定搭配，表「和～一起」，所以選「と」。「を」標他動詞的受詞，但「いきます」是移動動詞，不能說「ともだちを」；「に」「で」在這裡都無法與「いっしょに」連用，接續不成立。',
    explanationEn:
      '「〜と いっしょに」 is a set phrase meaning "together with," so 「と」 is the answer. 「を」 marks a direct object, but 「いきます」 is a motion verb, so 「ともだちを」 is impossible; 「に」 and 「で」 cannot combine with 「いっしょに」 here, so the connection fails.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-005',
    stem: 'げつようび（　） きんようびまで はたらきます。',
    options: ['から', 'まで', 'を', 'が'],
    answerIndex: 0,
    explanation:
      '「〜から〜まで」表時間的起訖，起點用「から」：「げつようびから きんようびまで」＝「從週一到週五」。選「まで」會變成「まで…まで」前後重複，文法錯誤；「を」「が」分別標受詞與主語，接在起始時間後語意不通。',
    explanationEn:
      '「〜から〜まで」 expresses a span of time, and the starting point takes 「から」: 「げつようびから きんようびまで」 means "from Monday to Friday." Choosing 「まで」 would repeat まで twice in a row, which is ungrammatical; 「を」 and 「が」 mark the object and subject and make no sense after a starting time.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-006',
    stem: 'なつやすみは ８がつ３１にち（　）です。',
    options: ['まで', 'を', 'が', 'に'],
    answerIndex: 0,
    explanation:
      '表期間的終點用「まで」，「８がつ３１にちまでです」＝「（暑假）到八月三十一日為止」。「に」表時間點，但「にです」這種直接接「です」的形式不成立；「を」「が」後面同樣不能直接接「です」，都是文法錯誤。',
    explanationEn:
      'The end point of a period is marked with 「まで」: 「８がつ３１にちまでです」 means "(summer vacation) lasts until August 31." 「に」 marks a point in time, but the form 「にです」 does not exist; 「を」 and 「が」 likewise cannot attach directly to 「です」, so all three are ungrammatical.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-007',
    stem: 'バス（　） でんしゃの ほうが はやいです。',
    options: ['より', 'から', 'まで', 'を'],
    answerIndex: 0,
    explanation:
      '比較句型「Ａより Ｂの ほうが〜」表「Ｂ比Ａ更～」，比較的基準用「より」：「バスより でんしゃの ほうが はやい」＝「電車比公車快」。「から」表起點、「まで」表終點，都不能和「〜の ほうが」搭成比較句；「を」標受詞，形容詞述語沒有受詞可標。',
    explanationEn:
      'The comparison pattern 「Ａより Ｂの ほうが〜」 means "B is more ~ than A," and the standard of comparison takes 「より」: 「バスより でんしゃの ほうが はやい」 means "the train is faster than the bus." 「から」 (from) and 「まで」 (until) cannot build this comparison with 「〜の ほうが」; 「を」 marks an object, but an adjective predicate has none.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-008',
    stem: 'はこの なかに なに（　） ありますか。',
    options: ['が', 'は', 'を', 'へ'],
    answerIndex: 0,
    explanation:
      '存在句「（場所）に （物）が あります」中，存在的主體用「が」標示；而且疑問詞「なに」不能當主題，所以不能用「は」。「を」標他動詞受詞，但「あります」是自動詞；「へ」表移動方向，這裡沒有移動，皆不合文法。',
    explanationEn:
      'In the existence pattern "(place) に (thing) が あります", the thing that exists is marked with 「が」; moreover, a question word like 「なに」 cannot be a topic, so 「は」 is impossible. 「を」 marks the object of a transitive verb, but 「あります」 is intransitive; 「へ」 shows direction, and nothing is moving here.',
  },
  // ---------- 動詞活用（009~014）：て形／ない形／た形／ます形接續 ----------
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-009',
    stem: 'いま そとで あめが （　） います。',
    options: ['ふって', 'ふる', 'ふった', 'ふります'],
    answerIndex: 0,
    explanation:
      '「〜て います」表動作或狀態正在持續，前面必須接動詞て形，「あめが ふって います」＝「正在下雨」。辭書形「ふる」、た形「ふった」、ます形「ふります」都不能直接接「います」，接續全部不成立。',
    explanationEn:
      '「〜て います」 expresses an action or state in progress and must follow the te-form: 「あめが ふって います」 means "it is raining." The dictionary form 「ふる」, the ta-form 「ふった」, and the masu-form 「ふります」 cannot attach directly to 「います」, so all those connections fail.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-010',
    stem: 'まいにち くすりを （　）なければ なりません。',
    options: ['のま', 'のみ', 'のん', 'のむ'],
    answerIndex: 0,
    explanation:
      '「〜なければ なりません」（必須～）前面接動詞ない形的語幹：「のみます」的ない形是「のまない」，去掉「ない」填「のま」。「のみ」是ます形語幹、「のん」是て形／た形音便的語幹、「のむ」是辭書形，接「なければ」都不合接續規則。',
    explanationEn:
      '「〜なければ なりません」 (must do) attaches to the nai-form stem: the nai-form of 「のみます」 is 「のまない」, so drop 「ない」 and fill in 「のま」. 「のみ」 is the masu-stem, 「のん」 is the sound-changed stem used in the te/ta-forms, and 「のむ」 is the dictionary form — none of them can precede 「なければ」.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-011',
    stem: 'わたしは いちど かぶきを （　） ことが あります。',
    options: ['みた', 'みる', 'みて', 'みない'],
    answerIndex: 0,
    explanation:
      '「〜た ことが あります」表過去的經驗（曾經～過），前面必須接動詞た形，「みた ことが あります」＝「（曾）看過」。句中有「いちど」（一次），只能是經驗句；「みる」「みて」「みない」接「ことが あります」都不符合經驗句型的接續。',
    explanationEn:
      '「〜た ことが あります」 expresses a past experience (have done ~ before) and must follow the ta-form: 「みた ことが あります」 means "I have seen it." The word 「いちど」 (once) shows this can only be an experience sentence; 「みる」, 「みて」, and 「みない」 do not fit the experience pattern before 「ことが あります」.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-012',
    stem: 'まいあさ でんしゃに （　）、かいしゃへ いきます。',
    options: ['のって', 'のります', 'のった', 'のらない'],
    answerIndex: 0,
    explanation:
      '同一個句子裡連接前後兩個連續動作時，前面的動詞用て形，「でんしゃに のって、かいしゃへ いきます」＝「搭電車去公司」。「のります」是句尾的禮貌形，不能放在句中連接；「のった」「のらない」後面接讀點再接下一個子句也都不合文法。',
    explanationEn:
      'When two consecutive actions are joined in one sentence, the first verb takes the te-form: 「でんしゃに のって、かいしゃへ いきます」 means "I take the train and go to the office." 「のります」 is a polite sentence-ending form and cannot join clauses mid-sentence; 「のった」 and 「のらない」 followed by a comma and another clause are also ungrammatical.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-013',
    stem: 'デパートへ くつを （　）に いきます。',
    options: ['かい', 'かう', 'かって', 'かった'],
    answerIndex: 0,
    explanation:
      '「（ます形語幹）＋に いきます」表移動的目的（去做～）：「かいます」去掉「ます」成「かい」，「かいに いきます」＝「去買」。辭書形「かう」、て形「かって」、た形「かった」都不能接表目的的「に」，接續錯誤。',
    explanationEn:
      '"Masu-stem + に いきます" expresses the purpose of movement (go in order to do ~): drop 「ます」 from 「かいます」 to get 「かい」, so 「かいに いきます」 means "go to buy." The dictionary form 「かう」, the te-form 「かって」, and the ta-form 「かった」 cannot attach to the purpose particle 「に」.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-014',
    stem: 'ばんごはんを （　） あとで、テレビを みます。',
    options: ['たべた', 'たべる', 'たべて', 'たべます'],
    answerIndex: 0,
    explanation:
      '「〜た あとで」表「做完～之後」，前面固定接動詞た形，「たべた あとで」＝「吃完晚飯之後」。「たべる あとで」不合接續規則（「あとで」前必須用た形，不能用辭書形）；「たべて」「たべます」接「あとで」也都文法錯誤。',
    explanationEn:
      '「〜た あとで」 means "after doing ~" and always follows the ta-form: 「たべた あとで」 means "after eating dinner." 「たべる あとで」 breaks the connection rule — 「あとで」 requires the ta-form, never the dictionary form; 「たべて」 and 「たべます」 before 「あとで」 are also ungrammatical.',
  },
  // ---------- 句型（015~020）----------
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-015',
    stem: 'すみません。もう いちど （　） ください。',
    options: ['いって', 'いう', 'いいます', 'いわない'],
    answerIndex: 0,
    explanation:
      '請託句型「〜て ください」（請～）前面接動詞て形，「もう いちど いって ください」＝「請再說一次」。「いう」「いいます」都不能直接接「ください」；「いわない」必須說成「いわないで ください」才成立，少了「で」就是文法錯誤。',
    explanationEn:
      'The request pattern 「〜て ください」 (please do ~) follows the te-form: 「もう いちど いって ください」 means "please say it one more time." 「いう」 and 「いいます」 cannot attach directly to 「ください」; 「いわない」 would need 「で」 to form 「いわないで ください」 — without 「で」 it is ungrammatical.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-016',
    stem: 'ここで しゃしんを （　）も いいですか。',
    options: ['とって', 'とる', 'とった', 'とり'],
    answerIndex: 0,
    explanation:
      '徵求許可的句型「〜ても いいですか」（可以～嗎）前面接動詞て形，「しゃしんを とっても いいですか」＝「可以拍照嗎」。「とる」「とった」「とり」接「も いいですか」都不合接續規則，只有て形「とって」正確。',
    explanationEn:
      'The permission pattern 「〜ても いいですか」 (may I ~?) follows the te-form: 「しゃしんを とっても いいですか」 means "may I take a photo here?" 「とる」, 「とった」, and 「とり」 all fail to connect with 「も いいですか」; only the te-form 「とって」 is correct.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-017',
    stem: 'びじゅつかんの なかでは、えに （　） ください。',
    options: ['さわらないで', 'さわって', 'さわらなくて', 'さわらない'],
    answerIndex: 0,
    explanation:
      '禁止請託句型「〜ないで ください」（請不要～）用動詞ない形＋「で」，「えに さわらないで ください」＝「請不要觸摸畫作」。美術館內不可能請人去摸畫，「さわって ください」不合語境；「さわらなくて」「さわらない」直接接「ください」都文法錯誤。',
    explanationEn:
      'The negative request 「〜ないで ください」 (please do not ~) uses the nai-form plus 「で」: 「えに さわらないで ください」 means "please do not touch the paintings." Asking visitors to touch the art with 「さわって ください」 makes no sense in a museum; 「さわらなくて」 and plain 「さわらない」 cannot attach directly to 「ください」.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-018',
    stem: 'なつやすみに うみで （　）です。',
    options: ['およぎたい', 'およぐ', 'およいで', 'およいだ'],
    answerIndex: 0,
    explanation:
      '願望句型「〜たいです」（想～）接動詞ます形的語幹：「およぎます」→「およぎたいです」＝「想游泳」。辭書形「およぐ」、て形「およいで」、た形「およいだ」後面都不能直接接「です」來表達願望，文法不成立。',
    explanationEn:
      'The desire pattern 「〜たいです」 (want to ~) attaches to the masu-stem: 「およぎます」 becomes 「およぎたいです」, "I want to swim." The dictionary form 「およぐ」, the te-form 「およいで」, and the ta-form 「およいだ」 cannot take 「です」 directly to express a wish, so those forms are all ungrammatical.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-019',
    stem: 'いつも おんがくを （　）ながら、しゅくだいを します。',
    options: ['きき', 'きく', 'きいて', 'きいた'],
    answerIndex: 0,
    explanation:
      '「〜ながら」（一邊～一邊～）前面接動詞ます形的語幹：「ききます」去掉「ます」成「きき」，「ききながら」＝「一邊聽（音樂）」。辭書形「きく」、て形「きいて」、た形「きいた」都不能接「ながら」，接續全部錯誤。',
    explanationEn:
      '「〜ながら」 (while doing ~) attaches to the masu-stem: drop 「ます」 from 「ききます」 to get 「きき」, so 「ききながら」 means "while listening (to music)." The dictionary form 「きく」, the te-form 「きいて」, and the ta-form 「きいた」 cannot attach to 「ながら」 — all those connections are wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-020',
    stem: 'てを （　）、ばんごはんを たべましょう。',
    options: ['あらってから', 'あらいてから', 'あらうてから', 'あらんでから'],
    answerIndex: 0,
    explanation:
      '「〜てから」表「做完～之後再～」，「あらいます」的て形是「あらって」（う段動詞促音便），所以是「あらってから」。「あらいて」是誤把ます形語幹直接加て；「あらうて」誤用辭書形；「あらんで」是撥音便，只用於ぬ・ぶ・む結尾的動詞，「あらう」不適用。',
    explanationEn:
      '「〜てから」 means "after doing ~, then ~"; the te-form of 「あらいます」 is 「あらって」 (a godan verb with the small-tsu sound change), giving 「あらってから」. 「あらいて」 wrongly adds て straight to the masu-stem; 「あらうて」 misuses the dictionary form; 「あらんで」 uses the ん sound change, which applies only to verbs ending in ぬ・ぶ・む, not to 「あらう」.',
  },
  // ---------- 助詞（021~028）：へ/の/も/で(手段)/に(對象)/や/か/を(離開點) ----------
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-021',
    stem: 'らいげつ かぞくと おきなわ（　） いきます。',
    options: ['へ', 'で', 'が', 'の'],
    answerIndex: 0,
    explanation:
      '移動動詞「いきます」的目的地（方向）用助詞「へ」標示，「おきなわへ いきます」＝「去沖繩」。「で」表動作發生的場所或手段，句中沒有動作在沖繩進行，也不是搭沖繩去，文法不通；「が」標主語，地名不是「去」這個動作的主體；「の」是連體助詞，後面必須接名詞，不能直接接動詞。',
    explanationEn:
      'The destination of the motion verb 「いきます」 is marked with 「へ」: 「おきなわへ いきます」 means "go to Okinawa." 「で」 marks where an action happens or a means — no action takes place in Okinawa here, and Okinawa is not a vehicle; 「が」 would make the place the subject of "go"; 「の」 must be followed by a noun, not a verb.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-022',
    stem: 'それは たなかさん（　） かさですか。',
    options: ['の', 'が', 'を', 'に'],
    answerIndex: 0,
    explanation:
      '名詞修飾名詞表所有時用「の」，「たなかさんの かさ」＝「田中先生的傘」。「が」標主語，但「たなかさんが かさですか」變成「田中是傘嗎」，語意不通；「を」標他動詞受詞，句中沒有動詞；「に」表時間或場所，接在人名和名詞之間不成立。',
    explanationEn:
      'When one noun modifies another to show possession, use 「の」: 「たなかさんの かさ」 means "Mr. Tanaka\'s umbrella." 「が」 would turn the sentence into "Is Mr. Tanaka an umbrella?", which is nonsense; 「を」 marks the object of a verb, but there is no verb; 「に」 marks a time or place and cannot link a name to a noun.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-023',
    stem: 'けさは じかんが ありませんでしたから、なに（　） たべませんでした。',
    options: ['も', 'を', 'が', 'へ'],
    answerIndex: 0,
    explanation:
      '「疑問詞＋も＋否定」表全面否定，「なにも たべませんでした」＝「什麼都沒吃」。「なにを」「なにが」是疑問句的問法，但句尾沒有「か」，當直述句用文法不成立；「へ」表移動方向，「なにへ たべません」完全不通。記住：なにも・だれも・どこも後面固定接否定。',
    explanationEn:
      '"Question word + も + negative" expresses total negation: 「なにも たべませんでした」 means "I did not eat anything." 「なにを」 and 「なにが」 are for questions, but there is no 「か」 at the end, so they fail as statements; 「へ」 shows direction and makes no sense with eating. Remember: なにも・だれも・どこも always pair with a negative.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-024',
    stem: 'にほんじんは はし（　） ごはんを たべます。',
    options: ['で', 'を', 'に', 'が'],
    answerIndex: 0,
    explanation:
      '表動作使用的工具、手段用「で」，「はしで ごはんを たべます」＝「用筷子吃飯」。「を」會造成「はしを ごはんを」一句雙受詞，文法錯誤；「に」表時間點或到達點，筷子兩者皆非；「が」標主語，會變成「筷子吃飯」，語意不通。',
    explanationEn:
      'The tool or means used for an action is marked with 「で」: 「はしで ごはんを たべます」 means "eat rice with chopsticks." 「を」 would create two direct objects in one clause, which is ungrammatical; 「に」 marks a time or destination, and chopsticks are neither; 「が」 would make the chopsticks the one doing the eating, which is nonsense.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-025',
    stem: 'たんじょうびに いもうと（　） とけいを あげました。',
    options: ['に', 'を', 'から', 'で'],
    answerIndex: 0,
    explanation:
      '「あげます」（給）的接受者用「に」標示，「いもうとに とけいを あげました」＝「送手錶給妹妹」。「を」會和「とけいを」形成雙受詞，文法錯誤；「から」表來源，要說「從妹妹那裡收到」必須用「もらいました」，和「あげました」矛盾；「で」表場所或手段，妹妹不是工具，語意不通。',
    explanationEn:
      'The recipient of 「あげます」 (to give) is marked with 「に」: 「いもうとに とけいを あげました」 means "I gave my little sister a watch." 「を」 would clash with 「とけいを」, creating a double object; 「から」 marks a source and would require 「もらいました」 (received), contradicting 「あげました」; 「で」 marks a place or tool, and a person is not a tool.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-026',
    stem: 'かばんの なかに ほん（　） ノートなどが あります。',
    options: ['や', 'を', 'も', 'が'],
    answerIndex: 0,
    explanation:
      '列舉部分例子時用「〜や〜など」，「ほんや ノートなど」＝「書和筆記本等等」。「を」標他動詞受詞，但「あります」是自動詞，不能接「を」；「も」表「也」，放在兩個並列名詞中間接不起來；「が」會造成「ほんが ノートなどが」雙主語，文法錯誤。',
    explanationEn:
      'To list a few representative examples, use 「〜や〜など」: 「ほんや ノートなど」 means "books, notebooks, and so on." 「を」 is impossible because 「あります」 is intransitive and takes no object; 「も」 (also) cannot sit between two listed nouns like this; 「が」 would create a double subject, which is ungrammatical.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-027',
    stem: 'あさごはんは いつも パン（　） おにぎりを たべます。',
    options: ['か', 'を', 'が', 'で'],
    answerIndex: 0,
    explanation:
      '在兩個名詞中擇一時用「か」，「パンか おにぎり」＝「麵包或飯糰」。「を」會造成「パンを おにぎりを」雙受詞，文法錯誤；「が」變成「麵包吃飯糰」，語意不通；「で」表手段，「用麵包吃飯糰」不合常理，語意不成立。',
    explanationEn:
      'When choosing one of two nouns, use 「か」 (or): 「パンか おにぎり」 means "bread or a rice ball." 「を」 would create a double object with 「おにぎりを」, which is ungrammatical; 「が」 would mean the bread eats the rice ball — nonsense; 「で」 marks a means, and eating a rice ball "using bread" makes no sense either.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-028',
    stem: 'まいあさ ８じに いえ（　） でます。',
    options: ['を', 'に', 'で', 'が'],
    answerIndex: 0,
    explanation:
      '「でます」（出去、離開）的離開點用「を」標示，「いえを でます」＝「出門、離開家」。這是「を」的特殊用法，不是標受詞。「に」表到達點，和「離開」的方向相反；「で」表動作場所，但「でます」的重點是離開而非在家做事；「が」標主語，家不是離開的主體，皆不合文法。',
    explanationEn:
      'The place you leave with 「でます」 (to leave, go out) is marked with 「を」: 「いえを でます」 means "leave the house." This is a special use of 「を」, not the object marker. 「に」 marks a destination — the opposite of leaving; 「で」 marks where an action happens, but the point here is departure, not doing something at home; 「が」 would make the house the one leaving.',
  },
  // ---------- 動詞活用（029~034）：辞書形接續／たり／て形音便／ない形語幹 ----------
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-029',
    stem: 'まいばん （　） まえに、はを みがきます。',
    options: ['ねる', 'ねて', 'ねた', 'ねます'],
    answerIndex: 0,
    explanation:
      '「〜まえに」（做～之前）前面固定接動詞辭書形，「ねる まえに」＝「睡覺前」。注意即使整句是過去或未來，「まえに」前面永遠用辭書形。「ねた まえに」是常見錯誤，た形不能接「まえに」；「ねて」「ねます」接「まえに」也都不合接續規則。',
    explanationEn:
      '「〜まえに」 (before doing ~) always follows the dictionary form: 「ねる まえに」 means "before going to bed." Note that the dictionary form is used even when the whole sentence is past or future. 「ねた まえに」 is a common mistake — the ta-form can never precede 「まえに」; 「ねて」 and 「ねます」 also break the connection rule.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-030',
    stem: 'たなかさんは ピアノを （　） ことが できます。',
    options: ['ひく', 'ひいて', 'ひいた', 'ひき'],
    answerIndex: 0,
    explanation:
      '能力句型「〜ことが できます」（會～、能～）前面接動詞辭書形，「ピアノを ひく ことが できます」＝「會彈鋼琴」。「ひいた ことが」後面要接「あります」才是經驗句，接「できます」文法錯誤；て形「ひいて」、ます形語幹「ひき」都不能接「ことが」。',
    explanationEn:
      'The ability pattern 「〜ことが できます」 (can do ~) follows the dictionary form: 「ピアノを ひく ことが できます」 means "can play the piano." 「ひいた ことが」 would need 「あります」 to become the experience pattern — with 「できます」 it is wrong; the te-form 「ひいて」 and the masu-stem 「ひき」 cannot attach to 「ことが」 at all.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-031',
    stem: 'やすみの ひは ざっしを （　）り、おんがくを きいたり します。',
    options: ['よんだ', 'よんで', 'よむ', 'よみ'],
    answerIndex: 0,
    explanation:
      '「〜たり〜たり します」表列舉幾個代表性動作，前面接動詞た形再加「り」：「よみます」的た形是「よんだ」（む結尾撥音便），所以填「よんだ」成「よんだり」。「よんで」是て形、「よむ」是辭書形、「よみ」是ます形語幹，接「り」都不成立。',
    explanationEn:
      '「〜たり〜たり します」 lists representative actions and uses the ta-form plus 「り」: the ta-form of 「よみます」 is 「よんだ」 (the ん sound change for verbs ending in む), so fill in 「よんだ」 to make 「よんだり」. 「よんで」 is the te-form, 「よむ」 the dictionary form, and 「よみ」 the masu-stem — none of them can take 「り」.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-032',
    stem: 'こどもたちは にわで （　） います。',
    options: ['あそんで', 'あそびて', 'あそって', 'あそいで'],
    answerIndex: 0,
    explanation:
      '「あそびます」是ぶ結尾的う段動詞，て形要撥音便成「あそんで」，「あそんで います」＝「正在玩」。「あそびて」是誤把ます形語幹直接加て；「あそって」是促音便，用於う・つ・る結尾的動詞；「あそいで」是い音便的誤用，い音便只出現在く・ぐ結尾的動詞。',
    explanationEn:
      '「あそびます」 is a godan verb ending in ぶ, so its te-form takes the ん sound change: 「あそんで」, giving 「あそんで います」, "they are playing." 「あそびて」 wrongly adds て straight to the masu-stem; 「あそって」 uses the small-tsu change, which belongs to verbs ending in う・つ・る; 「あそいで」 misapplies the い change, which occurs only with verbs ending in く・ぐ.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-033',
    stem: 'あめでしたから、どこへも （　）ないで、うちに いました。',
    options: ['いか', 'いき', 'いく', 'いって'],
    answerIndex: 0,
    explanation:
      '「いきます」是う段動詞，ない形要把ます形語幹的い段音改成あ段：「いき」→「いか」，成「いかない」，「どこへも いかないで」＝「哪裡都沒去」。「いき」是ます形語幹，直接加「ない」是初學者常見錯誤；辭書形「いく」、て形「いって」接「ない」也都不合活用規則。',
    explanationEn:
      '「いきます」 is a godan verb, so the nai-form changes the い-row sound to the あ-row: 「いき」 becomes 「いか」, giving 「いかない」, so 「どこへも いかないで」 means "without going anywhere." Attaching 「ない」 straight to the masu-stem 「いき」 is a classic beginner mistake; the dictionary form 「いく」 and the te-form 「いって」 also violate the conjugation rules.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-034',
    stem: 'あしたは にちようびですから、はやく （　）なくても いいです。',
    options: ['おき', 'おきる', 'おきて', 'おきた'],
    answerIndex: 0,
    explanation:
      '「〜なくても いいです」（不～也可以）前面接動詞ない形的語幹：「おきます」是る段動詞，ない形是「おきない」，去掉「ない」填「おき」，「おきなくても いいです」＝「不早起也沒關係」。辭書形「おきる」、て形「おきて」、た形「おきた」接「なくても」都不合接續規則。',
    explanationEn:
      '「〜なくても いいです」 (do not have to ~) attaches to the nai-form stem: 「おきます」 is an ichidan verb whose nai-form is 「おきない」, so drop 「ない」 and fill in 「おき」, giving 「おきなくても いいです」, "you do not have to get up early." The dictionary form 「おきる」, te-form 「おきて」, and ta-form 「おきた」 do not fit before 「なくても」.',
  },
  // ---------- 句型（035~040）：〜ませんか/〜ましょう/〜が ほしい/〜のが すき/〜く なる/存在句 ----------
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-035',
    stem: 'あしたの ばん、いっしょに ばんごはんを （　）。',
    options: ['たべませんか', 'たべりませんか', 'たべるませんか', 'たべたませんか'],
    answerIndex: 0,
    explanation:
      '邀約句型「〜ませんか」（要不要一起～）用ます形語幹＋「ませんか」：「たべます」是る段動詞，語幹是「たべ」，所以是「たべませんか」。「たべりませんか」是誤把る段動詞當う段動詞活用；「たべるませんか」誤用辭書形接「ませんか」；「たべたませんか」誤用た形，接續全都錯誤。',
    explanationEn:
      'The invitation pattern 「〜ませんか」 (won\'t you ~ with me?) uses the masu-stem: 「たべます」 is an ichidan verb with the stem 「たべ」, so 「たべませんか」 is correct. 「たべりませんか」 wrongly conjugates it as a godan verb; 「たべるませんか」 attaches 「ませんか」 to the dictionary form and 「たべたませんか」 to the ta-form — every one of those connections is wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-036',
    stem: '「バスが なかなか きませんね。」「そうですね。タクシーで （　）。」',
    options: ['いきましょう', 'いくましょう', 'いかましょう', 'いったましょう'],
    answerIndex: 0,
    explanation:
      '提議句型「〜ましょう」（～吧）用ます形語幹＋「ましょう」：「いきます」的語幹是「いき」，所以是「いきましょう」＝「搭計程車去吧」。「いくましょう」誤用辭書形；「いかましょう」誤用ない形語幹；「いったましょう」誤用た形，都不合「ましょう」的接續規則。',
    explanationEn:
      'The suggestion pattern 「〜ましょう」 (let\'s ~) uses the masu-stem: the stem of 「いきます」 is 「いき」, so 「いきましょう」 means "let\'s go by taxi." 「いくましょう」 misuses the dictionary form, 「いかましょう」 the nai-form stem, and 「いったましょう」 the ta-form — none of them follow the connection rule for 「ましょう」.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-037',
    stem: 'わたしは あたらしい パソコン（　） ほしいです。',
    options: ['が', 'を', 'に', 'で'],
    answerIndex: 0,
    explanation:
      '願望句型「〜が ほしいです」（想要～）中，「ほしい」是い形容詞，想要的對象用「が」標示，「パソコンが ほしいです」＝「想要新電腦」。「を」是他動詞受詞的標記，「ほしい」不是動詞，不能用「を」；「に」「で」接在想要的東西後面都不成立。',
    explanationEn:
      'In the desire pattern 「〜が ほしいです」 (want ~), 「ほしい」 is an i-adjective, and the thing you want is marked with 「が」: 「パソコンが ほしいです」 means "I want a new computer." 「を」 marks the object of a transitive verb, but 「ほしい」 is not a verb, so 「を」 is impossible; 「に」 and 「で」 also cannot mark the wanted item.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-038',
    stem: 'あには りょうりを つくる（　）が すきです。',
    options: ['の', 'を', 'に', 'と'],
    answerIndex: 0,
    explanation:
      '「動詞辭書形＋のが すきです」表「喜歡做～」，「の」把動詞句名詞化，「つくるのが すきです」＝「喜歡做菜」。少了「の」動詞不能直接接「が」，所以「を」「に」「と」放進去都會變成「つくるをが」之類的錯誤接續，只有名詞化的「の」正確。',
    explanationEn:
      '"Dictionary form + のが すきです" means "like doing ~"; 「の」 turns the verb phrase into a noun: 「つくるのが すきです」 means "likes cooking." Without 「の」, a verb cannot connect to 「が」 directly, so putting in 「を」, 「に」, or 「と」 just produces broken sequences — only the nominalizer 「の」 works here.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-039',
    stem: 'もう １１がつです。まいにち だんだん （　） なります。',
    options: ['さむく', 'さむい', 'さむいに', 'さむくて'],
    answerIndex: 0,
    explanation:
      '變化句型「〜く なります」中，い形容詞要把語尾「い」改成「く」再接「なります」：「さむい」→「さむく なります」＝「（天氣）漸漸變冷」。「さむい なります」直接用原形是文法錯誤；「さむいに」誤套な形容詞的「〜に なります」；「さむくて」是て形，表原因或並列，不能接「なります」。',
    explanationEn:
      'In the change pattern 「〜く なります」, an i-adjective changes its final 「い」 to 「く」 before 「なります」: 「さむい」 becomes 「さむく なります」, "it gradually gets colder." 「さむい なります」 with the plain form is ungrammatical; 「さむいに」 wrongly copies the na-adjective pattern 「〜に なります」; the te-form 「さむくて」 expresses reason or listing and cannot attach to 「なります」.',
  },
  {
    kind: 'choice',
    id: 'n5-grammar-keishiki-040',
    stem: 'きょうしつに せんせい（　）。',
    options: ['が います', 'が あります', 'を います', 'に います'],
    answerIndex: 0,
    explanation:
      '存在句中，人或動物等有生命的存在用「います」、無生命的東西用「あります」，存在主體用「が」標示：「せんせいが います」＝「教室裡有老師」。「が あります」把老師當無生命物，動詞選錯；「を います」用受詞助詞標存在主體，文法錯誤；「に います」和句首的「きょうしつに」重複，變成雙重「に」，不成立。',
    explanationEn:
      'In existence sentences, living beings take 「います」 while inanimate things take 「あります」, and the thing that exists is marked with 「が」: 「せんせいが います」 means "there is a teacher in the classroom." 「が あります」 treats the teacher as an inanimate object — wrong verb; 「を います」 marks the existing person with the object particle, which is ungrammatical; 「に います」 would double the 「に」 already used in 「きょうしつに」.',
  },
]

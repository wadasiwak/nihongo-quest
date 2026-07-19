import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-001',
    stem: '新しいパソコンを買った（　）、忙しくてまだ一度も使っていない。',
    options: ['ものの', 'ものなら', 'ものだから', 'ものか'],
    answerIndex: 0,
    explanation:
      '「〜ものの」表逆接（雖然…但是…），前句「買了」與後句「還沒用過」正是轉折關係，故「買ったものの」正確。「ものなら」通常接可能形表「要是能…的話」，接續與語意皆不合；「ものだから」表原因（因為買了所以沒用過，因果不通）；「ものか」是強烈否定「才不…呢」，語境不合。',
    explanationEn:
      '「ものの」 expresses concession ("although..., ..."): he bought a new computer, yet has been too busy to use it even once, so 「買ったものの」 is correct. 「ものなら」 usually follows a potential form and means "if only one could..."; 「ものだから」 states a cause, but "because he bought it, he hasn\'t used it" makes no sense; 「ものか」 is an emphatic denial ("as if I would..."), which doesn\'t fit the context.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-002',
    stem: '体に悪いと知り（　）、彼はなかなかタバコをやめられないでいる。',
    options: ['つつ', '次第', 'がてら', 'かけ'],
    answerIndex: 0,
    explanation:
      '「〜つつ」接動詞ます形語幹，此處表逆接「明知…卻…」，「知りつつやめられない」＝明知有害卻戒不掉，正確。「知り次第」是「一得知就馬上…」，後句應接立即行動而非「戒不掉」；「がてら」表順便做某事，「かけ」表動作做到一半，語意都不通。',
    explanationEn:
      '「つつ」 attaches to the masu-stem and here marks concession: 「知りつつ」 means he cannot quit smoking even while knowing it is bad for him, so it is correct. 「次第」 means "as soon as..." and must be followed by an immediate action, not "can\'t quit"; 「がてら」 means "while one is at it," and 「かけ」 describes an action left half-done — neither meaning fits.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-003',
    stem: 'この地方では、三日間（　）激しい雨が降り続いた。',
    options: ['にわたって', 'に際して', 'につれて', 'に沿って'],
    answerIndex: 0,
    explanation:
      '「〜にわたって」接期間、範圍名詞，表「整整持續／遍及…」，「三日間にわたって降り続いた」＝連下了三天，正確。「に際して」表「在…之際」，前接事件名詞而非期間；「につれて」表「隨著…變化」，前面須接表變化的詞；「に沿って」是「沿著…」，語意皆不合。',
    explanationEn:
      '「にわたって」 follows a noun of duration or extent and means "throughout / spanning...": 「三日間にわたって降り続いた」 ("it kept raining hard for three whole days") is correct. 「に際して」 ("on the occasion of") takes an event noun, not a duration; 「につれて」 ("as... changes") needs a word expressing change before it; 「に沿って」 means "along..." — none of these fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-004',
    stem: '開店（　）、多くの方からお祝いの花をいただきました。',
    options: ['に際して', 'に対して', 'にとって', 'に反して'],
    answerIndex: 0,
    explanation:
      '「〜に際して」表「在…（特別時刻）之際」，用於開店、入學等重要場合，「開店に際して」＝開店之際收到賀花，正確。「に対して」表動作的對象（對於…），開店不是收花的對象；「にとって」表「對…而言」後接評價；「に反して」表「與…相反」，語意皆不合。',
    explanationEn:
      '「に際して」 means "on the (special) occasion of..." and is used for events like store openings or school entrance, so 「開店に際して」 ("on the occasion of the opening, we received congratulatory flowers") is correct. 「に対して」 marks the target of an action, but the opening is not the recipient of the flowers; 「にとって」 means "for / from the standpoint of" and is followed by an evaluation; 「に反して」 means "contrary to" — none fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-005',
    stem: '彼女とは共通の友人（　）知り合いました。',
    options: ['を通じて', 'をめぐって', 'を問わず', 'をこめて'],
    answerIndex: 0,
    explanation:
      '「〜を通じて」表媒介、手段（透過…），「友人を通じて知り合った」＝透過共同朋友認識，正確。「をめぐって」表「圍繞著…（爭論、討論）」，後面應接爭議類動詞；「を問わず」是「不論…」，前接年齡、性別等對比性名詞；「をこめて」是「傾注（心意）」，語意皆不合。',
    explanationEn:
      '「を通じて」 marks a medium or means ("through..."): 「友人を通じて知り合いました」 ("we got to know each other through a mutual friend") is correct. 「をめぐって」 means "concerning / over..." and is followed by verbs of dispute or discussion; 「を問わず」 means "regardless of..." and takes contrastive nouns like age or gender; 「をこめて」 means "putting (one\'s feelings) into..." — none fit here.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-006',
    stem: '上司の命令なので、気が進まなくても引き受け（　）。',
    options: ['ざるを得ない', 'かねない', 'ようがない', 'がたい'],
    answerIndex: 0,
    explanation:
      '「〜ざるを得ない」表「不得不…」，因為是上司命令、即使不情願也只能接下，故「引き受けざるを得ない」正確。「かねない」表「恐怕會（發生壞事）」，主語多為他人的負面可能；「ようがない」是「沒辦法…」，與「必須接下」矛盾；「がたい」表心理上難以做到，與「ても」的讓步句式不合。',
    explanationEn:
      '「ざるを得ない」 means "have no choice but to...": since it is a direct order from the boss, the speaker must take the job however reluctantly, so 「引き受けざるを得ない」 is correct. 「かねない」 warns that something bad might happen, usually about others; 「ようがない」 means "there is no way to...," contradicting the obligation to accept; 「がたい」 means psychologically hard to do and does not match the concessive 「ても」 clause.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-007',
    stem: '寝不足のまま車を運転すると、大きな事故を起こし（　）。',
    options: ['かねない', 'かねる', 'がたい', 'ようがない'],
    answerIndex: 0,
    explanation:
      '「〜かねない」表「說不定會、恐怕會（引發壞結果）」，睡眠不足開車恐釀大禍，故「起こしかねない」正確。「かねる」意思相反，表「難以…」，多用於委婉拒絕；「がたい」表心理上難以接受或做到；「ようがない」是「無從…」，指缺乏手段，語意皆不合。',
    explanationEn:
      '「かねない」 means "could well (lead to something bad)": driving without enough sleep could cause a major accident, so 「起こしかねない」 is correct. 「かねる」 means the opposite — "find it difficult to..." — and is used for polite refusals; 「がたい」 means emotionally hard to accept or do; 「ようがない」 means "have no means to..." — none of these fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-008',
    stem: '申し訳ございませんが、詳細が分かりませんので、この場では何とも申し上げ（　）。',
    options: ['かねます', 'かねません', 'ざるを得ません', 'てはいけません'],
    answerIndex: 0,
    explanation:
      '「〜かねます」接ます形語幹，是商務場面委婉拒絕的固定說法「礙難…、無法…」，「申し上げかねます」＝礙難奉告，正確。「かねません」是「かねない」的丁寧形，反而變成「恐怕會說出」；「ざるを得ません」是「不得不說」，與拒絕回答的語境相反；「てはいけません」是禁止對方，用在自己身上不合。',
    explanationEn:
      '「かねます」 attaches to the masu-stem and is the fixed polite business expression for declining ("we are unable to..."): 「申し上げかねます」 ("I am afraid I cannot say") is correct. 「かねません」 is the polite form of 「かねない」 and would instead mean "I might well say it"; 「ざるを得ません」 means "I cannot help but say," the opposite of withholding an answer; 「てはいけません」 prohibits the listener and cannot be applied to the speaker here.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-009',
    stem: 'あの真面目な彼が嘘をつくなんて、信じ（　）話だ。',
    options: ['がたい', 'かねない', 'やすい', 'がちな'],
    answerIndex: 0,
    explanation:
      '「〜がたい」表「（心理上）難以…」，多接「信じる・理解する・許す」等，「信じがたい話」＝令人難以置信的事，正確。「かねない」表「恐怕會發生壞事」，不能這樣修飾名詞表難以置信；「やすい」是「容易…」，與「なんて」的驚訝語氣相反；「がちな」表「動不動就…的傾向」，語意不合。',
    explanationEn:
      '「がたい」 means "(psychologically) hard to..." and typically follows verbs like 「信じる」 or 「理解する」: 「信じがたい話」 ("a story that is hard to believe") is correct. 「かねない」 expresses that a bad outcome may occur and cannot modify a noun this way; 「やすい」 means "easy to...," the opposite of the astonished tone signaled by 「なんて」; 「がちな」 means "prone to..." and does not fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-010',
    stem: '彼の連絡先を聞いておかなかったので、会議の変更を知らせ（　）。',
    options: ['ようがない', 'かねない', 'ざるを得ない', 'がたい'],
    answerIndex: 0,
    explanation:
      '「〜ようがない」表「想做也沒有辦法、無從…」，用於缺乏手段的情況；沒問到聯絡方式所以無從通知，故「知らせようがない」正確。「ざるを得ない」是「不得不通知」，與沒有聯絡方式的前提矛盾；「がたい」是心理上難以開口，而本句是物理上辦不到；「かねない」語意不合。',
    explanationEn:
      '「ようがない」 means "there is simply no way to..." when the means are lacking: the speaker never asked for his contact details, so there is no way to tell him about the meeting change — 「知らせようがない」 is correct. 「ざるを得ない」 ("cannot avoid notifying him") contradicts that premise; 「がたい」 would mean it is emotionally hard to tell him, whereas here it is physically impossible; 「かねない」 does not fit the meaning.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-011',
    stem: 'このゲームは若者（　）、中高年にも楽しまれている。',
    options: ['に限らず', 'に限って', 'に限り', 'に限る'],
    answerIndex: 0,
    explanation:
      '「〜に限らず」表「不僅限於…，…也」，後句常呼應「も」，「若者に限らず中高年にも」＝不只年輕人、中高年也在玩，正確。「に限って」表「偏偏、唯獨…」；「に限り」用於公告表「僅限…」，都會把範圍縮小，與後句的「にも」擴大範圍矛盾；「に限る」是「…最好」，接續與語意皆不合。',
    explanationEn:
      '「に限らず」 means "not only... but also..." and pairs with 「も」 later in the sentence: 「若者に限らず、中高年にも」 ("not just young people — middle-aged and older people enjoy it too") is correct. 「に限って」 means "only / precisely..." and 「に限り」 appears in notices meaning "limited to...," both narrowing the scope and clashing with 「にも」; 「に限る」 means "...is the best" and fits neither grammar nor meaning.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-012',
    stem: '新しいシステムを導入したのに、仕事が楽になる（　）、かえって残業が増えてしまった。',
    options: ['どころか', 'ばかりか', 'かわりに', 'おかげで'],
    answerIndex: 0,
    explanation:
      '「〜どころか」表「別說…了，（實際上）反而…」，與「かえって」呼應，「楽になるどころか残業が増えた」＝非但沒變輕鬆反而加班變多，正確。「ばかりか」是「不僅…而且…」的同方向遞進，不能表反轉；「かわりに」表交換條件，與「のに…かえって」的意外語氣不合；「おかげで」表正面原因，語意相反。',
    explanationEn:
      '「どころか」 means "far from...; quite the opposite," echoing 「かえって」: far from making work easier, the new system actually increased overtime, so 「楽になるどころか」 is correct. 「ばかりか」 means "not only... but also..." and adds in the same direction, so it cannot express this reversal; 「かわりに」 expresses a trade-off, which clashes with the surprise marked by 「のに…かえって」; 「おかげで」 marks a positive cause, the opposite of the intended meaning.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-013',
    stem: '日本に住んでいる（　）、日本語が上手に話せるとは限らない。',
    options: ['からといって', 'からには', 'からこそ', 'からでないと'],
    answerIndex: 0,
    explanation:
      '「〜からといって」表「不能因為…就（斷定）…」，後句常接「とは限らない・わけではない」，故「住んでいるからといって」正確。「からには」是「既然…就（應該）…」，後接決心或義務；「からこそ」強調「正因為…」，後接正面斷定；「からでないと」是「不先…就不能…」，都與「とは限らない」不搭。',
    explanationEn:
      '「からといって」 means "just because... doesn\'t mean..." and is regularly followed by 「とは限らない」 or 「わけではない」, so 「住んでいるからといって」 is correct. 「からには」 means "now that..., (one should)..." and leads to resolve or obligation; 「からこそ」 emphasizes "precisely because..." with a positive assertion; 「からでないと」 means "not until... first" — none of these pair with 「とは限らない」.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-014',
    stem: 'このレストランは値段が高い（　）、料理の量が少なくて驚いた。',
    options: ['わりに', 'だけあって', 'ばかりに', 'おかげで'],
    answerIndex: 0,
    explanation:
      '「〜わりに」表「以…的程度來說（卻）…」，前後不相稱：價格高、份量卻少，故「高いわりに」正確。「だけあって」是「不愧是…」，後句應是與高價相稱的好評，與份量少矛盾；「ばかりに」表「就因為…（導致壞結果）」，價格高與份量少沒有因果關係；「おかげで」表正面原因，語意不合。',
    explanationEn:
      '「わりに」 marks a mismatch with what one would expect ("considering...; for..."): the prices are high, yet the portions are surprisingly small, so 「高いわりに」 is correct. 「だけあって」 means "true to...; as expected of..." and would require praise befitting the high prices, contradicting the small portions; 「ばかりに」 means "simply because... (something bad resulted)," but the high prices did not cause the small portions; 「おかげで」 marks a positive cause and does not fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-015',
    stem: '兄は店で何時間も迷った（　）、結局何も買わずに帰ってきた。',
    options: ['あげく', 'とたん', 'うちに', 'ところに'],
    answerIndex: 0,
    explanation:
      '「〜たあげく」表「…了半天，最後（落得負面結果）」，猶豫了幾小時最後什麼都沒買，正是白費工夫的結局，故「迷ったあげく」正確。「とたん」是「一…就（發生意外）」，強調瞬間，與「何時間も」矛盾；「うちに」須接ている形或辞書形，不能接た形；「ところに」表「正當…的時候」，語意不合。',
    explanationEn:
      '「たあげく」 means "after (all that)..., in the end (with a disappointing result)": he dithered in the shop for hours and finally went home without buying anything — wasted effort, so 「迷ったあげく」 is correct. 「とたん」 means "the instant...," stressing a single moment and contradicting 「何時間も」; 「うちに」 attaches to the dictionary or te-iru form, not the ta-form; 「ところに」 means "just as / when..." and does not fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-016',
    stem: '半年に及ぶ交渉の（　）、両社はついに業務提携で合意した。',
    options: ['末に', 'あげくに', 'たびに', '次第で'],
    answerIndex: 0,
    explanation:
      '「名詞＋の末に」表「經過（漫長的）…最後終於…」，可接正面結局，與「ついに」呼應，故「交渉の末に合意した」正確。「あげくに」同樣表經過波折後的結局，但只能接負面結果，「達成合作」是好結局所以不合；「たびに」是「每次…都…」，與長達半年的單一談判矛盾；「次第で」表「取決於…」，接續與語意皆不合。',
    explanationEn:
      'Noun + 「の末に」 means "after (a long process of)..., finally..." and can lead to a positive conclusion, matching 「ついに」: 「交渉の末に合意した」 ("after half a year of negotiations they finally reached an agreement") is correct. 「あげくに」 also marks an outcome after much trouble but only takes negative results, whereas a partnership deal is good news; 「たびに」 means "every time...," contradicting one continuous negotiation; 「次第で」 means "depending on..." and fails both grammar and meaning.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-017',
    stem: '詳しい日程が決まり（　）、改めてご連絡いたします。',
    options: ['次第', 'つつ', 'がてら', 'ながら'],
    answerIndex: 0,
    explanation:
      '「ます形語幹＋次第」表「一…就馬上…」，常用於商務聯絡，「決まり次第ご連絡いたします」＝一確定就立刻與您聯繫，正確。「つつ」表一邊…一邊…或逆接，「決まりつつ連絡する」語意不通；「がてら」是「順便」；「ながら」表同時進行，且「決まる」是非意志動詞，不能與「連絡する」構成同時動作。',
    explanationEn:
      'Masu-stem + 「次第」 means "as soon as..." and is standard in business correspondence: 「決まり次第、改めてご連絡いたします」 ("we will contact you again as soon as the schedule is fixed") is correct. 「つつ」 marks simultaneity or concession and makes no sense here; 「がてら」 means "while one is at it"; 「ながら」 marks two simultaneous actions, but 「決まる」 is non-volitional and cannot pair with 「連絡する」 that way.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-018',
    stem: '台風の接近により、今夜から明日にかけて土砂災害が発生する（　）。',
    options: ['恐れがある', 'ことがある', 'ものがある', 'ところがある'],
    answerIndex: 0,
    explanation:
      '「〜恐れがある」表「恐有…之虞」，用於預警壞事發生的可能，是氣象、新聞的慣用表達，故「発生する恐れがある」正確。「ことがある」表「有時會發生」的一般性頻率，與「今夜到明天」的特定預報不合；「ものがある」是「確實有…之處」的感嘆；「ところがある」表「有…的一面」，語意皆不合。',
    explanationEn:
      '「恐れがある」 means "there is a risk / danger that..." and is the standard phrasing in weather and news warnings, so 「発生する恐れがある」 is correct. 「ことがある」 states a general frequency ("sometimes happens"), which clashes with a specific forecast for tonight through tomorrow; 「ものがある」 expresses heartfelt admiration ("there is something truly... about it"); 「ところがある」 means "has a certain side to it" — none fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-019',
    stem: '都市の人口が増加する（　）、住宅の不足が深刻になってきた。',
    options: ['に伴って', 'に際して', 'に反して', 'に限って'],
    answerIndex: 0,
    explanation:
      '「〜に伴って」表「伴隨著…（另一變化也發生）」，人口增加與住宅不足同步演變，故「増加するに伴って」正確。「に際して」表「在…之際」，前接特定事件而非持續變化；「に反して」是「與…相反」，住宅不足與人口增加方向一致並不相反；「に限って」表「偏偏、唯獨」，語意皆不合。',
    explanationEn:
      '「に伴って」 means "along with...; as... (another change happens in step)": the housing shortage worsens as the urban population grows, so 「増加するに伴って」 is correct. 「に際して」 ("on the occasion of") takes a specific event, not an ongoing change; 「に反して」 means "contrary to...," but the housing shortage moves in the same direction as population growth, not against it; 「に限って」 means "only / precisely..." and does not fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-020',
    stem: 'このボランティア活動には、年齢や経験（　）、誰でも参加できます。',
    options: ['を問わず', 'を通じて', 'をこめて', 'をきっかけに'],
    answerIndex: 0,
    explanation:
      '「〜を問わず」表「不論、不分…」，前接年齡、性別、經驗等有範圍差異的名詞，與後句「誰でも」呼應，故「年齢や経験を問わず」正確。「を通じて」表媒介或整個期間（透過…、整個…期間），「透過年齡和經驗參加」語意不通；「をこめて」是「傾注（心意）」；「をきっかけに」表「以…為契機」，皆不合。',
    explanationEn:
      '「を問わず」 means "regardless of..." and follows nouns that vary across a range, such as age or experience, matching 「誰でも」 in the main clause: 「年齢や経験を問わず」 is correct. 「を通じて」 means "through (a medium)" or "throughout (a period)," and "participating through age and experience" makes no sense; 「をこめて」 means "putting (one\'s heart) into..."; 「をきっかけに」 means "taking... as the trigger / opportunity" — none fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-021',
    stem: '出張で訪れた京都の美しさ（　）、休みのたびに寺院を巡るようになった。',
    options: ['をきっかけに', 'をもとに', 'を頼りに', 'を前に'],
    answerIndex: 0,
    explanation:
      '「〜をきっかけに」表「以…為契機、因為…而開始…」，出差見到京都之美成了開始巡遊寺院的契機，故正確。「をもとに」是「以…為基礎（創作、制定）」，後句應接改編、編寫類動詞；「を頼りに」是「依靠…」；「を前に」是「面臨…之際」，語意皆不合。',
    explanationEn:
      '「をきっかけに」 means "taking... as the trigger to start...": the beauty of Kyoto seen on a business trip led the speaker to start touring temples on every holiday, so it is correct. 「をもとに」 means "based on..." and should be followed by verbs of creating or drafting; 「を頼りに」 means "relying on..."; 「を前に」 means "facing / just before..." — none of these fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-022',
    stem: 'この筆跡から見て、このメモを書いたのは田中さんに（　）。',
    options: ['相違ない', 'かかわらない', 'ほかならない', 'たえない'],
    answerIndex: 0,
    explanation:
      '「〜に相違ない」是書面語的強確信推斷「一定是…沒錯」，由筆跡推斷寫字的人，故「田中さんに相違ない」正確。「にほかならない」表「正是…、無非是…」，用於下定義或點明本質（原因、努力等），不用於對人物身分的推測；「にかかわらない」「にたえない」接續與語意皆不合。',
    explanationEn:
      '「に相違ない」 is a formal, confident deduction meaning "must certainly be...": judging from the handwriting, the memo must have been written by Tanaka, so it is correct. 「にほかならない」 means "is nothing other than..." and is used to define or pinpoint the essence of something (a cause, effort, etc.), not to infer who a person is; 「にかかわらない」 and 「にたえない」 fail in both connection and meaning.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-023',
    stem: '彼が今回の大会で優勝できたのは、日々の努力の結果に（　）。',
    options: ['ほかならない', '相違ある', 'すぎるものだ', 'たまらない'],
    answerIndex: 0,
    explanation:
      '「〜にほかならない」表「正是…、無非是…」，用於斷定事物的本質或原因：奪冠的原因不是別的、正是每天的努力，故正確。「相違ある」不成立，慣用形是否定的「相違ない」；「にすぎるものだ」不是固定句型（「にすぎない」才表「只不過是」，但語感是貶低而非肯定原因）；「にたまらない」接續錯誤。',
    explanationEn:
      '「にほかならない」 asserts the true essence or cause of something ("is nothing other than..."): his victory in the tournament is nothing other than the result of daily effort, so it is correct. 「相違ある」 does not exist as a pattern — the idiom is the negative 「相違ない」; 「にすぎるものだ」 is not a valid expression (「にすぎない」 means "merely," a belittling nuance that would not affirm the cause); 「にたまらない」 is an impossible connection.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-024',
    stem: '会議で余計な一言を言った（　）、面倒な仕事を全部任されてしまった。',
    options: ['ばかりに', 'ばかりか', 'ばかりで', 'ばかりなら'],
    answerIndex: 0,
    explanation:
      '「〜たばかりに」表「就因為…（招致壞結果）」，含後悔語氣：只因多說了一句話，麻煩工作全落到自己頭上，故正確。「ばかりか」是「不僅…而且…」的遞進，後句須再加一層同方向敘述；「ばかりで」表「光是…（而不…）」；「ばかりなら」不是慣用句型，接續不成立。',
    explanationEn:
      '「たばかりに」 means "simply because... (a bad result followed)" with a regretful tone: just because of one unnecessary remark at the meeting, the speaker got saddled with all the tedious work, so it is correct. 「ばかりか」 means "not only... but also..." and needs a further statement in the same direction; 「ばかりで」 means "doing nothing but..."; 「ばかりなら」 is not an established pattern.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-025',
    stem: '約束の時間に遅れるなら、事前に相手に連絡する（　）だ。',
    options: ['べき', 'べく', 'べからず', 'べけれ'],
    answerIndex: 0,
    explanation:
      '「〜べきだ」表「理應…、應該…」的當然義務，勸告遲到前應先聯絡對方，「連絡するべきだ」正確。「べく」是目的用法「為了…」，須接後續動作而不能接「だ」；「べからず」是「禁止…」的告示用語，也不能接「だ」；「べけれ」是古語已然形，現代文不用。',
    explanationEn:
      '「べきだ」 expresses natural duty ("ought to..."): if you are going to be late, you should contact the other person in advance, so 「連絡するべきだ」 is correct. 「べく」 means "in order to..." and must lead into a following action, not 「だ」; 「べからず」 is the prohibitive sign-language ("must not...") and likewise cannot precede 「だ」; 「べけれ」 is a classical inflection not used in modern Japanese.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-026',
    stem: '几帳面な彼女の（　）、締め切りの三日前には原稿を仕上げているだろう。',
    options: ['ことだから', 'ものだから', 'ことだし', 'ものの'],
    answerIndex: 0,
    explanation:
      '「名詞の＋ことだから」表「因為是（了解其性格的）某人，所以想必…」，前接人物、後接推測：一絲不苟的她想必三天前就完稿，故正確。「ものだから」是為自己辯解的理由說法，後句不能接推測「だろう」；「ことだし」表「反正…（順帶理由）」，後接決定而非推測；「ものの」是逆接，語意不合。',
    explanationEn:
      '「ことだから」 follows a person (with 「の」) whose character is well known and leads to a confident guess: knowing how meticulous she is, she will surely finish the manuscript three days before the deadline, so it is correct. 「ものだから」 gives an excuse for one\'s own behavior and cannot be followed by conjecture like 「だろう」; 「ことだし」 offers an incidental reason leading to a decision, not a guess; 「ものの」 is concessive and does not fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-027',
    stem: '祖父は九十歳になった今も、一日も休む（　）畑仕事を続けている。',
    options: ['ことなく', 'ことなしでは', 'ことには', 'こともなると'],
    answerIndex: 0,
    explanation:
      '「動詞辭書形＋ことなく」是書面語「不…而…」，等於「〜ないで」：一天也不休息地持續農活，故「休むことなく」正確。「ことなしでは」不是正確句型（「なしでは」前接名詞）；「ことには」用於「〜ないことには」（不…就不…）的形，肯定形接續不成立；「こともなると」是「ともなると」的誤植，接續錯誤。',
    explanationEn:
      'Dictionary form + 「ことなく」 is the written equivalent of 「ないで」 ("without doing..."): the grandfather keeps working the fields without resting even a single day, so 「休むことなく」 is correct. 「ことなしでは」 is not a valid pattern (「なしでは」 follows a noun); 「ことには」 only appears in the negative pattern 「ないことには」 ("unless..."), so the affirmative connection fails; 「こともなると」 is a garbled 「ともなると」 and does not connect.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-028',
    stem: '通訳の彼女の協力（　）、この国際プロジェクトの成功はあり得なかった。',
    options: ['を抜きにしては', 'を抜きにしても', 'はもとより', 'に応じては'],
    answerIndex: 0,
    explanation:
      '「〜を抜きにしては」表「若沒有…就（不能）…」，後句必接否定：沒有她的口譯協助、專案不可能成功，故正確。「を抜きにしても」是讓步「就算不算…也」，與後句否定的因果不合；「はもとより」是「…自不用說，連…也」，後句應再舉一項；「に応じては」表「按照…」，語意皆不通。',
    explanationEn:
      '「を抜きにしては」 means "without... (something cannot happen)" and must be followed by a negative: without her help as interpreter, the international project could never have succeeded, so it is correct. 「を抜きにしても」 is concessive ("even setting... aside"), which breaks the causal link to the negative clause; 「はもとより」 means "not to mention..." and should introduce an additional item; 「に応じては」 means "according to..." — neither fits.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-029',
    stem: '契約の内容をよく確認した（　）で、こちらの書類にサインしてください。',
    options: ['上', '上に', '上は', '上で'],
    answerIndex: 0,
    explanation:
      '句中已有「で」，故空格填「上」構成「〜た上で」（先…之後再…）：先確認合約內容、再簽名，表按部就班的順序，正確。「上に」是「不但…而且」的遞進；「上は」是「既然…就」；「上で」填入後會變成「上でで」重複助詞，接續錯誤。此題考的是能否看出「で」已在句中。',
    explanationEn:
      'Since 「で」 already follows the blank, the answer is 「上」, forming 「た上で」 ("after first doing..."): confirm the contract carefully, and then sign the documents — a step-by-step order, so it is correct. 「上に」 means "not only... but also"; 「上は」 means "now that..."; choosing 「上で」 would produce the doubled particle 「上でで」, an impossible connection. The question tests whether you notice the 「で」 already in the sentence.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-030',
    stem: 'この辺りは、駅から遠い（　）、坂道が多いので、高齢者には住みにくい。',
    options: ['上に', '上で', '上は', '上を'],
    answerIndex: 0,
    explanation:
      '「〜上に」表「不但…而且…」的累加，前後兩項須同方向：離車站遠、再加上坡道多，都是居住的缺點，故正確。「上で」表「先…之後再…」，前句應是完成的動作而非狀態描述；「上は」是「既然…就…」，後接決心或義務；「上を」不是句型，接續不成立。',
    explanationEn:
      '「上に」 adds one fact on top of another in the same direction ("not only... but also..."): the area is far from the station and, on top of that, full of slopes — both drawbacks for elderly residents, so it is correct. 「上で」 means "after doing..." and requires a completed action, not a description of a state; 「上は」 means "now that..." and leads to resolve or obligation; 「上を」 is not a grammar pattern at all.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-031',
    stem: '在宅勤務は通勤の負担がない（　）、仕事と生活の切り替えが難しいという声も多い。',
    options: ['反面', '以上', '一方を', 'ばかりに'],
    answerIndex: 0,
    explanation:
      '「〜反面」表同一事物的正反兩面「…的另一面卻…」：遠距工作沒有通勤負擔（優點）、卻難以切換工作與生活（缺點），故正確。「以上」是「既然…就…」，後接義務或決心；「一方を」多了「を」，接續不成立；「ばかりに」表「就因為…（導致壞結果）」，前後並非因果，語意不合。',
    explanationEn:
      '「反面」 presents two opposite sides of the same thing ("on the one hand..., but on the other..."): working from home removes the burden of commuting, yet many say it is hard to switch between work and private life, so it is correct. 「以上」 means "now that..." and leads to obligation or resolve; 「一方を」 has a stray 「を」 and cannot connect; 「ばかりに」 means "simply because... (a bad result followed)," but there is no causal link here.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-032',
    stem: '来週大事な試験があるので、今は旅行（　）。',
    options: ['どころではない', 'ということではない', 'どころがない', 'ところではない'],
    answerIndex: 0,
    explanation:
      '「〜どころではない」表「哪有心思／根本沒空…」，強調狀況緊迫、無暇顧及：下週有重要考試，現在根本不是旅行的時候，故正確。「ということではない」是「並不是說…」的澄清用法，語氣不合；「どころがない」不是句型；「ところではない」用「ところ」不成慣用句，此處必須用「どころ」。',
    explanationEn:
      '「どころではない」 means "this is no time for...; can\'t possibly afford to...": with an important exam next week, travel is out of the question right now, so it is correct. 「ということではない」 is a clarifying "it\'s not that...," the wrong tone here; 「どころがない」 is not a pattern; 「ところではない」 with 「ところ」 is not the idiom — this expression requires 「どころ」.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-033',
    stem: '彼はまるで自分がその場で見てきた（　）、事故の様子を詳しく語った。',
    options: ['かのように', 'かと思うと', 'かのようで', 'かどうか'],
    answerIndex: 0,
    explanation:
      '「〜かのように」表「彷彿…似地」，與「まるで」呼應，後接動詞修飾「語った」：他彷彿親眼所見般詳述事故情形，故正確。「かと思うと」是「剛…就…」表接連發生；「かのようで」是中止形，後面應接續描寫而非直接修飾動詞，此處接續不順；「かどうか」是「是否…」，語意不合。',
    explanationEn:
      '「かのように」 means "as if..." and pairs with 「まるで」, adverbially modifying 「語った」: he described the accident in detail as if he had seen it with his own eyes, so it is correct. 「かと思うと」 means "no sooner had... than..."; 「かのようで」 is the continuative form and should lead into a further description rather than directly modify the verb, so the connection is awkward; 「かどうか」 means "whether or not" and does not fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-034',
    stem: '困っている人を見ると、声をかけ（　）いられない性格だ。',
    options: ['ずには', 'ないでは', 'ぬまま', 'ざるに'],
    answerIndex: 0,
    explanation:
      '「〜ずにはいられない」表「忍不住…、不…就受不了」：看到有困難的人就忍不住出聲關心，「声をかけずにはいられない」正確。「ないでは」後面慣用接「いられない」的是「ないではいられない」，但此句空格後緊接「いられない」，「かけないでは」的「では」與「には」相比屬口語變形，標準形是「ずには」；「ぬまま」表「沒…就（維持原狀）」；「ざるに」接續不成立。',
    explanationEn:
      '「ずにはいられない」 means "cannot help but...": whenever the speaker sees someone in trouble, they simply cannot help speaking to them, so 「声をかけずにはいられない」 is correct. The standard form before 「いられない」 is 「ずには」; 「ないでは」 is a colloquial variant, not the standard written pattern expected here; 「ぬまま」 means "remaining without doing..."; 「ざるに」 is an impossible connection.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-035',
    stem: '当店では、お客様のご予算（　）、最適なプランをご提案いたします。',
    options: ['に応じて', 'に応えて', 'をめぐって', 'に先立って'],
    answerIndex: 0,
    explanation:
      '「〜に応じて」表「按照、視…而（相應調整）」：依顧客預算高低提出最合適的方案，故正確。「に応えて」是「回應（期待、要求）」，前接「期待・要望」等，預算不是被回應的對象；「をめぐって」是「圍繞…（爭論）」；「に先立って」是「在…之前先…」，語意皆不合。',
    explanationEn:
      '「に応じて」 means "in accordance with...; adjusted to...": the shop proposes the best plan according to each customer\'s budget, so it is correct. 「に応えて」 means "in response to (expectations, demands)" and takes nouns like 「期待」 or 「要望」 — a budget is not something one responds to; 「をめぐって」 means "concerning / over (a dispute)"; 「に先立って」 means "prior to..." — none fit.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-036',
    stem: 'この温泉町は、国内の観光客（　）、海外からの旅行者にも人気が高い。',
    options: ['はもとより', 'はともかく', 'もかまわず', 'を問わせず'],
    answerIndex: 0,
    explanation:
      '「〜はもとより」表「…自不用說，連…也」，由近及遠遞進，與後句「にも」呼應：國內遊客自不必說、連海外旅客也很喜愛，故正確。「はともかく」是「…姑且不論」，把前項擱置一旁，與遞進語意相反；「もかまわず」是「不顧…」，前接「人目」等；「を問わせず」不是句型（正確形是「を問わず」）。',
    explanationEn:
      '「はもとより」 means "not to mention...; let alone..." and builds up from the obvious case, matching 「にも」 later: the hot-spring town is popular with domestic tourists, not to mention visitors from overseas, so it is correct. 「はともかく」 means "setting... aside," the opposite of building up; 「もかまわず」 means "heedless of..." and takes nouns like 「人目」; 「を問わせず」 is not a pattern (the correct form would be 「を問わず」).',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-037',
    stem: '彼は入社一年目でこの大役を任された（　）、失敗できないというプレッシャーも大きいようだ。',
    options: ['だけに', 'だけでは', 'だけあるなら', 'のみで'],
    answerIndex: 0,
    explanation:
      '「〜だけに」表「正因為…，（後果、程度）更加…」：正因為第一年就被委以重任，不能失敗的壓力也格外大，故正確。「だけでは」是「光靠…（不夠）」，後句應接否定的不足義；「だけあるなら」不是句型（慣用形是「だけあって」）；「のみで」是「僅以…」，皆無「正因為…更加…」的語感。',
    explanationEn:
      '「だけに」 means "precisely because..., all the more...": precisely because he was entrusted with this major role in his first year, the pressure not to fail weighs all the more heavily, so it is correct. 「だけでは」 means "with... alone (it is not enough)" and needs a negative of insufficiency; 「だけあるなら」 is not a pattern (the idiom is 「だけあって」); 「のみで」 means "with only..." — none carries the "all the more" nuance.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-038',
    stem: '十年前にこの会社に入って（　）、一度も遅刻したことがない。',
    options: ['以来', '以上', '以後に', 'からして'],
    answerIndex: 0,
    explanation:
      '「〜て以来」表「自…以來（狀態一直持續）」：十年前進公司以來從未遲到，故「入って以来」正確。「て以上」不是句型（「以上」接辭書形或た形）；「以後に」不能直接接て形；「からして」是「單從…來看就」，前接名詞舉例，接續與語意皆不合。',
    explanationEn:
      '「て以来」 means "ever since... (a state has continued)": ever since joining the company ten years ago, he has never once been late, so 「入って以来」 is correct. 「て以上」 is not a pattern (「以上」 follows the dictionary or ta-form); 「以後に」 cannot attach to the te-form; 「からして」 means "judging just from..." and takes a noun — both connection and meaning fail.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-039',
    stem: '本日は設備点検（　）、午後六時で閉店させていただきます。',
    options: ['につき', 'にとり', 'にして', 'にまで'],
    answerIndex: 0,
    explanation:
      '「名詞＋につき」是公告、通知中表原因的鄭重說法「因…之故」：因設備檢修、下午六點提前打烊，故正確。「にとり」是「にとって」（對…而言）的書面形，後接立場評價而非公告理由；「にして」表「到了…階段才」或並列；「にまで」是「甚至到…」，語意皆不合公告語境。',
    explanationEn:
      'Noun + 「につき」 is the formal notice-style expression of cause ("owing to..."): owing to equipment inspection, the store will close at 6 p.m. today, so it is correct. 「にとり」 is the literary form of 「にとって」 ("for / from the standpoint of") and introduces an evaluation, not a notice\'s reason; 「にして」 means "only at the stage of..." or lists items; 「にまで」 means "even to the extent of..." — none suits the announcement.',
  },
  {
    kind: 'choice',
    id: 'n2-grammar-keishiki-040',
    stem: 'あれほど練習熱心だった彼が無断で欠席するなんて、普通では考え（　）ことだ。',
    options: ['得ない', 'かねる', 'ぬける', 'たがらない'],
    answerIndex: 0,
    explanation:
      '「動詞連用形＋得ない」表「不可能…」的書面語，「考え得ない」＝正常情況下不可能想像，修飾「こと」正確。「考えかねる」是「難以判斷、不便回答」的婉曲說法，語感是為難而非不可能；「ぬける」接「考え」不成複合動詞；「たがらない」表第三者不想做，與「不可能發生」的斷定不合。',
    explanationEn:
      'Masu-stem + 「得ない」 is the written expression of impossibility: 「考え得ない」 ("unthinkable under normal circumstances") correctly modifies 「こと」. 「考えかねる」 is a hedge meaning "hard to judge / cannot readily say," conveying reluctance rather than impossibility; 「ぬける」 does not form a compound with 「考え」; 「たがらない」 means a third person "does not want to," which clashes with the assertion that it could not happen.',
  },
]

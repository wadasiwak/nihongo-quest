import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-001',
    stem: 'よるは へやの 【でんき】を つけます。',
    options: ['電気', '電汽', '雷気', '電機'],
    answerIndex: 0,
    explanation:
      '「でんき」（電燈、電力）寫作「電気」。「電汽」的「汽」是水蒸氣的「汽」，形近但不用於此詞；「雷気」把「電」誤寫成形近的「雷」；「電機」雖然同音，但指電動機械，與開房間電燈的語境不合。',
    explanationEn:
      '「でんき」 (electric light, electricity) is written 「電気」. 「電汽」 uses 「汽」, the character for steam, which looks similar but is never used in this word; 「雷気」 replaces 「電」 with the look-alike 「雷」 (thunder); 「電機」 has the same sound but means electrical machinery, which does not fit turning on the room light.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-002',
    stem: '【あたらしい】 くつを かいました。',
    options: ['新しい', '親しい', '新らしい', '親らしい'],
    answerIndex: 0,
    explanation:
      '「あたらしい」（新的）寫作「新しい」，送假名只有「しい」。「親しい」用了形近的「親」，讀「したしい」（親近的）；「新らしい」多送了一個「ら」，是常見的送假名錯誤；「親らしい」漢字與送假名都錯。',
    explanationEn:
      '「あたらしい」 (new) is written 「新しい」, with only 「しい」 as okurigana. 「親しい」 uses the look-alike character 「親」 and is read 「したしい」 (close, friendly); 「新らしい」 adds an extra 「ら」, a very common okurigana mistake; 「親らしい」 gets both the kanji and the okurigana wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-003',
    stem: 'つぎの かどを 【みぎ】に まがって ください。',
    options: ['右', '石', '左', '友'],
    answerIndex: 0,
    explanation:
      '「みぎ」（右邊）寫作「右」。「石」（いし，石頭）只差一小撇、字形極像，是典型形近干擾；「左」是反義詞「ひだり」（左邊）；「友」（とも，朋友）字形也相近，但讀音、語意都對不上。',
    explanationEn:
      '「みぎ」 (right) is written 「右」. 「石」 (いし, stone) differs by only one small stroke and is a classic look-alike trap; 「左」 is the antonym 「ひだり」 (left); 「友」 (とも, friend) also has a similar shape, but neither its reading nor its meaning fits the sentence.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-004',
    stem: 'ゆうべ うちで 【てれび】を みました。',
    options: ['テレビ', 'テレピ', 'デレビ', 'テレヒ'],
    answerIndex: 0,
    explanation:
      '外來語「てれび」（電視）的片假名寫法是「テレビ」，字尾是濁音「ビ」。「テレピ」把濁點寫成了半濁點；「デレビ」在開頭多加了濁點；「テレヒ」漏掉濁點變成清音「ヒ」，三者都是濁點、半濁點位置的錯誤。',
    explanationEn:
      'The loanword 「てれび」 (TV) is written in katakana as 「テレビ」, ending in the voiced 「ビ」. 「テレピ」 turns the voicing mark into a half-voicing circle; 「デレビ」 adds an extra voicing mark at the start; 「テレヒ」 drops the voicing mark and becomes unvoiced 「ヒ」 — all three are dakuten placement errors.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-005',
    stem: 'きのう ほんやで じしょを 【かいました】。',
    options: ['買いました', '貝いました', '売いました', '具いました'],
    answerIndex: 0,
    explanation:
      '「かう」（買）寫作「買う」，過去式為「買いました」。「貝」（かい，貝殼）是「買」的上半部、形近字；「売」是反義的「賣」，讀「うる」，且沒有「売いました」這種活用；「具」也是形近字，讀「ぐ」，不成詞。',
    explanationEn:
      '「かう」 (to buy) is written 「買う」, so the past polite form is 「買いました」. 「貝」 (かい, shellfish) is just the top half of 「買」, a look-alike character; 「売」 is the opposite word meaning to sell, read 「うる」, and 「売いました」 is not a real conjugation anyway; 「具」 is another look-alike, read 「ぐ」, and forms no word here.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-006',
    stem: '【はは】は りょうりが じょうずです。',
    options: ['母', '毎', '海', '姉'],
    answerIndex: 0,
    explanation:
      '「はは」（家母）寫作「母」。「毎」（每）與「海」（うみ，海）都內含「母」的字形、非常容易看錯，是形近干擾；「姉」讀「あね」，指姊姊，稱呼對象完全不同。從「做菜很拿手」的語境看，只有「母」正確。',
    explanationEn:
      '「はは」 (my mother, humble) is written 「母」. 「毎」 (every) and 「海」 (うみ, sea) both contain the shape of 「母」 and are very easy to misread; 「姉」 is read 「あね」 and means older sister, a different person. Given the context about being good at cooking, only 「母」 is correct.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-007',
    stem: 'あしたは がっこうが 【やすみ】です。',
    options: ['休み', '体み', '休すみ', '木み'],
    answerIndex: 0,
    explanation:
      '「やすみ」（休假、休息）寫作「休み」，送假名只有「み」。「体み」把「休」誤寫成形近的「体」（からだ，身體），只差一橫；「休すみ」多送了「す」，是送假名錯誤；「木み」漏掉人字旁，「木」讀「き」，不成詞。',
    explanationEn:
      '「やすみ」 (holiday, rest) is written 「休み」, with only 「み」 as okurigana. 「体み」 mistakes 「休」 for the look-alike 「体」 (からだ, body), which differs by a single stroke; 「休すみ」 adds an extra 「す」, an okurigana error; 「木み」 drops the person radical — 「木」 is read 「き」 and forms no word.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-008',
    stem: 'しろい 【しゃつ】を きて でかけます。',
    options: ['シャツ', 'シャシ', 'ツャシ', 'シヤツ'],
    answerIndex: 0,
    explanation:
      '外來語「しゃつ」（襯衫）的片假名寫法是「シャツ」：大的「シ」加小的「ャ」，字尾是「ツ」。「シャシ」把字尾的「ツ」寫成形近的「シ」；「ツャシ」開頭就把「シ」「ツ」搞反；「シヤツ」的「ヤ」寫成大字，拗音寫法錯誤。',
    explanationEn:
      'The loanword 「しゃつ」 (shirt) is written 「シャツ」: a large 「シ」 plus a small 「ャ」, ending in 「ツ」. 「シャシ」 writes the final 「ツ」 as the look-alike 「シ」; 「ツャシ」 swaps 「シ」 and 「ツ」 right from the start; 「シヤツ」 writes the 「ヤ」 full-size, which is the wrong way to write a contracted sound.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-009',
    stem: 'この レストランは すこし 【たかい】です。',
    options: ['高い', '商い', '京い', '高かい'],
    answerIndex: 0,
    explanation:
      '「たかい」（貴的、高的）寫作「高い」，送假名只有「い」。「商」（商業的商）與「京」（東京的京）都和「高」字形相近，但讀音、語意皆不合；「高かい」多送了一個「か」，是典型的送假名錯誤。',
    explanationEn:
      '「たかい」 (expensive, high) is written 「高い」, with only 「い」 as okurigana. 「商」 (as in commerce) and 「京」 (as in 「東京」) both look similar to 「高」, but their readings and meanings do not fit; 「高かい」 adds an extra 「か」, which is a typical okurigana mistake.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-010',
    stem: 'ちちは 【かいしゃ】で はたらいて います。',
    options: ['会社', '会車', '合社', '社会'],
    answerIndex: 0,
    explanation:
      '「かいしゃ」（公司）寫作「会社」。「会車」把「社」換成同音的「車」（しゃ），是同音異字干擾；「合社」把「会」誤寫成形近的「合」；「社会」則是兩字順序顛倒，讀「しゃかい」，意思變成「社會」，與在公司上班的語境不合。',
    explanationEn:
      '「かいしゃ」 (company) is written 「会社」. 「会車」 swaps 「社」 for 「車」, which shares the reading しゃ but is the wrong character; 「合社」 mistakes 「会」 for the look-alike 「合」; 「社会」 reverses the two characters and is read 「しゃかい」 (society), which does not fit the context of working at a company.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-011',
    stem: '【しろい】 はなが さいて います。',
    options: ['白い', '百い', '自い', '日い'],
    answerIndex: 0,
    explanation:
      '「しろい」（白色的）寫作「白い」。「百」（ひゃく，一百）只比「白」多一橫；「自」（自己的自）和「日」（太陽的日）也都是筆畫極相近的形近字，但三者都不能加「い」構成形容詞，只有「白い」是正確寫法。',
    explanationEn:
      '「しろい」 (white) is written 「白い」. 「百」 (ひゃく, hundred) is 「白」 with just one extra stroke; 「自」 (self) and 「日」 (sun, day) are also nearly identical shapes, but none of these three can take 「い」 to form an adjective — only 「白い」 is the correct spelling.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-012',
    stem: 'あさごはんに 【ぱん】を たべました。',
    options: ['パン', 'パソ', 'バン', 'ハン'],
    answerIndex: 0,
    explanation:
      '外來語「ぱん」（麵包）的片假名寫法是「パン」。「パソ」把字尾的「ン」寫成形近的「ソ」，兩者只差筆畫方向，是片假名最經典的混淆組；「バン」把半濁點寫成濁點；「ハン」漏掉半濁點，讀音都變了。',
    explanationEn:
      'The loanword 「ぱん」 (bread) is written 「パン」. 「パソ」 writes the final 「ン」 as the look-alike 「ソ」 — the most classic katakana mix-up, since they differ only in stroke direction; 「バン」 turns the half-voicing circle into a voicing mark; 「ハン」 drops the circle entirely, so the sound changes in every case.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-013',
    stem: 'まいばん しちじに ばんごはんを 【たべます】。',
    options: ['食べます', '飲べます', '良べます', '食ます'],
    answerIndex: 0,
    explanation:
      '「たべる」（吃）寫作「食べる」，禮貌形為「食べます」。「飲べます」誤用了「飲」（のむ，喝），且「飲」後面不接「べ」；「良べます」把「食」誤寫成形近的「良」；「食ます」漏掉送假名「べ」，活用形式錯誤。',
    explanationEn:
      '「たべる」 (to eat) is written 「食べる」, polite form 「食べます」. 「飲べます」 wrongly uses 「飲」 (のむ, to drink), and 「飲」 never takes 「べ」 after it; 「良べます」 mistakes 「食」 for the look-alike 「良」; 「食ます」 drops the okurigana 「べ」, which makes the conjugation wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-014',
    stem: 'きょうは 【あめ】が ふって います。',
    options: ['雨', '両', '雪', '天'],
    answerIndex: 0,
    explanation:
      '「あめ」（雨）寫作「雨」。「両」字形與「雨」相近但讀「りょう」，是形近干擾；「雪」（ゆき，雪）同樣是天氣、也會「ふる」，但讀音不是「あめ」；「天」（てん，天空）只取了「雨」的相關聯想，讀音、字形都不對。',
    explanationEn:
      '「あめ」 (rain) is written 「雨」. 「両」 has a similar shape to 「雨」 but is read 「りょう」, a pure look-alike trap; 「雪」 (ゆき, snow) is also weather and also falls, but its reading is not 「あめ」; 「天」 (てん, sky) is only loosely related in meaning and matches neither the shape nor the reading.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-015',
    stem: 'あたらしい 【かめら】で しゃしんを とります。',
    options: ['カメラ', 'カラメ', 'ガメラ', 'カメウ'],
    answerIndex: 0,
    explanation:
      '外來語「かめら」（相機）的片假名寫法是「カメラ」。「カラメ」把後兩個字「メ」「ラ」順序寫反；「ガメラ」在開頭多加了濁點，變成「ガ」；「カメウ」把字尾的「ラ」寫成形近的「ウ」，都是字形或順序的錯誤。',
    explanationEn:
      'The loanword 「かめら」 (camera) is written 「カメラ」. 「カラメ」 swaps the order of the last two characters 「メ」 and 「ラ」; 「ガメラ」 adds a voicing mark to the first character, making it 「ガ」; 「カメウ」 writes the final 「ラ」 as the look-alike 「ウ」 — all shape or order errors.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-016',
    stem: 'えきまで 【くるま】で いきます。',
    options: ['車', '東', '軍', '車ま'],
    answerIndex: 0,
    explanation:
      '「くるま」（車子）寫作「車」，訓讀本身就是三個音節，不需要任何送假名。「東」（ひがし，東邊）和「軍」（ぐん，軍隊）都是內含「車」形或筆畫相近的形近字；「車ま」畫蛇添足加了送假名「ま」，寫法錯誤。',
    explanationEn:
      '「くるま」 (car) is written simply 「車」; the kun-reading itself covers all three syllables, so no okurigana is needed. 「東」 (ひがし, east) and 「軍」 (army) are look-alike characters that contain a 「車」-like shape; 「車ま」 adds an unnecessary 「ま」, which is an okurigana error.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-017',
    stem: 'つめたい 【みず】が のみたいです。',
    options: ['水', '氷', '木', '永'],
    answerIndex: 0,
    explanation:
      '「みず」（水）寫作「水」。「氷」（こおり，冰）只比「水」多一點、又同樣搭「つめたい」，是最強的形近干擾，但讀音不是「みず」；「木」（き，樹）字形略近；「永」（永遠的永）也和「水」只差一筆，皆非正解。',
    explanationEn:
      '「みず」 (water) is written 「水」. 「氷」 (こおり, ice) is 「水」 plus one extra dot and also pairs with 「つめたい」 (cold), making it the strongest look-alike trap, but its reading is not 「みず」; 「木」 (き, tree) is somewhat similar in shape; 「永」 (eternal) also differs from 「水」 by just one stroke — none are correct.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-018',
    stem: 'この かわは とても 【ながい】です。',
    options: ['長い', '良い', '表い', '長がい'],
    answerIndex: 0,
    explanation:
      '「ながい」（長的）寫作「長い」，送假名只有「い」。「良い」讀「よい」（好的），雖是真實存在的形容詞，但讀音對不上；「表」字形與「長」相近，且沒有「表い」這種詞；「長がい」多送了「が」，是送假名錯誤。',
    explanationEn:
      '「ながい」 (long) is written 「長い」, with only 「い」 as okurigana. 「良い」 is a real adjective, but it is read 「よい」 (good), so the reading does not match; 「表」 merely looks like 「長」, and 「表い」 is not a word; 「長がい」 adds an extra 「が」, which is an okurigana error.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-019',
    stem: 'まいあさ 【こーひー】を のみます。',
    options: ['コーヒー', 'コーピー', 'コーヒ', 'コピー'],
    answerIndex: 0,
    explanation:
      '外來語「こーひー」（咖啡）的片假名寫法是「コーヒー」，兩處都有長音「ー」。「コーピー」把「ヒ」誤寫成半濁音「ピ」；「コーヒ」漏掉字尾的長音；「コピー」少了第一個長音，變成另一個詞「影印」，語意完全不同。',
    explanationEn:
      'The loanword 「こーひー」 (coffee) is written 「コーヒー」 with long-vowel marks in two places. 「コーピー」 turns 「ヒ」 into the half-voiced 「ピ」; 「コーヒ」 drops the final long vowel; 「コピー」 loses the first long vowel and becomes a completely different word meaning photocopy.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-020',
    stem: 'りんごを 【はんぶん】 たべました。',
    options: ['半分', '半文', '平分', '羊分'],
    answerIndex: 0,
    explanation:
      '「はんぶん」（一半）寫作「半分」。「半文」把「分」換成同音的「文」（ぶん），是同音異字干擾；「平分」把「半」誤寫成形近的「平」；「羊分」的「羊」（ひつじ，羊）與「半」字形相近但多了兩點，都不是正確寫法。',
    explanationEn:
      '「はんぶん」 (half) is written 「半分」. 「半文」 swaps 「分」 for 「文」, which shares the reading ぶん but is the wrong character; 「平分」 mistakes 「半」 for the look-alike 「平」; 「羊分」 uses 「羊」 (ひつじ, sheep), which resembles 「半」 but has two extra strokes — none of these are correct.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-021',
    stem: 'にちようびに ともだちと 【やま】に のぼりました。',
    options: ['山', '出', '川', '岩'],
    answerIndex: 0,
    explanation:
      '「やま」（山）寫作「山」。「出」（でる的「出」）字形像兩個「山」疊在一起，是最容易看錯的形近字；「川」（かわ，河川）同為自然景物但讀音不同；「岩」（いわ，岩石）雖然內含「山」，讀音卻是「いわ」，都不是正解。',
    explanationEn:
      '「やま」 (mountain) is written 「山」. 「出」 looks like two 「山」 stacked on top of each other and is the easiest character to misread here; 「川」 (かわ, river) is also a nature word but has a different reading; 「岩」 (いわ, rock) contains 「山」 in its shape, yet it is read 「いわ」 — none of them fit.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-022',
    stem: 'まいばん ラジオで にほんごを 【ききます】。',
    options: ['聞きます', '間きます', '開きます', '聞ます'],
    answerIndex: 0,
    explanation:
      '「きく」（聽）寫作「聞く」，禮貌形為「聞きます」。「間」（あいだ，之間）與「開」（あける，打開）都是門字框的形近字，門裡面分別是「日」和「幵」，很容易混淆；「聞ます」漏掉送假名「き」，活用形式錯誤。',
    explanationEn:
      '「きく」 (to listen) is written 「聞く」, polite form 「聞きます」. 「間」 (あいだ, interval) and 「開」 (あける, to open) share the same gate radical and are easily confused — only the part inside the gate differs; 「聞ます」 drops the okurigana 「き」, which makes the conjugation wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-023',
    stem: '【ばす】で えきまで いきます。',
    options: ['バス', 'パス', 'バヌ', 'バース'],
    answerIndex: 0,
    explanation:
      '外來語「ばす」（公車）的片假名寫法是「バス」，開頭是濁音「バ」。「パス」把濁點寫成半濁點，變成另一個詞「通行證」；「バヌ」把字尾的「ス」寫成形近的「ヌ」，只差一撇；「バース」多加了長音「ー」，讀音就變了。',
    explanationEn:
      'The loanword 「ばす」 (bus) is written 「バス」, starting with the voiced 「バ」. 「パス」 uses a half-voicing circle instead and becomes a different word meaning pass; 「バヌ」 writes the final 「ス」 as the look-alike 「ヌ」, just one extra stroke; 「バース」 adds a long-vowel mark, which changes the sound.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-024',
    stem: 'この まちには 【おおきい】 こうえんが あります。',
    options: ['大きい', '犬きい', '太きい', '大い'],
    answerIndex: 0,
    explanation:
      '「おおきい」（大的）寫作「大きい」，送假名是「きい」。「犬」（いぬ，狗）比「大」多一點、「太」（ふとい，粗胖的）也只差一點，都是典型形近字；「大い」漏掉送假名「き」，是送假名錯誤，正確寫法只有「大きい」。',
    explanationEn:
      '「おおきい」 (big) is written 「大きい」, with 「きい」 as okurigana. 「犬」 (いぬ, dog) is 「大」 plus one dot, and 「太」 (thick) also differs by only a dot — both classic look-alikes; 「大い」 drops the okurigana 「き」, an okurigana error. Only 「大きい」 is the correct spelling.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-025',
    stem: '【せんせい】に しつもんを しました。',
    options: ['先生', '先性', '生先', '洗生'],
    answerIndex: 0,
    explanation:
      '「せんせい」（老師）寫作「先生」。「先性」把「生」換成同音的「性」（せい），是同音異字干擾；「生先」把兩個字的順序寫反，不成詞；「洗生」把「先」誤寫成同音又形近的「洗」（あらう，洗），也不是正確寫法。',
    explanationEn:
      '「せんせい」 (teacher) is written 「先生」. 「先性」 swaps 「生」 for 「性」, which shares the reading せい but is the wrong character; 「生先」 reverses the order of the two characters and is not a word; 「洗生」 replaces 「先」 with 「洗」 (to wash), which sounds the same and looks similar but is also wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-026',
    stem: 'きょうは 【てんき】が いいですね。',
    options: ['天気', '夫気', '天汽', '気天'],
    answerIndex: 0,
    explanation:
      '「てんき」（天氣）寫作「天気」。「夫」（おっと，丈夫）與「天」只差一筆突出與否，是經典形近字；「天汽」把「気」換成形近的「汽」（水蒸氣的汽），此詞不用這個字；「気天」則是兩字順序顛倒，不成詞。',
    explanationEn:
      '「てんき」 (weather) is written 「天気」. 「夫」 (おっと, husband) differs from 「天」 only in whether a stroke sticks out at the top — a classic look-alike; 「天汽」 swaps 「気」 for the similar 「汽」 (steam), which this word never uses; 「気天」 reverses the character order and is not a word.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-027',
    stem: 'えきの ちかくの 【ほてる】に とまります。',
    options: ['ホテル', 'ホテレ', 'ボテル', 'ホデル'],
    answerIndex: 0,
    explanation:
      '外來語「ほてる」（旅館、飯店）的片假名寫法是「ホテル」。「ホテレ」把字尾的「ル」寫成形近的「レ」，只差一筆；「ボテル」在開頭多加了濁點變成「ボ」；「ホデル」把「テ」誤加濁點寫成「デ」，讀音都不對。',
    explanationEn:
      'The loanword 「ほてる」 (hotel) is written 「ホテル」. 「ホテレ」 writes the final 「ル」 as the look-alike 「レ」, which is one stroke short; 「ボテル」 adds a voicing mark to the first character, making 「ボ」; 「ホデル」 wrongly voices 「テ」 into 「デ」 — every distractor changes the sound.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-028',
    stem: 'ねる まえに ほんを 【よみます】。',
    options: ['読みます', '語みます', '続みます', '読ます'],
    answerIndex: 0,
    explanation:
      '「よむ」（讀、唸）寫作「読む」，禮貌形為「読みます」。「語」（かたる，講述）和「続」（つづく，繼續）都是言字旁或右半形近的字，容易看錯，但都沒有「〜みます」這種讀法；「読ます」漏掉送假名「み」，活用錯誤。',
    explanationEn:
      '「よむ」 (to read) is written 「読む」, polite form 「読みます」. 「語」 (かたる, to tell) and 「続」 (つづく, to continue) share the speech radical or a similar right-hand side and are easy to misread, but neither is ever read 「〜みます」; 「読ます」 drops the okurigana 「み」, an incorrect conjugation.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-029',
    stem: 'この おてらは とても 【ふるい】です。',
    options: ['古い', '占い', '苦い', '古るい'],
    answerIndex: 0,
    explanation:
      '「ふるい」（舊的、古老的）寫作「古い」，送假名只有「い」。「占い」（うらない，占卜）的「占」與「古」只差一筆；「苦い」（にがい，苦的）內含「古」的字形，但讀音、語意都不合；「古るい」多送了「る」，是送假名錯誤。',
    explanationEn:
      '「ふるい」 (old) is written 「古い」, with only 「い」 as okurigana. 「占い」 (うらない, fortune-telling) uses 「占」, which differs from 「古」 by only one stroke; 「苦い」 (にがい, bitter) contains the shape of 「古」, but neither its reading nor its meaning fits; 「古るい」 adds an extra 「る」, an okurigana error.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-030',
    stem: '【め】が いたいですから、びょういんへ いきます。',
    options: ['目', '日', '月', '自'],
    answerIndex: 0,
    explanation:
      '「め」（眼睛）寫作「目」。「日」（ひ，太陽、日子）比「目」少一橫、「月」（つき，月亮）形狀也極相近；「自」（自己的自）只比「目」多上面一撇，三者都是典型的形近干擾，但讀音都不是「め」，只有「目」正確。',
    explanationEn:
      '「め」 (eye) is written 「目」. 「日」 (sun, day) has one stroke fewer than 「目」; 「月」 (moon) has an extremely similar shape; 「自」 (self) is 「目」 with just a small extra stroke on top — all three are classic look-alike traps, but none of them is read 「め」. Only 「目」 is correct.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-031',
    stem: '【でぱーと】で かばんを かいました。',
    options: ['デパート', 'デバート', 'テパート', 'デパト'],
    answerIndex: 0,
    explanation:
      '外來語「でぱーと」（百貨公司）的片假名寫法是「デパート」。「デバート」把半濁音「パ」誤寫成濁音「バ」；「テパート」漏掉開頭「デ」的濁點變成清音「テ」；「デパト」漏掉中間的長音「ー」，讀音都不正確。',
    explanationEn:
      'The loanword 「でぱーと」 (department store) is written 「デパート」. 「デバート」 turns the half-voiced 「パ」 into the voiced 「バ」; 「テパート」 drops the voicing mark on the first character, leaving unvoiced 「テ」; 「デパト」 forgets the long-vowel mark in the middle — none of these read correctly.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-032',
    stem: 'この みせの やさいは 【やすい】です。',
    options: ['安い', '案い', '宅い', '安すい'],
    answerIndex: 0,
    explanation:
      '「やすい」（便宜的）寫作「安い」，送假名只有「い」。「案」（提案的案）是「安」下面加「木」的形近字；「宅」（住宅的宅）同為寶蓋頭、字形相近，但都沒有這種形容詞用法；「安すい」多送了「す」，是典型的送假名錯誤。',
    explanationEn:
      '「やすい」 (cheap) is written 「安い」, with only 「い」 as okurigana. 「案」 (proposal) is 「安」 with 「木」 added underneath, and 「宅」 (house) shares the same roof radical — both look-alikes with no adjective form like this; 「安すい」 adds an extra 「す」, a typical okurigana mistake.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-033',
    stem: 'おとうとは あるいて 【がっこう】へ いきます。',
    options: ['学校', '学交', '字校', '学枚'],
    answerIndex: 0,
    explanation:
      '「がっこう」（學校）寫作「学校」。「学交」把「校」寫成右半同形的「交」（こう），少了木字旁；「字校」把「学」誤寫成形近的「字」（じ，文字）；「学枚」把「校」寫成同為木字旁的形近字「枚」（まい），都不是正確寫法。',
    explanationEn:
      '「がっこう」 (school) is written 「学校」. 「学交」 keeps only 「交」, the right half of 「校」, and loses the tree radical; 「字校」 mistakes 「学」 for the look-alike 「字」 (character, letter); 「学枚」 swaps 「校」 for 「枚」, another tree-radical look-alike read 「まい」 — only 「学校」 is correct.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-034',
    stem: 'えきの まえで ともだちを 【まちます】。',
    options: ['待ちます', '持ちます', '侍ちます', '待ます'],
    answerIndex: 0,
    explanation:
      '「まつ」（等待）寫作「待つ」，禮貌形為「待ちます」。「持」（もつ，拿、持有）只是部首從雙人旁換成提手旁，是最經典的形近混淆；「侍」（さむらい，武士）右半相同、也極相似；「待ます」漏掉送假名「ち」，活用錯誤。',
    explanationEn:
      '「まつ」 (to wait) is written 「待つ」, polite form 「待ちます」. 「持」 (もつ, to hold) differs from 「待」 only in its left radical and is the most classic mix-up of the pair; 「侍」 (さむらい, samurai) shares the same right half and looks very similar too; 「待ます」 drops the okurigana 「ち」, an incorrect conjugation.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-035',
    stem: 'まいあさ テレビで 【にゅーす】を みます。',
    options: ['ニュース', 'ニユース', 'ニューヌ', 'ニュス'],
    answerIndex: 0,
    explanation:
      '外來語「にゅーす」（新聞）的片假名寫法是「ニュース」：大的「ニ」加小的「ュ」。「ニユース」把「ユ」寫成大字，拗音寫法錯誤；「ニューヌ」把字尾的「ス」寫成形近的「ヌ」；「ニュス」漏掉長音「ー」，讀音就變了。',
    explanationEn:
      'The loanword 「にゅーす」 (news) is written 「ニュース」: a large 「ニ」 plus a small 「ュ」. 「ニユース」 writes the 「ユ」 full-size, which is the wrong way to write a contracted sound; 「ニューヌ」 writes the final 「ス」 as the look-alike 「ヌ」; 「ニュス」 drops the long-vowel mark, which changes the sound.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-036',
    stem: 'たんじょうびに 【はな】を もらいました。',
    options: ['花', '化', '草', '茶'],
    answerIndex: 0,
    explanation:
      '「はな」（花）寫作「花」。「化」（変化的化）正是「花」去掉草字頭的下半部，字形最接近；「草」（くさ，草）和「茶」（ちゃ，茶）都同為草字頭的形近字，也都是植物相關詞，但讀音都不是「はな」，只有「花」正確。',
    explanationEn:
      '「はな」 (flower) is written 「花」. 「化」 (change) is exactly 「花」 without the grass radical, so its shape is the closest; 「草」 (くさ, grass) and 「茶」 (ちゃ, tea) share the same grass radical and are plant-related words too, but none of the three is read 「はな」 — only 「花」 is correct.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-037',
    stem: '【ちいさい】 こどもが うたって います。',
    options: ['小さい', '少さい', '小い', '木さい'],
    answerIndex: 0,
    explanation:
      '「ちいさい」（小的）寫作「小さい」，送假名是「さい」。「少」（すくない，少的）只比「小」多一撇，語意也相近，是最強的形近干擾；「小い」漏掉送假名「さ」，是送假名錯誤；「木さい」的「木」（き，樹）不成詞。',
    explanationEn:
      '「ちいさい」 (small) is written 「小さい」, with 「さい」 as okurigana. 「少」 (すくない, few) is 「小」 plus one extra stroke and has a close meaning, making it the strongest look-alike trap; 「小い」 drops the okurigana 「さ」, an okurigana error; 「木さい」 forms no word — 「木」 is read 「き」 (tree).',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-038',
    stem: 'まいしゅう でんわで かぞくと 【はなします】。',
    options: ['話します', '語します', '詰します', '話ます'],
    answerIndex: 0,
    explanation:
      '「はなす」（說話、交談）寫作「話す」，禮貌形為「話します」。「語」（かたる）和「詰」（つめる）都是言字旁、右半形近的字，容易與「話」混淆，但都沒有「〜します」這種讀法；「話ます」漏掉送假名「し」，活用形式錯誤。',
    explanationEn:
      '「はなす」 (to talk) is written 「話す」, polite form 「話します」. 「語」 (かたる) and 「詰」 (つめる) share the speech radical and have similar right-hand parts, so they are easy to confuse with 「話」, but neither is ever read 「〜します」; 「話ます」 drops the okurigana 「し」, an incorrect conjugation.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-039',
    stem: '【すぷーん】で カレーを たべます。',
    options: ['スプーン', 'スプーソ', 'スブーン', 'スプン'],
    answerIndex: 0,
    explanation:
      '外來語「すぷーん」（湯匙）的片假名寫法是「スプーン」。「スプーソ」把字尾的「ン」寫成形近的「ソ」，兩者只差筆畫方向，是片假名最經典的混淆組；「スブーン」把半濁點寫成濁點；「スプン」漏掉長音「ー」，都不正確。',
    explanationEn:
      'The loanword 「すぷーん」 (spoon) is written 「スプーン」. 「スプーソ」 writes the final 「ン」 as the look-alike 「ソ」 — the most classic katakana mix-up, since they differ only in stroke direction; 「スブーン」 turns the half-voicing circle into a voicing mark; 「スプン」 drops the long-vowel mark.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-hyoki-040',
    stem: 'たくさん あるいたので、【あし】が いたいです。',
    options: ['足', '走', '是', '手'],
    answerIndex: 0,
    explanation:
      '「あし」（腳）寫作「足」。「走」（はしる，跑）下半部與「足」相近、語意又和腳相關，是強力形近干擾；「是」字形同樣與「足」極像，但讀「ぜ」，不用於身體部位；「手」（て，手）雖是身體部位，讀音、字形都對不上。',
    explanationEn:
      '「あし」 (foot, leg) is written 「足」. 「走」 (はしる, to run) has a similar lower half and a leg-related meaning, making it a strong trap; 「是」 also looks very much like 「足」 but is read 「ぜ」 and is not a body part; 「手」 (て, hand) is a body part, but neither its shape nor its reading matches.',
  },
]

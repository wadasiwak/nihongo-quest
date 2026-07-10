import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  // ===== 名詞 6 題（001~006）=====
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-001',
    stem: 'トラブルの原因を正確に（　）するまで、作業を再開しないでください。',
    options: ['把握', '所有', '捕獲', '保管'],
    answerIndex: 0,
    explanation:
      '「把握」（掌握、確實理解）指完整弄清狀況或內容，「原因を把握する」「状況を把握する」是 N2 必備搭配。「所有」是擁有財產；「捕獲」是捕捉動物或獵物；「保管」是保管物品，三者的對象都是具體物，不能用於「原因」這種抽象內容。',
    explanationEn:
      '「把握」 (to grasp, to fully understand) means getting a complete picture of a situation or content; 「原因を把握する」 and 「状況を把握する」 are essential N2 collocations. 「所有」 means owning property; 「捕獲」 means capturing animals or prey; 「保管」 means keeping items in custody — all three take concrete objects and cannot be used with something abstract like 「原因」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-002',
    stem: '工事の騒音について、近所の住民から（　）が寄せられた。',
    options: ['苦情', '悪口', '愚痴', '皮肉'],
    answerIndex: 0,
    explanation:
      '「苦情」（投訴、抱怨）指向責任方正式表達不滿，「苦情が寄せられる」是新聞、公告的固定說法。「悪口」是背地說人壞話；「愚痴」是對無法改變的事發牢騷，通常只對親近的人說，不會「寄せられる」給施工方；「皮肉」是諷刺挖苦，都不合語境。',
    explanationEn:
      '「苦情」 (formal complaint) is dissatisfaction expressed to the responsible party, and 「苦情が寄せられる」 is a set phrase in news reports and notices. 「悪口」 is badmouthing someone behind their back; 「愚痴」 is grumbling about things that cannot be changed, usually only to people close to you, so it would not be 「寄せられる」 to the construction company; 「皮肉」 is sarcasm — none fit the context.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-003',
    stem: '工事は順調に進んでおり、来月には完成する（　）だ。',
    options: ['見通し', '見解', '見晴らし', '見送り'],
    answerIndex: 0,
    explanation:
      '「見通し」（預估、前景）指對未來發展的預測，「完成する見通しだ」是報導體常見句型。「見解」是對問題的見解、看法，不接在動詞辭書形後表預測；「見晴らし」是視野、展望的景色；「見送り」是送行或暫緩，語意皆不合。',
    explanationEn:
      '「見通し」 (outlook, prospect) is a forecast of how things will develop, and 「完成する見通しだ」 is a common journalistic pattern. 「見解」 is an opinion or view on an issue and does not follow a dictionary-form verb to express a forecast; 「見晴らし」 is a scenic view or vista; 「見送り」 means seeing someone off or postponing something — none of these fit the meaning.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-004',
    stem: 'システムの一部に不具合が発生したが、幸い業務に（　）は出ていないという。',
    options: ['支障', '邪魔', '故障', '障害物'],
    answerIndex: 0,
    explanation:
      '「支障」（妨礙、影響）指對事情進行造成阻礙，「業務に支障が出る／支障をきたす」是商務固定搭配。「邪魔」雖也是妨礙，但慣用「邪魔になる／邪魔をする」，不說「邪魔が出る」；「故障」的主語應是機器本身，「業務」不會故障；「障害物」是實體障礙物。',
    explanationEn:
      '「支障」 (hindrance, disruption) refers to something obstructing the progress of work, and 「業務に支障が出る／支障をきたす」 are fixed business collocations. 「邪魔」 also means a hindrance, but it is used as 「邪魔になる／邪魔をする」 — you cannot say 「邪魔が出る」; 「故障」 takes a machine as its subject, and 「業務」 cannot break down; 「障害物」 is a physical obstacle.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-005',
    stem: '締め切りまでまだ一週間あるので、時間には十分（　）がある。',
    options: ['余裕', '余分', '残額', '空白'],
    answerIndex: 0,
    explanation:
      '「余裕」（餘裕、從容）指時間、金錢或心理上留有充分空間，「時間に余裕がある」是固定說法。「余分」指多出來的部分，通常作「余分な＋名詞」使用，不搭「時間には〜がある」；「残額」是剩餘金額，只用於錢；「空白」是空白處或空窗期，語境不合。',
    explanationEn:
      '「余裕」 (leeway, room to spare) means having ample margin in time, money, or composure, and 「時間に余裕がある」 is a set expression. 「余分」 means an excess portion and is normally used as 「余分な」 plus a noun, so it does not fit 「時間には〜がある」; 「残額」 is a remaining balance and applies only to money; 「空白」 is a blank space or gap, which does not suit the context.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-006',
    stem: 'この料理は（　）がかかるが、その分できあがりの味は格別だ。',
    options: ['手間', '手際', '手順', '手元'],
    answerIndex: 0,
    explanation:
      '「手間」（工夫、費事）指完成事情所需的勞力與時間，「手間がかかる」是固定搭配。「手際」是處理事情的手法俐落與否，慣用「手際がいい」；「手順」是步驟、程序，說「手順を踏む」而非「かかる」；「手元」是手邊，如「手元にある」，皆不能接「がかかる」。',
    explanationEn:
      '「手間」 (time and effort) refers to the labor and time a task requires, and 「手間がかかる」 is the set collocation. 「手際」 refers to how deftly one handles things and is used as 「手際がいい」; 「手順」 means steps or procedure, used with 「手順を踏む」 rather than 「かかる」; 「手元」 means at hand, as in 「手元にある」 — none of them can take 「がかかる」.',
  },
  // ===== 動詞 5 題（007~011）=====
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-007',
    stem: '先輩に頼まれて、送別会の司会を（　）ことになった。',
    options: ['引き受ける', '受け取る', '受け入れる', '引き取る'],
    answerIndex: 0,
    explanation:
      '「引き受ける」（接下、承擔）指答應承擔工作或任務，「司会を引き受ける」是固定搭配。「受け取る」是收下物品或理解為某種意思；「受け入れる」是接納人、意見或條件，對象不是任務本身；「引き取る」是領回、收留，語意皆不合「答應擔任」的語境。',
    explanationEn:
      '「引き受ける」 (to take on, to undertake) means agreeing to shoulder a job or task, and 「司会を引き受ける」 is the set collocation. 「受け取る」 means to receive an item or to interpret something a certain way; 「受け入れる」 means to accept people, opinions, or conditions — not a task itself; 「引き取る」 means to collect or take someone in — none fit the sense of agreeing to serve as MC.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-008',
    stem: '健康のために、毎日野菜を多くとるように（　）いる。',
    options: ['心がけて', '心得て', '思いついて', '見習って'],
    answerIndex: 0,
    explanation:
      '「心がける」（留心、注意去做）指平時有意識地努力實行某事，「〜ように心がける」是固定句型。「心得る」是懂得、領會要領，如「マナーを心得ている」，不接「ように」；「思いつく」是靈光一閃想到點子，與持續的習慣矛盾；「見習う」是以某人為榜樣學習，對象應是人。',
    explanationEn:
      '「心がける」 (to make a conscious effort) means habitually and deliberately trying to do something, and 「〜ように心がける」 is the fixed pattern. 「心得る」 means to know or have the knack of something, as in 「マナーを心得ている」, and does not take 「ように」; 「思いつく」 means to hit upon an idea in a flash, which contradicts an ongoing habit; 「見習う」 means to learn by following someone as a model, so its object should be a person.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-009',
    stem: '初対面の人に年収を聞くのは失礼だと思い、質問するのを（　）。',
    options: ['ためらった', '断った', '引き止めた', '見逃した'],
    answerIndex: 0,
    explanation:
      '「ためらう」（猶豫、遲疑）指因顧慮而下不了決心行動，「質問するのをためらう」正合「覺得失禮而遲疑」的語境。「断る」是拒絕別人的請求，這裡沒有人提出請求；「引き止める」是挽留他人；「見逃す」是看漏或放過，對象都不能是自己的「質問する」這個行為。',
    explanationEn:
      '「ためらう」 (to hesitate) means being unable to bring oneself to act because of misgivings, and 「質問するのをためらう」 fits hesitating out of fear of being rude. 「断る」 means to refuse a request, but no one has made a request here; 「引き止める」 means to hold someone back; 「見逃す」 means to overlook or let something slip by — none of them can take one\'s own act of 「質問する」 as their object.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-010',
    stem: 'スマートフォンの長時間の使用は、視力だけでなく睡眠にも悪い影響を（　）おそれがある。',
    options: ['及ぼす', '果たす', '注ぐ', '掲げる'],
    answerIndex: 0,
    explanation:
      '「及ぼす」（波及、帶來）指使影響、損害擴及對象，「影響を及ぼす」是 N2 核心搭配。「果たす」搭「役割・責任を果たす」（完成任務）；「注ぐ」搭「力・愛情を注ぐ」（傾注）；「掲げる」搭「目標・スローガンを掲げる」（高舉、標榜），都不能接「影響」。',
    explanationEn:
      '「及ぼす」 (to exert, to bring upon) means causing influence or damage to reach something, and 「影響を及ぼす」 is a core N2 collocation. 「果たす」 pairs with 「役割・責任を果たす」 (to fulfill a role or duty); 「注ぐ」 pairs with 「力・愛情を注ぐ」 (to pour effort or love into); 「掲げる」 pairs with 「目標・スローガンを掲げる」 (to hold up a goal or slogan) — none of them can take 「影響」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-011',
    stem: '今回の登山は天候に（　）、山頂からすばらしい景色を眺めることができた。',
    options: ['恵まれ', '慕われ', '囲まれ', '雇われ'],
    answerIndex: 0,
    explanation:
      '「恵まれる」（受眷顧、條件優越）慣以「〜に恵まれる」表示幸運地擁有好條件，「天候に恵まれる」是固定搭配。「慕われる」是受人愛戴，主語應是人；「囲まれる」是被包圍，如「自然に囲まれる」，但天候無法「包圍」人且不表幸運；「雇われる」是受僱，語意完全不合。',
    explanationEn:
      '「恵まれる」 (to be blessed with) is used as 「〜に恵まれる」 to mean being fortunate enough to have favorable conditions, and 「天候に恵まれる」 is the set collocation. 「慕われる」 means to be adored by people, whose subject should be a person; 「囲まれる」 means to be surrounded, as in 「自然に囲まれる」, but weather cannot surround anyone and it carries no sense of luck; 「雇われる」 means to be employed, which is completely off.',
  },
  // ===== 形容詞 4 題（012~015）=====
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-012',
    stem: '実績と経験を考えれば、彼女をリーダーに選んだのは（　）な判断だと言えるだろう。',
    options: ['妥当', '有能', '器用', '豪華'],
    answerIndex: 0,
    explanation:
      '「妥当」（妥當、合理）指判斷或處置合乎道理、沒有不當之處，「妥当な判断」是評論常用搭配。「有能」是形容人有能力，修飾對象應是人而非「判断」；「器用」是手巧或處事靈活；「豪華」是豪華奢侈，用於物品或排場，皆不能修飾「判断」。',
    explanationEn:
      '「妥当」 (appropriate, sound) describes a judgment or measure that is reasonable and free of impropriety, and 「妥当な判断」 is a common collocation in commentary. 「有能」 describes a capable person and should modify people, not 「判断」; 「器用」 means dexterous or adaptable; 「豪華」 means luxurious, used for objects or settings — none of them can modify 「判断」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-013',
    stem: '事前に資料を配っておいたおかげで、会議は（　）に進んだ。',
    options: ['円滑', '温厚', '質素', '頻繁'],
    answerIndex: 0,
    explanation:
      '「円滑」（順利、圓滑無阻）指事情進行順暢沒有阻礙，「円滑に進む」是商務場面的固定搭配。「温厚」是形容人性情溫和敦厚，不能形容會議進行；「質素」是樸素節儉；「頻繁」是次數頻繁，「頻繁に進む」語意不通，都不合語境。',
    explanationEn:
      '「円滑」 (smooth, without a hitch) describes things proceeding smoothly with no obstruction, and 「円滑に進む」 is a fixed collocation in business settings. 「温厚」 describes a person of gentle, kindly temperament and cannot describe how a meeting proceeds; 「質素」 means plain and frugal; 「頻繁」 means frequent, and 「頻繁に進む」 makes no sense — none fit the context.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-014',
    stem: '彼の返事は（　）で、賛成なのか反対なのか分からなかった。',
    options: ['あいまい', 'おおげさ', 'のんき', '強気'],
    answerIndex: 0,
    explanation:
      '「あいまい」（曖昧、含糊）指態度或說法模稜兩可，正好呼應後句「不知是贊成還是反對」。「おおげさ」是誇張、小題大作，誇張的回答反而立場鮮明；「のんき」是悠哉不操心，形容性格；「強気」是態度強硬，若回答強硬就不會分不清立場，皆與語境矛盾。',
    explanationEn:
      '「あいまい」 (vague, ambiguous) describes a noncommittal attitude or statement, echoing the following clause about not knowing whether he agrees or disagrees. 「おおげさ」 means exaggerated — an exaggerated reply would make his position all the clearer; 「のんき」 means easygoing and describes personality; 「強気」 means assertive — a firm reply would leave no doubt about his stance. All three contradict the context.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-015',
    stem: '経験豊富な先輩が同行してくれるので、初めての海外出張でも（　）。',
    options: ['心強い', '心細い', '勇ましい', 'そそっかしい'],
    answerIndex: 0,
    explanation:
      '「心強い」（安心、有靠山）指因有依靠而感到踏實放心，有可靠前輩同行正是典型語境。「心細い」意思正好相反，是孤單不安；「勇ましい」是勇猛雄壯，形容姿態或聲勢，不用於「因有人陪同而安心」；「そそっかしい」是冒失粗心，形容性格，皆不合。',
    explanationEn:
      '「心強い」 (reassuring, heartening) means feeling secure because you have someone to rely on — having an experienced senior along is the textbook context. 「心細い」 means exactly the opposite: lonely and anxious; 「勇ましい」 means brave or gallant, describing bearing or spirit, not the relief of being accompanied; 「そそっかしい」 means careless and scatterbrained, describing personality — none fit.',
  },
  // ===== 副詞 5 題（016~020）=====
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-016',
    stem: 'ずっと欲しかった高級腕時計を、ボーナスが出たのを機に（　）買った。',
    options: ['思い切って', '思わず', 'わざと', 'いやいや'],
    answerIndex: 0,
    explanation:
      '「思い切って」（下定決心、狠下心）指克服猶豫果斷行動，買昂貴的心願之物正是典型用法。「思わず」是不由自主、下意識地，與「盤算已久才出手」矛盾；「わざと」是故意（常帶負面意圖）；「いやいや」是不情願地，與「ずっと欲しかった」相矛盾。',
    explanationEn:
      '「思い切って」 (taking the plunge) means acting decisively after overcoming hesitation — buying an expensive long-desired item is the classic use. 「思わず」 means involuntarily, on reflex, which contradicts a long-planned purchase; 「わざと」 means deliberately, often with ill intent; 「いやいや」 means reluctantly, which contradicts 「ずっと欲しかった」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-017',
    stem: 'これは（　）私個人の意見であって、会社を代表するものではありません。',
    options: ['あくまで', 'わざわざ', 'いよいよ', 'かえって'],
    answerIndex: 0,
    explanation:
      '「あくまで（も）」（充其量、僅僅是）用於限定範圍、強調「終究只是〜」，後面常接「〜であって…ではない」的對比句型。「わざわざ」是特地、專程；「いよいよ」是終於、越發；「かえって」是反而，三者都不能表達「僅限於此」的限定語氣。',
    explanationEn:
      '「あくまで（も）」 (purely, strictly) limits the scope and stresses that something is no more than what is stated, and it typically pairs with the contrastive pattern 「〜であって…ではない」. 「わざわざ」 means going out of one\'s way; 「いよいよ」 means at last or increasingly; 「かえって」 means on the contrary — none of the three can express this limiting nuance.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-018',
    stem: '父は昔から健康そのもので、風邪も（　）ひかない。',
    options: ['めったに', 'たまに', 'しばしば', '常に'],
    answerIndex: 0,
    explanation:
      '「めったに」（很少、難得）是呼應否定的副詞，「めったに〜ない」表示頻率極低，正合「身體健朗很少感冒」。「たまに」（偶爾）和「しばしば」（屢屢）都描述肯定句的頻率，接「ひかない」語意不通；「常に」是總是，「常にひかない」也不是自然的頻率表達。',
    explanationEn:
      '「めったに」 (rarely) is an adverb that must pair with a negative: 「めったに〜ない」 expresses very low frequency, matching a robust father who hardly ever catches colds. 「たまに」 (occasionally) and 「しばしば」 (frequently) describe frequency in affirmative sentences and make no sense before 「ひかない」; 「常に」 means always, and 「常にひかない」 is not a natural way to express frequency either.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-019',
    stem: '発車寸前の電車に、（　）間に合った。',
    options: ['かろうじて', '今にも', 'たちまち', 'とっくに'],
    answerIndex: 0,
    explanation:
      '「かろうじて」（勉強、好不容易才）表示差一點就失敗、驚險達成，與「発車寸前」的千鈞一髮語境相扣。「今にも」是眼看就要〜，後面須接「〜そうだ」等樣態表現；「たちまち」是轉眼間（變化迅速）；「とっくに」是老早就〜，與「寸前才趕上」矛盾。',
    explanationEn:
      '「かろうじて」 (barely, by the skin of one\'s teeth) expresses succeeding by a hair after nearly failing, matching the last-second context of 「発車寸前」. 「今にも」 means on the verge of and must be followed by an appearance expression like 「〜そうだ」; 「たちまち」 means in an instant, describing rapid change; 「とっくに」 means long ago, which contradicts making it just before departure.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-bunmyaku-020',
    stem: '卒業して十年もたつのに、彼は（　）作家になる夢をあきらめずにいる。',
    options: ['いまだに', 'まもなく', 'いきなり', 'ようやく'],
    answerIndex: 0,
    explanation:
      '「いまだに」（至今仍然）表示狀態持續到現在都沒改變，常與「〜のに」搭配帶出「都過這麼久了竟還〜」的語感。「まもなく」是不久之後，指未來；「いきなり」是突然，與十年來的持續狀態矛盾；「ようやく」是好不容易終於〜，後面應接達成的結果而非持續未變的狀態。',
    explanationEn:
      '「いまだに」 (even now, still) indicates a state that has continued unchanged up to the present, and it often pairs with 「〜のに」 to convey that so much time has passed and yet nothing has changed. 「まもなく」 means before long and points to the future; 「いきなり」 means suddenly, contradicting a state sustained for ten years; 「ようやく」 means finally managing to, which should be followed by an achieved result, not an unchanged ongoing state.',
  },
]

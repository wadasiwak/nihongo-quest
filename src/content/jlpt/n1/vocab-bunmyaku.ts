import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  // ===== 名詞 6 題（001~006）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-001',
    stem: '彼の何気ない一言は、問題解決の糸口について多くの（　）を含んでいた。',
    options: ['示唆', '合図', '申告', '催促'],
    answerIndex: 0,
    explanation:
      '「示唆」（暗示、啟發）指間接透露的提示，「示唆を含む／示唆に富む」是固定搭配，表示話語中蘊含許多啟發。「合図」是動作或聲音上的信號，如揮手示意；「申告」是向機關申報；「催促」是催促對方行動，都無法被一句無心之言「含んでいた」。',
    explanationEn:
      '「示唆」 (suggestion, hint) refers to an indirect clue or insight; 「示唆を含む」 and 「示唆に富む」 are set collocations for a remark rich in hints. 「合図」 is a physical signal such as a wave of the hand; 「申告」 is a formal declaration to the authorities; 「催促」 is pressing someone to act — none of these can be "contained" in a casual remark.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-002',
    stem: '司会者の個人的な感想が延々と続き、話は本来の議題から大きく（　）していた。',
    options: ['逸脱', '離脱', '脱退', '脱落'],
    answerIndex: 0,
    explanation:
      '「逸脱」（偏離）指偏離常軌、正題或規範，「議題から逸脱する」是常見搭配。「離脱」是脫離組織、隊伍或某種狀態（如「戦線離脱」）；「脱退」是退出團體；「脱落」是掉隊、脫落，主語通常是人或物，三者都不能形容話題偏離正題。',
    explanationEn:
      '「逸脱」 (deviation) means straying from the proper track, topic, or norms; 「議題から逸脱する」 is a standard collocation. 「離脱」 is withdrawing from a group, formation, or state (as in 「戦線離脱」); 「脱退」 is quitting an organization; 「脱落」 is dropping out or falling off — none of the three describes talk drifting from the agenda.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-003',
    stem: '今回の講演会の参加費は、会員・非会員を問わず（　）で五千円となっている。',
    options: ['一律', '画一', '均等', '互角'],
    answerIndex: 0,
    explanation:
      '「一律」（一律、統一）指不分對象全部相同，「一律で五千円」表示所有人統一收五千日圓。「画一」多以「画一的」的形式形容缺乏個性的整齊劃一，不用於費用；「均等」是平均分配（如「機会均等」）；「互角」是實力不相上下，語境完全不合。',
    explanationEn:
      '「一律」 (uniform, across the board) means the same for everyone regardless of category, so 「一律で五千円」 means a flat fee of 5,000 yen for all. 「画一」 appears mostly as 「画一的」 criticizing bland uniformity and is not used for fees; 「均等」 means equal distribution (as in 「機会均等」); 「互角」 means evenly matched in strength, which does not fit at all.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-004',
    stem: '新制度に対しては、現場の負担が増えるのではないかという（　）の声が上がっている。',
    options: ['懸念', '未練', '錯覚', '油断'],
    answerIndex: 0,
    explanation:
      '「懸念」（憂慮、掛心）指對未來可能發生的壞事放心不下，「懸念の声が上がる」是新聞報導常見說法。「未練」是對過去的事依依不捨；「錯覚」是錯覺、誤認；「油断」是大意疏忽，三者都無法搭配「〜の声が上がる」表達對新制度的擔憂。',
    explanationEn:
      '「懸念」 (concern, apprehension) is unease about something bad that may happen; 「懸念の声が上がる」 is a stock phrase in news reports. 「未練」 is lingering attachment to something past; 「錯覚」 is an illusion or misperception; 「油断」 is carelessness — none of them combines with 「〜の声が上がる」 to voice worry about the new system.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-005',
    stem: '両国の交渉は行き詰まっており、事態の（　）には首脳同士の直接対話が不可欠だ。',
    options: ['打開', '解除', '脱出', '返上'],
    answerIndex: 0,
    explanation:
      '「打開」（打開僵局）指突破停滯不前的困境，「事態を打開する／事態の打開」是固定搭配。「解除」用於解除警報、契約等既有的限制；「脱出」是從危險場所逃出；「返上」是返還、取消（如「汚名返上」），都不能表示化解談判僵局。',
    explanationEn:
      '「打開」 (breakthrough) means breaking out of a deadlock; 「事態を打開する／事態の打開」 is a set collocation. 「解除」 is lifting an existing restriction such as an alert or a contract; 「脱出」 is escaping from a dangerous place; 「返上」 is handing something back or forgoing it (as in 「汚名返上」) — none expresses resolving stalled negotiations.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-006',
    stem: '感染症の拡大を受けて、政府は入国制限を含む厳しい（　）を講じた。',
    options: ['措置', '処罰', '手際', '始末'],
    answerIndex: 0,
    explanation:
      '「措置」（措施）指針對問題採取的處理辦法，「措置を講じる」（採取措施）是書面語的固定搭配。「処罰」是對違規者的處罰，對象應是人；「手際」是處理事情的手法、俐落程度；「始末」是收拾殘局或事情原委，都不能與「講じる」搭配表示政策手段。',
    explanationEn:
      '「措置」 (measure, step) is an action taken to deal with a problem; 「措置を講じる」 (to take measures) is a fixed formal collocation. 「処罰」 is punishment and takes a person as its object; 「手際」 is one\'s deftness in handling matters; 「始末」 is cleaning up an aftermath or the particulars of an affair — none pairs with 「講じる」 to denote policy measures.',
  },
  // ===== 動詞 5 題（007~011）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-007',
    stem: '今月は出費がかさみ、アルバイト代だけでは生活費を（　）きれない。',
    options: ['賄い', '償い', '凌ぎ', '蓄え'],
    answerIndex: 0,
    explanation:
      '「賄う」（支應、打點）指用某筆錢支付所需開銷，「生活費を賄う」是典型搭配，後接「〜きれない」表示無法完全支應。「償う」是賠償罪過或損失；「凌ぐ」是熬過困境（如「寒さを凌ぐ」），不以生活費作受詞；「蓄える」是儲存，與「不夠支付」的語境相反。',
    explanationEn:
      '「賄う」 means to cover necessary expenses with a given sum; 「生活費を賄う」 is the typical collocation, and 「〜きれない」 adds that the costs cannot be fully covered. 「償う」 is to atone or compensate for a wrong; 「凌ぐ」 is to weather hardship (as in 「寒さを凌ぐ」) and does not take living costs as its object; 「蓄える」 (to save up) contradicts the context of money running short.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-008',
    stem: '工事は資材不足のせいで、予定より大幅に（　）いる。',
    options: ['滞って', '怠って', 'こじれて', 'かさんで'],
    answerIndex: 0,
    explanation:
      '「滞る」（停滯、延宕）指進度或支付卡住不順，「工事が滞る」是常見用法。「怠る」（怠忽）是他動詞，需要受詞（如「確認を怠る」）且主語應是人；「こじれる」用於關係、交涉惡化變複雜；「かさむ」是費用、數量越積越多，主語不能是工程進度。',
    explanationEn:
      '「滞る」 (to stall, be delayed) describes progress or payments getting stuck; 「工事が滞る」 is common usage. 「怠る」 (to neglect) is transitive, needs an object as in 「確認を怠る」, and takes a human subject; 「こじれる」 is used for relationships or negotiations turning sour and tangled; 「かさむ」 means costs piling up — its subject cannot be construction progress.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-009',
    stem: '連日の残業続きで、彼はすっかり健康を（　）しまった。',
    options: ['損なって', '滅ぼして', '砕いて', '絶やして'],
    answerIndex: 0,
    explanation:
      '「損なう」（損害）指傷害健康、信譽、心情等抽象事物，「健康を損なう」是固定搭配。「滅ぼす」是使滅亡，用於國家或慣用句「身を滅ぼす」；「砕く」是打碎硬物或粉碎野心；「絶やす」是使斷絕（如「火を絶やさない」），都不能以健康作受詞。',
    explanationEn:
      '「損なう」 (to harm, impair) takes abstract objects such as health, reputation, or mood; 「健康を損なう」 is a set collocation. 「滅ぼす」 means to destroy, used for nations or in the idiom 「身を滅ぼす」; 「砕く」 is to smash something hard or crush an ambition; 「絶やす」 is to let something die out (as in 「火を絶やさない」) — none can take health as its object.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-010',
    stem: '台風の接近に伴い、鉄道各社は始発から運転を（　）と発表した。',
    options: ['見合わせる', '見落とす', '見計らう', '見渡す'],
    answerIndex: 0,
    explanation:
      '「見合わせる」（暫停、暫緩）指暫時停止實施，「運転を見合わせる」是電車停駛公告的固定說法。「見落とす」是看漏、沒注意到；「見計らう」是斟酌合適的時機（如「頃合いを見計らう」）；「見渡す」是放眼眺望，三者雖同為「見〜」複合動詞，語意都與暫停行駛無關。',
    explanationEn:
      '「見合わせる」 (to suspend, hold off) means to refrain from carrying something out for the time being; 「運転を見合わせる」 is the fixed wording of train-suspension announcements. 「見落とす」 is to overlook; 「見計らう」 is to judge the right moment (as in 「頃合いを見計らう」); 「見渡す」 is to look out over a scene — despite the shared 「見〜」 shape, none means halting service.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-011',
    stem: '発表の日が近づくにつれて、不安は（　）一方だった。',
    options: ['募る', '茂る', '栄える', '潤う'],
    answerIndex: 0,
    explanation:
      '「募る」作自動詞時指思念、不安等情緒愈發強烈，「不安が募る」是典型搭配，配合「〜一方だ」表示不斷加劇。「茂る」是草木茂盛；「栄える」是繁榮興盛；「潤う」是濕潤或經濟變寬裕，主語都應是植物、城市、生活等，不能形容情緒高漲。',
    explanationEn:
      '「募る」 used intransitively means emotions such as anxiety growing ever stronger; 「不安が募る」 is the typical collocation, and 「〜一方だ」 underlines the relentless intensification. 「茂る」 is plants growing thick; 「栄える」 is to flourish; 「潤う」 is to become moist or financially comfortable — their subjects should be plants, cities, or livelihoods, never a swelling emotion.',
  },
  // ===== 形容詞 4 題（012~015，015 為オノマトペ形容動詞）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-012',
    stem: 'この新素材の開発は、業界の常識を覆す（　）な成果として高く評価された。',
    options: ['画期的', '画一的', '断片的', '流動的'],
    answerIndex: 0,
    explanation:
      '「画期的」（劃時代的）形容開創新紀元、前所未有的突破，與「業界の常識を覆す成果」語境相符。「画一的」是千篇一律、缺乏變化，帶負面語感；「断片的」是零碎不完整；「流動的」是情勢不確定、仍會變動，都不能用來讚許突破性成果。',
    explanationEn:
      '「画期的」 (groundbreaking, epoch-making) praises an unprecedented breakthrough, matching 「業界の常識を覆す」 in the sentence. 「画一的」 means monotonously uniform and carries a negative tone; 「断片的」 means fragmentary; 「流動的」 means fluid and still liable to change — none can be used to laud a pioneering achievement.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-013',
    stem: 'この十年、アジア諸国の経済は（　）発展を遂げた。',
    options: ['目覚ましい', '甚だしい', '慌ただしい', '騒々しい'],
    answerIndex: 0,
    explanation:
      '「目覚ましい」（顯著驚人的）用於稱讚進步、發展、活躍等正面成就，「目覚ましい発展を遂げる」是固定搭配。「甚だしい」雖也表程度嚴重，但多接負面內容（如「誤解も甚だしい」）；「慌ただしい」是匆忙不安定；「騒々しい」是吵鬧嘈雜，皆不合語境。',
    explanationEn:
      '「目覚ましい」 (remarkable, spectacular) praises positive accomplishments such as progress or growth; 「目覚ましい発展を遂げる」 is a set collocation. 「甚だしい」 also marks extreme degree but usually with negative content (as in 「誤解も甚だしい」); 「慌ただしい」 means hectic and unsettled; 「騒々しい」 means noisy — none fits the context.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-014',
    stem: '申請の手続きが（　）ため、途中で諦めてしまう人も少なくない。',
    options: ['煩わしい', '紛らわしい', 'よそよそしい', 'みすぼらしい'],
    answerIndex: 0,
    explanation:
      '「煩わしい」（繁瑣麻煩的）形容手續、人際關係等令人嫌煩，「手続きが煩わしい」是典型用法，與「中途放棄」呼應。「紛らわしい」是相似而容易混淆、認錯；「よそよそしい」是態度冷淡見外；「みすぼらしい」是外表寒酸，都不能說明手續令人卻步。',
    explanationEn:
      '「煩わしい」 (tiresome, burdensome) describes procedures or social obligations that feel like a wearisome chore; 「手続きが煩わしい」 is typical usage and explains why people give up midway. 「紛らわしい」 means confusingly similar; 「よそよそしい」 means cold and distant in manner; 「みすぼらしい」 means shabby in appearance — none accounts for applicants abandoning the process.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-015',
    stem: '想定外の質問を記者に浴びせられ、大臣の答弁は（　）になってしまった。',
    options: ['しどろもどろ', 'うずうず', 'つやつや', 'だぶだぶ'],
    answerIndex: 0,
    explanation:
      '「しどろもどろ」形容慌了手腳、語無倫次的樣子，突然被追問而「答弁がしどろもどろになる」是典型情境。「うずうず」是躍躍欲試、按捺不住；「つやつや」是有光澤；「だぶだぶ」是衣服過大鬆垮，三者雖同為擬態語，都無法形容混亂失措的答詢。',
    explanationEn:
      '「しどろもどろ」 depicts flustered, incoherent speech; a minister\'s replies turning 「しどろもどろ」 under unexpected questioning is the classic scene. 「うずうず」 is itching to do something; 「つやつや」 is glossy and lustrous; 「だぶだぶ」 is clothes hanging loose — though all four are mimetic words, only the first depicts a disordered, panicked answer.',
  },
  // ===== 副詞・オノマトペ 5 題（016~020，020 為オノマトペ）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-016',
    stem: '原油価格の高騰を受けて、ガソリンスタンドは（　）値上げに踏み切った。',
    options: ['軒並み', 'めっきり', 'ひとえに', 'うすうす'],
    answerIndex: 0,
    explanation:
      '「軒並み」原指成排的屋簷，引申為「家家戶戶、無一例外地全都」，「軒並み値上げ」是新聞常用表現。「めっきり」表示變化顯著（如「めっきり寒くなった」），須接表變化的敘述；「ひとえに」是全然歸因於（多用於致謝）；「うすうす」是隱約（察覺），皆不合語境。',
    explanationEn:
      '「軒並み」 literally means a row of eaves and by extension "every single one, across the board"; 「軒並み値上げ」 is a common news expression. 「めっきり」 marks a conspicuous change (as in 「めっきり寒くなった」) and needs a change-of-state predicate; 「ひとえに」 means "entirely (owing to)" and appears mainly in acknowledgments; 「うすうす」 means vaguely (sensing) — none fits.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-017',
    stem: '事故で電車が遅れたが、終電に（　）間に合い、なんとか帰宅できた。',
    options: ['かろうじて', 'まんまと', 'いたって', 'あくまで'],
    answerIndex: 0,
    explanation:
      '「かろうじて」（好不容易、勉強地）表示差一點就失敗、驚險過關，「かろうじて間に合う」是典型搭配。「まんまと」是（計謀）得逞地，多用於欺騙成功的場面；「いたって」是極其（形容平穩的狀態，如「いたって元気」）；「あくまで」是堅持到底，都不能表達驚險趕上。',
    explanationEn:
      '「かろうじて」 (barely, by a hair) marks a narrow escape from failure; 「かろうじて間に合う」 is the typical collocation. 「まんまと」 means successfully pulling off a scheme, usually of trickery; 「いたって」 means extremely, describing a settled state (as in 「いたって元気」); 「あくまで」 means insistently, to the last — none conveys just barely catching the last train.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-018',
    stem: '細かい修正は残っているが、企画書は（　）完成ということにして、明日の会議に出そう。',
    options: ['ひとまず', 'いまだに', 'とっくに', 'かねがね'],
    answerIndex: 0,
    explanation:
      '「ひとまず」（暫且、姑且）表示雖未徹底完成，先告一段落再說，與前句「細かい修正は残っているが」的讓步語氣呼應。「いまだに」是至今仍然（沒有改變）；「とっくに」是早就已經；「かねがね」是老早就、一直以來（有所耳聞），三者都與「先視為完成」的語感不符。',
    explanationEn:
      '「ひとまず」 (for now, for the time being) means declaring something settled for the moment even though it is not fully finished, echoing the concession 「細かい修正は残っているが」. 「いまだに」 means "even now, still (unchanged)"; 「とっくに」 means "long since"; 「かねがね」 means "for quite a while (having heard)" — none matches the nuance of provisionally calling the proposal complete.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-019',
    stem: '基礎を丁寧に積み重ねていけば、応用力は（　）身につくものだ。',
    options: ['おのずと', 'わざと', 'あえて', 'ろくに'],
    answerIndex: 0,
    explanation:
      '「おのずと」（自然而然地）表示不需刻意、事情自然發展出某結果，「おのずと身につく」是典型用法。「わざと」是故意地，帶有刻意為之甚至惡意的語感；「あえて」是明知困難或沒必要仍特意去做；「ろくに」是「沒好好地〜」，必須與否定形呼應，皆不合語境。',
    explanationEn:
      '「おのずと」 (naturally, of its own accord) means a result emerges without deliberate effort; 「おのずと身につく」 is typical usage. 「わざと」 means on purpose, often with a hint of malice; 「あえて」 means daring to do something despite difficulty or needlessness; 「ろくに」 means "not properly" and must pair with a negative — none fits the sentence.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-020',
    stem: '一人暮らしを始めてから、親のありがたみを（　）と感じるようになった。',
    options: ['ひしひし', 'めきめき', 'すくすく', 'はらはら'],
    answerIndex: 0,
    explanation:
      '「ひしひし」（深切地）形容某種感受強烈地逼近心頭，「ひしひしと感じる」是固定搭配。「めきめき」是進步顯著（如「めきめき上達する」）；「すくすく」是孩子健康茁壯地成長；「はらはら」是替人捏一把冷汗，三者雖都是擬態語，都不能搭配「感じる」表達深切體會。',
    explanationEn:
      '「ひしひし」 depicts a feeling pressing keenly and vividly upon the heart; 「ひしひしと感じる」 is a set collocation. 「めきめき」 marks rapid, visible improvement (as in 「めきめき上達する」); 「すくすく」 is a child growing up soundly; 「はらはら」 is watching with bated breath — though all are mimetic words, none pairs with 「感じる」 to express keenly felt gratitude.',
  },
  // ===== 名詞 6 題（021~026）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-021',
    stem: '新規事業は苦戦が続いていたが、三年目にしてようやく（　）に乗り始めた。',
    options: ['軌道', '軌跡', '岐路', '沿線'],
    answerIndex: 0,
    explanation:
      '「軌道に乗る」是固定慣用語，指事業、計畫步入正軌、開始順利運作。「軌跡」是移動留下的痕跡或過往歷程（如「人生の軌跡」），不與「乗る」搭配；「岐路」是分岔路口，慣用「岐路に立つ」；「沿線」是鐵路沿線地帶，語境完全不合。',
    explanationEn:
      '「軌道に乗る」 is a fixed idiom meaning a venture finally gets on track and starts running smoothly. 「軌跡」 is the trail or course something has traced (as in 「人生の軌跡」) and does not pair with 「乗る」; 「岐路」 is a fork in the road, used as 「岐路に立つ」; 「沿線」 means the area along a rail line — the context excludes all three.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-022',
    stem: '急速な円安が、輸入品を中心とする物価の上昇に（　）をかけている。',
    options: ['拍車', '歯止め', '拍子', '磨き'],
    answerIndex: 0,
    explanation:
      '「拍車をかける」（加速、推波助瀾）源自馬刺，指使既有趨勢更加劇烈，「物価の上昇に拍車をかける」是新聞常見表現。「歯止めをかける」雖也是固定搭配，但意思是「遏止」，與日圓貶值推升物價的因果方向相反；「拍子」是節拍，慣用「拍子を取る」；「磨きをかける」用於精進技藝（如「腕に磨きをかける」），不能以物價上漲為對象。',
    explanationEn:
      '「拍車をかける」 (to spur on) derives from a rider\'s spurs and means accelerating an existing trend; 「物価の上昇に拍車をかける」 is common in news writing. 「歯止めをかける」 is also a set phrase but means to put the brakes on — the causal direction is reversed, since a weak yen pushes prices up; 「拍子」 is a musical beat, used in 「拍子を取る」; 「磨きをかける」 means polishing up a skill (as in 「腕に磨きをかける」) and cannot take rising prices as its object.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-023',
    stem: '結果さえ出せば手段は問わないという（　）が、業界全体に広がりつつある。',
    options: ['風潮', '風習', '名残', '意地'],
    answerIndex: 0,
    explanation:
      '「風潮」指社會上一時蔓延的風氣、傾向，多含批判語感，「〜という風潮が広がる」是典型用法。「風習」是特定地區代代相傳的習俗，不用來描述新蔓延的價值觀；「名残」是事物消逝後殘留的餘韻；「意地」是固執、志氣（如「意地を張る」），皆無法形容業界瀰漫的風氣。',
    explanationEn:
      '「風潮」 is a social current or climate spreading at a given time, often mentioned with a critical tone; 「〜という風潮が広がる」 is typical usage. 「風習」 is a custom handed down in a particular region, not a newly spreading attitude; 「名残」 is the lingering trace of something gone; 「意地」 is stubbornness or pride (as in 「意地を張る」) — none can describe a mindset pervading an industry.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-024',
    stem: 'この基金の（　）は、災害で親を失った子どもの進学を支援することにある。',
    options: ['趣旨', '内訳', '由緒', '愛想'],
    answerIndex: 0,
    explanation:
      '「趣旨」（宗旨、主旨）指活動或制度設立的目的與用意，「趣旨は〜にある」「趣旨に賛同する」是常見搭配。「内訳」是金額或數量的明細；「由緒」是悠久的來歷（如「由緒ある神社」）；「愛想」是待人的親切態度，三者都不能表達基金成立的目的。',
    explanationEn:
      '「趣旨」 (purpose, aim) is the intent behind establishing an activity or institution; 「趣旨は〜にある」 and 「趣旨に賛同する」 are common patterns. 「内訳」 is an itemized breakdown of sums or quantities; 「由緒」 is a distinguished history (as in 「由緒ある神社」); 「愛想」 is affability toward people — none expresses what the fund was set up to do.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-025',
    stem: '企業には、得た利益を雇用や投資という形で社会に（　）する責任がある。',
    options: ['還元', '返還', '回収', '復旧'],
    answerIndex: 0,
    explanation:
      '「還元」指把獲得的利益回饋給原本的來源，「利益を社会に還元する」是固定搭配。「返還」是把借來或占有的東西歸還原主（如「土地の返還」），利益並非向社會借來之物；「回収」是收回發出去的東西；「復旧」是使受損的設施恢復原狀，皆不合語境。',
    explanationEn:
      '「還元」 means returning earned profits to the source they came from; 「利益を社会に還元する」 is a set collocation. 「返還」 is giving back something borrowed or occupied (as in 「土地の返還」), but profits are not something borrowed from society; 「回収」 is collecting back what was distributed; 「復旧」 is restoring damaged facilities — none fits the context.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-026',
    stem: '長らく低迷していた景気にも、ようやく回復の（　）が見え始めた。',
    options: ['兆し', '名残', '発端', '矢先'],
    answerIndex: 0,
    explanation:
      '「兆し」（徵兆、苗頭）指事情即將發生的跡象，「回復の兆しが見える」是景氣報導的固定說法。「名残」是事物結束後殘留的餘韻，方向恰好相反；「発端」是事件的開端、起因，多用於糾紛；「矢先」用於「〜（よう）とした矢先に」表示正要做某事的當口，不能與「見え始めた」搭配。',
    explanationEn:
      '「兆し」 (sign, harbinger) is an indication that something is about to happen; 「回復の兆しが見える」 is standard phrasing in economic reporting. 「名残」 is what lingers after something has ended — the opposite direction in time; 「発端」 is the origin of an incident, typically a dispute; 「矢先」 is used in 「〜（よう）とした矢先に」 (just as one was about to) and cannot pair with 「見え始めた」.',
  },
  // ===== 動詞 5 題（027~031）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-027',
    stem: '締め切り前で気が張っているせいか、今日はいつになく仕事が（　）。',
    options: ['捗る', '賑わう', '遂げる', '費やす'],
    answerIndex: 0,
    explanation:
      '「捗る」（進展順利）指工作、學習的進度良好，「仕事が捗る」是典型搭配。「賑わう」是場所人潮熱絡，主語應是商店街等地點；「遂げる」（達成）與「費やす」（花費）都是他動詞，需要受詞，放入本句文法不通，語意也與進度順利無關。',
    explanationEn:
      '「捗る」 (to make good progress) describes work or study advancing briskly; 「仕事が捗る」 is the typical collocation. 「賑わう」 means a place bustling with people, so its subject should be a shopping street or the like; 「遂げる」 (to accomplish) and 「費やす」 (to expend) are transitive verbs that require objects, so they are ungrammatical here as well as wrong in meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-028',
    stem: '彼は研究に没頭するあまり、家庭を（　）余裕さえなかったという。',
    options: ['顧みる', '遮る', '唱える', '貫く'],
    answerIndex: 0,
    explanation:
      '「顧みる」（回頭關照、顧及）指把心思放在家庭、安危等事物上，「家庭を顧みる余裕がない」是描述埋首工作者的典型說法。「遮る」是遮蔽、打斷（如「話を遮る」）；「唱える」是高喊主張或誦念；「貫く」是貫徹信念（如「初志を貫く」），三者都不能以家庭作受詞表達照顧之意。',
    explanationEn:
      '「顧みる」 (to look after, spare thought for) means giving attention to one\'s family, safety, and so on; 「家庭を顧みる余裕がない」 is the classic description of someone buried in work. 「遮る」 is to block or interrupt (as in 「話を遮る」); 「唱える」 is to advocate or recite; 「貫く」 is to carry a conviction through (as in 「初志を貫く」) — none takes family as its object in the sense of caring for it.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-029',
    stem: '記録的な豪雨は、農作物を中心に各地に深刻な被害を（　）。',
    options: ['もたらした', '促した', '妨げた', '見逃した'],
    answerIndex: 0,
    explanation:
      '「もたらす」（帶來）指造成某種結果或影響，「被害をもたらす」是災害報導的固定搭配。「促す」是催促、促使，受詞應是人的行動或「注意」等；「妨げる」是妨礙、阻擋，若要表達「防止災害」日語慣用「防ぐ」；「見逃す」是看漏、放過，與「各地に」的句型不合，語意也不通。',
    explanationEn:
      '「もたらす」 (to bring about) means causing a result or effect; 「被害をもたらす」 is the fixed collocation of disaster reporting. 「促す」 is to urge, taking people\'s actions or 「注意」 as its object; 「妨げる」 is to obstruct — for "preventing damage" Japanese idiomatically uses 「防ぐ」; 「見逃す」 is to overlook, which fits neither the pattern with 「各地に」 nor the sense.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-030',
    stem: '落ち込んでいる友人の心中を（　）、その日はそれ以上何も聞かなかった。',
    options: ['察して', '徹して', '制して', '博して'],
    answerIndex: 0,
    explanation:
      '「察する」（體察、體諒）指從情況推想他人的心情，「心中を察する」是固定搭配，與「不再多問」的體貼舉動呼應。「徹する」是貫徹到底（如「裏方に徹する」）；「制する」是控制、壓制（如「先手を制する」）；「博する」慣用「好評を博する」（博得好評），三者都不能以「心中」作受詞。',
    explanationEn:
      '「察する」 (to sense, surmise) means inferring another person\'s feelings from the circumstances; 「心中を察する」 is a set collocation and matches the tactful choice not to ask anything more. 「徹する」 is to devote oneself fully to a role (as in 「裏方に徹する」); 「制する」 is to control or check (as in 「先手を制する」); 「博する」 appears in 「好評を博する」 (to win acclaim) — none can take 「心中」 as its object.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-031',
    stem: '当事者二人の証言が大きく（　）いて、真相の解明は難航している。',
    options: ['食い違って', '入れ違って', '出くわして', '途切れて'],
    answerIndex: 0,
    explanation:
      '「食い違う」（相互矛盾、有出入）指說法、意見兜不攏，「証言が食い違う」是新聞常見表現。「入れ違う」是兩人錯身而過、正好錯開；「出くわす」是偶然撞見，需要「〜に」表對象；「途切れる」是中斷，不能與「大きく」搭配，皆無法表達證詞互相矛盾。',
    explanationEn:
      '「食い違う」 (to conflict, diverge) means accounts or opinions failing to line up; 「証言が食い違う」 is common in news reports. 「入れ違う」 is two people just missing each other in passing; 「出くわす」 is to run into someone by chance and requires a 「〜に」 complement; 「途切れる」 is to break off and cannot combine with 「大きく」 — none expresses mutually contradictory testimony.',
  },
  // ===== 形容詞 4 題（032~035）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-032',
    stem: '事故現場の周辺には、（　）数の見物人が押し寄せていた。',
    options: ['おびただしい', '華々しい', '頼もしい', '待ち遠しい'],
    answerIndex: 0,
    explanation:
      '「おびただしい」（數量龐大驚人的）幾乎只用於形容數量極多，「おびただしい数の〜」是固定搭配。「華々しい」是華麗轟動的（如「華々しいデビュー」）；「頼もしい」是可靠的；「待ち遠しい」是迫不及待的，三者都不能修飾「数」表達人數眾多。',
    explanationEn:
      '「おびただしい」 (vast, immense in number) is used almost exclusively for overwhelming quantities; 「おびただしい数の〜」 is a set collocation. 「華々しい」 means dazzling and sensational (as in 「華々しいデビュー」); 「頼もしい」 means reliable; 「待ち遠しい」 means eagerly awaited — none of them can modify 「数」 to convey a huge crowd of onlookers.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-033',
    stem: '装備も経験もないまま真冬の雪山に単独で挑むなど、（　）としか言いようがない。',
    options: ['無謀', '無念', '無邪気', '無造作'],
    answerIndex: 0,
    explanation:
      '「無謀」（魯莽、有勇無謀）形容不衡量風險與自身能力的輕率行動，與「毫無裝備挑戰冬季雪山」的語境相符。「無念」是懊悔不甘；「無邪気」是天真無邪；「無造作」是隨手、不經意地做（如「無造作に置く」），三者雖同為「無〜」形容動詞，都無法批評危險的登山計畫。',
    explanationEn:
      '「無謀」 (reckless, foolhardy) condemns rash action taken without weighing the risks or one\'s own ability — challenging a snowbound peak alone in midwinter with no gear is a textbook case. 「無念」 is bitter regret; 「無邪気」 is innocent and guileless; 「無造作」 is doing something offhandedly (as in 「無造作に置く」) — though all share the 「無〜」 shape, none criticizes a dangerous plan.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-034',
    stem: 'システムに異常を検知した場合は、（　）に管理者へ報告すること。',
    options: ['速やか', '健やか', '緩やか', '鮮やか'],
    answerIndex: 0,
    explanation:
      '「速やかに」（迅速地、從速）是公文與規章常用的書面語，「速やかに報告すること」是典型的指示句。「健やか」是身心健康地成長；「緩やか」是坡度平緩或規定寬鬆；「鮮やか」是色彩鮮豔或手法漂亮俐落，三者雖同為「〜やか」形容動詞，都不能用於要求立即通報。',
    explanationEn:
      '「速やかに」 (promptly, without delay) is formal written style typical of rules and directives; 「速やかに報告すること」 is a standard instruction. 「健やか」 describes growing up healthy; 「緩やか」 describes a gentle slope or lax rules; 「鮮やか」 describes vivid color or brilliant technique — despite the shared 「〜やか」 shape, none can order immediate reporting.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-035',
    stem: '会ったばかりの人に借金を申し込むとは、（　）にもほどがある。',
    options: ['厚かましい', '勇ましい', '微笑ましい', '痛ましい'],
    answerIndex: 0,
    explanation:
      '「厚かましい」（厚臉皮的）形容不知分寸、不顧他人觀感的言行，向初次見面的人開口借錢正是典型例子，「〜にもほどがある」加強譴責語氣。「勇ましい」是英勇雄壯的；「微笑ましい」是令人會心一笑的；「痛ましい」是令人心痛的（如「痛ましい事故」），皆不合語境。',
    explanationEn:
      '「厚かましい」 (brazen, shameless) describes behavior that ignores all sense of propriety — asking someone you have just met for a loan is the textbook example, and 「〜にもほどがある」 sharpens the rebuke. 「勇ましい」 means gallant; 「微笑ましい」 means heartwarming; 「痛ましい」 means heartrending (as in 「痛ましい事故」) — none fits the context.',
  },
  // ===== 副詞・オノマトペ 5 題（036~040，039・040 為オノマトペ）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-036',
    stem: '嫌な予感はしていたが、（　）、彼は約束の時間になっても現れなかった。',
    options: ['案の定', '心なしか', 'まして', 'さぞ'],
    answerIndex: 0,
    explanation:
      '「案の定」（果不其然）表示事情正如事前的預想（多為壞預感）發生，與前句「嫌な予感はしていたが」直接呼應。「心なしか」是「或許是心理作用」，用於不確定的細微感受，不能修飾明確的事實；「まして」是「更何況」，需要前後對比；「さぞ」須與「〜だろう」呼應表推測，皆不合文脈。',
    explanationEn:
      '「案の定」 (sure enough, just as feared) marks an outcome matching a prior premonition, usually a bad one, and directly echoes 「嫌な予感はしていたが」. 「心なしか」 means "perhaps it\'s just my imagination" and cannot modify a clear-cut fact; 「まして」 means "still more so" and needs a comparison; 「さぞ」 must pair with 「〜だろう」 to mark conjecture — none fits this context.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-037',
    stem: '何度修理してもすぐ壊れるのだから、（　）新しいのに買い替えたほうがいい。',
    options: ['いっそ', 'てっきり', 'かねて', 'まさか'],
    answerIndex: 0,
    explanation:
      '「いっそ」（乾脆、索性）表示與其勉強維持現狀，不如下決心採取更徹底的做法，「いっそ買い替えたほうがいい」正是此語感。「てっきり」是「原以為〜」，須與「と思っていた」等誤認表現呼應；「かねて」是「早先、老早」（如「かねてから」）；「まさか」須搭配否定或驚訝語氣（如「まさか〜とは」），皆不合語境。',
    explanationEn:
      '「いっそ」 (might as well, would sooner) proposes decisively switching to a more drastic option instead of struggling on — exactly the feel of 「いっそ買い替えたほうがいい」. 「てっきり」 means "I was convinced that..." and needs a mistaken-belief pattern such as 「と思っていた」; 「かねて」 means "previously, for some time" (as in 「かねてから」); 「まさか」 requires negation or surprise (as in 「まさか〜とは」) — none works here.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-038',
    stem: '留学すれば語学力が伸びるとは（　）言えず、本人の努力次第だ。',
    options: ['一概に', '一途に', '一挙に', '一心に'],
    answerIndex: 0,
    explanation:
      '「一概に」（一概地、籠統地）幾乎固定與否定形呼應，「一概に〜とは言えない」表示不能一概而論。「一途に」是專心一意地（如「一途に思い続ける」）；「一挙に」是一舉、一口氣地完成；「一心に」是聚精會神地，三者雖同為「一〜」副詞，都不與「言えず」搭配表達保留的態度。',
    explanationEn:
      '「一概に」 (sweepingly, as a blanket statement) almost always pairs with a negative; 「一概に〜とは言えない」 means one cannot generalize. 「一途に」 means single-mindedly (as in 「一途に思い続ける」); 「一挙に」 means at a single stroke; 「一心に」 means with wholehearted concentration — though all begin with 「一」, none pairs with 「言えず」 to express a reserved judgment.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-039',
    stem: '来週から海外出張のため、今週の手帳には予定が（　）詰まっている。',
    options: ['ぎっしり', 'がっくり', 'うっとり', 'こっそり'],
    answerIndex: 0,
    explanation:
      '「ぎっしり」形容東西塞得滿滿、毫無空隙的樣子，「予定がぎっしり詰まっている」是固定搭配。「がっくり」是失望氣餒或體力驟降的樣子（如「がっくり肩を落とす」）；「うっとり」是陶醉出神；「こっそり」是偷偷地行動，三者雖同為擬態語，都不能形容行程排滿。',
    explanationEn:
      '「ぎっしり」 depicts something packed solid with no gaps; 「予定がぎっしり詰まっている」 is a set collocation. 「がっくり」 depicts slumping in dejection or a sudden loss of strength (as in 「がっくり肩を落とす」); 「うっとり」 is being spellbound; 「こっそり」 is doing something on the sly — though all are mimetic words, none describes a jam-packed schedule.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-040',
    stem: '終わってしまったことをいつまでも（　）悩んでいても、何も始まらない。',
    options: ['くよくよ', 'いそいそ', 'ほくほく', 'のびのび'],
    answerIndex: 0,
    explanation:
      '「くよくよ」形容對已成定局的事耿耿於懷、想不開的樣子，「くよくよ悩む／くよくよする」是典型用法。「いそいそ」是滿心期待、興沖沖地行動；「ほくほく」是因好事而暗自竊喜；「のびのび」是無拘無束、自在舒展，三者的正面語感都與「悩む」矛盾。',
    explanationEn:
      '「くよくよ」 depicts fretting endlessly over what is already done and cannot be undone; 「くよくよ悩む／くよくよする」 is typical usage. 「いそいそ」 is bustling about in happy anticipation; 「ほくほく」 is quietly gleeful over good fortune; 「のびのび」 is feeling free and unconstrained — the upbeat tone of all three clashes with 「悩んでいても」.',
  },
  // ===== 名詞 11 題（041~051）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-041',
    stem: '都市と地方の医療格差を（　）するため、政府は新たな支援策を打ち出した。',
    options: ['是正', '訂正', '修繕', '改心'],
    answerIndex: 0,
    explanation:
      '「是正」（矯正、導正）指糾正制度或狀態上的不公與偏差，「格差を是正する」是政策報導的固定搭配。「訂正」是更正文章、發言中的錯誤；「修繕」是修理建築物等實體；「改心」是人洗心革面，三者都不能以「格差」作受詞。',
    explanationEn:
      '「是正」 (rectification) means correcting an unfair or distorted system or state of affairs; 「格差を是正する」 is a fixed collocation in policy reporting. 「訂正」 is correcting errors in text or statements; 「修繕」 is repairing physical structures; 「改心」 is a person mending their ways — none of the three can take 「格差」 as its object.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-042',
    stem: '順調に進んでいた再開発プロジェクトは、資金難によりあえなく（　）してしまった。',
    options: ['頓挫', '脱線', '転落', '失脚'],
    answerIndex: 0,
    explanation:
      '「頓挫」（受挫停擺）指原本順利進行的計畫、事業中途受阻而停頓，「計画が頓挫する」是典型搭配。「脱線」是列車出軌或話題岔開（如「話が脱線する」）；「転落」是摔落或社會地位一落千丈；「失脚」是掌權者垮台下台，主語應是人，皆不合語境。',
    explanationEn:
      '「頓挫」 (collapse, breakdown) means a project or venture that had been going smoothly grinding to a halt midway; 「計画が頓挫する」 is the typical collocation. 「脱線」 is a train derailing or talk digressing (as in 「話が脱線する」); 「転落」 is falling physically or plunging in social standing; 「失脚」 is a powerful figure losing their position and takes a person as its subject — none fits.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-043',
    stem: '震災直後の混乱に（　）した悪質な商法が相次ぎ、消費者庁が注意を呼びかけた。',
    options: ['便乗', '同乗', '迎合', '執着'],
    answerIndex: 0,
    explanation:
      '「便乗」（趁機搭便車）指趁著某種事態撈取好處，「混乱に便乗する」「便乗値上げ」是典型用法，最合趁災行騙的語境。「同乗」是同搭一輛交通工具；「迎合」是一味討好他人的喜好或意見（如「世論に迎合する」）；「執着」是執著不放，皆不能表達趁亂牟利。',
    explanationEn:
      '「便乗」 (piggybacking, taking advantage) means exploiting a situation for one\'s own gain; 「混乱に便乗する」 and 「便乗値上げ」 are typical usages, fitting scams that prey on post-quake confusion. 「同乗」 is riding in the same vehicle; 「迎合」 is currying favor with others\' tastes or opinions (as in 「世論に迎合する」); 「執着」 is clinging obsessively — none expresses profiteering from chaos.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-044',
    stem: '記録的な猛暑で冷房の使用が急増し、電力の需給が（　）している。',
    options: ['逼迫', '切迫', '緊迫', '圧迫'],
    answerIndex: 0,
    explanation:
      '「逼迫」（吃緊）指資金、物資、供需等變得極為緊繃匱乏，「需給が逼迫する」是電力新聞的固定說法。「切迫」用於期限、危險迫近（如「事態が切迫する」）；「緊迫」形容局勢緊張（如「緊迫した情勢」）；「圧迫」是他動詞用法為主（如「家計を圧迫する」），都不與「需給」搭配。',
    explanationEn:
      '「逼迫」 (strained, tight) means funds, supplies, or supply-demand balance becoming critically stretched; 「需給が逼迫する」 is the fixed phrasing in power-supply news. 「切迫」 is a deadline or danger closing in (as in 「事態が切迫する」); 「緊迫」 describes a tense situation (as in 「緊迫した情勢」); 「圧迫」 is mainly transitive (as in 「家計を圧迫する」) — none collocates with 「需給」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-045',
    stem: 'SNS上では、医学的な根拠のない健康情報が（　）している。',
    options: ['蔓延', '普及', '繁殖', '伝染'],
    answerIndex: 0,
    explanation:
      '「蔓延」（蔓延、氾濫）指疾病或不良的事物四處擴散，帶負面語感，「デマが蔓延する」是典型用法，最合「毫無根據的健康資訊」的語境。「普及」指技術、制度廣為大眾採用，語感中性偏正面；「繁殖」是生物繁衍；「伝染」是疾病或哈欠等傳染，主語不能是資訊。',
    explanationEn:
      '「蔓延」 (rampant spread) means diseases or undesirable things proliferating everywhere, with a negative tone; 「デマが蔓延する」 is typical usage, matching groundless health information. 「普及」 is technology or systems coming into wide adoption, with a neutral-to-positive tone; 「繁殖」 is organisms breeding; 「伝染」 is contagion of diseases or yawns — its subject cannot be information.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-046',
    stem: '新社長は就任会見で、前任者の経営方針を基本的に（　）する考えを示した。',
    options: ['踏襲', '世襲', '踏破', '襲撃'],
    answerIndex: 0,
    explanation:
      '「踏襲」（沿襲）指原封不動地繼承前人的方針、做法，「方針を踏襲する」是固定搭配。「世襲」是地位、家業由血緣代代相傳（如「世襲議員」）；「踏破」是徒步走完艱難路程；「襲撃」是襲擊攻擊，三者雖共用「踏」「襲」二字，語意都與繼承方針無關。',
    explanationEn:
      '「踏襲」 (carrying on) means adopting a predecessor\'s policies or methods as they are; 「方針を踏襲する」 is a set collocation. 「世襲」 is a position or family business passed down by blood (as in 「世襲議員」); 「踏破」 is trekking an arduous route to the end; 「襲撃」 is an armed attack — though they share the characters 「踏」 and 「襲」, none means continuing a policy.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-047',
    stem: '世界的な不作の影響で小麦の価格が（　）し、パンや麺類が相次いで値上げされた。',
    options: ['高騰', '沸騰', '暴落', '膨張'],
    answerIndex: 0,
    explanation:
      '「高騰」（飆漲）指價格急遽上漲，「価格が高騰する」「原油の高騰」是經濟新聞的固定說法，與後句「相繼漲價」呼應。「沸騰」是液體沸騰或輿論激昂（如「議論が沸騰する」）；「暴落」是價格暴跌，方向恰好相反；「膨張」是體積、規模膨脹（如「予算が膨張する」），皆不合語境。',
    explanationEn:
      '「高騰」 (soaring) means prices shooting up; 「価格が高騰する」 and 「原油の高騰」 are fixed phrases in economic news, echoing the successive price hikes that follow. 「沸騰」 is liquid boiling or debate reaching fever pitch (as in 「議論が沸騰する」); 「暴落」 is prices crashing — the opposite direction; 「膨張」 is volume or scale swelling (as in 「予算が膨張する」) — none fits.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-048',
    stem: '社長の突然の辞任をめぐって、社内では様々な（　）が飛び交っている。',
    options: ['憶測', '推理', '目算', '錯覚'],
    answerIndex: 0,
    explanation:
      '「憶測」（臆測）指缺乏根據的胡亂猜想，「憶測が飛び交う」「憶測を呼ぶ」是新聞常見搭配。「推理」是依據證據線索的邏輯推論，用於偵探辦案等，不與「飛び交う」搭配；「目算」是心中的盤算、估計（如「目算が外れる」）；「錯覚」是錯覺、誤認，皆無法形容謠言滿天飛。',
    explanationEn:
      '「憶測」 (wild speculation) is guesswork without solid grounds; 「憶測が飛び交う」 and 「憶測を呼ぶ」 are common news collocations. 「推理」 is logical deduction from evidence, as in detective work, and does not pair with 「飛び交う」; 「目算」 is a private estimate or calculation (as in 「目算が外れる」); 「錯覚」 is an illusion or misperception — none depicts rumors flying about.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-049',
    stem: '今回の小規模な提携は、将来の全面的な業務統合に向けた（　）だと見られている。',
    options: ['布石', '伏線', '目安', '口実'],
    answerIndex: 0,
    explanation:
      '「布石」原是圍棋開局的佈子，引申為著眼將來而預先安排的準備，「〜に向けた布石を打つ」是商業報導的典型說法。「伏線」是故事中預先埋下、之後才揭曉的鋪陳，用於情節安排；「目安」是大致的基準；「口実」是藉口，三者都不能表達為日後統合預作佈局。',
    explanationEn:
      '「布石」 originally means the opening stone placements in go, and by extension a preparatory move made with the future in mind; 「〜に向けた布石を打つ」 is typical in business reporting. 「伏線」 is foreshadowing planted in a story to pay off later; 「目安」 is a rough benchmark; 「口実」 is a pretext — none expresses laying groundwork for a future merger.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-050',
    stem: '国際会議の裏では、自国の利益をめぐる各国の激しい（　）が繰り広げられていた。',
    options: ['駆け引き', '値引き', '取り締まり', '受け答え'],
    answerIndex: 0,
    explanation:
      '「駆け引き」（討價還價、攻防角力）指談判中互探底線、進退拉鋸的手腕，「激しい駆け引きが繰り広げられる」是外交報導的典型表現。「値引き」是降價打折，與國家利益的攻防無關；「取り締まり」是取締違規；「受け答え」是應答對話，皆不能形容檯面下的談判攻防。',
    explanationEn:
      '「駆け引き」 (tactical maneuvering, bargaining) is the give-and-take of probing an opponent\'s bottom line in negotiations; 「激しい駆け引きが繰り広げられる」 is typical of diplomatic reporting. 「値引き」 is a price discount, irrelevant to contests over national interests; 「取り締まり」 is a regulatory crackdown; 「受け答え」 is giving answers in conversation — none depicts behind-the-scenes jockeying.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-051',
    stem: '関係者それぞれの（　）が複雑に絡み合い、交渉は一向に進展しなかった。',
    options: ['思惑', '心構え', '追憶', '決意'],
    answerIndex: 0,
    explanation:
      '「思惑」（盤算、各自的打算）指各方心中暗自的期待與算計，「思惑が絡む／思惑が交錯する」是固定搭配，最能說明談判膠著的原因。「心構え」是事前的心理準備；「追憶」是追憶往事；「決意」是下定的決心，三者都不會「複雑に絡み合い」而阻礙交涉。',
    explanationEn:
      '「思惑」 (ulterior motives, private calculations) refers to each party\'s hidden expectations and agendas; 「思惑が絡む」 and 「思惑が交錯する」 are set collocations that explain why the talks stalled. 「心構え」 is mental preparedness; 「追憶」 is reminiscence of the past; 「決意」 is firm resolve — none of the three can "complexly entangle" and bog down negotiations.',
  },
  // ===== 形容詞・形容動詞 4 題（052~055）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-052',
    stem: '小手先の対応を繰り返すのではなく、制度そのものの（　）な見直しが必要だ。',
    options: ['抜本的', '表面的', '間接的', '感覚的'],
    answerIndex: 0,
    explanation:
      '「抜本的」（根本性的）指從根源上徹底處理，「抜本的な見直し／改革」是政策議論的固定搭配，與前句「並非治標的應付」呼應。「表面的」是流於表面，正與「小手先」同義而矛盾；「間接的」是間接的；「感覚的」是憑感覺的，都無法表達徹底改革之意。',
    explanationEn:
      '「抜本的」 (fundamental, drastic) means dealing with something at its very root; 「抜本的な見直し／改革」 is a fixed phrase in policy debate, echoing the rejection of stopgap fixes. 「表面的」 means superficial — synonymous with 「小手先」 and thus contradictory; 「間接的」 means indirect; 「感覚的」 means intuitive — none conveys a root-and-branch overhaul.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-053',
    stem: '度重なる怪我にも挫けず練習を続ける彼の（　）な姿勢に、誰もが心を打たれた。',
    options: ['ひたむき', '気まぐれ', 'なげやり', 'おおらか'],
    answerIndex: 0,
    explanation:
      '「ひたむき」（專注執著的）形容心無旁騖、一心一意投入的態度，「ひたむきな姿勢／努力」是典型搭配，與帶傷仍堅持練習的語境相符。「気まぐれ」是反覆無常、隨興所至；「なげやり」是敷衍了事、自暴自棄；「おおらか」是豁達不拘小節，皆與令人動容的堅持相悖。',
    explanationEn:
      '「ひたむき」 (single-minded, earnest) describes devoting oneself wholeheartedly without distraction; 「ひたむきな姿勢／努力」 is the typical collocation, matching someone who keeps training through repeated injuries. 「気まぐれ」 is capricious; 「なげやり」 is careless and half-hearted; 「おおらか」 is easygoing and generous — none matches a perseverance that moves everyone.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-054',
    stem: '静かで緑も多いこの町は、子育てには（　）の環境だと言えるだろう。',
    options: ['うってつけ', '付け焼き刃', 'なりゆき', 'でたらめ'],
    answerIndex: 0,
    explanation:
      '「うってつけ」（再合適不過）指條件與目的完全吻合，「〜にはうってつけの環境／人材」是固定搭配，安靜又綠意盎然正適合育兒。「付け焼き刃」是臨時抱佛腳學來的皮毛；「なりゆき」是事情自然的發展（如「なりゆきに任せる」）；「でたらめ」是胡來、荒唐，皆不能修飾理想的環境。',
    explanationEn:
      '「うってつけ」 (perfectly suited) means conditions matching a purpose exactly; 「〜にはうってつけの環境／人材」 is a set collocation, and a quiet, leafy town is ideal for raising children. 「付け焼き刃」 is hastily acquired, superficial knowledge; 「なりゆき」 is the natural course of events (as in 「なりゆきに任せる」); 「でたらめ」 is nonsense or recklessness — none can describe an ideal environment.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-055',
    stem: '基礎を（　）にしたまま応用問題ばかり解いても、実力はなかなか伸びない。',
    options: ['なおざり', 'なけなし', '月並み', 'ちりぢり'],
    answerIndex: 0,
    explanation:
      '「なおざり」（置之不理）指該做的事敷衍放著不認真處理，「基礎をなおざりにする」是典型用法。「なけなし」是僅有的一點點，只作「なけなしの金」等連體用法；「月並み」是平庸老套（如「月並みな表現」）；「ちりぢり」是四散分離（如「ちりぢりになる」），皆不能表達怠忽基礎。',
    explanationEn:
      '「なおざり」 (neglect) means leaving something that should be done unattended and half-hearted; 「基礎をなおざりにする」 is typical usage. 「なけなし」 means the meager little one has, used only prenominally as in 「なけなしの金」; 「月並み」 is trite and commonplace (as in 「月並みな表現」); 「ちりぢり」 is scattering apart (as in 「ちりぢりになる」) — none expresses slighting the basics.',
  },
  // ===== 副詞・オノマトペ 5 題（056~060，060 為オノマトペ）=====
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-056',
    stem: '今回のアンケート結果は、若者の活字離れの深刻さを（　）物語っている。',
    options: ['如実に', '厳密に', '無性に', '安易に'],
    answerIndex: 0,
    explanation:
      '「如実に」（如實地、真切地）指毫無掩飾地反映實際狀況，「如実に物語る／如実に表れる」是固定搭配。「厳密に」是嚴謹精確地，用於定義、檢驗（如「厳密に言えば」）；「無性に」是莫名地強烈（如「無性に腹が立つ」）；「安易に」是輕率隨便地，皆不能修飾「物語る」表達真實反映。',
    explanationEn:
      '「如実に」 (vividly, faithfully) means reflecting reality without any gloss; 「如実に物語る」 and 「如実に表れる」 are set collocations. 「厳密に」 means rigorously, used for definitions and verification (as in 「厳密に言えば」); 「無性に」 means uncontrollably (as in 「無性に腹が立つ」); 「安易に」 means carelessly — none modifies 「物語る」 to mean telling the true state of affairs.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-057',
    stem: 'この店の料理には、地元で採れた新鮮な野菜が（　）使われている。',
    options: ['ふんだんに', 'めったに', 'かたくなに', 'おろそかに'],
    answerIndex: 0,
    explanation:
      '「ふんだんに」（大量地、毫不吝惜地）指材料、資源用得十分充裕，「ふんだんに使う／盛り込む」是典型搭配。「めったに」須與否定形呼應（如「めったに見られない」），放入本句文法不通；「かたくなに」是固執地（拒絕）；「おろそかに」是馬虎怠慢地（如「おろそかにする」），皆不合語境。',
    explanationEn:
      '「ふんだんに」 (abundantly, lavishly) means using materials or resources in generous quantity; 「ふんだんに使う」 is the typical collocation. 「めったに」 must pair with a negative (as in 「めったに見られない」), so it is ungrammatical here; 「かたくなに」 means stubbornly (refusing); 「おろそかに」 means negligently (as in 「おろそかにする」) — neither fits the context.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-058',
    stem: '発表の際は専門用語を（　）避け、誰にでも分かる言葉で説明してください。',
    options: ['極力', 'さも', '一向に', 'まんざら'],
    answerIndex: 0,
    explanation:
      '「極力」（盡可能、竭力）表示在能力範圍內盡最大努力去做，「極力避ける／極力控える」是固定搭配。「さも」是「彷彿真的〜」，須與「〜そうに」等樣態表現呼應；「一向に」與「まんざら」都必須搭配否定形（如「一向に進まない」「まんざらでもない」），放入本句文法不通。',
    explanationEn:
      '「極力」 (to the utmost, as much as possible) means doing one\'s very best within one\'s power; 「極力避ける／極力控える」 are set collocations. 「さも」 means "as if truly so" and needs an appearance expression such as 「〜そうに」; 「一向に」 and 「まんざら」 both require negatives (as in 「一向に進まない」 and 「まんざらでもない」), so they are ungrammatical here.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-059',
    stem: '事故の原因については（　）調査中であり、詳細は分かり次第公表いたします。',
    options: ['目下', 'いずれ', 'かつて', 'とうに'],
    answerIndex: 0,
    explanation:
      '「目下」（もっか，目前、現在）是書面語，表示「當下正在」，「目下調査中」是官方聲明的固定說法。「いずれ」是「早晚、改天」，指向未來，與「調査中」的進行語感矛盾；「かつて」是「曾經」，指向過去；「とうに」是「早就（完成）」，三者的時間方向都與現在進行不合。',
    explanationEn:
      '「目下」 (read もっか, "at present") is formal written style meaning "currently"; 「目下調査中」 is the fixed wording of official statements. 「いずれ」 means "sooner or later," pointing to the future and clashing with the ongoing sense of 「調査中」; 「かつて」 means "once, formerly," pointing to the past; 「とうに」 means "long since (done)" — all three point the wrong way in time.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-bunmyaku-060',
    stem: '専属コーチの指導を受け始めてから、彼女の演技は（　）上達した。',
    options: ['めきめき', 'つくづく', 'ひそひそ', 'ふらふら'],
    answerIndex: 0,
    explanation:
      '「めきめき」形容實力、技藝進步神速而有目共睹的樣子，「めきめき上達する／めきめき頭角を現す」是典型搭配。「つくづく」是深切地（感受），須接「思う」「感じる」等；「ひそひそ」是竊竊私語的樣子；「ふらふら」是搖搖晃晃、不穩定，三者雖同為擬態語，都不能修飾「上達した」。',
    explanationEn:
      '「めきめき」 depicts skill improving rapidly and visibly; 「めきめき上達する」 and 「めきめき頭角を現す」 are typical collocations. 「つくづく」 means feeling something keenly and pairs with verbs like 「思う」 or 「感じる」; 「ひそひそ」 depicts whispering; 「ふらふら」 depicts swaying unsteadily — though all are mimetic words, none can modify 「上達した」.',
  },
]

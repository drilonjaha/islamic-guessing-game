import { LearningContent } from '@/types/learning';

export const tabieenLearning: LearningContent[] = [
  {
    figureId: 'said-musayyib',
    category: 'tabieen',
    bio: {
      summary: "Seid ibn El-Musejjib ishte dijetari më i madh i Medinës dhe zotëria i tabi'inëve.",
      paragraphs: [
        "Seid ibn El-Musejjib r.h. ishte njëri nga shtatë fukahaja (juristë) të famshëm të Medinës dhe konsiderohet dijetari më i madh nga gjenerata e tabi'inëve. Ai lindi dy vjet pas kalifatit të Umer r.a.",
        'Ai mësoi nga shumë sahabë të mëdhenj, përfshirë Ebu Hurejrën, Aishen, dhe Uthmanin r.a. Veçanërisht, ai ishte dhëndri i Ebu Hurejrës dhe transmetoi shumicën e haditheve të tij.',
        'Seidi ishte i njohur për memorien e jashtëzakonshme dhe dijen e thellë në fikh. Imam Maliku tha: "Seidi ishte dijetari më i ditur i kohës së tij."',
        "Ai ishte shumë i devotshëm dhe modest. Thuhet se ai nuk e kishte humbur namazin me xhemat për 40 vjet dhe se e kishte falur çdo namaz me abdesin e namazit të mëparshëm.",
        'Seidi refuzonte të pranonte dhurata nga sundimtarët dhe ishte i pavarur në fetvatë e tij, edhe kur kjo i sillte probleme.',
      ],
    },
    achievements: [
      { title: "Zotëria i Tabi'inëve", description: 'Dijetari më i madh i gjeneratës', icon: '👑' },
      { title: '40 Vjet Xhemat', description: 'Nuk humbi xhematin për 40 vjet', icon: '🕌' },
      { title: 'Fekihu i Medinës', description: 'Nga shtatë fukahaja të Medinës', icon: '📚' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Medinë', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '94 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 94,
      majorEvents: [
        { year: 15, event: 'Lindja në Medinë' },
        { year: 94, event: 'Vdekja në Medinë' },
      ],
      era: '1st Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'abu-hurairah', description: 'Mësoi nga Ebu Hurejra r.a.' },
      { type: 'student', figureId: 'zuhri', description: 'Ez-Zuhri mësoi prej tij' },
    ],
    isComplete: true,
  },
  {
    figureId: 'hasan-basri',
    category: 'tabieen',
    bio: {
      summary: 'El-Hasan El-Basri ishte imami i asketëve dhe oratori më i madh i kohës së tij.',
      paragraphs: [
        'El-Hasan El-Basri r.h. lindi në Medinë në vitin 21 H. Nëna e tij Hajra ishte shërbëtore e Ummi Selemes r.a., kështu që ai u rrit në shtëpinë e nënave të besimtarëve.',
        'Ai pa disa sahabë, përfshirë Aliun, Uthmanin dhe shumë të tjerë. Ai mësoi drejtpërdrejt nga Enes ibn Maliku r.a. dhe transmeton hadithe të shumta.',
        'Hasani ishte i famshëm për elokuencën dhe predikimet e tij që bënin njerëzit të qanin. Ai thoshte: "O biri i Ademit, ti je vetëm një numër ditësh. Kur shkon një ditë, shkon një pjesë e jotja."',
        'Ai ishte prijës i asketëve (zuhhad) dhe theksonte rëndësinë e pastrimit të zemrës. Shumë dijetarë e konsiderojnë atë themelues të shkollës së tasavvufit (sufizmit ortodoks).',
        'Hasani jetoi në Basra dhe ishte autoritet i padiskutueshëm në të gjitha shkencat islame. Ai vdiq në vitin 110 H dhe varrimi i tij u ndoq nga gjithë qyteti.',
      ],
    },
    achievements: [
      { title: 'Imami i Asketëve', description: 'Prijësi i devotshmërisë', icon: '🌙' },
      { title: 'Oratori i Madh', description: 'Elokuenca e tij bënte njerëzit të qanin', icon: '🎤' },
      { title: 'Autoriteti i Basrës', description: 'Dijetari kryesor i qytetit', icon: '📚' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Basra', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '110 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      birthYear: 642,
      deathYear: 728,
      majorEvents: [
        { year: 21, event: 'Lindja në Medinë' },
        { year: 110, event: 'Vdekja në Basra' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'anas', description: 'Mësoi nga Enes ibn Maliku r.a.' },
      { type: 'teacher', figureId: 'ali', description: 'Takoi Aliun r.a.' },
    ],
    isComplete: true,
  },
  {
    figureId: 'uwais-qarni',
    category: 'tabieen',
    bio: {
      summary: "Uvejs El-Karni ishte tabi'ini më i mirë që Profeti ﷺ e lavdëroi pa e takuar.",
      paragraphs: [
        'Uvejs El-Karni r.h. ishte nga Jemeni dhe jetonte me nënën e tij të sëmurë të cilën e shërbente me devotshmëri. Për këtë arsye, ai nuk mundi të udhëtonte në Medinë për ta takuar Profetin ﷺ.',
        'Profeti ﷺ i tha Umerit r.a.: "Do të vijë te ti nga Jemeni një njeri që quhet Uvejs. Ai pati lebër dhe u shërua përveç një vendi sa një dirhem. Ai ka një nënë ndaj së cilës është i devotshëm. Nëse bën betim për Allahun, Allahu do ta përmbushte. Nëse mundesh, kërko prej tij të lutet për ty."',
        'Kur Umeri r.a. e gjeti Uvejsin, ai i kërkoi të lutej për të, dhe Uvejsi u lut. Ky tregim tregon vlerën e devotshmërisë ndaj prindërve.',
        'Uvejsi ra dëshmor në betejën e Siffinit duke luftuar në anën e Aliut r.a. Ai ishte shembull i devotshmërisë së fshehtë që shihet vetëm nga Allahu.',
      ],
    },
    achievements: [
      { title: 'Lavdëruar nga Profeti ﷺ', description: 'Pa e takuar kurrë', icon: '⭐' },
      { title: 'I Devotshëm ndaj Nënës', description: 'Shembull i devotshmërisë prindërore', icon: '❤️' },
      { title: 'Dëshmor', description: 'Ra në betejën e Siffinit', icon: '🌟' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Viti i Vdekjes', value: '37 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 657,
      majorEvents: [
        { year: 37, event: 'Martirizimi në Siffin' },
      ],
      era: '1st Century AH',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'ata-rabah',
    category: 'tabieen',
    bio: {
      summary: "Ata ibn Ebi Rebah ishte muftiu i Mekës dhe autoriteti i haxhit.",
      paragraphs: [
        'Ata ibn Ebi Rebah r.h. lindi në Jemen dhe u rrit në Mekë. Ai ishte rob i zi i liruar që u bë muftiu më i madh i qytetit të shenjtë.',
        'Ai mësoi nga Ibn Abbasi, Ibn Umeri, Aisheja dhe shumë sahabë të tjerë. Ibn Abbasi u thoshte njerëzve të Mekës: "Pse mblidheni rreth meje kur mes jush është Atau?"',
        'Atau ishte autoriteti kryesor në ritualin e haxhit dhe çështjet e lidhura me të. Kalifi Sulejman ibn Abdul-Meliku erdhi ta pyeste për haxhin.',
        'Ai ishte shumë i devotshëm dhe agjëronte shumë. Pavarësisht ngjyrës së lëkurës dhe origjinës si skllav, ai u bë dijetari më i respektuar.',
      ],
    },
    achievements: [
      { title: 'Muftiu i Mekës', description: 'Autoriteti kryesor fetar', icon: '📜' },
      { title: 'Eksperti i Haxhit', description: 'Autoriteti në ritualet e haxhit', icon: '🕋' },
      { title: 'Nga Skllav në Imam', description: 'Ngritje përmes dijes', icon: '📚' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Mekë', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '114 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 732,
      majorEvents: [
        { year: 27, event: 'Lindja' },
        { year: 114, event: 'Vdekja në Mekë' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'ibn-abbas', description: 'Mësoi nga Ibn Abbasi r.a.' },
    ],
    isComplete: true,
  },
  {
    figureId: 'mujahid',
    category: 'tabieen',
    bio: {
      summary: 'Muxhahid ibn Xhebr ishte imami i tefsirit dhe nxënësi kryesor i Ibn Abbasit.',
      paragraphs: [
        'Muxhahid ibn Xhebr r.h. ishte autoriteti më i madh i tefsirit (komentimit të Kuranit) në gjeneratën e tij. Ai mësoi tefsirin drejtpërdrejt nga Ibn Abbasi r.a.',
        'Ai tha: "E parashtrova Kuranin para Ibn Abbasit tri herë, duke ndaluar në çdo ajet dhe duke e pyetur për çka zbrit dhe çfarë do të thotë."',
        'Tefsiri i Muxhahidit u bë bazë për shumicën e tefsireve të mëvonshme. Imam Bukhari dhe të tjerë transmetojnë shumë nga interpretimet e tij.',
        'Ai ishte gjithashtu njohës i leximit të Kuranit (kiraatit) dhe mësues i Ibn Kethirit, njërit nga shtatë lexuesit e famshëm.',
      ],
    },
    achievements: [
      { title: 'Imami i Tefsirit', description: 'Autoriteti kryesor në komentim', icon: '📖' },
      { title: 'Nxënësi i Ibn Abbasit', description: 'Mësoi Kuranin tre herë prej tij', icon: '📚' },
      { title: 'Mësuesi i Kiraatit', description: 'Mësoi Ibn Kethirin lexues', icon: '🎤' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Mekë', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '104 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 722,
      majorEvents: [
        { year: 21, event: 'Lindja' },
        { year: 104, event: 'Vdekja në Mekë' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'ibn-abbas', description: 'Mësoi tefsirin nga Ibn Abbasi' },
    ],
    isComplete: true,
  },
  {
    figureId: 'ikrimah',
    category: 'tabieen',
    bio: {
      summary: 'Ikrime ishte robi i liruar i Ibn Abbasit dhe dijetar i madh i tefsirit.',
      paragraphs: [
        'Ikrime r.h. ishte berber nga Afrika Veriore, rob i liruar i Ibn Abbasit r.a. Ai qëndroi me Ibn Abbasin për vite dhe mësoi dijen e tij të gjerë.',
        'Ai thoshte: "Qëndroja te dera e një sahabi derisa të mësoja." Ai udhëtoi nëpër botën islame duke mësuar njerëzit.',
        'Ikrimeja ishte autoritet në tefsir dhe hadith. Ai vdiq në të njëjtën ditë me një dijetar tjetër të madh - në vitin 105 H në Medinë.',
      ],
    },
    achievements: [
      { title: 'Nxënësi i Ibn Abbasit', description: 'Trashëgoi dijen e tij', icon: '📚' },
      { title: 'Dijetar Udhëtues', description: 'Shpërndau dijen në botën islame', icon: '🌍' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Medinë', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '105 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 723,
      majorEvents: [
        { year: 105, event: 'Vdekja në Medinë' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'ibn-abbas', description: 'Shërbeu dhe mësoi nga Ibn Abbasi' },
    ],
    isComplete: true,
  },
  {
    figureId: 'nafi',
    category: 'tabieen',
    bio: {
      summary: 'Nafiu ishte robi i liruar i Ibn Umerit dhe hallka e artë e hadithit.',
      paragraphs: [
        'Nafi r.h. ishte rob i Ibn Umer r.a. për tridhjetë vjet dhe mësoi çdo gjë nga zotëria i tij. Ai ishte lidhja më e fortë e transmetimit të hadithit.',
        'Zinxhiri "Malik nga Nafiu nga Ibn Umeri" quhet "Zinxhiri i Artë" (Silsiletudh-Dheheb) për autenticitetin e tij të lartë.',
        'Nafiu mësoi Imam Malikun dhe shumë dijetarë të tjerë të mëdhenj. Ai ishte autoritet i padiskutueshëm në hadithet e Ibn Umerit.',
      ],
    },
    achievements: [
      { title: 'Zinxhiri i Artë', description: 'Hallka kyçe në transmetim', icon: '🔗' },
      { title: 'Mësuesi i Imam Malikut', description: 'Mësoi imamin e Medinës', icon: '📚' },
      { title: '30 Vjet me Ibn Umerin', description: 'Mësoi drejtpërdrejt prej tij', icon: '⏳' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Medinë', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '117 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 735,
      majorEvents: [
        { year: 117, event: 'Vdekja në Medinë' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'ibn-umar', description: 'Shërbeu Ibn Umerin r.a.' },
    ],
    isComplete: true,
  },
  {
    figureId: 'ibn-sirin',
    category: 'tabieen',
    bio: {
      summary: 'Muhamed ibn Sirin ishte imami i interpretimit të ëndrrave dhe dijetar i devotshëm.',
      paragraphs: [
        'Muhamed ibn Sirin r.h. lindi në Basra në vitin 33 H. Babai i tij Sirin ishte rob i Enes ibn Malikut r.a., kështu që ai u rrit në mjedisin e dijes.',
        'Ai ishte njëri nga dijetarët më të devotshëm dhe më të kujdesshëm në transmetimin e hadithit. Ai tha: "Kjo dije është fe, prandaj shikoni nga kush merrni fenë tuaj."',
        'Ibn Sirini ishte autoriteti më i madh në interpretimin e ëndrrave. Libri i famshëm "Tefsir el-Ahlam" i atribuohet atij, megjithëse versioni aktual ka shtesa.',
        'Ai ishte shumë skrupuloz në çështjet financiare dhe refuzonte çdo gjë të dyshimtë. Ai qeshte aq shumë gjatë ditës dhe qante aq shumë natën në namaz.',
      ],
    },
    achievements: [
      { title: 'Interpretuesi i Ëndrrave', description: 'Autoriteti më i madh në fushë', icon: '🌙' },
      { title: 'Verifikuesi i Hadithit', description: 'Vendosi standarde të larta', icon: '✅' },
      { title: 'Dijetari Skrupuloz', description: 'I kujdesshëm në hallall', icon: '⚖️' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Basra', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '110 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      birthYear: 653,
      deathYear: 728,
      majorEvents: [
        { year: 33, event: 'Lindja në Basra' },
        { year: 110, event: 'Vdekja në Basra' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'anas', description: 'Takoi Enes ibn Malikun r.a.' },
    ],
    isComplete: true,
  },
  {
    figureId: 'urwah',
    category: 'tabieen',
    bio: {
      summary: "Urve ibn Ez-Zubejr ishte njëri nga shtatë fukahaja e Medinës dhe historian i parë i sires.",
      paragraphs: [
        'Urve ibn Ez-Zubejr r.h. ishte bir i Zubejrit r.a. dhe nipi i Ebu Bekrit r.a. (nëna e tij ishte Esmaja). Ai u rrit në shtëpinë e dijes.',
        'Ai mësoi veçanërisht nga tezja e tij Aisheja r.a. dhe transmetoi shumicën e haditheve të saj. Ai tha: "Mësova më shumë nga Aisheja se nga çdokush tjetër."',
        'Urveja ishte pionier i shkrimit të sires (biografisë profetike). Shkrimit e tij i shërbyen si bazë për punët e mëvonshme të Ibn Ishakut.',
        'Ai ishte njëri nga shtatë fukahaja të mëdhenj të Medinës dhe autoritet në çështjet e adhurimit dhe marrëdhënieve familjare.',
      ],
    },
    achievements: [
      { title: 'Historiani i Parë', description: 'Pionier i shkrimit të sires', icon: '📝' },
      { title: 'Fekihu i Medinës', description: 'Nga shtatë fukahaja', icon: '⚖️' },
      { title: 'Transmetuesi i Aishes', description: 'Ruajti dijen e tezes së tij', icon: '📚' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Medinë', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '94 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      birthYear: 644,
      deathYear: 712,
      majorEvents: [
        { year: 22, event: 'Lindja në Medinë' },
        { year: 94, event: 'Vdekja në Medinë' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'aisha', description: 'Mësoi nga tezja e tij Aisheja r.a.' },
      { type: 'family', figureId: 'zubayr', description: 'Zubejri ishte babai i tij' },
      { type: 'student', figureId: 'zuhri', description: 'Ez-Zuhri mësoi prej tij' },
    ],
    isComplete: true,
  },
  {
    figureId: 'umar-abd-aziz',
    category: 'tabieen',
    bio: {
      summary: 'Umer ibn Abdul-Aziz ishte kalifi i pestë i drejtë dhe reformatori i madh.',
      paragraphs: [
        "Umer ibn Abdul-Aziz r.h. (717-720 e.s.) ishte kalifi i tetë umejad, por konsiderohet 'kalifi i pestë i drejtë' për drejtësinë e tij të jashtëzakonshme.",
        'Para kalifatit, ai jetonte me luks si guvernator i Medinës. Por kur u bë kalif, ai ndryshoi plotësisht - braktisi pasurinë, vishej thjeshtë dhe jetonte si më i varfëri.',
        'Ai ndaloi shtypjen, hoqi taksat e padrejta, shpërndau pasuritë publike me drejtësi, dhe i ktheu pronat e grabitura pronarëve të vërtetë - përfshirë pronat e familjes së tij.',
        'Umeri reformoi administratën, vendosi paqe me armiqtë, dhe u përqëndrua në përhapjen e Islamit përmes misionarëve në vend të luftës.',
        'Ai vdiq në moshë të re (39 vjeç), ndoshta i helmuar. Thuhet se kalifi i ardhshëm nuk gjeti asgjë në thesar - Umeri e kishte shpërndarë të gjithën për popullin.',
      ],
    },
    achievements: [
      { title: 'Kalifi i Pestë i Drejtë', description: 'Konsiderohet i barabartë me katër kalifët', icon: '👑' },
      { title: 'Reformatori', description: 'Reformoi shtetin dhe administratën', icon: '⚖️' },
      { title: 'Braktisi Luksin', description: 'Jetoi si më i varfëri kur ishte kalif', icon: '🏚️' },
    ],
    quizFacts: [
      { label: 'Roli', value: 'Kalif', attributeKey: 'role' },
      { label: 'Viti i Vdekjes', value: '101 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      birthYear: 680,
      deathYear: 720,
      majorEvents: [
        { year: 63, event: 'Lindja' },
        { year: 99, event: 'Bërja kalif' },
        { year: 101, event: 'Vdekja' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'zuhri',
    category: 'tabieen',
    bio: {
      summary: 'Ibn Shihab Ez-Zuhri ishte imami i hadithit dhe shkruesi i parë sistematik i sunetit.',
      paragraphs: [
        'Muhamed ibn Muslim Ez-Zuhri r.h. ishte njëri nga dijetarët më të mëdhenj të hadithit. Ai mësoi nga dhjetëra sahabë dhe qindra tabi\'inë.',
        'Ai ishte i pari që filloi të kodifikonte hadithin me urdhër të kalifit Umer ibn Abdul-Aziz. Kjo punë shpëtoi Sunetin nga humbja.',
        'Ez-Zuhri kishte memorie të jashtëzakonshme. Ai thoshte: "Nuk kam harruar kurrë asgjë që kam dëshiruar ta mbaj mend."',
        'Ai ishte mësues i Imam Malikut, Sufjan ibn Ujejnes dhe shumë dijetarëve të mëdhenj. Zinxhirët e tij të hadithit janë ndër më të fortët.',
      ],
    },
    achievements: [
      { title: 'Kodifikuesi i Hadithit', description: 'I pari që shkroi hadithin sistematikisht', icon: '📝' },
      { title: 'Memoria e Jashtëzakonshme', description: 'Nuk harronte asgjë', icon: '🧠' },
      { title: 'Mësuesi i Imamëve', description: 'Mësoi gjeneratat e ardhshme', icon: '👨‍🏫' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Medinë', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '124 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      birthYear: 671,
      deathYear: 742,
      majorEvents: [
        { year: 51, event: 'Lindja' },
        { year: 124, event: 'Vdekja' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'said-musayyib', description: 'Mësoi nga Seid ibn Musejjibi' },
      { type: 'teacher', figureId: 'urwah', description: 'Mësoi nga Urveja' },
    ],
    isComplete: true,
  },
  {
    figureId: 'ibrahim-nakhai',
    category: 'tabieen',
    bio: {
      summary: 'Ibrahim En-Nehai ishte imami i Kufës dhe bazë e medhhebit hanefij.',
      paragraphs: [
        'Ibrahim En-Nehai r.h. ishte dijetari më i madh i Kufës dhe njëri nga themeluesit e shkollës juridike irakiane që më vonë u bë medhheb hanefi.',
        'Ai nuk i takoi sahabët drejtpërdrejt për shkak të moshës, por mësoi nga tabi\'inët e mëdhenj që kishin mësuar nga Ibn Mesudi r.a.',
        'Ibrahimi ishte mësues i Hammadit, i cili ishte mësues i Imam Ebu Hanifes. Kështu, dija e tij u bë bazë e medhhebit hanefi.',
        'Ai vdiq i ri (rreth 50 vjeç) në vitin 96 H. Megjithëse jetoi shkurt, ndikimi i tij në jurisprudencën islame ishte i madh.',
      ],
    },
    achievements: [
      { title: 'Imami i Kufës', description: 'Dijetari kryesor i qytetit', icon: '🏛️' },
      { title: 'Bazë e Hanefizmit', description: 'Dija e tij formoi medhhebin', icon: '📚' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Kufa', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '96 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 714,
      majorEvents: [
        { year: 96, event: 'Vdekja në Kufa' },
      ],
      era: '1st Century AH',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'shabi',
    category: 'tabieen',
    bio: {
      summary: 'Esh-Shabi ishte dijetari që takoi 500 sahabë dhe kishte memorie legjendare.',
      paragraphs: [
        'Amir ibn Sherahil Esh-Shabi r.h. ishte njëri nga dijetarët më të mëdhenj të gjeneratës së tij. Ai tha: "Kam takuar 500 nga shokët e Profetit ﷺ."',
        'Memoria e tij ishte legjendare. Ai thoshte: "Nuk kam shkruar kurrë asgjë me bojë të zezë. Nuk më është përsëritur asnjë hadith dy herë."',
        'Esh-Shabi ishte gjykatës i dalluar dhe autoritet në fikh. Kalifi Abdul-Melik ibn Mervan e dërgoi si ambasador në Bizantin.',
        'Ai ishte i njohur për humorin dhe mendjen e shpejtë. Shumë nga anekdotat e tij tregojnë inteligjencën dhe elokuencën e tij.',
      ],
    },
    achievements: [
      { title: 'Takoi 500 Sahabë', description: 'Nga më të mëdhenjtë në takime', icon: '👥' },
      { title: 'Memoria Legjendare', description: 'Nuk kishte nevojë të shkruante', icon: '🧠' },
      { title: 'Ambasador', description: 'Përfaqësoi kalifatin në Bizant', icon: '🤝' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Lartë', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Kufa', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '104 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 722,
      majorEvents: [
        { year: 104, event: 'Vdekja' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'qatadah-duasi',
    category: 'tabieen',
    bio: {
      summary: 'Katade ibn Diame ishte hafizi i verbër me memorie të mahnitshme.',
      paragraphs: [
        'Katade ibn Diame r.h. lindi i verbër por Allahu i dha memorie të jashtëzakonshme. Ai mbante mend gjithçka që dëgjonte.',
        'Ai mësoi nga Enes ibn Maliku r.a. dhe shumë tabi\'inë të mëdhenj. Ai ishte autoritet në tefsir, hadith, gjuhë arabe dhe histori.',
        'Katade tha: "Nuk kam thënë kurrë për ndonjë hadith: Ma përsërit! As nuk kanë dëgjuar veshët e mi diçka që zemra ime ta ketë harruar."',
        'Ai ishte mësues i shumë dijetarëve të mëdhenj të gjeneratës së ardhshme.',
      ],
    },
    achievements: [
      { title: 'Hafizi i Verbër', description: 'Nuk shikonte por mbante mend gjithçka', icon: '🧠' },
      { title: 'Autoritet i Shumëfishtë', description: 'Tefsir, hadith, gjuhë, histori', icon: '📚' },
    ],
    quizFacts: [
      { label: 'Gjenerata', value: 'I Mesëm', attributeKey: 'generation' },
      { label: 'Shkolla', value: 'Basra', attributeKey: 'school' },
      { label: 'Viti i Vdekjes', value: '117 H', attributeKey: 'deathYear' },
    ],
    timeline: {
      deathYear: 735,
      majorEvents: [
        { year: 117, event: 'Vdekja' },
      ],
      era: '1st-2nd Century AH',
    },
    relationships: [
      { type: 'teacher', figureId: 'anas', description: 'Mësoi nga Enesi r.a.' },
    ],
    isComplete: true,
  },
];

export function getTabieenLearningById(id: string): LearningContent | undefined {
  return tabieenLearning.find(t => t.figureId === id);
}

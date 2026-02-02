import { LearningContent } from '@/types/learning';

export const sahabasLearning: LearningContent[] = [
  // ============ THE FOUR CALIPHS ============
  {
    figureId: 'abu-bakr',
    category: 'sahaba',
    bio: {
      summary: 'Ebu Bekri r.a. ishte shoku më i ngushtë i Profetit ﷺ dhe kalifi i parë i Islamit.',
      paragraphs: [
        'Ebu Bekr Es-Siddik r.a. ishte njëri nga njerëzit e parë që pranuan Islamin dhe shoku më i ngushtë i Profetit Muhamed ﷺ. Emri i tij i vërtetë ishte Abdullah ibn Uthman, por u njoh si Ebu Bekr (babai i devesë së re).',
        'Ai ishte tregtar i pasur në Mekë para Islamit, i njohur për ndershmërinë dhe karakterin e tij të mirë. Kur Profeti ﷺ e thirri në Islam, ai pranoi menjëherë pa asnjë ngurrim, duke fituar titullin "Es-Siddik" (i sinqerti, vërtetuesi).',
        'Ebu Bekri ishte shoqëruesi i vetëm i Profetit ﷺ gjatë Hixhretit në Medinë. Ata u fshehnë në shpellën Theur për tre ditë ndërsa Kurejshët i kërkonin. Kurani përmend këtë: "Mos u brengos, Allahu është me ne."',
        'Ai shpenzoi pasurinë e tij të madhe në rrugën e Allahut, duke blerë dhe liruar shumë skllevër muslimanë që torturoheshin, përfshirë Bilalin r.a. Profeti ﷺ tha: "Nëse do të merrja një mik të ngushtë, do të ishte Ebu Bekri."',
        'Pas vdekjes së Profetit ﷺ, Ebu Bekri u zgjodh kalif. Ai stabilizoi shtetin islam përballë rebelimeve të disa fiseve dhe filloi zgjerimin e mëvonshëm. Ai mbeti i thjeshtë dhe i përulur gjatë gjithë kalifatit.',
        'Ebu Bekri qeverisi për vetëm 2 vjet e 3 muaj dhe vdiq në vitin 13 H, duke u varrosur pranë Profetit ﷺ në dhomën e Aishes r.a.',
      ],
    },
    achievements: [
      { title: 'Kalifi i Parë', description: 'Pasardhësi i parë i Profetit ﷺ', icon: '👑' },
      { title: 'Es-Siddik', description: 'I pari burrë i rritur që pranoi Islamin', icon: '✨' },
      { title: 'Shoqëruesi i Hixhretit', description: 'I vetmi shoqërues në udhëtimin për në Medinë', icon: '🐪' },
      { title: 'Çliruesi i Skllevërve', description: 'Shpenzoi pasurinë për të liruar muslimanë', icon: '⛓️' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '142', attributeKey: 'hadithNarrated' },
      { label: 'Renditja e Kalifatit', value: '1', attributeKey: 'caliphOrder' },
      { label: 'Lidhja me Profetin', value: 'Vjehërr', attributeKey: 'relationToProphet' },
    ],
    timeline: {
      birthYear: 573,
      deathYear: 634,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit' },
        { year: 622, event: 'Hixhreti me Profetin ﷺ' },
        { year: 632, event: 'Zgjedhja si kalif' },
        { year: 634, event: 'Vdekja në Medinë' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'aisha', description: 'Aisheja ishte bija e tij' },
      { type: 'companion', figureId: 'umar', description: 'Shok i ngushtë dhe pasardhësi si kalif' },
    ],
    isComplete: true,
  },
  {
    figureId: 'umar',
    category: 'sahaba',
    bio: {
      summary: 'Umeri r.a. ishte kalifi i dytë, i njohur për drejtësinë dhe zgjerimin e shtetit islam.',
      paragraphs: [
        'Umer ibn El-Hatab r.a. ishte njëri nga burrat më të fuqishëm të Kurejshëve para Islamit. Fillimisht ishte kundërshtar i ashpër i muslimanëve, derisa u konvertua në mënyrë dramatike pas leximit të Sures Taha.',
        'Konvertimi i tij ishte përgjigje e lutjes së Profetit ﷺ: "O Allah, forcoje Islamin me njërin nga dy Umerët!" Pas pranimit të Islamit, Umeri bëri që muslimanët të faleshin haptazi për herë të parë në Qabe.',
        'Ai mori titullin "El-Faruk" (ai që dallon të vërtetën nga e kota) për vendosmërinë e tij në mbështetjen e Islamit. Profeti ﷺ tha: "Nëse do të kishte profet pas meje, do të ishte Umeri."',
        'Si kalif, Umeri zgjeroi shtetin islam në mënyrë të paparë, duke çliruar Sirinë, Irakun, Egjiptin dhe Persit. Ai themeloi qytete të reja si Kufa dhe Basra, dhe organizoi sistemin administrativ islam.',
        'Umeri ishte i njohur për drejtësinë e tij të jashtëzakonshme. Ai ecte natën për të parë gjendjen e njerëzve dhe dëgjonte ankesat personalisht. Jetonte thjesht pavarësisht sundimit mbi një perandori të madhe.',
        'Ai u martirizua në vitin 23 H nga një skllav persian ndërsa udhëhiqte namazin e sabahut. Ai caktoi një këshill prej gjashtë personash për të zgjedhur kalifin e ardhshëm.',
      ],
    },
    achievements: [
      { title: 'El-Faruk', description: 'Dalloi të vërtetën nga e kota', icon: '⚖️' },
      { title: 'Kalifi i Dytë', description: 'Zgjeroi shtetin islam masivisht', icon: '🗺️' },
      { title: 'Çliroi Kudsin', description: 'Mori çelësat e Kudsit personalisht', icon: '🔑' },
      { title: 'Drejtësia Shembullore', description: 'I njohur për drejtësi të pashembullt', icon: '⚖️' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '539', attributeKey: 'hadithNarrated' },
      { label: 'Renditja e Kalifatit', value: '2', attributeKey: 'caliphOrder' },
      { label: 'Dëshmor', value: 'Po', attributeKey: 'martyred' },
    ],
    timeline: {
      birthYear: 584,
      deathYear: 644,
      majorEvents: [
        { year: 616, event: 'Pranimi i Islamit' },
        { year: 634, event: 'Bërja kalif' },
        { year: 637, event: 'Çlirimi i Kudsit' },
        { year: 644, event: 'Martirizimi në Medinë' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'hafsa', description: 'Hafsa ishte bija e tij' },
      { type: 'companion', figureId: 'abu-bakr', description: 'Pasoi Ebu Bekrin si kalif' },
    ],
    isComplete: true,
  },
  {
    figureId: 'uthman',
    category: 'sahaba',
    bio: {
      summary: 'Uthmani r.a. ishte kalifi i tretë, i njohur për bujarinë dhe kompilimin e Kuranit.',
      paragraphs: [
        'Uthman ibn Affan r.a. ishte njëri nga njerëzit më të pasur të Mekës dhe nga të parët që pranuan Islamin. Ai ishte i njohur për bujarinë, modestinë dhe bukurinë e tij.',
        'Ai u martua me dy bijat e Profetit ﷺ - Rukajjen dhe, pas vdekjes së saj, me Ummi Kulthumin - duke fituar titullin "Dhun-Nurejn" (pronari i dy dritave).',
        'Uthmani emigroi dy herë: fillimisht në Abisini me Rukajjen, dhe më pas në Medinë. Ai bleu pusin Rumah dhe ia dhuroi komunitetit musliman, si dhe financoi zgjerimin e Xhamisë së Profetit.',
        'Si kalif, Uthmani standardizoi kopjen e vetme të Kuranit dhe e shpërndau në të gjitha provincat islame. Kjo ruajti Kuranin nga ndryshimet dhe është versioni që përdorim sot.',
        'Ai zgjeroi flotën detare islame dhe kompletoi çlirimin e Armenisë, Azerbajxhanit dhe Afrikës së Veriut. Gjatë kalifatit të tij, shteti islam arriti në madhësinë më të madhe deri atëherë.',
        'Uthmani u martirizua në vitin 35 H nga rebelë që rrethuan shtëpinë e tij. Ai refuzoi të luftonte kundër muslimanëve dhe vdiq duke lexuar Kuranin, duke u bërë dëshmor.',
      ],
    },
    achievements: [
      { title: 'Dhun-Nurejn', description: 'U martua me dy bijat e Profetit ﷺ', icon: '💡' },
      { title: 'Standardizoi Kuranin', description: 'Kompiloi versionin zyrtar të Kuranit', icon: '📖' },
      { title: 'Bujari i Jashtëzakonshëm', description: 'Financoi projekte të mëdha islame', icon: '💰' },
      { title: 'Emigroi Dy Herë', description: 'Nga të parët emigrantë', icon: '✈️' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '146', attributeKey: 'hadithNarrated' },
      { label: 'Renditja e Kalifatit', value: '3', attributeKey: 'caliphOrder' },
      { label: 'Emigroi në Abisini', value: 'Po', attributeKey: 'migratedToAbyssinia' },
      { label: 'Dëshmor', value: 'Po', attributeKey: 'martyred' },
    ],
    timeline: {
      birthYear: 576,
      deathYear: 656,
      majorEvents: [
        { year: 611, event: 'Pranimi i Islamit' },
        { year: 615, event: 'Emigrimi në Abisini' },
        { year: 644, event: 'Bërja kalif' },
        { year: 656, event: 'Martirizimi në Medinë' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'ruqayyah', description: 'Rukajje ishte gruaja e tij e parë' },
      { type: 'family', figureId: 'umm-kulthum', description: 'Ummi Kulthumi ishte gruaja e tij e dytë' },
    ],
    isComplete: true,
  },
  {
    figureId: 'ali',
    category: 'sahaba',
    bio: {
      summary: 'Aliu r.a. ishte kushëriri dhe dhëndri i Profetit ﷺ, kalifi i katërt i drejtë.',
      paragraphs: [
        'Ali ibn Ebi Talib r.a. ishte kushëriri i Profetit ﷺ dhe u rrit në shtëpinë e tij. Ai ishte djali ose adoleshenti i parë që pranoi Islamin, duke qenë rreth 10 vjeç.',
        'Aliu u martua me Fatimen r.a., bijën e dashur të Profetit ﷺ. Prej tyre lindën Hasani dhe Husejni, pasardhësit e vetëm të Profetit ﷺ. Profeti ﷺ tha: "Unë jam qyteti i dijes dhe Aliu është porta e tij."',
        'Ai ishte njëri nga luftëtarët më të guximshëm. Në betejën e Hajberit, ai çau portën e fortesës me duart e veta. Profeti ﷺ i dha flamurin: "Do t\'ia jap flamurin dikujt që e do Allahun dhe i Dërguari i Tij, dhe Allahu dhe i Dërguari i Tij e duan atë."',
        'Aliu fjeti në shtratin e Profetit ﷺ natën e Hixhretit, duke rrezikuar jetën që Profeti ﷺ të ikte pa u vërejtur. Ai mbeti në Mekë për të kthyer amanetin e njerëzve.',
        'Si kalif, Aliu u përball me fitne (sprova) të vështira. Ai zhvendosi kryeqytetin në Kufa dhe u përpoq të ruante unitetin e umetit. Ai vdiq si dëshmor në vitin 40 H, i goditur nga Ibn Mulxhemi.',
        'Aliu ishte i njohur për dijen e thellë, gjykimin e drejtë dhe elokuencën. Fjalët e tij të urta janë ruajtur në "Nehxhul-Belaga" (Rruga e Elokuencës).',
      ],
    },
    achievements: [
      { title: 'Porta e Dijes', description: 'Profeti ﷺ e quajti portën e qytetit të dijes', icon: '🚪' },
      { title: 'Heroi i Hajberit', description: 'Çau portën e fortesës me duart e veta', icon: '⚔️' },
      { title: 'Kalifi i Katërt', description: 'I fundit i kalifëve të drejtë', icon: '👑' },
      { title: 'Sakrificë për Profetin', description: 'Fjeti në shtratin e tij natën e Hixhretit', icon: '🛏️' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '586', attributeKey: 'hadithNarrated' },
      { label: 'Renditja e Kalifatit', value: '4', attributeKey: 'caliphOrder' },
      { label: 'Lidhja me Profetin', value: 'Dhëndër', attributeKey: 'relationToProphet' },
      { label: 'Dëshmor', value: 'Po', attributeKey: 'martyred' },
    ],
    timeline: {
      birthYear: 601,
      deathYear: 661,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit (10 vjeç)' },
        { year: 622, event: 'Fjeti në shtratin e Profetit natën e Hixhretit' },
        { year: 624, event: 'Beteja e Bedrit' },
        { year: 628, event: 'Çlirimi i Hajberit' },
        { year: 656, event: 'Bërja kalif' },
        { year: 661, event: 'Martirizimi në Kufa' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'fatimah', description: 'Fatimeja ishte gruaja e tij' },
      { type: 'family', figureId: 'hasan-ali', description: 'Hasani ishte djali i tij' },
      { type: 'family', figureId: 'husayn-ali', description: 'Husejni ishte djali i tij' },
    ],
    isComplete: true,
  },

  // ============ ASHARA MUBASHAREEN (remaining 6) ============
  {
    figureId: 'talha',
    category: 'sahaba',
    bio: {
      summary: 'Talha r.a. ishte nga dhjetë të përgëzuarit me Xhenet, i njohur për trimërinë në Uhud.',
      paragraphs: [
        'Talha ibn Ubejdullah r.a. ishte nga të parët që pranuan Islamin dhe nga dhjetë sahabët e përgëzuar me Xhenet. Ai ishte tregtar i suksesshëm para Islamit.',
        'Në betejën e Uhudit, Talha mbrojtia Profetin ﷺ me trupin e tij, duke marrë mbi 70 plagë. Dora e tij u paralizua duke bllokuar një goditje shpate drejtuar Profetit ﷺ.',
        'Profeti ﷺ tha: "Kush dëshiron të shikojë një dëshmor që ecën mbi tokë, le të shikojë Talhën." Ai ishte njëri nga gjashtë personat e caktuar nga Umeri r.a. për të zgjedhur kalifin e ardhshëm.',
        'Talha ishte shumë bujar dhe shpenzonte pasurinë e tij për të varfërit. Thuhet se në një ditë të vetme ai dha 400,000 dirhem.',
      ],
    },
    achievements: [
      { title: 'Dhjetë të Përgëzuarit', description: 'Nga dhjetë të përgëzuarit me Xhenet', icon: '🌟' },
      { title: 'Mburoja e Profetit', description: 'Mbrojtja Profetin ﷺ me trupin e tij', icon: '🛡️' },
      { title: 'Dëshmor i Gjallë', description: 'Profeti ﷺ e quajti dëshmor që ecën', icon: '⭐' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '38', attributeKey: 'hadithNarrated' },
      { label: 'Dhjetë të Përgëzuarit', value: 'Po', attributeKey: 'asharaAlMubashareen' },
      { label: 'Dëshmor', value: 'Po', attributeKey: 'martyred' },
    ],
    timeline: {
      deathYear: 656,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit' },
        { year: 625, event: 'Mbrojtja heroike në Uhud' },
        { year: 656, event: 'Vdekja në betejën e Xhemelit' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'companion', figureId: 'zubayr', description: 'Shok i ngushtë' },
    ],
    isComplete: true,
  },
  {
    figureId: 'zubayr',
    category: 'sahaba',
    bio: {
      summary: 'Zubejri r.a. ishte "dishepulli" i Profetit ﷺ dhe kalorës i famshëm.',
      paragraphs: [
        'Zubejr ibn El-Avvam r.a. ishte kushëri i Profetit ﷺ (biri i hallës së tij Safija) dhe njëri nga të parët muslimanë. Ai ishte vetëm 15 vjeç kur pranoi Islamin.',
        'Profeti ﷺ tha: "Çdo profet ka një dishepull, dhe dishepulli im është Zubejri." Ai ishte kalorës i shkëlqyer dhe luftoi në të gjitha betejat kryesore.',
        'Zubejri ishte i pari që nxori shpatën për Islamin. Kur dëgjoi se Profeti ﷺ ishte kapur, ai doli me shpatë të zhveshur për ta mbrojtur.',
        'Ai emigroi në Abisini me gruan e tij Esmanë, bijën e Ebu Bekrit r.a. Djali i tyre Abdullah ishte fëmija i parë i lindur nga muhaxhirët në Medinë.',
      ],
    },
    achievements: [
      { title: 'Dishepulli i Profetit', description: 'Profeti ﷺ e quajti dishepullin e tij', icon: '⚔️' },
      { title: 'Shpata e Parë', description: 'I pari që nxori shpatën për Islam', icon: '🗡️' },
      { title: 'Dhjetë të Përgëzuarit', description: 'Nga dhjetë të përgëzuarit me Xhenet', icon: '🌟' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '38', attributeKey: 'hadithNarrated' },
      { label: 'Dhjetë të Përgëzuarit', value: 'Po', attributeKey: 'asharaAlMubashareen' },
      { label: 'Emigroi në Abisini', value: 'Po', attributeKey: 'migratedToAbyssinia' },
      { label: 'Dëshmor', value: 'Po', attributeKey: 'martyred' },
    ],
    timeline: {
      birthYear: 594,
      deathYear: 656,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit' },
        { year: 615, event: 'Emigrimi në Abisini' },
        { year: 656, event: 'Vdekja pas betejës së Xhemelit' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'asma-bakr', description: 'Esmaja ishte gruaja e tij' },
      { type: 'family', figureId: 'abdullah-zubayr', description: 'Abdullahu ishte djali i tij' },
    ],
    isComplete: true,
  },
  {
    figureId: 'abdurrahman',
    category: 'sahaba',
    bio: {
      summary: 'Abdurrahman ibn Aufi r.a. ishte tregtar i bekuar që Profeti ﷺ i dha përgëzimin.',
      paragraphs: [
        'Abdurrahman ibn Auf r.a. ishte nga të parët që pranuan Islamin dhe nga dhjetë të përgëzuarit me Xhenet. Ai ishte tregtar i talentuar dhe shumë i suksesshëm.',
        'Kur emigroi në Medinë pa asgjë, ensari Sad ibn Er-Rebia i ofroi gjysmën e pasurisë dhe njërën grua. Abdurrahmani refuzoi duke thënë: "Ma trego vetëm rrugën për në treg."',
        'Brenda pak kohësh, ai u bë përsëri i pasur nga tregtia e ndershme. Ai dha për bamirësi në mënyrë të jashtëzakonshme dhe financoi shumë ekspedita ushtarake.',
        'Ai ishte njëri nga gjashtë të zgjedhurit nga Umeri për të zgjedhur kalifin e ardhshëm dhe luajti rol kyç në zgjedhjen e Uthmanit r.a.',
      ],
    },
    achievements: [
      { title: 'Dhjetë të Përgëzuarit', description: 'Nga dhjetë të përgëzuarit me Xhenet', icon: '🌟' },
      { title: 'Tregtari i Bekuar', description: 'U pasurua përmes tregtisë së ndershme', icon: '💰' },
      { title: 'Bujari i Madh', description: 'Dha pasuri të madhe për bamirësi', icon: '🤲' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '65', attributeKey: 'hadithNarrated' },
      { label: 'Dhjetë të Përgëzuarit', value: 'Po', attributeKey: 'asharaAlMubashareen' },
      { label: 'Emigroi në Abisini', value: 'Po', attributeKey: 'migratedToAbyssinia' },
    ],
    timeline: {
      deathYear: 652,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit' },
        { year: 615, event: 'Emigrimi në Abisini' },
        { year: 622, event: 'Emigrimi në Medinë' },
      ],
      era: 'Early Islam',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'saad',
    category: 'sahaba',
    bio: {
      summary: 'Sad ibn Ebi Vekkasi r.a. ishte harkëtari i parë dhe çliruesi i Irakut.',
      paragraphs: [
        'Sad ibn Ebi Vekkas r.a. ishte dajalë i Profetit ﷺ (nëna e Profetit ishte nga fisi i Sadit) dhe nga të parët muslimanë. Ai kishte vetëm 17 vjeç kur pranoi Islamin.',
        'Profeti ﷺ i tha: "Gjuaj, Sad! Prindërit e mi të flijuar për ty!" - një nder që nuk iu tha askujt tjetër. Ai ishte harkëtari i parë që gjuajti shigjetë në rrugën e Allahut.',
        'Sad udhëhoqi ushtrinë islame në betejën e Kadisijes kundër Perandorisë Persiane, një nga fitoret më të mëdha ushtarake në histori. Ai themeloi qytetin e Kufas.',
        'Lutja e Sadit ishte e pranuar nga Allahu. Kur nëna e tij e kërcënoi me grevë urie nëse nuk braktiste Islamin, ai tha: "Nëse ke njëqind shpirtra dhe vdesin një nga një, nuk do ta braktis."',
      ],
    },
    achievements: [
      { title: 'Harkëtari i Parë', description: 'I pari që gjuajti shigjetë për Islam', icon: '🏹' },
      { title: 'Çliruesi i Persisë', description: 'Fitoi betejën vendimtare të Kadisijes', icon: '⚔️' },
      { title: 'Dhjetë të Përgëzuarit', description: 'Nga dhjetë të përgëzuarit me Xhenet', icon: '🌟' },
      { title: 'Themeloi Kufan', description: 'Ndërtoi qytetin e ri islam', icon: '🏛️' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '271', attributeKey: 'hadithNarrated' },
      { label: 'Dhjetë të Përgëzuarit', value: 'Po', attributeKey: 'asharaAlMubashareen' },
      { label: 'Lidhja me Profetin', value: 'Dajalë', attributeKey: 'relationToProphet' },
    ],
    timeline: {
      deathYear: 675,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit (17 vjeç)' },
        { year: 624, event: 'Harkëtari i parë në Bedr' },
        { year: 636, event: 'Fitorja në Kadisije' },
      ],
      era: 'Early Islam',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'abu-ubaidah',
    category: 'sahaba',
    bio: {
      summary: 'Ebu Ubejde r.a. ishte "Amini i Umetit" - i besuari i këtij umeti.',
      paragraphs: [
        'Ebu Ubejde ibn El-Xherrah r.a. ishte nga të parët muslimanë dhe udhëheqës i njohur ushtarak. Profeti ﷺ e quajti "Amini i këtij Umeti" - i besuari.',
        'Ai emigroi në Abisini dhe më pas në Medinë. Ai luftoi në të gjitha betejat pranë Profetit ﷺ dhe shkëlqeu si komandant ushtarak.',
        'Ebu Ubejde udhëhoqi çlirimin e Sirisë dhe ishte guvernatori i parë i saj. Kur Umeri r.a. erdhi në Kudus, Ebu Ubejde e shoqëroi.',
        'Ai vdiq nga murtaja e Amvas në Siri në vitin 18 H. Umeri r.a. kishte shkuar ta zëvendësonte para se të vdiste, por Ebu Ubejde refuzoi të largohej nga ushtria e tij.',
      ],
    },
    achievements: [
      { title: 'Amini i Umetit', description: 'I besuari i Profetit ﷺ', icon: '🤝' },
      { title: 'Çliruesi i Sirisë', description: 'Udhëhoqi çlirimin e Shamit', icon: '🗺️' },
      { title: 'Dhjetë të Përgëzuarit', description: 'Nga dhjetë të përgëzuarit me Xhenet', icon: '🌟' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '14', attributeKey: 'hadithNarrated' },
      { label: 'Dhjetë të Përgëzuarit', value: 'Po', attributeKey: 'asharaAlMubashareen' },
      { label: 'Emigroi në Abisini', value: 'Po', attributeKey: 'migratedToAbyssinia' },
    ],
    timeline: {
      deathYear: 639,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit' },
        { year: 634, event: 'Komandant i ushtrisë në Siri' },
        { year: 639, event: 'Vdekja nga murtaja në Amvas' },
      ],
      era: 'Early Islam',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'said-zayd',
    category: 'sahaba',
    bio: {
      summary: 'Said ibn Zejdi r.a. ishte dhëndri i Umerit dhe nga dhjetë të përgëzuarit.',
      paragraphs: [
        'Said ibn Zejd r.a. ishte kushëriri dhe dhëndri i Umer ibn El-Hatabit (ishte martuar me motrën e tij Fatimen). Babai i tij Zejdi ishte monoteist (hanif) para Islamit.',
        'Ai ishte nga të parët muslimanë dhe duroi torturat e Kurejshëve bashkë me gruan e tij. Historia e konvertimit të Umerit ndodhi në shtëpinë e tij.',
        'Saidi luftoi në betejat kryesore të Islamit, përveç Bedrit sepse ishte dërguar në mision. Megjithatë, Profeti ﷺ i dha edhe atij shpërblimin e Bedrit.',
        'Ai ishte njëri nga dhjetë të përgëzuarit me Xhenet. Jetoi jetë të gjatë dhe të devotshme deri në vdekjen e tij natyrale.',
      ],
    },
    achievements: [
      { title: 'Dhjetë të Përgëzuarit', description: 'Nga dhjetë të përgëzuarit me Xhenet', icon: '🌟' },
      { title: 'Shtëpia e Islamit të Umerit', description: 'Umeri u konvertua në shtëpinë e tij', icon: '🏠' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '48', attributeKey: 'hadithNarrated' },
      { label: 'Dhjetë të Përgëzuarit', value: 'Po', attributeKey: 'asharaAlMubashareen' },
    ],
    timeline: {
      deathYear: 673,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit' },
        { year: 616, event: 'Konvertimi i Umerit në shtëpinë e tij' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'umar', description: 'Umeri ishte kunati i tij' },
    ],
    isComplete: true,
  },

  // ============ WIVES OF THE PROPHET ============
  {
    figureId: 'khadijah',
    category: 'sahaba',
    bio: {
      summary: 'Hatixheja r.a. ishte gruaja e parë dhe më e dashur e Profetit ﷺ.',
      paragraphs: [
        'Hatixhe bint Huvejlid r.a. ishte tregtare e suksesshme dhe grua fisnike e Mekës. Ajo punësoi Muhamedin ﷺ për tregtinë e saj dhe u mahnit nga ndershmëria dhe karakteri i tij.',
        'Ajo i propozoi Profetit ﷺ për martesë kur ai ishte 25 vjeç dhe ajo 40. Ata patën një martesë të lumtur për 25 vjet dhe ajo i lindi 6 fëmijë.',
        'Kur Profeti ﷺ mori shpalljen e parë dhe u frikësua, Hatixheja e qetësoi: "Jo, Allahu kurrë nuk do të të turpërojë. Ti mban lidhjet farefisnore, mban barrën e të tjerëve, ndihmon të varfërit..."',
        'Ajo ishte personi i parë që pranoi Islamin dhe mbështeti Profetin ﷺ me pasurinë dhe dashurinë e saj. Ajo duroi bojkotin e ashpër trevjeçar në luginën e Ebu Talibit.',
        'Hatixheja vdiq tre vjet para Hixhretit. Profeti ﷺ e kujtonte me dashuri gjatë gjithë jetës. Xhibrili i solli selam nga Allahu dhe përgëzim për një pallat në Xhenet.',
        'Profeti ﷺ tha: "Ajo besoi kur njerëzit refuzuan, ajo më mbështeti me pasurinë e saj kur njerëzit më privuan, dhe Allahu më dha fëmijë prej saj."',
      ],
    },
    achievements: [
      { title: 'Muslimanja e Parë', description: 'Personi i parë që pranoi Islamin', icon: '🌟' },
      { title: 'Nëna e Besimtarëve', description: 'Gruaja e parë e Profetit ﷺ', icon: '👑' },
      { title: 'Mbështetësja e Parë', description: 'Mbështeti Profetin ﷺ me gjithçka', icon: '💝' },
      { title: 'Selami nga Allahu', description: 'Xhibrili i solli selam nga Allahu', icon: '✨' },
    ],
    quizFacts: [
      { label: 'Periudha e Konvertimit', value: 'Meka e Hershme', attributeKey: 'conversionPeriod' },
      { label: 'Lidhja me Profetin', value: 'Bashkëshorte', attributeKey: 'relationToProphet' },
    ],
    timeline: {
      birthYear: 555,
      deathYear: 619,
      majorEvents: [
        { year: 595, event: 'Martesa me Profetin ﷺ' },
        { year: 610, event: 'Pranimi i Islamit' },
        { year: 619, event: 'Vdekja në Mekë' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'fatimah', description: 'Fatimeja ishte bija e saj' },
    ],
    isComplete: true,
  },
  {
    figureId: 'aisha',
    category: 'sahaba',
    bio: {
      summary: 'Aisheja r.a. ishte dijetarja më e madhe e Islamit dhe gruaja më e dashur pas Hatixhes.',
      paragraphs: [
        'Aishe bint Ebi Bekr r.a. ishte bija e Ebu Bekrit r.a. dhe u martua me Profetin ﷺ pas emigrimit në Medinë. Ajo u bë njëra nga gratë më të ditura në histori.',
        'Ajo transmetoi mbi 2200 hadithe dhe ishte autoritet në fikh, tefsir dhe histori islame. Sahabët vinin te ajo për të pyetur për çështje të ndërlikuara fetare.',
        'Profeti ﷺ vdiq në prehrin e saj dhe u varros në dhomën e saj. Ajo jetoi edhe 47 vjet pas tij, duke mësuar njerëzit dhe ruajtur trashëgiminë profetike.',
        'Ajo ishte inteligjente, elokuente dhe kishte memorie të jashtëzakonshme. Ajo korrigjonte gabimet e sahabëve të tjerë në transmetimin e haditheve.',
        'Aisheja ishte burime dhe bamirëse. Pavarësisht varfërisë personale, ajo shpërndante gjithçka që i jepej dhe agjëronte shumë.',
      ],
    },
    achievements: [
      { title: 'Dijetarja më e Madhe', description: 'Autoriteti kryesor në dije islame', icon: '📚' },
      { title: 'Transmetuese e Haditheve', description: 'Transmetoi mbi 2200 hadithe', icon: '📖' },
      { title: 'Nëna e Besimtarëve', description: 'Gruaja e dashur e Profetit ﷺ', icon: '👑' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '2210', attributeKey: 'hadithNarrated' },
      { label: 'Lidhja me Profetin', value: 'Bashkëshorte', attributeKey: 'relationToProphet' },
    ],
    timeline: {
      birthYear: 613,
      deathYear: 678,
      majorEvents: [
        { year: 623, event: 'Martesa me Profetin ﷺ' },
        { year: 632, event: 'Vdekja e Profetit ﷺ në prehrin e saj' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'abu-bakr', description: 'Ebu Bekri ishte babai i saj' },
    ],
    isComplete: true,
  },
  {
    figureId: 'fatimah',
    category: 'sahaba',
    bio: {
      summary: 'Fatimeja r.a. ishte bija më e dashur e Profetit ﷺ dhe zonja e grave të Xhenetit.',
      paragraphs: [
        'Fatime Ez-Zehra r.a. ishte bija më e vogël dhe më e dashur e Profetit ﷺ nga Hatixheja. Ajo i ngjante Profetit ﷺ në ecje dhe fjalë.',
        'Profeti ﷺ tha: "Fatimeja është pjesë e imja. Kush e zemëron atë, më zemëron mua." Ai e quajti atë "zonja e grave të Xhenetit".',
        'Ajo u martua me Ali ibn Ebi Talibin r.a. dhe patën katër fëmijë: Hasanin, Husejnin, Zejnebin dhe Ummi Kulthumin. Vetëm përmes saj vazhdoi gjenealogjia e Profetit ﷺ.',
        'Fatimeja jetonte thjesht dhe punonte shumë në shtëpi. Duart i ishin plagosur nga mulliri dhe bartte ujë derisa i lëndoheshin supet.',
        'Ajo vdiq vetëm gjashtë muaj pas Profetit ﷺ, e thyer nga malli për të. Ajo ishte e para nga familja e tij që iu bashkua atij.',
      ],
    },
    achievements: [
      { title: 'Zonja e Xhenetit', description: 'Zonja e grave të Xhenetit', icon: '👑' },
      { title: 'Bija e Dashur', description: 'Profeti ﷺ ngrihej kur hynte', icon: '💝' },
      { title: 'Nëna e Pasardhësve', description: 'Vetëm përmes saj vazhdoi gjenealogjia', icon: '👨‍👩‍👧‍👦' },
    ],
    quizFacts: [
      { label: 'Lidhja me Profetin', value: 'Bijë', attributeKey: 'relationToProphet' },
    ],
    timeline: {
      birthYear: 605,
      deathYear: 632,
      majorEvents: [
        { year: 622, event: 'Emigrimi në Medinë' },
        { year: 624, event: 'Martesa me Aliun r.a.' },
        { year: 632, event: 'Vdekja (6 muaj pas Profetit ﷺ)' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'ali', description: 'Aliu ishte burri i saj' },
      { type: 'family', figureId: 'hasan-ali', description: 'Hasani ishte djali i saj' },
      { type: 'family', figureId: 'husayn-ali', description: 'Husejni ishte djali i saj' },
      { type: 'family', figureId: 'khadijah', description: 'Hatixheja ishte nëna e saj' },
    ],
    isComplete: true,
  },

  // ============ MAJOR HADITH NARRATORS ============
  {
    figureId: 'abu-hurairah',
    category: 'sahaba',
    bio: {
      summary: 'Ebu Hurejra r.a. transmetoi më shumë hadithe se çdo sahab tjetër.',
      paragraphs: [
        'Ebu Hurejra r.a. (babai i koteles) u konvertua në vitin e 7-të hixhri dhe jetoi vetëm 3-4 vjet me Profetin ﷺ, por transmetoi mbi 5300 hadithe.',
        'Ai i kushtoi jetën mësimit dhe mbajtjes mend të haditheve. Ai jetonte në Suffa (veranda e xhamisë) dhe ndiqte Profetin ﷺ kudo që shkonte.',
        'Kur njerëzit e pyesnin si mundi të transmetonte kaq shumë, ai thoshte: "Muhaxhirët merreshin me tregtinë dhe ensarët me bujqësinë, ndërsa unë qëndroja me Profetin ﷺ."',
        'Profeti ﷺ u lut për të që të kishte memorie të fortë. Pas kësaj, ai nuk harronte asgjë që dëgjonte.',
      ],
    },
    achievements: [
      { title: 'Transmetuesi më i Madh', description: 'Transmetoi mbi 5300 hadithe', icon: '📖' },
      { title: 'Memoria e Bekuar', description: 'Profeti ﷺ u lut për memorien e tij', icon: '🧠' },
    ],
    quizFacts: [
      { label: 'Hadithe të Transmetuara', value: '5374', attributeKey: 'hadithNarrated' },
      { label: 'Periudha e Konvertimit', value: 'Medina e Vonshme', attributeKey: 'conversionPeriod' },
    ],
    timeline: {
      deathYear: 678,
      majorEvents: [
        { year: 629, event: 'Pranimi i Islamit' },
      ],
      era: 'Early Islam',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'bilal',
    category: 'sahaba',
    bio: {
      summary: 'Bilali r.a. ishte muezini i parë i Islamit dhe simbol i barazisë.',
      paragraphs: [
        'Bilal ibn Rebah r.a. ishte skllav abisinas që u konvertua herët në Islam. Pronari i tij Umejje ibn Halef e torturonte brutalisht, duke e shtrirë në rërën e nxehtë me gurë mbi gjoks.',
        'Ndërsa torturohej, Bilali thoshte vetëm: "Ehad, Ehad!" (Një, Një!), duke deklaruar besimin në Allahun e Vetëm. Ebu Bekri r.a. e bleu dhe e liroi.',
        'Profeti ﷺ e zgjodhi Bilalin si muezin të parë. Zëri i tij i bukur thërriste besimtarët në namaz. Pas çlirimit të Mekës, ai thirri ezanin nga maja e Qabesë.',
        'Pas vdekjes së Profetit ﷺ, Bilali nuk mundi ta thërriste më ezanin në Medinë nga dhimbja. Ai shkoi në Sham dhe vdiq atje.',
      ],
    },
    achievements: [
      { title: 'Muezini i Parë', description: 'I pari që thirri ezanin', icon: '🔊' },
      { title: 'Durimi ndaj Torturës', description: 'Qëndroi i fortë ndërsa torturohej', icon: '💪' },
      { title: 'Simboli i Barazisë', description: 'Prova se Islami nuk njeh racizëm', icon: '✊' },
    ],
    quizFacts: [
      { label: 'Periudha e Konvertimit', value: 'Meka e Hershme', attributeKey: 'conversionPeriod' },
      { label: 'Luftoi në Bedr', value: 'Po', attributeKey: 'participatedBadr' },
    ],
    timeline: {
      deathYear: 640,
      majorEvents: [
        { year: 610, event: 'Pranimi i Islamit' },
        { year: 622, event: 'Emigrimi në Medinë' },
        { year: 630, event: 'Ezani nga maja e Qabesë' },
      ],
      era: 'Early Islam',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'khalid',
    category: 'sahaba',
    bio: {
      summary: 'Halid ibn El-Velidi r.a. ishte "Shpata e Allahut" - komandanti më i madh ushtarak.',
      paragraphs: [
        'Halid ibn El-Velid r.a. ishte gjeneral i Kurejshëve para Islamit dhe kauza e humbjes së muslimanëve në Uhud. Ai pranoi Islamin në vitin e 8-të hixhri.',
        'Profeti ﷺ i dha titullin "Shpata e Allahut" (Sejfullah). Ai tha: "Ç\'komandant i shkëlqyer është Halidi! Rob i Allahut, Shpatë e Allahut!"',
        'Halidi nuk humbi asnjë betejë në jetën e tij - as para, as pas pranimit të Islamit. Ai udhëhoqi fitoret vendimtare në Jermuk dhe çliroi Irakun dhe Sirinë.',
        'Ai vdiq në shtratin e tij, gjë që e pikëllonte shumë. Ai tha: "Nuk ka asnjë vend në trupin tim pa shenjë nga shpatë, ushte ose shigjetë, e megjithatë ja ku jam duke vdekur në shtrat si një deve!"',
      ],
    },
    achievements: [
      { title: 'Shpata e Allahut', description: 'Titull i dhënë nga Profeti ﷺ', icon: '⚔️' },
      { title: 'I Pamposhtur', description: 'Nuk humbi asnjë betejë', icon: '🏆' },
      { title: 'Fitorja e Jermukut', description: 'Mposhti Perandorinë Bizantine', icon: '🗡️' },
    ],
    quizFacts: [
      { label: 'Periudha e Konvertimit', value: 'Medina e Vonshme', attributeKey: 'conversionPeriod' },
    ],
    timeline: {
      deathYear: 642,
      majorEvents: [
        { year: 629, event: 'Pranimi i Islamit' },
        { year: 636, event: 'Beteja e Jermukut' },
      ],
      era: 'Early Islam',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'hamza',
    category: 'sahaba',
    bio: {
      summary: 'Hamza r.a. ishte xhaxhai dhe daja i Profetit ﷺ, "Luani i Allahut".',
      paragraphs: [
        'Hamza ibn Abdul-Muttalib r.a. ishte xhaxhai i Profetit ﷺ dhe njëri nga luftëtarët më të fuqishëm të arabëve. Ai pranoi Islamin pas dëgjimit se Ebu Xhehli kishte ofenduar Profetin ﷺ.',
        'Ai shkoi te Ebu Xhehli dhe e goditi me hark në kokë duke thënë: "A e ofendon atë ndërsa unë jam në fenë e tij?" Pas kësaj, ai u bë musliman i devotshëm.',
        'Profeti ﷺ e quajti "Luanin e Allahut" për trimërinë e tij. Ai luftoi me heroizëm në Bedr dhe vrau shumë nga armiqtë e muslimanëve.',
        'Hamza ra dëshmor në Uhud. Ai u vra nga Vahshiu me urdhër të Hindit, që i nxori dhe përtypi mëlçinë nga hakmarrja për babain e saj të vrarë në Bedr. Profeti ﷺ e quajti "zotëria i dëshmorëve".',
      ],
    },
    achievements: [
      { title: 'Luani i Allahut', description: 'Titull i dhënë nga Profeti ﷺ', icon: '🦁' },
      { title: 'Zotëria i Dëshmorëve', description: 'Nderi më i lartë për dëshmorët', icon: '⭐' },
      { title: 'Heroi i Bedrit', description: 'Luftoi me trimëri të jashtëzakonshme', icon: '⚔️' },
    ],
    quizFacts: [
      { label: 'Periudha e Konvertimit', value: 'Meka e Hershme', attributeKey: 'conversionPeriod' },
      { label: 'Luftoi në Bedr', value: 'Po', attributeKey: 'participatedBadr' },
      { label: 'Dëshmor', value: 'Po', attributeKey: 'martyred' },
      { label: 'Lidhja me Profetin', value: 'Xhaxha', attributeKey: 'relationToProphet' },
    ],
    timeline: {
      deathYear: 625,
      majorEvents: [
        { year: 615, event: 'Pranimi i Islamit' },
        { year: 624, event: 'Heroi i Bedrit' },
        { year: 625, event: 'Martirizimi në Uhud' },
      ],
      era: 'Early Islam',
    },
    relationships: [],
    isComplete: true,
  },
  {
    figureId: 'hasan-ali',
    category: 'sahaba',
    bio: {
      summary: 'Hasani r.a. ishte nipi i dashur i Profetit ﷺ dhe zotëria i të rinjve të Xhenetit.',
      paragraphs: [
        'Hasan ibn Ali r.a. ishte nipi i parë i Profetit ﷺ, i lindur nga Fatimeja dhe Aliu. Profeti ﷺ e donte jashtëzakonisht dhe e bartte shpesh mbi supe.',
        'Profeti ﷺ tha: "Hasani dhe Husejni janë zotërinjtë e të rinjve të Xhenetit." Ai i ngjante shumë Profetit ﷺ në pamje.',
        'Pas vdekjes së Aliut r.a., Hasani u bë kalif për disa muaj. Por për të shmangur gjakderdhjen mes muslimanëve, ai ia dorëzoi kalifatin Muavijes, duke përmbushur profecinë e Profetit ﷺ.',
        'Profeti ﷺ kishte thënë: "Ky djali im është zotëri dhe Allahu do të pajtojë përmes tij dy grupe të mëdha muslimanësh." Hasani vdiq në Medinë dhe u varros në Beki.',
      ],
    },
    achievements: [
      { title: 'Zotëria i të Rinjve', description: 'Zotëria i të rinjve të Xhenetit', icon: '👑' },
      { title: 'Pajtimtar', description: 'Solli paqe mes muslimanëve', icon: '🕊️' },
    ],
    quizFacts: [
      { label: 'Lidhja me Profetin', value: 'Nip', attributeKey: 'relationToProphet' },
    ],
    timeline: {
      birthYear: 625,
      deathYear: 670,
      majorEvents: [
        { year: 661, event: 'Bërja kalif' },
        { year: 661, event: 'Dorëzimi i kalifatit për paqe' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'ali', description: 'Aliu ishte babai i tij' },
      { type: 'family', figureId: 'fatimah', description: 'Fatimeja ishte nëna e tij' },
      { type: 'family', figureId: 'husayn-ali', description: 'Husejni ishte vëllai i tij' },
    ],
    isComplete: true,
  },
  {
    figureId: 'husayn-ali',
    category: 'sahaba',
    bio: {
      summary: 'Husejni r.a. ishte nipi i Profetit ﷺ që ra dëshmor në Kerbela.',
      paragraphs: [
        'Husejn ibn Ali r.a. ishte nipi i dytë i Profetit ﷺ, vëllai i vogël i Hasanit. Profeti ﷺ e donte shumë dhe thoshte: "Husejni është nga unë dhe unë jam nga Husejni."',
        'Profeti ﷺ tha: "Hasani dhe Husejni janë zotërinjtë e të rinjve të Xhenetit." Ai kishte ngjashmëri të madhe me Profetin ﷺ në pamje dhe karakter.',
        'Pas vdekjes së Muavijes, Jezidi kërkoi besën e Husejnit. Husejni refuzoi të jepte besë për dikë që nuk e meritonte dhe u nis drejt Kufas pas ftesës së banorëve.',
        'Në Kerbela, Husejni dhe 72 shokët e tij u rrethuan nga ushtria e Jezidit. Ata refuzuan të dorëzoheshin dhe luftuan deri në martirizim në ditën e Ashuras, 10 Muharrem 61 H.',
      ],
    },
    achievements: [
      { title: 'Zotëria i të Rinjve', description: 'Zotëria i të rinjve të Xhenetit', icon: '👑' },
      { title: 'Dëshmori i Kerbelasë', description: 'Ra dëshmor duke mbrojtur principet', icon: '⭐' },
    ],
    quizFacts: [
      { label: 'Lidhja me Profetin', value: 'Nip', attributeKey: 'relationToProphet' },
      { label: 'Dëshmor', value: 'Po', attributeKey: 'martyred' },
    ],
    timeline: {
      birthYear: 626,
      deathYear: 680,
      majorEvents: [
        { year: 680, event: 'Martirizimi në Kerbela' },
      ],
      era: 'Early Islam',
    },
    relationships: [
      { type: 'family', figureId: 'ali', description: 'Aliu ishte babai i tij' },
      { type: 'family', figureId: 'fatimah', description: 'Fatimeja ishte nëna e tij' },
      { type: 'family', figureId: 'hasan-ali', description: 'Hasani ishte vëllai i tij' },
    ],
    isComplete: true,
  },
];

export function getSahabaLearningById(id: string): LearningContent | undefined {
  return sahabasLearning.find(s => s.figureId === id);
}

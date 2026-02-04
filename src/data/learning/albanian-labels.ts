export const englishLabels = {
  // Navigation
  nav: {
    home: 'Ballina',
    learn: 'Mëso',
    play: 'Luaj',
    backToList: 'Kthehu te lista',
    backToHome: 'Kthehu në ballina',
  },

  // Categories
  categories: {
    prophet: 'Profetët',
    sahaba: 'Sahabët',
    tabieen: "Tabi'inët",
    all: 'Të gjithë',
  },

  // Category singular
  categorySingular: {
    prophet: 'Profet',
    sahaba: 'Sahab',
    tabieen: "Tabi'in",
  },

  // Section titles
  sections: {
    biography: 'Biografia',
    achievements: 'Arritjet Kryesore',
    timeline: 'Kronologjia',
    relationships: 'Lidhjet',
    quizFacts: 'Fakte për Kuiz',
    infoCards: 'Informata',
  },

  // Relationship types
  relationshipTypes: {
    teacher: 'Mësues',
    student: 'Nxënës',
    family: 'Familje',
    companion: 'Shok',
  },

  // View options
  view: {
    grid: 'Rrjetë',
    list: 'Listë',
  },

  // Content status
  status: {
    comingSoon: 'Përmbajtja e plotë së shpejti',
    complete: 'E plotë',
    incomplete: 'Në përpunim',
  },

  // Prophet attributes
  prophetAttributes: {
    era: 'Epoka',
    location: 'Vendndodhja',
    tribe: 'Fisi',
    quranMentions: 'Përmendime në Kuran',
    bookRevealed: 'Libri i Zbritur',
    ulAlAzm: 'Ulul Azm',
    wasKing: 'Ishte Mbret',
    fatherWasProphet: 'Babai ishte Profet',
    sentToArab: 'Dërguar te Arabët',
    storyInQuran: 'Histori në Kuran',
  },

  // Sahaba attributes
  sahabaAttributes: {
    era: 'Epoka',
    location: 'Vendndodhja',
    tribe: 'Fisi',
    conversionPeriod: 'Periudha e Konvertimit',
    asharaAlMubashareen: 'Dhjetë të Përgëzuarit',
    participatedBadr: 'Luftoi në Bedr',
    hadithNarrated: 'Hadithe të Transmetuara',
    caliphOrder: 'Kalif',
    relationToProphet: 'Lidhja me Profetin',
    martyred: 'Dëshmor',
    migratedToAbyssinia: 'Emigroi në Abisini',
  },

  // Tabieen attributes
  tabieenAttributes: {
    era: 'Epoka',
    location: 'Vendndodhja',
    generation: 'Gjenerata',
    school: 'Shkolla',
    specialty: 'Specializimi',
    deathYear: 'Viti i Vdekjes',
    birthCity: 'Qyteti i Lindjes',
    role: 'Roli',
    teachers: 'Mësuesit',
    famousStudents: 'Nxënësit e Famshëm',
  },

  // Conversion periods
  conversionPeriods: {
    'early-makkah': 'Meka e Hershme',
    'late-makkah': 'Meka e Vonshme',
    'early-madinah': 'Medina e Hershme',
    'late-madinah': 'Medina e Vonshme',
    'fath-makkah': 'Çlirimi i Mekës',
  },

  // Relations to Prophet
  prophetRelations: {
    wife: 'Bashkëshorte',
    daughter: 'Bijë',
    'son-in-law': 'Dhëndër',
    'father-in-law': 'Vjehërr',
    cousin: 'Kushëri',
    uncle: 'Xhaxha',
    none: 'Asnjë',
  },

  // Generations
  generations: {
    senior: 'I Lartë',
    middle: 'I Mesëm',
    junior: 'I Ri',
  },

  // Specialties
  specialties: {
    fiqh: 'Fikh (Jurisprudencë)',
    hadith: 'Hadith',
    tafsir: 'Tefsir',
    qiraat: 'Kiraet (Lexim)',
    zuhd: 'Zuhd (Asketizëm)',
  },

  // Roles
  roles: {
    judge: 'Gjykatës',
    mufti: 'Mufti',
    teacher: 'Mësues',
    scholar: 'Dijetar',
    ascetic: 'Asket',
  },

  // Yes/No
  boolean: {
    yes: 'Po',
    no: 'Jo',
  },

  // Timeline
  timeline: {
    birth: 'Lindja',
    death: 'Vdekja',
    majorEvent: 'Ngjarje e Rëndësishme',
    ah: 'H', // Hixhri
    bce: 'p.e.s.', // para erës sonë
    ce: 'e.s.', // era sonë
  },

  // Landing page
  landing: {
    title: 'Mëso',
    subtitle: 'Zbulo jetën dhe mësimet e figurave të mëdha Islamike',
    description: 'Lexo biografitë, arritjet dhe lidhjet e Profetëve, Sahabëve dhe Tabi\'inëve në gjuhën shqipe.',
    exploreProphets: 'Zbulo Profetët',
    exploreSahabas: 'Zbulo Sahabët',
    exploreTabieen: "Zbulo Tabi'inët",
    figuresCount: 'figura',
  },

  // Figure card
  figureCard: {
    readMore: 'Lexo më shumë',
    viewProfile: 'Shiko profilin',
  },

  // Common
  common: {
    loading: 'Duke ngarkuar...',
    error: 'Ndodhi një gabim',
    noResults: 'Nuk u gjetën rezultate',
    search: 'Kërko',
    filter: 'Filtro',
  },
} as const;

export type AlbanianLabels = typeof englishLabels;

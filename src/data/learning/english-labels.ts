export const englishLabels = {
  // Navigation
  nav: {
    home: 'Home',
    learn: 'Learn',
    play: 'Play',
    backToList: 'Back to list',
    backToHome: 'Back to home',
  },

  // Categories
  categories: {
    prophet: 'Prophets',
    sahaba: 'Sahabas',
    tabieen: "Tabi'een",
    all: 'All',
  },

  // Category singular
  categorySingular: {
    prophet: 'Prophet',
    sahaba: 'Sahaba',
    tabieen: "Tabi'i",
  },

  // Section titles
  sections: {
    biography: 'Biography',
    achievements: 'Key Achievements',
    timeline: 'Timeline',
    relationships: 'Relationships',
    quizFacts: 'Quick Facts',
    infoCards: 'Information',
  },

  // Relationship types
  relationshipTypes: {
    teacher: 'Teacher',
    student: 'Student',
    family: 'Family',
    companion: 'Companion',
  },

  // View options
  view: {
    grid: 'Grid',
    list: 'List',
  },

  // Content status
  status: {
    comingSoon: 'Full content coming soon',
    complete: 'Complete',
    incomplete: 'In progress',
  },

  // Prophet attributes
  prophetAttributes: {
    era: 'Era',
    location: 'Location',
    tribe: 'Tribe',
    quranMentions: 'Quran Mentions',
    bookRevealed: 'Book Revealed',
    ulAlAzm: 'Ulul Azm',
    wasKing: 'Was a King',
    fatherWasProphet: 'Father was Prophet',
    sentToArab: 'Sent to Arabs',
    storyInQuran: 'Story in Quran',
  },

  // Sahaba attributes
  sahabaAttributes: {
    era: 'Era',
    location: 'Location',
    tribe: 'Tribe',
    conversionPeriod: 'Conversion Period',
    asharaAlMubashareen: 'Ten Promised Paradise',
    participatedBadr: 'Fought at Badr',
    hadithNarrated: 'Hadiths Narrated',
    caliphOrder: 'Caliph',
    relationToProphet: 'Relation to Prophet',
    martyred: 'Martyred',
    migratedToAbyssinia: 'Migrated to Abyssinia',
  },

  // Tabieen attributes
  tabieenAttributes: {
    era: 'Era',
    location: 'Location',
    generation: 'Generation',
    school: 'School',
    specialty: 'Specialty',
    deathYear: 'Death Year',
    birthCity: 'Birth City',
    role: 'Role',
    teachers: 'Teachers',
    famousStudents: 'Famous Students',
  },

  // Conversion periods
  conversionPeriods: {
    'early-makkah': 'Early Makkah',
    'late-makkah': 'Late Makkah',
    'early-madinah': 'Early Madinah',
    'late-madinah': 'Late Madinah',
    'fath-makkah': 'Conquest of Makkah',
  },

  // Relations to Prophet
  prophetRelations: {
    wife: 'Wife',
    daughter: 'Daughter',
    'son-in-law': 'Son-in-law',
    'father-in-law': 'Father-in-law',
    cousin: 'Cousin',
    uncle: 'Uncle',
    none: 'None',
  },

  // Generations
  generations: {
    senior: 'Senior',
    middle: 'Middle',
    junior: 'Junior',
  },

  // Specialties
  specialties: {
    fiqh: 'Fiqh (Jurisprudence)',
    hadith: 'Hadith',
    tafsir: 'Tafsir',
    qiraat: 'Qiraat (Recitation)',
    zuhd: 'Zuhd (Asceticism)',
  },

  // Roles
  roles: {
    judge: 'Judge',
    mufti: 'Mufti',
    teacher: 'Teacher',
    scholar: 'Scholar',
    ascetic: 'Ascetic',
  },

  // Yes/No
  boolean: {
    yes: 'Yes',
    no: 'No',
  },

  // Timeline
  timeline: {
    birth: 'Birth',
    death: 'Death',
    majorEvent: 'Major Event',
    ah: 'AH', // After Hijrah
    bce: 'BCE',
    ce: 'CE',
  },

  // Landing page
  landing: {
    title: 'Learn',
    subtitle: 'Discover the lives and teachings of great Islamic figures',
    description: 'Read biographies, achievements, and relationships of Prophets, Sahabas, and Tabi\'een.',
    exploreProphets: 'Explore Prophets',
    exploreSahabas: 'Explore Sahabas',
    exploreTabieen: "Explore Tabi'een",
    figuresCount: 'figures',
  },

  // Figure card
  figureCard: {
    readMore: 'Read more',
    viewProfile: 'View profile',
  },

  // Common
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    noResults: 'No results found',
    search: 'Search',
    filter: 'Filter',
  },
} as const;

export type EnglishLabels = typeof englishLabels;

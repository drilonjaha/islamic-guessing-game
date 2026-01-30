export type Category = 'prophet' | 'sahaba' | 'tabieen';

export interface Quote {
  id: string;
  text: string;
  textArabic?: string;
  source: string;
}

export interface BaseFigure {
  id: string;
  name: string;
  nameArabic: string;
  category: Category;
  era: string;
  location: string;
  gender: 'male' | 'female';
  quotes: Quote[];
}

export interface Prophet extends BaseFigure {
  category: 'prophet';
  mentionedInQuran: boolean;
  quranMentions: number;
  ulAlAzm: boolean;
  tribe: string;
  bookRevealed: string | null;
  // New attributes for better gameplay
  wasKing: boolean;
  fatherWasProphet: boolean;
  sentToArab: boolean;
  storyInQuran: boolean; // Has detailed story/own surah
}

export type ConversionPeriod = 'early-makkah' | 'late-makkah' | 'early-madinah' | 'late-madinah' | 'fath-makkah';

export interface Sahaba extends BaseFigure {
  category: 'sahaba';
  conversionPeriod: ConversionPeriod;
  tribe: string;
  asharaAlMubashareen: boolean;
  participatedBadr: boolean;
  hadithNarrated: number;
  caliphOrder: number | null;
}

export type TabieenGeneration = 'senior' | 'middle' | 'junior';
export type TabieenSpecialty = 'fiqh' | 'hadith' | 'tafsir' | 'qiraat' | 'zuhd';

export interface Tabieen extends BaseFigure {
  category: 'tabieen';
  generation: TabieenGeneration;
  teachers: string[];
  school: string;
  specialty: TabieenSpecialty[];
  deathYear: number;
}

export type IslamicFigure = Prophet | Sahaba | Tabieen;

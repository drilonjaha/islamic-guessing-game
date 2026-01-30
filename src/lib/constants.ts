import { Category, GameMode } from '@/types';

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'prophet', label: 'Prophets' },
  { value: 'sahaba', label: 'Sahabas' },
  { value: 'tabieen', label: "Tabi'een" },
];

export const GAME_MODES: { value: GameMode; label: string }[] = [
  { value: 'classic', label: 'Classic' },
  { value: 'quote', label: 'Quote' },
];

export const PROPHET_ATTRIBUTES = [
  'Era',
  'Region',
  'Tribe',
  'Mentions',
  'Book',
  'Ul al-Azm',
  'King',
];

// Era ordering for partial matching (adjacent eras = yellow)
export const ERA_ORDER = [
  'Beginning of Time',
  'Pre-history',
  '2000 BCE',
  '19th Century BCE',
  '18th Century BCE',
  '13th Century BCE',
  '10th Century BCE',
  '9th Century BCE',
  '8th Century BCE',
  '1st Century BCE',
  '1st Century CE',
  '7th Century CE',
  'Unknown',
];

// Location to region mapping for partial matching (same region = yellow)
export const LOCATION_REGIONS: Record<string, string> = {
  'Arabia': 'Middle East',
  'Palestine': 'Middle East',
  'Egypt': 'Africa/Middle East',
  'Mesopotamia': 'Middle East',
  'Unknown': 'Unknown',
};

// Quran mentions ranges for partial matching
export const MENTIONS_RANGES = [
  { min: 0, max: 5, label: '1-5' },
  { min: 6, max: 15, label: '6-15' },
  { min: 16, max: 30, label: '16-30' },
  { min: 31, max: 50, label: '31-50' },
  { min: 51, max: 100, label: '51-100' },
  { min: 101, max: 200, label: '100+' },
];

export const SAHABA_ATTRIBUTES = [
  'Gender',
  'Tribe',
  'Conversion',
  'Ashara',
  'Badr',
  'Hadith',
];

export const TABIEEN_ATTRIBUTES = [
  'School',
  'Generation',
  'Teachers',
  'Specialty',
  'Death Year',
];

export function getAttributesForCategory(category: Category): string[] {
  switch (category) {
    case 'prophet':
      return PROPHET_ATTRIBUTES;
    case 'sahaba':
      return SAHABA_ATTRIBUTES;
    case 'tabieen':
      return TABIEEN_ATTRIBUTES;
  }
}

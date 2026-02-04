import { Era } from '@/types/learning';

export const eras: Era[] = [
  {
    id: 'beginning',
    name: 'Beginning of Time',
    nameAlbanian: 'Beginning of Time',
    startYear: -10000,
    endYear: -4000,
    description: 'Creation of Adam (AS) and the beginning of humanity',
  },
  {
    id: 'prehistory',
    name: 'Pre-history',
    nameAlbanian: 'Pre-history',
    startYear: -4000,
    endYear: -2500,
    description: 'Time of Nuh (AS) and early prophets',
  },
  {
    id: 'ancient-mesopotamia',
    name: 'Ancient Mesopotamia',
    nameAlbanian: 'Ancient Mesopotamia',
    startYear: -2500,
    endYear: -1500,
    description: 'Time of Ibrahim (AS) and Lut (AS)',
  },
  {
    id: 'ancient-egypt',
    name: 'Ancient Egypt',
    nameAlbanian: 'Ancient Egypt',
    startYear: -1500,
    endYear: -1200,
    description: 'Time of Musa (AS) and liberation of Bani Israel',
  },
  {
    id: 'israelite-kingdom',
    name: 'Israelite Kingdom',
    nameAlbanian: 'Israelite Kingdom',
    startYear: -1200,
    endYear: -500,
    description: 'Time of Dawud (AS), Sulayman (AS), and prophets of Bani Israel',
  },
  {
    id: 'late-israelite',
    name: 'Late Israelite Period',
    nameAlbanian: 'Late Israelite Period',
    startYear: -500,
    endYear: 1,
    description: 'Time of Zakariya (AS) and Yahya (AS)',
  },
  {
    id: 'early-ce',
    name: 'Early Common Era',
    nameAlbanian: 'Early Common Era',
    startYear: 1,
    endYear: 570,
    description: 'Time of Isa (AS) and pre-Islamic period',
  },
  {
    id: 'prophetic-era',
    name: 'Prophetic Era',
    nameAlbanian: 'Prophetic Era',
    startYear: 570,
    endYear: 632,
    description: 'Life of Prophet Muhammad ﷺ',
  },
  {
    id: 'rashidun',
    name: 'Rashidun Caliphate',
    nameAlbanian: 'Rashidun Caliphate',
    startYear: 632,
    endYear: 661,
    description: 'Time of the Four Rightly Guided Caliphs',
  },
  {
    id: 'early-umayyad',
    name: 'Early Umayyad',
    nameAlbanian: 'Early Umayyad',
    startYear: 661,
    endYear: 720,
    description: 'Beginning of the Umayyad Caliphate',
  },
  {
    id: 'late-umayyad',
    name: 'Late Umayyad',
    nameAlbanian: 'Late Umayyad',
    startYear: 720,
    endYear: 750,
    description: 'Late period of the Umayyad Caliphate',
  },
];

export function getEraById(id: string): Era | undefined {
  return eras.find(era => era.id === id);
}

export function getEraByYear(year: number): Era | undefined {
  return eras.find(era => year >= era.startYear && year < era.endYear);
}

export function getEraNameEnglish(eraName: string): string {
  const era = eras.find(e => e.name.toLowerCase() === eraName.toLowerCase());
  return era?.name || eraName;
}

// Keep for backward compatibility
export function getEraNameAlbanian(eraName: string): string {
  return getEraNameEnglish(eraName);
}

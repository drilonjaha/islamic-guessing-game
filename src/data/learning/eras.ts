import { Era } from '@/types/learning';

export const eras: Era[] = [
  {
    id: 'beginning',
    name: 'Beginning of Time',
    nameAlbanian: 'Fillimi i Kohës',
    startYear: -10000,
    endYear: -4000,
    description: 'Krijimi i Ademit a.s. dhe fillimi i njerëzimit',
  },
  {
    id: 'prehistory',
    name: 'Pre-history',
    nameAlbanian: 'Parahistoria',
    startYear: -4000,
    endYear: -2500,
    description: 'Koha e Nuhut a.s. dhe profetëve të hershëm',
  },
  {
    id: 'ancient-mesopotamia',
    name: 'Ancient Mesopotamia',
    nameAlbanian: 'Mesopotamia e Lashtë',
    startYear: -2500,
    endYear: -1500,
    description: 'Koha e Ibrahimit a.s. dhe Lutit a.s.',
  },
  {
    id: 'ancient-egypt',
    name: 'Ancient Egypt',
    nameAlbanian: 'Egjipti i Lashtë',
    startYear: -1500,
    endYear: -1200,
    description: 'Koha e Musait a.s. dhe çlirimit të Beni Israilëve',
  },
  {
    id: 'israelite-kingdom',
    name: 'Israelite Kingdom',
    nameAlbanian: 'Mbretëria Izraelite',
    startYear: -1200,
    endYear: -500,
    description: 'Koha e Davudit a.s., Sulejmanit a.s. dhe profetëve të Beni Israilëve',
  },
  {
    id: 'late-israelite',
    name: 'Late Israelite Period',
    nameAlbanian: 'Periudha e Vonshme Izraelite',
    startYear: -500,
    endYear: 1,
    description: 'Koha e Zekerijas a.s. dhe Jahjas a.s.',
  },
  {
    id: 'early-ce',
    name: 'Early Common Era',
    nameAlbanian: 'Era e Hershme e Përbashkët',
    startYear: 1,
    endYear: 570,
    description: 'Koha e Isait a.s. dhe periudha para Islamit',
  },
  {
    id: 'prophetic-era',
    name: 'Prophetic Era',
    nameAlbanian: 'Epoka Profetike',
    startYear: 570,
    endYear: 632,
    description: 'Jeta e Profetit Muhamed ﷺ',
  },
  {
    id: 'rashidun',
    name: 'Rashidun Caliphate',
    nameAlbanian: 'Kalifati Rashidun',
    startYear: 632,
    endYear: 661,
    description: 'Koha e Katër Kalifëve të Drejtë',
  },
  {
    id: 'early-umayyad',
    name: 'Early Umayyad',
    nameAlbanian: 'Umejadët e Hershëm',
    startYear: 661,
    endYear: 720,
    description: 'Fillimi i Kalifatit Umejad',
  },
  {
    id: 'late-umayyad',
    name: 'Late Umayyad',
    nameAlbanian: 'Umejadët e Vonshëm',
    startYear: 720,
    endYear: 750,
    description: 'Periudha e vonë e Kalifatit Umejad',
  },
];

export function getEraById(id: string): Era | undefined {
  return eras.find(era => era.id === id);
}

export function getEraByYear(year: number): Era | undefined {
  return eras.find(era => year >= era.startYear && year < era.endYear);
}

export function getEraNameAlbanian(eraName: string): string {
  const era = eras.find(e => e.name.toLowerCase() === eraName.toLowerCase());
  return era?.nameAlbanian || eraName;
}

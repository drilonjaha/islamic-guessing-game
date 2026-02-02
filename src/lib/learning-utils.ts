import { Category, IslamicFigure } from '@/types';
import { LearningContent } from '@/types/learning';
import { albanianLabels } from '@/data/learning/albanian-labels';

export function getCategoryLabel(category: Category): string {
  return albanianLabels.categories[category];
}

export function getCategorySingularLabel(category: Category): string {
  return albanianLabels.categorySingular[category];
}

export function getCategoryPath(category: Category): string {
  switch (category) {
    case 'prophet':
      return 'profetet';
    case 'sahaba':
      return 'sahabat';
    case 'tabieen':
      return 'tabiinet';
  }
}

export function getCategoryFromPath(path: string): Category | null {
  switch (path) {
    case 'profetet':
      return 'prophet';
    case 'sahabat':
      return 'sahaba';
    case 'tabiinet':
      return 'tabieen';
    default:
      return null;
  }
}

export function formatBooleanValue(value: boolean): string {
  return value ? albanianLabels.boolean.yes : albanianLabels.boolean.no;
}

export function formatYear(year: number | undefined, isAH: boolean = false): string {
  if (year === undefined) return '';

  if (isAH) {
    return `${year} ${albanianLabels.timeline.ah}`;
  }

  if (year < 0) {
    return `${Math.abs(year)} ${albanianLabels.timeline.bce}`;
  }

  return `${year} ${albanianLabels.timeline.ce}`;
}

export function getConversionPeriodLabel(period: string): string {
  return albanianLabels.conversionPeriods[period as keyof typeof albanianLabels.conversionPeriods] || period;
}

export function getProphetRelationLabel(relation: string): string {
  return albanianLabels.prophetRelations[relation as keyof typeof albanianLabels.prophetRelations] || relation;
}

export function getGenerationLabel(generation: string): string {
  return albanianLabels.generations[generation as keyof typeof albanianLabels.generations] || generation;
}

export function getSpecialtyLabel(specialty: string): string {
  return albanianLabels.specialties[specialty as keyof typeof albanianLabels.specialties] || specialty;
}

export function getRoleLabel(role: string): string {
  return albanianLabels.roles[role as keyof typeof albanianLabels.roles] || role;
}

export function getRelationshipTypeLabel(type: string): string {
  return albanianLabels.relationshipTypes[type as keyof typeof albanianLabels.relationshipTypes] || type;
}

export function createPlaceholderContent(figure: IslamicFigure): LearningContent {
  return {
    figureId: figure.id,
    category: figure.category,
    bio: {
      summary: `${figure.name} (${figure.nameArabic})`,
      paragraphs: [],
    },
    achievements: [],
    quizFacts: [],
    timeline: {
      majorEvents: [],
      era: figure.era,
    },
    relationships: [],
    isComplete: false,
  };
}

export function mergeFigureWithLearning(
  figure: IslamicFigure,
  learningContent?: LearningContent
): IslamicFigure & { learning: LearningContent } {
  return {
    ...figure,
    learning: learningContent || createPlaceholderContent(figure),
  };
}

export function sortFiguresByName(figures: IslamicFigure[]): IslamicFigure[] {
  return [...figures].sort((a, b) => a.name.localeCompare(b.name));
}

export function sortFiguresByEra(figures: IslamicFigure[]): IslamicFigure[] {
  const eraOrder: Record<string, number> = {
    'Beginning of Time': 0,
    'Pre-history': 1,
    '2000 BCE': 2,
    '19th Century BCE': 3,
    '18th Century BCE': 4,
    '13th Century BCE': 5,
    '10th Century BCE': 6,
    '9th Century BCE': 7,
    '8th Century BCE': 8,
    '1st Century BCE': 9,
    '1st Century CE': 10,
    '7th Century CE': 11,
    'Early Islam': 12,
    '1st Century AH': 13,
    '1st-2nd Century AH': 14,
    '2nd Century AH': 15,
    'Unknown': 100,
  };

  return [...figures].sort((a, b) => {
    const orderA = eraOrder[a.era] ?? 50;
    const orderB = eraOrder[b.era] ?? 50;
    return orderA - orderB;
  });
}

export function searchFiguresByName(figures: IslamicFigure[], query: string): IslamicFigure[] {
  if (!query.trim()) return figures;

  const lowerQuery = query.toLowerCase();
  return figures.filter(
    figure =>
      figure.name.toLowerCase().includes(lowerQuery) ||
      figure.nameArabic.includes(query)
  );
}

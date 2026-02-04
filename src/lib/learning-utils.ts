import { Category, IslamicFigure } from '@/types';
import { LearningContent } from '@/types/learning';
import { englishLabels } from '@/data/learning/english-labels';

export function getCategoryLabel(category: Category): string {
  return englishLabels.categories[category];
}

export function getCategorySingularLabel(category: Category): string {
  return englishLabels.categorySingular[category];
}

export function getCategoryPath(category: Category): string {
  switch (category) {
    case 'prophet':
      return 'prophets';
    case 'sahaba':
      return 'sahabas';
    case 'tabieen':
      return 'tabieen';
  }
}

export function getCategoryFromPath(path: string): Category | null {
  switch (path) {
    case 'prophets':
      return 'prophet';
    case 'sahabas':
      return 'sahaba';
    case 'tabieen':
      return 'tabieen';
    default:
      return null;
  }
}

export function formatBooleanValue(value: boolean): string {
  return value ? englishLabels.boolean.yes : englishLabels.boolean.no;
}

export function formatYear(year: number | undefined, isAH: boolean = false): string {
  if (year === undefined) return '';

  if (isAH) {
    return `${year} ${englishLabels.timeline.ah}`;
  }

  if (year < 0) {
    return `${Math.abs(year)} ${englishLabels.timeline.bce}`;
  }

  return `${year} ${englishLabels.timeline.ce}`;
}

export function getConversionPeriodLabel(period: string): string {
  return englishLabels.conversionPeriods[period as keyof typeof englishLabels.conversionPeriods] || period;
}

export function getProphetRelationLabel(relation: string): string {
  return englishLabels.prophetRelations[relation as keyof typeof englishLabels.prophetRelations] || relation;
}

export function getGenerationLabel(generation: string): string {
  return englishLabels.generations[generation as keyof typeof englishLabels.generations] || generation;
}

export function getSpecialtyLabel(specialty: string): string {
  return englishLabels.specialties[specialty as keyof typeof englishLabels.specialties] || specialty;
}

export function getRoleLabel(role: string): string {
  return englishLabels.roles[role as keyof typeof englishLabels.roles] || role;
}

export function getRelationshipTypeLabel(type: string): string {
  return englishLabels.relationshipTypes[type as keyof typeof englishLabels.relationshipTypes] || type;
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

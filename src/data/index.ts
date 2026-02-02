import { prophets } from './prophets';
import { sahabas } from './sahabas';
import { tabieen } from './tabieen';
import { IslamicFigure, Category, Quote } from '@/types';

export { prophets } from './prophets';
export { sahabas } from './sahabas';
export { tabieen } from './tabieen';

export function getFiguresByCategory(category: Category): IslamicFigure[] {
  switch (category) {
    case 'prophet':
      return prophets;
    case 'sahaba':
      return sahabas;
    case 'tabieen':
      return tabieen;
  }
}

export function getAllFigures(): IslamicFigure[] {
  return [...prophets, ...sahabas, ...tabieen];
}

export function getQuotesByCategory(category: Category): { quote: Quote; figure: IslamicFigure }[] {
  const figures = getFiguresByCategory(category);
  return figures.flatMap((figure) =>
    figure.quotes.map((quote) => ({ quote, figure }))
  );
}

export function getAllQuotes(): { quote: Quote; figure: IslamicFigure }[] {
  return getAllFigures().flatMap((figure) =>
    figure.quotes.map((quote) => ({ quote, figure }))
  );
}

export function getFigureById(id: string): IslamicFigure | undefined {
  return getAllFigures().find((f) => f.id === id);
}

export function searchFigures(query: string, category?: Category): IslamicFigure[] {
  const figures = category ? getFiguresByCategory(category) : getAllFigures();
  const lowerQuery = query.toLowerCase();
  return figures.filter(
    (f) =>
      f.name.toLowerCase().includes(lowerQuery) ||
      f.nameArabic.includes(query)
  );
}

// Re-export learning content
export * from './learning';

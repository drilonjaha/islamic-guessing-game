import { IslamicFigure, Category, Quote } from '@/types';
import { getFiguresByCategory, getQuotesByCategory } from '@/data';

// Get a random figure (no time restriction)
export function getRandomFigure(category: Category): IslamicFigure {
  const figures = getFiguresByCategory(category);
  const index = Math.floor(Math.random() * figures.length);
  return figures[index];
}

// Get a random quote (no time restriction)
export function getRandomQuote(category: Category): { quote: Quote; figure: IslamicFigure } {
  const quotesWithFigures = getQuotesByCategory(category);
  const index = Math.floor(Math.random() * quotesWithFigures.length);
  return quotesWithFigures[index];
}

// Legacy exports for compatibility (now just use random)
export function getDailySeed(): number {
  return Math.floor(Math.random() * 1000000);
}

export function getCurrentRoundKey(): string {
  return `game-${Date.now()}`;
}

export function getDailyFigure(category: Category): IslamicFigure {
  return getRandomFigure(category);
}

export function getDailyQuote(category: Category): { quote: Quote; figure: IslamicFigure } {
  return getRandomQuote(category);
}

export function getTimeUntilNextRound(): number {
  return 0; // No time restriction
}

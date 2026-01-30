import { IslamicFigure, Category, Quote } from '@/types';
import { getFiguresByCategory, getQuotesByCategory } from '@/data';

// Mulberry32 PRNG for seeded random numbers
function mulberry32(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function getDailySeed(): number {
  const now = new Date();
  // Create seed from date + minute: YYYYMMDDHHMM
  const seed =
    now.getFullYear() * 100000000 +
    (now.getMonth() + 1) * 1000000 +
    now.getDate() * 10000 +
    now.getHours() * 100 +
    now.getMinutes();
  return seed;
}

export function getCurrentRoundKey(): string {
  const now = new Date();
  // Unique key for each 1-minute round
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}`;
}

export function getDailyFigure(category: Category): IslamicFigure {
  const figures = getFiguresByCategory(category);
  const baseSeed = getDailySeed();
  // Add category to seed to have different figures per category
  const categoryOffset = category.charCodeAt(0) * 1000;
  const rng = mulberry32(baseSeed + categoryOffset);
  const index = Math.floor(rng() * figures.length);
  return figures[index];
}

export function getDailyQuote(category: Category): { quote: Quote; figure: IslamicFigure } {
  const quotesWithFigures = getQuotesByCategory(category);
  const baseSeed = getDailySeed();
  const categoryOffset = category.charCodeAt(0) * 1000 + 500; // Different offset for quotes
  const rng = mulberry32(baseSeed + categoryOffset);
  const index = Math.floor(rng() * quotesWithFigures.length);
  return quotesWithFigures[index];
}

export function getTimeUntilNextRound(): number {
  const now = new Date();
  // Seconds until the next minute
  return 60 - now.getSeconds();
}

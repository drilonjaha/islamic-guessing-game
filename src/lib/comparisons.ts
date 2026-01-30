import {
  IslamicFigure,
  Prophet,
  Sahaba,
  Tabieen,
  AttributeResult,
  GuessResult,
  MatchResult,
} from '@/types';
import { ERA_YEARS, LOCATION_REGIONS, MENTIONS_RANGES } from './constants';

export const MATCH_COLORS: Record<MatchResult, string> = {
  exact: 'bg-emerald-500',
  partial: 'bg-amber-500',
  wrong: 'bg-red-500',
};

export const MATCH_ICONS: Record<MatchResult, string> = {
  exact: '🟩',
  partial: '🟨',
  wrong: '⬜',
};

export const MAX_ATTEMPTS = 6;

function compareString(guess: string, answer: string): MatchResult {
  if (guess === answer) return 'exact';
  return 'wrong';
}

function compareBoolean(guess: boolean, answer: boolean): MatchResult {
  return guess === answer ? 'exact' : 'wrong';
}

function compareNumber(
  guess: number,
  answer: number
): { result: MatchResult; hint?: 'higher' | 'lower' } {
  if (guess === answer) return { result: 'exact' };
  // Check if within 20% range for partial match
  const diff = Math.abs(guess - answer);
  const threshold = Math.max(answer * 0.2, 5);
  if (diff <= threshold) {
    return { result: 'partial', hint: guess < answer ? 'higher' : 'lower' };
  }
  return { result: 'wrong', hint: guess < answer ? 'higher' : 'lower' };
}

function compareEra(guessEra: string, answerEra: string): MatchResult {
  if (guessEra === answerEra) return 'exact';

  const guessYear = ERA_YEARS[guessEra];
  const answerYear = ERA_YEARS[answerEra];

  // If either is unknown or not found, no partial
  if (guessYear === null || guessYear === undefined) return 'wrong';
  if (answerYear === null || answerYear === undefined) return 'wrong';

  // Calculate year difference
  const yearDiff = Math.abs(guessYear - answerYear);

  // Within 500 years = partial (yellow) - this covers BCE/CE boundary well
  if (yearDiff <= 500) return 'partial';

  // Within 1000 years also partial for longer spans
  if (yearDiff <= 1000) return 'partial';

  return 'wrong';
}

function compareLocation(guessLoc: string, answerLoc: string): MatchResult {
  if (guessLoc === answerLoc) return 'exact';

  const guessRegion = LOCATION_REGIONS[guessLoc] || 'Unknown';
  const answerRegion = LOCATION_REGIONS[answerLoc] || 'Unknown';

  // Same region = partial (yellow)
  if (guessRegion !== 'Unknown' && guessRegion === answerRegion) return 'partial';

  // Check for overlapping regions (e.g., "Africa/Middle East" contains "Middle East")
  if (guessRegion.includes('Middle East') && answerRegion.includes('Middle East')) return 'partial';

  return 'wrong';
}

function compareMentions(guessMentions: number, answerMentions: number): { result: MatchResult; hint?: 'higher' | 'lower' } {
  if (guessMentions === answerMentions) return { result: 'exact' };

  // Find ranges
  const guessRange = MENTIONS_RANGES.find(r => guessMentions >= r.min && guessMentions <= r.max);
  const answerRange = MENTIONS_RANGES.find(r => answerMentions >= r.min && answerMentions <= r.max);

  const hint: 'higher' | 'lower' = guessMentions < answerMentions ? 'higher' : 'lower';

  // Same range = partial (yellow)
  if (guessRange && answerRange && guessRange.label === answerRange.label) {
    return { result: 'partial', hint };
  }

  // Adjacent range = partial
  if (guessRange && answerRange) {
    const guessIdx = MENTIONS_RANGES.indexOf(guessRange);
    const answerIdx = MENTIONS_RANGES.indexOf(answerRange);
    if (Math.abs(guessIdx - answerIdx) === 1) {
      return { result: 'partial', hint };
    }
  }

  return { result: 'wrong', hint };
}

function compareProphetAttributes(
  guess: Prophet,
  answer: Prophet
): AttributeResult[] {
  const results: AttributeResult[] = [];

  // Era with partial matching for adjacent eras
  results.push({
    attribute: 'Era',
    value: answer.era,
    guessValue: guess.era,
    result: compareEra(guess.era, answer.era),
  });

  // Region/Location with partial matching for same region
  results.push({
    attribute: 'Region',
    value: answer.location,
    guessValue: guess.location,
    result: compareLocation(guess.location, answer.location),
  });

  results.push({
    attribute: 'Tribe',
    value: answer.tribe,
    guessValue: guess.tribe,
    result: compareString(guess.tribe, answer.tribe),
  });

  // Quran mentions with partial matching for similar counts
  const mentionsResult = compareMentions(guess.quranMentions, answer.quranMentions);
  results.push({
    attribute: 'Mentions',
    value: answer.quranMentions,
    guessValue: guess.quranMentions,
    result: mentionsResult.result,
    hint: mentionsResult.hint,
  });

  results.push({
    attribute: 'Book',
    value: answer.bookRevealed || 'None',
    guessValue: guess.bookRevealed || 'None',
    result: compareString(guess.bookRevealed || 'None', answer.bookRevealed || 'None'),
  });

  results.push({
    attribute: 'Ul al-Azm',
    value: answer.ulAlAzm,
    guessValue: guess.ulAlAzm,
    result: compareBoolean(guess.ulAlAzm, answer.ulAlAzm),
  });

  results.push({
    attribute: 'King',
    value: answer.wasKing,
    guessValue: guess.wasKing,
    result: compareBoolean(guess.wasKing, answer.wasKing),
  });

  return results;
}

function compareSahabaAttributes(
  guess: Sahaba,
  answer: Sahaba
): AttributeResult[] {
  const results: AttributeResult[] = [];

  results.push({
    attribute: 'Gender',
    value: answer.gender,
    guessValue: guess.gender,
    result: compareString(guess.gender, answer.gender),
  });

  results.push({
    attribute: 'Tribe',
    value: answer.tribe,
    guessValue: guess.tribe,
    result: compareString(guess.tribe, answer.tribe),
  });

  // Conversion period comparison with partial matching for adjacent periods
  const conversionPeriods = ['early-makkah', 'late-makkah', 'early-madinah', 'late-madinah', 'fath-makkah'];
  const guessIndex = conversionPeriods.indexOf(guess.conversionPeriod);
  const answerIndex = conversionPeriods.indexOf(answer.conversionPeriod);
  let conversionResult: MatchResult = 'wrong';
  if (guessIndex === answerIndex) {
    conversionResult = 'exact';
  } else if (Math.abs(guessIndex - answerIndex) === 1) {
    conversionResult = 'partial';
  }
  results.push({
    attribute: 'Conversion',
    value: answer.conversionPeriod.replace('-', ' '),
    guessValue: guess.conversionPeriod.replace('-', ' '),
    result: conversionResult,
  });

  results.push({
    attribute: 'Ashara',
    value: answer.asharaAlMubashareen,
    guessValue: guess.asharaAlMubashareen,
    result: compareBoolean(guess.asharaAlMubashareen, answer.asharaAlMubashareen),
  });

  results.push({
    attribute: 'Badr',
    value: answer.participatedBadr,
    guessValue: guess.participatedBadr,
    result: compareBoolean(guess.participatedBadr, answer.participatedBadr),
  });

  const hadithResult = compareNumber(guess.hadithNarrated, answer.hadithNarrated);
  results.push({
    attribute: 'Hadith',
    value: answer.hadithNarrated,
    guessValue: guess.hadithNarrated,
    result: hadithResult.result,
    hint: hadithResult.hint,
  });

  return results;
}

function compareTabieenAttributes(
  guess: Tabieen,
  answer: Tabieen
): AttributeResult[] {
  const results: AttributeResult[] = [];

  results.push({
    attribute: 'School',
    value: answer.school,
    guessValue: guess.school,
    result: compareString(guess.school, answer.school),
  });

  // Generation comparison with partial matching
  const generations = ['senior', 'middle', 'junior'];
  const guessGenIndex = generations.indexOf(guess.generation);
  const answerGenIndex = generations.indexOf(answer.generation);
  let genResult: MatchResult = 'wrong';
  if (guessGenIndex === answerGenIndex) {
    genResult = 'exact';
  } else if (Math.abs(guessGenIndex - answerGenIndex) === 1) {
    genResult = 'partial';
  }
  results.push({
    attribute: 'Generation',
    value: answer.generation,
    guessValue: guess.generation,
    result: genResult,
  });

  // Check if any teachers match
  const commonTeachers = guess.teachers.filter((t) =>
    answer.teachers.includes(t)
  );
  let teacherResult: MatchResult = 'wrong';
  if (guess.teachers.length === answer.teachers.length &&
      commonTeachers.length === answer.teachers.length) {
    teacherResult = 'exact';
  } else if (commonTeachers.length > 0) {
    teacherResult = 'partial';
  }
  results.push({
    attribute: 'Teachers',
    value: answer.teachers.slice(0, 2).join(', '),
    guessValue: guess.teachers.slice(0, 2).join(', '),
    result: teacherResult,
  });

  // Check if any specialties match
  const commonSpecialties = guess.specialty.filter((s) =>
    answer.specialty.includes(s)
  );
  let specialtyResult: MatchResult = 'wrong';
  if (guess.specialty.length === answer.specialty.length &&
      commonSpecialties.length === answer.specialty.length) {
    specialtyResult = 'exact';
  } else if (commonSpecialties.length > 0) {
    specialtyResult = 'partial';
  }
  results.push({
    attribute: 'Specialty',
    value: answer.specialty.join(', '),
    guessValue: guess.specialty.join(', '),
    result: specialtyResult,
  });

  const deathResult = compareNumber(guess.deathYear, answer.deathYear);
  results.push({
    attribute: 'Death Year',
    value: answer.deathYear,
    guessValue: guess.deathYear,
    result: deathResult.result,
    hint: deathResult.hint,
  });

  return results;
}

export function compareAttributes(
  guess: IslamicFigure,
  answer: IslamicFigure
): AttributeResult[] {
  if (guess.category === 'prophet' && answer.category === 'prophet') {
    return compareProphetAttributes(guess as Prophet, answer as Prophet);
  } else if (guess.category === 'sahaba' && answer.category === 'sahaba') {
    return compareSahabaAttributes(guess as Sahaba, answer as Sahaba);
  } else if (guess.category === 'tabieen' && answer.category === 'tabieen') {
    return compareTabieenAttributes(guess as Tabieen, answer as Tabieen);
  }
  return [];
}

export function makeGuess(
  guess: IslamicFigure,
  answer: IslamicFigure
): GuessResult {
  const isCorrect = guess.id === answer.id;
  const attributes = compareAttributes(guess, answer);

  return {
    figure: guess,
    isCorrect,
    attributes,
  };
}

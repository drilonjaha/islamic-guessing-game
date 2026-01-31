import { IslamicFigure, Category, Sahaba, Tabieen, Prophet } from '@/types';

// Common transliteration variants in Islamic names
const transliterationMap: Record<string, string[]> = {
  'u': ['o', 'oo'],
  'o': ['u', 'oo'],
  'i': ['e', 'ee', 'y'],
  'e': ['i', 'ee'],
  'a': ['ah', 'aa'],
  'kh': ['ch', 'x'],
  'dh': ['th', 'z'],
  'th': ['dh', 's'],
  'sh': ['ch'],
  'q': ['k', 'c'],
  'k': ['q', 'c'],
  'j': ['g', 'dj'],
  'z': ['dh', 'th'],
  'w': ['ou', 'oo'],
  'y': ['i', 'ee'],
  "'": ['', 'a'],
  '-': [' ', ''],
  ' ': ['-', ''],
};

// Common name variants
const nameVariants: Record<string, string[]> = {
  'muhammad': ['mohammed', 'mohamed', 'mohammad'],
  'umar': ['omar', 'umer'],
  'uthman': ['osman', 'othman'],
  'ali': ['aly'],
  'aisha': ['ayesha', 'aysha', 'aesha'],
  'khadijah': ['khadija', 'kadeeja'],
  'fatimah': ['fatima', 'faatima'],
  'abu': ['aboo'],
  'ibn': ['bin', 'ben'],
  'abdur': ['abdel', 'abdul', 'abd'],
  'abdul': ['abdel', 'abdur', 'abd'],
  'zayd': ['zaid', 'zeid'],
  'zaynab': ['zainab', 'zeinab'],
  'sulayman': ['sulaiman', 'solomon', 'suleiman'],
  'musa': ['mousa', 'moses'],
  'isa': ['eesa', 'jesus'],
  'ibrahim': ['ibraheem', 'abraham'],
  'yusuf': ['yousuf', 'yosef', 'joseph'],
  'dawud': ['dawood', 'david'],
  'harun': ['haroon', 'aaron'],
  'ismail': ['ishmael', 'ismael'],
  'ishaq': ['isaac', 'ishaaq'],
  'yaqub': ['yacoub', 'jacob'],
  'nuh': ['nooh', 'noah'],
  'hud': ['hood'],
  'salih': ['saleh', 'saleh'],
  'shuayb': ['shoaib', 'shuaib'],
  'yunus': ['younus', 'jonah'],
  'ayyub': ['ayoub', 'job'],
  'idris': ['idrees', 'enoch'],
  'dhul': ['zul', 'thul'],
  'sufyan': ['sufian', 'sofyan'],
  'muadh': ['muaz', 'moaz'],
  'bilal': ['bilaal'],
  'khalid': ['khaled'],
  'hamza': ['hamzah'],
  'hussein': ['husayn', 'hussain', 'hosein'],
  'hasan': ['hassan', 'hasen'],
  'jafar': ['jaafar', 'gafar'],
  'amr': ['amro', 'omar'],
  'sad': ['saad'],
  'said': ['saeed', 'saeid'],
  'talha': ['talhah'],
  'zubayr': ['zubair', 'zobeir'],
  'muawiyah': ['muawiya', 'moawiya'],
  'anas': ['anes'],
  'jabir': ['jaber'],
  'hudhayfah': ['hudhaifa', 'huzaifa'],
  'salman': ['selman', 'salmen'],
};

// Calculate Levenshtein distance for typo tolerance
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Normalize text for comparison
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[''`]/g, "'")
    .replace(/[-]/g, ' ')
    .trim();
}

// Check if query matches with transliteration variants
function matchesWithVariants(name: string, query: string): boolean {
  const normalizedName = normalize(name);
  const normalizedQuery = normalize(query);

  // Direct include check
  if (normalizedName.includes(normalizedQuery)) {
    return true;
  }

  // Check name variants
  const nameParts = normalizedName.split(/\s+/);
  const queryParts = normalizedQuery.split(/\s+/);

  for (const queryPart of queryParts) {
    // Check if any name variant matches
    for (const [canonical, variants] of Object.entries(nameVariants)) {
      if (queryPart === canonical || variants.includes(queryPart)) {
        // Check if the canonical or any variant is in the name
        if (normalizedName.includes(canonical)) {
          return true;
        }
        for (const variant of variants) {
          if (normalizedName.includes(variant)) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

// Calculate match score (lower is better)
export interface SearchResult {
  figure: IslamicFigure;
  score: number;
  matchType: 'exact' | 'starts' | 'contains' | 'fuzzy' | 'variant';
  matchedPart?: string;
}

function getNotabilityScore(figure: IslamicFigure): number {
  let score = 0;

  if (figure.category === 'prophet') {
    const prophet = figure as Prophet;
    if (prophet.ulAlAzm) score += 50; // Ulul Azm prophets
    if (prophet.bookRevealed) score += 30;
    score += prophet.quranMentions * 2;
  } else if (figure.category === 'sahaba') {
    const sahaba = figure as Sahaba;
    if (sahaba.caliphOrder) score += 100 - sahaba.caliphOrder * 10; // Caliphs ranked high
    if (sahaba.asharaAlMubashareen) score += 50;
    if (sahaba.participatedBadr) score += 20;
    if (sahaba.relationToProphet !== 'none') score += 30;
    score += Math.min(sahaba.hadithNarrated / 50, 20); // Cap hadith contribution
  } else if (figure.category === 'tabieen') {
    const tabieen = figure as Tabieen;
    if (tabieen.generation === 'senior') score += 20;
    else if (tabieen.generation === 'middle') score += 10;
    score += tabieen.famousStudents.length * 5;
    if (tabieen.role === 'judge' || tabieen.role === 'mufti') score += 15;
  }

  return score;
}

export function fuzzySearch(
  figures: IslamicFigure[],
  query: string,
  maxResults: number = 8
): SearchResult[] {
  if (!query || query.length === 0) {
    return [];
  }

  const normalizedQuery = normalize(query);
  const results: SearchResult[] = [];

  for (const figure of figures) {
    const normalizedName = normalize(figure.name);
    const nameParts = normalizedName.split(/\s+/);

    let score = 1000;
    let matchType: SearchResult['matchType'] = 'fuzzy';
    let matchedPart: string | undefined;

    // Exact match (best)
    if (normalizedName === normalizedQuery) {
      score = 0;
      matchType = 'exact';
      matchedPart = figure.name;
    }
    // Name starts with query
    else if (normalizedName.startsWith(normalizedQuery)) {
      score = 10;
      matchType = 'starts';
      matchedPart = figure.name.substring(0, query.length);
    }
    // Any word in name starts with query
    else if (nameParts.some(part => part.startsWith(normalizedQuery))) {
      score = 20;
      matchType = 'starts';
      const matchingPart = nameParts.find(part => part.startsWith(normalizedQuery));
      if (matchingPart) {
        const idx = normalizedName.indexOf(matchingPart);
        matchedPart = figure.name.substring(idx, idx + query.length);
      }
    }
    // Name contains query
    else if (normalizedName.includes(normalizedQuery)) {
      score = 50;
      matchType = 'contains';
      const idx = normalizedName.indexOf(normalizedQuery);
      matchedPart = figure.name.substring(idx, idx + query.length);
    }
    // Arabic name contains query
    else if (figure.nameArabic.includes(query)) {
      score = 60;
      matchType = 'contains';
      matchedPart = query;
    }
    // Transliteration variant match
    else if (matchesWithVariants(figure.name, query)) {
      score = 70;
      matchType = 'variant';
    }
    // Fuzzy match with Levenshtein distance
    else {
      // Check each word in the name
      let bestDistance = Infinity;
      for (const part of nameParts) {
        if (part.length >= 3) { // Only check meaningful words
          const distance = levenshteinDistance(normalizedQuery, part.substring(0, normalizedQuery.length + 2));
          if (distance < bestDistance) {
            bestDistance = distance;
          }
        }
      }

      // Allow up to 2 character difference for short queries, 3 for longer
      const maxDistance = normalizedQuery.length <= 4 ? 1 : 2;
      if (bestDistance <= maxDistance) {
        score = 100 + bestDistance * 20;
        matchType = 'fuzzy';
      } else {
        continue; // No match
      }
    }

    // Adjust score by notability (more notable = lower score = ranked higher)
    const notability = getNotabilityScore(figure);
    score -= notability * 0.1;

    results.push({ figure, score, matchType, matchedPart });
  }

  // Sort by score (lower is better)
  results.sort((a, b) => a.score - b.score);

  return results.slice(0, maxResults);
}

// Get a brief description for display
export function getFigureSubtitle(figure: IslamicFigure): string {
  if (figure.category === 'prophet') {
    const prophet = figure as Prophet;
    if (prophet.ulAlAzm) return 'Ulul Azm Prophet';
    if (prophet.bookRevealed) return `Received ${prophet.bookRevealed}`;
    return 'Prophet of Allah';
  } else if (figure.category === 'sahaba') {
    const sahaba = figure as Sahaba;
    if (sahaba.caliphOrder) return `${getOrdinal(sahaba.caliphOrder)} Caliph`;
    if (sahaba.asharaAlMubashareen) return 'Ashara Mubashareen';
    if (sahaba.relationToProphet === 'wife') return 'Wife of the Prophet ﷺ';
    if (sahaba.relationToProphet === 'daughter') return 'Daughter of the Prophet ﷺ';
    if (sahaba.participatedBadr) return 'Badr Veteran';
    if (sahaba.martyred) return 'Martyr';
    return sahaba.tribe;
  } else {
    const tabieen = figure as Tabieen;
    const gen = tabieen.generation === 'senior' ? 'Senior' : tabieen.generation === 'middle' ? 'Middle' : 'Junior';
    return `${gen} Tabi'i • ${tabieen.school}`;
  }
}

function getOrdinal(n: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

// Highlight matching text in a string
export function highlightMatch(text: string, query: string): { before: string; match: string; after: string } | null {
  if (!query) return null;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) {
    // Try to find variant match
    for (const [canonical, variants] of Object.entries(nameVariants)) {
      if (lowerQuery === canonical || variants.includes(lowerQuery)) {
        const canonicalIndex = lowerText.indexOf(canonical);
        if (canonicalIndex !== -1) {
          return {
            before: text.substring(0, canonicalIndex),
            match: text.substring(canonicalIndex, canonicalIndex + canonical.length),
            after: text.substring(canonicalIndex + canonical.length),
          };
        }
        for (const variant of variants) {
          const variantIndex = lowerText.indexOf(variant);
          if (variantIndex !== -1) {
            return {
              before: text.substring(0, variantIndex),
              match: text.substring(variantIndex, variantIndex + variant.length),
              after: text.substring(variantIndex + variant.length),
            };
          }
        }
      }
    }
    return null;
  }

  return {
    before: text.substring(0, index),
    match: text.substring(index, index + query.length),
    after: text.substring(index + query.length),
  };
}

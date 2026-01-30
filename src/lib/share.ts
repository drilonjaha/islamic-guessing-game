import { GuessResult, Category, GameMode } from '@/types';
import { MATCH_ICONS, MAX_ATTEMPTS } from './comparisons';

const CATEGORY_NAMES: Record<Category, string> = {
  prophet: 'Prophets',
  sahaba: 'Sahabas',
  tabieen: "Tabi'een",
};

const MODE_NAMES: Record<GameMode, string> = {
  classic: 'Classic',
  quote: 'Quote',
};

export function generateShareText(
  guesses: GuessResult[],
  won: boolean,
  category: Category,
  mode: GameMode
): string {
  const attempts = won ? guesses.length : 'X';

  const emojiGrid = guesses
    .map((guess) =>
      guess.attributes.map((attr) => MATCH_ICONS[attr.result]).join('')
    )
    .join('\n');

  const title = `Islamic Guessing Game`;
  const subtitle = `${CATEGORY_NAMES[category]} - ${MODE_NAMES[mode]}`;

  return `${title}
${subtitle}

${attempts}/${MAX_ATTEMPTS}

${emojiGrid}

Play at: islamicguessing.game`;
}

export async function shareResults(text: string): Promise<boolean> {
  // Try native share API first (mobile)
  if (navigator.share) {
    try {
      await navigator.share({ text });
      return true;
    } catch {
      // User cancelled or share failed, fall through to clipboard
    }
  }

  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

import { IslamicFigure, Category } from './figures';

export type MatchResult = 'exact' | 'partial' | 'wrong';
export type GameMode = 'classic' | 'quote';
export type GameStatus = 'playing' | 'won' | 'lost';

export interface AttributeResult {
  attribute: string;
  value: string | number | boolean;
  guessValue: string | number | boolean;
  result: MatchResult;
  hint?: 'higher' | 'lower';
}

export interface GuessResult {
  figure: IslamicFigure;
  isCorrect: boolean;
  attributes: AttributeResult[];
}

export interface GameState {
  category: Category;
  mode: GameMode;
  guesses: GuessResult[];
  gameStatus: GameStatus;
  answer: IslamicFigure | null;
  dailyDate: string;
}

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: Record<number, number>;
}

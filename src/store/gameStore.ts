import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Category, GameMode, GameStatus, GuessResult, IslamicFigure, Quote } from '@/types';
import { getRandomFigure, getRandomQuote } from '@/lib/daily-seed';
import { makeGuess, MAX_ATTEMPTS } from '@/lib/comparisons';

interface GameState {
  // Current game state
  category: Category;
  mode: GameMode;
  guesses: GuessResult[];
  gameStatus: GameStatus;
  answer: IslamicFigure | null;
  quoteAnswer: { quote: Quote; figure: IslamicFigure } | null;
  hintsRevealed: number;

  // Actions
  setCategory: (category: Category) => void;
  setMode: (mode: GameMode) => void;
  submitGuess: (figure: IslamicFigure) => void;
  initializeGame: () => void;
  resetGame: () => void;
  playAgain: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      category: 'sahaba',
      mode: 'classic',
      guesses: [],
      gameStatus: 'playing',
      answer: null,
      quoteAnswer: null,
      hintsRevealed: 0,

      setCategory: (category) => {
        set({ category });
        get().initializeGame();
      },

      setMode: (mode) => {
        set({ mode });
        get().initializeGame();
      },

      initializeGame: () => {
        const { category, mode, answer } = get();

        // If there's already an answer and game is in progress, don't reset
        if (answer && get().gameStatus === 'playing' && get().guesses.length > 0) {
          return;
        }

        if (mode === 'classic') {
          const newAnswer = getRandomFigure(category);
          set({
            answer: newAnswer,
            quoteAnswer: null,
            guesses: [],
            gameStatus: 'playing',
            hintsRevealed: 0,
          });
        } else {
          const quoteAnswer = getRandomQuote(category);
          set({
            answer: quoteAnswer.figure,
            quoteAnswer,
            guesses: [],
            gameStatus: 'playing',
            hintsRevealed: 0,
          });
        }
      },

      submitGuess: (figure) => {
        const { answer, guesses, gameStatus } = get();
        if (!answer || gameStatus !== 'playing') return;

        const result = makeGuess(figure, answer);
        const newGuesses = [...guesses, result];

        let newStatus: GameStatus = 'playing';
        if (result.isCorrect) {
          newStatus = 'won';
        } else if (newGuesses.length >= MAX_ATTEMPTS) {
          newStatus = 'lost';
        }

        const updates: Partial<GameState> = {
          guesses: newGuesses,
          gameStatus: newStatus,
        };

        // Reveal a hint in quote mode after wrong guess
        if (!result.isCorrect && get().mode === 'quote') {
          updates.hintsRevealed = Math.min(get().hintsRevealed + 1, 3);
        }

        set(updates);
      },

      resetGame: () => {
        set({
          guesses: [],
          gameStatus: 'playing',
          hintsRevealed: 0,
          answer: null,
        });
        get().initializeGame();
      },

      playAgain: () => {
        const { category, mode } = get();

        // Force new game with new random figure
        if (mode === 'classic') {
          const newAnswer = getRandomFigure(category);
          set({
            answer: newAnswer,
            quoteAnswer: null,
            guesses: [],
            gameStatus: 'playing',
            hintsRevealed: 0,
          });
        } else {
          const quoteAnswer = getRandomQuote(category);
          set({
            answer: quoteAnswer.figure,
            quoteAnswer,
            guesses: [],
            gameStatus: 'playing',
            hintsRevealed: 0,
          });
        }
      },
    }),
    {
      name: 'islamic-game-storage',
      partialize: (state) => ({
        category: state.category,
        mode: state.mode,
      }),
    }
  )
);

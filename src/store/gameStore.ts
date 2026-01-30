import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Category, GameMode, GameStatus, GuessResult, IslamicFigure, Quote } from '@/types';
import { getDailyFigure, getDailyQuote, getCurrentRoundKey } from '@/lib/daily-seed';
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

  // Round tracking
  roundKey: string;
  roundCompleted: Record<string, boolean>; // "category-mode-roundKey" -> completed
  lockedAnswerId: string | null; // Lock the answer during an active game

  // Actions
  setCategory: (category: Category) => void;
  setMode: (mode: GameMode) => void;
  submitGuess: (figure: IslamicFigure) => void;
  initializeGame: () => void;
  resetGame: () => void;
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
      roundKey: '',
      roundCompleted: {},
      lockedAnswerId: null,

      setCategory: (category) => {
        set({ category });
        get().initializeGame();
      },

      setMode: (mode) => {
        set({ mode });
        get().initializeGame();
      },

      initializeGame: () => {
        const { category, mode, roundKey, roundCompleted, gameStatus, guesses, lockedAnswerId } = get();
        const currentRound = getCurrentRoundKey();
        const gameKey = `${category}-${mode}-${currentRound}`;

        // If game is in progress (has guesses but not completed), keep the locked answer
        const isGameInProgress = gameStatus === 'playing' && guesses.length > 0;

        // Check if already completed this round
        if (roundKey === currentRound && roundCompleted[gameKey]) {
          // Don't reset if already completed
          return;
        }

        // If game is in progress, don't change the answer
        if (isGameInProgress && lockedAnswerId) {
          return;
        }

        // New round or new game mode/category - clear completed status for new round
        if (roundKey !== currentRound) {
          set({ roundKey: currentRound, roundCompleted: {} });
        }

        if (mode === 'classic') {
          const answer = getDailyFigure(category);
          set({
            answer,
            quoteAnswer: null,
            guesses: [],
            gameStatus: 'playing',
            hintsRevealed: 0,
            lockedAnswerId: answer.id,
          });
        } else {
          const quoteAnswer = getDailyQuote(category);
          set({
            answer: quoteAnswer.figure,
            quoteAnswer,
            guesses: [],
            gameStatus: 'playing',
            hintsRevealed: 0,
            lockedAnswerId: quoteAnswer.figure.id,
          });
        }
      },

      submitGuess: (figure) => {
        const { answer, guesses, gameStatus, category, mode, roundCompleted, roundKey } = get();
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

        // Mark as completed if game ended
        if (newStatus !== 'playing') {
          const gameKey = `${category}-${mode}-${roundKey}`;
          updates.roundCompleted = { ...roundCompleted, [gameKey]: true };
          updates.lockedAnswerId = null; // Clear lock when game ends
        }

        set(updates);
      },

      resetGame: () => {
        set({
          guesses: [],
          gameStatus: 'playing',
          hintsRevealed: 0,
          lockedAnswerId: null,
        });
        get().initializeGame();
      },
    }),
    {
      name: 'islamic-game-storage',
      partialize: (state) => ({
        category: state.category,
        mode: state.mode,
        roundKey: state.roundKey,
        roundCompleted: state.roundCompleted,
        guesses: state.guesses,
        gameStatus: state.gameStatus,
        hintsRevealed: state.hintsRevealed,
        lockedAnswerId: state.lockedAnswerId,
      }),
    }
  )
);

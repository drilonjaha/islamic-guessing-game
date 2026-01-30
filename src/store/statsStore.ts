import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Category, GameStats } from '@/types';

interface StatsState {
  stats: GameStats;
  categoryStats: Record<Category, GameStats>;
  recordGame: (won: boolean, attempts: number, category: Category) => void;
  getStats: (category?: Category) => GameStats;
}

const initialStats: GameStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
};

export const useStatsStore = create<StatsState>()(
  persist(
    (set, get) => ({
      stats: { ...initialStats },
      categoryStats: {
        prophet: { ...initialStats },
        sahaba: { ...initialStats },
        tabieen: { ...initialStats },
      },

      recordGame: (won, attempts, category) => {
        const { stats, categoryStats } = get();

        // Update overall stats
        const newStats = { ...stats };
        newStats.gamesPlayed++;
        if (won) {
          newStats.gamesWon++;
          newStats.currentStreak++;
          newStats.maxStreak = Math.max(newStats.maxStreak, newStats.currentStreak);
          newStats.guessDistribution = {
            ...newStats.guessDistribution,
            [attempts]: (newStats.guessDistribution[attempts] || 0) + 1,
          };
        } else {
          newStats.currentStreak = 0;
        }

        // Update category-specific stats
        const newCategoryStats = { ...categoryStats };
        const catStats = { ...newCategoryStats[category] };
        catStats.gamesPlayed++;
        if (won) {
          catStats.gamesWon++;
          catStats.currentStreak++;
          catStats.maxStreak = Math.max(catStats.maxStreak, catStats.currentStreak);
          catStats.guessDistribution = {
            ...catStats.guessDistribution,
            [attempts]: (catStats.guessDistribution[attempts] || 0) + 1,
          };
        } else {
          catStats.currentStreak = 0;
        }
        newCategoryStats[category] = catStats;

        set({ stats: newStats, categoryStats: newCategoryStats });
      },

      getStats: (category) => {
        if (category) {
          return get().categoryStats[category];
        }
        return get().stats;
      },
    }),
    {
      name: 'islamic-game-stats',
    }
  )
);

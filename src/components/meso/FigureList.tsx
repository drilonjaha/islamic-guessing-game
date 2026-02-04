'use client';

import { useState, useMemo } from 'react';
import { IslamicFigure, Category } from '@/types';
import { LearningContent } from '@/types/learning';
import { englishLabels, getLearningContentById } from '@/data/learning';
import { FigureCard } from './FigureCard';
import { ViewToggle } from './ViewToggle';
import { searchFiguresByName, sortFiguresByName, sortFiguresByEra } from '@/lib/learning-utils';

interface FigureListProps {
  figures: IslamicFigure[];
  category: Category;
  title: string;
}

type SortOption = 'name' | 'era';

export function FigureList({ figures, category, title }: FigureListProps) {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('name');

  // Get learning content for each figure
  const figuresWithLearning = useMemo(() => {
    return figures.map(figure => ({
      figure,
      learningContent: getLearningContentById(figure.id),
    }));
  }, [figures]);

  // Filter and sort
  const filteredFigures = useMemo(() => {
    let result = figuresWithLearning;

    // Search
    if (searchQuery) {
      const matchingFigures = searchFiguresByName(figures, searchQuery);
      const matchingIds = new Set(matchingFigures.map(f => f.id));
      result = result.filter(({ figure }) => matchingIds.has(figure.id));
    }

    // Sort
    const sortedFigures = sortBy === 'name'
      ? sortFiguresByName(result.map(r => r.figure))
      : sortFiguresByEra(result.map(r => r.figure));

    return sortedFigures.map(figure => ({
      figure,
      learningContent: getLearningContentById(figure.id),
    }));
  }, [figuresWithLearning, figures, searchQuery, sortBy]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-chunky">{title}</h1>
          <p className="text-zinc-500 mt-1">
            {filteredFigures.length} {englishLabels.landing.figuresCount}
          </p>
        </div>
        <ViewToggle view={view} onViewChange={setView} />
      </div>

      {/* Search and Sort */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={englishLabels.common.search + '...'}
            className="w-full bg-zinc-800/50 border-2 border-zinc-700 rounded-xl px-4 py-2.5 pl-10 text-white placeholder-zinc-500 focus:border-[#FFE135] focus:outline-none transition-colors"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="bg-zinc-800/50 border-2 border-zinc-700 rounded-xl px-4 py-2.5 text-white focus:border-[#FFE135] focus:outline-none transition-colors cursor-pointer"
        >
          <option value="name">A-Z</option>
          <option value="era">Kronologji</option>
        </select>
      </div>

      {/* Results */}
      {filteredFigures.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-500">{englishLabels.common.noResults}</p>
        </div>
      ) : view === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFigures.map(({ figure, learningContent }) => (
            <FigureCard
              key={figure.id}
              figure={figure}
              learningContent={learningContent}
              view="grid"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredFigures.map(({ figure, learningContent }) => (
            <FigureCard
              key={figure.id}
              figure={figure}
              learningContent={learningContent}
              view="list"
            />
          ))}
        </div>
      )}
    </div>
  );
}

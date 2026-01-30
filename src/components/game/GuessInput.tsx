'use client';

import { useState, useRef, useEffect } from 'react';
import { IslamicFigure, Category } from '@/types';
import { searchFigures, getFiguresByCategory } from '@/data';
import { cn } from '@/lib/utils';

interface GuessInputProps {
  category: Category;
  onGuess: (figure: IslamicFigure) => void;
  disabled?: boolean;
  guessedIds: string[];
}

export function GuessInput({ category, onGuess, disabled, guessedIds }: GuessInputProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<IslamicFigure[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      const results = searchFigures(query, category).filter(
        (f) => !guessedIds.includes(f.id)
      );
      setSuggestions(results.slice(0, 6));
      setShowSuggestions(true);
      setSelectedIndex(0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, category, guessedIds]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (figure: IslamicFigure) => {
    onGuess(figure);
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions[selectedIndex]) {
        handleSelect(suggestions[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const allFigures = getFiguresByCategory(category);
  const availableFigures = allFigures.filter((f) => !guessedIds.includes(f.id));

  const categoryLabel = category === 'prophet' ? 'prophet' : category === 'sahaba' ? 'sahaba' : "tabi'i";

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <svg
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FFE135]"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setShowSuggestions(true)}
          disabled={disabled}
          placeholder={`Search for a ${categoryLabel}... (${availableFigures.length} remaining)`}
          className={cn(
            'w-full pl-14 pr-6 py-5 rounded-2xl text-base font-medium',
            'bg-white/5 border-3 border-white/10',
            'text-white placeholder-zinc-500',
            'focus:outline-none focus:border-[#FFE135]/50 focus:bg-white/[0.07]',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-all'
          )}
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 z-50">
          <div className="card-bold rounded-2xl shadow-2xl overflow-hidden border-2 border-white/10">
            {suggestions.map((figure, index) => (
              <button
                key={figure.id}
                onClick={() => handleSelect(figure)}
                className={cn(
                  'w-full px-5 py-4 text-left flex items-center justify-between gap-3',
                  'transition-colors font-medium',
                  index === selectedIndex
                    ? 'bg-[#FFE135]/20 text-white'
                    : 'text-zinc-300 hover:bg-white/5'
                )}
              >
                <span className="font-bold truncate">{figure.name}</span>
                <span className="text-sm text-zinc-500 shrink-0 font-arabic">{figure.nameArabic}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

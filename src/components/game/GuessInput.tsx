'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { IslamicFigure, Category } from '@/types';
import { getFiguresByCategory } from '@/data';
import { fuzzySearch, getFigureSubtitle, highlightMatch, SearchResult } from '@/lib/fuzzy-search';
import { cn } from '@/lib/utils';

interface GuessInputProps {
  category: Category;
  onGuess: (figure: IslamicFigure) => void;
  disabled?: boolean;
  guessedIds: string[];
}

// Category icons
function CategoryIcon({ category, className }: { category: Category; className?: string }) {
  if (category === 'prophet') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  } else if (category === 'sahaba') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  } else {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
}

// Highlighted text component
function HighlightedName({ name, query, isSelected }: { name: string; query: string; isSelected?: boolean }) {
  const highlight = highlightMatch(name, query);

  if (!highlight) {
    return <span>{name}</span>;
  }

  return (
    <span>
      {highlight.before}
      <span className={cn(
        'rounded px-0.5 font-extrabold',
        isSelected
          ? 'bg-black/20 text-black'
          : 'bg-[#FFE135]/30 text-[#FFE135]'
      )}>{highlight.match}</span>
      {highlight.after}
    </span>
  );
}

export function GuessInput({ category, onGuess, disabled, guessedIds }: GuessInputProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Get available figures
  const allFigures = getFiguresByCategory(category);
  const availableFigures = allFigures.filter((f) => !guessedIds.includes(f.id));

  // Search with fuzzy matching
  useEffect(() => {
    if (query.length > 0) {
      const searchResults = fuzzySearch(availableFigures, query, 8);
      setResults(searchResults);
      setShowSuggestions(true);
      setSelectedIndex(0);
    } else {
      setResults([]);
      setShowSuggestions(false);
    }
  }, [query, availableFigures]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current && results.length > 0) {
      const selectedEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, results.length]);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key to close fullscreen
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
        setQuery('');
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isFullScreen]);

  // Focus mobile input when fullscreen opens
  useEffect(() => {
    if (isFullScreen && mobileInputRef.current) {
      setTimeout(() => mobileInputRef.current?.focus(), 100);
    }
  }, [isFullScreen]);

  // Prevent body scroll when fullscreen is open
  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullScreen]);

  const handleSelect = useCallback((figure: IslamicFigure) => {
    onGuess(figure);
    setQuery('');
    setResults([]);
    setShowSuggestions(false);
    setIsFullScreen(false);
    inputRef.current?.focus();
  }, [onGuess]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].figure);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setIsFullScreen(false);
    }
  };

  // Number key shortcuts (1-8)
  const handleNumberKey = (e: React.KeyboardEvent) => {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 8 && results[num - 1]) {
      e.preventDefault();
      handleSelect(results[num - 1].figure);
    }
  };

  const categoryLabel = category === 'prophet' ? 'prophet' : category === 'sahaba' ? 'sahaba' : "tabi'i";

  const renderSuggestionItem = (result: SearchResult, index: number, isMobile: boolean = false) => {
    const isSelected = index === selectedIndex;

    return (
      <button
        key={result.figure.id}
        onClick={() => handleSelect(result.figure)}
        className={cn(
          'w-full text-left flex items-center gap-3 transition-all active:scale-[0.98]',
          isMobile ? 'px-5 py-4' : 'px-4 py-3',
          isSelected
            ? 'bg-[#FFE135] text-black'
            : 'text-white hover:bg-white/10 active:bg-white/20'
        )}
      >
        {/* Category Icon */}
        <div className={cn(
          'shrink-0 w-10 h-10 rounded-xl flex items-center justify-center',
          isSelected ? 'bg-black/20' : 'bg-white/10'
        )}>
          <CategoryIcon
            category={result.figure.category}
            className={cn('w-5 h-5', isSelected ? 'text-black/70' : 'text-[#FFE135]')}
          />
        </div>

        {/* Name and subtitle */}
        <div className="flex-1 min-w-0">
          <div className={cn('font-bold truncate', isMobile ? 'text-base' : 'text-sm')}>
            <HighlightedName name={result.figure.name} query={query} isSelected={isSelected} />
          </div>
          <div className={cn(
            'truncate',
            isMobile ? 'text-sm' : 'text-xs',
            isSelected ? 'text-black/60' : 'text-zinc-400'
          )}>
            {getFigureSubtitle(result.figure)}
          </div>
        </div>

        {/* Arabic name */}
        <div className={cn(
          'shrink-0 font-arabic text-right',
          isMobile ? 'text-base' : 'text-sm',
          isSelected ? 'text-black/70' : 'text-zinc-400'
        )}>
          {result.figure.nameArabic}
        </div>

        {/* Number shortcut hint (desktop only) */}
        {!isMobile && index < 8 && (
          <div className={cn(
            'shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono',
            isSelected ? 'bg-black/20 text-black/60' : 'bg-white/5 text-zinc-500'
          )}>
            {index + 1}
          </div>
        )}
      </button>
    );
  };

  return (
    <>
      {/* Desktop/Tablet View */}
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
            onKeyDown={(e) => {
              handleKeyDown(e);
              handleNumberKey(e);
            }}
            onFocus={() => {
              // On mobile, open fullscreen mode
              if (window.innerWidth < 640) {
                setIsFullScreen(true);
              } else {
                query.length > 0 && setShowSuggestions(true);
              }
            }}
            disabled={disabled}
            placeholder={`Search for a ${categoryLabel}... (${availableFigures.length} remaining)`}
            className={cn(
              'w-full pl-14 pr-6 py-5 rounded-2xl text-base font-medium',
              'bg-white/5 border-3 border-white/10',
              'text-white placeholder-zinc-500',
              'focus:outline-none focus:border-[#FFE135]/50 focus:bg-white/[0.07]',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'transition-all',
              // Hide on small screens when fullscreen is available
              'sm:block'
            )}
          />
        </div>

        {/* Desktop Suggestions Dropdown */}
        {showSuggestions && results.length > 0 && !isFullScreen && (
          <div className="absolute top-full left-0 right-0 mt-3 z-50 hidden sm:block">
            <div
              ref={listRef}
              className="bg-[#0D0D0D] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#FFE135]/30 max-h-[400px] overflow-y-auto"
            >
              {results.map((result, index) => renderSuggestionItem(result, index, false))}

              {/* Help text */}
              <div className="px-4 py-2 bg-white/5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                <span>↑↓ Navigate • Enter Select • Esc Close</span>
                <span>1-8 Quick select</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Fullscreen Search Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col sm:hidden">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-white/10">
            <button
              onClick={() => {
                setIsFullScreen(false);
                setQuery('');
              }}
              className="p-2 -ml-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="flex-1 relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFE135]"
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
                ref={mobileInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Search ${categoryLabel}s...`}
                autoFocus
                className={cn(
                  'w-full pl-12 pr-4 py-4 rounded-xl text-base',
                  'bg-white/10 border-2 border-white/10',
                  'text-white placeholder-zinc-500',
                  'focus:outline-none focus:border-[#FFE135]/50',
                  'transition-all'
                )}
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto">
            {query.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 p-8">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-zinc-600">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
                <p className="text-center">
                  Type to search {availableFigures.length} {categoryLabel}s
                </p>
                <p className="text-sm text-zinc-600 mt-2 text-center">
                  Try different spellings like "Omar" or "Umar"
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 p-8">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-zinc-600">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 15s1.5-2 4-2 4 2 4 2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
                <p className="text-center">No matches for "{query}"</p>
                <p className="text-sm text-zinc-600 mt-2 text-center">
                  Try a different spelling
                </p>
              </div>
            ) : (
              <div className="divide-y divide-white/5">
                {results.map((result, index) => renderSuggestionItem(result, index, true))}
              </div>
            )}
          </div>

          {/* Bottom safe area */}
          <div className="h-safe-area-inset-bottom bg-[#050505]" />
        </div>
      )}
    </>
  );
}

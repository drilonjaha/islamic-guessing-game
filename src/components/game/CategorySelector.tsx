'use client';

import { Category } from '@/types';
import { CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface CategorySelectorProps {
  selected: Category;
  onSelect: (category: Category) => void;
  disabled?: boolean;
}

export function CategorySelector({ selected, onSelect, disabled }: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          disabled={disabled}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-all',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            selected === value
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

'use client';

import { Category } from '@/types';
import { CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface CategorySelectorProps {
  selected: Category;
  onSelect: (category: Category) => void;
  disabled?: boolean;
}

const CATEGORY_COLORS: Record<Category, { bg: string; text: string; border: string }> = {
  prophet: { bg: 'bg-[#00D4FF]', text: 'text-black', border: 'border-[#00D4FF]/30' },
  sahaba: { bg: 'bg-[#A855F7]', text: 'text-white', border: 'border-[#A855F7]/30' },
  tabieen: { bg: 'bg-[#FF4757]', text: 'text-white', border: 'border-[#FF4757]/30' },
};

export function CategorySelector({ selected, onSelect, disabled }: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map(({ value, label }) => {
        const colors = CATEGORY_COLORS[value];
        const isSelected = selected === value;
        return (
          <button
            key={value}
            onClick={() => onSelect(value)}
            disabled={disabled}
            className={cn(
              'px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wide transition-all',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'border-2',
              isSelected
                ? `${colors.bg} ${colors.text} shadow-lg`
                : `text-zinc-400 hover:text-white border-white/10 hover:${colors.border}`
            )}
            style={isSelected ? { boxShadow: `0 4px 20px ${value === 'prophet' ? 'rgba(0, 212, 255, 0.3)' : value === 'sahaba' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 71, 87, 0.3)'}` } : {}}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

'use client';

import { GameMode } from '@/types';
import { GAME_MODES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ModeSelectorProps {
  selected: GameMode;
  onSelect: (mode: GameMode) => void;
  disabled?: boolean;
}

export function ModeSelector({ selected, onSelect, disabled }: ModeSelectorProps) {
  return (
    <div className="flex rounded-lg bg-white/5 p-1">
      {GAME_MODES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          disabled={disabled}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-md transition-all',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            selected === value
              ? 'bg-white/10 text-white shadow-sm'
              : 'text-zinc-400 hover:text-white'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

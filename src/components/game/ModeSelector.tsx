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
    <div className="flex rounded-xl bg-white/5 p-1.5 border-2 border-white/10">
      {GAME_MODES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          disabled={disabled}
          className={cn(
            'px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-lg transition-all',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            selected === value
              ? 'bg-[#FFE135] text-black shadow-lg shadow-[#FFE135]/20'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

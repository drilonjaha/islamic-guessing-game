'use client';

import { cn } from '@/lib/utils';
import { AttributeResult } from '@/types';
import { MATCH_COLORS } from '@/lib/comparisons';

interface AttributeCellProps {
  result: AttributeResult;
  delay?: number;
}

export function AttributeCell({ result, delay = 0 }: AttributeCellProps) {
  const displayValue =
    typeof result.guessValue === 'boolean'
      ? result.guessValue
        ? 'Yes'
        : 'No'
      : result.guessValue;

  return (
    <div
      className={cn(
        'shrink-0 flex flex-col items-center justify-center',
        'rounded-xl w-16 sm:w-20 h-12 sm:h-14',
        'text-white font-bold',
        'transition-all duration-300',
        MATCH_COLORS[result.result]
      )}
      style={{
        animationDelay: `${delay}ms`,
        animation: 'flipIn 0.4s ease-out forwards',
      }}
    >
      <span className="text-[9px] sm:text-[10px] font-bold text-center leading-tight px-0.5 line-clamp-2 uppercase">
        {displayValue}
      </span>
      {result.hint && (
        <span className="text-xs mt-0.5 font-black">
          {result.hint === 'higher' ? '↑' : '↓'}
        </span>
      )}
    </div>
  );
}

'use client';

import { GuessResult } from '@/types';
import { AttributeCell } from './AttributeCell';
import { cn } from '@/lib/utils';

interface GuessRowProps {
  result: GuessResult;
  rowIndex: number;
}

export function GuessRow({ result, rowIndex }: GuessRowProps) {
  return (
    <div className={cn(
      "flex items-center gap-1.5",
      result.isCorrect && "animate-pulse"
    )}>
      <div
        className={cn(
          'shrink-0 px-1 rounded-xl font-bold text-[10px] sm:text-xs uppercase',
          'w-20 sm:w-24 h-12 sm:h-14',
          'flex items-center justify-center text-center leading-tight',
          result.isCorrect
            ? 'bg-[#FFE135] text-black shadow-lg shadow-[#FFE135]/50'
            : 'bg-white/10 text-white'
        )}
      >
        <span className="line-clamp-2">{result.figure.name}</span>
      </div>

      {result.attributes.map((attr, index) => (
        <AttributeCell
          key={attr.attribute}
          result={attr}
          delay={rowIndex * 80 + index * 80}
        />
      ))}
    </div>
  );
}

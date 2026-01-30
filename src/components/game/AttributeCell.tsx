'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AttributeResult, MatchResult } from '@/types';
import { MATCH_COLORS } from '@/lib/comparisons';

interface AttributeCellProps {
  result: AttributeResult;
  delay?: number;
}

const TOOLTIP_COLORS: Record<MatchResult, { bg: string; border: string; accent: string }> = {
  exact: { bg: 'bg-emerald-950', border: 'border-emerald-500', accent: 'text-emerald-400' },
  partial: { bg: 'bg-amber-950', border: 'border-amber-500', accent: 'text-amber-400' },
  wrong: { bg: 'bg-red-950', border: 'border-red-500', accent: 'text-red-400' },
};


function getTooltipContent(result: AttributeResult): { title: string; description: string } {
  const { attribute, result: matchResult, hint, guessValue } = result;

  const formatValue = (v: unknown) => {
    if (typeof v === 'boolean') return v ? 'Yes' : 'No';
    return String(v);
  };

  const guessDisplay = formatValue(guessValue);

  let title = '';
  let description = '';

  if (matchResult === 'exact') {
    title = 'Exact Match!';
    description = `${attribute} is correct.`;
  } else if (matchResult === 'partial') {
    title = 'Close!';
    switch (attribute) {
      case 'Era':
        description = `"${guessDisplay}" is within 1000 years of the answer.`;
        break;
      case 'Region':
        description = `"${guessDisplay}" is in the same general region.`;
        break;
      case 'Mentions':
        description = `${guessDisplay} mentions is in a nearby range.`;
        break;
      case 'Conversion':
        description = `"${guessDisplay}" is an adjacent conversion period.`;
        break;
      case 'Generation':
        description = `"${guessDisplay}" is an adjacent generation.`;
        break;
      case 'Teachers':
        description = `Some teachers overlap with the answer.`;
        break;
      case 'Specialty':
        description = `Some specialties overlap with the answer.`;
        break;
      case 'Students':
        description = `Some students overlap with the answer.`;
        break;
      case 'Death Year':
        description = `${guessDisplay} AH is within 20% of the answer.`;
        break;
      case 'Hadith':
        description = `${guessDisplay} hadiths is within 20% of the answer.`;
        break;
      default:
        description = `"${guessDisplay}" is similar to the answer.`;
    }
  } else {
    title = 'Wrong';
    description = `The answer's ${attribute.toLowerCase()} is not "${guessDisplay}".`;
  }

  // Add hint explanation
  if (hint) {
    const arrow = hint === 'higher' ? '↑' : '↓';
    const direction = hint === 'higher' ? 'higher' : 'lower';
    description += ` ${arrow} The answer is ${direction}.`;
  }

  return { title, description };
}

export function AttributeCell({ result, delay = 0 }: AttributeCellProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const displayValue =
    typeof result.guessValue === 'boolean'
      ? result.guessValue
        ? 'Yes'
        : 'No'
      : result.guessValue;

  const { title, description } = getTooltipContent(result);
  const tooltipStyle = TOOLTIP_COLORS[result.result];

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      <div
        className={cn(
          'shrink-0 flex flex-col items-center justify-center cursor-pointer',
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

      {/* Tooltip - shows below the cell */}
      {showTooltip && (
        <div
          className={cn(
            'absolute z-50',
            'w-52 sm:w-64',
            'top-full left-1/2 -translate-x-1/2 mt-3',
            'animate-tooltip-down'
          )}
        >
          {/* Arrow pointing up */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[-1px]">
            <div className={cn(
              'border-8 border-transparent',
              result.result === 'exact' ? 'border-b-emerald-500' :
              result.result === 'partial' ? 'border-b-amber-500' : 'border-b-red-500'
            )}></div>
          </div>
          <div
            className={cn(
              'rounded-2xl overflow-hidden',
              'border-2',
              'shadow-xl',
              tooltipStyle.bg,
              tooltipStyle.border
            )}
          >
            {/* Header */}
            <div className={cn(
              'px-4 py-2 font-black text-sm uppercase tracking-wide',
              tooltipStyle.accent
            )}>
              {title}
            </div>
            {/* Body */}
            <div className="px-4 pb-3 text-white/90 text-xs leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

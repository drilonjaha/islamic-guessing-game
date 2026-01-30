'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AttributeResult } from '@/types';
import { MATCH_COLORS } from '@/lib/comparisons';

interface AttributeCellProps {
  result: AttributeResult;
  delay?: number;
}

function getTooltipText(result: AttributeResult): string {
  const { attribute, result: matchResult, hint, guessValue, value } = result;

  // Format display values
  const formatValue = (v: unknown) => {
    if (typeof v === 'boolean') return v ? 'Yes' : 'No';
    return String(v);
  };

  const guessDisplay = formatValue(guessValue);
  const answerDisplay = formatValue(value);

  // Build explanation based on match result
  let colorExplanation = '';
  if (matchResult === 'exact') {
    colorExplanation = `Correct! ${attribute} matches exactly.`;
  } else if (matchResult === 'partial') {
    // Specific explanations for partial matches
    switch (attribute) {
      case 'Era':
        colorExplanation = `Close! "${guessDisplay}" is within 1000 years of the answer.`;
        break;
      case 'Region':
        colorExplanation = `Close! "${guessDisplay}" is in the same general region.`;
        break;
      case 'Mentions':
        colorExplanation = `Close! ${guessDisplay} mentions is in a nearby range.`;
        break;
      case 'Conversion':
        colorExplanation = `Close! "${guessDisplay}" is an adjacent conversion period.`;
        break;
      case 'Generation':
        colorExplanation = `Close! "${guessDisplay}" is an adjacent generation.`;
        break;
      case 'Teachers':
        colorExplanation = `Partial match! Some teachers overlap.`;
        break;
      case 'Specialty':
        colorExplanation = `Partial match! Some specialties overlap.`;
        break;
      case 'Students':
        colorExplanation = `Partial match! Some students overlap.`;
        break;
      case 'Death Year':
      case 'Hadith':
        colorExplanation = `Close! ${guessDisplay} is within 20% of the answer.`;
        break;
      default:
        colorExplanation = `Close! "${guessDisplay}" is similar to the answer.`;
    }
  } else {
    colorExplanation = `Wrong. The answer's ${attribute.toLowerCase()} is different from "${guessDisplay}".`;
  }

  // Add hint explanation for arrows
  let hintExplanation = '';
  if (hint) {
    const direction = hint === 'higher' ? 'higher' : 'lower';
    switch (attribute) {
      case 'Mentions':
        hintExplanation = ` The correct number of Quran mentions is ${direction} than ${guessDisplay}.`;
        break;
      case 'Hadith':
        hintExplanation = ` The correct hadith count is ${direction} than ${guessDisplay}.`;
        break;
      case 'Death Year':
        hintExplanation = ` The correct death year is ${direction} than ${guessDisplay} AH.`;
        break;
      default:
        hintExplanation = ` The correct value is ${direction}.`;
    }
  }

  return colorExplanation + hintExplanation;
}

export function AttributeCell({ result, delay = 0 }: AttributeCellProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const displayValue =
    typeof result.guessValue === 'boolean'
      ? result.guessValue
        ? 'Yes'
        : 'No'
      : result.guessValue;

  const tooltipText = getTooltipText(result);

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

      {/* Tooltip */}
      {showTooltip && (
        <div
          className={cn(
            'absolute z-50 px-3 py-2 text-xs font-medium text-white',
            'bg-black/95 rounded-lg shadow-lg border border-white/20',
            'w-48 sm:w-56',
            'bottom-full left-1/2 mb-2',
            'animate-tooltip'
          )}
        >
          <div className="text-left leading-relaxed">
            {tooltipText}
          </div>
          {/* Arrow pointing down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
            <div className="border-8 border-transparent border-t-black/95"></div>
          </div>
        </div>
      )}
    </div>
  );
}

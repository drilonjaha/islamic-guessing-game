'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { AttributeResult, MatchResult } from '@/types';
import { MATCH_COLORS } from '@/lib/comparisons';

interface AttributeCellProps {
  result: AttributeResult;
  delay?: number;
}

function getTooltipText(result: AttributeResult): string {
  const { attribute, result: matchResult, hint, guessValue } = result;

  const formatValue = (v: unknown) => {
    if (typeof v === 'boolean') return v ? 'Yes' : 'No';
    return String(v);
  };

  const guessDisplay = formatValue(guessValue);
  const isYes = guessValue === true;
  const isNo = guessValue === false;

  // Generate natural language descriptions
  if (matchResult === 'exact') {
    switch (attribute) {
      case 'Era':
        return `Correct! The answer is from ${guessDisplay}.`;
      case 'Region':
        return `Correct! The answer is from ${guessDisplay}.`;
      case 'Tribe':
        return `Correct! The answer is from ${guessDisplay}.`;
      case 'Mentions':
        return `Correct! The answer is mentioned ${guessDisplay} times in the Quran.`;
      case 'Book':
        return guessDisplay === 'None'
          ? `Correct! The answer had no book revealed to them.`
          : `Correct! The answer had the ${guessDisplay} revealed to them.`;
      case 'Ul al-Azm':
        return isYes
          ? `Correct! The answer is one of the Ul al-Azm (5 greatest prophets).`
          : `Correct! The answer is not one of the Ul al-Azm.`;
      case 'King':
        return isYes
          ? `Correct! The answer was a king.`
          : `Correct! The answer was not a king.`;
      case 'Gender':
        return `Correct! The answer is ${guessDisplay.toLowerCase()}.`;
      case 'Conversion':
        return `Correct! The answer converted during ${guessDisplay}.`;
      case 'Ashara':
        return isYes
          ? `Correct! The answer is one of the 10 promised Paradise.`
          : `Correct! The answer is not one of the 10 promised Paradise.`;
      case 'Badr':
        return isYes
          ? `Correct! The answer participated in Badr.`
          : `Correct! The answer did not participate in Badr.`;
      case 'Hadith':
        return `Correct! The answer narrated ${guessDisplay} hadiths.`;
      case 'Relation':
        return guessDisplay === 'none'
          ? `Correct! The answer had no family relation to the Prophet.`
          : `Correct! The answer was a ${guessDisplay} of the Prophet.`;
      case 'Martyred':
        return isYes
          ? `Correct! The answer was martyred.`
          : `Correct! The answer was not martyred.`;
      case 'Abyssinia':
        return isYes
          ? `Correct! The answer migrated to Abyssinia.`
          : `Correct! The answer did not migrate to Abyssinia.`;
      default:
        return `Correct! The answer's ${attribute.toLowerCase()} is ${guessDisplay}.`;
    }
  }

  if (matchResult === 'wrong') {
    switch (attribute) {
      case 'Era':
        return `The answer is not from ${guessDisplay}.`;
      case 'Region':
        return `The answer is not from ${guessDisplay}.`;
      case 'Tribe':
        return `The answer is not from ${guessDisplay}.`;
      case 'Mentions':
        const dir = hint === 'higher' ? 'more' : 'fewer';
        return `The answer is mentioned ${dir} than ${guessDisplay} times.`;
      case 'Book':
        return guessDisplay === 'None'
          ? `The answer had a book revealed to them.`
          : `The answer did not have the ${guessDisplay} revealed.`;
      case 'Ul al-Azm':
        return isYes
          ? `The answer is not one of the Ul al-Azm (5 greatest prophets).`
          : `The answer is one of the Ul al-Azm (5 greatest prophets).`;
      case 'King':
        return isYes
          ? `The answer was not a king.`
          : `The answer was a king.`;
      case 'Gender':
        return `The answer is not ${guessDisplay.toLowerCase()}.`;
      case 'Conversion':
        return `The answer did not convert during ${guessDisplay}.`;
      case 'Ashara':
        return isYes
          ? `The answer is not one of the 10 promised Paradise.`
          : `The answer is one of the 10 promised Paradise.`;
      case 'Badr':
        return isYes
          ? `The answer did not participate in Badr.`
          : `The answer participated in Badr.`;
      case 'Hadith':
        const hadithDir = hint === 'higher' ? 'more' : 'fewer';
        return `The answer narrated ${hadithDir} than ${guessDisplay} hadiths.`;
      case 'Relation':
        return guessDisplay === 'none'
          ? `The answer has a family relation to the Prophet.`
          : `The answer was not a ${guessDisplay} of the Prophet.`;
      case 'Martyred':
        return isYes
          ? `The answer was not martyred.`
          : `The answer was martyred.`;
      case 'Abyssinia':
        return isYes
          ? `The answer did not migrate to Abyssinia.`
          : `The answer migrated to Abyssinia.`;
      case 'School':
        return `The answer is not from the ${guessDisplay} school.`;
      case 'Generation':
        return `The answer is not from the ${guessDisplay} generation.`;
      case 'Death Year':
        const yearDir = hint === 'higher' ? 'later' : 'earlier';
        return `The answer died ${yearDir} than ${guessDisplay} AH.`;
      case 'Birth City':
        return `The answer was not born in ${guessDisplay}.`;
      case 'Role':
        return `The answer's role was not ${guessDisplay}.`;
      default:
        return `The answer's ${attribute.toLowerCase()} is not ${guessDisplay}.`;
    }
  }

  // Partial match
  switch (attribute) {
    case 'Era':
      return `Close! The answer is from a nearby time period.`;
    case 'Region':
      return `Close! The answer is from the same region.`;
    case 'Mentions':
      const mentionDir = hint === 'higher' ? 'more' : 'fewer';
      return `Close! The answer is mentioned ${mentionDir} times, but nearby.`;
    case 'Conversion':
      return `Close! The answer converted in an adjacent period.`;
    case 'Generation':
      return `Close! The answer is from an adjacent generation.`;
    case 'Teachers':
      return `Some teachers overlap with the answer.`;
    case 'Specialty':
      return `Some specialties overlap with the answer.`;
    case 'Students':
      return `Some students overlap with the answer.`;
    case 'Death Year':
      const deathDir = hint === 'higher' ? 'later' : 'earlier';
      return `Close! The answer died ${deathDir}, but nearby.`;
    case 'Hadith':
      const hDir = hint === 'higher' ? 'more' : 'fewer';
      return `Close! The answer narrated ${hDir} hadiths, but nearby.`;
    default:
      return `Close! The answer is similar.`;
  }
}

export function AttributeCell({ result, delay = 0 }: AttributeCellProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const displayValue =
    typeof result.guessValue === 'boolean'
      ? result.guessValue
        ? 'Yes'
        : 'No'
      : result.guessValue;

  const tooltipText = getTooltipText(result);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isHovered && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const tooltipWidth = 260;

      let left = rect.left + rect.width / 2 - tooltipWidth / 2;
      if (left < 10) left = 10;
      if (left + tooltipWidth > window.innerWidth - 10) {
        left = window.innerWidth - tooltipWidth - 10;
      }

      setPosition({
        top: rect.bottom + 8,
        left: left,
      });
    }
  }, [isHovered]);

  const borderColor = result.result === 'exact' ? '#10B981' : result.result === 'partial' ? '#F59E0B' : '#EF4444';

  const tooltip = isHovered && mounted ? createPortal(
    <div
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        width: 260,
        zIndex: 99999,
      }}
      className="animate-pop"
    >
      <div
        className="bg-[#0D0D0D] rounded-xl p-3 shadow-2xl"
        style={{ border: `2px solid ${borderColor}` }}
      >
        <div className="text-white text-xs leading-relaxed">{tooltipText}</div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            'shrink-0 flex flex-col items-center justify-center cursor-help',
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
      </div>
      {tooltip}
    </>
  );
}

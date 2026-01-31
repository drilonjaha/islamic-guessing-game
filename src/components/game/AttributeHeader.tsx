'use client';

import { useState } from 'react';
import { Category } from '@/types';
import { getAttributesForCategory } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface AttributeHeaderProps {
  category: Category;
}

// Descriptions for each attribute - using simple objects without special characters in values
const PROPHET_DESCRIPTIONS: Record<string, string> = {
  'Era': 'The time period when this prophet lived',
  'Region': 'The geographic area where they primarily lived and taught',
  'Tribe': 'The tribe or people they belonged to or were sent to',
  'Mentions': 'How many times they are mentioned by name in the Quran',
  'Book': 'The holy scripture revealed to them, if any',
  'Ul al-Azm': 'One of the 5 greatest prophets - Nuh, Ibrahim, Musa, Isa, Muhammad',
  'King': 'Whether they were also a king or ruler',
};

const SAHABA_DESCRIPTIONS: Record<string, string> = {
  'Gender': 'Male or female companion',
  'Tribe': 'Their tribal affiliation',
  'Conversion': 'When they accepted Islam - Early Makkah, Late Makkah, Early Madinah, Late Madinah, or Conquest',
  'Ashara': 'One of the 10 companions promised Paradise',
  'Badr': 'Whether they participated in the Battle of Badr',
  'Hadith': 'Approximate number of hadiths they narrated',
  'Relation': 'Family relation to the Prophet - wife, daughter, son-in-law, uncle, cousin, or none',
  'Martyred': 'Whether they died as a martyr',
  'Abyssinia': 'Whether they migrated to Abyssinia during persecution',
};

const TABIEEN_DESCRIPTIONS: Record<string, string> = {
  'School': 'The city or school of knowledge they were associated with',
  'Generation': 'Senior, Middle, or Junior generation of Tabieen',
  'Teachers': 'The Sahaba or scholars they learned from',
  'Specialty': 'Their area of expertise - Fiqh, Hadith, Tafsir, Qiraat, or Zuhd',
  'Death Year': 'The year they passed away in Hijri calendar',
  'Birth City': 'The city where they were born',
  'Role': 'Their primary role - Judge, Mufti, Teacher, Scholar, or Ascetic',
  'Students': 'Famous scholars who learned from them',
};

function getDescription(category: Category, attribute: string): string {
  if (category === 'prophet') {
    return PROPHET_DESCRIPTIONS[attribute] || 'No description available';
  }
  if (category === 'sahaba') {
    return SAHABA_DESCRIPTIONS[attribute] || 'No description available';
  }
  if (category === 'tabieen') {
    return TABIEEN_DESCRIPTIONS[attribute] || 'No description available';
  }
  return 'No description available';
}

function AttributeTooltip({ attribute, category }: { attribute: string; category: Category }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const description = getDescription(category, attribute);

  return (
    <>
      {/* Backdrop to close tooltip when clicking outside */}
      {showTooltip && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => setShowTooltip(false)}
        />
      )}
      <div
        className="relative shrink-0 w-16 sm:w-20"
        onClick={() => setShowTooltip(!showTooltip)}
      >
        <div className={cn(
          "text-center text-[10px] uppercase tracking-wider font-bold py-2 cursor-pointer transition-colors flex items-center justify-center gap-0.5",
          showTooltip ? "text-[#FFE135]" : "text-zinc-500 hover:text-zinc-300"
        )}>
          <span>{attribute}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>

        {showTooltip && (
          <div
            className={cn(
              'absolute z-[9999]',
              'w-52 sm:w-64',
              'bottom-full left-1/2 -translate-x-1/2 mb-3',
              'animate-tooltip-up'
            )}
          >
            <div className="rounded-2xl bg-[#0D0D0D] border-2 border-[#FFE135] p-4 shadow-2xl">
              <div className="text-[#FFE135] font-black text-sm uppercase mb-2">{attribute}</div>
              <div className="text-white text-xs leading-relaxed">{description}</div>
            </div>
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px]">
              <div className="border-8 border-transparent border-t-[#FFE135]"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export function AttributeHeader({ category }: AttributeHeaderProps) {
  const attributes = getAttributesForCategory(category);

  return (
    <div className="flex items-center gap-1.5">
      <div className="shrink-0 w-20 sm:w-24 text-center text-[10px] text-[#FFE135] uppercase tracking-wider font-bold py-2">
        Name
      </div>
      {attributes.map((attr) => (
        <AttributeTooltip key={attr} attribute={attr} category={category} />
      ))}
    </div>
  );
}

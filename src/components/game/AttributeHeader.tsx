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
    <div
      className="relative shrink-0 w-16 sm:w-20"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      <div className="text-center text-[10px] text-zinc-500 uppercase tracking-wider font-bold py-2 cursor-help hover:text-[#FFE135] transition-colors">
        {attribute}
      </div>

      {showTooltip && (
        <div
          className={cn(
            'fixed z-[9999]',
            'w-48 sm:w-56',
            'animate-tooltip-up'
          )}
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 'calc(100% + 12px)',
            position: 'absolute',
          }}
        >
          <div className="rounded-xl bg-[#1a1a1a] border-2 border-[#FFE135]/30 p-3 shadow-2xl">
            <div className="text-[#FFE135] font-bold text-xs uppercase mb-1">{attribute}</div>
            <div className="text-white/80 text-xs leading-relaxed">{description}</div>
          </div>
          {/* Arrow pointing down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px]">
            <div className="border-8 border-transparent border-t-[#1a1a1a]"></div>
          </div>
        </div>
      )}
    </div>
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

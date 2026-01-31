'use client';

import { useState } from 'react';
import { Category } from '@/types';
import { getAttributesForCategory } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface AttributeHeaderProps {
  category: Category;
}

// Descriptions for each attribute
const ATTRIBUTE_DESCRIPTIONS: Record<string, Record<string, string>> = {
  prophet: {
    Era: 'The time period when this prophet lived (e.g., 13th Century BCE)',
    Region: 'The geographic area where they primarily lived and taught',
    Tribe: 'The tribe or people they belonged to or were sent to',
    Mentions: 'How many times they are mentioned by name in the Quran',
    Book: 'The holy scripture revealed to them (if any)',
    'Ul al-Azm': 'One of the 5 greatest prophets: Nuh, Ibrahim, Musa, Isa, Muhammad (PBUT)',
    King: 'Whether they were also a king/ruler (like Dawud and Sulaiman)',
  },
  sahaba: {
    Gender: 'Male or female companion',
    Tribe: 'Their tribal affiliation (e.g., Quraysh, Aws, Khazraj)',
    Conversion: 'When they accepted Islam: Early Makkah, Late Makkah, Early Madinah, Late Madinah, or Conquest of Makkah',
    Ashara: 'One of the 10 companions promised Paradise (Ashara Mubashareen)',
    Badr: 'Whether they participated in the Battle of Badr',
    Hadith: 'Approximate number of hadiths they narrated',
    Relation: 'Family relation to Prophet Muhammad (PBUH): wife, daughter, son-in-law, uncle, cousin, or none',
    Martyred: 'Whether they died as a martyr (shaheed)',
    Abyssinia: 'Whether they migrated to Abyssinia (Ethiopia) during persecution',
  },
  tabieen: {
    School: 'The city/school of knowledge they were associated with (Madinah, Makkah, Kufa, Basra, etc.)',
    Generation: 'Senior (met many Sahaba), Middle, or Junior Tabi\'i',
    Teachers: 'The Sahaba or scholars they learned from',
    Specialty: 'Their area of expertise: Fiqh, Hadith, Tafsir, Qiraat, or Zuhd (asceticism)',
    'Death Year': 'The year they passed away (in Hijri calendar)',
    'Birth City': 'The city where they were born',
    Role: 'Their primary role: Judge, Mufti, Teacher, Scholar, or Ascetic',
    Students: 'Famous scholars who learned from them',
  },
};

function AttributeTooltip({ attribute, category }: { attribute: string; category: Category }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const description = ATTRIBUTE_DESCRIPTIONS[category]?.[attribute] || '';

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

      {showTooltip && description && (
        <div
          className={cn(
            'absolute z-50',
            'w-48 sm:w-56',
            'top-full left-1/2 -translate-x-1/2 mt-2',
            'animate-tooltip-down'
          )}
        >
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[-1px]">
            <div className="border-8 border-transparent border-b-[#1a1a1a]"></div>
          </div>
          <div className="rounded-xl bg-[#1a1a1a] border-2 border-[#FFE135]/30 p-3 shadow-xl">
            <div className="text-[#FFE135] font-bold text-xs uppercase mb-1">{attribute}</div>
            <div className="text-white/80 text-xs leading-relaxed">{description}</div>
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

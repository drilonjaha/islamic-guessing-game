'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Category } from '@/types';
import { getAttributesForCategory } from '@/lib/constants';

interface AttributeHeaderProps {
  category: Category;
}

// Descriptions for each attribute
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
    return PROPHET_DESCRIPTIONS[attribute] || '';
  }
  if (category === 'sahaba') {
    return SAHABA_DESCRIPTIONS[attribute] || '';
  }
  if (category === 'tabieen') {
    return TABIEEN_DESCRIPTIONS[attribute] || '';
  }
  return '';
}

function AttributeTooltip({ attribute, category }: { attribute: string; category: Category }) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const description = getDescription(category, attribute);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isHovered && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const tooltipWidth = 240;

      let left = rect.left + rect.width / 2 - tooltipWidth / 2;
      // Keep within viewport
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

  const tooltip = isHovered && mounted && description ? createPortal(
    <div
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        width: 240,
        zIndex: 99999,
      }}
      className="animate-pop"
    >
      <div className="bg-[#0D0D0D] border-2 border-[#FFE135] rounded-xl p-3 shadow-2xl">
        <div className="text-[#FFE135] font-bold text-xs uppercase mb-1">{attribute}</div>
        <div className="text-white text-xs leading-relaxed">{description}</div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div
        ref={ref}
        className="shrink-0 w-16 sm:w-20 cursor-help"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center text-[10px] text-zinc-500 uppercase tracking-wider font-bold py-2 hover:text-[#FFE135] transition-colors flex items-center justify-center gap-0.5">
          <span>{attribute}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
      </div>
      {tooltip}
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

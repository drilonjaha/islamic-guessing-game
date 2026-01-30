'use client';

import { Category } from '@/types';
import { getAttributesForCategory } from '@/lib/constants';

interface AttributeHeaderProps {
  category: Category;
}

export function AttributeHeader({ category }: AttributeHeaderProps) {
  const attributes = getAttributesForCategory(category);

  return (
    <div className="flex items-center gap-1.5">
      <div className="shrink-0 w-20 sm:w-24 text-center text-[10px] text-zinc-500 uppercase tracking-wider font-medium py-2">
        Name
      </div>
      {attributes.map((attr) => (
        <div
          key={attr}
          className="shrink-0 w-16 sm:w-20 text-center text-[10px] text-zinc-500 uppercase tracking-wider font-medium py-2"
        >
          {attr}
        </div>
      ))}
    </div>
  );
}

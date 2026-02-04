'use client';

import Link from 'next/link';
import { IslamicFigure, Category } from '@/types';
import { LearningContent } from '@/types/learning';
import { englishLabels } from '@/data/learning';
import { getCategoryPath } from '@/lib/learning-utils';

interface FigureCardProps {
  figure: IslamicFigure;
  learningContent?: LearningContent;
  view: 'grid' | 'list';
}

const categoryColors: Record<Category, { gradient: string; badge: string }> = {
  prophet: {
    gradient: 'from-[#FF4757] to-[#FF6B6B]',
    badge: 'bg-[#FF4757]',
  },
  sahaba: {
    gradient: 'from-[#00D4FF] to-[#00B4D8]',
    badge: 'bg-[#00D4FF]',
  },
  tabieen: {
    gradient: 'from-[#A855F7] to-[#9333EA]',
    badge: 'bg-[#A855F7]',
  },
};

export function FigureCard({ figure, learningContent, view }: FigureCardProps) {
  const colors = categoryColors[figure.category];
  const href = `/meso/${getCategoryPath(figure.category)}/${figure.id}`;
  const isComplete = learningContent?.isComplete ?? false;

  if (view === 'list') {
    return (
      <Link href={href} className="group block">
        <div className="flex items-center gap-4 p-4 card-bold hover:border-[#FFE135] transition-all">
          {/* Name Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg text-white truncate group-hover:text-[#FFE135] transition-colors">
                {figure.name}
              </h3>
              <span className="text-zinc-500 text-lg">{figure.nameArabic}</span>
            </div>
            {learningContent?.bio.summary && (
              <p className="text-sm text-zinc-400 truncate mt-1">
                {learningContent.bio.summary}
              </p>
            )}
          </div>

          {/* Era Badge */}
          <div className="hidden sm:block">
            <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
              {figure.era}
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            {!isComplete && (
              <span className="text-xs text-zinc-600">
                {englishLabels.status.incomplete}
              </span>
            )}
            <svg
              className="w-5 h-5 text-zinc-500 group-hover:text-[#FFE135] transform group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  // Grid view
  return (
    <Link href={href} className="group block">
      <div className="card-bold p-5 h-full hover:border-[#FFE135] transition-all">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-white truncate group-hover:text-[#FFE135] transition-colors">
                {figure.name}
              </h3>
              <p className="text-zinc-500 text-base">{figure.nameArabic}</p>
            </div>
            {!isComplete && (
              <span className="text-xs text-zinc-600 whitespace-nowrap">
                {englishLabels.status.incomplete}
              </span>
            )}
          </div>

          {/* Summary */}
          {learningContent?.bio.summary ? (
            <p className="text-sm text-zinc-400 line-clamp-2">
              {learningContent.bio.summary}
            </p>
          ) : (
            <p className="text-sm text-zinc-600 italic">
              {englishLabels.status.comingSoon}
            </p>
          )}

          {/* Era */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
              {figure.era}
            </span>
          </div>

          {/* Read more */}
          <div className="flex items-center gap-1 text-sm text-zinc-500 group-hover:text-[#FFE135] transition-colors">
            <span>{englishLabels.figureCard.viewProfile}</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

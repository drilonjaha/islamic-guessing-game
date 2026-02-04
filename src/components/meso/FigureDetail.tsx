'use client';

import Link from 'next/link';
import { IslamicFigure, Category } from '@/types';
import { LearningContent } from '@/types/learning';
import { englishLabels } from '@/data/learning';
import { getCategoryPath, getCategoryLabel, createPlaceholderContent } from '@/lib/learning-utils';
import { BioSection } from './BioSection';
import { InfoCards } from './InfoCards';
import { Timeline } from './Timeline';
import { AchievementsList } from './AchievementsList';
import { RelationshipsList } from './RelationshipsList';

interface FigureDetailProps {
  figure: IslamicFigure;
  learningContent?: LearningContent;
}

const categoryColors: Record<Category, string> = {
  prophet: 'from-[#FF4757] to-[#FF6B6B]',
  sahaba: 'from-[#00D4FF] to-[#00B4D8]',
  tabieen: 'from-[#A855F7] to-[#9333EA]',
};

export function FigureDetail({ figure, learningContent }: FigureDetailProps) {
  const content = learningContent || createPlaceholderContent(figure);
  const gradient = categoryColors[figure.category];
  const backHref = `/meso/${getCategoryPath(figure.category)}`;
  const isAH = figure.category === 'tabieen'; // Tabi'een use Hijri calendar

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          {/* Category Badge */}
          <div className={`inline-flex px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${gradient} text-white mb-3`}>
            {getCategoryLabel(figure.category)}
          </div>

          {/* Names */}
          <h1 className="text-3xl sm:text-4xl font-black text-chunky text-white">
            {figure.name}
          </h1>
          <p className="text-2xl text-zinc-400 mt-1">{figure.nameArabic}</p>

          {/* Era */}
          <p className="text-sm text-zinc-500 mt-2">{figure.era}</p>
        </div>

        {/* Back Link */}
        <Link
          href={backHref}
          className="flex items-center gap-2 text-zinc-400 hover:text-[#FFE135] transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>{englishLabels.nav.backToList}</span>
        </Link>
      </div>

      {/* Content incomplete notice */}
      {!content.isComplete && (
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
          <p className="text-zinc-400">
            {englishLabels.status.comingSoon}
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Bio */}
        <div className="lg:col-span-2 space-y-6">
          <BioSection summary={content.bio.summary} paragraphs={content.bio.paragraphs} />
          <AchievementsList achievements={content.achievements} />
        </div>

        {/* Right Column - Info & Timeline */}
        <div className="space-y-6">
          <InfoCards figure={figure} />
          <Timeline timeline={content.timeline} isAH={isAH} />
          <RelationshipsList relationships={content.relationships} />
        </div>
      </div>

      {/* Quotes if available */}
      {figure.quotes && figure.quotes.length > 0 && (
        <div className="card-bold p-6">
          <h2 className="text-xl font-bold mb-4 text-[#FFE135]">Thënie</h2>
          <div className="space-y-4">
            {figure.quotes.map((quote) => (
              <blockquote
                key={quote.id}
                className="border-l-4 border-[#FFE135] pl-4 py-2"
              >
                <p className="text-zinc-300 italic">&ldquo;{quote.text}&rdquo;</p>
                {quote.textArabic && (
                  <p className="text-zinc-500 text-right mt-2 font-arabic text-lg">
                    {quote.textArabic}
                  </p>
                )}
                <footer className="text-sm text-zinc-500 mt-2">— {quote.source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

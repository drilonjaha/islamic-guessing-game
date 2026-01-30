'use client';

import { Quote, IslamicFigure } from '@/types';
import { cn } from '@/lib/utils';

interface QuoteDisplayProps {
  quote: Quote;
  figure: IslamicFigure;
  hintsRevealed: number;
  gameOver: boolean;
}

export function QuoteDisplay({ quote, figure, hintsRevealed, gameOver }: QuoteDisplayProps) {
  const hints = [
    `Category: ${figure.category.charAt(0).toUpperCase() + figure.category.slice(1)}`,
    `Era: ${figure.era}`,
    `Location: ${figure.location}`,
  ];

  return (
    <div className="w-full space-y-4">
      <div className="glass-card rounded-xl p-6 sm:p-8">
        <div className="text-center space-y-4">
          <svg
            className="w-8 h-8 mx-auto text-emerald-500/50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-lg sm:text-xl text-white leading-relaxed font-medium">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          {quote.textArabic && (
            <p className="text-zinc-400 text-right font-arabic text-lg" dir="rtl">
              {quote.textArabic}
            </p>
          )}
          <p className="text-sm text-zinc-500">
            Source: {quote.source}
          </p>
        </div>
      </div>

      {hintsRevealed > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-zinc-500 font-medium">Hints:</p>
          <div className="flex flex-wrap gap-2">
            {hints.slice(0, hintsRevealed).map((hint, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg text-sm bg-amber-500/10 text-amber-400 border border-amber-500/20"
              >
                {hint}
              </span>
            ))}
          </div>
        </div>
      )}

      {gameOver && (
        <div className="glass-card rounded-xl p-4 text-center">
          <p className="text-zinc-500 text-sm">This quote was said by:</p>
          <p className="text-xl font-bold text-emerald-400 mt-1">
            {figure.name}
          </p>
          <p className="text-zinc-500 text-sm">{figure.nameArabic}</p>
        </div>
      )}
    </div>
  );
}

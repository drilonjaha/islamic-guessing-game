'use client';

import { Quote, IslamicFigure } from '@/types';

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
      <div className="card-bold rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/10 rounded-full blur-3xl"></div>
        <div className="relative text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#A855F7]/20 flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-[#A855F7]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-xl sm:text-2xl text-white leading-relaxed font-bold">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          {quote.textArabic && (
            <p className="text-zinc-400 text-right font-arabic text-lg" dir="rtl">
              {quote.textArabic}
            </p>
          )}
          <p className="text-sm text-zinc-500 font-bold uppercase tracking-wide">
            Source: {quote.source}
          </p>
        </div>
      </div>

      {hintsRevealed > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-zinc-500 font-bold uppercase tracking-wide">Hints:</p>
          <div className="flex flex-wrap gap-2">
            {hints.slice(0, hintsRevealed).map((hint, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-xl text-sm bg-amber-500/10 text-amber-400 border-2 border-amber-500/20 font-bold"
              >
                {hint}
              </span>
            ))}
          </div>
        </div>
      )}

      {gameOver && (
        <div className="card-bold rounded-2xl p-6 text-center">
          <p className="text-zinc-500 text-sm font-bold uppercase tracking-wide">This quote was said by:</p>
          <p className="text-2xl font-black text-[#FFE135] mt-2">
            {figure.name}
          </p>
          <p className="text-zinc-500 text-sm font-arabic mt-1">{figure.nameArabic}</p>
        </div>
      )}
    </div>
  );
}

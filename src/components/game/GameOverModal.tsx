'use client';

import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { GuessResult, Category, GameMode, IslamicFigure } from '@/types';
import { generateShareText, shareResults } from '@/lib/share';
import { useState } from 'react';
import { Countdown } from './Countdown';

interface GameOverModalProps {
  isOpen: boolean;
  onClose: () => void;
  won: boolean;
  guesses: GuessResult[];
  category: Category;
  mode: GameMode;
  answer: IslamicFigure;
}

export function GameOverModal({
  isOpen,
  onClose,
  won,
  guesses,
  category,
  mode,
  answer,
}: GameOverModalProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = generateShareText(guesses, won, category, mode);
    const success = await shareResults(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center space-y-6">
        <div>
          {won ? (
            <>
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Congratulations!
              </h2>
              <p className="text-zinc-400 mt-2">
                You got it in {guesses.length} {guesses.length === 1 ? 'try' : 'tries'}
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Not this time
              </h2>
              <p className="text-zinc-400 mt-2">
                The answer was:
              </p>
            </>
          )}
        </div>

        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-xl font-bold text-white">{answer.name}</p>
          <p className="text-zinc-500 text-sm">{answer.nameArabic}</p>
        </div>

        <button
          onClick={handleShare}
          className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share Results
            </>
          )}
        </button>

        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-zinc-500 mb-3">Next round in:</p>
          <Countdown />
        </div>
      </div>
    </Modal>
  );
}

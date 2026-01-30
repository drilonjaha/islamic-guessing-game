'use client';

import { Modal } from '@/components/ui/Modal';
import { GuessResult, Category, GameMode, IslamicFigure } from '@/types';
import { generateShareText, shareResults } from '@/lib/share';
import { useState } from 'react';

interface GameOverModalProps {
  isOpen: boolean;
  onClose: () => void;
  won: boolean;
  guesses: GuessResult[];
  category: Category;
  mode: GameMode;
  answer: IslamicFigure;
  onPlayAgain: () => void;
}

export function GameOverModal({
  isOpen,
  onClose,
  won,
  guesses,
  category,
  mode,
  answer,
  onPlayAgain,
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

  const handlePlayAgain = () => {
    onClose();
    onPlayAgain();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center space-y-6">
        <div>
          {won ? (
            <>
              <div className="w-20 h-20 rounded-2xl bg-[#FFE135]/20 flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className="text-3xl font-black text-white uppercase">
                You Got It!
              </h2>
              <p className="text-zinc-400 mt-2 font-bold">
                In {guesses.length} {guesses.length === 1 ? 'try' : 'tries'}
              </p>
            </>
          ) : (
            <>
              <div className="w-20 h-20 rounded-2xl bg-[#FF4757]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">😅</span>
              </div>
              <h2 className="text-3xl font-black text-white uppercase">
                Not This Time
              </h2>
              <p className="text-zinc-400 mt-2 font-bold uppercase tracking-wide">
                The answer was:
              </p>
            </>
          )}
        </div>

        <div className="card-bold rounded-2xl p-6">
          <p className="text-2xl font-black text-[#FFE135]">{answer.name}</p>
          <p className="text-zinc-500 text-sm font-arabic mt-1">{answer.nameArabic}</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handlePlayAgain}
            className="btn-lunchly w-full py-4 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Play Again
          </button>

          <button
            onClick={handleShare}
            className="w-full py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-3"
          >
            {copied ? (
              <>
                <svg className="w-5 h-5 text-[#FFE135]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Results
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}

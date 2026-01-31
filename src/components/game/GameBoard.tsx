'use client';

import { useEffect, useState } from 'react';
import { useGameStore } from '@/store/gameStore';
import { useStatsStore } from '@/store/statsStore';
import { GuessInput } from './GuessInput';
import { GuessRow } from './GuessRow';
import { CategorySelector } from './CategorySelector';
import { ModeSelector } from './ModeSelector';
import { QuoteDisplay } from './QuoteDisplay';
import { GameOverModal } from './GameOverModal';
import { HelpModal } from './HelpModal';
import { AttributeHeader } from './AttributeHeader';
import { OnboardingGuide, useOnboarding } from './OnboardingGuide';
import { MAX_ATTEMPTS } from '@/lib/comparisons';

export function GameBoard() {
  const {
    category,
    mode,
    guesses,
    gameStatus,
    answer,
    quoteAnswer,
    hintsRevealed,
    setCategory,
    setMode,
    submitGuess,
    initializeGame,
    playAgain,
  } = useGameStore();

  const { recordGame } = useStatsStore();
  const [showModal, setShowModal] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [hasRecordedGame, setHasRecordedGame] = useState(false);

  const {
    showOnboarding,
    currentStep,
    setCurrentStep,
    completeOnboarding,
    resetOnboarding,
  } = useOnboarding();

  useEffect(() => {
    if (!hasInitialized) {
      initializeGame();
      setHasInitialized(true);
    }
  }, [initializeGame, hasInitialized]);

  useEffect(() => {
    if (gameStatus !== 'playing' && !hasRecordedGame) {
      setShowModal(true);
      recordGame(gameStatus === 'won', guesses.length, category);
      setHasRecordedGame(true);
    }
  }, [gameStatus, guesses.length, category, recordGame, hasRecordedGame]);

  useEffect(() => {
    if (gameStatus === 'playing') {
      setHasRecordedGame(false);
    }
  }, [gameStatus]);

  const guessedIds = guesses.map((g) => g.figure.id);
  const isGameOver = gameStatus !== 'playing';

  if (!hasInitialized || !answer) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-[#FFE135] font-bold uppercase tracking-wide animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Onboarding Guide */}
      {showOnboarding && (
        <OnboardingGuide
          onComplete={completeOnboarding}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}

      {/* Header with Help and New Game */}
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold uppercase tracking-wide">
          <span className="text-zinc-500">Attempt</span>{' '}
          <span className="text-[#FFE135] text-lg">{Math.min(guesses.length + 1, MAX_ATTEMPTS)}</span>
          <span className="text-zinc-500"> of {MAX_ATTEMPTS}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* New Game Button */}
          <button
            onClick={() => {
              playAgain();
              setShowModal(false);
            }}
            className="text-zinc-400 hover:text-[#00D4FF] transition-colors text-sm flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#00D4FF]/10 font-bold uppercase"
            title="Start a new game"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M8 16H3v5"/>
            </svg>
            <span className="hidden sm:inline">New Game</span>
          </button>
          <button
            onClick={resetOnboarding}
            className="text-zinc-500 hover:text-[#FFE135] transition-colors px-3 py-2 rounded-xl hover:bg-white/5 font-bold"
            title="Show tutorial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </button>
          <button
            onClick={() => setShowHelp(true)}
            className="text-zinc-400 hover:text-[#FFE135] transition-colors text-sm flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 font-bold uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="hidden sm:inline">Help</span>
          </button>
        </div>
      </div>

      {/* Mode and Category Selection */}
      <div className="card-bold rounded-2xl p-4 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div id="mode-selector">
            <ModeSelector
              selected={mode}
              onSelect={setMode}
              disabled={guesses.length > 0}
            />
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10"></div>
          <div id="category-selector">
            <CategorySelector
              selected={category}
              onSelect={setCategory}
              disabled={guesses.length > 0}
            />
          </div>
        </div>
      </div>

      {/* Quote Display (Quote Mode Only) */}
      {mode === 'quote' && quoteAnswer && (
        <QuoteDisplay
          quote={quoteAnswer.quote}
          figure={quoteAnswer.figure}
          hintsRevealed={hintsRevealed}
          gameOver={isGameOver}
        />
      )}

      {/* Guess Input */}
      <div id="guess-input" className="w-full">
        <GuessInput
          category={category}
          onGuess={submitGuess}
          disabled={isGameOver}
          guessedIds={guessedIds}
        />
      </div>

      {/* Classic Mode: Attribute Headers and Guesses */}
      {mode === 'classic' && (
        <div className="card-bold rounded-2xl p-4 overflow-hidden">
          {/* Color legend - show only when there are guesses */}
          {guesses.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 mb-4 pb-4 border-b-2 border-white/5">
              <span className="text-xs text-zinc-500 font-bold uppercase">Legend:</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-md bg-emerald-500"></div>
                <span className="text-xs text-zinc-400 font-bold">Exact</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-md bg-amber-500"></div>
                <span className="text-xs text-zinc-400 font-bold">Close</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-md bg-red-500"></div>
                <span className="text-xs text-zinc-400 font-bold">Wrong</span>
              </div>
            </div>
          )}

          <div className="overflow-x-auto hide-scrollbar -mx-4 px-4">
            <div className="inline-block min-w-max">
              <AttributeHeader category={category} />
              <div className="space-y-2 mt-2">
                {guesses.map((result, index) => (
                  <GuessRow key={result.figure.id} result={result} rowIndex={index} />
                ))}
              </div>
            </div>
          </div>

          {guesses.length === 0 && (
            <div className="text-center py-12 text-zinc-500">
              <div className="w-16 h-16 rounded-2xl bg-[#FFE135]/10 flex items-center justify-center mx-auto mb-4 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFE135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
              <p className="font-bold uppercase tracking-wide">Start guessing to see hints</p>
            </div>
          )}
        </div>
      )}

      {/* Quote Mode: Simple list of guesses */}
      {mode === 'quote' && guesses.length > 0 && (
        <div className="card-bold rounded-2xl p-4">
          <p className="text-sm text-zinc-400 font-bold uppercase tracking-wide mb-3">Your guesses:</p>
          <div className="flex flex-wrap gap-2">
            {guesses.map((result) => (
              <span
                key={result.figure.id}
                className={`px-4 py-2 rounded-xl text-sm font-bold uppercase ${
                  result.isCorrect
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/5 text-zinc-300 border-2 border-white/10'
                }`}
              >
                {result.figure.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />

      {isGameOver && answer && (
        <GameOverModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          won={gameStatus === 'won'}
          guesses={guesses}
          category={category}
          mode={mode}
          answer={answer}
          onPlayAgain={playAgain}
        />
      )}
    </div>
  );
}

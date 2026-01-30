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
        <div className="text-zinc-500 animate-pulse">Loading...</div>
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

      {/* Header with Help */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-zinc-500">
          Attempt <span className="text-white font-medium">{Math.min(guesses.length + 1, MAX_ATTEMPTS)}</span> of {MAX_ATTEMPTS}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={resetOnboarding}
            className="text-zinc-500 hover:text-white transition-colors text-xs px-2 py-1 rounded hover:bg-white/5"
            title="Show tutorial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </button>
          <button
            onClick={() => setShowHelp(true)}
            className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Help
          </button>
        </div>
      </div>

      {/* Mode and Category Selection */}
      <div className="glass-card rounded-xl p-4 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div id="mode-selector">
            <ModeSelector
              selected={mode}
              onSelect={setMode}
              disabled={guesses.length > 0}
            />
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
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
        <div className="glass-card rounded-xl p-4 overflow-hidden">
          {/* Color legend - show only when there are guesses */}
          {guesses.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mb-4 pb-4 border-b border-white/5">
              <span className="text-xs text-zinc-500">Colors:</span>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-emerald-500"></div>
                <span className="text-xs text-zinc-400">Exact</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-amber-500"></div>
                <span className="text-xs text-zinc-400">Close</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-red-500/70"></div>
                <span className="text-xs text-zinc-400">Wrong</span>
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
            <div className="text-center py-12 text-zinc-500 text-sm">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
              <p>Start guessing to see hints</p>
            </div>
          )}
        </div>
      )}

      {/* Quote Mode: Simple list of guesses */}
      {mode === 'quote' && guesses.length > 0 && (
        <div className="glass-card rounded-xl p-4">
          <p className="text-sm text-zinc-400 font-medium mb-3">Your guesses:</p>
          <div className="flex flex-wrap gap-2">
            {guesses.map((result) => (
              <span
                key={result.figure.id}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  result.isCorrect
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/5 text-zinc-300 border border-white/10'
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
        />
      )}
    </div>
  );
}

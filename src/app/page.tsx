'use client';

import { useState } from 'react';
import { GameBoard } from '@/components/game';

export default function Home() {
  const [showGame, setShowGame] = useState(false);

  if (showGame) {
    return (
      <div className="w-full">
        <button
          onClick={() => setShowGame(false)}
          className="mb-6 text-zinc-400 hover:text-white text-sm flex items-center gap-2 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </button>
        <GameBoard />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            New challenge every minute
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            Test your knowledge of{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
              Islamic History
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 animate-slide-up stagger-1">
            Guess the Prophet, Sahaba, or Tabi&apos;i in 6 tries.
            Each guess reveals clues to help you find the answer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
            <button
              onClick={() => setShowGame(true)}
              className="btn-primary w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-xl text-lg"
            >
              Start Playing
            </button>
            <a
              href="#how-to-play"
              className="w-full sm:w-auto px-8 py-4 text-zinc-300 font-medium rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-lg text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Color Legend - Compact */}
      <section className="py-8 sm:py-12">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-500"></div>
            <span className="text-sm text-zinc-400">Exact match</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500"></div>
            <span className="text-sm text-zinc-400">Close</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500/70"></div>
            <span className="text-sm text-zinc-400">Wrong</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="how-to-play" className="py-12 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">How it works</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Simple to learn, challenging to master</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Step 1 */}
          <div className="glass-card rounded-2xl p-6 card-hover">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Pick a category</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Choose between Prophets, Sahabas, or Tabi&apos;een
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-card rounded-2xl p-6 card-hover">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Make your guess</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Search and select from the list. You have 6 attempts
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-card rounded-2xl p-6 card-hover sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Use the clues</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Colors reveal how close each attribute is to the answer
            </p>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="py-12 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Two ways to play</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Choose your challenge</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Classic Mode */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4">
                CLASSIC
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Attribute Guessing</h3>
              <p className="text-zinc-400 mb-6 text-sm sm:text-base leading-relaxed">
                Each guess reveals colored hints about era, region, tribe, and other attributes.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Time period hints
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Geographic region
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Special attributes
                </li>
              </ul>
            </div>
          </div>

          {/* Quote Mode */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-4">
                QUOTE
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Who Said It?</h3>
              <p className="text-zinc-400 mb-6 text-sm sm:text-base leading-relaxed">
                A famous quote is displayed. Guess who said it with progressive hints.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quotes from Quran
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hadith references
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Progressive hints
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Three categories</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Explore different eras of Islamic history</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="glass-card rounded-2xl p-6 text-center card-hover">
            <div className="text-4xl mb-4">🕌</div>
            <h3 className="font-bold text-lg mb-2">Prophets</h3>
            <p className="text-zinc-500 text-sm">25 messengers from Adam to Muhammad (PBUT)</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center card-hover">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-bold text-lg mb-2">Sahabas</h3>
            <p className="text-zinc-500 text-sm">The noble companions of the Prophet (PBUH)</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center card-hover">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-bold text-lg mb-2">Tabi&apos;een</h3>
            <p className="text-zinc-500 text-sm">The generation who learned from the Sahabas</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden glow-emerald">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10"></div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to test your knowledge?</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              Challenge yourself and learn about the great figures of Islamic history.
            </p>
            <button
              onClick={() => setShowGame(true)}
              className="btn-primary px-8 py-4 text-white font-semibold rounded-xl text-lg"
            >
              Start Playing Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

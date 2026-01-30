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
          className="mb-6 text-zinc-400 hover:text-[#FFE135] text-sm flex items-center gap-2 transition-colors group font-bold uppercase tracking-wide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        <GameBoard />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 lg:py-28 relative">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#FFE135]/20 blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-[#FF4757]/20 blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-[#00D4FF]/20 blur-2xl animate-float delay-200"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE135] text-black font-bold text-sm mb-8 animate-pulse-glow uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Play Unlimited Rounds!
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-8 animate-slide-up text-chunky">
            TEST YOUR{' '}
            <span className="text-[#FFE135] inline-block animate-wiggle">ISLAMIC</span>
            <br />
            <span className="text-outline text-white">KNOWLEDGE!</span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto mb-12 animate-slide-up delay-100 font-medium">
            Guess the Prophet, Sahaba, or Tabi&apos;i in 6 tries.
            <span className="text-[#00D4FF]"> Each guess reveals clues!</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <button
              onClick={() => setShowGame(true)}
              className="btn-lunchly w-full sm:w-auto px-10 py-5 text-lg"
            >
              Start Playing
            </button>
            <a
              href="#how-to-play"
              className="w-full sm:w-auto px-10 py-5 text-white font-bold rounded-full border-3 border-white/20 hover:border-[#FFE135] hover:text-[#FFE135] transition-all text-lg text-center uppercase tracking-wide"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Color Legend - Bold Style */}
      <section className="py-8 sm:py-12">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3 bg-emerald-500/20 px-4 py-2 rounded-full">
            <div className="w-5 h-5 rounded-lg bg-emerald-500"></div>
            <span className="text-sm font-bold uppercase text-emerald-400">Exact Match</span>
          </div>
          <div className="flex items-center gap-3 bg-amber-500/20 px-4 py-2 rounded-full">
            <div className="w-5 h-5 rounded-lg bg-amber-500"></div>
            <span className="text-sm font-bold uppercase text-amber-400">Close</span>
          </div>
          <div className="flex items-center gap-3 bg-red-500/20 px-4 py-2 rounded-full">
            <div className="w-5 h-5 rounded-lg bg-red-500"></div>
            <span className="text-sm font-bold uppercase text-red-400">Wrong</span>
          </div>
        </div>
      </section>

      {/* Features Grid - Chunky Cards */}
      <section id="how-to-play" className="py-12 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 uppercase">
            How It <span className="text-[#FFE135]">Works</span>
          </h2>
          <p className="text-zinc-400 font-bold uppercase tracking-wide">Simple to learn, hard to master</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="card-bold p-8 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#00B4D8] flex items-center justify-center text-black font-black text-2xl mb-6 transform group-hover:rotate-12 transition-transform">
              1
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Pick a Category</h3>
            <p className="text-zinc-400 font-medium">
              Choose between Prophets, Sahabas, or Tabi&apos;een
            </p>
          </div>

          {/* Step 2 */}
          <div className="card-bold p-8 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A855F7] to-[#9333EA] flex items-center justify-center text-white font-black text-2xl mb-6 transform group-hover:rotate-12 transition-transform">
              2
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Make Your Guess</h3>
            <p className="text-zinc-400 font-medium">
              Search and select from the list. You have 6 attempts!
            </p>
          </div>

          {/* Step 3 */}
          <div className="card-bold p-8 group sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFE135] to-[#FFC107] flex items-center justify-center text-black font-black text-2xl mb-6 transform group-hover:rotate-12 transition-transform">
              3
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Use The Clues</h3>
            <p className="text-zinc-400 font-medium">
              Colors reveal how close each attribute is to the answer
            </p>
          </div>
        </div>
      </section>

      {/* Game Modes - Bold Cards */}
      <section className="py-12 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 uppercase">
            Two <span className="text-[#FF4757]">Epic</span> Modes
          </h2>
          <p className="text-zinc-400 font-bold uppercase tracking-wide">Choose your challenge</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Classic Mode */}
          <div className="card-bold p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00D4FF]/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <span className="badge badge-cyan mb-6">Classic</span>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase">Attribute Guessing</h3>
              <p className="text-zinc-400 mb-6 font-medium text-lg">
                Each guess reveals colored hints about era, region, tribe, and other attributes.
              </p>
              <ul className="space-y-3 text-zinc-300 font-bold">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF] flex items-center justify-center text-black text-xs">✓</span>
                  Time period hints
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF] flex items-center justify-center text-black text-xs">✓</span>
                  Geographic region
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF] flex items-center justify-center text-black text-xs">✓</span>
                  Special attributes
                </li>
              </ul>
            </div>
          </div>

          {/* Quote Mode */}
          <div className="card-bold p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#A855F7]/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <span className="badge bg-[#A855F7] text-white mb-6">Quote</span>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase">Who Said It?</h3>
              <p className="text-zinc-400 mb-6 font-medium text-lg">
                A famous quote is displayed. Guess who said it with progressive hints.
              </p>
              <ul className="space-y-3 text-zinc-300 font-bold">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#A855F7] flex items-center justify-center text-white text-xs">✓</span>
                  Quotes from Quran
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#A855F7] flex items-center justify-center text-white text-xs">✓</span>
                  Hadith references
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#A855F7] flex items-center justify-center text-white text-xs">✓</span>
                  Progressive hints
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Chunky Style */}
      <section className="py-12 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 uppercase">
            Three <span className="text-[#FFE135]">Categories</span>
          </h2>
          <p className="text-zinc-400 font-bold uppercase tracking-wide">Explore Islamic History</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card-bold p-8 text-center group">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform animate-float">🕌</div>
            <h3 className="font-black text-xl mb-2 uppercase">Prophets</h3>
            <p className="text-zinc-500 font-medium">25 messengers from Adam to Muhammad (PBUT)</p>
          </div>

          <div className="card-bold p-8 text-center group">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform animate-float delay-100">⭐</div>
            <h3 className="font-black text-xl mb-2 uppercase">Sahabas</h3>
            <p className="text-zinc-500 font-medium">The noble companions of the Prophet (PBUH)</p>
          </div>

          <div className="card-bold p-8 text-center group">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform animate-float delay-200">📚</div>
            <h3 className="font-black text-xl mb-2 uppercase">Tabi&apos;een</h3>
            <p className="text-zinc-500 font-medium">The generation who learned from the Sahabas</p>
          </div>
        </div>
      </section>

      {/* CTA - Bold Yellow */}
      <section className="py-12 sm:py-20">
        <div className="card-bold p-8 sm:p-16 text-center relative overflow-hidden border-[#FFE135]/30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE135]/10 via-transparent to-[#FF4757]/10"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFE135]/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#FF4757]/20 rounded-full blur-2xl animate-bounce-slow"></div>

          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-black mb-6 uppercase">
              Ready to <span className="text-[#FFE135]">Play?</span>
            </h2>
            <p className="text-zinc-300 mb-10 max-w-lg mx-auto text-xl font-medium">
              Challenge yourself and learn about the great figures of Islamic history.
            </p>
            <button
              onClick={() => setShowGame(true)}
              className="btn-lunchly px-12 py-6 text-xl"
            >
              Start Playing Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

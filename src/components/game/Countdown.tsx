'use client';

import { useState, useEffect } from 'react';
import { getTimeUntilNextRound } from '@/lib/daily-seed';

export function Countdown() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const updateTime = () => {
      setSeconds(getTimeUntilNextRound());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
      <div className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">
        {seconds}
      </div>
      <div className="text-xs text-zinc-500 uppercase tracking-wide">sec</div>
    </div>
  );
}

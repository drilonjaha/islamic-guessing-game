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
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#FFE135]/10 border-2 border-[#FFE135]/30">
      <div className="text-4xl font-black text-[#FFE135] font-mono tabular-nums">
        {seconds}
      </div>
      <div className="text-sm text-zinc-400 uppercase tracking-wide font-bold">seconds</div>
    </div>
  );
}

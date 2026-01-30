'use client';

import { Modal } from '@/components/ui/Modal';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-black text-white uppercase">How to Play</h2>
          <p className="text-zinc-400 text-sm mt-1 font-medium">
            Guess the Islamic figure in 6 tries
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="font-black text-white text-sm mb-2 uppercase text-[#00D4FF]">Classic Mode</h3>
            <p className="text-zinc-400 text-sm font-medium">
              Guess based on attribute hints. After each guess, colors show how close you are:
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-4 py-2 bg-emerald-500 rounded-xl text-white text-xs font-bold uppercase">
                Exact
              </span>
              <span className="px-4 py-2 bg-amber-500 rounded-xl text-white text-xs font-bold uppercase">
                Close
              </span>
              <span className="px-4 py-2 bg-red-500 rounded-xl text-white text-xs font-bold uppercase">
                Wrong
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-black text-white text-sm mb-2 uppercase text-[#A855F7]">Quote Mode</h3>
            <p className="text-zinc-400 text-sm font-medium">
              A famous quote is shown. Guess who said it! Hints are revealed after each wrong guess.
            </p>
          </div>

          <div>
            <h3 className="font-black text-white text-sm mb-2 uppercase text-[#FFE135]">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF] mt-1.5 shrink-0"></span>
                <span><span className="text-white font-bold">Prophets</span> - Messengers mentioned in the Quran</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#A855F7] mt-1.5 shrink-0"></span>
                <span><span className="text-white font-bold">Sahabas</span> - Companions of the Prophet (PBUH)</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#FF4757] mt-1.5 shrink-0"></span>
                <span><span className="text-white font-bold">Tabi&apos;een</span> - The generation after the Sahabas</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-zinc-500 pt-4 border-t-2 border-white/10 font-bold uppercase tracking-wide">
          Play as many rounds as you want!
        </p>
      </div>
    </Modal>
  );
}

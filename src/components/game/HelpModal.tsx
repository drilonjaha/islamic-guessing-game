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
          <h2 className="text-xl font-bold text-white">How to Play</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Guess the Islamic figure in 6 tries
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white text-sm mb-2">Classic Mode</h3>
            <p className="text-zinc-400 text-sm">
              Guess based on attribute hints. After each guess, colors show how close you are:
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1.5 bg-emerald-500 rounded-lg text-white text-xs font-medium">
                Exact match
              </span>
              <span className="px-3 py-1.5 bg-amber-500 rounded-lg text-white text-xs font-medium">
                Close
              </span>
              <span className="px-3 py-1.5 bg-red-500/70 rounded-lg text-white text-xs font-medium">
                Wrong
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-2">Quote Mode</h3>
            <p className="text-zinc-400 text-sm">
              A famous quote is shown. Guess who said it! Hints are revealed after each wrong guess.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-2">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-zinc-400">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span><span className="text-white">Prophets</span> - Messengers mentioned in the Quran</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-400">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span><span className="text-white">Sahabas</span> - Companions of the Prophet (PBUH)</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-400">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span><span className="text-white">Tabi&apos;een</span> - The generation after the Sahabas</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-zinc-500 pt-2 border-t border-white/10">
          A new challenge is available every minute!
        </p>
      </div>
    </Modal>
  );
}

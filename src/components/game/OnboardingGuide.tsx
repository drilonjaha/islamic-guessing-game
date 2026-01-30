'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OnboardingStep {
  target: string;
  title: string;
  description: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const steps: OnboardingStep[] = [
  {
    target: 'mode-selector',
    title: 'Choose Game Mode',
    description: 'Classic mode shows attribute hints. Quote mode shows a famous saying.',
    position: 'bottom',
  },
  {
    target: 'category-selector',
    title: 'Pick a Category',
    description: 'Select Prophets, Sahabas, or Tabi\'een to play.',
    position: 'bottom',
  },
  {
    target: 'guess-input',
    title: 'Make Your Guess',
    description: 'Search for a name and select it. You have 6 attempts!',
    position: 'top',
  },
];

interface OnboardingGuideProps {
  onComplete: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export function OnboardingGuide({ onComplete, currentStep, setCurrentStep }: OnboardingGuideProps) {
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const step = steps[currentStep];

  useEffect(() => {
    if (!step) return;

    const updatePosition = () => {
      const element = document.getElementById(step.target);
      if (element) {
        setTargetRect(element.getBoundingClientRect());
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [step, currentStep]);

  if (!step || !targetRect) return null;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  // Calculate tooltip position
  const getTooltipStyle = () => {
    const padding = 12;
    const tooltipWidth = 280;

    switch (step.position) {
      case 'bottom':
        return {
          top: targetRect.bottom + padding + 8,
          left: Math.max(16, Math.min(targetRect.left + targetRect.width / 2 - tooltipWidth / 2, window.innerWidth - tooltipWidth - 16)),
        };
      case 'top':
        return {
          bottom: window.innerHeight - targetRect.top + padding + 8,
          left: Math.max(16, Math.min(targetRect.left + targetRect.width / 2 - tooltipWidth / 2, window.innerWidth - tooltipWidth - 16)),
        };
      default:
        return {
          top: targetRect.bottom + padding + 8,
          left: targetRect.left,
        };
    }
  };

  const getArrowStyle = () => {
    switch (step.position) {
      case 'bottom':
        return {
          top: targetRect.bottom + 8,
          left: targetRect.left + targetRect.width / 2 - 8,
        };
      case 'top':
        return {
          top: targetRect.top - 24,
          left: targetRect.left + targetRect.width / 2 - 8,
        };
      default:
        return {
          top: targetRect.bottom + 8,
          left: targetRect.left + targetRect.width / 2 - 8,
        };
    }
  };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-auto" onClick={handleSkip} />

      {/* Highlight cutout */}
      <div
        className="absolute bg-transparent rounded-xl pointer-events-none"
        style={{
          top: targetRect.top - 4,
          left: targetRect.left - 4,
          width: targetRect.width + 8,
          height: targetRect.height + 8,
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 185, 129, 0.3)',
        }}
      />

      {/* Pulsing ring around target */}
      <div
        className="absolute rounded-xl border-2 border-emerald-400 animate-pulse pointer-events-none"
        style={{
          top: targetRect.top - 4,
          left: targetRect.left - 4,
          width: targetRect.width + 8,
          height: targetRect.height + 8,
        }}
      />

      {/* Arrow */}
      <div
        className="absolute pointer-events-none"
        style={getArrowStyle()}
      >
        <div className={cn(
          "text-emerald-400",
          step.position === 'bottom' ? 'animate-bounce' : 'animate-bounce rotate-180'
        )}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12L2 6h12L8 12z" />
          </svg>
        </div>
      </div>

      {/* Tooltip */}
      <div
        className="absolute w-[280px] pointer-events-auto"
        style={getTooltipStyle()}
      >
        <div className="bg-zinc-900 border border-white/10 rounded-xl p-4 shadow-2xl animate-fade-in">
          {/* Step indicator */}
          <div className="flex items-center gap-1.5 mb-3">
            {steps.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-1 rounded-full transition-all',
                  i === currentStep ? 'w-4 bg-emerald-400' : 'w-1 bg-white/20'
                )}
              />
            ))}
          </div>

          <h3 className="font-semibold text-white text-sm mb-1">{step.title}</h3>
          <p className="text-zinc-400 text-xs leading-relaxed mb-4">{step.description}</p>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSkip}
              className="text-xs text-zinc-500 hover:text-white transition-colors"
            >
              Skip tour
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-medium rounded-lg transition-colors"
            >
              {currentStep < steps.length - 1 ? 'Next' : 'Got it!'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hook to manage onboarding state
export function useOnboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Always show onboarding on first load (no persistence)
    setTimeout(() => setShowOnboarding(true), 500);
  }, []);

  const completeOnboarding = () => {
    setShowOnboarding(false);
  };

  const resetOnboarding = () => {
    setCurrentStep(0);
    setShowOnboarding(true);
  };

  return {
    showOnboarding,
    currentStep,
    setCurrentStep,
    completeOnboarding,
    resetOnboarding,
  };
}

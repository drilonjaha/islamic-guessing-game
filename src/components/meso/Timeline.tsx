'use client';

import { TimelineData } from '@/types/learning';
import { albanianLabels } from '@/data/learning';
import { formatYear } from '@/lib/learning-utils';

interface TimelineProps {
  timeline: TimelineData;
  isAH?: boolean; // Whether to format years as AH (Hijri)
}

export function Timeline({ timeline, isAH = false }: TimelineProps) {
  const { birthYear, deathYear, majorEvents, era } = timeline;

  // If no events, show placeholder
  if (majorEvents.length === 0 && !birthYear && !deathYear) {
    return (
      <div className="card-bold p-6">
        <h2 className="text-xl font-bold mb-4">{albanianLabels.sections.timeline}</h2>
        <div className="flex items-center gap-2 text-zinc-500">
          <span className="text-sm">{albanianLabels.prophetAttributes.era}:</span>
          <span className="text-white">{era}</span>
        </div>
      </div>
    );
  }

  // Build timeline events list
  const events = [...majorEvents];

  return (
    <div className="card-bold p-6">
      <h2 className="text-xl font-bold mb-4 text-[#FFE135]">{albanianLabels.sections.timeline}</h2>

      {/* Era badge */}
      <div className="mb-4">
        <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
          {era}
        </span>
      </div>

      {/* Lifespan */}
      {(birthYear || deathYear) && (
        <div className="flex items-center gap-4 mb-4 text-sm">
          {birthYear && (
            <div>
              <span className="text-zinc-500">{albanianLabels.timeline.birth}: </span>
              <span className="text-white font-medium">{formatYear(birthYear, isAH)}</span>
            </div>
          )}
          {birthYear && deathYear && <span className="text-zinc-600">—</span>}
          {deathYear && (
            <div>
              <span className="text-zinc-500">{albanianLabels.timeline.death}: </span>
              <span className="text-white font-medium">{formatYear(deathYear, isAH)}</span>
            </div>
          )}
        </div>
      )}

      {/* Events timeline */}
      {events.length > 0 && (
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-zinc-700" />

          {/* Events */}
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-start gap-4 pl-6">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#FFE135] border-2 border-zinc-900" />

                {/* Content */}
                <div>
                  <div className="text-xs text-zinc-500 mb-0.5">
                    {formatYear(event.year, isAH)}
                  </div>
                  <div className="text-sm text-zinc-300">
                    {event.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

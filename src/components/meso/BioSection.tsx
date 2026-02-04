'use client';

import { englishLabels } from '@/data/learning';

interface BioSectionProps {
  summary: string;
  paragraphs: string[];
}

export function BioSection({ summary, paragraphs }: BioSectionProps) {
  if (!summary && paragraphs.length === 0) {
    return (
      <div className="card-bold p-6">
        <h2 className="text-xl font-bold mb-4">{englishLabels.sections.biography}</h2>
        <p className="text-zinc-500 italic">{englishLabels.status.comingSoon}</p>
      </div>
    );
  }

  return (
    <div className="card-bold p-6">
      <h2 className="text-xl font-bold mb-4 text-[#FFE135]">{englishLabels.sections.biography}</h2>

      {/* Summary as lead paragraph */}
      {summary && (
        <p className="text-lg text-white font-medium mb-4 leading-relaxed">
          {summary}
        </p>
      )}

      {/* Body paragraphs */}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-zinc-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

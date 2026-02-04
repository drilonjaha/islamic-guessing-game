'use client';

import Link from 'next/link';
import { Relationship } from '@/types/learning';
import { englishLabels, getLearningContentById } from '@/data/learning';
import { getFigureById } from '@/data';
import { getCategoryPath, getRelationshipTypeLabel } from '@/lib/learning-utils';

interface RelationshipsListProps {
  relationships: Relationship[];
}

const relationshipIcons: Record<string, string> = {
  teacher: '👨‍🏫',
  student: '📚',
  family: '👨‍👩‍👧‍👦',
  companion: '🤝',
};

export function RelationshipsList({ relationships }: RelationshipsListProps) {
  if (relationships.length === 0) {
    return null;
  }

  return (
    <div className="card-bold p-6">
      <h2 className="text-xl font-bold mb-4 text-[#FFE135]">{englishLabels.sections.relationships}</h2>
      <div className="space-y-3">
        {relationships.map((relationship, index) => {
          const relatedFigure = getFigureById(relationship.figureId);
          if (!relatedFigure) return null;

          const href = `/meso/${getCategoryPath(relatedFigure.category)}/${relatedFigure.id}`;
          const icon = relationshipIcons[relationship.type] || '👤';

          return (
            <Link
              key={index}
              href={href}
              className="flex items-start gap-3 bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/30 hover:border-[#FFE135]/50 transition-colors group"
            >
              {/* Icon */}
              <div className="text-xl flex-shrink-0">{icon}</div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white group-hover:text-[#FFE135] transition-colors">
                    {relatedFigure.name}
                  </span>
                  <span className="text-zinc-500 text-sm">
                    ({getRelationshipTypeLabel(relationship.type)})
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mt-0.5">{relationship.description}</p>
              </div>

              {/* Arrow */}
              <svg
                className="w-5 h-5 text-zinc-600 group-hover:text-[#FFE135] flex-shrink-0 transform group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

'use client';

import { Achievement } from '@/types/learning';
import { englishLabels } from '@/data/learning';

interface AchievementsListProps {
  achievements: Achievement[];
}

export function AchievementsList({ achievements }: AchievementsListProps) {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <div className="card-bold p-6">
      <h2 className="text-xl font-bold mb-4 text-[#FFE135]">{englishLabels.sections.achievements}</h2>
      <div className="grid gap-3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/30"
          >
            {/* Icon */}
            {achievement.icon && (
              <div className="text-2xl flex-shrink-0">{achievement.icon}</div>
            )}

            {/* Content */}
            <div>
              <h3 className="font-bold text-white">{achievement.title}</h3>
              <p className="text-sm text-zinc-400 mt-0.5">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

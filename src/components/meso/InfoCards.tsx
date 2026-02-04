'use client';

import { IslamicFigure, Prophet, Sahaba, Tabieen, Category } from '@/types';
import { englishLabels } from '@/data/learning';
import {
  formatBooleanValue,
  getConversionPeriodLabel,
  getProphetRelationLabel,
  getGenerationLabel,
  getSpecialtyLabel,
  getRoleLabel,
} from '@/lib/learning-utils';

interface InfoCardsProps {
  figure: IslamicFigure;
}

interface InfoItem {
  label: string;
  value: string;
}

function getInfoItems(figure: IslamicFigure): InfoItem[] {
  const items: InfoItem[] = [
    { label: englishLabels.prophetAttributes.era, value: figure.era },
    { label: englishLabels.prophetAttributes.location, value: figure.location },
  ];

  if (figure.category === 'prophet') {
    const prophet = figure as Prophet;
    items.push(
      { label: englishLabels.prophetAttributes.tribe, value: prophet.tribe },
      { label: englishLabels.prophetAttributes.quranMentions, value: String(prophet.quranMentions) },
      { label: englishLabels.prophetAttributes.ulAlAzm, value: formatBooleanValue(prophet.ulAlAzm) },
    );
    if (prophet.bookRevealed) {
      items.push({ label: englishLabels.prophetAttributes.bookRevealed, value: prophet.bookRevealed });
    }
    items.push(
      { label: englishLabels.prophetAttributes.wasKing, value: formatBooleanValue(prophet.wasKing) },
      { label: englishLabels.prophetAttributes.fatherWasProphet, value: formatBooleanValue(prophet.fatherWasProphet) },
      { label: englishLabels.prophetAttributes.sentToArab, value: formatBooleanValue(prophet.sentToArab) },
      { label: englishLabels.prophetAttributes.storyInQuran, value: formatBooleanValue(prophet.storyInQuran) },
    );
  } else if (figure.category === 'sahaba') {
    const sahaba = figure as Sahaba;
    items.push(
      { label: englishLabels.sahabaAttributes.tribe, value: sahaba.tribe },
      { label: englishLabels.sahabaAttributes.conversionPeriod, value: getConversionPeriodLabel(sahaba.conversionPeriod) },
      { label: englishLabels.sahabaAttributes.asharaAlMubashareen, value: formatBooleanValue(sahaba.asharaAlMubashareen) },
      { label: englishLabels.sahabaAttributes.participatedBadr, value: formatBooleanValue(sahaba.participatedBadr) },
      { label: englishLabels.sahabaAttributes.hadithNarrated, value: String(sahaba.hadithNarrated) },
    );
    if (sahaba.caliphOrder) {
      items.push({ label: englishLabels.sahabaAttributes.caliphOrder, value: `${sahaba.caliphOrder}` });
    }
    if (sahaba.relationToProphet !== 'none') {
      items.push({ label: englishLabels.sahabaAttributes.relationToProphet, value: getProphetRelationLabel(sahaba.relationToProphet) });
    }
    items.push(
      { label: englishLabels.sahabaAttributes.martyred, value: formatBooleanValue(sahaba.martyred) },
      { label: englishLabels.sahabaAttributes.migratedToAbyssinia, value: formatBooleanValue(sahaba.migratedToAbyssinia) },
    );
  } else if (figure.category === 'tabieen') {
    const tabieen = figure as Tabieen;
    items.push(
      { label: englishLabels.tabieenAttributes.generation, value: getGenerationLabel(tabieen.generation) },
      { label: englishLabels.tabieenAttributes.school, value: tabieen.school },
      { label: englishLabels.tabieenAttributes.birthCity, value: tabieen.birthCity },
      { label: englishLabels.tabieenAttributes.role, value: getRoleLabel(tabieen.role) },
      { label: englishLabels.tabieenAttributes.deathYear, value: `${tabieen.deathYear} H` },
    );
    if (tabieen.specialty.length > 0) {
      items.push({
        label: englishLabels.tabieenAttributes.specialty,
        value: tabieen.specialty.map(s => getSpecialtyLabel(s)).join(', '),
      });
    }
    if (tabieen.teachers.length > 0) {
      items.push({
        label: englishLabels.tabieenAttributes.teachers,
        value: tabieen.teachers.slice(0, 3).join(', ') + (tabieen.teachers.length > 3 ? '...' : ''),
      });
    }
  }

  return items;
}

export function InfoCards({ figure }: InfoCardsProps) {
  const items = getInfoItems(figure);

  return (
    <div className="card-bold p-6">
      <h2 className="text-xl font-bold mb-4 text-[#FFE135]">{englishLabels.sections.infoCards}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/50"
          >
            <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">
              {item.label}
            </div>
            <div className="text-white font-medium text-sm">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

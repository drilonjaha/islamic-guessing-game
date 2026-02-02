'use client';

import { IslamicFigure, Prophet, Sahaba, Tabieen, Category } from '@/types';
import { albanianLabels } from '@/data/learning';
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
    { label: albanianLabels.prophetAttributes.era, value: figure.era },
    { label: albanianLabels.prophetAttributes.location, value: figure.location },
  ];

  if (figure.category === 'prophet') {
    const prophet = figure as Prophet;
    items.push(
      { label: albanianLabels.prophetAttributes.tribe, value: prophet.tribe },
      { label: albanianLabels.prophetAttributes.quranMentions, value: String(prophet.quranMentions) },
      { label: albanianLabels.prophetAttributes.ulAlAzm, value: formatBooleanValue(prophet.ulAlAzm) },
    );
    if (prophet.bookRevealed) {
      items.push({ label: albanianLabels.prophetAttributes.bookRevealed, value: prophet.bookRevealed });
    }
    items.push(
      { label: albanianLabels.prophetAttributes.wasKing, value: formatBooleanValue(prophet.wasKing) },
      { label: albanianLabels.prophetAttributes.fatherWasProphet, value: formatBooleanValue(prophet.fatherWasProphet) },
      { label: albanianLabels.prophetAttributes.sentToArab, value: formatBooleanValue(prophet.sentToArab) },
      { label: albanianLabels.prophetAttributes.storyInQuran, value: formatBooleanValue(prophet.storyInQuran) },
    );
  } else if (figure.category === 'sahaba') {
    const sahaba = figure as Sahaba;
    items.push(
      { label: albanianLabels.sahabaAttributes.tribe, value: sahaba.tribe },
      { label: albanianLabels.sahabaAttributes.conversionPeriod, value: getConversionPeriodLabel(sahaba.conversionPeriod) },
      { label: albanianLabels.sahabaAttributes.asharaAlMubashareen, value: formatBooleanValue(sahaba.asharaAlMubashareen) },
      { label: albanianLabels.sahabaAttributes.participatedBadr, value: formatBooleanValue(sahaba.participatedBadr) },
      { label: albanianLabels.sahabaAttributes.hadithNarrated, value: String(sahaba.hadithNarrated) },
    );
    if (sahaba.caliphOrder) {
      items.push({ label: albanianLabels.sahabaAttributes.caliphOrder, value: `${sahaba.caliphOrder}` });
    }
    if (sahaba.relationToProphet !== 'none') {
      items.push({ label: albanianLabels.sahabaAttributes.relationToProphet, value: getProphetRelationLabel(sahaba.relationToProphet) });
    }
    items.push(
      { label: albanianLabels.sahabaAttributes.martyred, value: formatBooleanValue(sahaba.martyred) },
      { label: albanianLabels.sahabaAttributes.migratedToAbyssinia, value: formatBooleanValue(sahaba.migratedToAbyssinia) },
    );
  } else if (figure.category === 'tabieen') {
    const tabieen = figure as Tabieen;
    items.push(
      { label: albanianLabels.tabieenAttributes.generation, value: getGenerationLabel(tabieen.generation) },
      { label: albanianLabels.tabieenAttributes.school, value: tabieen.school },
      { label: albanianLabels.tabieenAttributes.birthCity, value: tabieen.birthCity },
      { label: albanianLabels.tabieenAttributes.role, value: getRoleLabel(tabieen.role) },
      { label: albanianLabels.tabieenAttributes.deathYear, value: `${tabieen.deathYear} H` },
    );
    if (tabieen.specialty.length > 0) {
      items.push({
        label: albanianLabels.tabieenAttributes.specialty,
        value: tabieen.specialty.map(s => getSpecialtyLabel(s)).join(', '),
      });
    }
    if (tabieen.teachers.length > 0) {
      items.push({
        label: albanianLabels.tabieenAttributes.teachers,
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
      <h2 className="text-xl font-bold mb-4 text-[#FFE135]">{albanianLabels.sections.infoCards}</h2>
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

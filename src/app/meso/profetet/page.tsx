import { prophets } from '@/data';
import { albanianLabels } from '@/data/learning';
import { FigureList } from '@/components/meso';

export default function ProfetetPage() {
  return (
    <FigureList
      figures={prophets}
      category="prophet"
      title={albanianLabels.categories.prophet}
    />
  );
}

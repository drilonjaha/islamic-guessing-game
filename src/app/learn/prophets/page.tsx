import { prophets } from '@/data';
import { englishLabels } from '@/data/learning';
import { FigureList } from '@/components/meso';

export default function ProfetetPage() {
  return (
    <FigureList
      figures={prophets}
      category="prophet"
      title={englishLabels.categories.prophet}
    />
  );
}

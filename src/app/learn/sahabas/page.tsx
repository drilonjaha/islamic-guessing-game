import { sahabas } from '@/data';
import { englishLabels } from '@/data/learning';
import { FigureList } from '@/components/meso';

export default function SahabatPage() {
  return (
    <FigureList
      figures={sahabas}
      category="sahaba"
      title={englishLabels.categories.sahaba}
    />
  );
}

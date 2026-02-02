import { sahabas } from '@/data';
import { albanianLabels } from '@/data/learning';
import { FigureList } from '@/components/meso';

export default function SahabatPage() {
  return (
    <FigureList
      figures={sahabas}
      category="sahaba"
      title={albanianLabels.categories.sahaba}
    />
  );
}

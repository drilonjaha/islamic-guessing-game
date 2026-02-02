import { tabieen } from '@/data';
import { albanianLabels } from '@/data/learning';
import { FigureList } from '@/components/meso';

export default function TabiinetPage() {
  return (
    <FigureList
      figures={tabieen}
      category="tabieen"
      title={albanianLabels.categories.tabieen}
    />
  );
}

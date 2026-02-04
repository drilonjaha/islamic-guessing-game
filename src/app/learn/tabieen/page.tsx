import { tabieen } from '@/data';
import { englishLabels } from '@/data/learning';
import { FigureList } from '@/components/meso';

export default function TabiinetPage() {
  return (
    <FigureList
      figures={tabieen}
      category="tabieen"
      title={englishLabels.categories.tabieen}
    />
  );
}

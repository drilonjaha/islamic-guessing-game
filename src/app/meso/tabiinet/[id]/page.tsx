import { notFound } from 'next/navigation';
import { tabieen, getLearningContentById } from '@/data';
import { FigureDetail } from '@/components/meso';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return tabieen.map((t) => ({
    id: t.id,
  }));
}

export default async function TabieenDetailPage({ params }: Props) {
  const { id } = await params;
  const tabieenFigure = tabieen.find((t) => t.id === id);

  if (!tabieenFigure) {
    notFound();
  }

  const learningContent = getLearningContentById(id);

  return <FigureDetail figure={tabieenFigure} learningContent={learningContent} />;
}

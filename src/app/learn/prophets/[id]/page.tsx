import { notFound } from 'next/navigation';
import { prophets, getLearningContentById } from '@/data';
import { FigureDetail } from '@/components/meso';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return prophets.map((prophet) => ({
    id: prophet.id,
  }));
}

export default async function ProphetDetailPage({ params }: Props) {
  const { id } = await params;
  const prophet = prophets.find((p) => p.id === id);

  if (!prophet) {
    notFound();
  }

  const learningContent = getLearningContentById(id);

  return <FigureDetail figure={prophet} learningContent={learningContent} />;
}

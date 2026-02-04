import { notFound } from 'next/navigation';
import { sahabas, getLearningContentById } from '@/data';
import { FigureDetail } from '@/components/meso';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return sahabas.map((sahaba) => ({
    id: sahaba.id,
  }));
}

export default async function SahabaDetailPage({ params }: Props) {
  const { id } = await params;
  const sahaba = sahabas.find((s) => s.id === id);

  if (!sahaba) {
    notFound();
  }

  const learningContent = getLearningContentById(id);

  return <FigureDetail figure={sahaba} learningContent={learningContent} />;
}

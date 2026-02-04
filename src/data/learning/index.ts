import { LearningContent } from '@/types/learning';
import { Category } from '@/types/figures';
import { prophetsLearning, getProphetLearningById } from './prophets-learning';
import { sahabasLearning, getSahabaLearningById } from './sahabas-learning';
import { tabieenLearning, getTabieenLearningById } from './tabieen-learning';

export { prophetsLearning } from './prophets-learning';
export { sahabasLearning } from './sahabas-learning';
export { tabieenLearning } from './tabieen-learning';
export { englishLabels } from './english-labels';
export { eras, getEraById, getEraByYear, getEraNameEnglish } from './eras';

export function getLearningContentById(id: string): LearningContent | undefined {
  return getProphetLearningById(id) || getSahabaLearningById(id) || getTabieenLearningById(id);
}

export function getLearningContentByCategory(category: Category): LearningContent[] {
  switch (category) {
    case 'prophet':
      return prophetsLearning;
    case 'sahaba':
      return sahabasLearning;
    case 'tabieen':
      return tabieenLearning;
  }
}

export function getAllLearningContent(): LearningContent[] {
  return [...prophetsLearning, ...sahabasLearning, ...tabieenLearning];
}

export function getCompleteLearningContent(): LearningContent[] {
  return getAllLearningContent().filter(content => content.isComplete);
}

export function getIncompleteLearningContent(): LearningContent[] {
  return getAllLearningContent().filter(content => !content.isComplete);
}

export function getLearningContentCount(): { total: number; complete: number; incomplete: number } {
  const all = getAllLearningContent();
  const complete = all.filter(c => c.isComplete).length;
  return {
    total: all.length,
    complete,
    incomplete: all.length - complete,
  };
}

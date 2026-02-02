import { Category } from './figures';

export interface LearningContent {
  figureId: string;
  category: Category;
  bio: {
    summary: string;
    paragraphs: string[];
  };
  achievements: Achievement[];
  quizFacts: QuizFact[];
  timeline: TimelineData;
  relationships: Relationship[];
  isComplete: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  icon?: string;
}

export interface QuizFact {
  label: string;
  value: string;
  attributeKey: string;
}

export interface TimelineData {
  birthYear?: number;
  deathYear?: number;
  majorEvents: TimelineEvent[];
  era: string;
}

export interface TimelineEvent {
  year: number;
  event: string;
}

export type RelationType = 'teacher' | 'student' | 'family' | 'companion';

export interface Relationship {
  type: RelationType;
  figureId: string;
  description: string;
}

export interface Era {
  id: string;
  name: string;
  nameAlbanian: string;
  startYear: number;
  endYear: number;
  description: string;
}

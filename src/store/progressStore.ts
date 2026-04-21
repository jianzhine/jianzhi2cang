import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProgressState } from '@/types';

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedSections: {},
      
      completeSection: (sectionId: string) => {
        set((state) => ({
          completedSections: {
            ...state.completedSections,
            [sectionId]: true
          }
        }));
      },
      
      resetProgress: () => {
        set({ completedSections: {} });
      },
      
      getOverallProgress: () => {
        const state = get();
        const sections = [
          'basic',
          'functions',
          'data-structures',
          'advanced-data-structures',
          'numpy',
          'pandas',
          'data-visualization',
          'data-cleaning',
          'practice',
          'real-world'
        ];
        const completedCount = sections.filter(section => state.completedSections[section]).length;
        return Math.round((completedCount / sections.length) * 100);
      }
    }),
    {
      name: 'data-analysis-progress'
    }
  )
);
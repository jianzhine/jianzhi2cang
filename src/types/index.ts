// 训练部分类型定义
export interface TrainingSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  phase: string;
  level: string;
}

// 技能类型定义
export interface Skill {
  icon: React.ReactNode;
  name: string;
  description: string;
  level: number;
}

// 作品类型定义
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

// 导航卡片类型定义
export interface NavCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

// 训练卡片类型定义
export interface TrainingCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  level: string;
  completed?: boolean;
}

// 进度状态类型定义
export interface ProgressState {
  completedSections: Record<string, boolean>;
  completeSection: (sectionId: string) => void;
  resetProgress: () => void;
  getOverallProgress: () => number;
}
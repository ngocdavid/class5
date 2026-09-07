export type Subject = 'math' | 'vietnamese';

export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  example?: string;
  badge?: string;
}

export interface CommonMistake {
  title: string;
  mistake: string;
  whyWrong: string;
  howToFix: string;
}

export type QuestionType = 
  | 'multiple_choice' 
  | 'fill_number' 
  | 'drag_drop_sort' 
  | 'true_false' 
  | 'word_classify';

export interface Question {
  id: string;
  level: 1 | 2 | 3; // 1: Khởi động, 2: Vững vàng, 3: Thử thách
  levelName: string;
  type: QuestionType;
  prompt: string;
  hint: string; // Lời mách nước của Rô-bốt
  explanation: string;
  illustrationType?: string; // Loại hình minh họa
  illustrationData?: Record<string, unknown>;
  options?: string[];
  correctAnswer: string | number | boolean | string[];
  itemsToClassify?: { text: string; category: string }[];
  categories?: string[];
}

export interface SpeedQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  subject: Subject;
  volume: 1 | 2;
  lessonNumber: number;
  title: string;
  unit: string;
  estimatedMinutes: number; // 30 - 45 phút
  tagline: string;
  mascotGreeting: string;
  
  // 1. Khám phá & Hướng dẫn học
  guide: {
    storyIntro: string; // Tình huống đời thực
    illustrationType?: string; // Hình ảnh minh họa trực quan
    illustrationData?: Record<string, unknown>;
    coreFormulaOrRule: string; // Quy tắc vàng
    steps: GuideStep[]; // 3 bước làm bài
    commonMistakes: CommonMistake[]; // Bẫy hay nhầm
    pocketCheatSheet: string[]; // Thẻ ghi nhớ bỏ túi
  };

  // 2. Thực hành 6-8 câu cốt lõi
  practiceQuestions: Question[];

  // 3. Thử thách 180s về đích
  speedQuestions: SpeedQuestion[];
}

export interface LessonScoreDetail {
  practiceScore: number;
  practiceTotal: number;
  speedScore: number;
  speedTotal: number;
  totalScore: number;
  totalQuestions: number;
  percentage: number;
  attempts?: number;
  lastAttemptAt?: string;
}

export interface UserProgress {
  stars: number;
  streakDays: number;
  completedLessons: string[]; // lesson ids
  scorePerLesson: Record<string, number | LessonScoreDetail>;
}

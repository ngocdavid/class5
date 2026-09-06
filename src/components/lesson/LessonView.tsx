import React, { useState } from 'react';
import { Lesson } from '../../types';
import { GuideTab } from './GuideTab';
import { PracticeTab } from './PracticeTab';
import { FinishTab } from './FinishTab';
import { RocketTimer } from '../common/RocketTimer';
import { ArrowLeft } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface LessonViewProps {
  lesson: Lesson;
  onGoBack: () => void;
  onAddStar: (amount: number) => void;
  onCompleteLesson: (lessonId: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  onGoBack,
  onAddStar,
  onCompleteLesson,
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'practice' | 'finish'>('guide');
  const [practiceScore, setPracticeScore] = useState(0);

  const handleFinishPractice = (score: number) => {
    setPracticeScore(score);
    setActiveTab('finish');
    onCompleteLesson(lesson.id);
  };

  const isMath = lesson.subject === 'math';

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      
      {/* Thanh điều hướng quay lại & Thông tin bài */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 bg-white/95 p-5 sm:p-6 rounded-3xl border-3 border-amber-300 shadow-sm">
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              sounds.playClick();
              onGoBack();
            }}
            className="p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition border-2 border-slate-300 shadow-sm"
            title="Quay lại danh sách bài"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider ${
                isMath ? 'bg-sky-100 text-sky-900 border border-sky-300' : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
              }`}>
                {isMath ? 'Toán 5' : 'Tiếng Việt 5'} • {lesson.unit}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-black">
                Bài {lesson.lessonNumber}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {lesson.title}
            </h1>
          </div>
        </div>

        {/* Đồng hồ tên lửa 35-40 phút */}
        <div className="w-full md:w-80">
          <RocketTimer totalMinutes={lesson.estimatedMinutes} />
        </div>

      </div>

      {/* 3 Tab chuyển đổi to rõ */}
      <div className="flex items-center justify-center gap-2.5 bg-slate-200/80 p-2 rounded-3xl max-w-xl mx-auto border-2 border-slate-300">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('guide');
          }}
          className={`flex-1 py-3 sm:py-3.5 px-4 rounded-2xl font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2 ${
            activeTab === 'guide'
              ? 'bg-white text-amber-700 shadow-md border-2 border-amber-300 -translate-y-0.5'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>💡 Hướng dẫn</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('practice');
          }}
          className={`flex-1 py-3 sm:py-3.5 px-4 rounded-2xl font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2 ${
            activeTab === 'practice'
              ? 'bg-white text-sky-700 shadow-md border-2 border-sky-300 -translate-y-0.5'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>✍️ Luyện tập</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('finish');
          }}
          className={`flex-1 py-3 sm:py-3.5 px-4 rounded-2xl font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2 ${
            activeTab === 'finish'
              ? 'bg-white text-emerald-700 shadow-md border-2 border-emerald-300 -translate-y-0.5'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>🏆 Về đích</span>
        </button>
      </div>

      {/* Nội dung Tab */}
      <div>
        {activeTab === 'guide' && (
          <GuideTab
            lesson={lesson}
            onGoToPractice={() => setActiveTab('practice')}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeTab
            lesson={lesson}
            onFinishPractice={handleFinishPractice}
            onAddStar={onAddStar}
          />
        )}

        {activeTab === 'finish' && (
          <FinishTab
            lesson={lesson}
            practiceScore={practiceScore}
            onRestart={() => setActiveTab('guide')}
            onGoHome={onGoBack}
            onAddStar={onAddStar}
          />
        )}
      </div>

    </div>
  );
};

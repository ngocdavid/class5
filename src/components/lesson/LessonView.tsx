import React, { useState } from 'react';
import { Lesson, LessonScoreDetail } from '../../types';
import { GuideTab } from './GuideTab';
import { PracticeTab } from './PracticeTab';
import { FinishTab } from './FinishTab';
import { RocketTimer } from '../common/RocketTimer';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface LessonViewProps {
  lesson: Lesson;
  previousScore?: number | LessonScoreDetail;
  onGoBack: () => void;
  onAddStar: (amount: number) => void;
  onCompleteLesson: (
    lessonId: string,
    practiceScore: number,
    speedScore: number,
    practiceTotal: number,
    speedTotal: number
  ) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  previousScore,
  onGoBack,
  onAddStar,
  onCompleteLesson,
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'practice' | 'finish'>('guide');
  const [practiceScore, setPracticeScore] = useState(0);
  const [attemptKey, setAttemptKey] = useState(0);

  const prevData = previousScore;
  const attempts = typeof prevData === 'object' ? (prevData.attempts || 0) : (prevData !== undefined ? 1 : 0);
  const prevTotal = typeof prevData === 'number' ? prevData : prevData?.totalScore;
  const prevQuestions = typeof prevData === 'object' ? (prevData.totalQuestions || 11) : 11;
  const prevPercentage = typeof prevData === 'object'
    ? prevData.percentage
    : (prevTotal !== undefined ? Math.round((prevTotal / prevQuestions) * 100) : null);

  const handleFinishPractice = (score: number) => {
    setPracticeScore(score);
    setActiveTab('finish');
  };

  const handleFinishLesson = (pScore: number, sScore: number) => {
    onCompleteLesson(
      lesson.id,
      pScore,
      sScore,
      lesson.practiceQuestions.length,
      lesson.speedQuestions.length
    );
  };

  const handleRestart = (targetTab: 'practice' | 'guide' = 'practice') => {
    setPracticeScore(0);
    setAttemptKey(prev => prev + 1);
    setActiveTab(targetTab);
  };

  const isMath = lesson.subject === 'math';

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      
      {/* Thanh điều hướng quay lại & Thông tin bài */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-5 bg-white/95 p-4 sm:p-6 rounded-3xl border-3 border-amber-300 shadow-sm">
        
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
          <button
            onClick={() => {
              sounds.playClick();
              onGoBack();
            }}
            className="p-2.5 sm:p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition border-2 border-slate-300 shadow-sm shrink-0 mt-0.5"
            title="Quay lại danh sách bài"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="space-y-1 sm:space-y-1.5 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shrink-0 ${
                isMath ? 'bg-sky-100 text-sky-900 border border-sky-300' : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
              }`}>
                {isMath ? 'Toán 5' : 'Tiếng Việt 5'} • {lesson.unit}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-black shrink-0">
                Bài {lesson.lessonNumber}
              </span>
              {attempts > 0 && (
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-black bg-purple-100 text-purple-900 border border-purple-300 flex items-center gap-1.5 shrink-0" title={`Đã luyện tập ${attempts} lần`}>
                  <RotateCcw className="w-3.5 h-3.5 text-purple-600" />
                  <span>Đã luyện tập: {attempts} lần</span>
                </span>
              )}
              {prevTotal !== undefined && (
                <span className={`px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-black border shrink-0 ${
                  prevPercentage === 100
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : prevPercentage && prevPercentage >= 80
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : 'bg-sky-100 text-sky-900 border-sky-300'
                }`}>
                  {prevPercentage === 100 ? '🏆' : '⭐'} Kỷ lục: {prevTotal}/{prevQuestions} ({prevPercentage}%)
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug text-balance">
              {lesson.title}
            </h1>
          </div>
        </div>

        {/* Đồng hồ tên lửa 25 phút */}
        <div className="w-full lg:w-80 shrink-0">
          <RocketTimer key={`${lesson.id}-${attemptKey}-timer`} totalMinutes={lesson.estimatedMinutes} />
        </div>

      </div>

      {/* 3 Tab chuyển đổi to rõ */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 bg-slate-200/80 p-1.5 sm:p-2 rounded-3xl max-w-xl mx-auto border-2 border-slate-300 w-full">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('guide');
          }}
          className={`flex-1 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-2xl font-black text-xs sm:text-sm md:text-base lg:text-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${
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
          className={`flex-1 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-2xl font-black text-xs sm:text-sm md:text-base lg:text-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${
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
          className={`flex-1 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-2xl font-black text-xs sm:text-sm md:text-base lg:text-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${
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
            key={`${lesson.id}-${attemptKey}-practice`}
            lesson={lesson}
            onFinishPractice={handleFinishPractice}
            onAddStar={onAddStar}
          />
        )}

        {activeTab === 'finish' && (
          <FinishTab
            key={`${lesson.id}-${attemptKey}-finish`}
            lesson={lesson}
            practiceScore={practiceScore}
            previousScore={previousScore}
            onRestart={handleRestart}
            onGoHome={onGoBack}
            onAddStar={onAddStar}
            onCompleteLesson={handleFinishLesson}
          />
        )}
      </div>

    </div>
  );
};

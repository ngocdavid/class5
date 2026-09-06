import React, { useState } from 'react';
import { Lesson, Question } from '../../types';
import { KaTeXView } from '../common/KaTeXView';
import { LessonIllustration } from '../common/LessonIllustration';
import { Check, X, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { sounds } from '../../utils/sound';
import { triggerStarConfetti } from '../../utils/confetti';

interface PracticeTabProps {
  lesson: Lesson;
  onFinishPractice: (score: number) => void;
  onAddStar: (amount: number) => void;
}

export const PracticeTab: React.FC<PracticeTabProps> = ({
  lesson,
  onFinishPractice,
  onAddStar,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, { answer: string; isCorrect: boolean }>>({});

  const questions = lesson.practiceQuestions;
  const currentQ: Question = questions[currentIndex];

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    sounds.playClick();
    setSelectedAnswer(opt);
    setIsAnswered(true);

    const isCorrect = String(opt).trim() === String(currentQ.correctAnswer).trim();

    if (isCorrect) {
      sounds.playCorrect();
      triggerStarConfetti();
      onAddStar(5);
    } else {
      sounds.playTryAgain();
      setShowHint(true);
    }

    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: { answer: opt, isCorrect }
    }));
  };

  const handleNext = () => {
    sounds.playClick();
    setShowHint(false);
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length;
      onFinishPractice(correctCount);
    }
  };

  const currentResult = userAnswers[currentQ.id];
  const isCorrect = currentResult?.isCorrect;

  const levelBadgeColor = 
    currentQ.level === 1 ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
    currentQ.level === 2 ? 'bg-sky-100 text-sky-900 border-sky-300' :
    'bg-purple-100 text-purple-900 border-purple-300';

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Thanh tiến độ câu hỏi */}
      <div className="bg-white p-5 rounded-3xl border-3 border-amber-200 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-amber-500">Câu {currentIndex + 1}</span>
          <span className="text-base font-bold text-slate-400">/ {questions.length}</span>
          <span className={`text-xs sm:text-sm font-black px-3.5 py-1 rounded-full border-2 ${levelBadgeColor}`}>
            {currentQ.levelName}
          </span>
        </div>

        {/* Các chấm tiến độ câu hỏi */}
        <div className="flex items-center gap-2">
          {questions.map((q, idx) => {
            const ans = userAnswers[q.id];
            let dotColor = 'bg-slate-200';
            if (idx === currentIndex) dotColor = 'ring-3 ring-sky-500 bg-sky-400 scale-125';
            else if (ans?.isCorrect) dotColor = 'bg-emerald-500';
            else if (ans && !ans.isCorrect) dotColor = 'bg-red-400';

            return (
              <div
                key={q.id}
                className={`w-3.5 h-3.5 rounded-full transition-all ${dotColor}`}
                title={`Câu ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Thẻ nội dung câu hỏi */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-sky-200 shadow-card-pop space-y-6">
        
        {/* Đề bài */}
        <div className="text-xl sm:text-2xl font-black text-slate-900 leading-relaxed">
          <KaTeXView content={currentQ.prompt} />
        </div>

        {/* Hình ảnh minh họa câu hỏi nếu có */}
        {currentQ.illustrationType && (
          <LessonIllustration
            type={currentQ.illustrationType}
            data={currentQ.illustrationData}
          />
        )}

        {/* Các lựa chọn đáp án */}
        <div className="grid grid-cols-1 gap-3.5">
          {currentQ.options?.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isThisCorrect = String(option).trim() === String(currentQ.correctAnswer).trim();

            let optionStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-sky-50 hover:border-sky-300';

            if (isAnswered) {
              if (isThisCorrect) {
                optionStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 shadow-chunky-sm font-black';
              } else if (isSelected && !isThisCorrect) {
                optionStyle = 'bg-red-100 border-red-500 text-red-950 opacity-80';
              } else {
                optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(option)}
                className={`w-full p-4 sm:p-5 rounded-2xl border-3 text-left font-black text-base sm:text-lg transition-all flex items-center justify-between transform active:translate-y-0.5 ${optionStyle}`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white border-2 border-slate-300 flex items-center justify-center text-base font-black text-slate-700 shadow-sm shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug"><KaTeXView content={option} /></span>
                </div>

                {isAnswered && isThisCorrect && (
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 animate-bounce">
                    <Check className="w-6 h-6" />
                  </div>
                )}
                {isAnswered && isSelected && !isThisCorrect && (
                  <div className="w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0">
                    <X className="w-6 h-6" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Nút Rô-bốt mách nước */}
        {!isAnswered && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                sounds.playClick();
                setShowHint(!showHint);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-black border-2 border-amber-300 transition"
            >
              <HelpCircle className="w-5 h-5 text-amber-500" />
              <span>{showHint ? 'Ẩn gợi ý' : 'Rô-bốt mách nước'}</span>
            </button>
          </div>
        )}

        {/* Hộp gợi ý */}
        {showHint && (
          <div className="bg-amber-50 border-3 border-amber-300 p-5 rounded-2xl flex items-start gap-3.5 animate-wiggle">
            <span className="text-3xl">💡</span>
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-black text-amber-950 uppercase">Gợi ý từ Rô-bốt:</span>
              <p className="text-base sm:text-lg font-black text-amber-900 leading-relaxed">
                <KaTeXView content={currentQ.hint} />
              </p>
            </div>
          </div>
        )}

        {/* Phản hồi sau khi trả lời */}
        {isAnswered && (
          <div className={`p-5 rounded-2xl border-3 space-y-2.5 ${
            isCorrect 
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
              : 'bg-orange-50 border-orange-300 text-orange-950'
          }`}>
            <div className="flex items-center gap-2.5 font-black text-lg sm:text-xl">
              {isCorrect ? (
                <>
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                  <span>Chính xác tuyệt vời! (+5 ⭐)</span>
                </>
              ) : (
                <>
                  <span className="text-2xl">⚠️</span>
                  <span>Chưa đúng rồi! Đừng nản, xem giải thích nhé:</span>
                </>
              )}
            </div>
            <div className="text-base font-bold text-slate-800 bg-white/90 p-4 rounded-xl border-2 border-slate-200 leading-relaxed">
              <span className="font-black text-slate-900">Giải thích chi tiết: </span>
              <KaTeXView content={currentQ.explanation} />
            </div>
          </div>
        )}

      </div>

      {/* Nút tiếp tục sang câu tiếp theo */}
      {isAnswered && (
        <div className="flex justify-end pt-3">
          <button
            onClick={handleNext}
            className="px-9 py-4 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black text-lg sm:text-xl shadow-chunky inline-flex items-center gap-3 border-3 border-blue-400 transform active:translate-y-1 transition"
          >
            <span>{currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Đến đích & Nhận quà'}</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}

    </div>
  );
};

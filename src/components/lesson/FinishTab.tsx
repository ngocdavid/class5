import React, { useState, useEffect, useMemo } from 'react';
import { Lesson } from '../../types';
import { KaTeXView } from '../common/KaTeXView';
import { Trophy, CheckCircle2, RotateCcw, Home, Zap, Heart } from 'lucide-react';
import { sounds } from '../../utils/sound';
import { triggerVictoryConfetti, triggerStarConfetti } from '../../utils/confetti';

interface FinishTabProps {
  lesson: Lesson;
  practiceScore: number;
  onRestart: () => void;
  onGoHome: () => void;
  onAddStar: (amount: number) => void;
}

export const FinishTab: React.FC<FinishTabProps> = ({
  lesson,
  practiceScore,
  onRestart,
  onGoHome,
  onAddStar,
}) => {
  const [speedIndex, setSpeedIndex] = useState(0);
  const [speedDone, setSpeedDone] = useState(false);
  const [speedScore, setSpeedScore] = useState(0);
  const [lootOpened, setLootOpened] = useState(false);

  const speedQuestions = lesson.speedQuestions;
  const currentSpeedQ = speedQuestions[speedIndex];

  // Xáo trộn thứ tự các lựa chọn một cách ngẫu nhiên và ổn định trong mỗi câu hỏi
  const shuffledSpeedOptions = useMemo(() => {
    if (!currentSpeedQ?.options) return [];
    const arr = [...currentSpeedQ.options];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [currentSpeedQ?.id]);

  useEffect(() => {
    if (speedDone) {
      sounds.playVictory();
      triggerVictoryConfetti();
      onAddStar(20);
    }
  }, [speedDone]);

  const handleSpeedAnswer = (opt: string) => {
    sounds.playClick();
    const isCorrect = String(opt).trim() === String(currentSpeedQ.correctAnswer).trim();
    if (isCorrect) {
      sounds.playCorrect();
      triggerStarConfetti();
      setSpeedScore(prev => prev + 1);
    } else {
      sounds.playTryAgain();
    }

    if (speedIndex < speedQuestions.length - 1) {
      setSpeedIndex(prev => prev + 1);
    } else {
      setSpeedDone(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-7">
      
      {!speedDone ? (
        <div className="bg-white p-5 sm:p-8 rounded-3xl border-3 sm:border-4 border-amber-300 shadow-card-pop space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 pb-4 border-slate-100">
            <div className="flex items-center gap-3">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500 fill-amber-400 shrink-0" />
              <div>
                <h3 className="font-black text-lg sm:text-xl md:text-2xl text-slate-900 text-balance">Thử Thách Tốc Độ Về Đích</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-extrabold">Chớp mắt trả lời 3 câu phản xạ nhanh!</p>
              </div>
            </div>
            <span className="self-start sm:self-auto text-xs sm:text-sm font-black px-3.5 py-1 bg-amber-100 text-amber-900 rounded-full border-2 border-amber-300 shrink-0">
              Câu {speedIndex + 1} / {speedQuestions.length}
            </span>
          </div>

          <div className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-relaxed text-balance">
            <KaTeXView content={currentSpeedQ.prompt} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {shuffledSpeedOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSpeedAnswer(option)}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-amber-100 border-2 sm:border-3 border-slate-200 hover:border-amber-400 font-black text-sm sm:text-base md:text-lg text-slate-900 transition text-left transform active:translate-y-0.5 shadow-xs"
              >
                <KaTeXView content={option} />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-7 animate-bounce-gentle">
          
          <div className="bg-gradient-to-b from-amber-100 via-orange-50 to-white p-5 sm:p-10 rounded-3xl border-3 sm:border-4 border-amber-400 shadow-card-pop text-center space-y-4 sm:space-y-5">
            
            <div className="inline-flex p-4 sm:p-5 rounded-3xl bg-amber-400 border-3 sm:border-4 border-amber-500 shadow-chunky-sm">
              <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
            </div>

            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-950 tracking-tight text-balance">
                XUẤT SẮC HOÀN THÀNH BÀI HỌC!
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-700 text-balance">
                Bạn đã chinh phục trọn vẹn: <span className="text-amber-800 font-black">{lesson.title}</span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="text-5xl animate-bounce">⭐</span>
              <span className="text-5xl animate-bounce delay-100">⭐</span>
              <span className="text-5xl animate-bounce delay-200">⭐</span>
            </div>

            <div className="pt-3">
              {!lootOpened ? (
                <button
                  onClick={() => {
                    sounds.playCorrect();
                    triggerStarConfetti();
                    setLootOpened(true);
                  }}
                  className="px-8 py-4 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-lg sm:text-xl shadow-chunky hover:from-purple-600 hover:to-pink-600 border-3 border-purple-400 transition transform active:translate-y-1"
                >
                  🎁 Bấm để mở Rương Kho Báu!
                </button>
              ) : (
                <div className="p-5 bg-purple-50 rounded-2xl border-3 border-purple-300 inline-block text-purple-950 font-black text-base sm:text-lg">
                  🎉 Bạn nhận được Huy Hiệu: <span className="underline">"Bậc Thầy {lesson.title}"</span> + 25 ⭐
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto">
              <div className="bg-white p-4 rounded-2xl border-2 border-amber-200 shadow-xs">
                <span className="text-xs sm:text-sm text-slate-500 font-black block uppercase">Bài tập SGK</span>
                <span className="text-2xl font-black text-slate-900">{practiceScore} / {lesson.practiceQuestions.length} đúng</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border-2 border-amber-200 shadow-xs">
                <span className="text-xs sm:text-sm text-slate-500 font-black block uppercase">Thử thách tốc độ</span>
                <span className="text-2xl font-black text-slate-900">{speedScore} / {speedQuestions.length} đúng</span>
              </div>
            </div>

          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border-4 border-emerald-300 shadow-sm space-y-4">
            <h4 className="font-black text-emerald-950 text-xl flex items-center gap-2.5">
              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              Sổ tay bỏ túi - Xem lại bất cứ lúc nào:
            </h4>
            <div className="space-y-2 text-base font-bold text-slate-800 bg-emerald-50/80 p-5 rounded-2xl border-2 border-emerald-200">
              {lesson.guide.pocketCheatSheet.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-600 text-lg">✓</span>
                  <KaTeXView content={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border-3 border-blue-200 p-5 rounded-3xl flex items-center gap-4">
            <Heart className="w-10 h-10 text-blue-500 shrink-0" />
            <div className="text-sm sm:text-base text-blue-950 font-bold leading-relaxed">
              <span className="block font-black text-lg">Rô-bốt dặn bạn:</span>
              Nhiệm vụ hôm nay đã hoàn thành xuất sắc trong 25 phút! Hãy tắt máy tính, uống một cốc nước ấm và vận động nhẹ nhàng để bảo vệ mắt nhé!
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => {
                sounds.playClick();
                onRestart();
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-base border-2 border-slate-300 transition flex items-center justify-center gap-2.5"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Ôn tập lại bài này</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onGoHome();
              }}
              className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-lg shadow-chunky border-3 border-emerald-400 transition flex items-center justify-center gap-3 transform active:translate-y-1"
            >
              <Home className="w-6 h-6" />
              <span>Về Bản Đồ Bài Học</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

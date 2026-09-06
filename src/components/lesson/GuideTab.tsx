import React from 'react';
import { Lesson } from '../../types';
import { KaTeXView } from '../common/KaTeXView';
import { LessonIllustration } from '../common/LessonIllustration';
import { AlertTriangle, ArrowRight, Lightbulb, Sparkles, CheckCircle2 } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface GuideTabProps {
  lesson: Lesson;
  onGoToPractice: () => void;
}

export const GuideTab: React.FC<GuideTabProps> = ({ lesson, onGoToPractice }) => {
  return (
    <div className="space-y-7 max-w-4xl mx-auto">
      
      {/* Khối 1: Dẫn nhập & Mascot Speech */}
      <div className="bg-gradient-to-r from-amber-100/90 via-orange-50 to-yellow-100/90 p-6 sm:p-7 rounded-3xl border-4 border-amber-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-amber-400 border-3 border-amber-500 flex items-center justify-center text-4xl sm:text-5xl shadow-sm shrink-0 animate-bounce-gentle">
          🤖
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-3">
            <span className="font-black text-amber-950 text-lg sm:text-xl">Rô-bốt Thông Thái mách bạn:</span>
            <span className="text-xs sm:text-sm bg-amber-200 text-amber-950 font-black px-3 py-1 rounded-full border border-amber-300">
              Đọc trong 5 phút
            </span>
          </div>
          <p className="text-slate-800 text-base sm:text-lg font-bold italic">
            "{lesson.mascotGreeting}"
          </p>
          <div className="pt-2 text-slate-800 text-base sm:text-lg bg-white/80 p-4 rounded-2xl border-2 border-amber-200 leading-relaxed font-semibold">
            <KaTeXView content={lesson.guide.storyIntro} />
          </div>
        </div>
      </div>

      {/* Khối Hình ảnh minh họa lý thuyết (nếu có) */}
      {lesson.guide.illustrationType && (
        <LessonIllustration
          type={lesson.guide.illustrationType}
          data={lesson.guide.illustrationData}
        />
      )}

      {/* Khối 2: Quy tắc vàng / Định nghĩa cốt lõi */}
      <div className="bg-white p-6 sm:p-7 rounded-3xl border-4 border-sky-300 shadow-chunky-sm space-y-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-sky-500 text-white px-5 py-1.5 rounded-bl-2xl text-xs sm:text-sm font-black tracking-wider uppercase flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> Bí kíp cốt lõi
        </div>
        <h3 className="font-black text-xl sm:text-2xl text-sky-950 flex items-center gap-2.5">
          <Lightbulb className="w-6 h-6 text-amber-500 fill-amber-400" />
          Quy tắc vàng cần nhớ:
        </h3>
        <div className="text-slate-900 font-black text-lg sm:text-xl bg-sky-50 p-5 rounded-2xl border-3 border-sky-200 leading-relaxed shadow-xs">
          <KaTeXView content={lesson.guide.coreFormulaOrRule} />
        </div>
      </div>

      {/* Khối 3: 3 Bước làm bài chuẩn */}
      <div className="space-y-4">
        <h3 className="font-black text-xl sm:text-2xl text-slate-900 flex items-center gap-2.5">
          <span className="text-2xl sm:text-3xl">📋</span>
          Công thức 3 bước làm bài:
        </h3>
        
        <div className="grid grid-cols-1 gap-4">
          {lesson.guide.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white p-5 sm:p-6 rounded-3xl border-3 border-slate-200 shadow-sm hover:border-blue-400 transition flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md border-2 border-blue-600">
                {step.stepNumber}
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-black text-slate-900 text-lg sm:text-xl">
                    {step.title}
                  </h4>
                  {step.badge && (
                    <span className="text-xs sm:text-sm font-black px-3 py-1 rounded-lg bg-blue-50 text-blue-800 border-2 border-blue-200">
                      {step.badge}
                    </span>
                  )}
                </div>
                <p className="text-slate-700 text-base sm:text-lg font-bold leading-relaxed">
                  <KaTeXView content={step.description} />
                </p>
                {step.example && (
                  <div className="mt-3 bg-slate-50 border-2 border-slate-200 p-3.5 rounded-2xl text-sm sm:text-base font-bold text-slate-800">
                    <span className="text-blue-700 font-black">Ví dụ minh họa: </span>
                    <KaTeXView content={step.example} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Khối 4: Cạm bẫy hay nhầm (Cực kỳ hữu ích cho HS Trung bình) */}
      <div className="bg-orange-50 border-4 border-orange-300 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5 text-orange-950 font-black text-xl sm:text-2xl">
          <AlertTriangle className="w-7 h-7 text-orange-600 fill-orange-300 animate-bounce-gentle" />
          Cạm bẫy bạn hay nhầm nhất:
        </div>
        
        <div className="space-y-4">
          {lesson.guide.commonMistakes.map((mistake, idx) => (
            <div key={idx} className="bg-white/95 p-5 rounded-2xl border-2 border-orange-200 shadow-sm space-y-2.5">
              <h5 className="font-black text-base sm:text-lg text-red-600 flex items-center gap-2">
                <span>❌</span> {mistake.title}
              </h5>
              <div className="text-sm sm:text-base text-slate-800 space-y-1.5 font-bold">
                <p><span className="font-black text-slate-900">Lỗi sai: </span><KaTeXView content={mistake.mistake} /></p>
                <p><span className="font-black text-slate-900">Vì sao sai: </span><KaTeXView content={mistake.whyWrong} /></p>
                <p className="text-emerald-800 font-black pt-2 bg-emerald-50 p-3 rounded-xl border-2 border-emerald-300 text-base">
                  <span className="text-emerald-900">✅ Cách sửa đúng: </span>
                  <KaTeXView content={mistake.howToFix} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Khối 5: Thẻ ghi nhớ bỏ túi */}
      <div className="bg-emerald-50 border-3 border-emerald-300 rounded-3xl p-6 space-y-3">
        <h4 className="font-black text-emerald-950 text-lg sm:text-xl flex items-center gap-2.5">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          Sổ tay ghi nhớ nhanh:
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-black text-slate-800">
          {lesson.guide.pocketCheatSheet.map((item, i) => (
            <li key={i} className="flex items-start gap-2 bg-white p-3.5 rounded-2xl border-2 border-emerald-200 shadow-xs">
              <span className="text-emerald-500 text-lg">⭐</span>
              <KaTeXView content={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* Nút hành động chuyển sang Luyện tập */}
      <div className="pt-3 text-center">
        <button
          onClick={() => {
            sounds.playClick();
            onGoToPractice();
          }}
          className="w-full sm:w-auto px-10 py-5 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-black text-xl shadow-chunky hover:from-amber-600 hover:to-orange-600 transform active:translate-y-1 transition inline-flex items-center justify-center gap-3.5 border-3 border-amber-400"
        >
          <span>Em đã hiểu rồi! Bắt đầu luyện tập ngay</span>
          <ArrowRight className="w-7 h-7 animate-pulse" />
        </button>
      </div>

    </div>
  );
};

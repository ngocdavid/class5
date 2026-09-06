import React from 'react';
import { Subject } from '../../types';
import { BookOpen, Calculator } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface SubjectSelectorProps {
  currentSubject: Subject;
  currentVolume: 1 | 2;
  onSelectSubject: (subject: Subject) => void;
  onSelectVolume: (volume: 1 | 2) => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  currentSubject,
  currentVolume,
  onSelectSubject,
  onSelectVolume,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 bg-white/90 backdrop-blur-md p-3 sm:p-5 rounded-3xl border-3 sm:border-4 border-amber-300 shadow-chunky-sm max-w-5xl mx-auto">
      
      {/* Chọn môn học */}
      <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">
        <button
          onClick={() => {
            sounds.playClick();
            onSelectSubject('math');
          }}
          className={`flex-1 md:flex-initial flex items-center justify-center gap-2 sm:gap-3.5 px-3 sm:px-5 md:px-6 py-2.5 sm:py-3.5 md:py-4 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all transform active:translate-y-1 ${
            currentSubject === 'math'
              ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-chunky border-3 border-blue-400 -translate-y-0.5'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-2 border-slate-200'
          }`}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/25 flex items-center justify-center shrink-0">
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="text-left">
            <span className="block leading-tight font-black">Toán</span>
            <span className="text-[11px] sm:text-xs font-bold opacity-90">Số & Hình học</span>
          </div>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            onSelectSubject('vietnamese');
          }}
          className={`flex-1 md:flex-initial flex items-center justify-center gap-2 sm:gap-3.5 px-3 sm:px-5 md:px-6 py-2.5 sm:py-3.5 md:py-4 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all transform active:translate-y-1 ${
            currentSubject === 'vietnamese'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-chunky border-3 border-emerald-400 -translate-y-0.5'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-2 border-slate-200'
          }`}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/25 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="text-left">
            <span className="block leading-tight font-black">Tiếng Việt</span>
            <span className="text-[11px] sm:text-xs font-bold opacity-90">Từ & Văn học</span>
          </div>
        </button>
      </div>

      {/* Chọn Học kì 1 / Học kì 2 */}
      <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 p-1.5 sm:p-2 rounded-2xl border-2 border-slate-200 w-full md:w-auto justify-center">
        <button
          onClick={() => {
            sounds.playClick();
            onSelectVolume(1);
          }}
          className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-black transition-all text-center ${
            currentVolume === 1
              ? 'bg-white text-slate-900 shadow-md border border-slate-300'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          📖 Học kì 1
        </button>
        <button
          onClick={() => {
            sounds.playClick();
            onSelectVolume(2);
          }}
          className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-black transition-all text-center ${
            currentVolume === 2
              ? 'bg-white text-slate-900 shadow-md border border-slate-300'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          📚 Học kì 2
        </button>
      </div>

    </div>
  );
};

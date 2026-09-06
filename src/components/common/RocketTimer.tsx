import React, { useState, useEffect } from 'react';
import { Clock, Pause, Play, RotateCcw } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface RocketTimerProps {
  totalMinutes?: number;
  onTimeOut?: () => void;
}

export const RocketTimer: React.FC<RocketTimerProps> = ({ totalMinutes = 35, onTimeOut }) => {
  const [secondsLeft, setSecondsLeft] = useState(totalMinutes * 60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setSecondsLeft(totalMinutes * 60);
    setIsActive(true);
  }, [totalMinutes]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            if (interval) clearInterval(interval);
            if (onTimeOut) onTimeOut();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsLeft, onTimeOut]);

  const toggleTimer = () => {
    sounds.playClick();
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    sounds.playClick();
    setSecondsLeft(totalMinutes * 60);
    setIsActive(true);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progressPercent = Math.min(100, Math.max(0, ((totalMinutes * 60 - secondsLeft) / (totalMinutes * 60)) * 100));

  const isNearEnd = secondsLeft < 5 * 60;

  return (
    <div className="bg-white rounded-3xl border-3 border-sky-300 shadow-chunky-sm p-4 flex flex-col gap-2.5 transition">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">⏱️</span>
          <div>
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Đồng hồ tự học ({totalMinutes} phút)
            </span>
            <div className="flex items-center gap-2 font-black text-2xl text-slate-800">
              <Clock className={`w-5 h-5 ${isNearEnd ? 'text-red-500 animate-spin' : 'text-sky-500'}`} />
              <span className={isNearEnd ? 'text-red-600 font-black animate-pulse' : 'text-slate-800'}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTimer}
            className="p-2.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-800 border-2 border-sky-300 transition"
            title={isActive ? "Tạm dừng" : "Tiếp tục"}
          >
            {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button
            onClick={resetTimer}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border-2 border-slate-300 transition"
            title="Đặt lại giờ"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Đường bay của Tên lửa */}
      <div className="relative pt-3 pb-1">
        <div className="h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-400 transition-all duration-1000 ease-linear rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {/* Tên lửa bay theo % */}
        <div
          className="absolute -top-1 transition-all duration-1000 ease-linear transform -translate-x-1/2 pointer-events-none"
          style={{ left: `${Math.max(5, Math.min(95, progressPercent))}%` }}
        >
          <span className="text-2xl inline-block transform rotate-45 animate-bounce-gentle">🚀</span>
        </div>
      </div>

      <div className="flex justify-between text-xs font-black text-slate-500">
        <span>Bắt đầu</span>
        <span className="text-sky-700 font-black">Đã đi được {Math.round(progressPercent)}%</span>
        <span>Mặt trăng 🌕</span>
      </div>
    </div>
  );
};

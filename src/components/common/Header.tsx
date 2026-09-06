import React, { useState } from 'react';
import { Sparkles, Flame, Volume2, VolumeX, Home, Palette } from 'lucide-react';
import { sounds } from '../../utils/sound';
import { useTheme } from '../../context/ThemeContext';
import { ThemeSwitcherModal } from './ThemeSwitcherModal';

interface HeaderProps {
  stars: number;
  streakDays: number;
  onGoHome?: () => void;
  isHome?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ stars, streakDays, onGoHome, isHome = true }) => {
  const [soundOn, setSoundOn] = useState(sounds.enabled);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const { themeConfig } = useTheme();

  const toggleSound = () => {
    sounds.enabled = !soundOn;
    setSoundOn(!soundOn);
    if (!soundOn) sounds.playClick();
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-amber-300 shadow-sm px-3 sm:px-6 md:px-8 py-2.5 sm:py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Home button */}
          <div className="flex items-center gap-2 sm:gap-3.5 cursor-pointer shrink-0" onClick={onGoHome}>
            <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center shadow-chunky-sm transform hover:scale-105 transition-transform shrink-0 border-2 border-amber-300">
              <span className="text-2xl sm:text-3xl md:text-4xl">{themeConfig.mascotEmoji}</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-xl sm:text-2xl md:text-3xl tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent truncate">
                  HỌC TỐT 5
                </span>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-black bg-amber-100 text-amber-800 border-2 border-amber-300 shrink-0">
                  KNTT
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-bold hidden md:block truncate">
                {themeConfig.mascotName} đồng hành cùng bạn
              </p>
            </div>
          </div>

          {/* Gamification Stats & Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3.5 shrink-0">
            {!isHome && onGoHome && (
              <button
                onClick={() => {
                  sounds.playClick();
                  onGoHome();
                }}
                className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm md:text-base bg-slate-100 hover:bg-slate-200 text-slate-700 transition shadow-sm border-2 border-slate-200 shrink-0"
                title="Về bản đồ bài học"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden md:inline">Bản đồ</span>
              </button>
            )}

            {/* Nút đổi Chủ đề Theme */}
            <button
              onClick={() => {
                sounds.playClick();
                setIsThemeModalOpen(true);
              }}
              className="flex items-center gap-1 p-2 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 text-amber-900 border-2 border-amber-300 shadow-sm transition transform active:translate-y-0.5 shrink-0"
              title="Đổi chủ đề giao diện (5 chủ đề)"
            >
              <Palette className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="hidden lg:inline">Chủ đề:</span>
              <span>{themeConfig.emoji}</span>
            </button>

            {/* Chuỗi ngày học Streak */}
            <div className="flex items-center gap-1 sm:gap-2 bg-orange-50 border-2 sm:border-3 border-orange-300 px-2 py-1.5 sm:px-3 sm:py-1.5 md:py-2 rounded-xl sm:rounded-2xl shadow-xs shrink-0">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-orange-500 animate-pulse shrink-0" />
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] text-orange-600 font-black leading-none uppercase">Chuỗi</span>
                <span className="text-xs sm:text-sm md:text-base font-black text-orange-700 leading-none">{streakDays} ngày</span>
              </div>
              <span className="sm:hidden text-xs font-black text-orange-700">{streakDays}d</span>
            </div>

            {/* Điểm Ngôi sao XP */}
            <div className="flex items-center gap-1 sm:gap-2 bg-amber-50 border-2 sm:border-3 border-amber-300 px-2 py-1.5 sm:px-3 sm:py-1.5 md:py-2 rounded-xl sm:rounded-2xl shadow-xs shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-400 shrink-0" />
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] text-amber-600 font-black leading-none uppercase">Sao</span>
                <span className="text-xs sm:text-sm md:text-base font-black text-amber-700 leading-none">{stars} ⭐</span>
              </div>
              <span className="sm:hidden text-xs font-black text-amber-700">{stars}⭐</span>
            </div>

            {/* Âm thanh */}
            <button
              onClick={toggleSound}
              className={`p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl border-2 sm:border-3 transition flex items-center justify-center shrink-0 ${
                soundOn 
                  ? 'bg-sky-50 border-sky-300 text-sky-600 hover:bg-sky-100' 
                  : 'bg-slate-100 border-slate-300 text-slate-400'
              }`}
              title={soundOn ? "Tắt âm thanh" : "Bật âm thanh"}
            >
              {soundOn ? <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Modal Chọn Chủ Đề */}
      <ThemeSwitcherModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </>
  );
};

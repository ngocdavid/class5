import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { THEMES, ThemeId } from '../../types/theme';
import { Palette, Check, Sparkles, X } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface ThemeSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeSwitcherModal: React.FC<ThemeSwitcherModalProps> = ({ isOpen, onClose }) => {
  const { currentTheme, setTheme } = useTheme();

  if (!isOpen) return null;

  const themesList = Object.values(THEMES);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 border-4 border-amber-300 shadow-2xl animate-bounce-gentle">
        
        <div className="flex items-center justify-between border-b-2 pb-4 border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl">
              <Palette className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-black text-2xl text-slate-900">Chọn Chủ Đề Giao Diện Yêu Thích</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-bold">5 phong cách sống động theo đúng cá tính của bạn!</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-black flex items-center justify-center text-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Danh sách 5 chủ đề */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[60vh] overflow-y-auto pr-1">
          {themesList.map((t) => {
            const isSelected = currentTheme === t.id;

            return (
              <button
                key={t.id}
                onClick={() => {
                  sounds.playClick();
                  setTheme(t.id as ThemeId);
                }}
                className={`p-4 rounded-2xl border-3 text-left transition-all transform active:translate-y-0.5 flex items-start gap-3.5 relative overflow-hidden ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50 shadow-md ring-3 ring-amber-300'
                    : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-3xl shrink-0 p-2 rounded-xl bg-white shadow-xs border border-slate-200">
                  {t.emoji}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-base text-slate-900 leading-tight">
                      {t.name}
                    </h4>
                    {isSelected && (
                      <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 font-bold leading-relaxed line-clamp-2">
                    {t.tagline}
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-[11px] font-black text-amber-700">
                    <span>{t.mascotEmoji}</span>
                    <span>{t.mascotName}</span>
                  </div>
                </div>

                {t.id === 'adventure' && (
                  <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">
                    Mặc định
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Tự động lưu vào máy của bạn
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm shadow-sm transition"
          >
            Đã Chọn Xong!
          </button>
        </div>

      </div>
    </div>
  );
};

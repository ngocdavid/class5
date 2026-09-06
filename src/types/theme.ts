export type ThemeId = 'adventure' | 'space' | 'pixel' | 'chibi' | 'sporty';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  emoji: string;
  mascotName: string;
  mascotEmoji: string;
  bgAppClass: string;
  cardClass: string;
  borderClass: string;
  buttonPrimaryClass: string;
  bannerGradientClass: string;
  badgeClass: string;
  textColorClass: string;
  subtextColorClass: string;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  adventure: {
    id: 'adventure',
    name: 'Khám Phá & Săn Kho Báu',
    tagline: 'Chuyến thám hiểm rừng rậm, biển sâu và truy tìm rương vàng tri thức!',
    emoji: '🧭',
    mascotName: 'Rô-bốt Nhà Thám Hiểm',
    mascotEmoji: '🤠',
    bgAppClass: 'bg-amber-50/60',
    cardClass: 'bg-[#FFFDF5] border-3 border-amber-300 shadow-card-pop',
    borderClass: 'border-amber-400',
    buttonPrimaryClass: 'bg-gradient-to-r from-emerald-600 via-amber-600 to-amber-700 hover:from-emerald-700 hover:to-amber-800 text-white border-2 border-amber-500 shadow-chunky',
    bannerGradientClass: 'from-emerald-700 via-amber-600 to-teal-800 border-amber-400',
    badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    textColorClass: 'text-amber-950',
    subtextColorClass: 'text-amber-800/80',
  },
  space: {
    id: 'space',
    name: 'Vũ Trụ & Công Nghệ Sci-Fi',
    tagline: 'Du hành vũ trụ, trạm không gian neon và công nghệ tương lai!',
    emoji: '🚀',
    mascotName: 'Cyber Rô-bốt Phi Hành Gia',
    mascotEmoji: '👨‍🚀',
    bgAppClass: 'bg-[#0B0F19] text-slate-100',
    cardClass: 'bg-[#131B2E]/90 border-2 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md',
    borderClass: 'border-cyan-400',
    buttonPrimaryClass: 'bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-2 border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]',
    bannerGradientClass: 'from-cyan-950 via-indigo-950 to-purple-950 border-cyan-400',
    badgeClass: 'bg-cyan-950/80 text-cyan-300 border-cyan-600',
    textColorClass: 'text-cyan-50',
    subtextColorClass: 'text-cyan-200/70',
  },
  pixel: {
    id: 'pixel',
    name: 'Game & Pixel Block',
    tagline: 'Thế giới khối hộp Minecraft & Roblox, thanh máu tim đỏ và cúp vàng!',
    emoji: '🎮',
    mascotName: 'Rô-bốt 8-Bit Pixel',
    mascotEmoji: '👾',
    bgAppClass: 'bg-[#A3E635]/20',
    cardClass: 'bg-white border-4 border-black shadow-[6px_6px_0px_#000] rounded-none',
    borderClass: 'border-black',
    buttonPrimaryClass: 'bg-[#22C55E] hover:bg-[#16A34A] text-white border-4 border-black shadow-[4px_4px_0px_#000] rounded-none active:translate-x-1 active:translate-y-1 active:shadow-none',
    bannerGradientClass: 'from-[#15803D] via-[#166534] to-[#14532D] border-black shadow-[8px_8px_0px_#000] rounded-none',
    badgeClass: 'bg-black text-[#FACC15] border-2 border-black rounded-none',
    textColorClass: 'text-black',
    subtextColorClass: 'text-slate-800',
  },
  chibi: {
    id: 'chibi',
    name: 'Anime & Chibi Dễ Thương',
    tagline: 'Thế giới kẹo ngọt lung linh, bạn Mèo Chibi và phong cách Manga học trò!',
    emoji: '✨',
    mascotName: 'Bạn Mèo Chibi Đáng Yêu',
    mascotEmoji: '🐱',
    bgAppClass: 'bg-pink-50/50',
    cardClass: 'bg-white/95 border-3 border-pink-300 shadow-[0_10px_25px_rgba(244,114,182,0.15)] rounded-3xl',
    borderClass: 'border-pink-400',
    buttonPrimaryClass: 'bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 hover:from-pink-600 hover:to-rose-500 text-white border-3 border-pink-300 shadow-chunky',
    bannerGradientClass: 'from-pink-500 via-rose-400 to-amber-300 border-pink-300',
    badgeClass: 'bg-pink-100 text-pink-800 border-pink-300',
    textColorClass: 'text-slate-900',
    subtextColorClass: 'text-pink-900/70',
  },
  sporty: {
    id: 'sporty',
    name: 'Thể Thao & Streetwear',
    tagline: 'Ván trượt Skateboard, Sneakers cực ngầu và tinh thần thể thao bứt phá!',
    emoji: '🛹',
    mascotName: 'Rô-bốt Skater Đường Phố',
    mascotEmoji: '🧢',
    bgAppClass: 'bg-slate-100',
    cardClass: 'bg-white border-3 border-blue-600 shadow-[0_8px_0px_#1E3A8A] rounded-2xl',
    borderClass: 'border-blue-600',
    buttonPrimaryClass: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-red-600 hover:from-blue-800 hover:to-red-700 text-white border-2 border-blue-500 shadow-[0_4px_0px_#1E3A8A]',
    bannerGradientClass: 'from-blue-900 via-indigo-900 to-red-800 border-blue-500',
    badgeClass: 'bg-blue-100 text-blue-900 border-blue-300',
    textColorClass: 'text-slate-900',
    subtextColorClass: 'text-blue-950/80',
  }
};

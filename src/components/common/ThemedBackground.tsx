import React from 'react';
import { ThemeId } from '../../types/theme';

interface ThemedBackgroundProps {
  theme: ThemeId;
}

export const ThemedBackground: React.FC<ThemedBackgroundProps> = ({ theme }) => {
  return (
    <aside
      aria-label="Hình nền trang trí hai bên lề"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {theme === 'adventure' && <AdventureDecorations />}
      {theme === 'space' && <SpaceDecorations />}
      {theme === 'pixel' && <PixelDecorations />}
      {theme === 'chibi' && <ChibiDecorations />}
      {theme === 'sporty' && <SportyDecorations />}
    </aside>
  );
};

/* =========================================================================
   1. CHỦ ĐỀ 5 (MẶC ĐỊNH): KHÁM PHÁ & SĂN KHO BÁU (ADVENTURE QUEST)
   ========================================================================= */
const AdventureDecorations: React.FC = () => {
  return (
    <>
      {/* Nền bản đồ cổ mờ nhẹ với đường đồng mức và dấu chấm thám hiểm */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="topo-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 0 40 Q 50 10 100 40 T 200 40" fill="none" stroke="#78350F" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M 0 100 Q 60 70 120 100 T 200 100" fill="none" stroke="#78350F" strokeWidth="1" />
            <path d="M 0 160 Q 40 130 90 160 T 200 160" fill="none" stroke="#78350F" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="60" cy="80" r="3" fill="#D97706" />
            <circle cx="150" cy="140" r="3" fill="#D97706" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-pattern)" />
      </svg>

      {/* LỀ TRÁI: Dây leo nhiệt đới, Bản đồ kho báu X, La bàn hoa tiêu, Rương vàng */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 2xl:w-96 flex flex-col justify-between py-6 pl-2 sm:pl-4 opacity-30 md:opacity-75 xl:opacity-100 transition-opacity duration-500">
        
        {/* Góc trên bên trái: Dây leo rừng nhiệt đới trập trùng */}
        <div className="transform -translate-x-2 -translate-y-2 animate-bounce-gentle">
          <svg viewBox="0 0 200 160" className="w-36 sm:w-52 h-auto drop-shadow-md">
            {/* Cành cây dây leo uốn lượn */}
            <path d="M-10,-10 Q40,60 120,40 T190,120" fill="none" stroke="#451A03" strokeWidth="7" strokeLinecap="round" />
            <path d="M-5,15 Q60,90 140,85" fill="none" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
            {/* Các chùm lá to xanh mướt */}
            <path d="M40,55 C20,25 60,10 80,45 C85,60 60,65 40,55 Z" fill="#16A34A" stroke="#14532D" strokeWidth="2" />
            <path d="M70,45 C75,15 120,15 115,50 C110,65 85,60 70,45 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
            <path d="M120,40 C140,10 180,30 165,65 C150,80 130,60 120,40 Z" fill="#15803D" stroke="#052E16" strokeWidth="2" />
            <path d="M140,85 C170,75 185,115 155,125 C135,130 130,100 140,85 Z" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
            {/* Hoa rừng vàng nhiệt đới */}
            <circle cx="120" cy="50" r="8" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
            <circle cx="120" cy="50" r="3" fill="#DC2626" />
          </svg>
        </div>

        {/* Giữa lề trái: Cuộn giấy Bản đồ kho báu cổ có dấu X đỏ */}
        <div className="my-auto transform -rotate-6 hover:rotate-0 transition-transform">
          <svg viewBox="0 0 180 150" className="w-32 sm:w-48 h-auto drop-shadow-lg">
            {/* Nền tấm bản đồ giấy da cổ cong viền rách */}
            <path d="M20,20 C50,15 130,25 160,20 C165,55 155,110 160,135 C125,140 45,130 20,135 C15,95 25,50 20,20 Z" 
                  fill="#FEF3C7" stroke="#B45309" strokeWidth="3" />
            <path d="M30,30 C60,28 120,33 150,30" fill="none" stroke="#D97706" strokeWidth="1" strokeDasharray="2,2" />
            {/* Các ngọn núi đảo hoang */}
            <polygon points="50,75 65,45 80,75" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <polygon points="75,75 90,50 105,75" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
            {/* Đường chấm hải trình thám hiểm */}
            <path d="M50,95 Q85,115 110,85 T135,110" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4,4" />
            {/* Dấu X đánh dấu kho báu rực rỡ */}
            <path d="M125,100 L145,120 M145,100 L125,120" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
            {/* Chữ TREASURE tí hon */}
            <text x="35" y="125" fontSize="10" fontWeight="bold" fill="#78350F" fontFamily="monospace">MAP: KNTT</text>
          </svg>
        </div>

        {/* Góc dưới bên trái: Rương vàng kho báu tri thức hé mở */}
        <div className="transform translate-y-2">
          <svg viewBox="0 0 170 140" className="w-32 sm:w-48 h-auto drop-shadow-xl">
            {/* Đáy rương gỗ viền đồng */}
            <rect x="25" y="65" width="120" height="60" rx="8" fill="#78350F" stroke="#451A03" strokeWidth="4" />
            {/* Nẹp sắt/vàng gia cố rương */}
            <rect x="45" y="65" width="14" height="60" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            <rect x="111" y="65" width="14" height="60" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            {/* Ánh sáng vàng tỏa ra từ rương */}
            <polygon points="35,65 85,20 135,65" fill="#FDE047" opacity="0.6" />
            {/* Nắp rương bật mở vòm cong */}
            <path d="M20,65 C20,35 150,35 150,65 Z" fill="#92400E" stroke="#451A03" strokeWidth="4" />
            <path d="M45,43 C45,35 59,35 59,43 L59,65 L45,65 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <path d="M111,43 C111,35 125,35 125,43 L125,65 L111,65 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            {/* Khóa vàng & đồng xu vàng tràn ra */}
            <circle cx="85" cy="65" r="9" fill="#FACC15" stroke="#78350F" strokeWidth="2" />
            <circle cx="65" cy="80" r="7" fill="#FBBF24" stroke="#B45309" strokeWidth="1.5" />
            <circle cx="105" cy="82" r="7" fill="#FBBF24" stroke="#B45309" strokeWidth="1.5" />
            <circle cx="85" cy="85" r="8" fill="#FACC15" stroke="#B45309" strokeWidth="1.5" />
            {/* Viên kim cương xanh biển lấp lánh */}
            <polygon points="85,45 95,55 85,65 75,55" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          </svg>
        </div>

      </div>

      {/* LỀ PHẢI: Lá cọ viễn chinh, Kính viễn vọng thám hiểm, La bàn hàng hải, Mỏ neo */}
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 2xl:w-96 flex flex-col justify-between py-6 pr-2 sm:pr-4 items-end opacity-30 md:opacity-75 xl:opacity-100 transition-opacity duration-500">
        
        {/* Góc trên bên phải: Lá cọ và dây leo sa mạc xanh tốt */}
        <div className="transform translate-x-2 -translate-y-2 animate-bounce-gentle">
          <svg viewBox="0 0 200 160" className="w-36 sm:w-52 h-auto drop-shadow-md">
            <path d="M210,-10 Q160,50 80,40 T10,120" fill="none" stroke="#451A03" strokeWidth="7" strokeLinecap="round" />
            {/* Lá cọ xòe quạt */}
            <path d="M160,55 C180,25 140,10 120,45 C115,60 140,65 160,55 Z" fill="#15803D" stroke="#14532D" strokeWidth="2" />
            <path d="M130,45 C125,15 80,15 85,50 C90,65 115,60 130,45 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
            <path d="M80,40 C60,10 20,30 35,65 C50,80 70,60 80,40 Z" fill="#16A34A" stroke="#052E16" strokeWidth="2" />
            {/* Quả chuối / dừa vàng dại */}
            <circle cx="105" cy="55" r="7" fill="#F59E0B" stroke="#78350F" strokeWidth="1.5" />
            <circle cx="118" cy="60" r="7" fill="#F59E0B" stroke="#78350F" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Giữa lề phải: La bàn thám hiểm hoa tiêu mạ vàng hoàng gia */}
        <div className="my-auto transform rotate-6 hover:rotate-0 transition-transform">
          <svg viewBox="0 0 170 170" className="w-32 sm:w-48 h-auto drop-shadow-xl">
            {/* Vỏ tròn la bàn đồng thau */}
            <circle cx="85" cy="85" r="70" fill="#FDE68A" stroke="#92400E" strokeWidth="6" />
            <circle cx="85" cy="85" r="58" fill="#FFFBEB" stroke="#B45309" strokeWidth="2" />
            {/* Vòng chia độ la bàn */}
            <circle cx="85" cy="85" r="50" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3,5" />
            {/* Chữ 4 phương hướng N, E, S, W */}
            <text x="81" y="44" fontSize="14" fontWeight="900" fill="#DC2626">N</text>
            <text x="81" y="137" fontSize="14" fontWeight="900" fill="#78350F">S</text>
            <text x="127" y="90" fontSize="14" fontWeight="900" fill="#78350F">E</text>
            <text x="35" y="90" fontSize="14" fontWeight="900" fill="#78350F">W</text>
            {/* Kim la bàn hoa tiêu Bắc (Đỏ) - Nam (Xanh) */}
            <polygon points="85,38 93,85 85,80 77,85" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
            <polygon points="85,132 93,85 85,90 77,85" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
            {/* Tâm la bàn vàng óng */}
            <circle cx="85" cy="85" r="6" fill="#F59E0B" stroke="#451A03" strokeWidth="2" />
          </svg>
        </div>

        {/* Góc dưới bên phải: Kính viễn vọng ngắm biển & Mỏ neo thám hiểm */}
        <div className="transform translate-y-2">
          <svg viewBox="0 0 170 140" className="w-32 sm:w-48 h-auto drop-shadow-xl">
            {/* Ống nhòm viễn vọng bằng đồng thau hướng lên */}
            <g transform="rotate(-30 85 85)">
              <rect x="30" y="70" width="35" height="24" rx="4" fill="#B45309" stroke="#78350F" strokeWidth="2" />
              <rect x="65" y="74" width="40" height="16" fill="#D97706" stroke="#92400E" strokeWidth="2" />
              <rect x="105" y="77" width="35" height="10" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
              <circle cx="28" cy="82" r="14" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
            </g>
            {/* Mỏ neo vàng tàu thám hiểm */}
            <path d="M120,60 L120,120 M95,95 C95,130 145,130 145,95 M90,95 L100,95 M140,95 L150,95" 
                  fill="none" stroke="#D97706" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="120" cy="55" r="8" fill="none" stroke="#D97706" strokeWidth="4" />
          </svg>
        </div>

      </div>
    </>
  );
};

/* =========================================================================
   2. CHỦ ĐỀ 1: VŨ TRỤ & CÔNG NGHỆ TƯƠNG LAI (SCI-FI SPACE)
   ========================================================================= */
const SpaceDecorations: React.FC = () => {
  return (
    <>
      {/* Bầu trời sao lấp lánh & các chòm sao cyan mờ */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping opacity-80" />
        <div className="absolute top-1/3 left-16 w-2 h-2 bg-yellow-200 rounded-full animate-pulse opacity-90" />
        <div className="absolute top-2/3 left-28 w-1 h-1 bg-white rounded-full animate-ping opacity-60" />
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-90" />
        <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-ping opacity-80" />
        <div className="absolute top-3/4 right-32 w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-90" />
      </div>

      {/* LỀ TRÁI: Trạm không gian vi mạch, Chòm sao, Hành tinh khổng lồ */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 flex flex-col justify-between py-6 pl-2 sm:pl-4 opacity-35 md:opacity-80 xl:opacity-100 transition-opacity duration-500">
        
        {/* Vệ tinh / Trạm vũ trụ không gian Cyber phát sóng */}
        <div className="transform animate-bounce-gentle">
          <svg viewBox="0 0 170 130" className="w-32 sm:w-44 h-auto drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            {/* Tấm pin mặt trời bên trái */}
            <rect x="15" y="45" width="40" height="35" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
            <line x1="15" y1="62" x2="55" y2="62" stroke="#38BDF8" strokeWidth="1" />
            <line x1="35" y1="45" x2="35" y2="80" stroke="#38BDF8" strokeWidth="1" />
            {/* Khung thân trạm không gian */}
            <rect x="58" y="52" width="45" height="22" rx="4" fill="#1E293B" stroke="#06B6D4" strokeWidth="2.5" />
            <circle cx="80" cy="63" r="5" fill="#22D3EE" />
            {/* Tấm pin mặt trời bên phải */}
            <rect x="106" y="45" width="40" height="35" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
            <line x1="106" y1="62" x2="146" y2="62" stroke="#38BDF8" strokeWidth="1" />
            <line x1="126" y1="45" x2="126" y2="80" stroke="#38BDF8" strokeWidth="1" />
            {/* Anten phát sóng & vòng sóng tín hiệu */}
            <line x1="80" y1="52" x2="80" y2="28" stroke="#06B6D4" strokeWidth="2" />
            <circle cx="80" cy="25" r="3" fill="#F43F5E" />
            <circle cx="80" cy="25" r="8" fill="none" stroke="#06B6D4" strokeWidth="1" strokeDasharray="2,2" opacity="0.8" />
          </svg>
        </div>

        {/* Chòm sao hình học Sci-Fi */}
        <div className="my-auto transform -rotate-12">
          <svg viewBox="0 0 160 140" className="w-28 sm:w-40 h-auto">
            <polyline points="20,40 60,20 100,50 140,30 110,95 50,110 20,40" fill="none" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.7" />
            <circle cx="20" cy="40" r="4" fill="#38BDF8" />
            <circle cx="60" cy="20" r="5" fill="#A855F7" />
            <circle cx="100" cy="50" r="4" fill="#38BDF8" />
            <circle cx="140" cy="30" r="5" fill="#F472B6" />
            <circle cx="110" cy="95" r="4" fill="#38BDF8" />
            <circle cx="50" cy="110" r="4" fill="#A855F7" />
          </svg>
        </div>

        {/* Hành tinh có vành đai khổng lồ (Saturn Style) */}
        <div className="transform translate-y-2">
          <svg viewBox="0 0 180 140" className="w-36 sm:w-52 h-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            {/* Mặt cầu hành tinh tím xanh */}
            <circle cx="90" cy="70" r="40" fill="url(#space-planet-grad)" />
            {/* Vành đai nghiêng */}
            <ellipse cx="90" cy="70" rx="75" ry="18" fill="none" stroke="#22D3EE" strokeWidth="5" strokeOpacity="0.8" transform="rotate(-15 90 70)" />
            <ellipse cx="90" cy="70" rx="65" ry="14" fill="none" stroke="#E879F9" strokeWidth="2.5" strokeOpacity="0.9" transform="rotate(-15 90 70)" />
            <defs>
              <linearGradient id="space-planet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="60%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>

      {/* LỀ PHẢI: Tên lửa phi thuyền, Phi hành gia Chibi, Tinh vân rực rỡ */}
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 flex flex-col justify-between py-6 pr-2 sm:pr-4 items-end opacity-35 md:opacity-80 xl:opacity-100 transition-opacity duration-500">
        
        {/* Tàu con thoi phóng vút lên với luồng lửa phản lực */}
        <div className="transform -rotate-12 animate-bounce-gentle">
          <svg viewBox="0 0 140 160" className="w-28 sm:w-40 h-auto drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]">
            {/* Luồng lửa phản lực tên lửa */}
            <polygon points="70,110 58,150 70,140 82,150" fill="#F43F5E" />
            <polygon points="70,110 63,138 70,132 77,138" fill="#FBBF24" />
            {/* Cánh tên lửa hai bên */}
            <polygon points="45,95 25,120 50,115" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
            <polygon points="95,95 115,120 90,115" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Thân tên lửa bóng bẩy */}
            <path d="M70,25 C52,50 48,90 48,115 L92,115 C92,90 88,50 70,25 Z" fill="#F8FAFC" stroke="#06B6D4" strokeWidth="2.5" />
            {/* Cửa sổ buồng lái phi hành gia xanh dương phát sáng */}
            <circle cx="70" cy="60" r="10" fill="#06B6D4" stroke="#0891B2" strokeWidth="2" />
            <circle cx="73" cy="57" r="3" fill="#FFFFFF" />
            {/* Mũi nhọn tên lửa đỏ */}
            <path d="M70,25 C62,38 58,48 58,50 L82,50 C82,48 78,38 70,25 Z" fill="#EF4444" />
          </svg>
        </div>

        {/* Phi hành gia Chibi lơ lửng giơ tay chào */}
        <div className="my-auto transform rotate-6">
          <svg viewBox="0 0 130 140" className="w-28 sm:w-40 h-auto drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
            {/* Dây nối oxi thám hiểm uốn lượn */}
            <path d="M65,95 Q110,120 125,70" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3,3" />
            {/* Bình dưỡng khí lưng */}
            <rect x="42" y="55" width="46" height="42" rx="8" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            {/* Thân đồ phi hành gia trắng */}
            <rect x="48" y="60" width="34" height="35" rx="10" fill="#F1F5F9" stroke="#06B6D4" strokeWidth="2" />
            {/* Nón bảo hiểm tròn to */}
            <circle cx="65" cy="45" r="24" fill="#F8FAFC" stroke="#06B6D4" strokeWidth="2.5" />
            {/* Kính nón bảo hiểm màu vàng kim phản chiếu */}
            <ellipse cx="65" cy="45" rx="16" ry="12" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
            <ellipse cx="68" cy="42" rx="5" ry="3" fill="#FEF3C7" opacity="0.8" />
            {/* Bàn tay giơ lên vẫy chào */}
            <circle cx="32" cy="55" r="7" fill="#F8FAFC" stroke="#06B6D4" strokeWidth="1.5" />
            <circle cx="98" cy="65" r="7" fill="#F8FAFC" stroke="#06B6D4" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Vệt tinh vân xoáy ốc huyền ảo */}
        <div className="transform translate-y-2">
          <svg viewBox="0 0 160 140" className="w-32 sm:w-44 h-auto">
            <path d="M40,90 Q90,20 140,80 T80,130" fill="none" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            <path d="M60,80 Q95,40 120,85" fill="none" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <circle cx="100" cy="75" r="6" fill="#F472B6" />
          </svg>
        </div>

      </div>
    </>
  );
};

/* =========================================================================
   3. CHỦ ĐỀ 2: GAME & PIXEL BLOCK (MINECRAFT / ROBLOX)
   ========================================================================= */
const PixelDecorations: React.FC = () => {
  return (
    <>
      {/* Lưới ô vuông Pixel nhẹ nhàng */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pixel-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <rect width="32" height="32" fill="none" stroke="#166534" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pixel-grid)" />
      </svg>

      {/* LỀ TRÁI: Đám mây pixel, Cây khối hộp Minecraft, Khối đất cỏ, Cúp pixel */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 flex flex-col justify-between py-6 pl-2 sm:pl-4 opacity-35 md:opacity-85 xl:opacity-100 transition-opacity duration-500">
        
        {/* Đám mây khối hộp Pixel 8-bit */}
        <div className="transform translate-x-2">
          <svg viewBox="0 0 150 70" className="w-32 sm:w-44 h-auto drop-shadow-[4px_4px_0px_#000]">
            <rect x="10" y="25" width="120" height="30" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
            <rect x="35" y="10" width="70" height="20" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
            <rect x="25" y="30" width="20" height="15" fill="#E2E8F0" />
            <rect x="75" y="35" width="30" height="12" fill="#CBD5E1" />
          </svg>
        </div>

        {/* Cây Minecraft khối hộp lá xanh thân nâu */}
        <div className="my-auto transform -rotate-3">
          <svg viewBox="0 0 140 180" className="w-28 sm:w-40 h-auto drop-shadow-[5px_5px_0px_#000]">
            {/* Tán lá khối hộp pixel */}
            <rect x="20" y="10" width="90" height="80" fill="#22C55E" stroke="#000000" strokeWidth="4" />
            <rect x="35" y="25" width="25" height="25" fill="#16A34A" />
            <rect x="65" y="45" width="30" height="30" fill="#15803D" />
            <rect x="30" y="60" width="20" height="20" fill="#4ADE80" />
            {/* Thân cây gỗ khối pixel */}
            <rect x="50" y="90" width="30" height="80" fill="#854D0E" stroke="#000000" strokeWidth="4" />
            <rect x="55" y="105" width="10" height="25" fill="#713F12" />
            <rect x="65" y="140" width="10" height="20" fill="#A16207" />
          </svg>
        </div>

        {/* Cúp Vàng Pixel 8-Bit */}
        <div className="transform translate-y-2">
          <svg viewBox="0 0 140 130" className="w-28 sm:w-40 h-auto drop-shadow-[4px_4px_0px_#000]">
            {/* Chân cúp khối hộp */}
            <rect x="35" y="100" width="70" height="20" fill="#A16207" stroke="#000" strokeWidth="3" />
            <rect x="55" y="80" width="30" height="20" fill="#CA8A04" stroke="#000" strokeWidth="3" />
            {/* Thân chén cúp vàng */}
            <rect x="35" y="25" width="70" height="55" fill="#FACC15" stroke="#000" strokeWidth="3.5" />
            <rect x="45" y="35" width="15" height="30" fill="#FEF08A" />
            {/* Quai cúp pixel hai bên */}
            <rect x="15" y="30" width="20" height="35" fill="none" stroke="#000" strokeWidth="3.5" />
            <rect x="105" y="30" width="20" height="35" fill="none" stroke="#000" strokeWidth="3.5" />
            {/* Ngôi sao số 1 pixel trên cúp */}
            <rect x="65" y="45" width="10" height="20" fill="#854D0E" />
          </svg>
        </div>

      </div>

      {/* LỀ PHẢI: Mặt trời pixel, Thanh 3 tim sinh lực ❤️❤️❤️, Kiếm kim cương */}
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 flex flex-col justify-between py-6 pr-2 sm:pr-4 items-end opacity-35 md:opacity-85 xl:opacity-100 transition-opacity duration-500">
        
        {/* Mặt trời vuông 8-bit vàng chói */}
        <div className="transform -translate-x-2">
          <svg viewBox="0 0 100 100" className="w-24 sm:w-32 h-auto drop-shadow-[4px_4px_0px_#000]">
            <rect x="15" y="15" width="70" height="70" fill="#FBBF24" stroke="#000000" strokeWidth="4" />
            <rect x="25" y="25" width="20" height="20" fill="#FEF08A" />
            <rect x="50" y="50" width="25" height="25" fill="#F59E0B" />
          </svg>
        </div>

        {/* Cột 3 trái tim đỏ Minecraft (Health Bar) */}
        <div className="my-auto space-y-3">
          {[1, 2, 3].map((i) => (
            <svg key={i} viewBox="0 0 60 55" className="w-12 sm:w-16 h-auto drop-shadow-[3px_3px_0px_#000]">
              <path d="M 5,20 L 5,10 L 15,5 L 25,5 L 30,12 L 35,5 L 45,5 L 55,10 L 55,20 L 30,50 Z" 
                    fill="#EF4444" stroke="#000000" strokeWidth="3.5" />
              {/* Vệt sáng pixel trên tim */}
              <rect x="12" y="10" width="8" height="8" fill="#FCA5A5" />
            </svg>
          ))}
        </div>

        {/* Kiếm kim cương Diamond Sword Minecraft */}
        <div className="transform translate-y-2 rotate-12">
          <svg viewBox="0 0 120 150" className="w-24 sm:w-36 h-auto drop-shadow-[4px_4px_0px_#000]">
            {/* Lưỡi kiếm kim cương xanh cyan */}
            <rect x="55" y="15" width="18" height="80" fill="#38BDF8" stroke="#000" strokeWidth="3" />
            <polygon points="55,15 64,2 73,15" fill="#0284C7" stroke="#000" strokeWidth="2" />
            <rect x="59" y="25" width="6" height="60" fill="#E0F2FE" />
            {/* Chắn tay bảo vệ */}
            <rect x="35" y="95" width="58" height="15" fill="#0284C7" stroke="#000" strokeWidth="3" />
            {/* Chuôi kiếm gỗ */}
            <rect x="58" y="110" width="12" height="25" fill="#78350F" stroke="#000" strokeWidth="3" />
            <rect x="54" y="135" width="20" height="12" fill="#0284C7" stroke="#000" strokeWidth="3" />
          </svg>
        </div>

      </div>
    </>
  );
};

/* =========================================================================
   4. CHỦ ĐỀ 3: ANIME & CHIBI DỄ THƯƠNG (MANGA ACADEMY)
   ========================================================================= */
const ChibiDecorations: React.FC = () => {
  return (
    <>
      {/* Cánh hoa anh đào Sakura bay lượn lơ lửng */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-1/5 w-4 h-6 bg-pink-300 rounded-full rotate-45 opacity-70 animate-bounce-gentle" />
        <div className="absolute top-1/3 left-12 w-3 h-5 bg-rose-200 rounded-full -rotate-12 opacity-80" />
        <div className="absolute top-3/5 left-24 w-5 h-7 bg-pink-400 rounded-full rotate-12 opacity-60" />
        <div className="absolute top-24 right-1/4 w-4 h-6 bg-pink-300 rounded-full -rotate-45 opacity-70 animate-bounce-gentle" />
        <div className="absolute top-1/2 right-16 w-3 h-5 bg-rose-300 rounded-full rotate-45 opacity-80" />
        <div className="absolute top-4/5 right-28 w-5 h-7 bg-pink-200 rounded-full -rotate-30 opacity-60" />
      </div>

      {/* LỀ TRÁI: Cầu vồng pastel, Dấu chân mèo Chibi đáng yêu, Đũa phép ngôi sao */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 flex flex-col justify-between py-6 pl-2 sm:pl-4 opacity-35 md:opacity-85 xl:opacity-100 transition-opacity duration-500">
        
        {/* Đám mây hồng & Cầu vồng ngọt ngào */}
        <div className="transform animate-bounce-gentle">
          <svg viewBox="0 0 160 110" className="w-32 sm:w-44 h-auto drop-shadow-md">
            {/* Vòng cung cầu vồng pastel */}
            <path d="M20,70 A55,55 0 0,1 140,70" fill="none" stroke="#F43F5E" strokeWidth="6" opacity="0.6" />
            <path d="M26,70 A49,49 0 0,1 134,70" fill="none" stroke="#FBBF24" strokeWidth="6" opacity="0.6" />
            <path d="M32,70 A43,43 0 0,1 128,70" fill="none" stroke="#34D399" strokeWidth="6" opacity="0.6" />
            <path d="M38,70 A37,37 0 0,1 122,70" fill="none" stroke="#38BDF8" strokeWidth="6" opacity="0.6" />
            {/* Đám mây má hồng Chibi */}
            <circle cx="50" cy="75" r="22" fill="#FFFFFF" />
            <circle cx="80" cy="65" r="26" fill="#FFFFFF" />
            <circle cx="110" cy="75" r="20" fill="#FFFFFF" />
            {/* Mắt nhắm cười & má hồng */}
            <path d="M72,68 Q80,74 88,68" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
            <circle cx="68" cy="73" r="3" fill="#FDA4AF" />
            <circle cx="92" cy="73" r="3" fill="#FDA4AF" />
          </svg>
        </div>

        {/* Dấu chân mèo con đi dọc theo lề */}
        <div className="my-auto space-y-4 pl-3">
          {[1, 2, 3].map((step) => (
            <svg key={step} viewBox="0 0 50 50" className={`w-10 sm:w-14 h-auto ${step % 2 === 0 ? 'ml-6 rotate-12' : '-rotate-12'}`}>
              <ellipse cx="25" cy="32" rx="14" ry="11" fill="#F472B6" />
              <circle cx="14" cy="16" r="4.5" fill="#F472B6" />
              <circle cx="25" cy="12" r="5" fill="#F472B6" />
              <circle cx="36" cy="16" r="4.5" fill="#F472B6" />
            </svg>
          ))}
        </div>

        {/* Cây đũa phép ngôi sao Anime với nơ hồng */}
        <div className="transform translate-y-2 rotate-12">
          <svg viewBox="0 0 130 150" className="w-28 sm:w-40 h-auto drop-shadow-lg">
            {/* Cán đũa phép vàng pastel */}
            <rect x="58" y="55" width="10" height="85" rx="5" fill="#FDE68A" stroke="#F59E0B" strokeWidth="2" />
            {/* Nơ bướm hồng */}
            <path d="M40,65 Q63,70 40,85 Z" fill="#FB7185" stroke="#E11D48" strokeWidth="1.5" />
            <path d="M86,65 Q63,70 86,85 Z" fill="#FB7185" stroke="#E11D48" strokeWidth="1.5" />
            <circle cx="63" cy="72" r="5" fill="#FFE4E6" />
            {/* Ngôi sao ma thuật trên đỉnh đũa */}
            <polygon points="63,15 72,40 98,40 78,56 85,80 63,65 41,80 48,56 28,40 54,40" 
                     fill="#FBBF24" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="63" cy="46" r="6" fill="#F43F5E" />
          </svg>
        </div>

      </div>

      {/* LỀ PHẢI: Ngôi sao Kira-kira ✨, Ly trà sữa trân châu Boba Chibi, Mèo ngủ */}
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 flex flex-col justify-between py-6 pr-2 sm:pr-4 items-end opacity-35 md:opacity-85 xl:opacity-100 transition-opacity duration-500">
        
        {/* Ngôi sao lấp lánh Anime Kira-kira ✨ */}
        <div className="transform animate-pulse">
          <svg viewBox="0 0 120 120" className="w-24 sm:w-36 h-auto drop-shadow-md">
            <path d="M60,10 Q65,55 110,60 Q65,65 60,110 Q55,65 10,60 Q55,55 60,10 Z" fill="#FACC15" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="60" cy="60" r="8" fill="#FFFBEB" />
            <circle cx="95" cy="25" r="4" fill="#FB7185" />
            <circle cx="25" cy="95" r="4" fill="#38BDF8" />
          </svg>
        </div>

        {/* Ly trà sữa trân châu Boba Chibi mắt long lanh */}
        <div className="my-auto transform rotate-6">
          <svg viewBox="0 0 120 160" className="w-24 sm:w-36 h-auto drop-shadow-lg">
            {/* Ống hút to cắm chéo */}
            <line x1="60" y1="10" x2="60" y2="70" stroke="#FB7185" strokeWidth="10" strokeLinecap="round" transform="rotate(-15 60 40)" />
            {/* Cốc trà sữa màu caramel */}
            <path d="M30,50 L40,140 C41,148 79,148 80,140 L90,50 Z" fill="#FED7AA" stroke="#EA580C" strokeWidth="3" />
            {/* Nắp vòm kem bơ trắng */}
            <path d="M25,52 C25,30 95,30 95,52 Z" fill="#FFFFFF" stroke="#EA580C" strokeWidth="3" />
            {/* Khuôn mặt Chibi cười */}
            <circle cx="50" cy="85" r="4" fill="#431407" />
            <circle cx="70" cy="85" r="4" fill="#431407" />
            <circle cx="48" cy="83" r="1.5" fill="#FFF" />
            <circle cx="68" cy="83" r="1.5" fill="#FFF" />
            <path d="M57,92 Q60,96 63,92" fill="none" stroke="#431407" strokeWidth="2" strokeLinecap="round" />
            <circle cx="43" cy="92" r="3" fill="#FDA4AF" />
            <circle cx="77" cy="92" r="3" fill="#FDA4AF" />
            {/* Các hạt trân châu đen tròn ở đáy ly */}
            <circle cx="48" cy="130" r="5" fill="#431407" />
            <circle cx="62" cy="132" r="5.5" fill="#431407" />
            <circle cx="74" cy="128" r="5" fill="#431407" />
            <circle cx="55" cy="122" r="4.5" fill="#431407" />
          </svg>
        </div>

        {/* Bé mèo Chibi cuộn tròn ngủ ngoan */}
        <div className="transform translate-y-2">
          <svg viewBox="0 0 150 120" className="w-32 sm:w-44 h-auto drop-shadow-md">
            {/* Nệm tròn pastel mềm */}
            <ellipse cx="75" cy="90" rx="65" ry="25" fill="#FCE7F3" stroke="#F472B6" strokeWidth="2" />
            {/* Thân mèo tròn */}
            <ellipse cx="75" cy="70" rx="40" ry="30" fill="#FFFFFF" stroke="#F472B6" strokeWidth="3" />
            {/* Tai mèo nhỏ xinh */}
            <polygon points="45,50 55,30 65,48" fill="#F472B6" stroke="#DB2777" strokeWidth="1.5" />
            <polygon points="85,48 95,30 105,50" fill="#F472B6" stroke="#DB2777" strokeWidth="1.5" />
            {/* Mắt ngủ êm đềm & má phấn */}
            <path d="M60,65 Q65,70 70,65" fill="none" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
            <path d="M80,65 Q85,70 90,65" fill="none" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
            <circle cx="55" cy="72" r="3" fill="#FDA4AF" />
            <circle cx="95" cy="72" r="3" fill="#FDA4AF" />
            {/* Đuôi mèo quấn quanh người */}
            <path d="M115,75 Q125,60 115,50" fill="none" stroke="#F472B6" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

      </div>
    </>
  );
};

/* =========================================================================
   5. CHỦ ĐỀ 4: THỂ THAO & STREETWEAR (SPORTY SPEED)
   ========================================================================= */
const SportyDecorations: React.FC = () => {
  return (
    <>
      {/* Vệt kẻ tốc độ thể thao & đường đua năng động */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sport-stripes" width="40" height="40" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#1E3A8A" strokeWidth="6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sport-stripes)" />
      </svg>

      {/* LỀ TRÁI: Dải sọc thể thao đường đua, Giày Sneakers, Ván trượt Skateboard */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 flex flex-col justify-between py-6 pl-2 sm:pl-4 opacity-35 md:opacity-85 xl:opacity-100 transition-opacity duration-500">
        
        {/* Dải 3 vạch thể thao đường phố (Varsity Stripes) */}
        <div className="transform -translate-x-2">
          <svg viewBox="0 0 160 80" className="w-32 sm:w-48 h-auto">
            <polygon points="0,10 120,10 90,30 0,30" fill="#2563EB" />
            <polygon points="0,35 140,35 110,55 0,55" fill="#DC2626" />
            <polygon points="0,60 100,60 70,80 0,80" fill="#FACC15" />
          </svg>
        </div>

        {/* Giày thể thao Sneakers cổ cao cực ngầu */}
        <div className="my-auto transform -rotate-12">
          <svg viewBox="0 0 160 120" className="w-32 sm:w-48 h-auto drop-shadow-xl">
            {/* Đế giày cao su trắng dày */}
            <path d="M20,95 L145,95 C150,95 152,105 145,110 L20,110 C15,110 15,95 20,95 Z" fill="#F8FAFC" stroke="#1E293B" strokeWidth="3" />
            {/* Thân giày da đỏ xanh */}
            <path d="M30,95 L40,35 L75,35 L90,65 L135,75 C145,80 145,95 135,95 Z" fill="#DC2626" stroke="#1E293B" strokeWidth="3" />
            {/* Mũi giày cao su trắng */}
            <path d="M125,75 C142,80 145,95 135,95 L115,95 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
            {/* Vạch tia chớp vàng trên thân giày */}
            <polygon points="60,50 85,60 70,75 105,75" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            {/* Dây giày trắng đan chéo */}
            <line x1="55" y1="45" x2="68" y2="52" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <line x1="68" y1="52" x2="58" y2="60" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="60" x2="72" y2="68" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Ván trượt Skateboard viền lửa */}
        <div className="transform translate-y-2 rotate-6">
          <svg viewBox="0 0 170 90" className="w-32 sm:w-48 h-auto drop-shadow-lg">
            {/* Bánh xe ván trượt */}
            <circle cx="45" cy="70" r="10" fill="#EF4444" stroke="#1E293B" strokeWidth="3" />
            <circle cx="125" cy="70" r="10" fill="#EF4444" stroke="#1E293B" strokeWidth="3" />
            {/* Trục ván kim loại */}
            <rect x="40" y="55" width="90" height="8" fill="#94A3B8" stroke="#1E293B" strokeWidth="2" />
            {/* Mặt ván trượt gỗ cong 2 đầu */}
            <path d="M15,45 C25,48 40,55 85,55 C130,55 145,48 155,45 C160,55 140,65 85,65 C30,65 10,55 15,45 Z" 
                  fill="#2563EB" stroke="#1E293B" strokeWidth="3" />
            {/* Họa tiết ngọn lửa vàng trên mặt ván */}
            <path d="M40,55 Q65,48 85,58 Q110,48 130,55" fill="none" stroke="#FACC15" strokeWidth="3" />
          </svg>
        </div>

      </div>

      {/* LỀ PHẢI: Sticker COOL, Quả bóng rổ & Bóng đá, Huy chương vàng Vô địch */}
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 xl:w-84 flex flex-col justify-between py-6 pr-2 sm:pr-4 items-end opacity-35 md:opacity-85 xl:opacity-100 transition-opacity duration-500">
        
        {/* Sticker Graffiti nổi "COOL" / "NO.1" */}
        <div className="transform rotate-12 animate-bounce-gentle">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-lg sm:text-2xl px-5 py-2.5 rounded-2xl border-4 border-black shadow-[5px_5px_0px_#000] tracking-wider uppercase">
            ⚡ NO.1 🏆
          </div>
        </div>

        {/* Quả bóng rổ da cam rực rỡ */}
        <div className="my-auto transform rotate-45">
          <svg viewBox="0 0 120 120" className="w-24 sm:w-36 h-auto drop-shadow-xl">
            <circle cx="60" cy="60" r="50" fill="#EA580C" stroke="#1E293B" strokeWidth="4" />
            {/* Đường gân bóng rổ đen đặc trưng */}
            <line x1="10" y1="60" x2="110" y2="60" stroke="#1E293B" strokeWidth="4" />
            <line x1="60" y1="10" x2="60" y2="110" stroke="#1E293B" strokeWidth="4" />
            <path d="M25,25 C45,45 45,75 25,95" fill="none" stroke="#1E293B" strokeWidth="4" />
            <path d="M95,25 C75,45 75,75 95,95" fill="none" stroke="#1E293B" strokeWidth="4" />
          </svg>
        </div>

        {/* Huy chương Vàng Vô địch với ruy băng thể thao 3 màu */}
        <div className="transform translate-y-2">
          <svg viewBox="0 0 140 160" className="w-28 sm:w-40 h-auto drop-shadow-xl">
            {/* Dây ruy băng cổ chữ V */}
            <polygon points="40,10 70,70 50,70 20,10" fill="#2563EB" stroke="#1E293B" strokeWidth="2" />
            <polygon points="100,10 70,70 90,70 120,10" fill="#DC2626" stroke="#1E293B" strokeWidth="2" />
            {/* Mặt huy chương vàng tròn to */}
            <circle cx="70" cy="105" r="42" fill="#FACC15" stroke="#B45309" strokeWidth="4" />
            <circle cx="70" cy="105" r="34" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
            {/* Ngôi sao số 1 nổi */}
            <polygon points="70,82 74,94 87,94 77,102 81,114 70,106 59,114 63,102 53,94 66,94" 
                     fill="#B45309" />
          </svg>
        </div>

      </div>
    </>
  );
};

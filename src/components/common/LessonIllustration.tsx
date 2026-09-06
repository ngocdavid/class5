import React from 'react';

interface LessonIllustrationProps {
  type: string;
  data?: Record<string, unknown>;
  caption?: string;
  className?: string;
}

export const LessonIllustration: React.FC<LessonIllustrationProps> = ({
  type,
  data = {},
  caption,
  className = '',
}) => {
  const renderIllustration = () => {
    switch (type) {
      /* 1. Minh họa Thước đo 10 phần & Số thập phân */
      case 'decimal-strip-10': {
        const filled = typeof data.filled === 'number' ? data.filled : 7;
        return (
          <div className="bg-amber-50/80 p-4 rounded-2xl border-2 border-amber-200 flex flex-col items-center gap-3">
            <div className="text-xs font-extrabold text-amber-900 bg-amber-200/80 px-3 py-1 rounded-full">
              Thước đo 1 mét được chia làm 10 phần bằng nhau
            </div>
            
            {/* Dải 10 ô */}
            <div className="w-full max-w-md h-12 bg-white rounded-xl border-3 border-slate-700 flex overflow-hidden shadow-sm">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 border-r border-slate-300 last:border-r-0 flex items-center justify-center font-black text-xs transition-all ${
                    i < filled 
                      ? 'bg-amber-400 text-amber-950 font-black' 
                      : 'bg-slate-50 text-slate-400'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Chú thích giá trị */}
            <div className="flex items-center justify-between w-full max-w-md text-xs sm:text-sm font-extrabold text-slate-700 px-1">
              <span className="text-amber-700 bg-white px-2 py-1 rounded-lg border border-amber-300 shadow-xs">
                Tô màu: {filled}/10 = {filled / 10} m
              </span>
              <span className="text-slate-500 bg-white px-2 py-1 rounded-lg border border-slate-200">
                Còn lại: {10 - filled}/10 = {(10 - filled) / 10} m
              </span>
            </div>
          </div>
        );
      }

      /* 2. Minh họa Lưới 100 ô vuông (Phần trăm) */
      case 'decimal-grid-100': {
        const filled = typeof data.filled === 'number' ? data.filled : 25;
        return (
          <div className="bg-sky-50/80 p-4 rounded-2xl border-2 border-sky-200 flex flex-col items-center gap-3">
            <div className="text-xs font-extrabold text-sky-900 bg-sky-200/80 px-3 py-1 rounded-full">
              Hình vuông gồm 100 ô nhỏ bằng nhau (Mỗi ô là 1/100 = 0,01)
            </div>

            <div className="w-48 h-48 bg-white border-2 border-slate-700 grid grid-cols-10 grid-rows-10 p-0.5 rounded-lg shadow-sm gap-0.5">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xs transition-all ${
                    i < filled ? 'bg-sky-500' : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <div className="text-xs sm:text-sm font-black text-sky-900 bg-white px-3 py-1.5 rounded-xl border border-sky-300">
              Tô màu {filled} ô = 25/100 = 0,25 (hai mươi lăm phần trăm)
            </div>
          </div>
        );
      }

      /* 3. Minh họa Đặt tính cộng số thập phân thẳng cột dấu phẩy */
      case 'decimal-addition-alignment': {
        return (
          <div className="bg-white p-5 rounded-2xl border-3 border-amber-300 shadow-sm flex flex-col items-center gap-3">
            <div className="text-xs font-extrabold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Mô hình đặt tính: Dấu phẩy thẳng tắp như sợi chỉ đỏ!
            </div>

            <div className="relative font-mono text-xl sm:text-2xl font-black bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 tracking-wider">
              {/* Vạch gióng màu đỏ xuyên qua dấu phẩy */}
              <div 
                className="absolute top-2 bottom-2 w-1 bg-red-500/60 rounded-full z-10 pointer-events-none"
                style={{ left: '55%' }}
              />
              
              <div className="space-y-1 text-right">
                <div className="flex justify-end items-center gap-1">
                  <span className="text-blue-600 font-extrabold">12</span>
                  <span className="text-red-600 font-black">,</span>
                  <span className="text-amber-600 font-extrabold">5</span>
                </div>
                <div className="flex justify-end items-center gap-1 border-b-3 border-slate-700 pb-1">
                  <span className="text-slate-400 font-bold mr-2">+</span>
                  <span className="text-blue-600 font-extrabold">4</span>
                  <span className="text-red-600 font-black">,</span>
                  <span className="text-amber-600 font-extrabold">2</span>
                </div>
                <div className="flex justify-end items-center gap-1 pt-1 text-emerald-600 font-black">
                  <span>16</span>
                  <span className="text-red-600">,</span>
                  <span>7</span>
                </div>
              </div>

              {/* Chú thích các cột */}
              <div className="mt-3 pt-2 border-t border-slate-200 flex justify-between text-[10px] font-sans font-extrabold text-slate-500">
                <span className="text-blue-600">Phần nguyên</span>
                <span className="text-red-600 font-black">Thẳng dấu phẩy!</span>
                <span className="text-amber-600">Phần thập phân</span>
              </div>
            </div>
          </div>
        );
      }

      /* 4. Minh họa Cắt ghép Tam giác thành Hình chữ nhật */
      case 'triangle-area-cut-merge': {
        return (
          <div className="bg-emerald-50/80 p-4 rounded-2xl border-2 border-emerald-300 flex flex-col items-center gap-3">
            <div className="text-xs font-black text-emerald-900 bg-emerald-200/80 px-3 py-1 rounded-full">
              Vì sao diện tích tam giác phải chia 2?
            </div>

            <div className="w-full max-w-sm flex items-center justify-center py-2">
              <svg viewBox="0 0 240 130" className="w-full h-auto drop-shadow-sm">
                {/* Hình chữ nhật bao ngoài nét đứt */}
                <rect x="20" y="20" width="200" height="90" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" rx="4" />
                
                {/* Tam giác 1 (Gốc) màu xanh lá đậm */}
                <polygon points="20,110 160,20 220,110" fill="#34D399" fillOpacity="0.8" stroke="#059669" strokeWidth="2.5" />
                
                {/* Chiều cao h */}
                <line x1="160" y1="20" x2="160" y2="110" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="3 3" />
                {/* Ký hiệu góc vuông */}
                <path d="M 160,100 L 170,100 L 170,110" fill="none" stroke="#DC2626" strokeWidth="2" />

                {/* Nhãn chiều cao h */}
                <text x="165" y="65" fill="#DC2626" fontSize="13" fontWeight="900">h (chiều cao)</text>

                {/* Nhãn đáy a */}
                <text x="100" y="125" fill="#047857" fontSize="13" fontWeight="900">a (độ dài đáy)</text>

                {/* Mũi tên và ghi chú */}
                <text x="25" y="40" fill="#059669" fontSize="11" fontWeight="700">Tam giác 1</text>
                <text x="175" y="40" fill="#6EE7B7" fontSize="11" fontWeight="700">+ Tam giác 2</text>
              </svg>
            </div>

            <div className="bg-white p-3 rounded-xl border border-emerald-300 text-xs sm:text-sm font-extrabold text-emerald-900 text-center leading-snug">
              2 tam giác bằng nhau ghép lại thành 1 hình chữ nhật diện tích <span className="text-red-600">a × h</span><br />
              ➔ 1 hình tam giác có diện tích bằng một nửa: <span className="text-emerald-700 font-black">(a × h) : 2</span>
            </div>
          </div>
        );
      }

      /* 5. Minh họa Hình tam giác cụ thể với số đo đáy và chiều cao */
      case 'triangle-measurements': {
        const base = (data.base as string) || '12 cm';
        const height = (data.height as string) || '6 cm';
        return (
          <div className="bg-white p-4 rounded-2xl border-2 border-sky-300 flex flex-col items-center gap-2">
            <svg viewBox="0 0 200 110" className="w-48 sm:w-56 h-auto drop-shadow-sm">
              {/* Tam giác */}
              <polygon points="20,95 130,20 180,95" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.5" />
              {/* Đường cao */}
              <line x1="130" y1="20" x2="130" y2="95" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
              {/* Góc vuông */}
              <path d="M 130,87 L 138,87 L 138,95" fill="none" stroke="#EF4444" strokeWidth="1.5" />

              {/* Số đo chiều cao */}
              <text x="135" y="55" fill="#DC2626" fontSize="12" fontWeight="800">h = {height}</text>
              {/* Số đo cạnh đáy */}
              <text x="80" y="107" fill="#0369A1" fontSize="12" fontWeight="800">Đáy = {base}</text>
            </svg>
            <div className="text-xs font-bold text-slate-600 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
              Độ dài đáy: <span className="font-extrabold text-sky-700">{base}</span> | Chiều cao: <span className="font-extrabold text-red-600">{height}</span>
            </div>
          </div>
        );
      }

      /* 6. Minh họa So sánh: Từ nhiều nghĩa (Cùng họ hàng) vs Từ đồng âm (Người dưng) */
      case 'homophone-vs-polysemy': {
        return (
          <div className="bg-white p-4 rounded-2xl border-3 border-purple-300 shadow-sm space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Cột 1: Từ nhiều nghĩa */}
              <div className="bg-amber-50 p-3.5 rounded-xl border-2 border-amber-300 flex flex-col items-center text-center gap-2">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <span className="text-xs font-black text-amber-900 uppercase bg-amber-200 px-2 py-0.5 rounded-md">
                  Từ nhiều nghĩa (CÙNG HỌ HÀNG)
                </span>
                <p className="text-xs font-bold text-slate-700">
                  Có nét nghĩa tương đồng về vị trí, hình dáng:
                </p>
                <div className="bg-white p-2 rounded-lg border border-amber-200 text-xs font-extrabold text-amber-800 w-full space-y-1">
                  <div>🦵 <b>Chân người:</b> Bộ phận đỡ cơ thể</div>
                  <div className="text-slate-400 text-[10px]">⬇️ mượn đặc điểm nâng đỡ ở dưới ⬇️</div>
                  <div>⛰️ <b>Chân núi, chân bàn:</b> Vị trí dưới cùng</div>
                </div>
              </div>

              {/* Cột 2: Từ đồng âm */}
              <div className="bg-purple-50 p-3.5 rounded-xl border-2 border-purple-300 flex flex-col items-center text-center gap-2">
                <span className="text-2xl">🎭</span>
                <span className="text-xs font-black text-purple-900 uppercase bg-purple-200 px-2 py-0.5 rounded-md">
                  Từ đồng âm (NGƯỜI DƯNG TRÙNG TÊN)
                </span>
                <p className="text-xs font-bold text-slate-700">
                  Đọc giống hệt nhau nhưng nghĩa HOÀN TOÀN XA LẠ:
                </p>
                <div className="bg-white p-2 rounded-lg border border-purple-200 text-xs font-extrabold text-purple-800 w-full space-y-1">
                  <div>🪰 <b>Con ruồi đậu:</b> Hành động dừng lại</div>
                  <div className="text-red-400 text-[10px]">❌ KHÔNG CÓ LIÊN QUAN NÀO ❌</div>
                  <div>🍚 <b>Xôi đậu:</b> Hạt đỗ thực vật</div>
                </div>
              </div>

            </div>
          </div>
        );
      }

      /* 7. Minh họa Bức tranh thiên nhiên - Thanh âm của gió */
      case 'wind-nature-scenery': {
        return (
          <div className="bg-gradient-to-b from-sky-100 via-emerald-50 to-amber-50 p-4 rounded-2xl border-2 border-emerald-300 flex flex-col items-center gap-2 overflow-hidden relative">
            <svg viewBox="0 0 300 130" className="w-full max-w-md h-auto">
              {/* Bầu trời & Mây */}
              <circle cx="260" cy="30" r="18" fill="#FDE047" opacity="0.9" />
              <path d="M 40,30 Q 55,20 70,30 Q 85,20 100,30 L 40,30" fill="#FFFFFF" opacity="0.9" />
              
              {/* Những dải gió vi vu lượn sóng */}
              <path d="M 20,45 Q 70,25 120,45 T 220,45" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" />
              <path d="M 60,60 Q 110,40 160,60 T 270,60" fill="none" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4" />

              {/* Rặng tre làng quê uốn lượn theo gió */}
              <path d="M 20,130 Q 35,80 60,70" fill="none" stroke="#15803D" strokeWidth="4" />
              <path d="M 35,130 Q 50,75 80,65" fill="none" stroke="#16A34A" strokeWidth="3.5" />
              <path d="M 220,130 Q 240,75 270,60" fill="none" stroke="#15803D" strokeWidth="4" />

              {/* Cánh đồng lúa vàng */}
              <rect x="0" y="100" width="300" height="30" fill="#FEF08A" />
              <line x1="0" y1="100" x2="300" y2="100" stroke="#F59E0B" strokeWidth="2" />

              {/* Bạn nhỏ thả diều trên đê */}
              <circle cx="150" cy="92" r="5" fill="#F97316" />
              <line x1="150" y1="97" x2="150" y2="110" stroke="#1E293B" strokeWidth="2" />
              <line x1="150" y1="102" x2="165" y2="106" stroke="#1E293B" strokeWidth="1.5" />
              {/* Dây diều & Cánh diều đỏ */}
              <line x1="165" y1="106" x2="200" y2="40" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
              <polygon points="200,40 210,32 205,48 195,45" fill="#EF4444" />
            </svg>
            <span className="text-xs font-extrabold text-emerald-800 bg-white/90 px-3 py-1 rounded-full border border-emerald-200">
              🌾 Tiếng gió vi vu hòa ca cùng đồng lúa chín và cánh diều tuổi thơ
            </span>
          </div>
        );
      }

      /* 8. Minh họa Hai bình nước */
      case 'water-pitchers': {
        return (
          <div className="bg-blue-50/80 p-4 rounded-2xl border-2 border-blue-200 flex items-center justify-center gap-6">
            {/* Bình 1 */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-16 h-24 bg-white border-3 border-blue-500 rounded-b-2xl rounded-t-lg relative overflow-hidden shadow-sm flex flex-col justify-end">
                <div className="w-full bg-blue-400 h-[65%] rounded-b-xl transition-all" />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-blue-950">
                  1,75 l
                </span>
              </div>
              <span className="text-xs font-extrabold text-slate-700">Bình thứ nhất</span>
            </div>

            <div className="text-2xl font-black text-blue-400">+</div>

            {/* Bình 2 */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-16 h-24 bg-white border-3 border-emerald-500 rounded-b-2xl rounded-t-lg relative overflow-hidden shadow-sm flex flex-col justify-end">
                <div className="w-full bg-emerald-400 h-[85%] rounded-b-xl transition-all" />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-emerald-950">
                  +0,5 l
                </span>
              </div>
              <span className="text-xs font-extrabold text-slate-700">Bình thứ hai</span>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className={`my-3 ${className}`}>
      {renderIllustration()}
      {caption && (
        <p className="text-center text-xs font-bold text-slate-500 mt-1.5">
          {caption}
        </p>
      )}
    </div>
  );
};

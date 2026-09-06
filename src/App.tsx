import { useState, useEffect, useMemo } from 'react';
import { Subject, Lesson, UserProgress } from './types';
import { getLessonsBySubjectAndVolume, getTopics } from './data/lessonRepository';
import { Header } from './components/common/Header';
import { ThemedBackground } from './components/common/ThemedBackground';
import { SubjectSelector } from './components/common/SubjectSelector';
import { LessonView } from './components/lesson/LessonView';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { 
  Sparkles, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Search, 
  Download, 
  Upload, 
  Copy, 
  Check, 
  Layers, 
  Trophy,
  Filter
} from 'lucide-react';
import { sounds } from './utils/sound';

function MainApp() {
  const [currentSubject, setCurrentSubject] = useState<Subject>('math');
  const [currentVolume, setCurrentVolume] = useState<1 | 2>(1);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  // Theme configuration
  const { currentTheme, themeConfig } = useTheme();

  // Bộ lọc tìm kiếm và chủ đề
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  // Modal sao lưu
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [backupCodeInput, setBackupCodeInput] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // Tiến độ học tập
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('class5_study_progress');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      stars: 45,
      streakDays: 3,
      completedLessons: ['math-bai-10'],
      scorePerLesson: { 'math-bai-10': 6 }
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('class5_study_progress', JSON.stringify(progress));
    } catch {}
  }, [progress]);

  const addStars = (amount: number) => {
    setProgress(prev => ({ ...prev, stars: prev.stars + amount }));
  };

  const markCompleted = (lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        stars: prev.stars + 15,
        completedLessons: [...prev.completedLessons, lessonId]
      };
    });
  };

  // Danh sách bài học theo Môn và Tập
  const allCurrentLessons = useMemo(() => {
    return getLessonsBySubjectAndVolume(currentSubject, currentVolume);
  }, [currentSubject, currentVolume]);

  // Danh sách chủ đề
  const topics = useMemo(() => {
    return getTopics(currentSubject, currentVolume);
  }, [currentSubject, currentVolume]);

  // Lọc theo tìm kiếm và chủ đề
  const filteredLessons = useMemo(() => {
    return allCurrentLessons.filter(lesson => {
      const matchSearch = 
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(lesson.lessonNumber).includes(searchQuery) ||
        lesson.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchTopic = selectedTopic === 'all' || lesson.unit === selectedTopic;

      return matchSearch && matchTopic;
    });
  }, [allCurrentLessons, searchQuery, selectedTopic]);

  // Tính phần trăm hoàn thành
  const completedInCurrentVolume = allCurrentLessons.filter(l => progress.completedLessons.includes(l.id)).length;
  const completionPercentage = Math.round((completedInCurrentVolume / (allCurrentLessons.length || 1)) * 100);

  // Xử lý sao lưu mã
  const currentBackupCode = useMemo(() => {
    try {
      return btoa(JSON.stringify(progress));
    } catch {
      return '';
    }
  }, [progress]);

  const handleCopyBackup = () => {
    navigator.clipboard.writeText(currentBackupCode);
    setCopySuccess(true);
    sounds.playCorrect();
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleRestoreBackup = () => {
    try {
      const restored = JSON.parse(atob(backupCodeInput.trim()));
      if (restored && typeof restored.stars === 'number') {
        setProgress(restored);
        sounds.playVictory();
        alert('Khôi phục tiến trình học tập thành công!');
        setShowBackupModal(false);
      }
    } catch {
      sounds.playTryAgain();
      alert('Mã sao lưu không hợp lệ. Vui lòng kiểm tra lại!');
    }
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tien-trinh-hoc-lop-5-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    sounds.playClick();
  };

  return (
    <div className={`relative min-h-screen ${themeConfig.bgAppClass} flex flex-col font-fun transition-colors duration-300 overflow-x-hidden`}>
      
      {/* Họa tiết đồ họa trang trí lấp đầy 2 bên lề theo Theme */}
      <ThemedBackground theme={currentTheme} />

      {/* Header điều hướng & Gamification */}
      <Header
        stars={progress.stars}
        streakDays={progress.streakDays}
        isHome={!selectedLesson}
        onGoHome={() => setSelectedLesson(null)}
      />

      {/* Main Container */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 md:px-8 py-5 sm:py-7">
        
        {selectedLesson ? (
          /* Giao diện 1 Bài học chi tiết (30-45 phút) */
          <LessonView
            lesson={selectedLesson}
            onGoBack={() => setSelectedLesson(null)}
            onAddStar={addStars}
            onCompleteLesson={markCompleted}
          />
        ) : (
          /* Giao diện Trang chủ: Bản đồ bài học (Quest Map) */
          <div className="space-y-6 sm:space-y-7">
            
            {/* Banner chào mừng theo Theme */}
            <div className={`relative overflow-hidden bg-gradient-to-r ${themeConfig.bannerGradientClass} rounded-3xl p-5 sm:p-7 md:p-9 text-white shadow-chunky border-3 sm:border-4 transition-all duration-300`}>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
                <div className="space-y-2.5 text-center md:text-left min-w-0">
                  <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black border border-white/30 text-balance">
                    <Sparkles className="w-4 h-4 text-amber-200 shrink-0" />
                    <span>Bộ sách Kết nối tri thức với cuộc sống • Trọn bộ 136 Bài</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-sm leading-tight text-balance">
                    {themeConfig.name}
                  </h1>
                  <p className="text-white/90 font-extrabold text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-balance">
                    {themeConfig.tagline}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2.5 shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-3xl bg-white/20 backdrop-blur-md border-3 sm:border-4 border-white/40 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl shadow-inner animate-bounce-gentle">
                    {themeConfig.mascotEmoji}
                  </div>
                  {/* Nút sao lưu chuyển máy */}
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setShowBackupModal(true);
                    }}
                    className="text-xs sm:text-sm font-black bg-white/30 hover:bg-white/40 text-white px-3.5 sm:px-4 py-2 rounded-2xl border-2 border-white/40 transition flex items-center gap-2 shadow-sm shrink-0"
                  >
                    <span>💾 Sao lưu / Chuyển máy</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Thanh chọn Môn học & Học kì 1 / Học kì 2 */}
            <SubjectSelector
              currentSubject={currentSubject}
              currentVolume={currentVolume}
              onSelectSubject={(s) => {
                setCurrentSubject(s);
                setSelectedTopic('all');
              }}
              onSelectVolume={(v) => {
                setCurrentVolume(v);
                setSelectedTopic('all');
              }}
            />

            {/* Thanh tiến độ tổng quan môn học */}
            <div className="bg-white/95 p-4 sm:p-5 rounded-3xl border-3 border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shrink-0 border-2 border-amber-300">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-black text-slate-500 uppercase tracking-wider">Tiến độ Học kì {currentVolume}</span>
                  <div className="text-base sm:text-lg md:text-xl font-black text-slate-800">
                    Đã hoàn thành: <span className="text-emerald-600 font-black">{completedInCurrentVolume}</span> / {allCurrentLessons.length} bài ({completionPercentage}%)
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full sm:w-64 md:w-72 h-3.5 sm:h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all duration-700 rounded-full"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>

            {/* Công cụ Tìm kiếm bài học & Lọc chủ đề */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5">
                {/* Thanh tìm kiếm to rõ */}
                <div className="relative flex-1 w-full">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder={`Tìm kiếm trong ${allCurrentLessons.length} bài (nhập số hoặc tên bài...)...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 sm:pl-12 pr-12 py-3 sm:py-3.5 md:py-4 rounded-2xl border-2 sm:border-3 border-slate-200 focus:border-amber-400 focus:outline-none bg-white font-black text-sm sm:text-base md:text-lg text-slate-800 shadow-sm transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-black text-slate-500 hover:text-slate-800 bg-slate-100 px-2.5 py-1 rounded-xl"
                    >
                      Xóa
                    </button>
                  )}
                </div>

                {/* Bộ lọc chủ đề Dropdown */}
                <div className="w-full sm:w-auto flex items-center gap-2 bg-white px-3.5 py-3 sm:py-3.5 rounded-2xl border-2 sm:border-3 border-slate-200 shadow-sm shrink-0">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 shrink-0" />
                  <select
                    value={selectedTopic}
                    onChange={(e) => {
                      sounds.playClick();
                      setSelectedTopic(e.target.value);
                    }}
                    className="font-black text-xs sm:text-sm md:text-base text-slate-800 bg-transparent focus:outline-none cursor-pointer max-w-full truncate"
                  >
                    <option value="all">Tất cả chủ đề ({topics.length} chủ đề)</option>
                    {topics.map((t, idx) => (
                      <option key={idx} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dải nút bấm chủ đề nhanh (Desktop & Tablet) */}
              <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setSelectedTopic('all');
                  }}
                  className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition shrink-0 ${
                    selectedTopic === 'all'
                      ? 'bg-amber-500 text-white shadow-sm border-2 border-amber-400'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-2 border-slate-200'
                  }`}
                >
                  Tất cả ({allCurrentLessons.length})
                </button>
                {topics.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      sounds.playClick();
                      setSelectedTopic(topic);
                    }}
                    className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition flex items-center gap-1.5 shrink-0 ${
                      selectedTopic === topic
                        ? 'bg-amber-500 text-white shadow-sm border-2 border-amber-400'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-2 border-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{topic}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Danh sách các bài học (Hành trình thám hiểm) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-2 sm:gap-2.5 text-balance min-w-0">
                  <span className="text-2xl sm:text-3xl shrink-0">{themeConfig.emoji}</span>
                  <span>Bản đồ bài học: {currentSubject === 'math' ? 'Toán' : 'Tiếng Việt'} • Học kì {currentVolume}</span>
                </h2>
                <span className="self-start sm:self-auto text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-2xl bg-white border-2 border-slate-200 text-slate-600 shadow-xs shrink-0">
                  Hiển thị {filteredLessons.length} bài
                </span>
              </div>

              {/* Grid các bài học theo Theme Card */}
              {filteredLessons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredLessons.map((lesson) => {
                    const isDone = progress.completedLessons.includes(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        className={`${themeConfig.cardClass} p-5 sm:p-6 transition-all flex flex-col justify-between gap-4 group`}
                      >
                        <div className="space-y-2.5 sm:space-y-3">
                          
                          {/* Unit badge & Trạng thái */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs sm:text-sm font-black px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                              Bài {lesson.lessonNumber}
                            </span>

                            {isDone ? (
                              <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-300 shrink-0">
                                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" /> Đã vững
                              </span>
                            ) : (
                              <span className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-300 shrink-0">
                                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" /> {lesson.estimatedMinutes}p
                              </span>
                            )}
                          </div>

                          {/* Tiêu đề bài học */}
                          <h3 className="font-black text-lg sm:text-xl text-slate-900 group-hover:text-amber-600 transition leading-snug line-clamp-2 text-balance">
                            {lesson.title}
                          </h3>

                          {/* Tagline giải thích ngắn */}
                          <p className="text-xs sm:text-sm text-slate-600 font-bold line-clamp-2 leading-relaxed">
                            {lesson.tagline}
                          </p>

                          {/* Đơn vị chủ đề */}
                          <div className="text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-wide truncate">
                            {lesson.unit}
                          </div>

                        </div>

                        {/* Nút bấm vào học */}
                        <button
                          onClick={() => {
                            sounds.playClick();
                            setSelectedLesson(lesson);
                          }}
                          className={`w-full py-3.5 sm:py-4 px-4 sm:px-5 rounded-2xl font-black text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 border-3 transition-all transform active:translate-y-1 ${
                            isDone
                              ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-emerald-300'
                              : `${themeConfig.buttonPrimaryClass}`
                          }`}
                        >
                          <span>{isDone ? 'Ôn lại bài này' : 'Bắt đầu học (35 phút)'}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        </button>

                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-slate-200 text-center space-y-3">
                  <span className="text-4xl sm:text-5xl">🔍</span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-800">Không tìm thấy bài học nào phù hợp</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold">Hãy thử tìm theo số bài (ví dụ: "10") hoặc chọn "Tất cả chủ đề"</p>
                </div>
              )}

            </div>

          </div>
        )}

      </main>

      {/* Modal Sao Lưu & Chuyển Máy (Không cần tài khoản) */}
      {showBackupModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-7 space-y-5 border-4 border-amber-300 shadow-2xl animate-bounce-gentle">
            <div className="flex items-center justify-between border-b-2 pb-3.5 border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl">💾</span>
                <h3 className="font-black text-2xl text-slate-900">Sao Lưu & Chuyển Đổi Máy</h3>
              </div>
              <button
                onClick={() => setShowBackupModal(false)}
                className="text-slate-400 hover:text-slate-600 font-black text-2xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">
              Bạn không cần tạo tài khoản! Toàn bộ điểm số, sao thưởng và chuỗi ngày học có thể chuyển sang máy tính hoặc iPad khác dễ dàng:
            </p>

            {/* Khối 1: Lấy mã sao lưu */}
            <div className="bg-amber-50 p-4 sm:p-5 rounded-2xl border-3 border-amber-200 space-y-2.5">
              <span className="text-xs sm:text-sm font-black text-amber-950 uppercase">1. Mã sao lưu trên máy này:</span>
              <div className="flex items-center gap-2.5">
                <input
                  type="text"
                  readOnly
                  value={currentBackupCode}
                  className="w-full bg-white px-3.5 py-3 rounded-xl border-2 border-amber-300 font-mono text-xs sm:text-sm text-slate-800 select-all"
                />
                <button
                  onClick={handleCopyBackup}
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm shrink-0 flex items-center gap-1.5 shadow-sm"
                >
                  {copySuccess ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copySuccess ? 'Đã chép' : 'Sao chép'}</span>
                </button>
              </div>
              <button
                onClick={handleExportJson}
                className="text-xs font-black text-amber-900 hover:underline inline-flex items-center gap-1.5 pt-1"
              >
                <Download className="w-4 h-4" />
                <span>Hoặc bấm vào đây để tải file tiến trình (.json) về máy</span>
              </button>
            </div>

            {/* Khối 2: Nhập mã từ máy khác */}
            <div className="bg-sky-50 p-4 sm:p-5 rounded-2xl border-3 border-sky-200 space-y-2.5">
              <span className="text-xs sm:text-sm font-black text-sky-950 uppercase">2. Nhập mã sao lưu từ máy cũ sang máy này:</span>
              <div className="flex items-center gap-2.5">
                <input
                  type="text"
                  placeholder="Dán mã sao lưu vào đây..."
                  value={backupCodeInput}
                  onChange={(e) => setBackupCodeInput(e.target.value)}
                  className="w-full bg-white px-3.5 py-3 rounded-xl border-2 border-sky-300 font-mono text-xs sm:text-sm text-slate-800"
                />
                <button
                  onClick={handleRestoreBackup}
                  className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-black text-sm shrink-0 flex items-center gap-1.5 shadow-sm"
                >
                  <Upload className="w-4 h-4" />
                  <span>Nạp</span>
                </button>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setShowBackupModal(false)}
                className="px-8 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-sm border-2 border-slate-300"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-amber-200/80 bg-white/80 backdrop-blur-sm py-5 text-center text-xs sm:text-sm font-bold text-slate-500">
        Học Tốt Lớp 5 • Trọn bộ 136 bài SGK Toán & Tiếng Việt (Kết nối tri thức với cuộc sống) • Tự học 30-45 phút tại nhà
      </footer>

    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;

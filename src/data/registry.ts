export interface LessonMeta {
  id: string;
  subject: 'math' | 'vietnamese';
  volume: 1 | 2;
  lessonNumber: number;
  title: string;
  unit: string;
  tagline: string;
  estimatedMinutes: number;
}

/* =========================================================
   MỤC LỤC TOÀN BỘ TOÁN LỚP 5 - KẾT NỐI TRI THỨC (TẬP 1 & 2)
========================================================= */
export const mathLessonsRegistry: LessonMeta[] = [
  // --- TẬP 1 ---
  // Chủ đề 1: Ôn tập và bổ sung
  { id: 'math-bai-1', subject: 'math', volume: 1, lessonNumber: 1, title: 'Ôn tập số tự nhiên', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Củng cố đọc, viết và so sánh các số tự nhiên nhiều chữ số', estimatedMinutes: 35 },
  { id: 'math-bai-2', subject: 'math', volume: 1, lessonNumber: 2, title: 'Ôn tập các phép tính với số tự nhiên', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Rèn luyện thành thạo 4 phép tính cộng, trừ, nhân, chia', estimatedMinutes: 35 },
  { id: 'math-bai-3', subject: 'math', volume: 1, lessonNumber: 3, title: 'Ôn tập phân số', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Khái niệm, tính chất cơ bản và so sánh phân số', estimatedMinutes: 35 },
  { id: 'math-bai-4', subject: 'math', volume: 1, lessonNumber: 4, title: 'Phân số thập phân', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Nhận biết phân số có mẫu số là 10, 100, 1000...', estimatedMinutes: 35 },
  { id: 'math-bai-5', subject: 'math', volume: 1, lessonNumber: 5, title: 'Ôn tập các phép tính với phân số', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Cộng, trừ, nhân, chia phân số có cùng và khác mẫu số', estimatedMinutes: 40 },
  { id: 'math-bai-6', subject: 'math', volume: 1, lessonNumber: 6, title: 'Cộng, trừ hai phân số khác mẫu số', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Quy đồng mẫu số và thực hiện phép cộng trừ chuẩn xác', estimatedMinutes: 35 },
  { id: 'math-bai-7', subject: 'math', volume: 1, lessonNumber: 7, title: 'Hỗn số', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Cấu tạo hỗn số gồm phần nguyên và phần phân số', estimatedMinutes: 35 },
  { id: 'math-bai-8', subject: 'math', volume: 1, lessonNumber: 8, title: 'Ôn tập hình học và đo lường', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Chu vi, diện tích các hình phẳng đã học ở lớp 4', estimatedMinutes: 40 },
  { id: 'math-bai-9', subject: 'math', volume: 1, lessonNumber: 9, title: 'Luyện tập chung Chủ đề 1', unit: 'Chủ đề 1: Ôn tập và bổ sung', tagline: 'Tổng hợp kiến thức số tự nhiên, phân số và đo lường', estimatedMinutes: 40 },

  // Chủ đề 2: Số thập phân
  { id: 'math-bai-10', subject: 'math', volume: 1, lessonNumber: 10, title: 'Khái niệm số thập phân', unit: 'Chủ đề 2: Số thập phân', tagline: 'Làm quen với số có dấu phẩy - bí quyết chia nhỏ mọi thứ!', estimatedMinutes: 35 },
  { id: 'math-bai-11', subject: 'math', volume: 1, lessonNumber: 11, title: 'So sánh các số thập phân', unit: 'Chủ đề 2: Số thập phân', tagline: 'So sánh phần nguyên trước, phần thập phân sau', estimatedMinutes: 35 },
  { id: 'math-bai-12', subject: 'math', volume: 1, lessonNumber: 12, title: 'Viết số đo đại lượng dưới dạng số thập phân', unit: 'Chủ đề 2: Số thập phân', tagline: 'Chuyển đổi đơn vị đo độ dài, khối lượng sang số thập phân', estimatedMinutes: 40 },
  { id: 'math-bai-13', subject: 'math', volume: 1, lessonNumber: 13, title: 'Làm tròn số thập phân', unit: 'Chủ đề 2: Số thập phân', tagline: 'Quy tắc làm tròn đến hàng đơn vị, hàng phần mười, phần trăm', estimatedMinutes: 35 },
  { id: 'math-bai-14', subject: 'math', volume: 1, lessonNumber: 14, title: 'Luyện tập chung Chủ đề 2', unit: 'Chủ đề 2: Số thập phân', tagline: 'Củng cố toàn diện cấu tạo, so sánh và viết số thập phân', estimatedMinutes: 40 },

  // Chủ đề 3: Một số đơn vị đo diện tích
  { id: 'math-bai-15', subject: 'math', volume: 1, lessonNumber: 15, title: 'Ki-lô-mét vuông. Héc-ta', unit: 'Chủ đề 3: Một số đơn vị đo diện tích', tagline: 'Làm quen với đơn vị đo diện tích rừng, thành phố và cánh đồng lớn', estimatedMinutes: 35 },
  { id: 'math-bai-16', subject: 'math', volume: 1, lessonNumber: 16, title: 'Các đơn vị đo diện tích', unit: 'Chủ đề 3: Một số đơn vị đo diện tích', tagline: 'Bảng đơn vị đo diện tích từ lớn đến bé và mối liên hệ', estimatedMinutes: 40 },
  { id: 'math-bai-17', subject: 'math', volume: 1, lessonNumber: 17, title: 'Thực hành và trải nghiệm với đơn vị đo đại lượng', unit: 'Chủ đề 3: Một số đơn vị đo diện tích', tagline: 'Ước lượng và tính toán diện tích trong đời sống thực tế', estimatedMinutes: 35 },
  { id: 'math-bai-18', subject: 'math', volume: 1, lessonNumber: 18, title: 'Luyện tập chung Chủ đề 3', unit: 'Chủ đề 3: Một số đơn vị đo diện tích', tagline: 'Rèn luyện đổi đơn vị và giải toán có lời văn về diện tích', estimatedMinutes: 40 },

  // Chủ đề 4: Các phép tính với số thập phân
  { id: 'math-bai-19', subject: 'math', volume: 1, lessonNumber: 19, title: 'Phép cộng số thập phân', unit: 'Chủ đề 4: Các phép tính với số thập phân', tagline: 'Đặt tính thẳng cột dấu phẩy - cộng như số tự nhiên!', estimatedMinutes: 40 },
  { id: 'math-bai-20', subject: 'math', volume: 1, lessonNumber: 20, title: 'Phép trừ số thập phân', unit: 'Chủ đề 4: Các phép tính với số thập phân', tagline: 'Đặt tính thẳng cột và thực hiện phép trừ có nhớ chuẩn xác', estimatedMinutes: 40 },
  { id: 'math-bai-21', subject: 'math', volume: 1, lessonNumber: 21, title: 'Phép nhân số thập phân', unit: 'Chủ đề 4: Các phép tính với số thập phân', tagline: 'Nhân như số tự nhiên, đếm chữ số phần thập phân để đặt phẩy', estimatedMinutes: 40 },
  { id: 'math-bai-22', subject: 'math', volume: 1, lessonNumber: 22, title: 'Phép chia số thập phân', unit: 'Chủ đề 4: Các phép tính với số thập phân', tagline: 'Chia số thập phân cho số tự nhiên và số thập phân', estimatedMinutes: 45 },
  { id: 'math-bai-23', subject: 'math', volume: 1, lessonNumber: 23, title: 'Nhân, chia số thập phân với 10, 100, 1000...', unit: 'Chủ đề 4: Các phép tính với số thập phân', tagline: 'Mẹo chuyển dịch dấu phẩy sang phải hoặc sang trái trong nháy mắt', estimatedMinutes: 35 },
  { id: 'math-bai-24', subject: 'math', volume: 1, lessonNumber: 24, title: 'Luyện tập chung Chủ đề 4', unit: 'Chủ đề 4: Các phép tính với số thập phân', tagline: 'Luyện tập 4 phép tính và tính giá trị biểu thức số thập phân', estimatedMinutes: 45 },

  // Chủ đề 5: Một số hình phẳng, chu vi và diện tích
  { id: 'math-bai-25', subject: 'math', volume: 1, lessonNumber: 25, title: 'Hình tam giác. Diện tích hình tam giác', unit: 'Chủ đề 5: Một số hình phẳng, chu vi và diện tích', tagline: 'Cắt ghép thần kỳ: Đáy nhân chiều cao chia đôi!', estimatedMinutes: 40 },
  { id: 'math-bai-26', subject: 'math', volume: 1, lessonNumber: 26, title: 'Hình thang. Diện tích hình thang', unit: 'Chủ đề 5: Một số hình phẳng, chu vi và diện tích', tagline: 'Đáy lớn đáy nhỏ ta đem cộng vào, nhân với chiều cao chia đôi', estimatedMinutes: 40 },
  { id: 'math-bai-27', subject: 'math', volume: 1, lessonNumber: 27, title: 'Đường tròn. Chu vi và diện tích hình tròn', unit: 'Chủ đề 5: Một số hình phẳng, chu vi và diện tích', tagline: 'Khám phá con số kỳ diệu 3,14 và công thức tính chu vi, diện tích', estimatedMinutes: 40 },
  { id: 'math-bai-28', subject: 'math', volume: 1, lessonNumber: 28, title: 'Thực hành và trải nghiệm đo, vẽ, tạo hình', unit: 'Chủ đề 5: Một số hình phẳng, chu vi và diện tích', tagline: 'Dùng com-pa và thước kẻ sáng tạo các hình họa đẹp mắt', estimatedMinutes: 35 },
  { id: 'math-bai-29', subject: 'math', volume: 1, lessonNumber: 29, title: 'Luyện tập chung Chủ đề 5', unit: 'Chủ đề 5: Một số hình phẳng, chu vi và diện tích', tagline: 'Giải các bài toán hình học kết hợp tam giác, thang, tròn', estimatedMinutes: 45 },

  // Chủ đề 6: Ôn tập học kì 1
  { id: 'math-bai-30', subject: 'math', volume: 1, lessonNumber: 30, title: 'Ôn tập số thập phân và các phép tính', unit: 'Chủ đề 6: Ôn tập học kì 1', tagline: 'Hệ thống hóa toàn bộ kiến thức số thập phân học kì 1', estimatedMinutes: 40 },
  { id: 'math-bai-31', subject: 'math', volume: 1, lessonNumber: 31, title: 'Ôn tập hình học và đo lường học kì 1', unit: 'Chủ đề 6: Ôn tập học kì 1', tagline: 'Bảng tổng hợp công thức diện tích tam giác, thang, tròn, ha, km²', estimatedMinutes: 40 },
  { id: 'math-bai-32', subject: 'math', volume: 1, lessonNumber: 32, title: 'Ôn tập giải toán có lời văn', unit: 'Chủ đề 6: Ôn tập học kì 1', tagline: 'Phương pháp phân tích đề và tóm tắt bài toán thực tế', estimatedMinutes: 40 },
  { id: 'math-bai-33', subject: 'math', volume: 1, lessonNumber: 33, title: 'Thực hành ôn tập kiểm tra học kì 1 (Đề 1)', unit: 'Chủ đề 6: Ôn tập học kì 1', tagline: 'Thử sức với đề thi mô phỏng giữa kì chuẩn cấu trúc Bộ GD&ĐT', estimatedMinutes: 40 },
  { id: 'math-bai-34', subject: 'math', volume: 1, lessonNumber: 34, title: 'Thực hành ôn tập kiểm tra học kì 1 (Đề 2)', unit: 'Chủ đề 6: Ôn tập học kì 1', tagline: 'Luyện phản xạ tính nhanh và tránh bẫy câu hỏi trắc nghiệm', estimatedMinutes: 40 },
  { id: 'math-bai-35', subject: 'math', volume: 1, lessonNumber: 35, title: 'Tổng kết và thử thách Học kì 1', unit: 'Chủ đề 6: Ôn tập học kì 1', tagline: 'Chinh phục danh hiệu Bậc Thầy Toán Học Lớp 5 Học Kì 1', estimatedMinutes: 40 },

  // --- TẬP 2 ---
  // Chủ đề 7: Tỉ số và các bài toán liên quan
  { id: 'math-bai-36', subject: 'math', volume: 2, lessonNumber: 36, title: 'Tỉ số', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Ý nghĩa của tỉ số a : b và ứng dụng so sánh hai đại lượng', estimatedMinutes: 35 },
  { id: 'math-bai-37', subject: 'math', volume: 2, lessonNumber: 37, title: 'Tỉ lệ bản đồ', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Tính khoảng cách thực tế dựa vào tỉ lệ 1 : 1000, 1 : 100000', estimatedMinutes: 35 },
  { id: 'math-bai-38', subject: 'math', volume: 2, lessonNumber: 38, title: 'Tìm hai số khi biết tổng và tỉ số của hai số đó', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Vẽ sơ đồ đoạn thẳng, tìm tổng số phần bằng nhau', estimatedMinutes: 40 },
  { id: 'math-bai-39', subject: 'math', volume: 2, lessonNumber: 39, title: 'Tìm hai số khi biết hiệu và tỉ số của hai số đó', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Tìm hiệu số phần bằng nhau và giá trị một phần', estimatedMinutes: 40 },
  { id: 'math-bai-40', subject: 'math', volume: 2, lessonNumber: 40, title: 'Tỉ số phần trăm', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Kí hiệu % và cách chuyển đổi giữa phân số, số thập phân và %', estimatedMinutes: 35 },
  { id: 'math-bai-41', subject: 'math', volume: 2, lessonNumber: 41, title: 'Tìm tỉ số phần trăm của hai số', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Lấy a chia cho b rồi nhân nhẩm với 100 viết thêm kí hiệu %', estimatedMinutes: 40 },
  { id: 'math-bai-42', subject: 'math', volume: 2, lessonNumber: 42, title: 'Tìm giá trị phần trăm của một số', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Tính khuyến mãi giảm giá, lãi suất tiết kiệm trong thực tế', estimatedMinutes: 40 },
  { id: 'math-bai-43', subject: 'math', volume: 2, lessonNumber: 43, title: 'Sử dụng máy tính cầm tay', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Làm quen các phím chức năng và tính nhanh tỉ số phần trăm', estimatedMinutes: 30 },
  { id: 'math-bai-44', subject: 'math', volume: 2, lessonNumber: 44, title: 'Luyện tập chung về tỉ số phần trăm', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Giải các bài toán thực tế về năng suất, giảm giá, tăng trưởng', estimatedMinutes: 40 },
  { id: 'math-bai-45', subject: 'math', volume: 2, lessonNumber: 45, title: 'Tỉ số của số lần lặp lại một sự kiện', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Làm quen với xác suất thực nghiệm qua trò chơi gieo xúc xắc', estimatedMinutes: 35 },
  { id: 'math-bai-46', subject: 'math', volume: 2, lessonNumber: 46, title: 'Luyện tập chung Chủ đề 7', unit: 'Chủ đề 7: Tỉ số và các bài toán liên quan', tagline: 'Tổng kết toàn diện chủ đề tỉ số và tỉ số phần trăm', estimatedMinutes: 40 },

  // Chủ đề 8: Thể tích. Một số đơn vị đo thể tích
  { id: 'math-bai-47', subject: 'math', volume: 2, lessonNumber: 47, title: 'Khái niệm thể tích của một hình', unit: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích', tagline: 'Độ lớn phần không gian mà một vật chiếm chỗ', estimatedMinutes: 35 },
  { id: 'math-bai-48', subject: 'math', volume: 2, lessonNumber: 48, title: 'Xăng-ti-mét khối. Đề-xi-mét khối', unit: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích', tagline: 'Khối lập phương cạnh 1 cm và cạnh 1 dm (1 dm³ = 1000 cm³ = 1 lít)', estimatedMinutes: 35 },
  { id: 'math-bai-49', subject: 'math', volume: 2, lessonNumber: 49, title: 'Mét khối', unit: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích', tagline: 'Khối lập phương cạnh 1 m (1 m³ = 1000 dm³ = 1 000 000 cm³)', estimatedMinutes: 35 },
  { id: 'math-bai-50', subject: 'math', volume: 2, lessonNumber: 50, title: 'Bảng đơn vị đo thể tích', unit: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích', tagline: 'Mối quan hệ gấp kém 1000 lần giữa hai đơn vị liền kề', estimatedMinutes: 40 },
  { id: 'math-bai-51', subject: 'math', volume: 2, lessonNumber: 51, title: 'Luyện tập chung Chủ đề 8', unit: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích', tagline: 'Đổi các đơn vị đo thể tích và tính toán dung tích bể nước', estimatedMinutes: 40 },

  // Chủ đề 9: Diện tích và thể tích của một số hình khối
  { id: 'math-bai-52', subject: 'math', volume: 2, lessonNumber: 52, title: 'Hình hộp chữ nhật. Hình lập phương', unit: 'Chủ đề 9: Hình khối', tagline: 'Nhận biết đỉnh, cạnh, mặt của các hình khối không gian', estimatedMinutes: 35 },
  { id: 'math-bai-53', subject: 'math', volume: 2, lessonNumber: 53, title: 'Diện tích xung quanh và toàn phần hình hộp chữ nhật', unit: 'Chủ đề 9: Hình khối', tagline: 'Công thức chu vi đáy nhân chiều cao và cộng 2 đáy', estimatedMinutes: 40 },
  { id: 'math-bai-54', subject: 'math', volume: 2, lessonNumber: 54, title: 'Diện tích xung quanh và toàn phần hình lập phương', unit: 'Chủ đề 9: Hình khối', tagline: 'Diện tích một mặt nhân 4 (xung quanh) và nhân 6 (toàn phần)', estimatedMinutes: 40 },
  { id: 'math-bai-55', subject: 'math', volume: 2, lessonNumber: 55, title: 'Thể tích hình hộp chữ nhật', unit: 'Chủ đề 9: Hình khối', tagline: 'Dài nhân rộng nhân cao (V = a x b x c)', estimatedMinutes: 40 },
  { id: 'math-bai-56', subject: 'math', volume: 2, lessonNumber: 56, title: 'Thể tích hình lập phương', unit: 'Chủ đề 9: Hình khối', tagline: 'Cạnh nhân cạnh rồi nhân cạnh (V = a x a x a)', estimatedMinutes: 40 },
  { id: 'math-bai-57', subject: 'math', volume: 2, lessonNumber: 57, title: 'Luyện tập chung Chủ đề 9', unit: 'Chủ đề 9: Hình khối', tagline: 'Bài toán sơn hộp, quét vôi bể nước và tính sức chứa', estimatedMinutes: 45 },

  // Chủ đề 10: Số đo thời gian. Vận tốc và chuyển động đều
  { id: 'math-bai-58', subject: 'math', volume: 2, lessonNumber: 58, title: 'Các đơn vị đo thời gian', unit: 'Chủ đề 10: Số đo thời gian. Vận tốc', tagline: 'Mối liên hệ thế kỉ, năm, tháng, ngày, giờ, phút, giây', estimatedMinutes: 35 },
  { id: 'math-bai-59', subject: 'math', volume: 2, lessonNumber: 59, title: 'Cộng, trừ số đo thời gian', unit: 'Chủ đề 10: Số đo thời gian. Vận tốc', tagline: 'Đặt tính theo từng đơn vị và đổi chuyển nếu vượt quá 60', estimatedMinutes: 40 },
  { id: 'math-bai-60', subject: 'math', volume: 2, lessonNumber: 60, title: 'Nhân, chia số đo thời gian', unit: 'Chủ đề 10: Số đo thời gian. Vận tốc', tagline: 'Thực hiện phép nhân và chia số đo thời gian với một số tự nhiên', estimatedMinutes: 40 },
  { id: 'math-bai-61', subject: 'math', volume: 2, lessonNumber: 61, title: 'Vận tốc', unit: 'Chủ đề 10: Số đo thời gian. Vận tốc', tagline: 'Khái niệm vận tốc: v = s : t (km/h, m/s)', estimatedMinutes: 40 },
  { id: 'math-bai-62', subject: 'math', volume: 2, lessonNumber: 62, title: 'Quãng đường và thời gian trong chuyển động đều', unit: 'Chủ đề 10: Số đo thời gian. Vận tốc', tagline: 'Công thức s = v x t và t = s : v', estimatedMinutes: 40 },
  { id: 'math-bai-63', subject: 'math', volume: 2, lessonNumber: 63, title: 'Bài toán hai chuyển động cùng chiều và ngược chiều', unit: 'Chủ đề 10: Số đo thời gian. Vận tốc', tagline: 'Thời gian gặp nhau và khoảng cách đuổi kịp', estimatedMinutes: 45 },

  // Chủ đề 11: Một số yếu tố thống kê và xác suất
  { id: 'math-bai-64', subject: 'math', volume: 2, lessonNumber: 64, title: 'Thu thập, phân loại, sắp xếp số liệu', unit: 'Chủ đề 11: Thống kê và xác suất', tagline: 'Đọc bảng số liệu và phân tích thông tin', estimatedMinutes: 35 },
  { id: 'math-bai-65', subject: 'math', volume: 2, lessonNumber: 65, title: 'Biểu đồ hình quạt tròn', unit: 'Chủ đề 11: Thống kê và xác suất', tagline: 'Biểu diễn tỉ lệ % các thành phần trong tổng thể', estimatedMinutes: 40 },
  { id: 'math-bai-66', subject: 'math', volume: 2, lessonNumber: 66, title: 'Đọc và phân tích số liệu trên biểu đồ hình quạt tròn', unit: 'Chủ đề 11: Thống kê và xác suất', tagline: 'Rút ra kết luận và nhận xét từ biểu đồ tròn', estimatedMinutes: 35 },
  { id: 'math-bai-67', subject: 'math', volume: 2, lessonNumber: 67, title: 'Xác suất thực nghiệm của một biến cố', unit: 'Chủ đề 11: Thống kê và xác suất', tagline: 'Số lần xuất hiện chia cho tổng số lần thử nghiệm', estimatedMinutes: 35 },
  { id: 'math-bai-68', subject: 'math', volume: 2, lessonNumber: 68, title: 'Luyện tập chung Chủ đề 11', unit: 'Chủ đề 11: Thống kê và xác suất', tagline: 'Ứng dụng thống kê xác suất vào các quyết định đời sống', estimatedMinutes: 40 },

  // Chủ đề 12: Ôn tập cuối năm
  { id: 'math-bai-69', subject: 'math', volume: 2, lessonNumber: 69, title: 'Ôn tập số và phép tính cuối năm', unit: 'Chủ đề 12: Ôn tập cuối năm', tagline: 'Ôn tập tổng thể số tự nhiên, phân số, số thập phân', estimatedMinutes: 40 },
  { id: 'math-bai-70', subject: 'math', volume: 2, lessonNumber: 70, title: 'Ôn tập hình học và đo lường cuối năm', unit: 'Chủ đề 12: Ôn tập cuối năm', tagline: 'Toàn bộ công thức diện tích và thể tích tiểu học', estimatedMinutes: 45 },
  { id: 'math-bai-71', subject: 'math', volume: 2, lessonNumber: 71, title: 'Ôn tập giải toán chuyển động đều và tỉ số', unit: 'Chủ đề 12: Ôn tập cuối năm', tagline: 'Các dạng toán đố trọng tâm thi chuyển cấp lên lớp 6', estimatedMinutes: 45 },
  { id: 'math-bai-72', subject: 'math', volume: 2, lessonNumber: 72, title: 'Đề ôn tập thi cuối năm (Đề 1)', unit: 'Chủ đề 12: Ôn tập cuối năm', tagline: 'Mô phỏng bài thi cuối năm học lớp 5', estimatedMinutes: 45 },
  { id: 'math-bai-73', subject: 'math', volume: 2, lessonNumber: 73, title: 'Đề ôn tập thi cuối năm (Đề 2)', unit: 'Chủ đề 12: Ôn tập cuối năm', tagline: 'Rèn luyện kỹ năng làm bài đạt điểm 9-10', estimatedMinutes: 45 },
  { id: 'math-bai-74', subject: 'math', volume: 2, lessonNumber: 74, title: 'Tổng kết chương trình Toán 5', unit: 'Chủ đề 12: Ôn tập cuối năm', tagline: 'Sẵn sàng hành trang vững vàng bước vào lớp 6 THCS', estimatedMinutes: 40 }
];

/* =========================================================
   MỤC LỤC TOÀN BỘ TIẾNG VIỆT 5 - KẾT NỐI TRI THỨC (TẬP 1 & 2)
========================================================= */
export const vietnameseLessonsRegistry: LessonMeta[] = [
  // --- TẬP 1 ---
  // Chủ điểm 1: Thế giới tuổi thơ (Bài 1 - 8)
  { id: 'vn-b1', subject: 'vietnamese', volume: 1, lessonNumber: 1, title: 'Đọc hiểu: Thanh âm của gió', unit: 'Chủ điểm 1: Thế giới tuổi thơ', tagline: 'Lắng nghe giai điệu thiên nhiên tuổi thơ qua tiếng gió reo', estimatedMinutes: 35 },
  { id: 'vn-b2', subject: 'vietnamese', volume: 1, lessonNumber: 2, title: 'Luyện từ và câu: Luyện tập về từ đồng nghĩa', unit: 'Chủ điểm 1: Thế giới tuổi thơ', tagline: 'Thực hành tìm và thay thế từ đồng nghĩa trong văn cảnh', estimatedMinutes: 35 },
  { id: 'vn-b3', subject: 'vietnamese', volume: 1, lessonNumber: 3, title: 'Đọc hiểu: Cánh đồng hoa', unit: 'Chủ điểm 1: Thế giới tuổi thơ', tagline: 'Vẻ đẹp rực rỡ của cánh đồng hoa và tình bạn tuổi thơ', estimatedMinutes: 35 },
  { id: 'vn-b4', subject: 'vietnamese', volume: 1, lessonNumber: 4, title: 'Viết: Tìm hiểu cách viết bài văn tả phong cảnh', unit: 'Chủ điểm 1: Thế giới tuổi thơ', tagline: 'Bố cục 3 phần của bài văn tả cảnh và cách chọn chi tiết tiêu biểu', estimatedMinutes: 40 },
  { id: 'vn-b5', subject: 'vietnamese', volume: 1, lessonNumber: 5, title: 'Đọc hiểu: Tuổi Ngựa', unit: 'Chủ điểm 1: Thế giới tuổi thơ', tagline: 'Khát khao phiêu lưu khắp bốn phương của đứa con yêu mẹ', estimatedMinutes: 35 },
  { id: 'vn-b6', subject: 'vietnamese', volume: 1, lessonNumber: 6, title: 'Luyện từ và câu: Từ nhiều nghĩa & Từ đồng âm', unit: 'Chủ điểm 1: Thế giới tuổi thơ', tagline: 'Phân biệt cùng họ hàng (nhiều nghĩa) hay người dưng trùng tên (đồng âm)', estimatedMinutes: 35 },
  { id: 'vn-b7', subject: 'vietnamese', volume: 1, lessonNumber: 7, title: 'Đọc hiểu: Bến sông tuổi thơ', unit: 'Chủ điểm 1: Thế giới tuổi thơ', tagline: 'Kỉ niệm êm đềm bên dòng sông quê hương', estimatedMinutes: 35 },
  { id: 'vn-b8', subject: 'vietnamese', volume: 1, lessonNumber: 8, title: 'Luyện tập chung Chủ điểm 1: Thế giới tuổi thơ', unit: 'Chủ điểm 1: Thế giới tuổi thơ', tagline: 'Củng cố đọc hiểu, từ vựng và kĩ năng viết đoạn văn tả cảnh', estimatedMinutes: 40 },

  // Chủ điểm 2: Thiên nhiên kì thú (Bài 9 - 16)
  { id: 'vn-b9', subject: 'vietnamese', volume: 1, lessonNumber: 9, title: 'Đọc hiểu: Trước cổng trời', unit: 'Chủ điểm 2: Thiên nhiên kì thú', tagline: 'Vẻ đẹp kỳ vĩ mây trời bồng bềnh nơi cổng trời Tây Bắc', estimatedMinutes: 35 },
  { id: 'vn-b10', subject: 'vietnamese', volume: 1, lessonNumber: 10, title: 'Luyện từ và câu: Từ trái nghĩa', unit: 'Chủ điểm 2: Thiên nhiên kì thú', tagline: 'Các cặp từ có nghĩa trái ngược nhau và tác dụng tạo tương phản', estimatedMinutes: 35 },
  { id: 'vn-b11', subject: 'vietnamese', volume: 1, lessonNumber: 11, title: 'Đọc hiểu: Kì diệu rừng xanh', unit: 'Chủ điểm 2: Thiên nhiên kì thú', tagline: 'Bức tranh sống động về muôn loài và nấm rực rỡ trong rừng', estimatedMinutes: 35 },
  { id: 'vn-b12', subject: 'vietnamese', volume: 1, lessonNumber: 12, title: 'Viết: Luyện tập tả cảnh thiên nhiên', unit: 'Chủ điểm 2: Thiên nhiên kì thú', tagline: 'Sử dụng từ ngữ gợi tả âm thanh, màu sắc, đường nét', estimatedMinutes: 40 },
  { id: 'vn-b13', subject: 'vietnamese', volume: 1, lessonNumber: 13, title: 'Đọc hiểu: Hang Sơn Đoòng - những điều kì thú', unit: 'Chủ điểm 2: Thiên nhiên kì thú', tagline: 'Khám phá hang động tự nhiên lớn nhất thế giới của Việt Nam', estimatedMinutes: 35 },
  { id: 'vn-b14', subject: 'vietnamese', volume: 1, lessonNumber: 14, title: 'Luyện từ và câu: Mở rộng vốn từ Thiên nhiên', unit: 'Chủ điểm 2: Thiên nhiên kì thú', tagline: 'Làm giàu vốn từ ngữ miêu tả sông núi, biển trời', estimatedMinutes: 35 },
  { id: 'vn-b15', subject: 'vietnamese', volume: 1, lessonNumber: 15, title: 'Đọc hiểu: Những hòn đảo trên vịnh Hạ Long', unit: 'Chủ điểm 2: Thiên nhiên kì thú', tagline: 'Kỳ quan thiên nhiên thế giới qua góc nhìn nghệ thuật', estimatedMinutes: 35 },
  { id: 'vn-b16', subject: 'vietnamese', volume: 1, lessonNumber: 16, title: 'Ôn tập và Đánh giá giữa học kì 1', unit: 'Chủ điểm 2: Thiên nhiên kì thú', tagline: 'Kiểm tra đọc hiểu và kiến thức từ và câu nửa đầu kì 1', estimatedMinutes: 45 },

  // Chủ điểm 3: Trên con đường học tập (Bài 17 - 24)
  { id: 'vn-b17', subject: 'vietnamese', volume: 1, lessonNumber: 17, title: 'Đọc hiểu: Thư gửi các học sinh (Hồ Chí Minh)', unit: 'Chủ điểm 3: Trên con đường học tập', tagline: 'Lời dặn dò thiêng liêng của Bác Hồ trong ngày khai trường đầu tiên', estimatedMinutes: 35 },
  { id: 'vn-b18', subject: 'vietnamese', volume: 1, lessonNumber: 18, title: 'Luyện từ và câu: Đại từ', unit: 'Chủ điểm 3: Trên con đường học tập', tagline: 'Đại từ xưng hô và đại từ thay thế để tránh lặp từ trong đoạn văn', estimatedMinutes: 35 },
  { id: 'vn-b19', subject: 'vietnamese', volume: 1, lessonNumber: 19, title: 'Đọc hiểu: Tấm gương tự học', unit: 'Chủ điểm 3: Trên con đường học tập', tagline: 'Tinh thần vượt khó tự học thành tài của các danh nhân', estimatedMinutes: 35 },
  { id: 'vn-b20', subject: 'vietnamese', volume: 1, lessonNumber: 20, title: 'Viết: Viết đoạn văn nêu ý kiến', unit: 'Chủ điểm 3: Trên con đường học tập', tagline: 'Cách nêu quan điểm, lí lẽ và dẫn chứng thuyết phục', estimatedMinutes: 40 },
  { id: 'vn-b21', subject: 'vietnamese', volume: 1, lessonNumber: 21, title: 'Đọc hiểu: Trải nghiệm để sáng tạo', unit: 'Chủ điểm 3: Trên con đường học tập', tagline: 'Học đi đôi với hành, sáng tạo từ quan sát thực tiễn', estimatedMinutes: 35 },
  { id: 'vn-b22', subject: 'vietnamese', volume: 1, lessonNumber: 22, title: 'Luyện từ và câu: Quan hệ từ', unit: 'Chủ điểm 3: Trên con đường học tập', tagline: 'Cách dùng và, với, hay, hoặc, nhưng, vì... để nối các từ và câu', estimatedMinutes: 35 },
  { id: 'vn-b23', subject: 'vietnamese', volume: 1, lessonNumber: 23, title: 'Đọc hiểu: Thế giới trong trang sách (Dế Mèn phiêu lưu kí)', unit: 'Chủ điểm 3: Trên con đường học tập', tagline: 'Học tập bài học đường đời đầu tiên qua áng văn Tô Hoài', estimatedMinutes: 35 },
  { id: 'vn-b24', subject: 'vietnamese', volume: 1, lessonNumber: 24, title: 'Luyện tập chung Chủ điểm 3: Trên con đường học tập', unit: 'Chủ điểm 3: Trên con đường học tập', tagline: 'Rèn luyện viết đoạn văn nghị luận và sử dụng quan hệ từ', estimatedMinutes: 40 },

  // Chủ điểm 4: Nghệ thuật muôn màu (Bài 25 - 32)
  { id: 'vn-b25', subject: 'vietnamese', volume: 1, lessonNumber: 25, title: 'Đọc hiểu: Tiếng đàn ba-la-lai-ca trên sông Đà', unit: 'Chủ điểm 4: Nghệ thuật muôn màu', tagline: 'Bản hòa ca lãng mạn giữa âm nhạc và công trình thế kỉ', estimatedMinutes: 35 },
  { id: 'vn-b26', subject: 'vietnamese', volume: 1, lessonNumber: 26, title: 'Luyện từ và câu: Các cặp quan hệ từ', unit: 'Chủ điểm 4: Nghệ thuật muôn màu', tagline: 'Vì... nên...; Tuy... nhưng...; Không những... mà còn...', estimatedMinutes: 35 },
  { id: 'vn-b27', subject: 'vietnamese', volume: 1, lessonNumber: 27, title: 'Đọc hiểu: Tranh làng Hồ', unit: 'Chủ điểm 4: Nghệ thuật muôn màu', tagline: 'Nét tinh hoa dân gian trong màu tranh lợn ráy, gà mẹ con', estimatedMinutes: 35 },
  { id: 'vn-b28', subject: 'vietnamese', volume: 1, lessonNumber: 28, title: 'Viết: Viết bài văn tả người', unit: 'Chủ điểm 4: Nghệ thuật muôn màu', tagline: 'Quan sát và miêu tả ngoại hình, tính tình, hoạt động của người', estimatedMinutes: 45 },
  { id: 'vn-b29', subject: 'vietnamese', volume: 1, lessonNumber: 29, title: 'Đọc hiểu: Tập hát quan họ', unit: 'Chủ điểm 4: Nghệ thuật muôn màu', tagline: 'Giai điệu dân ca mượt mà đượm tình quê hương xứ Kinh Bắc', estimatedMinutes: 35 },
  { id: 'vn-b30', subject: 'vietnamese', volume: 1, lessonNumber: 30, title: 'Luyện từ và câu: Mở rộng vốn từ Nghệ thuật', unit: 'Chủ điểm 4: Nghệ thuật muôn màu', tagline: 'Các từ ngữ về hội họa, ca múa nhạc, điện ảnh, sân khấu', estimatedMinutes: 35 },
  { id: 'vn-b31', subject: 'vietnamese', volume: 1, lessonNumber: 31, title: 'Đọc hiểu: Sự tích chú Tễu', unit: 'Chủ điểm 4: Nghệ thuật muôn màu', tagline: 'Nghệ thuật múa rối nước độc đáo truyền thống Việt Nam', estimatedMinutes: 35 },
  { id: 'vn-b32', subject: 'vietnamese', volume: 1, lessonNumber: 32, title: 'Ôn tập và Đánh giá cuối học kì 1', unit: 'Chủ điểm 4: Nghệ thuật muôn màu', tagline: 'Hệ thống hóa toàn bộ kiến thức Tiếng Việt lớp 5 Học kì 1', estimatedMinutes: 45 },

  // --- TẬP 2 ---
  // Chủ điểm 5: Vẻ đẹp cuộc sống (Bài 33 - 40)
  { id: 'vn-b33', subject: 'vietnamese', volume: 2, lessonNumber: 33, title: 'Đọc hiểu: Khúc hát ru những em bé lớn trên lưng mẹ', unit: 'Chủ điểm 5: Vẻ đẹp cuộc sống', tagline: 'Tình mẹ bao la gắn liền với tình yêu cách mạng và đất nước', estimatedMinutes: 35 },
  { id: 'vn-b34', subject: 'vietnamese', volume: 2, lessonNumber: 34, title: 'Luyện từ và câu: Nối các vế câu ghép bằng quan hệ từ', unit: 'Chủ điểm 5: Vẻ đẹp cuộc sống', tagline: 'Nhận biết câu ghép và cách kết nối các vế câu', estimatedMinutes: 40 },
  { id: 'vn-b35', subject: 'vietnamese', volume: 2, lessonNumber: 35, title: 'Đọc hiểu: Hạt gạo làng ta', unit: 'Chủ điểm 5: Vẻ đẹp cuộc sống', tagline: 'Giá trị quý báu của hạt ngọc trời thấm đượm mồ hôi công sức', estimatedMinutes: 35 },
  { id: 'vn-b36', subject: 'vietnamese', volume: 2, lessonNumber: 36, title: 'Viết: Luyện tập tả người (Tả hoạt động)', unit: 'Chủ điểm 5: Vẻ đẹp cuộc sống', tagline: 'Cách dùng động từ gợi cảm khi tả người đang làm việc', estimatedMinutes: 40 },
  { id: 'vn-b37', subject: 'vietnamese', volume: 2, lessonNumber: 37, title: 'Đọc hiểu: Đoàn thuyền đánh cá (Huy Cận)', unit: 'Chủ điểm 5: Vẻ đẹp cuộc sống', tagline: 'Khí thế hào hùng của người lao động trên biển khơi', estimatedMinutes: 35 },
  { id: 'vn-b38', subject: 'vietnamese', volume: 2, lessonNumber: 38, title: 'Luyện từ và câu: Nối các vế câu ghép bằng cặp từ hô ứng', unit: 'Chủ điểm 5: Vẻ đẹp cuộc sống', tagline: 'vừa... đã...; càng... càng...; chưa... đã...', estimatedMinutes: 35 },
  { id: 'vn-b39', subject: 'vietnamese', volume: 2, lessonNumber: 39, title: 'Đọc hiểu: Khu rừng của Mát', unit: 'Chủ điểm 5: Vẻ đẹp cuộc sống', tagline: 'Tấm lòng yêu thiên nhiên và ước mơ xây dựng khu rừng xanh', estimatedMinutes: 35 },
  { id: 'vn-b40', subject: 'vietnamese', volume: 2, lessonNumber: 40, title: 'Luyện tập chung Chủ điểm 5: Vẻ đẹp cuộc sống', unit: 'Chủ điểm 5: Vẻ đẹp cuộc sống', tagline: 'Củng cố câu ghép và kĩ năng viết bài văn tả người', estimatedMinutes: 40 },

  // Chủ điểm 6: Hương sắc trăm miền (Bài 41 - 48)
  { id: 'vn-b41', subject: 'vietnamese', volume: 2, lessonNumber: 41, title: 'Đọc hiểu: Hội thổi cơm thi ở Đồng Văn', unit: 'Chủ điểm 6: Hương sắc trăm miền', tagline: 'Lễ hội dân gian đặc sắc rèn đức tính khéo léo, nhanh nhẹn', estimatedMinutes: 35 },
  { id: 'vn-b42', subject: 'vietnamese', volume: 2, lessonNumber: 42, title: 'Luyện từ và câu: Liên kết câu bằng cách lặp từ ngữ', unit: 'Chủ điểm 6: Hương sắc trăm miền', tagline: 'Phép lặp giúp các câu trong đoạn gắn kết chặt chẽ', estimatedMinutes: 35 },
  { id: 'vn-b43', subject: 'vietnamese', volume: 2, lessonNumber: 43, title: 'Đọc hiểu: Hương cốm mùa thu', unit: 'Chủ điểm 6: Hương sắc trăm miền', tagline: 'Món quà thanh nhã của lúa non Hà Nội', estimatedMinutes: 35 },
  { id: 'vn-b44', subject: 'vietnamese', volume: 2, lessonNumber: 44, title: 'Viết: Viết chương trình hoạt động', unit: 'Chủ điểm 6: Hương sắc trăm miền', tagline: 'Cách lập kế hoạch cho một buổi cắm trại, hội thi, tham quan', estimatedMinutes: 40 },
  { id: 'vn-b45', subject: 'vietnamese', volume: 2, lessonNumber: 45, title: 'Đọc hiểu: Đàn t’rưng - tiếng ca đại ngàn', unit: 'Chủ điểm 6: Hương sắc trăm miền', tagline: 'Âm vang hùng vĩ của nhạc cụ tre nứa Tây Nguyên', estimatedMinutes: 35 },
  { id: 'vn-b46', subject: 'vietnamese', volume: 2, lessonNumber: 46, title: 'Luyện từ và câu: Liên kết câu bằng cách thay thế từ ngữ', unit: 'Chủ điểm 6: Hương sắc trăm miền', tagline: 'Dùng đại từ hoặc từ đồng nghĩa để tránh lặp từ thô thiển', estimatedMinutes: 35 },
  { id: 'vn-b47', subject: 'vietnamese', volume: 2, lessonNumber: 47, title: 'Đọc hiểu: Về thăm Đất Mũi', unit: 'Chủ điểm 6: Hương sắc trăm miền', tagline: 'Rừng đước bạt ngàn nơi chóp mũi cực Nam Tổ quốc', estimatedMinutes: 35 },
  { id: 'vn-b48', subject: 'vietnamese', volume: 2, lessonNumber: 48, title: 'Ôn tập và Đánh giá giữa học kì 2', unit: 'Chủ điểm 6: Hương sắc trăm miền', tagline: 'Kiểm tra đọc hiểu và liên kết câu giữa kì 2', estimatedMinutes: 45 },

  // Chủ điểm 7: Tiếp bước cha ông (Bài 49 - 56)
  { id: 'vn-b49', subject: 'vietnamese', volume: 2, lessonNumber: 49, title: 'Đọc hiểu: Nghìn năm văn hiến', unit: 'Chủ điểm 7: Tiếp bước cha ông', tagline: 'Tự hào Văn Miếu - Quốc Tử Giám và bia tiến sĩ rạng danh', estimatedMinutes: 35 },
  { id: 'vn-b50', subject: 'vietnamese', volume: 2, lessonNumber: 50, title: 'Luyện từ và câu: Liên kết câu bằng từ ngữ nối', unit: 'Chủ điểm 7: Tiếp bước cha ông', tagline: 'Dùng nhưng, tuy nhiên, thậm chí, bởi vậy... để nối câu', estimatedMinutes: 35 },
  { id: 'vn-b51', subject: 'vietnamese', volume: 2, lessonNumber: 51, title: 'Đọc hiểu: Người thầy của muôn đời (Chu Văn An)', unit: 'Chủ điểm 7: Tiếp bước cha ông', tagline: 'Tấm gương nhà giáo mẫu mực, chính trực ngàn đời', estimatedMinutes: 35 },
  { id: 'vn-b52', subject: 'vietnamese', volume: 2, lessonNumber: 52, title: 'Viết: Viết đoạn văn thể hiện tình cảm, cảm xúc', unit: 'Chủ điểm 7: Tiếp bước cha ông', tagline: 'Bày tỏ lòng biết ơn đối với thầy cô, cha ông đi trước', estimatedMinutes: 40 },
  { id: 'vn-b53', subject: 'vietnamese', volume: 2, lessonNumber: 53, title: 'Đọc hiểu: Anh hùng Lao động Trần Đại Nghĩa', unit: 'Chủ điểm 7: Tiếp bước cha ông', tagline: 'Nhà khoa học tài ba chế tạo vũ khí cho quân đội nhân dân', estimatedMinutes: 35 },
  { id: 'vn-b54', subject: 'vietnamese', volume: 2, lessonNumber: 54, title: 'Luyện từ và câu: Mở rộng vốn từ Truyền thống', unit: 'Chủ điểm 7: Tiếp bước cha ông', tagline: 'Uống nước nhớ nguồn, tôn sư trọng đạo, yêu nước nồng nàn', estimatedMinutes: 35 },
  { id: 'vn-b55', subject: 'vietnamese', volume: 2, lessonNumber: 55, title: 'Đọc hiểu: Việt Nam quê hương ta (Nguyễn Đình Thi)', unit: 'Chủ điểm 7: Tiếp bước cha ông', tagline: 'Đất nước hình tia chớp lung linh, con người cần cù anh dũng', estimatedMinutes: 35 },
  { id: 'vn-b56', subject: 'vietnamese', volume: 2, lessonNumber: 56, title: 'Luyện tập chung Chủ điểm 7: Tiếp bước cha ông', unit: 'Chủ điểm 7: Tiếp bước cha ông', tagline: 'Củng cố liên kết câu và viết bài ca ngợi truyền thống', estimatedMinutes: 40 },

  // Chủ điểm 8: Thế giới của chúng ta (Bài 57 - 62)
  { id: 'vn-b57', subject: 'vietnamese', volume: 2, lessonNumber: 57, title: 'Đọc hiểu: Bài ca trái đất (Định Hải)', unit: 'Chủ điểm 8: Thế giới của chúng ta', tagline: 'Trái đất trẻ thơ chung một màu xanh hòa bình', estimatedMinutes: 35 },
  { id: 'vn-b58', subject: 'vietnamese', volume: 2, lessonNumber: 58, title: 'Luyện từ và câu: Dấu câu (Dấu gạch ngang, dấu hai chấm)', unit: 'Chủ điểm 8: Thế giới của chúng ta', tagline: 'Công dụng đánh dấu lời đối thoại, liệt kê, giải thích', estimatedMinutes: 35 },
  { id: 'vn-b59', subject: 'vietnamese', volume: 2, lessonNumber: 59, title: 'Đọc hiểu: Những con hạc giấy (Xa-xa-ki Xa-đa-cô)', unit: 'Chủ điểm 8: Thế giới của chúng ta', tagline: 'Ước nguyện hòa bình và khát vọng đẩy lùi thảm họa chiến tranh', estimatedMinutes: 35 },
  { id: 'vn-b60', subject: 'vietnamese', volume: 2, lessonNumber: 60, title: 'Đọc hiểu: Giờ Trái Đất & Thành phố thông minh', unit: 'Chủ điểm 8: Thế giới của chúng ta', tagline: 'Ý thức tiết kiệm năng lượng và bảo vệ môi trường tương lai', estimatedMinutes: 35 },
  { id: 'vn-b61', subject: 'vietnamese', volume: 2, lessonNumber: 61, title: 'Luyện từ và câu: Ôn tập về từ loại và câu cuối năm', unit: 'Chủ điểm 8: Thế giới của chúng ta', tagline: 'Danh từ, động từ, tính từ, câu đơn, câu ghép', estimatedMinutes: 40 },
  { id: 'vn-b62', subject: 'vietnamese', volume: 2, lessonNumber: 62, title: 'Ôn tập và Đánh giá cuối năm học', unit: 'Chủ điểm 8: Thế giới của chúng ta', tagline: 'Tổng kết toàn bộ chương trình Tiếng Việt 5 sẵn sàng lên THCS', estimatedMinutes: 45 }
];

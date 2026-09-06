# Ứng Dụng Tự Học Lớp 5 (Class 5 Self-Study)

Ứng dụng web hỗ trợ các em học sinh lớp 5 tự học, luyện tập và củng cố kiến thức môn Toán, Tiếng Việt với giao diện trực quan, bài tập trắc nghiệm và câu hỏi tương tác.

---

## 🚀 Tính Năng Nổi Bật

- **Bài học & Bài tập tương tác:** Ôn luyện theo chương trình lớp 5.
- **Công thức chuẩn xác:** Tích hợp KaTeX hỗ trợ hiển thị phân số, số thập phân và công thức toán học sắc nét.
- **Phản hồi tức thì:** Chấm điểm trực tiếp kèm hiệu ứng confetti khích lệ tinh thần học tập.
- **Giao diện thân thiện:** Tối ưu hiển thị trên cả máy tính và máy tính bảng/điện thoại.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons & Effects:** [Lucide React](https://lucide.dev/), `canvas-confetti`, `KaTeX`

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Cục Bộ

1. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

2. **Chạy server phát triển (Development):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại: `http://localhost:3000`

3. **Đóng gói sản phẩm (Production Build):**
   ```bash
   npm run build
   ```

---

## 🌐 Triển Khai (Deployment)

Dự án có thể dễ dàng triển khai miễn phí lên:
- **Vercel:** Kết nối repo GitHub với Vercel hoặc chạy lệnh `npx vercel`.
- **Netlify:** Kéo thả thư mục `dist` lên [Netlify Drop](https://app.netlify.com/drop).
- **Cloudflare Pages:** Kết nối repo và chọn preset `Vite`.

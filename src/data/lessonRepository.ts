import { Lesson, Question, SpeedQuestion } from '../types';
import { mathLessons } from './mathLessons';
import { vietnameseLessons } from './vietnameseLessons';
import { mathLessonsRegistry, vietnameseLessonsRegistry, LessonMeta } from './registry';
import { mathQuestionsT1 } from './questions/mathGrade5T1';
import { mathQuestionsT2 } from './questions/mathGrade5T2';
import { vietnameseQuestionsT1 } from './questions/vietnameseGrade5T1';
import { vietnameseQuestionsT2 } from './questions/vietnameseGrade5T2';

// Bản đồ các bài học đã được biên soạn chi tiết chuyên sâu
const detailedLessonsMap: Record<string, Lesson> = {};

mathLessons.forEach(l => {
  detailedLessonsMap[l.id] = l;
});

vietnameseLessons.forEach(l => {
  detailedLessonsMap[l.id] = l;
});

// Hàm tráo đổi ngẫu nhiên thứ tự các lựa chọn trong câu hỏi (Fisher-Yates)
function shuffleOptions<T extends { options?: string[] }>(q: T): T {
  if (!q.options || q.options.length === 0) return q;
  const arr = [...q.options];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return { ...q, options: arr };
}

// -------------------------------------------------------------
// BỘ SINH CÂU HỎI TOÁN LỚP 5 THEO CHỦ ĐỀ CHUẨN SGK
// -------------------------------------------------------------
function generateMathQuestions(meta: LessonMeta): { practiceQuestions: Question[]; speedQuestions: SpeedQuestion[] } {
  const titleLower = meta.title.toLowerCase();

  let practice: Question[] = [];
  let speed: SpeedQuestion[] = [];

  if (titleLower.includes('phân số') || titleLower.includes('hỗn số')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Phân số nào dưới đây là phân số thập phân?',
        options: ['\\frac{3}{100}', '\\frac{4}{15}', '\\frac{7}{25}', '\\frac{9}{200}'],
        correctAnswer: '\\frac{3}{100}',
        hint: 'Phân số thập phân là phân số có mẫu số là 10, 100, 1000,...',
        explanation: 'Phân số $\\frac{3}{100}$ có mẫu số là 100 nên là phân số thập phân.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Rút gọn phân số $\\frac{18}{24}$ về dạng tối giản ta được:',
        options: ['\\frac{9}{12}', '\\frac{3}{4}', '\\frac{6}{8}', '\\frac{2}{3}'],
        correctAnswer: '\\frac{3}{4}',
        hint: 'Chia cả tử số và mẫu số cho ước chung lớn nhất là 6.',
        explanation: '$\\frac{18 : 6}{24 : 6} = \\frac{3}{4}$. Phân số $\\frac{3}{4}$ không thể rút gọn thêm.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Kết quả của phép tính $\\frac{2}{5} + \\frac{1}{3}$ là:',
        options: ['\\frac{3}{8}', '\\frac{11}{15}', '\\frac{7}{15}', '\\frac{3}{15}'],
        correctAnswer: '\\frac{11}{15}',
        hint: 'Quy đồng mẫu số chung là 15: $\\frac{6}{15} + \\frac{5}{15}$.',
        explanation: '$\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Hỗn số $3\\frac{2}{5}$ được chuyển thành phân số nào?',
        options: ['\\frac{6}{5}', '\\frac{17}{5}', '\\frac{11}{5}', '\\frac{15}{5}'],
        correctAnswer: '\\frac{17}{5}',
        hint: 'Tử số mới = (phần nguyên × mẫu số) + tử số cũ: $3 \\times 5 + 2$.',
        explanation: '$3\\frac{2}{5} = \\frac{3 \\times 5 + 2}{5} = \\frac{17}{5}$.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Tính: $\\frac{4}{7} \\times \\frac{14}{8} = ?$',
        options: ['1', '\\frac{2}{3}', '\\frac{56}{56}', '2'],
        correctAnswer: '1',
        hint: 'Rút gọn chéo trước khi nhân: 14 rút gọn với 7 được 2; 4 rút gọn với 8 được 2.',
        explanation: '$\\frac{4 \\times 14}{7 \\times 8} = \\frac{1 \\times 2}{1 \\times 2} = 1$.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Một mảnh đất hình chữ nhật có chiều dài $\\frac{4}{5}\\text{ m}$, chiều rộng $\\frac{3}{8}\\text{ m}$. Diện tích mảnh đất là:',
        options: ['\\frac{7}{13}\\text{ m}^2', '\\frac{3}{10}\\text{ m}^2', '\\frac{12}{40}\\text{ cm}^2', '\\frac{7}{40}\\text{ m}^2'],
        correctAnswer: '\\frac{3}{10}\\text{ m}^2',
        hint: 'Diện tích hình chữ nhật = dài × rộng: $\\frac{4}{5} \\times \\frac{3}{8}$.',
        explanation: 'Diện tích = $\\frac{4}{5} \\times \\frac{3}{8} = \\frac{12}{40} = \\frac{3}{10}\\text{ m}^2$.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Phân số $\\frac{1}{4}$ bằng phân số thập phân nào?',
        options: ['\\frac{25}{100}', '\\frac{10}{40}', '\\frac{4}{10}', '\\frac{25}{10}'],
        correctAnswer: '\\frac{25}{100}',
        explanation: '$\\frac{1 \\times 25}{4 \\times 25} = \\frac{25}{100}$.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Muốn chia hai phân số, ta làm thế nào?',
        options: ['Nhân với phân số đảo ngược', 'Chia tử cho tử, mẫu cho mẫu', 'Cộng chéo', 'Nhân hai mẫu số'],
        correctAnswer: 'Nhân với phân số đảo ngược',
        explanation: 'Lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Hỗn số gồm có mấy phần?',
        options: ['2 phần (phần nguyên và phần phân số)', '1 phần', '3 phần', 'Chỉ có phần phân số'],
        correctAnswer: '2 phần (phần nguyên và phần phân số)',
        explanation: 'Hỗn số gồm phần nguyên và phần phân số đi liền.'
      }
    ];
  } else if (titleLower.includes('diện tích') || titleLower.includes('héc-ta') || titleLower.includes('ki-lô-mét vuông')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: '$1\\text{ ha}$ (héc-ta) bằng bao nhiêu mét vuông?',
        options: ['100 m²', '1 000 m²', '10 000 m²', '100 000 m²'],
        correctAnswer: '10 000 m²',
        hint: '1 héc-ta chính là diện tích một hình vuông cạnh dài $100\\text{ m}$.',
        explanation: '$1\\text{ ha} = 100\\text{ m} \\times 100\\text{ m} = 10\\,000\\text{ m}^2$.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: '$1\\text{ km}^2$ bằng bao nhiêu héc-ta (ha)?',
        options: ['10 ha', '100 ha', '1 000 ha', '10 000 ha'],
        correctAnswer: '100 ha',
        hint: '$1\\text{ km}^2 = 1\\,000\\,000\\text{ m}^2$, chia cho $10\\,000\\text{ m}^2$.',
        explanation: '$1\\text{ km}^2 = 100\\text{ ha}$.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Viết số thích hợp vào chỗ chấm: $4\\text{ ha } 500\\text{ m}^2 = ...\\text{ m}^2$:',
        options: ['4500 m²', '40 500 m²', '4050 m²', '45 000 m²'],
        correctAnswer: '40 500 m²',
        hint: '$4\\text{ ha} = 40\\,000\\text{ m}^2$. Lấy $40\\,000 + 500$.',
        explanation: '$4\\text{ ha } 500\\text{ m}^2 = 40\\,000\\text{ m}^2 + 500\\text{ m}^2 = 40\\,500\\text{ m}^2$.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một khu rừng bảo tồn có diện tích $12\\text{ km}^2$. Diện tích khu rừng đó tính theo héc-ta là:',
        options: ['120 ha', '1 200 ha', '12 000 ha', '120 000 ha'],
        correctAnswer: '1 200 ha',
        hint: '$1\\text{ km}^2 = 100\\text{ ha}$, lấy $12 \\times 100$.',
        explanation: '$12\\text{ km}^2 = 12 \\times 100 = 1200\\text{ ha}$.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Hai đơn vị đo diện tích liền kề nhau trong bảng đơn vị đo hơn kém nhau bao nhiêu lần?',
        options: ['10 lần', '100 lần', '1 000 lần', '10 000 lần'],
        correctAnswer: '100 lần',
        hint: 'Mỗi hàng đơn vị đo diện tích ứng với hai chữ số.',
        explanation: 'Mỗi đơn vị đo diện tích gấp 100 lần đơn vị bé hơn liền kề và bằng $\\frac{1}{100}$ đơn vị lớn hơn liền kề.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Một cánh đồng hình chữ nhật có chiều dài $500\\text{ m}$, chiều rộng $200\\text{ m}$. Diện tích cánh đồng là bao nhiêu héc-ta?',
        options: ['1 ha', '10 ha', '100 ha', '1 000 ha'],
        correctAnswer: '10 ha',
        hint: 'Tính diện tích ra $\\text{m}^2$ ($500 \\times 200 = 100\\,000\\text{ m}^2$), sau đó chia cho $10\\,000$.',
        explanation: 'Diện tích = $500 \\times 200 = 100\\,000\\text{ m}^2 = 10\\text{ ha}$.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Kí hiệu héc-ta là gì?',
        options: ['ha', 'hk', 'hm', 'h²'],
        correctAnswer: 'ha',
        explanation: 'Héc-ta viết tắt là ha (chính là $1\\text{ hm}^2$).'
      },
      {
        id: `${meta.id}-s2`,
        prompt: '$2\\text{ ha} = ...\\text{ m}^2$',
        options: ['20 000 m²', '200 m²', '2 000 m²', '200 000 m²'],
        correctAnswer: '20 000 m²',
        explanation: '$2 \\times 10\\,000 = 20\\,000\\text{ m}^2$.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Đơn vị thích hợp nhất để đo diện tích một tỉnh hoặc một quốc gia là:',
        options: ['km²', 'ha', 'm²', 'cm²'],
        correctAnswer: 'km²',
        explanation: 'Diện tích địa lý rộng lớn thường dùng ki-lô-mét vuông (km²).'
      }
    ];
  } else if (titleLower.includes('tam giác') || titleLower.includes('hình thang') || titleLower.includes('tròn')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Công thức tính chu vi hình tròn có bán kính $r$ là:',
        options: ['C = r x 3,14', 'C = r x 2 x 3,14', 'C = r x r x 3,14', 'C = r x 4'],
        correctAnswer: 'C = r x 2 x 3,14',
        hint: 'Chu vi bằng đường kính nhân 3,14 (hoặc bán kính nhân 2 nhân 3,14).',
        explanation: 'Công thức tính chu vi hình tròn: $C = d \\times 3,14 = r \\times 2 \\times 3,14$.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Công thức tính diện tích hình thang (đáy lớn $a$, đáy bé $b$, chiều cao $h$) là:',
        options: ['S = (a + b) x h : 2', 'S = (a + b) x h', 'S = a x b x h : 2', 'S = (a + b) : 2'],
        correctAnswer: 'S = (a + b) x h : 2',
        hint: 'Đáy lớn đáy nhỏ ta đem cộng vào, nhân với chiều cao, chia đôi lấy nửa.',
        explanation: 'Diện tích hình thang bằng tổng độ dài hai đáy nhân với chiều cao (cùng đơn vị đo) rồi chia cho 2.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một hình tròn có bán kính $r = 5\\text{ cm}$. Diện tích của hình tròn đó là:',
        options: ['31,4 cm²', '78,5 cm²', '15,7 cm²', '100 cm²'],
        correctAnswer: '78,5 cm²',
        hint: 'Áp dụng công thức $S = r \\times r \\times 3,14 = 5 \\times 5 \\times 3,14$.',
        explanation: '$S = 5 \\times 5 \\times 3,14 = 25 \\times 3,14 = 78,5\\text{ cm}^2$.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một hình thang có đáy lớn $12\\text{ cm}$, đáy bé $8\\text{ cm}$, chiều cao $5\\text{ cm}$. Diện tích hình thang là:',
        options: ['50 cm²', '100 cm²', '25 cm²', '48 cm²'],
        correctAnswer: '50 cm²',
        hint: 'Lấy $(12 + 8) \\times 5 : 2$.',
        explanation: '$S = (12 + 8) \\times 5 : 2 = 20 \\times 5 : 2 = 50\\text{ cm}^2$.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một hình tam giác có diện tích $24\\text{ cm}^2$, chiều cao $6\\text{ cm}$. Độ dài đáy tương ứng là:',
        options: ['4 cm', '8 cm', '12 cm', '6 cm'],
        correctAnswer: '8 cm',
        hint: 'Cạnh đáy = (Diện tích × 2) : Chiều cao.',
        explanation: 'Độ dài đáy = $(24 \\times 2) : 6 = 48 : 6 = 8\\text{ cm}$.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Một biển báo giao thông hình tròn có đường kính $40\\text{ cm}$. Chu vi của biển báo đó là:',
        options: ['125,6 cm', '62,8 cm', '251,2 cm', '502,4 cm'],
        correctAnswer: '125,6 cm',
        hint: 'Chu vi = Đường kính × 3,14: $40 \\times 3,14$.',
        explanation: 'Chu vi = $40 \\times 3,14 = 125,6\\text{ cm}$.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Số Pi ($\\pi$) thường được lấy xấp xỉ bằng bao nhiêu trong toán lớp 5?',
        options: ['3,14', '3,41', '3,12', '3,16'],
        correctAnswer: '3,14',
        explanation: 'Trong chương trình Tiểu học, số Pi được quy ước lấy giá trị 3,14.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Đường kính của hình tròn gấp mấy lần bán kính?',
        options: ['2 lần', '3 lần', '4 lần', 'Bằng nhau'],
        correctAnswer: '2 lần',
        explanation: '$d = 2 \\times r$.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Diện tích tam giác có đáy $10\\text{ cm}$, chiều cao $4\\text{ cm}$ là:',
        options: ['20 cm²', '40 cm²', '14 cm²', '10 cm²'],
        correctAnswer: '20 cm²',
        explanation: '$(10 \\times 4) : 2 = 20\\text{ cm}^2$.'
      }
    ];
  } else if (titleLower.includes('thể tích') || titleLower.includes('khối') || titleLower.includes('hình hộp') || titleLower.includes('lập phương')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: '$1\\text{ dm}^3$ bằng bao nhiêu xăng-ti-mét khối ($\\text{cm}^3$)?',
        options: ['10 cm³', '100 cm³', '1 000 cm³', '10 000 cm³'],
        correctAnswer: '1 000 cm³',
        hint: '$1\\text{ dm} = 10\\text{ cm}$, thể tích cạnh dài $1\\text{ dm}$ là $10 \\times 10 \\times 10$.',
        explanation: '$1\\text{ dm}^3 = 1000\\text{ cm}^3$.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: '$1\\text{ lít}$ nước bằng đúng thể tích của đơn vị nào?',
        options: ['1 cm³', '1 dm³', '1 m³', '10 dm³'],
        correctAnswer: '1 dm³',
        hint: '1 đề-xi-mét khối nước chính là 1 lít nước trong đời sống.',
        explanation: '$1\\text{ lít} = 1\\text{ dm}^3 = 1000\\text{ cm}^3$.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Công thức tính thể tích hình hộp chữ nhật có ba kích thước $a, b, c$ là:',
        options: ['V = a x b x c', 'V = (a + b) x c', 'V = (a + b + c) : 3', 'V = a x b x 2'],
        correctAnswer: 'V = a x b x c',
        hint: 'Thể tích = Chiều dài × Chiều rộng × Chiều cao (cùng đơn vị đo).',
        explanation: 'Thể tích hình hộp chữ nhật: $V = a \\times b \\times c$.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một hình lập phương có cạnh $4\\text{ cm}$. Thể tích của hình lập phương đó là:',
        options: ['16 cm³', '48 cm³', '64 cm³', '96 cm³'],
        correctAnswer: '64 cm³',
        hint: 'Thể tích lập phương = cạnh × cạnh × cạnh: $4 \\times 4 \\times 4$.',
        explanation: '$V = 4 \\times 4 \\times 4 = 64\\text{ cm}^3$.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một bể cá hình hộp chữ nhật có dài $80\\text{ cm}$, rộng $50\\text{ cm}$, cao $40\\text{ cm}$. Thể tích bể cá là:',
        options: ['160 000 cm³', '16 000 cm³', '170 cm³', '160 lít'],
        correctAnswer: '160 000 cm³',
        hint: 'Lấy $80 \\times 50 \\times 40 = 160\\,000\\text{ cm}^3$ (tương đương 160 lít).',
        explanation: '$V = 80 \\times 50 \\times 40 = 160\\,000\\text{ cm}^3$.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Diện tích toàn phần của hình lập phương có cạnh $5\\text{ cm}$ là:',
        options: ['100 cm²', '125 cm²', '150 cm²', '25 cm²'],
        correctAnswer: '150 cm²',
        hint: 'Hình lập phương có 6 mặt bằng nhau. Diện tích 1 mặt = $5 \\times 5 = 25$. Lấy $25 \\times 6$.',
        explanation: '$S_{tp} = (5 \\times 5) \\times 6 = 25 \\times 6 = 150\\text{ cm}^2$.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Hình lập phương có bao nhiêu mặt?',
        options: ['6 mặt', '8 mặt', '12 mặt', '4 mặt'],
        correctAnswer: '6 mặt',
        explanation: 'Hình lập phương có 6 mặt đều là các hình vuông bằng nhau.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: '$1\\text{ m}^3 = ...\\text{ dm}^3$',
        options: ['1 000 dm³', '100 dm³', '10 dm³', '1 000 000 dm³'],
        correctAnswer: '1 000 dm³',
        explanation: '$1\\text{ m}^3 = 1000\\text{ dm}^3$.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Thể tích hình lập phương cạnh $1\\text{ m}$ là:',
        options: ['1 m³', '3 m³', '6 m³', '100 m³'],
        correctAnswer: '1 m³',
        explanation: '$1 \\times 1 \\times 1 = 1\\text{ m}^3$.'
      }
    ];
  } else if (titleLower.includes('vận tốc') || titleLower.includes('thời gian') || titleLower.includes('chuyển động')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Công thức tính vận tốc $v$ khi biết quãng đường $s$ và thời gian $t$ là:',
        options: ['v = s : t', 'v = s x t', 'v = t : s', 'v = (s + t) : 2'],
        correctAnswer: 'v = s : t',
        hint: 'Muốn tính vận tốc ta lấy quãng đường chia cho thời gian.',
        explanation: '$v = s : t$. Đơn vị thường là km/h hoặc m/s.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Một người đi xe máy đi được quãng đường $90\\text{ km}$ trong $2\\text{ giờ}$. Vận tốc của người đó là:',
        options: ['45 km/h', '180 km/h', '40 km/h', '92 km/h'],
        correctAnswer: '45 km/h',
        hint: 'Lấy quãng đường 90 chia cho thời gian 2: $90 : 2$.',
        explanation: '$v = 90 : 2 = 45\\text{ km/h}$.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một con ong bay với vận tốc $2,5\\text{ m/s}$. Trong $1\\text{ phút}$, con ong bay được quãng đường là:',
        options: ['150 m', '25 m', '250 m', '60 m'],
        correctAnswer: '150 m',
        hint: 'Đổi $1\\text{ phút} = 60\\text{ giây}$. Quãng đường = $v \\times t = 2,5 \\times 60$.',
        explanation: '$1\\text{ phút} = 60\\text{ giây}$. Quãng đường = $2,5 \\times 60 = 150\\text{ m}$.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Hai ô tô xuất phát cùng một lúc từ hai điểm A và B cách nhau $180\\text{ km}$ và đi ngược chiều nhau. Xe thứ nhất đi với vận tốc $50\\text{ km/h}$, xe thứ hai đi với vận tốc $40\\text{ km/h}$. Sau bao lâu hai xe gặp nhau?',
        options: ['2 giờ', '3 giờ', '1,5 giờ', '4 giờ'],
        correctAnswer: '2 giờ',
        hint: 'Tổng vận tốc hai xe là $50 + 40 = 90\\text{ km/h}$. Thời gian gặp = Quãng đường : Tổng vận tốc.',
        explanation: 'Tổng vận tốc: $50 + 40 = 90\\text{ km/h}$. Thời gian gặp nhau: $180 : 90 = 2\\text{ giờ}$.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một ca nô đi xuôi dòng với vận tốc $24\\text{ km/h}$. Biết vận tốc dòng nước là $3\\text{ km/h}$. Vận tốc thực của ca nô khi nước yên lặng là:',
        options: ['21 km/h', '27 km/h', '18 km/h', '24 km/h'],
        correctAnswer: '21 km/h',
        hint: 'Vận tốc xuôi dòng = Vận tốc thực + Vận tốc nước. Vậy Vận tốc thực = Vận tốc xuôi dòng - Vận tốc nước.',
        explanation: 'Vận tốc thực của ca nô: $24 - 3 = 21\\text{ km/h}$.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Một người chạy quãng đường $800\\text{ m}$ hết 2 phút 40 giây. Vận tốc chạy của người đó là:',
        options: ['5 m/s', '4 m/s', '6 m/s', '3,5 m/s'],
        correctAnswer: '5 m/s',
        hint: 'Đổi 2 phút 40 giây = $2 \\times 60 + 40 = 160\\text{ giây}$. Vận tốc = $800 : 160$.',
        explanation: '2 phút 40 giây = $160\\text{ giây}$. $v = 800 : 160 = 5\\text{ m/s}$.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Đơn vị đo vận tốc phổ biến của ô tô, xe máy là:',
        options: ['km/h', 'm/h', 'km/s', 'm/phút'],
        correctAnswer: 'km/h',
        explanation: 'Vận tốc xe cơ giới thường tính theo ki-lô-mét trên giờ (km/h).'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Muốn tìm quãng đường khi biết vận tốc $v$ và thời gian $t$, ta làm thế nào?',
        options: ['s = v x t', 's = v : t', 's = t : v', 's = v + t'],
        correctAnswer: 's = v x t',
        explanation: 'Quãng đường bằng vận tốc nhân thời gian.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Đi bộ $6\\text{ km}$ hết $1,5\\text{ giờ}$. Vận tốc là:',
        options: ['4 km/h', '5 km/h', '3 km/h', '4,5 km/h'],
        correctAnswer: '4 km/h',
        explanation: '$v = 6 : 1,5 = 4\\text{ km/h}$.'
      }
    ];
  } else if (titleLower.includes('tỉ số') || titleLower.includes('phần trăm') || titleLower.includes('tỉ lệ')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Tỉ số phần trăm của hai số 3 và 5 là:',
        options: ['60%', '35%', '15%', '80%'],
        correctAnswer: '60%',
        hint: 'Lấy $3 : 5 = 0,6$. Sau đó nhân với 100 và thêm kí hiệu %.',
        explanation: '$3 : 5 = 0,6 = 60\\%$.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Tìm $20\\%$ của số $150$:',
        options: ['30', '15', '20', '50'],
        correctAnswer: '30',
        hint: 'Lấy $150 \\times 20 : 100$.',
        explanation: '$150 \\times 20 : 100 = 30$.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một lớp học có 40 học sinh, trong đó có 24 bạn nữ. Tỉ số phần trăm của số học sinh nữ so với cả lớp là:',
        options: ['60%', '40%', '50%', '24%'],
        correctAnswer: '60%',
        hint: 'Lấy $24 : 40 = 0,6 = 60\\%$.',
        explanation: 'Tỉ số phần trăm bạn nữ: $24 : 40 = 0,6 = 60\\%$.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một chiếc áo có giá gốc $200\\,000$ đồng, nhân dịp khai giảng được giảm giá $15\\%$. Số tiền được giảm là:',
        options: ['30 000 đồng', '15 000 đồng', '170 000 đồng', '20 000 đồng'],
        correctAnswer: '30 000 đồng',
        hint: 'Lấy $200\\,000 \\times 15 : 100$.',
        explanation: 'Số tiền giảm giá: $200\\,000 \\times 15 : 100 = 30\\,000$ đồng.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Tìm hai số biết tổng của chúng là 60 và tỉ số của hai số là $\\frac{1}{3}$. Hai số đó là:',
        options: ['15 và 45', '20 và 40', '10 và 50', '25 và 35'],
        correctAnswer: '15 và 45',
        hint: 'Tổng số phần bằng nhau: $1 + 3 = 4$ phần. Giá trị một phần: $60 : 4 = 15$.',
        explanation: 'Số bé là $15$, số lớn là $15 \\times 3 = 45$.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Tìm một số biết $25\\%$ của số đó là $80$. Số đó là:',
        options: ['320', '20', '200', '160'],
        correctAnswer: '320',
        hint: 'Số đó = $80 : 25 \\times 100$.',
        explanation: 'Số cần tìm: $80 : 25 \\times 100 = 320$.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Phân số $\\frac{1}{2}$ viết dưới dạng tỉ số phần trăm là:',
        options: ['50%', '20%', '25%', '100%'],
        correctAnswer: '50%',
        explanation: '$\\frac{1}{2} = 0,5 = 50\\%$.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Kí hiệu % đọc là gì?',
        options: ['Phần trăm', 'Phần mười', 'Phần nghìn', 'Chia đôi'],
        correctAnswer: 'Phần trăm',
        explanation: '% là kí hiệu phần trăm.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: '$100\\%$ của số 45 là:',
        options: ['45', '1', '100', '4,5'],
        correctAnswer: '45',
        explanation: '$100\\%$ của một số chính là bản thân số đó.'
      }
    ];
  } else {
    // Mặc định: Số thập phân, số tự nhiên, phép tính cơ bản hoặc ôn tập tổng hợp
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: `Trong bài học "${meta.title}", khi giải toán ta luôn cần thực hiện bước quan trọng nào trước tiên?`,
        options: [
          'Đọc kĩ đề, xác định đại lượng đã cho và yêu cầu cần tìm',
          'Lấy các số nhân nhẩm với nhau ngay',
          'Ghi bừa một đáp số cho nhanh',
          'Bỏ qua bài toán có lời văn'
        ],
        correctAnswer: 'Đọc kĩ đề, xác định đại lượng đã cho và yêu cầu cần tìm',
        hint: 'Đọc kĩ đề là chìa khóa để hiểu đúng yêu cầu bài toán.',
        explanation: 'Xác định rõ dữ kiện đề bài cho và câu hỏi cần giải quyết giúp học sinh tránh nhầm lẫn hướng làm.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Nếu một phép tính có các số đo khác đơn vị (ví dụ mét và xăng-ti-mét), ta phải:',
        options: [
          'Đổi về cùng một đơn vị đo rồi mới tính toán',
          'Cứ thế cộng trừ nhân chia trực tiếp',
          'Bỏ hết đơn vị đo không cần quan tâm',
          'Chỉ tính với đơn vị lớn hơn'
        ],
        correctAnswer: 'Đổi về cùng một đơn vị đo rồi mới tính toán',
        hint: 'Hai đại lượng khác đơn vị không thể cộng trừ trực tiếp với nhau bạn nhé!',
        explanation: 'Quy tắc vàng trong toán đo lường là đưa tất cả các số đo về cùng một đơn vị trước khi thực hiện phép tính.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Khi nhân nhẩm một số thập phân với $10, 100, 1000,...$, ta chỉ việc dịch chuyển dấu phẩy:',
        options: [
          'Sang bên phải lần lượt 1, 2, 3,... chữ số',
          'Sang bên trái lần lượt 1, 2, 3,... chữ số',
          'Không thay đổi vị trí dấu phẩy',
          'Xóa luôn dấu phẩy'
        ],
        correctAnswer: 'Sang bên phải lần lượt 1, 2, 3,... chữ số',
        hint: 'Nhân với số lớn thì kết quả phải to lên ➔ chuyển dấu phẩy sang phải.',
        explanation: 'Nhân với 10, 100, 1000 dịch dấu phẩy sang phải; chia cho 10, 100, 1000 dịch sang trái.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Làm tròn số thập phân $15,847$ đến hàng phần mười (chữ số thập phân thứ nhất) ta được:',
        options: ['15,8', '15,9', '15,85', '16,0'],
        correctAnswer: '15,8',
        hint: 'Chữ số ngay sau hàng phần mười là 4 (bé hơn 5) nên ta giữ nguyên chữ số 8.',
        explanation: 'Vì chữ số hàng phần trăm là 4 < 5 nên làm tròn đến hàng phần mười ta được $15,8$.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Kết quả của biểu thức $12,5 \\times 4 + 12,5 \\times 6$ tính nhanh là:',
        options: ['125', '120', '100', '150'],
        correctAnswer: '125',
        hint: 'Áp dụng tính chất một số nhân một tổng: $12,5 \\times (4 + 6)$.',
        explanation: '$12,5 \\times (4 + 6) = 12,5 \\times 10 = 125$.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Một lớp có 32 học sinh. Số học sinh đạt điểm 9 và 10 chiếm $\\frac{3}{4}$ số học sinh cả lớp. Số học sinh đạt điểm 9 và 10 là:',
        options: ['24 học sinh', '18 học sinh', '28 học sinh', '20 học sinh'],
        correctAnswer: '24 học sinh',
        hint: 'Lấy $32 \\times \\frac{3}{4} = (32 : 4) \\times 3$.',
        explanation: 'Số học sinh đạt điểm 9 và 10: $32 \\times 3 : 4 = 24$ học sinh.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Khi thực hiện dãy tính chỉ có cộng và trừ, ta làm theo thứ tự:',
        options: ['Từ trái sang phải', 'Từ phải sang trái', 'Cộng trước trừ sau', 'Tùy ý thích'],
        correctAnswer: 'Từ trái sang phải',
        explanation: 'Dãy tính chỉ có phép cộng, trừ ta thực hiện lần lượt từ trái sang phải.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: '$0,5 \\times 2 = ?$',
        options: ['1', '0,10', '10', '0,1'],
        correctAnswer: '1',
        explanation: '$0,5 \\times 2 = 1,0 = 1$.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Sau khi làm xong bài toán có lời văn, bước cuối cùng không được quên là:',
        options: ['Ghi rõ đáp số kèm đơn vị', 'Gấp vở lại ngay', 'Bỏ quên đơn vị', 'Xóa đề bài'],
        correctAnswer: 'Ghi rõ đáp số kèm đơn vị',
        explanation: 'Đáp số kèm tên đơn vị là phần bắt buộc để bài giải hoàn chỉnh.'
      }
    ];
  }

  // Xáo trộn ngẫu nhiên thứ tự các lựa chọn
  return {
    practiceQuestions: practice.map(q => shuffleOptions(q)),
    speedQuestions: speed.map(q => shuffleOptions(q))
  };
}

// -------------------------------------------------------------
// BỘ SINH CÂU HỎI TIẾNG VIỆT LỚP 5 THEO CHỦ ĐỀ CHUẨN SGK
// -------------------------------------------------------------
function generateVietnameseQuestions(meta: LessonMeta): { practiceQuestions: Question[]; speedQuestions: SpeedQuestion[] } {
  const titleLower = meta.title.toLowerCase();

  let practice: Question[] = [];
  let speed: SpeedQuestion[] = [];

  if (titleLower.includes('đọc hiểu')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: `Trong bài đọc "${meta.title}", để trả lời chính xác các câu hỏi đọc hiểu, bước quan trọng nhất là:`,
        options: [
          'Đọc kĩ từng đoạn văn và gạch chân các chi tiết, từ ngữ then chốt',
          'Đoán mò không cần đọc lại bài',
          'Chỉ đọc lướt qua tiêu đề',
          'Chọn đáp án dài nhất'
        ],
        correctAnswer: 'Đọc kĩ từng đoạn văn và gạch chân các chi tiết, từ ngữ then chốt',
        hint: 'Mọi câu trả lời đúng đều bắt nguồn từ ngữ liệu trong bài đọc.',
        explanation: 'Đọc kĩ và đối chiếu văn bản giúp học sinh nắm chắc thông tin và tránh các bẫy từ ngữ tinh vi.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Biện pháp nghệ thuật nào thường dùng để làm cho thiên nhiên, con vật có hành động và tình cảm như con người?',
        options: ['Nhân hóa', 'So sánh', 'Điệp ngữ', 'Đảo ngữ'],
        correctAnswer: 'Nhân hóa',
        hint: 'Biến sự vật vô tri thành một nhân vật có tâm hồn như con người.',
        explanation: 'Biện pháp nhân hóa gán đặc điểm, lời nói, cảm xúc của con người cho con vật, cây cỏ.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Những từ ngữ miêu tả âm thanh gợi cảm (như róc rách, xào xạc, vi vu, tí tách) được gọi là:',
        options: ['Từ tượng thanh', 'Từ tượng hình', 'Từ đồng âm', 'Quan hệ từ'],
        correctAnswer: 'Từ tượng thanh',
        hint: '"Thanh" là âm thanh tiếng động.',
        explanation: 'Từ tượng thanh là những từ mô phỏng âm thanh tự nhiên hoặc con người.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Khi một bài thơ hoặc đoạn văn nói về tình cảm gia đình, quê hương, cảm xúc chủ đạo của tác giả thường là:',
        options: [
          'Yêu thương, tự hào và trân trọng sâu sắc',
          'Lạnh lùng, thờ ơ',
          'Tức giận, cáu kỉnh',
          'Hoài nghi, lo lắng'
        ],
        correctAnswer: 'Yêu thương, tự hào và trân trọng sâu sắc',
        hint: 'Văn chương chân chính luôn hướng con người đến tình yêu thương cao đẹp.',
        explanation: 'Cảm xúc xuyên suốt các tác phẩm thiếu nhi lớp 5 là tình yêu thương gia đình, bè bạn và quê hương đất nước.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Để xác định ý chính của một đoạn văn, câu văn nào thường mang nội dung tóm lược bao quát nhất?',
        options: ['Câu chủ đề (đầu hoặc cuối đoạn)', 'Câu ngắn nhất trong đoạn', 'Câu có chứa số liệu', 'Bất kì câu nào'],
        correctAnswer: 'Câu chủ đề (đầu hoặc cuối đoạn)',
        hint: 'Đoạn văn quy nạp hoặc diễn dịch thường đặt câu chốt ý ở đầu hoặc cuối.',
        explanation: 'Câu chủ đề thường nằm ở đầu đoạn (đoạn diễn dịch) hoặc cuối đoạn (đoạn quy nạp) thâu tóm ý toàn đoạn.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Bài học nhân văn sâu sắc nhất mà mỗi bài đọc mang lại cho học sinh tiểu học là:',
        options: [
          'Bồi dưỡng tâm hồn trong sáng, lòng nhân ái và tình yêu cuộc sống',
          'Học thuộc lòng chữ nghĩa để lấy điểm',
          'Chỉ trích lỗi lầm của người khác',
          'Đọc nhanh cho xong bài'
        ],
        correctAnswer: 'Bồi dưỡng tâm hồn trong sáng, lòng nhân ái và tình yêu cuộc sống',
        hint: 'Mục đích cao nhất của môn Tiếng Việt là làm đẹp tâm hồn con người.',
        explanation: 'Văn học giáo dục đạo đức, bồi đắp lòng nhân hậu và tình yêu thiên nhiên, con người cho học sinh.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Khi đọc một bài thơ diễn cảm, ta cần chú ý điều gì?',
        options: ['Ngắt nhịp đúng và thể hiện cảm xúc phù hợp', 'Đọc thật nhanh không ngừng nghỉ', 'Đọc nhỏ nhất có thể', 'Đọc đều đều như trả bài'],
        correctAnswer: 'Ngắt nhịp đúng và thể hiện cảm xúc phù hợp',
        explanation: 'Ngắt nhịp và nhấn giọng ở các từ đắt giá giúp bài thơ truyền cảm hơn.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Từ "dạt dào" thường đi liền với từ nào?',
        options: ['Tình cảm dạt dào', 'Gió dạt dào', 'Đá dạt dào', 'Nắng dạt dào'],
        correctAnswer: 'Tình cảm dạt dào',
        explanation: '"Dạt dào" gợi tả cảm xúc tràn trề, tha thiết.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Trong câu "Mặt trời như một quả cầu lửa đỏ rực", tác giả dùng biện pháp gì?',
        options: ['So sánh', 'Nhân hóa', 'Nói quá', 'Điệp từ'],
        correctAnswer: 'So sánh',
        explanation: 'Từ "như" nối hai vế so sánh giữa mặt trời và quả cầu lửa.'
      }
    ];
  } else if (titleLower.includes('đồng nghĩa') || titleLower.includes('trái nghĩa')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Cặp từ nào dưới đây là cặp từ ĐỒNG NGHĨA?',
        options: ['Bao la - Mênh mông', 'Gầy gò - Béo tốt', 'Sáng sủa - Tối tăm', 'Nhanh nhẹn - Chậm chạp'],
        correctAnswer: 'Bao la - Mênh mông',
        hint: 'Tìm hai từ có ý nghĩa giống hoặc gần giống nhau.',
        explanation: '"Bao la" và "mênh mông" đều gợi tả không gian rộng lớn đến tận chân trời.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Cặp từ nào dưới đây là cặp từ TRÁI NGHĨA?',
        options: ['Đoàn kết - Chia rẽ', 'Cần cù - Chăm chỉ', 'Dũng cảm - Can đảm', 'Thông minh - Sáng dạ'],
        correctAnswer: 'Đoàn kết - Chia rẽ',
        hint: 'Tìm hai từ có ý nghĩa trái ngược, đối lập nhau hoàn toàn.',
        explanation: '"Đoàn kết" (gắn bó keo sơn) và "chia rẽ" (tách rời, mâu thuẫn) là cặp từ trái nghĩa.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Từ nào có thể thay thế cho từ "chăm chỉ" trong câu "Nam là một học sinh rất chăm chỉ." mà nghĩa không đổi?',
        options: ['Cần cù', 'Ngoan ngoãn', 'Nhanh nhẹn', 'Thật thà'],
        correctAnswer: 'Cần cù',
        hint: 'Tìm từ đồng nghĩa miêu tả tính siêng năng, chịu khó học tập.',
        explanation: '"Cần cù" và "chăm chỉ" là hai từ đồng nghĩa thay thế tốt cho nhau.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Cặp từ trái nghĩa trong câu tục ngữ "Lá lành đùm lá rách" là:',
        options: ['Lành - Rách', 'Lá - Đùm', 'Lành - Đùm', 'Lá - Rách'],
        correctAnswer: 'Lành - Rách',
        hint: 'Lành lặn đối lập với rách nát.',
        explanation: '"Lành" và "rách" tạo nên hình ảnh tương phản sâu sắc về sự đùm bọc, tương thân tương ái.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Dãy từ nào sau đây gồm các từ ĐỒNG NGHĨA chỉ màu đỏ?',
        options: ['Đỏ ửng, đỏ rực, đỏ chót, đỏ thắm', 'Đỏ hoe, xanh ngắt, vàng óng', 'Đỏ ối, trắng muốt, đen kịt', 'Đỏ tươi, tím lịm, hồng hào'],
        correctAnswer: 'Đỏ ửng, đỏ rực, đỏ chót, đỏ thắm',
        hint: 'Kiểm tra xem tất cả các từ trong đáp án có cùng chỉ sắc độ màu đỏ không.',
        explanation: 'Tất cả các từ "đỏ ửng, đỏ rực, đỏ chót, đỏ thắm" đều đồng nghĩa chỉ các sắc độ khác nhau của màu đỏ.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Việc sử dụng các cặp từ trái nghĩa trong cùng một câu văn có tác dụng gì?',
        options: [
          'Tạo nên sự tương phản nổi bật, làm câu văn giàu hình ảnh và tính triết lí',
          'Làm cho câu văn trở nên mâu thuẫn khó hiểu',
          'Chỉ để kéo dài dung lượng câu',
          'Làm câu văn mất đi tính liên kết'
        ],
        correctAnswer: 'Tạo nên sự tương phản nổi bật, làm câu văn giàu hình ảnh và tính triết lí',
        hint: 'Đối lập làm sáng rõ phẩm chất, tính chất của sự vật.',
        explanation: 'Phép đối lập bằng từ trái nghĩa giúp tạo ấn tượng mạnh mẽ và làm nổi bật tư tưởng của câu ca dao, tục ngữ.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Từ trái nghĩa với "dũng cảm" là:',
        options: ['Hèn nhát', 'Gan dạ', 'Thông minh', 'Hiền lành'],
        correctAnswer: 'Hèn nhát',
        explanation: '"Hèn nhát" trái nghĩa hoàn toàn với "dũng cảm".'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Từ đồng nghĩa với "tổ quốc" là:',
        options: ['Đất nước', 'Làng xóm', 'Thành phố', 'Gia đình'],
        correctAnswer: 'Đất nước',
        explanation: '"Tổ quốc" đồng nghĩa với "đất nước", "giang sơn".'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Từ trái nghĩa với "thật thà" là:',
        options: ['Gian dối', 'Chăm chỉ', 'Vui vẻ', 'Nóng nảy'],
        correctAnswer: 'Gian dối',
        explanation: '"Thật thà" đối lập với "gian dối".'
      }
    ];
  } else if (titleLower.includes('đại từ') || titleLower.includes('quan hệ từ')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Từ nào dưới đây là ĐẠI TỪ XƯNG HÔ?',
        options: ['Chúng em', 'Học sinh', 'Trường học', 'Thầy giáo'],
        correctAnswer: 'Chúng em',
        hint: 'Đại từ xưng hô dùng để tự xưng hoặc gọi người khác trong giao tiếp.',
        explanation: '"Chúng em" là đại từ xưng hô ngôi thứ nhất số nhiều.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Trong câu "Nam học giỏi và rất khiêm tốn.", từ "và" là:',
        options: ['Quan hệ từ', 'Danh từ', 'Động từ', 'Tính từ'],
        correctAnswer: 'Quan hệ từ',
        hint: 'Từ "và" dùng để nối hai đặc điểm của Nam.',
        explanation: '"Và" là quan hệ từ dùng để liên kết hai từ hoặc hai vế câu.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Cặp quan hệ từ nào dưới đây biểu thị quan hệ NGUYÊN NHÂN - KẾT QUẢ?',
        options: ['Vì ... nên ...', 'Tuy ... nhưng ...', 'Nếu ... thì ...', 'Không những ... mà còn ...'],
        correctAnswer: 'Vì ... nên ...',
        hint: 'Vế trước chỉ lý do, nguyên nhân; vế sau chỉ kết quả xảy ra.',
        explanation: '"Vì... nên..." là cặp quan hệ từ kinh điển biểu thị quan hệ nguyên nhân - kết quả.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Cặp quan hệ từ nào dưới đây biểu thị quan hệ TƯƠNG PHẢN (ngược đời)?',
        options: ['Tuy ... nhưng ...', 'Hễ ... thì ...', 'Do ... nên ...', 'Nhờ ... mà ...'],
        correctAnswer: 'Tuy ... nhưng ...',
        hint: 'Hai vế câu có ý nghĩa đối lập nhau.',
        explanation: '"Tuy ... nhưng ..." biểu thị quan hệ tương phản giữa hai vế câu.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Trong đoạn: "Bác Hồ là vị cha già kính yêu của dân tộc. Người đã dành trọn đời mình cho non sông.", từ "Người" được dùng làm gì?',
        options: [
          'Đại từ thay thế cho "Bác Hồ" để tránh lặp từ',
          'Động từ chỉ hành động',
          'Tính từ miêu tả',
          'Từ tượng thanh'
        ],
        correctAnswer: 'Đại từ thay thế cho "Bác Hồ" để tránh lặp từ',
        hint: 'Dùng đại từ thay thế giúp câu văn liền mạch mà không bị nhắc lại cùng một tên riêng.',
        explanation: '"Người" là đại từ thay thế cho "Bác Hồ", vừa thể hiện sự tôn kính vừa giúp đoạn văn tránh lỗi lặp từ.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Điền cặp quan hệ từ phù hợp vào câu: "... trời mưa to ... bạn Nam vẫn đi học đúng giờ."',
        options: ['Tuy ... nhưng ...', 'Vì ... nên ...', 'Nếu ... thì ...', 'Giá như ... thì ...'],
        correctAnswer: 'Tuy ... nhưng ...',
        hint: 'Mưa to nhưng vẫn đi học đúng giờ là hành động thể hiện sự vượt khó (tương phản).',
        explanation: 'Hai vế câu tương phản nhau nên điền "Tuy ... nhưng ...".'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Cặp từ "Nếu ... thì ..." biểu thị mối quan hệ gì?',
        options: ['Điều kiện (giả thiết) - Kết quả', 'Nguyên nhân - Kết quả', 'Tương phản', 'Tăng tiến'],
        correctAnswer: 'Điều kiện (giả thiết) - Kết quả',
        explanation: '"Nếu" nêu giả thiết, "thì" nêu kết quả kéo theo.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Từ nào sau đây KHÔNG PHẢI là quan hệ từ?',
        options: ['Chạy nhảy', 'Nhưng', 'Và', 'Vì'],
        correctAnswer: 'Chạy nhảy',
        explanation: '"Chạy nhảy" là động từ, không phải quan hệ từ.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Cặp từ "Không những ... mà còn ..." biểu thị quan hệ gì?',
        options: ['Tăng tiến', 'Tương phản', 'Điều kiện', 'Nguyên nhân'],
        correctAnswer: 'Tăng tiến',
        explanation: 'Biểu thị mức độ tăng lên ở vế sau.'
      }
    ];
  } else if (titleLower.includes('câu ghép') || titleLower.includes('liên kết câu') || titleLower.includes('từ hô ứng')) {
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Thế nào là một CÂU GHÉP?',
        options: [
          'Câu do nhiều vế câu ghép lại, mỗi vế có đủ cụm Chủ ngữ - Vị ngữ',
          'Câu chỉ có một cụm Chủ ngữ - Vị ngữ duy nhất',
          'Câu có thật nhiều dấu phẩy nhưng chỉ có một vị ngữ',
          'Câu dài trên 20 chữ'
        ],
        correctAnswer: 'Câu do nhiều vế câu ghép lại, mỗi vế có đủ cụm Chủ ngữ - Vị ngữ',
        hint: 'Mỗi vế trong câu ghép có cấu tạo ngữ pháp như một câu đơn hoàn chỉnh.',
        explanation: 'Câu ghép là câu do nhiều vế ghép lại, mỗi vế câu thường có cấu tạo như một câu đơn (đủ Chủ ngữ - Vị ngữ).'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Câu nào dưới đây là CÂU GHÉP?',
        options: [
          'Trời rải mây trắng, gió thổi nhè nhẹ.',
          'Mẹ em đang nấu cơm dưới bếp.',
          'Các bạn học sinh lớp 5A đang chăm chú nghe cô giáo giảng bài.',
          'Mùa xuân, trăm hoa đua nở.'
        ],
        correctAnswer: 'Trời rải mây trắng, gió thổi nhè nhẹ.',
        hint: 'Tìm câu có 2 vế câu độc lập, mỗi vế đều có Chủ ngữ và Vị ngữ.',
        explanation: 'Vế 1: "Trời" (C) - "rải mây trắng" (V); Vế 2: "gió" (C) - "thổi nhè nhẹ" (V) ➔ Đây là câu ghép.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Cặp từ hô ứng nào điền vào câu sau: "Trời ... mưa, đường ... trơn trượt."',
        options: ['càng ... càng ...', 'chưa ... đã ...', 'vừa ... vừa ...', 'đâu ... đấy ...'],
        correctAnswer: 'càng ... càng ...',
        hint: 'Biểu thị mức độ tăng dần theo mức độ của trời mưa.',
        explanation: '"Trời càng mưa, đường càng trơn trượt" là cách dùng cặp từ hô ứng tăng tiến hài hòa.'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Để liên kết hai câu bằng CÁCH THAY THẾ TỪ NGỮ, ta có thể dùng:',
        options: [
          'Đại từ hoặc từ đồng nghĩa để thay thế cho từ ở câu trước',
          'Lặp lại nguyên xi từ đó nhiều lần',
          'Xóa bớt từ ở câu sau',
          'Dùng từ hoàn toàn trái nghĩa'
        ],
        correctAnswer: 'Đại từ hoặc từ đồng nghĩa để thay thế cho từ ở câu trước',
        hint: 'Phép thay thế giúp câu sau gắn kết với câu trước mà không mắc lỗi lặp từ.',
        explanation: 'Phép thay thế từ ngữ sử dụng đại từ hoặc từ ngữ đồng nghĩa để duy trì đối tượng mà không gây nhàm chán.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Trong đoạn: "Mùa thu đã về. Nhưng lũ trẻ trong làng vẫn mải mê thả diều.", từ "Nhưng" liên kết hai câu bằng cách nào?',
        options: ['Dùng từ ngữ nối (phép nối)', 'Phép lặp từ ngữ', 'Phép thay thế từ ngữ', 'Không có liên kết'],
        correctAnswer: 'Dùng từ ngữ nối (phép nối)',
        hint: '"Nhưng" là quan hệ từ đứng đầu câu sau để nối với câu trước.',
        explanation: '"Nhưng" là từ ngữ nối thể hiện sự tương phản, liên kết câu 2 với câu 1 bằng phép nối.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Trong đoạn văn: "Cây chuối trong vườn đã trổ hoa. Nó xòe ra những bắp chuối màu tím thẫm.", từ "Nó" thay thế cho từ ngữ nào?',
        options: ['Cây chuối', 'Vườn', 'Hoa', 'Bắp chuối'],
        correctAnswer: 'Cây chuối',
        hint: 'Xem sự vật nào đang là chủ thể thực hiện hành động "xòe ra".',
        explanation: 'Đại từ "Nó" thay thế cho "Cây chuối" ở câu trước để tạo sự liên kết mạch lạc.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Câu đơn và câu ghép khác nhau căn bản ở điểm nào?',
        options: ['Số lượng cụm Chủ - Vị', 'Độ dài ngắn của chữ', 'Có dấu chấm hay không', 'Cách phát âm'],
        correctAnswer: 'Số lượng cụm Chủ - Vị',
        explanation: 'Câu đơn có 1 cụm C-V, câu ghép có từ 2 cụm C-V trở lên.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Cặp từ "vừa ... đã ..." là loại từ gì?',
        options: ['Cặp từ hô ứng nối câu ghép', 'Đại từ xưng hô', 'Danh từ riêng', 'Từ tượng thanh'],
        correctAnswer: 'Cặp từ hô ứng nối câu ghép',
        explanation: 'Cặp từ hô ứng đi liền nhau để kết nối hai vế câu ghép chặt chẽ.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Lặp lại một từ nhiều lần vô lý trong đoạn văn gọi là lỗi gì?',
        options: ['Lỗi lặp từ', 'Lỗi chính tả', 'Lỗi dùng từ sai nghĩa', 'Lỗi câu cụt'],
        correctAnswer: 'Lỗi lặp từ',
        explanation: 'Lặp từ gây nhàm chán, cần khắc phục bằng phép thay thế từ ngữ.'
      }
    ];
  } else {
    // Mặc định: Tập làm văn, Dấu câu, Mở rộng vốn từ hoặc Ôn tập chung
    practice = [
      {
        id: `${meta.id}-q1`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: `Trong bài học "${meta.title}", để viết câu văn hoặc đoạn văn sinh động, ta nên ưu tiên sử dụng:`,
        options: [
          'Từ ngữ gợi cảm, hình ảnh so sánh hoặc nhân hóa',
          'Từ ngữ sáo rỗng, máy móc',
          'Câu thật dài không cần dấu chấm ngắt câu',
          'Sao chép nguyên văn bài của bạn'
        ],
        correctAnswer: 'Từ ngữ gợi cảm, hình ảnh so sánh hoặc nhân hóa',
        hint: 'Từ gợi hình, gợi cảm giúp người đọc hình dung rõ khung cảnh và cảm xúc.',
        explanation: 'Sử dụng từ ngữ gợi cảm và các biện pháp tu từ so sánh, nhân hóa giúp bài văn miêu tả trở nên hấp dẫn, lay động.'
      },
      {
        id: `${meta.id}-q2`,
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Công dụng chính của DẤU GẠCH NGANG trong đoạn đối thoại là:',
        options: [
          'Đánh dấu chỗ bắt đầu lời nói trực tiếp của nhân vật',
          'Kết thúc câu kể',
          'Báo hiệu chuẩn bị liệt kê',
          'Ngăn cách các vế trong câu đơn'
        ],
        correctAnswer: 'Đánh dấu chỗ bắt đầu lời nói trực tiếp của nhân vật',
        hint: 'Khi nhân vật bắt đầu cất tiếng nói trong truyện, đầu dòng thường có dấu gạch ngang.',
        explanation: 'Dấu gạch ngang đặt ở đầu dòng để đánh dấu lời nói trực tiếp của nhân vật.'
      },
      {
        id: `${meta.id}-q3`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Bài văn miêu tả (tả cảnh hoặc tả người) của học sinh lớp 5 thường gồm mấy phần?',
        options: [
          '3 phần: Mở bài, Thân bài, Kết bài',
          '2 phần: Mở bài và Thân bài',
          '1 phần duy nhất',
          '4 phần'
        ],
        correctAnswer: '3 phần: Mở bài, Thân bài, Kết bài',
        hint: 'Bố cục chuẩn mực của bài tập làm văn tiểu học.',
        explanation: 'Cấu tạo bài văn miêu tả luôn gồm 3 phần: Mở bài (giới thiệu), Thân bài (tả chi tiết), Kết bài (nêu cảm nghĩ).'
      },
      {
        id: `${meta.id}-q4`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'DẤU HAI CHẤM trong câu văn có tác dụng gì?',
        options: [
          'Báo hiệu phần giải thích hoặc phần trích dẫn lời nói trực tiếp',
          'Hỏi người đọc một điều chưa rõ',
          'Bày tỏ cảm xúc ngạc nhiên, thán phục',
          'Để nối hai từ đồng nghĩa'
        ],
        correctAnswer: 'Báo hiệu phần giải thích hoặc phần trích dẫn lời nói trực tiếp',
        hint: 'Dấu hai chấm thường đi trước lời dẫn nhân vật (kèm ngoặc kép) hoặc lời giải thích cụ thể.',
        explanation: 'Dấu hai chấm báo hiệu lời nói trực tiếp của nhân vật (thường kết hợp với dấu ngoặc kép hoặc gạch ngang) hoặc bộ phận đứng sau là lời giải thích.'
      },
      {
        id: `${meta.id}-q5`,
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Cách MỞ BÀI GIÁN TIẾP trong bài văn tả cảnh là:',
        options: [
          'Nói chuyện khác rồi mới dẫn dắt vào cảnh định tả',
          'Giới thiệu ngay lập tức cảnh định tả ở dòng đầu tiên',
          'Chép lại toàn bộ đề bài',
          'Chỉ ghi một câu cụt ngủn'
        ],
        correctAnswer: 'Nói chuyện khác rồi mới dẫn dắt vào cảnh định tả',
        hint: 'Mở bài gián tiếp đi từ xa đến gần, gợi mở cảm xúc một cách tự nhiên.',
        explanation: 'Mở bài gián tiếp bắt đầu từ một câu chuyện, kỉ niệm hoặc liên tưởng tương đồng rồi mới khéo léo dẫn người đọc vào cảnh vật cần miêu tả.'
      },
      {
        id: `${meta.id}-q6`,
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Khi viết đoạn văn, làm thế nào để các câu văn gắn bó chặt chẽ với nhau?',
        options: [
          'Tất cả các câu cùng hướng về một chủ đề chung và dùng các phương tiện liên kết câu hợp lí',
          'Mỗi câu nói về một chủ đề hoàn toàn khác nhau',
          'Chỉ dùng duy nhất một dấu chấm ở cuối đoạn',
          'Lặp lại một từ thật nhiều lần trong mọi câu'
        ],
        correctAnswer: 'Tất cả các câu cùng hướng về một chủ đề chung và dùng các phương tiện liên kết câu hợp lí',
        hint: 'Tính mạch lạc và tính liên kết là hai yếu tố cốt lõi của một đoạn văn hay.',
        explanation: 'Đoạn văn hoàn chỉnh phải có sự thống nhất về chủ đề và sử dụng linh hoạt phép lặp, phép thay thế hoặc từ ngữ nối để liên kết câu.'
      }
    ];
    speed = [
      {
        id: `${meta.id}-s1`,
        prompt: 'Dấu câu dùng để bộc lộ cảm xúc vui mừng, ngạc nhiên ở cuối câu là:',
        options: ['Dấu chấm than (!)', 'Dấu chấm (.)', 'Dấu hỏi (?)', 'Dấu phẩy (,)'],
        correctAnswer: 'Dấu chấm than (!)',
        explanation: 'Dấu chấm than (!) đặt ở cuối câu cảm để bộc lộ tình cảm, cảm xúc mãnh liệt.'
      },
      {
        id: `${meta.id}-s2`,
        prompt: 'Khi tả ngoại hình của một người, ta nên chọn tả:',
        options: ['Các nét tiêu biểu, độc đáo và gây ấn tượng nhất', 'Mọi chi tiết nhìn thấy từ đầu đến chân', 'Chỉ tả hàm răng', 'Không cần quan sát'],
        correctAnswer: 'Các nét tiêu biểu, độc đáo và gây ấn tượng nhất',
        explanation: 'Tập trung vào nét đặc trưng giúp nhân vật hiện lên sống động, chân thực.'
      },
      {
        id: `${meta.id}-s3`,
        prompt: 'Cách kết bài nêu cảm nghĩ sâu sắc và mở rộng liên tưởng gọi là:',
        options: ['Kết bài mở rộng', 'Kết bài không mở rộng', 'Kết bài cụt', 'Mở bài gián tiếp'],
        correctAnswer: 'Kết bài mở rộng',
        explanation: 'Kết bài mở rộng bình luận thêm và mở ra bài học, suy nghĩ sâu xa cho người đọc.'
      }
    ];
  }

  // Xáo trộn ngẫu nhiên thứ tự các lựa chọn
  return {
    practiceQuestions: practice.map(q => shuffleOptions(q)),
    speedQuestions: speed.map(q => shuffleOptions(q))
  };
}

// Hàm tạo dữ liệu sư phạm chuẩn cho bất kỳ bài học nào trong 136 bài SGK
function createStandardLesson(meta: LessonMeta): Lesson {
  const isMath = meta.subject === 'math';

  // Tra cứu câu hỏi đã được biên soạn chi tiết theo từng bài học SGK Kết nối tri thức
  const questionSet = isMath
    ? (mathQuestionsT1[meta.id] || mathQuestionsT2[meta.id])
    : (vietnameseQuestionsT1[meta.id] || vietnameseQuestionsT2[meta.id]);

  let practiceQuestions: Question[];
  let speedQuestions: SpeedQuestion[];

  if (questionSet) {
    practiceQuestions = questionSet.practiceQuestions.map(q => shuffleOptions(q));
    speedQuestions = questionSet.speedQuestions.map(q => shuffleOptions(q));
  } else {
    // Fallback nếu bài học chưa có trong từ điển câu hỏi
    const fallback = isMath ? generateMathQuestions(meta) : generateVietnameseQuestions(meta);
    practiceQuestions = fallback.practiceQuestions;
    speedQuestions = fallback.speedQuestions;
  }

  if (isMath) {
    return {
      id: meta.id,
      subject: 'math',
      volume: meta.volume,
      lessonNumber: meta.lessonNumber,
      title: meta.title,
      unit: meta.unit,
      estimatedMinutes: meta.estimatedMinutes,
      tagline: meta.tagline,
      mascotGreeting: `Chào bạn! Cùng Rô-bốt khám phá bài học "${meta.title}". Hãy cùng luyện tập và làm chủ trọn vẹn dạng toán này nhé!`,
      guide: {
        storyIntro: `Rô-bốt và các bạn Mai, Nam đang cùng nhau tìm hiểu về ${meta.title.toLowerCase()}. Trong thực tế đời sống, dạng toán này giúp chúng ta tính toán nhanh, đo đạc chính xác và giải quyết nhiều tình huống thú vị.`,
        coreFormulaOrRule: `Trọng tâm ${meta.title}: Đọc kĩ đề bài, xác định đúng các đại lượng đã cho và áp dụng quy tắc tính toán chuẩn mực từng bước.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Phân tích & Tóm tắt',
            description: 'Đọc kĩ đề bài, xác định đại lượng đã biết và yêu cầu cần tìm.',
            example: 'Tóm tắt bài toán thành sơ đồ đoạn thẳng hoặc các dòng số liệu rõ ràng.',
            badge: 'Tóm tắt'
          },
          {
            stepNumber: 2,
            title: 'Lựa chọn quy tắc & công thức',
            description: 'Đổi về cùng đơn vị đo (nếu có) và áp dụng công thức tương ứng.',
            example: 'Nhớ kiểm tra kỹ đơn vị đo độ dài, diện tích, thể tích hoặc thời gian.',
            badge: 'Áp dụng'
          },
          {
            stepNumber: 3,
            title: 'Tính toán & Thử lại',
            description: 'Thực hiện phép tính cẩn thận từ phải sang trái, kiểm tra tính hợp lý của kết quả.',
            example: 'Đối chiếu kết quả tìm được với thực tế đời sống.',
            badge: 'Kiểm tra'
          }
        ],
        commonMistakes: [
          {
            title: 'Không đổi về cùng một đơn vị đo',
            mistake: 'Thực hiện phép tính khi các số đo đang khác đơn vị (ví dụ mét với xăng-ti-mét, giờ với phút).',
            whyWrong: 'Các đơn vị khác nhau không thể cộng, trừ hoặc nhân chia trực tiếp với nhau.',
            howToFix: 'Luôn luôn đổi tất cả về cùng một đơn vị đo nhỏ hơn hoặc theo yêu cầu của đề bài trước khi tính.'
          },
          {
            title: 'Tính nhẩm vội vàng ở bước cuối',
            mistake: 'Nhầm lẫn phép nhớ hoặc quên hạ dấu phẩy/đơn vị ở kết quả.',
            whyWrong: 'Chỉ cần sai một chữ số là kết quả bài toán không còn chính xác.',
            howToFix: 'Đặt tính ra nháp cẩn thận và dành 30 giây rà soát lại phép tính.'
          }
        ],
        pocketCheatSheet: [
          `Ghi nhớ trọng tâm: ${meta.title}`,
          'Quy tắc vàng: Luôn đổi về cùng đơn vị đo trước khi tính',
          'Vẽ sơ đồ tóm tắt nếu bài toán có lời văn phức tạp',
          'Kiểm tra lại đáp số trước khi nộp bài'
        ]
      },
      practiceQuestions,
      speedQuestions
    };
  } else {
    // Môn Tiếng Việt
    return {
      id: meta.id,
      subject: 'vietnamese',
      volume: meta.volume,
      lessonNumber: meta.lessonNumber,
      title: meta.title,
      unit: meta.unit,
      estimatedMinutes: meta.estimatedMinutes,
      tagline: meta.tagline,
      mascotGreeting: `Chào bạn! Cùng Rô-bốt học bài "${meta.title}". Chúng mình sẽ khám phá những từ ngữ đẹp và cách diễn đạt giàu cảm xúc nhé!`,
      guide: {
        storyIntro: `Bài học "${meta.title}" thuộc ${meta.unit}. Qua bài học này, chúng ta sẽ mở rộng vốn từ, cảm thụ vẻ đẹp của tiếng Việt và rèn luyện kĩ năng viết câu, viết đoạn văn sinh động.`,
        coreFormulaOrRule: `Quy tắc vàng của "${meta.title}": Đọc kĩ văn cảnh ➔ Hiểu đúng nghĩa của từ ➔ Vận dụng linh hoạt vào nói và viết để câu văn truyền cảm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Đọc hiểu & Khám phá từ ngữ',
            description: 'Đọc diễn cảm bài đọc hoặc quan sát các ngữ liệu câu văn mẫu.',
            example: 'Chú ý các từ ngữ gợi hình ảnh, âm thanh hoặc các dấu câu liên kết.',
            badge: 'Khám phá'
          },
          {
            stepNumber: 2,
            title: 'Nhận diện quy tắc ngữ pháp',
            description: 'Phân tích cấu tạo câu, mối quan hệ giữa các từ hoặc biện pháp tu từ.',
            example: 'Nhận biết từ loại, từ đồng nghĩa, từ trái nghĩa hoặc quan hệ từ nối câu.',
            badge: 'Quy tắc'
          },
          {
            stepNumber: 3,
            title: 'Vận dụng đặt câu, viết đoạn',
            description: 'Tự đặt câu hoặc viết đoạn văn ngắn ứng dụng kiến thức vừa học.',
            example: 'Chọn từ ngữ phù hợp với sắc thái cảm xúc và hoàn cảnh giao tiếp.',
            badge: 'Vận dụng'
          }
        ],
        commonMistakes: [
          {
            title: 'Dùng từ chưa đúng ngữ cảnh hoặc sắc thái biểu cảm',
            mistake: 'Chọn từ mang nghĩa tiêu cực trong hoàn cảnh trang trọng hoặc ngược lại.',
            whyWrong: 'Mỗi từ tiếng Việt đều mang một sắc thái tình cảm riêng (yêu thương, tôn kính, phê phán...).',
            howToFix: 'Xem kĩ đối tượng được nhắc đến trong câu là ai để lựa chọn từ ngữ phù hợp nhất.'
          },
          {
            title: 'Viết câu thiếu chủ ngữ hoặc vị ngữ',
            mistake: 'Đặt câu chỉ có trạng ngữ hoặc chỉ có cụm từ chưa trọn vẹn ý.',
            whyWrong: 'Câu văn tiếng Việt chuẩn mực phải có đầy đủ thành phần chính để người đọc hiểu rõ nghĩa.',
            howToFix: 'Sau khi viết xong, tự hỏi: "Ai?" làm gì/như thế nào? để kiểm tra câu đã đủ thành phần chưa.'
          }
        ],
        pocketCheatSheet: [
          `Ghi nhớ bài học: ${meta.title}`,
          'Đặt từ vào câu cụ thể để hiểu trọn vẹn ý nghĩa',
          'Sử dụng từ ngữ gợi cảm để câu văn thêm sinh động',
          'Đọc lại câu văn sau khi viết để soát lỗi chính tả'
        ]
      },
      practiceQuestions,
      speedQuestions
    };
  }
}

// Hàm lấy toàn bộ danh sách bài học theo Môn và Tập
export function getLessonsBySubjectAndVolume(subject: 'math' | 'vietnamese', volume: 1 | 2): Lesson[] {
  const registry = subject === 'math' ? mathLessonsRegistry : vietnameseLessonsRegistry;
  const filteredMetas = registry.filter(m => m.volume === volume);

  return filteredMetas.map(meta => {
    // Nếu có bản biên soạn chi tiết chuyên sâu thì ưu tiên dùng
    if (detailedLessonsMap[meta.id]) {
      return detailedLessonsMap[meta.id];
    }
    // Nếu chưa, sinh cấu trúc bài học chuẩn sư phạm
    return createStandardLesson(meta);
  });
}

// Lấy danh sách tất cả các chủ đề (Topics) để làm bộ lọc
export function getTopics(subject: 'math' | 'vietnamese', volume: 1 | 2): string[] {
  const registry = subject === 'math' ? mathLessonsRegistry : vietnameseLessonsRegistry;
  const filtered = registry.filter(m => m.volume === volume);
  return Array.from(new Set(filtered.map(m => m.unit)));
}

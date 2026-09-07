import { Lesson } from '../types';

export const mathLessons: Lesson[] = [
  {
    id: 'math-bai-10',
    subject: 'math',
    volume: 1,
    lessonNumber: 10,
    title: 'Khái niệm số thập phân',
    unit: 'Chủ đề 2: Số thập phân',
    estimatedMinutes: 25,
    tagline: 'Làm quen với số có dấu phẩy - bí quyết chia nhỏ mọi thứ!',
    mascotGreeting: 'Chào bạn! Hôm nay Rô-bốt sẽ giúp bạn làm quen với số thập phân qua thước đo trực quan, nhìn hình là hiểu liền!',
    guide: {
      storyIntro: 'Mai có một đoạn ruy băng dài 1 mét. Bạn chia đều thành 10 đoạn nhỏ bằng nhau. Mỗi đoạn dài 1/10 mét. Rô-bốt bảo: "Mình có cách viết khác nhanh hơn: 0,1 mét!"',
      illustrationType: 'decimal-strip-10',
      illustrationData: { filled: 7 },
      coreFormulaOrRule: 'Số thập phân gồm 2 phần ngăn cách bởi dấu phẩy: Bên trái là Phần Nguyên, bên phải là Phần Thập Phân.',
      steps: [
        {
          stepNumber: 1,
          title: 'Nhận diện dấu phẩy',
          description: 'Tìm dấu phẩy để tách đôi con số.',
          example: 'Trong số $25,8$: Dấu phẩy ở giữa $25$ và $8$.',
          badge: 'Quan sát'
        },
        {
          stepNumber: 2,
          title: 'Xác định 2 phần',
          description: 'Phần bên trái dấu phẩy là phần nguyên (như số tự nhiên). Phần bên phải là phần thập phân (phần lẻ bé hơn 1).',
          example: '$25$ là phần nguyên, $8$ là phần thập phân (hàng phần mười).',
          badge: 'Phân tích'
        },
        {
          stepNumber: 3,
          title: 'Đọc số đúng chuẩn',
          description: 'Đọc phần nguyên trước, đọc "phẩy", rồi đọc phần thập phân.',
          example: '$25,8$ đọc là: "Hai mươi lăm phẩy tám".',
          badge: 'Đọc chuẩn'
        }
      ],
      commonMistakes: [
        {
          title: 'Nhầm lẫn giữa 0,5 và 0,05',
          mistake: 'Nghĩ rằng $0,5$ bằng $0,05$ vì đều có chữ số 5.',
          whyWrong: '$0,5 = \\frac{5}{10}$ (5 phần mười), còn $0,05 = \\frac{5}{100}$ (5 phần trăm - bé hơn 10 lần!).',
          howToFix: 'Đếm xem chữ số 5 đứng ngay sau dấu phẩy (hàng phần mười) hay cách một chữ số 0 (hàng phần trăm).'
        },
        {
          title: 'Bỏ quên số 0 ở phần nguyên',
          mistake: 'Viết phân số $\\frac{7}{10}$ thành $,7$ thay vì $0,7$.',
          whyWrong: 'Số thập phân luôn phải có phần nguyên đứng trước dấu phẩy.',
          howToFix: 'Nếu không có đơn vị nguyên nào, ta luôn viết số 0 trước dấu phẩy: $0,7$.'
        }
      ],
      pocketCheatSheet: [
        '$\\frac{1}{10} = 0,1$ (một phần mười)',
        '$\\frac{1}{100} = 0,01$ (một phần trăm)',
        '$\\frac{1}{1000} = 0,001$ (một phần nghìn)',
        'Cấu tạo: [Phần nguyên] , [Phần thập phân]'
      ]
    },
    practiceQuestions: [
      {
        id: 'm10-q1',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Quan sát hình thước đo bên dưới: Phần tô màu vàng chiếm $\\frac{7}{10}$ mét. Số thập phân tương ứng là:',
        illustrationType: 'decimal-strip-10',
        illustrationData: { filled: 7 },
        options: ['0,07', '7,0', '0,7', '7,10'],
        correctAnswer: '0,7',
        hint: 'Mẫu số là 10 (có 1 chữ số 0), vậy sau dấu phẩy chỉ có 1 chữ số.',
        explanation: 'Đoạn thước chia 10 phần, tô màu 7 phần là $\\frac{7}{10} = 0,7$ (đọc là không phẩy bảy).'
      },
      {
        id: 'm10-q2',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Trong số thập phân $84,35$, phần nguyên là bao nhiêu?',
        options: ['35', '84', '3', '5'],
        correctAnswer: '84',
        hint: 'Phần nguyên nằm ở BÊN TRÁI dấu phẩy bạn nhé!',
        explanation: 'Trong số $84,35$, đứng bên trái dấu phẩy là số $84$, đây là phần nguyên. Bên phải là $35$ là phần thập phân.'
      },
      {
        id: 'm10-q3',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Chữ số 9 trong số thập phân $12,94$ thuộc hàng nào?',
        options: ['Hàng phần mười', 'Hàng chục', 'Hàng phần trăm', 'Hàng đơn vị'],
        correctAnswer: 'Hàng phần mười',
        hint: 'Chữ số đầu tiên ngay sau dấu phẩy là hàng phần mười.',
        explanation: 'Sau dấu phẩy, chữ số đầu tiên (số 9) là hàng phần mười, chữ số thứ hai (số 4) là hàng phần trăm.'
      },
      {
        id: 'm10-q4',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Quan sát hình vuông 100 ô dưới đây (đã tô màu 25 ô). Phân số thập phân $\\frac{25}{100}$ được viết thành số thập phân là:',
        illustrationType: 'decimal-grid-100',
        illustrationData: { filled: 25 },
        options: ['2,5', '0,025', '25,0', '0,25'],
        correctAnswer: '0,25',
        hint: 'Lưới 100 ô, tô 25 ô tức là 25 phần trăm ➔ viết là 0,25.',
        explanation: '$\\frac{25}{100} = 0,25$ (đọc là không phẩy hai mươi lăm).'
      },
      {
        id: 'm10-q5',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Số thập phân "Bảy đơn vị, năm phần mười" được viết là:',
        options: ['75', '7,05', '7,5', '0,75'],
        correctAnswer: '7,5',
        hint: 'Bảy đơn vị là phần nguyên (viết 7). Năm phần mười đứng ngay sau dấu phẩy (viết 5).',
        explanation: 'Bảy đơn vị $\\rightarrow 7$, năm phần mười $\\rightarrow 0,5$. Ghép lại được $7,5$.'
      },
      {
        id: 'm10-q6',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Bác Ba có cuộn dây dài $3\\text{ m } 8\\text{ dm}$. Hãy viết độ dài cuộn dây dưới dạng số thập phân có đơn vị là mét:',
        options: ['3,8 m', '38 m', '3,08 m', '0,38 m'],
        correctAnswer: '3,8 m',
        hint: '$1\\text{ dm} = \\frac{1}{10}\\text{ m} = 0,1\\text{ m}$. Vậy $8\\text{ dm} = 0,8\\text{ m}$.',
        explanation: '$3\\text{ m } 8\\text{ dm} = 3\\text{ m} + \\frac{8}{10}\\text{ m} = 3,8\\text{ m}$.'
      },
      {
        id: 'm10-q7',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Hỗn số $2\\frac{3}{100}$ viết dưới dạng số thập phân là:',
        options: ['2,3', '2,03', '2,003', '0,23'],
        correctAnswer: '2,03',
        hint: 'Phần nguyên là 2, phần thập phân là 3 phần trăm (hai chữ số sau dấu phẩy).',
        explanation: '$2\\frac{3}{100} = 2 + 0,03 = 2,03$.'
      },
      {
        id: 'm10-q8',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Tìm chữ số $x$ thích hợp biết: $5,x7 < 5,17$. Giá trị của $x$ là:',
        options: ['0', '1', '2', 'Không có'],
        correctAnswer: '0',
        hint: 'So sánh hàng phần mười: $x$ phải bé hơn 1.',
        explanation: 'Vì phần nguyên bằng nhau ($5 = 5$) và hàng phần trăm bằng nhau ($7 = 7$), để $5,x7 < 5,17$ thì $x < 1 \\Rightarrow x = 0$.'
      }
    ],
    speedQuestions: [
      {
        id: 'm10-s1',
        prompt: 'Số $0,09$ đọc là gì?',
        options: ['Không phẩy chín', 'Không phẩy không chín', 'Chín phần mười', 'Chín mươi'],
        correctAnswer: 'Không phẩy không chín',
        explanation: '$0,09$ đọc chuẩn là không phẩy không chín (hoặc chín phần trăm).'
      },
      {
        id: 'm10-s2',
        prompt: 'Hỗn số $4\\frac{3}{10}$ viết dưới dạng số thập phân là:',
        options: ['4,3', '4,03', '43', '0,43'],
        correctAnswer: '4,3',
        explanation: 'Phần nguyên là 4, phần thập phân là $\\frac{3}{10} = 0,3 \\rightarrow 4,3$.'
      },
      {
        id: 'm10-s3',
        prompt: 'Số nào sau đây LỚN HƠN 1?',
        options: ['0,99', '0,85', '1,02', '0,999'],
        correctAnswer: '1,02',
        explanation: 'Số $1,02$ có phần nguyên là 1, lớn hơn các số có phần nguyên là 0.'
      }
    ]
  },
  {
    id: 'math-bai-19',
    subject: 'math',
    volume: 1,
    lessonNumber: 19,
    title: 'Phép cộng số thập phân',
    unit: 'Chủ đề 4: Các phép tính với số thập phân',
    estimatedMinutes: 25,
    tagline: 'Đặt tính thẳng cột dấu phẩy - cộng như số tự nhiên!',
    mascotGreeting: 'Cộng số thập phân dễ như ăn kẹo! Bạn chỉ cần nhớ "thần chú": Dấu phẩy thẳng cột như hình minh họa bên dưới!',
    guide: {
      storyIntro: 'Bạn Nam mua một quyển vở giá 12,5 nghìn đồng và một chiếc bút chì giá 4,2 nghìn đồng. Nam muốn tính xem hết bao nhiêu tiền. Rô-bốt hướng dẫn Nam đặt phép tính cộng hai số thập phân thẳng tắp.',
      illustrationType: 'decimal-addition-alignment',
      coreFormulaOrRule: 'Muốn cộng hai số thập phân: Đặt các chữ số cùng hàng và DẤU PHẨY THẲNG CỘT với nhau, rồi cộng như số tự nhiên.',
      steps: [
        {
          stepNumber: 1,
          title: 'Đặt tính thẳng cột',
          description: 'Viết số nọ dưới số kia sao cho các chữ số ở cùng một hàng và dấu phẩy thẳng cột.',
          example: '12,5\n+  4,2\n------',
          badge: 'Đặt tính'
        },
        {
          stepNumber: 2,
          title: 'Cộng từ phải sang trái',
          description: 'Cộng như cộng các số tự nhiên, nếu có nhớ thì nhớ sang hàng bên trái.',
          example: '5 + 2 = 7; 2 + 4 = 6; hạ 1.',
          badge: 'Tính toán'
        },
        {
          stepNumber: 3,
          title: 'Hạ dấu phẩy',
          description: 'Viết dấu phẩy ở kết quả thẳng hàng với các dấu phẩy của các số hạng.',
          example: 'Kết quả: 16,7',
          badge: 'Hạ phẩy'
        }
      ],
      commonMistakes: [
        {
          title: 'Đặt tính lệch hàng vì so sánh độ dài chữ số',
          mistake: 'Đặt $15,2 + 3,45$ mà xếp số 2 thẳng cột với số 5 ở cuối cùng.',
          whyWrong: 'Số 2 là hàng phần mười, số 5 là hàng phần trăm, không cùng hàng!',
          howToFix: 'LUÔN LUÔN căn theo DẤU PHẨY. Hai dấu phẩy phải nằm trên một đường thẳng đứng.'
        },
        {
          title: 'Cộng xong quên hạ dấu phẩy',
          mistake: '$2,3 + 1,4 = 37$ (quên dấu phẩy biến thành ba mươi bảy).',
          whyWrong: 'Hai số bé hơn 3 cộng lại không thể ra ba mươi bảy.',
          howToFix: 'Tính xong một cái là lấy bút hạ ngay dấu phẩy thẳng cột xuống kết quả: $3,7$.'
        }
      ],
      pocketCheatSheet: [
        'Dấu phẩy thẳng hàng dấu phẩy',
        'Hàng nào thẳng hàng đó (nguyên theo nguyên, mười theo mười)',
        'Cộng từ phải sang trái như bình thường',
        'Có thể thêm số 0 vào sau phần thập phân để dễ nhìn (ví dụ $4,5 = 4,50$)'
      ]
    },
    practiceQuestions: [
      {
        id: 'm19-q1',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Kết quả của phép tính $3,2 + 4,5$ là:',
        options: ['7,7', '77', '7,07', '0,77'],
        correctAnswer: '7,7',
        hint: 'Cộng hàng phần mười: $2 + 5 = 7$. Cộng hàng đơn vị: $3 + 4 = 7$. Đừng quên dấu phẩy nhé!',
        explanation: '$3,2 + 4,5 = 7,7$.'
      },
      {
        id: 'm19-q2',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Khi đặt tính phép cộng $18,4 + 5,23$, ta phải đặt số 5 thẳng cột với chữ số nào của số $18,4$?',
        options: ['Chữ số 1', 'Chữ số 8', 'Chữ số 4', 'Không cần thẳng'],
        correctAnswer: 'Chữ số 8',
        hint: 'Số 5 là hàng đơn vị, nên phải thẳng cột với hàng đơn vị của số 18,4 (chính là số 8).',
        explanation: 'Số 5 và số 8 đều thuộc hàng đơn vị, đứng ngay trước dấu phẩy nên phải thẳng cột nhau.'
      },
      {
        id: 'm19-q3',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Tính: $15,8 + 6,7 = ?$',
        options: ['21,5', '22,5', '21,15', '22,15'],
        correctAnswer: '22,5',
        hint: '$8 + 7 = 15$ (viết 5 nhớ 1). $5 + 6 = 11$, thêm 1 là 12 (viết 2 nhớ 1). $1$ thêm 1 là 2.',
        explanation: '$15,8 + 6,7 = 22,5$.'
      },
      {
        id: 'm19-q4',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Tìm kết quả của: $4,65 + 12,3 = ?$',
        options: ['16,68', '58,8', '16,95', '17,05'],
        correctAnswer: '16,95',
        hint: 'Bạn có thể coi $12,3$ là $12,30$. Sau đó cộng $4,65 + 12,30$.',
        explanation: '$4,65 + 12,30 = 16,95$.'
      },
      {
        id: 'm19-q5',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Tính nhanh: $3,7 + 5,4 + 6,3 = ?$',
        options: ['14,4', '15,0', '16,4', '15,4'],
        correctAnswer: '15,4',
        hint: 'Nhóm $3,7 + 6,3$ trước xem ra số tròn mấy nhé! ($3,7 + 6,3 = 10$).',
        explanation: '$(3,7 + 6,3) + 5,4 = 10 + 5,4 = 15,4$.'
      },
      {
        id: 'm19-q6',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Quan sát hình minh họa: Bình 1 chứa $1,75$ lít nước. Bình 2 chứa nhiều hơn bình 1 là $0,5$ lít nước. Cả hai bình chứa tất cả bao nhiêu lít nước?',
        illustrationType: 'water-pitchers',
        options: ['2,25 lít', '4,0 lít', '3,5 lít', '4,25 lít'],
        correctAnswer: '4,0 lít',
        hint: 'Bước 1: Tìm bình thứ hai ($1,75 + 0,5 = 2,25$ l). Bước 2: Lấy $1,75 + 2,25$.',
        explanation: 'Bình hai có: $1,75 + 0,5 = 2,25$ lít. Cả hai bình có: $1,75 + 2,25 = 4,0$ lít.'
      },
      {
        id: 'm19-q7',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một mảnh vườn hình chữ nhật có chiều rộng $15,5\\text{ m}$, chiều dài hơn chiều rộng $4,5\\text{ m}$. Chiều dài mảnh vườn là:',
        options: ['20 m', '19,5 m', '20,5 m', '21 m'],
        correctAnswer: '20 m',
        hint: 'Lấy chiều rộng cộng thêm 4,5 m: $15,5 + 4,5$.',
        explanation: 'Chiều dài mảnh vườn: $15,5 + 4,5 = 20,0\\text{ m} = 20\\text{ m}$.'
      },
      {
        id: 'm19-q8',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Tính bằng cách thuận tiện: $1,25 + 3,79 + 8,75 + 6,21 = ?$',
        options: ['20', '19', '21', '18,5'],
        correctAnswer: '20',
        hint: 'Nhóm các số có phần thập phân cộng lại tròn 1: $(1,25 + 8,75) + (3,79 + 6,21)$.',
        explanation: '$(1,25 + 8,75) + (3,79 + 6,21) = 10 + 10 = 20$.'
      }
    ],
    speedQuestions: [
      {
        id: 'm19-s1',
        prompt: '$0,4 + 0,6 = ?$',
        options: ['0,10', '1', '1,1', '0,24'],
        correctAnswer: '1',
        explanation: '$0,4 + 0,6 = 1,0 = 1$.'
      },
      {
        id: 'm19-s2',
        prompt: '$2,5 + 3,5 = ?$',
        options: ['5', '6', '5,10', '6,5'],
        correctAnswer: '6',
        explanation: '$2,5 + 3,5 = 6,0 = 6$.'
      },
      {
        id: 'm19-s3',
        prompt: '$12,4 + 0 = ?$',
        options: ['0', '12,4', '124', '1,24'],
        correctAnswer: '12,4',
        explanation: 'Bất kỳ số nào cộng với 0 cũng bằng chính nó.'
      }
    ]
  },
  {
    id: 'math-bai-25',
    subject: 'math',
    volume: 1,
    lessonNumber: 25,
    title: 'Hình tam giác. Diện tích hình tam giác',
    unit: 'Chủ đề 5: Một số hình phẳng, chu vi và diện tích',
    estimatedMinutes: 25,
    tagline: 'Cắt ghép thần kỳ: Đáy nhân chiều cao chia đôi!',
    mascotGreeting: 'Bạn có biết vì sao diện tích tam giác lại phải chia 2 không? Xem hình ghép màu bên dưới là hiểu ngay bản chất nhé!',
    guide: {
      storyIntro: 'Cắt 2 hình tam giác bằng nhau, lộn ngược một hình ghép lại ta được một hình chữ nhật! Diện tích hình chữ nhật là Đáy x Chiều cao, nên diện tích 1 hình tam giác bằng một nửa: (Đáy x Chiều cao) : 2.',
      illustrationType: 'triangle-area-cut-merge',
      coreFormulaOrRule: 'Diện tích hình tam giác = (Độ dài đáy × Chiều cao) : 2 (cùng một đơn vị đo).\nCông thức: $S = \\frac{a \\times h}{2}$',
      steps: [
        {
          stepNumber: 1,
          title: 'Xác định Đáy (a) và Chiều cao (h)',
          description: 'Chiều cao là đoạn thẳng kẻ từ đỉnh VUÔNG GÓC với đáy tương ứng.',
          example: 'Đáy $a = 8\\text{ cm}$, Chiều cao $h = 5\\text{ cm}$.',
          badge: 'Nhận diện'
        },
        {
          stepNumber: 2,
          title: 'Đổi về cùng đơn vị đo',
          description: 'Kiểm tra xem đáy và chiều cao đã cùng đơn vị chưa (cm với cm, m với m). Nếu chưa cùng thì phải đổi!',
          example: 'Nếu đáy là $1\\text{ m}$, cao là $4\\text{ dm} \\rightarrow$ đổi $1\\text{ m} = 10\\text{ dm}$.',
          badge: 'Đổi đơn vị'
        },
        {
          stepNumber: 3,
          title: 'Áp dụng công thức tính',
          description: 'Lấy đáy nhân chiều cao rồi CHIA CHO 2.',
          example: '$S = (8 \\times 5) : 2 = 40 : 2 = 20\\text{ cm}^2$.',
          badge: 'Tính diện tích'
        }
      ],
      commonMistakes: [
        {
          title: 'Quên chia cho 2',
          mistake: 'Tính đáy nhân chiều cao ra kết quả luôn ($8 \\times 5 = 40$).',
          whyWrong: 'Đáy nhân chiều cao là diện tích của cả hình chữ nhật gấp đôi!',
          howToFix: 'Luôn nhẩm câu thần chú: "Tam giác là một nửa hình chữ nhật $\\rightarrow$ BẮT BUỘC PHẢI CHIA 2".'
        },
        {
          title: 'Khác đơn vị đo mà vội nhân',
          mistake: 'Đáy $2\\text{ m}$, chiều cao $50\\text{ cm} \\rightarrow$ lấy luôn $2 \\times 50 : 2 = 50$.',
          whyWrong: 'Mét và xăng-ti-mét không thể nhân trực tiếp với nhau.',
          howToFix: 'Đổi $2\\text{ m} = 200\\text{ cm}$, sau đó mới tính $(200 \\times 50) : 2 = 5000\\text{ cm}^2$.'
        }
      ],
      pocketCheatSheet: [
        'Công thức: $S = (a \\times h) : 2$',
        'Muốn tìm chiều cao: $h = (S \\times 2) : a$',
        'Muốn tìm cạnh đáy: $a = (S \\times 2) : h$',
        'Nhớ kiểm tra cùng đơn vị đo trước khi tính'
      ]
    },
    practiceQuestions: [
      {
        id: 'm25-q1',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Quan sát hình vẽ tam giác có đáy $a = 12\\text{ cm}$ và chiều cao $h = 6\\text{ cm}$. Diện tích của hình tam giác đó là:',
        illustrationType: 'triangle-measurements',
        illustrationData: { base: '12 cm', height: '6 cm' },
        options: ['72 cm²', '36 cm²', '18 cm²', '144 cm²'],
        correctAnswer: '36 cm²',
        hint: 'Áp dụng công thức: Lấy $(12 \\times 6)$ rồi chia cho $2$.',
        explanation: '$S = (12 \\times 6) : 2 = 72 : 2 = 36\\text{ cm}^2$.'
      },
      {
        id: 'm25-q2',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Muốn tính diện tích hình tam giác vuông, ta có thể:',
        options: [
          'Lấy tích hai cạnh góc vuông nhân 2',
          'Lấy tích độ dài hai cạnh góc vuông chia cho 2',
          'Cộng độ dài hai cạnh góc vuông',
          'Lấy cạnh huyền nhân đôi'
        ],
        correctAnswer: 'Lấy tích độ dài hai cạnh góc vuông chia cho 2',
        hint: 'Trong tam giác vuông, hai cạnh góc vuông chính là đáy và chiều cao của nhau!',
        explanation: 'Hai cạnh góc vuông vuông góc với nhau nên một cạnh là đáy thì cạnh kia là chiều cao tương ứng.'
      },
      {
        id: 'm25-q3',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Tính diện tích hình tam giác có kích thước ghi trong hình: đáy $a = 2\\text{ m}$ và chiều cao $h = 15\\text{ dm}$:',
        illustrationType: 'triangle-measurements',
        illustrationData: { base: '2 m (= 20 dm)', height: '15 dm' },
        options: ['15 m²', '1,5 m²', '30 dm²', '150 dm²'],
        correctAnswer: '150 dm²',
        hint: 'Chú ý đổi đơn vị: Đổi $2\\text{ m} = 20\\text{ dm}$. Sau đó tính $(20 \\times 15) : 2$.',
        explanation: 'Đổi $2\\text{ m} = 20\\text{ dm}$. Diện tích: $(20 \\times 15) : 2 = 300 : 2 = 150\\text{ dm}^2$ (hoặc $1,5\\text{ m}^2$).'
      },
      {
        id: 'm25-q4',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một lá cờ hình tam giác có diện tích là $40\\text{ cm}^2$, chiều cao là $8\\text{ cm}$. Độ dài đáy của lá cờ là:',
        options: ['5 cm', '10 cm', '20 cm', '15 cm'],
        correctAnswer: '10 cm',
        hint: 'Muốn tìm đáy: Lấy diện tích nhân 2 rồi chia cho chiều cao: $(S \\times 2) : h$.',
        explanation: 'Đáy = $(40 \\times 2) : 8 = 80 : 8 = 10\\text{ cm}$.'
      },
      {
        id: 'm25-q5',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Nếu gấp độ dài đáy của một hình tam giác lên 2 lần và giữ nguyên chiều cao thì diện tích hình tam giác đó sẽ:',
        options: ['Không đổi', 'Tăng lên 4 lần', 'Tăng lên 2 lần', 'Giảm 2 lần'],
        correctAnswer: 'Tăng lên 2 lần',
        hint: 'Đáy tăng bao nhiêu lần thì diện tích tăng bấy nhiêu lần vì diện tích tỉ lệ thuận với đáy.',
        explanation: 'Vì $S = (a \\times h) : 2$, khi $a$ gấp lên 2 lần thì $(2 \\times a \\times h) : 2$ sẽ gấp 2 lần diện tích ban đầu.'
      },
      {
        id: 'm25-q6',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Một thửa ruộng hình tam giác có đáy $30\\text{ m}$ và chiều cao $20\\text{ m}$. Người ta thu hoạch được $0,6\\text{ kg}$ thóc trên mỗi mét vuông. Hỏi thửa ruộng thu được bao nhiêu ki-lô-gam thóc?',
        options: ['180 kg', '360 kg', '600 kg', '300 kg'],
        correctAnswer: '180 kg',
        hint: 'Bước 1: Tính diện tích thửa ruộng $(30 \\times 20 : 2)$. Bước 2: Nhân với 0,6 kg.',
        explanation: 'Diện tích ruộng: $(30 \\times 20) : 2 = 300\\text{ m}^2$. Số thóc thu hoạch: $300 \\times 0,6 = 180\\text{ kg}$.'
      },
      {
        id: 'm25-q7',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Một hình tam giác vuông có độ dài hai cạnh góc vuông lần lượt là $6\\text{ cm}$ và $8\\text{ cm}$. Diện tích của hình tam giác vuông đó là:',
        options: ['48 cm²', '24 cm²', '14 cm²', '28 cm²'],
        correctAnswer: '24 cm²',
        hint: 'Trong tam giác vuông, diện tích bằng tích hai cạnh góc vuông chia 2: $(6 \\times 8) : 2$.',
        explanation: 'Diện tích tam giác vuông: $(6 \\times 8) : 2 = 48 : 2 = 24\\text{ cm}^2$.'
      },
      {
        id: 'm25-q8',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Một mảnh đất hình chữ nhật có chiều dài $20\\text{ m}$, chiều rộng $12\\text{ m}$. Người ta bớt ra một góc hình tam giác vuông có hai cạnh góc vuông là $6\\text{ m}$ và $8\\text{ m}$ để làm bồn hoa. Diện tích đất còn lại là:',
        options: ['216 m²', '240 m²', '192 m²', '228 m²'],
        correctAnswer: '216 m²',
        hint: 'Bước 1: Diện tích HCN ($20 \\times 12$). Bước 2: Diện tích bồn hoa ($(6 \\times 8) : 2$). Bước 3: Lấy diện tích HCN trừ đi bồn hoa.',
        explanation: 'Diện tích HCN: $20 \\times 12 = 240\\text{ m}^2$. Diện tích bồn hoa: $(6 \\times 8) : 2 = 24\\text{ m}^2$. Diện tích còn lại: $240 - 24 = 216\\text{ m}^2$.'
      }
    ],
    speedQuestions: [
      {
        id: 'm25-s1',
        prompt: 'Công thức tính diện tích hình tam giác là gì?',
        options: ['S = a x h', 'S = (a x h) : 2', 'S = (a + h) : 2', 'S = a + h + c'],
        correctAnswer: 'S = (a x h) : 2',
        explanation: 'Diện tích bằng đáy nhân chiều cao chia 2.'
      },
      {
        id: 'm25-s2',
        prompt: 'Đáy $4\\text{ cm}$, chiều cao $5\\text{ cm}$. Diện tích là:',
        options: ['20 cm²', '10 cm²', '9 cm²', '40 cm²'],
        correctAnswer: '10 cm²',
        explanation: '$(4 \\times 5) : 2 = 10\\text{ cm}^2$.'
      },
      {
        id: 'm25-s3',
        prompt: 'Độ dài đáy và chiều cao của tam giác có bắt buộc cùng đơn vị đo không?',
        options: ['Không cần', 'Bắt buộc cùng đơn vị', 'Chỉ cần một số đo', 'Tùy loại tam giác'],
        correctAnswer: 'Bắt buộc cùng đơn vị',
        explanation: 'Phải cùng đơn vị đo thì phép nhân diện tích mới có ý nghĩa.'
      }
    ]
  }
];

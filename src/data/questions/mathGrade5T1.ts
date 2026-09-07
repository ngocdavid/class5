import { Question, SpeedQuestion } from '../../types';

export interface LessonQuestions {
  practiceQuestions: Question[];
  speedQuestions: SpeedQuestion[];
}

export const mathQuestionsT1: Record<string, LessonQuestions> = {
  "math-bai-1": {
    "practiceQuestions": [
      {
        "id": "m1-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số gồm 8 triệu, 5 trăm nghìn, 3 chục nghìn và 6 đơn vị được viết là:",
        "options": [
          "8 530 006",
          "8 503 060",
          "8 530 060",
          "853 006"
        ],
        "correctAnswer": "8 530 006",
        "hint": "Viết theo thứ tự các hàng từ cao xuống thấp.",
        "explanation": "Số có 8 triệu, 5 trăm nghìn, 3 chục nghìn, 0 nghìn, 0 trăm, 0 chục, 6 đơn vị là 8 530 006."
      },
      {
        "id": "m1-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong số $45\\,872\\,319$, chữ số 8 thuộc hàng nào, lớp nào?",
        "options": [
          "Hàng trăm nghìn, lớp nghìn",
          "Hàng chục nghìn, lớp nghìn",
          "Hàng triệu, lớp triệu",
          "Hàng trăm, lớp đơn vị"
        ],
        "correctAnswer": "Hàng trăm nghìn, lớp nghìn",
        "hint": "Đếm từ phải qua trái theo từng lớp 3 chữ số.",
        "explanation": "Chữ số 8 thuộc hàng trăm nghìn, lớp nghìn."
      },
      {
        "id": "m1-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Giá trị của chữ số 7 trong số $27\\,450\\,816$ là:",
        "options": [
          "7 000 000",
          "700 000",
          "70 000",
          "70 000 000"
        ],
        "correctAnswer": "7 000 000",
        "hint": "Chữ số 7 ở hàng triệu.",
        "explanation": "Chữ số 7 có giá trị là 7 000 000."
      },
      {
        "id": "m1-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Sắp xếp các số sau theo thứ tự từ bé đến lớn: $4\\,568\\,200; 4\\,658\\,200; 4\\,568\\,020; 4\\,685\\,000$:",
        "options": [
          "4 568 020 ; 4 568 200 ; 4 658 200 ; 4 685 000",
          "4 568 200 ; 4 568 020 ; 4 658 200 ; 4 685 000",
          "4 685 000 ; 4 658 200 ; 4 568 200 ; 4 568 020",
          "4 568 020 ; 4 568 200 ; 4 685 000 ; 4 658 200"
        ],
        "correctAnswer": "4 568 020 ; 4 568 200 ; 4 658 200 ; 4 685 000",
        "hint": "So sánh các hàng từ trái qua phải.",
        "explanation": "$4\\,568\\,020 < 4\\,568\\,200 < 4\\,658\\,200 < 4\\,685\\,000$."
      },
      {
        "id": "m1-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Làm tròn số $4\\,783\\,520$ đến hàng trăm nghìn ta được số:",
        "options": [
          "4 800 000",
          "4 700 000",
          "5 000 000",
          "4 780 000"
        ],
        "correctAnswer": "4 800 000",
        "hint": "Chữ số hàng chục nghìn là 8 >= 5 nên làm tròn lên.",
        "explanation": "4 783 520 làm tròn đến hàng trăm nghìn là 4 800 000."
      },
      {
        "id": "m1-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số tự nhiên lớn nhất có 7 chữ số khác nhau là:",
        "options": [
          "9 876 543",
          "9 999 999",
          "9 876 540",
          "1 023 456"
        ],
        "correctAnswer": "9 876 543",
        "hint": "Chọn các chữ số giảm dần từ 9.",
        "explanation": "Số lớn nhất là 9 876 543."
      },
      {
        "id": "m1-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thư viện có khoảng 1 triệu 500 nghìn quyển sách. Nếu làm tròn số sách đến hàng trăm nghìn thì số sách thực tế nào dưới đây thỏa mãn?",
        "options": [
          "1 465 200",
          "1 390 000",
          "1 570 000",
          "1 420 000"
        ],
        "correctAnswer": "1 465 200",
        "hint": "1 465 200 có chữ số hàng chục nghìn là 6 nên làm tròn lên 1 500 000.",
        "explanation": "1 465 200 làm tròn đến hàng trăm nghìn được 1 500 000."
      },
      {
        "id": "m1-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Từ các chữ số 0, 3, 5, 7 có thể viết được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
        "options": [
          "18 số",
          "24 số",
          "12 số",
          "16 số"
        ],
        "correctAnswer": "18 số",
        "hint": "Hàng nghìn có 3 cách chọn (khác 0).",
        "explanation": "$3 \\times 3 \\times 2 \\times 1 = 18$ số."
      }
    ],
    "speedQuestions": [
      {
        "id": "m1-s1",
        "prompt": "Số 10 triệu có bao nhiêu chữ số 0?",
        "options": [
          "7",
          "6",
          "8",
          "5"
        ],
        "correctAnswer": "7",
        "explanation": "10 000 000 có 7 chữ số 0."
      },
      {
        "id": "m1-s2",
        "prompt": "Số tự nhiên bé nhất là:",
        "options": [
          "0",
          "1",
          "Không có",
          "0,1"
        ],
        "correctAnswer": "0",
        "explanation": "0 là số tự nhiên bé nhất."
      },
      {
        "id": "m1-s3",
        "prompt": "Hai số tự nhiên liên tiếp hơn kém nhau:",
        "options": [
          "1 đơn vị",
          "2 đơn vị",
          "10 đơn vị",
          "Tùy số"
        ],
        "correctAnswer": "1 đơn vị",
        "explanation": "Hơn kém nhau 1 đơn vị."
      }
    ]
  },
  "math-bai-2": {
    "practiceQuestions": [
      {
        "id": "m2-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Kết quả của phép tính $45\\,678 + 23\\,412$ là:",
        "options": [
          "69 090",
          "68 090",
          "69 190",
          "68 180"
        ],
        "correctAnswer": "69 090",
        "hint": "Đặt tính thẳng cột từ phải sang trái.",
        "explanation": "$45\\,678 + 23\\,412 = 69\\,090$."
      },
      {
        "id": "m2-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Kết quả của phép trừ $90\\,000 - 45\\,632$ là:",
        "options": [
          "44 368",
          "45 368",
          "44 468",
          "54 368"
        ],
        "correctAnswer": "44 368",
        "hint": "Thực hiện phép trừ có nhớ.",
        "explanation": "$90\\,000 - 45\\,632 = 44\\,368$."
      },
      {
        "id": "m2-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $125 \\times 34 + 125 \\times 66$ bằng cách thuận tiện:",
        "options": [
          "12 500",
          "1 250",
          "125 000",
          "10 000"
        ],
        "correctAnswer": "12 500",
        "hint": "Đưa thừa số chung 125 ra ngoài: $125 \\times (34 + 66)$.",
        "explanation": "$125 \\times 100 = 12\\,500$."
      },
      {
        "id": "m2-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Thực hiện phép tính chia: $18\\,400 : 25 = ?$",
        "options": [
          "736",
          "726",
          "746",
          "756"
        ],
        "correctAnswer": "736",
        "hint": "$(18\\,400 \\times 4) : (25 \\times 4) = 73\\,600 : 100$.",
        "explanation": "$18\\,400 : 25 = 736$."
      },
      {
        "id": "m2-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số trung bình cộng của ba số: 35, 42 và 49 là:",
        "options": [
          "42",
          "40",
          "44",
          "45"
        ],
        "correctAnswer": "42",
        "hint": "$(35 + 42 + 49) : 3$.",
        "explanation": "Tổng là 126, trung bình cộng = $126 : 3 = 42$."
      },
      {
        "id": "m2-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một xe tải chở 45 bao gạo, mỗi bao nặng 50 kg. Xe chở tất cả bao nhiêu tạ gạo?",
        "options": [
          "22,5 tạ",
          "225 tạ",
          "2250 tạ",
          "2,25 tạ"
        ],
        "correctAnswer": "22,5 tạ",
        "hint": "$45 \\times 50 = 2250$ kg, đổi sang tạ chia cho 100.",
        "explanation": "$2250\\text{ kg} = 22,5\\text{ tạ}$."
      },
      {
        "id": "m2-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm hai số biết tổng bằng 120 và hiệu bằng 30:",
        "options": [
          "75 và 45",
          "70 và 50",
          "80 và 40",
          "85 và 35"
        ],
        "correctAnswer": "75 và 45",
        "hint": "Số lớn = $(120 + 30) : 2 = 75$.",
        "explanation": "Số lớn là 75, số bé là 45."
      },
      {
        "id": "m2-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một đoàn tàu hỏa gồm 1 đầu tàu dài 15 m và 8 toa xe, mỗi toa dài 12 m. Giữa hai toa liền kề có mối nối dài 1 m. Toàn bộ đoàn tàu dài:",
        "options": [
          "119 m",
          "111 m",
          "120 m",
          "127 m"
        ],
        "correctAnswer": "119 m",
        "hint": "$15 + 8 \\times 12 + 8 \\times 1 = 119$ m.",
        "explanation": "Chiều dài tàu là 119 m."
      }
    ],
    "speedQuestions": [
      {
        "id": "m2-s1",
        "prompt": "Số nào nhân với 0 cũng bằng:",
        "options": [
          "0",
          "1",
          "Chính nó",
          "Không biết"
        ],
        "correctAnswer": "0",
        "explanation": "Nhân với 0 luôn bằng 0."
      },
      {
        "id": "m2-s2",
        "prompt": "$25 \\times 4 = ?$",
        "options": [
          "100",
          "1000",
          "50",
          "80"
        ],
        "correctAnswer": "100",
        "explanation": "$25 \\times 4 = 100$."
      },
      {
        "id": "m2-s3",
        "prompt": "Trong phép chia có dư, số dư luôn:",
        "options": [
          "Bé hơn số chia",
          "Lớn hơn số chia",
          "Bằng số chia",
          "Bằng 0"
        ],
        "correctAnswer": "Bé hơn số chia",
        "explanation": "Số dư luôn bé hơn số chia."
      }
    ]
  },
  "math-bai-3": {
    "practiceQuestions": [
      {
        "id": "m3-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình tròn chia làm 8 phần bằng nhau, tô màu 5 phần. Phân số chỉ phần tô màu là:",
        "options": [
          "$\\frac{5}{8}$",
          "$\\frac{8}{5}$",
          "$\\frac{3}{8}$",
          "$\\frac{5}{3}$"
        ],
        "correctAnswer": "$\\frac{5}{8}$",
        "hint": "Tử số là số phần tô màu.",
        "explanation": "Phân số chỉ phần tô màu là $\\frac{5}{8}$."
      },
      {
        "id": "m3-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Rút gọn phân số $\\frac{24}{36}$ về dạng tối giản được:",
        "options": [
          "$\\frac{2}{3}$",
          "$\\frac{4}{6}$",
          "$\\frac{12}{18}$",
          "$\\frac{3}{4}$"
        ],
        "correctAnswer": "$\\frac{2}{3}$",
        "hint": "Chia cả tử và mẫu cho 12.",
        "explanation": "$\\frac{24 : 12}{36 : 12} = \\frac{2}{3}$."
      },
      {
        "id": "m3-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Quy đồng mẫu số $\\frac{3}{4}$ và $\\frac{5}{6}$ với mẫu số chung 12:",
        "options": [
          "$\\frac{9}{12}$ và $\\frac{10}{12}$",
          "$\\frac{6}{12}$ và $\\frac{10}{12}$",
          "$\\frac{9}{12}$ và $\\frac{5}{12}$",
          "$\\frac{18}{24}$ và $\\frac{20}{24}$"
        ],
        "correctAnswer": "$\\frac{9}{12}$ và $\\frac{10}{12}$",
        "hint": "MSC là 12.",
        "explanation": "Ta được $\\frac{9}{12}$ và $\\frac{10}{12}$."
      },
      {
        "id": "m3-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Phân số nào dưới đây LỚN HƠN 1?",
        "options": [
          "$\\frac{7}{5}$",
          "$\\frac{5}{7}$",
          "$\\frac{8}{8}$",
          "$\\frac{9}{10}$"
        ],
        "correctAnswer": "$\\frac{7}{5}$",
        "hint": "Tử số lớn hơn mẫu số thì lớn hơn 1.",
        "explanation": "$\\frac{7}{5}$ lớn hơn 1."
      },
      {
        "id": "m3-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "So sánh hai phân số $\\frac{4}{7}$ và $\\frac{5}{9}$:",
        "options": [
          "$\\frac{4}{7} > \\frac{5}{9}$",
          "$\\frac{4}{7} < \\frac{5}{9}$",
          "$\\frac{4}{7} = \\frac{5}{9}$",
          "Không so sánh được"
        ],
        "correctAnswer": "$\\frac{4}{7} > \\frac{5}{9}$",
        "hint": "Quy đồng: $\\frac{36}{63} > \\frac{35}{63}$.",
        "explanation": "$\\frac{4}{7} > \\frac{5}{9}$."
      },
      {
        "id": "m3-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm số tự nhiên $x$ biết $\\frac{x}{8} = \\frac{15}{24}$:",
        "options": [
          "5",
          "3",
          "6",
          "4"
        ],
        "correctAnswer": "5",
        "hint": "$\\frac{15}{24} = \\frac{5}{8}$.",
        "explanation": "$x = 5$."
      },
      {
        "id": "m3-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một giá sách có 48 quyển, trong đó $\\frac{3}{8}$ là sách Toán, còn lại là sách Tiếng Việt. Số sách Tiếng Việt là:",
        "options": [
          "30 quyển",
          "18 quyển",
          "24 quyển",
          "32 quyển"
        ],
        "correctAnswer": "30 quyển",
        "hint": "Sách Toán: $48 \\times 3 : 8 = 18$ quyển. Sách TV: $48 - 18 = 30$.",
        "explanation": "Có 30 quyển sách Tiếng Việt."
      },
      {
        "id": "m3-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Cho phân số $\\frac{13}{19}$. Cần thêm vào cả tử và mẫu bao nhiêu đơn vị để được phân số $\\frac{5}{7}$?",
        "options": [
          "2",
          "3",
          "4",
          "1"
        ],
        "correctAnswer": "2",
        "hint": "Hiệu không đổi: $19 - 13 = 6$. Hiệu số phần: $7 - 5 = 2$. Giá trị 1 phần: $6 : 2 = 3$. Tử mới: 15. Cần thêm $15 - 13 = 2$.",
        "explanation": "Cần thêm 2 đơn vị."
      }
    ],
    "speedQuestions": [
      {
        "id": "m3-s1",
        "prompt": "Phân số có tử số bằng mẫu số thì bằng:",
        "options": [
          "1",
          "0",
          "10",
          "Chính tử số"
        ],
        "correctAnswer": "1",
        "explanation": "Bằng 1."
      },
      {
        "id": "m3-s2",
        "prompt": "Phân số nào bằng $\\frac{1}{2}$?",
        "options": [
          "$\\frac{5}{10}$",
          "$\\frac{2}{5}$",
          "$\\frac{3}{8}$",
          "$\\frac{1}{4}$"
        ],
        "correctAnswer": "$\\frac{5}{10}$",
        "explanation": "$\\frac{5}{10} = \\frac{1}{2}$."
      },
      {
        "id": "m3-s3",
        "prompt": "Cùng mẫu số dương, phân số nào lớn hơn?",
        "options": [
          "Phân số có tử số lớn hơn",
          "Phân số có tử số bé hơn",
          "Bằng nhau",
          "Không so sánh được"
        ],
        "correctAnswer": "Phân số có tử số lớn hơn",
        "explanation": "Tử số lớn hơn thì lớn hơn."
      }
    ]
  },
  "math-bai-4": {
    "practiceQuestions": [
      {
        "id": "m4-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Phân số nào dưới đây là phân số thập phân?",
        "options": [
          "$\\frac{7}{100}$",
          "$\\frac{3}{25}$",
          "$\\frac{9}{200}$",
          "$\\frac{1}{30}$"
        ],
        "correctAnswer": "$\\frac{7}{100}$",
        "hint": "Mẫu số là 10, 100, 1000,...",
        "explanation": "$\\frac{7}{100}$ có mẫu 100 nên là phân số thập phân."
      },
      {
        "id": "m4-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Chuyển $\\frac{3}{5}$ thành phân số thập phân có mẫu số 10:",
        "options": [
          "$\\frac{6}{10}$",
          "$\\frac{5}{10}$",
          "$\\frac{3}{10}$",
          "$\\frac{9}{10}$"
        ],
        "correctAnswer": "$\\frac{6}{10}$",
        "hint": "Nhân cả tử và mẫu với 2.",
        "explanation": "$\\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}$."
      },
      {
        "id": "m4-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chuyển $\\frac{7}{25}$ thành phân số thập phân có mẫu số 100:",
        "options": [
          "$\\frac{28}{100}$",
          "$\\frac{21}{100}$",
          "$\\frac{14}{100}$",
          "$\\frac{35}{100}$"
        ],
        "correctAnswer": "$\\frac{28}{100}$",
        "hint": "Nhân cả tử và mẫu với 4.",
        "explanation": "$\\frac{7 \\times 4}{25 \\times 4} = \\frac{28}{100}$."
      },
      {
        "id": "m4-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chuyển $\\frac{1}{8}$ thành phân số thập phân có mẫu số 1000:",
        "options": [
          "$\\frac{125}{1000}$",
          "$\\frac{250}{1000}$",
          "$\\frac{100}{1000}$",
          "$\\frac{150}{1000}$"
        ],
        "correctAnswer": "$\\frac{125}{1000}$",
        "hint": "Nhân cả tử và mẫu với 125.",
        "explanation": "$\\frac{1 \\times 125}{8 \\times 125} = \\frac{125}{1000}$."
      },
      {
        "id": "m4-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Rút gọn phân số $\\frac{45}{300}$ để được phân số thập phân có mẫu số 100:",
        "options": [
          "$\\frac{15}{100}$",
          "$\\frac{9}{100}$",
          "$\\frac{5}{100}$",
          "$\\frac{3}{100}$"
        ],
        "correctAnswer": "$\\frac{15}{100}$",
        "hint": "Chia cả tử và mẫu cho 3.",
        "explanation": "$\\frac{45 : 3}{300 : 3} = \\frac{15}{100}$."
      },
      {
        "id": "m4-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Phân số nào dưới đây KHÔNG THỂ viết thành phân số thập phân?",
        "options": [
          "$\\frac{2}{7}$",
          "$\\frac{3}{4}$",
          "$\\frac{9}{20}$",
          "$\\frac{11}{50}$"
        ],
        "correctAnswer": "$\\frac{2}{7}$",
        "hint": "Mẫu số 7 không nhân ra được 10, 100, 1000...",
        "explanation": "$\\frac{2}{7}$ không thể viết thành phân số thập phân."
      },
      {
        "id": "m4-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một vòi nước chảy trong 1 giờ được $\\frac{2}{5}$ bể. Viết lượng nước đó dưới dạng phân số thập phân có mẫu số 100:",
        "options": [
          "$\\frac{40}{100}$ bể",
          "$\\frac{20}{100}$ bể",
          "$\\frac{50}{100}$ bể",
          "$\\frac{25}{100}$ bể"
        ],
        "correctAnswer": "$\\frac{40}{100}$ bể",
        "hint": "Nhân cả tử và mẫu với 20.",
        "explanation": "$\\frac{2 \\times 20}{5 \\times 20} = \\frac{40}{100}$ bể."
      },
      {
        "id": "m4-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Viết $\\frac{64}{500}$ dưới dạng phân số thập phân có mẫu số 1000:",
        "options": [
          "$\\frac{128}{1000}$",
          "$\\frac{120}{1000}$",
          "$\\frac{640}{1000}$",
          "$\\frac{32}{1000}$"
        ],
        "correctAnswer": "$\\frac{128}{1000}$",
        "hint": "Nhân cả tử và mẫu với 2.",
        "explanation": "$\\frac{64 \\times 2}{500 \\times 2} = \\frac{128}{1000}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m4-s1",
        "prompt": "Mẫu số của phân số thập phân phải là:",
        "options": [
          "10, 100, 1000,...",
          "Số chẵn bất kì",
          "Số tròn chục bất kì",
          "Số 5"
        ],
        "correctAnswer": "10, 100, 1000,...",
        "explanation": "Mẫu số là 10, 100, 1000,..."
      },
      {
        "id": "m4-s2",
        "prompt": "$\\frac{1}{4}$ bằng phân số thập phân nào?",
        "options": [
          "$\\frac{25}{100}$",
          "$\\frac{4}{10}$",
          "$\\frac{10}{40}$",
          "$\\frac{20}{100}$"
        ],
        "correctAnswer": "$\\frac{25}{100}$",
        "explanation": "$\\frac{1}{4} = \\frac{25}{100}$."
      },
      {
        "id": "m4-s3",
        "prompt": "Phân số $\\frac{3}{10}$ đọc là gì?",
        "options": [
          "Ba phần mười",
          "Mười phần ba",
          "Ba mươi",
          "Không phẩy ba"
        ],
        "correctAnswer": "Ba phần mười",
        "explanation": "Đọc là Ba phần mười."
      }
    ]
  },
  "math-bai-5": {
    "practiceQuestions": [
      {
        "id": "m5-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $\\frac{3}{7} + \\frac{2}{7} = ?$",
        "options": [
          "$\\frac{5}{7}$",
          "$\\frac{5}{14}$",
          "$\\frac{6}{7}$",
          "$\\frac{1}{7}$"
        ],
        "correctAnswer": "$\\frac{5}{7}$",
        "hint": "Cùng mẫu số, cộng hai tử số với nhau.",
        "explanation": "$\\frac{3 + 2}{7} = \\frac{5}{7}$."
      },
      {
        "id": "m5-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $\\frac{8}{9} - \\frac{5}{9} = ?$",
        "options": [
          "$\\frac{3}{9}$",
          "$\\frac{1}{3}$",
          "$\\frac{13}{9}$",
          "$\\frac{3}{0}$"
        ],
        "correctAnswer": "$\\frac{1}{3}$",
        "hint": "$\\frac{8 - 5}{9} = \\frac{3}{9} = \\frac{1}{3}$.",
        "explanation": "$\\frac{8 - 5}{9} = \\frac{3}{9} = \\frac{1}{3}$."
      },
      {
        "id": "m5-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính kết quả phép nhân: $\\frac{5}{8} \\times \\frac{4}{15} = ?$",
        "options": [
          "$\\frac{1}{6}$",
          "$\\frac{20}{120}$",
          "$\\frac{1}{12}$",
          "$\\frac{2}{3}$"
        ],
        "correctAnswer": "$\\frac{1}{6}$",
        "hint": "Rút gọn chéo trước khi nhân.",
        "explanation": "$\\frac{5 \\times 4}{8 \\times 15} = \\frac{1 \\times 1}{2 \\times 3} = \\frac{1}{6}$."
      },
      {
        "id": "m5-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính kết quả phép chia: $\\frac{2}{3} : \\frac{4}{9} = ?$",
        "options": [
          "$\\frac{3}{2}$",
          "$\\frac{8}{27}$",
          "$\\frac{2}{3}$",
          "$\\frac{6}{12}$"
        ],
        "correctAnswer": "$\\frac{3}{2}$",
        "hint": "Nhân với phân số đảo ngược: $\\frac{2}{3} \\times \\frac{9}{4}$.",
        "explanation": "$\\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$."
      },
      {
        "id": "m5-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm $x$ biết: $x - \\frac{1}{4} = \\frac{5}{12}$:",
        "options": [
          "$\\frac{2}{3}$",
          "$\\frac{1}{6}$",
          "$\\frac{7}{12}$",
          "$\\frac{1}{2}$"
        ],
        "correctAnswer": "$\\frac{2}{3}$",
        "hint": "$x = \\frac{5}{12} + \\frac{3}{12} = \\frac{8}{12} = \\frac{2}{3}$.",
        "explanation": "$x = \\frac{8}{12} = \\frac{2}{3}$."
      },
      {
        "id": "m5-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $\\frac{3}{4} \\times \\frac{5}{7} + \\frac{3}{4} \\times \\frac{2}{7}$:",
        "options": [
          "$\\frac{3}{4}$",
          "$\\frac{15}{28}$",
          "$\\frac{21}{28}$",
          "1"
        ],
        "correctAnswer": "$\\frac{3}{4}$",
        "hint": "Thừa số chung $\\frac{3}{4} \\times (\\frac{5}{7} + \\frac{2}{7})$.",
        "explanation": "$\\frac{3}{4} \\times 1 = \\frac{3}{4}$."
      },
      {
        "id": "m5-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một tấm vải dài 24 m. Người ta may quần áo hết $\\frac{3}{4}$ tấm vải đó. Chiều dài tấm vải còn lại là:",
        "options": [
          "6 m",
          "18 m",
          "8 m",
          "12 m"
        ],
        "correctAnswer": "6 m",
        "hint": "May hết: $24 \\times \\frac{3}{4} = 18$ m. Còn lại: $24 - 18 = 6$ m.",
        "explanation": "Còn lại: $24 - 18 = 6\\text{ m}$."
      },
      {
        "id": "m5-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một người bán được $\\frac{2}{5}$ số dưa vào buổi sáng và $\\frac{1}{3}$ số dưa vào buổi chiều. Còn lại 16 quả. Tổng số dưa mang đi bán là:",
        "options": [
          "60 quả",
          "45 quả",
          "50 quả",
          "80 quả"
        ],
        "correctAnswer": "60 quả",
        "hint": "Số phần dưa bán: $\\frac{11}{15}$. Phần còn lại: $\\frac{4}{15}$. Tổng: $16 : \\frac{4}{15} = 60$.",
        "explanation": "Tổng số dưa là 60 quả."
      }
    ],
    "speedQuestions": [
      {
        "id": "m5-s1",
        "prompt": "Muốn nhân hai phân số, ta lấy:",
        "options": [
          "Tử nhân tử, mẫu nhân mẫu",
          "Tử cộng tử, mẫu cộng mẫu",
          "Nhân chéo",
          "Cộng hai mẫu số"
        ],
        "correctAnswer": "Tử nhân tử, mẫu nhân mẫu",
        "explanation": "Tử nhân tử, mẫu nhân mẫu."
      },
      {
        "id": "m5-s2",
        "prompt": "$\\frac{1}{3} \\times 3 = ?$",
        "options": [
          "1",
          "3",
          "$\\frac{1}{9}$",
          "$\\frac{3}{9}$"
        ],
        "correctAnswer": "1",
        "explanation": "$\\frac{1}{3} \\times 3 = 1$."
      },
      {
        "id": "m5-s3",
        "prompt": "Phân số đảo ngược của $\\frac{2}{5}$ là:",
        "options": [
          "$\\frac{5}{2}$",
          "$\\frac{2}{5}$",
          "$-\\frac{2}{5}$",
          "$\\frac{1}{5}$"
        ],
        "correctAnswer": "$\\frac{5}{2}$",
        "explanation": "Đảo ngược tử và mẫu thành $\\frac{5}{2}$."
      }
    ]
  },
  "math-bai-6": {
    "practiceQuestions": [
      {
        "id": "m6-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Muốn cộng (hoặc trừ) hai phân số khác mẫu số, bước đầu tiên ta phải làm gì?",
        "options": [
          "Quy đồng mẫu số hai phân số",
          "Cộng hai tử số với nhau ngay",
          "Cộng hai mẫu số với nhau ngay",
          "Nhân chéo hai phân số"
        ],
        "correctAnswer": "Quy đồng mẫu số hai phân số",
        "hint": "Đưa về cùng một mẫu số rồi mới cộng hoặc trừ các tử số.",
        "explanation": "Quy tắc: Quy đồng mẫu số rồi cộng hoặc trừ các tử số, giữ nguyên mẫu số chung."
      },
      {
        "id": "m6-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $\\frac{1}{2} + \\frac{1}{4} = ?$",
        "options": [
          "$\\frac{3}{4}$",
          "$\\frac{2}{6}$",
          "$\\frac{1}{6}$",
          "$\\frac{2}{4}$"
        ],
        "correctAnswer": "$\\frac{3}{4}$",
        "hint": "Quy đồng mẫu số chung là 4: $\\frac{2}{4} + \\frac{1}{4}$.",
        "explanation": "$\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$."
      },
      {
        "id": "m6-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $\\frac{5}{6} - \\frac{3}{8} = ?$",
        "options": [
          "$\\frac{11}{24}$",
          "$\\frac{2}{2}$",
          "$\\frac{2}{24}$",
          "$\\frac{1}{4}$"
        ],
        "correctAnswer": "$\\frac{11}{24}$",
        "hint": "MSC nhỏ nhất là 24. $\\frac{20}{24} - \\frac{9}{24} = \\frac{11}{24}$.",
        "explanation": "$\\frac{20}{24} - \\frac{9}{24} = \\frac{11}{24}$."
      },
      {
        "id": "m6-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $\\frac{7}{10} + \\frac{3}{5} = ?$",
        "options": [
          "$\\frac{13}{10}$",
          "$\\frac{10}{15}$",
          "$\\frac{1}{2}$",
          "$\\frac{11}{10}$"
        ],
        "correctAnswer": "$\\frac{13}{10}$",
        "hint": "$\\frac{7}{10} + \\frac{6}{10} = \\frac{13}{10}$.",
        "explanation": "$\\frac{7 + 6}{10} = \\frac{13}{10}$."
      },
      {
        "id": "m6-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $2 - \\frac{3}{4} = ?$",
        "options": [
          "$\\frac{5}{4}$",
          "$\\frac{1}{4}$",
          "$\\frac{3}{4}$",
          "$\\frac{7}{4}$"
        ],
        "correctAnswer": "$\\frac{5}{4}$",
        "hint": "Viết 2 thành phân số có mẫu là 4: $\\frac{8}{4} - \\frac{3}{4}$.",
        "explanation": "$\\frac{8}{4} - \\frac{3}{4} = \\frac{5}{4}$."
      },
      {
        "id": "m6-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Rút gọn rồi tính: $\\frac{12}{15} - \\frac{2}{10} = ?$",
        "options": [
          "$\\frac{3}{5}$",
          "$\\frac{10}{5}$",
          "$\\frac{1}{5}$",
          "$\\frac{4}{5}$"
        ],
        "correctAnswer": "$\\frac{3}{5}$",
        "hint": "$\\frac{12}{15} = \\frac{4}{5}$; $\\frac{2}{10} = \\frac{1}{5}$. Trừ: $\\frac{4}{5} - \\frac{1}{5} = \\frac{3}{5}$.",
        "explanation": "$\\frac{4}{5} - \\frac{1}{5} = \\frac{3}{5}$."
      },
      {
        "id": "m6-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một xe ô tô giờ thứ nhất chạy được $\\frac{2}{7}$ quãng đường, giờ thứ hai chạy được $\\frac{3}{5}$ quãng đường. Cả hai giờ ô tô chạy được:",
        "options": [
          "$\\frac{31}{35}$ quãng đường",
          "$\\frac{5}{12}$ quãng đường",
          "$\\frac{29}{35}$ quãng đường",
          "$\\frac{1}{2}$ quãng đường"
        ],
        "correctAnswer": "$\\frac{31}{35}$ quãng đường",
        "hint": "$\\frac{2}{7} + \\frac{3}{5} = \\frac{10}{35} + \\frac{21}{35} = \\frac{31}{35}$.",
        "explanation": "Cả hai giờ chạy được $\\frac{31}{35}$ quãng đường."
      },
      {
        "id": "m6-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một chai nước có $\\frac{4}{5}$ lít nước. Nam uống hết $\\frac{1}{3}$ lít, sau đó đổ thêm vào chai $\\frac{1}{4}$ lít nước. Số lít nước trong chai lúc này là:",
        "options": [
          "$\\frac{43}{60}$ lít",
          "$\\frac{37}{60}$ lít",
          "$\\frac{41}{60}$ lít",
          "$\\frac{47}{60}$ lít"
        ],
        "correctAnswer": "$\\frac{43}{60}$ lít",
        "hint": "Tính: $\\frac{4}{5} - \\frac{1}{3} + \\frac{1}{4}$. MSC = 60: $\\frac{48 - 20 + 15}{60} = \\frac{43}{60}$.",
        "explanation": "Trong chai có $\\frac{43}{60}$ lít nước."
      }
    ],
    "speedQuestions": [
      {
        "id": "m6-s1",
        "prompt": "$\\frac{1}{2} + \\frac{1}{2} = ?$",
        "options": [
          "1",
          "$\\frac{2}{4}$",
          "$\\frac{1}{4}$",
          "2"
        ],
        "correctAnswer": "1",
        "explanation": "$\\frac{2}{2} = 1$."
      },
      {
        "id": "m6-s2",
        "prompt": "Mẫu số chung nhỏ nhất của 4 và 6 là:",
        "options": [
          "12",
          "24",
          "10",
          "16"
        ],
        "correctAnswer": "12",
        "explanation": "BCNN(4, 6) = 12."
      },
      {
        "id": "m6-s3",
        "prompt": "$1 - \\frac{1}{3} = ?$",
        "options": [
          "$\\frac{2}{3}$",
          "$\\frac{1}{3}$",
          "0",
          "$\\frac{3}{3}$"
        ],
        "correctAnswer": "$\\frac{2}{3}$",
        "explanation": "$\\frac{3}{3} - \\frac{1}{3} = \\frac{2}{3}$."
      }
    ]
  },
  "math-bai-7": {
    "practiceQuestions": [
      {
        "id": "m7-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hỗn số gồm có mấy phần?",
        "options": [
          "2 phần (phần nguyên và phần phân số)",
          "1 phần",
          "3 phần",
          "Chỉ có phần phân số"
        ],
        "correctAnswer": "2 phần (phần nguyên và phần phân số)",
        "hint": "Phần nguyên là số tự nhiên đứng trước, phần phân số viết liền sau.",
        "explanation": "Hỗn số gồm phần nguyên và phần phân số."
      },
      {
        "id": "m7-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hỗn số $3\\frac{2}{5}$ có phần nguyên là số nào, phần phân số là phân số nào?",
        "options": [
          "Phần nguyên là 3, phần phân số là $\\frac{2}{5}$",
          "Phần nguyên là 2, phần phân số là $\\frac{3}{5}$",
          "Phần nguyên là 5, phần phân số là $\\frac{2}{3}$",
          "Phần nguyên là 3, phần phân số là $\\frac{5}{2}$"
        ],
        "correctAnswer": "Phần nguyên là 3, phần phân số là $\\frac{2}{5}$",
        "hint": "Số 3 đứng trước là phần nguyên, phân số $\\frac{2}{5}$ đi kèm là phần phân số.",
        "explanation": "Phần nguyên là 3, phần phân số là $\\frac{2}{5}$."
      },
      {
        "id": "m7-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chuyển hỗn số $4\\frac{3}{7}$ thành phân số ta được:",
        "options": [
          "$\\frac{31}{7}$",
          "$\\frac{19}{7}$",
          "$\\frac{12}{7}$",
          "$\\frac{28}{7}$"
        ],
        "correctAnswer": "$\\frac{31}{7}$",
        "hint": "Tử số = (phần nguyên $\\times$ mẫu số) + tử số = $4 \\times 7 + 3 = 31$. Mẫu số giữ nguyên.",
        "explanation": "$4\\frac{3}{7} = \\frac{4 \\times 7 + 3}{7} = \\frac{31}{7}$."
      },
      {
        "id": "m7-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chuyển phân số $\\frac{17}{5}$ thành hỗn số ta được:",
        "options": [
          "$3\\frac{2}{5}$",
          "$2\\frac{7}{5}$",
          "$3\\frac{1}{5}$",
          "$4\\frac{2}{5}$"
        ],
        "correctAnswer": "$3\\frac{2}{5}$",
        "hint": "Lấy 17 chia 5 được 3 dư 2. Thương là phần nguyên (3), số dư là tử số (2), mẫu số giữ nguyên (5).",
        "explanation": "$17 : 5 = 3$ (dư 2), vậy $\\frac{17}{5} = 3\\frac{2}{5}$."
      },
      {
        "id": "m7-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "So sánh hai hỗn số $5\\frac{1}{3}$ và $4\\frac{2}{3}$:",
        "options": [
          "$5\\frac{1}{3} > 4\\frac{2}{3}$",
          "$5\\frac{1}{3} < 4\\frac{2}{3}$",
          "$5\\frac{1}{3} = 4\\frac{2}{3}$",
          "Không so sánh được"
        ],
        "correctAnswer": "$5\\frac{1}{3} > 4\\frac{2}{3}$",
        "hint": "So sánh phần nguyên trước: 5 > 4 nên hỗn số lớn hơn.",
        "explanation": "Vì 5 > 4 nên $5\\frac{1}{3} > 4\\frac{2}{3}$."
      },
      {
        "id": "m7-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $2\\frac{1}{4} + 1\\frac{2}{4} = ?$",
        "options": [
          "$3\\frac{3}{4}$",
          "$3\\frac{3}{8}$",
          "$4\\frac{1}{4}$",
          "$2\\frac{3}{4}$"
        ],
        "correctAnswer": "$3\\frac{3}{4}$",
        "hint": "Cộng phần nguyên với phần nguyên ($2 + 1 = 3$), phần phân số với phần phân số ($\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$).",
        "explanation": "Kết quả là $3\\frac{3}{4}$."
      },
      {
        "id": "m7-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $3\\frac{1}{2} \\times 1\\frac{3}{7}$:",
        "options": [
          "5",
          "$\\frac{35}{14}$",
          "$4\\frac{3}{14}$",
          "6"
        ],
        "correctAnswer": "5",
        "hint": "Chuyển cả hai về phân số rồi nhân: $\\frac{7}{2} \\times \\frac{10}{7} = \\frac{70}{14} = 5$.",
        "explanation": "$\\frac{7}{2} \\times \\frac{10}{7} = 5$."
      },
      {
        "id": "m7-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một tấm biển quảng cáo hình chữ nhật có chiều dài $2\\frac{1}{2}\\text{ m}$, chiều rộng $1\\frac{1}{5}\\text{ m}$. Diện tích tấm biển đó là:",
        "options": [
          "3 m²",
          "$2\\frac{1}{10}$ m²",
          "4 m²",
          "$3\\frac{1}{2}$ m²"
        ],
        "correctAnswer": "3 m²",
        "hint": "Đổi thành phân số: $\\frac{5}{2} \\times \\frac{6}{5} = \\frac{30}{10} = 3\\text{ m}^2$.",
        "explanation": "Diện tích tấm biển là $3\\text{ m}^2$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m7-s1",
        "prompt": "Phần phân số của hỗn số luôn phải:",
        "options": [
          "Bé hơn 1",
          "Lớn hơn 1",
          "Bằng 1",
          "Tùy ý"
        ],
        "correctAnswer": "Bé hơn 1",
        "explanation": "Phần phân số luôn bé hơn 1."
      },
      {
        "id": "m7-s2",
        "prompt": "Hỗn số $1\\frac{1}{2}$ bằng phân số nào?",
        "options": [
          "$\\frac{3}{2}$",
          "$\\frac{2}{2}$",
          "$\\frac{1}{2}$",
          "$\\frac{2}{3}$"
        ],
        "correctAnswer": "$\\frac{3}{2}$",
        "explanation": "$1\\frac{1}{2} = \\frac{3}{2}$."
      },
      {
        "id": "m7-s3",
        "prompt": "$2\\frac{1}{2}$ bằng số thập phân nào?",
        "options": [
          "2,5",
          "2,12",
          "0,25",
          "25"
        ],
        "correctAnswer": "2,5",
        "explanation": "$2\\frac{1}{2} = 2,5$."
      }
    ]
  },
  "math-bai-8": {
    "practiceQuestions": [
      {
        "id": "m8-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Công thức tính diện tích hình chữ nhật (chiều dài $a$, chiều rộng $b$ cùng đơn vị đo) là:",
        "options": [
          "S = a x b",
          "S = (a + b) x 2",
          "S = a x 4",
          "S = a x a"
        ],
        "correctAnswer": "S = a x b",
        "hint": "Diện tích HCN bằng chiều dài nhân chiều rộng.",
        "explanation": "$S = a \\times b$."
      },
      {
        "id": "m8-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Một hình vuông có cạnh $8\\text{ cm}$. Chu vi của hình vuông đó là:",
        "options": [
          "32 cm",
          "64 cm²",
          "16 cm",
          "24 cm"
        ],
        "correctAnswer": "32 cm",
        "hint": "Chu vi hình vuông = cạnh $\\times$ 4: $8 \\times 4$.",
        "explanation": "Chu vi = $8 \\times 4 = 32\\text{ cm}$."
      },
      {
        "id": "m8-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình bình hành có độ dài đáy $15\\text{ cm}$, chiều cao $8\\text{ cm}$. Diện tích của hình bình hành đó là:",
        "options": [
          "120 cm²",
          "60 cm²",
          "46 cm",
          "23 cm²"
        ],
        "correctAnswer": "120 cm²",
        "hint": "Diện tích hình bình hành = Đáy $\\times$ Chiều cao: $15 \\times 8$.",
        "explanation": "$S = 15 \\times 8 = 120\\text{ cm}^2$."
      },
      {
        "id": "m8-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình thoi có độ dài hai đường chéo là $12\\text{ cm}$ và $16\\text{ cm}$. Diện tích của hình thoi đó là:",
        "options": [
          "96 cm²",
          "192 cm²",
          "56 cm²",
          "28 cm²"
        ],
        "correctAnswer": "96 cm²",
        "hint": "Diện tích hình thoi = (tích hai đường chéo) : 2 = $(12 \\times 16) : 2$.",
        "explanation": "$S = (12 \\times 16) : 2 = 96\\text{ cm}^2$."
      },
      {
        "id": "m8-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$5\\text{ m}^2\\text{ } 24\\text{ dm}^2 = ...\\text{ dm}^2$:",
        "options": [
          "524 dm²",
          "5024 dm²",
          "54 dm²",
          "5240 dm²"
        ],
        "correctAnswer": "524 dm²",
        "hint": "$1\\text{ m}^2 = 100\\text{ dm}^2 \\Rightarrow 5\\text{ m}^2 = 500\\text{ dm}^2$. Lấy $500 + 24$.",
        "explanation": "$524\\text{ dm}^2$."
      },
      {
        "id": "m8-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một mảnh vườn hình chữ nhật có chu vi $60\\text{ m}$, chiều rộng $12\\text{ m}$. Chiều dài mảnh vườn là:",
        "options": [
          "18 m",
          "48 m",
          "24 m",
          "36 m"
        ],
        "correctAnswer": "18 m",
        "hint": "Nửa chu vi = $60 : 2 = 30$ m. Chiều dài = $30 - 12 = 18$ m.",
        "explanation": "Chiều dài là 18 m."
      },
      {
        "id": "m8-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một căn phòng hình chữ nhật dài $8\\text{ m}$, rộng $6\\text{ m}$. Người ta lát nền bằng các viên gạch vuông cạnh $40\\text{ cm}$. Số viên gạch cần dùng là:",
        "options": [
          "300 viên",
          "120 viên",
          "480 viên",
          "240 viên"
        ],
        "correctAnswer": "300 viên",
        "hint": "Diện tích phòng: $8 \\times 6 = 48\\text{ m}^2 = 480\\,000\\text{ cm}^2$. Diện tích 1 viên gạch: $40 \\times 40 = 1600\\text{ cm}^2$. Số viên: $480\\,000 : 1600 = 300$.",
        "explanation": "Cần 300 viên gạch."
      },
      {
        "id": "m8-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình bình hành có đáy $40\\text{ m}$, chiều cao bằng $\\frac{3}{4}$ đáy. Người ta thu hoạch được $0,5\\text{ kg}$ ngô trên mỗi mét vuông. Thửa ruộng thu được:",
        "options": [
          "600 kg",
          "1200 kg",
          "300 kg",
          "480 kg"
        ],
        "correctAnswer": "600 kg",
        "hint": "Chiều cao = $40 \\times \\frac{3}{4} = 30$ m. Diện tích = $40 \\times 30 = 1200\\text{ m}^2$. Khối lượng = $1200 \\times 0,5 = 600$ kg.",
        "explanation": "Thu được 600 kg ngô."
      }
    ],
    "speedQuestions": [
      {
        "id": "m8-s1",
        "prompt": "$1\\text{ m}^2$ bằng bao nhiêu đề-xi-mét vuông (dm²)?",
        "options": [
          "100 dm²",
          "10 dm²",
          "1000 dm²",
          "10000 dm²"
        ],
        "correctAnswer": "100 dm²",
        "explanation": "$1\\text{ m}^2 = 100\\text{ dm}^2$."
      },
      {
        "id": "m8-s2",
        "prompt": "Hai đường chéo của hình thoi có đặc điểm gì?",
        "options": [
          "Vuông góc với nhau tại trung điểm mỗi đường",
          "Bằng nhau và song song",
          "Không cắt nhau",
          "Không vuông góc"
        ],
        "correctAnswer": "Vuông góc với nhau tại trung điểm mỗi đường",
        "explanation": "Hai đường chéo hình thoi vuông góc tại trung điểm mỗi đường."
      },
      {
        "id": "m8-s3",
        "prompt": "Hình vuông có cạnh $5\\text{ cm}$ thì diện tích là:",
        "options": [
          "25 cm²",
          "20 cm",
          "10 cm²",
          "50 cm²"
        ],
        "correctAnswer": "25 cm²",
        "explanation": "$5 \\times 5 = 25\\text{ cm}^2$."
      }
    ]
  },
  "math-bai-9": {
    "practiceQuestions": [
      {
        "id": "m9-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Chữ số 5 trong số $354\\,892\\,000$ có giá trị là:",
        "options": [
          "50 000 000",
          "5 000 000",
          "500 000",
          "500 000 000"
        ],
        "correctAnswer": "50 000 000",
        "hint": "Chữ số 5 thuộc hàng chục triệu.",
        "explanation": "Giá trị là 50 000 000."
      },
      {
        "id": "m9-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Phân số thập phân $\\frac{85}{100}$ rút gọn thành phân số tối giản là:",
        "options": [
          "$\\frac{17}{20}$",
          "$\\frac{17}{25}$",
          "$\\frac{8}{10}$",
          "$\\frac{4}{5}$"
        ],
        "correctAnswer": "$\\frac{17}{20}$",
        "hint": "Chia cả tử và mẫu cho 5.",
        "explanation": "$\\frac{85 : 5}{100 : 5} = \\frac{17}{20}$."
      },
      {
        "id": "m9-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $\\frac{3}{5} + \\frac{1}{4} \\times \\frac{2}{3} = ?$",
        "options": [
          "$\\frac{23}{30}$",
          "$\\frac{17}{30}$",
          "$\\frac{7}{15}$",
          "$\\frac{11}{20}$"
        ],
        "correctAnswer": "$\\frac{23}{30}$",
        "hint": "Thực hiện phép nhân trước: $\\frac{1}{4} \\times \\frac{2}{3} = \\frac{2}{12} = \\frac{1}{6}$. Sau đó cộng: $\\frac{3}{5} + \\frac{1}{6} = \\frac{18 + 5}{30} = \\frac{23}{30}$.",
        "explanation": "$\\frac{3}{5} + \\frac{1}{6} = \\frac{23}{30}$."
      },
      {
        "id": "m9-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chuyển hỗn số $3\\frac{4}{5}$ thành phân số thập phân có mẫu số 10:",
        "options": [
          "$\\frac{38}{10}$",
          "$\\frac{19}{10}$",
          "$\\frac{34}{10}$",
          "$\\frac{35}{10}$"
        ],
        "correctAnswer": "$\\frac{38}{10}$",
        "hint": "$3\\frac{4}{5} = \\frac{19}{5} = \\frac{19 \\times 2}{5 \\times 2} = \\frac{38}{10}$.",
        "explanation": "$\\frac{38}{10}$."
      },
      {
        "id": "m9-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $4\\text{ m}^2\\text{ } 5\\text{ dm}^2 \\; ... \\; 450\\text{ dm}^2$:",
        "options": [
          "<",
          ">",
          "=",
          "Không so sánh được"
        ],
        "correctAnswer": "<",
        "hint": "$4\\text{ m}^2\\text{ } 5\\text{ dm}^2 = 405\\text{ dm}^2 < 450\\text{ dm}^2$.",
        "explanation": "Vì $405\\text{ dm}^2 < 450\\text{ dm}^2$."
      },
      {
        "id": "m9-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $4500 : 25 : 4$:",
        "options": [
          "45",
          "450",
          "90",
          "180"
        ],
        "correctAnswer": "45",
        "hint": "Áp dụng $a : b : c = a : (b \\times c) = 4500 : (25 \\times 4) = 4500 : 100 = 45$.",
        "explanation": "$4500 : 100 = 45$."
      },
      {
        "id": "m9-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một mảnh đất hình chữ nhật có chu vi $140\\text{ m}$, chiều rộng bằng $\\frac{3}{4}$ chiều dài. Diện tích mảnh đất là:",
        "options": [
          "1200 m²",
          "4800 m²",
          "600 m²",
          "1400 m²"
        ],
        "correctAnswer": "1200 m²",
        "hint": "Nửa chu vi = $140 : 2 = 70$ m. Tổng số phần: $3 + 4 = 7$. Chiều rộng: $70 : 7 \\times 3 = 30$ m. Chiều dài: 40 m. Diện tích: $30 \\times 40 = 1200\\text{ m}^2$.",
        "explanation": "Diện tích là $1200\\text{ m}^2$."
      },
      {
        "id": "m9-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm phân số $\\frac{a}{b}$ biết $\\frac{a}{b}$ cộng với $\\frac{1}{3}$ rồi trừ đi $\\frac{1}{4}$ thì được $\\frac{5}{12}$:",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{1}{2}$",
          "$\\frac{1}{4}$",
          "$\\frac{2}{3}$"
        ],
        "correctAnswer": "$\\frac{1}{3}$",
        "hint": "Tính ngược từ cuối: $\\frac{a}{b} = \\frac{5}{12} + \\frac{1}{4} - \\frac{1}{3} = \\frac{5 + 3 - 4}{12} = \\frac{4}{12} = \\frac{1}{3}$.",
        "explanation": "$\\frac{a}{b} = \\frac{1}{3}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m9-s1",
        "prompt": "$\\frac{1}{2} + \\frac{1}{4} = ?$",
        "options": [
          "$\\frac{3}{4}$",
          "$\\frac{2}{6}$",
          "$\\frac{1}{8}$",
          "$\\frac{3}{8}$"
        ],
        "correctAnswer": "$\\frac{3}{4}$",
        "explanation": "$\\frac{3}{4}$."
      },
      {
        "id": "m9-s2",
        "prompt": "$100 \\times 25 = ?$",
        "options": [
          "2500",
          "250",
          "25000",
          "25"
        ],
        "correctAnswer": "2500",
        "explanation": "2500."
      },
      {
        "id": "m9-s3",
        "prompt": "Hỗn số $2\\frac{1}{2}$ đổi ra phân số là:",
        "options": [
          "$\\frac{5}{2}$",
          "$\\frac{3}{2}$",
          "$\\frac{4}{2}$",
          "$\\frac{1}{2}$"
        ],
        "correctAnswer": "$\\frac{5}{2}$",
        "explanation": "$\\frac{5}{2}$."
      }
    ]
  },
  "math-bai-10": {
    "practiceQuestions": [
      {
        "id": "m10-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Phân số thập phân $\\frac{7}{10}$ được viết dưới dạng số thập phân là:",
        "options": [
          "0,7",
          "0,07",
          "7,0",
          "7,10"
        ],
        "correctAnswer": "0,7",
        "hint": "Mẫu số có 1 chữ số 0 nên sau dấu phẩy có 1 chữ số.",
        "explanation": "$\\frac{7}{10} = 0,7$."
      },
      {
        "id": "m10-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong số thập phân $84,35$, phần nguyên là:",
        "options": [
          "84",
          "35",
          "3",
          "5"
        ],
        "correctAnswer": "84",
        "hint": "Phần nguyên nằm bên trái dấu phẩy.",
        "explanation": "84 là phần nguyên, 35 là phần thập phân."
      },
      {
        "id": "m10-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chữ số 9 trong số thập phân $12,94$ thuộc hàng nào?",
        "options": [
          "Hàng phần mười",
          "Hàng phần trăm",
          "Hàng chục",
          "Hàng đơn vị"
        ],
        "correctAnswer": "Hàng phần mười",
        "hint": "Chữ số đầu tiên ngay sau dấu phẩy là hàng phần mười.",
        "explanation": "Chữ số 9 thuộc hàng phần mười."
      },
      {
        "id": "m10-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Phân số thập phân $\\frac{25}{100}$ viết dưới dạng số thập phân là:",
        "options": [
          "0,25",
          "2,5",
          "0,025",
          "25,0"
        ],
        "correctAnswer": "0,25",
        "hint": "Mẫu số 100 có hai chữ số 0.",
        "explanation": "$\\frac{25}{100} = 0,25$."
      },
      {
        "id": "m10-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số thập phân \"Bảy đơn vị, năm phần mười\" được viết là:",
        "options": [
          "7,5",
          "75",
          "7,05",
          "0,75"
        ],
        "correctAnswer": "7,5",
        "hint": "7 đơn vị phẩy 5 phần mười.",
        "explanation": "Viết là 7,5."
      },
      {
        "id": "m10-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hỗn số $2\\frac{3}{100}$ viết dưới dạng số thập phân là:",
        "options": [
          "2,03",
          "2,3",
          "2,003",
          "0,23"
        ],
        "correctAnswer": "2,03",
        "hint": "Phần nguyên là 2, phần thập phân là 3 phần trăm.",
        "explanation": "$2\\frac{3}{100} = 2,03$."
      },
      {
        "id": "m10-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Viết số đo $3\\text{ m } 8\\text{ dm}$ dưới dạng số thập phân có đơn vị mét:",
        "options": [
          "3,8 m",
          "38 m",
          "3,08 m",
          "0,38 m"
        ],
        "correctAnswer": "3,8 m",
        "hint": "$8\\text{ dm} = 0,8\\text{ m}$.",
        "explanation": "$3\\text{ m } 8\\text{ dm} = 3,8\\text{ m}$."
      },
      {
        "id": "m10-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm chữ số $x$ thích hợp biết: $5,x7 < 5,17$:",
        "options": [
          "0",
          "1",
          "2",
          "Không có"
        ],
        "correctAnswer": "0",
        "hint": "So sánh hàng phần mười: $x < 1$.",
        "explanation": "$x = 0$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m10-s1",
        "prompt": "Số $0,09$ đọc là gì?",
        "options": [
          "Không phẩy không chín",
          "Không phẩy chín",
          "Chín phần mười",
          "Chín mươi"
        ],
        "correctAnswer": "Không phẩy không chín",
        "explanation": "Đọc là không phẩy không chín."
      },
      {
        "id": "m10-s2",
        "prompt": "Hỗn số $4\\frac{3}{10}$ viết dưới dạng số thập phân là:",
        "options": [
          "4,3",
          "4,03",
          "0,43",
          "43"
        ],
        "correctAnswer": "4,3",
        "explanation": "$4\\frac{3}{10} = 4,3$."
      },
      {
        "id": "m10-s3",
        "prompt": "Chữ số 5 trong số 12,345 thuộc hàng nào?",
        "options": [
          "Hàng phần nghìn",
          "Hàng phần mười",
          "Hàng phần trăm",
          "Hàng đơn vị"
        ],
        "correctAnswer": "Hàng phần nghìn",
        "explanation": "Hàng phần nghìn."
      }
    ]
  },
  "math-bai-11": {
    "practiceQuestions": [
      {
        "id": "m11-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Khi so sánh hai số thập phân, trước tiên ta so sánh phần nào?",
        "options": [
          "So sánh phần nguyên trước",
          "So sánh phần thập phân trước",
          "Đếm số chữ số",
          "So sánh chữ số cuối cùng"
        ],
        "correctAnswer": "So sánh phần nguyên trước",
        "hint": "Số có phần nguyên lớn hơn thì lớn hơn.",
        "explanation": "Ta luôn so sánh phần nguyên trước."
      },
      {
        "id": "m11-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $8,5 \\; ... \\; 8,49$:",
        "options": [
          ">",
          "<",
          "=",
          "Không so sánh được"
        ],
        "correctAnswer": ">",
        "hint": "Phần nguyên bằng nhau (8 = 8). So sánh hàng phần mười: 5 > 4.",
        "explanation": "Vì $8,50 > 8,49$ nên $8,5 > 8,49$."
      },
      {
        "id": "m11-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số thập phân nào dưới đây BÉ NHẤT?",
        "options": [
          "3,07",
          "3,7",
          "3,15",
          "3,007"
        ],
        "correctAnswer": "3,007",
        "hint": "So sánh hàng phần mười, phần trăm, phần nghìn: 0, 0, 7 bé nhất.",
        "explanation": "$3,007 < 3,07 < 3,15 < 3,7$."
      },
      {
        "id": "m11-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Sắp xếp các số sau theo thứ tự từ bé đến lớn: $5,8 ; 5,08 ; 5,805 ; 5,79$:",
        "options": [
          "5,08 ; 5,79 ; 5,8 ; 5,805",
          "5,08 ; 5,8 ; 5,79 ; 5,805",
          "5,805 ; 5,8 ; 5,79 ; 5,08",
          "5,79 ; 5,08 ; 5,8 ; 5,805"
        ],
        "correctAnswer": "5,08 ; 5,79 ; 5,8 ; 5,805",
        "hint": "So sánh lần lượt các hàng.",
        "explanation": "$5,08 < 5,79 < 5,8 < 5,805$."
      },
      {
        "id": "m11-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Nếu viết thêm chữ số 0 vào bên phải phần thập phân của một số thập phân thì giá trị của số đó:",
        "options": [
          "Không thay đổi",
          "Tăng lên 10 lần",
          "Giảm đi 10 lần",
          "Tăng thêm 1 đơn vị"
        ],
        "correctAnswer": "Không thay đổi",
        "hint": "Ví dụ: $0,5 = 0,50 = 0,500$.",
        "explanation": "Giá trị số thập phân không đổi."
      },
      {
        "id": "m11-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm chữ số $x$ thích hợp biết: $9,6x4 > 9,684$:",
        "options": [
          "9",
          "8",
          "7",
          "6"
        ],
        "correctAnswer": "9",
        "hint": "Hàng phần mười bằng nhau (6 = 6). Để lớn hơn thì $x > 8 \\Rightarrow x = 9$.",
        "explanation": "$x = 9$."
      },
      {
        "id": "m11-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm số tự nhiên $x$ biết: $6,8 < x < 7,9$:",
        "options": [
          "7",
          "6",
          "8",
          "7 và 8"
        ],
        "correctAnswer": "7",
        "hint": "Số tự nhiên nằm giữa 6,8 và 7,9 chỉ có duy nhất số 7.",
        "explanation": "$x = 7$."
      },
      {
        "id": "m11-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Viết ba số thập phân thích hợp vào chỗ chấm sao cho: $0,2 < ... < 0,3$:",
        "options": [
          "0,21 ; 0,25 ; 0,28",
          "0,1 ; 0,2 ; 0,3",
          "0,31 ; 0,32 ; 0,35",
          "0,20 ; 0,30 ; 0,40"
        ],
        "correctAnswer": "0,21 ; 0,25 ; 0,28",
        "hint": "$0,2 = 0,20$ và $0,3 = 0,30$. Chọn các số giữa 0,20 và 0,30.",
        "explanation": "$0,20 < 0,21 < 0,25 < 0,28 < 0,30$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m11-s1",
        "prompt": "$0,9$ và $0,90$ số nào lớn hơn?",
        "options": [
          "Bằng nhau",
          "0,9 lớn hơn",
          "0,90 lớn hơn",
          "Không so sánh được"
        ],
        "correctAnswer": "Bằng nhau",
        "explanation": "$0,9 = 0,90$."
      },
      {
        "id": "m11-s2",
        "prompt": "$1,05 \\; ... \\; 1,5$",
        "options": [
          "<",
          ">",
          "=",
          "Không so sánh được"
        ],
        "correctAnswer": "<",
        "explanation": "$1,05 < 1,50$."
      },
      {
        "id": "m11-s3",
        "prompt": "Số thập phân liền sau số 0 trong các số có 1 chữ số sau dấu phẩy là:",
        "options": [
          "0,1",
          "1",
          "0,01",
          "0,001"
        ],
        "correctAnswer": "0,1",
        "explanation": "Là 0,1."
      }
    ]
  },
  "math-bai-12": {
    "practiceQuestions": [
      {
        "id": "m12-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$3\\text{ m } 5\\text{ dm} = ...\\text{ m}$:",
        "options": [
          "3,5 m",
          "3,05 m",
          "35 m",
          "0,35 m"
        ],
        "correctAnswer": "3,5 m",
        "hint": "$1\\text{ dm} = 0,1\\text{ m} \\Rightarrow 5\\text{ dm} = 0,5\\text{ m}$.",
        "explanation": "$3\\text{ m } 5\\text{ dm} = 3,5\\text{ m}$."
      },
      {
        "id": "m12-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$4\\text{ kg } 250\\text{ g} = ...\\text{ kg}$:",
        "options": [
          "4,25 kg",
          "4,250 kg",
          "4,025 kg",
          "42,5 kg"
        ],
        "correctAnswer": "4,25 kg",
        "hint": "$250\\text{ g} = 0,25\\text{ kg}$.",
        "explanation": "$4\\text{ kg } 250\\text{ g} = 4,25\\text{ kg}$."
      },
      {
        "id": "m12-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$8\\text{ m } 6\\text{ cm} = ...\\text{ m}$:",
        "options": [
          "8,06 m",
          "8,6 m",
          "86 m",
          "0,86 m"
        ],
        "correctAnswer": "8,06 m",
        "hint": "$1\\text{ m} = 100\\text{ cm} \\Rightarrow 6\\text{ cm} = 0,06\\text{ m}$.",
        "explanation": "$8\\text{ m } 6\\text{ cm} = 8,06\\text{ m}$."
      },
      {
        "id": "m12-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$5\\text{ tấn } 35\\text{ kg} = ...\\text{ tấn}$:",
        "options": [
          "5,035 tấn",
          "5,35 tấn",
          "5,350 tấn",
          "50,35 tấn"
        ],
        "correctAnswer": "5,035 tấn",
        "hint": "$1\\text{ tấn} = 1000\\text{ kg} \\Rightarrow 35\\text{ kg} = 0,035\\text{ tấn}$.",
        "explanation": "$5,035\\text{ tấn}$."
      },
      {
        "id": "m12-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$7\\text{ m}^2\\text{ } 15\\text{ dm}^2 = ...\\text{ m}^2$:",
        "options": [
          "7,15 m²",
          "7,015 m²",
          "71,5 m²",
          "7,150 m²"
        ],
        "correctAnswer": "7,15 m²",
        "hint": "$1\\text{ m}^2 = 100\\text{ dm}^2 \\Rightarrow 15\\text{ dm}^2 = 0,15\\text{ m}^2$.",
        "explanation": "$7,15\\text{ m}^2$."
      },
      {
        "id": "m12-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$12\\text{ ha} = ...\\text{ km}^2$:",
        "options": [
          "0,12 km²",
          "1,2 km²",
          "0,012 km²",
          "120 km²"
        ],
        "correctAnswer": "0,12 km²",
        "hint": "$1\\text{ km}^2 = 100\\text{ ha} \\Rightarrow 12\\text{ ha} = 0,12\\text{ km}^2$.",
        "explanation": "$0,12\\text{ km}^2$."
      },
      {
        "id": "m12-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bao xi măng nặng $50\\text{ kg}$. Hỏi 35 bao xi măng như thế nặng bao nhiêu tấn?",
        "options": [
          "1,75 tấn",
          "17,5 tấn",
          "0,175 tấn",
          "175 tấn"
        ],
        "correctAnswer": "1,75 tấn",
        "hint": "Khối lượng = $35 \\times 50 = 1750\\text{ kg} = 1,75\\text{ tấn}$.",
        "explanation": "$1,75\\text{ tấn}$."
      },
      {
        "id": "m12-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một khu đất hình chữ nhật có chiều dài $250\\text{ m}$, chiều rộng $80\\text{ m}$. Diện tích khu đất đó tính theo héc-ta là:",
        "options": [
          "2 ha",
          "20 ha",
          "0,2 ha",
          "200 ha"
        ],
        "correctAnswer": "2 ha",
        "hint": "Diện tích = $250 \\times 80 = 20\\,000\\text{ m}^2 = 2\\text{ ha}$.",
        "explanation": "$2\\text{ ha}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m12-s1",
        "prompt": "$1\\text{ m } = ...\\text{ dm}$",
        "options": [
          "10 dm",
          "100 dm",
          "1000 dm",
          "0,1 dm"
        ],
        "correctAnswer": "10 dm",
        "explanation": "$1\\text{ m} = 10\\text{ dm}$."
      },
      {
        "id": "m12-s2",
        "prompt": "$500\\text{ g} = ...\\text{ kg}$",
        "options": [
          "0,5 kg",
          "5 kg",
          "0,05 kg",
          "50 kg"
        ],
        "correctAnswer": "0,5 kg",
        "explanation": "$500\\text{ g} = 0,5\\text{ kg}$."
      },
      {
        "id": "m12-s3",
        "prompt": "$1\\text{ tấn} = ...\\text{ kg}$",
        "options": [
          "1000 kg",
          "100 kg",
          "10 kg",
          "10000 kg"
        ],
        "correctAnswer": "1000 kg",
        "explanation": "$1\\text{ tấn} = 1000\\text{ kg}$."
      }
    ]
  },
  "math-bai-13": {
    "practiceQuestions": [
      {
        "id": "m13-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Làm tròn số thập phân $6,3$ đến hàng đơn vị ta được số:",
        "options": [
          "6",
          "7",
          "6,0",
          "6,5"
        ],
        "correctAnswer": "6",
        "hint": "Chữ số hàng phần mười là 3 < 5 nên giữ nguyên phần nguyên.",
        "explanation": "Làm tròn thành 6."
      },
      {
        "id": "m13-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Làm tròn số $8,7$ đến hàng đơn vị ta được số:",
        "options": [
          "9",
          "8",
          "8,5",
          "10"
        ],
        "correctAnswer": "9",
        "hint": "Chữ số phần mười là 7 >= 5 nên cộng thêm 1 vào 8.",
        "explanation": "Làm tròn thành 9."
      },
      {
        "id": "m13-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Làm tròn số $15,847$ đến hàng phần mười (chữ số thập phân thứ nhất):",
        "options": [
          "15,8",
          "15,9",
          "15,85",
          "16,0"
        ],
        "correctAnswer": "15,8",
        "hint": "Hàng phần trăm là 4 < 5.",
        "explanation": "Làm tròn thành 15,8."
      },
      {
        "id": "m13-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Làm tròn số $24,675$ đến hàng phần trăm (chữ số thập phân thứ hai):",
        "options": [
          "24,68",
          "24,67",
          "24,7",
          "25"
        ],
        "correctAnswer": "24,68",
        "hint": "Hàng phần nghìn là 5 >= 5 nên cộng 1 vào chữ số 7.",
        "explanation": "Làm tròn thành 24,68."
      },
      {
        "id": "m13-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số nào dưới đây khi làm tròn đến hàng đơn vị thì được số 10?",
        "options": [
          "9,85",
          "9,42",
          "10,65",
          "8,95"
        ],
        "correctAnswer": "9,85",
        "hint": "Chữ số hàng phần mười của 9,85 là 8 >= 5 nên làm tròn thành 10.",
        "explanation": "9,85 làm tròn thành 10."
      },
      {
        "id": "m13-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đoạn đường dài $12,48\\text{ km}$. Bác tài xế nói ước chừng khoảng bao nhiêu ki-lô-mét (làm tròn đến hàng đơn vị)?",
        "options": [
          "12 km",
          "13 km",
          "12,5 km",
          "10 km"
        ],
        "correctAnswer": "12 km",
        "hint": "Chữ số hàng phần mười là 4 < 5.",
        "explanation": "Làm tròn thành 12 km."
      },
      {
        "id": "m13-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bao gạo cân nặng $49,85\\text{ kg}$. Nếu mua 10 bao gạo như thế thì tổng khối lượng làm tròn đến hàng chục ki-lô-gam là:",
        "options": [
          "500 kg",
          "498 kg",
          "490 kg",
          "510 kg"
        ],
        "correctAnswer": "500 kg",
        "hint": "Tổng cân nặng: $49,85 \\times 10 = 498,5\\text{ kg}$. Chữ số hàng đơn vị là 8 >= 5 nên làm tròn thành 500 kg.",
        "explanation": "$498,5\\text{ kg}$ làm tròn đến hàng chục thành 500 kg."
      },
      {
        "id": "m13-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Cho số thập phân $x = 7,a6$. Biết khi làm tròn $x$ đến hàng phần mười ta được $7,5$. Chữ số $a$ là:",
        "options": [
          "4",
          "5",
          "6",
          "3"
        ],
        "correctAnswer": "4",
        "hint": "Chữ số hàng phần trăm là 6 >= 5, nên sau khi làm tròn $a + 1 = 5 \\Rightarrow a = 4$.",
        "explanation": "Vì 6 >= 5 nên $a$ được tăng 1 lên thành 5, vậy $a = 4$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m13-s1",
        "prompt": "Khi làm tròn, nếu chữ số ngay sau bé hơn 5 thì:",
        "options": [
          "Giữ nguyên hàng làm tròn",
          "Tăng thêm 1",
          "Giảm đi 1",
          "Xóa hết số"
        ],
        "correctAnswer": "Giữ nguyên hàng làm tròn",
        "explanation": "Giữ nguyên hàng làm tròn."
      },
      {
        "id": "m13-s2",
        "prompt": "Làm tròn $3,5$ đến hàng đơn vị được:",
        "options": [
          "4",
          "3",
          "3,0",
          "5"
        ],
        "correctAnswer": "4",
        "explanation": "Vì 5 >= 5 nên làm tròn lên thành 4."
      },
      {
        "id": "m13-s3",
        "prompt": "Làm tròn $0,99$ đến hàng phần mười được:",
        "options": [
          "1,0",
          "0,9",
          "1",
          "0,90"
        ],
        "correctAnswer": "1,0",
        "explanation": "Làm tròn lên thành 1,0."
      }
    ]
  },
  "math-bai-14": {
    "practiceQuestions": [
      {
        "id": "m14-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số thập phân gồm 5 chục, 3 đơn vị, 6 phần mười và 8 phần trăm là:",
        "options": [
          "53,68",
          "53,86",
          "536,8",
          "5,368"
        ],
        "correctAnswer": "53,68",
        "hint": "5 chục và 3 đơn vị là 53. 6 phần mười và 8 phần trăm là 68.",
        "explanation": "53,68."
      },
      {
        "id": "m14-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Chữ số 4 trong số $85,249$ có giá trị là:",
        "options": [
          "$\\frac{4}{100}$",
          "$\\frac{4}{10}$",
          "$\\frac{4}{1000}$",
          "4"
        ],
        "correctAnswer": "$\\frac{4}{100}$",
        "hint": "Chữ số 4 ở hàng phần trăm.",
        "explanation": "Giá trị là $\\frac{4}{100} = 0,04$."
      },
      {
        "id": "m14-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $24,5 \\; ... \\; 24,500$:",
        "options": [
          "=",
          ">",
          "<",
          "Không so sánh được"
        ],
        "correctAnswer": "=",
        "hint": "Bỏ các chữ số 0 tận cùng bên phải phần thập phân giá trị không đổi.",
        "explanation": "Hai số bằng nhau."
      },
      {
        "id": "m14-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$15\\text{ m}^2\\text{ } 8\\text{ dm}^2 = ...\\text{ m}^2$:",
        "options": [
          "15,08 m²",
          "15,8 m²",
          "158 m²",
          "1,58 m²"
        ],
        "correctAnswer": "15,08 m²",
        "hint": "$8\\text{ dm}^2 = 0,08\\text{ m}^2$.",
        "explanation": "$15,08\\text{ m}^2$."
      },
      {
        "id": "m14-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Làm tròn số $38,472$ đến hàng phần mười được:",
        "options": [
          "38,5",
          "38,4",
          "38,47",
          "39,0"
        ],
        "correctAnswer": "38,5",
        "hint": "Hàng phần trăm là 7 >= 5 nên làm tròn lên.",
        "explanation": "38,5."
      },
      {
        "id": "m14-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Sắp xếp từ lớn đến bé: $0,45 ; 0,54 ; 0,504 ; 0,405$:",
        "options": [
          "0,54 ; 0,504 ; 0,45 ; 0,405",
          "0,504 ; 0,54 ; 0,45 ; 0,405",
          "0,54 ; 0,45 ; 0,504 ; 0,405",
          "0,405 ; 0,45 ; 0,504 ; 0,54"
        ],
        "correctAnswer": "0,54 ; 0,504 ; 0,45 ; 0,405",
        "hint": "So sánh từ hàng phần mười.",
        "explanation": "$0,54 > 0,504 > 0,45 > 0,405$."
      },
      {
        "id": "m14-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Có bao nhiêu số tự nhiên $x$ thỏa mãn: $12,4 < x < 17,2$?",
        "options": [
          "5 số",
          "4 số",
          "6 số",
          "7 số"
        ],
        "correctAnswer": "5 số",
        "hint": "Các số tự nhiên đó là: 13, 14, 15, 16, 17.",
        "explanation": "Có 5 số tự nhiên: 13, 14, 15, 16, 17."
      },
      {
        "id": "m14-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một vận động viên chạy 100 m hết 10,85 giây. Nếu làm tròn thời gian chạy đến hàng phần mười thì thành tích ghi nhận là:",
        "options": [
          "10,9 giây",
          "10,8 giây",
          "11 giây",
          "10,80 giây"
        ],
        "correctAnswer": "10,9 giây",
        "hint": "Hàng phần trăm là 5 >= 5.",
        "explanation": "10,9 giây."
      }
    ],
    "speedQuestions": [
      {
        "id": "m14-s1",
        "prompt": "$0,25$ đổi ra phân số tối giản là:",
        "options": [
          "$\\frac{1}{4}$",
          "$\\frac{25}{100}$",
          "$\\frac{1}{5}$",
          "$\\frac{2}{5}$"
        ],
        "correctAnswer": "$\\frac{1}{4}$",
        "explanation": "$\\frac{1}{4}$."
      },
      {
        "id": "m14-s2",
        "prompt": "$1\\text{ dm} = ...\\text{ m}$",
        "options": [
          "0,1 m",
          "0,01 m",
          "10 m",
          "1 m"
        ],
        "correctAnswer": "0,1 m",
        "explanation": "0,1 m."
      },
      {
        "id": "m14-s3",
        "prompt": "Số thập phân nhỏ nhất có 1 chữ số ở phần thập phân lớn hơn 5 là:",
        "options": [
          "5,1",
          "5,01",
          "6,0",
          "5,2"
        ],
        "correctAnswer": "5,1",
        "explanation": "5,1."
      }
    ]
  },
  "math-bai-15": {
    "practiceQuestions": [
      {
        "id": "m15-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$1\\text{ km}^2$ bằng bao nhiêu héc-ta ($\\text{ha}$)?",
        "options": [
          "$100\\text{ ha}$",
          "$10\\text{ ha}$",
          "$1000\\text{ ha}$",
          "$10\\,000\\text{ ha}$"
        ],
        "correctAnswer": "$100\\text{ ha}$",
        "hint": "$1\\text{ km}^2 = 1\\,000\\,000\\text{ m}^2 = 100 \\times 10\\,000\\text{ m}^2 = 100\\text{ ha}$.",
        "explanation": "$1\\text{ km}^2 = 100\\text{ ha}$."
      },
      {
        "id": "m15-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$1\\text{ ha}$ bằng bao nhiêu mét vuông?",
        "options": [
          "$10\\,000\\text{ m}^2$",
          "$1000\\text{ m}^2$",
          "$100\\text{ m}^2$",
          "$100\\,000\\text{ m}^2$"
        ],
        "correctAnswer": "$10\\,000\\text{ m}^2$",
        "hint": "Một héc-ta là diện tích của hình vuông có cạnh dài $100\\text{ m}$.",
        "explanation": "$100\\text{ m} \\times 100\\text{ m} = 10\\,000\\text{ m}^2$."
      },
      {
        "id": "m15-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đổi $25\\text{ ha}$ ra đơn vị mét vuông:",
        "options": [
          "$250\\,000\\text{ m}^2$",
          "$25\\,000\\text{ m}^2$",
          "$2\\,500\\,000\\text{ m}^2$",
          "$2500\\text{ m}^2$"
        ],
        "correctAnswer": "$250\\,000\\text{ m}^2$",
        "hint": "$25 \\times 10\\,000 = 250\\,000$.",
        "explanation": "$25\\text{ ha} = 250\\,000\\text{ m}^2$."
      },
      {
        "id": "m15-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khu rừng nguyên sinh có diện tích $4\\text{ km}^2\\text{ } 35\\text{ ha}$. Diện tích khu rừng đó tính theo héc-ta là:",
        "options": [
          "$435\\text{ ha}$",
          "$4035\\text{ ha}$",
          "$43,5\\text{ ha}$",
          "$4350\\text{ ha}$"
        ],
        "correctAnswer": "$435\\text{ ha}$",
        "hint": "$4\\text{ km}^2 = 400\\text{ ha}$. $400 + 35 = 435\\text{ ha}$.",
        "explanation": "$435\\text{ ha}$."
      },
      {
        "id": "m15-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Diện tích hồ Tây (Hà Nội) khoảng $500\\text{ ha}$. Hỏi diện tích hồ Tây bằng bao nhiêu ki-lô-mét vuông?",
        "options": [
          "$5\\text{ km}^2$",
          "$50\\text{ km}^2$",
          "$0,5\\text{ km}^2$",
          "$5000\\text{ km}^2$"
        ],
        "correctAnswer": "$5\\text{ km}^2$",
        "hint": "$500 : 100 = 5\\text{ km}^2$.",
        "explanation": "$500\\text{ ha} = 5\\text{ km}^2$."
      },
      {
        "id": "m15-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $8\\text{ ha}\\text{ } 50\\text{ m}^2 \\; ... \\; 80\\,500\\text{ m}^2$:",
        "options": [
          "<",
          ">",
          "=",
          "Không so sánh được"
        ],
        "correctAnswer": "<",
        "hint": "$8\\text{ ha}\\text{ } 50\\text{ m}^2 = 80\\,050\\text{ m}^2 < 80\\,500\\text{ m}^2$.",
        "explanation": "Vì $80\\,050\\text{ m}^2 < 80\\,500\\text{ m}^2$."
      },
      {
        "id": "m15-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một nông trường trồng cà phê hình chữ nhật có chiều dài $800\\text{ m}$, chiều rộng bằng $\\frac{3}{4}$ chiều dài. Diện tích nông trường đó là:",
        "options": [
          "$48\\text{ ha}$",
          "$4,8\\text{ ha}$",
          "$480\\text{ ha}$",
          "$24\\text{ ha}$"
        ],
        "correctAnswer": "$48\\text{ ha}$",
        "hint": "Chiều rộng = $800 \\times \\frac{3}{4} = 600\\text{ m}$. Diện tích = $800 \\times 600 = 480\\,000\\text{ m}^2 = 48\\text{ ha}$.",
        "explanation": "Diện tích là $48\\text{ ha}$."
      },
      {
        "id": "m15-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Người ta dự định xây một khu đô thị sinh thái trên khu đất $1,2\\text{ km}^2$. Đất dành cho cây xanh và hồ nước chiếm $\\frac{2}{5}$ diện tích. Hỏi diện tích đất cây xanh và hồ nước là bao nhiêu héc-ta?",
        "options": [
          "$48\\text{ ha}$",
          "$24\\text{ ha}$",
          "$60\\text{ ha}$",
          "$72\\text{ ha}$"
        ],
        "correctAnswer": "$48\\text{ ha}$",
        "hint": "$1,2\\text{ km}^2 = 120\\text{ ha}$. Diện tích cây xanh = $120 \\times \\frac{2}{5} = 48\\text{ ha}$.",
        "explanation": "$48\\text{ ha}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m15-s1",
        "prompt": "$5\\text{ ha} = ...\\text{ m}^2$",
        "options": [
          "$50\\,000\\text{ m}^2$",
          "$5000\\text{ m}^2$",
          "$500\\text{ m}^2$",
          "$500\\,000\\text{ m}^2$"
        ],
        "correctAnswer": "$50\\,000\\text{ m}^2$",
        "explanation": "$50\\,000\\text{ m}^2$."
      },
      {
        "id": "m15-s2",
        "prompt": "$2\\text{ km}^2 = ...\\text{ ha}$",
        "options": [
          "$200\\text{ ha}$",
          "$20\\text{ ha}$",
          "$2000\\text{ ha}$",
          "$20\\,000\\text{ ha}$"
        ],
        "correctAnswer": "$200\\text{ ha}$",
        "explanation": "$200\\text{ ha}$."
      },
      {
        "id": "m15-s3",
        "prompt": "$300\\text{ ha} = ...\\text{ km}^2$",
        "options": [
          "$3\\text{ km}^2$",
          "$30\\text{ km}^2$",
          "$0,3\\text{ km}^2$",
          "$300\\text{ km}^2$"
        ],
        "correctAnswer": "$3\\text{ km}^2$",
        "explanation": "$3\\text{ km}^2$."
      }
    ]
  },
  "math-bai-16": {
    "practiceQuestions": [
      {
        "id": "m16-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong bảng đơn vị đo diện tích, hai đơn vị đo diện tích liền nhau thì đơn vị lớn gấp mấy lần đơn vị bé?",
        "options": [
          "100 lần",
          "10 lần",
          "1000 lần",
          "10 000 lần"
        ],
        "correctAnswer": "100 lần",
        "hint": "Ví dụ: $1\\text{ m}^2 = 100\\text{ dm}^2$.",
        "explanation": "Hai đơn vị đo diện tích liền nhau hơn kém nhau 100 lần."
      },
      {
        "id": "m16-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$1\\text{ dm}^2$ bằng bao nhiêu xăng-ti-mét vuông?",
        "options": [
          "$100\\text{ cm}^2$",
          "$10\\text{ cm}^2$",
          "$1000\\text{ cm}^2$",
          "$10\\,000\\text{ cm}^2$"
        ],
        "correctAnswer": "$100\\text{ cm}^2$",
        "hint": "$1\\text{ dm} = 10\\text{ cm}$ nên $1\\text{ dm}^2 = 10 \\times 10 = 100\\text{ cm}^2$.",
        "explanation": "$1\\text{ dm}^2 = 100\\text{ cm}^2$."
      },
      {
        "id": "m16-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$7\\text{ m}^2\\text{ } 25\\text{ cm}^2 = ...\\text{ cm}^2$:",
        "options": [
          "$70\\,025\\text{ cm}^2$",
          "$725\\text{ cm}^2$",
          "$7025\\text{ cm}^2$",
          "$700\\,025\\text{ cm}^2$"
        ],
        "correctAnswer": "$70\\,025\\text{ cm}^2$",
        "hint": "$7\\text{ m}^2 = 70\\,000\\text{ cm}^2$. Cộng thêm $25\\text{ cm}^2$ được $70\\,025\\text{ cm}^2$.",
        "explanation": "$70\\,025\\text{ cm}^2$."
      },
      {
        "id": "m16-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Viết số thích hợp vào chỗ chấm: $4500\\text{ dam}^2 = ...\\text{ hm}^2$:",
        "options": [
          "45",
          "450",
          "4,5",
          "4500"
        ],
        "correctAnswer": "45",
        "hint": "$1\\text{ hm}^2 = 100\\text{ dam}^2$, vậy $4500 : 100 = 45$.",
        "explanation": "$45\\text{ hm}^2$."
      },
      {
        "id": "m16-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số thập phân thích hợp điền vào chỗ chấm: $6\\text{ m}^2\\text{ } 8\\text{ dm}^2 = ...\\text{ m}^2$:",
        "options": [
          "$6,08\\text{ m}^2$",
          "$6,8\\text{ m}^2$",
          "$6,80\\text{ m}^2$",
          "$68\\text{ m}^2$"
        ],
        "correctAnswer": "$6,08\\text{ m}^2$",
        "hint": "$8\\text{ dm}^2 = \\frac{8}{100}\\text{ m}^2 = 0,08\\text{ m}^2$.",
        "explanation": "$6,08\\text{ m}^2$."
      },
      {
        "id": "m16-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Sắp xếp các số đo theo thứ tự từ bé đến lớn: $3\\text{ m}^2\\text{ } 5\\text{ dm}^2 ; 350\\text{ dm}^2 ; 30\\,500\\text{ cm}^2$:",
        "options": [
          "$3\\text{ m}^2\\text{ } 5\\text{ dm}^2 < 30\\,500\\text{ cm}^2 < 350\\text{ dm}^2$",
          "$30\\,500\\text{ cm}^2 < 3\\text{ m}^2\\text{ } 5\\text{ dm}^2 < 350\\text{ dm}^2$",
          "$350\\text{ dm}^2 < 30\\,500\\text{ cm}^2 < 3\\text{ m}^2\\text{ } 5\\text{ dm}^2$",
          "$3\\text{ m}^2\\text{ } 5\\text{ dm}^2 = 30\\,500\\text{ cm}^2 < 350\\text{ dm}^2$"
        ],
        "correctAnswer": "$3\\text{ m}^2\\text{ } 5\\text{ dm}^2 = 30\\,500\\text{ cm}^2 < 350\\text{ dm}^2$",
        "hint": "Đổi về $\\text{cm}^2$: $3\\text{ m}^2\\text{ } 5\\text{ dm}^2 = 30\\,500\\text{ cm}^2$; $350\\text{ dm}^2 = 35\\,000\\text{ cm}^2$.",
        "explanation": "$30\\,500\\text{ cm}^2 = 30\\,500\\text{ cm}^2 < 35\\,000\\text{ cm}^2$."
      },
      {
        "id": "m16-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Để lát nền một căn phòng hình chữ nhật có chiều dài $9\\text{ m}$, chiều rộng $6\\text{ m}$, người ta dùng gạch men hình vuông cạnh $30\\text{ cm}$. Cần bao nhiêu viên gạch (bỏ qua mạch vữa)?",
        "options": [
          "600 viên",
          "60 viên",
          "6000 viên",
          "180 viên"
        ],
        "correctAnswer": "600 viên",
        "hint": "Diện tích nền = $9 \\times 6 = 54\\text{ m}^2 = 540\\,000\\text{ cm}^2$. Diện tích 1 viên gạch = $30 \\times 30 = 900\\text{ cm}^2$. Số viên = $540\\,000 : 900 = 600$.",
        "explanation": "600 viên gạch."
      },
      {
        "id": "m16-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một sân vận động hình chữ nhật có chu vi $400\\text{ m}$, chiều dài hơn chiều rộng $40\\text{ m}$. Diện tích sân vận động là bao nhiêu héc-ta?",
        "options": [
          "$0,96\\text{ ha}$",
          "$9,6\\text{ ha}$",
          "$96\\text{ ha}$",
          "$1,2\\text{ ha}$"
        ],
        "correctAnswer": "$0,96\\text{ ha}$",
        "hint": "Nửa chu vi = $200\\text{ m}$. Chiều dài = $(200 + 40) : 2 = 120\\text{ m}$. Chiều rộng = $80\\text{ m}$. Diện tích = $120 \\times 80 = 9600\\text{ m}^2 = 0,96\\text{ ha}$.",
        "explanation": "$0,96\\text{ ha}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m16-s1",
        "prompt": "$1\\text{ m}^2 = ...\\text{ dm}^2$",
        "options": [
          "$100\\text{ dm}^2$",
          "$10\\text{ dm}^2$",
          "$1000\\text{ dm}^2$",
          "$10\\,000\\text{ dm}^2$"
        ],
        "correctAnswer": "$100\\text{ dm}^2$",
        "explanation": "$100\\text{ dm}^2$."
      },
      {
        "id": "m16-s2",
        "prompt": "$500\\text{ dm}^2 = ...\\text{ m}^2$",
        "options": [
          "$5\\text{ m}^2$",
          "$50\\text{ m}^2$",
          "$0,5\\text{ m}^2$",
          "$5000\\text{ m}^2$"
        ],
        "correctAnswer": "$5\\text{ m}^2$",
        "explanation": "$5\\text{ m}^2$."
      },
      {
        "id": "m16-s3",
        "prompt": "$1\\text{ km}^2 = ...\\text{ m}^2$",
        "options": [
          "$1\\,000\\,000\\text{ m}^2$",
          "$100\\,000\\text{ m}^2$",
          "$10\\,000\\text{ m}^2$",
          "$1000\\text{ m}^2$"
        ],
        "correctAnswer": "$1\\,000\\,000\\text{ m}^2$",
        "explanation": "$1\\,000\\,000\\text{ m}^2$."
      }
    ]
  },
  "math-bai-17": {
    "practiceQuestions": [
      {
        "id": "m17-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Đơn vị đo nào thích hợp nhất để đo diện tích một lớp học tiểu học?",
        "options": [
          "Mét vuông (m²)",
          "Héc-ta (ha)",
          "Ki-lô-mét vuông (km²)",
          "Xăng-ti-mét vuông (cm²)"
        ],
        "correctAnswer": "Mét vuông (m²)",
        "hint": "Phòng học thường có diện tích khoảng $40\\text{ m}^2$ đến $60\\text{ m}^2$.",
        "explanation": "Mét vuông (m²) là đơn vị phù hợp nhất."
      },
      {
        "id": "m17-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Đơn vị đo nào thích hợp nhất để đo diện tích toàn bộ lãnh thổ nước Việt Nam?",
        "options": [
          "Ki-lô-mét vuông (km²)",
          "Héc-ta (ha)",
          "Mét vuông (m²)",
          "Đề-xi-mét vuông (dm²)"
        ],
        "correctAnswer": "Ki-lô-mét vuông (km²)",
        "hint": "Lãnh thổ một quốc gia có diện tích rất lớn (hàng trăm nghìn km²).",
        "explanation": "Ki-lô-mét vuông (km²)."
      },
      {
        "id": "m17-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cái bàn học hình chữ nhật có chiều dài $1,2\\text{ m}$ và chiều rộng $0,5\\text{ m}$. Diện tích mặt bàn là:",
        "options": [
          "$0,6\\text{ m}^2$",
          "$6\\text{ m}^2$",
          "$0,06\\text{ m}^2$",
          "$1,7\\text{ m}^2$"
        ],
        "correctAnswer": "$0,6\\text{ m}^2$",
        "hint": "$1,2 \\times 0,5 = 0,6\\text{ m}^2$.",
        "explanation": "$0,6\\text{ m}^2$."
      },
      {
        "id": "m17-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một bức tranh cổ động hình chữ nhật có chu vi $3,6\\text{ m}$, chiều rộng $0,8\\text{ m}$. Chiều dài bức tranh là:",
        "options": [
          "$1,0\\text{ m}$",
          "$1,4\\text{ m}$",
          "$2,0\\text{ m}$",
          "$0,9\\text{ m}$"
        ],
        "correctAnswer": "$1,0\\text{ m}$",
        "hint": "Nửa chu vi = $3,6 : 2 = 1,8\\text{ m}$. Chiều dài = $1,8 - 0,8 = 1,0\\text{ m}$.",
        "explanation": "$1,0\\text{ m}$."
      },
      {
        "id": "m17-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một vườn hoa trường học hình chữ nhật dài $15\\text{ m}$, rộng $8\\text{ m}$. Người ta dùng $\\frac{1}{3}$ diện tích để trồng hoa hồng. Diện tích trồng hoa hồng là:",
        "options": [
          "$40\\text{ m}^2$",
          "$30\\text{ m}^2$",
          "$60\\text{ m}^2$",
          "$20\\text{ m}^2$"
        ],
        "correctAnswer": "$40\\text{ m}^2$",
        "hint": "Diện tích vườn = $15 \\times 8 = 120\\text{ m}^2$. Diện tích trồng hoa = $120 : 3 = 40\\text{ m}^2$.",
        "explanation": "$40\\text{ m}^2$."
      },
      {
        "id": "m17-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bác nông dân ước lượng thửa ruộng thu hoạch được khoảng $6\\text{ tạ}$ thóc trên mỗi $1000\\text{ m}^2$. Hỏi thửa ruộng rộng $0,5\\text{ ha}$ thu hoạch được bao nhiêu tấn thóc?",
        "options": [
          "$3\\text{ tấn}$",
          "$30\\text{ tấn}$",
          "$0,3\\text{ tấn}$",
          "$12\\text{ tấn}$"
        ],
        "correctAnswer": "$3\\text{ tấn}$",
        "hint": "$0,5\\text{ ha} = 5000\\text{ m}^2$. Sản lượng = $(5000 : 1000) \\times 6 = 30\\text{ tạ} = 3\\text{ tấn}$.",
        "explanation": "$3\\text{ tấn}$ thóc."
      },
      {
        "id": "m17-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Sân trường hình chữ nhật có chu vi $180\\text{ m}$. Nếu tăng chiều rộng thêm $6\\text{ m}$ và bớt chiều dài đi $6\\text{ m}$ thì sân trường trở thành hình vuông. Diện tích sân trường là:",
        "options": [
          "$1989\\text{ m}^2$",
          "$2025\\text{ m}^2$",
          "$2016\\text{ m}^2$",
          "$1800\\text{ m}^2$"
        ],
        "correctAnswer": "$1989\\text{ m}^2$",
        "hint": "Nửa chu vi = 90 m. Hiệu = $6 \\times 2 = 12$ m. Dài = $(90+12):2 = 51$ m. Rộng = $39$ m. Diện tích = $51 \\times 39 = 1989\\text{ m}^2$.",
        "explanation": "$1989\\text{ m}^2$."
      },
      {
        "id": "m17-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Người ta sơn tường một phòng học hình hộp chữ nhật dài $8\\text{ m}$, rộng $6\\text{ m}$, cao $3,5\\text{ m}$. Tổng diện tích các cửa sổ và cửa ra vào là $12\\text{ m}^2$. Diện tích cần sơn xung quanh tường bên trong phòng là:",
        "options": [
          "$86\\text{ m}^2$",
          "$98\\text{ m}^2$",
          "$146\\text{ m}^2$",
          "$74\\text{ m}^2$"
        ],
        "correctAnswer": "$86\\text{ m}^2$",
        "hint": "Diện tích 4 bức tường xung quanh = $(8 + 6) \\times 2 \\times 3,5 = 98\\text{ m}^2$. Trừ cửa = $98 - 12 = 86\\text{ m}^2$.",
        "explanation": "$86\\text{ m}^2$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m17-s1",
        "prompt": "Một cái sân vuông cạnh $10\\text{ m}$ có diện tích là:",
        "options": [
          "$100\\text{ m}^2$",
          "$40\\text{ m}^2$",
          "$1000\\text{ m}^2$",
          "$20\\text{ m}^2$"
        ],
        "correctAnswer": "$100\\text{ m}^2$",
        "explanation": "$100\\text{ m}^2$."
      },
      {
        "id": "m17-s2",
        "prompt": "Chu vi hình vuông cạnh $5\\text{ m}$ là:",
        "options": [
          "$20\\text{ m}$",
          "$25\\text{ m}$",
          "$10\\text{ m}$",
          "$15\\text{ m}$"
        ],
        "correctAnswer": "$20\\text{ m}$",
        "explanation": "$20\\text{ m}$."
      },
      {
        "id": "m17-s3",
        "prompt": "$1,5\\text{ m} = ...\\text{ cm}$",
        "options": [
          "$150\\text{ cm}$",
          "$15\\text{ cm}$",
          "$1500\\text{ cm}$",
          "$0,15\\text{ cm}$"
        ],
        "correctAnswer": "$150\\text{ cm}$",
        "explanation": "$150\\text{ cm}$."
      }
    ]
  },
  "math-bai-18": {
    "practiceQuestions": [
      {
        "id": "m18-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số thích hợp điền vào chỗ chấm: $35\\text{ ha} = ...\\text{ m}^2$:",
        "options": [
          "$350\\,000$",
          "$35\\,000$",
          "$3\\,500\\,000$",
          "$3500$"
        ],
        "correctAnswer": "$350\\,000$",
        "hint": "$1\\text{ ha} = 10\\,000\\text{ m}^2$.",
        "explanation": "$350\\,000\\text{ m}^2$."
      },
      {
        "id": "m18-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số thích hợp điền vào chỗ chấm: $4\\text{ km}^2 = ...\\text{ ha}$:",
        "options": [
          "400",
          "40",
          "4000",
          "40 000"
        ],
        "correctAnswer": "400",
        "hint": "$1\\text{ km}^2 = 100\\text{ ha}$.",
        "explanation": "$400\\text{ ha}$."
      },
      {
        "id": "m18-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Viết số đo sau dưới dạng số thập phân có đơn vị là mét vuông: $4\\text{ m}^2\\text{ } 45\\text{ dm}^2$:",
        "options": [
          "$4,45\\text{ m}^2$",
          "$4,045\\text{ m}^2$",
          "$44,5\\text{ m}^2$",
          "$45,4\\text{ m}^2$"
        ],
        "correctAnswer": "$4,45\\text{ m}^2$",
        "hint": "$45\\text{ dm}^2 = 0,45\\text{ m}^2$.",
        "explanation": "$4,45\\text{ m}^2$."
      },
      {
        "id": "m18-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khu nghỉ dưỡng có diện tích $8\\text{ ha}\\text{ } 500\\text{ m}^2$. Đổi sang đơn vị héc-ta được:",
        "options": [
          "$8,05\\text{ ha}$",
          "$8,5\\text{ ha}$",
          "$8,005\\text{ ha}$",
          "$85\\text{ ha}$"
        ],
        "correctAnswer": "$8,05\\text{ ha}$",
        "hint": "$500\\text{ m}^2 = \\frac{500}{10\\,000}\\text{ ha} = 0,05\\text{ ha}$.",
        "explanation": "$8,05\\text{ ha}$."
      },
      {
        "id": "m18-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $5\\text{ km}^2\\text{ } 6\\text{ ha} \\; ... \\; 560\\text{ ha}$:",
        "options": [
          "<",
          ">",
          "=",
          "Không so sánh được"
        ],
        "correctAnswer": "<",
        "hint": "$5\\text{ km}^2\\text{ } 6\\text{ ha} = 506\\text{ ha} < 560\\text{ ha}$.",
        "explanation": "$506\\text{ ha} < 560\\text{ ha}$."
      },
      {
        "id": "m18-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cánh đồng hình chữ nhật có chiều dài $1200\\text{ m}$, chiều rộng bằng $\\frac{2}{3}$ chiều dài. Diện tích cánh đồng là bao nhiêu héc-ta?",
        "options": [
          "$96\\text{ ha}$",
          "$9,6\\text{ ha}$",
          "$960\\text{ ha}$",
          "$48\\text{ ha}$"
        ],
        "correctAnswer": "$96\\text{ ha}$",
        "hint": "Chiều rộng = $1200 \\times \\frac{2}{3} = 800\\text{ m}$. Diện tích = $1200 \\times 800 = 960\\,000\\text{ m}^2 = 96\\text{ ha}$.",
        "explanation": "$96\\text{ ha}$."
      },
      {
        "id": "m18-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình bình hành có đáy $150\\text{ m}$ và chiều cao $80\\text{ m}$. Trung bình cứ $100\\text{ m}^2$ thu hoạch được $65\\text{ kg}$ thóc. Cả thửa ruộng thu hoạch được bao nhiêu tấn thóc?",
        "options": [
          "$7,8\\text{ tấn}$",
          "$78\\text{ tấn}$",
          "$0,78\\text{ tấn}$",
          "$6,5\\text{ tấn}$"
        ],
        "correctAnswer": "$7,8\\text{ tấn}$",
        "hint": "Diện tích thửa ruộng = $150 \\times 80 = 12\\,000\\text{ m}^2$. Số thóc = $(12\\,000 : 100) \\times 65 = 7800\\text{ kg} = 7,8\\text{ tấn}$.",
        "explanation": "$7,8\\text{ tấn}$."
      },
      {
        "id": "m18-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một khu đô thị có diện tích $64\\text{ ha}$. Người ta dùng $\\frac{1}{4}$ diện tích làm nhà ở, $\\frac{3}{8}$ diện tích làm đường giao thông, diện tích còn lại làm công viên cây xanh. Diện tích công viên cây xanh là:",
        "options": [
          "$24\\text{ ha}$",
          "$16\\text{ ha}$",
          "$32\\text{ ha}$",
          "$20\\text{ ha}$"
        ],
        "correctAnswer": "$24\\text{ ha}$",
        "hint": "Phần diện tích công viên = $1 - (\\frac{1}{4} + \\frac{3}{8}) = 1 - \\frac{5}{8} = \\frac{3}{8}$. Diện tích = $64 \\times \\frac{3}{8} = 24\\text{ ha}$.",
        "explanation": "$24\\text{ ha}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m18-s1",
        "prompt": "$10\\text{ ha} = ...\\text{ m}^2$",
        "options": [
          "$100\\,000\\text{ m}^2$",
          "$10\\,000\\text{ m}^2$",
          "$1\\,000\\,000\\text{ m}^2$",
          "$1000\\text{ m}^2$"
        ],
        "correctAnswer": "$100\\,000\\text{ m}^2$",
        "explanation": "$100\\,000\\text{ m}^2$."
      },
      {
        "id": "m18-s2",
        "prompt": "$100\\text{ ha} = ...\\text{ km}^2$",
        "options": [
          "$1\\text{ km}^2$",
          "$10\\text{ km}^2$",
          "$0,1\\text{ km}^2$",
          "$100\\text{ km}^2$"
        ],
        "correctAnswer": "$1\\text{ km}^2$",
        "explanation": "$1\\text{ km}^2$."
      },
      {
        "id": "m18-s3",
        "prompt": "$0,5\\text{ km}^2 = ...\\text{ ha}$",
        "options": [
          "$50\\text{ ha}$",
          "$5\\text{ ha}$",
          "$500\\text{ ha}$",
          "$5000\\text{ ha}$"
        ],
        "correctAnswer": "$50\\text{ ha}$",
        "explanation": "$50\\text{ ha}$."
      }
    ]
  },
  "math-bai-19": {
    "practiceQuestions": [
      {
        "id": "m19-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Khi đặt tính cộng hai số thập phân, ta phải đặt như thế nào?",
        "options": [
          "Các chữ số ở cùng một hàng đặt thẳng cột với nhau và dấu phẩy thẳng cột",
          "Đặt thẳng cột về bên phải như số tự nhiên",
          "Đặt thẳng cột về bên trái",
          "Không cần đặt thẳng hàng"
        ],
        "correctAnswer": "Các chữ số ở cùng một hàng đặt thẳng cột với nhau và dấu phẩy thẳng cột",
        "hint": "Quy tắc: dấu phẩy đặt thẳng cột với nhau.",
        "explanation": "Dấu phẩy và các hàng tương ứng phải thẳng cột."
      },
      {
        "id": "m19-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $15,8 + 7,4 = ?$",
        "options": [
          "23,2",
          "22,2",
          "23,12",
          "22,12"
        ],
        "correctAnswer": "23,2",
        "hint": "$8 + 4 = 12$ viết 2 nhớ 1; $15 + 7 + 1 = 23$.",
        "explanation": "$15,8 + 7,4 = 23,2$."
      },
      {
        "id": "m19-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $38,65 + 14,8 = ?$",
        "options": [
          "53,45",
          "52,45",
          "53,73",
          "52,73"
        ],
        "correctAnswer": "53,45",
        "hint": "Coi $14,8$ là $14,80$: $38,65 + 14,80 = 53,45$.",
        "explanation": "$53,45$."
      },
      {
        "id": "m19-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức thuận tiện nhất: $12,7 + 5,84 + 7,3$:",
        "options": [
          "25,84",
          "24,84",
          "26,84",
          "25,0"
        ],
        "correctAnswer": "25,84",
        "hint": "$(12,7 + 7,3) + 5,84 = 20 + 5,84 = 25,84$.",
        "explanation": "$25,84$."
      },
      {
        "id": "m19-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người thợ dệt ngày thứ nhất dệt được $28,4\\text{ m}$ vải, ngày thứ hai dệt được nhiều hơn ngày thứ nhất $3,2\\text{ m}$ vải. Cả hai ngày người đó dệt được:",
        "options": [
          "$60\\text{ m}$",
          "$59,6\\text{ m}$",
          "$31,6\\text{ m}$",
          "$60,2\\text{ m}$"
        ],
        "correctAnswer": "$60\\text{ m}$",
        "hint": "Ngày 2: $28,4 + 3,2 = 31,6\\text{ m}$. Cả hai ngày: $28,4 + 31,6 = 60\\text{ m}$.",
        "explanation": "$60\\text{ m}$."
      },
      {
        "id": "m19-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm $x$, biết: $x - 14,25 = 26,75$:",
        "options": [
          "41",
          "40,5",
          "41,5",
          "12,5"
        ],
        "correctAnswer": "41",
        "hint": "$x = 26,75 + 14,25 = 41$.",
        "explanation": "$x = 41$."
      },
      {
        "id": "m19-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính tổng: $1,2 + 2,3 + 3,4 + 4,5 + 5,6 + 6,7 + 7,8 + 8,9 = ?$",
        "options": [
          "40,4",
          "40,2",
          "39,8",
          "41,2"
        ],
        "correctAnswer": "40,4",
        "hint": "Ghép cặp: $(1,2 + 8,9) + (2,3 + 7,8) + (3,4 + 6,7) + (4,5 + 5,6) = 10,1 \\times 4 = 40,4$.",
        "explanation": "$40,4$."
      },
      {
        "id": "m19-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tổng của ba số bằng 45,6. Tổng của số thứ nhất và số thứ hai là 28,4. Tổng của số thứ hai và số thứ ba là 31,8. Số thứ hai là:",
        "options": [
          "14,6",
          "13,8",
          "17,2",
          "15,4"
        ],
        "correctAnswer": "14,6",
        "hint": "Số thứ ba = $45,6 - 28,4 = 17,2$. Số thứ hai = $31,8 - 17,2 = 14,6$.",
        "explanation": "Số thứ hai là 14,6."
      }
    ],
    "speedQuestions": [
      {
        "id": "m19-s1",
        "prompt": "$2,5 + 3,5 = ?$",
        "options": [
          "6",
          "5",
          "6,5",
          "7"
        ],
        "correctAnswer": "6",
        "explanation": "6."
      },
      {
        "id": "m19-s2",
        "prompt": "$0,45 + 0,55 = ?$",
        "options": [
          "1",
          "0,1",
          "1,1",
          "0,9"
        ],
        "correctAnswer": "1",
        "explanation": "1."
      },
      {
        "id": "m19-s3",
        "prompt": "$12,3 + 0,7 = ?$",
        "options": [
          "13",
          "12,1",
          "13,1",
          "12"
        ],
        "correctAnswer": "13",
        "explanation": "13."
      }
    ]
  },
  "math-bai-20": {
    "practiceQuestions": [
      {
        "id": "m20-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $45,8 - 19,3 = ?$",
        "options": [
          "26,5",
          "25,5",
          "26,15",
          "25,8"
        ],
        "correctAnswer": "26,5",
        "hint": "Đặt tính thẳng cột dấu phẩy: $45,8 - 19,3 = 26,5$.",
        "explanation": "26,5."
      },
      {
        "id": "m20-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Khi thực hiện phép tính $54 - 27,45$, ta coi số 54 là:",
        "options": [
          "54,00",
          "54,0",
          "0,54",
          "540"
        ],
        "correctAnswer": "54,00",
        "hint": "Viết thêm các chữ số 0 vào phần thập phân để có số chữ số bằng nhau.",
        "explanation": "$54 = 54,00$."
      },
      {
        "id": "m20-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính kết quả: $75 - 28,64 = ?$",
        "options": [
          "46,36",
          "47,36",
          "46,46",
          "47,46"
        ],
        "correctAnswer": "46,36",
        "hint": "$75,00 - 28,64 = 46,36$.",
        "explanation": "46,36."
      },
      {
        "id": "m20-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm $y$, biết: $85,6 - y = 32,85$:",
        "options": [
          "52,75",
          "53,75",
          "118,45",
          "52,85"
        ],
        "correctAnswer": "52,75",
        "hint": "$y = 85,6 - 32,85 = 52,75$.",
        "explanation": "$y = 52,75$."
      },
      {
        "id": "m20-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cuộn dây điện dài $50\\text{ m}$. Lần thứ nhất người ta cắt $16,5\\text{ m}$, lần thứ hai cắt tiếp $18,75\\text{ m}$. Cuộn dây còn lại:",
        "options": [
          "$14,75\\text{ m}$",
          "$15,25\\text{ m}$",
          "$14,25\\text{ m}$",
          "$15,75\\text{ m}$"
        ],
        "correctAnswer": "$14,75\\text{ m}$",
        "hint": "Cả 2 lần cắt: $16,5 + 18,75 = 35,25\\text{ m}$. Còn lại: $50 - 35,25 = 14,75\\text{ m}$.",
        "explanation": "$14,75\\text{ m}$."
      },
      {
        "id": "m20-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính thuận tiện giá trị: $47,65 - 18,2 - 11,8$:",
        "options": [
          "17,65",
          "18,65",
          "16,65",
          "17,45"
        ],
        "correctAnswer": "17,65",
        "hint": "$47,65 - (18,2 + 11,8) = 47,65 - 30 = 17,65$.",
        "explanation": "17,65."
      },
      {
        "id": "m20-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Hiệu của hai số là 15,3. Nếu bớt ở số bị trừ 2,5 và thêm vào số trừ 1,8 thì hiệu mới là:",
        "options": [
          "11",
          "14,6",
          "16",
          "19,6"
        ],
        "correctAnswer": "11",
        "hint": "Bớt số bị trừ làm hiệu giảm 2,5; thêm số trừ làm hiệu giảm 1,8. Hiệu mới = $15,3 - 2,5 - 1,8 = 11$.",
        "explanation": "Hiệu mới là 11."
      },
      {
        "id": "m20-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thùng chứa đầy dầu nặng $48\\text{ kg}$. Sau khi lấy ra $\\frac{1}{2}$ lượng dầu thì thùng dầu nặng $25,5\\text{ kg}$. Hỏi vỏ thùng nặng bao nhiêu ki-lô-gam?",
        "options": [
          "$3\\text{ kg}$",
          "$2,5\\text{ kg}$",
          "$4\\text{ kg}$",
          "$3,5\\text{ kg}$"
        ],
        "correctAnswer": "$3\\text{ kg}$",
        "hint": "Khối lượng $\\frac{1}{2}$ lượng dầu = $48 - 25,5 = 22,5\\text{ kg}$. Toàn bộ dầu = $22,5 \\times 2 = 45\\text{ kg}$. Vỏ thùng = $48 - 45 = 3\\text{ kg}$.",
        "explanation": "Vỏ thùng nặng 3 kg."
      }
    ],
    "speedQuestions": [
      {
        "id": "m20-s1",
        "prompt": "$10 - 4,5 = ?$",
        "options": [
          "5,5",
          "6,5",
          "5",
          "6"
        ],
        "correctAnswer": "5,5",
        "explanation": "5,5."
      },
      {
        "id": "m20-s2",
        "prompt": "$1 - 0,35 = ?$",
        "options": [
          "0,65",
          "0,75",
          "0,55",
          "0,6"
        ],
        "correctAnswer": "0,65",
        "explanation": "0,65."
      },
      {
        "id": "m20-s3",
        "prompt": "$8,7 - 3,2 = ?$",
        "options": [
          "5,5",
          "5,2",
          "5,7",
          "5,9"
        ],
        "correctAnswer": "5,5",
        "explanation": "5,5."
      }
    ]
  },
  "math-bai-21": {
    "practiceQuestions": [
      {
        "id": "m21-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $3,4 \\times 5 = ?$",
        "options": [
          "17",
          "17,5",
          "15,2",
          "170"
        ],
        "correctAnswer": "17",
        "hint": "$34 \\times 5 = 170$, tách 1 chữ số thập phân được 17,0 = 17.",
        "explanation": "$17$."
      },
      {
        "id": "m21-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong tích $4,25 \\times 1,3$, phần thập phân của tích có bao nhiêu chữ số?",
        "options": [
          "3 chữ số",
          "2 chữ số",
          "1 chữ số",
          "4 chữ số"
        ],
        "correctAnswer": "3 chữ số",
        "hint": "Thừa số thứ nhất có 2 chữ số thập phân, thừa số thứ hai có 1 chữ số thập phân: $2 + 1 = 3$.",
        "explanation": "Có 3 chữ số ở phần thập phân."
      },
      {
        "id": "m21-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $14,25 \\times 3,6 = ?$",
        "options": [
          "51,3",
          "51,35",
          "5,13",
          "513"
        ],
        "correctAnswer": "51,3",
        "hint": "$1425 \\times 36 = 51300$, lùi 3 chữ số thập phân được 51,3.",
        "explanation": "51,3."
      },
      {
        "id": "m21-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính thuận tiện: $0,25 \\times 4,8 \\times 4$:",
        "options": [
          "4,8",
          "48",
          "0,48",
          "1,2"
        ],
        "correctAnswer": "4,8",
        "hint": "$(0,25 \\times 4) \\times 4,8 = 1 \\times 4,8 = 4,8$.",
        "explanation": "4,8."
      },
      {
        "id": "m21-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một can chứa $15\\text{ l}$ dầu hoả. Biết $1\\text{ l}$ dầu nặng $0,8\\text{ kg}$ và can rỗng nặng $1,2\\text{ kg}$. Hỏi cả can dầu nặng bao nhiêu ki-lô-gam?",
        "options": [
          "$13,2\\text{ kg}$",
          "$12\\text{ kg}$",
          "$14\\text{ kg}$",
          "$12,8\\text{ kg}$"
        ],
        "correctAnswer": "$13,2\\text{ kg}$",
        "hint": "Dầu nặng: $15 \\times 0,8 = 12\\text{ kg}$. Cả can nặng: $12 + 1,2 = 13,2\\text{ kg}$.",
        "explanation": "$13,2\\text{ kg}$."
      },
      {
        "id": "m21-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $0,98 \\times 4,5 \\; ... \\; 4,5$:",
        "options": [
          "<",
          ">",
          "=",
          "Không xác định"
        ],
        "correctAnswer": "<",
        "hint": "Một số nhân với một số nhỏ hơn 1 thì tích nhỏ hơn số ban đầu.",
        "explanation": "Vì $0,98 < 1$ nên $0,98 \\times 4,5 < 4,5$."
      },
      {
        "id": "m21-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $1,25 \\times 3,7 \\times 8 + 6,3 \\times 10$:",
        "options": [
          "100",
          "90",
          "85",
          "110"
        ],
        "correctAnswer": "100",
        "hint": "$(1,25 \\times 8) \\times 3,7 + 63 = 10 \\times 3,7 + 63 = 37 + 63 = 100$.",
        "explanation": "100."
      },
      {
        "id": "m21-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Khi nhân một số với 3,5, một bạn đã quên dấu phẩy ở thừa số thứ hai nên được kết quả là 560. Tích đúng của phép nhân là:",
        "options": [
          "56",
          "5,6",
          "5600",
          "0,56"
        ],
        "correctAnswer": "56",
        "hint": "Quên dấu phẩy tức là đã gấp thừa số đó lên 10 lần. Tích đúng = $560 : 10 = 56$.",
        "explanation": "Tích đúng là 56."
      }
    ],
    "speedQuestions": [
      {
        "id": "m21-s1",
        "prompt": "$0,5 \\times 8 = ?$",
        "options": [
          "4",
          "40",
          "0,4",
          "4,5"
        ],
        "correctAnswer": "4",
        "explanation": "4."
      },
      {
        "id": "m21-s2",
        "prompt": "$1,2 \\times 3 = ?$",
        "options": [
          "3,6",
          "36",
          "0,36",
          "3,2"
        ],
        "correctAnswer": "3,6",
        "explanation": "3,6."
      },
      {
        "id": "m21-s3",
        "prompt": "$0,25 \\times 4 = ?$",
        "options": [
          "1",
          "0,1",
          "10",
          "0,5"
        ],
        "correctAnswer": "1",
        "explanation": "1."
      }
    ]
  },
  "math-bai-22": {
    "practiceQuestions": [
      {
        "id": "m22-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $21,6 : 6 = ?$",
        "options": [
          "3,6",
          "0,36",
          "36",
          "3,5"
        ],
        "correctAnswer": "3,6",
        "hint": "$21 : 6 = 3$ dư 3, đánh dấu phẩy ở thương, hạ 6 được $36 : 6 = 6$.",
        "explanation": "3,6."
      },
      {
        "id": "m22-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Khi chia số tự nhiên 7 cho 4, thương dưới dạng số thập phân là:",
        "options": [
          "1,75",
          "1,7",
          "1,85",
          "1,5"
        ],
        "correctAnswer": "1,75",
        "hint": "$7 : 4 = 1$ dư 3, viết phẩy rồi thêm 0: $30 : 4 = 7$ dư 2, thêm 0: $20 : 4 = 5$.",
        "explanation": "1,75."
      },
      {
        "id": "m22-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính kết quả phép chia: $48 : 1,2 = ?$",
        "options": [
          "40",
          "4",
          "400",
          "0,4"
        ],
        "correctAnswer": "40",
        "hint": "Đổi thành $480 : 12 = 40$.",
        "explanation": "40."
      },
      {
        "id": "m22-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $17,55 : 3,9 = ?$",
        "options": [
          "4,5",
          "4,05",
          "45",
          "0,45"
        ],
        "correctAnswer": "4,5",
        "hint": "Cùng dịch dấu phẩy: $175,5 : 39 = 4,5$.",
        "explanation": "4,5."
      },
      {
        "id": "m22-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một thanh sắt dài $1,8\\text{ m}$ nặng $14,4\\text{ kg}$. Hỏi một thanh sắt cùng loại dài $2,5\\text{ m}$ nặng bao nhiêu ki-lô-gam?",
        "options": [
          "$20\\text{ kg}$",
          "$18\\text{ kg}$",
          "$22\\text{ kg}$",
          "$16\\text{ kg}$"
        ],
        "correctAnswer": "$20\\text{ kg}$",
        "hint": "$1\\text{ m}$ nặng: $14,4 : 1,8 = 8\\text{ kg}$. $2,5\\text{ m}$ nặng: $8 \\times 2,5 = 20\\text{ kg}$.",
        "explanation": "$20\\text{ kg}$."
      },
      {
        "id": "m22-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm $x$, biết: $x \\times 4,5 = 31,5$:",
        "options": [
          "7",
          "7,5",
          "6,5",
          "8"
        ],
        "correctAnswer": "7",
        "hint": "$x = 31,5 : 4,5 = 315 : 45 = 7$.",
        "explanation": "$x = 7$."
      },
      {
        "id": "m22-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trong phép chia $21,8 : 3,7$, nếu lấy thương có 2 chữ số ở phần thập phân thì số dư là:",
        "options": [
          "0,007",
          "0,07",
          "0,7",
          "7"
        ],
        "correctAnswer": "0,007",
        "hint": "$21,8 - 3,7 \\times 5,89 = 21,8 - 21,793 = 0,007$.",
        "explanation": "Số dư là 0,007."
      },
      {
        "id": "m22-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một chai dầu có $0,75\\text{ l}$ dầu, mỗi lít dầu hoả cân nặng $0,8\\text{ kg}$. Vỏ chai cân nặng $0,15\\text{ kg}$. Hỏi 24 chai dầu như thế nặng tất cả bao nhiêu ki-lô-gam?",
        "options": [
          "$18\\text{ kg}$",
          "$16,2\\text{ kg}$",
          "$19,5\\text{ kg}$",
          "$15\\text{ kg}$"
        ],
        "correctAnswer": "$18\\text{ kg}$",
        "hint": "1 chai dầu nặng: $0,75 \\times 0,8 + 0,15 = 0,6 + 0,15 = 0,75\\text{ kg}$. 24 chai: $0,75 \\times 24 = 18\\text{ kg}$.",
        "explanation": "$18\\text{ kg}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m22-s1",
        "prompt": "$8,4 : 2 = ?$",
        "options": [
          "4,2",
          "42",
          "0,42",
          "4,4"
        ],
        "correctAnswer": "4,2",
        "explanation": "4,2."
      },
      {
        "id": "m22-s2",
        "prompt": "$15 : 0,5 = ?$",
        "options": [
          "30",
          "7,5",
          "3",
          "300"
        ],
        "correctAnswer": "30",
        "explanation": "Chia cho 0,5 là gấp đôi: $15 \\times 2 = 30$."
      },
      {
        "id": "m22-s3",
        "prompt": "$4,5 : 9 = ?$",
        "options": [
          "0,5",
          "5",
          "0,05",
          "50"
        ],
        "correctAnswer": "0,5",
        "explanation": "0,5."
      }
    ]
  },
  "math-bai-23": {
    "practiceQuestions": [
      {
        "id": "m23-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Khi nhân một số thập phân với 10, 100, 1000,... ta chỉ việc:",
        "options": [
          "Chuyển dấu phẩy của số đó lần lượt sang bên phải 1, 2, 3,... chữ số",
          "Chuyển dấu phẩy của số đó lần lượt sang bên trái 1, 2, 3,... chữ số",
          "Thêm chữ số 0 vào trước số đó",
          "Bỏ dấu phẩy đi"
        ],
        "correctAnswer": "Chuyển dấu phẩy của số đó lần lượt sang bên phải 1, 2, 3,... chữ số",
        "hint": "Nhân với 10, 100... làm số lớn lên nên dấu phẩy dịch sang phải.",
        "explanation": "Dịch dấu phẩy sang bên phải."
      },
      {
        "id": "m23-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính nhẩm: $3,456 \\times 100 = ?$",
        "options": [
          "345,6",
          "34,56",
          "3456",
          "0,03456"
        ],
        "correctAnswer": "345,6",
        "hint": "Dịch dấu phẩy sang phải 2 chữ số.",
        "explanation": "345,6."
      },
      {
        "id": "m23-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính nhẩm: $78,4 : 100 = ?$",
        "options": [
          "0,784",
          "7,84",
          "7840",
          "0,0784"
        ],
        "correctAnswer": "0,784",
        "hint": "Chia cho 100 thì chuyển dấu phẩy sang trái 2 chữ số.",
        "explanation": "0,784."
      },
      {
        "id": "m23-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Nhân một số với $0,1$ cũng chính là:",
        "options": [
          "Chia số đó cho 10",
          "Nhân số đó với 10",
          "Chia số đó cho 100",
          "Cộng thêm 0,1"
        ],
        "correctAnswer": "Chia số đó cho 10",
        "hint": "$a \\times 0,1 = a \\times \\frac{1}{10} = a : 10$.",
        "explanation": "Nhân với 0,1 bằng chia cho 10."
      },
      {
        "id": "m23-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chia một số cho $0,25$ cũng tương đương với:",
        "options": [
          "Nhân số đó với 4",
          "Chia số đó cho 4",
          "Nhân số đó với 25",
          "Chia số đó cho 25"
        ],
        "correctAnswer": "Nhân số đó với 4",
        "hint": "$a : 0,25 = a : \\frac{1}{4} = a \\times 4$.",
        "explanation": "Chia cho 0,25 bằng nhân với 4."
      },
      {
        "id": "m23-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính nhanh giá trị: $14,5 \\times 101 - 14,5$:",
        "options": [
          "1450",
          "145",
          "14,5",
          "1464,5"
        ],
        "correctAnswer": "1450",
        "hint": "$14,5 \\times (101 - 1) = 14,5 \\times 100 = 1450$.",
        "explanation": "1450."
      },
      {
        "id": "m23-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nếu dời dấu phẩy của một số thập phân sang bên phải một chữ số thì số đó tăng thêm $53,1$ đơn vị. Số thập phân ban đầu là:",
        "options": [
          "5,9",
          "5,31",
          "0,59",
          "59"
        ],
        "correctAnswer": "5,9",
        "hint": "Dời dấu phẩy sang phải một chữ số thì số đó gấp 10 lần. Hiệu số phần: $10 - 1 = 9$ phần. Số ban đầu = $53,1 : 9 = 5,9$.",
        "explanation": "Số ban đầu là 5,9."
      },
      {
        "id": "m23-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm một số thập phân biết rằng nếu dời dấu phẩy của số đó sang bên trái hai chữ số thì được số mới kém số phải tìm $244,53$ đơn vị:",
        "options": [
          "247",
          "2,47",
          "24,7",
          "2470"
        ],
        "correctAnswer": "247",
        "hint": "Dời dấu phẩy sang trái 2 chữ số thì số đó giảm đi 100 lần. Số cũ là 100 phần, số mới 1 phần. Hiệu = 99 phần. Số ban đầu = $244,53 : 99 \\times 100 = 247$.",
        "explanation": "Số đó là 247."
      }
    ],
    "speedQuestions": [
      {
        "id": "m23-s1",
        "prompt": "$4,2 \\times 10 = ?$",
        "options": [
          "42",
          "420",
          "0,42",
          "4,20"
        ],
        "correctAnswer": "42",
        "explanation": "42."
      },
      {
        "id": "m23-s2",
        "prompt": "$25 : 10 = ?$",
        "options": [
          "2,5",
          "0,25",
          "250",
          "25"
        ],
        "correctAnswer": "2,5",
        "explanation": "2,5."
      },
      {
        "id": "m23-s3",
        "prompt": "$8,5 \\times 0,1 = ?$",
        "options": [
          "0,85",
          "85",
          "0,085",
          "8,50"
        ],
        "correctAnswer": "0,85",
        "explanation": "0,85."
      }
    ]
  },
  "math-bai-24": {
    "practiceQuestions": [
      {
        "id": "m24-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $12,5 \\times 0,4 = ?$",
        "options": [
          "5",
          "50",
          "0,5",
          "4,8"
        ],
        "correctAnswer": "5",
        "hint": "$125 \\times 4 = 500$, lùi 2 chữ số thập phân được 5,00 = 5.",
        "explanation": "5."
      },
      {
        "id": "m24-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $3,6 : 0,01 = ?$",
        "options": [
          "360",
          "36",
          "0,036",
          "3600"
        ],
        "correctAnswer": "360",
        "hint": "Chia cho 0,01 tương đương nhân với 100.",
        "explanation": "$3,6 \\times 100 = 360$."
      },
      {
        "id": "m24-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Giá trị của biểu thức: $(15,3 + 4,7) \\times 2,5$ là:",
        "options": [
          "50",
          "45",
          "52,5",
          "48"
        ],
        "correctAnswer": "50",
        "hint": "$20 \\times 2,5 = 50$.",
        "explanation": "50."
      },
      {
        "id": "m24-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $72,5 - 12,5 : 0,5$:",
        "options": [
          "47,5",
          "120",
          "45",
          "60"
        ],
        "correctAnswer": "47,5",
        "hint": "Nhân chia trước: $12,5 : 0,5 = 25$. Sau đó: $72,5 - 25 = 47,5$.",
        "explanation": "47,5."
      },
      {
        "id": "m24-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính bằng cách thuận tiện nhất: $8,4 \\times 3,6 + 8,4 \\times 6,4$:",
        "options": [
          "84",
          "8,4",
          "840",
          "72"
        ],
        "correctAnswer": "84",
        "hint": "$8,4 \\times (3,6 + 6,4) = 8,4 \\times 10 = 84$.",
        "explanation": "84."
      },
      {
        "id": "m24-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một ô tô trong $2,5\\text{ giờ}$ đi được $115\\text{ km}$. Trong $3,5\\text{ giờ}$ ô tô đó đi được quãng đường là:",
        "options": [
          "$161\\text{ km}$",
          "$150\\text{ km}$",
          "$155\\text{ km}$",
          "$165\\text{ km}$"
        ],
        "correctAnswer": "$161\\text{ km}$",
        "hint": "1 giờ đi được: $115 : 2,5 = 46\\text{ km}$. Trong 3,5 giờ: $46 \\times 3,5 = 161\\text{ km}$.",
        "explanation": "$161\\text{ km}$."
      },
      {
        "id": "m24-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $\\frac{0,8 \\times 0,04 \\times 1,25 \\times 25 + 0,6524}{0,3 \\times 100 - 29}$:",
        "options": [
          "1,6524",
          "1",
          "0,6524",
          "2"
        ],
        "correctAnswer": "1,6524",
        "hint": "Tử số: $(0,8 \\times 1,25) \\times (0,04 \\times 25) + 0,6524 = 1 \\times 1 + 0,6524 = 1,6524$. Mẫu số: $30 - 29 = 1$. Kết quả: $1,6524 : 1 = 1,6524$.",
        "explanation": "1,6524."
      },
      {
        "id": "m24-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Mua $3,5\\text{ kg}$ táo và $2,5\\text{ kg}$ cam hết 230 000 đồng. Mua $1,5\\text{ kg}$ táo và $2,5\\text{ kg}$ cam hết 150 000 đồng. Giá tiền $1\\text{ kg}$ táo là:",
        "options": [
          "40 000 đồng",
          "35 000 đồng",
          "45 000 đồng",
          "50 000 đồng"
        ],
        "correctAnswer": "40 000 đồng",
        "hint": "Chênh lệch tiền là do $3,5 - 1,5 = 2\\text{ kg}$ táo. 2 kg táo giá: $230\\,000 - 150\\,000 = 80\\,000$ đồng. 1 kg táo: $80\\,000 : 2 = 40\\,000$ đồng.",
        "explanation": "40 000 đồng/kg."
      }
    ],
    "speedQuestions": [
      {
        "id": "m24-s1",
        "prompt": "$0,6 \\times 5 = ?$",
        "options": [
          "3",
          "30",
          "0,3",
          "3,5"
        ],
        "correctAnswer": "3",
        "explanation": "3."
      },
      {
        "id": "m24-s2",
        "prompt": "$24 : 0,4 = ?$",
        "options": [
          "60",
          "6",
          "0,6",
          "600"
        ],
        "correctAnswer": "60",
        "explanation": "60."
      },
      {
        "id": "m24-s3",
        "prompt": "$5,5 + 4,5 = ?$",
        "options": [
          "10",
          "9",
          "11",
          "10,5"
        ],
        "correctAnswer": "10",
        "explanation": "10."
      }
    ]
  },
  "math-bai-25": {
    "practiceQuestions": [
      {
        "id": "m25-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Muốn tính diện tích hình tam giác ta làm thế nào?",
        "options": [
          "Lấy độ dài đáy nhân với chiều cao (cùng một đơn vị đo) rồi chia cho 2",
          "Lấy độ dài đáy nhân với chiều cao",
          "Lấy độ dài đáy cộng với chiều cao rồi chia cho 2",
          "Lấy độ dài đáy nhân với chiều cao rồi nhân 2"
        ],
        "correctAnswer": "Lấy độ dài đáy nhân với chiều cao (cùng một đơn vị đo) rồi chia cho 2",
        "hint": "Công thức tính diện tích hình tam giác là $S = (a \\times h) : 2$.",
        "explanation": "$S = (a \\times h) : 2$."
      },
      {
        "id": "m25-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính diện tích hình tam giác có độ dài đáy $12\\text{ cm}$ và chiều cao $8\\text{ cm}$:",
        "options": [
          "$48\\text{ cm}^2$",
          "$96\\text{ cm}^2$",
          "$20\\text{ cm}^2$",
          "$24\\text{ cm}^2$"
        ],
        "correctAnswer": "$48\\text{ cm}^2$",
        "hint": "$S = (12 \\times 8) : 2 = 96 : 2 = 48\\text{ cm}^2$.",
        "explanation": "$48\\text{ cm}^2$."
      },
      {
        "id": "m25-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính diện tích hình tam giác có độ dài đáy $2,5\\text{ m}$ và chiều cao $1,6\\text{ m}$:",
        "options": [
          "$2\\text{ m}^2$",
          "$4\\text{ m}^2$",
          "$2,05\\text{ m}^2$",
          "$1,95\\text{ m}^2$"
        ],
        "correctAnswer": "$2\\text{ m}^2$",
        "hint": "$S = (2,5 \\times 1,6) : 2 = 4 : 2 = 2\\text{ m}^2$.",
        "explanation": "$2\\text{ m}^2$."
      },
      {
        "id": "m25-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính diện tích hình tam giác có đáy $4\\text{ dm}$ và chiều cao $25\\text{ cm}$:",
        "options": [
          "$500\\text{ cm}^2$",
          "$1000\\text{ cm}^2$",
          "$50\\text{ cm}^2$",
          "$5\\text{ cm}^2$"
        ],
        "correctAnswer": "$500\\text{ cm}^2$",
        "hint": "Đổi $4\\text{ dm} = 40\\text{ cm}$. $S = (40 \\times 25) : 2 = 500\\text{ cm}^2$.",
        "explanation": "$500\\text{ cm}^2$ (hoặc $5\\text{ dm}^2$)."
      },
      {
        "id": "m25-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình tam giác vuông có hai cạnh góc vuông lần lượt là $6\\text{ cm}$ và $8\\text{ cm}$. Diện tích tam giác vuông đó là:",
        "options": [
          "$24\\text{ cm}^2$",
          "$48\\text{ cm}^2$",
          "$14\\text{ cm}^2$",
          "$12\\text{ cm}^2$"
        ],
        "correctAnswer": "$24\\text{ cm}^2$",
        "hint": "Diện tích tam giác vuông bằng tích hai cạnh góc vuông chia cho 2: $(6 \\times 8) : 2 = 24\\text{ cm}^2$.",
        "explanation": "$24\\text{ cm}^2$."
      },
      {
        "id": "m25-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình tam giác có diện tích $30\\text{ cm}^2$ và chiều cao $5\\text{ cm}$. Độ dài cạnh đáy tương ứng là:",
        "options": [
          "$12\\text{ cm}$",
          "$6\\text{ cm}$",
          "$3\\text{ cm}$",
          "$15\\text{ cm}$"
        ],
        "correctAnswer": "$12\\text{ cm}$",
        "hint": "Đáy = $S \\times 2 : h = 30 \\times 2 : 5 = 12\\text{ cm}$.",
        "explanation": "$12\\text{ cm}$."
      },
      {
        "id": "m25-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình tam giác có đáy $28\\text{ m}$ và chiều cao bằng $\\frac{3}{4}$ đáy. Người ta thu hoạch được bao nhiêu tạ thóc nếu trung bình mỗi mét vuông thu hoạch được $0,6\\text{ kg}$ thóc?",
        "options": [
          "$1,764\\text{ tạ}$",
          "$17,64\\text{ tạ}$",
          "$176,4\\text{ tạ}$",
          "$3,528\\text{ tạ}$"
        ],
        "correctAnswer": "$1,764\\text{ tạ}$",
        "hint": "Chiều cao = $28 \\times \\frac{3}{4} = 21\\text{ m}$. Diện tích = $(28 \\times 21) : 2 = 294\\text{ m}^2$. Số thóc = $294 \\times 0,6 = 176,4\\text{ kg} = 1,764\\text{ tạ}$.",
        "explanation": "$1,764\\text{ tạ}$ thóc."
      },
      {
        "id": "m25-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hình tam giác có diện tích $45\\text{ cm}^2$. Nếu tăng độ dài cạnh đáy thêm $4\\text{ cm}$ thì diện tích tăng thêm $12\\text{ cm}^2$. Độ dài đáy ban đầu của tam giác là:",
        "options": [
          "$15\\text{ cm}$",
          "$12\\text{ cm}$",
          "$18\\text{ cm}$",
          "$10\\text{ cm}$"
        ],
        "correctAnswer": "$15\\text{ cm}$",
        "hint": "Phần diện tích tăng thêm là tam giác có đáy 4 cm và chung chiều cao với tam giác ban đầu. Chiều cao = $12 \\times 2 : 4 = 6\\text{ cm}$. Đáy ban đầu = $45 \\times 2 : 6 = 15\\text{ cm}$.",
        "explanation": "Đáy ban đầu là 15 cm."
      }
    ],
    "speedQuestions": [
      {
        "id": "m25-s1",
        "prompt": "Tam giác có đáy 10 cm, cao 6 cm có diện tích là:",
        "options": [
          "$30\\text{ cm}^2$",
          "$60\\text{ cm}^2$",
          "$16\\text{ cm}^2$",
          "$20\\text{ cm}^2$"
        ],
        "correctAnswer": "$30\\text{ cm}^2$",
        "explanation": "$30\\text{ cm}^2$."
      },
      {
        "id": "m25-s2",
        "prompt": "Tam giác vuông cạnh 3 cm và 4 cm có diện tích:",
        "options": [
          "$6\\text{ cm}^2$",
          "$12\\text{ cm}^2$",
          "$7\\text{ cm}^2$",
          "$5\\text{ cm}^2$"
        ],
        "correctAnswer": "$6\\text{ cm}^2$",
        "explanation": "$6\\text{ cm}^2$."
      },
      {
        "id": "m25-s3",
        "prompt": "Nếu gấp đáy tam giác lên 2 lần và giữ nguyên chiều cao thì diện tích:",
        "options": [
          "Gấp 2 lần",
          "Không đổi",
          "Gấp 4 lần",
          "Giảm 2 lần"
        ],
        "correctAnswer": "Gấp 2 lần",
        "explanation": "Gấp 2 lần."
      }
    ]
  },
  "math-bai-26": {
    "practiceQuestions": [
      {
        "id": "m26-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình thang là hình tứ giác có đặc điểm gì?",
        "options": [
          "Có một cặp cạnh đối diện song song",
          "Có hai cặp cạnh đối diện song song",
          "Có bốn cạnh bằng nhau",
          "Có 4 góc vuông"
        ],
        "correctAnswer": "Có một cặp cạnh đối diện song song",
        "hint": "Hai cạnh song song được gọi là hai cạnh đáy.",
        "explanation": "Hình thang có một cặp cạnh đối diện song song."
      },
      {
        "id": "m26-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Công thức tính diện tích hình thang có đáy lớn $a$, đáy bé $b$ và chiều cao $h$ là:",
        "options": [
          "$S = (a + b) \\times h : 2$",
          "$S = (a + b) \\times h$",
          "$S = a \\times b \\times h : 2$",
          "$S = (a + b) : 2$"
        ],
        "correctAnswer": "$S = (a + b) \\times h : 2$",
        "hint": "Đáy lớn đáy nhỏ ta mang cộng vào, rồi đem nhân với chiều cao, chia đôi lấy nửa thế nào cũng ra.",
        "explanation": "$S = (a + b) \\times h : 2$."
      },
      {
        "id": "m26-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính diện tích hình thang có đáy lớn $14\\text{ cm}$, đáy bé $10\\text{ cm}$ và chiều cao $6\\text{ cm}$:",
        "options": [
          "$72\\text{ cm}^2$",
          "$144\\text{ cm}^2$",
          "$60\\text{ cm}^2$",
          "$84\\text{ cm}^2$"
        ],
        "correctAnswer": "$72\\text{ cm}^2$",
        "hint": "$S = (14 + 10) \\times 6 : 2 = 24 \\times 3 = 72\\text{ cm}^2$.",
        "explanation": "$72\\text{ cm}^2$."
      },
      {
        "id": "m26-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình thang có tổng độ dài hai đáy là $25\\text{ m}$ và chiều cao $12\\text{ m}$. Diện tích hình thang là:",
        "options": [
          "$150\\text{ m}^2$",
          "$300\\text{ m}^2$",
          "$75\\text{ m}^2$",
          "$180\\text{ m}^2$"
        ],
        "correctAnswer": "$150\\text{ m}^2$",
        "hint": "$S = 25 \\times 12 : 2 = 150\\text{ m}^2$.",
        "explanation": "$150\\text{ m}^2$."
      },
      {
        "id": "m26-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình thang có diện tích $84\\text{ cm}^2$, chiều cao $7\\text{ cm}$. Trung bình cộng hai đáy của hình thang là:",
        "options": [
          "$12\\text{ cm}$",
          "$24\\text{ cm}$",
          "$6\\text{ cm}$",
          "$14\\text{ cm}$"
        ],
        "correctAnswer": "$12\\text{ cm}$",
        "hint": "Trung bình cộng hai đáy = $(a + b) : 2 = S : h = 84 : 7 = 12\\text{ cm}$.",
        "explanation": "$12\\text{ cm}$."
      },
      {
        "id": "m26-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình thang có đáy lớn $45\\text{ m}$, đáy bé bằng $\\frac{2}{3}$ đáy lớn, chiều cao $24\\text{ m}$. Diện tích thửa ruộng là:",
        "options": [
          "$900\\text{ m}^2$",
          "$1800\\text{ m}^2$",
          "$720\\text{ m}^2$",
          "$1080\\text{ m}^2$"
        ],
        "correctAnswer": "$900\\text{ m}^2$",
        "hint": "Đáy bé = $45 \\times \\frac{2}{3} = 30\\text{ m}$. Tổng 2 đáy = $45 + 30 = 75\\text{ m}$. $S = 75 \\times 24 : 2 = 900\\text{ m}^2$.",
        "explanation": "$900\\text{ m}^2$."
      },
      {
        "id": "m26-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hình thang có diện tích $110\\text{ cm}^2$, chiều cao $10\\text{ cm}$. Đáy lớn hơn đáy bé $6\\text{ cm}$. Độ dài đáy lớn là:",
        "options": [
          "$14\\text{ cm}$",
          "$8\\text{ cm}$",
          "$17\\text{ cm}$",
          "$11\\text{ cm}$"
        ],
        "correctAnswer": "$14\\text{ cm}$",
        "hint": "Tổng hai đáy = $110 \\times 2 : 10 = 22\\text{ cm}$. Đáy lớn = $(22 + 6) : 2 = 14\\text{ cm}$.",
        "explanation": "Đáy lớn là 14 cm."
      },
      {
        "id": "m26-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình thang có diện tích $360\\text{ m}^2$, nếu mở rộng đáy lớn thêm $5\\text{ m}$ thì diện tích tăng thêm $40\\text{ m}^2$. Chiều cao thửa ruộng hình thang là:",
        "options": [
          "$16\\text{ m}$",
          "$8\\text{ m}$",
          "$12\\text{ m}$",
          "$20\\text{ m}$"
        ],
        "correctAnswer": "$16\\text{ m}$",
        "hint": "Diện tích tăng thêm là tam giác có đáy $5\\text{ m}$ và chung chiều cao $h$. Chiều cao = $40 \\times 2 : 5 = 16\\text{ m}$.",
        "explanation": "Chiều cao thửa ruộng là 16 m."
      }
    ],
    "speedQuestions": [
      {
        "id": "m26-s1",
        "prompt": "Hình thang có 2 đáy là 4 cm và 6 cm, cao 5 cm có diện tích:",
        "options": [
          "$25\\text{ cm}^2$",
          "$50\\text{ cm}^2$",
          "$20\\text{ cm}^2$",
          "$15\\text{ cm}^2$"
        ],
        "correctAnswer": "$25\\text{ cm}^2$",
        "explanation": "$(4+6) \\times 5 : 2 = 25\\text{ cm}^2$."
      },
      {
        "id": "m26-s2",
        "prompt": "Hình thang vuông có mấy góc vuông?",
        "options": [
          "2 góc",
          "1 góc",
          "3 góc",
          "4 góc"
        ],
        "correctAnswer": "2 góc",
        "explanation": "2 góc vuông."
      },
      {
        "id": "m26-s3",
        "prompt": "Nếu tổng 2 đáy là 20 m và chiều cao là 4 m thì diện tích là:",
        "options": [
          "$40\\text{ m}^2$",
          "$80\\text{ m}^2$",
          "$20\\text{ m}^2$",
          "$50\\text{ m}^2$"
        ],
        "correctAnswer": "$40\\text{ m}^2$",
        "explanation": "$20 \\times 4 : 2 = 40\\text{ m}^2$."
      }
    ]
  },
  "math-bai-27": {
    "practiceQuestions": [
      {
        "id": "m27-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong một hình tròn, mối quan hệ giữa bán kính ($r$) và đường kính ($d$) là:",
        "options": [
          "$d = 2 \\times r$",
          "$r = 2 \\times d$",
          "$d = r$",
          "$d = r \\times r$"
        ],
        "correctAnswer": "$d = 2 \\times r$",
        "hint": "Đường kính dài gấp 2 lần bán kính.",
        "explanation": "$d = 2 \\times r$."
      },
      {
        "id": "m27-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Công thức tính chu vi hình tròn bán kính $r$ là:",
        "options": [
          "$C = r \\times 2 \\times 3,14$",
          "$C = r \\times r \\times 3,14$",
          "$C = r \\times 3,14$",
          "$C = r \\times 4$"
        ],
        "correctAnswer": "$C = r \\times 2 \\times 3,14$",
        "hint": "$C = d \\times 3,14 = r \\times 2 \\times 3,14$.",
        "explanation": "$C = r \\times 2 \\times 3,14$."
      },
      {
        "id": "m27-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính chu vi hình tròn có đường kính $d = 5\\text{ cm}$:",
        "options": [
          "$15,7\\text{ cm}$",
          "$31,4\\text{ cm}$",
          "$19,625\\text{ cm}$",
          "$15,4\\text{ cm}$"
        ],
        "correctAnswer": "$15,7\\text{ cm}$",
        "hint": "$C = 5 \\times 3,14 = 15,7\\text{ cm}$.",
        "explanation": "$15,7\\text{ cm}$."
      },
      {
        "id": "m27-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính diện tích hình tròn có bán kính $r = 4\\text{ cm}$:",
        "options": [
          "$50,24\\text{ cm}^2$",
          "$25,12\\text{ cm}^2$",
          "$12,56\\text{ cm}^2$",
          "$100,48\\text{ cm}^2$"
        ],
        "correctAnswer": "$50,24\\text{ cm}^2$",
        "hint": "$S = 4 \\times 4 \\times 3,14 = 16 \\times 3,14 = 50,24\\text{ cm}^2$.",
        "explanation": "$50,24\\text{ cm}^2$."
      },
      {
        "id": "m27-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình tròn có chu vi $18,84\\text{ dm}$. Bán kính của hình tròn đó là:",
        "options": [
          "$3\\text{ dm}$",
          "$6\\text{ dm}$",
          "$1,5\\text{ dm}$",
          "$4\\text{ dm}$"
        ],
        "correctAnswer": "$3\\text{ dm}$",
        "hint": "$r = 18,84 : 3,14 : 2 = 6 : 2 = 3\\text{ dm}$.",
        "explanation": "$3\\text{ dm}$."
      },
      {
        "id": "m27-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một bánh xe đạp có đường kính $0,65\\text{ m}$. Khi bánh xe lăn được 100 vòng trên mặt đất thì xe đi được quãng đường dài:",
        "options": [
          "$204,1\\text{ m}$",
          "$408,2\\text{ m}$",
          "$20,41\\text{ m}$",
          "$100\\text{ m}$"
        ],
        "correctAnswer": "$204,1\\text{ m}$",
        "hint": "Chu vi bánh xe = $0,65 \\times 3,14 = 2,041\\text{ m}$. Lăn 100 vòng = $2,041 \\times 100 = 204,1\\text{ m}$.",
        "explanation": "$204,1\\text{ m}$."
      },
      {
        "id": "m27-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nếu bán kính của một hình tròn tăng lên gấp đôi thì diện tích hình tròn đó sẽ thay đổi như thế nào?",
        "options": [
          "Tăng gấp 4 lần",
          "Tăng gấp 2 lần",
          "Tăng gấp 8 lần",
          "Không đổi"
        ],
        "correctAnswer": "Tăng gấp 4 lần",
        "hint": "$S = r \\times r \\times 3,14$. Khi $r' = 2r$ thì $S' = 2r \\times 2r \\times 3,14 = 4 \\times S$.",
        "explanation": "Diện tích tăng gấp 4 lần."
      },
      {
        "id": "m27-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bồn hoa hình tròn có bán kính $3\\text{ m}$. Người ta làm một con đường bao quanh bồn hoa đó rộng $1\\text{ m}$. Diện tích của con đường bao quanh đó là:",
        "options": [
          "$21,98\\text{ m}^2$",
          "$50,24\\text{ m}^2$",
          "$28,26\\text{ m}^2$",
          "$15,7\\text{ m}^2$"
        ],
        "correctAnswer": "$21,98\\text{ m}^2$",
        "hint": "Bán kính hình tròn lớn = $3 + 1 = 4\\text{ m}$. $S_1 = 4 \\times 4 \\times 3,14 = 50,24\\text{ m}^2$. $S_2 = 3 \\times 3 \\times 3,14 = 28,26\\text{ m}^2$. $S = 50,24 - 28,26 = 21,98\\text{ m}^2$.",
        "explanation": "$21,98\\text{ m}^2$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m27-s1",
        "prompt": "Bán kính 2 cm thì chu vi hình tròn là:",
        "options": [
          "$12,56\\text{ cm}$",
          "$6,28\\text{ cm}$",
          "$25,12\\text{ cm}$",
          "$12\\text{ cm}$"
        ],
        "correctAnswer": "$12,56\\text{ cm}$",
        "explanation": "$2 \\times 2 \\times 3,14 = 12,56\\text{ cm}$."
      },
      {
        "id": "m27-s2",
        "prompt": "Bán kính 1 dm thì diện tích hình tròn là:",
        "options": [
          "$3,14\\text{ dm}^2$",
          "$6,28\\text{ dm}^2$",
          "$1,57\\text{ dm}^2$",
          "$31,4\\text{ dm}^2$"
        ],
        "correctAnswer": "$3,14\\text{ dm}^2$",
        "explanation": "$3,14\\text{ dm}^2$."
      },
      {
        "id": "m27-s3",
        "prompt": "Đường kính 10 cm thì bán kính bằng:",
        "options": [
          "5 cm",
          "20 cm",
          "2,5 cm",
          "10 cm"
        ],
        "correctAnswer": "5 cm",
        "explanation": "5 cm."
      }
    ]
  },
  "math-bai-28": {
    "practiceQuestions": [
      {
        "id": "m28-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Để vẽ được một đường tròn có bán kính $4\\text{ cm}$, ta cần mở rộng khẩu độ hai đầu com-pa một khoảng bằng:",
        "options": [
          "$4\\text{ cm}$",
          "$8\\text{ cm}$",
          "$2\\text{ cm}$",
          "$12,56\\text{ cm}$"
        ],
        "correctAnswer": "$4\\text{ cm}$",
        "hint": "Khoảng cách giữa đầu kim và đầu bút chì của com-pa chính là bán kính đường tròn.",
        "explanation": "$4\\text{ cm}$."
      },
      {
        "id": "m28-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Để vẽ đường tròn có đường kính $6\\text{ cm}$, ta mở khẩu độ com-pa một đoạn dài:",
        "options": [
          "$3\\text{ cm}$",
          "$6\\text{ cm}$",
          "$12\\text{ cm}$",
          "$1,5\\text{ cm}$"
        ],
        "correctAnswer": "$3\\text{ cm}$",
        "hint": "Khẩu độ com-pa là bán kính $r = d : 2 = 6 : 2 = 3\\text{ cm}$.",
        "explanation": "$3\\text{ cm}$."
      },
      {
        "id": "m28-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cái đĩa hình tròn có bán kính $10\\text{ cm}$. Diện tích của cái đĩa đó là:",
        "options": [
          "$314\\text{ cm}^2$",
          "$62,8\\text{ cm}^2$",
          "$31,4\\text{ cm}^2$",
          "$157\\text{ cm}^2$"
        ],
        "correctAnswer": "$314\\text{ cm}^2$",
        "hint": "$S = 10 \\times 10 \\times 3,14 = 314\\text{ cm}^2$.",
        "explanation": "$314\\text{ cm}^2$."
      },
      {
        "id": "m28-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bạn Mai dùng com-pa vẽ một bông hoa 4 cánh từ các cung tròn có bán kính $2\\text{ cm}$. Đường kính của bông hoa đó là:",
        "options": [
          "$4\\text{ cm}$",
          "$2\\text{ cm}$",
          "$8\\text{ cm}$",
          "$6\\text{ cm}$"
        ],
        "correctAnswer": "$4\\text{ cm}$",
        "hint": "$d = 2 \\times r = 2 \\times 2 = 4\\text{ cm}$.",
        "explanation": "$4\\text{ cm}$."
      },
      {
        "id": "m28-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một mặt đồng hồ treo tường hình tròn có chu vi $94,2\\text{ cm}$. Đường kính của mặt đồng hồ là:",
        "options": [
          "$30\\text{ cm}$",
          "$15\\text{ cm}$",
          "$20\\text{ cm}$",
          "$25\\text{ cm}$"
        ],
        "correctAnswer": "$30\\text{ cm}$",
        "hint": "$d = C : 3,14 = 94,2 : 3,14 = 30\\text{ cm}$.",
        "explanation": "$30\\text{ cm}$."
      },
      {
        "id": "m28-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Người ta uốn một sợi dây thép thành một hình tròn có bán kính $7\\text{ dm}$. Chiều dài sợi dây thép đó là:",
        "options": [
          "$43,96\\text{ dm}$",
          "$21,98\\text{ dm}$",
          "$153,86\\text{ dm}$",
          "$44\\text{ dm}$"
        ],
        "correctAnswer": "$43,96\\text{ dm}$",
        "hint": "Chiều dài sợi dây chính là chu vi hình tròn: $C = 7 \\times 2 \\times 3,14 = 43,96\\text{ dm}$.",
        "explanation": "$43,96\\text{ dm}$."
      },
      {
        "id": "m28-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trong một hình vuông có cạnh $10\\text{ cm}$, người ta vẽ một hình tròn nội tiếp có đường kính bằng đúng cạnh hình vuông. Diện tích phần hình vuông nằm ngoài hình tròn là:",
        "options": [
          "$21,5\\text{ cm}^2$",
          "$78,5\\text{ cm}^2$",
          "$43\\text{ cm}^2$",
          "$15,7\\text{ cm}^2$"
        ],
        "correctAnswer": "$21,5\\text{ cm}^2$",
        "hint": "$S_{\\text{vuông}} = 10 \\times 10 = 100\\text{ cm}^2$. Bán kính hình tròn: $r = 5\\text{ cm}$. $S_{\\text{tròn}} = 5 \\times 5 \\times 3,14 = 78,5\\text{ cm}^2$. Phần thừa = $100 - 78,5 = 21,5\\text{ cm}^2$.",
        "explanation": "$21,5\\text{ cm}^2$."
      },
      {
        "id": "m28-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bánh xe lăn 500 vòng được quãng đường dài $1099\\text{ m}$. Bán kính của bánh xe đó là:",
        "options": [
          "$0,35\\text{ m}$",
          "$0,7\\text{ m}$",
          "$3,5\\text{ m}$",
          "$0,25\\text{ m}$"
        ],
        "correctAnswer": "$0,35\\text{ m}$",
        "hint": "Chu vi bánh xe = $1099 : 500 = 2,198\\text{ m}$. Bán kính = $2,198 : 3,14 : 2 = 0,35\\text{ m}$.",
        "explanation": "$0,35\\text{ m}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m28-s1",
        "prompt": "Vẽ hình tròn bán kính 5 cm thì com-pa mở rộng:",
        "options": [
          "5 cm",
          "10 cm",
          "2,5 cm",
          "15 cm"
        ],
        "correctAnswer": "5 cm",
        "explanation": "5 cm."
      },
      {
        "id": "m28-s2",
        "prompt": "Hình tròn đường kính 2 dm có chu vi:",
        "options": [
          "$6,28\\text{ dm}$",
          "$12,56\\text{ dm}$",
          "$3,14\\text{ dm}$",
          "$6\\text{ dm}$"
        ],
        "correctAnswer": "$6,28\\text{ dm}$",
        "explanation": "$2 \\times 3,14 = 6,28\\text{ dm}$."
      },
      {
        "id": "m28-s3",
        "prompt": "Hình tròn bán kính 10 cm có chu vi:",
        "options": [
          "$62,8\\text{ cm}$",
          "$31,4\\text{ cm}$",
          "$314\\text{ cm}$",
          "$6,28\\text{ cm}$"
        ],
        "correctAnswer": "$62,8\\text{ cm}$",
        "explanation": "$62,8\\text{ cm}$."
      }
    ]
  },
  "math-bai-29": {
    "practiceQuestions": [
      {
        "id": "m29-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình nào sau đây có công thức tính diện tích là $S = (a \\times h) : 2$?",
        "options": [
          "Hình tam giác",
          "Hình thang",
          "Hình tròn",
          "Hình chữ nhật"
        ],
        "correctAnswer": "Hình tam giác",
        "hint": "Đây là công thức diện tích tam giác đáy $a$, chiều cao $h$.",
        "explanation": "Hình tam giác."
      },
      {
        "id": "m29-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính diện tích hình tròn có đường kính $d = 2\\text{ cm}$:",
        "options": [
          "$3,14\\text{ cm}^2$",
          "$6,28\\text{ cm}^2$",
          "$12,56\\text{ cm}^2$",
          "$1,57\\text{ cm}^2$"
        ],
        "correctAnswer": "$3,14\\text{ cm}^2$",
        "hint": "Bán kính $r = 1\\text{ cm}$. $S = 1 \\times 1 \\times 3,14 = 3,14\\text{ cm}^2$.",
        "explanation": "$3,14\\text{ cm}^2$."
      },
      {
        "id": "m29-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình thang có đáy lớn $18\\text{ cm}$, đáy bé bằng $\\frac{2}{3}$ đáy lớn, chiều cao $10\\text{ cm}$. Diện tích hình thang là:",
        "options": [
          "$150\\text{ cm}^2$",
          "$300\\text{ cm}^2$",
          "$120\\text{ cm}^2$",
          "$180\\text{ cm}^2$"
        ],
        "correctAnswer": "$150\\text{ cm}^2$",
        "hint": "Đáy bé = 12 cm. Tổng 2 đáy = 30 cm. $S = (30 \\times 10) : 2 = 150\\text{ cm}^2$.",
        "explanation": "$150\\text{ cm}^2$."
      },
      {
        "id": "m29-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình tam giác có đáy $15\\text{ cm}$ và diện tích bằng diện tích một hình vuông cạnh $6\\text{ cm}$. Chiều cao của hình tam giác là:",
        "options": [
          "$4,8\\text{ cm}$",
          "$2,4\\text{ cm}$",
          "$5\\text{ cm}$",
          "$9,6\\text{ cm}$"
        ],
        "correctAnswer": "$4,8\\text{ cm}$",
        "hint": "$S = 6 \\times 6 = 36\\text{ cm}^2$. Chiều cao tam giác = $36 \\times 2 : 15 = 4,8\\text{ cm}$.",
        "explanation": "$4,8\\text{ cm}$."
      },
      {
        "id": "m29-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai hình tròn có bán kính lần lượt là $2\\text{ cm}$ và $4\\text{ cm}$. Tỉ số chu vi của hình tròn bé và hình tròn lớn là:",
        "options": [
          "$\\frac{1}{2}$",
          "$\\frac{1}{4}$",
          "$\\frac{1}{8}$",
          "$\\frac{2}{3}$"
        ],
        "correctAnswer": "$\\frac{1}{2}$",
        "hint": "Tỉ số chu vi bằng tỉ số bán kính: $2 : 4 = \\frac{1}{2}$.",
        "explanation": "$\\frac{1}{2}$."
      },
      {
        "id": "m29-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai hình tròn có bán kính lần lượt là $2\\text{ cm}$ và $4\\text{ cm}$. Tỉ số diện tích của hình tròn bé và hình tròn lớn là:",
        "options": [
          "$\\frac{1}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{1}{16}$",
          "$\\frac{1}{8}$"
        ],
        "correctAnswer": "$\\frac{1}{4}$",
        "hint": "Tỉ số diện tích bằng bình phương tỉ số bán kính: $(\\frac{1}{2})^2 = \\frac{1}{4}$.",
        "explanation": "$\\frac{1}{4}$."
      },
      {
        "id": "m29-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một mảnh đất gồm một hình chữ nhật dài $20\\text{ m}$, rộng $12\\text{ m}$ và một hình tam giác vuông có hai cạnh góc vuông là $12\\text{ m}$ và $8\\text{ m}$ gắn liền kề cạnh chiều rộng. Toàn bộ diện tích mảnh đất là:",
        "options": [
          "$288\\text{ m}^2$",
          "$336\\text{ m}^2$",
          "$240\\text{ m}^2$",
          "$300\\text{ m}^2$"
        ],
        "correctAnswer": "$288\\text{ m}^2$",
        "hint": "$S_{\\text{hcn}} = 20 \\times 12 = 240\\text{ m}^2$. $S_{\\text{tg}} = (12 \\times 8) : 2 = 48\\text{ m}^2$. Tổng = $240 + 48 = 288\\text{ m}^2$.",
        "explanation": "$288\\text{ m}^2$."
      },
      {
        "id": "m29-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Cho hình tròn tâm $O$ và một hình vuông có đỉnh là tâm $O$ và một góc trùng một góc phần tư hình tròn. Biết diện tích hình vuông là $25\\text{ cm}^2$. Diện tích hình tròn đó là:",
        "options": [
          "$78,5\\text{ cm}^2$",
          "$314\\text{ cm}^2$",
          "$157\\text{ cm}^2$",
          "$50\\text{ cm}^2$"
        ],
        "correctAnswer": "$78,5\\text{ cm}^2$",
        "hint": "Cạnh hình vuông chính là bán kính $r$ của hình tròn. Diện tích hình vuông = $r \\times r = 25\\text{ cm}^2$. Diện tích hình tròn = $r \\times r \\times 3,14 = 25 \\times 3,14 = 78,5\\text{ cm}^2$.",
        "explanation": "$78,5\\text{ cm}^2$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m29-s1",
        "prompt": "Hình tam giác có đáy 8 m, cao 5 m có diện tích là:",
        "options": [
          "$20\\text{ m}^2$",
          "$40\\text{ m}^2$",
          "$13\\text{ m}^2$",
          "$25\\text{ m}^2$"
        ],
        "correctAnswer": "$20\\text{ m}^2$",
        "explanation": "$20\\text{ m}^2$."
      },
      {
        "id": "m29-s2",
        "prompt": "Chu vi hình tròn bán kính 5 cm:",
        "options": [
          "$31,4\\text{ cm}$",
          "$15,7\\text{ cm}$",
          "$78,5\\text{ cm}$",
          "$62,8\\text{ cm}$"
        ],
        "correctAnswer": "$31,4\\text{ cm}$",
        "explanation": "$31,4\\text{ cm}$."
      },
      {
        "id": "m29-s3",
        "prompt": "Hình thang có 2 đáy là 3 m và 7 m, cao 4 m có diện tích:",
        "options": [
          "$20\\text{ m}^2$",
          "$40\\text{ m}^2$",
          "$10\\text{ m}^2$",
          "$14\\text{ m}^2$"
        ],
        "correctAnswer": "$20\\text{ m}^2$",
        "explanation": "$20\\text{ m}^2$."
      }
    ]
  },
  "math-bai-30": {
    "practiceQuestions": [
      {
        "id": "m30-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Chữ số 7 trong số thập phân $35,876$ có giá trị là:",
        "options": [
          "$\\frac{7}{100}$",
          "$\\frac{7}{10}$",
          "$\\frac{7}{1000}$",
          "7"
        ],
        "correctAnswer": "$\\frac{7}{100}$",
        "hint": "Chữ số 7 đứng ở hàng phần trăm sau dấu phẩy.",
        "explanation": "$\\frac{7}{100}$."
      },
      {
        "id": "m30-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Làm tròn số thập phân $48,265$ đến hàng phần mười được số nào?",
        "options": [
          "48,3",
          "48,2",
          "48,27",
          "49"
        ],
        "correctAnswer": "48,3",
        "hint": "Chữ số hàng phần trăm là 6 >= 5 nên làm tròn lên.",
        "explanation": "48,3."
      },
      {
        "id": "m30-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị: $15,4 + 8,76 - 9,16 = ?$",
        "options": [
          "15",
          "15,2",
          "14,8",
          "16"
        ],
        "correctAnswer": "15",
        "hint": "$15,4 + (8,76 - 9,16)$ hoặc $24,16 - 9,16 = 15$.",
        "explanation": "15."
      },
      {
        "id": "m30-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính kết quả phép tính: $2,4 \\times 3,5 + 7,6 \\times 3,5$:",
        "options": [
          "35",
          "3,5",
          "350",
          "28"
        ],
        "correctAnswer": "35",
        "hint": "$(2,4 + 7,6) \\times 3,5 = 10 \\times 3,5 = 35$.",
        "explanation": "35."
      },
      {
        "id": "m30-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm $x$, biết: $x : 2,4 = 1,5 + 3,5$:",
        "options": [
          "12",
          "5",
          "7,4",
          "2,4"
        ],
        "correctAnswer": "12",
        "hint": "$x : 2,4 = 5 \\Rightarrow x = 5 \\times 2,4 = 12$.",
        "explanation": "12."
      },
      {
        "id": "m30-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một bao gạo nặng $45\\text{ kg}$. Lần thứ nhất người ta lấy đi $0,4$ số gạo, lần thứ hai lấy đi $0,5$ số gạo còn lại. Trong bao còn lại bao nhiêu ki-lô-gam gạo?",
        "options": [
          "$13,5\\text{ kg}$",
          "$18\\text{ kg}$",
          "$27\\text{ kg}$",
          "$15\\text{ kg}$"
        ],
        "correctAnswer": "$13,5\\text{ kg}$",
        "hint": "Lần 1 lấy: $45 \\times 0,4 = 18\\text{ kg}$. Còn lại: $45 - 18 = 27\\text{ kg}$. Lần 2 lấy: $27 \\times 0,5 = 13,5\\text{ kg}$. Còn lại: $27 - 13,5 = 13,5\\text{ kg}$.",
        "explanation": "$13,5\\text{ kg}$."
      },
      {
        "id": "m30-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm hai số có tổng bằng $79,2$, biết rằng nếu dời dấu phẩy của số bé sang bên phải một hàng thì được số lớn:",
        "options": [
          "7,2 và 72",
          "6,2 và 62",
          "7,92 và 71,28",
          "8 và 71,2"
        ],
        "correctAnswer": "7,2 và 72",
        "hint": "Dời dấu phẩy sang phải 1 hàng thì số lớn gấp 10 lần số bé. Tổng số phần = $10 + 1 = 11$. Số bé = $79,2 : 11 = 7,2$. Số lớn = 72.",
        "explanation": "7,2 và 72."
      },
      {
        "id": "m30-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính nhanh giá trị của biểu thức: $\\frac{1,25 \\times 16 \\times 0,5 \\times 2,5}{0,25 \\times 8 \\times 5}$:",
        "options": [
          "2,5",
          "5",
          "1",
          "1,25"
        ],
        "correctAnswer": "2,5",
        "hint": "Tử số: $(1,25 \\times 8) \\times (2 \\times 0,5) \\times 2,5 = 10 \\times 1 \\times 2,5 = 25$. Mẫu số: $(0,25 \\times 8) \\times 5 = 2 \\times 5 = 10$. Kết quả: $25 : 10 = 2,5$.",
        "explanation": "2,5."
      }
    ],
    "speedQuestions": [
      {
        "id": "m30-s1",
        "prompt": "$0,75 + 0,25 = ?$",
        "options": [
          "1",
          "0,1",
          "10",
          "0,9"
        ],
        "correctAnswer": "1",
        "explanation": "1."
      },
      {
        "id": "m30-s2",
        "prompt": "$6,4 : 0,8 = ?$",
        "options": [
          "8",
          "0,8",
          "80",
          "7"
        ],
        "correctAnswer": "8",
        "explanation": "8."
      },
      {
        "id": "m30-s3",
        "prompt": "$1,5 \\times 4 = ?$",
        "options": [
          "6",
          "60",
          "0,6",
          "4,5"
        ],
        "correctAnswer": "6",
        "explanation": "6."
      }
    ]
  },
  "math-bai-31": {
    "practiceQuestions": [
      {
        "id": "m31-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Chọn phát biểu đúng về đơn vị đo diện tích:",
        "options": [
          "$1\\text{ ha} = 10\\,000\\text{ m}^2$",
          "$1\\text{ ha} = 1000\\text{ m}^2$",
          "$1\\text{ km}^2 = 10\\text{ ha}$",
          "$1\\text{ m}^2 = 10\\text{ dm}^2$"
        ],
        "correctAnswer": "$1\\text{ ha} = 10\\,000\\text{ m}^2$",
        "hint": "1 héc-ta bằng 10 000 mét vuông.",
        "explanation": "$1\\text{ ha} = 10\\,000\\text{ m}^2$."
      },
      {
        "id": "m31-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình tròn có bán kính $r = 5\\text{ cm}$ thì chu vi là:",
        "options": [
          "$31,4\\text{ cm}$",
          "$15,7\\text{ cm}$",
          "$78,5\\text{ cm}$",
          "$62,8\\text{ cm}$"
        ],
        "correctAnswer": "$31,4\\text{ cm}$",
        "hint": "$C = 5 \\times 2 \\times 3,14 = 31,4\\text{ cm}$.",
        "explanation": "$31,4\\text{ cm}$."
      },
      {
        "id": "m31-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình tam giác có diện tích $27\\text{ cm}^2$ và đáy $9\\text{ cm}$. Chiều cao tương ứng là:",
        "options": [
          "$6\\text{ cm}$",
          "$3\\text{ cm}$",
          "$12\\text{ cm}$",
          "$5,4\\text{ cm}$"
        ],
        "correctAnswer": "$6\\text{ cm}$",
        "hint": "$h = 27 \\times 2 : 9 = 6\\text{ cm}$.",
        "explanation": "$6\\text{ cm}$."
      },
      {
        "id": "m31-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Viết số đo thích hợp vào chỗ chấm: $3\\text{ ha}\\text{ } 450\\text{ m}^2 = ...\\text{ ha}$:",
        "options": [
          "$3,045\\text{ ha}$",
          "$3,45\\text{ ha}$",
          "$34,5\\text{ ha}$",
          "$0,345\\text{ ha}$"
        ],
        "correctAnswer": "$3,045\\text{ ha}$",
        "hint": "$450\\text{ m}^2 = 0,045\\text{ ha}$.",
        "explanation": "$3,045\\text{ ha}$."
      },
      {
        "id": "m31-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình thang có đáy lớn $2,4\\text{ m}$, đáy bé $1,6\\text{ m}$ và chiều cao $0,8\\text{ m}$. Diện tích hình thang là:",
        "options": [
          "$1,6\\text{ m}^2$",
          "$3,2\\text{ m}^2$",
          "$1,92\\text{ m}^2$",
          "$2,4\\text{ m}^2$"
        ],
        "correctAnswer": "$1,6\\text{ m}^2$",
        "hint": "$S = (2,4 + 1,6) \\times 0,8 : 2 = 4 \\times 0,4 = 1,6\\text{ m}^2$.",
        "explanation": "$1,6\\text{ m}^2$."
      },
      {
        "id": "m31-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bán kính hình tròn có diện tích $50,24\\text{ cm}^2$ là:",
        "options": [
          "$4\\text{ cm}$",
          "$2\\text{ cm}$",
          "$8\\text{ cm}$",
          "$16\\text{ cm}$"
        ],
        "correctAnswer": "$4\\text{ cm}$",
        "hint": "$r \\times r = 50,24 : 3,14 = 16 = 4 \\times 4 \\Rightarrow r = 4\\text{ cm}$.",
        "explanation": "$4\\text{ cm}$."
      },
      {
        "id": "m31-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình thang có diện tích $450\\text{ m}^2$, chiều cao $15\\text{ m}$. Đáy lớn hơn đáy bé $10\\text{ m}$. Độ dài đáy bé là:",
        "options": [
          "$25\\text{ m}$",
          "$35\\text{ m}$",
          "$20\\text{ m}$",
          "$30\\text{ m}$"
        ],
        "correctAnswer": "$25\\text{ m}$",
        "hint": "Tổng hai đáy = $450 \\times 2 : 15 = 60\\text{ m}$. Đáy bé = $(60 - 10) : 2 = 25\\text{ m}$.",
        "explanation": "Đáy bé là 25 m."
      },
      {
        "id": "m31-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hình chữ nhật có chiều dài gấp 3 lần chiều rộng. Nếu tăng chiều rộng thêm $2\\text{ m}$ và giảm chiều dài đi $2\\text{ m}$ thì diện tích tăng thêm $16\\text{ m}^2$. Diện tích ban đầu của hình chữ nhật là:",
        "options": [
          "$75\\text{ m}^2$",
          "$108\\text{ m}^2$",
          "$48\\text{ m}^2$",
          "$147\\text{ m}^2$"
        ],
        "correctAnswer": "$75\\text{ m}^2$",
        "hint": "Gọi rộng là $x$, dài $3x$. $(3x - 2)(x + 2) - 3x^2 = 16 \\Rightarrow 4x - 4 = 16 \\Rightarrow 4x = 20 \\Rightarrow x = 5$. Dài = 15. Diện tích = $15 \\times 5 = 75\\text{ m}^2$.",
        "explanation": "$75\\text{ m}^2$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m31-s1",
        "prompt": "Hình tròn đường kính 4 cm có chu vi là:",
        "options": [
          "$12,56\\text{ cm}$",
          "$6,28\\text{ cm}$",
          "$25,12\\text{ cm}$",
          "$16\\text{ cm}$"
        ],
        "correctAnswer": "$12,56\\text{ cm}$",
        "explanation": "$12,56\\text{ cm}$."
      },
      {
        "id": "m31-s2",
        "prompt": "$2\\text{ ha} = ...\\text{ m}^2$",
        "options": [
          "$20\\,000\\text{ m}^2$",
          "$2000\\text{ m}^2$",
          "$200\\text{ m}^2$",
          "$200\\,000\\text{ m}^2$"
        ],
        "correctAnswer": "$20\\,000\\text{ m}^2$",
        "explanation": "$20\\,000\\text{ m}^2$."
      },
      {
        "id": "m31-s3",
        "prompt": "Tam giác vuông có 2 cạnh 6 cm và 5 cm có diện tích:",
        "options": [
          "$15\\text{ cm}^2$",
          "$30\\text{ cm}^2$",
          "$11\\text{ cm}^2$",
          "$25\\text{ cm}^2$"
        ],
        "correctAnswer": "$15\\text{ cm}^2$",
        "explanation": "$15\\text{ cm}^2$."
      }
    ]
  },
  "math-bai-32": {
    "practiceQuestions": [
      {
        "id": "m32-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tổng của hai số là 120, tỉ số của hai số là $\\frac{2}{3}$. Số bé là:",
        "options": [
          "48",
          "72",
          "40",
          "60"
        ],
        "correctAnswer": "48",
        "hint": "Tổng số phần: $2 + 3 = 5$. Số bé: $120 : 5 \\times 2 = 48$.",
        "explanation": "48."
      },
      {
        "id": "m32-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hiệu của hai số là 45, tỉ số của hai số là $\\frac{4}{7}$. Số lớn là:",
        "options": [
          "105",
          "60",
          "90",
          "75"
        ],
        "correctAnswer": "105",
        "hint": "Hiệu số phần: $7 - 4 = 3$. Số lớn: $45 : 3 \\times 7 = 105$.",
        "explanation": "105."
      },
      {
        "id": "m32-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người mua 15 quyển vở giá 120 000 đồng. Hỏi nếu mua 25 quyển vở cùng loại thì phải trả bao nhiêu tiền?",
        "options": [
          "200 000 đồng",
          "180 000 đồng",
          "220 000 đồng",
          "250 000 đồng"
        ],
        "correctAnswer": "200 000 đồng",
        "hint": "1 quyển vở giá: $120\\,000 : 15 = 8000$ đồng. 25 quyển: $8000 \\times 25 = 200\\,000$ đồng.",
        "explanation": "200 000 đồng."
      },
      {
        "id": "m32-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Có 8 người làm xong một công việc trong 6 ngày. Muốn làm xong công việc đó trong 4 ngày thì cần bao nhiêu người (mức làm như nhau)?",
        "options": [
          "12 người",
          "10 người",
          "16 người",
          "14 người"
        ],
        "correctAnswer": "12 người",
        "hint": "Tổng số công: $8 \\times 6 = 48$ công. Trong 4 ngày cần: $48 : 4 = 12$ người.",
        "explanation": "12 người."
      },
      {
        "id": "m32-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một đội xe có 5 xe tải chở được tất cả 22,5 tấn hàng. Hỏi 8 xe tải như thế chở được bao nhiêu tấn hàng?",
        "options": [
          "36 tấn",
          "35 tấn",
          "38 tấn",
          "32 tấn"
        ],
        "correctAnswer": "36 tấn",
        "hint": "1 xe chở: $22,5 : 5 = 4,5$ tấn. 8 xe chở: $4,5 \\times 8 = 36$ tấn.",
        "explanation": "36 tấn."
      },
      {
        "id": "m32-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một mảnh đất hình chữ nhật có chu vi $120\\text{ m}$, chiều dài hơn chiều rộng $16\\text{ m}$. Diện tích mảnh đất là:",
        "options": [
          "$836\\text{ m}^2$",
          "$896\\text{ m}^2$",
          "$864\\text{ m}^2$",
          "$920\\text{ m}^2$"
        ],
        "correctAnswer": "$836\\text{ m}^2$",
        "hint": "Nửa chu vi = $60\\text{ m}$. Chiều dài = $(60 + 16) : 2 = 38\\text{ m}$. Chiều rộng = $22\\text{ m}$. Diện tích = $38 \\times 22 = 836\\text{ m}^2$.",
        "explanation": "$836\\text{ m}^2$."
      },
      {
        "id": "m32-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tuổi của hai mẹ con hiện nay cộng lại là 42 tuổi. Biết rằng sau 3 năm nữa tuổi mẹ sẽ gấp 3 lần tuổi con. Tuổi con hiện nay là:",
        "options": [
          "9 tuổi",
          "12 tuổi",
          "8 tuổi",
          "10 tuổi"
        ],
        "correctAnswer": "9 tuổi",
        "hint": "Sau 3 năm nữa tổng tuổi: $42 + 3 \\times 2 = 48$ tuổi. Tuổi con sau 3 năm: $48 : (1 + 3) = 12$ tuổi. Tuổi con hiện nay: $12 - 3 = 9$ tuổi.",
        "explanation": "Con hiện nay 9 tuổi."
      },
      {
        "id": "m32-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một người bán cam lần thứ nhất bán được $\\frac{1}{2}$ số cam và thêm 1 quả. Lần thứ hai bán $\\frac{1}{2}$ số cam còn lại và thêm 1 quả thì trong rổ còn lại đúng 8 quả. Hỏi lúc đầu trong rổ có bao nhiêu quả cam?",
        "options": [
          "38 quả",
          "36 quả",
          "40 quả",
          "34 quả"
        ],
        "correctAnswer": "38 quả",
        "hint": "Tính ngược: Trước lần 2 có: $(8 + 1) \\times 2 = 18$ quả. Lúc đầu có: $(18 + 1) \\times 2 = 38$ quả.",
        "explanation": "Lúc đầu có 38 quả cam."
      }
    ],
    "speedQuestions": [
      {
        "id": "m32-s1",
        "prompt": "Mua 3 bút giá 15 000 đồng, mua 5 bút hết:",
        "options": [
          "25 000 đồng",
          "20 000 đồng",
          "30 000 đồng",
          "15 000 đồng"
        ],
        "correctAnswer": "25 000 đồng",
        "explanation": "25 000 đồng."
      },
      {
        "id": "m32-s2",
        "prompt": "Tổng là 50, hiệu là 10, số lớn là:",
        "options": [
          "30",
          "20",
          "40",
          "35"
        ],
        "correctAnswer": "30",
        "explanation": "30."
      },
      {
        "id": "m32-s3",
        "prompt": "10 người làm xong việc trong 2 ngày, 1 người làm hết:",
        "options": [
          "20 ngày",
          "10 ngày",
          "5 ngày",
          "15 ngày"
        ],
        "correctAnswer": "20 ngày",
        "explanation": "20 ngày."
      }
    ]
  },
  "math-bai-33": {
    "practiceQuestions": [
      {
        "id": "m33-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số thập phân gồm 5 đơn vị, 8 phần trăm và 3 phần nghìn viết là:",
        "options": [
          "5,083",
          "5,83",
          "5,803",
          "5,0083"
        ],
        "correctAnswer": "5,083",
        "hint": "Hàng phần mười là 0, hàng phần trăm là 8, hàng phần nghìn là 3.",
        "explanation": "5,083."
      },
      {
        "id": "m33-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$4\\text{ ha} = ...\\text{ m}^2$:",
        "options": [
          "$40\\,000\\text{ m}^2$",
          "$4000\\text{ m}^2$",
          "$400\\text{ m}^2$",
          "$400\\,000\\text{ m}^2$"
        ],
        "correctAnswer": "$40\\,000\\text{ m}^2$",
        "hint": "$1\\text{ ha} = 10\\,000\\text{ m}^2$.",
        "explanation": "$40\\,000\\text{ m}^2$."
      },
      {
        "id": "m33-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Kết quả của phép tính: $35,8 \\times 2,4$ là:",
        "options": [
          "85,92",
          "859,2",
          "8,592",
          "71,6"
        ],
        "correctAnswer": "85,92",
        "hint": "$358 \\times 24 = 8592$, tích có 2 chữ số thập phân là 85,92.",
        "explanation": "85,92."
      },
      {
        "id": "m33-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $75,52 : 3,2 = ?$",
        "options": [
          "23,6",
          "2,36",
          "236",
          "24,6"
        ],
        "correctAnswer": "23,6",
        "hint": "$755,2 : 32 = 23,6$.",
        "explanation": "23,6."
      },
      {
        "id": "m33-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình tam giác có diện tích $42\\text{ cm}^2$, chiều cao $7\\text{ cm}$. Đáy của tam giác là:",
        "options": [
          "$12\\text{ cm}$",
          "$6\\text{ cm}$",
          "$8\\text{ cm}$",
          "$14\\text{ cm}$"
        ],
        "correctAnswer": "$12\\text{ cm}$",
        "hint": "Đáy = $42 \\times 2 : 7 = 12\\text{ cm}$.",
        "explanation": "12 cm."
      },
      {
        "id": "m33-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chu vi hình tròn có bán kính $r = 3,5\\text{ dm}$ là:",
        "options": [
          "$21,98\\text{ dm}$",
          "$10,99\\text{ dm}$",
          "$38,465\\text{ dm}$",
          "$43,96\\text{ dm}$"
        ],
        "correctAnswer": "$21,98\\text{ dm}$",
        "hint": "$C = 3,5 \\times 2 \\times 3,14 = 7 \\times 3,14 = 21,98\\text{ dm}$.",
        "explanation": "$21,98\\text{ dm}$."
      },
      {
        "id": "m33-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình thang có đáy lớn $60\\text{ m}$, đáy bé $40\\text{ m}$, chiều cao bằng trung bình cộng hai đáy. Cứ $100\\text{ m}^2$ thu được $65\\text{ kg}$ thóc. Sản lượng thóc cả thửa ruộng là:",
        "options": [
          "$16,25\\text{ tạ}$",
          "$162,5\\text{ tạ}$",
          "$16,25\\text{ tấn}$",
          "$1625\\text{ kg}$"
        ],
        "correctAnswer": "$16,25\\text{ tạ}$",
        "hint": "Chiều cao = $(60 + 40) : 2 = 50\\text{ m}$. Diện tích = $100 \\times 50 : 2 = 2500\\text{ m}^2$. Số thóc = $25 \\times 65 = 1625\\text{ kg} = 16,25\\text{ tạ}$.",
        "explanation": "$16,25\\text{ tạ}$."
      },
      {
        "id": "m33-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức thuận tiện nhất: $4,85 \\times 7,6 + 4,85 \\times 2,4 + 5,15$:",
        "options": [
          "53,65",
          "50",
          "48,5",
          "54,65"
        ],
        "correctAnswer": "53,65",
        "hint": "$4,85 \\times (7,6 + 2,4) + 5,15 = 4,85 \\times 10 + 5,15 = 48,5 + 5,15 = 53,65$.",
        "explanation": "53,65."
      }
    ],
    "speedQuestions": [
      {
        "id": "m33-s1",
        "prompt": "$0,35 \\times 100 = ?$",
        "options": [
          "35",
          "3,5",
          "350",
          "0,035"
        ],
        "correctAnswer": "35",
        "explanation": "35."
      },
      {
        "id": "m33-s2",
        "prompt": "$12,4 : 2 = ?$",
        "options": [
          "6,2",
          "62",
          "0,62",
          "6,4"
        ],
        "correctAnswer": "6,2",
        "explanation": "6,2."
      },
      {
        "id": "m33-s3",
        "prompt": "Hình tròn đường kính 1 m có chu vi là:",
        "options": [
          "$3,14\\text{ m}$",
          "$6,28\\text{ m}$",
          "$1,57\\text{ m}$",
          "$31,4\\text{ m}$"
        ],
        "correctAnswer": "$3,14\\text{ m}$",
        "explanation": "$3,14\\text{ m}$."
      }
    ]
  },
  "math-bai-34": {
    "practiceQuestions": [
      {
        "id": "m34-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hỗn số $3\\frac{2}{5}$ được viết dưới dạng số thập phân là:",
        "options": [
          "3,4",
          "3,2",
          "3,25",
          "3,5"
        ],
        "correctAnswer": "3,4",
        "hint": "$\\frac{2}{5} = \\frac{4}{10} = 0,4$. Vậy $3\\frac{2}{5} = 3,4$.",
        "explanation": "3,4."
      },
      {
        "id": "m34-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $4,050 \\; ... \\; 4,05$:",
        "options": [
          "=",
          ">",
          "<",
          "Không so sánh được"
        ],
        "correctAnswer": "=",
        "hint": "Bỏ chữ số 0 tận cùng bên phải phần thập phân giá trị không đổi.",
        "explanation": "Bằng nhau."
      },
      {
        "id": "m34-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $14,6 + 8,75 \\times 4 = ?$",
        "options": [
          "49,6",
          "93,4",
          "49",
          "50,6"
        ],
        "correctAnswer": "49,6",
        "hint": "Nhân trước: $8,75 \\times 4 = 35$. Sau đó: $14,6 + 35 = 49,6$.",
        "explanation": "49,6."
      },
      {
        "id": "m34-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm $y$, biết: $y \\times 3,5 = 29,4$:",
        "options": [
          "8,4",
          "7,4",
          "84",
          "0,84"
        ],
        "correctAnswer": "8,4",
        "hint": "$y = 29,4 : 3,5 = 294 : 35 = 8,4$.",
        "explanation": "8,4."
      },
      {
        "id": "m34-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Diện tích hình tròn có bán kính $r = 10\\text{ cm}$ là:",
        "options": [
          "$314\\text{ cm}^2$",
          "$62,8\\text{ cm}^2$",
          "$31,4\\text{ cm}^2$",
          "$157\\text{ cm}^2$"
        ],
        "correctAnswer": "$314\\text{ cm}^2$",
        "hint": "$S = 10 \\times 10 \\times 3,14 = 314\\text{ cm}^2$.",
        "explanation": "$314\\text{ cm}^2$."
      },
      {
        "id": "m34-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cái sân hình chữ nhật có chiều dài $24\\text{ m}$ và diện tích $360\\text{ m}^2$. Chu vi của sân đó là:",
        "options": [
          "$78\\text{ m}$",
          "$39\\text{ m}$",
          "$15\\text{ m}$",
          "$80\\text{ m}$"
        ],
        "correctAnswer": "$78\\text{ m}$",
        "hint": "Chiều rộng = $360 : 24 = 15\\text{ m}$. Chu vi = $(24 + 15) \\times 2 = 78\\text{ m}$.",
        "explanation": "78 m."
      },
      {
        "id": "m34-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình thang có diện tích $720\\text{ m}^2$, chiều cao $24\\text{ m}$. Đáy lớn gấp đôi đáy bé. Đáy lớn của thửa ruộng là:",
        "options": [
          "$40\\text{ m}$",
          "$20\\text{ m}$",
          "$60\\text{ m}$",
          "$30\\text{ m}$"
        ],
        "correctAnswer": "$40\\text{ m}$",
        "hint": "Tổng hai đáy = $720 \\times 2 : 24 = 60\\text{ m}$. Đáy lớn = $60 : (2 + 1) \\times 2 = 40\\text{ m}$.",
        "explanation": "40 m."
      },
      {
        "id": "m34-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $A = 1,1 + 2,2 + 3,3 + 4,4 + 5,5 + 6,6 + 7,7 + 8,8 + 9,9$:",
        "options": [
          "49,5",
          "45",
          "50",
          "48,5"
        ],
        "correctAnswer": "49,5",
        "hint": "$1,1 \\times (1 + 2 + 3 + ... + 9) = 1,1 \\times 45 = 49,5$.",
        "explanation": "49,5."
      }
    ],
    "speedQuestions": [
      {
        "id": "m34-s1",
        "prompt": "$0,5 \\times 0,2 = ?$",
        "options": [
          "0,1",
          "0,01",
          "1",
          "0,25"
        ],
        "correctAnswer": "0,1",
        "explanation": "0,1."
      },
      {
        "id": "m34-s2",
        "prompt": "$100 \\times 0,08 = ?$",
        "options": [
          "8",
          "0,8",
          "80",
          "0,008"
        ],
        "correctAnswer": "8",
        "explanation": "8."
      },
      {
        "id": "m34-s3",
        "prompt": "$20 : 0,5 = ?$",
        "options": [
          "40",
          "10",
          "4",
          "100"
        ],
        "correctAnswer": "40",
        "explanation": "40."
      }
    ]
  },
  "math-bai-35": {
    "practiceQuestions": [
      {
        "id": "m35-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong các số $4,85 ; 4,805 ; 4,9 ; 4,855$, số lớn nhất là:",
        "options": [
          "4,9",
          "4,855",
          "4,85",
          "4,805"
        ],
        "correctAnswer": "4,9",
        "hint": "So sánh hàng phần mười: 9 lớn hơn 8.",
        "explanation": "4,9."
      },
      {
        "id": "m35-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Đổi $5\\text{ m}^2\\text{ } 6\\text{ dm}^2$ ra mét vuông:",
        "options": [
          "$5,06\\text{ m}^2$",
          "$5,6\\text{ m}^2$",
          "$56\\text{ m}^2$",
          "$5,60\\text{ m}^2$"
        ],
        "correctAnswer": "$5,06\\text{ m}^2$",
        "hint": "$6\\text{ dm}^2 = 0,06\\text{ m}^2$.",
        "explanation": "$5,06\\text{ m}^2$."
      },
      {
        "id": "m35-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $18,5 - 2,5 \\times 4 + 6,8$:",
        "options": [
          "15,3",
          "14,3",
          "16,8",
          "15,5"
        ],
        "correctAnswer": "15,3",
        "hint": "$18,5 - 10 + 6,8 = 8,5 + 6,8 = 15,3$.",
        "explanation": "15,3."
      },
      {
        "id": "m35-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình tròn có chu vi $12,56\\text{ m}$. Diện tích của hình tròn đó là:",
        "options": [
          "$12,56\\text{ m}^2$",
          "$6,28\\text{ m}^2$",
          "$25,12\\text{ m}^2$",
          "$3,14\\text{ m}^2$"
        ],
        "correctAnswer": "$12,56\\text{ m}^2$",
        "hint": "$r = 12,56 : 3,14 : 2 = 2\\text{ m}$. $S = 2 \\times 2 \\times 3,14 = 12,56\\text{ m}^2$.",
        "explanation": "$12,56\\text{ m}^2$."
      },
      {
        "id": "m35-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một tấm tôn hình thang có đáy lớn $1,5\\text{ m}$, đáy bé $0,9\\text{ m}$ và chiều cao $0,8\\text{ m}$. Diện tích tấm tôn là:",
        "options": [
          "$0,96\\text{ m}^2$",
          "$1,92\\text{ m}^2$",
          "$0,86\\text{ m}^2$",
          "$1,2\\text{ m}^2$"
        ],
        "correctAnswer": "$0,96\\text{ m}^2$",
        "hint": "$S = (1,5 + 0,9) \\times 0,8 : 2 = 2,4 \\times 0,4 = 0,96\\text{ m}^2$.",
        "explanation": "$0,96\\text{ m}^2$."
      },
      {
        "id": "m35-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biết $4,5\\text{ l}$ dầu cân nặng $3,6\\text{ kg}$. Hỏi $7,5\\text{ l}$ dầu cân nặng bao nhiêu ki-lô-gam?",
        "options": [
          "$6\\text{ kg}$",
          "$5,8\\text{ kg}$",
          "$6,4\\text{ kg}$",
          "$5,5\\text{ kg}$"
        ],
        "correctAnswer": "$6\\text{ kg}$",
        "hint": "1 lít nặng: $3,6 : 4,5 = 0,8\\text{ kg}$. 7,5 lít nặng: $0,8 \\times 7,5 = 6\\text{ kg}$.",
        "explanation": "6 kg."
      },
      {
        "id": "m35-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cửa hàng nhập về một số gạo. Ngày đầu bán được $\\frac{1}{3}$ số gạo. Ngày thứ hai bán được $\\frac{3}{5}$ số gạo còn lại. Sau hai ngày cửa hàng còn lại $480\\text{ kg}$ gạo. Lúc đầu cửa hàng nhập về bao nhiêu tấn gạo?",
        "options": [
          "$1,8\\text{ tấn}$",
          "$1,6\\text{ tấn}$",
          "$2\\text{ tấn}$",
          "$1,5\\text{ tấn}$"
        ],
        "correctAnswer": "$1,8\\text{ tấn}$",
        "hint": "Sau ngày 1 còn $\\frac{2}{3}$. Ngày 2 bán: $\\frac{3}{5} \\times \\frac{2}{3} = \\frac{2}{5}$. Còn lại sau 2 ngày: $1 - (\\frac{1}{3} + \\frac{2}{5}) = 1 - \\frac{11}{15} = \\frac{4}{15}$. Lúc đầu có: $480 : \\frac{4}{15} = 1800\\text{ kg} = 1,8\\text{ tấn}$.",
        "explanation": "1,8 tấn."
      },
      {
        "id": "m35-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính giá trị của tổng sau: $S = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\frac{1}{32} + \\frac{1}{64}$:",
        "options": [
          "$\\frac{63}{64}$",
          "$\\frac{31}{32}$",
          "1",
          "$\\frac{127}{128}$"
        ],
        "correctAnswer": "$\\frac{63}{64}$",
        "hint": "$2S = 1 + \\frac{1}{2} + \\frac{1}{4} + ... + \\frac{1}{32}$. $2S - S = 1 - \\frac{1}{64} = \\frac{63}{64}$.",
        "explanation": "$\\frac{63}{64}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m35-s1",
        "prompt": "$0,1 \\times 0,1 = ?$",
        "options": [
          "0,01",
          "0,1",
          "0,001",
          "1"
        ],
        "correctAnswer": "0,01",
        "explanation": "0,01."
      },
      {
        "id": "m35-s2",
        "prompt": "$3,6 : 0,9 = ?$",
        "options": [
          "4",
          "0,4",
          "40",
          "4,5"
        ],
        "correctAnswer": "4",
        "explanation": "4."
      },
      {
        "id": "m35-s3",
        "prompt": "Tam giác có đáy 12 cm, cao 5 cm có diện tích:",
        "options": [
          "$30\\text{ cm}^2$",
          "$60\\text{ cm}^2$",
          "$17\\text{ cm}^2$",
          "$25\\text{ cm}^2$"
        ],
        "correctAnswer": "$30\\text{ cm}^2$",
        "explanation": "$30\\text{ cm}^2$."
      }
    ]
  }
};

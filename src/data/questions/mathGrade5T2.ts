import { Question, SpeedQuestion } from '../../types';

export interface LessonQuestions {
  practiceQuestions: Question[];
  speedQuestions: SpeedQuestion[];
}

export const mathQuestionsT2: Record<string, LessonQuestions> = {
  "math-bai-36": {
    "practiceQuestions": [
      {
        "id": "m36-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Lớp 5A có 18 bạn nam và 17 bạn nữ. Tỉ số của số bạn nam và số bạn nữ là:",
        "options": [
          "$\\frac{18}{17}$",
          "$\\frac{17}{18}$",
          "$\\frac{18}{35}$",
          "$\\frac{17}{35}$"
        ],
        "correctAnswer": "$\\frac{18}{17}$",
        "hint": "Tỉ số của $a$ và $b$ là $a : b$ hay $\\frac{a}{b}$.",
        "explanation": "Tỉ số của bạn nam và bạn nữ là $\\frac{18}{17}$."
      },
      {
        "id": "m36-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Phân số $\\frac{35}{100}$ được viết dưới dạng tỉ số phần trăm là:",
        "options": [
          "35%",
          "3,5%",
          "0,35%",
          "350%"
        ],
        "correctAnswer": "35%",
        "hint": "Phân số có mẫu 100 viết dưới dạng kèm kí hiệu %.",
        "explanation": "$\\frac{35}{100} = 35\\%$."
      },
      {
        "id": "m36-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Viết phân số $\\frac{3}{4}$ dưới dạng tỉ số phần trăm:",
        "options": [
          "75%",
          "25%",
          "60%",
          "70%"
        ],
        "correctAnswer": "75%",
        "hint": "$\\frac{3}{4} = \\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100} = 75\\%$.",
        "explanation": "$75\\%$."
      },
      {
        "id": "m36-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số thập phân $0,425$ viết dưới dạng tỉ số phần trăm là:",
        "options": [
          "42,5%",
          "4,25%",
          "425%",
          "0,425%"
        ],
        "correctAnswer": "42,5%",
        "hint": "Nhân với 100 rồi thêm kí hiệu %: $0,425 \\times 100 = 42,5\\%$.",
        "explanation": "42,5%."
      },
      {
        "id": "m36-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đổi 120% ra phân số tối giản:",
        "options": [
          "$\\frac{6}{5}$",
          "$\\frac{5}{6}$",
          "$\\frac{12}{10}$",
          "$\\frac{120}{100}$"
        ],
        "correctAnswer": "$\\frac{6}{5}$",
        "hint": "$120\\% = \\frac{120}{100} = \\frac{6}{5}$.",
        "explanation": "$\\frac{6}{5}$."
      },
      {
        "id": "m36-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong vườn có 50 cây ăn quả, trong đó có 15 cây cam. Tỉ số phần trăm của số cây cam so với tổng số cây trong vườn là:",
        "options": [
          "30%",
          "15%",
          "50%",
          "35%"
        ],
        "correctAnswer": "30%",
        "hint": "$15 : 50 = \\frac{30}{100} = 30\\%$.",
        "explanation": "30%."
      },
      {
        "id": "m36-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bể cá có tỉ số giữa cá vàng và cá bảy màu là $\\frac{2}{3}$. Biết số cá bảy màu nhiều hơn cá vàng 8 con. Tổng số cá trong bể là:",
        "options": [
          "40 con",
          "32 con",
          "48 con",
          "24 con"
        ],
        "correctAnswer": "40 con",
        "hint": "Hiệu số phần: $3 - 2 = 1$ phần = 8 con. Cá vàng: $8 \\times 2 = 16$. Cá bảy màu: $8 \\times 3 = 24$. Tổng = $16 + 24 = 40$ con.",
        "explanation": "40 con cá."
      },
      {
        "id": "m36-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Số học sinh nữ của trường chiếm 52% toàn trường. Biết số bạn nữ nhiều hơn số bạn nam là 32 bạn. Số học sinh toàn trường là:",
        "options": [
          "800 học sinh",
          "750 học sinh",
          "640 học sinh",
          "900 học sinh"
        ],
        "correctAnswer": "800 học sinh",
        "hint": "Nam chiếm: $100\\% - 52\\% = 48\\%$. Chênh lệch: $52\\% - 48\\% = 4\\%$ ứng với 32 bạn. Toàn trường = $32 : 4 \\times 100 = 800$ bạn.",
        "explanation": "800 học sinh."
      }
    ],
    "speedQuestions": [
      {
        "id": "m36-s1",
        "prompt": "$0,6 = ...\\%$",
        "options": [
          "60%",
          "6%",
          "600%",
          "0,6%"
        ],
        "correctAnswer": "60%",
        "explanation": "60%."
      },
      {
        "id": "m36-s2",
        "prompt": "$\\frac{1}{2} = ...\\%$",
        "options": [
          "50%",
          "25%",
          "20%",
          "75%"
        ],
        "correctAnswer": "50%",
        "explanation": "50%."
      },
      {
        "id": "m36-s3",
        "prompt": "$100\\% - 35\\% = ?$",
        "options": [
          "65%",
          "75%",
          "55%",
          "60%"
        ],
        "correctAnswer": "65%",
        "explanation": "65%."
      }
    ]
  },
  "math-bai-37": {
    "practiceQuestions": [
      {
        "id": "m37-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Muốn tìm tỉ số phần trăm của hai số $a$ và $b$ ta làm thế nào?",
        "options": [
          "Tìm thương của a và b, nhân thương với 100 và viết thêm kí hiệu %",
          "Lấy a nhân b rồi chia cho 100",
          "Lấy a cộng b rồi nhân 100",
          "Lấy b chia a rồi nhân 100"
        ],
        "correctAnswer": "Tìm thương của a và b, nhân thương với 100 và viết thêm kí hiệu %",
        "hint": "Quy tắc: $(a : b) \\times 100\\%$.",
        "explanation": "Tìm thương của a và b, nhân thương với 100 rồi viết thêm %."
      },
      {
        "id": "m37-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tỉ số phần trăm của 15 và 60 là:",
        "options": [
          "25%",
          "40%",
          "20%",
          "30%"
        ],
        "correctAnswer": "25%",
        "hint": "$15 : 60 = 0,25 = 25\\%$.",
        "explanation": "25%."
      },
      {
        "id": "m37-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm tỉ số phần trăm của 1,6 và 80:",
        "options": [
          "2%",
          "20%",
          "0,2%",
          "200%"
        ],
        "correctAnswer": "2%",
        "hint": "$1,6 : 80 = 0,02 = 2\\%$.",
        "explanation": "2%."
      },
      {
        "id": "m37-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một lớp học có 40 học sinh, trong đó có 24 học sinh đạt danh hiệu Xuất sắc. Tỉ lệ học sinh Xuất sắc của lớp đó là:",
        "options": [
          "60%",
          "40%",
          "50%",
          "75%"
        ],
        "correctAnswer": "60%",
        "hint": "$24 : 40 = 0,6 = 60\\%$.",
        "explanation": "60%."
      },
      {
        "id": "m37-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bác thợ may dùng hết $2,4\\text{ m}$ vải từ một cuộn vải dài $12\\text{ m}$. Hỏi bác đã dùng hết bao nhiêu phần trăm cuộn vải?",
        "options": [
          "20%",
          "25%",
          "30%",
          "15%"
        ],
        "correctAnswer": "20%",
        "hint": "$2,4 : 12 = 0,2 = 20\\%$.",
        "explanation": "20%."
      },
      {
        "id": "m37-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một kế hoạch đặt ra sản xuất 500 chiếc xe đạp, nhưng thực tế đội làm được 550 chiếc. Hỏi đội đó đã thực hiện được bao nhiêu phần trăm kế hoạch?",
        "options": [
          "110%",
          "105%",
          "90%",
          "115%"
        ],
        "correctAnswer": "110%",
        "hint": "$550 : 500 = 1,1 = 110\\%$.",
        "explanation": "110% (vượt mức 10%)."
      },
      {
        "id": "m37-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Giá bán một chiếc cặp sách giảm từ 250 000 đồng xuống 200 000 đồng. Chiếc cặp sách đó đã được giảm giá bao nhiêu phần trăm?",
        "options": [
          "20%",
          "25%",
          "15%",
          "10%"
        ],
        "correctAnswer": "20%",
        "hint": "Số tiền giảm: $250\\,000 - 200\\,000 = 50\\,000$ đồng. Tỉ lệ giảm: $50\\,000 : 250\\,000 = 0,2 = 20\\%$.",
        "explanation": "Giảm 20%."
      },
      {
        "id": "m37-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một dung dịch muối gồm 20 g muối hòa tan trong 180 g nước cất. Tỉ số phần trăm của muối trong dung dịch đó là:",
        "options": [
          "10%",
          "11,1%",
          "9%",
          "12%"
        ],
        "correctAnswer": "10%",
        "hint": "Khối lượng toàn bộ dung dịch = $20 + 180 = 200\\text{ g}$. Nồng độ phần trăm = $20 : 200 = 0,1 = 10\\%$.",
        "explanation": "10%."
      }
    ],
    "speedQuestions": [
      {
        "id": "m37-s1",
        "prompt": "Tỉ số phần trăm của 1 và 4 là:",
        "options": [
          "25%",
          "20%",
          "50%",
          "40%"
        ],
        "correctAnswer": "25%",
        "explanation": "25%."
      },
      {
        "id": "m37-s2",
        "prompt": "Tỉ số phần trăm của 3 và 5 là:",
        "options": [
          "60%",
          "50%",
          "70%",
          "35%"
        ],
        "correctAnswer": "60%",
        "explanation": "60%."
      },
      {
        "id": "m37-s3",
        "prompt": "Tỉ số phần trăm của 8 và 10 là:",
        "options": [
          "80%",
          "8%",
          "0,8%",
          "85%"
        ],
        "correctAnswer": "80%",
        "explanation": "80%."
      }
    ]
  },
  "math-bai-38": {
    "practiceQuestions": [
      {
        "id": "m38-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Muốn tìm $30\\%$ của số 80 ta làm thế nào?",
        "options": [
          "Lấy 80 nhân 30 rồi chia cho 100",
          "Lấy 80 chia 30 rồi nhân 100",
          "Lấy 80 cộng 30",
          "Lấy 30 chia 80 nhân 100"
        ],
        "correctAnswer": "Lấy 80 nhân 30 rồi chia cho 100",
        "hint": "$80 \\times 30 : 100 = 24$.",
        "explanation": "Lấy 80 nhân 30 rồi chia 100 (hoặc $80 : 100 \\times 30$)."
      },
      {
        "id": "m38-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tìm $20\\%$ của $150\\text{ kg}$:",
        "options": [
          "$30\\text{ kg}$",
          "$25\\text{ kg}$",
          "$35\\text{ kg}$",
          "$40\\text{ kg}$"
        ],
        "correctAnswer": "$30\\text{ kg}$",
        "hint": "$150 \\times 20 : 100 = 30\\text{ kg}$.",
        "explanation": "$30\\text{ kg}$."
      },
      {
        "id": "m38-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cửa hàng có 800 kg gạo, đã bán được 65% số gạo đó. Số gạo đã bán là:",
        "options": [
          "520 kg",
          "500 kg",
          "480 kg",
          "540 kg"
        ],
        "correctAnswer": "520 kg",
        "hint": "$800 \\times 65 : 100 = 520\\text{ kg}$.",
        "explanation": "520 kg."
      },
      {
        "id": "m38-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm một số biết $25\\%$ của nó bằng 40:",
        "options": [
          "160",
          "10",
          "100",
          "120"
        ],
        "correctAnswer": "160",
        "hint": "Số đó là: $40 : 25 \\times 100 = 160$ (hoặc $40 \\times 4 = 160$).",
        "explanation": "160."
      },
      {
        "id": "m38-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một đàn gà có 250 con, trong đó gà mái chiếm 68%. Hỏi đàn gà có bao nhiêu con gà trống?",
        "options": [
          "80 con",
          "170 con",
          "75 con",
          "85 con"
        ],
        "correctAnswer": "80 con",
        "hint": "Gà trống chiếm: $100\\% - 68\\% = 32\\%$. Số gà trống: $250 \\times 32 : 100 = 80$ con.",
        "explanation": "80 con gà trống."
      },
      {
        "id": "m38-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bác Ba gửi tiết kiệm 50 000 000 đồng với lãi suất $0,5\\%$ một tháng. Sau một tháng, bác nhận được số tiền lãi là:",
        "options": [
          "250 000 đồng",
          "2 500 000 đồng",
          "500 000 đồng",
          "150 000 đồng"
        ],
        "correctAnswer": "250 000 đồng",
        "hint": "Tiền lãi = $50\\,000\\,000 \\times 0,5 : 100 = 250\\,000$ đồng.",
        "explanation": "250 000 đồng."
      },
      {
        "id": "m38-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cái quạt máy có giá niêm yết là 400 000 đồng. Nhân dịp khai trương, cửa hàng giảm giá 15%. Bác Nam mua quạt đó phải trả bao nhiêu tiền?",
        "options": [
          "340 000 đồng",
          "360 000 đồng",
          "320 000 đồng",
          "380 000 đồng"
        ],
        "correctAnswer": "340 000 đồng",
        "hint": "Giảm: $400\\,000 \\times 15 : 100 = 60\\,000$ đồng. Phải trả: $400\\,000 - 60\\,000 = 340\\,000$ đồng (hoặc $400\\,000 \\times 85\\%$).",
        "explanation": "340 000 đồng."
      },
      {
        "id": "m38-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Biết rằng lượng nước trong hạt tươi chiếm $20\\%$, trong hạt khô chiếm $10\\%$. Hỏi phơi $200\\text{ kg}$ hạt tươi thì thu được bao nhiêu ki-lô-gam hạt khô?",
        "options": [
          "$177,78\\text{ kg}$",
          "$180\\text{ kg}$",
          "$160\\text{ kg}$",
          "$175\\text{ kg}$"
        ],
        "correctAnswer": "$177,78\\text{ kg}$",
        "hint": "Thuần hạt không đổi = $200 \\times 80\\% = 160\\text{ kg}$. Hạt khô chứa $90\\%$ thuần hạt. Khối lượng hạt khô = $160 : 90 \\times 100 \\approx 177,78\\text{ kg}$.",
        "explanation": "Khoảng 177,78 kg."
      }
    ],
    "speedQuestions": [
      {
        "id": "m38-s1",
        "prompt": "$10\\%$ của 200 là:",
        "options": [
          "20",
          "2",
          "200",
          "0,2"
        ],
        "correctAnswer": "20",
        "explanation": "20."
      },
      {
        "id": "m38-s2",
        "prompt": "$50\\%$ của 80 là:",
        "options": [
          "40",
          "20",
          "60",
          "30"
        ],
        "correctAnswer": "40",
        "explanation": "40."
      },
      {
        "id": "m38-s3",
        "prompt": "$25\\%$ của 100 là:",
        "options": [
          "25",
          "50",
          "10",
          "4"
        ],
        "correctAnswer": "25",
        "explanation": "25."
      }
    ]
  },
  "math-bai-39": {
    "practiceQuestions": [
      {
        "id": "m39-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $35\\% + 42\\% = ?$",
        "options": [
          "77%",
          "75%",
          "78%",
          "76%"
        ],
        "correctAnswer": "77%",
        "hint": "$35 + 42 = 77$.",
        "explanation": "77%."
      },
      {
        "id": "m39-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $84\\% : 4 = ?$",
        "options": [
          "21%",
          "20%",
          "22%",
          "24%"
        ],
        "correctAnswer": "21%",
        "hint": "$84 : 4 = 21$.",
        "explanation": "21%."
      },
      {
        "id": "m39-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khu vườn trồng 400 cây ăn quả, trong đó xoài chiếm 30%, bưởi chiếm 45%, còn lại là cam. Số cây cam là:",
        "options": [
          "100 cây",
          "120 cây",
          "80 cây",
          "110 cây"
        ],
        "correctAnswer": "100 cây",
        "hint": "Cam chiếm: $100\\% - (30\\% + 45\\%) = 25\\%$. Số cây cam: $400 \\times 25 : 100 = 100$ cây.",
        "explanation": "100 cây cam."
      },
      {
        "id": "m39-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình chữ nhật có chiều dài $20\\text{ m}$. Nếu tăng chiều dài thêm $10\\%$ thì chiều dài mới là:",
        "options": [
          "$22\\text{ m}$",
          "$21\\text{ m}$",
          "$25\\text{ m}$",
          "$20,1\\text{ m}$"
        ],
        "correctAnswer": "$22\\text{ m}$",
        "hint": "Tăng thêm: $20 \\times 10\\% = 2\\text{ m}$. Chiều dài mới: $20 + 2 = 22\\text{ m}$.",
        "explanation": "$22\\text{ m}$."
      },
      {
        "id": "m39-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biết $30\\%$ của diện tích một thửa ruộng là $150\\text{ m}^2$. Diện tích thửa ruộng đó là:",
        "options": [
          "$500\\text{ m}^2$",
          "$450\\text{ m}^2$",
          "$600\\text{ m}^2$",
          "$300\\text{ m}^2$"
        ],
        "correctAnswer": "$500\\text{ m}^2$",
        "hint": "Diện tích = $150 : 30 \\times 100 = 500\\text{ m}^2$.",
        "explanation": "$500\\text{ m}^2$."
      },
      {
        "id": "m39-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người bán hàng mua một món đồ với giá 80 000 đồng và bán lại được 100 000 đồng. Hỏi người đó lãi bao nhiêu phần trăm so với giá vốn?",
        "options": [
          "25%",
          "20%",
          "30%",
          "15%"
        ],
        "correctAnswer": "25%",
        "hint": "Tiền lãi = $100\\,000 - 80\\,000 = 20\\,000$ đồng. Tỉ lệ lãi theo vốn = $20\\,000 : 80\\,000 = 25\\%$.",
        "explanation": "Lãi 25% giá vốn."
      },
      {
        "id": "m39-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nếu cạnh một hình vuông tăng thêm 20% thì diện tích hình vuông đó tăng thêm bao nhiêu phần trăm?",
        "options": [
          "44%",
          "40%",
          "20%",
          "48%"
        ],
        "correctAnswer": "44%",
        "hint": "Cạnh mới = 120%. Diện tích mới = $120\\% \\times 120\\% = 144\\%$. Tăng thêm = $144\\% - 100\\% = 44\\%$.",
        "explanation": "Tăng thêm 44%."
      },
      {
        "id": "m39-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một người gửi tiết kiệm 100 000 000 đồng kì hạn 1 năm với lãi suất 6%/năm. Tiền lãi sau mỗi năm được nhập vào vốn (lãi kép). Sau 2 năm người đó nhận được tất cả bao nhiêu tiền cả vốn lẫn lãi?",
        "options": [
          "112 360 000 đồng",
          "112 000 000 đồng",
          "106 000 000 đồng",
          "115 000 000 đồng"
        ],
        "correctAnswer": "112 360 000 đồng",
        "hint": "Hết năm 1: $100 \\times 1,06 = 106$ triệu. Hết năm 2: $106 \\times 1,06 = 112,36$ triệu đồng.",
        "explanation": "112 360 000 đồng."
      }
    ],
    "speedQuestions": [
      {
        "id": "m39-s1",
        "prompt": "$15\\% \\times 3 = ?$",
        "options": [
          "45%",
          "35%",
          "50%",
          "15%"
        ],
        "correctAnswer": "45%",
        "explanation": "45%."
      },
      {
        "id": "m39-s2",
        "prompt": "$100\\% - 48\\% = ?$",
        "options": [
          "52%",
          "62%",
          "42%",
          "58%"
        ],
        "correctAnswer": "52%",
        "explanation": "52%."
      },
      {
        "id": "m39-s3",
        "prompt": "$20\\%$ của 50 là:",
        "options": [
          "10",
          "5",
          "15",
          "20"
        ],
        "correctAnswer": "10",
        "explanation": "10."
      }
    ]
  },
  "math-bai-40": {
    "practiceQuestions": [
      {
        "id": "m40-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tổng của hai số là 80, tỉ số của hai số là $\\frac{1}{3}$. Tổng số phần bằng nhau là:",
        "options": [
          "4 phần",
          "3 phần",
          "2 phần",
          "5 phần"
        ],
        "correctAnswer": "4 phần",
        "hint": "Tổng số phần = $1 + 3 = 4$.",
        "explanation": "4 phần."
      },
      {
        "id": "m40-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hai số có tổng là 45 và tỉ số là $\\frac{2}{3}$. Số bé là:",
        "options": [
          "18",
          "27",
          "15",
          "20"
        ],
        "correctAnswer": "18",
        "hint": "1 phần = $45 : 5 = 9$. Số bé = $9 \\times 2 = 18$.",
        "explanation": "18."
      },
      {
        "id": "m40-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai lớp 5A và 5B gom được tất cả 150 kg giấy vụn. Biết số giấy vụn lớp 5A bằng $\\frac{2}{3}$ số giấy lớp 5B. Lớp 5B gom được là:",
        "options": [
          "90 kg",
          "60 kg",
          "75 kg",
          "80 kg"
        ],
        "correctAnswer": "90 kg",
        "hint": "Lớp 5B chiếm 3 phần. $150 : (2 + 3) \\times 3 = 90\\text{ kg}$.",
        "explanation": "90 kg."
      },
      {
        "id": "m40-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một mảnh đất hình chữ nhật có chu vi $160\\text{ m}$, chiều rộng bằng $\\frac{3}{5}$ chiều dài. Chiều dài mảnh đất là:",
        "options": [
          "$50\\text{ m}$",
          "$30\\text{ m}$",
          "$100\\text{ m}$",
          "$60\\text{ m}$"
        ],
        "correctAnswer": "$50\\text{ m}$",
        "hint": "Nửa chu vi = $80\\text{ m}$. Tổng số phần: $3 + 5 = 8$. Chiều dài = $80 : 8 \\times 5 = 50\\text{ m}$.",
        "explanation": "50 m."
      },
      {
        "id": "m40-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai kho thóc chứa tổng cộng 240 tấn thóc. Sau khi chuyển 20 tấn từ kho 1 sang kho 2 thì số thóc kho 1 bằng $\\frac{3}{5}$ kho 2. Lúc đầu kho 1 có:",
        "options": [
          "110 tấn",
          "90 tấn",
          "130 tấn",
          "150 tấn"
        ],
        "correctAnswer": "110 tấn",
        "hint": "Tổng thóc không đổi = 240 tấn. Lúc sau kho 1 có: $240 : 8 \\times 3 = 90$ tấn. Lúc đầu kho 1 có: $90 + 20 = 110$ tấn.",
        "explanation": "110 tấn."
      },
      {
        "id": "m40-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tỉ số của hai số là 0,4. Tổng của hai số là 70. Số lớn là:",
        "options": [
          "50",
          "20",
          "45",
          "60"
        ],
        "correctAnswer": "50",
        "hint": "$0,4 = \\frac{2}{5}$. Tổng số phần: $2 + 5 = 7$. Số lớn: $70 : 7 \\times 5 = 50$.",
        "explanation": "50."
      },
      {
        "id": "m40-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một khu đất hình chữ nhật có chu vi $280\\text{ m}$, chiều rộng bằng $\\frac{3}{4}$ chiều dài. Diện tích khu đất là bao nhiêu héc-ta?",
        "options": [
          "$0,48\\text{ ha}$",
          "$4,8\\text{ ha}$",
          "$48\\text{ ha}$",
          "$0,24\\text{ ha}$"
        ],
        "correctAnswer": "$0,48\\text{ ha}$",
        "hint": "Nửa chu vi = 140 m. Rộng = $140 : 7 \\times 3 = 60$ m. Dài = 80 m. Diện tích = $60 \\times 80 = 4800\\text{ m}^2 = 0,48\\text{ ha}$.",
        "explanation": "$0,48\\text{ ha}$."
      },
      {
        "id": "m40-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Ba bạn An, Bình, Cường có tất cả 90 viên bi. Số bi của An bằng $\\frac{1}{2}$ tổng số bi của Bình và Cường. An có bao nhiêu viên bi?",
        "options": [
          "30 viên",
          "45 viên",
          "20 viên",
          "25 viên"
        ],
        "correctAnswer": "30 viên",
        "hint": "An chiếm 1 phần, Bình + Cường chiếm 2 phần. Tổng = 3 phần. Số bi của An = $90 : 3 = 30$ viên.",
        "explanation": "30 viên bi."
      }
    ],
    "speedQuestions": [
      {
        "id": "m40-s1",
        "prompt": "Tổng là 30, tỉ số $\\frac{1}{2}$, số bé là:",
        "options": [
          "10",
          "20",
          "15",
          "5"
        ],
        "correctAnswer": "10",
        "explanation": "10."
      },
      {
        "id": "m40-s2",
        "prompt": "Tổng là 100, tỉ số $\\frac{2}{3}$, số lớn là:",
        "options": [
          "60",
          "40",
          "50",
          "70"
        ],
        "correctAnswer": "60",
        "explanation": "60."
      },
      {
        "id": "m40-s3",
        "prompt": "Tổng số phần của tỉ số $\\frac{3}{7}$ là:",
        "options": [
          "10",
          "4",
          "21",
          "14"
        ],
        "correctAnswer": "10",
        "explanation": "10."
      }
    ]
  },
  "math-bai-41": {
    "practiceQuestions": [
      {
        "id": "m41-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hiệu của hai số là 30, tỉ số của hai số là $\\frac{2}{5}$. Hiệu số phần bằng nhau là:",
        "options": [
          "3 phần",
          "7 phần",
          "5 phần",
          "2 phần"
        ],
        "correctAnswer": "3 phần",
        "hint": "Hiệu số phần = $5 - 2 = 3$.",
        "explanation": "3 phần."
      },
      {
        "id": "m41-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hiệu của hai số là 24, số lớn gấp 3 lần số bé. Số bé là:",
        "options": [
          "12",
          "8",
          "6",
          "16"
        ],
        "correctAnswer": "12",
        "hint": "Hiệu số phần: $3 - 1 = 2$. Số bé: $24 : 2 \\times 1 = 12$.",
        "explanation": "12."
      },
      {
        "id": "m41-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bố hơn con 30 tuổi. Tuổi con bằng $\\frac{2}{7}$ tuổi bố. Tuổi con hiện nay là:",
        "options": [
          "12 tuổi",
          "42 tuổi",
          "10 tuổi",
          "14 tuổi"
        ],
        "correctAnswer": "12 tuổi",
        "hint": "Hiệu số phần: $7 - 2 = 5$. Tuổi con: $30 : 5 \\times 2 = 12$ tuổi.",
        "explanation": "12 tuổi."
      },
      {
        "id": "m41-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình chữ nhật có chiều dài hơn chiều rộng $18\\text{ m}$, chiều rộng bằng $\\frac{4}{7}$ chiều dài. Chiều dài hình chữ nhật là:",
        "options": [
          "$42\\text{ m}$",
          "$24\\text{ m}$",
          "$36\\text{ m}$",
          "$48\\text{ m}$"
        ],
        "correctAnswer": "$42\\text{ m}$",
        "hint": "Hiệu số phần: $7 - 4 = 3$. Chiều dài = $18 : 3 \\times 7 = 42\\text{ m}$.",
        "explanation": "42 m."
      },
      {
        "id": "m41-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tỉ số của hai số là 0,25. Hiệu của hai số là 45. Số lớn là:",
        "options": [
          "60",
          "15",
          "75",
          "90"
        ],
        "correctAnswer": "60",
        "hint": "$0,25 = \\frac{1}{4}$. Hiệu số phần: $4 - 1 = 3$. Số lớn: $45 : 3 \\times 4 = 60$.",
        "explanation": "60."
      },
      {
        "id": "m41-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hiệu của hai số là 153. Nếu xóa chữ số 0 ở tận cùng bên phải số lớn thì được số bé. Số lớn là:",
        "options": [
          "170",
          "17",
          "160",
          "180"
        ],
        "correctAnswer": "170",
        "hint": "Số lớn gấp 10 lần số bé. Hiệu số phần: $10 - 1 = 9$. Số bé: $153 : 9 = 17$. Số lớn: 170.",
        "explanation": "170."
      },
      {
        "id": "m41-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Mẹ sinh con năm mẹ 28 tuổi. Hiện nay tuổi mẹ gấp 3 lần tuổi con. Tuổi mẹ hiện nay là:",
        "options": [
          "42 tuổi",
          "38 tuổi",
          "40 tuổi",
          "45 tuổi"
        ],
        "correctAnswer": "42 tuổi",
        "hint": "Mẹ luôn hơn con 28 tuổi. Hiệu số phần: $3 - 1 = 2$. Tuổi con: $28 : 2 = 14$. Tuổi mẹ: $14 \\times 3 = 42$ tuổi.",
        "explanation": "42 tuổi."
      },
      {
        "id": "m41-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Hai thùng đựng tất cả 120 lít dầu. Nếu rót từ thùng thứ nhất sang thùng thứ hai 15 lít thì thùng thứ hai nhiều hơn thùng thứ nhất 20 lít. Lúc đầu thùng thứ nhất đựng:",
        "options": [
          "65 lít",
          "55 lít",
          "70 lít",
          "60 lít"
        ],
        "correctAnswer": "65 lít",
        "hint": "Lúc sau thùng 2 hơn thùng 1 là 20 lít. Lúc đầu thùng 1 hơn thùng 2 là: $15 \\times 2 - 20 = 10$ lít. Thùng 1 = $(120 + 10) : 2 = 65$ lít.",
        "explanation": "65 lít dầu."
      }
    ],
    "speedQuestions": [
      {
        "id": "m41-s1",
        "prompt": "Hiệu là 20, tỉ số $\\frac{1}{3}$, số bé là:",
        "options": [
          "10",
          "30",
          "5",
          "15"
        ],
        "correctAnswer": "10",
        "explanation": "10."
      },
      {
        "id": "m41-s2",
        "prompt": "Hiệu là 50, số lớn gấp 2 lần số bé, số bé là:",
        "options": [
          "50",
          "100",
          "25",
          "75"
        ],
        "correctAnswer": "50",
        "explanation": "50."
      },
      {
        "id": "m41-s3",
        "prompt": "Hiệu số phần của tỉ số $\\frac{2}{7}$ là:",
        "options": [
          "5",
          "9",
          "14",
          "7"
        ],
        "correctAnswer": "5",
        "explanation": "5."
      }
    ]
  },
  "math-bai-42": {
    "practiceQuestions": [
      {
        "id": "m42-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tỉ lệ bản đồ $1 : 1000$ có ý nghĩa gì?",
        "options": [
          "Khoảng cách 1 cm trên bản đồ tương ứng 1000 cm ngoài thực tế",
          "Khoảng cách ngoài thực tế gấp 100 lần trên bản đồ",
          "Bản đồ phóng to 1000 lần",
          "1 m trên bản đồ bằng 1000 m ngoài đời"
        ],
        "correctAnswer": "Khoảng cách 1 cm trên bản đồ tương ứng 1000 cm ngoài thực tế",
        "hint": "Tỉ lệ $1 : n$ nghĩa là độ dài trên bản đồ bằng $\\frac{1}{n}$ độ dài thực tế.",
        "explanation": "1 cm trên bản đồ tương ứng với 1000 cm ngoài thực tế."
      },
      {
        "id": "m42-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trên bản đồ tỉ lệ $1 : 500\\,000$, quãng đường từ A đến B đo được $4\\text{ cm}$. Độ dài thật của quãng đường là:",
        "options": [
          "$20\\text{ km}$",
          "$200\\text{ km}$",
          "$2\\text{ km}$",
          "$2000\\text{ m}$"
        ],
        "correctAnswer": "$20\\text{ km}$",
        "hint": "$4 \\times 500\\,000 = 2\\,000\\,000\\text{ cm} = 20\\text{ km}$.",
        "explanation": "$20\\text{ km}$."
      },
      {
        "id": "m42-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khoảng cách thực tế giữa hai tỉnh là $150\\text{ km}$. Trên bản đồ tỉ lệ $1 : 1\\,000\\,000$, khoảng cách đó dài bao nhiêu xăng-ti-mét?",
        "options": [
          "$15\\text{ cm}$",
          "$1,5\\text{ cm}$",
          "$150\\text{ cm}$",
          "$0,15\\text{ cm}$"
        ],
        "correctAnswer": "$15\\text{ cm}$",
        "hint": "$150\\text{ km} = 15\\,000\\,000\\text{ cm}$. Chia cho $1\\,000\\,000$ được $15\\text{ cm}$.",
        "explanation": "$15\\text{ cm}$."
      },
      {
        "id": "m42-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một sân bóng đá mini hình chữ nhật có chiều dài $40\\text{ m}$, chiều rộng $20\\text{ m}$. Trên bản vẽ tỉ lệ $1 : 500$, chu vi sân bóng đó là:",
        "options": [
          "$24\\text{ cm}$",
          "$12\\text{ cm}$",
          "$48\\text{ cm}$",
          "$16\\text{ cm}$"
        ],
        "correctAnswer": "$24\\text{ cm}$",
        "hint": "Chu vi thực = $(40 + 20) \\times 2 = 120\\text{ m} = 12\\,000\\text{ cm}$. Trên bản vẽ = $12\\,000 : 500 = 24\\text{ cm}$.",
        "explanation": "24 cm."
      },
      {
        "id": "m42-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khoảng cách giữa hai điểm C và D trên thực địa là $800\\text{ m}$, trên bản đồ đo được $4\\text{ cm}$. Tỉ lệ của bản đồ đó là:",
        "options": [
          "$1 : 20\\,000$",
          "$1 : 2000$",
          "$1 : 200\\,000$",
          "$1 : 200$"
        ],
        "correctAnswer": "$1 : 20\\,000$",
        "hint": "$800\\text{ m} = 80\\,000\\text{ cm}$. Tỉ lệ = $4 : 80\\,000 = 1 : 20\\,000$.",
        "explanation": "$1 : 20\\,000$."
      },
      {
        "id": "m42-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một mảnh đất hình chữ nhật trên bản đồ tỉ lệ $1 : 2000$ có chiều dài $5\\text{ cm}$, chiều rộng $3\\text{ cm}$. Diện tích thực tế của mảnh đất là:",
        "options": [
          "$6000\\text{ m}^2$",
          "$60\\,000\\text{ m}^2$",
          "$3000\\text{ m}^2$",
          "$0,6\\text{ ha}$"
        ],
        "correctAnswer": "$6000\\text{ m}^2$",
        "hint": "Dài thực: $5 \\times 2000 = 10\\,000\\text{ cm} = 100\\text{ m}$. Rộng thực: $3 \\times 2000 = 6000\\text{ cm} = 60\\text{ m}$. Diện tích = $100 \\times 60 = 6000\\text{ m}^2$.",
        "explanation": "$6000\\text{ m}^2$ (tương đương $0,6\\text{ ha}$)."
      },
      {
        "id": "m42-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trên bản đồ tỉ lệ $1 : 1000$, một thửa ruộng hình vuông có diện tích là $16\\text{ cm}^2$. Diện tích thực tế của thửa ruộng đó là:",
        "options": [
          "$0,16\\text{ ha}$",
          "$1,6\\text{ ha}$",
          "$16\\text{ ha}$",
          "$160\\text{ m}^2$"
        ],
        "correctAnswer": "$0,16\\text{ ha}$",
        "hint": "Cạnh bản đồ là 4 cm. Cạnh thực tế = $4000\\text{ cm} = 40\\text{ m}$. Diện tích = $1600\\text{ m}^2 = 0,16\\text{ ha}$.",
        "explanation": "$0,16\\text{ ha}$."
      },
      {
        "id": "m42-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Bản đồ thứ nhất có tỉ lệ $1 : 50\\,000$, bản đồ thứ hai có tỉ lệ $1 : 100\\,000$. Đo cùng một đoạn đường, độ dài trên bản đồ thứ nhất so với bản đồ thứ hai như thế nào?",
        "options": [
          "Dài gấp 2 lần",
          "Ngắn hơn một nửa",
          "Bằng nhau",
          "Dài gấp 4 lần"
        ],
        "correctAnswer": "Dài gấp 2 lần",
        "hint": "Tỉ lệ mẫu số càng nhỏ thì hình vẽ thu nhỏ càng lớn. $100\\,000 : 50\\,000 = 2$ lần.",
        "explanation": "Dài gấp 2 lần."
      }
    ],
    "speedQuestions": [
      {
        "id": "m42-s1",
        "prompt": "$1\\text{ cm}$ trên bản đồ $1 : 100$ bằng thực tế:",
        "options": [
          "$1\\text{ m}$",
          "$10\\text{ m}$",
          "$100\\text{ m}$",
          "$0,1\\text{ m}$"
        ],
        "correctAnswer": "$1\\text{ m}$",
        "explanation": "100 cm = 1 m."
      },
      {
        "id": "m42-s2",
        "prompt": "$2\\text{ cm}$ trên bản đồ $1 : 10\\,000$ bằng thực tế:",
        "options": [
          "$200\\text{ m}$",
          "$20\\text{ m}$",
          "$2\\text{ km}$",
          "$20\\text{ km}$"
        ],
        "correctAnswer": "$200\\text{ m}$",
        "explanation": "20 000 cm = 200 m."
      },
      {
        "id": "m42-s3",
        "prompt": "$5\\text{ m}$ thu nhỏ tỉ lệ $1 : 100$ trên giấy dài:",
        "options": [
          "5 cm",
          "50 cm",
          "0,5 cm",
          "5 dm"
        ],
        "correctAnswer": "5 cm",
        "explanation": "5 cm."
      }
    ]
  },
  "math-bai-43": {
    "practiceQuestions": [
      {
        "id": "m43-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Để vẽ thu nhỏ phòng học dài $8\\text{ m}$, rộng $6\\text{ m}$ vào vở ô ly, tỉ lệ thích hợp nhất là:",
        "options": [
          "$1 : 100$",
          "$1 : 10$",
          "$1 : 1000$",
          "$1 : 10\\,000$"
        ],
        "correctAnswer": "$1 : 100$",
        "hint": "Với tỉ lệ $1 : 100$, chiều dài sẽ là $8\\text{ cm}$, rộng $6\\text{ cm}$, rất vừa vặn trang vở.",
        "explanation": "$1 : 100$."
      },
      {
        "id": "m43-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Một cái bàn dài $1,5\\text{ m}$. Vẽ thu nhỏ theo tỉ lệ $1 : 50$ thì đoạn thẳng vẽ trên giấy dài:",
        "options": [
          "$3\\text{ cm}$",
          "$30\\text{ cm}$",
          "$1,5\\text{ cm}$",
          "$5\\text{ cm}$"
        ],
        "correctAnswer": "$3\\text{ cm}$",
        "hint": "$1,5\\text{ m} = 150\\text{ cm}$. Đoạn vẽ = $150 : 50 = 3\\text{ cm}$.",
        "explanation": "$3\\text{ cm}$."
      },
      {
        "id": "m43-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một sân trường hình chữ nhật dài $60\\text{ m}$, rộng $40\\text{ m}$. Khi vẽ trên bản đồ tỉ lệ $1 : 1000$, diện tích hình chữ nhật trên bản đồ là:",
        "options": [
          "$24\\text{ cm}^2$",
          "$240\\text{ cm}^2$",
          "$2,4\\text{ cm}^2$",
          "$24\\text{ dm}^2$"
        ],
        "correctAnswer": "$24\\text{ cm}^2$",
        "hint": "Dài trên bản đồ: $6\\text{ cm}$. Rộng: $4\\text{ cm}$. Diện tích = $6 \\times 4 = 24\\text{ cm}^2$.",
        "explanation": "$24\\text{ cm}^2$."
      },
      {
        "id": "m43-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bạn Linh đo chiều cao của mình là $140\\text{ cm}$, bóng của Linh dưới nắng dài $70\\text{ cm}$. Cùng lúc đó, bóng của cột cờ dài $3\\text{ m}$. Cột cờ cao bao nhiêu mét?",
        "options": [
          "$6\\text{ m}$",
          "$5\\text{ m}$",
          "$4,5\\text{ m}$",
          "$7\\text{ m}$"
        ],
        "correctAnswer": "$6\\text{ m}$",
        "hint": "Tỉ số chiều cao và bóng = $140 : 70 = 2$. Chiều cao cột cờ = $3 \\times 2 = 6\\text{ m}$.",
        "explanation": "$6\\text{ m}$."
      },
      {
        "id": "m43-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong một đợt khảo sát, tỉ số giữa số bạn thích bơi lội và số bạn thích bóng đá là $\\frac{3}{5}$. Biết có 45 bạn thích bóng đá, số bạn thích bơi lội là:",
        "options": [
          "27 bạn",
          "30 bạn",
          "25 bạn",
          "36 bạn"
        ],
        "correctAnswer": "27 bạn",
        "hint": "$45 : 5 \\times 3 = 27$ bạn.",
        "explanation": "27 bạn."
      },
      {
        "id": "m43-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một mô hình máy bay có tỉ lệ $1 : 72$. Biết sải cánh máy bay thật dài $36\\text{ m}$. Sải cánh trên mô hình dài:",
        "options": [
          "$50\\text{ cm}$",
          "$0,5\\text{ m}$",
          "$5\\text{ cm}$",
          "$25\\text{ cm}$"
        ],
        "correctAnswer": "$50\\text{ cm}$",
        "hint": "$36\\text{ m} = 3600\\text{ cm}$. $3600 : 72 = 50\\text{ cm} = 0,5\\text{ m}$.",
        "explanation": "$50\\text{ cm}$."
      },
      {
        "id": "m43-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một khu vườn hình vuông có chu vi thực tế là $200\\text{ m}$. Người ta vẽ khu vườn lên giấy với diện tích $25\\text{ cm}^2$. Tỉ lệ bản vẽ đó là:",
        "options": [
          "$1 : 1000$",
          "$1 : 500$",
          "$1 : 2000$",
          "$1 : 100$"
        ],
        "correctAnswer": "$1 : 1000$",
        "hint": "Cạnh thực tế = $200 : 4 = 50\\text{ m} = 5000\\text{ cm}$. Cạnh trên giấy = $5\\text{ cm}$. Tỉ lệ = $5 : 5000 = 1 : 1000$.",
        "explanation": "$1 : 1000$."
      },
      {
        "id": "m43-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Để ước lượng chiều rộng một dòng sông, người ta cắm cọc tạo thành hai tam giác đồng dạng với tỉ số đồng dạng $\\frac{1}{4}$. Nếu đoạn đo trên bờ ứng với chiều rộng sông đo được $12,5\\text{ m}$ thì khúc sông rộng:",
        "options": [
          "$50\\text{ m}$",
          "$45\\text{ m}$",
          "$60\\text{ m}$",
          "$37,5\\text{ m}$"
        ],
        "correctAnswer": "$50\\text{ m}$",
        "hint": "$12,5 \\times 4 = 50\\text{ m}$.",
        "explanation": "$50\\text{ m}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m43-s1",
        "prompt": "$10\\text{ m}$ vẽ tỉ lệ $1 : 100$ bằng:",
        "options": [
          "$10\\text{ cm}$",
          "$1\\text{ cm}$",
          "$100\\text{ cm}$",
          "$5\\text{ cm}$"
        ],
        "correctAnswer": "$10\\text{ cm}$",
        "explanation": "10 cm."
      },
      {
        "id": "m43-s2",
        "prompt": "Cạnh 4 cm phóng to gấp 3 lần thành:",
        "options": [
          "12 cm",
          "7 cm",
          "16 cm",
          "8 cm"
        ],
        "correctAnswer": "12 cm",
        "explanation": "12 cm."
      },
      {
        "id": "m43-s3",
        "prompt": "Tỉ số giữa 20 cm và 1 m là:",
        "options": [
          "$\\frac{1}{5}$",
          "$\\frac{1}{2}$",
          "20",
          "$\\frac{1}{10}$"
        ],
        "correctAnswer": "$\\frac{1}{5}$",
        "explanation": "$20 : 100 = \\frac{1}{5}$."
      }
    ]
  },
  "math-bai-44": {
    "practiceQuestions": [
      {
        "id": "m44-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tổng của hai số là 150, tỉ số của hai số là $\\frac{2}{3}$. Hai số đó là:",
        "options": [
          "60 và 90",
          "50 và 100",
          "70 và 80",
          "40 và 110"
        ],
        "correctAnswer": "60 và 90",
        "hint": "Tổng số phần: 5. 1 phần = 30. Hai số là 60 và 90.",
        "explanation": "60 và 90."
      },
      {
        "id": "m44-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hiệu của hai số là 36, tỉ số của hai số là $\\frac{3}{7}$. Hai số đó là:",
        "options": [
          "27 và 63",
          "18 và 54",
          "30 và 66",
          "24 và 60"
        ],
        "correctAnswer": "27 và 63",
        "hint": "Hiệu số phần: 4. 1 phần = 9. Hai số: $9 \\times 3 = 27$ và $9 \\times 7 = 63$.",
        "explanation": "27 và 63."
      },
      {
        "id": "m44-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khu đất hình chữ nhật có chu vi $240\\text{ m}$, chiều rộng bằng $\\frac{1}{3}$ chiều dài. Diện tích khu đất là:",
        "options": [
          "$2700\\text{ m}^2$",
          "$3600\\text{ m}^2$",
          "$1800\\text{ m}^2$",
          "$2400\\text{ m}^2$"
        ],
        "correctAnswer": "$2700\\text{ m}^2$",
        "hint": "Nửa chu vi = 120 m. Rộng = $120 : 4 = 30$ m. Dài = 90 m. Diện tích = $30 \\times 90 = 2700\\text{ m}^2$.",
        "explanation": "$2700\\text{ m}^2$."
      },
      {
        "id": "m44-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trên bản đồ tỉ lệ $1 : 200\\,000$, quãng đường từ thị xã đến bãi biển dài $14\\text{ cm}$. Độ dài thật của quãng đường là:",
        "options": [
          "$28\\text{ km}$",
          "$280\\text{ km}$",
          "$2,8\\text{ km}$",
          "$14\\text{ km}$"
        ],
        "correctAnswer": "$28\\text{ km}$",
        "hint": "$14 \\times 200\\,000 = 2\\,800\\,000\\text{ cm} = 28\\text{ km}$.",
        "explanation": "28 km."
      },
      {
        "id": "m44-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai cửa hàng có tổng cộng 560 hộp bánh. Nếu cửa hàng thứ nhất bán đi 40 hộp thì số bánh còn lại của cửa hàng thứ nhất bằng $\\frac{2}{3}$ số bánh cửa hàng thứ hai. Lúc đầu cửa hàng thứ hai có:",
        "options": [
          "312 hộp",
          "208 hộp",
          "300 hộp",
          "260 hộp"
        ],
        "correctAnswer": "312 hộp",
        "hint": "Sau khi bán 40 hộp, tổng bánh còn: $560 - 40 = 520$ hộp. Cửa hàng 2 có: $520 : (2 + 3) \\times 3 = 312$ hộp.",
        "explanation": "312 hộp bánh."
      },
      {
        "id": "m44-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một miếng đất trên bản đồ tỉ lệ $1 : 1000$ là hình chữ nhật dài $8\\text{ cm}$, rộng $5\\text{ cm}$. Diện tích thực tế của miếng đất là bao nhiêu héc-ta?",
        "options": [
          "$0,4\\text{ ha}$",
          "$4\\text{ ha}$",
          "$0,04\\text{ ha}$",
          "$40\\text{ ha}$"
        ],
        "correctAnswer": "$0,4\\text{ ha}$",
        "hint": "Dài thực: $80\\text{ m}$. Rộng thực: $50\\text{ m}$. Diện tích = $80 \\times 50 = 4000\\text{ m}^2 = 0,4\\text{ ha}$.",
        "explanation": "$0,4\\text{ ha}$."
      },
      {
        "id": "m44-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Hiện nay tuổi anh gấp 2 lần tuổi em. Cách đây 6 năm tuổi anh gấp 3 lần tuổi em. Tuổi em hiện nay là:",
        "options": [
          "12 tuổi",
          "14 tuổi",
          "10 tuổi",
          "16 tuổi"
        ],
        "correctAnswer": "12 tuổi",
        "hint": "Hiệu tuổi không đổi. Hiện nay anh hơn em 1 lần tuổi em. 6 năm trước anh hơn em 2 lần tuổi em khi đó. Vậy tuổi em hiện nay gấp 2 lần tuổi em 6 năm trước. Tuổi em hiện nay = $6 \\times 2 = 12$ tuổi.",
        "explanation": "Em hiện nay 12 tuổi."
      },
      {
        "id": "m44-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bể bơi hình chữ nhật có chu vi $100\\text{ m}$, chiều rộng bằng $\\frac{2}{3}$ chiều dài. Người ta làm lối đi vòng quanh bể bơi rộng $1\\text{ m}$. Diện tích của lối đi đó là:",
        "options": [
          "$104\\text{ m}^2$",
          "$100\\text{ m}^2$",
          "$96\\text{ m}^2$",
          "$110\\text{ m}^2$"
        ],
        "correctAnswer": "$104\\text{ m}^2$",
        "hint": "Dài = 30 m, rộng = 20 m. $S_{\\text{bể}} = 600\\text{ m}^2$. Kích thước ngoài: dài 32 m, rộng 22 m. $S_{\\text{ngoài}} = 32 \\times 22 = 704\\text{ m}^2$. Lối đi = $704 - 600 = 104\\text{ m}^2$.",
        "explanation": "$104\\text{ m}^2$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m44-s1",
        "prompt": "Tổng 40, tỉ số 1 : 1, mỗi số là:",
        "options": [
          "20",
          "40",
          "10",
          "30"
        ],
        "correctAnswer": "20",
        "explanation": "20."
      },
      {
        "id": "m44-s2",
        "prompt": "Hiệu 15, số lớn gấp 4 lần số bé, số bé:",
        "options": [
          "5",
          "10",
          "3",
          "6"
        ],
        "correctAnswer": "5",
        "explanation": "5."
      },
      {
        "id": "m44-s3",
        "prompt": "$3\\text{ cm}$ trên bản đồ $1 : 1000$ bằng thực tế:",
        "options": [
          "$30\\text{ m}$",
          "$3\\text{ m}$",
          "$300\\text{ m}$",
          "$0,3\\text{ m}$"
        ],
        "correctAnswer": "$30\\text{ m}$",
        "explanation": "30 m."
      }
    ]
  },
  "math-bai-45": {
    "practiceQuestions": [
      {
        "id": "m45-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Gieo một con xúc xắc 6 mặt cân đối. Khả năng xuất hiện mặt có 7 chấm là sự kiện:",
        "options": [
          "Không thể xảy ra",
          "Chắc chắn xảy ra",
          "Có thể xảy ra",
          "Rất có thể xảy ra"
        ],
        "correctAnswer": "Không thể xảy ra",
        "hint": "Con xúc xắc chỉ có các mặt từ 1 đến 6 chấm.",
        "explanation": "Sự kiện không thể xảy ra."
      },
      {
        "id": "m45-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong một hộp kín chỉ đựng 10 viên bi đỏ. Lấy ngẫu nhiên 1 viên bi thì sự kiện 'lấy được viên bi màu đỏ' là:",
        "options": [
          "Chắc chắn xảy ra",
          "Không thể xảy ra",
          "Có thể xảy ra",
          "Hiếm khi xảy ra"
        ],
        "correctAnswer": "Chắc chắn xảy ra",
        "hint": "Trong hộp chỉ có toàn bi đỏ nên chắc chắn lấy được bi đỏ.",
        "explanation": "Chắc chắn xảy ra."
      },
      {
        "id": "m45-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hộp có 3 quả bóng xanh và 7 quả bóng vàng. Bạn Nam nhắm mắt lấy ra 1 quả bóng. Khả năng nào sau đây là đúng?",
        "options": [
          "Khả năng lấy được bóng vàng cao hơn bóng xanh",
          "Khả năng lấy được bóng xanh cao hơn bóng vàng",
          "Hai khả năng bằng nhau",
          "Chắc chắn lấy được bóng vàng"
        ],
        "correctAnswer": "Khả năng lấy được bóng vàng cao hơn bóng xanh",
        "hint": "Vì số bóng vàng nhiều hơn số bóng xanh ($7 > 3$).",
        "explanation": "Khả năng lấy được bóng vàng cao hơn vì số lượng nhiều hơn."
      },
      {
        "id": "m45-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Quay một vòng quay may mắn chia đều thành 8 phần bằng nhau: 4 phần màu đỏ, 2 phần màu xanh, 2 phần màu vàng. Mũi tên dừng lại ở màu nào có khả năng xảy ra cao nhất?",
        "options": [
          "Màu đỏ",
          "Màu xanh",
          "Màu vàng",
          "Cả 3 màu bằng nhau"
        ],
        "correctAnswer": "Màu đỏ",
        "hint": "Màu đỏ chiếm số phần lớn nhất (4 phần).",
        "explanation": "Màu đỏ có khả năng cao nhất."
      },
      {
        "id": "m45-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Gieo một đồng xu có hai mặt (Sấp và Ngửa) một lần. Khả năng xuất hiện mặt Sấp là:",
        "options": [
          "Bằng khả năng xuất hiện mặt Ngửa",
          "Lớn hơn khả năng mặt Ngửa",
          "Bé hơn khả năng mặt Ngửa",
          "Chắc chắn xảy ra"
        ],
        "correctAnswer": "Bằng khả năng xuất hiện mặt Ngửa",
        "hint": "Hai mặt có cơ hội xuất hiện ngang nhau ($\\frac{1}{2}$).",
        "explanation": "Khả năng xuất hiện bằng nhau."
      },
      {
        "id": "m45-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong một túi có 5 thẻ số: 2, 4, 6, 8, 10. Rút ngẫu nhiên một thẻ, sự kiện nào sau đây là 'chắc chắn xảy ra'?",
        "options": [
          "Rút được thẻ ghi số chẵn",
          "Rút được thẻ ghi số lẻ",
          "Rút được số lớn hơn 5",
          "Rút được số nhỏ hơn 6"
        ],
        "correctAnswer": "Rút được thẻ ghi số chẵn",
        "hint": "Tất cả các thẻ 2, 4, 6, 8, 10 đều là số chẵn.",
        "explanation": "Chắc chắn rút được số chẵn."
      },
      {
        "id": "m45-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Gieo một con xúc xắc 6 mặt cân đối. Khả năng xuất hiện mặt có số chấm là số nguyên tố là:",
        "options": [
          "$\\frac{1}{2}$",
          "$\\frac{1}{3}$",
          "$\\frac{2}{3}$",
          "$\\frac{1}{6}$"
        ],
        "correctAnswer": "$\\frac{1}{2}$",
        "hint": "Các số nguyên tố trên mặt xúc xắc: 2, 3, 5 (có 3 mặt trong tổng số 6 mặt: $\\frac{3}{6} = \\frac{1}{2}$).",
        "explanation": "Tỉ lệ là $\\frac{1}{2}$ (50%)."
      },
      {
        "id": "m45-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hộp có 20 viên bi gồm 8 bi xanh, 7 bi đỏ và 5 bi vàng. Cần lấy ra ít nhất bao nhiêu viên bi (không nhìn vào hộp) để chắc chắn lấy được ít nhất 1 viên bi màu vàng?",
        "options": [
          "16 viên",
          "15 viên",
          "14 viên",
          "6 viên"
        ],
        "correctAnswer": "16 viên",
        "hint": "Trường hợp xấu nhất: lấy hết toàn bộ bi xanh và đỏ: $8 + 7 = 15$ viên. Cần thêm 1 viên nữa: $15 + 1 = 16$ viên để chắc chắn có vàng.",
        "explanation": "Cần lấy ít nhất 16 viên."
      }
    ],
    "speedQuestions": [
      {
        "id": "m45-s1",
        "prompt": "Tung đồng xu có mấy kết quả có thể xảy ra?",
        "options": [
          "2 kết quả",
          "1 kết quả",
          "3 kết quả",
          "4 kết quả"
        ],
        "correctAnswer": "2 kết quả",
        "explanation": "2 kết quả (Sấp hoặc Ngửa)."
      },
      {
        "id": "m45-s2",
        "prompt": "Xúc xắc 6 mặt có mấy mặt là số chẵn?",
        "options": [
          "3 mặt",
          "2 mặt",
          "4 mặt",
          "1 mặt"
        ],
        "correctAnswer": "3 mặt",
        "explanation": "3 mặt (2, 4, 6)."
      },
      {
        "id": "m45-s3",
        "prompt": "Ngày mai mặt trời mọc ở hướng Tây là sự kiện:",
        "options": [
          "Không thể xảy ra",
          "Có thể xảy ra",
          "Chắc chắn",
          "Tùy thời tiết"
        ],
        "correctAnswer": "Không thể xảy ra",
        "explanation": "Không thể xảy ra."
      }
    ]
  },
  "math-bai-46": {
    "practiceQuestions": [
      {
        "id": "m46-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tỉ số phần trăm của 28 và 70 là:",
        "options": [
          "40%",
          "28%",
          "70%",
          "35%"
        ],
        "correctAnswer": "40%",
        "hint": "$28 : 70 = 0,4 = 40\\%$.",
        "explanation": "40%."
      },
      {
        "id": "m46-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính $15\\%$ của $240\\text{ m}$:",
        "options": [
          "$36\\text{ m}$",
          "$32\\text{ m}$",
          "$40\\text{ m}$",
          "$24\\text{ m}$"
        ],
        "correctAnswer": "$36\\text{ m}$",
        "hint": "$240 \\times 15 : 100 = 36\\text{ m}$.",
        "explanation": "36 m."
      },
      {
        "id": "m46-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai số có tổng bằng 210, số lớn gấp 5 lần số bé. Số lớn là:",
        "options": [
          "175",
          "180",
          "160",
          "150"
        ],
        "correctAnswer": "175",
        "hint": "Tổng số phần: $1 + 5 = 6$. Số lớn: $210 : 6 \\times 5 = 175$.",
        "explanation": "175."
      },
      {
        "id": "m46-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trên bản đồ tỉ lệ $1 : 10\\,000$, chu vi một cái hồ là $18\\text{ cm}$. Chu vi thật của cái hồ là:",
        "options": [
          "$1,8\\text{ km}$",
          "$18\\text{ km}$",
          "$180\\text{ m}$",
          "$18\\text{ m}$"
        ],
        "correctAnswer": "$1,8\\text{ km}$",
        "hint": "$18 \\times 10\\,000 = 180\\,000\\text{ cm} = 1800\\text{ m} = 1,8\\text{ km}$.",
        "explanation": "1,8 km."
      },
      {
        "id": "m46-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cửa hàng bán một chiếc áo với giá 240 000 đồng, lãi được 20% so với giá bán. Tiền vốn chiếc áo đó là:",
        "options": [
          "192 000 đồng",
          "200 000 đồng",
          "180 000 đồng",
          "210 000 đồng"
        ],
        "correctAnswer": "192 000 đồng",
        "hint": "Tiền lãi = $240\\,000 \\times 20\\% = 48\\,000$ đồng. Tiền vốn = $240\\,000 - 48\\,000 = 192\\,000$ đồng.",
        "explanation": "192 000 đồng."
      },
      {
        "id": "m46-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong hộp có 6 quả cầu đỏ, 4 quả xanh và 2 quả vàng. Lấy ngẫu nhiên 1 quả cầu. Xác suất lấy được quả cầu đỏ là:",
        "options": [
          "$\\frac{1}{2}$",
          "$\\frac{1}{3}$",
          "$\\frac{1}{6}$",
          "$\\frac{2}{3}$"
        ],
        "correctAnswer": "$\\frac{1}{2}$",
        "hint": "Tổng số quả: $6 + 4 + 2 = 12$. Xác suất lấy bi đỏ: $\\frac{6}{12} = \\frac{1}{2}$.",
        "explanation": "$\\frac{1}{2}$."
      },
      {
        "id": "m46-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hình chữ nhật có chiều dài giảm 20%, chiều rộng tăng 20% thì diện tích thay đổi như thế nào?",
        "options": [
          "Giảm 4%",
          "Tăng 4%",
          "Không thay đổi",
          "Giảm 2%"
        ],
        "correctAnswer": "Giảm 4%",
        "hint": "$S' = (100\\% - 20\\%) \\times (100\\% + 20\\%) = 80\\% \\times 120\\% = 96\\%$. Diện tích giảm: $100\\% - 96\\% = 4\\%$.",
        "explanation": "Giảm 4%."
      },
      {
        "id": "m46-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Lớp 5A có 40 học sinh. Kiểm tra môn Toán có 30% đạt Giỏi, 50% đạt Khá, còn lại là Trung bình. Tỉ số giữa số học sinh Trung bình và số học sinh Giỏi là:",
        "options": [
          "$\\frac{2}{3}$",
          "$\\frac{1}{3}$",
          "$\\frac{1}{2}$",
          "$\\frac{3}{5}$"
        ],
        "correctAnswer": "$\\frac{2}{3}$",
        "hint": "Trung bình: $100\\% - (30\\% + 50\\%) = 20\\%$. Tỉ số Trung bình / Giỏi = $20\\% : 30\\% = \\frac{2}{3}$.",
        "explanation": "$\\frac{2}{3}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m46-s1",
        "prompt": "$25\\%$ của 200 là:",
        "options": [
          "50",
          "25",
          "100",
          "75"
        ],
        "correctAnswer": "50",
        "explanation": "50."
      },
      {
        "id": "m46-s2",
        "prompt": "Tỉ số của 5 và 20 dưới dạng phần trăm:",
        "options": [
          "25%",
          "20%",
          "50%",
          "15%"
        ],
        "correctAnswer": "25%",
        "explanation": "25%."
      },
      {
        "id": "m46-s3",
        "prompt": "Gieo đồng xu ngửa 1 lần có tỉ lệ:",
        "options": [
          "50%",
          "100%",
          "25%",
          "0%"
        ],
        "correctAnswer": "50%",
        "explanation": "50%."
      }
    ]
  },
  "math-bai-47": {
    "practiceQuestions": [
      {
        "id": "m47-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Thể tích của một hình là gì?",
        "options": [
          "Khoảng không gian mà hình đó chiếm chỗ",
          "Diện tích toàn bộ các mặt của hình đó",
          "Tổng độ dài tất cả các cạnh của hình",
          "Khối lượng của hình đó"
        ],
        "correctAnswer": "Khoảng không gian mà hình đó chiếm chỗ",
        "hint": "Thể tích biểu thị độ lớn của phần không gian bị vật thể chiếm.",
        "explanation": "Thể tích là khoảng không gian mà hình đó chiếm chỗ."
      },
      {
        "id": "m47-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình A gồm 6 hình lập phương nhỏ bằng nhau, hình B gồm 8 hình lập phương nhỏ như thế. So sánh thể tích:",
        "options": [
          "Thể tích hình A bé hơn thể tích hình B",
          "Thể tích hình A lớn hơn thể tích hình B",
          "Hai hình có thể tích bằng nhau",
          "Không so sánh được"
        ],
        "correctAnswer": "Thể tích hình A bé hơn thể tích hình B",
        "hint": "Hình nào chứa nhiều khối lập phương đơn vị hơn thì có thể tích lớn hơn.",
        "explanation": "Vì $6 < 8$ nên thể tích hình A bé hơn thể tích hình B."
      },
      {
        "id": "m47-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương lớn được ghép bởi 27 hình lập phương nhỏ cạnh $1\\text{ cm}$. Thể tích của hình lập phương lớn là:",
        "options": [
          "$27\\text{ cm}^3$",
          "$9\\text{ cm}^3$",
          "$54\\text{ cm}^3$",
          "$18\\text{ cm}^3$"
        ],
        "correctAnswer": "$27\\text{ cm}^3$",
        "hint": "Mỗi hình lập phương nhỏ có thể tích $1\\text{ cm}^3$. 27 hình có thể tích $27\\text{ cm}^3$.",
        "explanation": "$27\\text{ cm}^3$."
      },
      {
        "id": "m47-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Thả một hòn đá vào cốc nước đang chứa $150\\text{ ml}$ nước, mực nước dâng lên $210\\text{ ml}$. Thể tích của hòn đá là:",
        "options": [
          "$60\\text{ ml}$",
          "$210\\text{ ml}$",
          "$150\\text{ ml}$",
          "$360\\text{ ml}$"
        ],
        "correctAnswer": "$60\\text{ ml}$",
        "hint": "Thể tích nước dâng lên chính là thể tích hòn đá: $210 - 150 = 60\\text{ ml}$.",
        "explanation": "$60\\text{ ml}$ (hoặc $60\\text{ cm}^3$)."
      },
      {
        "id": "m47-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khối gỗ hình chữ nhật bị khoét đi một góc gồm 4 khối lập phương nhỏ $1\\text{ cm}^3$. Biết ban đầu khối gỗ gồm 24 khối nhỏ. Thể tích còn lại của khối gỗ là:",
        "options": [
          "$20\\text{ cm}^3$",
          "$28\\text{ cm}^3$",
          "$16\\text{ cm}^3$",
          "$24\\text{ cm}^3$"
        ],
        "correctAnswer": "$20\\text{ cm}^3$",
        "hint": "$24 - 4 = 20\\text{ cm}^3$.",
        "explanation": "$20\\text{ cm}^3$."
      },
      {
        "id": "m47-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai hình có hình dạng khác nhau nhưng cùng được ghép bởi 12 khối lập phương $1\\text{ cm}^3$. Thể tích của hai hình đó như thế nào?",
        "options": [
          "Bằng nhau",
          "Hình cao hơn có thể tích lớn hơn",
          "Hình dài hơn có thể tích lớn hơn",
          "Không bằng nhau"
        ],
        "correctAnswer": "Bằng nhau",
        "hint": "Cùng tạo từ số lượng khối đơn vị như nhau nên thể tích bằng nhau.",
        "explanation": "Thể tích hai hình bằng nhau."
      },
      {
        "id": "m47-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Người ta xếp các khối lập phương cạnh $1\\text{ cm}$ thành một khối hộp chữ nhật có chiều dài $5\\text{ cm}$, chiều rộng $4\\text{ cm}$, chiều cao $3\\text{ cm}$. Số khối lập phương nhỏ cần dùng là:",
        "options": [
          "60 khối",
          "24 khối",
          "48 khối",
          "12 khối"
        ],
        "correctAnswer": "60 khối",
        "hint": "Số khối = $5 \\times 4 \\times 3 = 60$ khối.",
        "explanation": "60 khối lập phương nhỏ."
      },
      {
        "id": "m47-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một khối lập phương cạnh $3\\text{ cm}$ được sơn tất cả các mặt ngoài rồi cắt thành 27 khối lập phương nhỏ cạnh $1\\text{ cm}$. Hỏi có bao nhiêu khối nhỏ không bị sơn mặt nào?",
        "options": [
          "1 khối",
          "6 khối",
          "8 khối",
          "12 khối"
        ],
        "correctAnswer": "1 khối",
        "hint": "Khối không sơn mặt nào nằm ở tâm khối lập phương: $(3 - 2) \\times (3 - 2) \\times (3 - 2) = 1$ khối.",
        "explanation": "1 khối ở chính giữa tâm."
      }
    ],
    "speedQuestions": [
      {
        "id": "m47-s1",
        "prompt": "Hình ghép bởi 5 khối lập phương 1 cm³ có thể tích:",
        "options": [
          "$5\\text{ cm}^3$",
          "$1\\text{ cm}^3$",
          "$25\\text{ cm}^3$",
          "$10\\text{ cm}^3$"
        ],
        "correctAnswer": "$5\\text{ cm}^3$",
        "explanation": "$5\\text{ cm}^3$."
      },
      {
        "id": "m47-s2",
        "prompt": "$1\\text{ ml}$ tương đương với:",
        "options": [
          "$1\\text{ cm}^3$",
          "$1\\text{ dm}^3$",
          "$1\\text{ m}^3$",
          "$10\\text{ cm}^3$"
        ],
        "correctAnswer": "$1\\text{ cm}^3$",
        "explanation": "1 cm³."
      },
      {
        "id": "m47-s3",
        "prompt": "2 hình cùng gồm 8 khối đơn vị thì thể tích:",
        "options": [
          "Bằng nhau",
          "Khác nhau",
          "Gấp đôi",
          "Không xác định"
        ],
        "correctAnswer": "Bằng nhau",
        "explanation": "Bằng nhau."
      }
    ]
  },
  "math-bai-48": {
    "practiceQuestions": [
      {
        "id": "m48-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$1\\text{ dm}^3$ bằng bao nhiêu xăng-ti-mét khối?",
        "options": [
          "$1000\\text{ cm}^3$",
          "$100\\text{ cm}^3$",
          "$10\\text{ cm}^3$",
          "$10\\,000\\text{ cm}^3$"
        ],
        "correctAnswer": "$1000\\text{ cm}^3$",
        "hint": "$1\\text{ dm} = 10\\text{ cm} \\Rightarrow 1\\text{ dm}^3 = 10 \\times 10 \\times 10 = 1000\\text{ cm}^3$.",
        "explanation": "$1\\text{ dm}^3 = 1000\\text{ cm}^3$."
      },
      {
        "id": "m48-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Mối quan hệ giữa đề-xi-mét khối ($\\text{dm}^3$) và lít ($\\text{l}$) là:",
        "options": [
          "$1\\text{ dm}^3 = 1\\text{ l}$",
          "$1\\text{ dm}^3 = 10\\text{ l}$",
          "$1\\text{ dm}^3 = 100\\text{ l}$",
          "$1\\text{ dm}^3 = 0,1\\text{ l}$"
        ],
        "correctAnswer": "$1\\text{ dm}^3 = 1\\text{ l}$",
        "hint": "$1\\text{ dm}^3$ chính bằng thể tích chứa được $1\\text{ lít}$ nước.",
        "explanation": "$1\\text{ dm}^3 = 1\\text{ lít}$."
      },
      {
        "id": "m48-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đổi $4,5\\text{ dm}^3$ ra đơn vị xăng-ti-mét khối:",
        "options": [
          "$4500\\text{ cm}^3$",
          "$450\\text{ cm}^3$",
          "$45\\text{ cm}^3$",
          "$45\\,000\\text{ cm}^3$"
        ],
        "correctAnswer": "$4500\\text{ cm}^3$",
        "hint": "$4,5 \\times 1000 = 4500\\text{ cm}^3$.",
        "explanation": "$4500\\text{ cm}^3$."
      },
      {
        "id": "m48-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số thập phân thích hợp điền vào chỗ chấm: $350\\text{ cm}^3 = ...\\text{ dm}^3$:",
        "options": [
          "$0,35\\text{ dm}^3$",
          "$3,5\\text{ dm}^3$",
          "$0,035\\text{ dm}^3$",
          "$35\\text{ dm}^3$"
        ],
        "correctAnswer": "$0,35\\text{ dm}^3$",
        "hint": "$350 : 1000 = 0,35\\text{ dm}^3$.",
        "explanation": "$0,35\\text{ dm}^3$."
      },
      {
        "id": "m48-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$5\\text{ dm}^3\\text{ } 45\\text{ cm}^3 = ...\\text{ cm}^3$:",
        "options": [
          "$5045\\text{ cm}^3$",
          "$545\\text{ cm}^3$",
          "$5450\\text{ cm}^3$",
          "$500\\,045\\text{ cm}^3$"
        ],
        "correctAnswer": "$5045\\text{ cm}^3$",
        "hint": "$5\\text{ dm}^3 = 5000\\text{ cm}^3$. $5000 + 45 = 5045\\text{ cm}^3$.",
        "explanation": "$5045\\text{ cm}^3$."
      },
      {
        "id": "m48-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $2\\text{ dm}^3\\text{ } 8\\text{ cm}^3 \\; ... \\; 2,08\\text{ dm}^3$:",
        "options": [
          "<",
          ">",
          "=",
          "Không so sánh được"
        ],
        "correctAnswer": "<",
        "hint": "$2\\text{ dm}^3\\text{ } 8\\text{ cm}^3 = 2,008\\text{ dm}^3 < 2,08\\text{ dm}^3$.",
        "explanation": "$2,008\\text{ dm}^3 < 2,08\\text{ dm}^3$."
      },
      {
        "id": "m48-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cái bình chứa $1,8\\text{ dm}^3$ nước ngọt. Rót đều vào 9 cốc nhỏ, mỗi cốc chứa:",
        "options": [
          "$200\\text{ cm}^3$",
          "$20\\text{ cm}^3$",
          "$2\\text{ cm}^3$",
          "$2000\\text{ cm}^3$"
        ],
        "correctAnswer": "$200\\text{ cm}^3$",
        "hint": "$1,8\\text{ dm}^3 = 1800\\text{ cm}^3$. $1800 : 9 = 200\\text{ cm}^3$.",
        "explanation": "$200\\text{ cm}^3$."
      },
      {
        "id": "m48-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bể cá dạng hình hộp chữ nhật chứa $24\\text{ lít}$ nước thì đầy $\\frac{2}{3}$ bể. Thể tích của bể cá là:",
        "options": [
          "$36\\text{ dm}^3$",
          "$36\\text{ cm}^3$",
          "$16\\text{ dm}^3$",
          "$40\\text{ dm}^3$"
        ],
        "correctAnswer": "$36\\text{ dm}^3$",
        "hint": "Toàn bộ bể chứa: $24 : 2 \\times 3 = 36\\text{ lít} = 36\\text{ dm}^3$.",
        "explanation": "$36\\text{ dm}^3$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m48-s1",
        "prompt": "$2\\text{ dm}^3 = ...\\text{ cm}^3$",
        "options": [
          "$2000\\text{ cm}^3$",
          "$200\\text{ cm}^3$",
          "$20\\text{ cm}^3$",
          "$20\\,000\\text{ cm}^3$"
        ],
        "correctAnswer": "$2000\\text{ cm}^3$",
        "explanation": "2000 cm³."
      },
      {
        "id": "m48-s2",
        "prompt": "$5\\text{ lít} = ...\\text{ dm}^3$",
        "options": [
          "$5\\text{ dm}^3$",
          "$50\\text{ dm}^3$",
          "$500\\text{ dm}^3$",
          "$0,5\\text{ dm}^3$"
        ],
        "correctAnswer": "$5\\text{ dm}^3$",
        "explanation": "5 dm³."
      },
      {
        "id": "m48-s3",
        "prompt": "$1000\\text{ cm}^3 = ...\\text{ lít}$",
        "options": [
          "$1\\text{ lít}$",
          "$10\\text{ lít}$",
          "$0,1\\text{ lít}$",
          "$100\\text{ lít}$"
        ],
        "correctAnswer": "$1\\text{ lít}$",
        "explanation": "1 lít."
      }
    ]
  },
  "math-bai-49": {
    "practiceQuestions": [
      {
        "id": "m49-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$1\\text{ m}^3$ bằng bao nhiêu đề-xi-mét khối ($\\text{dm}^3$)?",
        "options": [
          "$1000\\text{ dm}^3$",
          "$100\\text{ dm}^3$",
          "$10\\text{ dm}^3$",
          "$1\\,000\\,000\\text{ dm}^3$"
        ],
        "correctAnswer": "$1000\\text{ dm}^3$",
        "hint": "$1\\text{ m} = 10\\text{ dm} \\Rightarrow 1\\text{ m}^3 = 1000\\text{ dm}^3$.",
        "explanation": "$1\\text{ m}^3 = 1000\\text{ dm}^3$."
      },
      {
        "id": "m49-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "$1\\text{ m}^3$ bằng bao nhiêu xăng-ti-mét khối ($\\text{cm}^3$)?",
        "options": [
          "$1\\,000\\,000\\text{ cm}^3$",
          "$100\\,000\\text{ cm}^3$",
          "$10\\,000\\text{ cm}^3$",
          "$1000\\text{ cm}^3$"
        ],
        "correctAnswer": "$1\\,000\\,000\\text{ cm}^3$",
        "hint": "$1\\text{ m}^3 = 1000 \\times 1000\\text{ cm}^3 = 1\\,000\\,000\\text{ cm}^3$.",
        "explanation": "$1\\,000\\,000\\text{ cm}^3$."
      },
      {
        "id": "m49-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đổi $3,2\\text{ m}^3$ ra đơn vị đề-xi-mét khối (lít):",
        "options": [
          "$3200\\text{ dm}^3$",
          "$320\\text{ dm}^3$",
          "$32\\text{ dm}^3$",
          "$32\\,000\\text{ dm}^3$"
        ],
        "correctAnswer": "$3200\\text{ dm}^3$",
        "hint": "$3,2 \\times 1000 = 3200\\text{ dm}^3$.",
        "explanation": "$3200\\text{ dm}^3$ (tương đương 3200 lít)."
      },
      {
        "id": "m49-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "$750\\text{ dm}^3 = ...\\text{ m}^3$:",
        "options": [
          "$0,75\\text{ m}^3$",
          "$7,5\\text{ m}^3$",
          "$0,075\\text{ m}^3$",
          "$75\\text{ m}^3$"
        ],
        "correctAnswer": "$0,75\\text{ m}^3$",
        "hint": "$750 : 1000 = 0,75\\text{ m}^3$.",
        "explanation": "$0,75\\text{ m}^3$."
      },
      {
        "id": "m49-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một bể nước chứa được $4,5\\text{ m}^3$ nước. Hỏi bể đó chứa được bao nhiêu lít nước?",
        "options": [
          "$4500\\text{ lít}$",
          "$450\\text{ lít}$",
          "$45\\text{ lít}$",
          "$45\\,000\\text{ lít}$"
        ],
        "correctAnswer": "$4500\\text{ lít}$",
        "hint": "$1\\text{ m}^3 = 1000\\text{ dm}^3 = 1000\\text{ lít}$. $4,5 \\times 1000 = 4500\\text{ lít}$.",
        "explanation": "4500 lít."
      },
      {
        "id": "m49-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $2\\text{ m}^3\\text{ } 50\\text{ dm}^3 \\; ... \\; 2,5\\text{ m}^3$:",
        "options": [
          "<",
          ">",
          "=",
          "Không so sánh được"
        ],
        "correctAnswer": "<",
        "hint": "$2\\text{ m}^3\\text{ } 50\\text{ dm}^3 = 2,05\\text{ m}^3 < 2,5\\text{ m}^3$.",
        "explanation": "$2,05\\text{ m}^3 < 2,5\\text{ m}^3$."
      },
      {
        "id": "m49-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hố cát dạng hình hộp chữ nhật dài $6\\text{ m}$, rộng $2,5\\text{ m}$ và sâu $0,8\\text{ m}$. Người ta dùng xe tải chở cát đổ đầy hố, mỗi chuyến chở được $3\\text{ m}^3$ cát. Cần ít nhất bao nhiêu chuyến xe?",
        "options": [
          "4 chuyến",
          "3 chuyến",
          "5 chuyến",
          "6 chuyến"
        ],
        "correctAnswer": "4 chuyến",
        "hint": "Thể tích hố = $6 \\times 2,5 \\times 0,8 = 12\\text{ m}^3$. Số chuyến = $12 : 3 = 4$ chuyến.",
        "explanation": "4 chuyến xe."
      },
      {
        "id": "m49-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một phòng học dài $8\\text{ m}$, rộng $6\\text{ m}$, cao $3,5\\text{ m}$. Biết phòng có 32 học sinh và 1 giáo viên. Trung bình mỗi người có bao nhiêu mét khối không khí để thở?",
        "options": [
          "$5,09\\text{ m}^3$",
          "$5,25\\text{ m}^3$",
          "$4,8\\text{ m}^3$",
          "$6\\text{ m}^3$"
        ],
        "correctAnswer": "$5,09\\text{ m}^3$",
        "hint": "Thể tích phòng = $8 \\times 6 \\times 3,5 = 168\\text{ m}^3$. Tổng số người = $32 + 1 = 33$ người. Trung bình = $168 : 33 \\approx 5,09\\text{ m}^3$.",
        "explanation": "Khoảng 5,09 m³."
      }
    ],
    "speedQuestions": [
      {
        "id": "m49-s1",
        "prompt": "$1\\text{ m}^3 = ...\\text{ lít}$",
        "options": [
          "$1000\\text{ lít}$",
          "$100\\text{ lít}$",
          "$10\\text{ lít}$",
          "$10\\,000\\text{ lít}$"
        ],
        "correctAnswer": "$1000\\text{ lít}$",
        "explanation": "1000 lít."
      },
      {
        "id": "m49-s2",
        "prompt": "$3000\\text{ dm}^3 = ...\\text{ m}^3$",
        "options": [
          "$3\\text{ m}^3$",
          "$30\\text{ m}^3$",
          "$0,3\\text{ m}^3$",
          "$300\\text{ m}^3$"
        ],
        "correctAnswer": "$3\\text{ m}^3$",
        "explanation": "3 m³."
      },
      {
        "id": "m49-s3",
        "prompt": "$0,5\\text{ m}^3 = ...\\text{ dm}^3$",
        "options": [
          "$500\\text{ dm}^3$",
          "$50\\text{ dm}^3$",
          "$5000\\text{ dm}^3$",
          "$5\\text{ dm}^3$"
        ],
        "correctAnswer": "$500\\text{ dm}^3$",
        "explanation": "500 dm³."
      }
    ]
  },
  "math-bai-50": {
    "practiceQuestions": [
      {
        "id": "m50-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong bảng đơn vị đo thể tích, mỗi đơn vị đo thể tích gấp bao nhiêu lần đơn vị bé hơn tiếp liền?",
        "options": [
          "1000 lần",
          "100 lần",
          "10 lần",
          "10 000 lần"
        ],
        "correctAnswer": "1000 lần",
        "hint": "Mỗi đơn vị đo thể tích lớn gấp 1000 lần đơn vị bé liền sau nó.",
        "explanation": "1000 lần."
      },
      {
        "id": "m50-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Mỗi đơn vị đo thể tích bằng bao nhiêu phần đơn vị lớn hơn tiếp liền?",
        "options": [
          "$\\frac{1}{1000}$",
          "$\\frac{1}{100}$",
          "$\\frac{1}{10}$",
          "$\\frac{1}{10\\,000}$"
        ],
        "correctAnswer": "$\\frac{1}{1000}$",
        "hint": "Ví dụ: $1\\text{ dm}^3 = \\frac{1}{1000}\\text{ m}^3$.",
        "explanation": "$\\frac{1}{1000}$ lần."
      },
      {
        "id": "m50-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Viết số thích hợp vào chỗ chấm: $0,05\\text{ m}^3 = ...\\text{ cm}^3$:",
        "options": [
          "$50\\,000\\text{ cm}^3$",
          "$5000\\text{ cm}^3$",
          "$500\\text{ cm}^3$",
          "$500\\,000\\text{ cm}^3$"
        ],
        "correctAnswer": "$50\\,000\\text{ cm}^3$",
        "hint": "$0,05 \\times 1\\,000\\,000 = 50\\,000\\text{ cm}^3$.",
        "explanation": "$50\\,000\\text{ cm}^3$."
      },
      {
        "id": "m50-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Số thập phân thích hợp điền vào chỗ chấm: $4\\text{ m}^3\\text{ } 25\\text{ dm}^3 = ...\\text{ m}^3$:",
        "options": [
          "$4,025\\text{ m}^3$",
          "$4,25\\text{ m}^3$",
          "$4,250\\text{ m}^3$",
          "$4,0025\\text{ m}^3$"
        ],
        "correctAnswer": "$4,025\\text{ m}^3$",
        "hint": "$25\\text{ dm}^3 = 0,025\\text{ m}^3$.",
        "explanation": "$4,025\\text{ m}^3$."
      },
      {
        "id": "m50-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Sắp xếp theo thứ tự từ lớn đến bé: $1,2\\text{ m}^3 ; 1250\\text{ dm}^3 ; 1\\,190\\,000\\text{ cm}^3$:",
        "options": [
          "$1250\\text{ dm}^3 > 1,2\\text{ m}^3 > 1\\,190\\,000\\text{ cm}^3$",
          "$1,2\\text{ m}^3 > 1250\\text{ dm}^3 > 1\\,190\\,000\\text{ cm}^3$",
          "$1\\,190\\,000\\text{ cm}^3 > 1250\\text{ dm}^3 > 1,2\\text{ m}^3$",
          "$1250\\text{ dm}^3 > 1\\,190\\,000\\text{ cm}^3 > 1,2\\text{ m}^3$"
        ],
        "correctAnswer": "$1250\\text{ dm}^3 > 1,2\\text{ m}^3 > 1\\,190\\,000\\text{ cm}^3$",
        "hint": "Đổi về $\\text{dm}^3$: $1,2\\text{ m}^3 = 1200\\text{ dm}^3$; $1\\,190\\,000\\text{ cm}^3 = 1190\\text{ dm}^3$. So sánh: $1250 > 1200 > 1190$.",
        "explanation": "$1250\\text{ dm}^3 > 1,2\\text{ m}^3 > 1\\,190\\,000\\text{ cm}^3$."
      },
      {
        "id": "m50-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $3,5\\text{ m}^3 + 450\\text{ dm}^3 = ...\\text{ dm}^3$:",
        "options": [
          "$3950\\text{ dm}^3$",
          "$3550\\text{ dm}^3$",
          "$800\\text{ dm}^3$",
          "$395\\text{ dm}^3$"
        ],
        "correctAnswer": "$3950\\text{ dm}^3$",
        "hint": "$3,5\\text{ m}^3 = 3500\\text{ dm}^3$. $3500 + 450 = 3950\\text{ dm}^3$.",
        "explanation": "$3950\\text{ dm}^3$."
      },
      {
        "id": "m50-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cái bể dạng hình hộp chữ nhật đang chứa $2,4\\text{ m}^3$ nước. Người ta mở một vòi nước chảy vào bể mỗi phút được $40\\text{ lít}$. Sau 45 phút thì bể đầy. Dung tích của bể nước đó là:",
        "options": [
          "$4,2\\text{ m}^3$",
          "$420\\text{ dm}^3$",
          "$3,6\\text{ m}^3$",
          "$4\\text{ m}^3$"
        ],
        "correctAnswer": "$4,2\\text{ m}^3$",
        "hint": "Lượng nước chảy thêm: $40 \\times 45 = 1800\\text{ lít} = 1,8\\text{ m}^3$. Dung tích bể = $2,4 + 1,8 = 4,2\\text{ m}^3$.",
        "explanation": "$4,2\\text{ m}^3$."
      },
      {
        "id": "m50-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một khối sắt đặc dạng hình lập phương cạnh $0,2\\text{ m}$. Biết mỗi đề-xi-mét khối sắt cân nặng $7,8\\text{ kg}$. Toàn bộ khối sắt đó cân nặng:",
        "options": [
          "$62,4\\text{ kg}$",
          "$624\\text{ kg}$",
          "$31,2\\text{ kg}$",
          "$15,6\\text{ kg}$"
        ],
        "correctAnswer": "$62,4\\text{ kg}$",
        "hint": "Cạnh = $2\\text{ dm}$. Thể tích = $2 \\times 2 \\times 2 = 8\\text{ dm}^3$. Khối lượng = $8 \\times 7,8 = 62,4\\text{ kg}$.",
        "explanation": "62,4 kg."
      }
    ],
    "speedQuestions": [
      {
        "id": "m50-s1",
        "prompt": "$1\\text{ dm}^3 = ...\\text{ cm}^3$",
        "options": [
          "$1000\\text{ cm}^3$",
          "$100\\text{ cm}^3$",
          "$10\\text{ cm}^3$",
          "$10\\,000\\text{ cm}^3$"
        ],
        "correctAnswer": "$1000\\text{ cm}^3$",
        "explanation": "1000 cm³."
      },
      {
        "id": "m50-s2",
        "prompt": "$1\\text{ m}^3 = ...\\text{ dm}^3$",
        "options": [
          "$1000\\text{ dm}^3$",
          "$100\\text{ dm}^3$",
          "$10\\,000\\text{ dm}^3$",
          "$10\\text{ dm}^3$"
        ],
        "correctAnswer": "$1000\\text{ dm}^3$",
        "explanation": "1000 dm³."
      },
      {
        "id": "m50-s3",
        "prompt": "$2,5\\text{ dm}^3 = ...\\text{ cm}^3$",
        "options": [
          "$2500\\text{ cm}^3$",
          "$250\\text{ cm}^3$",
          "$25\\text{ cm}^3$",
          "$25\\,000\\text{ cm}^3$"
        ],
        "correctAnswer": "$2500\\text{ cm}^3$",
        "explanation": "2500 cm³."
      }
    ]
  },
  "math-bai-51": {
    "practiceQuestions": [
      {
        "id": "m51-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số thập phân thích hợp điền vào chỗ chấm: $6\\text{ dm}^3\\text{ } 8\\text{ cm}^3 = ...\\text{ dm}^3$:",
        "options": [
          "$6,008\\text{ dm}^3$",
          "$6,08\\text{ dm}^3$",
          "$6,8\\text{ dm}^3$",
          "$68\\text{ dm}^3$"
        ],
        "correctAnswer": "$6,008\\text{ dm}^3$",
        "hint": "$8\\text{ cm}^3 = 0,008\\text{ dm}^3$.",
        "explanation": "$6,008\\text{ dm}^3$."
      },
      {
        "id": "m51-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Điền dấu thích hợp: $0,8\\text{ m}^3 \\; ... \\; 800\\text{ dm}^3$:",
        "options": [
          "=",
          ">",
          "<",
          "Không so sánh được"
        ],
        "correctAnswer": "=",
        "hint": "$0,8\\text{ m}^3 = 800\\text{ dm}^3$.",
        "explanation": "Bằng nhau."
      },
      {
        "id": "m51-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $4,5\\text{ m}^3 - 1800\\text{ dm}^3 = ...\\text{ m}^3$:",
        "options": [
          "$2,7\\text{ m}^3$",
          "$3,7\\text{ m}^3$",
          "$2700\\text{ m}^3$",
          "$2,3\\text{ m}^3$"
        ],
        "correctAnswer": "$2,7\\text{ m}^3$",
        "hint": "$1800\\text{ dm}^3 = 1,8\\text{ m}^3$. $4,5 - 1,8 = 2,7\\text{ m}^3$.",
        "explanation": "$2,7\\text{ m}^3$."
      },
      {
        "id": "m51-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cái bể hình hộp chữ nhật chứa $3600\\text{ lít}$ nước. Đổi sang mét khối được:",
        "options": [
          "$3,6\\text{ m}^3$",
          "$36\\text{ m}^3$",
          "$0,36\\text{ m}^3$",
          "$360\\text{ m}^3$"
        ],
        "correctAnswer": "$3,6\\text{ m}^3$",
        "hint": "$3600\\text{ lít} = 3600\\text{ dm}^3 = 3,6\\text{ m}^3$.",
        "explanation": "$3,6\\text{ m}^3$."
      },
      {
        "id": "m51-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương có thể tích là $64\\text{ cm}^3$. Độ dài một cạnh của hình lập phương đó là:",
        "options": [
          "$4\\text{ cm}$",
          "$8\\text{ cm}$",
          "$16\\text{ cm}$",
          "$2\\text{ cm}$"
        ],
        "correctAnswer": "$4\\text{ cm}$",
        "hint": "$4 \\times 4 \\times 4 = 64\\text{ cm}^3$.",
        "explanation": "4 cm."
      },
      {
        "id": "m51-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một thùng chứa nước dạng hình hộp chữ nhật có diện tích đáy là $1,5\\text{ m}^2$ và chiều cao $0,8\\text{ m}$. Thể tích của thùng nước là:",
        "options": [
          "$1,2\\text{ m}^3$",
          "$2,3\\text{ m}^3$",
          "$12\\text{ m}^3$",
          "$0,12\\text{ m}^3$"
        ],
        "correctAnswer": "$1,2\\text{ m}^3$",
        "hint": "$V = S_{\\text{đáy}} \\times h = 1,5 \\times 0,8 = 1,2\\text{ m}^3$.",
        "explanation": "$1,2\\text{ m}^3$."
      },
      {
        "id": "m51-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bể bơi hình chữ nhật dài $25\\text{ m}$, rộng $12\\text{ m}$ và sâu $1,5\\text{ m}$. Người ta bơm nước vào bể sao cho mực nước cách miệng bể $30\\text{ cm}$. Số mét khối nước có trong bể là:",
        "options": [
          "$360\\text{ m}^3$",
          "$450\\text{ m}^3$",
          "$390\\text{ m}^3$",
          "$300\\text{ m}^3$"
        ],
        "correctAnswer": "$360\\text{ m}^3$",
        "hint": "Chiều cao mực nước = $1,5 - 0,3 = 1,2\\text{ m}$. Thể tích nước = $25 \\times 12 \\times 1,2 = 360\\text{ m}^3$.",
        "explanation": "$360\\text{ m}^3$."
      },
      {
        "id": "m51-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cái bể dạng hình hộp chữ nhật dài $1,8\\text{ m}$, rộng $1,5\\text{ m}$, cao $1,2\\text{ m}$. Khi bể không có nước, người ta mở vòi chảy mỗi giờ $900\\text{ lít}$. Sau bao lâu thì nước đầy bể?",
        "options": [
          "$3,6\\text{ giờ}$",
          "$3\\text{ giờ}$",
          "$4\\text{ giờ}$",
          "$3,2\\text{ giờ}$"
        ],
        "correctAnswer": "$3,6\\text{ giờ}$",
        "hint": "Thể tích bể = $1,8 \\times 1,5 \\times 1,2 = 3,24\\text{ m}^3 = 3240\\text{ lít}$. Thời gian = $3240 : 900 = 3,6\\text{ giờ}$.",
        "explanation": "3,6 giờ (3 giờ 36 phút)."
      }
    ],
    "speedQuestions": [
      {
        "id": "m51-s1",
        "prompt": "$0,2\\text{ m}^3 = ...\\text{ lít}$",
        "options": [
          "$200\\text{ lít}$",
          "$20\\text{ lít}$",
          "$2000\\text{ lít}$",
          "$2\\text{ lít}$"
        ],
        "correctAnswer": "$200\\text{ lít}$",
        "explanation": "200 lít."
      },
      {
        "id": "m51-s2",
        "prompt": "$5000\\text{ cm}^3 = ...\\text{ dm}^3$",
        "options": [
          "$5\\text{ dm}^3$",
          "$50\\text{ dm}^3$",
          "$0,5\\text{ dm}^3$",
          "$500\\text{ dm}^3$"
        ],
        "correctAnswer": "$5\\text{ dm}^3$",
        "explanation": "5 dm³."
      },
      {
        "id": "m51-s3",
        "prompt": "Cạnh lập phương 2 cm thì thể tích là:",
        "options": [
          "$8\\text{ cm}^3$",
          "$6\\text{ cm}^3$",
          "$4\\text{ cm}^3$",
          "$16\\text{ cm}^3$"
        ],
        "correctAnswer": "$8\\text{ cm}^3$",
        "explanation": "8 cm³."
      }
    ]
  },
  "math-bai-52": {
    "practiceQuestions": [
      {
        "id": "m52-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình hộp chữ nhật có bao nhiêu mặt, bao nhiêu đỉnh và bao nhiêu cạnh?",
        "options": [
          "6 mặt, 8 đỉnh, 12 cạnh",
          "6 mặt, 12 đỉnh, 8 cạnh",
          "8 mặt, 6 đỉnh, 12 cạnh",
          "6 mặt, 8 đỉnh, 8 cạnh"
        ],
        "correctAnswer": "6 mặt, 8 đỉnh, 12 cạnh",
        "hint": "Hình hộp chữ nhật và hình lập phương đều có 6 mặt, 8 đỉnh, 12 cạnh.",
        "explanation": "6 mặt, 8 đỉnh, 12 cạnh."
      },
      {
        "id": "m52-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Các mặt của hình lập phương đều là hình gì?",
        "options": [
          "Hình vuông",
          "Hình chữ nhật",
          "Hình bình hành",
          "Hình thoi"
        ],
        "correctAnswer": "Hình vuông",
        "hint": "Hình lập phương có 6 mặt là các hình vuông bằng nhau.",
        "explanation": "Hình vuông."
      },
      {
        "id": "m52-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hình hộp chữ nhật có 3 kích thước lần lượt là:",
        "options": [
          "Chiều dài, chiều rộng, chiều cao",
          "Đáy lớn, đáy bé, chiều cao",
          "Bán kính, đường kính, chu vi",
          "Cạnh đáy, cạnh bên, chiều cao"
        ],
        "correctAnswer": "Chiều dài, chiều rộng, chiều cao",
        "hint": "Ba kích thước của hình hộp chữ nhật là dài, rộng và cao.",
        "explanation": "Chiều dài, chiều rộng, chiều cao."
      },
      {
        "id": "m52-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương có cạnh $5\\text{ cm}$. Tổng độ dài tất cả các cạnh của hình lập phương đó là:",
        "options": [
          "$60\\text{ cm}$",
          "$40\\text{ cm}$",
          "$30\\text{ cm}$",
          "$50\\text{ cm}$"
        ],
        "correctAnswer": "$60\\text{ cm}$",
        "hint": "Hình lập phương có 12 cạnh bằng nhau: $5 \\times 12 = 60\\text{ cm}$.",
        "explanation": "60 cm."
      },
      {
        "id": "m52-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình hộp chữ nhật có chiều dài $8\\text{ cm}$, chiều rộng $5\\text{ cm}$, chiều cao $4\\text{ cm}$. Tổng độ dài tất cả các cạnh của hình hộp đó là:",
        "options": [
          "$68\\text{ cm}$",
          "$34\\text{ cm}$",
          "$51\\text{ cm}$",
          "$60\\text{ cm}$"
        ],
        "correctAnswer": "$68\\text{ cm}$",
        "hint": "Tổng độ dài các cạnh = $(8 + 5 + 4) \\times 4 = 17 \\times 4 = 68\\text{ cm}$.",
        "explanation": "68 cm."
      },
      {
        "id": "m52-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hình lập phương là trường hợp đặc biệt của hình nào sau đây?",
        "options": [
          "Hình hộp chữ nhật",
          "Hình trụ",
          "Hình chóp",
          "Hình cầu"
        ],
        "correctAnswer": "Hình hộp chữ nhật",
        "hint": "Hình lập phương là hình hộp chữ nhật có chiều dài = chiều rộng = chiều cao.",
        "explanation": "Hình hộp chữ nhật."
      },
      {
        "id": "m52-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Người ta làm một khung lồng sắt hình hộp chữ nhật có chiều dài $1,5\\text{ m}$, chiều rộng $0,8\\text{ m}$ và chiều cao $1\\text{ m}$. Cần bao nhiêu mét sắt để làm đủ các cạnh khung lồng?",
        "options": [
          "$13,2\\text{ m}$",
          "$6,6\\text{ m}$",
          "$16,5\\text{ m}$",
          "$12\\text{ m}$"
        ],
        "correctAnswer": "$13,2\\text{ m}$",
        "hint": "Tổng các cạnh = $(1,5 + 0,8 + 1) \\times 4 = 3,3 \\times 4 = 13,2\\text{ m}$.",
        "explanation": "13,2 m."
      },
      {
        "id": "m52-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương có tổng diện tích 6 mặt là $96\\text{ cm}^2$. Diện tích của 1 mặt hình lập phương đó là:",
        "options": [
          "$16\\text{ cm}^2$",
          "$24\\text{ cm}^2$",
          "$12\\text{ cm}^2$",
          "$8\\text{ cm}^2$"
        ],
        "correctAnswer": "$16\\text{ cm}^2$",
        "hint": "Diện tích 1 mặt = $96 : 6 = 16\\text{ cm}^2$.",
        "explanation": "$16\\text{ cm}^2$ (cạnh là 4 cm)."
      }
    ],
    "speedQuestions": [
      {
        "id": "m52-s1",
        "prompt": "Hình hộp chữ nhật có bao nhiêu đỉnh?",
        "options": [
          "8 đỉnh",
          "6 đỉnh",
          "12 đỉnh",
          "4 đỉnh"
        ],
        "correctAnswer": "8 đỉnh",
        "explanation": "8 đỉnh."
      },
      {
        "id": "m52-s2",
        "prompt": "Hình lập phương có bao nhiêu cạnh?",
        "options": [
          "12 cạnh",
          "8 cạnh",
          "6 cạnh",
          "10 cạnh"
        ],
        "correctAnswer": "12 cạnh",
        "explanation": "12 cạnh."
      },
      {
        "id": "m52-s3",
        "prompt": "Cạnh lập phương 3 cm thì chu vi 1 mặt là:",
        "options": [
          "12 cm",
          "9 cm",
          "6 cm",
          "15 cm"
        ],
        "correctAnswer": "12 cm",
        "explanation": "12 cm."
      }
    ]
  },
  "math-bai-53": {
    "practiceQuestions": [
      {
        "id": "m53-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Muốn tính diện tích xung quanh của hình hộp chữ nhật ta làm thế nào?",
        "options": [
          "Lấy chu vi mặt đáy nhân với chiều cao (cùng một đơn vị đo)",
          "Lấy diện tích mặt đáy nhân với chiều cao",
          "Lấy chiều dài nhân chiều rộng nhân chiều cao",
          "Lấy chu vi mặt đáy cộng với chiều cao"
        ],
        "correctAnswer": "Lấy chu vi mặt đáy nhân với chiều cao (cùng một đơn vị đo)",
        "hint": "$S_{xq} = C_{\\text{đáy}} \\times h = (a + b) \\times 2 \\times h$.",
        "explanation": "Chu vi mặt đáy nhân với chiều cao."
      },
      {
        "id": "m53-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Diện tích toàn phần của hình hộp chữ nhật bằng:",
        "options": [
          "Diện tích xung quanh cộng diện tích hai mặt đáy",
          "Diện tích xung quanh cộng diện tích một mặt đáy",
          "Diện tích xung quanh nhân 2",
          "Chu vi đáy nhân 2"
        ],
        "correctAnswer": "Diện tích xung quanh cộng diện tích hai mặt đáy",
        "hint": "$S_{tp} = S_{xq} + S_{\\text{đáy}} \\times 2$.",
        "explanation": "Diện tích xung quanh cộng diện tích hai mặt đáy."
      },
      {
        "id": "m53-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình hộp chữ nhật có chiều dài $5\\text{ cm}$, chiều rộng $4\\text{ cm}$, chiều cao $3\\text{ cm}$. Diện tích xung quanh của hình hộp đó là:",
        "options": [
          "$54\\text{ cm}^2$",
          "$27\\text{ cm}^2$",
          "$60\\text{ cm}^2$",
          "$40\\text{ cm}^2$"
        ],
        "correctAnswer": "$54\\text{ cm}^2$",
        "hint": "$S_{xq} = (5 + 4) \\times 2 \\times 3 = 18 \\times 3 = 54\\text{ cm}^2$.",
        "explanation": "$54\\text{ cm}^2$."
      },
      {
        "id": "m53-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính diện tích toàn phần của hình hộp chữ nhật có chiều dài $5\\text{ cm}$, chiều rộng $4\\text{ cm}$ và chiều cao $3\\text{ cm}$:",
        "options": [
          "$94\\text{ cm}^2$",
          "$54\\text{ cm}^2$",
          "$40\\text{ cm}^2$",
          "$74\\text{ cm}^2$"
        ],
        "correctAnswer": "$94\\text{ cm}^2$",
        "hint": "$S_{\\text{đáy}} = 5 \\times 4 = 20\\text{ cm}^2$. $S_{tp} = 54 + 20 \\times 2 = 94\\text{ cm}^2$.",
        "explanation": "$94\\text{ cm}^2$."
      },
      {
        "id": "m53-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cái thùng tôn không có nắp dạng hình hộp chữ nhật có chiều dài $1,2\\text{ m}$, chiều rộng $0,8\\text{ m}$ và chiều cao $0,6\\text{ m}$. Diện tích tôn dùng để làm thùng (không kể mép hàn) là:",
        "options": [
          "$3,36\\text{ m}^2$",
          "$2,4\\text{ m}^2$",
          "$4,32\\text{ m}^2$",
          "$3,84\\text{ m}^2$"
        ],
        "correctAnswer": "$3,36\\text{ m}^2$",
        "hint": "Thùng không nắp chỉ có 1 đáy: $S_{xq} = (1,2 + 0,8) \\times 2 \\times 0,6 = 2,4\\text{ m}^2$. $S_{\\text{đáy}} = 1,2 \\times 0,8 = 0,96\\text{ m}^2$. Diện tích tôn = $2,4 + 0,96 = 3,36\\text{ m}^2$.",
        "explanation": "$3,36\\text{ m}^2$."
      },
      {
        "id": "m53-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một căn phòng học hình hộp chữ nhật dài $8\\text{ m}$, rộng $6\\text{ m}$, cao $4\\text{ m}$. Diện tích cần quét vôi bên trong 4 bức tường là bao nhiêu nếu tổng diện tích các cửa là $15\\text{ m}^2$?",
        "options": [
          "$97\\text{ m}^2$",
          "$112\\text{ m}^2$",
          "$160\\text{ m}^2$",
          "$82\\text{ m}^2$"
        ],
        "correctAnswer": "$97\\text{ m}^2$",
        "hint": "$S_{xq} = (8 + 6) \\times 2 \\times 4 = 112\\text{ m}^2$. Diện tích quét vôi = $112 - 15 = 97\\text{ m}^2$.",
        "explanation": "$97\\text{ m}^2$."
      },
      {
        "id": "m53-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hình hộp chữ nhật có diện tích xung quanh là $120\\text{ cm}^2$, chiều cao $5\\text{ cm}$. Chiều dài hơn chiều rộng $4\\text{ cm}$. Diện tích toàn phần của hình hộp chữ nhật đó là:",
        "options": [
          "$184\\text{ cm}^2$",
          "$152\\text{ cm}^2$",
          "$160\\text{ cm}^2$",
          "$196\\text{ cm}^2$"
        ],
        "correctAnswer": "$184\\text{ cm}^2$",
        "hint": "Chu vi đáy = $120 : 5 = 24\\text{ cm}$. Nửa chu vi = 12 cm. Dài = $(12 + 4) : 2 = 8\\text{ cm}$, rộng = 4 cm. $S_{\\text{đáy}} = 8 \\times 4 = 32\\text{ cm}^2$. $S_{tp} = 120 + 32 \\times 2 = 184\\text{ cm}^2$.",
        "explanation": "$184\\text{ cm}^2$."
      },
      {
        "id": "m53-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Người ta sơn cả mặt trong và mặt ngoài của một cái hòm gỗ không nắp có chiều dài $1,5\\text{ m}$, chiều rộng $1\\text{ m}$, chiều cao $0,8\\text{ m}$. Cứ mỗi mét vuông sơn hết 20 000 đồng tiền sơn. Tổng chi phí tiền sơn là:",
        "options": [
          "220 000 đồng",
          "110 000 đồng",
          "240 000 đồng",
          "180 000 đồng"
        ],
        "correctAnswer": "220 000 đồng",
        "hint": "Diện tích 1 mặt ngoài không nắp: $S_{xq} + S_{\\text{đáy}} = (1,5 + 1) \\times 2 \\times 0,8 + 1,5 \\times 1 = 4 + 1,5 = 5,5\\text{ m}^2$. Cả trong và ngoài: $5,5 \\times 2 = 11\\text{ m}^2$. Tiền sơn: $11 \\times 20\\,000 = 220\\,000$ đồng.",
        "explanation": "220 000 đồng."
      }
    ],
    "speedQuestions": [
      {
        "id": "m53-s1",
        "prompt": "Chu vi đáy 20 cm, cao 5 cm thì S xung quanh là:",
        "options": [
          "$100\\text{ cm}^2$",
          "$50\\text{ cm}^2$",
          "$200\\text{ cm}^2$",
          "$25\\text{ cm}^2$"
        ],
        "correctAnswer": "$100\\text{ cm}^2$",
        "explanation": "$20 \\times 5 = 100\\text{ cm}^2$."
      },
      {
        "id": "m53-s2",
        "prompt": "S xung quanh 60 cm², diện tích 2 đáy 40 cm², S toàn phần là:",
        "options": [
          "$100\\text{ cm}^2$",
          "$80\\text{ cm}^2$",
          "$140\\text{ cm}^2$",
          "$120\\text{ cm}^2$"
        ],
        "correctAnswer": "$100\\text{ cm}^2$",
        "explanation": "100 cm²."
      },
      {
        "id": "m53-s3",
        "prompt": "Thùng không nắp có mấy mặt đáy?",
        "options": [
          "1 mặt đáy",
          "2 mặt đáy",
          "0 mặt đáy",
          "4 mặt đáy"
        ],
        "correctAnswer": "1 mặt đáy",
        "explanation": "1 mặt đáy."
      }
    ]
  },
  "math-bai-54": {
    "practiceQuestions": [
      {
        "id": "m54-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Công thức tính diện tích xung quanh của hình lập phương cạnh $a$ là:",
        "options": [
          "$S_{xq} = a \\times a \\times 4$",
          "$S_{xq} = a \\times a \\times 6$",
          "$S_{xq} = a \\times 4$",
          "$S_{xq} = a \\times a \\times a$"
        ],
        "correctAnswer": "$S_{xq} = a \\times a \\times 4$",
        "hint": "Diện tích xung quanh gồm 4 mặt hình vuông bằng nhau.",
        "explanation": "$S_{xq} = a \\times a \\times 4$."
      },
      {
        "id": "m54-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Công thức tính diện tích toàn phần của hình lập phương cạnh $a$ là:",
        "options": [
          "$S_{tp} = a \\times a \\times 6$",
          "$S_{tp} = a \\times a \\times 4$",
          "$S_{tp} = a \\times 6$",
          "$S_{tp} = a \\times 12$"
        ],
        "correctAnswer": "$S_{tp} = a \\times a \\times 6$",
        "hint": "Diện tích toàn phần gồm tất cả 6 mặt hình vuông bằng nhau.",
        "explanation": "$S_{tp} = a \\times a \\times 6$."
      },
      {
        "id": "m54-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương có cạnh $6\\text{ cm}$. Diện tích xung quanh của hình lập phương đó là:",
        "options": [
          "$144\\text{ cm}^2$",
          "$216\\text{ cm}^2$",
          "$36\\text{ cm}^2$",
          "$72\\text{ cm}^2$"
        ],
        "correctAnswer": "$144\\text{ cm}^2$",
        "hint": "$S_{xq} = 6 \\times 6 \\times 4 = 144\\text{ cm}^2$.",
        "explanation": "$144\\text{ cm}^2$."
      },
      {
        "id": "m54-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương có cạnh $5\\text{ dm}$. Diện tích toàn phần của hình lập phương đó là:",
        "options": [
          "$150\\text{ dm}^2$",
          "$100\\text{ dm}^2$",
          "$125\\text{ dm}^2$",
          "$25\\text{ dm}^2$"
        ],
        "correctAnswer": "$150\\text{ dm}^2$",
        "hint": "$S_{tp} = 5 \\times 5 \\times 6 = 150\\text{ dm}^2$.",
        "explanation": "$150\\text{ dm}^2$."
      },
      {
        "id": "m54-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương có diện tích xung quanh là $64\\text{ cm}^2$. Cạnh của hình lập phương đó là:",
        "options": [
          "$4\\text{ cm}$",
          "$8\\text{ cm}$",
          "$16\\text{ cm}$",
          "$2\\text{ cm}$"
        ],
        "correctAnswer": "$4\\text{ cm}$",
        "hint": "Diện tích 1 mặt = $64 : 4 = 16\\text{ cm}^2$. Cạnh = $4\\text{ cm}$ vì $4 \\times 4 = 16$.",
        "explanation": "4 cm."
      },
      {
        "id": "m54-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Người ta làm một cái hộp hình lập phương bằng bìa cứng không có nắp cạnh $10\\text{ cm}$. Diện tích bìa cần dùng để làm hộp là:",
        "options": [
          "$500\\text{ cm}^2$",
          "$600\\text{ cm}^2$",
          "$400\\text{ cm}^2$",
          "$1000\\text{ cm}^2$"
        ],
        "correctAnswer": "$500\\text{ cm}^2$",
        "hint": "Hộp không nắp có 5 mặt: $10 \\times 10 \\times 5 = 500\\text{ cm}^2$.",
        "explanation": "$500\\text{ cm}^2$."
      },
      {
        "id": "m54-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nếu cạnh của hình lập phương gấp lên 3 lần thì diện tích toàn phần của nó gấp lên mấy lần?",
        "options": [
          "9 lần",
          "3 lần",
          "6 lần",
          "27 lần"
        ],
        "correctAnswer": "9 lần",
        "hint": "$S = a \\times a \\times 6$. Khi cạnh là $3a$ thì $S' = 3a \\times 3a \\times 6 = 9 \\times S$.",
        "explanation": "Gấp lên 9 lần."
      },
      {
        "id": "m54-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Hai hình lập phương có tỉ số cạnh là $\\frac{1}{2}$. Tỉ số diện tích toàn phần của hình lập phương bé và hình lập phương lớn là:",
        "options": [
          "$\\frac{1}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{1}{8}$",
          "$\\frac{1}{6}$"
        ],
        "correctAnswer": "$\\frac{1}{4}$",
        "hint": "Tỉ số diện tích bằng bình phương tỉ số cạnh: $(\\frac{1}{2})^2 = \\frac{1}{4}$.",
        "explanation": "$\\frac{1}{4}$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m54-s1",
        "prompt": "Lập phương cạnh 2 cm có S xung quanh là:",
        "options": [
          "$16\\text{ cm}^2$",
          "$24\\text{ cm}^2$",
          "$8\\text{ cm}^2$",
          "$12\\text{ cm}^2$"
        ],
        "correctAnswer": "$16\\text{ cm}^2$",
        "explanation": "$2 \\times 2 \\times 4 = 16\\text{ cm}^2$."
      },
      {
        "id": "m54-s2",
        "prompt": "Lập phương cạnh 1 dm có S toàn phần là:",
        "options": [
          "$6\\text{ dm}^2$",
          "$4\\text{ dm}^2$",
          "$1\\text{ dm}^2$",
          "$24\\text{ dm}^2$"
        ],
        "correctAnswer": "$6\\text{ dm}^2$",
        "explanation": "6 dm²."
      },
      {
        "id": "m54-s3",
        "prompt": "Nếu cạnh gấp 2 thì S xung quanh gấp:",
        "options": [
          "4 lần",
          "2 lần",
          "8 lần",
          "6 lần"
        ],
        "correctAnswer": "4 lần",
        "explanation": "4 lần."
      }
    ]
  },
  "math-bai-55": {
    "practiceQuestions": [
      {
        "id": "m55-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Công thức tính thể tích hình hộp chữ nhật có chiều dài $a$, chiều rộng $b$, chiều cao $c$ là:",
        "options": [
          "$V = a \\times b \\times c$",
          "$V = (a + b) \\times c$",
          "$V = (a + b) \\times 2 \\times c$",
          "$V = a \\times b + c$"
        ],
        "correctAnswer": "$V = a \\times b \\times c$",
        "hint": "Thể tích bằng chiều dài nhân chiều rộng rồi nhân chiều cao (cùng đơn vị đo).",
        "explanation": "$V = a \\times b \\times c$."
      },
      {
        "id": "m55-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính thể tích hình hộp chữ nhật có chiều dài $7\\text{ cm}$, chiều rộng $4\\text{ cm}$, chiều cao $5\\text{ cm}$:",
        "options": [
          "$140\\text{ cm}^3$",
          "$110\\text{ cm}^3$",
          "$70\\text{ cm}^3$",
          "$160\\text{ cm}^3$"
        ],
        "correctAnswer": "$140\\text{ cm}^3$",
        "hint": "$V = 7 \\times 4 \\times 5 = 140\\text{ cm}^3$.",
        "explanation": "$140\\text{ cm}^3$."
      },
      {
        "id": "m55-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính thể tích hình hộp chữ nhật có chiều dài $2,5\\text{ m}$, chiều rộng $1,2\\text{ m}$ và chiều cao $1\\text{ m}$:",
        "options": [
          "$3\\text{ m}^3$",
          "$30\\text{ m}^3$",
          "$4,7\\text{ m}^3$",
          "$300\\text{ m}^3$"
        ],
        "correctAnswer": "$3\\text{ m}^3$",
        "hint": "$V = 2,5 \\times 1,2 \\times 1 = 3\\text{ m}^3$.",
        "explanation": "$3\\text{ m}^3$."
      },
      {
        "id": "m55-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một bể cá dạng hình hộp chữ nhật có diện tích đáy là $24\\text{ dm}^2$ và chiều cao $5\\text{ dm}$. Thể tích của bể cá là:",
        "options": [
          "$120\\text{ dm}^3$",
          "$60\\text{ dm}^3$",
          "$144\\text{ dm}^3$",
          "$100\\text{ dm}^3$"
        ],
        "correctAnswer": "$120\\text{ dm}^3$",
        "hint": "$V = S_{\\text{đáy}} \\times h = 24 \\times 5 = 120\\text{ dm}^3$.",
        "explanation": "$120\\text{ dm}^3$ (120 lít)."
      },
      {
        "id": "m55-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình hộp chữ nhật có thể tích $240\\text{ cm}^3$, chiều dài $8\\text{ cm}$ và chiều rộng $6\\text{ cm}$. Chiều cao của hình hộp là:",
        "options": [
          "$5\\text{ cm}$",
          "$6\\text{ cm}$",
          "$4\\text{ cm}$",
          "$10\\text{ cm}$"
        ],
        "correctAnswer": "$5\\text{ cm}$",
        "hint": "Chiều cao = $240 : (8 \\times 6) = 240 : 48 = 5\\text{ cm}$.",
        "explanation": "5 cm."
      },
      {
        "id": "m55-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khối bê tông hình hộp chữ nhật có chiều dài $1,5\\text{ m}$, chiều rộng $0,6\\text{ m}$, chiều cao $0,4\\text{ m}$. Biết $1\\text{ m}^3$ bê tông nặng $2,4\\text{ tấn}$. Khối bê tông đó nặng:",
        "options": [
          "$0,864\\text{ tấn}$",
          "$8,64\\text{ tấn}$",
          "$1,44\\text{ tấn}$",
          "$2,16\\text{ tấn}$"
        ],
        "correctAnswer": "$0,864\\text{ tấn}$",
        "hint": "$V = 1,5 \\times 0,6 \\times 0,4 = 0,36\\text{ m}^3$. Khối lượng = $0,36 \\times 2,4 = 0,864\\text{ tấn}$.",
        "explanation": "$0,864\\text{ tấn}$."
      },
      {
        "id": "m55-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bể nước dạng hình hộp chữ nhật có kích thước trong lòng bể: dài $2\\text{ m}$, rộng $1,5\\text{ m}$, cao $1\\text{ m}$. Mực nước hiện có trong bể cao bằng $\\frac{4}{5}$ chiều cao bể. Cần đổ thêm bao nhiêu lít nước để đầy bể?",
        "options": [
          "$600\\text{ lít}$",
          "$2400\\text{ lít}$",
          "$3000\\text{ lít}$",
          "$500\\text{ lít}$"
        ],
        "correctAnswer": "$600\\text{ lít}$",
        "hint": "Phần cần đổ thêm chiếm: $1 - \\frac{4}{5} = \\frac{1}{5}$ bể. Thể tích bể = $2 \\times 1,5 \\times 1 = 3\\text{ m}^3 = 3000\\text{ lít}$. Cần thêm: $3000 : 5 = 600\\text{ lít}$.",
        "explanation": "600 lít."
      },
      {
        "id": "m55-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một hình hộp chữ nhật có chiều dài gấp đôi chiều rộng, chiều cao bằng chiều rộng. Biết thể tích là $128\\text{ cm}^3$. Chiều dài của hình hộp đó là:",
        "options": [
          "$8\\text{ cm}$",
          "$4\\text{ cm}$",
          "$16\\text{ cm}$",
          "$6\\text{ cm}$"
        ],
        "correctAnswer": "$8\\text{ cm}$",
        "hint": "$V = 2a \\times a \\times a = 2a^3 = 128 \\Rightarrow a^3 = 64 \\Rightarrow a = 4\\text{ cm}$. Chiều dài = $2 \\times 4 = 8\\text{ cm}$.",
        "explanation": "8 cm."
      }
    ],
    "speedQuestions": [
      {
        "id": "m55-s1",
        "prompt": "Kích thước 2 cm, 3 cm, 4 cm có thể tích là:",
        "options": [
          "$24\\text{ cm}^3$",
          "$18\\text{ cm}^3$",
          "$12\\text{ cm}^3$",
          "$36\\text{ cm}^3$"
        ],
        "correctAnswer": "$24\\text{ cm}^3$",
        "explanation": "24 cm³."
      },
      {
        "id": "m55-s2",
        "prompt": "Đáy 10 cm², cao 5 cm có thể tích là:",
        "options": [
          "$50\\text{ cm}^3$",
          "$25\\text{ cm}^3$",
          "$15\\text{ cm}^3$",
          "$100\\text{ cm}^3$"
        ],
        "correctAnswer": "$50\\text{ cm}^3$",
        "explanation": "50 cm³."
      },
      {
        "id": "m55-s3",
        "prompt": "Kích thước 1 m, 1 m, 1 m có thể tích:",
        "options": [
          "$1\\text{ m}^3$",
          "$3\\text{ m}^3$",
          "$100\\text{ dm}^3$",
          "$10\\text{ m}^3$"
        ],
        "correctAnswer": "$1\\text{ m}^3$",
        "explanation": "1 m³."
      }
    ]
  },
  "math-bai-56": {
    "practiceQuestions": [
      {
        "id": "m56-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Công thức tính thể tích hình lập phương cạnh $a$ là:",
        "options": [
          "$V = a \\times a \\times a$",
          "$V = a \\times a \\times 6$",
          "$V = a \\times a \\times 4$",
          "$V = a \\times 12$"
        ],
        "correctAnswer": "$V = a \\times a \\times a$",
        "hint": "Thể tích bằng cạnh nhân cạnh rồi nhân cạnh.",
        "explanation": "$V = a \\times a \\times a$."
      },
      {
        "id": "m56-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính thể tích hình lập phương có cạnh $3\\text{ cm}$:",
        "options": [
          "$27\\text{ cm}^3$",
          "$9\\text{ cm}^3$",
          "$54\\text{ cm}^3$",
          "$36\\text{ cm}^3$"
        ],
        "correctAnswer": "$27\\text{ cm}^3$",
        "hint": "$V = 3 \\times 3 \\times 3 = 27\\text{ cm}^3$.",
        "explanation": "$27\\text{ cm}^3$."
      },
      {
        "id": "m56-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính thể tích hình lập phương có cạnh $0,5\\text{ m}$:",
        "options": [
          "$0,125\\text{ m}^3$",
          "$1,25\\text{ m}^3$",
          "$0,25\\text{ m}^3$",
          "$12,5\\text{ m}^3$"
        ],
        "correctAnswer": "$0,125\\text{ m}^3$",
        "hint": "$V = 0,5 \\times 0,5 \\times 0,5 = 0,125\\text{ m}^3$.",
        "explanation": "$0,125\\text{ m}^3$."
      },
      {
        "id": "m56-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương có diện tích toàn phần là $54\\text{ cm}^2$. Thể tích của hình lập phương đó là:",
        "options": [
          "$27\\text{ cm}^3$",
          "$18\\text{ cm}^3$",
          "$36\\text{ cm}^3$",
          "$9\\text{ cm}^3$"
        ],
        "correctAnswer": "$27\\text{ cm}^3$",
        "hint": "Diện tích 1 mặt = $54 : 6 = 9\\text{ cm}^2$. Cạnh = 3 cm. $V = 3 \\times 3 \\times 3 = 27\\text{ cm}^3$.",
        "explanation": "$27\\text{ cm}^3$."
      },
      {
        "id": "m56-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khối kim loại hình lập phương cạnh $0,4\\text{ dm}$. Biết mỗi xăng-ti-mét khối kim loại nặng $7,5\\text{ g}$. Khối kim loại đó cân nặng:",
        "options": [
          "$480\\text{ g}$",
          "$48\\text{ g}$",
          "$240\\text{ g}$",
          "$4,8\\text{ kg}$"
        ],
        "correctAnswer": "$480\\text{ g}$",
        "hint": "$0,4\\text{ dm} = 4\\text{ cm}$. Thể tích = $4 \\times 4 \\times 4 = 64\\text{ cm}^3$. Khối lượng = $64 \\times 7,5 = 480\\text{ g}$.",
        "explanation": "480 g."
      },
      {
        "id": "m56-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một bể nước hình lập phương có cạnh trong lòng bể dài $1,4\\text{ m}$. Bể có thể chứa được tối đa bao nhiêu lít nước?",
        "options": [
          "$2744\\text{ lít}$",
          "$274,4\\text{ lít}$",
          "$1960\\text{ lít}$",
          "$2800\\text{ lít}$"
        ],
        "correctAnswer": "$2744\\text{ lít}$",
        "hint": "$V = 1,4 \\times 1,4 \\times 1,4 = 2,744\\text{ m}^3 = 2744\\text{ lít}$.",
        "explanation": "2744 lít."
      },
      {
        "id": "m56-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nếu cạnh một hình lập phương gấp lên 2 lần thì thể tích của hình lập phương đó gấp lên mấy lần?",
        "options": [
          "8 lần",
          "4 lần",
          "6 lần",
          "2 lần"
        ],
        "correctAnswer": "8 lần",
        "hint": "$V = a^3$. Khi cạnh là $2a$ thì $V' = (2a)^3 = 8a^3 = 8V$.",
        "explanation": "Gấp lên 8 lần."
      },
      {
        "id": "m56-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Người ta xếp các khối lập phương nhỏ cạnh $1\\text{ cm}$ thành một khối lập phương lớn cạnh $10\\text{ cm}$ rồi sơn tất cả 6 mặt ngoài. Hỏi có bao nhiêu khối lập phương nhỏ được sơn đúng 2 mặt?",
        "options": [
          "96 khối",
          "64 khối",
          "8 khối",
          "104 khối"
        ],
        "correctAnswer": "96 khối",
        "hint": "Các khối sơn 2 mặt nằm trên các cạnh (trừ 8 đỉnh): $(10 - 2) \\times 12 = 8 \\times 12 = 96$ khối.",
        "explanation": "96 khối."
      }
    ],
    "speedQuestions": [
      {
        "id": "m56-s1",
        "prompt": "Lập phương cạnh 1 cm có thể tích:",
        "options": [
          "$1\\text{ cm}^3$",
          "$6\\text{ cm}^3$",
          "$3\\text{ cm}^3$",
          "$4\\text{ cm}^3$"
        ],
        "correctAnswer": "$1\\text{ cm}^3$",
        "explanation": "1 cm³."
      },
      {
        "id": "m56-s2",
        "prompt": "Lập phương cạnh 2 dm có thể tích:",
        "options": [
          "$8\\text{ dm}^3$",
          "$6\\text{ dm}^3$",
          "$4\\text{ dm}^3$",
          "$16\\text{ dm}^3$"
        ],
        "correctAnswer": "$8\\text{ dm}^3$",
        "explanation": "8 dm³."
      },
      {
        "id": "m56-s3",
        "prompt": "Nếu cạnh gấp 3 lần thì thể tích gấp:",
        "options": [
          "27 lần",
          "9 lần",
          "3 lần",
          "6 lần"
        ],
        "correctAnswer": "27 lần",
        "explanation": "27 lần."
      }
    ]
  },
  "math-bai-57": {
    "practiceQuestions": [
      {
        "id": "m57-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính diện tích xung quanh của hình hộp chữ nhật có chu vi đáy $18\\text{ cm}$ và chiều cao $6\\text{ cm}$:",
        "options": [
          "$108\\text{ cm}^2$",
          "$54\\text{ cm}^2$",
          "$72\\text{ cm}^2$",
          "$216\\text{ cm}^2$"
        ],
        "correctAnswer": "$108\\text{ cm}^2$",
        "hint": "$S_{xq} = 18 \\times 6 = 108\\text{ cm}^2$.",
        "explanation": "$108\\text{ cm}^2$."
      },
      {
        "id": "m57-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính thể tích hình lập phương cạnh $4\\text{ dm}$:",
        "options": [
          "$64\\text{ dm}^3$",
          "$96\\text{ dm}^3$",
          "$16\\text{ dm}^3$",
          "$32\\text{ dm}^3$"
        ],
        "correctAnswer": "$64\\text{ dm}^3$",
        "hint": "$4 \\times 4 \\times 4 = 64\\text{ dm}^3$.",
        "explanation": "$64\\text{ dm}^3$."
      },
      {
        "id": "m57-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình hộp chữ nhật có chiều dài $2\\text{ m}$, chiều rộng $1,5\\text{ m}$, chiều cao $1,2\\text{ m}$. Thể tích của hình hộp đó là:",
        "options": [
          "$3,6\\text{ m}^3$",
          "$4,2\\text{ m}^3$",
          "$36\\text{ m}^3$",
          "$2,7\\text{ m}^3$"
        ],
        "correctAnswer": "$3,6\\text{ m}^3$",
        "hint": "$V = 2 \\times 1,5 \\times 1,2 = 3,6\\text{ m}^3$.",
        "explanation": "$3,6\\text{ m}^3$."
      },
      {
        "id": "m57-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khối gỗ hình lập phương có cạnh $6\\text{ dm}$. Người ta xẻ khối gỗ đó thành các khối lập phương nhỏ cạnh $1\\text{ dm}$. Số khối nhỏ thu được là:",
        "options": [
          "216 khối",
          "36 khối",
          "144 khối",
          "72 khối"
        ],
        "correctAnswer": "216 khối",
        "hint": "Số khối nhỏ = $6 \\times 6 \\times 6 = 216$ khối.",
        "explanation": "216 khối."
      },
      {
        "id": "m57-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cái thùng dạng hình hộp chữ nhật có chiều dài $80\\text{ cm}$, chiều rộng $50\\text{ cm}$ và thể tích $160\\text{ dm}^3$. Chiều cao của thùng là:",
        "options": [
          "$40\\text{ cm}$",
          "$4\\text{ cm}$",
          "$400\\text{ cm}$",
          "$25\\text{ cm}$"
        ],
        "correctAnswer": "$40\\text{ cm}$",
        "hint": "Đổi sang dm: dài 8 dm, rộng 5 dm. $h = 160 : (8 \\times 5) = 4\\text{ dm} = 40\\text{ cm}$.",
        "explanation": "40 cm."
      },
      {
        "id": "m57-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Diện tích toàn phần của một hình lập phương là $294\\text{ cm}^2$. Thể tích của hình lập phương đó là:",
        "options": [
          "$343\\text{ cm}^3$",
          "$49\\text{ cm}^3$",
          "$196\\text{ cm}^3$",
          "$216\\text{ cm}^3$"
        ],
        "correctAnswer": "$343\\text{ cm}^3$",
        "hint": "Diện tích 1 mặt = $294 : 6 = 49\\text{ cm}^2 \\Rightarrow$ Cạnh = $7\\text{ cm}$. Thể tích = $7 \\times 7 \\times 7 = 343\\text{ cm}^3$.",
        "explanation": "$343\\text{ cm}^3$."
      },
      {
        "id": "m57-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bể bơi hình hộp chữ nhật có chiều dài $20\\text{ m}$, rộng $10\\text{ m}$ và sâu $1,8\\text{ m}$. Người ta lát gạch men xung quanh và đáy bể bằng các viên gạch men hình vuông cạnh $20\\text{ cm}$. Số viên gạch cần dùng (không kể mép vữa) là:",
        "options": [
          "7700 viên",
          "5000 viên",
          "2700 viên",
          "8000 viên"
        ],
        "correctAnswer": "7700 viên",
        "hint": "$S_{xq} = (20 + 10) \\times 2 \\times 1,8 = 108\\text{ m}^2$. $S_{\\text{đáy}} = 20 \\times 10 = 200\\text{ m}^2$. Tổng diện tích lát = $308\\text{ m}^2 = 3\\,080\\,000\\text{ cm}^2$. Diện tích 1 viên gạch = $400\\text{ cm}^2$. Số viên = $3\\,080\\,000 : 400 = 7700$ viên.",
        "explanation": "7700 viên gạch."
      },
      {
        "id": "m57-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cái bể dạng hình hộp chữ nhật có chiều dài $2,5\\text{ m}$, rộng $1,6\\text{ m}$ và chiều cao $1,4\\text{ m}$. Bể đang chứa nước đến mức cao $0,6\\text{ m}$. Người ta thả vào bể một khối đá thì mực nước dâng lên cao $0,8\\text{ m}$. Thể tích của khối đá là:",
        "options": [
          "$0,8\\text{ m}^3$",
          "$0,6\\text{ m}^3$",
          "$1,2\\text{ m}^3$",
          "$0,4\\text{ m}^3$"
        ],
        "correctAnswer": "$0,8\\text{ m}^3$",
        "hint": "Mực nước dâng thêm: $0,8 - 0,6 = 0,2\\text{ m}$. Thể tích khối đá = $2,5 \\times 1,6 \\times 0,2 = 0,8\\text{ m}^3$.",
        "explanation": "$0,8\\text{ m}^3$."
      }
    ],
    "speedQuestions": [
      {
        "id": "m57-s1",
        "prompt": "Lập phương có 1 mặt 9 cm² thì thể tích là:",
        "options": [
          "$27\\text{ cm}^3$",
          "$81\\text{ cm}^3$",
          "$18\\text{ cm}^3$",
          "$36\\text{ cm}^3$"
        ],
        "correctAnswer": "$27\\text{ cm}^3$",
        "explanation": "27 cm³."
      },
      {
        "id": "m57-s2",
        "prompt": "Thể tích hình hộp chữ nhật 2 × 3 × 5 là:",
        "options": [
          "$30\\text{ cm}^3$",
          "$20\\text{ cm}^3$",
          "$15\\text{ cm}^3$",
          "$25\\text{ cm}^3$"
        ],
        "correctAnswer": "$30\\text{ cm}^3$",
        "explanation": "30 cm³."
      },
      {
        "id": "m57-s3",
        "prompt": "Hình hộp không nắp có bao nhiêu mặt?",
        "options": [
          "5 mặt",
          "6 mặt",
          "4 mặt",
          "7 mặt"
        ],
        "correctAnswer": "5 mặt",
        "explanation": "5 mặt."
      }
    ]
  },
  "math-bai-58": {
    "practiceQuestions": [
      {
        "id": "m58-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "1 thế kỉ bằng bao nhiêu năm?",
        "options": [
          "100 năm",
          "10 năm",
          "1000 năm",
          "50 năm"
        ],
        "correctAnswer": "100 năm",
        "hint": "1 thế kỉ = 100 năm.",
        "explanation": "100 năm."
      },
      {
        "id": "m58-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "1 năm không nhuận có bao nhiêu ngày?",
        "options": [
          "365 ngày",
          "366 ngày",
          "360 ngày",
          "364 ngày"
        ],
        "correctAnswer": "365 ngày",
        "hint": "Năm nhuận có 366 ngày (tháng 2 có 29 ngày), năm thường có 365 ngày.",
        "explanation": "365 ngày."
      },
      {
        "id": "m58-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $3\\text{ giờ } 25\\text{ phút} + 4\\text{ giờ } 45\\text{ phút} = ?$",
        "options": [
          "$8\\text{ giờ } 10\\text{ phút}$",
          "$7\\text{ giờ } 70\\text{ phút}$",
          "$8\\text{ giờ } 20\\text{ phút}$",
          "$8\\text{ giờ}$"
        ],
        "correctAnswer": "$8\\text{ giờ } 10\\text{ phút}$",
        "hint": "$7\\text{ giờ } 70\\text{ phút} = 8\\text{ giờ } 10\\text{ phút}$ (vì $60\\text{ phút} = 1\\text{ giờ}$).",
        "explanation": "$8\\text{ giờ } 10\\text{ phút}$."
      },
      {
        "id": "m58-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $5\\text{ ngày } 14\\text{ giờ} - 2\\text{ ngày } 18\\text{ giờ} = ?$",
        "options": [
          "$2\\text{ ngày } 20\\text{ giờ}$",
          "$3\\text{ ngày } 4\\text{ giờ}$",
          "$2\\text{ ngày } 16\\text{ giờ}$",
          "$3\\text{ ngày } 20\\text{ giờ}$"
        ],
        "correctAnswer": "$2\\text{ ngày } 20\\text{ giờ}$",
        "hint": "Đổi thành $4\\text{ ngày } 38\\text{ giờ} - 2\\text{ ngày } 18\\text{ giờ} = 2\\text{ ngày } 20\\text{ giờ}$.",
        "explanation": "$2\\text{ ngày } 20\\text{ giờ}$."
      },
      {
        "id": "m58-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người đi từ Hà Nội lúc 7 giờ 15 phút và đến Hải Phòng lúc 9 giờ 45 phút. Thời gian người đó đi là:",
        "options": [
          "$2\\text{ giờ } 30\\text{ phút}$",
          "$2\\text{ giờ } 15\\text{ phút}$",
          "$3\\text{ giờ}$",
          "$2\\text{ giờ } 45\\text{ phút}$"
        ],
        "correctAnswer": "$2\\text{ giờ } 30\\text{ phút}$",
        "hint": "$9\\text{ giờ } 45\\text{ phút} - 7\\text{ giờ } 15\\text{ phút} = 2\\text{ giờ } 30\\text{ phút}$.",
        "explanation": "$2\\text{ giờ } 30\\text{ phút}$ (2,5 giờ)."
      },
      {
        "id": "m58-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đổi $2,5\\text{ giờ}$ ra giờ và phút:",
        "options": [
          "$2\\text{ giờ } 30\\text{ phút}$",
          "$2\\text{ giờ } 50\\text{ phút}$",
          "$2\\text{ giờ } 5\\text{ phút}$",
          "$25\\text{ phút}$"
        ],
        "correctAnswer": "$2\\text{ giờ } 30\\text{ phút}$",
        "hint": "$0,5\\text{ giờ} = 0,5 \\times 60 = 30\\text{ phút}$.",
        "explanation": "$2\\text{ giờ } 30\\text{ phút}$."
      },
      {
        "id": "m58-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cuộc thi chạy marathon bắt đầu lúc 6 giờ 30 phút sáng. Vận động viên về đích sau 3 giờ 45 phút. Hỏi người đó về đích lúc mấy giờ?",
        "options": [
          "$10\\text{ giờ } 15\\text{ phút}$",
          "$10\\text{ giờ } 45\\text{ phút}$",
          "$9\\text{ giờ } 75\\text{ phút}$",
          "$10\\text{ giờ}$"
        ],
        "correctAnswer": "$10\\text{ giờ } 15\\text{ phút}$",
        "hint": "$6\\text{ giờ } 30\\text{ phút} + 3\\text{ giờ } 45\\text{ phút} = 9\\text{ giờ } 75\\text{ phút} = 10\\text{ giờ } 15\\text{ phút}$.",
        "explanation": "10 giờ 15 phút."
      },
      {
        "id": "m58-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Năm 1945 thuộc thế kỉ nào và năm 2026 thuộc thế kỉ nào?",
        "options": [
          "Thế kỉ XX và thế kỉ XXI",
          "Thế kỉ XIX và thế kỉ XX",
          "Thế kỉ XX và thế kỉ XXII",
          "Thế kỉ XXI và thế kỉ XXI"
        ],
        "correctAnswer": "Thế kỉ XX và thế kỉ XXI",
        "hint": "1945 thuộc thế kỉ 20 (XX), 2026 thuộc thế kỉ 21 (XXI).",
        "explanation": "Thế kỉ XX và XXI."
      }
    ],
    "speedQuestions": [
      {
        "id": "m58-s1",
        "prompt": "$1\\text{ giờ} = ...\\text{ giây}$",
        "options": [
          "3600 giây",
          "60 giây",
          "600 giây",
          "360 giây"
        ],
        "correctAnswer": "3600 giây",
        "explanation": "3600 giây."
      },
      {
        "id": "m58-s2",
        "prompt": "$1,5\\text{ phút} = ...\\text{ giây}$",
        "options": [
          "90 giây",
          "60 giây",
          "150 giây",
          "75 giây"
        ],
        "correctAnswer": "90 giây",
        "explanation": "90 giây."
      },
      {
        "id": "m58-s3",
        "prompt": "$45\\text{ phút} = ...\\text{ giờ}$",
        "options": [
          "$0,75\\text{ giờ}$",
          "$0,45\\text{ giờ}$",
          "$0,5\\text{ giờ}$",
          "$0,6\\text{ giờ}$"
        ],
        "correctAnswer": "$0,75\\text{ giờ}$",
        "explanation": "$\\frac{3}{4}\\text{ giờ} = 0,75\\text{ giờ}$."
      }
    ]
  },
  "math-bai-59": {
    "practiceQuestions": [
      {
        "id": "m59-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $1\\text{ giờ } 15\\text{ phút} \\times 3 = ?$",
        "options": [
          "$3\\text{ giờ } 45\\text{ phút}$",
          "$3\\text{ giờ } 15\\text{ phút}$",
          "$4\\text{ giờ } 15\\text{ phút}$",
          "$3\\text{ giờ } 30\\text{ phút}$"
        ],
        "correctAnswer": "$3\\text{ giờ } 45\\text{ phút}$",
        "hint": "$1 \\times 3 = 3\\text{ giờ}$, $15 \\times 3 = 45\\text{ phút}$.",
        "explanation": "$3\\text{ giờ } 45\\text{ phút}$."
      },
      {
        "id": "m59-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $8\\text{ phút } 24\\text{ giây} : 4 = ?$",
        "options": [
          "$2\\text{ phút } 6\\text{ giây}$",
          "$2\\text{ phút } 4\\text{ giây}$",
          "$2\\text{ phút } 8\\text{ giây}$",
          "$1\\text{ phút } 6\\text{ giây}$"
        ],
        "correctAnswer": "$2\\text{ phút } 6\\text{ giây}$",
        "hint": "$8 : 4 = 2\\text{ phút}$, $24 : 4 = 6\\text{ giây}$.",
        "explanation": "$2\\text{ phút } 6\\text{ giây}$."
      },
      {
        "id": "m59-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $2\\text{ giờ } 35\\text{ phút} \\times 4 = ?$",
        "options": [
          "$10\\text{ giờ } 20\\text{ phút}$",
          "$8\\text{ giờ } 140\\text{ phút}$",
          "$9\\text{ giờ } 20\\text{ phút}$",
          "$10\\text{ giờ } 40\\text{ phút}$"
        ],
        "correctAnswer": "$10\\text{ giờ } 20\\text{ phút}$",
        "hint": "$8\\text{ giờ } 140\\text{ phút} = 8\\text{ giờ} + 2\\text{ giờ } 20\\text{ phút} = 10\\text{ giờ } 20\\text{ phút}$.",
        "explanation": "$10\\text{ giờ } 20\\text{ phút}$."
      },
      {
        "id": "m59-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính: $7\\text{ giờ } 40\\text{ phút} : 5 = ?$",
        "options": [
          "$1\\text{ giờ } 32\\text{ phút}$",
          "$1\\text{ giờ } 8\\text{ phút}$",
          "$1\\text{ giờ } 48\\text{ phút}$",
          "$1\\text{ giờ } 24\\text{ phút}$"
        ],
        "correctAnswer": "$1\\text{ giờ } 32\\text{ phút}$",
        "hint": "$7\\text{ giờ} : 5 = 1\\text{ giờ}$ dư $2\\text{ giờ} = 120\\text{ phút}$. $120 + 40 = 160\\text{ phút}$. $160 : 5 = 32\\text{ phút}$.",
        "explanation": "$1\\text{ giờ } 32\\text{ phút}$."
      },
      {
        "id": "m59-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người thợ làm 1 chi tiết máy hết 45 phút. Hỏi người đó làm 4 chi tiết máy như thế hết bao nhiêu thời gian?",
        "options": [
          "$3\\text{ giờ}$",
          "$2\\text{ giờ } 45\\text{ phút}$",
          "$3\\text{ giờ } 30\\text{ phút}$",
          "$2\\text{ giờ}$"
        ],
        "correctAnswer": "$3\\text{ giờ}$",
        "hint": "$45 \\times 4 = 180\\text{ phút} = 3\\text{ giờ}$.",
        "explanation": "3 giờ."
      },
      {
        "id": "m59-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một vận động viên hoàn thành 3 vòng chạy hết tổng cộng 7 phút 30 giây. Trung bình mỗi vòng vận động viên đó chạy hết:",
        "options": [
          "$2\\text{ phút } 30\\text{ giây}$",
          "$2\\text{ phút } 15\\text{ giây}$",
          "$2\\text{ phút } 45\\text{ giây}$",
          "$3\\text{ phút}$"
        ],
        "correctAnswer": "$2\\text{ phút } 30\\text{ giây}$",
        "hint": "$7\\text{ phút } 30\\text{ giây} : 3 = 2\\text{ phút } 30\\text{ giây}$.",
        "explanation": "$2\\text{ phút } 30\\text{ giây}$."
      },
      {
        "id": "m59-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một chiếc đồng hồ cứ sau 1 ngày đêm (24 giờ) lại chạy nhanh 15 giây. Hỏi sau một tuần lễ chiếc đồng hồ chạy nhanh bao nhiêu thời gian?",
        "options": [
          "$1\\text{ phút } 45\\text{ giây}$",
          "$1\\text{ phút } 30\\text{ giây}$",
          "$2\\text{ phút}$",
          "$105\\text{ giây}$"
        ],
        "correctAnswer": "$1\\text{ phút } 45\\text{ giây}$",
        "hint": "1 tuần = 7 ngày. Nhanh: $15 \\times 7 = 105\\text{ giây} = 1\\text{ phút } 45\\text{ giây}$.",
        "explanation": "$1\\text{ phút } 45\\text{ giây}$."
      },
      {
        "id": "m59-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Bác An làm 3 sản phẩm hết 4 giờ 15 phút. Bác Bình làm 4 sản phẩm cùng loại hết 5 giờ 20 phút. So sánh tốc độ làm của hai bác:",
        "options": [
          "Bác Bình làm 1 sản phẩm nhanh hơn bác An 5 phút",
          "Bác An làm 1 sản phẩm nhanh hơn bác Bình 5 phút",
          "Hai bác làm nhanh như nhau",
          "Bác Bình làm nhanh hơn bác An 15 phút"
        ],
        "correctAnswer": "Bác Bình làm 1 sản phẩm nhanh hơn bác An 5 phút",
        "hint": "Bác An: $4\\text{ giờ } 15\\text{ phút} : 3 = 1\\text{ giờ } 25\\text{ phút} = 85\\text{ phút}$. Bác Bình: $5\\text{ giờ } 20\\text{ phút} : 4 = 1\\text{ giờ } 20\\text{ phút} = 80\\text{ phút}$. Bác Bình nhanh hơn 5 phút.",
        "explanation": "Bác Bình làm nhanh hơn 5 phút."
      }
    ],
    "speedQuestions": [
      {
        "id": "m59-s1",
        "prompt": "$20\\text{ phút} \\times 3 = ...\\text{ giờ}$",
        "options": [
          "$1\\text{ giờ}$",
          "$60\\text{ phút}$",
          "$1,5\\text{ giờ}$",
          "$2\\text{ giờ}$"
        ],
        "correctAnswer": "$1\\text{ giờ}$",
        "explanation": "60 phút = 1 giờ."
      },
      {
        "id": "m59-s2",
        "prompt": "$1\\text{ giờ} : 4 = ...\\text{ phút}$",
        "options": [
          "15 phút",
          "20 phút",
          "25 phút",
          "10 phút"
        ],
        "correctAnswer": "15 phút",
        "explanation": "15 phút."
      },
      {
        "id": "m59-s3",
        "prompt": "$12\\text{ giây} \\times 5 = ...\\text{ phút}$",
        "options": [
          "$1\\text{ phút}$",
          "$60\\text{ giây}$",
          "$0,5\\text{ phút}$",
          "$1,2\\text{ phút}$"
        ],
        "correctAnswer": "$1\\text{ phút}$",
        "explanation": "1 phút."
      }
    ]
  },
  "math-bai-60": {
    "practiceQuestions": [
      {
        "id": "m60-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Muốn tính vận tốc của một chuyển động đều, ta làm thế nào?",
        "options": [
          "Lấy quãng đường chia cho thời gian: $v = s : t$",
          "Lấy quãng đường nhân với thời gian: $v = s \\times t$",
          "Lấy thời gian chia cho quãng đường: $v = t : s$",
          "Lấy quãng đường cộng thời gian"
        ],
        "correctAnswer": "Lấy quãng đường chia cho thời gian: $v = s : t$",
        "hint": "Công thức cơ bản: $v = s : t$.",
        "explanation": "$v = s : t$."
      },
      {
        "id": "m60-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Một người đi bộ được quãng đường $10\\text{ km}$ trong 2 giờ. Vận tốc của người đó là:",
        "options": [
          "$5\\text{ km/h}$",
          "$20\\text{ km/h}$",
          "$8\\text{ km/h}$",
          "$12\\text{ km/h}$"
        ],
        "correctAnswer": "$5\\text{ km/h}$",
        "hint": "$v = 10 : 2 = 5\\text{ km/h}$.",
        "explanation": "$5\\text{ km/h}$."
      },
      {
        "id": "m60-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một ô tô đi quãng đường $120\\text{ km}$ trong $2,5\\text{ giờ}$. Vận tốc của ô tô là:",
        "options": [
          "$48\\text{ km/h}$",
          "$50\\text{ km/h}$",
          "$45\\text{ km/h}$",
          "$52\\text{ km/h}$"
        ],
        "correctAnswer": "$48\\text{ km/h}$",
        "hint": "$v = 120 : 2,5 = 48\\text{ km/h}$.",
        "explanation": "48 km/h."
      },
      {
        "id": "m60-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một con đà điểu chạy được quãng đường $3150\\text{ m}$ trong 3 phút. Vận tốc chạy của đà điểu là:",
        "options": [
          "$1050\\text{ m/phút}$",
          "$1500\\text{ m/phút}$",
          "$950\\text{ m/phút}$",
          "$63\\text{ km/h}$"
        ],
        "correctAnswer": "$1050\\text{ m/phút}$",
        "hint": "$v = 3150 : 3 = 1050\\text{ m/phút}$.",
        "explanation": "1050 m/phút."
      },
      {
        "id": "m60-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một vận động viên bơi $100\\text{ m}$ hết 50 giây. Vận tốc bơi của người đó là:",
        "options": [
          "$2\\text{ m/giây}$",
          "$5\\text{ m/giây}$",
          "$0,5\\text{ m/giây}$",
          "$20\\text{ m/giây}$"
        ],
        "correctAnswer": "$2\\text{ m/giây}$",
        "hint": "$v = 100 : 50 = 2\\text{ m/giây}$.",
        "explanation": "2 m/giây."
      },
      {
        "id": "m60-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đổi vận tốc $36\\text{ km/h}$ ra đơn vị mét trên giây ($\\text{m/s}$):",
        "options": [
          "$10\\text{ m/s}$",
          "$36\\text{ m/s}$",
          "$6\\text{ m/s}$",
          "$1\\text{ m/s}$"
        ],
        "correctAnswer": "$10\\text{ m/s}$",
        "hint": "$36\\text{ km/h} = 36\\,000\\text{ m} : 3600\\text{ s} = 10\\text{ m/s}$.",
        "explanation": "10 m/s."
      },
      {
        "id": "m60-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một đoàn tàu hỏa dài $150\\text{ m}$ chạy qua một cây cầu dài $450\\text{ m}$ hết 30 giây. Vận tốc của đoàn tàu là:",
        "options": [
          "$72\\text{ km/h}$",
          "$54\\text{ km/h}$",
          "$60\\text{ km/h}$",
          "$90\\text{ km/h}$"
        ],
        "correctAnswer": "$72\\text{ km/h}$",
        "hint": "Quãng đường tàu đi = chiều dài tàu + cầu = $150 + 450 = 600\\text{ m}$. Vận tốc = $600 : 30 = 20\\text{ m/s} = 20 \\times 3,6 = 72\\text{ km/h}$.",
        "explanation": "72 km/h."
      },
      {
        "id": "m60-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một ô tô đi nửa quãng đường đầu với vận tốc $60\\text{ km/h}$ và nửa quãng đường sau với vận tốc $40\\text{ km/h}$. Vận tốc trung bình của ô tô trên cả quãng đường là:",
        "options": [
          "$48\\text{ km/h}$",
          "$50\\text{ km/h}$",
          "$52\\text{ km/h}$",
          "$45\\text{ km/h}$"
        ],
        "correctAnswer": "$48\\text{ km/h}$",
        "hint": "$v_{tb} = \\frac{2s}{t_1 + t_2} = \\frac{2s}{\\frac{s}{60} + \\frac{s}{40}} = \\frac{2}{\\frac{1}{24}} = 48\\text{ km/h}$.",
        "explanation": "48 km/h."
      }
    ],
    "speedQuestions": [
      {
        "id": "m60-s1",
        "prompt": "$s = 60\\text{ km}, t = 2\\text{ h} \\Rightarrow v = ?$",
        "options": [
          "$30\\text{ km/h}$",
          "$120\\text{ km/h}$",
          "$60\\text{ km/h}$",
          "$20\\text{ km/h}$"
        ],
        "correctAnswer": "$30\\text{ km/h}$",
        "explanation": "30 km/h."
      },
      {
        "id": "m60-s2",
        "prompt": "$s = 100\\text{ m}, t = 10\\text{ s} \\Rightarrow v = ?$",
        "options": [
          "$10\\text{ m/s}$",
          "$1\\text{ m/s}$",
          "$100\\text{ m/s}$",
          "$5\\text{ m/s}$"
        ],
        "correctAnswer": "$10\\text{ m/s}$",
        "explanation": "10 m/s."
      },
      {
        "id": "m60-s3",
        "prompt": "Đơn vị thông dụng đo vận tốc ô tô là:",
        "options": [
          "km/h",
          "m/s",
          "cm/s",
          "m/phút"
        ],
        "correctAnswer": "km/h",
        "explanation": "km/h."
      }
    ]
  },
  "math-bai-61": {
    "practiceQuestions": [
      {
        "id": "m61-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Muốn tính quãng đường $s$ khi biết vận tốc $v$ và thời gian $t$, ta dùng công thức:",
        "options": [
          "$s = v \\times t$",
          "$s = v : t$",
          "$s = t : v$",
          "$s = v + t$"
        ],
        "correctAnswer": "$s = v \\times t$",
        "hint": "Quãng đường bằng vận tốc nhân thời gian.",
        "explanation": "$s = v \\times t$."
      },
      {
        "id": "m61-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Muốn tính thời gian $t$ khi biết quãng đường $s$ và vận tốc $v$, ta dùng công thức:",
        "options": [
          "$t = s : v$",
          "$t = s \\times v$",
          "$t = v : s$",
          "$t = s - v$"
        ],
        "correctAnswer": "$t = s : v$",
        "hint": "Thời gian bằng quãng đường chia cho vận tốc.",
        "explanation": "$t = s : v$."
      },
      {
        "id": "m61-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người đi xe máy với vận tốc $42\\text{ km/h}$ trong $2\\text{ giờ } 30\\text{ phút}$. Quãng đường người đó đã đi được là:",
        "options": [
          "$105\\text{ km}$",
          "$84\\text{ km}$",
          "$126\\text{ km}$",
          "$100\\text{ km}$"
        ],
        "correctAnswer": "$105\\text{ km}$",
        "hint": "$2\\text{ giờ } 30\\text{ phút} = 2,5\\text{ giờ}$. $s = 42 \\times 2,5 = 105\\text{ km}$.",
        "explanation": "105 km."
      },
      {
        "id": "m61-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một máy bay bay với vận tốc $850\\text{ km/h}$ trên quãng đường dài $2125\\text{ km}$. Thời gian bay của máy bay là:",
        "options": [
          "$2,5\\text{ giờ}$",
          "$2\\text{ giờ } 15\\text{ phút}$",
          "$3\\text{ giờ}$",
          "$2\\text{ giờ } 45\\text{ phút}$"
        ],
        "correctAnswer": "$2,5\\text{ giờ}$",
        "hint": "$t = 2125 : 850 = 2,5\\text{ giờ} = 2\\text{ giờ } 30\\text{ phút}$.",
        "explanation": "2,5 giờ."
      },
      {
        "id": "m61-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bác Nam đi xe đạp từ nhà ra ga tàu với vận tốc $12\\text{ km/h}$ mất 20 phút. Quãng đường từ nhà bác Nam ra ga dài:",
        "options": [
          "$4\\text{ km}$",
          "$6\\text{ km}$",
          "$240\\text{ km}$",
          "$3\\text{ km}$"
        ],
        "correctAnswer": "$4\\text{ km}$",
        "hint": "$20\\text{ phút} = \\frac{1}{3}\\text{ giờ}$. $s = 12 \\times \\frac{1}{3} = 4\\text{ km}$.",
        "explanation": "4 km."
      },
      {
        "id": "m61-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một ô tô khởi hành từ tỉnh A lúc 6 giờ 30 phút và đến tỉnh B lúc 9 giờ. Biết quãng đường AB dài $125\\text{ km}$. Vận tốc của ô tô là:",
        "options": [
          "$50\\text{ km/h}$",
          "$55\\text{ km/h}$",
          "$45\\text{ km/h}$",
          "$60\\text{ km/h}$"
        ],
        "correctAnswer": "$50\\text{ km/h}$",
        "hint": "Thời gian đi = $9\\text{ h} - 6\\text{ h } 30\\text{ p} = 2,5\\text{ giờ}$. $v = 125 : 2,5 = 50\\text{ km/h}$.",
        "explanation": "50 km/h."
      },
      {
        "id": "m61-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một người đi xe máy từ A đến B lúc 8 giờ 15 phút với vận tốc $40\\text{ km/h}$. Dọc đường người đó nghỉ giải lao 25 phút và đến B lúc 10 giờ 40 phút. Quãng đường AB dài:",
        "options": [
          "$80\\text{ km}$",
          "$100\\text{ km}$",
          "$90\\text{ km}$",
          "$75\\text{ km}$"
        ],
        "correctAnswer": "$80\\text{ km}$",
        "hint": "Tổng thời gian từ lúc đi đến lúc đến = $2\\text{ giờ } 25\\text{ phút}$. Trừ nghỉ 25 phút còn 2 giờ di chuyển. Quãng đường = $40 \\times 2 = 80\\text{ km}$.",
        "explanation": "80 km."
      },
      {
        "id": "m61-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một ca-nô đi xuôi dòng khúc sông từ A đến B hết 2 giờ và đi ngược dòng từ B về A hết 3 giờ. Biết vận tốc dòng nước là $3\\text{ km/h}$. Độ dài khúc sông AB là:",
        "options": [
          "$36\\text{ km}$",
          "$42\\text{ km}$",
          "$30\\text{ km}$",
          "$45\\text{ km}$"
        ],
        "correctAnswer": "$36\\text{ km}$",
        "hint": "Hiệu vận tốc xuôi và ngược = $2 \\times v_n = 6\\text{ km/h}$. Tỉ số thời gian là $\\frac{2}{3} \\Rightarrow$ Tỉ số vận tốc là $\\frac{3}{2}$. $v_{\\text{xuôi}} = 6 : (3 - 2) \\times 3 = 18\\text{ km/h}$. Khúc sông dài: $18 \\times 2 = 36\\text{ km}$.",
        "explanation": "36 km."
      }
    ],
    "speedQuestions": [
      {
        "id": "m61-s1",
        "prompt": "$v = 40\\text{ km/h}, t = 3\\text{ h} \\Rightarrow s = ?$",
        "options": [
          "$120\\text{ km}$",
          "$100\\text{ km}$",
          "$80\\text{ km}$",
          "$13\\text{ km}$"
        ],
        "correctAnswer": "$120\\text{ km}$",
        "explanation": "120 km."
      },
      {
        "id": "m61-s2",
        "prompt": "$s = 90\\text{ km}, v = 45\\text{ km/h} \\Rightarrow t = ?$",
        "options": [
          "$2\\text{ giờ}$",
          "$3\\text{ giờ}$",
          "$1,5\\text{ giờ}$",
          "$4\\text{ giờ}$"
        ],
        "correctAnswer": "$2\\text{ giờ}$",
        "explanation": "2 giờ."
      },
      {
        "id": "m61-s3",
        "prompt": "Đi 15 phút với $v = 60\\text{ km/h}$ được:",
        "options": [
          "$15\\text{ km}$",
          "$4\\text{ km}$",
          "$20\\text{ km}$",
          "$10\\text{ km}$"
        ],
        "correctAnswer": "$15\\text{ km}$",
        "explanation": "$60 \\times 0,25 = 15\\text{ km}$."
      }
    ]
  },
  "math-bai-62": {
    "practiceQuestions": [
      {
        "id": "m62-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hai chuyển động cùng lúc ngược chiều để gặp nhau, công thức tính thời gian gặp nhau là:",
        "options": [
          "$t = s : (v_1 + v_2)$",
          "$t = s : (v_1 - v_2)$",
          "$t = s \\times (v_1 + v_2)$",
          "$t = (v_1 + v_2) : s$"
        ],
        "correctAnswer": "$t = s : (v_1 + v_2)$",
        "hint": "Tổng vận tốc bằng quãng đường chia cho thời gian gặp nhau.",
        "explanation": "$t = s : (v_1 + v_2)$."
      },
      {
        "id": "m62-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hai chuyển động cùng lúc cùng chiều đuổi nhau, công thức tính thời gian đuổi kịp ($v_1 > v_2$) là:",
        "options": [
          "$t = s : (v_1 - v_2)$",
          "$t = s : (v_1 + v_2)$",
          "$t = s \\times (v_1 - v_2)$",
          "$t = (v_1 - v_2) : s$"
        ],
        "correctAnswer": "$t = s : (v_1 - v_2)$",
        "hint": "Thời gian đuổi kịp bằng khoảng cách ban đầu chia cho hiệu vận tốc.",
        "explanation": "$t = s : (v_1 - v_2)$."
      },
      {
        "id": "m62-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai tỉnh A và B cách nhau $140\\text{ km}$. Một ô tô đi từ A đến B với vận tốc $45\\text{ km/h}$, cùng lúc đó một xe máy đi từ B về A với vận tốc $25\\text{ km/h}$. Sau bao lâu hai xe gặp nhau?",
        "options": [
          "$2\\text{ giờ}$",
          "$2,5\\text{ giờ}$",
          "$3\\text{ giờ}$",
          "$1,5\\text{ giờ}$"
        ],
        "correctAnswer": "$2\\text{ giờ}$",
        "hint": "Tổng vận tốc = $45 + 25 = 70\\text{ km/h}$. Thời gian gặp = $140 : 70 = 2\\text{ giờ}$.",
        "explanation": "2 giờ."
      },
      {
        "id": "m62-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người đi xe đạp từ A với vận tốc $12\\text{ km/h}$. Sau 2 giờ, một xe máy cũng đi từ A đuổi theo xe đạp với vận tốc $36\\text{ km/h}$. Kể từ lúc xe máy bắt đầu đi, sau bao lâu xe máy đuổi kịp xe đạp?",
        "options": [
          "$1\\text{ giờ}$",
          "$2\\text{ giờ}$",
          "$1,5\\text{ giờ}$",
          "$40\\text{ phút}$"
        ],
        "correctAnswer": "$1\\text{ giờ}$",
        "hint": "Quãng đường xe đạp đi trước: $12 \\times 2 = 24\\text{ km}$. Hiệu vận tốc: $36 - 12 = 24\\text{ km/h}$. Thời gian đuổi kịp = $24 : 24 = 1\\text{ giờ}$.",
        "explanation": "1 giờ."
      },
      {
        "id": "m62-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai thành phố cách nhau $180\\text{ km}$. Hai ô tô khởi hành cùng một lúc ngược chiều nhau lúc 7 giờ sáng. Vận tốc xe thứ nhất là $50\\text{ km/h}$, xe thứ hai là $40\\text{ km/h}$. Hai xe gặp nhau lúc mấy giờ?",
        "options": [
          "$9\\text{ giờ}$",
          "$8\\text{ giờ } 30\\text{ phút}$",
          "$9\\text{ giờ } 30\\text{ phút}$",
          "$10\\text{ giờ}$"
        ],
        "correctAnswer": "$9\\text{ giờ}$",
        "hint": "Thời gian đi = $180 : (50 + 40) = 2\\text{ giờ}$. Gặp nhau lúc: $7\\text{ h} + 2\\text{ h} = 9\\text{ giờ}$.",
        "explanation": "9 giờ sáng."
      },
      {
        "id": "m62-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một ca-nô có vận tốc thực khi nước yên lặng là $25\\text{ km/h}$. Vận tốc của dòng nước là $3\\text{ km/h}$. Vận tốc ca-nô khi đi xuôi dòng là:",
        "options": [
          "$28\\text{ km/h}$",
          "$22\\text{ km/h}$",
          "$25\\text{ km/h}$",
          "$31\\text{ km/h}$"
        ],
        "correctAnswer": "$28\\text{ km/h}$",
        "hint": "$v_{\\text{xuôi}} = v_{\\text{thực}} + v_{\\text{nước}} = 25 + 3 = 28\\text{ km/h}$.",
        "explanation": "28 km/h."
      },
      {
        "id": "m62-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Hai người đi bộ khởi hành cùng một lúc từ hai địa điểm cách nhau $12\\text{ km}$ đi cùng chiều nhau. Người đi trước có vận tốc $4\\text{ km/h}$, người đi sau đuổi theo với vận tốc $6\\text{ km/h}$. Quãng đường người đi sau đã đi được cho đến khi đuổi kịp người đi trước là:",
        "options": [
          "$36\\text{ km}$",
          "$24\\text{ km}$",
          "$30\\text{ km}$",
          "$48\\text{ km}$"
        ],
        "correctAnswer": "$36\\text{ km}$",
        "hint": "Thời gian đuổi kịp = $12 : (6 - 4) = 6\\text{ giờ}$. Quãng đường người sau đi = $6 \\times 6 = 36\\text{ km}$.",
        "explanation": "36 km."
      },
      {
        "id": "m62-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một đoàn tàu hỏa chạy vượt qua một cây cột điện bên đường mất 12 giây. Với cùng vận tốc đó, đoàn tàu vượt qua một đường hầm dài $720\\text{ m}$ mất 48 giây. Chiều dài của đoàn tàu là:",
        "options": [
          "$240\\text{ m}$",
          "$180\\text{ m}$",
          "$360\\text{ m}$",
          "$300\\text{ m}$"
        ],
        "correctAnswer": "$240\\text{ m}$",
        "hint": "Thời gian tàu đi $720\\text{ m}$ đường hầm = $48 - 12 = 36$ giây. Vận tốc tàu = $720 : 36 = 20\\text{ m/s}$. Chiều dài đoàn tàu = $20 \\times 12 = 240\\text{ m}$.",
        "explanation": "240 m."
      }
    ],
    "speedQuestions": [
      {
        "id": "m62-s1",
        "prompt": "Ngược chiều: $s = 100\\text{ km}, v_1 = 30, v_2 = 20$, gặp nhau sau:",
        "options": [
          "2 giờ",
          "5 giờ",
          "1 giờ",
          "2,5 giờ"
        ],
        "correctAnswer": "2 giờ",
        "explanation": "2 giờ."
      },
      {
        "id": "m62-s2",
        "prompt": "Cùng chiều: cách nhau 20 km, hiệu vận tốc 10 km/h, đuổi kịp sau:",
        "options": [
          "2 giờ",
          "1 giờ",
          "3 giờ",
          "4 giờ"
        ],
        "correctAnswer": "2 giờ",
        "explanation": "2 giờ."
      },
      {
        "id": "m62-s3",
        "prompt": "$v_{\\text{thực}} = 20\\text{ km/h}, v_n = 2\\text{ km/h} \\Rightarrow v_{\\text{ngược}} = ?$",
        "options": [
          "18 km/h",
          "22 km/h",
          "20 km/h",
          "16 km/h"
        ],
        "correctAnswer": "18 km/h",
        "explanation": "18 km/h."
      }
    ]
  },
  "math-bai-63": {
    "practiceQuestions": [
      {
        "id": "m63-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $2\\text{ giờ } 15\\text{ phút} + 3\\text{ giờ } 50\\text{ phút} = ?$",
        "options": [
          "$6\\text{ giờ } 5\\text{ phút}$",
          "$5\\text{ giờ } 65\\text{ phút}$",
          "$5\\text{ giờ } 5\\text{ phút}$",
          "$6\\text{ giờ } 15\\text{ phút}$"
        ],
        "correctAnswer": "$6\\text{ giờ } 5\\text{ phút}$",
        "hint": "$5\\text{ giờ } 65\\text{ phút} = 6\\text{ giờ } 5\\text{ phút}$.",
        "explanation": "$6\\text{ giờ } 5\\text{ phút}$."
      },
      {
        "id": "m63-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Một người chạy bộ với vận tốc $12\\text{ km/h}$ trong 30 phút. Quãng đường chạy được là:",
        "options": [
          "$6\\text{ km}$",
          "$360\\text{ km}$",
          "$24\\text{ km}$",
          "$4\\text{ km}$"
        ],
        "correctAnswer": "$6\\text{ km}$",
        "hint": "$30\\text{ phút} = 0,5\\text{ giờ}$. $s = 12 \\times 0,5 = 6\\text{ km}$.",
        "explanation": "6 km."
      },
      {
        "id": "m63-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một ô tô đi hết quãng đường $135\\text{ km}$ với vận tốc $54\\text{ km/h}$. Thời gian ô tô đi là:",
        "options": [
          "$2\\text{ giờ } 30\\text{ phút}$",
          "$2\\text{ giờ } 15\\text{ phút}$",
          "$2\\text{ giờ } 45\\text{ phút}$",
          "$3\\text{ giờ}$"
        ],
        "correctAnswer": "$2\\text{ giờ } 30\\text{ phút}$",
        "hint": "$t = 135 : 54 = 2,5\\text{ giờ} = 2\\text{ giờ } 30\\text{ phút}$.",
        "explanation": "2 giờ 30 phút."
      },
      {
        "id": "m63-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai người đi xe máy cùng xuất phát từ hai đầu cầu dài $1500\\text{ m}$ đi ngược chiều nhau. Người thứ nhất đi với vận tốc $18\\text{ km/h}$, người thứ hai đi với vận tốc $12\\text{ km/h}$. Sau bao lâu hai người gặp nhau?",
        "options": [
          "3 phút",
          "5 phút",
          "2 phút",
          "4 phút"
        ],
        "correctAnswer": "3 phút",
        "hint": "Tổng vận tốc = $18 + 12 = 30\\text{ km/h} = 30\\,000\\text{ m} : 60\\text{ phút} = 500\\text{ m/phút}$. Thời gian = $1500 : 500 = 3$ phút.",
        "explanation": "3 phút."
      },
      {
        "id": "m63-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một xe máy đi từ A đến B với vận tốc $35\\text{ km/h}$. Sau 1 giờ, một ô tô cũng đi từ A đuổi theo xe máy với vận tốc $55\\text{ km/h}$. Thời gian ô tô đi để đuổi kịp xe máy là:",
        "options": [
          "$1\\text{ giờ } 45\\text{ phút}$",
          "$1\\text{ giờ } 30\\text{ phút}$",
          "$2\\text{ giờ}$",
          "$1\\text{ giờ } 15\\text{ phút}$"
        ],
        "correctAnswer": "$1\\text{ giờ } 45\\text{ phút}$",
        "hint": "Khoảng cách = 35 km. Hiệu vận tốc = $55 - 35 = 20\\text{ km/h}$. Thời gian = $35 : 20 = 1,75\\text{ giờ} = 1\\text{ giờ } 45\\text{ phút}$.",
        "explanation": "1 giờ 45 phút."
      },
      {
        "id": "m63-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một ca-nô đi xuôi dòng khúc sông dài $48\\text{ km}$ hết 2 giờ, khi đi ngược dòng khúc sông đó mất 3 giờ. Vận tốc của dòng nước là:",
        "options": [
          "$4\\text{ km/h}$",
          "$2\\text{ km/h}$",
          "$5\\text{ km/h}$",
          "$3\\text{ km/h}$"
        ],
        "correctAnswer": "$4\\text{ km/h}$",
        "hint": "$v_{\\text{xuôi}} = 48 : 2 = 24\\text{ km/h}$. $v_{\\text{ngược}} = 48 : 3 = 16\\text{ km/h}$. $v_n = (24 - 16) : 2 = 4\\text{ km/h}$.",
        "explanation": "4 km/h."
      },
      {
        "id": "m63-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một người đi xe đạp từ A đến B với vận tốc $12\\text{ km/h}$. Khi từ B trở về A người đó đi bằng xe máy với vận tốc $36\\text{ km/h}$. Tổng thời gian cả đi và về là 4 giờ (không tính nghỉ). Quãng đường AB là:",
        "options": [
          "$36\\text{ km}$",
          "$24\\text{ km}$",
          "$48\\text{ km}$",
          "$30\\text{ km}$"
        ],
        "correctAnswer": "$36\\text{ km}$",
        "hint": "Tỉ số vận tốc đi/về = $12 : 36 = \\frac{1}{3} \\Rightarrow$ Tỉ số thời gian đi/về = 3. Thời gian đi = $4 : (3 + 1) \\times 3 = 3\\text{ giờ}$. Quãng đường AB = $12 \\times 3 = 36\\text{ km}$.",
        "explanation": "36 km."
      },
      {
        "id": "m63-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Lúc 6 giờ sáng một xe tải đi từ A về B với vận tốc $40\\text{ km/h}$. Đến 8 giờ sáng một ô tô con đi từ A về B với vận tốc $60\\text{ km/h}$. Điểm ô tô con đuổi kịp xe tải cách A bao nhiêu ki-lô-mét?",
        "options": [
          "$240\\text{ km}$",
          "$200\\text{ km}$",
          "$160\\text{ km}$",
          "$180\\text{ km}$"
        ],
        "correctAnswer": "$240\\text{ km}$",
        "hint": "Xe tải đi trước 2 giờ: $40 \\times 2 = 80\\text{ km}$. Thời gian đuổi kịp = $80 : (60 - 40) = 4\\text{ giờ}$. Điểm gặp cách A = $60 \\times 4 = 240\\text{ km}$.",
        "explanation": "240 km."
      }
    ],
    "speedQuestions": [
      {
        "id": "m63-s1",
        "prompt": "$s = 150\\text{ km}, t = 3\\text{ h} \\Rightarrow v = ?$",
        "options": [
          "$50\\text{ km/h}$",
          "$45\\text{ km/h}$",
          "$55\\text{ km/h}$",
          "$60\\text{ km/h}$"
        ],
        "correctAnswer": "$50\\text{ km/h}$",
        "explanation": "50 km/h."
      },
      {
        "id": "m63-s2",
        "prompt": "$v = 60\\text{ km/h}, t = 1,5\\text{ h} \\Rightarrow s = ?$",
        "options": [
          "$90\\text{ km}$",
          "$60\\text{ km}$",
          "$80\\text{ km}$",
          "$100\\text{ km}$"
        ],
        "correctAnswer": "$90\\text{ km}$",
        "explanation": "90 km."
      },
      {
        "id": "m63-s3",
        "prompt": "$1\\text{ giờ } 15\\text{ phút} = ...\\text{ giờ}$",
        "options": [
          "$1,25\\text{ giờ}$",
          "$1,15\\text{ giờ}$",
          "$1,5\\text{ giờ}$",
          "$1,75\\text{ giờ}$"
        ],
        "correctAnswer": "$1,25\\text{ giờ}$",
        "explanation": "1,25 giờ."
      }
    ]
  },
  "math-bai-64": {
    "practiceQuestions": [
      {
        "id": "m64-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Khi điều tra về số con trong các hộ gia đình ở một tổ dân phố, số liệu thu thập được thuộc loại:",
        "options": [
          "Số liệu bằng số",
          "Số liệu định tính (chữ)",
          "Hình ảnh",
          "Âm thanh"
        ],
        "correctAnswer": "Số liệu bằng số",
        "hint": "Số con là các số tự nhiên: 1, 2, 3...",
        "explanation": "Số liệu bằng số."
      },
      {
        "id": "m64-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Để thu thập ý kiến về môn thể thao yêu thích của học sinh trong lớp, phương pháp phù hợp nhất là:",
        "options": [
          "Phát phiếu khảo sát / biểu quyết",
          "Đo nhiệt độ",
          "Dùng cân",
          "Dùng thước đo độ dài"
        ],
        "correctAnswer": "Phát phiếu khảo sát / biểu quyết",
        "hint": "Khảo sát ý kiến bằng biểu quyết hoặc phiếu hỏi.",
        "explanation": "Phát phiếu khảo sát hoặc biểu quyết."
      },
      {
        "id": "m64-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điểm kiểm tra Toán của 10 bạn là: 8, 9, 7, 10, 8, 9, 8, 7, 8, 10. Điểm số xuất hiện nhiều lần nhất là:",
        "options": [
          "Điểm 8",
          "Điểm 9",
          "Điểm 10",
          "Điểm 7"
        ],
        "correctAnswer": "Điểm 8",
        "hint": "Điểm 8 xuất hiện 4 lần.",
        "explanation": "Điểm 8."
      },
      {
        "id": "m64-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cho dãy số đo chiều cao (cm) của 5 bạn: 138, 142, 135, 145, 140. Chiều cao trung bình của 5 bạn là:",
        "options": [
          "$140\\text{ cm}$",
          "$139\\text{ cm}$",
          "$141\\text{ cm}$",
          "$142\\text{ cm}$"
        ],
        "correctAnswer": "$140\\text{ cm}$",
        "hint": "$(138 + 142 + 135 + 145 + 140) : 5 = 700 : 5 = 140\\text{ cm}$.",
        "explanation": "140 cm."
      },
      {
        "id": "m64-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Sắp xếp cân nặng của 4 bạn theo thứ tự từ nhẹ nhất đến nặng nhất: $35,5\\text{ kg} ; 38,2\\text{ kg} ; 34,8\\text{ kg} ; 37\\text{ kg}$:",
        "options": [
          "$34,8\\text{ kg} < 35,5\\text{ kg} < 37\\text{ kg} < 38,2\\text{ kg}$",
          "$35,5\\text{ kg} < 34,8\\text{ kg} < 37\\text{ kg} < 38,2\\text{ kg}$",
          "$38,2\\text{ kg} < 37\\text{ kg} < 35,5\\text{ kg} < 34,8\\text{ kg}$",
          "$34,8\\text{ kg} < 37\\text{ kg} < 35,5\\text{ kg} < 38,2\\text{ kg}$"
        ],
        "correctAnswer": "$34,8\\text{ kg} < 35,5\\text{ kg} < 37\\text{ kg} < 38,2\\text{ kg}$",
        "hint": "So sánh phần nguyên và thập phân.",
        "explanation": "$34,8 < 35,5 < 37 < 38,2$."
      },
      {
        "id": "m64-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cửa hàng bán được số áo trong 5 ngày lần lượt là: 25, 30, 42, 28, 35 chiếc. Số áo trung bình mỗi ngày bán được là:",
        "options": [
          "32 chiếc",
          "30 chiếc",
          "35 chiếc",
          "31 chiếc"
        ],
        "correctAnswer": "32 chiếc",
        "hint": "$(25 + 30 + 42 + 28 + 35) : 5 = 160 : 5 = 32$.",
        "explanation": "32 chiếc áo."
      },
      {
        "id": "m64-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Bốn bạn An, Bình, Chi, Dũng có cân nặng trung bình là $36\\text{ kg}$. Khi thêm bạn Tuấn nặng $41\\text{ kg}$ vào thì cân nặng trung bình của cả 5 bạn là:",
        "options": [
          "$37\\text{ kg}$",
          "$38\\text{ kg}$",
          "$36,5\\text{ kg}$",
          "$37,5\\text{ kg}$"
        ],
        "correctAnswer": "$37\\text{ kg}$",
        "hint": "Tổng cân 4 bạn = $36 \\times 4 = 144\\text{ kg}$. Tổng 5 bạn = $144 + 41 = 185\\text{ kg}$. Trung bình = $185 : 5 = 37\\text{ kg}$.",
        "explanation": "37 kg."
      },
      {
        "id": "m64-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Điểm kiểm tra của lớp 5B có 12 bạn đạt điểm 10, 15 bạn đạt điểm 9, 8 bạn đạt điểm 8 và 5 bạn đạt điểm 7. Tỉ số phần trăm của số bạn đạt điểm 9 và 10 so với toàn bộ học sinh lớp là:",
        "options": [
          "67,5%",
          "65%",
          "70%",
          "60%"
        ],
        "correctAnswer": "67,5%",
        "hint": "Tổng số học sinh = $12 + 15 + 8 + 5 = 40$ bạn. Số bạn đạt 9 và 10 = $12 + 15 = 27$ bạn. Tỉ lệ = $27 : 40 = 0,675 = 67,5\\%$.",
        "explanation": "67,5%."
      }
    ],
    "speedQuestions": [
      {
        "id": "m64-s1",
        "prompt": "Trung bình cộng của 10 và 20 là:",
        "options": [
          "15",
          "10",
          "20",
          "30"
        ],
        "correctAnswer": "15",
        "explanation": "15."
      },
      {
        "id": "m64-s2",
        "prompt": "Dãy số: 5, 5, 8, 9 có số 5 xuất hiện:",
        "options": [
          "2 lần",
          "1 lần",
          "3 lần",
          "4 lần"
        ],
        "correctAnswer": "2 lần",
        "explanation": "2 lần."
      },
      {
        "id": "m64-s3",
        "prompt": "Số nào lớn nhất trong dãy: 12; 15,5; 15,05; 14,9?",
        "options": [
          "15,5",
          "15,05",
          "14,9",
          "12"
        ],
        "correctAnswer": "15,5",
        "explanation": "15,5."
      }
    ]
  },
  "math-bai-65": {
    "practiceQuestions": [
      {
        "id": "m65-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tổng số phần trăm của tất cả các phần trong một biểu đồ hình quạt tròn luôn bằng:",
        "options": [
          "100%",
          "360%",
          "50%",
          "180%"
        ],
        "correctAnswer": "100%",
        "hint": "Hình tròn biểu thị toàn thể 100%.",
        "explanation": "100%."
      },
      {
        "id": "m65-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Một nửa hình tròn trong biểu đồ quạt tròn biểu thị tỉ số phần trăm là:",
        "options": [
          "50%",
          "25%",
          "100%",
          "75%"
        ],
        "correctAnswer": "50%",
        "hint": "Một nửa hình tròn là $\\frac{1}{2}$ tương ứng với $50\\%$.",
        "explanation": "50%."
      },
      {
        "id": "m65-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một phần tư hình tròn trong biểu đồ quạt tròn biểu thị tỉ số phần trăm là:",
        "options": [
          "25%",
          "20%",
          "50%",
          "30%"
        ],
        "correctAnswer": "25%",
        "hint": "$\\frac{1}{4} = 25\\%$.",
        "explanation": "25%."
      },
      {
        "id": "m65-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biểu đồ quạt tròn biểu diễn thể loại sách yêu thích gồm: Truyện tranh 40%, Sách khoa học 35%, Sách lịch sử là phần còn lại. Tỉ lệ học sinh thích Sách lịch sử là:",
        "options": [
          "25%",
          "30%",
          "20%",
          "15%"
        ],
        "correctAnswer": "25%",
        "hint": "$100\\% - (40\\% + 35\\%) = 25\\%$.",
        "explanation": "25%."
      },
      {
        "id": "m65-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khối lớp 5 có 200 học sinh. Biểu đồ quạt tròn cho biết có 30% học sinh tham gia câu lạc bộ bơi lội. Số học sinh tham gia bơi lội là:",
        "options": [
          "60 bạn",
          "30 bạn",
          "50 bạn",
          "70 bạn"
        ],
        "correctAnswer": "60 bạn",
        "hint": "$200 \\times 30 : 100 = 60$ bạn.",
        "explanation": "60 bạn."
      },
      {
        "id": "m65-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một khu đất dành 50% xây nhà ở, 20% làm đường đi, còn lại là vườn hoa. Diện tích vườn hoa chiếm bao nhiêu phần trăm khu đất?",
        "options": [
          "30%",
          "25%",
          "35%",
          "20%"
        ],
        "correctAnswer": "30%",
        "hint": "$100\\% - (50\\% + 20\\%) = 30\\%$.",
        "explanation": "30%."
      },
      {
        "id": "m65-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Biểu đồ quạt tròn biểu thị diện tích các loại cây trong trang trại rộng $120\\text{ ha}$. Biết cam chiếm 35%, xoài chiếm 25%, bưởi chiếm 40%. Diện tích trồng bưởi nhiều hơn diện tích trồng cam là:",
        "options": [
          "$6\\text{ ha}$",
          "$12\\text{ ha}$",
          "$8\\text{ ha}$",
          "$5\\text{ ha}$"
        ],
        "correctAnswer": "$6\\text{ ha}$",
        "hint": "Chênh lệch phần trăm: $40\\% - 35\\% = 5\\%$. Diện tích hơn: $120 \\times 5 : 100 = 6\\text{ ha}$.",
        "explanation": "6 ha."
      },
      {
        "id": "m65-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Biểu đồ quạt tròn biểu thị xếp loại kiểm tra cuối năm của 120 học sinh: Giỏi chiếm 45%, Khá chiếm 40%, còn lại là Trung bình. Số học sinh Giỏi nhiều hơn số học sinh Trung bình là:",
        "options": [
          "36 em",
          "24 em",
          "30 em",
          "42 em"
        ],
        "correctAnswer": "36 em",
        "hint": "Trung bình = $100\\% - (45\\% + 40\\%) = 15\\%$. Hiệu tỉ lệ = $45\\% - 15\\% = 30\\%$. Số em hơn = $120 \\times 30 : 100 = 36$ em.",
        "explanation": "36 em."
      }
    ],
    "speedQuestions": [
      {
        "id": "m65-s1",
        "prompt": "Góc ở tâm của cả hình tròn bằng:",
        "options": [
          "360°",
          "180°",
          "100°",
          "90°"
        ],
        "correctAnswer": "360°",
        "explanation": "360°."
      },
      {
        "id": "m65-s2",
        "prompt": "25% ứng với góc ở tâm là:",
        "options": [
          "90°",
          "180°",
          "45°",
          "60°"
        ],
        "correctAnswer": "90°",
        "explanation": "$360° : 4 = 90°$."
      },
      {
        "id": "m65-s3",
        "prompt": "Tổng phần trăm trên biểu đồ quạt luôn là:",
        "options": [
          "100%",
          "360%",
          "50%",
          "200%"
        ],
        "correctAnswer": "100%",
        "explanation": "100%."
      }
    ]
  },
  "math-bai-66": {
    "practiceQuestions": [
      {
        "id": "m66-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Nhìn vào biểu đồ quạt tròn, phần quạt có diện tích lớn nhất biểu thị:",
        "options": [
          "Số liệu có tỉ lệ phần trăm cao nhất",
          "Số liệu có giá trị bé nhất",
          "Số liệu trung bình",
          "Không có ý nghĩa gì"
        ],
        "correctAnswer": "Số liệu có tỉ lệ phần trăm cao nhất",
        "hint": "Diện tích hình quạt tỉ lệ thuận với tỉ số phần trăm mà nó đại diện.",
        "explanation": "Phần quạt lớn nhất biểu thị tỉ lệ cao nhất."
      },
      {
        "id": "m66-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Nếu hai phần quạt trên biểu đồ có diện tích bằng nhau thì:",
        "options": [
          "Hai số liệu tương ứng có tỉ số phần trăm bằng nhau",
          "Hai số liệu phải cùng bằng 50%",
          "Tổng của chúng bằng 100%",
          "Không so sánh được"
        ],
        "correctAnswer": "Hai số liệu tương ứng có tỉ số phần trăm bằng nhau",
        "hint": "Cùng diện tích quạt tức là cùng tỉ lệ phần trăm.",
        "explanation": "Hai số liệu có tỉ số phần trăm bằng nhau."
      },
      {
        "id": "m66-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biểu đồ cơ cấu cây trồng của một xã: Lúa 60%, Ngô 25%, Cây ăn quả 15%. Biết tổng diện tích gieo trồng là $500\\text{ ha}$. Diện tích trồng ngô là:",
        "options": [
          "$125\\text{ ha}$",
          "$300\\text{ ha}$",
          "$75\\text{ ha}$",
          "$150\\text{ ha}$"
        ],
        "correctAnswer": "$125\\text{ ha}$",
        "hint": "$500 \\times 25 : 100 = 125\\text{ ha}$.",
        "explanation": "125 ha."
      },
      {
        "id": "m66-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một trường tiểu học có 800 học sinh. Biểu đồ phương tiện đến trường cho biết: Đi bộ 25%, Xe đạp 35%, Xe máy (bố mẹ chở) 40%. Số học sinh được bố mẹ chở bằng xe máy là:",
        "options": [
          "320 học sinh",
          "200 học sinh",
          "280 học sinh",
          "350 học sinh"
        ],
        "correctAnswer": "320 học sinh",
        "hint": "$800 \\times 40 : 100 = 320$ học sinh.",
        "explanation": "320 học sinh."
      },
      {
        "id": "m66-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Theo biểu đồ quạt tròn, gia đình bác Bình chi tiêu: Ăn uống 45%, Giáo dục 25%, Tiết kiệm 15%, Chi phí khác 15%. Nếu thu nhập hàng tháng là 20 000 000 đồng thì số tiền tiết kiệm được mỗi tháng là:",
        "options": [
          "3 000 000 đồng",
          "4 000 000 đồng",
          "5 000 000 đồng",
          "2 500 000 đồng"
        ],
        "correctAnswer": "3 000 000 đồng",
        "hint": "$20\\,000\\,000 \\times 15 : 100 = 3\\,000\\,000$ đồng.",
        "explanation": "3 000 000 đồng."
      },
      {
        "id": "m66-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biểu đồ quạt tròn về các loại chim trong vườn thú cho biết: Vẹt 40 con (chiếm 20% tổng số chim). Tổng số chim trong vườn thú đó là:",
        "options": [
          "200 con",
          "160 con",
          "80 con",
          "400 con"
        ],
        "correctAnswer": "200 con",
        "hint": "Tổng số chim = $40 : 20 \\times 100 = 200$ con.",
        "explanation": "200 con chim."
      },
      {
        "id": "m66-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Biểu đồ quạt tròn cho biết tỉ lệ tham gia môn thể thao của 150 học sinh: Bóng đá chiếm 40%, Cầu lông 30%, Bơi lội 20%, Bóng rổ 10%. Số bạn tham gia Bóng đá nhiều hơn Bóng rổ là:",
        "options": [
          "45 bạn",
          "30 bạn",
          "60 bạn",
          "15 bạn"
        ],
        "correctAnswer": "45 bạn",
        "hint": "Hiệu tỉ lệ = $40\\% - 10\\% = 30\\%$. Số bạn hơn = $150 \\times 30 : 100 = 45$ bạn.",
        "explanation": "45 bạn."
      },
      {
        "id": "m66-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một thư viện trường học có 3600 cuốn sách. Biểu đồ quạt tròn cho biết: Sách giáo khoa chiếm 50%, Truyện thiếu nhi chiếm 30%, Sách tham khảo chiếm 20%. Nếu nhà trường mua thêm 400 cuốn truyện thiếu nhi thì tỉ số phần trăm của truyện thiếu nhi lúc này là:",
        "options": [
          "37%",
          "35%",
          "40%",
          "36%"
        ],
        "correctAnswer": "37%",
        "hint": "Số truyện lúc đầu = $3600 \\times 30\\% = 1080$ cuốn. Sau khi mua thêm: $1080 + 400 = 1480$ cuốn. Tổng số sách mới = $3600 + 400 = 4000$ cuốn. Tỉ lệ mới = $1480 : 4000 = 0,37 = 37\\%$.",
        "explanation": "37%."
      }
    ],
    "speedQuestions": [
      {
        "id": "m66-s1",
        "prompt": "20% của 500 là:",
        "options": [
          "100",
          "50",
          "200",
          "150"
        ],
        "correctAnswer": "100",
        "explanation": "100."
      },
      {
        "id": "m66-s2",
        "prompt": "Nếu 50% bằng 60 thì 100% bằng:",
        "options": [
          "120",
          "30",
          "100",
          "200"
        ],
        "correctAnswer": "120",
        "explanation": "120."
      },
      {
        "id": "m66-s3",
        "prompt": "Góc ở tâm 180° biểu thị phần trăm là:",
        "options": [
          "50%",
          "25%",
          "100%",
          "75%"
        ],
        "correctAnswer": "50%",
        "explanation": "50%."
      }
    ]
  },
  "math-bai-67": {
    "practiceQuestions": [
      {
        "id": "m67-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Xác suất thực nghiệm xuất hiện một sự kiện được tính bằng công thức nào?",
        "options": [
          "Số lần sự kiện đó xảy ra chia cho tổng số lần thực hiện thí nghiệm",
          "Tổng số lần thực hiện chia cho số lần sự kiện xảy ra",
          "Số lần sự kiện xảy ra nhân với tổng số lần thực hiện",
          "Tổng số lần trừ đi số lần xảy ra"
        ],
        "correctAnswer": "Số lần sự kiện đó xảy ra chia cho tổng số lần thực hiện thí nghiệm",
        "hint": "Xác suất thực nghiệm = $\\frac{\\text{Số lần biến cố xuất hiện}}{\\text{Tổng số lần thử nghiệm}}$.",
        "explanation": "Số lần sự kiện xảy ra chia cho tổng số lần thực hiện."
      },
      {
        "id": "m67-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Gieo đồng xu 20 lần thấy xuất hiện mặt Ngửa 11 lần. Xác suất thực nghiệm xuất hiện mặt Ngửa là:",
        "options": [
          "$\\frac{11}{20}$",
          "$\\frac{9}{20}$",
          "$\\frac{11}{9}$",
          "$\\frac{9}{11}$"
        ],
        "correctAnswer": "$\\frac{11}{20}$",
        "hint": "$11 : 20 = \\frac{11}{20}$ (hay $55\\%$).",
        "explanation": "$\\frac{11}{20}$."
      },
      {
        "id": "m67-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Gieo một con xúc xắc 50 lần thấy có 15 lần xuất hiện mặt 6 chấm. Xác suất thực nghiệm xuất hiện mặt 6 chấm là:",
        "options": [
          "30%",
          "15%",
          "50%",
          "35%"
        ],
        "correctAnswer": "30%",
        "hint": "$15 : 50 = \\frac{30}{100} = 30\\%$.",
        "explanation": "30%."
      },
      {
        "id": "m67-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bạn Nam ném bóng rổ 30 lần và vào rổ 18 lần. Xác suất thực nghiệm ném bóng vào rổ của Nam là:",
        "options": [
          "60%",
          "50%",
          "70%",
          "54%"
        ],
        "correctAnswer": "60%",
        "hint": "$18 : 30 = 0,6 = 60\\%$.",
        "explanation": "60%."
      },
      {
        "id": "m67-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong một hộp kín có các viên bi màu. Bạn Mai lấy bi ngẫu nhiên 40 lần (mỗi lần lấy xong lại bỏ lại hộp) và ghi nhận có 14 lần lấy được bi xanh. Xác suất thực nghiệm lấy được bi xanh là:",
        "options": [
          "35%",
          "28%",
          "40%",
          "30%"
        ],
        "correctAnswer": "35%",
        "hint": "$14 : 40 = 0,35 = 35\\%$.",
        "explanation": "35%."
      },
      {
        "id": "m67-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Kiểm tra ngẫu nhiên 100 sản phẩm của một nhà máy thấy có 98 sản phẩm đạt chuẩn chất lượng. Xác suất thực nghiệm gặp sản phẩm bị lỗi là:",
        "options": [
          "2%",
          "98%",
          "4%",
          "0,2%"
        ],
        "correctAnswer": "2%",
        "hint": "Số sản phẩm lỗi: $100 - 98 = 2$. Xác suất = $2 : 100 = 2\\%$.",
        "explanation": "2%."
      },
      {
        "id": "m67-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Gieo đồng xu 100 lần thấy mặt Sấp xuất hiện 48 lần. Dự đoán nếu gieo đồng xu đó 500 lần thì mặt Sấp có thể xuất hiện khoảng bao nhiêu lần?",
        "options": [
          "Khoảng 240 lần",
          "Khoảng 250 lần",
          "Khoảng 200 lần",
          "Khoảng 300 lần"
        ],
        "correctAnswer": "Khoảng 240 lần",
        "hint": "Tỉ lệ xuất hiện mặt Sấp là $48\\%$. Trong 500 lần: $500 \\times 48\\% = 240$ lần.",
        "explanation": "Khoảng 240 lần."
      },
      {
        "id": "m67-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một xạ thủ bắn 80 viên đạn và trúng bia 68 viên. Xác suất thực nghiệm bắn không trúng bia của xạ thủ đó là:",
        "options": [
          "15%",
          "85%",
          "12%",
          "20%"
        ],
        "correctAnswer": "15%",
        "hint": "Số viên không trúng bia = $80 - 68 = 12$ viên. Xác suất = $12 : 80 = 0,15 = 15\\%$.",
        "explanation": "15%."
      }
    ],
    "speedQuestions": [
      {
        "id": "m67-s1",
        "prompt": "Tung đồng xu 10 lần, 6 lần ngửa. Xác suất ngửa là:",
        "options": [
          "60%",
          "40%",
          "50%",
          "70%"
        ],
        "correctAnswer": "60%",
        "explanation": "60%."
      },
      {
        "id": "m67-s2",
        "prompt": "Bắn 10 phát trúng 8. Xác suất trúng là:",
        "options": [
          "80%",
          "20%",
          "8%",
          "75%"
        ],
        "correctAnswer": "80%",
        "explanation": "80%."
      },
      {
        "id": "m67-s3",
        "prompt": "Quay 20 lần trúng thưởng 5 lần. Tỉ lệ trúng:",
        "options": [
          "25%",
          "20%",
          "30%",
          "15%"
        ],
        "correctAnswer": "25%",
        "explanation": "$5 : 20 = 25\\%$."
      }
    ]
  },
  "math-bai-68": {
    "practiceQuestions": [
      {
        "id": "m68-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Biểu đồ nào phù hợp nhất để biểu diễn tỉ số phần trăm của các thành phần trong một tổng thể?",
        "options": [
          "Biểu đồ hình quạt tròn",
          "Biểu đồ đoạn thẳng",
          "Biểu đồ tranh",
          "Bảng kẻ ô"
        ],
        "correctAnswer": "Biểu đồ hình quạt tròn",
        "hint": "Biểu đồ quạt tròn trực quan hóa rất tốt tỉ lệ phần trăm của các bộ phận trên tổng thể.",
        "explanation": "Biểu đồ hình quạt tròn."
      },
      {
        "id": "m68-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tung một đồng xu 30 lần, thấy có 18 lần ngửa. Tỉ số phần trăm lần xuất hiện mặt sấp là:",
        "options": [
          "40%",
          "60%",
          "50%",
          "30%"
        ],
        "correctAnswer": "40%",
        "hint": "Số lần sấp = $30 - 18 = 12$. Tỉ lệ = $12 : 30 = 40\\%$.",
        "explanation": "40%."
      },
      {
        "id": "m68-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biểu đồ quạt tròn biểu thị sở thích màu sắc của 120 học sinh: Đỏ 35%, Xanh 45%, Vàng 20%. Số học sinh thích màu Xanh là:",
        "options": [
          "54 bạn",
          "42 bạn",
          "24 bạn",
          "60 bạn"
        ],
        "correctAnswer": "54 bạn",
        "hint": "$120 \\times 45 : 100 = 54$ bạn.",
        "explanation": "54 bạn."
      },
      {
        "id": "m68-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cho dãy điểm thi: 7, 8, 8, 9, 10, 6, 8, 9, 7, 8. Điểm trung bình là:",
        "options": [
          "8",
          "7,8",
          "8,2",
          "7,5"
        ],
        "correctAnswer": "8",
        "hint": "$(7 + 8 + 8 + 9 + 10 + 6 + 8 + 9 + 7 + 8) : 10 = 80 : 10 = 8$.",
        "explanation": "8."
      },
      {
        "id": "m68-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Gieo con xúc xắc 60 lần, mặt 1 chấm xuất hiện 12 lần. Xác suất thực nghiệm mặt 1 chấm xuất hiện là:",
        "options": [
          "20%",
          "12%",
          "60%",
          "25%"
        ],
        "correctAnswer": "20%",
        "hint": "$12 : 60 = 0,2 = 20\\%$.",
        "explanation": "20%."
      },
      {
        "id": "m68-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một công ty khảo sát ý kiến 500 khách hàng: Rất hài lòng 55%, Hài lòng 35%, Chưa hài lòng 10%. Số khách hàng hài lòng và rất hài lòng là:",
        "options": [
          "450 người",
          "400 người",
          "475 người",
          "350 người"
        ],
        "correctAnswer": "450 người",
        "hint": "Tổng tỉ lệ = $55\\% + 35\\% = 90\\%$. Số người = $500 \\times 90 : 100 = 450$ người.",
        "explanation": "450 người."
      },
      {
        "id": "m68-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trong một hộp kín có các quả bóng gồm 3 màu: xanh, đỏ, vàng. Lấy ngẫu nhiên 100 lần (có hoàn lại), kết quả: 45 lần xanh, 35 lần đỏ, 20 lần vàng. Biết trong hộp có tất cả 60 quả bóng. Dự đoán số bóng đỏ trong hộp khoảng:",
        "options": [
          "21 quả",
          "27 quả",
          "12 quả",
          "25 quả"
        ],
        "correctAnswer": "21 quả",
        "hint": "Tỉ lệ bóng đỏ thực nghiệm = $35\\%$. Dự đoán số bóng đỏ = $60 \\times 35\\% = 21$ quả.",
        "explanation": "Khoảng 21 quả bóng đỏ."
      },
      {
        "id": "m68-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Biểu đồ quạt tròn cho biết nguồn thu của một hợp tác xã gồm 3 khoản: Trồng trọt, Chăn nuôi và Dịch vụ. Khoản Dịch vụ chiếm 20%. Khoản Trồng trọt gấp 3 lần khoản Chăn nuôi. Tỉ lệ phần trăm của khoản Trồng trọt là:",
        "options": [
          "60%",
          "45%",
          "50%",
          "55%"
        ],
        "correctAnswer": "60%",
        "hint": "Trồng trọt + Chăn nuôi = $100\\% - 20\\% = 80\\%$. Trồng trọt chiếm 3 phần, chăn nuôi 1 phần. Trồng trọt = $80 : (3 + 1) \\times 3 = 60\\%$.",
        "explanation": "60%."
      }
    ],
    "speedQuestions": [
      {
        "id": "m68-s1",
        "prompt": "Hình quạt tròn chiếm $\\frac{1}{4}$ hình tròn ứng với:",
        "options": [
          "25%",
          "50%",
          "75%",
          "20%"
        ],
        "correctAnswer": "25%",
        "explanation": "25%."
      },
      {
        "id": "m68-s2",
        "prompt": "Gieo đồng xu 50 lần được 25 lần ngửa. Tỉ lệ ngửa:",
        "options": [
          "50%",
          "25%",
          "60%",
          "40%"
        ],
        "correctAnswer": "50%",
        "explanation": "50%."
      },
      {
        "id": "m68-s3",
        "prompt": "100% của 400 là:",
        "options": [
          "400",
          "40",
          "4",
          "4000"
        ],
        "correctAnswer": "400",
        "explanation": "400."
      }
    ]
  },
  "math-bai-69": {
    "practiceQuestions": [
      {
        "id": "m69-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số thập phân gồm có 24 đơn vị, 8 phần trăm viết là:",
        "options": [
          "24,08",
          "24,8",
          "24,80",
          "2,408"
        ],
        "correctAnswer": "24,08",
        "hint": "Phần thập phân có chữ số 0 ở hàng phần mười và 8 ở hàng phần trăm.",
        "explanation": "24,08."
      },
      {
        "id": "m69-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tính: $0,45 \\times 100 = ?$",
        "options": [
          "45",
          "4,5",
          "450",
          "0,045"
        ],
        "correctAnswer": "45",
        "hint": "Dời dấu phẩy sang phải 2 chữ số.",
        "explanation": "45."
      },
      {
        "id": "m69-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $12,5 + 8,75 : 2,5 = ?$",
        "options": [
          "16",
          "8,5",
          "15,5",
          "16,5"
        ],
        "correctAnswer": "16",
        "hint": "$8,75 : 2,5 = 3,5$. $12,5 + 3,5 = 16$.",
        "explanation": "16."
      },
      {
        "id": "m69-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính bằng cách thuận tiện: $4,7 \\times 5,5 + 4,7 \\times 4,5$:",
        "options": [
          "47",
          "4,7",
          "470",
          "42"
        ],
        "correctAnswer": "47",
        "hint": "$4,7 \\times (5,5 + 4,5) = 4,7 \\times 10 = 47$.",
        "explanation": "47."
      },
      {
        "id": "m69-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm $x$, biết: $x : 1,2 = 4,5 - 1,5$:",
        "options": [
          "3,6",
          "3",
          "2,5",
          "4,8"
        ],
        "correctAnswer": "3,6",
        "hint": "$x : 1,2 = 3 \\Rightarrow x = 3 \\times 1,2 = 3,6$.",
        "explanation": "3,6."
      },
      {
        "id": "m69-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Phân số $\\frac{4}{5}$ viết dưới dạng số thập phân và tỉ số phần trăm lần lượt là:",
        "options": [
          "0,8 và 80%",
          "0,4 và 40%",
          "0,8 và 8%",
          "0,75 và 75%"
        ],
        "correctAnswer": "0,8 và 80%",
        "hint": "$\\frac{4}{5} = \\frac{8}{10} = 0,8 = 80\\%$.",
        "explanation": "0,8 và 80%."
      },
      {
        "id": "m69-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $A = \\frac{2,4 \\times 150 + 1,2 \\times 200}{1,5 \\times 200}$:",
        "options": [
          "2",
          "1,5",
          "2,5",
          "3"
        ],
        "correctAnswer": "2",
        "hint": "Tử số: $360 + 240 = 600$. Mẫu số: 300. $A = 600 : 300 = 2$.",
        "explanation": "2."
      },
      {
        "id": "m69-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một người bán 120 kg gạo gồm nếp và tẻ. Sau khi bán $\\frac{1}{4}$ số gạo nếp và $\\frac{1}{2}$ số gạo tẻ thì số gạo còn lại của hai loại bằng nhau. Lúc đầu người đó có bao nhiêu ki-lô-gam gạo nếp?",
        "options": [
          "48 kg",
          "72 kg",
          "50 kg",
          "60 kg"
        ],
        "correctAnswer": "48 kg",
        "hint": "Số gạo nếp còn lại: $\\frac{3}{4}$. Gạo tẻ còn lại: $\\frac{1}{2} = \\frac{3}{6}$. Tỉ số nếp/tẻ = $\\frac{4}{6} = \\frac{2}{3}$. Gạo nếp: $120 : (2 + 3) \\times 2 = 48\\text{ kg}$.",
        "explanation": "48 kg."
      }
    ],
    "speedQuestions": [
      {
        "id": "m69-s1",
        "prompt": "$0,75 = ...\\%$",
        "options": [
          "75%",
          "7,5%",
          "750%",
          "0,75%"
        ],
        "correctAnswer": "75%",
        "explanation": "75%."
      },
      {
        "id": "m69-s2",
        "prompt": "$12,8 : 4 = ?$",
        "options": [
          "3,2",
          "32",
          "0,32",
          "3,4"
        ],
        "correctAnswer": "3,2",
        "explanation": "3,2."
      },
      {
        "id": "m69-s3",
        "prompt": "$25 \\times 0,4 = ?$",
        "options": [
          "10",
          "1",
          "100",
          "0,1"
        ],
        "correctAnswer": "10",
        "explanation": "10."
      }
    ]
  },
  "math-bai-70": {
    "practiceQuestions": [
      {
        "id": "m70-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình lập phương có cạnh $3\\text{ cm}$ thì diện tích toàn phần là:",
        "options": [
          "$54\\text{ cm}^2$",
          "$36\\text{ cm}^2$",
          "$27\\text{ cm}^2$",
          "$18\\text{ cm}^2$"
        ],
        "correctAnswer": "$54\\text{ cm}^2$",
        "hint": "$S_{tp} = 3 \\times 3 \\times 6 = 54\\text{ cm}^2$.",
        "explanation": "$54\\text{ cm}^2$."
      },
      {
        "id": "m70-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Điền số thích hợp: $2,5\\text{ m}^3 = ...\\text{ dm}^3$:",
        "options": [
          "2500",
          "250",
          "25",
          "25 000"
        ],
        "correctAnswer": "2500",
        "hint": "$1\\text{ m}^3 = 1000\\text{ dm}^3$.",
        "explanation": "2500 dm³."
      },
      {
        "id": "m70-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình thang có diện tích $60\\text{ cm}^2$, chiều cao $6\\text{ cm}$. Trung bình cộng hai đáy là:",
        "options": [
          "$10\\text{ cm}$",
          "$20\\text{ cm}$",
          "$5\\text{ cm}$",
          "$15\\text{ cm}$"
        ],
        "correctAnswer": "$10\\text{ cm}$",
        "hint": "Trung bình cộng hai đáy = $S : h = 60 : 6 = 10\\text{ cm}$.",
        "explanation": "10 cm."
      },
      {
        "id": "m70-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hình tròn có đường kính $6\\text{ cm}$ thì diện tích là:",
        "options": [
          "$28,26\\text{ cm}^2$",
          "$18,84\\text{ cm}^2$",
          "$113,04\\text{ cm}^2$",
          "$14,13\\text{ cm}^2$"
        ],
        "correctAnswer": "$28,26\\text{ cm}^2$",
        "hint": "Bán kính $r = 3\\text{ cm}$. $S = 3 \\times 3 \\times 3,14 = 28,26\\text{ cm}^2$.",
        "explanation": "$28,26\\text{ cm}^2$."
      },
      {
        "id": "m70-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một bể nước hình hộp chữ nhật có kích thước dài $2\\text{ m}$, rộng $1,5\\text{ m}$ và cao $1,2\\text{ m}$. Bể chứa được nhiều nhất bao nhiêu lít nước?",
        "options": [
          "$3600\\text{ lít}$",
          "$360\\text{ lít}$",
          "$4700\\text{ lít}$",
          "$3000\\text{ lít}$"
        ],
        "correctAnswer": "$3600\\text{ lít}$",
        "hint": "$V = 2 \\times 1,5 \\times 1,2 = 3,6\\text{ m}^3 = 3600\\text{ dm}^3 = 3600\\text{ lít}$.",
        "explanation": "3600 lít."
      },
      {
        "id": "m70-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một cái thùng tôn hình lập phương không nắp có cạnh $0,8\\text{ m}$. Diện tích tôn dùng làm thùng là:",
        "options": [
          "$3,2\\text{ m}^2$",
          "$3,84\\text{ m}^2$",
          "$2,56\\text{ m}^2$",
          "$4\\text{ m}^2$"
        ],
        "correctAnswer": "$3,2\\text{ m}^2$",
        "hint": "Không nắp gồm 5 mặt: $0,8 \\times 0,8 \\times 5 = 3,2\\text{ m}^2$.",
        "explanation": "$3,2\\text{ m}^2$."
      },
      {
        "id": "m70-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một căn phòng dạng hình hộp chữ nhật dài $9\\text{ m}$, rộng $6\\text{ m}$, cao $4\\text{ m}$. Người ta quét vôi trần nhà và 4 bức tường phía trong phòng. Biết diện tích các cửa sổ và cửa ra vào là $16\\text{ m}^2$. Diện tích cần quét vôi là:",
        "options": [
          "$158\\text{ m}^2$",
          "$174\\text{ m}^2$",
          "$120\\text{ m}^2$",
          "$162\\text{ m}^2$"
        ],
        "correctAnswer": "$158\\text{ m}^2$",
        "hint": "$S_{xq} = (9 + 6) \\times 2 \\times 4 = 120\\text{ m}^2$. $S_{\\text{trần}} = 9 \\times 6 = 54\\text{ m}^2$. Tổng quét vôi = $120 + 54 - 16 = 158\\text{ m}^2$.",
        "explanation": "$158\\text{ m}^2$."
      },
      {
        "id": "m70-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bể bơi hình chữ nhật dài $50\\text{ m}$, rộng $20\\text{ m}$ và sâu $1,8\\text{ m}$. Để bơm đầy bể nước này bằng 2 máy bơm, mỗi máy bơm được $60\\text{ m}^3$ nước trong một giờ, cần thời gian bao lâu?",
        "options": [
          "15 giờ",
          "30 giờ",
          "12 giờ",
          "18 giờ"
        ],
        "correctAnswer": "15 giờ",
        "hint": "Thể tích bể = $50 \\times 20 \\times 1,8 = 1800\\text{ m}^3$. Cả 2 máy bơm 1 giờ: $60 \\times 2 = 120\\text{ m}^3$. Thời gian = $1800 : 120 = 15$ giờ.",
        "explanation": "15 giờ."
      }
    ],
    "speedQuestions": [
      {
        "id": "m70-s1",
        "prompt": "Lập phương cạnh 1 m có thể tích:",
        "options": [
          "$1000\\text{ dm}^3$",
          "$100\\text{ dm}^3$",
          "$10\\text{ dm}^3$",
          "$1\\text{ dm}^3$"
        ],
        "correctAnswer": "$1000\\text{ dm}^3$",
        "explanation": "1000 dm³."
      },
      {
        "id": "m70-s2",
        "prompt": "Hình tròn đường kính 2 m có chu vi:",
        "options": [
          "$6,28\\text{ m}$",
          "$3,14\\text{ m}$",
          "$12,56\\text{ m}$",
          "$6\\text{ m}$"
        ],
        "correctAnswer": "$6,28\\text{ m}$",
        "explanation": "6,28 m."
      },
      {
        "id": "m70-s3",
        "prompt": "Tam giác đáy 6 cm, cao 4 cm có diện tích:",
        "options": [
          "$12\\text{ cm}^2$",
          "$24\\text{ cm}^2$",
          "$10\\text{ cm}^2$",
          "$16\\text{ cm}^2$"
        ],
        "correctAnswer": "$12\\text{ cm}^2$",
        "explanation": "12 cm²."
      }
    ]
  },
  "math-bai-71": {
    "practiceQuestions": [
      {
        "id": "m71-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hai ô tô đi ngược chiều từ hai điểm cách nhau $s$ với vận tốc $v_1$ và $v_2$. Thời gian hai xe gặp nhau là:",
        "options": [
          "$s : (v_1 + v_2)$",
          "$s : (v_1 - v_2)$",
          "$s \\times (v_1 + v_2)$",
          "$(v_1 + v_2) : s$"
        ],
        "correctAnswer": "$s : (v_1 + v_2)$",
        "hint": "Chuyển động ngược chiều thì cộng vận tốc.",
        "explanation": "$t = s : (v_1 + v_2)$."
      },
      {
        "id": "m71-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hai số có tổng là 100 và tỉ số là $\\frac{1}{4}$. Số bé là:",
        "options": [
          "20",
          "25",
          "15",
          "80"
        ],
        "correctAnswer": "20",
        "hint": "$100 : (1 + 4) \\times 1 = 20$.",
        "explanation": "20."
      },
      {
        "id": "m71-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một ô tô đi từ A đến B lúc 7 giờ với vận tốc $50\\text{ km/h}$. Quãng đường AB dài $125\\text{ km}$. Hỏi ô tô đến B lúc mấy giờ?",
        "options": [
          "$9\\text{ giờ } 30\\text{ phút}$",
          "$9\\text{ giờ } 15\\text{ phút}$",
          "$9\\text{ giờ}$",
          "$10\\text{ giờ}$"
        ],
        "correctAnswer": "$9\\text{ giờ } 30\\text{ phút}$",
        "hint": "Thời gian đi = $125 : 50 = 2,5\\text{ giờ} = 2\\text{ giờ } 30\\text{ phút}$. Đến B lúc: $7\\text{ h} + 2\\text{ h } 30\\text{ p} = 9\\text{ giờ } 30\\text{ phút}$.",
        "explanation": "9 giờ 30 phút."
      },
      {
        "id": "m71-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người đi xe máy với vận tốc $36\\text{ km/h}$. Sau 45 phút người đó đi được quãng đường là:",
        "options": [
          "$27\\text{ km}$",
          "$24\\text{ km}$",
          "$30\\text{ km}$",
          "$18\\text{ km}$"
        ],
        "correctAnswer": "$27\\text{ km}$",
        "hint": "$45\\text{ phút} = 0,75\\text{ giờ}$. $s = 36 \\times 0,75 = 27\\text{ km}$.",
        "explanation": "27 km."
      },
      {
        "id": "m71-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Quãng đường AB dài $160\\text{ km}$. Hai ô tô đi ngược chiều nhau từ A và B, xe thứ nhất đi với vận tốc $45\\text{ km/h}$, xe thứ hai đi với vận tốc $35\\text{ km/h}$. Sau mấy giờ hai xe gặp nhau?",
        "options": [
          "$2\\text{ giờ}$",
          "$2,5\\text{ giờ}$",
          "$1,5\\text{ giờ}$",
          "$3\\text{ giờ}$"
        ],
        "correctAnswer": "$2\\text{ giờ}$",
        "hint": "$t = 160 : (45 + 35) = 160 : 80 = 2\\text{ giờ}$.",
        "explanation": "2 giờ."
      },
      {
        "id": "m71-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một đàn gà và vịt có 150 con. Biết số vịt bằng $\\frac{2}{3}$ số gà. Số con gà nhiều hơn số con vịt là:",
        "options": [
          "30 con",
          "60 con",
          "90 con",
          "25 con"
        ],
        "correctAnswer": "30 con",
        "hint": "Gà = $150 : 5 \\times 3 = 90$ con. Vịt = 60 con. Hơn = $90 - 60 = 30$ con.",
        "explanation": "30 con."
      },
      {
        "id": "m71-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Lúc 8 giờ một người đi xe đạp từ A đến B với vận tốc $12\\text{ km/h}$. Đến 9 giờ 30 phút một người đi xe máy cũng đi từ A đuổi theo với vận tốc $36\\text{ km/h}$. Người đi xe máy đuổi kịp người đi xe đạp lúc mấy giờ?",
        "options": [
          "$10\\text{ giờ } 15\\text{ phút}$",
          "$10\\text{ giờ } 30\\text{ phút}$",
          "$10\\text{ giờ}$",
          "$11\\text{ giờ}$"
        ],
        "correctAnswer": "$10\\text{ giờ } 15\\text{ phút}$",
        "hint": "Xe đạp đi trước 1,5 giờ: $12 \\times 1,5 = 18\\text{ km}$. Hiệu vận tốc = $36 - 12 = 24\\text{ km/h}$. Thời gian đuổi = $18 : 24 = 0,75\\text{ giờ} = 45\\text{ phút}$. Đuổi kịp lúc: $9\\text{ h } 30\\text{ p} + 45\\text{ p} = 10\\text{ giờ } 15\\text{ phút}$.",
        "explanation": "10 giờ 15 phút."
      },
      {
        "id": "m71-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một ca-nô đi từ bến A đến bến B xuôi dòng mất 3 giờ, đi từ B về A ngược dòng mất 4 giờ. Biết vận tốc dòng nước là $2,5\\text{ km/h}$. Khoảng cách giữa hai bến A và B là:",
        "options": [
          "$60\\text{ km}$",
          "$50\\text{ km}$",
          "$75\\text{ km}$",
          "$45\\text{ km}$"
        ],
        "correctAnswer": "$60\\text{ km}$",
        "hint": "$v_{\\text{xuôi}} - v_{\\text{ngược}} = 2 \\times 2,5 = 5\\text{ km/h}$. Tỉ số vận tốc xuôi/ngược = $\\frac{4}{3}$. $v_{\\text{xuôi}} = 5 : (4 - 3) \\times 4 = 20\\text{ km/h}$. $s = 20 \\times 3 = 60\\text{ km}$.",
        "explanation": "60 km."
      }
    ],
    "speedQuestions": [
      {
        "id": "m71-s1",
        "prompt": "$s = 80\\text{ km}, v = 40\\text{ km/h} \\Rightarrow t = ?$",
        "options": [
          "2 giờ",
          "1 giờ",
          "3 giờ",
          "4 giờ"
        ],
        "correctAnswer": "2 giờ",
        "explanation": "2 giờ."
      },
      {
        "id": "m71-s2",
        "prompt": "Cùng chiều cách nhau 30 km, hiệu v là 15 km/h, đuổi kịp sau:",
        "options": [
          "2 giờ",
          "1 giờ",
          "3 giờ",
          "4 giờ"
        ],
        "correctAnswer": "2 giờ",
        "explanation": "2 giờ."
      },
      {
        "id": "m71-s3",
        "prompt": "Tổng 60, tỉ số 1 : 2, số lớn là:",
        "options": [
          "40",
          "20",
          "30",
          "50"
        ],
        "correctAnswer": "40",
        "explanation": "40."
      }
    ]
  },
  "math-bai-72": {
    "practiceQuestions": [
      {
        "id": "m72-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Chữ số 8 trong số thập phân $45,823$ có giá trị là:",
        "options": [
          "$\\frac{8}{10}$",
          "$\\frac{8}{100}$",
          "$\\frac{8}{1000}$",
          "8"
        ],
        "correctAnswer": "$\\frac{8}{10}$",
        "hint": "Đứng ngay sau dấu phẩy ở hàng phần mười.",
        "explanation": "$\\frac{8}{10}$."
      },
      {
        "id": "m72-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Điền số thích hợp: $3\\text{ m}^3\\text{ } 45\\text{ dm}^3 = ...\\text{ m}^3$:",
        "options": [
          "3,045",
          "3,45",
          "34,5",
          "0,345"
        ],
        "correctAnswer": "3,045",
        "hint": "$45\\text{ dm}^3 = 0,045\\text{ m}^3$.",
        "explanation": "3,045 m³."
      },
      {
        "id": "m72-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $34,8 + 15,2 \\times 2,5 = ?$",
        "options": [
          "72,8",
          "125",
          "70,8",
          "73"
        ],
        "correctAnswer": "72,8",
        "hint": "$15,2 \\times 2,5 = 38$. $34,8 + 38 = 72,8$.",
        "explanation": "72,8."
      },
      {
        "id": "m72-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tìm $y$, biết: $y \\times 4,8 = 19,2 + 9,6$:",
        "options": [
          "6",
          "5",
          "7",
          "4"
        ],
        "correctAnswer": "6",
        "hint": "$y \\times 4,8 = 28,8 \\Rightarrow y = 28,8 : 4,8 = 6$.",
        "explanation": "6."
      },
      {
        "id": "m72-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Diện tích hình thang có đáy lớn $16\\text{ cm}$, đáy bé $10\\text{ cm}$ và chiều cao $8\\text{ cm}$ là:",
        "options": [
          "$104\\text{ cm}^2$",
          "$208\\text{ cm}^2$",
          "$80\\text{ cm}^2$",
          "$120\\text{ cm}^2$"
        ],
        "correctAnswer": "$104\\text{ cm}^2$",
        "hint": "$S = (16 + 10) \\times 8 : 2 = 104\\text{ cm}^2$.",
        "explanation": "104 cm²."
      },
      {
        "id": "m72-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một ô tô đi quãng đường $162\\text{ km}$ hết 3 giờ 36 phút. Vận tốc của ô tô là:",
        "options": [
          "$45\\text{ km/h}$",
          "$50\\text{ km/h}$",
          "$42\\text{ km/h}$",
          "$48\\text{ km/h}$"
        ],
        "correctAnswer": "$45\\text{ km/h}$",
        "hint": "3 giờ 36 phút = 3,6 giờ. $v = 162 : 3,6 = 45\\text{ km/h}$.",
        "explanation": "45 km/h."
      },
      {
        "id": "m72-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cái bể dạng hình hộp chữ nhật có chiều dài $2,5\\text{ m}$, chiều rộng $1,8\\text{ m}$ và chiều cao $1,5\\text{ m}$. Bể đang chứa nước cao $0,6\\text{ m}$. Người ta mở vòi chảy vào bể mỗi phút $45\\text{ lít}$. Sau bao lâu thì nước đầy bể?",
        "options": [
          "$1\\text{ giờ } 30\\text{ phút}$",
          "$1\\text{ giờ } 40\\text{ phút}$",
          "$2\\text{ giờ}$",
          "$1\\text{ giờ } 15\\text{ phút}$"
        ],
        "correctAnswer": "$1\\text{ giờ } 30\\text{ phút}$",
        "hint": "Chiều cao cần chảy thêm: $1,5 - 0,6 = 0,9\\text{ m}$. Thể tích cần chảy: $2,5 \\times 1,8 \\times 0,9 = 4,05\\text{ m}^3 = 4050\\text{ lít}$. Thời gian: $4050 : 45 = 90\\text{ phút} = 1\\text{ giờ } 30\\text{ phút}$.",
        "explanation": "1 giờ 30 phút."
      },
      {
        "id": "m72-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một người bán hàng lãi được 20% theo giá vốn. Hỏi người đó lãi bao nhiêu phần trăm theo giá bán?",
        "options": [
          "$16,67\\%$",
          "20%",
          "25%",
          "15%"
        ],
        "correctAnswer": "$16,67\\%$",
        "hint": "Coi vốn là 100 đồng thì lãi 20 đồng, giá bán là 120 đồng. Lãi so với giá bán: $20 : 120 = \\frac{1}{6} \\approx 16,67\\%$.",
        "explanation": "Khoảng 16,67%."
      }
    ],
    "speedQuestions": [
      {
        "id": "m72-s1",
        "prompt": "$0,5 \\times 100 = ?$",
        "options": [
          "50",
          "5",
          "500",
          "0,05"
        ],
        "correctAnswer": "50",
        "explanation": "50."
      },
      {
        "id": "m72-s2",
        "prompt": "Lập phương cạnh 3 cm có thể tích:",
        "options": [
          "$27\\text{ cm}^3$",
          "$9\\text{ cm}^3$",
          "$54\\text{ cm}^3$",
          "$18\\text{ cm}^3$"
        ],
        "correctAnswer": "$27\\text{ cm}^3$",
        "explanation": "27 cm³."
      },
      {
        "id": "m72-s3",
        "prompt": "$v = 50\\text{ km/h}, t = 2\\text{ h} \\Rightarrow s = ?$",
        "options": [
          "100 km",
          "25 km",
          "52 km",
          "80 km"
        ],
        "correctAnswer": "100 km",
        "explanation": "100 km."
      }
    ]
  },
  "math-bai-73": {
    "practiceQuestions": [
      {
        "id": "m73-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số thập phân lớn nhất trong các số $7,92 ; 7,902 ; 7,925 ; 7,9$ là:",
        "options": [
          "7,925",
          "7,92",
          "7,902",
          "7,9"
        ],
        "correctAnswer": "7,925",
        "hint": "So sánh hàng phần nghìn sau khi hàng phần trăm là 2.",
        "explanation": "7,925."
      },
      {
        "id": "m73-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình tròn có bán kính $r = 10\\text{ cm}$ thì diện tích là:",
        "options": [
          "$314\\text{ cm}^2$",
          "$62,8\\text{ cm}^2$",
          "$31,4\\text{ cm}^2$",
          "$157\\text{ cm}^2$"
        ],
        "correctAnswer": "$314\\text{ cm}^2$",
        "hint": "$S = 10 \\times 10 \\times 3,14 = 314\\text{ cm}^2$.",
        "explanation": "314 cm²."
      },
      {
        "id": "m73-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $(24,5 - 6,5) : 0,4 + 15$:",
        "options": [
          "60",
          "45",
          "50",
          "55"
        ],
        "correctAnswer": "60",
        "hint": "$18 : 0,4 + 15 = 45 + 15 = 60$.",
        "explanation": "60."
      },
      {
        "id": "m73-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một thửa ruộng hình thang có đáy lớn $120\\text{ m}$, đáy bé bằng $\\frac{2}{3}$ đáy lớn, chiều cao $50\\text{ m}$. Diện tích thửa ruộng là bao nhiêu héc-ta?",
        "options": [
          "$0,5\\text{ ha}$",
          "$5\\text{ ha}$",
          "$50\\text{ ha}$",
          "$0,05\\text{ ha}$"
        ],
        "correctAnswer": "$0,5\\text{ ha}$",
        "hint": "Đáy bé = 80 m. $S = (120 + 80) \\times 50 : 2 = 5000\\text{ m}^2 = 0,5\\text{ ha}$.",
        "explanation": "0,5 ha."
      },
      {
        "id": "m73-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hai tỉnh A và B cách nhau $105\\text{ km}$. Một xe máy đi từ A đến B với vận tốc $30\\text{ km/h}$, cùng lúc đó một ô tô đi từ B về A với vận tốc $40\\text{ km/h}$. Sau bao lâu hai xe gặp nhau?",
        "options": [
          "$1\\text{ giờ } 30\\text{ phút}$",
          "$1\\text{ giờ } 15\\text{ phút}$",
          "$1\\text{ giờ } 45\\text{ phút}$",
          "$2\\text{ giờ}$"
        ],
        "correctAnswer": "$1\\text{ giờ } 30\\text{ phút}$",
        "hint": "$t = 105 : (30 + 40) = 105 : 70 = 1,5\\text{ giờ} = 1\\text{ giờ } 30\\text{ phút}$.",
        "explanation": "1 giờ 30 phút."
      },
      {
        "id": "m73-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một hình lập phương có diện tích xung quanh là $100\\text{ cm}^2$. Thể tích của hình lập phương đó là:",
        "options": [
          "$125\\text{ cm}^3$",
          "$100\\text{ cm}^3$",
          "$150\\text{ cm}^3$",
          "$64\\text{ cm}^3$"
        ],
        "correctAnswer": "$125\\text{ cm}^3$",
        "hint": "Diện tích 1 mặt = $100 : 4 = 25\\text{ cm}^2 \\Rightarrow$ Cạnh = $5\\text{ cm}$. Thể tích = $5 \\times 5 \\times 5 = 125\\text{ cm}^3$.",
        "explanation": "125 cm³."
      },
      {
        "id": "m73-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức thuận tiện nhất: $12,48 \\times 3,4 + 12,48 \\times 4,6 + 24,96$:",
        "options": [
          "124,8",
          "12,48",
          "1248",
          "100"
        ],
        "correctAnswer": "124,8",
        "hint": "Để ý $24,96 = 12,48 \\times 2$. Biểu thức = $12,48 \\times (3,4 + 4,6 + 2) = 12,48 \\times 10 = 124,8$.",
        "explanation": "124,8."
      },
      {
        "id": "m73-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Hai vòi nước cùng chảy vào một cái bể cạn thì sau 4 giờ sẽ đầy bể. Nếu chỉ mở vòi thứ nhất chảy một mình thì sau 6 giờ sẽ đầy bể. Hỏi nếu chỉ mở vòi thứ hai chảy một mình thì sau bao lâu đầy bể?",
        "options": [
          "12 giờ",
          "8 giờ",
          "10 giờ",
          "9 giờ"
        ],
        "correctAnswer": "12 giờ",
        "hint": "1 giờ cả 2 vòi chảy: $\\frac{1}{4}$ bể. 1 giờ vòi 1 chảy: $\\frac{1}{6}$ bể. 1 giờ vòi 2 chảy: $\\frac{1}{4} - \\frac{1}{6} = \\frac{1}{12}$ bể. Vòi 2 chảy một mình hết: $1 : \\frac{1}{12} = 12$ giờ.",
        "explanation": "12 giờ."
      }
    ],
    "speedQuestions": [
      {
        "id": "m73-s1",
        "prompt": "$1,2 : 0,4 = ?$",
        "options": [
          "3",
          "0,3",
          "30",
          "4"
        ],
        "correctAnswer": "3",
        "explanation": "3."
      },
      {
        "id": "m73-s2",
        "prompt": "$50\\%$ của $60\\text{ kg}$ là:",
        "options": [
          "$30\\text{ kg}$",
          "$25\\text{ kg}$",
          "$35\\text{ kg}$",
          "$20\\text{ kg}$"
        ],
        "correctAnswer": "$30\\text{ kg}$",
        "explanation": "30 kg."
      },
      {
        "id": "m73-s3",
        "prompt": "Tam giác vuông cạnh 6 cm và 8 cm có diện tích:",
        "options": [
          "$24\\text{ cm}^2$",
          "$48\\text{ cm}^2$",
          "$14\\text{ cm}^2$",
          "$30\\text{ cm}^2$"
        ],
        "correctAnswer": "$24\\text{ cm}^2$",
        "explanation": "24 cm²."
      }
    ]
  },
  "math-bai-74": {
    "practiceQuestions": [
      {
        "id": "m74-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Số thập phân gồm 8 chục, 5 đơn vị và 3 phần trăm viết là:",
        "options": [
          "85,03",
          "85,3",
          "85,30",
          "8,503"
        ],
        "correctAnswer": "85,03",
        "hint": "Chữ số hàng chục là 8, đơn vị là 5, phần mười là 0, phần trăm là 3.",
        "explanation": "85,03."
      },
      {
        "id": "m74-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Đổi $2\\text{ ha}\\text{ } 50\\text{ m}^2 = ...\\text{ m}^2$:",
        "options": [
          "20 050",
          "2050",
          "20 500",
          "2500"
        ],
        "correctAnswer": "20 050",
        "hint": "$2\\text{ ha} = 20\\,000\\text{ m}^2$. Cộng 50 thành $20\\,050\\text{ m}^2$.",
        "explanation": "20 050 m²."
      },
      {
        "id": "m74-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tính giá trị biểu thức: $15,6 + 4,8 : 0,6 - 3,2 = ?$",
        "options": [
          "20,4",
          "18,4",
          "22,4",
          "19,2"
        ],
        "correctAnswer": "20,4",
        "hint": "$4,8 : 0,6 = 8$. $15,6 + 8 - 3,2 = 23,6 - 3,2 = 20,4$.",
        "explanation": "20,4."
      },
      {
        "id": "m74-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hình hộp chữ nhật có diện tích xung quanh là $80\\text{ cm}^2$, chiều cao $4\\text{ cm}$. Chu vi mặt đáy của hình hộp là:",
        "options": [
          "$20\\text{ cm}$",
          "$40\\text{ cm}$",
          "$10\\text{ cm}$",
          "$16\\text{ cm}$"
        ],
        "correctAnswer": "$20\\text{ cm}$",
        "hint": "Chu vi đáy = $S_{xq} : h = 80 : 4 = 20\\text{ cm}$.",
        "explanation": "20 cm."
      },
      {
        "id": "m74-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một người đi bộ với vận tốc $4,5\\text{ km/h}$ trong $1\\text{ giờ } 20\\text{ phút}$. Quãng đường người đó đi được là:",
        "options": [
          "$6\\text{ km}$",
          "$5,4\\text{ km}$",
          "$6,5\\text{ km}$",
          "$5\\text{ km}$"
        ],
        "correctAnswer": "$6\\text{ km}$",
        "hint": "$1\\text{ giờ } 20\\text{ phút} = \\frac{4}{3}\\text{ giờ}$. $s = 4,5 \\times \\frac{4}{3} = 6\\text{ km}$.",
        "explanation": "6 km."
      },
      {
        "id": "m74-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Một trường tiểu học có 600 học sinh. Số học sinh Nữ chiếm 55%. Số học sinh Nam của trường là:",
        "options": [
          "270 bạn",
          "330 bạn",
          "280 bạn",
          "260 bạn"
        ],
        "correctAnswer": "270 bạn",
        "hint": "Nam chiếm: $100\\% - 55\\% = 45\\%$. Số nam = $600 \\times 45 : 100 = 270$ bạn.",
        "explanation": "270 bạn."
      },
      {
        "id": "m74-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một cái bể dạng hình hộp chữ nhật dài $2\\text{ m}$, rộng $1,5\\text{ m}$, cao $1,2\\text{ m}$. Đang chứa 1800 lít nước. Mực nước trong bể cao bao nhiêu mét?",
        "options": [
          "$0,6\\text{ m}$",
          "$0,8\\text{ m}$",
          "$0,5\\text{ m}$",
          "$0,9\\text{ m}$"
        ],
        "correctAnswer": "$0,6\\text{ m}$",
        "hint": "$1800\\text{ lít} = 1,8\\text{ m}^3$. Diện tích đáy = $2 \\times 1,5 = 3\\text{ m}^2$. Chiều cao nước = $1,8 : 3 = 0,6\\text{ m}$.",
        "explanation": "0,6 m."
      },
      {
        "id": "m74-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm số tự nhiên có 2 chữ số, biết rằng nếu viết thêm chữ số 0 vào giữa hai chữ số đó ta được số mới gấp 9 lần số phải tìm:",
        "options": [
          "45",
          "35",
          "54",
          "63"
        ],
        "correctAnswer": "45",
        "hint": "$\\overline{a0b} = 9 \\times \\overline{ab} \\Rightarrow 100a + b = 9(10a + b) = 90a + 9b \\Rightarrow 10a = 8b \\Rightarrow 5a = 4b \\Rightarrow a = 4, b = 5$. Số đó là 45.",
        "explanation": "Số 45 (vì 405 = 9 × 45)."
      }
    ],
    "speedQuestions": [
      {
        "id": "m74-s1",
        "prompt": "$0,25 \\times 40 = ?$",
        "options": [
          "10",
          "1",
          "100",
          "4"
        ],
        "correctAnswer": "10",
        "explanation": "10."
      },
      {
        "id": "m74-s2",
        "prompt": "1 thế kỉ bằng bao nhiêu năm?",
        "options": [
          "100 năm",
          "10 năm",
          "1000 năm",
          "50 năm"
        ],
        "correctAnswer": "100 năm",
        "explanation": "100 năm."
      },
      {
        "id": "m74-s3",
        "prompt": "Hình tròn bán kính 1 m có diện tích:",
        "options": [
          "$3,14\\text{ m}^2$",
          "$6,28\\text{ m}^2$",
          "$1,57\\text{ m}^2$",
          "$12,56\\text{ m}^2$"
        ],
        "correctAnswer": "$3,14\\text{ m}^2$",
        "explanation": "3,14 m²."
      }
    ]
  }
};

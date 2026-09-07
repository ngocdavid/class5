import { Question, SpeedQuestion } from '../../types';

export interface LessonQuestions {
  practiceQuestions: Question[];
  speedQuestions: SpeedQuestion[];
}

export const vietnameseQuestionsT1: Record<string, LessonQuestions> = {
  "vn-b1": {
    "practiceQuestions": [
      {
        "id": "vn1-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong bài đọc 'Thanh âm của gió', nhân vật chính cảm nhận âm thanh của gió qua những sự vật nào?",
        "options": [
          "Tiếng lá cây xào xạc, tiếng sáo diều vi vu và ngọn cỏ dập dờn",
          "Tiếng còi xe inh ỏi trên đường phố",
          "Tiếng sóng biển gầm vang dữ dội",
          "Tiếng chuông chùa ngân nga buổi sớm"
        ],
        "correctAnswer": "Tiếng lá cây xào xạc, tiếng sáo diều vi vu và ngọn cỏ dập dờn",
        "hint": "Gió mùa thu trên cánh đồng quê mang theo âm thanh tự nhiên của đồng cỏ và cánh diều.",
        "explanation": "Tác giả cảm nhận gió qua tiếng lá cây, tiếng sáo diều vi vu và tiếng đồng nội."
      },
      {
        "id": "vn1-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ ngữ nào dưới đây miêu tả âm thanh của tiếng gió nhẹ êm đềm?",
        "options": [
          "Rì rào",
          "Ào ào",
          "Ầm ầm",
          "Gầm rú"
        ],
        "correctAnswer": "Rì rào",
        "hint": "'Rì rào' là từ tượng thanh gợi tả âm thanh êm dịu, nhỏ nhẹ liên tục.",
        "explanation": "'Rì rào' gợi tả tiếng gió êm đềm qua vòm lá."
      },
      {
        "id": "vn1-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chi tiết nào trong bài cho thấy các bạn nhỏ rất gắn bó và yêu quý thiên nhiên quê hương?",
        "options": [
          "Các bạn say mê lắng nghe khúc ca của gió và thả những cánh diều no gió",
          "Các bạn đóng kín cửa ở trong nhà tránh gió",
          "Các bạn thích xem tivi hơn ra ngoài đồng",
          "Các bạn chỉ đi hái quả mà không để ý chung quanh"
        ],
        "correctAnswer": "Các bạn say mê lắng nghe khúc ca của gió và thả những cánh diều no gió",
        "hint": "Hình ảnh tuổi thơ gắn bó với cánh đồng, ngọn gió và những cánh diều bay cao.",
        "explanation": "Niềm vui thả diều và lắng nghe âm thanh đồng quê thể hiện tình yêu thiên nhiên sâu sắc."
      },
      {
        "id": "vn1-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biện pháp nghệ thuật nào được sử dụng trong câu: 'Ngọn gió như người nhạc sĩ tài hoa tấu lên khúc nhạc đồng quê'?",
        "options": [
          "So sánh",
          "Điệp từ",
          "Đảo ngữ",
          "Nói quá"
        ],
        "correctAnswer": "So sánh",
        "hint": "Có từ so sánh 'như' nối giữa ngọn gió và người nhạc sĩ.",
        "explanation": "Biện pháp so sánh ví gió như một người nhạc sĩ tài hoa."
      },
      {
        "id": "vn1-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Nội dung chính của bài đọc 'Thanh âm của gió' là gì?",
        "options": [
          "Ca ngợi vẻ đẹp trong trẻo, yên bình của thiên nhiên làng quê qua những thanh âm của gió",
          "Cảnh báo về sức tàn phá của những cơn bão lớn",
          "Miêu tả các loại nhạc cụ hiện đại trong dàn nhạc",
          "Kể lại một chuyến thám hiểm rừng sâu hiểm trở"
        ],
        "correctAnswer": "Ca ngợi vẻ đẹp trong trẻo, yên bình của thiên nhiên làng quê qua những thanh âm của gió",
        "hint": "Bài văn là khúc ca thanh bình về tuổi thơ và thiên nhiên làng quê.",
        "explanation": "Bài đọc ca ngợi vẻ đẹp bình dị, âm thanh kỳ diệu của ngọn gió quê hương."
      },
      {
        "id": "vn1-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Những cánh diều bay lượn trên nền trời thu xanh biếc', từ 'xanh biếc' là từ loại nào?",
        "options": [
          "Tính từ",
          "Danh từ",
          "Động từ",
          "Đại từ"
        ],
        "correctAnswer": "Tính từ",
        "hint": "'Xanh biếc' chỉ màu sắc đậm đà, trong sáng của bầu trời.",
        "explanation": "'Xanh biếc' là tính từ chỉ màu sắc."
      },
      {
        "id": "vn1-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Qua bài đọc, tác giả muốn gửi gắm tới chúng ta thông điệp gì về cuộc sống?",
        "options": [
          "Hãy biết lắng nghe, cảm nhận và trân trọng những vẻ đẹp bình dị của thiên nhiên quanh mình",
          "Cần phải trở thành nhạc sĩ mới nghe được tiếng gió",
          "Nên ở nhà để giữ an toàn khi có gió thu",
          "Chỉ nên chơi thả diều khi trời có gió bão"
        ],
        "correctAnswer": "Hãy biết lắng nghe, cảm nhận và trân trọng những vẻ đẹp bình dị của thiên nhiên quanh mình",
        "hint": "Thiên nhiên luôn tràn đầy âm thanh tươi đẹp nếu chúng ta mở rộng tâm hồn đón nhận.",
        "explanation": "Thông điệp về sự gắn kết tâm hồn với vẻ đẹp giản dị của quê hương xứ sở."
      },
      {
        "id": "vn1-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Câu nào dưới đây sử dụng biện pháp nhân hóa để miêu tả ngọn gió?",
        "options": [
          "Chị gió nhẹ nhàng lướt qua đánh thức những chồi non thức giấc",
          "Ngọn gió thổi rất mạnh làm gãy cành cây",
          "Gió là một hiện tượng chuyển động của không khí",
          "Hôm nay gió mùa đông bắc tràn về làm trời trở rét"
        ],
        "correctAnswer": "Chị gió nhẹ nhàng lướt qua đánh thức những chồi non thức giấc",
        "hint": "Gọi gió bằng 'chị' và gán cho gió hành động 'đánh thức'.",
        "explanation": "Gọi 'chị gió' và hành động 'lướt qua, đánh thức' là nhân hóa."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn1-s1",
        "prompt": "Từ nào sau đây là từ tượng thanh gợi tả tiếng gió thổi nhẹ?",
        "options": [
          "Hiu hiu",
          "Ào ào",
          "Ầm ầm",
          "Rầm rập"
        ],
        "correctAnswer": "Hiu hiu",
        "explanation": "'Hiu hiu' gợi gió nhẹ mát lành."
      },
      {
        "id": "vn1-s2",
        "prompt": "Từ trái nghĩa với từ 'yên ả' là:",
        "options": [
          "Ồn ào",
          "Bình yên",
          "Lặng lẽ",
          "Thanh bình"
        ],
        "correctAnswer": "Ồn ào",
        "explanation": "Ồn ào trái nghĩa với yên ả."
      },
      {
        "id": "vn1-s3",
        "prompt": "'Thanh âm' đồng nghĩa với từ nào sau đây?",
        "options": [
          "Âm thanh",
          "Hình ảnh",
          "Màu sắc",
          "Hương thơm"
        ],
        "correctAnswer": "Âm thanh",
        "explanation": "Thanh âm nghĩa là âm thanh."
      }
    ]
  },
  "vn-b2": {
    "practiceQuestions": [
      {
        "id": "vn2-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ đồng nghĩa là những từ có đặc điểm gì?",
        "options": [
          "Có nghĩa giống nhau hoặc gần giống nhau",
          "Có cách phát âm hoàn toàn giống nhau nhưng nghĩa khác nhau",
          "Có nghĩa trái ngược nhau hoàn toàn",
          "Viết hoa chữ cái đầu tiên"
        ],
        "correctAnswer": "Có nghĩa giống nhau hoặc gần giống nhau",
        "hint": "Đồng nghĩa tức là cùng chung hoặc gần sát về nét nghĩa.",
        "explanation": "Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau."
      },
      {
        "id": "vn2-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Cặp từ nào dưới đây là cặp từ đồng nghĩa hoàn toàn?",
        "options": [
          "Xe lửa - Tàu hỏa",
          "To lớn - Bé nhỏ",
          "Chăm chỉ - Lười biếng",
          "Nhà cửa - Xe cộ"
        ],
        "correctAnswer": "Xe lửa - Tàu hỏa",
        "hint": "Cả hai từ cùng gọi chung một phương tiện giao thông chạy trên đường ray.",
        "explanation": "'Xe lửa' và 'tàu hỏa' đồng nghĩa hoàn toàn, có thể thay thế cho nhau."
      },
      {
        "id": "vn2-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Dãy từ nào sau đây gồm các từ đồng nghĩa chỉ màu đỏ?",
        "options": [
          "Đỏ thắm, đỏ rực, đỏ tươi, đỏ tía",
          "Đỏ thắm, xanh ngắt, vàng rực, tím biếc",
          "Đỏ tươi, trắng muốt, đen nhánh, hồng hào",
          "Đỏ rực, vàng hoe, tím tái, xám xịt"
        ],
        "correctAnswer": "Đỏ thắm, đỏ rực, đỏ tươi, đỏ tía",
        "hint": "Tất cả các từ trong nhóm phải cùng biểu thị các sắc thái khác nhau của màu đỏ.",
        "explanation": "Đỏ thắm, đỏ rực, đỏ tươi, đỏ tía là các từ đồng nghĩa chỉ sắc thái màu đỏ."
      },
      {
        "id": "vn2-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chọn từ thích hợp nhất điền vào câu: 'Bác Hồ là vị lãnh tụ ... của dân tộc Việt Nam.'",
        "options": [
          "Vĩ đại",
          "To lớn",
          "Kềnh càng",
          "Đồ sộ"
        ],
        "correctAnswer": "Vĩ đại",
        "hint": "Từ ngữ ca ngợi tầm vóc, nhân cách và công lao to lớn của danh nhân.",
        "explanation": "'Vĩ đại' mang sắc thái trang trọng, tôn kính phù hợp nhất."
      },
      {
        "id": "vn2-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong các từ sau: 'chết, hi sinh, quy tiên, toi mạng', từ nào dùng để chỉ cái chết vì nghĩa lớn một cách tôn kính?",
        "options": [
          "Hi sinh",
          "Chết",
          "Toi mạng",
          "Quy tiên"
        ],
        "correctAnswer": "Hi sinh",
        "hint": "Dùng cho những người cống hiến đời mình vì Tổ quốc, vì nhân dân.",
        "explanation": "'Hi sinh' thể hiện lòng biết ơn, sự kính trọng sâu sắc."
      },
      {
        "id": "vn2-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cặp từ nào dưới đây là từ đồng nghĩa không hoàn toàn (khác nhau về sắc thái biểu cảm)?",
        "options": [
          "Chăm chỉ - Cần cù",
          "Mẹ - Má",
          "Bố - Ba",
          "Quả - Trái"
        ],
        "correctAnswer": "Chăm chỉ - Cần cù",
        "hint": "'Cần cù' thường gắn liền với sự chịu khó, bền bỉ qua năm tháng lao động vất vả.",
        "explanation": "'Chăm chỉ' và 'cần cù' có sắc thái nghĩa hơi khác nhau (đồng nghĩa không hoàn toàn)."
      },
      {
        "id": "vn2-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm từ đồng nghĩa thay thế cho từ 'ăn' trong câu: 'Chú chim non đang ... mồi mẹ mớm cho' để câu văn hay và chính xác nhất:",
        "options": [
          "Đớp",
          "Xơi",
          "Dùng bữa",
          "Chén"
        ],
        "correctAnswer": "Đớp",
        "hint": "Hoạt động nhận mồi nhanh của loài chim bằng mỏ.",
        "explanation": "'Đớp' mồi là cách diễn đạt tự nhiên, chính xác với chim non."
      },
      {
        "id": "vn2-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Đoạn văn sau có từ dùng sai sắc thái: 'Đàn voi rừng khổng lồ bước đi một cách lóng lánh qua thung lũng.' Từ dùng sai là từ nào và nên thay bằng từ gì?",
        "options": [
          "Sai từ 'lóng lánh', thay bằng 'hùng vĩ' hoặc 'nặng nề'",
          "Sai từ 'khổng lồ', thay bằng 'nhỏ nhắn'",
          "Sai từ 'bước đi', thay bằng 'chạy trốn'",
          "Sai từ 'thung lũng', thay bằng 'bờ suối'"
        ],
        "correctAnswer": "Sai từ 'lóng lánh', thay bằng 'hùng vĩ' hoặc 'nặng nề'",
        "hint": "'Lóng lánh' chỉ ánh sáng lấp lánh (mắt, giọt sương), không dùng cho bước chân voi.",
        "explanation": "'Lóng lánh' tả ánh sáng lấp lánh, không thể dùng tả dáng đi của đàn voi."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn2-s1",
        "prompt": "Từ nào đồng nghĩa với 'bảo vệ'?",
        "options": [
          "Giữ gìn",
          "Phá hủy",
          "Bỏ rơi",
          "Tấn công"
        ],
        "correctAnswer": "Giữ gìn",
        "explanation": "Giữ gìn đồng nghĩa với bảo vệ."
      },
      {
        "id": "vn2-s2",
        "prompt": "Từ nào đồng nghĩa với 'thông minh'?",
        "options": [
          "Sáng dạ",
          "Chăm chỉ",
          "Hiền lành",
          "Chậm chạp"
        ],
        "correctAnswer": "Sáng dạ",
        "explanation": "Sáng dạ đồng nghĩa thông minh."
      },
      {
        "id": "vn2-s3",
        "prompt": "Từ nào đồng nghĩa với 'bao la'?",
        "options": [
          "Mênh mông",
          "Chật hẹp",
          "Nhỏ bé",
          "Thấp bé"
        ],
        "correctAnswer": "Mênh mông",
        "explanation": "Mênh mông đồng nghĩa bao la."
      }
    ]
  },
  "vn-b3": {
    "practiceQuestions": [
      {
        "id": "vn3-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Cánh đồng hoa trong bài đọc hiện lên như thế nào?",
        "options": [
          "Rực rỡ muôn màu sắc, ngát hương thơm và tràn ngập bướm ong bay lượn",
          "Héo úa, xơ xác sau cơn mưa bão lớn",
          "Trống trải không một bóng cây hoa nào",
          "Bị bao phủ hoàn toàn bởi băng tuyết mùa đông"
        ],
        "correctAnswer": "Rực rỡ muôn màu sắc, ngát hương thơm và tràn ngập bướm ong bay lượn",
        "hint": "Cánh đồng hoa rực rỡ sắc hương mùa nở rộ.",
        "explanation": "Bức tranh cánh đồng hoa rực rỡ sắc màu ngát hương."
      },
      {
        "id": "vn3-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Các bạn nhỏ trong bài đã làm gì trên cánh đồng hoa?",
        "options": [
          "Cùng nhau vui chơi, ngắm hoa, nâng niu từng cánh hoa và tận hưởng vẻ đẹp thiên nhiên",
          "Hái sạch hoa mang về bán ở chợ",
          "Chạy nhảy giẫm nát các luống hoa",
          "Xua đuổi đàn bướm và chim chóc"
        ],
        "correctAnswer": "Cùng nhau vui chơi, ngắm hoa, nâng niu từng cánh hoa và tận hưởng vẻ đẹp thiên nhiên",
        "hint": "Các bạn nhỏ có ý thức trân trọng và bảo vệ vẻ đẹp thiên nhiên.",
        "explanation": "Các bạn vui chơi và nâng niu vẻ đẹp của hoa."
      },
      {
        "id": "vn3-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'ngào ngạt' trong câu 'Hương hoa tỏa ra ngào ngạt' miêu tả điều gì?",
        "options": [
          "Mùi thơm đậm đà, lan tỏa rộng và thơm lâu",
          "Mùi khét của lá cây khô",
          "Âm thanh rộn ràng của tiếng chim",
          "Màu sắc chói chang của hoa"
        ],
        "correctAnswer": "Mùi thơm đậm đà, lan tỏa rộng và thơm lâu",
        "hint": "'Ngào ngạt' là từ chỉ mức độ thơm ngát lan xa.",
        "explanation": "'Ngào ngạt' gợi tả mùi hương thơm đậm và lan tỏa rộng."
      },
      {
        "id": "vn3-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biện pháp tu từ nào được dùng trong câu: 'Những bông hoa rập rờn trong gió như đang vẫy tay chào các bạn nhỏ'?",
        "options": [
          "So sánh kết hợp nhân hóa",
          "Chỉ có so sánh",
          "Chỉ có nhân hóa",
          "Điệp từ"
        ],
        "correctAnswer": "So sánh kết hợp nhân hóa",
        "hint": "Có từ 'như' (so sánh) và hành động 'vẫy tay chào' (nhân hóa).",
        "explanation": "Vừa so sánh ('như') vừa nhân hóa hoa ('vẫy tay chào')."
      },
      {
        "id": "vn3-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Ý nghĩa biểu tượng của 'Cánh đồng hoa' trong bài đọc là:",
        "options": [
          "Vẻ đẹp trong sáng, tràn đầy sức sống của thiên nhiên và tình bạn tuổi thơ êm đềm",
          "Khu vực canh tác lấy nông sản xuất khẩu",
          "Vườn hoa cảnh của một gia đình giàu có",
          "Nơi xa xôi hiểm trở không ai lui tới"
        ],
        "correctAnswer": "Vẻ đẹp trong sáng, tràn đầy sức sống của thiên nhiên và tình bạn tuổi thơ êm đềm",
        "hint": "Cánh đồng hoa gắn liền với ký ức tuổi thơ tươi đẹp.",
        "explanation": "Biểu tượng cho thế giới tuổi thơ tươi thắm, chan hòa cùng cỏ cây."
      },
      {
        "id": "vn3-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Mỗi bông hoa là một đốm lửa nhỏ thắp sáng cánh đồng', chủ ngữ là:",
        "options": [
          "Mỗi bông hoa",
          "Một đốm lửa nhỏ",
          "Cánh đồng",
          "Thắp sáng cánh đồng"
        ],
        "correctAnswer": "Mỗi bông hoa",
        "hint": "Ai/Cái gì là một đốm lửa nhỏ?",
        "explanation": "'Mỗi bông hoa' là chủ ngữ, phần còn lại là vị ngữ."
      },
      {
        "id": "vn3-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Chi tiết nào thể hiện nét đẹp tâm hồn tinh tế và tình yêu thương của các bạn nhỏ đối với cỏ cây?",
        "options": [
          "Các bạn dừng bước để ngắm một chú ong đang hút mật mà không nỡ xua đuổi",
          "Các bạn thi xem ai hái được nhiều bông hoa nhất",
          "Các bạn nhổ hoa đem về trồng trong chậu",
          "Các bạn bắt những chú bướm nhốt vào hộp kín"
        ],
        "correctAnswer": "Các bạn dừng bước để ngắm một chú ong đang hút mật mà không nỡ xua đuổi",
        "hint": "Hành động yêu thương, không phá rối sự bình yên của loài vật.",
        "explanation": "Chi tiết nâng niu sự sống thiên nhiên thể hiện tâm hồn nhân hậu."
      },
      {
        "id": "vn3-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Cảm xúc chung bao trùm toàn bộ bài đọc 'Cánh đồng hoa' là:",
        "options": [
          "Niềm hân hoan, ngây ngất trước vẻ đẹp thiên nhiên và niềm vui trong trẻo tuổi thơ",
          "Nỗi buồn man mác khi mùa thu sắp tàn",
          "Sự tiếc nuối vì không thể hái hết hoa mang về",
          "Sự lo âu trước những biến đổi của thời tiết"
        ],
        "correctAnswer": "Niềm hân hoan, ngây ngất trước vẻ đẹp thiên nhiên và niềm vui trong trẻo tuổi thơ",
        "hint": "Tâm trạng rạng rỡ, yêu đời của các bạn nhỏ.",
        "explanation": "Cảm xúc vui tươi, ngập tràn niềm say mê cảnh sắc quê hương."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn3-s1",
        "prompt": "Từ nào sau đây là từ láy tả màu sắc hoa rực rỡ?",
        "options": [
          "Rực rỡ",
          "Đỏ tươi",
          "Xanh biếc",
          "Trắng tinh"
        ],
        "correctAnswer": "Rực rỡ",
        "explanation": "Rực rỡ là từ láy."
      },
      {
        "id": "vn3-s2",
        "prompt": "Từ đồng nghĩa với 'nâng niu' là:",
        "options": [
          "Trân trọng",
          "Hắt hủi",
          "Bỏ mặc",
          "Phá hủy"
        ],
        "correctAnswer": "Trân trọng",
        "explanation": "Trân trọng đồng nghĩa với nâng niu."
      },
      {
        "id": "vn3-s3",
        "prompt": "'Hương thơm thoang thoảng' nghĩa là mùi thơm:",
        "options": [
          "Nhẹ nhàng, phảng phất",
          "Nồng nặc, khó chịu",
          "Gắt buốt",
          "Không có mùi"
        ],
        "correctAnswer": "Nhẹ nhàng, phảng phất",
        "explanation": "Thoang thoảng là thơm dịu nhẹ."
      }
    ]
  },
  "vn-b4": {
    "practiceQuestions": [
      {
        "id": "vn4-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Một bài văn tả cảnh thường gồm có mấy phần?",
        "options": [
          "3 phần: Mở bài, Thân bài, Kết bài",
          "2 phần: Mở bài và Thân bài",
          "4 phần",
          "1 phần duy nhất"
        ],
        "correctAnswer": "3 phần: Mở bài, Thân bài, Kết bài",
        "hint": "Bố cục chung của mọi bài văn miêu tả.",
        "explanation": "Gồm 3 phần: Mở bài, Thân bài và Kết bài."
      },
      {
        "id": "vn4-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Phần 'Mở bài' của bài văn tả cảnh có nhiệm vụ gì?",
        "options": [
          "Giới thiệu cảnh sẽ tả (địa điểm, thời gian quan sát)",
          "Tả chi tiết từng đường nét của cảnh vật",
          "Nêu cảm nghĩ sâu sắc nhất khi chia tay cảnh vật",
          "Kể một câu chuyện cổ tích về cảnh đó"
        ],
        "correctAnswer": "Giới thiệu cảnh sẽ tả (địa điểm, thời gian quan sát)",
        "hint": "Mở bài là bước dẫn dắt giới thiệu bao quát.",
        "explanation": "Giới thiệu cảnh được miêu tả và ấn tượng ban đầu."
      },
      {
        "id": "vn4-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Thân bài của bài văn tả phong cảnh có thể miêu tả theo những trình tự nào?",
        "options": [
          "Theo trình tự thời gian hoặc theo trình tự không gian (từ xa đến gần, từ ngoài vào trong...)",
          "Theo bảng chữ cái A-B-C",
          "Theo thứ tự ngẫu nhiên nghĩ gì viết nấy",
          "Chỉ được tả từ dưới đất lên trời"
        ],
        "correctAnswer": "Theo trình tự thời gian hoặc theo trình tự không gian (từ xa đến gần, từ ngoài vào trong...)",
        "hint": "Tả theo thời gian (sáng, trưa, chiều, tối) hoặc không gian (toàn cảnh đến chi tiết).",
        "explanation": "Trình tự thời gian hoặc trình tự không gian giúp bài viết mạch lạc."
      },
      {
        "id": "vn4-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khi quan sát cảnh vật để làm bài văn miêu tả, ta nên vận dụng các giác quan nào?",
        "options": [
          "Kết hợp nhiều giác quan: thị giác, thính giác, khứu giác, xúc giác...",
          "Chỉ dùng mắt nhìn (thị giác)",
          "Chỉ nghe âm thanh (thính giác)",
          "Không cần quan sát thực tế"
        ],
        "correctAnswer": "Kết hợp nhiều giác quan: thị giác, thính giác, khứu giác, xúc giác...",
        "hint": "Càng huy động nhiều giác quan bài văn càng sống động, chân thực.",
        "explanation": "Kết hợp nhìn, nghe, ngửi, cảm nhận làn gió, ánh nắng giúp bài văn sinh động."
      },
      {
        "id": "vn4-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Có hai cách mở bài trong bài văn miêu tả là:",
        "options": [
          "Mở bài trực tiếp và mở bài gián tiếp",
          "Mở bài ngắn và mở bài dài",
          "Mở bài thơ và mở bài văn xuôi",
          "Mở bài câu hỏi và mở bài cảm thán"
        ],
        "correctAnswer": "Mở bài trực tiếp và mở bài gián tiếp",
        "hint": "Trực tiếp giới thiệu ngay hoặc gián tiếp dẫn dắt từ đề tài liên quan.",
        "explanation": "Mở bài trực tiếp và mở bài gián tiếp."
      },
      {
        "id": "vn4-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Để bài văn miêu tả phong cảnh thêm gợi cảm và giàu hình ảnh, người viết nên:",
        "options": [
          "Sử dụng các từ ngữ gợi cảm (từ láy) và biện pháp so sánh, nhân hóa",
          "Chỉ liệt kê danh sách tên các đồ vật và cây cối",
          "Viết câu thật ngắn không dùng tính từ",
          "Sao chép y nguyên bài của người khác"
        ],
        "correctAnswer": "Sử dụng các từ ngữ gợi cảm (từ láy) và biện pháp so sánh, nhân hóa",
        "hint": "Biện pháp tu từ và từ ngữ gợi cảm thổi hồn vào cảnh vật.",
        "explanation": "Từ láy tượng hình, tượng thanh cùng so sánh nhân hóa làm cảnh vật sống động."
      },
      {
        "id": "vn4-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Đoạn văn sau thuộc phần nào của bài văn: 'Đứng trước biển quê hương buổi sáng sớm, lòng em dâng lên niềm tự hào khôn xiết. Em thầm hứa sẽ học tập thật tốt để mai này góp phần xây dựng quê hương giàu đẹp.'?",
        "options": [
          "Kết bài mở rộng",
          "Kết bài không mở rộng",
          "Mở bài gián tiếp",
          "Thân bài tả chi tiết"
        ],
        "correctAnswer": "Kết bài mở rộng",
        "hint": "Nêu tình cảm, cảm xúc kết hợp liên hệ trách nhiệm bản thân trong tương lai.",
        "explanation": "Kết bài mở rộng bộc lộ tình cảm và mở rộng suy nghĩ, hành động."
      },
      {
        "id": "vn4-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trong đề bài 'Tả cảnh một buổi sáng mùa xuân trong công viên', chi tiết nào dưới đây KHÔNG phù hợp với không khí mùa xuân?",
        "options": [
          "Những cành bàng trơ trụi gầy guộc run rẩy trong cơn gió bấc buốt giá",
          "Những giọt sương mai long lanh đọng trên búp non xanh mướt",
          "Tiếng chim hót líu lo chào đón ngày mới rạng rỡ",
          "Muôn hoa khoe sắc thắm đón làn mưa xuân lất phất"
        ],
        "correctAnswer": "Những cành bàng trơ trụi gầy guộc run rẩy trong cơn gió bấc buốt giá",
        "hint": "Cây bàng trơ trụi, gió bấc buốt giá là hình ảnh của mùa đông giá rét.",
        "explanation": "Cây trơ cành trong gió bấc là đặc trưng mùa đông, không phải mùa xuân."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn4-s1",
        "prompt": "Phần nêu tình cảm, cảm nghĩ về cảnh vật là phần:",
        "options": [
          "Kết bài",
          "Mở bài",
          "Thân bài",
          "Mục lục"
        ],
        "correctAnswer": "Kết bài",
        "explanation": "Kết bài nêu cảm nghĩ."
      },
      {
        "id": "vn4-s2",
        "prompt": "Tả từ trên cao nhìn xuống toàn cảnh là trình tự:",
        "options": [
          "Không gian",
          "Thời gian",
          "Nhân vật",
          "Cảm xúc"
        ],
        "correctAnswer": "Không gian",
        "explanation": "Trình tự không gian."
      },
      {
        "id": "vn4-s3",
        "prompt": "Biện pháp gán cảm xúc con người cho sự vật là:",
        "options": [
          "Nhân hóa",
          "So sánh",
          "Ẩn dụ",
          "Điệp ngữ"
        ],
        "correctAnswer": "Nhân hóa",
        "explanation": "Nhân hóa."
      }
    ]
  },
  "vn-b5": {
    "practiceQuestions": [
      {
        "id": "vn5-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Bài thơ 'Tuổi Ngựa' là sáng tác của nhà thơ nào?",
        "options": [
          "Xuân Quỳnh",
          "Trần Đăng Khoa",
          "Định Hải",
          "Phạm Hổ"
        ],
        "correctAnswer": "Xuân Quỳnh",
        "hint": "Nữ nhà thơ nổi tiếng với các tập thơ thiếu nhi như 'Bầu trời trong quả trứng'.",
        "explanation": "Bài thơ 'Tuổi Ngựa' do nhà thơ Xuân Quỳnh sáng tác."
      },
      {
        "id": "vn5-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong bài thơ, cậu bé tuổi Ngựa mang đặc điểm gì?",
        "options": [
          "Thích chạy nhảy, thích phiêu lưu khám phá những miền đất mới lạ",
          "Thích ngồi yên một chỗ xem sách cả ngày",
          "Sợ đi xa và sợ bóng tối",
          "Chỉ thích chơi trò chơi điện tử"
        ],
        "correctAnswer": "Thích chạy nhảy, thích phiêu lưu khám phá những miền đất mới lạ",
        "hint": "'Ngựa con không yên một chỗ, tuổi con là tuổi đi...'",
        "explanation": "Tuổi Ngựa đại diện cho ước mơ bay nhảy, đi khắp mọi miền."
      },
      {
        "id": "vn5-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cậu bé tuổi Ngựa trong bài thơ đã ước mơ được phiêu lưu qua những nơi nào?",
        "options": [
          "Miền trung du xanh ngát, cao nguyên đại ngàn, đồng bằng thơm hương hoa cỏ",
          "Vũ trụ bao la ngoài không gian",
          "Dưới đáy đại dương sâu thẳm",
          "Khu mua sắm sầm uất ở nước ngoài"
        ],
        "correctAnswer": "Miền trung du xanh ngát, cao nguyên đại ngàn, đồng bằng thơm hương hoa cỏ",
        "hint": "'Qua miền trung du xanh ngắt, qua những triền đồi đất đỏ...'",
        "explanation": "Ngựa con mơ rong ruổi khắp rừng núi, cao nguyên và đồng cỏ ngát hương."
      },
      {
        "id": "vn5-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hình ảnh ngọn gió trong khổ thơ cuối mang ý nghĩa gì?",
        "options": [
          "Dù đi xa đến đâu, ngọn gió yêu thương cũng đưa con trở về bên mẹ",
          "Ngọn gió cản bước đường phiêu lưu của con",
          "Cơn gió lạnh lùng làm con hoảng sợ",
          "Gió cuốn con đi mãi không về"
        ],
        "correctAnswer": "Dù đi xa đến đâu, ngọn gió yêu thương cũng đưa con trở về bên mẹ",
        "hint": "'Dù đi xa trăm núi ngàn sông, con cũng tìm về với mẹ...'",
        "explanation": "Tình mẫu tử thiêng liêng luôn là bến đỗ bình yên đưa con về với mẹ."
      },
      {
        "id": "vn5-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Câu thơ 'Tuổi con là tuổi đi' thể hiện điều gì ở đứa trẻ?",
        "options": [
          "Khát vọng tự do, ước mơ vươn tới tương lai và khám phá cuộc đời",
          "Đứa trẻ không vâng lời mẹ",
          "Đứa trẻ luôn muốn bỏ nhà đi xa",
          "Tính cách nóng vội, bốc đồng"
        ],
        "correctAnswer": "Khát vọng tự do, ước mơ vươn tới tương lai và khám phá cuộc đời",
        "hint": "Tuổi trẻ luôn khát khao hiểu biết và mở rộng chân trời tri thức.",
        "explanation": "Thể hiện khát vọng tuổi trẻ giàu ước mơ, ưa khám phá."
      },
      {
        "id": "vn5-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biện pháp điệp từ 'ngựa con' và 'vẫn' trong bài thơ có tác dụng:",
        "options": [
          "Nhấn mạnh bước chân phiêu lưu và khẳng định tình yêu thương không bao giờ thay đổi dành cho mẹ",
          "Làm cho bài thơ dài hơn",
          "Để bài thơ có nhiều vần hơn",
          "Miêu tả chi tiết hình dáng chú ngựa"
        ],
        "correctAnswer": "Nhấn mạnh bước chân phiêu lưu và khẳng định tình yêu thương không bao giờ thay đổi dành cho mẹ",
        "hint": "Nhấn mạnh tình cảm sắt son của người con đối với mẹ.",
        "explanation": "Khẳng định dù đi muôn nơi thì tình yêu con dành cho mẹ vẫn vẹn nguyên."
      },
      {
        "id": "vn5-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nét độc đáo nhất trong tình cảm của đứa con dành cho mẹ ở bài thơ 'Tuổi Ngựa' là:",
        "options": [
          "Sự hòa quyện tuyệt đẹp giữa khát vọng khám phá thế giới rộng lớn với tình yêu thương mẹ tha thiết",
          "Đứa con hứa sẽ mang về nhiều tiền vàng cho mẹ",
          "Đứa con quyết định ở nhà không đi đâu nữa",
          "Đứa con rủ mẹ cùng đi phiêu lưu khắp nơi"
        ],
        "correctAnswer": "Sự hòa quyện tuyệt đẹp giữa khát vọng khám phá thế giới rộng lớn với tình yêu thương mẹ tha thiết",
        "hint": "Đi xa để trưởng thành nhưng trái tim luôn hướng về người mẹ tần tảo.",
        "explanation": "Đó là sự kết hợp hài hòa giữa chí lớn bay xa và lòng hiếu thảo sâu sắc."
      },
      {
        "id": "vn5-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Từ nào dưới đây đồng nghĩa với từ 'phiêu lưu' trong bài thơ?",
        "options": [
          "Bôn ba, thám hiểm",
          "Ngồi yên",
          "Trú ẩn",
          "Dậm chân tại chỗ"
        ],
        "correctAnswer": "Bôn ba, thám hiểm",
        "hint": "Đi đây đi đó, vượt qua thử thách để khám phá những điều mới mẻ.",
        "explanation": "'Bôn ba, thám hiểm' đồng nghĩa với tinh thần phiêu lưu."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn5-s1",
        "prompt": "Tác giả bài thơ 'Tuổi Ngựa' là ai?",
        "options": [
          "Xuân Quỳnh",
          "Trần Đăng Khoa",
          "Huy Cận",
          "Tố Hữu"
        ],
        "correctAnswer": "Xuân Quỳnh",
        "explanation": "Nhà thơ Xuân Quỳnh."
      },
      {
        "id": "vn5-s2",
        "prompt": "Dù đi muôn nơi, ngựa con luôn tìm về với:",
        "options": [
          "Mẹ",
          "Bạn bè",
          "Cánh đồng",
          "Dòng suối"
        ],
        "correctAnswer": "Mẹ",
        "explanation": "Tìm về với mẹ."
      },
      {
        "id": "vn5-s3",
        "prompt": "Từ trái nghĩa với từ 'đi xa' là:",
        "options": [
          "Ở lại",
          "Tiến bước",
          "Phiêu lưu",
          "Bôn ba"
        ],
        "correctAnswer": "Ở lại",
        "explanation": "Ở lại."
      }
    ]
  },
  "vn-b6": {
    "practiceQuestions": [
      {
        "id": "vn6-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ nhiều nghĩa là từ như thế nào?",
        "options": [
          "Có một nghĩa gốc và một hay một số nghĩa chuyển, các nghĩa luôn có mối liên hệ với nhau",
          "Có cách phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau không liên quan gì",
          "Là hai từ khác nhau nhưng nghĩa giống nhau",
          "Chỉ có đúng một nghĩa duy nhất"
        ],
        "correctAnswer": "Có một nghĩa gốc và một hay một số nghĩa chuyển, các nghĩa luôn có mối liên hệ với nhau",
        "hint": "Nghĩa gốc phát triển thành các nghĩa chuyển dựa trên sự tương đồng hoặc liên tưởng.",
        "explanation": "Từ nhiều nghĩa gồm nghĩa gốc và nghĩa chuyển có mối liên hệ về nghĩa."
      },
      {
        "id": "vn6-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ đồng âm là từ như thế nào?",
        "options": [
          "Là những từ phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau, không có mối liên hệ nào",
          "Là những từ có nghĩa giống hệt nhau",
          "Là từ có một nghĩa gốc và nhiều nghĩa chuyển",
          "Là những từ viết hoa đặc biệt"
        ],
        "correctAnswer": "Là những từ phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau, không có mối liên hệ nào",
        "hint": "Giống nhau về âm thanh đọc lên nhưng nghĩa chẳng họ hàng gì với nhau.",
        "explanation": "Từ đồng âm phát âm trùng nhau nhưng nghĩa độc lập hoàn toàn."
      },
      {
        "id": "vn6-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'mắt' trong câu nào dưới đây được dùng theo NGHĨA CHUYỂN?",
        "options": [
          "Quả dứa có nhiều mắt gai",
          "Bé có đôi mắt to tròn, đen láy",
          "Bà đeo kính để nhìn cho rõ vì mắt đã kém",
          "Mắt em cay xè vì khói bếp"
        ],
        "correctAnswer": "Quả dứa có nhiều mắt gai",
        "hint": "Nghĩa gốc của mắt là cơ quan thị giác trên cơ thể người/động vật.",
        "explanation": "'Mắt dứa' là nghĩa chuyển dựa trên nét tương đồng về hình dáng."
      },
      {
        "id": "vn6-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong hai câu: 'Bác nông dân đang câu cá' và 'Câu văn này rất giàu hình ảnh', từ 'câu' là hiện tượng gì?",
        "options": [
          "Từ đồng âm",
          "Từ nhiều nghĩa",
          "Từ đồng nghĩa",
          "Từ trái nghĩa"
        ],
        "correctAnswer": "Từ đồng âm",
        "hint": "'Câu cá' là hành động bắt cá bằng cần câu; 'câu văn' là đơn vị ngữ pháp trong bài.",
        "explanation": "Hai từ 'câu' này phát âm giống nhau nhưng nghĩa không liên quan gì nhau (đồng âm)."
      },
      {
        "id": "vn6-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'chân' trong trường hợp nào dưới đây được dùng với NGHĨA GỐC?",
        "options": [
          "Cầu thủ sút bóng bằng chân phải",
          "Bé ngồi chơi ở chân núi",
          "Cái bàn này bị gãy một chân",
          "Bác Ba có chân trong ban quản trị"
        ],
        "correctAnswer": "Cầu thủ sút bóng bằng chân phải",
        "hint": "Chân người/động vật dùng để đi, đứng, đá bóng là nghĩa gốc.",
        "explanation": "'Chân người' là bộ phận nâng đỡ cơ thể và di chuyển (nghĩa gốc)."
      },
      {
        "id": "vn6-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Xác định nghĩa của từ 'ngọt' trong câu: 'Nói ngọt lọt đến xương':",
        "options": [
          "Nói nhẹ nhàng, khéo léo, dễ nghe (nghĩa chuyển)",
          "Có vị của đường hoặc mật ong (nghĩa gốc)",
          "Nước dùng nấu bằng xương hầm",
          "Thời tiết mát mẻ dễ chịu"
        ],
        "correctAnswer": "Nói nhẹ nhàng, khéo léo, dễ nghe (nghĩa chuyển)",
        "hint": "Ở đây 'ngọt' chuyển từ vị giác sang cảm giác dễ chịu của âm thanh, lời nói.",
        "explanation": "'Nói ngọt' là lời nói êm dịu, dễ nghe (nghĩa chuyển)."
      },
      {
        "id": "vn6-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Hiện tượng dùng từ đồng âm để chơi chữ thể hiện rõ nhất trong câu nào sau đây?",
        "options": [
          "Bà già đi chợ Cầu Đông / Bói xem một quẻ lấy chồng lợi (răng) chăng? / Thầy bói gieo quẻ nói rằng: / Lợi (ích lợi) thì có lợi nhưng răng không còn!",
          "Trời mưa làm đường trơn như đổ mỡ",
          "Học sinh lớp 5 chăm chỉ học tập mỗi ngày",
          "Rừng cây xanh tốt nhờ mưa thuận gió hòa"
        ],
        "correctAnswer": "Bà già đi chợ Cầu Đông / Bói xem một quẻ lấy chồng lợi (răng) chăng? / Thầy bói gieo quẻ nói rằng: / Lợi (ích lợi) thì có lợi nhưng răng không còn!",
        "hint": "Chơi chữ giữa 'lợi' (lợi răng) và 'lợi' (ích lợi, quyền lợi).",
        "explanation": "Chơi chữ từ đồng âm 'lợi' (phần thịt bao quanh răng) và 'lợi' (ích lợi)."
      },
      {
        "id": "vn6-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Từ 'mũi' trong cụm từ nào sau đây KHÔNG có mối liên hệ nghĩa với nghĩa gốc 'mũi' (bộ phận nhô lên trên mặt người để ngửi)?",
        "options": [
          "Mũi tiêm vắc-xin",
          "Mũi thuyền rẽ sóng",
          "Mũi kéo sắc nhọn",
          "Mũi người"
        ],
        "correctAnswer": "Mũi tiêm vắc-xin",
        "hint": "'Mũi thuyền', 'mũi kéo' đều chỉ phần nhọn phía trước (nghĩa chuyển). 'Mũi tiêm' ở đây là đơn vị liều thuốc/lần chích ngừa.",
        "explanation": "'Mũi tiêm' dùng như một lần tiêm, phát triển nghĩa từ mũi kim nhọn nhưng ở nghĩa liều tiêm mang nét nghĩa độc lập."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn6-s1",
        "prompt": "'Mũi tên' và 'mũi người' là hiện tượng gì?",
        "options": [
          "Từ nhiều nghĩa",
          "Từ đồng âm",
          "Từ trái nghĩa",
          "Từ ghép"
        ],
        "correctAnswer": "Từ nhiều nghĩa",
        "explanation": "Từ nhiều nghĩa (cùng nét nhọn phía trước)."
      },
      {
        "id": "vn6-s2",
        "prompt": "'Ruồi đậu mâm xôi đậu' là hiện tượng:",
        "options": [
          "Từ đồng âm",
          "Từ nhiều nghĩa",
          "Từ láy",
          "Từ ghép"
        ],
        "correctAnswer": "Từ đồng âm",
        "explanation": "'Đậu' (hạ cánh) và 'đậu' (hạt đỗ) là từ đồng âm."
      },
      {
        "id": "vn6-s3",
        "prompt": "'Lưng người' và 'lưng núi' là hiện tượng:",
        "options": [
          "Từ nhiều nghĩa",
          "Từ đồng âm",
          "Từ trái nghĩa",
          "Từ tượng thanh"
        ],
        "correctAnswer": "Từ nhiều nghĩa",
        "explanation": "Từ nhiều nghĩa (vị trí ở giữa sườn)."
      }
    ]
  },
  "vn-b7": {
    "practiceQuestions": [
      {
        "id": "vn7-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hình ảnh bến sông tuổi thơ trong bài đọc gắn liền với cảnh tượng nào?",
        "options": [
          "Dòng nước êm đềm lững lờ trôi, bến đò quê rợp bóng tre xanh và lũ trẻ tắm mát",
          "Bến cảng tấp nập những con tàu chở hàng quốc tế khổng lồ",
          "Dòng sông cạn khô trơ đáy đá",
          "Cây cầu bê tông cao tốc nhiều làn xe chạy vụt qua"
        ],
        "correctAnswer": "Dòng nước êm đềm lững lờ trôi, bến đò quê rợp bóng tre xanh và lũ trẻ tắm mát",
        "hint": "Bến sông quê mộc mạc gắn bó với tuổi thơ làng quê Việt Nam.",
        "explanation": "Bến sông quê thân thương rợp bóng tre xanh, bến đò và trẻ thơ tắm mát."
      },
      {
        "id": "vn7-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hoạt động nào của tuổi thơ được nhắc đến bên bến sông?",
        "options": [
          "Tập bơi, ngụp lặn, té nước và thả những chiếc thuyền gấp bằng lá chuối",
          "Đi câu cá mập ngoài biển khơi",
          "Lái ca-nô cao tốc lướt sóng",
          "Tập trượt băng trên mặt sông đóng băng"
        ],
        "correctAnswer": "Tập bơi, ngụp lặn, té nước và thả những chiếc thuyền gấp bằng lá chuối",
        "hint": "Những trò chơi hồn nhiên, mộc mạc của trẻ thơ miền thôn dã bên dòng sông.",
        "explanation": "Tập bơi, thả thuyền lá chuối là trò chơi tuổi thơ đậm chất đồng quê."
      },
      {
        "id": "vn7-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hình ảnh mẹ ngóng trông đàn con bên bến sông mỗi buổi chiều gợi lên cảm xúc gì?",
        "options": [
          "Tình mẫu tử ấm áp, bình dị mà vô cùng sâu sắc",
          "Sự thờ ơ của người lớn đối với con cái",
          "Nỗi sợ hãi khi trời sắp có mưa giông",
          "Sự tất bật vội vã của cuộc sống hiện đại"
        ],
        "correctAnswer": "Tình mẫu tử ấm áp, bình dị mà vô cùng sâu sắc",
        "hint": "Hình bóng mẹ chờ con bên bến sông quê thiêng liêng và ấm áp.",
        "explanation": "Gợi lên tình mẹ chở che, chăm chút yêu thương cho con cái."
      },
      {
        "id": "vn7-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Dòng sông như một dải lụa xanh uốn lượn quanh xóm làng', tác giả sử dụng biện pháp tu từ nào?",
        "options": [
          "So sánh",
          "Nhân hóa",
          "Điệp từ",
          "Nói giảm nói tránh"
        ],
        "correctAnswer": "So sánh",
        "hint": "Từ 'như' so sánh dòng sông với dải lụa xanh.",
        "explanation": "So sánh dòng sông với dải lụa mềm mại."
      },
      {
        "id": "vn7-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'lững lờ' trong câu 'Nước sông lững lờ trôi' miêu tả dòng nước như thế nào?",
        "options": [
          "Trôi rất chậm và êm ả, không vội vã",
          "Chảy xiết tạo xoáy nước nguy hiểm",
          "Sóng đánh ầm ầm vào bờ",
          "Đứng yên hoàn toàn không chuyển động"
        ],
        "correctAnswer": "Trôi rất chậm và êm ả, không vội vã",
        "hint": "'Lững lờ' là từ láy gợi tả chuyển động chậm rãi, thanh bình.",
        "explanation": "Dòng nước trôi chậm rãi, bình yên."
      },
      {
        "id": "vn7-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Qua bài văn, nhân vật tôi bộc lộ tình cảm gì với dòng sông quê?",
        "options": [
          "Lòng yêu quý tha thiết, sự gắn bó và lòng biết ơn nguồn cội tuổi thơ",
          "Sợ hãi dòng sông sâu nguy hiểm",
          "Muốn chuyển lên thành phố sống để không phải nhìn thấy sông",
          "Không có tình cảm gì đặc biệt"
        ],
        "correctAnswer": "Lòng yêu quý tha thiết, sự gắn bó và lòng biết ơn nguồn cội tuổi thơ",
        "hint": "Bến sông quê là nơi neo giữ những kỷ niệm đẹp nhất đời người.",
        "explanation": "Tình yêu thương, gắn bó máu thịt với dòng sông quê mẹ."
      },
      {
        "id": "vn7-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Câu văn nào sau đây vừa chứa hình ảnh nhân hóa vừa mang đậm chất trữ tình?",
        "options": [
          "Dòng sông chở nặng phù sa như người mẹ hiền bồi đắp mùa màng cho bãi mía nương dâu",
          "Sông sâu ba mét và chảy ra biển",
          "Nước sông hôm nay đục ngầu do mưa lớn",
          "Người dân dựng nhà cách bờ sông mười mét"
        ],
        "correctAnswer": "Dòng sông chở nặng phù sa như người mẹ hiền bồi đắp mùa màng cho bãi mía nương dâu",
        "hint": "Sông biết 'chở nặng', ví sông với 'người mẹ hiền' nuôi dưỡng ruộng đồng.",
        "explanation": "Nhân hóa sông 'chở nặng' và so sánh như 'người mẹ hiền' bồi đắp sự sống."
      },
      {
        "id": "vn7-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Bài đọc gửi gắm bài học nhân văn sâu sắc nào đến mỗi người chúng ta khi trưởng thành?",
        "options": [
          "Dù đi muôn phương, ai cũng có một quê hương, một bến đỗ tuổi thơ để nhớ về và gìn giữ",
          "Cần phải phá bỏ các bến sông cũ để xây nhà máy",
          "Chỉ những người sống ở nông thôn mới có tuổi thơ đẹp",
          "Không nên để trẻ con ra bờ sông chơi một mình"
        ],
        "correctAnswer": "Dù đi muôn phương, ai cũng có một quê hương, một bến đỗ tuổi thơ để nhớ về và gìn giữ",
        "hint": "Bến sông là biểu tượng tâm hồn hướng về cội nguồn quê cha đất tổ.",
        "explanation": "Nhắc nhở con người luôn ghi nhớ và trân quý cội nguồn tuổi thơ bình dị."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn7-s1",
        "prompt": "Từ nào sau đây gợi tả dòng sông trôi chậm?",
        "options": [
          "Lững lờ",
          "Cuồn cuộn",
          "Xối xả",
          "Ào ạt"
        ],
        "correctAnswer": "Lững lờ",
        "explanation": "Lững lờ trôi."
      },
      {
        "id": "vn7-s2",
        "prompt": "Phù sa có tác dụng gì cho ruộng đồng bờ sông?",
        "options": [
          "Làm đất thêm màu mỡ",
          "Gây ô nhiễm đất",
          "Làm đất khô cằn",
          "Làm ngập úng"
        ],
        "correctAnswer": "Làm đất thêm màu mỡ",
        "explanation": "Phù sa bồi đắp màu mỡ."
      },
      {
        "id": "vn7-s3",
        "prompt": "Từ đồng nghĩa với 'bình yên' là:",
        "options": [
          "Thanh bình",
          "Hỗn loạn",
          "Náo nhiệt",
          "Ồn ã"
        ],
        "correctAnswer": "Thanh bình",
        "explanation": "Thanh bình đồng nghĩa với bình yên."
      }
    ]
  },
  "vn-b8": {
    "practiceQuestions": [
      {
        "id": "vn8-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Nhóm từ nào dưới đây gồm các từ đồng nghĩa chỉ trẻ em?",
        "options": [
          "Trẻ thơ, con nít, thiếu nhi, thiếu niên",
          "Thanh niên, tráng sĩ, thiếu nhi",
          "Cụ già, người cao tuổi, trẻ con",
          "Phụ nữ, nam giới, em bé"
        ],
        "correctAnswer": "Trẻ thơ, con nít, thiếu nhi, thiếu niên",
        "hint": "Tất cả các từ đều gọi những người ở độ tuổi tuổi thơ.",
        "explanation": "Trẻ thơ, con nít, thiếu nhi, thiếu niên là các từ đồng nghĩa chỉ lứa tuổi trẻ em."
      },
      {
        "id": "vn8-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ 'đồng' trong 'đồng lúa' và 'đồng' trong 'đồng hồ' là quan hệ gì?",
        "options": [
          "Từ đồng âm",
          "Từ nhiều nghĩa",
          "Từ trái nghĩa",
          "Từ đồng nghĩa"
        ],
        "correctAnswer": "Từ đồng âm",
        "hint": "'Đồng lúa' là cánh đồng đất đai; 'đồng hồ' là dụng cụ đo thời gian.",
        "explanation": "Phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau (từ đồng âm)."
      },
      {
        "id": "vn8-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Những đóa hoa rung rinh cười trong nắng sớm', tác giả đã sử dụng biện pháp nghệ thuật:",
        "options": [
          "Nhân hóa",
          "So sánh",
          "Điệp từ",
          "Đảo ngữ"
        ],
        "correctAnswer": "Nhân hóa",
        "hint": "Hoa được gán cho hành động 'cười' của con người.",
        "explanation": "Nhân hóa hoa biết 'cười'."
      },
      {
        "id": "vn8-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Xác định từ dùng sai sắc thái nghĩa trong câu: 'Bạn Lan rất chậm chạp nên được thầy cô khen ngợi.'",
        "options": [
          "Từ 'chậm chạp', cần thay bằng 'cẩn thận' hoặc 'chăm chỉ'",
          "Từ 'Lan', cần thay bằng tên khác",
          "Từ 'thầy cô', cần thay bằng 'bạn bè'",
          "Từ 'khen ngợi', cần thay bằng 'chê bai'"
        ],
        "correctAnswer": "Từ 'chậm chạp', cần thay bằng 'cẩn thận' hoặc 'chăm chỉ'",
        "hint": "'Chậm chạp' là tính từ chỉ tốc độ lề mề, không phù hợp để được khen ngợi.",
        "explanation": "Cần thay bằng tính từ mang nghĩa tích cực như 'cẩn thận' hay 'chăm chỉ'."
      },
      {
        "id": "vn8-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'chạy' trong trường hợp nào mang NGHĨA CHUYỂN?",
        "options": [
          "Đồng hồ này chạy rất chính xác",
          "Vận động viên đang chạy về đích",
          "Bé chạy nhanh về phía mẹ",
          "Chú chó con lon ton chạy theo chủ"
        ],
        "correctAnswer": "Đồng hồ này chạy rất chính xác",
        "hint": "Nghĩa gốc của chạy là hoạt động dời chân nhanh của người/động vật.",
        "explanation": "'Đồng hồ chạy' là nghĩa chuyển (máy móc hoạt động)."
      },
      {
        "id": "vn8-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chọn cặp từ đồng nghĩa hoàn toàn có thể thay thế lẫn nhau trong giao tiếp hàng ngày:",
        "options": [
          "Bố mẹ - Ba má",
          "Chết - Hi sinh",
          "Ăn - Xơi",
          "Nhỏ nhắn - Còi cọc"
        ],
        "correctAnswer": "Bố mẹ - Ba má",
        "hint": "Từ ngữ chỉ cha mẹ theo phương ngữ Bắc - Nam có giá trị biểu cảm tương đương.",
        "explanation": "'Bố mẹ' và 'ba má' là từ đồng nghĩa hoàn toàn theo phương ngữ."
      },
      {
        "id": "vn8-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Đọc đoạn văn: 'Mùa thu về, bầu trời trong vắt như chiếc bát ngọc khổng lồ úp xuống xóm làng. Gió thu se se lạnh làm rung rinh ngàn chiếc lá vàng bay.' Đoạn văn trên tả cảnh vật bằng giác quan nào?",
        "options": [
          "Kết hợp thị giác (trời trong vắt, lá vàng bay) và xúc giác (gió se se lạnh)",
          "Chỉ dùng khứu giác ngửi mùi hương",
          "Chỉ dùng thính giác nghe âm thanh",
          "Chỉ dùng vị giác nếm vị ngọt"
        ],
        "correctAnswer": "Kết hợp thị giác (trời trong vắt, lá vàng bay) và xúc giác (gió se se lạnh)",
        "hint": "Nhìn thấy màu sắc trong veo của trời, chiếc lá bay và cảm nhận làn gió mát se lạnh trên da.",
        "explanation": "Kết hợp tài tình giữa thị giác và xúc giác tạo nên không gian mùa thu sinh động."
      },
      {
        "id": "vn8-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Chủ đề bao trùm của toàn bộ các bài học trong Chủ điểm 1 'Thế giới tuổi thơ' là:",
        "options": [
          "Ngợi ca tâm hồn trong sáng, tình yêu thiên nhiên quê hương và khát vọng đẹp đẽ của trẻ thơ",
          "Hướng dẫn cách kinh doanh kiếm tiền sớm",
          "Khám phá các di tích lịch sử chiến tranh",
          "Tìm hiểu khoa học vũ trụ và thiên văn"
        ],
        "correctAnswer": "Ngợi ca tâm hồn trong sáng, tình yêu thiên nhiên quê hương và khát vọng đẹp đẽ của trẻ thơ",
        "hint": "Các bài học xoay quanh tuổi thơ hồn nhiên, cánh diều, dòng sông, tình mẹ và thiên nhiên.",
        "explanation": "Khắc họa thế giới tuổi thơ tươi đẹp, giàu mơ ước và tình yêu thương gia đình, quê hương."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn8-s1",
        "prompt": "Từ nào sau đây là từ đồng nghĩa với 'hồn nhiên'?",
        "options": [
          "Ngây thơ",
          "Xảo quyệt",
          "Già dặn",
          "Trầm tư"
        ],
        "correctAnswer": "Ngây thơ",
        "explanation": "Ngây thơ đồng nghĩa hồn nhiên."
      },
      {
        "id": "vn8-s2",
        "prompt": "Cụm từ 'mắt na mở to' là biện pháp nghệ thuật:",
        "options": [
          "Nhân hóa",
          "So sánh",
          "Điệp từ",
          "Ẩn dụ"
        ],
        "correctAnswer": "Nhân hóa",
        "explanation": "Nhân hóa quả na biết mở mắt."
      },
      {
        "id": "vn8-s3",
        "prompt": "Phát âm giống nhau nhưng nghĩa khác nhau là:",
        "options": [
          "Từ đồng âm",
          "Từ nhiều nghĩa",
          "Từ đồng nghĩa",
          "Từ ghép"
        ],
        "correctAnswer": "Từ đồng âm",
        "explanation": "Từ đồng âm."
      }
    ]
  },
  "vn-b9": {
    "practiceQuestions": [
      {
        "id": "vn9-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Bài thơ 'Trước cổng trời' của tác giả Nguyễn Đình Thi miêu tả cảnh đẹp của vùng đất nào?",
        "options": [
          "Vùng núi cao Tây Bắc hùng vĩ, mây mù bao phủ",
          "Vùng đồng bằng sông Cửu Long sông nước",
          "Vùng duyên hải miền Trung đầy cát trắng",
          "Khu đô thị hiện đại sầm uất"
        ],
        "correctAnswer": "Vùng núi cao Tây Bắc hùng vĩ, mây mù bao phủ",
        "hint": "'Giữa hai bên vách đá / Mở ra một khoảng trời / Ai hà hơi sương khói...'",
        "explanation": "Miêu tả cảnh thiên nhiên và con người vùng núi cao Tây Bắc."
      },
      {
        "id": "vn9-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Nơi được gọi là 'cổng trời' trong bài thơ thực chất là gì?",
        "options": [
          "Một đèo cao giữa hai vách đá sừng sững, nơi có mây bay như chạm tới trời",
          "Cánh cổng xây bằng gạch có mái ngói đỏ",
          "Cánh cổng của một ngôi chùa trên núi",
          "Chiếc thang dẫn thẳng lên mặt trăng"
        ],
        "correctAnswer": "Một đèo cao giữa hai vách đá sừng sững, nơi có mây bay như chạm tới trời",
        "hint": "Cảnh tượng khe núi hẹp trên đỉnh đèo cao mở ra bầu trời mây trắng.",
        "explanation": "Là một khe hẹp giữa hai vách đá trên đỉnh núi cao lộng gió."
      },
      {
        "id": "vn9-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Những hình ảnh nào thể hiện cuộc sống lao động ấm no, tươi vui của đồng bào các dân tộc nơi đây?",
        "options": [
          "Vạt nương màu mật, lúa chín vàng ươm, người Dao, Giáy, Hmông rộn rã gặt hái",
          "Cảnh buôn bán tấp nập trong siêu thị",
          "Các nhà máy luyện thép nhả khói nghi ngút",
          "Cảnh tàu thuyền đánh cá cập bến"
        ],
        "correctAnswer": "Vạt nương màu mật, lúa chín vàng ươm, người Dao, Giáy, Hmông rộn rã gặt hái",
        "hint": "Cuộc sống lao động trên những thửa ruộng bậc thang mùa lúa chín.",
        "explanation": "Hình ảnh nương rẫy trù phú và nụ cười đồng bào các dân tộc vùng cao."
      },
      {
        "id": "vn9-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'ngút ngát' trong câu thơ 'Nhìn ra xa ngút ngát' gợi tả điều gì?",
        "options": [
          "Không gian rộng lớn, bao la trải dài đến tận chân trời",
          "Cảnh vật tối tăm u ám",
          "Khói bụi bốc lên mịt mù",
          "Khoảng cách rất gần ngay trước mắt"
        ],
        "correctAnswer": "Không gian rộng lớn, bao la trải dài đến tận chân trời",
        "hint": "'Ngút ngát' là từ láy gợi chiều sâu và chiều rộng mênh mông của tầm nhìn.",
        "explanation": "Gợi tầm nhìn xa xăm, bao la vô tận của thiên nhiên núi rừng."
      },
      {
        "id": "vn9-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biện pháp tu từ so sánh trong câu 'Màn sương mỏng như dải khăn voan' có tác dụng:",
        "options": [
          "Làm cho làn sương núi trở nên mềm mại, thơ mộng và huyền ảo",
          "Nhấn mạnh sương mù dày đặc làm cản trở tầm nhìn",
          "Cho thấy thời tiết rất lạnh giá",
          "Miêu tả chiếc khăn của người thiếu nữ vùng cao"
        ],
        "correctAnswer": "Làm cho làn sương núi trở nên mềm mại, thơ mộng và huyền ảo",
        "hint": "Khăn voan mỏng manh, thanh khiết tôn lên vẻ đẹp dịu dàng của núi non.",
        "explanation": "Khắc họa vẻ đẹp thơ mộng, bồng bềnh của sương mù Tây Bắc."
      },
      {
        "id": "vn9-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Sắc màu trang phục của đồng bào các dân tộc làm cho bức tranh thiên nhiên vùng cao trở nên:",
        "options": [
          "Rực rỡ, ấm áp và căng tràn sức sống giữa sương gió đại ngàn",
          "Đơn điệu và tẻ nhạt",
          "Tối tăm và lạnh lẽo",
          "Kỳ lạ và xa lạ"
        ],
        "correctAnswer": "Rực rỡ, ấm áp và căng tràn sức sống giữa sương gió đại ngàn",
        "hint": "Váy hoa, áo chàm điểm xuyết giữa màu xanh của rừng núi xua tan cái lạnh.",
        "explanation": "Thổi bừng sức sống ấm áp, tươi vui cho cảnh sắc non cao."
      },
      {
        "id": "vn9-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nội dung chính và tư tưởng bao trùm của bài thơ 'Trước cổng trời' là:",
        "options": [
          "Ca ngợi vẻ đẹp kỳ vĩ, thơ mộng của thiên nhiên vùng cao và tình yêu lao động cần cù của đồng bào nơi biên cương",
          "Kể lại hành trình leo núi mệt nhọc của tác giả",
          "Kêu gọi mọi người không nên lên cổng trời vì nguy hiểm",
          "Khảo sát địa chất các mỏ đá Tây Bắc"
        ],
        "correctAnswer": "Ca ngợi vẻ đẹp kỳ vĩ, thơ mộng của thiên nhiên vùng cao và tình yêu lao động cần cù của đồng bào nơi biên cương",
        "hint": "Bức tranh kết hợp hài hòa giữa cảnh vật hùng vĩ và con người lao động kiên cường.",
        "explanation": "Tôn vinh vẻ đẹp thiên nhiên kỳ vĩ và cuộc sống ấm no của đồng bào biên cương."
      },
      {
        "id": "vn9-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tác giả cảm thấy như thế nào khi đứng ở cổng trời?",
        "options": [
          "Tâm hồn rộng mở, ngỡ như bước vào cõi tiên bồng bềnh giữa đất và trời",
          "Chóng mặt sợ ngã xuống vực sâu",
          "Chán nản vì đường đi quá dốc",
          "Muốn nhanh chóng quay trở về đồng bằng"
        ],
        "correctAnswer": "Tâm hồn rộng mở, ngỡ như bước vào cõi tiên bồng bềnh giữa đất và trời",
        "hint": "'Ngỡ như bước vào cõi mơ...' trước vẻ đẹp bồng bềnh mây gió.",
        "explanation": "Cảm giác choáng ngợp, lâng lâng thoát tục trước cảnh sắc kỳ thú."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn9-s1",
        "prompt": "Tác giả bài thơ 'Trước cổng trời' là ai?",
        "options": [
          "Nguyễn Đình Thi",
          "Xuân Quỳnh",
          "Tô Hoài",
          "Võ Quảng"
        ],
        "correctAnswer": "Nguyễn Đình Thi",
        "explanation": "Nhà thơ Nguyễn Đình Thi."
      },
      {
        "id": "vn9-s2",
        "prompt": "Từ nào sau đây gợi tả độ sâu của vực núi?",
        "options": [
          "Thăm thẳm",
          "Thênh thang",
          "Mênh mông",
          "Bao la"
        ],
        "correctAnswer": "Thăm thẳm",
        "explanation": "Thăm thẳm gợi tả vực sâu."
      },
      {
        "id": "vn9-s3",
        "prompt": "Ruộng của đồng bào vùng cao gọi là ruộng:",
        "options": [
          "Ruộng bậc thang",
          "Ruộng muối",
          "Ruộng bằng",
          "Ruộng trũng"
        ],
        "correctAnswer": "Ruộng bậc thang",
        "explanation": "Ruộng bậc thang."
      }
    ]
  },
  "vn-b10": {
    "practiceQuestions": [
      {
        "id": "vn10-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ trái nghĩa là những từ có đặc điểm gì?",
        "options": [
          "Có nghĩa trái ngược nhau hoàn toàn",
          "Có nghĩa giống nhau",
          "Có cách đọc giống nhau",
          "Có cùng số lượng chữ cái"
        ],
        "correctAnswer": "Có nghĩa trái ngược nhau hoàn toàn",
        "hint": "Trái nghĩa biểu thị hai thái cực đối lập nhau.",
        "explanation": "Từ trái nghĩa là những từ có nghĩa trái ngược nhau."
      },
      {
        "id": "vn10-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Cặp từ nào dưới đây là cặp từ trái nghĩa?",
        "options": [
          "Cao - Thấp",
          "To - Lớn",
          "Chăm chỉ - Siêng năng",
          "Hiền lành - Nhân từ"
        ],
        "correctAnswer": "Cao - Thấp",
        "hint": "'Cao' đối lập với 'thấp' về chiều kích độ cao.",
        "explanation": "Cao và thấp là cặp từ trái nghĩa."
      },
      {
        "id": "vn10-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền cặp từ trái nghĩa thích hợp vào câu tục ngữ: 'Lá lành đùm lá ...':",
        "options": [
          "Rách",
          "Héo",
          "Vàng",
          "Rụng"
        ],
        "correctAnswer": "Rách",
        "hint": "Cặp từ trái nghĩa 'lành - rách' thể hiện tinh thần đùm bọc, tương thân tương ái.",
        "explanation": "Lá lành đùm lá rách."
      },
      {
        "id": "vn10-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cặp từ trái nghĩa nào dưới đây xuất hiện trong câu tục ngữ: 'Gạn đục khơi trong'?",
        "options": [
          "Đục - Trong",
          "Gạn - Khơi",
          "Gạn - Đục",
          "Khơi - Trong"
        ],
        "correctAnswer": "Đục - Trong",
        "hint": "'Đục' (nước đục) trái nghĩa với 'trong' (nước trong).",
        "explanation": "'Đục' và 'trong' là cặp từ trái nghĩa."
      },
      {
        "id": "vn10-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tác dụng nổi bật của việc sử dụng các từ trái nghĩa trong văn học là gì?",
        "options": [
          "Tạo nên sự tương phản, đối lập rõ nét làm nổi bật sự vật, sự việc và ý nghĩa câu văn",
          "Làm cho câu văn trở nên khó hiểu hơn",
          "Làm cho câu văn dài gấp đôi",
          "Tránh việc phải dùng tính từ"
        ],
        "correctAnswer": "Tạo nên sự tương phản, đối lập rõ nét làm nổi bật sự vật, sự việc và ý nghĩa câu văn",
        "hint": "Sự đối lập làm các hình tượng trở nên nổi bật và ấn tượng hơn.",
        "explanation": "Tạo sự đối lập sắc nét, nhấn mạnh thông điệp nghệ thuật."
      },
      {
        "id": "vn10-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ trái nghĩa với từ 'dũng cảm' là:",
        "options": [
          "Hèn nhát",
          "Gan dạ",
          "Bất khuất",
          "Kiên cường"
        ],
        "correctAnswer": "Hèn nhát",
        "hint": "Thiếu can đảm, sợ hãi trước khó khăn hiểm nguy.",
        "explanation": "'Hèn nhát' trái nghĩa với 'dũng cảm'."
      },
      {
        "id": "vn10-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trong câu thơ: 'Nơi hầm tối lại là nơi rực sáng / Nơi con nhìn ra sức mạnh Việt Nam', cặp từ trái nghĩa là:",
        "options": [
          "Tối - Rực sáng",
          "Hầm - Nhìn",
          "Nơi - Con",
          "Lại - Nhìn"
        ],
        "correctAnswer": "Tối - Rực sáng",
        "hint": "Hai trạng thái ánh sáng đối lập: bóng tối và ánh sáng rực rỡ.",
        "explanation": "'Tối' đối lập với 'rực sáng' tạo nên tương phản tư tưởng sâu sắc."
      },
      {
        "id": "vn10-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Câu tục ngữ nào dưới đây KHÔNG sử dụng cặp từ trái nghĩa?",
        "options": [
          "Ăn quả nhớ kẻ trồng cây",
          "Thức khuya dậy sớm",
          "Đầu xuôi đuôi lọt",
          "Chân cứng đá mềm"
        ],
        "correctAnswer": "Ăn quả nhớ kẻ trồng cây",
        "hint": "Các câu kia có: khuya-sớm, đầu-đuôi, cứng-mềm. Câu này không có từ trái nghĩa.",
        "explanation": "'Ăn quả nhớ kẻ trồng cây' không chứa cặp từ trái nghĩa."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn10-s1",
        "prompt": "Từ trái nghĩa với 'khổng lồ' là:",
        "options": [
          "Tí hon",
          "Bao la",
          "Vĩ đại",
          "Đồ sộ"
        ],
        "correctAnswer": "Tí hon",
        "explanation": "Tí hon trái nghĩa với khổng lồ."
      },
      {
        "id": "vn10-s2",
        "prompt": "Cặp từ trái nghĩa trong 'việc nhà thì nhác, việc chú bác thì siêng':",
        "options": [
          "Nhác - Siêng",
          "Nhà - Bác",
          "Việc - Chú",
          "Thì - Thì"
        ],
        "correctAnswer": "Nhác - Siêng",
        "explanation": "Nhác (lười) - Siêng (chăm)."
      },
      {
        "id": "vn10-s3",
        "prompt": "Từ trái nghĩa với 'thật thà' là:",
        "options": [
          "Gian dối",
          "Trung thực",
          "Ngay thẳng",
          "Chân thành"
        ],
        "correctAnswer": "Gian dối",
        "explanation": "Gian dối trái nghĩa với thật thà."
      }
    ]
  },
  "vn-b11": {
    "practiceQuestions": [
      {
        "id": "vn11-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Bài văn 'Kì diệu rừng xanh' là của tác giả nào?",
        "options": [
          "Mai Văn Tạo",
          "Tô Hoài",
          "Xuân Quỳnh",
          "Đoàn Giỏi"
        ],
        "correctAnswer": "Mai Văn Tạo",
        "hint": "Tác giả viết những trang văn miêu tả rừng tràm, rừng nguyên sinh tuyệt đẹp.",
        "explanation": "Tác phẩm của tác giả Mai Văn Tạo."
      },
      {
        "id": "vn11-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tác giả ví vạt nấm rừng như hình ảnh gì?",
        "options": [
          "Một thành phố nấm tí hon với những lâu đài kiến trúc kỳ lạ",
          "Những chiếc ô che mưa của người đi rừng",
          "Những bông hoa sen mọc trên cạn",
          "Các bậc thang dẫn lên trời"
        ],
        "correctAnswer": "Một thành phố nấm tí hon với những lâu đài kiến trúc kỳ lạ",
        "hint": "Vạt nấm sặc sỡ mọc san sát trông như cung điện của người tí hon.",
        "explanation": "Ví như một thành phố nấm với những lâu đài tí hon cổ kính."
      },
      {
        "id": "vn11-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Những con vật nào xuất hiện nhanh thoăn thoắt trong rừng khộp?",
        "options": [
          "Những con vượn bạc má, những chú sóc đuôi bông và con chồn đèn",
          "Đàn hươu cao cổ to lớn",
          "Bầy cá bơi lội dưới suối sâu",
          "Những chú rùa bò chậm chạp"
        ],
        "correctAnswer": "Những con vượn bạc má, những chú sóc đuôi bông và con chồn đèn",
        "hint": "Các con thú nhỏ leo trèo, chuyền cành thoăn thoắt giữa tán rừng.",
        "explanation": "Vượn bạc má, sóc lông bông chuyền cành thoăn thoắt."
      },
      {
        "id": "vn11-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cảnh rừng khộp vào mùa thay lá hiện lên với màu sắc chủ đạo nào?",
        "options": [
          "Màu vàng rực rỡ của nắng và lá úa như một giang sơn vàng rực",
          "Màu trắng xóa của băng tuyết",
          "Màu xám xịt của đất đá",
          "Màu đen kịt không có ánh sáng"
        ],
        "correctAnswer": "Màu vàng rực rỡ của nắng và lá úa như một giang sơn vàng rực",
        "hint": "'Rừng khộp hiện ra như một giang sơn vàng rực...'",
        "explanation": "Sắc vàng tráng lệ của lá rừng khộp trong nắng trưa."
      },
      {
        "id": "vn11-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cảm giác của tác giả khi đi trong rừng xanh được miêu tả ra sao?",
        "options": [
          "Cảm thấy như đang lạc vào một thế giới thần tiên đầy bí ẩn và kỳ diệu",
          "Cảm thấy vô cùng sợ hãi vì thú dữ",
          "Cảm thấy mệt mỏi và chán ngắt",
          "Chỉ muốn nhanh chóng chặt cây mang về"
        ],
        "correctAnswer": "Cảm thấy như đang lạc vào một thế giới thần tiên đầy bí ẩn và kỳ diệu",
        "hint": "Tác giả ngỡ mình là một người khổng lồ đi lạc vào thế giới tí hon.",
        "explanation": "Cảm giác say mê, ngỡ ngàng trước vẻ đẹp cổ tích của rừng."
      },
      {
        "id": "vn11-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Biện pháp tu từ nào được dùng trong câu: 'Mỗi chiếc nấm là một lâu đài cổ tích tí hon'?",
        "options": [
          "So sánh",
          "Nhân hóa",
          "Điệp từ",
          "Đảo ngữ"
        ],
        "correctAnswer": "So sánh",
        "hint": "So sánh chiếc nấm với lâu đài cổ tích qua từ 'là'.",
        "explanation": "Biện pháp so sánh ngang bằng ('là')."
      },
      {
        "id": "vn11-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Chi tiết nào cho thấy sự hài hòa, gắn bó kỳ diệu giữa muôn loài thực vật và động vật trong rừng?",
        "options": [
          "Muông thú kiếm ăn tự do, cây rừng che chở tạo nên một mái nhà chung bình yên",
          "Các loài thú cắn xé nhau dữ dội làm đổ gãy cây rừng",
          "Cây cối héo rũ vì không có ánh sáng",
          "Người thợ săn đặt bẫy bắt sạch muông thú"
        ],
        "correctAnswer": "Muông thú kiếm ăn tự do, cây rừng che chở tạo nên một mái nhà chung bình yên",
        "hint": "Bức tranh sinh thái đa dạng, cân bằng và tràn đầy sức sống.",
        "explanation": "Rừng là mái nhà chung nuôi dưỡng và bảo bọc muôn loài."
      },
      {
        "id": "vn11-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Thông điệp bảo vệ môi trường mà tác phẩm 'Kì diệu rừng xanh' muốn gửi tới bạn đọc là:",
        "options": [
          "Rừng là tài nguyên vô giá, hãy yêu quý, bảo vệ và giữ gìn màu xanh của rừng cho muôn đời sau",
          "Khai thác gỗ rừng thật nhiều để làm giàu nhanh chóng",
          "Nên săn bắt các loài thú quý hiếm về nuôi làm cảnh",
          "Đốt rừng làm rẫy để tăng diện tích đất canh tác"
        ],
        "correctAnswer": "Rừng là tài nguyên vô giá, hãy yêu quý, bảo vệ và giữ gìn màu xanh của rừng cho muôn đời sau",
        "hint": "Rừng xanh là lá phổi của Trái Đất cần được chung tay gìn giữ.",
        "explanation": "Bảo vệ rừng là bảo vệ sự sống của hành tinh chúng ta."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn11-s1",
        "prompt": "Từ nào đồng nghĩa với 'kì diệu'?",
        "options": [
          "Kì ảo",
          "Bình thường",
          "Giản dị",
          "Tầm thường"
        ],
        "correctAnswer": "Kì ảo",
        "explanation": "Kì ảo đồng nghĩa kì diệu."
      },
      {
        "id": "vn11-s2",
        "prompt": "Vượn bạc má chuyền cành như thế nào?",
        "options": [
          "Thoăn thoắt",
          "Chậm chạp",
          "Nặng nề",
          "Rề rà"
        ],
        "correctAnswer": "Thoăn thoắt",
        "explanation": "Thoăn thoắt."
      },
      {
        "id": "vn11-s3",
        "prompt": "Rừng khộp mùa thay lá có màu gì rực rỡ?",
        "options": [
          "Màu vàng",
          "Màu tím",
          "Màu xanh ngọc",
          "Màu đen"
        ],
        "correctAnswer": "Màu vàng",
        "explanation": "Giang sơn vàng rực."
      }
    ]
  },
  "vn-b12": {
    "practiceQuestions": [
      {
        "id": "vn12-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Khi làm bài văn tả cảnh thiên nhiên, ta cần chú ý điều gì đầu tiên?",
        "options": [
          "Xác định rõ đối tượng miêu tả (cảnh gì, ở đâu, vào thời điểm nào)",
          "Viết ngay đoạn kết bài",
          "Liệt kê tất cả các từ trong từ điển",
          "Chép nguyên một bài thơ vào bài văn"
        ],
        "correctAnswer": "Xác định rõ đối tượng miêu tả (cảnh gì, ở đâu, vào thời điểm nào)",
        "hint": "Cần định hướng rõ cảnh mình định tả trước khi đặt bút viết.",
        "explanation": "Xác định đối tượng miêu tả là bước mở đầu quan trọng nhất."
      },
      {
        "id": "vn12-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ ngữ nào dưới đây phù hợp nhất để miêu tả bầu trời buổi sớm mùa thu?",
        "options": [
          "Trong xanh, cao vời vợi",
          "U ám, xám xịt",
          "Đỏ rực như lửa thiêu",
          "Đen kịt mù mịt"
        ],
        "correctAnswer": "Trong xanh, cao vời vợi",
        "hint": "Đặc điểm điển hình của trời thu là trong veo và rất cao.",
        "explanation": "'Trong xanh, cao vời vợi' là đặc trưng của bầu trời mùa thu."
      },
      {
        "id": "vn12-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Để đoạn văn tả cơn mưa rào mùa hạ thêm sinh động, ta nên chọn những chi tiết nào?",
        "options": [
          "Mây đen ùn ùn kéo đến, sấm chớp rạch ngang trời, tiếng mưa rơi lộp độp rồi xối xả",
          "Lá vàng rơi chầm chậm trên mặt hồ phẳng lặng",
          "Băng tuyết đóng băng từng nhành cây kẽ lá",
          "Trời đứng gió, không khí oi ả không một giọt mưa"
        ],
        "correctAnswer": "Mây đen ùn ùn kéo đến, sấm chớp rạch ngang trời, tiếng mưa rơi lộp độp rồi xối xả",
        "hint": "Mưa rào mùa hạ đến nhanh với gió lốc, sấm chớp và hạt mưa nặng hạt.",
        "explanation": "Chi tiết đặc sắc về âm thanh, hình ảnh diễn biến của cơn mưa rào mùa hạ."
      },
      {
        "id": "vn12-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Câu văn nào sau đây sử dụng biện pháp nhân hóa phù hợp khi tả cảnh dòng sông?",
        "options": [
          "Dòng sông hiền hòa dang rộng vòng tay ôm lấy xóm làng thân yêu",
          "Dòng sông dài khoảng mười ki-lô-mét",
          "Nước sông có màu đục",
          "Dòng sông là nơi sinh sống của nhiều loài cá"
        ],
        "correctAnswer": "Dòng sông hiền hòa dang rộng vòng tay ôm lấy xóm làng thân yêu",
        "hint": "Gán cho sông phẩm chất 'hiền hòa' và hành động 'dang rộng vòng tay ôm'.",
        "explanation": "Nhân hóa dòng sông như một người mẹ nhân từ bảo bọc xóm thôn."
      },
      {
        "id": "vn12-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khi miêu tả cảnh vật chuyển biến theo thời gian (ví dụ từ sáng sớm đến trưa), ta nên dùng từ ngữ chuyển tiếp nào?",
        "options": [
          "Mặt trời dần nhô lên cao, chẳng mấy chốc nắng đã rải vàng khắp lối...",
          "Hôm qua, ngày kia...",
          "Tại vì, do đó...",
          "Mặc dù, nhưng mà..."
        ],
        "correctAnswer": "Mặt trời dần nhô lên cao, chẳng mấy chốc nắng đã rải vàng khắp lối...",
        "hint": "Từ ngữ chỉ bước đi của thời gian và sự thay đổi của ánh sáng mặt trời.",
        "explanation": "Dùng từ ngữ chỉ bước chuyển của thời gian giúp bài văn liền mạch."
      },
      {
        "id": "vn12-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Lỗi thường gặp nhất của học sinh khi làm bài văn miêu tả cảnh thiên nhiên là:",
        "options": [
          "Liệt kê cảnh vật khô khan theo kiểu gạch đầu dòng, thiếu cảm xúc và từ ngữ gợi tả",
          "Dùng quá nhiều từ láy",
          "Tả quá chi tiết",
          "Chia bài văn thành 3 phần rõ ràng"
        ],
        "correctAnswer": "Liệt kê cảnh vật khô khan theo kiểu gạch đầu dòng, thiếu cảm xúc và từ ngữ gợi tả",
        "hint": "Bài văn miêu tả cần hình ảnh sinh động và cảm xúc chứ không phải bản danh sách.",
        "explanation": "Cần tránh lối liệt kê khô khan, nghèo hình ảnh và thiếu cảm xúc."
      },
      {
        "id": "vn12-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Hãy chọn câu mở đoạn hay và gợi mở nhất cho đoạn văn thân bài tả cảnh bình minh trên biển:",
        "options": [
          "Phía chân trời đằng đông, vầng đông đỏ rực từ từ nhô lên khỏi mặt biển như một quả cầu lửa khổng lồ.",
          "Bây giờ em sẽ tả biển vào buổi sáng sớm.",
          "Biển rất rộng và có nhiều nước.",
          "Buổi sáng trên biển có gió thổi."
        ],
        "correctAnswer": "Phía chân trời đằng đông, vầng đông đỏ rực từ từ nhô lên khỏi mặt biển như một quả cầu lửa khổng lồ.",
        "hint": "Câu văn giàu hình ảnh, có biện pháp so sánh đẹp mắt mở đầu đoạn tả cảnh.",
        "explanation": "Câu văn mở đoạn xuất sắc với hình ảnh so sánh mặt trời như quả cầu lửa."
      },
      {
        "id": "vn12-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Để tạo chiều sâu tư tưởng cho bài văn tả cảnh thiên nhiên, người viết nên:",
        "options": [
          "Lồng ghép tình cảm yêu mến, gắn bó của bản thân với ý thức giữ gìn vẻ đẹp thiên nhiên môi trường",
          "Chỉ tập trung chê bai thời tiết xấu",
          "Không bày tỏ bất kì cảm xúc cá nhân nào",
          "Kể chuyện một vụ tai nạn trên đường đi"
        ],
        "correctAnswer": "Lồng ghép tình cảm yêu mến, gắn bó của bản thân với ý thức giữ gìn vẻ đẹp thiên nhiên môi trường",
        "hint": "Cảnh vật đẹp đẽ nâng đỡ tâm hồn con người và thôi thúc trách nhiệm bảo vệ.",
        "explanation": "Gắn kết tình yêu thiên nhiên với ý thức bảo vệ môi trường nâng cao giá trị bài viết."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn12-s1",
        "prompt": "Từ nào sau đây tả tiếng mưa rơi lộp độp trên mái tôn?",
        "options": [
          "Lộp độp",
          "Rì rào",
          "Hiu hiu",
          "Thì thầm"
        ],
        "correctAnswer": "Lộp độp",
        "explanation": "Lộp độp."
      },
      {
        "id": "vn12-s2",
        "prompt": "Ánh nắng ban mai thường có màu gì?",
        "options": [
          "Vàng dịu, trong trẻo",
          "Đỏ chói gắt",
          "Xám ngắt",
          "Đen tuyền"
        ],
        "correctAnswer": "Vàng dịu, trong trẻo",
        "explanation": "Nắng mai vàng dịu."
      },
      {
        "id": "vn12-s3",
        "prompt": "Từ láy nào gợi tả sóng biển nhẹ êm xô bờ?",
        "options": [
          "Lăn tăn",
          "Cuồn cuộn",
          "Ầm ầm",
          "Gào thét"
        ],
        "correctAnswer": "Lăn tăn",
        "explanation": "Sóng lăn tăn vỗ bờ."
      }
    ]
  },
  "vn-b13": {
    "practiceQuestions": [
      {
        "id": "vn13-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hang Sơn Đoòng nằm ở tỉnh nào của nước ta?",
        "options": [
          "Quảng Bình",
          "Quảng Ninh",
          "Ninh Bình",
          "Hà Giang"
        ],
        "correctAnswer": "Quảng Bình",
        "hint": "Nằm trong vùng lõi Vườn quốc gia Phong Nha - Kẻ Bàng, tỉnh Quảng Bình.",
        "explanation": "Hang Sơn Đoòng thuộc tỉnh Quảng Bình."
      },
      {
        "id": "vn13-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Hang Sơn Đoòng được thế giới công nhận với kỷ lục gì?",
        "options": [
          "Hang động tự nhiên lớn nhất thế giới",
          "Hang động dài nhất châu Á",
          "Hang động nhân tạo cổ nhất",
          "Hang động ngập nước mặn lớn nhất"
        ],
        "correctAnswer": "Hang động tự nhiên lớn nhất thế giới",
        "hint": "Kỳ quan thiên nhiên vô song với thể tích hang khổng lồ bậc nhất hành tinh.",
        "explanation": "Là hang động tự nhiên lớn nhất thế giới."
      },
      {
        "id": "vn13-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bên trong lòng hang Sơn Đoòng có những điều kỳ thú khác biệt nào?",
        "options": [
          "Có dòng sông ngầm, hệ thống thạch nhũ khổng lồ và cả một khu rừng nguyên sinh riêng biệt",
          "Có thành phố hiện đại với nhiều tòa nhà cao tầng",
          "Chỉ toàn bùn lầy không có sự sống",
          "Có đường ray xe lửa chạy xuyên qua"
        ],
        "correctAnswer": "Có dòng sông ngầm, hệ thống thạch nhũ khổng lồ và cả một khu rừng nguyên sinh riêng biệt",
        "hint": "Hệ sinh thái 'vườn địa đàng' độc nhất vô nhị phát triển ngay trong lòng hang.",
        "explanation": "Có sông ngầm, rừng nguyên sinh phát triển qua các hố sụt đón ánh sáng mặt trời."
      },
      {
        "id": "vn13-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Những 'hố sụt' trong hang Sơn Đoòng có vai trò gì quan trọng?",
        "options": [
          "Đưa ánh sáng mặt trời lọt vào lòng hang giúp thực vật phát triển thành rừng nguyên sinh",
          "Làm nước ngập kín toàn bộ hang",
          "Là nơi để máy bay hạ cánh",
          "Ngăn cản không cho du khách khám phá"
        ],
        "correctAnswer": "Đưa ánh sáng mặt trời lọt vào lòng hang giúp thực vật phát triển thành rừng nguyên sinh",
        "hint": "Hố sụt như những 'giếng trời' khổng lồ rót ánh sáng vào đáy hang.",
        "explanation": "Cung cấp ánh sáng và khí trời để hình thành thảm thực vật kỳ diệu trong hang."
      },
      {
        "id": "vn13-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bức tường thạch nhũ cao sừng sững gần cuối hang Sơn Đoòng được gọi là gì?",
        "options": [
          "Bức tường Việt Nam",
          "Vạn Lý Trường Thành",
          "Bức tường pha lê",
          "Đỉnh Phan-xi-păng"
        ],
        "correctAnswer": "Bức tường Việt Nam",
        "hint": "Khối thạch nhũ vách đá khổng lồ cao tới gần 90 mét.",
        "explanation": "Được các nhà thám hiểm quốc tế đặt tên là 'Bức tường Việt Nam' (Great Wall of Vietnam)."
      },
      {
        "id": "vn13-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Việc phát hiện ra hang Sơn Đoòng đem lại ý nghĩa gì cho đất nước ta?",
        "options": [
          "Làm rạng danh kỳ quan thiên nhiên Việt Nam trên bản đồ du lịch và khoa học thế giới",
          "Để biến hang thành khu vui chơi giải trí ồn ào",
          "Để khai thác đá làm vật liệu xây dựng",
          "Để xây đập thủy điện ngầm"
        ],
        "correctAnswer": "Làm rạng danh kỳ quan thiên nhiên Việt Nam trên bản đồ du lịch và khoa học thế giới",
        "hint": "Khẳng định vẻ đẹp tuyệt mỹ và tiềm năng du lịch sinh thái bền vững của Việt Nam.",
        "explanation": "Tự hào kỳ quan thiên nhiên vô giá của Việt Nam được thế giới ngưỡng mộ."
      },
      {
        "id": "vn13-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Để bảo tồn nguyên vẹn vẻ đẹp hoang sơ của hang Sơn Đoòng, chúng ta cần phải làm gì?",
        "options": [
          "Phát triển du lịch mạo hiểm bền vững, hạn chế số lượng khách và tuyệt đối không xả rác, phá hủy thạch nhũ",
          "Mở cửa ồ ạt đón hàng triệu du khách mỗi ngày",
          "Xây thang máy và hệ thống đèn màu sặc sỡ trong hang",
          "Cho phép du khách bẻ thạch nhũ mang về làm kỷ niệm"
        ],
        "correctAnswer": "Phát triển du lịch mạo hiểm bền vững, hạn chế số lượng khách và tuyệt đối không xả rác, phá hủy thạch nhũ",
        "hint": "Bảo tồn nghiêm ngặt để di sản thiên nhiên không bị tổn hại.",
        "explanation": "Quản lý chặt chẽ theo mô hình du lịch sinh thái bền vững để giữ gìn nguyên trạng."
      },
      {
        "id": "vn13-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Từ 'kì vĩ' trong bài đọc có nghĩa tương đương với từ ngữ nào dưới đây?",
        "options": [
          "Hùng vĩ, lớn lao và kỳ diệu phi thường",
          "Nhỏ bé, khiêm nhường",
          "Bình dị, quen thuộc",
          "Nguy hiểm, đáng sợ"
        ],
        "correctAnswer": "Hùng vĩ, lớn lao và kỳ diệu phi thường",
        "hint": "Kết hợp giữa nét kỳ lạ, diệu kỳ và quy mô to lớn vĩ đại.",
        "explanation": "'Kì vĩ' biểu thị vẻ đẹp to lớn phi thường làm người ta kinh ngạc."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn13-s1",
        "prompt": "Hang Sơn Đoòng thuộc vườn quốc gia nào?",
        "options": [
          "Phong Nha - Kẻ Bàng",
          "Cúc Phương",
          "Ba Vì",
          "Cát Tiên"
        ],
        "correctAnswer": "Phong Nha - Kẻ Bàng",
        "explanation": "Phong Nha - Kẻ Bàng."
      },
      {
        "id": "vn13-s2",
        "prompt": "Thạch nhũ trong hang động được hình thành qua:",
        "options": [
          "Hàng triệu năm",
          "Vài ngày",
          "Một năm",
          "Mười năm"
        ],
        "correctAnswer": "Hàng triệu năm",
        "explanation": "Hàng triệu năm kiến tạo."
      },
      {
        "id": "vn13-s3",
        "prompt": "Sơn Đoòng được công nhận là hang động tự nhiên:",
        "options": [
          "Lớn nhất thế giới",
          "Nhỏ nhất",
          "Nông nhất",
          "Nóng nhất"
        ],
        "correctAnswer": "Lớn nhất thế giới",
        "explanation": "Lớn nhất thế giới."
      }
    ]
  },
  "vn-b14": {
    "practiceQuestions": [
      {
        "id": "vn14-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ ngữ nào dưới đây thuộc nhóm từ chỉ các sự vật, hiện tượng thiên nhiên?",
        "options": [
          "Sông ngòi, núi non, mây trời, mưa nắng",
          "Bàn ghế, sách vở, bút mực",
          "Nhà cao tầng, cầu vượt, ô tô",
          "Nhà máy, xí nghiệp, máy xúc"
        ],
        "correctAnswer": "Sông ngòi, núi non, mây trời, mưa nắng",
        "hint": "Thiên nhiên là những gì tự nhiên sẵn có, không do bàn tay con người làm ra.",
        "explanation": "Sông, núi, mây trời, nắng mưa là các sự vật hiện tượng tự nhiên."
      },
      {
        "id": "vn14-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Thành ngữ nào dưới đây ca ngợi cảnh sắc thiên nhiên đất nước tươi đẹp?",
        "options": [
          "Non xanh nước biếc",
          "Ăn to nói lớn",
          "Chân lấm tay bùn",
          "Học tài thi phận"
        ],
        "correctAnswer": "Non xanh nước biếc",
        "hint": "'Non' là núi, 'nước' là sông biển xanh tươi.",
        "explanation": "'Non xanh nước biếc' ca ngợi phong cảnh sơn thủy hữu tình."
      },
      {
        "id": "vn14-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ nào dưới đây miêu tả không gian thiên nhiên rộng lớn đến mức mắt nhìn không thấy bờ bến?",
        "options": [
          "Bao la, bát ngát, mênh mông",
          "Chật chội, tù túng",
          "Hẹp hòi, khúc khuỷu",
          "Quanh co, nhỏ hẹp"
        ],
        "correctAnswer": "Bao la, bát ngát, mênh mông",
        "hint": "Các từ gợi tả không gian của biển cả, bầu trời và cánh đồng ngút ngàn.",
        "explanation": "'Bao la, bát ngát, mênh mông' chỉ không gian rộng lớn vô tận."
      },
      {
        "id": "vn14-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Dãy từ nào sau đây gồm các từ láy tả hình ảnh núi non hiểm trở?",
        "options": [
          "Trùng điệp, hiểm trở, sừng sững, cheo leo",
          "Bằng phẳng, nhẵn nhụi, êm ả",
          "Rì rào, thì thầm, líu lo",
          "Lung linh, lóng lánh, rực rỡ"
        ],
        "correctAnswer": "Trùng điệp, hiểm trở, sừng sững, cheo leo",
        "hint": "Các từ miêu tả vách đá cao ngất, đường đèo dốc đứng nguy hiểm.",
        "explanation": "Các từ tả hình thế núi cao dốc đứng và trùng điệp."
      },
      {
        "id": "vn14-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chọn từ ngữ thích hợp điền vào câu tục ngữ: 'Rừng vàng ... bạc':",
        "options": [
          "Biển",
          "Sông",
          "Đồng",
          "Núi"
        ],
        "correctAnswer": "Biển",
        "hint": "Câu thành ngữ khẳng định sự giàu có của tài nguyên rừng và biển nước ta.",
        "explanation": "'Rừng vàng biển bạc' ca ngợi tài nguyên phong phú của đất nước."
      },
      {
        "id": "vn14-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hành động nào dưới đây thể hiện tình yêu và trách nhiệm bảo vệ thiên nhiên?",
        "options": [
          "Trồng cây gây rừng, nhặt rác bảo vệ nguồn nước ngọt",
          "Săn bắt chim thú quý hiếm trong rừng",
          "Xả rác thải nhựa bừa bãi xuống sông hồ",
          "Bẻ cành hái hoa nơi công viên"
        ],
        "correctAnswer": "Trồng cây gây rừng, nhặt rác bảo vệ nguồn nước ngọt",
        "hint": "Hành động tích cực chăm sóc và bảo vệ môi trường sống.",
        "explanation": "Trồng cây và giữ sạch nguồn nước là việc làm bảo vệ thiên nhiên thiết thực."
      },
      {
        "id": "vn14-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trong các câu sau, câu nào sử dụng từ ngữ thuộc chủ đề thiên nhiên một cách gợi cảm và nhân hóa tinh tế nhất?",
        "options": [
          "Mẹ thiên nhiên hào phóng ban tặng cho đất nước ta bờ biển dài tít tắp và dải rừng nguyên sinh ngút ngàn.",
          "Thiên nhiên bao gồm đất, nước và không khí.",
          "Trời hôm nay nắng to và gió nhẹ.",
          "Chúng ta phải học bài môn khoa học về thiên nhiên."
        ],
        "correctAnswer": "Mẹ thiên nhiên hào phóng ban tặng cho đất nước ta bờ biển dài tít tắp và dải rừng nguyên sinh ngút ngàn.",
        "hint": "Gọi thiên nhiên bằng danh xưng tôn kính 'Mẹ thiên nhiên' và dùng các từ gợi cảm.",
        "explanation": "Nhân hóa 'Mẹ thiên nhiên hào phóng' với ngôn từ giàu chất thơ."
      },
      {
        "id": "vn14-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Cụm từ nào dưới đây có thể thay thế cho cụm từ 'sơn thủy hữu tình'?",
        "options": [
          "Cảnh non nước thơ mộng, hữu duyên nên thơ",
          "Cảnh đồi núi trơ trọi",
          "Đường sá đông đúc xe cộ",
          "Phố xá buôn bán sầm uất"
        ],
        "correctAnswer": "Cảnh non nước thơ mộng, hữu duyên nên thơ",
        "hint": "'Sơn' là núi, 'thủy' là sông nước, 'hữu tình' là có tình, nên thơ.",
        "explanation": "Chỉ vẻ đẹp non nước hòa quyện nên thơ, đượm chất trữ tình."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn14-s1",
        "prompt": "Điền vào chỗ trống: Rừng vàng ... bạc.",
        "options": [
          "Biển",
          "Sông",
          "Đất",
          "Trời"
        ],
        "correctAnswer": "Biển",
        "explanation": "Biển bạc."
      },
      {
        "id": "vn14-s2",
        "prompt": "Từ nào gợi tả cảnh cánh đồng rộng bát ngát?",
        "options": [
          "Mênh mông",
          "Chật chội",
          "Ngắn ngủi",
          "Thấp bé"
        ],
        "correctAnswer": "Mênh mông",
        "explanation": "Mênh mông."
      },
      {
        "id": "vn14-s3",
        "prompt": "Thác nước chảy ầm ầm là từ tượng:",
        "options": [
          "Thanh",
          "Hình",
          "Sắc",
          "Tâm"
        ],
        "correctAnswer": "Thanh",
        "explanation": "Từ tượng thanh."
      }
    ]
  },
  "vn-b15": {
    "practiceQuestions": [
      {
        "id": "vn15-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Vịnh Hạ Long thuộc tỉnh nào của đất nước Việt Nam?",
        "options": [
          "Quảng Ninh",
          "Hải Phòng",
          "Nam Định",
          "Thanh Hóa"
        ],
        "correctAnswer": "Quảng Ninh",
        "hint": "Kỳ quan thiên nhiên thế giới nổi tiếng miền Đông Bắc thuộc tỉnh Quảng Ninh.",
        "explanation": "Vịnh Hạ Long thuộc tỉnh Quảng Ninh."
      },
      {
        "id": "vn15-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Vẻ đẹp độc đáo nhất của hàng ngàn hòn đảo trên vịnh Hạ Long là:",
        "options": [
          "Mỗi hòn đảo mang một hình thù kỳ thú, sinh động như một tác phẩm điêu khắc của tạo hóa",
          "Tất cả các đảo đều vuông vức bằng chằn chặn giống hệt nhau",
          "Các đảo đều được xây bằng bê tông kiên cố",
          "Đảo nào cũng có sân bay quốc tế"
        ],
        "correctAnswer": "Mỗi hòn đảo mang một hình thù kỳ thú, sinh động như một tác phẩm điêu khắc của tạo hóa",
        "hint": "Hình ảnh đảo Rồng, hòn Gà Chọi (Trống Mái), hòn Đỉnh Hương, hòn Con Cóc...",
        "explanation": "Thiên nhiên tạc đẽo hàng nghìn hòn đảo muôn hình vạn trạng sống động."
      },
      {
        "id": "vn15-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tên gọi của các hòn đảo trên vịnh Hạ Long (như Hòn Trống Mái, Hòn Rùa, Hòn Lư Hương) bắt nguồn từ đâu?",
        "options": [
          "Từ hình dáng bên ngoài giống với những con vật hoặc đồ vật quen thuộc trong đời sống",
          "Từ tên của các vị vua chúa thời xưa",
          "Từ tên của các nhà thám hiểm nước ngoài",
          "Đặt theo số thứ tự 1, 2, 3..."
        ],
        "correctAnswer": "Từ hình dáng bên ngoài giống với những con vật hoặc đồ vật quen thuộc trong đời sống",
        "hint": "Nhân dân đặt tên đảo theo trí tưởng tượng phong phú dựa vào hình dáng đảo.",
        "explanation": "Dựa trên hình dáng tự nhiên sinh động của từng khối đá vôi."
      },
      {
        "id": "vn15-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Màu sắc của nước biển vịnh Hạ Long trong bài văn được miêu tả như thế nào?",
        "options": [
          "Xanh ngọc bích trong vắt soi bóng mây trời và vách đá",
          "Đỏ rực vì phù sa",
          "Đen ngòm vì bùn lầy",
          "Trắng đục như sữa bão hòa"
        ],
        "correctAnswer": "Xanh ngọc bích trong vắt soi bóng mây trời và vách đá",
        "hint": "Sắc nước đặc trưng của vùng vịnh Hạ Long kín gió.",
        "explanation": "Màu xanh ngọc bích trong trẻo tôn lên vẻ đẹp kỳ ảo của vịnh."
      },
      {
        "id": "vn15-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Hòn Trống Mái đứng sừng sững giữa sóng nước như biểu tượng của tình yêu thủy chung', từ 'sừng sững' gợi tả điều gì?",
        "options": [
          "Dáng đứng hiên ngang, vững chãi, to lớn giữa biển khơi",
          "Dáng vẻ ngả nghiêng sắp đổ",
          "Chìm sâu dưới lòng nước",
          "Trôi dạt theo từng đợt sóng"
        ],
        "correctAnswer": "Dáng đứng hiên ngang, vững chãi, to lớn giữa biển khơi",
        "hint": "Từ láy tượng hình gợi tư thế đứng bất động, vững chãi qua ngàn năm.",
        "explanation": "Tư thế hiên ngang, vững vàng kiên cố trước thời gian sóng gió."
      },
      {
        "id": "vn15-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tổ chức UNESCO đã công nhận vịnh Hạ Long là danh hiệu gì?",
        "options": [
          "Di sản thiên nhiên thế giới",
          "Di sản văn hóa phi vật thể",
          "Khu công nghiệp trọng điểm",
          "Khu bảo tồn động vật trên cạn"
        ],
        "correctAnswer": "Di sản thiên nhiên thế giới",
        "hint": "Được vinh danh toàn cầu bởi giá trị cảnh quan và địa chất địa mạo nổi bật.",
        "explanation": "Vịnh Hạ Long được UNESCO hai lần vinh danh là Di sản thiên nhiên thế giới."
      },
      {
        "id": "vn15-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tình cảm của tác giả đối với cảnh sắc vịnh Hạ Long được thể hiện như thế nào?",
        "options": [
          "Sự say đắm, lòng tự hào sâu sắc về kỳ quan non nước thiêng liêng của Tổ quốc",
          "Cảm giác bình thường như mọi bãi biển khác",
          "Thất vọng vì sóng biển quá yên tĩnh",
          "Chỉ muốn nhanh chóng kết thúc chuyến đi"
        ],
        "correctAnswer": "Sự say đắm, lòng tự hào sâu sắc về kỳ quan non nước thiêng liêng của Tổ quốc",
        "hint": "Niềm tự hào mãnh liệt về thắng cảnh đất nước được bạn bè quốc tế tán dương.",
        "explanation": "Tự hào và ngợi ca vẻ đẹp thần tiên của non nước Việt Nam."
      },
      {
        "id": "vn15-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Khi đến tham quan vịnh Hạ Long, hành động nào dưới đây là văn minh và có trách nhiệm nhất?",
        "options": [
          "Không xả rác xuống biển, bảo vệ nguồn nước và tôn trọng cảnh quan sinh thái tự nhiên",
          "Khắc tên mình lên các vách đá trong hang động để lưu niệm",
          "Bẻ các nhánh thạch nhũ mang về nhà",
          "Vứt chai nhựa xuống biển sau khi uống nước"
        ],
        "correctAnswer": "Không xả rác xuống biển, bảo vệ nguồn nước và tôn trọng cảnh quan sinh thái tự nhiên",
        "hint": "Bảo vệ môi trường biển là gìn giữ di sản thiên nhiên thế giới cho mai sau.",
        "explanation": "Du lịch văn minh, không rác thải nhựa để bảo tồn di sản thế giới."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn15-s1",
        "prompt": "Vịnh Hạ Long thuộc tỉnh nào?",
        "options": [
          "Quảng Ninh",
          "Hải Phòng",
          "Quảng Bình",
          "Đà Nẵng"
        ],
        "correctAnswer": "Quảng Ninh",
        "explanation": "Quảng Ninh."
      },
      {
        "id": "vn15-s2",
        "prompt": "Biểu tượng nổi tiếng nhất của vịnh Hạ Long là hòn:",
        "options": [
          "Trống Mái",
          "Kim Quy",
          "Ngọc Vừng",
          "Cô Tô"
        ],
        "correctAnswer": "Trống Mái",
        "explanation": "Hòn Trống Mái (hòn Gà Chọi)."
      },
      {
        "id": "vn15-s3",
        "prompt": "Vịnh Hạ Long được UNESCO công nhận là:",
        "options": [
          "Di sản thiên nhiên thế giới",
          "Di sản văn hóa",
          "Kì quan nhân tạo",
          "Khu chế xuất"
        ],
        "correctAnswer": "Di sản thiên nhiên thế giới",
        "explanation": "Di sản thiên nhiên thế giới."
      }
    ]
  },
  "vn-b16": {
    "practiceQuestions": [
      {
        "id": "vn16-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong các cặp từ sau, cặp từ nào là cặp từ trái nghĩa?",
        "options": [
          "Đoàn kết - Chia rẽ",
          "Chăm chỉ - Cần mẫn",
          "Bao la - Mênh mông",
          "Thật thà - Trung thực"
        ],
        "correctAnswer": "Đoàn kết - Chia rẽ",
        "hint": "'Đoàn kết' là gắn bó một lòng, 'chia rẽ' là làm tách rời, chống đối nhau.",
        "explanation": "'Đoàn kết' và 'chia rẽ' có nghĩa trái ngược nhau."
      },
      {
        "id": "vn16-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Mẹ em mua một cân đường và đi trên con đường làng', hai từ 'đường' là hiện tượng gì?",
        "options": [
          "Từ đồng âm",
          "Từ nhiều nghĩa",
          "Từ đồng nghĩa",
          "Từ ghép"
        ],
        "correctAnswer": "Từ đồng âm",
        "hint": "'Cân đường' là gia vị có vị ngọt; 'con đường' là lối đi lại.",
        "explanation": "Hai từ phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau (từ đồng âm)."
      },
      {
        "id": "vn16-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'ăn' trong cụm từ nào dưới đây được dùng theo NGHĨA GỐC?",
        "options": [
          "Ăn cơm",
          "Ăn ảnh",
          "Tàu ăn than",
          "Da ăn nắng"
        ],
        "correctAnswer": "Ăn cơm",
        "hint": "Nghĩa gốc của ăn là hành động nhai nuốt thức ăn nuôi sống cơ thể người/động vật.",
        "explanation": "'Ăn cơm' là hành động nhai nuốt thức ăn (nghĩa gốc)."
      },
      {
        "id": "vn16-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Câu nào dưới đây sử dụng đúng biện pháp so sánh khi miêu tả thiên nhiên?",
        "options": [
          "Dòng suối trong veo như một tấm gương soi bóng mây trời",
          "Dòng suối rất dài và sâu",
          "Nước suối chảy từ trên núi xuống",
          "Suối là một dạng dòng chảy tự nhiên"
        ],
        "correctAnswer": "Dòng suối trong veo như một tấm gương soi bóng mây trời",
        "hint": "Có từ 'như' nối giữa hình ảnh dòng suối trong và tấm gương soi.",
        "explanation": "So sánh suối trong veo như tấm gương soi."
      },
      {
        "id": "vn16-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bố cục của một bài văn tả phong cảnh gồm có:",
        "options": [
          "Mở bài (giới thiệu cảnh), Thân bài (tả chi tiết), Kết bài (nêu cảm nghĩ)",
          "Mở bài và Kết bài",
          "Chỉ có phần Thân bài",
          "Nêu cảm nghĩ trước, tả sau"
        ],
        "correctAnswer": "Mở bài (giới thiệu cảnh), Thân bài (tả chi tiết), Kết bài (nêu cảm nghĩ)",
        "hint": "Cấu trúc 3 phần tiêu chuẩn của bài văn miêu tả.",
        "explanation": "Bố cục gồm 3 phần: Mở bài, Thân bài, Kết bài."
      },
      {
        "id": "vn16-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong các từ sau: 'đất nước, giang sơn, non sông, tổ quốc', các từ này có mối quan hệ gì?",
        "options": [
          "Từ đồng nghĩa",
          "Từ trái nghĩa",
          "Từ đồng âm",
          "Từ nhiều nghĩa"
        ],
        "correctAnswer": "Từ đồng nghĩa",
        "hint": "Tất cả các từ đều mang nghĩa chỉ mảnh đất thiêng liêng nơi dân tộc sinh sống.",
        "explanation": "Các từ đồng nghĩa chỉ quốc gia, quê hương đất nước."
      },
      {
        "id": "vn16-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Đọc câu thơ: 'Dòng sông mới điệu làm sao / Nắng lên mặc áo lụa đào thướt tha'. Biện pháp nghệ thuật nổi bật ở đây là:",
        "options": [
          "Nhân hóa",
          "Điệp ngữ",
          "So sánh",
          "Nói quá"
        ],
        "correctAnswer": "Nhân hóa",
        "hint": "Dòng sông biết 'điệu', biết 'mặc áo lụa đào' như một cô gái trẻ duyên dáng.",
        "explanation": "Nhân hóa dòng sông biết làm điệu, biết mặc áo như con người."
      },
      {
        "id": "vn16-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Để phân biệt từ nhiều nghĩa và từ đồng âm, điểm mấu chốt quan trọng nhất là:",
        "options": [
          "Các nghĩa của từ nhiều nghĩa có mối liên hệ về nghĩa, còn từ đồng âm thì nghĩa hoàn toàn tách biệt không họ hàng",
          "Từ nhiều nghĩa có nhiều chữ cái hơn từ đồng âm",
          "Từ đồng âm luôn viết hoa",
          "Từ nhiều nghĩa chỉ có ở danh từ"
        ],
        "correctAnswer": "Các nghĩa của từ nhiều nghĩa có mối liên hệ về nghĩa, còn từ đồng âm thì nghĩa hoàn toàn tách biệt không họ hàng",
        "hint": "Xem các nét nghĩa có mối liên hệ nguồn gốc hay hoàn toàn độc lập với nhau.",
        "explanation": "Mối liên hệ giữa các nét nghĩa là tiêu chí cốt lõi phân biệt."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn16-s1",
        "prompt": "Từ trái nghĩa với 'chiến thắng' là:",
        "options": [
          "Thất bại",
          "Thành công",
          "Vinh quang",
          "Thắng lợi"
        ],
        "correctAnswer": "Thất bại",
        "explanation": "Thất bại."
      },
      {
        "id": "vn16-s2",
        "prompt": "'Đồng tiền' và 'cánh đồng' là hiện tượng:",
        "options": [
          "Từ đồng âm",
          "Từ nhiều nghĩa",
          "Từ đồng nghĩa",
          "Từ ghép"
        ],
        "correctAnswer": "Từ đồng âm",
        "explanation": "Từ đồng âm."
      },
      {
        "id": "vn16-s3",
        "prompt": "Mở bài gián tiếp là mở bài:",
        "options": [
          "Dẫn dắt từ sự việc khác rồi mới vào cảnh tả",
          "Vào ngay cảnh tả",
          "Chỉ có 1 câu",
          "Không có kết bài"
        ],
        "correctAnswer": "Dẫn dắt từ sự việc khác rồi mới vào cảnh tả",
        "explanation": "Dẫn dắt gián tiếp."
      }
    ]
  },
  "vn-b17": {
    "practiceQuestions": [
      {
        "id": "vn17-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Bức thư 'Thư gửi các học sinh' được Bác Hồ viết vào dịp nào?",
        "options": [
          "Nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa (tháng 9 năm 1945)",
          "Nhân dịp Tết Nguyên Đán năm 1946",
          "Nhân ngày Quốc tế Thiếu nhi 1 tháng 6",
          "Nhân dịp kết thúc năm học 1945"
        ],
        "correctAnswer": "Nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa (tháng 9 năm 1945)",
        "hint": "Ngày khai giảng lịch sử đầu tiên sau khi đất nước giành được độc lập.",
        "explanation": "Tháng 9 năm 1945, nhân ngày khai trường đầu tiên của nước Việt Nam độc lập."
      },
      {
        "id": "vn17-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Ngày khai trường tháng 9 năm 1945 có điều gì đặc biệt so với trước đó?",
        "options": [
          "Là ngày khai trường đầu tiên dưới một nền giáo dục hoàn toàn độc lập của nước nhà",
          "Học sinh được nghỉ học thêm một tuần",
          "Trường học được xây to gấp đôi",
          "Học sinh phải học bằng tiếng nước ngoài"
        ],
        "correctAnswer": "Là ngày khai trường đầu tiên dưới một nền giáo dục hoàn toàn độc lập của nước nhà",
        "hint": "Từ nay các em bắt đầu được nhận một nền giáo dục của một nước độc lập.",
        "explanation": "Đánh dấu nền giáo dục độc lập, đào tạo những công dân tự do có ích cho nước nhà."
      },
      {
        "id": "vn17-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Theo lời Bác Hồ, non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang sánh vai cùng các cường quốc năm châu hay không là nhờ vào:",
        "options": [
          "Một phần lớn ở công học tập của các em học sinh",
          "Vốn tài nguyên khoáng sản giàu có",
          "Sự giúp đỡ của các nước bạn bè",
          "Vũ khí tối tân hiện đại"
        ],
        "correctAnswer": "Một phần lớn ở công học tập của các em học sinh",
        "hint": "'...chính là nhờ một phần lớn ở công học tập của các em.'",
        "explanation": "Bác khẳng định vai trò quyết định của việc học tập, rèn luyện của thế hệ trẻ."
      },
      {
        "id": "vn17-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bác Hồ nhắc nhở các em học sinh cần có thái độ và tinh thần học tập như thế nào?",
        "options": [
          "Siêng năng học tập, ngoan ngoãn, vâng lời thầy cô và đoàn kết giúp đỡ bạn bè",
          "Chỉ học thuộc lòng để đối phó thi cử",
          "Học tập ganh đua để được phần thưởng riêng",
          "Không cần học bài nhiều, chỉ cần chơi thể thao"
        ],
        "correctAnswer": "Siêng năng học tập, ngoan ngoãn, vâng lời thầy cô và đoàn kết giúp đỡ bạn bè",
        "hint": "Lời khuyên ân cần của Bác về đạo đức và ý thức học tập.",
        "explanation": "Chăm ngoan, vâng lời thầy, yêu bạn và siêng năng rèn luyện."
      },
      {
        "id": "vn17-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cụm từ 'sánh vai với các cường quốc năm châu' có nghĩa là gì?",
        "options": [
          "Đứng ngang hàng, bình đẳng và phát triển văn minh cùng các nước phát triển trên thế giới",
          "Đi du lịch vòng quanh năm châu lục",
          "Chạy đua vũ trang với các nước lớn",
          "Đọ sức thể thao với các vận động viên quốc tế"
        ],
        "correctAnswer": "Đứng ngang hàng, bình đẳng và phát triển văn minh cùng các nước phát triển trên thế giới",
        "hint": "Khát vọng đất nước Việt Nam giàu mạnh, văn minh, có vị thế vẻ vang trên trường quốc tế.",
        "explanation": "Đưa đất nước vươn lên tầm cao văn minh, sánh bước cùng các nước tiên tiến thế giới."
      },
      {
        "id": "vn17-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong bức thư, tình cảm của Bác Hồ dành cho các cháu thiếu nhi Việt Nam là:",
        "options": [
          "Tình yêu thương bao la, sự quan tâm sâu sắc và niềm tin tưởng tuyệt đối vào thế hệ mầm non tương lai",
          "Sự nghiêm khắc, xa cách",
          "Chỉ coi các cháu như những người giúp việc nhỏ",
          "Không có tình cảm gì đặc biệt"
        ],
        "correctAnswer": "Tình yêu thương bao la, sự quan tâm sâu sắc và niềm tin tưởng tuyệt đối vào thế hệ mầm non tương lai",
        "hint": "'Bác gửi cho các em trăm cái hôn âu yếm...'",
        "explanation": "Tình thương yêu tha thiết và niềm kỳ vọng lớn lao của vị Cha già dân tộc."
      },
      {
        "id": "vn17-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Để thực hiện lời dạy của Bác Hồ trong thư, mỗi học sinh tiểu học ngày nay cần làm gì thiết thực nhất?",
        "options": [
          "Chăm chỉ học đều các môn, rèn luyện phẩm chất đạo đức tốt, có lối sống lành mạnh và yêu thương mọi người",
          "Học ngày đêm không nghỉ ngơi vui chơi",
          "Chỉ tập trung học mỗi môn mình thích",
          "Chờ đến khi lớn lên rồi mới học"
        ],
        "correctAnswer": "Chăm chỉ học đều các môn, rèn luyện phẩm chất đạo đức tốt, có lối sống lành mạnh và yêu thương mọi người",
        "hint": "Thực hiện tốt 5 điều Bác Hồ dạy bằng những việc làm cụ thể mỗi ngày.",
        "explanation": "Học tập tốt, rèn luyện đạo đức tốt để trở thành người công dân có ích."
      },
      {
        "id": "vn17-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Ý nghĩa lịch sử và thời đại sâu sắc nhất của bức 'Thư gửi các học sinh' là:",
        "options": [
          "Đặt nền móng tư tưởng cho sự nghiệp giáo dục trồng người của nước Việt Nam mới",
          "Quy định lịch nghỉ hè cho học sinh",
          "Hướng dẫn cách viết một lá thư thông thường",
          "Thống kê số lượng trường học cả nước"
        ],
        "correctAnswer": "Đặt nền móng tư tưởng cho sự nghiệp giáo dục trồng người của nước Việt Nam mới",
        "hint": "Tầm nhìn chiến lược coi giáo dục là quốc sách hàng đầu vì tương lai dân tộc.",
        "explanation": "Khẳng định chân lý giáo dục là cốt lõi xây dựng và bảo vệ đất nước hùng cường."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn17-s1",
        "prompt": "Bác Hồ gửi bức thư cho học sinh vào năm nào?",
        "options": [
          "Năm 1945",
          "Năm 1954",
          "Năm 1975",
          "Năm 1930"
        ],
        "correctAnswer": "Năm 1945",
        "explanation": "Tháng 9 năm 1945."
      },
      {
        "id": "vn17-s2",
        "prompt": "'Cường quốc năm châu' chỉ các nước:",
        "options": [
          "Lớn mạnh trên thế giới",
          "Ở châu Á",
          "Đang phát triển",
          "Ven biển"
        ],
        "correctAnswer": "Lớn mạnh trên thế giới",
        "explanation": "Các nước lớn mạnh, tiên tiến trên thế giới."
      },
      {
        "id": "vn17-s3",
        "prompt": "Tương lai non sông Việt Nam phụ thuộc lớn vào:",
        "options": [
          "Công học tập của học sinh",
          "Máy móc",
          "Thời tiết",
          "Đất đai"
        ],
        "correctAnswer": "Công học tập của học sinh",
        "explanation": "Công học tập của học sinh."
      }
    ]
  },
  "vn-b18": {
    "practiceQuestions": [
      {
        "id": "vn18-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Đại từ là những từ dùng để làm gì trong câu?",
        "options": [
          "Dùng để xưng hô hoặc để thay thế cho danh từ, động từ, tính từ (hoặc cụm từ) để tránh lặp từ",
          "Dùng để miêu tả hình dáng đồ vật",
          "Dùng để nối các vế câu ghép",
          "Dùng để bộc lộ cảm xúc vui buồn"
        ],
        "correctAnswer": "Dùng để xưng hô hoặc để thay thế cho danh từ, động từ, tính từ (hoặc cụm từ) để tránh lặp từ",
        "hint": "Đại từ đóng vai trò thay thế hoặc xưng hô trong giao tiếp.",
        "explanation": "Đại từ dùng để xưng hô hoặc thay thế cho từ ngữ khác nhằm tránh lặp."
      },
      {
        "id": "vn18-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Các từ nào dưới đây là đại từ xưng hô ở ngôi thứ nhất (chỉ người nói)?",
        "options": [
          "Tôi, tớ, mình, chúng tôi",
          "Cậu, bạn, mày, chúng mày",
          "Nó, hắn, bọn họ",
          "Ai, gì, nào"
        ],
        "correctAnswer": "Tôi, tớ, mình, chúng tôi",
        "hint": "Từ người nói tự xưng về chính mình.",
        "explanation": "Tôi, tớ, mình, chúng tôi là đại từ ngôi thứ nhất."
      },
      {
        "id": "vn18-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Lúa gạo là ngọc thực. Nó nuôi sống con người.', từ 'nó' thay thế cho từ nào?",
        "options": [
          "Lúa gạo",
          "Con người",
          "Ngọc thực",
          "Sống"
        ],
        "correctAnswer": "Lúa gạo",
        "hint": "'Nó' thay thế cho sự vật được nhắc đến ở câu trước để tránh lặp từ.",
        "explanation": "Từ 'nó' thay thế cho 'lúa gạo'."
      },
      {
        "id": "vn18-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Các từ dùng để xưng hô thể hiện sự lễ phép của học sinh đối với thầy cô giáo là:",
        "options": [
          "Em - Thầy / Cô",
          "Tôi - Bạn",
          "Tớ - Cậu",
          "Tao - Mày"
        ],
        "correctAnswer": "Em - Thầy / Cô",
        "hint": "Cặp từ xưng hô tôn sư trọng đạo đúng chuẩn mực học đường.",
        "explanation": "'Em xưng hô với Thầy/Cô' thể hiện sự kính trọng, lễ phép."
      },
      {
        "id": "vn18-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Nhóm từ nào sau đây là các đại từ dùng để hỏi?",
        "options": [
          "Ai, gì, nào, sao, bao nhiêu",
          "Tôi, chúng tôi, chúng mình",
          "Nó, hắn, bọn họ",
          "Đây, đó, kia, này"
        ],
        "correctAnswer": "Ai, gì, nào, sao, bao nhiêu",
        "hint": "Các từ xuất hiện trong câu hỏi để tìm kiếm thông tin.",
        "explanation": "Ai, gì, nào, sao, bao nhiêu là đại từ nghi vấn (dùng để hỏi)."
      },
      {
        "id": "vn18-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đại từ 'thế' trong câu 'Bạn Nam rất chăm học, em cũng thế' thay thế cho cụm từ nào?",
        "options": [
          "Rất chăm học",
          "Bạn Nam",
          "Em",
          "Cũng"
        ],
        "correctAnswer": "Rất chăm học",
        "hint": "Thay thế cho đặc điểm tính chất 'rất chăm học'.",
        "explanation": "'Thế' thay thế cho cụm tính từ 'rất chăm học'."
      },
      {
        "id": "vn18-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Đoạn văn sau mắc lỗi lặp từ: 'Hoa rất thích đọc sách. Hoa đọc sách mỗi ngày. Sách giúp Hoa mở rộng hiểu biết.' Nên dùng đại từ nào thay thế để câu văn trau chuốt hơn?",
        "options": [
          "Thay 'Hoa' ở câu 2 bằng 'Bạn ấy' (hoặc 'Cô bé'), thay 'Hoa' ở câu 3 bằng 'em'",
          "Không cần thay vì lặp từ càng nhấn mạnh",
          "Xóa bỏ câu thứ 2 đi",
          "Thay chữ 'sách' bằng chữ 'vở'"
        ],
        "correctAnswer": "Thay 'Hoa' ở câu 2 bằng 'Bạn ấy' (hoặc 'Cô bé'), thay 'Hoa' ở câu 3 bằng 'em'",
        "hint": "Dùng đại từ thay thế để liên kết câu mượt mà và tránh lỗi lặp từ vụng về.",
        "explanation": "Dùng đại từ 'bạn ấy', 'em' thay thế giúp đoạn văn linh hoạt, không lặp."
      },
      {
        "id": "vn18-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trong tiếng Việt, những danh từ chỉ quan hệ gia đình (ông, bà, cha, mẹ, chú, bác, anh, chị, em...) có thể được dùng như:",
        "options": [
          "Đại từ xưng hô mang sắc thái tình cảm thân mật, kính trọng",
          "Quan hệ từ nối câu",
          "Động từ chỉ hành động",
          "Tính từ chỉ màu sắc"
        ],
        "correctAnswer": "Đại từ xưng hô mang sắc thái tình cảm thân mật, kính trọng",
        "hint": "Đặc trưng độc đáo của văn hóa giao tiếp tiếng Việt theo thứ bậc gia đình.",
        "explanation": "Tiếng Việt dùng từ chỉ quan hệ thân tộc làm đại từ xưng hô giàu tình cảm."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn18-s1",
        "prompt": "Đại từ ngôi thứ hai (người nghe) là:",
        "options": [
          "Bạn, cậu",
          "Tôi, tớ",
          "Nó, hắn",
          "Chúng tôi"
        ],
        "correctAnswer": "Bạn, cậu",
        "explanation": "Bạn, cậu là ngôi thứ hai."
      },
      {
        "id": "vn18-s2",
        "prompt": "'Ai' trong câu 'Ai làm bài này?' là đại từ:",
        "options": [
          "Để hỏi",
          "Xưng hô",
          "Chỉ định",
          "Thay thế tính từ"
        ],
        "correctAnswer": "Để hỏi",
        "explanation": "Đại từ để hỏi."
      },
      {
        "id": "vn18-s3",
        "prompt": "Tác dụng chính của đại từ thay thế là:",
        "options": [
          "Tránh lặp từ",
          "Tạo vần thơ",
          "Tăng âm lượng",
          "Tạo câu hỏi"
        ],
        "correctAnswer": "Tránh lặp từ",
        "explanation": "Tránh lặp từ ngữ."
      }
    ]
  },
  "vn-b19": {
    "practiceQuestions": [
      {
        "id": "vn19-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tự học có nghĩa là gì?",
        "options": [
          "Tự mình chủ động tìm tòi, nghiên cứu, tích lũy tri thức mà không cần ai ép buộc",
          "Chỉ học khi có bố mẹ hoặc thầy cô ngồi bên cạnh nhắc nhở",
          "Chỉ học những lúc sắp đến ngày thi",
          "Sao chép bài giải sẵn trên mạng"
        ],
        "correctAnswer": "Tự mình chủ động tìm tòi, nghiên cứu, tích lũy tri thức mà không cần ai ép buộc",
        "hint": "'Tự' là tự thân vận động, chủ động nắm bắt tri thức.",
        "explanation": "Tự học là quá trình chủ động tìm hiểu, khám phá tri thức không đợi ai thúc ép."
      },
      {
        "id": "vn19-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong lịch sử nước ta, ai là tấm gương tiêu biểu vượt khó tự học thành tài trở thành Trạng nguyên lỗi lạc?",
        "options": [
          "Nguyễn Hiền, Mạc Đĩnh Chi",
          "Thạch Sanh",
          "Thánh Gióng",
          "Lê Phụng Hiểu"
        ],
        "correctAnswer": "Nguyễn Hiền, Mạc Đĩnh Chi",
        "hint": "Mạc Đĩnh Chi nhà nghèo bắt đom đóm bỏ vào vỏ trứng để lấy ánh sáng đọc sách ban đêm.",
        "explanation": "Mạc Đĩnh Chi và Nguyễn Hiền là những tấm gương tự học phi thường sáng ngời lịch sử."
      },
      {
        "id": "vn19-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bác Hồ đã tự học ngoại ngữ trong những năm tháng bôn ba cứu nước như thế nào?",
        "options": [
          "Mỗi ngày viết vài từ mới lên cánh tay hoặc mảnh giấy, vừa làm việc vừa nhẩm thuộc, giao tiếp với người bản xứ",
          "Bác đến học tại các trường đại học danh tiếng suốt nhiều năm liền",
          "Bác chỉ học qua các ứng dụng điện thoại thông minh",
          "Bác thuê gia sư riêng kèm cặp"
        ],
        "correctAnswer": "Mỗi ngày viết vài từ mới lên cánh tay hoặc mảnh giấy, vừa làm việc vừa nhẩm thuộc, giao tiếp với người bản xứ",
        "hint": "Bác kiên trì học từng từ mỗi ngày, học từ đồng nghiệp và thực tế đời sống.",
        "explanation": "Bác kiên trì ghi từ mới lên mu bàn tay, chăm chỉ tự học và sử dụng thành thạo nhiều thứ tiếng."
      },
      {
        "id": "vn19-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Thành ngữ, tục ngữ nào dưới đây ca ngợi tinh thần học hỏi từ bạn bè và thực tế?",
        "options": [
          "Học thầy không tày học bạn",
          "Có công mài sắt có ngày nên kim",
          "Đi một ngày đàng học một sàng khôn",
          "Cả ba đáp án trên"
        ],
        "correctAnswer": "Cả ba đáp án trên",
        "hint": "Tất cả các câu tục ngữ trên đều đúc kết kinh nghiệm quý báu về tinh thần học hỏi và kiên trì.",
        "explanation": "Cả 3 câu tục ngữ đều ca ngợi tinh thần học tập, kiên trì và trải nghiệm."
      },
      {
        "id": "vn19-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khó khăn lớn nhất mà người tự học thường phải đối mặt và vượt qua là:",
        "options": [
          "Sự lười biếng, nản lòng và thiếu tính kiên nhẫn khi gặp bài khó",
          "Có quá nhiều sách để đọc",
          "Thời tiết thay đổi thất thường",
          "Được bố mẹ quá nuông chiều"
        ],
        "correctAnswer": "Sự lười biếng, nản lòng và thiếu tính kiên nhẫn khi gặp bài khó",
        "hint": "Chiến thắng bản thân và duy trì kỉ luật tự giác là yếu tố quyết định.",
        "explanation": "Vượt qua sự nản chí và rèn luyện tính kiên trì là thử thách lớn nhất."
      },
      {
        "id": "vn19-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Việc tự học mang lại cho con người lợi ích to lớn gì?",
        "options": [
          "Giúp mở rộng hiểu biết không giới hạn, chủ động thích ứng và làm chủ cuộc đời",
          "Chỉ giúp thi đỗ điểm cao một lần",
          "Để khoe khoang với bạn bè",
          "Không có lợi ích gì đáng kể"
        ],
        "correctAnswer": "Giúp mở rộng hiểu biết không giới hạn, chủ động thích ứng và làm chủ cuộc đời",
        "hint": "Học tập suốt đời là chìa khóa thành công bền vững của mỗi cá nhân.",
        "explanation": "Tự học giúp con người liên tục hoàn thiện bản thân và vững vàng trong cuộc sống."
      },
      {
        "id": "vn19-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Câu danh ngôn: 'Học, học nữa, học mãi' của V.I. Lê-nin nhấn mạnh điều gì?",
        "options": [
          "Sự nghiệp học tập là một quá trình liên tục suốt đời, không bao giờ ngừng nghỉ",
          "Mỗi ngày chỉ cần học 15 phút",
          "Khi học xong tiểu học là không cần học nữa",
          "Chỉ có các nhà bác học mới cần học"
        ],
        "correctAnswer": "Sự nghiệp học tập là một quá trình liên tục suốt đời, không bao giờ ngừng nghỉ",
        "hint": "Tri thức nhân loại mênh mông như biển cả, sự học không có điểm dừng.",
        "explanation": "Học tập là công việc suốt đời của mỗi con người văn minh."
      },
      {
        "id": "vn19-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Phương pháp tự học nào dưới đây được coi là khoa học và hiệu quả nhất cho học sinh lớp 5?",
        "options": [
          "Lập thời gian biểu hợp lý, đọc trước bài mới, tự làm bài tập và đọc thêm sách mở rộng",
          "Học thâu đêm suốt sáng trước ngày thi",
          "Vừa học vừa nghe nhạc lớn và chơi game",
          "Học thuộc lòng từng chữ mà không cần hiểu ý nghĩa"
        ],
        "correctAnswer": "Lập thời gian biểu hợp lý, đọc trước bài mới, tự làm bài tập và đọc thêm sách mở rộng",
        "hint": "Học tập có kế hoạch, có phương pháp và tự giác nghiên cứu.",
        "explanation": "Tự học có kế hoạch, đào sâu suy nghĩ và mở rộng kiến thức qua sách báo."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn19-s1",
        "prompt": "Mạc Đĩnh Chi nổi tiếng với việc bắt gì để lấy ánh sáng học?",
        "options": [
          "Bắt đom đóm",
          "Bắt ve sầu",
          "Bắt dế mèn",
          "Bắt bướm"
        ],
        "correctAnswer": "Bắt đom đóm",
        "explanation": "Bắt đom đóm bỏ vào vỏ trứng."
      },
      {
        "id": "vn19-s2",
        "prompt": "'Học, học nữa, học mãi' là câu nói của ai?",
        "options": [
          "Lê-nin",
          "Niu-tơn",
          "Bác Hồ",
          "Ê-đi-xơn"
        ],
        "correctAnswer": "Lê-nin",
        "explanation": "V.I. Lê-nin."
      },
      {
        "id": "vn19-s3",
        "prompt": "Từ đồng nghĩa với 'kiên trì' là:",
        "options": [
          "Nhẫn nại",
          "Nóng vội",
          "Nản chí",
          "Hấp tấp"
        ],
        "correctAnswer": "Nhẫn nại",
        "explanation": "Nhẫn nại đồng nghĩa kiên trì."
      }
    ]
  },
  "vn-b20": {
    "practiceQuestions": [
      {
        "id": "vn20-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Một đoạn văn nêu ý kiến (bày tỏ quan điểm) nhằm mục đích gì?",
        "options": [
          "Bày tỏ sự đồng tình hay phản đối trước một vấn đề, đồng thời thuyết phục người đọc bằng lý lẽ và dẫn chứng",
          "Tả hình dáng của một đồ vật",
          "Kể lại một câu chuyện cổ tích hư cấu",
          "Viết một bức thư xin lỗi"
        ],
        "correctAnswer": "Bày tỏ sự đồng tình hay phản đối trước một vấn đề, đồng thời thuyết phục người đọc bằng lý lẽ và dẫn chứng",
        "hint": "Nêu rõ quan điểm và đưa ra căn cứ xác đáng để bảo vệ quan điểm đó.",
        "explanation": "Bày tỏ quan điểm cá nhân và thuyết phục người khác bằng lí lẽ, bằng chứng."
      },
      {
        "id": "vn20-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Cấu trúc cơ bản của một đoạn văn nêu ý kiến gồm có:",
        "options": [
          "Câu mở đoạn (nêu ý kiến), Các câu thân đoạn (nêu lí lẽ và dẫn chứng), Câu kết đoạn (khẳng định lại ý kiến)",
          "Chỉ gồm các câu kể chuyện",
          "Chỉ liệt kê câu hỏi",
          "Mở bài, Thân bài, Kết bài chia thành 3 đoạn dài"
        ],
        "correctAnswer": "Câu mở đoạn (nêu ý kiến), Các câu thân đoạn (nêu lí lẽ và dẫn chứng), Câu kết đoạn (khẳng định lại ý kiến)",
        "hint": "Bố cục mạch lạc của một đoạn văn nghị luận ngắn.",
        "explanation": "Mở đoạn nêu ý kiến -> Thân đoạn đưa lí lẽ dẫn chứng -> Kết đoạn khẳng định lại."
      },
      {
        "id": "vn20-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Để lí lẽ trong đoạn văn có sức thuyết phục cao, ta cần phải làm gì?",
        "options": [
          "Đưa ra các dẫn chứng (ví dụ, số liệu, sự việc thực tế) xác thực, cụ thể và sinh động",
          "Chỉ cần nói to hoặc dùng dấu chấm than liên tiếp",
          "Nhắc đi nhắc lại một câu nhiều lần",
          "Dẫn chứng bịa đặt không có thật"
        ],
        "correctAnswer": "Đưa ra các dẫn chứng (ví dụ, số liệu, sự việc thực tế) xác thực, cụ thể và sinh động",
        "hint": "'Nói có sách, mách có chứng' - dẫn chứng thực tế luôn là vũ khí thuyết phục mạnh nhất.",
        "explanation": "Dẫn chứng xác thực, người thật việc thật làm tăng độ tin cậy của lí lẽ."
      },
      {
        "id": "vn20-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ ngữ nào thường được dùng để mở đầu khi nêu ý kiến cá nhân?",
        "options": [
          "Theo em thấy, Em cho rằng, Theo quan điểm của em...",
          "Ngày xửa ngày xưa...",
          "Ở một làng nọ...",
          "Hôm nay trời mưa to..."
        ],
        "correctAnswer": "Theo em thấy, Em cho rằng, Theo quan điểm của em...",
        "hint": "Từ ngữ chỉ quan điểm, nhận định của người viết.",
        "explanation": "Các cụm từ 'Theo em', 'Em cho rằng' thể hiện quan điểm một cách rõ ràng, khiêm tốn."
      },
      {
        "id": "vn20-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ ngữ nối nào giúp liên kết các lí lẽ trong đoạn văn một cách chặt chẽ?",
        "options": [
          "Thứ nhất là, Hơn nữa, Đặc biệt là, Không chỉ vậy...",
          "Bỗng nhiên, Đột ngột...",
          "Chẳng hạn như một ngày kia...",
          "Trong một khu rừng tối..."
        ],
        "correctAnswer": "Thứ nhất là, Hơn nữa, Đặc biệt là, Không chỉ vậy...",
        "hint": "Từ ngữ liên kết lập luận chỉ thứ tự và mức độ tăng tiến.",
        "explanation": "Các từ nối lập luận giúp mạch văn logic, sáng sủa và dễ theo dõi."
      },
      {
        "id": "vn20-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khi nêu ý kiến về việc 'Học sinh tiểu học có nên đọc sách mỗi ngày?', ý kiến nào là tích cực và đúng đắn nhất?",
        "options": [
          "Rất nên đọc sách vì sách là kho tàng tri thức vô giá, giúp nuôi dưỡng tâm hồn và mở rộng vốn từ",
          "Không nên đọc sách vì tốn thời gian chơi điện tử",
          "Chỉ nên đọc sách tranh giải trí, không cần đọc sách chữ",
          "Chỉ người lớn mới cần đọc sách"
        ],
        "correctAnswer": "Rất nên đọc sách vì sách là kho tàng tri thức vô giá, giúp nuôi dưỡng tâm hồn và mở rộng vốn từ",
        "hint": "Ý kiến khẳng định tầm quan trọng của việc đọc sách đối với sự phát triển trí tuệ.",
        "explanation": "Đọc sách mỗi ngày làm giàu vốn hiểu biết và nuôi dưỡng nhân cách."
      },
      {
        "id": "vn20-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Đọc câu văn: 'Đọc sách không chỉ giúp chúng ta trau dồi kiến thức mà còn rèn luyện tính kiên nhẫn, điềm tĩnh.' Câu này đóng vai trò gì trong đoạn văn nghị luận?",
        "options": [
          "Nêu lí lẽ chứng minh cho lợi ích của việc đọc sách",
          "Nêu một câu chuyện cổ tích",
          "Miêu tả bìa cuốn sách",
          "Kết luận bài văn"
        ],
        "correctAnswer": "Nêu lí lẽ chứng minh cho lợi ích của việc đọc sách",
        "hint": "Chỉ ra những tác dụng cụ thể của sách đối với trí tuệ và tính cách.",
        "explanation": "Đây là câu văn nêu lí lẽ sắc bén, thuyết phục."
      },
      {
        "id": "vn20-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Lỗi nào sau đây khiến một đoạn văn nêu ý kiến trở nên kém thuyết phục?",
        "options": [
          "Chỉ khẳng định ý kiến chung chung mà không đưa ra bất kỳ lí lẽ hay dẫn chứng nào",
          "Dùng dẫn chứng thực tế",
          "Dùng các từ nối lập luận",
          "Có câu kết đoạn khẳng định lại quan điểm"
        ],
        "correctAnswer": "Chỉ khẳng định ý kiến chung chung mà không đưa ra bất kỳ lí lẽ hay dẫn chứng nào",
        "hint": "Ý kiến suông không có bằng chứng sẽ không thuyết phục được ai.",
        "explanation": "Thiếu lí lẽ và dẫn chứng sẽ biến đoạn văn thành những lời nói suông áp đặt."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn20-s1",
        "prompt": "Câu đầu tiên của đoạn văn nêu ý kiến có nhiệm vụ:",
        "options": [
          "Nêu trực tiếp ý kiến bản thân",
          "Kể chuyện dài dòng",
          "Tả cảnh thiên nhiên",
          "Hát một bài hát"
        ],
        "correctAnswer": "Nêu trực tiếp ý kiến bản thân",
        "explanation": "Mở đoạn nêu ý kiến."
      },
      {
        "id": "vn20-s2",
        "prompt": "Để lí lẽ đáng tin cậy cần có:",
        "options": [
          "Dẫn chứng thực tế",
          "Nói thật to",
          "Viết hoa tất cả",
          "Vẽ hình minh họa"
        ],
        "correctAnswer": "Dẫn chứng thực tế",
        "explanation": "Dẫn chứng thực tế."
      },
      {
        "id": "vn20-s3",
        "prompt": "Từ nào dùng để liên kết lí lẽ?",
        "options": [
          "Bên cạnh đó",
          "Hôm qua",
          "Xưa kia",
          "Ngày nọ"
        ],
        "correctAnswer": "Bên cạnh đó",
        "explanation": "'Bên cạnh đó' là từ nối lập luận."
      }
    ]
  },
  "vn-b21": {
    "practiceQuestions": [
      {
        "id": "vn21-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trải nghiệm thực tế có vai trò như thế nào đối với sự sáng tạo của mỗi học sinh?",
        "options": [
          "Giúp các em quan sát đời sống thật, khơi gợi cảm xúc và nảy sinh những ý tưởng mới mẻ",
          "Làm mất nhiều thời gian học lý thuyết",
          "Không có tác dụng gì cho việc học",
          "Chỉ làm các em mệt mỏi"
        ],
        "correctAnswer": "Giúp các em quan sát đời sống thật, khơi gợi cảm xúc và nảy sinh những ý tưởng mới mẻ",
        "hint": "Học đi đôi với hành, sáng tạo nảy nở từ mảnh đất thực tế sinh động.",
        "explanation": "Trải nghiệm thực tế khơi nguồn cảm hứng và ý tưởng sáng tạo độc đáo."
      },
      {
        "id": "vn21-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong bài đọc, các bạn học sinh đã tham gia hoạt động trải nghiệm nào?",
        "options": [
          "Tham gia làm gốm, trồng cây, dã ngoại và tự tay tạo nên các sản phẩm sáng tạo",
          "Ngồi xem phim hoạt hình trong phòng kín",
          "Chơi điện tử thi đấu trực tuyến",
          "Chỉ ngồi chép lại sách giáo khoa"
        ],
        "correctAnswer": "Tham gia làm gốm, trồng cây, dã ngoại và tự tay tạo nên các sản phẩm sáng tạo",
        "hint": "Các hoạt động thực hành thủ công, hòa mình vào thiên nhiên và làng nghề truyền thống.",
        "explanation": "Các hoạt động trải nghiệm thực hành giúp học sinh thỏa sức sáng tạo."
      },
      {
        "id": "vn21-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cảm giác của các bạn nhỏ khi tự tay hoàn thành một sản phẩm của riêng mình là:",
        "options": [
          "Vui sướng, tự hào và tràn đầy hứng khởi tự tin",
          "Chán nản và thất vọng",
          "Lo sợ bị người khác chê bai",
          "Không quan tâm đến sản phẩm mình làm"
        ],
        "correctAnswer": "Vui sướng, tự hào và tràn đầy hứng khởi tự tin",
        "hint": "Niềm hạnh phúc khi nhìn thấy thành quả lao động và sáng tạo của chính mình.",
        "explanation": "Niềm vui sáng tạo và tự hào khi tự mình làm ra sản phẩm có ích."
      },
      {
        "id": "vn21-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Câu thành ngữ nào dưới đây nói về giá trị to lớn của việc đi thực tế trải nghiệm?",
        "options": [
          "Đi một ngày đàng, học một sàng khôn",
          "Ăn không rau như đau không thuốc",
          "Cháy nhà hàng xóm bình chân như vại",
          "Đứng núi này trông núi nọ"
        ],
        "correctAnswer": "Đi một ngày đàng, học một sàng khôn",
        "hint": "Mỗi chuyến đi, mỗi lần trải nghiệm giúp mở rộng hiểu biết và tích lũy tri thức khôn ngoan.",
        "explanation": "Đi thực tế giúp mở rộng tầm mắt và tiếp thu nhiều bài học quý giá."
      },
      {
        "id": "vn21-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khi quan sát một người thợ gốm nhào nặn đất sét, chi tiết nào thể hiện sự khéo léo tài hoa?",
        "options": [
          "Đôi bàn tay mềm mại uốn lượn nhịp nhàng theo vòng xoay của bàn xoay gốm",
          "Người thợ dùng búa đập mạnh",
          "Người thợ để đất sét khô cứng",
          "Chiếc bàn xoay bị hỏng không quay được"
        ],
        "correctAnswer": "Đôi bàn tay mềm mại uốn lượn nhịp nhàng theo vòng xoay của bàn xoay gốm",
        "hint": "Sự kết hợp tinh tế giữa bàn tay khéo léo và tốc độ xoay của bàn gốm.",
        "explanation": "Nét tài hoa, điêu luyện biến khối đất thô thành tác phẩm nghệ thuật."
      },
      {
        "id": "vn21-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Ý nghĩa của việc kết hợp 'Học đi đôi với hành' là gì?",
        "options": [
          "Lý thuyết được áp dụng vào thực tiễn sẽ nhớ lâu, hiểu sâu và phát huy hiệu quả",
          "Học lý thuyết một đằng, làm thực tế một nẻo",
          "Chỉ cần làm không cần học lý thuyết",
          "Chỉ cần học thuộc lý thuyết là đủ"
        ],
        "correctAnswer": "Lý thuyết được áp dụng vào thực tiễn sẽ nhớ lâu, hiểu sâu và phát huy hiệu quả",
        "hint": "Nguyên lý giáo dục cốt lõi giúp tri thức trở nên sống động và hữu dụng.",
        "explanation": "Học đi đôi với hành giúp kiến thức khắc sâu và biến thành kỹ năng thực tế."
      },
      {
        "id": "vn21-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một nhà khoa học vĩ đại từng nói: 'Sáng tạo bắt đầu từ sự tò mò và dám trải nghiệm'. Câu nói này khuyên chúng ta điều gì?",
        "options": [
          "Hãy luôn giữ tâm hồn tò mò ham học hỏi, không ngại bắt tay vào làm thử và khám phá cái mới",
          "Phải tò mò chuyện riêng tư của người khác",
          "Không nên thử làm những việc mình chưa biết",
          "Chờ người khác làm xong rồi sao chép lại"
        ],
        "correctAnswer": "Hãy luôn giữ tâm hồn tò mò ham học hỏi, không ngại bắt tay vào làm thử và khám phá cái mới",
        "hint": "Dũng cảm dấn thân thử nghiệm những ý tưởng mới mẻ.",
        "explanation": "Khuyến khích tinh thần khám phá, sáng tạo không ngừng từ thực tiễn."
      },
      {
        "id": "vn21-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Bài học lớn nhất mà mỗi học sinh rút ra sau các hoạt động trải nghiệm thực tế là:",
        "options": [
          "Biết trân trọng giá trị của lao động, biết lắng nghe, hợp tác cùng bạn và tự tin thể hiện ý tưởng của mình",
          "Chỉ có đi chơi mới là vui nhất",
          "Không cần phải nghe lời thầy cô hướng dẫn",
          "Trải nghiệm chỉ để chụp ảnh đăng lên mạng"
        ],
        "correctAnswer": "Biết trân trọng giá trị của lao động, biết lắng nghe, hợp tác cùng bạn và tự tin thể hiện ý tưởng của mình",
        "hint": "Giá trị giáo dục toàn diện cả về phẩm chất, kỹ năng và thái độ sống.",
        "explanation": "Rèn luyện phẩm chất tôn trọng lao động, kỹ năng hợp tác và bản lĩnh sáng tạo."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn21-s1",
        "prompt": "Đi một ngày đàng học một ... khôn:",
        "options": [
          "Sàng",
          "Thúng",
          "Nồi",
          "Bát"
        ],
        "correctAnswer": "Sàng",
        "explanation": "Học một sàng khôn."
      },
      {
        "id": "vn21-s2",
        "prompt": "Từ nào đồng nghĩa với 'sáng tạo'?",
        "options": [
          "Cách tân, đổi mới",
          "Rập khuôn",
          "Bắt chước",
          "Sao chép"
        ],
        "correctAnswer": "Cách tân, đổi mới",
        "explanation": "Đổi mới, cách tân."
      },
      {
        "id": "vn21-s3",
        "prompt": "Học đi đôi với ...:",
        "options": [
          "Hành",
          "Ngủ",
          "Chơi",
          "Nói"
        ],
        "correctAnswer": "Hành",
        "explanation": "Học đi đôi với hành."
      }
    ]
  },
  "vn-b22": {
    "practiceQuestions": [
      {
        "id": "vn22-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Quan hệ từ là những từ dùng để làm gì?",
        "options": [
          "Nối các từ ngữ hoặc các câu, nhằm thể hiện mối quan hệ giữa những từ ngữ hoặc những câu ấy với nhau",
          "Thay thế cho người hoặc sự vật được nói đến",
          "Miêu tả hành động của nhân vật",
          "Bộc lộ cảm xúc thán phục"
        ],
        "correctAnswer": "Nối các từ ngữ hoặc các câu, nhằm thể hiện mối quan hệ giữa những từ ngữ hoặc những câu ấy với nhau",
        "hint": "Quan hệ từ đóng vai trò chất kết dính liên kết các thành phần ngữ pháp.",
        "explanation": "Quan hệ từ dùng để nối các từ ngữ hoặc các vế câu với nhau."
      },
      {
        "id": "vn22-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Những từ nào dưới đây là quan hệ từ thường gặp?",
        "options": [
          "Và, với, hay, hoặc, nhưng, mà, thì, của, ở, tại, vì, nếu...",
          "Bàn, ghế, sách, vở",
          "Chạy, nhảy, bơi, lặn",
          "Đẹp, xấu, cao, thấp"
        ],
        "correctAnswer": "Và, với, hay, hoặc, nhưng, mà, thì, của, ở, tại, vì, nếu...",
        "hint": "Các từ chuyên dùng làm cầu nối ngữ pháp.",
        "explanation": "Và, với, hay, hoặc, nhưng, vì, nếu... là các quan hệ từ phổ biến."
      },
      {
        "id": "vn22-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Quan hệ từ 'nhưng' trong câu 'Trời mưa to nhưng em vẫn đi học đúng giờ' biểu thị mối quan hệ gì?",
        "options": [
          "Tương phản (đối lập)",
          "Nguyên nhân - kết quả",
          "Điều kiện - kết quả",
          "Tăng tiến"
        ],
        "correctAnswer": "Tương phản (đối lập)",
        "hint": "Mưa to (bất lợi) đối lập với việc vẫn đi học đúng giờ.",
        "explanation": "Từ 'nhưng' biểu thị mối quan hệ tương phản, đối lập."
      },
      {
        "id": "vn22-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chọn quan hệ từ thích hợp điền vào chỗ trống: 'Cái cặp này ... bạn Lan rất đẹp.'",
        "options": [
          "Của",
          "Nhưng",
          "Vì",
          "Nên"
        ],
        "correctAnswer": "Của",
        "hint": "Biểu thị quan hệ sở hữu giữa người và đồ vật.",
        "explanation": "Quan hệ từ 'của' chỉ sự sở hữu."
      },
      {
        "id": "vn22-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Xác định quan hệ từ trong câu: 'Mặt trời đã lên cao mà sương vẫn chưa tan hết':",
        "options": [
          "Mà",
          "Đã",
          "Lên",
          "Chưa"
        ],
        "correctAnswer": "Mà",
        "hint": "Từ dùng để nối hai vế có tính chất tương phản nhẹ.",
        "explanation": "'Mà' là quan hệ từ nối hai vế câu."
      },
      {
        "id": "vn22-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Em thích đọc truyện tranh và nghe nhạc', quan hệ từ 'và' có tác dụng:",
        "options": [
          "Nối hai cụm hoạt động có quan hệ đồng thời, liên hợp",
          "Chỉ sự lựa chọn chỉ một trong hai",
          "Chỉ sự đối lập loại trừ",
          "Chỉ thời gian tương lai"
        ],
        "correctAnswer": "Nối hai cụm hoạt động có quan hệ đồng thời, liên hợp",
        "hint": "Nối hai sở thích cùng tồn tại.",
        "explanation": "Quan hệ từ 'và' biểu thị mối quan hệ liên hợp, bổ sung."
      },
      {
        "id": "vn22-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Câu nào dưới đây dùng SAI quan hệ từ?",
        "options": [
          "Vì thời tiết xấu nhưng chuyến bay bị hoãn lại",
          "Vì trời mưa to nên đường rất trơn",
          "Tuy nhà xa nhưng Nam vẫn đi học đúng giờ",
          "Nếu em chăm chỉ thì kết quả học tập sẽ tốt hơn"
        ],
        "correctAnswer": "Vì thời tiết xấu nhưng chuyến bay bị hoãn lại",
        "hint": "'Vì' chỉ nguyên nhân thì vế sau phải dùng 'nên' (kết quả), không thể dùng 'nhưng' (tương phản).",
        "explanation": "Dùng sai quan hệ từ 'nhưng', phải sửa thành 'nên'."
      },
      {
        "id": "vn22-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Điền quan hệ từ thích hợp để hoàn chỉnh câu danh ngôn: '... có học thức mà không có đạo đức là người vô dụng, ... có đạo đức mà không có học thức thì làm việc gì cũng khó.' (Hồ Chí Minh)",
        "options": [
          "Có - Có",
          "Nếu - Thì",
          "Nhưng - Và",
          "Vì - Nên"
        ],
        "correctAnswer": "Có - Có",
        "hint": "Cấu trúc so sánh đối chiếu giữa tài và đức của Bác Hồ.",
        "explanation": "Lời Bác dạy: 'Có tài mà không có đức... Có đức mà không có tài...'"
      }
    ],
    "speedQuestions": [
      {
        "id": "vn22-s1",
        "prompt": "'Vì trời mưa nên đường trơn' có cặp quan hệ từ chỉ:",
        "options": [
          "Nguyên nhân - kết quả",
          "Điều kiện - kết quả",
          "Tương phản",
          "Tăng tiến"
        ],
        "correctAnswer": "Nguyên nhân - kết quả",
        "explanation": "Vì... nên... là nguyên nhân - kết quả."
      },
      {
        "id": "vn22-s2",
        "prompt": "'Tuy... nhưng...' biểu thị quan hệ:",
        "options": [
          "Tương phản",
          "Nguyên nhân",
          "Điều kiện",
          "Mục đích"
        ],
        "correctAnswer": "Tương phản",
        "explanation": "Tương phản đối lập."
      },
      {
        "id": "vn22-s3",
        "prompt": "Từ nào sau đây là quan hệ từ?",
        "options": [
          "Và",
          "Chạy",
          "Nhà",
          "Đẹp"
        ],
        "correctAnswer": "Và",
        "explanation": "'Và' là quan hệ từ."
      }
    ]
  },
  "vn-b23": {
    "practiceQuestions": [
      {
        "id": "vn23-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tác phẩm 'Dế Mèn phiêu lưu kí' là kiệt tác văn học thiếu nhi của nhà văn nào?",
        "options": [
          "Tô Hoài",
          "Võ Quảng",
          "Nguyễn Nhật Ánh",
          "Đoàn Giỏi"
        ],
        "correctAnswer": "Tô Hoài",
        "hint": "Cây đại thụ của nền văn học thiếu nhi Việt Nam.",
        "explanation": "Tác phẩm bất hủ của nhà văn Tô Hoài."
      },
      {
        "id": "vn23-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Dế Mèn thời trẻ tự miêu tả ngoại hình của mình như thế nào?",
        "options": [
          "Một chàng dế thanh niên cường tráng, đôi càng mẫm bóng, vuốt cứng quặp lại sắc lẹm",
          "Gầy gò, ốm yếu, cánh ngắn củn",
          "Béo phì lười biếng không thể di chuyển",
          "Bị gãy càng cụt cánh"
        ],
        "correctAnswer": "Một chàng dế thanh niên cường tráng, đôi càng mẫm bóng, vuốt cứng quặp lại sắc lẹm",
        "hint": "Hình ảnh Dế Mèn khỏe khoắn, tràn trề sức sống thanh xuân.",
        "explanation": "Dế Mèn rất tự hào về vẻ đẹp cường tráng, khỏe mạnh của mình."
      },
      {
        "id": "vn23-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Nhược điểm lớn nhất trong tính cách của Dế Mèn lúc mới lớn là gì?",
        "options": [
          "Kiêu căng, tự phụ, hung hăng và coi thường những người xung quanh",
          "Nhút nhát không dám ra khỏi hang",
          "Lười biếng không chịu đi kiếm ăn",
          "Hay khóc nhè mỗi khi bị mắng"
        ],
        "correctAnswer": "Kiêu căng, tự phụ, hung hăng và coi thường những người xung quanh",
        "hint": "Cậy mình khỏe mạnh nên hay cà khịa, trêu chọc mọi người.",
        "explanation": "Tính kiêu ngạo, xốc nổi đã dẫn Dế Mèn đến những sai lầm đau đớn."
      },
      {
        "id": "vn23-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hậu quả đau xót từ trò nghịch dại trêu chị Cốc của Dế Mèn là gì?",
        "options": [
          "Dẫn đến cái chết oan uổng của người bạn láng giềng Dế Choắt tội nghiệp",
          "Dế Mèn bị gãy mất một chiếc càng",
          "Hang của Dế Mèn bị ngập nước",
          "Bị bác Xiến Tóc mắng một trận"
        ],
        "correctAnswer": "Dẫn đến cái chết oan uổng của người bạn láng giềng Dế Choắt tội nghiệp",
        "hint": "Bài học đường đời đầu tiên đầy nước mắt ân hận của Dế Mèn.",
        "explanation": "Dế Choắt bị chị Cốc mổ oan dẫn đến cái chết thương tâm."
      },
      {
        "id": "vn23-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Lời khuyên cuối cùng của Dế Choắt trước khi chết đã dạy cho Dế Mèn bài học gì?",
        "options": [
          "Ở đời mà có thói hung hăng bậy bạ, có óc mà không biết nghĩ, sớm muộn rồi cũng mang vạ vào mình",
          "Phải đi trêu chọc người khác để rèn luyện lòng dũng cảm",
          "Nên đào hang thật sâu để trốn tránh mọi hiểm nguy",
          "Đừng bao giờ kết bạn với ai"
        ],
        "correctAnswer": "Ở đời mà có thói hung hăng bậy bạ, có óc mà không biết nghĩ, sớm muộn rồi cũng mang vạ vào mình",
        "hint": "Lời trăn trối nhân ái giúp Dế Mèn thức tỉnh và trưởng thành.",
        "explanation": "Bài học thấm thía về sự khiêm tốn, biết suy nghĩ trước khi hành động."
      },
      {
        "id": "vn23-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tâm trạng của Dế Mèn sau khi chôn cất Dế Choắt là:",
        "options": [
          "Đứng lặng hồi lâu trước nấm mộ, nghẹn ngào ăn năn hối hận về lỗi lầm của mình",
          "Vui vẻ như không có chuyện gì xảy ra",
          "Tức giận muốn đi tìm chị Cốc trả thù ngay",
          "Bỏ đi nơi khác chơi với bạn mới"
        ],
        "correctAnswer": "Đứng lặng hồi lâu trước nấm mộ, nghẹn ngào ăn năn hối hận về lỗi lầm của mình",
        "hint": "Sự ân hận chân thành đánh dấu bước ngoặt đổi thay trong nhân cách của Dế Mèn.",
        "explanation": "Nỗi đau xót và lòng ăn năn muộn màng trước nấm mộ bạn."
      },
      {
        "id": "vn23-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Lý tưởng cao đẹp mà Dế Mèn hướng tới trong những cuộc phiêu lưu sau này là:",
        "options": [
          "Kết nghĩa anh em bốn bể, cùng nhau xây dựng thế giới muôn loài hòa bình, tự do và bình đẳng",
          "Trở thành vua của loài côn trùng bắt mọi loài cống nạp",
          "Thu thập thật nhiều thức ăn ngon cất vào hang",
          "Đánh bại tất cả võ sĩ dế trên đời để xưng hùng xưng bá"
        ],
        "correctAnswer": "Kết nghĩa anh em bốn bể, cùng nhau xây dựng thế giới muôn loài hòa bình, tự do và bình đẳng",
        "hint": "Ước mơ đại đồng cao đẹp: muôn loài cùng chung sống trong hòa bình.",
        "explanation": "Lý tưởng cao đẹp kết nghĩa anh em bốn phương, vì độc lập tự do."
      },
      {
        "id": "vn23-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nghệ thuật miêu tả thế giới loài vật trong 'Dế Mèn phiêu lưu kí' đặc sắc ở chỗ:",
        "options": [
          "Quan sát tinh tế đặc điểm sinh học loài côn trùng kết hợp nhân hóa mang tính cách, tâm lý xã hội loài người sống động",
          "Chỉ sao chép tài liệu sinh học đơn thuần",
          "Bịa đặt hoàn toàn không có thực tế",
          "Không sử dụng biện pháp nhân hóa"
        ],
        "correctAnswer": "Quan sát tinh tế đặc điểm sinh học loài côn trùng kết hợp nhân hóa mang tính cách, tâm lý xã hội loài người sống động",
        "hint": "Vừa đúng chất dế vừa mang tâm lý sâu sắc của con người.",
        "explanation": "Nghệ thuật miêu tả loài vật bậc thầy của nhà văn Tô Hoài."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn23-s1",
        "prompt": "Ai là tác giả của 'Dế Mèn phiêu lưu kí'?",
        "options": [
          "Tô Hoài",
          "Xuân Quỳnh",
          "Trần Đăng Khoa",
          "Võ Quảng"
        ],
        "correctAnswer": "Tô Hoài",
        "explanation": "Nhà văn Tô Hoài."
      },
      {
        "id": "vn23-s2",
        "prompt": "Người bạn hàng xóm yếu ớt của Dế Mèn là ai?",
        "options": [
          "Dế Choắt",
          "Dế Trũi",
          "Chị Cốc",
          "Bác Xiến Tóc"
        ],
        "correctAnswer": "Dế Choắt",
        "explanation": "Dế Choắt."
      },
      {
        "id": "vn23-s3",
        "prompt": "Từ nào trái nghĩa với 'kiêu căng'?",
        "options": [
          "Khiêm tốn",
          "Tự phụ",
          "Hợm hĩnh",
          "Ngạo mạn"
        ],
        "correctAnswer": "Khiêm tốn",
        "explanation": "Khiêm tốn."
      }
    ]
  },
  "vn-b24": {
    "practiceQuestions": [
      {
        "id": "vn24-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Nhóm từ nào dưới đây là đại từ dùng để xưng hô?",
        "options": [
          "Tôi, bạn, chúng ta, cậu, tớ",
          "Học tập, rèn luyện, thi cử",
          "Sách, vở, bút, thước",
          "Chăm chỉ, cần cù, siêng năng"
        ],
        "correctAnswer": "Tôi, bạn, chúng ta, cậu, tớ",
        "hint": "Các từ ngữ trực tiếp xưng hô trong giao tiếp.",
        "explanation": "Đại từ xưng hô chỉ người tham gia giao tiếp."
      },
      {
        "id": "vn24-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Quan hệ từ nào thích hợp nhất điền vào câu: 'Bạn Nam ... bạn Bắc là đôi bạn cùng tiến'?",
        "options": [
          "Và",
          "Nhưng",
          "Vì",
          "Tuy"
        ],
        "correctAnswer": "Và",
        "hint": "Từ nối hai người có mối liên kết gắn bó.",
        "explanation": "Quan hệ từ 'và' kết nối hai sự vật tương đương."
      },
      {
        "id": "vn24-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cặp quan hệ từ trong câu: 'Nếu em cố gắng học tập thì em sẽ đạt kết quả cao' biểu thị mối quan hệ gì?",
        "options": [
          "Điều kiện (giả thiết) - kết quả",
          "Nguyên nhân - kết quả",
          "Tương phản",
          "Tăng tiến"
        ],
        "correctAnswer": "Điều kiện (giả thiết) - kết quả",
        "hint": "'Nếu... thì...' đặt ra điều kiện giả định và hệ quả đi kèm.",
        "explanation": "'Nếu... thì...' là cặp quan hệ từ chỉ điều kiện - kết quả."
      },
      {
        "id": "vn24-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đại từ 'đó' trong câu: 'Chiếc bút này viết rất êm. Bạn có thích chiếc bút đó không?' thay thế cho:",
        "options": [
          "Chiếc bút này",
          "Bạn",
          "Không",
          "Viết rất êm"
        ],
        "correctAnswer": "Chiếc bút này",
        "hint": "Thay thế cho đồ vật đã được giới thiệu ở câu trước.",
        "explanation": "'Đó' thay thế cho 'chiếc bút này' để tránh lặp từ."
      },
      {
        "id": "vn24-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong đoạn văn nêu ý kiến, câu văn: 'Vì vậy, chúng ta cần duy trì thói quen đọc sách 30 phút mỗi ngày' đóng vai trò là:",
        "options": [
          "Câu kết đoạn khẳng định và nêu lời khuyên hành động",
          "Câu mở đoạn",
          "Câu kể chuyện",
          "Câu hỏi tu từ"
        ],
        "correctAnswer": "Câu kết đoạn khẳng định và nêu lời khuyên hành động",
        "hint": "'Vì vậy...' tóm lược và hướng tới thông điệp hành động cuối đoạn.",
        "explanation": "Câu kết đoạn đúc kết quan điểm và định hướng hành động thiết thực."
      },
      {
        "id": "vn24-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Thành ngữ nào dưới đây ca ngợi truyền thống hiếu học và sự kiên trì của người xưa?",
        "options": [
          "Mài sắt nên kim",
          "Miệng nam mô bụng một bồ dao găm",
          "Đục nước béo cò",
          "Đầu voi đuôi chuột"
        ],
        "correctAnswer": "Mài sắt nên kim",
        "hint": "Kiên trì vượt khó ắt có ngày thành tài công to việc lớn.",
        "explanation": "'Có công mài sắt có ngày nên kim' ca ngợi lòng kiên nhẫn bền bỉ."
      },
      {
        "id": "vn24-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tìm đại từ thay thế dùng sai trong câu: 'Cây bàng trước sân trường em rất xanh tốt. Chúng đã gắn bó với bao thế hệ học trò.'",
        "options": [
          "Sai từ 'Chúng', vì chỉ có 1 cây bàng (số ít), phải sửa thành 'Nó' hoặc 'Cây'",
          "Sai từ 'Cây bàng'",
          "Sai từ 'xanh tốt'",
          "Sai từ 'chúng ta'"
        ],
        "correctAnswer": "Sai từ 'Chúng', vì chỉ có 1 cây bàng (số ít), phải sửa thành 'Nó' hoặc 'Cây'",
        "hint": "'Cây bàng' là danh từ số ít, không thể thay bằng đại từ số nhiều 'chúng'.",
        "explanation": "Dùng sai số lượng đại từ, cần thay 'chúng' bằng 'nó'."
      },
      {
        "id": "vn24-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nội dung giáo dục cốt lõi nhất của toàn bộ Chủ điểm 3 'Trên con đường học tập' là:",
        "options": [
          "Khơi dậy tinh thần tự giác, lòng say mê tri thức, ý chí vượt khó vươn lên làm chủ tương lai",
          "Dạy học sinh cách vượt qua các kì thi mà không cần học",
          "Chỉ trích những bạn học yếu",
          "Yêu cầu học sinh học thuộc lòng tất cả các bài đọc"
        ],
        "correctAnswer": "Khơi dậy tinh thần tự giác, lòng say mê tri thức, ý chí vượt khó vươn lên làm chủ tương lai",
        "hint": "Khát vọng học hỏi, tự học, trải nghiệm và rèn luyện đạo đức để dựng xây đất nước.",
        "explanation": "Bồi đắp lý tưởng học tập suốt đời, chủ động sáng tạo và cống hiến cho Tổ quốc."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn24-s1",
        "prompt": "Từ nào sau đây là quan hệ từ?",
        "options": [
          "Nhưng",
          "Chạy",
          "Mẹ",
          "Vui vẻ"
        ],
        "correctAnswer": "Nhưng",
        "explanation": "Quan hệ từ 'nhưng'."
      },
      {
        "id": "vn24-s2",
        "prompt": "'Họ' là đại từ ngôi thứ mấy?",
        "options": [
          "Ngôi thứ ba",
          "Ngôi thứ nhất",
          "Ngôi thứ hai",
          "Không có ngôi"
        ],
        "correctAnswer": "Ngôi thứ ba",
        "explanation": "Ngôi thứ ba số nhiều."
      },
      {
        "id": "vn24-s3",
        "prompt": "Có công mài sắt, có ngày nên ...:",
        "options": [
          "Kim",
          "Kéo",
          "Đao",
          "Chày"
        ],
        "correctAnswer": "Kim",
        "explanation": "Nên kim."
      }
    ]
  },
  "vn-b25": {
    "practiceQuestions": [
      {
        "id": "vn25-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Bài thơ 'Tiếng đàn ba-la-lai-ca trên sông Đà' là sáng tác của nhà thơ nào?",
        "options": [
          "Quang Huy",
          "Nguyễn Đình Thi",
          "Huy Cận",
          "Tố Hữu"
        ],
        "correctAnswer": "Quang Huy",
        "hint": "Nhà thơ viết về công trình thủy điện sông Đà vĩ đại.",
        "explanation": "Tác giả của bài thơ là nhà thơ Quang Huy."
      },
      {
        "id": "vn25-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Đàn ba-la-lai-ca là nhạc cụ truyền thống của đất nước nào?",
        "options": [
          "Nước Nga",
          "Việt Nam",
          "Pháp",
          "Nhật Bản"
        ],
        "correctAnswer": "Nước Nga",
        "hint": "Cây đàn 3 dây hình tam giác nổi tiếng của xứ sở bạch dương Nga.",
        "explanation": "Cây đàn ba-la-lai-ca là nhạc cụ dân gian độc đáo của nước Nga."
      },
      {
        "id": "vn25-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khung cảnh đêm trăng trên công trình thủy điện sông Đà được miêu tả như thế nào?",
        "options": [
          "Vừa tĩnh mịch huyền ảo, vừa kỳ vĩ với những khối sắt thép khổng lồ nằm ngủ say dưới ánh trăng",
          "Ồn ào náo loạn vì các loại máy xúc đang hoạt động",
          "Trời mưa bão sấm sét kinh hoàng",
          "Tối tăm không một bóng trăng sao"
        ],
        "correctAnswer": "Vừa tĩnh mịch huyền ảo, vừa kỳ vĩ với những khối sắt thép khổng lồ nằm ngủ say dưới ánh trăng",
        "hint": "'Trên sông Đà một đêm trăng chơi vơi / Tháp khoan nhô lên trời ngẫm nghĩ...'",
        "explanation": "Cảnh đêm trăng tĩnh lặng, thơ mộng bên đại công trình thế kỷ kỳ vĩ."
      },
      {
        "id": "vn25-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tiếng đàn của cô gái Nga cất lên trong đêm trăng mang ý nghĩa gì?",
        "options": [
          "Gợi niềm lạc quan, tình hữu nghị quốc tế cao đẹp và sự hòa quyện giữa con người với thiên nhiên",
          "Báo hiệu công trường sắp dừng hoạt động",
          "Nỗi buồn nhớ nhà không thể nguôi ngoai",
          "Tiếng gọi cấp cứu trong đêm"
        ],
        "correctAnswer": "Gợi niềm lạc quan, tình hữu nghị quốc tế cao đẹp và sự hòa quyện giữa con người với thiên nhiên",
        "hint": "Âm thanh tiếng đàn nối nhịp cầu hữu nghị Việt - Xô và niềm tin tương lai tươi sáng.",
        "explanation": "Biểu tượng của tình hữu nghị, niềm tin yêu cuộc sống và khát vọng hòa bình."
      },
      {
        "id": "vn25-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hình ảnh nhân hóa nào dưới đây xuất hiện trong bài thơ?",
        "options": [
          "Tháp khoan nhô lên trời ngẫm nghĩ / Những xe ủi, xe ben sóng vai nhau nằm nghỉ",
          "Sông Đà có chiều dài hơn năm trăm cây số",
          "Đập thủy điện được đúc bằng bê tông cốt thép",
          "Công nhân ngủ trong khu lán trại"
        ],
        "correctAnswer": "Tháp khoan nhô lên trời ngẫm nghĩ / Những xe ủi, xe ben sóng vai nhau nằm nghỉ",
        "hint": "Tháp khoan 'ngẫm nghĩ', xe ủi, xe ben 'nằm nghỉ' như những con người sau ngày lao động miệt mài.",
        "explanation": "Nhân hóa máy móc công trường biết suy nghĩ, biết nghỉ ngơi."
      },
      {
        "id": "vn25-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khổ thơ cuối bài thơ mở ra viễn cảnh tươi đẹp nào của đất nước trong tương lai?",
        "options": [
          "Dòng điện sông Đà bừng sáng muôn phương, thắp sáng cả đất trời Tổ quốc",
          "Sông Đà sẽ cạn khô nước",
          "Các thợ thuyền sẽ về nước hết",
          "Rừng núi Tây Bắc chìm trong bóng tối"
        ],
        "correctAnswer": "Dòng điện sông Đà bừng sáng muôn phương, thắp sáng cả đất trời Tổ quốc",
        "hint": "'Ngày mai chiếc đập lớn nối liền hai bờ sông / Biển sẽ ngập tràn ánh sáng...'",
        "explanation": "Khát vọng ngày mai dòng điện bừng sáng mang lại phồn vinh cho đất nước."
      },
      {
        "id": "vn25-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nét độc đáo trong nghệ thuật xây dựng hình ảnh của bài thơ là gì?",
        "options": [
          "Sự hòa quyện tuyệt vời giữa chất thép hào hùng của công trường hiện đại với chất thơ lãng mạn của âm nhạc và trăng đêm",
          "Chỉ tập trung miêu tả số liệu kỹ thuật đập thủy điện",
          "Bài thơ hoàn toàn không có vần điệu",
          "Sử dụng ngôn ngữ cổ điển cung đình xưa"
        ],
        "correctAnswer": "Sự hòa quyện tuyệt vời giữa chất thép hào hùng của công trường hiện đại với chất thơ lãng mạn của âm nhạc và trăng đêm",
        "hint": "Sự kết hợp nhuần nhuyễn giữa hiện thực lao động vĩ đại và vẻ đẹp tâm hồn bay bổng.",
        "explanation": "Hòa quyện kỳ diệu giữa chất thép (công trường vĩ đại) và chất tình (tiếng đàn, ánh trăng)."
      },
      {
        "id": "vn25-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Cụm từ 'biển sẽ bừng lên ánh sáng' trong câu thơ cuối mang nghĩa biểu tượng gì?",
        "options": [
          "Biển hồ sông Đà tích nước phát điện thắp sáng tương lai giàu mạnh của non sông Việt Nam",
          "Mặt trời mọc ngoài biển Đông",
          "Ánh đèn pha của tàu đánh cá trên biển",
          "Sấm chớp đánh xuống mặt hồ"
        ],
        "correctAnswer": "Biển hồ sông Đà tích nước phát điện thắp sáng tương lai giàu mạnh của non sông Việt Nam",
        "hint": "Hồ thủy điện mênh mông như biển nước mang nguồn năng lượng ánh sáng tỏa đi muôn nơi.",
        "explanation": "Biểu tượng dòng năng lượng điện tương lai thắp sáng sự nghiệp công nghiệp hóa đất nước."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn25-s1",
        "prompt": "Đàn ba-la-lai-ca là nhạc cụ của nước nào?",
        "options": [
          "Nước Nga",
          "Nước Pháp",
          "Việt Nam",
          "Mỹ"
        ],
        "correctAnswer": "Nước Nga",
        "explanation": "Nước Nga."
      },
      {
        "id": "vn25-s2",
        "prompt": "Nhà máy thủy điện Hòa Bình được xây trên sông nào?",
        "options": [
          "Sông Đà",
          "Sông Hồng",
          "Sông Hương",
          "Sông Cửu Long"
        ],
        "correctAnswer": "Sông Đà",
        "explanation": "Sông Đà."
      },
      {
        "id": "vn25-s3",
        "prompt": "Hình ảnh 'tháp khoan ngẫm nghĩ' là biện pháp:",
        "options": [
          "Nhân hóa",
          "So sánh",
          "Điệp từ",
          "Nói quá"
        ],
        "correctAnswer": "Nhân hóa",
        "explanation": "Nhân hóa."
      }
    ]
  },
  "vn-b26": {
    "practiceQuestions": [
      {
        "id": "vn26-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Cặp quan hệ từ nào dưới đây biểu thị quan hệ 'Nguyên nhân - Kết quả'?",
        "options": [
          "Vì... nên...",
          "Nếu... thì...",
          "Tuy... nhưng...",
          "Chẳng những... mà còn..."
        ],
        "correctAnswer": "Vì... nên...",
        "hint": "'Vì' dẫn ra nguyên nhân, 'nên' dẫn ra kết quả.",
        "explanation": "'Vì... nên...' biểu thị quan hệ nguyên nhân - kết quả."
      },
      {
        "id": "vn26-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Cặp quan hệ từ nào dưới đây biểu thị quan hệ 'Tương phản (đối lập)'?",
        "options": [
          "Tuy... nhưng...",
          "Do... nên...",
          "Hễ... thì...",
          "Không những... mà còn..."
        ],
        "correctAnswer": "Tuy... nhưng...",
        "hint": "Vế sau có kết quả trái ngược với dự đoán thông thường ở vế trước.",
        "explanation": "'Tuy... nhưng...' biểu thị quan hệ tương phản."
      },
      {
        "id": "vn26-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cặp quan hệ từ trong câu: 'Nếu trời không mưa thì lớp ta sẽ đi dã ngoại' biểu thị quan hệ:",
        "options": [
          "Giả thiết (điều kiện) - kết quả",
          "Nguyên nhân - kết quả",
          "Tương phản",
          "Tăng tiến"
        ],
        "correctAnswer": "Giả thiết (điều kiện) - kết quả",
        "hint": "'Nếu' đặt ra giả thiết, 'thì' dẫn ra kết quả sẽ xảy ra.",
        "explanation": "Biểu thị quan hệ điều kiện (giả thiết) - kết quả."
      },
      {
        "id": "vn26-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cặp quan hệ từ 'Chẳng những... mà còn...' biểu thị mối quan hệ gì giữa các vế câu?",
        "options": [
          "Tăng tiến",
          "Tương phản",
          "Nguyên nhân - kết quả",
          "Lựa chọn"
        ],
        "correctAnswer": "Tăng tiến",
        "hint": "Nội dung vế sau nâng cao hơn, vượt trội hơn nội dung vế trước.",
        "explanation": "'Chẳng những... mà còn...' biểu thị quan hệ tăng tiến."
      },
      {
        "id": "vn26-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Điền cặp quan hệ từ thích hợp vào câu: '... Nam học giỏi ... bạn ấy còn rất khiêm tốn.'",
        "options": [
          "Không những... mà...",
          "Tuy... nhưng...",
          "Vì... nên...",
          "Nếu... thì..."
        ],
        "correctAnswer": "Không những... mà...",
        "hint": "Hai đức tính tốt bổ sung và nâng cao cho nhau (tăng tiến).",
        "explanation": "Cặp từ tăng tiến 'Không những... mà...' làm nổi bật phẩm chất toàn diện."
      },
      {
        "id": "vn26-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chọn cặp quan hệ từ thích hợp để hoàn thiện câu: '... nhà rất xa trường ... bạn Mai không bao giờ đi học muộn.'",
        "options": [
          "Mặc dù... nhưng...",
          "Nhờ... nên...",
          "Tại... cho nên...",
          "Nếu... thì..."
        ],
        "correctAnswer": "Mặc dù... nhưng...",
        "hint": "Khoảng cách xa (khó khăn) đối lập với việc luôn đúng giờ (nghị lực).",
        "explanation": "Cặp từ 'Mặc dù... nhưng...' thể hiện sự vượt khó vươn lên."
      },
      {
        "id": "vn26-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Câu nào dưới đây sử dụng SAI cặp quan hệ từ?",
        "options": [
          "Mặc dù trời mưa to nên đường bị ngập lụt",
          "Nhờ chăm chỉ học tập nên Lan đã đạt danh hiệu học sinh xuất sắc",
          "Tuy tuổi đã cao nhưng bà vẫn đọc sách không cần kính",
          "Hễ gió thổi mạnh thì cánh diều lại bay vút lên cao"
        ],
        "correctAnswer": "Mặc dù trời mưa to nên đường bị ngập lụt",
        "hint": "'Mặc dù' (tương phản) không thể đi đôi với 'nên' (kết quả). Phải dùng 'Vì... nên...'.",
        "explanation": "Dùng sai quan hệ từ 'Mặc dù', phải sửa lại là 'Vì trời mưa to nên...'"
      },
      {
        "id": "vn26-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Viết lại câu sau bằng cách dùng cặp từ hô ứng tăng tiến để câu văn trang trọng hơn: 'Bác Hồ yêu nước và Bác Hồ thương dân vô bờ bến.'",
        "options": [
          "Bác Hồ không những yêu nước nồng nàn mà Người còn thương dân vô bờ bến.",
          "Tuy Bác Hồ yêu nước nhưng Bác thương dân.",
          "Vì Bác Hồ yêu nước nên Bác thương dân.",
          "Nếu Bác Hồ yêu nước thì Bác thương dân."
        ],
        "correctAnswer": "Bác Hồ không những yêu nước nồng nàn mà Người còn thương dân vô bờ bến.",
        "hint": "Sử dụng cặp quan hệ từ tăng tiến 'Không những... mà còn...' kết hợp đại từ thay thế 'Người'.",
        "explanation": "Cách viết giàu sắc thái tăng tiến tôn vinh nhân cách vĩ đại của Bác."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn26-s1",
        "prompt": "'Vì... nên...' chỉ mối quan hệ:",
        "options": [
          "Nguyên nhân - kết quả",
          "Tương phản",
          "Điều kiện",
          "Tăng tiến"
        ],
        "correctAnswer": "Nguyên nhân - kết quả",
        "explanation": "Nguyên nhân - kết quả."
      },
      {
        "id": "vn26-s2",
        "prompt": "'Không chỉ... mà còn...' chỉ quan hệ:",
        "options": [
          "Tăng tiến",
          "Tương phản",
          "Điều kiện",
          "Nguyên nhân"
        ],
        "correctAnswer": "Tăng tiến",
        "explanation": "Tăng tiến."
      },
      {
        "id": "vn26-s3",
        "prompt": "Điền vào chỗ trống: Mặc dù... ...:",
        "options": [
          "Nhưng",
          "Nên",
          "Thì",
          "Mà"
        ],
        "correctAnswer": "Nhưng",
        "explanation": "Mặc dù... nhưng..."
      }
    ]
  },
  "vn-b27": {
    "practiceQuestions": [
      {
        "id": "vn27-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Làng Hồ (làng Đông Hồ) nổi tiếng với nghề truyền thống gì của dân tộc?",
        "options": [
          "Vẽ và in tranh dân gian",
          "Dệt lụa tơ tằm",
          "Làm đồ gốm sứ",
          "Đúc đồng"
        ],
        "correctAnswer": "Vẽ và in tranh dân gian",
        "hint": "Tranh khắc gỗ dân gian Đông Hồ nổi tiếng gắn liền với Tết cổ truyền.",
        "explanation": "Tranh dân gian Đông Hồ (làng Hồ thuộc tỉnh Bắc Ninh)."
      },
      {
        "id": "vn27-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Tranh làng Hồ được in trên loại giấy truyền thống đặc biệt nào?",
        "options": [
          "Giấy điệp",
          "Giấy báo",
          "Giấy xi măng",
          "Giấy cát-tông"
        ],
        "correctAnswer": "Giấy điệp",
        "hint": "Giấy dó quét bột vỏ sò điệp nghiền mịn lấp lánh như dát bạc.",
        "explanation": "Giấy điệp óng ánh vỏ sò điệp là nét độc đáo của tranh Đông Hồ."
      },
      {
        "id": "vn27-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Màu sắc trong tranh làng Hồ được tạo nên từ những nguyên liệu tự nhiên nào?",
        "options": [
          "Màu đen từ than rơm rạ, màu trắng từ vỏ điệp, màu vàng từ hoa hòe, màu đỏ từ gỗ vang",
          "Màu hóa học nhập khẩu từ châu Âu",
          "Màu nước công nghiệp đóng trong lọ",
          "Sơn dầu tổng hợp"
        ],
        "correctAnswer": "Màu đen từ than rơm rạ, màu trắng từ vỏ điệp, màu vàng từ hoa hòe, màu đỏ từ gỗ vang",
        "hint": "Màu sắc dân dã thuần khiết chắt lọc từ cây cỏ, đất đá làng quê Việt Nam.",
        "explanation": "Màu sắc thuần túy thiên nhiên cỏ cây tạo nên hồn tranh mộc mạc, bền màu."
      },
      {
        "id": "vn27-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Những bức tranh nào của làng Hồ được tác giả ca ngợi là thể hiện sự ấm no, sung túc?",
        "options": [
          "Tranh đàn lợn con bên lợn mẹ có khoáy âm dương và tranh đàn gà mẹ con tíu tít",
          "Tranh phong cảnh rừng tuyết rơi",
          "Tranh các hiệp sĩ đánh nhau",
          "Tranh những con tàu vũ trụ"
        ],
        "correctAnswer": "Tranh đàn lợn con bên lợn mẹ có khoáy âm dương và tranh đàn gà mẹ con tíu tít",
        "hint": "Hình ảnh con lợn xoáy âm dương, con gà đất nước biểu trưng cho sự sinh sôi tài lộc.",
        "explanation": "Tranh 'Lợn nái', 'Gà mẹ con' tượng trưng cho sự ấm no, sinh sôi thịnh vượng."
      },
      {
        "id": "vn27-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Vì sao tác giả gọi các nghệ nhân dân gian làng Hồ là 'những người nghệ sĩ tạo hình của nhân dân'?",
        "options": [
          "Vì họ đã đưa những nét sinh hoạt bình dị, hồn hậu của người nông dân vào tranh bằng tài năng nghệ thuật tinh tế",
          "Vì họ được đào tạo tại các học viện nước ngoài",
          "Vì họ vẽ tranh bán giá rất đắt",
          "Vì tranh của họ chỉ để trưng bày trong bảo tàng"
        ],
        "correctAnswer": "Vì họ đã đưa những nét sinh hoạt bình dị, hồn hậu của người nông dân vào tranh bằng tài năng nghệ thuật tinh tế",
        "hint": "Họ xuất thân từ nhân dân lao động và sáng tạo nghệ thuật phục vụ nhân dân.",
        "explanation": "Họ thổi hồn dân tộc bình dị, tươi sáng vào từng bản khắc gỗ dân gian."
      },
      {
        "id": "vn27-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'thuần phác' dùng để chỉ nét đẹp gì của tranh làng Hồ?",
        "options": [
          "Vẻ đẹp mộc mạc, chân thật, giản dị mà đằm thắm hồn quê",
          "Sự phức tạp, rắc rối khó hiểu",
          "Vẻ đẹp lộng lẫy xa hoa quý tộc",
          "Sự cầu kỳ kiểu cách phương Tây"
        ],
        "correctAnswer": "Vẻ đẹp mộc mạc, chân thật, giản dị mà đằm thắm hồn quê",
        "hint": "'Thuần' là trong sáng, 'phác' là chất phác, mộc mạc.",
        "explanation": "Vẻ đẹp chất phác, đậm đà phong vị dân tộc Việt Nam."
      },
      {
        "id": "vn27-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Tình cảm của tác giả thể hiện xuyên suốt bài văn 'Tranh làng Hồ' là gì?",
        "options": [
          "Lòng yêu mến say mê, niềm tự hào và lòng tri ân sâu sắc đối với di sản văn hóa dân tộc",
          "Sự phê phán vì màu tranh quá đơn giản",
          "Chỉ muốn mua tranh về bán lại kiếm lời",
          "Coi tranh dân gian đã lạc hậu không còn giá trị"
        ],
        "correctAnswer": "Lòng yêu mến say mê, niềm tự hào và lòng tri ân sâu sắc đối với di sản văn hóa dân tộc",
        "hint": "Tác giả trân trọng từng nét vẽ, từng vệt vỏ điệp lấp lánh hồn quê cha ông.",
        "explanation": "Niềm tự hào thiết tha với tinh hoa nghệ thuật truyền thống của cha ông."
      },
      {
        "id": "vn27-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Để giữ gìn và phát huy giá trị tranh dân gian Đông Hồ trong cuộc sống hôm nay, việc làm nào sau đây có ý nghĩa nhất?",
        "options": [
          "Quảng bá giá trị nghệ thuật dân gian, đưa tranh vào đời sống văn hóa và truyền dạy nghề cho thế hệ trẻ",
          "Thay toàn bộ giấy điệp bằng giấy in vi tính",
          "Không in tranh Đông Hồ nữa vì lỗi thời",
          "Chỉ vẽ bằng màu sơn xịt công nghiệp"
        ],
        "correctAnswer": "Quảng bá giá trị nghệ thuật dân gian, đưa tranh vào đời sống văn hóa và truyền dạy nghề cho thế hệ trẻ",
        "hint": "Bảo tồn kỹ thuật thủ công tinh xảo và truyền lửa đam mê cho thế hệ tương lai.",
        "explanation": "Bảo tồn di sản cha ông, phát huy tinh hoa văn hóa dân tộc trường tồn cùng thời gian."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn27-s1",
        "prompt": "Màu trắng trong tranh Đông Hồ làm từ:",
        "options": [
          "Vỏ sò điệp",
          "Vôi bột",
          "Bột mì",
          "Đá vôi"
        ],
        "correctAnswer": "Vỏ sò điệp",
        "explanation": "Vỏ điệp óng ánh."
      },
      {
        "id": "vn27-s2",
        "prompt": "Tranh 'Lợn nái' có xoáy tròn gọi là xoáy:",
        "options": [
          "Âm dương",
          "Gió lốc",
          "Mặt trời",
          "Hoa sen"
        ],
        "correctAnswer": "Âm dương",
        "explanation": "Khoáy âm dương."
      },
      {
        "id": "vn27-s3",
        "prompt": "Làng tranh Đông Hồ thuộc tỉnh nào?",
        "options": [
          "Bắc Ninh",
          "Hà Nội",
          "Nam Định",
          "Hải Dương"
        ],
        "correctAnswer": "Bắc Ninh",
        "explanation": "Bắc Ninh."
      }
    ]
  },
  "vn-b28": {
    "practiceQuestions": [
      {
        "id": "vn28-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Bố cục của một bài văn tả người gồm có mấy phần?",
        "options": [
          "3 phần: Mở bài, Thân bài, Kết bài",
          "2 phần",
          "4 phần",
          "1 phần duy nhất"
        ],
        "correctAnswer": "3 phần: Mở bài, Thân bài, Kết bài",
        "hint": "Cấu trúc 3 phần quen thuộc của bài văn miêu tả.",
        "explanation": "Gồm 3 phần: Mở bài, Thân bài, Kết bài."
      },
      {
        "id": "vn28-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Trong phần Thân bài tả người, người viết thường miêu tả những phương diện nào?",
        "options": [
          "Tả ngoại hình (vóc dáng, khuôn mặt, mái tóc, nụ cười...) kết hợp tả tính tình và hoạt động",
          "Chỉ tả bộ quần áo người đó mặc",
          "Chỉ kể ngày sinh nhật của người đó",
          "Tả phong cảnh xung quanh nơi người đó ở"
        ],
        "correctAnswer": "Tả ngoại hình (vóc dáng, khuôn mặt, mái tóc, nụ cười...) kết hợp tả tính tình và hoạt động",
        "hint": "Ngoại hình thể hiện vẻ bên ngoài, tính tình và hoạt động bộc lộ phẩm chất bên trong.",
        "explanation": "Kết hợp hài hòa giữa tả ngoại hình và tả hoạt động, tính nết."
      },
      {
        "id": "vn28-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khi tả ngoại hình của một em bé mẫu giáo bụ bẫm, chi tiết nào sau đây là phù hợp nhất?",
        "options": [
          "Đôi má phúng phính ửng hồng như hai trái táo chín, nụ cười chúm chím đáng yêu",
          "Mái tóc bạc phơ như mây trắng",
          "Đôi bàn tay gầy gộc in hằn nếp nhăn thời gian",
          "Gương mặt đăm chiêu suy nghĩ việc đại sự"
        ],
        "correctAnswer": "Đôi má phúng phính ửng hồng như hai trái táo chín, nụ cười chúm chím đáng yêu",
        "hint": "Nét ngây thơ, bụ bẫm, hồng hào đặc trưng của trẻ thơ.",
        "explanation": "Chi tiết tả đôi má phúng phính, miệng cười chúm chím đúng với vẻ đẹp em bé."
      },
      {
        "id": "vn28-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khi tả hoạt động của bác nông dân trên đồng ruộng, ta nên tập trung vào những động từ nào?",
        "options": [
          "Cúi khom lưng, thoăn thoắt cấy lúa, quệt giọt mồ hôi trên trán",
          "Gõ bàn phím vi tính, ký tài liệu",
          "Cầm micro ca hát trên sân khấu",
          "Ngồi yên bất động đọc sách"
        ],
        "correctAnswer": "Cúi khom lưng, thoăn thoắt cấy lúa, quệt giọt mồ hôi trên trán",
        "hint": "Hành động lao động vất vả mà nhịp nhàng của người làm nông nghiệp.",
        "explanation": "Các động từ chỉ hoạt động cấy lúa, quệt mồ hôi đặc trưng cho bác nông dân."
      },
      {
        "id": "vn28-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Để bài văn tả người không bị trùng lặp giống người khác, ta cần chú ý:",
        "options": [
          "Chọn lọc những nét tiêu biểu, độc đáo, riêng biệt nhất của nhân vật định tả",
          "Tả tất cả các bộ phận từ chân đến đầu theo danh sách",
          "Sao chép các bài văn mẫu điểm cao",
          "Tả người nào cũng giống như hoa hậu"
        ],
        "correctAnswer": "Chọn lọc những nét tiêu biểu, độc đáo, riêng biệt nhất của nhân vật định tả",
        "hint": "Mỗi người có một ánh mắt, nụ cười, giọng nói và thói quen rất riêng.",
        "explanation": "Chọn chi tiết tiêu biểu tạo nên nét riêng độc đáo của nhân vật."
      },
      {
        "id": "vn28-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Phần Kết bài trong bài văn tả người thường nêu nội dung gì?",
        "options": [
          "Bày tỏ tình cảm, lòng biết ơn, kính yêu và những lời hứa của bản thân đối với người được tả",
          "Giới thiệu họ tên và năm sinh của người đó",
          "Kể một câu chuyện cổ tích",
          "Tả hàm răng của người đó"
        ],
        "correctAnswer": "Bày tỏ tình cảm, lòng biết ơn, kính yêu và những lời hứa của bản thân đối với người được tả",
        "hint": "Lắng đọng tình cảm và ước mong tốt đẹp dành cho người mình yêu quý.",
        "explanation": "Bộc lộ tình cảm sâu sắc và sự gắn bó với người được miêu tả."
      },
      {
        "id": "vn28-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Đoạn văn sau tả nét đẹp nào của người mẹ: 'Đôi bàn tay mẹ chai sần vì năm tháng dãi dầu mưa nắng, nhưng khi bàn tay ấy âu yếm xoa đầu em, em cảm thấy ấm áp lạ kỳ.'?",
        "options": [
          "Khắc họa tình yêu thương, đức hy sinh tảo tần vì con cái qua hình ảnh đôi bàn tay chai sạn",
          "Chỉ tả kích thước bàn tay mẹ",
          "Chê bàn tay mẹ thô ráp",
          "Tả chiếc nhẫn mẹ đeo"
        ],
        "correctAnswer": "Khắc họa tình yêu thương, đức hy sinh tảo tần vì con cái qua hình ảnh đôi bàn tay chai sạn",
        "hint": "Đôi tay vất vả hy sinh nhưng ấm áp tình mẫu tử thiêng liêng.",
        "explanation": "Chi tiết nghệ thuật giàu sức gợi về sự hy sinh cao cả của mẹ hiền."
      },
      {
        "id": "vn28-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Một bài văn tả người thành công là bài văn:",
        "options": [
          "Làm hiện lên sống động trước mắt người đọc hình ảnh người đó cả về diện mạo lẫn vẻ đẹp tâm hồn",
          "Có độ dài nhiều trang giấy nhất",
          "Dùng toàn từ ngữ Hán Việt khó hiểu",
          "Chỉ miêu tả quần áo giầy dép hàng hiệu"
        ],
        "correctAnswer": "Làm hiện lên sống động trước mắt người đọc hình ảnh người đó cả về diện mạo lẫn vẻ đẹp tâm hồn",
        "hint": "Hòa quyện diện mạo bên ngoài và chiều sâu nhân cách bên trong nhân vật.",
        "explanation": "Khắc họa chân thực diện mạo và lay động lòng người bởi vẻ đẹp tâm hồn nhân vật."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn28-s1",
        "prompt": "Khi tả người, hai phần chính của Thân bài là:",
        "options": [
          "Tả ngoại hình và tả hoạt động",
          "Mở bài và kết bài",
          "Kể chuyện và hát",
          "Hỏi và đáp"
        ],
        "correctAnswer": "Tả ngoại hình và tả hoạt động",
        "explanation": "Ngoại hình và tính tình hoạt động."
      },
      {
        "id": "vn28-s2",
        "prompt": "Mái tóc hoa râm là đặc điểm ngoại hình của:",
        "options": [
          "Người lớn tuổi, người già",
          "Em bé sơ sinh",
          "Thanh niên",
          "Học sinh lớp 5"
        ],
        "correctAnswer": "Người lớn tuổi, người già",
        "explanation": "Người cao tuổi."
      },
      {
        "id": "vn28-s3",
        "prompt": "Từ nào gợi tả nụ cười rạng rỡ của cô giáo?",
        "options": [
          "Hiền hậu, rạng rỡ",
          "Nhăn nhó",
          "U sầu",
          "Khó chịu"
        ],
        "correctAnswer": "Hiền hậu, rạng rỡ",
        "explanation": "Nụ cười hiền hậu."
      }
    ]
  },
  "vn-b29": {
    "practiceQuestions": [
      {
        "id": "vn29-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Dân ca quan họ là làn điệu dân ca truyền thống nổi tiếng của vùng đất nào?",
        "options": [
          "Vùng Kinh Bắc (Bắc Ninh - Bắc Giang)",
          "Miền Tây Nam Bộ",
          "Tây Bắc",
          "Tây Nguyên"
        ],
        "correctAnswer": "Vùng Kinh Bắc (Bắc Ninh - Bắc Giang)",
        "hint": "Quê hương của các liền anh, liền chị quan họ duyên dáng bên dòng sông Cầu.",
        "explanation": "Dân ca quan họ bắt nguồn từ vùng Kinh Bắc (Bắc Ninh, Bắc Giang)."
      },
      {
        "id": "vn29-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Người hát dân ca quan họ nam và nữ được gọi trân trọng là gì?",
        "options": [
          "Liền anh và liền chị",
          "Ca sĩ và nhạc công",
          "Nghệ nhân và thợ may",
          "Thầy giáo và cô giáo"
        ],
        "correctAnswer": "Liền anh và liền chị",
        "hint": "Cách xưng hô truyền thống thân tình, đậm đà bản sắc lễ nghi quan họ.",
        "explanation": "Được gọi là 'liền anh' (nam) và 'liền chị' (nữ)."
      },
      {
        "id": "vn29-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Khi hát quan họ, các liền anh liền chị thường mặc trang phục truyền thống nào?",
        "options": [
          "Liền chị mặc áo tứ thân, chèo nón quai thao; liền anh mặc áo the khăn xếp che ô",
          "Mặc âu phục comple cà vạt hiện đại",
          "Mặc trang phục dạ hội phương Tây",
          "Mặc quần áo thể thao năng động"
        ],
        "correctAnswer": "Liền chị mặc áo tứ thân, chèo nón quai thao; liền anh mặc áo the khăn xếp che ô",
        "hint": "Trang phục dân tộc tao nhã, kín đáo và vô cùng duyên dáng của người Kinh Bắc.",
        "explanation": "Áo tứ thân, nón quai thao (nữ) và áo the khăn xếp (nam) là biểu tượng quan họ."
      },
      {
        "id": "vn29-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Đặc trưng nổi bật của cách hát dân ca quan họ là kỹ thuật:",
        "options": [
          "Vang, rền, nền, nảy mượt mà đượm tình",
          "Hát gào thét thật to",
          "Hát thì thầm không ra tiếng",
          "Đọc thơ nhanh như nhạc rap"
        ],
        "correctAnswer": "Vang, rền, nền, nảy mượt mà đượm tình",
        "hint": "Bốn tiêu chuẩn kỹ thuật luyện giọng tinh túy: vang, rền, nền, nảy.",
        "explanation": "Kỹ thuật 'vang, rền, nền, nảy' tạo nên nét mượt mà, da diết độc nhất vô nhị."
      },
      {
        "id": "vn29-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Bài ca quan họ nổi tiếng thể hiện lòng mến khách tha thiết khi chia tay là bài nào?",
        "options": [
          "Người ơi người ở đừng về",
          "Trống cơm",
          "Bèo dạt mây trôi",
          "Lý cây đa"
        ],
        "correctAnswer": "Người ơi người ở đừng về",
        "hint": "Khúc hát dùng dằng lưu luyến tiễn bạn của người quan họ.",
        "explanation": "'Người ơi người ở đừng về' là đỉnh cao của tình cảm tri kỷ, hiếu khách."
      },
      {
        "id": "vn29-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Tổ chức UNESCO đã vinh danh Dân ca quan họ Bắc Ninh là:",
        "options": [
          "Di sản văn hóa phi vật thể đại diện của nhân loại",
          "Di sản thiên nhiên thế giới",
          "Kỳ quan kiến trúc",
          "Môn thể thao truyền thống"
        ],
        "correctAnswer": "Di sản văn hóa phi vật thể đại diện của nhân loại",
        "hint": "Được quốc tế công nhận là kiệt tác văn hóa truyền khẩu của nhân loại năm 2009.",
        "explanation": "Được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại."
      },
      {
        "id": "vn29-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Việc các bạn nhỏ hào hứng tham gia các lớp tập hát quan họ ở quê hương mang ý nghĩa:",
        "options": [
          "Gìn giữ ngọn lửa truyền thống, tiếp nối và trao truyền di sản cha ông cho thế hệ mai sau",
          "Để kiếm được nhiều tiền từ việc đi hát",
          "Bắt buộc theo nội quy nhà trường",
          "Chỉ để tham gia một buổi liên hoan cho vui"
        ],
        "correctAnswer": "Gìn giữ ngọn lửa truyền thống, tiếp nối và trao truyền di sản cha ông cho thế hệ mai sau",
        "hint": "Trao truyền báu vật văn hóa tinh thần của cha ông cho thế hệ trẻ hôm nay.",
        "explanation": "Ý thức trao truyền và bảo tồn di sản văn hóa phi vật thể của dân tộc."
      },
      {
        "id": "vn29-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Lời ca quan họ không chỉ là lời hát mà còn phản ánh nét đẹp gì trong tính cách con người Việt Nam?",
        "options": [
          "Tấm lòng nhân hậu, tinh tế, lịch thiệp, trọng tình nghĩa và hiếu khách sâu sắc",
          "Tính cách phô trương hình thức",
          "Sự lạnh lùng, xa cách",
          "Sự vội vàng hấp tấp"
        ],
        "correctAnswer": "Tấm lòng nhân hậu, tinh tế, lịch thiệp, trọng tình nghĩa và hiếu khách sâu sắc",
        "hint": "Lời ăn tiếng nói mộc mạc mà thanh nhã, thủy chung son sắt.",
        "explanation": "Đó là kết tinh vẻ đẹp ứng xử nho nhã, trọng nghĩa trọng tình của con người đất Việt."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn29-s1",
        "prompt": "Dân ca quan họ là đặc sản của vùng:",
        "options": [
          "Kinh Bắc",
          "Nam Bộ",
          "Tây Bắc",
          "Duyên hải miền Trung"
        ],
        "correctAnswer": "Kinh Bắc",
        "explanation": "Vùng Kinh Bắc."
      },
      {
        "id": "vn29-s2",
        "prompt": "Chiếc nón đặc trưng của liền chị quan họ là nón:",
        "options": [
          "Quai thao",
          "Bài thơ",
          "Lá cọ",
          "Chóp nhọn"
        ],
        "correctAnswer": "Quai thao",
        "explanation": "Nón quai thao."
      },
      {
        "id": "vn29-s3",
        "prompt": "Bốn kỹ thuật hát quan họ: Vang, rền, nền, ...:",
        "options": [
          "Nảy",
          "Hát",
          "Ngâm",
          "Reo"
        ],
        "correctAnswer": "Nảy",
        "explanation": "Vang, rền, nền, nảy."
      }
    ]
  },
  "vn-b30": {
    "practiceQuestions": [
      {
        "id": "vn30-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ ngữ nào dưới đây chỉ các môn nghệ thuật?",
        "options": [
          "Hội họa, âm nhạc, điêu khắc, sân khấu, điện ảnh",
          "Toán học, vật lý, hóa học",
          "Bóng đá, bơi lội, điền kinh",
          "Nấu ăn, may vá, giặt giũ"
        ],
        "correctAnswer": "Hội họa, âm nhạc, điêu khắc, sân khấu, điện ảnh",
        "hint": "Các ngành nghệ thuật sáng tạo cái đẹp phục vụ đời sống tinh thần con người.",
        "explanation": "Hội họa, âm nhạc, điêu khắc, sân khấu, điện ảnh là các ngành nghệ thuật."
      },
      {
        "id": "vn30-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Người sáng tác các tác phẩm âm nhạc được gọi là gì?",
        "options": [
          "Nhạc sĩ",
          "Họa sĩ",
          "Nhà văn",
          "Điêu khắc gia"
        ],
        "correctAnswer": "Nhạc sĩ",
        "hint": "Người viết nên các giai điệu, khúc ca.",
        "explanation": "Nhạc sĩ là người sáng tác tác phẩm âm nhạc."
      },
      {
        "id": "vn30-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Nhóm từ nào dưới đây gồm các từ chỉ người hoạt động nghệ thuật?",
        "options": [
          "Diễn viên, ca sĩ, nghệ sĩ, họa sĩ, nhà biên kịch",
          "Bác sĩ, y tá, dược sĩ",
          "Kỹ sư, công nhân, thợ mỏ",
          "Giáo viên, hiệu trưởng, thanh tra"
        ],
        "correctAnswer": "Diễn viên, ca sĩ, nghệ sĩ, họa sĩ, nhà biên kịch",
        "hint": "Những người trực tiếp tham gia sáng tạo và biểu diễn nghệ thuật.",
        "explanation": "Các danh từ chỉ người hoạt động trong lĩnh vực nghệ thuật."
      },
      {
        "id": "vn30-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ ngữ nào dùng để ca ngợi một tác phẩm nghệ thuật có giá trị xuất sắc vượt thời gian?",
        "options": [
          "Kiệt tác, tuyệt tác",
          "Bình thường",
          "Tạm được",
          "Hàng chợ"
        ],
        "correctAnswer": "Kiệt tác, tuyệt tác",
        "hint": "Tác phẩm nghệ thuật hoàn hảo, đạt đến đỉnh cao thẩm mỹ.",
        "explanation": "'Kiệt tác', 'tuyệt tác' chỉ những tác phẩm nghệ thuật đỉnh cao vô giá."
      },
      {
        "id": "vn30-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'điêu khắc' là môn nghệ thuật tạo hình bằng cách nào?",
        "options": [
          "Đục đẽo, chạm trổ trên đá, gỗ hoặc nặn, đúc bằng đất sét, đồng",
          "Dùng bút lông vẽ trên giấy",
          "Hát múa theo điệu nhạc",
          "Quay phim chiếu trên màn ảnh"
        ],
        "correctAnswer": "Đục đẽo, chạm trổ trên đá, gỗ hoặc nặn, đúc bằng đất sét, đồng",
        "hint": "Tạo nên các pho tượng, bức phù điêu 3 chiều.",
        "explanation": "Điêu khắc là nghệ thuật tạo hình khối trong không gian 3 chiều."
      },
      {
        "id": "vn30-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Chọn từ ngữ thích hợp điền vào câu: 'Tiếng đàn bầu cất lên nghe thật ... làm lay động lòng người.'",
        "options": [
          "Du dương, da diết",
          "Chói tai",
          "Ầm ĩ",
          "Lộn xộn"
        ],
        "correctAnswer": "Du dương, da diết",
        "hint": "Từ gợi cảm miêu tả âm thanh ngọt ngào, sâu lắng của cây đàn bầu.",
        "explanation": "'Du dương, da diết' gợi tả âm thanh âm nhạc truyền cảm sâu sắc."
      },
      {
        "id": "vn30-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nghệ thuật sân khấu truyền thống độc đáo gắn liền với vùng nông nghiệp lúa nước Việt Nam là:",
        "options": [
          "Múa rối nước",
          "Kịch nói hiện đại",
          "Ba-lê phương Tây",
          "Xiếc thú"
        ],
        "correctAnswer": "Múa rối nước",
        "hint": "Sân khấu mặt nước, chú Tễu điều khiển con rối lội nước.",
        "explanation": "Múa rối nước là nghệ thuật dân gian độc nhất vô nhị sinh ra từ đồng lúa nước Việt Nam."
      },
      {
        "id": "vn30-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Vai trò của nghệ thuật trong đời sống con người là gì?",
        "options": [
          "Làm phong phú tâm hồn, bồi đắp tình cảm thẩm mỹ và nâng cao đời sống tinh thần của xã hội",
          "Chỉ để giết thời gian khi rảnh rỗi",
          "Không có vai trò gì quan trọng bằng vật chất",
          "Gây tốn kém lãng phí thời gian"
        ],
        "correctAnswer": "Làm phong phú tâm hồn, bồi đắp tình cảm thẩm mỹ và nâng cao đời sống tinh thần của xã hội",
        "hint": "Nghệ thuật hướng con người tới cái Đẹp, Chân - Thiện - Mỹ.",
        "explanation": "Nghệ thuật nuôi dưỡng tâm hồn và nâng đỡ nhân cách con người hướng thiện."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn30-s1",
        "prompt": "Người vẽ tranh được gọi là:",
        "options": [
          "Họa sĩ",
          "Nhạc sĩ",
          "Điêu khắc gia",
          "Đạo diễn"
        ],
        "correctAnswer": "Họa sĩ",
        "explanation": "Họa sĩ."
      },
      {
        "id": "vn30-s2",
        "prompt": "Người biểu diễn ca khúc trên sân khấu là:",
        "options": [
          "Ca sĩ",
          "Biên kịch",
          "Họa sĩ",
          "Bác sĩ"
        ],
        "correctAnswer": "Ca sĩ",
        "explanation": "Ca sĩ."
      },
      {
        "id": "vn30-s3",
        "prompt": "Một tác phẩm nghệ thuật đỉnh cao gọi là:",
        "options": [
          "Kiệt tác",
          "Tập nháp",
          "Đồ dùng",
          "Bản sao"
        ],
        "correctAnswer": "Kiệt tác",
        "explanation": "Kiệt tác."
      }
    ]
  },
  "vn-b31": {
    "practiceQuestions": [
      {
        "id": "vn31-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Chú Tễu là nhân vật trung tâm trong môn nghệ thuật dân gian nào?",
        "options": [
          "Múa rối nước",
          "Hát tuồng",
          "Hát chèo",
          "Hát ca trù"
        ],
        "correctAnswer": "Múa rối nước",
        "hint": "Nhân vật rối nước dẫn chuyện dí dỏm, ngộ nghĩnh trên thủy đình.",
        "explanation": "Chú Tễu là linh hồn dẫn chuyện của nghệ thuật múa rối nước."
      },
      {
        "id": "vn31-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Ngoại hình của chú Tễu được khắc họa như thế nào?",
        "options": [
          "Thân hình tròn trĩnh, cởi trần đóng khố, môi cười toe toét, hai tay vung vẩy vui vẻ",
          "Bộ râu dài bạc phơ, mặc áo gấm trang nghiêm",
          "Mặc áo giáp sắt cầm khiên và gươm giáo",
          "Mặc áo vét đen đeo kính cận"
        ],
        "correctAnswer": "Thân hình tròn trĩnh, cởi trần đóng khố, môi cười toe toét, hai tay vung vẩy vui vẻ",
        "hint": "Vẻ đẹp chất phác, hồn nhiên, đầy tinh thần lạc quan của người nông dân.",
        "explanation": "Hình tượng chú Tễu mập mạp, đóng khố, miệng cười rạng rỡ thân quen."
      },
      {
        "id": "vn31-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Vai trò của chú Tễu trong mỗi buổi biểu diễn múa rối nước là gì?",
        "options": [
          "Làm người dẫn chuyện, mở màn chào hỏi khán giả, tạo tiếng cười dí dỏm và bình luận sự việc",
          "Đứng im một góc làm cảnh",
          "Chỉ hát những bài buồn bã",
          "Làm nhiệm vụ bán vé cho khách"
        ],
        "correctAnswer": "Làm người dẫn chuyện, mở màn chào hỏi khán giả, tạo tiếng cười dí dỏm và bình luận sự việc",
        "hint": "Chú Tễu xuất hiện đầu tiên phá tan không khí im ắng bằng tràng cười sảng khoái.",
        "explanation": "Người dẫn chuyện thông minh, dí dỏm kết nối các tích trò sân khấu nước."
      },
      {
        "id": "vn31-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Từ 'Tễu' trong tiếng Nôm cổ có nghĩa là gì?",
        "options": [
          "Tiếng cười, sự vui nhộn hài hước",
          "Người lính dũng cảm",
          "Nhà thông thái",
          "Ông vua"
        ],
        "correctAnswer": "Tiếng cười, sự vui nhộn hài hước",
        "hint": "'Tễu' gắn liền với sự vui tính, hay cười hay nói, mang lại niềm vui.",
        "explanation": "'Tễu' có gốc nghĩa là tiếng cười giòn giã, người đem lại niềm vui."
      },
      {
        "id": "vn31-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Sân khấu biểu diễn múa rối nước đặc biệt ở chỗ nào?",
        "options": [
          "Được biểu diễn ngay trên mặt nước ao hồ (hoặc thủy đình), các nghệ nhân ngâm mình sau tấm mành để điều khiển",
          "Biểu diễn trên sân khấu rạp hát thông thường",
          "Biểu diễn trên đường phố",
          "Biểu diễn trên đồi cát"
        ],
        "correctAnswer": "Được biểu diễn ngay trên mặt nước ao hồ (hoặc thủy đình), các nghệ nhân ngâm mình sau tấm mành để điều khiển",
        "hint": "Nghệ thuật tận dụng ao làng, mặt nước làm sân khấu sống động.",
        "explanation": "Thủy đình trên mặt nước với hệ thống sào, dây ngầm điều khiển con rối tài tình."
      },
      {
        "id": "vn31-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Hình tượng chú Tễu đại diện cho phẩm chất nào của người nông dân Việt Nam xưa?",
        "options": [
          "Tinh thần lạc quan yêu đời, sự thông minh, hóm hỉnh vượt lên mọi gian khó nhọc nhằn",
          "Sự cam chịu yếu hèn",
          "Tính cách kiêu ngạo tự cao",
          "Sự u buồn tuyệt vọng"
        ],
        "correctAnswer": "Tinh thần lạc quan yêu đời, sự thông minh, hóm hỉnh vượt lên mọi gian khó nhọc nhằn",
        "hint": "Nụ cười chú Tễu là nụ cười chiến thắng gian khó của người lao động Việt Nam.",
        "explanation": "Biểu tượng cho tinh thần lạc quan, yêu đời và tiếng cười trí tuệ dân gian."
      },
      {
        "id": "vn31-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Con rối chú Tễu thường được các nghệ nhân tạc từ loại gỗ nào để có thể nổi tốt trên mặt nước?",
        "options": [
          "Gỗ cây sung",
          "Gỗ lim",
          "Gỗ sắt",
          "Gỗ trắc"
        ],
        "correctAnswer": "Gỗ cây sung",
        "hint": "Gỗ nhẹ, dễ đục đẽo, nổi tốt trên nước và mang ý nghĩa sung túc ấm no.",
        "explanation": "Gỗ sung nhẹ, dai và nổi tốt trên nước, rất bền khi ngâm nước ngọt."
      },
      {
        "id": "vn31-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Nghệ thuật múa rối nước và nhân vật chú Tễu là niềm tự hào của dân tộc ta vì:",
        "options": [
          "Là một loại hình nghệ thuật sân khấu nước độc nhất vô nhị trên toàn thế giới do người Việt Nam sáng tạo",
          "Có từ trước khi loài người xuất hiện",
          "Dễ làm không cần luyện tập gì",
          "Được du nhập hoàn toàn từ nước ngoài"
        ],
        "correctAnswer": "Là một loại hình nghệ thuật sân khấu nước độc nhất vô nhị trên toàn thế giới do người Việt Nam sáng tạo",
        "hint": "Sáng tạo độc quyền tuyệt đỉnh từ nền văn minh lúa nước sông Hồng.",
        "explanation": "Di sản nghệ thuật vô giá mang đậm bản sắc độc đáo của dân tộc Việt Nam."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn31-s1",
        "prompt": "Chú Tễu là nhân vật của môn nghệ thuật:",
        "options": [
          "Múa rối nước",
          "Hát chèo",
          "Xiếc",
          "Múa lân"
        ],
        "correctAnswer": "Múa rối nước",
        "explanation": "Múa rối nước."
      },
      {
        "id": "vn31-s2",
        "prompt": "Sân khấu múa rối nước gọi là:",
        "options": [
          "Thủy đình",
          "Sân cỏ",
          "Sàn đấu",
          "Hội trường"
        ],
        "correctAnswer": "Thủy đình",
        "explanation": "Thủy đình trên mặt nước."
      },
      {
        "id": "vn31-s3",
        "prompt": "Con rối thường được đục từ gỗ cây:",
        "options": [
          "Cây sung",
          "Cây bàng",
          "Cây tre",
          "Cây thông"
        ],
        "correctAnswer": "Cây sung",
        "explanation": "Gỗ sung."
      }
    ]
  },
  "vn-b32": {
    "practiceQuestions": [
      {
        "id": "vn32-q1",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ nào dưới đây đồng nghĩa với từ 'bảo vệ'?",
        "options": [
          "Giữ gìn",
          "Phá hoại",
          "Xâm phạm",
          "Bỏ rơi"
        ],
        "correctAnswer": "Giữ gìn",
        "hint": "Cùng chung ý nghĩa chăm sóc, ngăn chặn sự tổn hại.",
        "explanation": "'Giữ gìn' đồng nghĩa với 'bảo vệ'."
      },
      {
        "id": "vn32-q2",
        "level": 1,
        "levelName": "Khởi động",
        "type": "multiple_choice",
        "prompt": "Từ 'lá' trong câu nào dưới đây được dùng theo NGHĨA CHUYỂN?",
        "options": [
          "Lá cờ đỏ sao vàng bay phấp phới",
          "Cây bàng rụng những chiếc lá đỏ",
          "Bé nhặt chiếc lá rụng trên sân",
          "Mùa thu lá vàng rơi xào xạc"
        ],
        "correctAnswer": "Lá cờ đỏ sao vàng bay phấp phới",
        "hint": "Nghĩa gốc của lá là bộ phận của cây cối mọc từ cành, thân.",
        "explanation": "'Lá cờ', 'lá phổi', 'lá gan' là các nghĩa chuyển theo hình dáng."
      },
      {
        "id": "vn32-q3",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Cặp quan hệ từ trong câu: 'Mặc dù trời rét buốt nhưng các em học sinh vùng cao vẫn chăm chỉ đến trường' biểu thị quan hệ:",
        "options": [
          "Tương phản",
          "Nguyên nhân - kết quả",
          "Điều kiện - kết quả",
          "Tăng tiến"
        ],
        "correctAnswer": "Tương phản",
        "hint": "'Mặc dù... nhưng...' biểu thị sự đối lập giữa hoàn cảnh và ý chí vượt khó.",
        "explanation": "Quan hệ tương phản đối lập."
      },
      {
        "id": "vn32-q4",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Trong câu: 'Nam là học sinh gương mẫu, bạn ấy luôn giúp đỡ mọi người', từ 'bạn ấy' là:",
        "options": [
          "Đại từ thay thế",
          "Danh từ riêng",
          "Quan hệ từ",
          "Tính từ"
        ],
        "correctAnswer": "Đại từ thay thế",
        "hint": "Thay cho 'Nam' để không bị lặp từ.",
        "explanation": "'Bạn ấy' là đại từ thay thế cho danh từ riêng 'Nam'."
      },
      {
        "id": "vn32-q5",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Phần Thân bài của bài văn tả người cần kết hợp miêu tả:",
        "options": [
          "Ngoại hình tiêu biểu kết hợp với tính tình và hoạt động thường ngày",
          "Chỉ tả khuôn mặt người đó",
          "Chỉ tả quần áo người đó mặc",
          "Kể lại gia phả họ hàng của người đó"
        ],
        "correctAnswer": "Ngoại hình tiêu biểu kết hợp với tính tình và hoạt động thường ngày",
        "hint": "Sự kết hợp làm nổi bật cả vóc dáng bên ngoài lẫn phẩm chất bên trong.",
        "explanation": "Kết hợp hài hòa giữa tả ngoại hình và tính tình, hoạt động."
      },
      {
        "id": "vn32-q6",
        "level": 2,
        "levelName": "Vững vàng",
        "type": "multiple_choice",
        "prompt": "Câu nào dưới đây sử dụng biện pháp nhân hóa tạo nên vẻ đẹp sống động cho cảnh vật?",
        "options": [
          "Mặt trời thức giấc, mỉm cười rạng rỡ tỏa muôn vàn tia nắng ấm xuống trần gian",
          "Mặt trời mọc lúc sáu giờ sáng",
          "Mặt trời là ngôi sao ở tâm Hệ Mặt Trời",
          "Ánh nắng mặt trời cung cấp vitamin D"
        ],
        "correctAnswer": "Mặt trời thức giấc, mỉm cười rạng rỡ tỏa muôn vàn tia nắng ấm xuống trần gian",
        "hint": "Mặt trời biết 'thức giấc', biết 'mỉm cười rạng rỡ'.",
        "explanation": "Nhân hóa mặt trời như một người bạn thân thương mỉm cười chào ngày mới."
      },
      {
        "id": "vn32-q7",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Trong đoạn văn: 'Bác Hồ đã dành trọn cuộc đời vì nước vì dân. Người đã hi sinh cả hạnh phúc riêng tư để mang lại độc lập cho Tổ quốc.' Từ 'Người' được viết hoa nhằm mục đích gì?",
        "options": [
          "Thể hiện lòng tôn kính, biết ơn sâu sắc đối với vị lãnh tụ vĩ đại của dân tộc",
          "Vì là chữ đầu câu",
          "Quy tắc ngữ pháp bắt buộc cho mọi đại từ",
          "Viết hoa ngẫu nhiên"
        ],
        "correctAnswer": "Thể hiện lòng tôn kính, biết ơn sâu sắc đối với vị lãnh tụ vĩ đại của dân tộc",
        "hint": "Đại từ chỉ Bác Hồ được viết hoa để biểu thị sự kính trọng đặc biệt.",
        "explanation": "Viết hoa đại từ 'Người' biểu lộ sự tôn kính tuyệt đối với Chủ tịch Hồ Chí Minh."
      },
      {
        "id": "vn32-q8",
        "level": 3,
        "levelName": "Thử thách",
        "type": "multiple_choice",
        "prompt": "Bốn chủ điểm học trong chương trình Tiếng Việt 5 Học kì 1 đã mở ra cho học sinh những chân trời nào?",
        "options": [
          "Thế giới tuổi thơ tươi đẹp, Thiên nhiên kì thú, Con đường học tập vinh quang và Nghệ thuật muôn màu của dân tộc",
          "Cách giải toán và đo diện tích",
          "Các quy tắc thể thao Olympic",
          "Kỹ thuật lập trình máy tính"
        ],
        "correctAnswer": "Thế giới tuổi thơ tươi đẹp, Thiên nhiên kì thú, Con đường học tập vinh quang và Nghệ thuật muôn màu của dân tộc",
        "hint": "Hệ thống 4 chủ điểm lớn bồi đắp tâm hồn, tri thức và tình yêu đất nước trong kì 1.",
        "explanation": "Bốn chủ điểm kì 1 xây dựng nhân cách, tình yêu quê hương và niềm tự hào dân tộc sâu sắc."
      }
    ],
    "speedQuestions": [
      {
        "id": "vn32-s1",
        "prompt": "Cặp từ trái nghĩa trong câu 'Chân cứng đá mềm':",
        "options": [
          "Cứng - Mềm",
          "Chân - Đá",
          "Chân - Cứng",
          "Đá - Mềm"
        ],
        "correctAnswer": "Cứng - Mềm",
        "explanation": "Cứng và mềm."
      },
      {
        "id": "vn32-s2",
        "prompt": "'Không chỉ... mà còn...' là cặp từ chỉ quan hệ:",
        "options": [
          "Tăng tiến",
          "Tương phản",
          "Nguyên nhân",
          "Điều kiện"
        ],
        "correctAnswer": "Tăng tiến",
        "explanation": "Tăng tiến."
      },
      {
        "id": "vn32-s3",
        "prompt": "Từ nào sau đây là từ tượng hình?",
        "options": [
          "Gập ghềnh",
          "Ào ào",
          "Rầm rầm",
          "Líu lo"
        ],
        "correctAnswer": "Gập ghềnh",
        "explanation": "Gập ghềnh gợi tả hình ảnh gồ ghề dốc đá."
      }
    ]
  }
};

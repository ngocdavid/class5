import { Lesson } from '../types';

export const vietnameseLessons: Lesson[] = [
  {
    id: 'vn-tu-dong-nghia',
    subject: 'vietnamese',
    volume: 1,
    lessonNumber: 3,
    title: 'Luyện từ và câu: Từ đồng nghĩa',
    unit: 'Chủ điểm 1: Thế giới tuổi thơ',
    estimatedMinutes: 35,
    tagline: 'Khác chữ mà cùng nghĩa - bí quyết viết văn không bị lặp từ!',
    mascotGreeting: 'Chào bạn! Muốn viết văn tả cảnh thật hay mà không bị lặp từ? Hãy để Rô-bốt bật mí bí mật của Từ đồng nghĩa nhé!',
    guide: {
      storyIntro: 'Ở miền Bắc gọi người sinh ra mình là "Mẹ", miền Nam gọi là "Má", miền Trung có nơi gọi là "U" hay "Bầm". Các từ này tuy viết khác nhau nhưng đều chỉ một người thân thương nhất!',
      coreFormulaOrRule: 'Từ đồng nghĩa là những từ có nghĩa GIỐNG NHAU hoặc GẦN GIỐNG NHAU. Gồm 2 loại: Đồng nghĩa hoàn toàn (thay thế được cho nhau) và Đồng nghĩa không hoàn toàn (phải chọn đúng ngữ cảnh).',
      steps: [
        {
          stepNumber: 1,
          title: 'Hiểu nghĩa của từ',
          description: 'Đặt từ vào câu cụ thể để xem từ đó đang miêu tả hành động, tính chất hay đồ vật gì.',
          example: '"Mênh mông" và "Bao la" đều gợi tả không gian rộng lớn.',
          badge: 'Hiểu nghĩa'
        },
        {
          stepNumber: 2,
          title: 'Thử thay thế xem có xuôi tai không',
          description: 'Thử đổi hai từ cho nhau trong câu. Nếu câu vẫn giữ nguyên ý và tự nhiên thì đó là từ đồng nghĩa hoàn toàn.',
          example: '"Mẹ nấu cơm" = "Má nấu cơm" (Đồng nghĩa hoàn toàn).',
          badge: 'Thử thay'
        },
        {
          stepNumber: 3,
          title: 'Chọn từ tinh tế theo sắc thái',
          description: 'Chú ý cảm xúc và sắc thái biểu cảm để chọn từ đắt giá nhất khi viết văn.',
          example: 'Chim "chết", nhưng người anh hùng thì "hi sinh" (thể hiện lòng kính trọng).',
          badge: 'Chọn lọc'
        }
      ],
      commonMistakes: [
        {
          title: 'Thay thế bừa bãi không xem sắc thái tình cảm',
          mistake: 'Dùng từ "chết" trong câu "Các chiến sĩ đã chết vì Tổ quốc".',
          whyWrong: 'Từ "chết" không thể hiện được sự tôn kính đối với người có công lớn với đất nước.',
          howToFix: 'Dùng từ "hi sinh" để bày tỏ lòng biết ơn và sự trang trọng.'
        },
        {
          title: 'Nhầm từ đồng nghĩa với từ trái nghĩa',
          mistake: 'Nghĩ rằng "chăm chỉ" và "lười biếng" là từ đồng nghĩa.',
          whyWrong: 'Hai từ này có ý nghĩa ngược chiều nhau.',
          howToFix: 'Từ đồng nghĩa với "chăm chỉ" phải là: "cần cù", "chịu khó", "siêng năng".'
        }
      ],
      pocketCheatSheet: [
        'Từ đồng nghĩa: Khác cách viết - Cùng hoặc gần giống ý nghĩa',
        'Đồng nghĩa hoàn toàn: Quả dứa = Quả thơm; Mẹ = Má; Tàu hỏa = Xe lửa',
        'Đồng nghĩa có sắc thái: hi sinh / qua đời / chết (khác mức độ tôn kính)',
        'Mẹo làm văn: Thay thế từ đồng nghĩa để bài văn không bị lặp từ nhàm chán'
      ]
    },
    practiceQuestions: [
      {
        id: 'vn-tdn-q1',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Cặp từ nào dưới đây là cặp từ ĐỒNG NGHĨA HOÀN TOÀN?',
        options: [
          'Mẹ - Má',
          'Chăm chỉ - Lười biếng',
          'To lớn - Tí hon',
          'Đen nhánh - Trắng tinh'
        ],
        correctAnswer: 'Mẹ - Má',
        hint: 'Hai từ này đều dùng để gọi người mẹ thân yêu và có thể đổi chỗ cho nhau.',
        explanation: '"Mẹ" và "Má" là hai từ cùng nghĩa, chỉ khác nhau theo vùng miền (Bắc - Nam), có thể thay thế hoàn toàn cho nhau.'
      },
      {
        id: 'vn-tdn-q2',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Từ nào sau đây ĐỒNG NGHĨA với từ "chăm chỉ"?',
        options: ['Cần cù', 'Thông minh', 'Dũng cảm', 'Nhanh nhẹn'],
        correctAnswer: 'Cần cù',
        hint: 'Tìm từ miêu tả tính kiên trì, chịu khó làm việc của một người.',
        explanation: '"Cần cù" và "chăm chỉ" đều mang ý nghĩa chịu khó, kiên trì làm việc đều đặn.'
      },
      {
        id: 'vn-tdn-q3',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Chọn từ thích hợp nhất điền vào chỗ chấm: "Bác Hồ kính yêu đã ... cả cuộc đời cho sự nghiệp giải phóng dân tộc."',
        options: ['hi sinh', 'bỏ rơi', 'mất mát', 'lãng phí'],
        correctAnswer: 'hi sinh',
        hint: 'Cần một từ trang trọng, thể hiện lòng biết ơn sâu sắc đối với vị lãnh tụ.',
        explanation: 'Từ "hi sinh" mang sắc thái trang trọng, thể hiện sự cống hiến cao cả của Bác Hồ cho đất nước.'
      },
      {
        id: 'vn-tdn-q4',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Dãy từ nào sau đây gồm toàn các từ đồng nghĩa chỉ màu xanh?',
        options: [
          'Xanh biếc, xanh ngắt, xanh rờn, xanh lam',
          'Xanh biếc, đỏ rực, vàng óng, tím ngắt',
          'Xanh xao, trắng bệch, hồng hào, thâm tím',
          'Xanh biếc, cao vút, mênh mông, bát ngát'
        ],
        correctAnswer: 'Xanh biếc, xanh ngắt, xanh rờn, xanh lam',
        hint: 'Kiểm tra xem tất cả các từ trong đáp án có cùng mang sắc thái màu xanh không nhé!',
        explanation: 'Tất cả các từ "xanh biếc, xanh ngắt, xanh rờn, xanh lam" đều là từ đồng nghĩa chỉ các sắc độ khác nhau của màu xanh.'
      },
      {
        id: 'vn-tdn-q5',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Trong câu "Cánh đồng lúa rộng mênh mông.", từ nào có thể THAY THẾ cho từ "mênh mông" mà nghĩa không đổi?',
        options: ['Bao la', 'Chật hẹp', 'Cao vút', 'Thăm thẳm'],
        correctAnswer: 'Bao la',
        hint: 'Từ nào miêu tả không gian rộng lớn đến tận chân trời?',
        explanation: '"Bao la" và "mênh mông" là hai từ đồng nghĩa tả không gian rộng lớn bằng phẳng như cánh đồng, biển cả.'
      },
      {
        id: 'vn-tdn-q6',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Câu nào dưới đây sử dụng từ đồng nghĩa CHƯA HỢP LÝ về mặt sắc thái biểu cảm?',
        options: [
          'Bác nông dân đang mang vác bao lúa nặng trĩu.',
          'Chú cún con đã hi sinh sau một trận ốm nặng.',
          'Các chú bộ đội dũng cảm bảo vệ biên cương.',
          'Cây bàng trước sân trường tỏa bóng mát rượi.'
        ],
        correctAnswer: 'Chú cún con đã hi sinh sau một trận ốm nặng.',
        hint: 'Từ "hi sinh" chỉ dùng cho con người có cống hiến cao đẹp, không dùng cho vật nuôi.',
        explanation: 'Với con vật (chú cún con) bị ốm chết, chỉ dùng từ "chết", không dùng từ "hi sinh".'
      }
    ],
    speedQuestions: [
      {
        id: 'vn-tdn-s1',
        prompt: 'Từ đồng nghĩa với "thông minh" là:',
        options: ['Sáng dạ', 'Khỏe mạnh', 'Nhanh chân', 'Thật thà'],
        correctAnswer: 'Sáng dạ',
        explanation: '"Sáng dạ" nghĩa là tiếp thu nhanh, đồng nghĩa với "thông minh".'
      },
      {
        id: 'vn-tdn-s2',
        prompt: '"Quả thơm" ở miền Nam chính là quả gì ở miền Bắc?',
        options: ['Quả dứa', 'Quả chuối', 'Quả ổi', 'Quả xoài'],
        correctAnswer: 'Quả dứa',
        explanation: 'Quả dứa và quả thơm (hoặc khóm) là các từ đồng nghĩa địa phương chỉ cùng một loại quả.'
      },
      {
        id: 'vn-tdn-s3',
        prompt: 'Tác dụng lớn nhất của việc dùng từ đồng nghĩa khi viết văn là:',
        options: ['Giúp bài văn tránh lặp từ và giàu cảm xúc', 'Làm câu dài hơn', 'Làm cho người đọc khó hiểu', 'Tăng số lượng trang viết'],
        correctAnswer: 'Giúp bài văn tránh lặp từ và giàu cảm xúc',
        explanation: 'Dùng từ đồng nghĩa linh hoạt giúp lời văn sinh động, mượt mà và biểu cảm hơn.'
      }
    ]
  },
  {
    id: 'vn-tu-dong-am-nhieu-nghia',
    subject: 'vietnamese',
    volume: 1,
    lessonNumber: 5,
    title: 'Luyện từ và câu: Từ nhiều nghĩa & Từ đồng âm',
    unit: 'Chủ điểm 1: Thế giới tuổi thơ',
    estimatedMinutes: 35,
    tagline: 'Phân biệt siêu dễ: Cùng họ hàng (nhiều nghĩa) hay người dưng trùng tên (đồng âm)?',
    mascotGreeting: 'Đây là bài học mà 90% các bạn học sinh hay nhầm nhất! Nhìn sơ đồ so sánh hình ảnh bên dưới là bạn phân biệt được ngay!',
    guide: {
      storyIntro: 'Nam thắc mắc: "Tại sao chân bàn, chân núi và chân người đều gọi là chân? Thế còn con đỗ quyên đậu trên cành cây ăn chè đỗ thì từ đỗ có giống nhau không?" Rô-bốt chỉ cho Nam sơ đồ so sánh cực dễ hiểu bên dưới:',
      illustrationType: 'homophone-vs-polysemy',
      coreFormulaOrRule: '• Từ nhiều nghĩa: Chung một gốc nghĩa, có nét tương đồng (nghĩa gốc ➔ nghĩa chuyển).\n• Từ đồng âm: Đọc giống nhau nhưng nghĩa HOÀN TOÀN KHÁC NHAU, không có chút liên quan nào.',
      steps: [
        {
          stepNumber: 1,
          title: 'Đọc kĩ nghĩa của từng từ',
          description: 'Xem từ đó trong mỗi câu cụ thể đang mang ý nghĩa gì.',
          example: 'Câu A: Bé đau "chân". Câu B: Kê lại "chân" bàn.',
          badge: 'Soi nghĩa'
        },
        {
          stepNumber: 2,
          title: 'Tìm "mối quan hệ họ hàng" (Nét tương đồng)',
          description: 'Hỏi xem: Hai nghĩa này có nét gì giống nhau về hình dáng, vị trí hoặc tác dụng không?',
          example: '"Chân người" và "chân bàn" đều ở vị trí DƯỚI CÙNG và có tác dụng ĐỠ thân mình ➔ Có họ hàng ➔ TỪ NHIỀU NGHĨA.',
          badge: 'Tìm họ hàng'
        },
        {
          stepNumber: 3,
          title: 'Kết luận chính xác',
          description: 'Nếu CÓ nét tương đồng ➔ Từ nhiều nghĩa. Nếu HOÀN TOÀN KHÔNG LIÊN QUAN (người dưng) ➔ Từ đồng âm.',
          example: '"Đỗ" (thi đỗ) và hạt "đỗ" (đậu xanh) ➔ Không liên quan ➔ TỪ ĐỒNG ÂM.',
          badge: 'Chốt đáp án'
        }
      ],
      commonMistakes: [
        {
          title: 'Nhầm từ đồng âm thành từ nhiều nghĩa',
          mistake: 'Nghĩ rằng "con ruồi đậu" và "xôi đậu" là từ nhiều nghĩa vì cùng viết là "đậu".',
          whyWrong: 'Hành động "đậu" (dừng lại) và "hạt đậu" (thực vật) không có chút điểm chung nào.',
          howToFix: 'Nếu hai từ hoàn toàn xa lạ về nghĩa, chỉ tình cờ phát âm giống nhau thì ĐÓ LÀ TỪ ĐỒNG ÂM.'
        },
        {
          title: 'Quên xác định nghĩa gốc',
          mistake: 'Nghĩ "mũi dao" là nghĩa gốc.',
          whyWrong: 'Nghĩa gốc của "mũi" là bộ phận trên mặt người/động vật dùng để thở và ngửi. "Mũi dao", "mũi thuyền" là nghĩa chuyển dựa vào đầu nhọn.',
          howToFix: 'Nghĩa gốc thường là nghĩa xuất hiện đầu tiên, gắn liền với cơ thể con người hoặc hiện tượng tự nhiên.'
        }
      ],
      pocketCheatSheet: [
        'Mẹo nhớ Rô-bốt: CÓ họ hàng = NHIỀU NGHĨA; KHÔNG họ hàng = ĐỒNG ÂM',
        'Từ nhiều nghĩa: mắt người - mắt na; mũi người - mũi kéo; ăn cơm - tàu ăn than',
        'Từ đồng âm: kho cá - nhà kho; đường đi - đường cát ngọt; đá bóng - hòn đá'
      ]
    },
    practiceQuestions: [
      {
        id: 'vn-tam-q1',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Từ "chân" trong "chân núi" được dùng theo nghĩa gì?',
        options: ['Nghĩa chuyển', 'Nghĩa gốc', 'Từ đồng âm', 'Nghĩa bóng vô nghĩa'],
        correctAnswer: 'Nghĩa chuyển',
        hint: '"Chân núi" là phần dưới cùng tiếp giáp mặt đất, mượn đặc điểm vị trí nâng đỡ của chân người.',
        explanation: '"Chân người" là nghĩa gốc. "Chân núi", "chân bàn" là nghĩa chuyển vì cùng chung đặc điểm vị trí dưới cùng.'
      },
      {
        id: 'vn-tam-q2',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Cặp câu nào dưới đây có từ "đá" là TỪ ĐỒNG ÂM?',
        options: [
          'Bạn Nam đá bóng. / Bác thợ xây đẽo hòn đá.',
          'Bé bị ngã đau chân. / Cái chân ghế bị lung lay.',
          'Em có đôi mắt sáng. / Quả na mở mắt.',
          'Mùa thu lá vàng rụng. / Lòng em xao xuyến thu về.'
        ],
        correctAnswer: 'Bạn Nam đá bóng. / Bác thợ xây đẽo hòn đá.',
        hint: 'Một từ là hành động dùng chân tác động vào vật, một từ là khoáng vật tự nhiên cứng rắn (không liên quan nghĩa).',
        explanation: '"Đá bóng" (động từ) và "hòn đá" (danh từ) hoàn toàn không có nét chung nào về nghĩa ➔ Là từ đồng âm.'
      },
      {
        id: 'vn-tam-q3',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Từ "ăn" trong câu nào dưới đây được dùng theo NGHĨA GỐC?',
        options: [
          'Hôm nay cả nhà em ăn cơm rất vui vẻ.',
          'Tàu hỏa đang vào ga ăn than.',
          'Chiếc thuyền này ăn nước rất sâu.',
          'Hai màu áo này rất ăn ý với nhau.'
        ],
        correctAnswer: 'Hôm nay cả nhà em ăn cơm rất vui vẻ.',
        hint: 'Nghĩa gốc của "ăn" là hành vi nhai và nuốt thức ăn vào dạ dày để nuôi cơ thể.',
        explanation: '"Ăn cơm" là việc nhai nuốt thức ăn của người/động vật ➔ Nghĩa gốc. Các trường hợp còn lại đều là nghĩa chuyển.'
      },
      {
        id: 'vn-tam-q4',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Trong câu thơ: "Ruồi đậu mâm xôi đậu / Kiến bò đĩa thịt bò", các cặp từ "đậu - đậu" và "bò - bò" là:',
        options: ['Từ đồng âm', 'Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ trái nghĩa'],
        correctAnswer: 'Từ đồng âm',
        hint: '"đậu" (hành động dừng lại) với "xôi đậu" (hạt đỗ); "bò" (hành động di chuyển) với "thịt bò" (loài vật).',
        explanation: 'Đây là câu đố chữ dân gian kinh điển về TỪ ĐỒNG ÂM, phát âm giống hệt nhau nhưng nghĩa hoàn toàn khác biệt.'
      },
      {
        id: 'vn-tam-q5',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Từ "mũi" trong trường hợp nào dưới đây có nét tương đồng về HÌNH DÁNG ĐẦU NHỌN với mũi người?',
        options: ['Mũi thuyền', 'Mũi tiêm', 'Mũi Cà Mau', 'Cả 3 trường hợp trên'],
        correctAnswer: 'Cả 3 trường hợp trên',
        hint: 'Mũi thuyền, mũi tiêm, mũi Cà Mau đều có đầu nhọn nhô ra phía trước.',
        explanation: 'Cả 3 từ đều là nghĩa chuyển của từ "mũi", dựa trên đặc điểm hình dạng có phần đầu nhọn nhô ra phía trước.'
      },
      {
        id: 'vn-tam-q6',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Xác định mối quan hệ giữa từ "ngọt" trong hai câu sau:\n(1) Quả cam này rất ngọt.\n(2) Cô giáo em có giọng nói rất ngọt ngào.',
        options: [
          'Là từ nhiều nghĩa (chuyển nghĩa theo cảm giác dễ chịu)',
          'Là từ đồng âm (trùng phát âm ngẫu nhiên)',
          'Là từ trái nghĩa hoàn toàn',
          'Không có mối quan hệ nào'
        ],
        correctAnswer: 'Là từ nhiều nghĩa (chuyển nghĩa theo cảm giác dễ chịu)',
        hint: 'Vị ngọt ở lưỡi tạo cảm giác dễ chịu, giọng nói êm ái cũng tạo cho tai cảm giác êm dịu, dễ chịu.',
        explanation: 'Từ "ngọt" được chuyển nghĩa theo phương thức ẩn dụ cảm giác (từ vị giác của lưỡi sang thính giác của tai) ➔ Từ nhiều nghĩa.'
      }
    ],
    speedQuestions: [
      {
        id: 'vn-tam-s1',
        prompt: 'Từ có các nghĩa có liên quan với nhau được gọi là:',
        options: ['Từ nhiều nghĩa', 'Từ đồng âm', 'Từ đồng nghĩa', 'Từ ghép'],
        correctAnswer: 'Từ nhiều nghĩa',
        explanation: 'Từ nhiều nghĩa là từ có một nghĩa gốc và một hay nhiều nghĩa chuyển có mối liên hệ với nhau.'
      },
      {
        id: 'vn-tam-s2',
        prompt: '"Con ngựa đang chạy." và "Đồng hồ chạy rất đúng giờ." Từ "chạy" là:',
        options: ['Từ nhiều nghĩa', 'Từ đồng âm', 'Từ trái nghĩa', 'Từ đơn'],
        correctAnswer: 'Từ nhiều nghĩa',
        explanation: 'Cùng gợi tả sự chuyển động nhanh, đều đặn ➔ nghĩa chuyển của "chạy".'
      },
      {
        id: 'vn-tam-s3',
        prompt: '"Cây cầu bắc qua sông." và "Bé chơi cầu lông." Từ "cầu" là:',
        options: ['Từ đồng âm', 'Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ láy'],
        correctAnswer: 'Từ đồng âm',
        explanation: 'Cây cầu (công trình giao thông) và quả cầu lông (dụng cụ thể thao) không liên quan gì đến nhau.'
      }
    ]
  },
  {
    id: 'vn-doc-hieu-bai-1',
    subject: 'vietnamese',
    volume: 1,
    lessonNumber: 1,
    title: 'Đọc hiểu: Thanh âm của gió',
    unit: 'Chủ điểm 1: Thế giới tuổi thơ',
    estimatedMinutes: 35,
    tagline: 'Lắng nghe giai điệu thiên nhiên tuổi thơ qua tiếng gió reo!',
    mascotGreeting: 'Chào bạn! Bạn đã bao giờ nghe thấy tiếng gió thổi qua bụi tre hay rặng phi lao chưa? Hãy ngắm nhìn bức tranh làng quê và cùng đọc nhé!',
    guide: {
      storyIntro: 'Bài đọc mở đầu cho năm học lớp 5 trong SGK Kết nối tri thức đưa chúng ta về với đồng quê yên bình, nơi tiếng gió không chỉ là cơn gió mát mà như một bản hòa ca diệu kỳ của tuổi thơ.',
      illustrationType: 'wind-nature-scenery',
      coreFormulaOrRule: 'Bí kíp đọc hiểu: Đọc kĩ từng đoạn ➔ Gạch chân chi tiết hình ảnh, âm thanh ➔ Tìm tình cảm, cảm xúc của tác giả gửi gắm.',
      steps: [
        {
          stepNumber: 1,
          title: 'Đọc diễn cảm toàn bài',
          description: 'Đọc thong thả, giọng vui tươi, lắng sâu để cảm nhận tiếng gió.',
          example: 'Chú ý các từ tượng thanh: vi vu, xào xạc, rì rào...',
          badge: 'Luyện đọc'
        },
        {
          stepNumber: 2,
          title: 'Giải mã từ ngữ khó',
          description: 'Tìm hiểu các từ ngữ gợi cảm và biện pháp nghệ thuật nhân hóa.',
          example: 'Gió biết hát, gió biết đùa nghịch với hoa cỏ ➔ Biện pháp nhân hóa.',
          badge: 'Hiểu từ'
        },
        {
          stepNumber: 3,
          title: 'Rút ra thông điệp bài học',
          description: 'Hiểu tình yêu quê hương, thiên nhiên và tâm hồn trong sáng của tuổi thơ.',
          example: 'Thiên nhiên xung quanh ta luôn chứa chan những điều kỳ diệu nếu ta biết lắng nghe.',
          badge: 'Thông điệp'
        }
      ],
      commonMistakes: [
        {
          title: 'Chỉ đọc lướt rồi đoán mò câu trả lời',
          mistake: 'Chọn ngay đáp án mà không đối chiếu lại câu văn trong bài đọc.',
          whyWrong: 'Các câu hỏi đọc hiểu thường có những từ ngữ gài bẫy rất giống nhau.',
          howToFix: 'Luôn đọc lại đoạn văn tương ứng trước khi chọn đáp án.'
        },
        {
          title: 'Bỏ qua biện pháp tu từ',
          mistake: 'Nghĩ rằng gió chỉ là hiện tượng thời tiết bình thường.',
          whyWrong: 'Trong văn học, tác giả biến gió thành một người bạn có tâm hồn.',
          howToFix: 'Tìm các từ chỉ hành động của con người được gắn cho gió (thì thầm, rủ rỉ, múa ca).'
        }
      ],
      pocketCheatSheet: [
        'Nội dung chính: Ca ngợi vẻ đẹp của thiên nhiên đồng quê qua âm thanh của gió',
        'Nghệ thuật nổi bật: Nhân hóa, so sánh, sử dụng nhiều từ tượng thanh',
        'Ý nghĩa: Nhắc nhở chúng ta biết yêu thương và gần gũi với thiên nhiên xung quanh'
      ]
    },
    practiceQuestions: [
      {
        id: 'vn-b1-q1',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Bài đọc "Thanh âm của gió" chủ yếu miêu tả vẻ đẹp của điều gì?',
        illustrationType: 'wind-nature-scenery',
        options: [
          'Âm thanh và vẻ đẹp sống động của gió nơi làng quê',
          'Một cơn bão lớn khủng khiếp',
          'Chiếc quạt máy đang quay',
          'Một trận mưa rào mùa hạ'
        ],
        correctAnswer: 'Âm thanh và vẻ đẹp sống động của gió nơi làng quê',
        hint: 'Tên bài là "Thanh âm của gió", thanh âm nghĩa là âm thanh, tiếng hát.',
        explanation: 'Bài đọc miêu tả tiếng gió và những cảm nhận êm đềm, tươi đẹp của tuổi thơ nơi làng quê.'
      },
      {
        id: 'vn-b1-q2',
        level: 1,
        levelName: 'Khởi động',
        type: 'multiple_choice',
        prompt: 'Trong bài, tác giả đã sử dụng biện pháp nghệ thuật nào để làm cho cơn gió trở nên gần gũi như một người bạn?',
        options: ['Nhân hóa', 'Điệp ngữ nhiều lần', 'Ẩn dụ chuyển đổi', 'Nói quá'],
        correctAnswer: 'Nhân hóa',
        hint: 'Gán những hành động, cảm xúc của con người cho sự vật (gió).',
        explanation: 'Biện pháp nhân hóa giúp cơn gió biết thì thầm, biết ca hát, vui đùa như một người bạn nhỏ.'
      },
      {
        id: 'vn-b1-q3',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Những từ ngữ nào sau đây miêu tả âm thanh của gió?',
        options: [
          'Vi vu, xôn xao, rì rào',
          'Trắng tinh, đỏ rực, xanh biếc',
          'Tròn xoe, vuông vắn, dài ngoẵng',
          'Mênh mông, bát ngát, thăm thẳm'
        ],
        correctAnswer: 'Vi vu, xôn xao, rì rào',
        hint: 'Tìm các từ tượng thanh mô tả âm thanh mà tai em nghe được.',
        explanation: '"Vi vu, xôn xao, rì rào" là các từ tượng thanh mô tả tiếng gió thổi qua rặng cây, đồng cỏ.'
      },
      {
        id: 'vn-b1-q4',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Chi tiết nào cho thấy các bạn nhỏ trong bài rất yêu quý thiên nhiên?',
        options: [
          'Biết lắng nghe và cảm nhận từng thanh âm nhỏ bé của gió',
          'Đóng chặt cửa ở trong nhà',
          'Chặt hết cây cối để gió không thổi được',
          'Không quan tâm đến tiếng gió'
        ],
        correctAnswer: 'Biết lắng nghe và cảm nhận từng thanh âm nhỏ bé của gió',
        hint: 'Chỉ có những người yêu thiên nhiên mới chăm chú lắng nghe tiếng reo của cỏ cây, hoa lá.',
        explanation: 'Sự nhạy cảm, lắng nghe và hòa mình vào thiên nhiên chứng tỏ tình yêu thiên nhiên sâu sắc của tuổi thơ.'
      },
      {
        id: 'vn-b1-q5',
        level: 2,
        levelName: 'Vững vàng',
        type: 'multiple_choice',
        prompt: 'Từ "thanh âm" trong nhan đề bài học đồng nghĩa với từ nào dưới đây?',
        options: ['Tiếng vang / Âm thanh', 'Màu sắc', 'Hương vị', 'Hình dáng'],
        correctAnswer: 'Tiếng vang / Âm thanh',
        hint: '"Thanh" là tiếng, "âm" là âm thanh.',
        explanation: '"Thanh âm" là từ Hán Việt chỉ âm thanh, tiếng động có giai điệu.'
      },
      {
        id: 'vn-b1-q6',
        level: 3,
        levelName: 'Thử thách',
        type: 'multiple_choice',
        prompt: 'Bài học rút ra cho chúng ta sau khi học bài "Thanh âm của gió" là gì?',
        options: [
          'Hãy biết mở rộng tâm hồn, yêu quý và lắng nghe vẻ đẹp kỳ diệu của thiên nhiên xung quanh',
          'Nên sợ hãi mỗi khi nghe tiếng gió thổi',
          'Chỉ nên học trong sách vở, không cần ra ngoài thiên nhiên',
          'Gió chỉ mang lại phiền toái cho con người'
        ],
        correctAnswer: 'Hãy biết mở rộng tâm hồn, yêu quý và lắng nghe vẻ đẹp kỳ diệu của thiên nhiên xung quanh',
        hint: 'Thông điệp ý nghĩa về việc nuôi dưỡng tâm hồn tuổi thơ trong sáng.',
        explanation: 'Bài văn giáo dục tình yêu quê hương, đất nước, thái độ trân trọng và bảo vệ thiên nhiên tươi đẹp.'
      }
    ],
    speedQuestions: [
      {
        id: 'vn-b1-s1',
        prompt: 'Bài "Thanh âm của gió" nằm ở chủ điểm nào của Tiếng Việt 5?',
        options: ['Thế giới tuổi thơ', 'Thiên nhiên kì thú', 'Trên con đường học tập', 'Nghệ thuật muôn màu'],
        correctAnswer: 'Thế giới tuổi thơ',
        explanation: 'Đây là bài đọc mở đầu thuộc Chủ điểm 1: Thế giới tuổi thơ.'
      },
      {
        id: 'vn-b1-s2',
        prompt: 'Từ nào sau đây KHÔNG PHẢI là từ tượng thanh mô tả tiếng gió?',
        options: ['Vàng rực', 'Xào xạc', 'Rì rào', 'Vi vu'],
        correctAnswer: 'Vàng rực',
        explanation: '"Vàng rực" là từ chỉ màu sắc thị giác, không phải âm thanh.'
      },
      {
        id: 'vn-b1-s3',
        prompt: 'Khi đọc diễn cảm bài văn miêu tả vẻ đẹp thiên nhiên, giọng đọc nên như thế nào?',
        options: ['Nhẹ nhàng, truyền cảm, tươi vui', 'Quát tháo thật to', 'Đọc thật nhanh cho xong', 'Buồn bã, ủ rũ'],
        correctAnswer: 'Nhẹ nhàng, truyền cảm, tươi vui',
        explanation: 'Giọng đọc nhẹ nhàng, tươi vui giúp truyền tải trọn vẹn vẻ đẹp của bài văn.'
      }
    ]
  }
];

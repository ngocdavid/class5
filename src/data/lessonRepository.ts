import { Lesson } from '../types';
import { mathLessons } from './mathLessons';
import { vietnameseLessons } from './vietnameseLessons';
import { mathLessonsRegistry, vietnameseLessonsRegistry, LessonMeta } from './registry';

// Bản đồ các bài học đã được biên soạn chi tiết chuyên sâu
const detailedLessonsMap: Record<string, Lesson> = {};

mathLessons.forEach(l => {
  detailedLessonsMap[l.id] = l;
});

vietnameseLessons.forEach(l => {
  detailedLessonsMap[l.id] = l;
});

// Hàm tạo dữ liệu sư phạm chuẩn cho bất kỳ bài học nào trong 136 bài SGK
function createStandardLesson(meta: LessonMeta): Lesson {
  const isMath = meta.subject === 'math';

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
      mascotGreeting: `Chào bạn! Cùng Rô-bốt khám phá bài học "${meta.title}". Chỉ cần 35 phút là bạn sẽ làm chủ trọn vẹn dạng toán này!`,
      guide: {
        storyIntro: `Rô-bốt và các bạn Mai, Nam đang cùng nhau tìm hiểu về ${meta.title.toLowerCase()}. Trong thực tế đời sống, dạng toán này giúp chúng ta tính toán nhanh, đo đạc chính xác và giải quyết nhiều tình huống thú vị.`,
        coreFormulaOrRule: `Trọng tâm ${meta.title}: Đọc kĩ đề bài, xác định đúng các đại lượng đã cho và áp dụng quy tắc tính toán chuẩn mực từng bước.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Phân tích & Tóm tắt',
            description: 'Đọc kĩ đề bài, xác định đại lượng đã biết và yêu cầu cần tìm.',
            example: 'Tóm tắt bài toán thành sơ đồ hoặc các dòng số liệu rõ ràng.',
            badge: 'Tóm tắt'
          },
          {
            stepNumber: 2,
            title: 'Lựa chọn quy tắc & công thức',
            description: 'Đổi về cùng đơn vị đo (nếu có) và áp dụng công thức tương ứng.',
            example: 'Nhớ kiểm tra kỹ đơn vị đo độ dài, diện tích, khối lượng hoặc thời gian.',
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
      practiceQuestions: [
        {
          id: `${meta.id}-q1`,
          level: 1,
          levelName: 'Khởi động',
          type: 'multiple_choice',
          prompt: `Bài toán ${meta.title}: Kiến thức cốt lõi nào sau đây là ĐÚNG NHẤT?`,
          options: [
            'Phải đưa các đại lượng về cùng một đơn vị đo trước khi tính toán',
            'Không cần quan tâm đến đơn vị đo',
            'Luôn luôn chỉ có một phép tính duy nhất',
            'Chỉ áp dụng được với số tự nhiên'
          ],
          correctAnswer: 'Phải đưa các đại lượng về cùng một đơn vị đo trước khi tính toán',
          hint: 'Hãy nhớ lại quy tắc đổi đơn vị trong toán học tiểu học bạn nhé!',
          explanation: 'Quy tắc cơ bản trong Toán học là mọi đại lượng tham gia phép tính phải có cùng một đơn vị đo.'
        },
        {
          id: `${meta.id}-q2`,
          level: 1,
          levelName: 'Khởi động',
          type: 'multiple_choice',
          prompt: `Khi giải bài tập về "${meta.title}", bước đầu tiên quan trọng nhất là gì?`,
          options: [
            'Đọc kĩ đề bài và xác định yêu cầu cần tìm',
            'Lấy các số trong đề bài nhân lại với nhau ngay',
            'Viết ngay đáp số mà không cần nháp',
            'Bỏ qua câu hỏi có lời văn'
          ],
          correctAnswer: 'Đọc kĩ đề bài và xác định yêu cầu cần tìm',
          hint: 'Muốn đi đúng đường thì trước hết phải biết mình cần đi đâu!',
          explanation: 'Đọc kĩ đề và xác định dữ liệu đã cho / cần tìm là chìa khóa để giải quyết mọi bài toán.'
        },
        {
          id: `${meta.id}-q3`,
          level: 2,
          levelName: 'Vững vàng',
          type: 'multiple_choice',
          prompt: `Trong quá trình tính toán dạng bài ${meta.title}, nếu gặp phân số hoặc số thập phân ta cần chú ý điều gì?`,
          options: [
            'Thực hiện đúng thứ tự phép tính và kiểm tra vị trí dấu phẩy / mẫu số',
            'Bỏ qua dấu phẩy coi như số tự nhiên',
            'Chỉ tính phần nguyên, bỏ phần thập phân',
            'Đổi hết sang hỗn số phức tạp'
          ],
          correctAnswer: 'Thực hiện đúng thứ tự phép tính và kiểm tra vị trí dấu phẩy / mẫu số',
          hint: 'Dấu phẩy và mẫu số quyết định chính xác giá trị của con số.',
          explanation: 'Luôn tuân thủ thứ tự ưu tiên các phép tính và giữ vị trí dấu phẩy thẳng hàng chuẩn xác.'
        },
        {
          id: `${meta.id}-q4`,
          level: 2,
          levelName: 'Vững vàng',
          type: 'multiple_choice',
          prompt: `Để ước lượng kết quả của bài toán "${meta.title}", phương pháp nào sau đây hiệu quả nhất?`,
          options: [
            'Làm tròn số đến hàng chục hoặc hàng đơn vị gần nhất để tính nhẩm',
            'Đoán mò một số ngẫu nhiên',
            'Chọn số lớn nhất có trong đề',
            'Chọn số bé nhất có trong đề'
          ],
          correctAnswer: 'Làm tròn số đến hàng chục hoặc hàng đơn vị gần nhất để tính nhẩm',
          hint: 'Kĩ năng làm tròn số giúp ta kiểm tra xem kết quả thực tế có hợp lý không.',
          explanation: 'Làm tròn các số hạng giúp học sinh dự đoán khoảng kết quả, tránh các sai sót ngớ ngẩn.'
        },
        {
          id: `${meta.id}-q5`,
          level: 2,
          levelName: 'Vững vàng',
          type: 'multiple_choice',
          prompt: `Khi giải toán có lời văn liên quan đến "${meta.title}", đáp số cần có thêm thành phần nào?`,
          options: [
            'Tên đơn vị đo tương ứng đi liền với số kết quả',
            'Chỉ cần ghi con số, không cần đơn vị',
            'Không cần ghi chữ đáp số',
            'Ghi chữ tùy thích'
          ],
          correctAnswer: 'Tên đơn vị đo tương ứng đi liền với số kết quả',
          hint: 'Ví dụ: 25 thì phải ghi rõ là 25 mét, 25 kg hay 25 lít bạn nhé!',
          explanation: 'Đáp số của bài toán có lời văn bắt buộc phải kèm theo tên đơn vị đo cụ thể.'
        },
        {
          id: `${meta.id}-q6`,
          level: 3,
          levelName: 'Thử thách',
          type: 'multiple_choice',
          prompt: `Thử thách siêu sao (${meta.title}): Vận dụng kiến thức bài này vào thực tế, bạn Nam muốn đạt kết quả cao nhất thì cần rèn luyện thói quen gì?`,
          options: [
            'Tự giác giải lại các bài tập đã làm sai và ghi nhớ cạm bẫy hay nhầm',
            'Học thuộc lòng đáp án mà không hiểu cách làm',
            'Chỉ làm những bài dễ, bỏ qua bài khó',
            'Làm bài thật nhanh không cần kiểm tra lại'
          ],
          correctAnswer: 'Tự giác giải lại các bài tập đã làm sai và ghi nhớ cạm bẫy hay nhầm',
          hint: 'Học từ lỗi sai của chính mình là cách tiến bộ nhanh nhất!',
          explanation: 'Thói quen xem lại bài sai và ghi nhớ cạm bẫy giúp học sinh nâng cao học lực từ trung bình lên khá giỏi.'
        }
      ],
      speedQuestions: [
        {
          id: `${meta.id}-s1`,
          prompt: `Bài học "${meta.title}" thuộc môn học nào?`,
          options: ['Toán lớp 5 (KNTT)', 'Khoa học', 'Lịch sử', 'Địa lí'],
          correctAnswer: 'Toán lớp 5 (KNTT)',
          explanation: 'Đây là bài học chính khóa trong chương trình Toán 5 Kết nối tri thức.'
        },
        {
          id: `${meta.id}-s2`,
          prompt: 'Sau khi tính toán xong một bài toán, việc nên làm là:',
          options: ['Kiểm tra lại phép tính và đơn vị', 'Đóng sách ngay lập tức', 'Xóa hết bài nháp', 'Không cần đọc lại'],
          correctAnswer: 'Kiểm tra lại phép tính và đơn vị',
          explanation: 'Kiểm tra lại giúp tránh mất điểm oan.'
        },
        {
          id: `${meta.id}-s3`,
          prompt: 'Thời gian tự học tối ưu mỗi ngày tại nhà cho 1 bài học lớp 5 là:',
          options: ['30 - 45 phút', '3 - 4 tiếng liên tục', '5 phút', 'Suốt đêm'],
          correctAnswer: '30 - 45 phút',
          explanation: '30-45 phút giúp não bộ tập trung sâu và bảo vệ sức khỏe thị giác.'
        }
      ]
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
      practiceQuestions: [
        {
          id: `${meta.id}-q1`,
          level: 1,
          levelName: 'Khởi động',
          type: 'multiple_choice',
          prompt: `Trong bài học "${meta.title}", để hiểu đúng nghĩa của một từ ngữ, cách tốt nhất là gì?`,
          options: [
            'Đặt từ đó vào ngữ cảnh câu văn cụ thể',
            'Đoán mò không cần đọc câu văn',
            'Tra từ điển tiếng nước ngoài',
            'Bỏ qua không cần hiểu'
          ],
          correctAnswer: 'Đặt từ đó vào ngữ cảnh câu văn cụ thể',
          hint: 'Nghĩa của từ luôn phụ thuộc vào câu văn mà nó xuất hiện bạn nhé!',
          explanation: 'Ngữ cảnh giúp chúng ta xác định chính xác nghĩa gốc, nghĩa chuyển hoặc sắc thái của từ.'
        },
        {
          id: `${meta.id}-q2`,
          level: 1,
          levelName: 'Khởi động',
          type: 'multiple_choice',
          prompt: `Khi viết đoạn văn liên quan đến chủ điểm "${meta.unit}", câu văn cần đạt yêu cầu gì?`,
          options: [
            'Diễn đạt trọn vẹn ý, dùng từ ngữ gợi cảm và đúng chính tả',
            'Càng dài dòng càng tốt, không cần dấu chấm',
            'Lặp lại một từ thật nhiều lần trong đoạn',
            'Chỉ dùng câu cụt, câu thiếu vị ngữ'
          ],
          correctAnswer: 'Diễn đạt trọn vẹn ý, dùng từ ngữ gợi cảm và đúng chính tả',
          hint: 'Một đoạn văn hay trước hết phải rõ ràng, đúng ngữ pháp và cảm xúc.',
          explanation: 'Đoạn văn hoàn chỉnh cần mạch lạc, liên kết câu chặt chẽ và không mắc lỗi chính tả.'
        },
        {
          id: `${meta.id}-q3`,
          level: 2,
          levelName: 'Vững vàng',
          type: 'multiple_choice',
          prompt: `Biện pháp nghệ thuật nào thường được sử dụng để làm cho đồ vật, thiên nhiên trở nên sinh động như con người?`,
          options: ['Nhân hóa', 'So sánh', 'Điệp ngữ', 'Đảo ngữ'],
          correctAnswer: 'Nhân hóa',
          hint: 'Gán cho sự vật những hành động, cảm xúc, lời nói của con người.',
          explanation: 'Biện pháp nhân hóa giúp thiên nhiên, đồ vật có tâm hồn, gần gũi và thân thiết với tuổi thơ.'
        },
        {
          id: `${meta.id}-q4`,
          level: 2,
          levelName: 'Vững vàng',
          type: 'multiple_choice',
          prompt: `Để liên kết các câu trong một đoạn văn mà không bị lặp từ nhàm chán, ta có thể:`,
          options: [
            'Dùng đại từ hoặc từ đồng nghĩa để thay thế',
            'Xóa bớt câu đi',
            'Viết thêm nhiều dấu chấm hỏi',
            'Viết lại câu y hệt như trên'
          ],
          correctAnswer: 'Dùng đại từ hoặc từ đồng nghĩa để thay thế',
          hint: 'Đây là phép thay thế từ ngữ trong kĩ năng liên kết câu.',
          explanation: 'Dùng đại từ hoặc từ đồng nghĩa giúp đoạn văn vừa tránh lặp từ, vừa giữ được sự kết nối nhịp nhàng.'
        },
        {
          id: `${meta.id}-q5`,
          level: 2,
          levelName: 'Vững vàng',
          type: 'multiple_choice',
          prompt: `Trong câu văn: "Mặt trời ... từ từ nhô lên trên biển.", từ nào sau đây điền vào chỗ chấm là PHÙ HỢP NHẤT?`,
          options: ['đỏ rực', 'xanh biếc', 'tím ngắt', 'đen nhánh'],
          correctAnswer: 'đỏ rực',
          hint: 'Mặt trời buổi sớm mai thường có màu sắc rực rỡ như lửa.',
          explanation: '"Đỏ rực" là từ gợi tả màu sắc sống động, chân thực của mặt trời lúc bình minh.'
        },
        {
          id: `${meta.id}-q6`,
          level: 3,
          levelName: 'Thử thách',
          type: 'multiple_choice',
          prompt: `Thử thách Tập làm văn: Khi viết bài văn miêu tả (tả cảnh hoặc tả người), yếu tố nào giúp bài văn chạm đến trái tim người đọc?`,
          options: [
            'Bộc lộ cảm xúc, tình cảm chân thành và những quan sát tinh tế của bản thân',
            'Chép nguyên văn bài văn mẫu của người khác',
            'Liệt kê máy móc tất cả các chi tiết nhìn thấy',
            'Sử dụng nhiều từ ngữ sáo rỗng'
          ],
          correctAnswer: 'Bộc lộ cảm xúc, tình cảm chân thành và những quan sát tinh tế của bản thân',
          hint: 'Văn chương bắt nguồn từ cảm xúc chân thật của trái tim.',
          explanation: 'Cảm xúc chân thật và góc nhìn riêng của học sinh tạo nên nét độc đáo, lay động cho bài văn miêu tả.'
        }
      ],
      speedQuestions: [
        {
          id: `${meta.id}-s1`,
          prompt: `Bài học "${meta.title}" nằm trong chương trình môn học nào?`,
          options: ['Tiếng Việt 5 (KNTT)', 'Âm nhạc', 'Mĩ thuật', 'Đạo đức'],
          correctAnswer: 'Tiếng Việt 5 (KNTT)',
          explanation: 'Đây là bài học chính khóa thuộc SGK Tiếng Việt lớp 5.'
        },
        {
          id: `${meta.id}-s2`,
          prompt: 'Dấu câu dùng để kết thúc một câu kể thông thường là:',
          options: ['Dấu chấm (.)', 'Dấu hỏi (?)', 'Dấu chấm than (!)', 'Dấu hai chấm (:)'],
          correctAnswer: 'Dấu chấm (.)',
          explanation: 'Dấu chấm đặt ở cuối câu kể khi câu đã trọn vẹn ý.'
        },
        {
          id: `${meta.id}-s3`,
          prompt: 'Đọc nhiều sách hay giúp học sinh:',
          options: ['Mở rộng vốn từ và nâng cao kĩ năng viết văn', 'Tốn thời gian vô ích', 'Học kém đi', 'Quên hết kiến thức'],
          correctAnswer: 'Mở rộng vốn từ và nâng cao kĩ năng viết văn',
          explanation: 'Đọc sách bồi dưỡng tâm hồn và cung cấp nguồn từ vựng phong phú cho học sinh.'
        }
      ]
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

import { Question, SpeedQuestion } from '../../types';

export interface LessonQuestionSet {
  practiceQuestions: Question[];
  speedQuestions: SpeedQuestion[];
}

export const vietnameseQuestionsT2: Record<string, LessonQuestionSet> = {
  'vn-b33': {
    practiceQuestions: [
        {
            "id": "vn33-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Bài thơ 'Khúc hát ru những em bé lớn trên lưng mẹ' là của nhà thơ nào?",
            "options": [
                "Nguyễn Khoa Điềm",
                "Nguyễn Đình Thi",
                "Phạm Tiến Duật",
                "Trần Đăng Khoa"
            ],
            "correctAnswer": "Nguyễn Khoa Điềm",
            "hint": "Nhà thơ nổi tiếng với trường ca 'Mặt đường khát vọng'.",
            "explanation": "Bài thơ của nhà thơ Nguyễn Khoa Điềm."
        },
        {
            "id": "vn33-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Người mẹ Tà-ôi trong bài thơ vừa địu con vừa làm những công việc gì?",
            "options": [
                "Giã gạo nuôi bộ đội, tỉa bắp trên núi Ka-lưi, chuyển lán đạp rừng",
                "Dệt vải bán ở chợ thị xã",
                "Chèo thuyền đánh cá trên biển",
                "Lái máy kéo trên cánh đồng bằng"
            ],
            "correctAnswer": "Giã gạo nuôi bộ đội, tỉa bắp trên núi Ka-lưi, chuyển lán đạp rừng",
            "hint": "Những công việc phục vụ kháng chiến gian khổ nhưng ngập tràn tình yêu thương của người mẹ miền núi.",
            "explanation": "Mẹ giã gạo nuôi quân, trỉa bắp nuôi cách mạng."
        },
        {
            "id": "vn33-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hình ảnh 'Mặt trời của bắp thì nằm trên đồi / Mặt trời của mẹ, em nằm trên lưng' sử dụng biện pháp tu từ nào?",
            "options": [
                "Ẩn dụ",
                "Nhân hóa",
                "Điệp từ",
                "Nói quá"
            ],
            "correctAnswer": "Ẩn dụ",
            "hint": "Ví đứa con yêu dấu như mặt trời mang lại ánh sáng, sự sống và niềm hy vọng cho mẹ.",
            "explanation": "Hình ảnh ẩn dụ sáng tạo: em cu Tai chính là 'mặt trời' thiêng liêng sưởi ấm lòng mẹ."
        },
        {
            "id": "vn33-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Tình yêu thương con của người mẹ Tà-ôi gắn liền với tình cảm cao đẹp nào?",
            "options": [
                "Tình yêu buôn làng, tình yêu cách mạng và khát vọng độc lập tự do cho Tổ quốc",
                "Ước mơ con trở nên giàu có buôn bán giỏi",
                "Chỉ mong con ở nhà không phải đi xa",
                "Mong con trở thành dũng sĩ săn bắn thú rừng"
            ],
            "correctAnswer": "Tình yêu buôn làng, tình yêu cách mạng và khát vọng độc lập tự do cho Tổ quốc",
            "hint": "Tình mẹ hòa quyện bền chặt với tình yêu đất nước quê hương.",
            "explanation": "Tình mẫu tử thiêng liêng gắn bó keo sơn với lý tưởng cách mạng giải phóng dân tộc."
        },
        {
            "id": "vn33-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Ước mơ của người mẹ dành cho con qua từng khúc hát ru lớn dần lên theo thời gian như thế nào?",
            "options": [
                "Từ hạt bắp trắng ngần đến hạt gạo nuôi bộ đội và cuối cùng là ngày mai con làm người tự do độc lập",
                "Con sẽ trở thành một thương gia giàu có",
                "Con xây nhà to giữa thành phố",
                "Con không phải làm nương rẫy nữa"
            ],
            "correctAnswer": "Từ hạt bắp trắng ngần đến hạt gạo nuôi bộ đội và cuối cùng là ngày mai con làm người tự do độc lập",
            "hint": "Ước mơ lớn lao về ngày mai đất nước sạch bóng quân thù, con trở thành công dân tự do.",
            "explanation": "Ước mơ con khôn lớn, làm người tự do trong một đất nước hòa bình thống nhất."
        },
        {
            "id": "vn33-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Từ ngữ nào trong bài gợi tả giấc ngủ ngon lành và sự an tâm của em bé trên lưng mẹ?",
            "options": [
                "Ngủ ngoan a-kay ơi, ngủ ngoan a-kay hỡi",
                "Thức giấc",
                "Quấy khóc",
                "Sợ hãi"
            ],
            "correctAnswer": "Ngủ ngoan a-kay ơi, ngủ ngoan a-kay hỡi",
            "hint": "'A-kay' tiếng dân tộc Tà-ôi có nghĩa là con.",
            "explanation": "Điệp khúc ru tha thiết, vỗ về giấc ngủ bình yên của con trên lưng mẹ."
        },
        {
            "id": "vn33-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Nét đặc sắc nhất trong nghệ thuật biểu đạt của bài thơ là gì?",
            "options": [
                "Giọng điệu hát ru ngọt ngào, tha thiết, hình ảnh ẩn dụ độc đáo đậm đà bản sắc núi rừng Tây Thừa Thiên",
                "Thể thơ tự do không có nhịp điệu",
                "Toàn bộ bài thơ là cuộc đối thoại kịch",
                "Không có tình cảm gia đình"
            ],
            "correctAnswer": "Giọng điệu hát ru ngọt ngào, tha thiết, hình ảnh ẩn dụ độc đáo đậm đà bản sắc núi rừng Tây Thừa Thiên",
            "hint": "Âm hưởng dân ca ngọt ngào của tiếng ru đồng bào thiểu số miền Trung.",
            "explanation": "Âm hưởng điệu ru ngọt ngào kết hợp hình tượng thơ giàu tính biểu tượng xúc động."
        },
        {
            "id": "vn33-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hình tượng người mẹ trong bài thơ là biểu tượng tiêu biểu cho:",
            "options": [
                "Người phụ nữ Việt Nam anh hùng, bất khuất, trung hậu, đảm đang trong thời kỳ kháng chiến cứu nước",
                "Người phụ nữ thích đi du lịch vùng cao",
                "Người mẹ chỉ biết lo việc gia đình riêng",
                "Người nông dân trồng ngô năng suất cao"
            ],
            "correctAnswer": "Người phụ nữ Việt Nam anh hùng, bất khuất, trung hậu, đảm đang trong thời kỳ kháng chiến cứu nước",
            "hint": "Tượng đài bất hủ của người mẹ Việt Nam thời chống Mỹ cứu nước.",
            "explanation": "Khắc họa vẻ đẹp bất tử của Bà mẹ Việt Nam anh hùng thời kháng chiến chống Mỹ."
        }
    ],
    speedQuestions: [
        {
            "id": "vn33-s1",
            "prompt": "Tiếng Tà-ôi 'A-kay' có nghĩa là gì?",
            "options": [
                "Con",
                "Mẹ",
                "Mặt trời",
                "Núi"
            ],
            "correctAnswer": "Con",
            "explanation": "'A-kay' nghĩa là con."
        },
        {
            "id": "vn33-s2",
            "prompt": "'Mặt trời của mẹ, em nằm trên lưng' là biện pháp:",
            "options": [
                "Ẩn dụ",
                "Hoán dụ",
                "Điệp từ",
                "Nói giảm"
            ],
            "correctAnswer": "Ẩn dụ",
            "explanation": "Ẩn dụ."
        },
        {
            "id": "vn33-s3",
            "prompt": "Tác giả bài thơ là nhà thơ:",
            "options": [
                "Nguyễn Khoa Điềm",
                "Tô Hoài",
                "Huy Cận",
                "Định Hải"
            ],
            "correctAnswer": "Nguyễn Khoa Điềm",
            "explanation": "Nguyễn Khoa Điềm."
        }
    ]
  },
  'vn-b34': {
    practiceQuestions: [
        {
            "id": "vn34-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Câu ghép là câu như thế nào?",
            "options": [
                "Câu do nhiều vế câu ghép lại, mỗi vế câu thường có cấu tạo như một câu đơn (đủ CN - VN) và biểu thị một ý trọn vẹn",
                "Câu chỉ có một cụm chủ ngữ - vị ngữ duy nhất",
                "Câu không có vị ngữ",
                "Câu chỉ gồm toàn từ láy"
            ],
            "correctAnswer": "Câu do nhiều vế câu ghép lại, mỗi vế câu thường có cấu tạo như một câu đơn (đủ CN - VN) và biểu thị một ý trọn vẹn",
            "hint": "Gồm từ hai cụm C-V trở lên không bao chứa nhau.",
            "explanation": "Câu ghép có từ hai vế câu trở lên, mỗi vế có cụm C-V độc lập."
        },
        {
            "id": "vn34-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Trong câu ghép: 'Trời rải nắng vàng và gió thổi mát rượi', hai vế câu được nối với nhau bằng:",
            "options": [
                "Quan hệ từ 'và'",
                "Dấu phẩy",
                "Quan hệ từ 'nhưng'",
                "Dấu chấm phẩy"
            ],
            "correctAnswer": "Quan hệ từ 'và'",
            "hint": "Từ nối giữa vế 1 và vế 2 là 'và'.",
            "explanation": "Nối trực tiếp bằng quan hệ từ 'và'."
        },
        {
            "id": "vn34-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu nào dưới đây là một CÂU GHÉP?",
            "options": [
                "Gió thổi mạnh làm cành cây gãy đổ",
                "Mặt trời lên cao và sương dần tan biến",
                "Bạn Lan rất chăm chỉ học tập ở trường",
                "Dưới bóng tre xanh, đàn bò thong dong gặm cỏ"
            ],
            "correctAnswer": "Mặt trời lên cao và sương dần tan biến",
            "hint": "Vế 1: Mặt trời (C) lên cao (V). Vế 2: sương (C) dần tan biến (V).",
            "explanation": "Gồm 2 vế câu độc lập nối với nhau bằng quan hệ từ 'và'."
        },
        {
            "id": "vn34-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Xác định các vế câu trong câu ghép: 'Vì trời mưa to nên đường đất đỏ trơn như đổ mỡ':",
            "options": [
                "Vế 1: 'trời mưa to', Vế 2: 'đường đất đỏ trơn như đổ mỡ'",
                "Chỉ có 1 vế câu",
                "Vế 1: 'Vì trời', Vế 2: 'đất đỏ'",
                "Vế 1: 'mưa to', Vế 2: 'đổ mỡ'"
            ],
            "correctAnswer": "Vế 1: 'trời mưa to', Vế 2: 'đường đất đỏ trơn như đổ mỡ'",
            "hint": "Bỏ các quan hệ từ 'Vì', 'nên' ta được 2 vế câu hoàn chỉnh.",
            "explanation": "Hai vế câu hoàn chỉnh biểu thị quan hệ nguyên nhân - kết quả."
        },
        {
            "id": "vn34-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Điền quan hệ từ thích hợp nối hai vế câu ghép: 'Lan rất thích đọc sách ... Mai lại đam mê vẽ tranh.'",
            "options": [
                "Còn",
                "Vì",
                "Nên",
                "Nếu"
            ],
            "correctAnswer": "Còn",
            "hint": "Chỉ sự khác biệt, đối chiếu giữa sở thích của hai bạn.",
            "explanation": "Quan hệ từ 'còn' thể hiện sự so sánh đối chiếu giữa hai vế câu."
        },
        {
            "id": "vn34-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu ghép: 'Tuy dịch bệnh gây nhiều khó khăn nhưng tinh thần học tập của các em vẫn không hề giảm sút' có quan hệ:",
            "options": [
                "Tương phản đối lập",
                "Tăng tiến",
                "Mục đích",
                "Thời gian"
            ],
            "correctAnswer": "Tương phản đối lập",
            "hint": "'Tuy... nhưng...' biểu thị sự đối lập giữa khó khăn và ý chí.",
            "explanation": "Nối bằng cặp quan hệ từ tương phản 'Tuy... nhưng...'."
        },
        {
            "id": "vn34-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Câu văn nào dưới đây KHÔNG PHẢI là câu ghép?",
            "options": [
                "Mùa xuân, trăm hoa đua nhau khoe sắc thắm dưới ánh nắng chan hòa.",
                "Trời mùa thu trong xanh và những đám mây trắng lững lờ trôi.",
                "Nếu bạn chăm chỉ rèn luyện thì sức khỏe của bạn sẽ tốt hơn.",
                "Mặc dù đường đi hiểm trở nhưng các chú bộ đội vẫn hành quân thần tốc."
            ],
            "correctAnswer": "Mùa xuân, trăm hoa đua nhau khoe sắc thắm dưới ánh nắng chan hòa.",
            "hint": "Câu A chỉ là câu đơn có trạng ngữ chỉ thời gian 'Mùa xuân' và một cụm C-V: 'trăm hoa' (C) / 'đua nhau...' (V).",
            "explanation": "Câu A là câu đơn mở rộng trạng ngữ, không phải câu ghép."
        },
        {
            "id": "vn34-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Thêm một vế câu để tạo thành câu ghép chỉ quan hệ nguyên nhân - kết quả: 'Do ảnh hưởng của cơn bão số 3, ...':",
            "options": [
                "nhiều tuyến đường ở miền Trung đã bị ngập sâu trong nước lũ",
                "trời vẫn trong xanh không một bóng mây",
                "nhưng các bạn nhỏ vẫn vui vẻ đến trường",
                "hoặc chúng em sẽ được nghỉ học"
            ],
            "correctAnswer": "nhiều tuyến đường ở miền Trung đã bị ngập sâu trong nước lũ",
            "hint": "Cần một vế câu có đủ chủ ngữ - vị ngữ nêu kết quả tất yếu của bão lũ.",
            "explanation": "Tạo thành câu ghép chỉ nguyên nhân - kết quả hoàn chỉnh, mạch lạc."
        }
    ],
    speedQuestions: [
        {
            "id": "vn34-s1",
            "prompt": "Câu ghép có ít nhất mấy vế câu?",
            "options": [
                "2 vế",
                "1 vế",
                "3 vế",
                "4 vế"
            ],
            "correctAnswer": "2 vế",
            "explanation": "Ít nhất 2 vế câu."
        },
        {
            "id": "vn34-s2",
            "prompt": "'Trăng lên, gió thổi mát rượi' nối vế bằng:",
            "options": [
                "Dấu phẩy",
                "Quan hệ từ",
                "Cặp từ hô ứng",
                "Không có nối"
            ],
            "correctAnswer": "Dấu phẩy",
            "explanation": "Nối trực tiếp bằng dấu phẩy."
        },
        {
            "id": "vn34-s3",
            "prompt": "Mỗi vế câu ghép thường có cấu tạo như:",
            "options": [
                "Một câu đơn",
                "Một từ đơn",
                "Một thành ngữ",
                "Một cụm danh từ"
            ],
            "correctAnswer": "Một câu đơn",
            "explanation": "Đầy đủ chủ ngữ - vị ngữ."
        }
    ]
  },
  'vn-b35': {
    practiceQuestions: [
        {
            "id": "vn35-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Bài thơ 'Hạt gạo làng ta' là thi phẩm nổi tiếng của nhà thơ nào lúc còn là thần đồng thơ?",
            "options": [
                "Trần Đăng Khoa",
                "Xuân Quỳnh",
                "Phạm Hổ",
                "Đoàn Thị Điểm"
            ],
            "correctAnswer": "Trần Đăng Khoa",
            "hint": "Nhà thơ viết bài thơ này khi mới khoảng 10-11 tuổi tại làng quê Nam Sách, Hải Dương.",
            "explanation": "Bài thơ trứ danh của nhà thơ thiếu nhi Trần Đăng Khoa."
        },
        {
            "id": "vn35-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Trong khổ thơ đầu, hạt gạo được kết tinh từ những hương vị và dưỡng chất nào của quê hương?",
            "options": [
                "Vị phù sa sông Kinh Thầy, hương sen thơm ngát trong hồ nước và lời ru ngọt ngào của mẹ",
                "Hương thơm của sô-cô-la và bánh kẹo",
                "Vị mặn của nước biển khơi xa",
                "Các loại phân bón hóa học"
            ],
            "correctAnswer": "Vị phù sa sông Kinh Thầy, hương sen thơm ngát trong hồ nước và lời ru ngọt ngào của mẹ",
            "hint": "'Hạt gạo làng ta / Có vị phù sa / Của sông Kinh Thầy / Có hương sen thơm...'",
            "explanation": "Hạt gạo kết tinh linh hồn đất trời, dòng sông quê và tình mẹ tảo tần."
        },
        {
            "id": "vn35-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Những nỗi gian truân vất vả của người nông dân khi làm ra hạt gạo được miêu tả qua hình ảnh:",
            "options": [
                "Bão tháng bảy, mưa tháng ba, cái nắng tháng sáu 'nước như ai nấu, chết cả cá cờ, cua ngoi lên bờ'",
                "Thời tiết quanh năm mát mẻ dễ chịu",
                "Người nông dân ngồi dưới bóng mát máy cày tự động",
                "Không có gian khổ nào cả"
            ],
            "correctAnswer": "Bão tháng bảy, mưa tháng ba, cái nắng tháng sáu 'nước như ai nấu, chết cả cá cờ, cua ngoi lên bờ'",
            "hint": "Cảnh nắng chang chang bỏng rát chân người mẹ lội xuống ruộng cấy.",
            "explanation": "Khắc họa tột cùng sự khắc nghiệt của thiên tai và nỗi vất vả của người mẹ cấy lúa."
        },
        {
            "id": "vn35-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong những năm tháng kháng chiến chống Mỹ, các bạn thiếu nhi làng quê đã đóng góp công sức gì cho ruộng đồng?",
            "options": [
                "Gánh phân, bón lót, tát nước chống hạn, bắt sâu bọ bảo vệ mùa màng",
                "Cầm súng ra chiến trường trực tiếp bắn máy bay",
                "Chỉ ở nhà chơi đùa",
                "Rủ nhau trốn học đi câu cá"
            ],
            "correctAnswer": "Gánh phân, bón lót, tát nước chống hạn, bắt sâu bọ bảo vệ mùa màng",
            "hint": "'Những trưa tháng sáu / Nước như ai nấu... Tuổi thơ tát nước gàu sòng bón phân bắt sâu...'",
            "explanation": "Tuổi nhỏ làm việc nhỏ, thiếu nhi chăm chỉ lao động góp sức nuôi quân đánh giặc."
        },
        {
            "id": "vn35-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hạt gạo làng quê còn gửi gắm tình cảm thiêng liêng nào hướng về tiền tuyến?",
            "options": [
                "Hạt gạo gửi ra chiến trường nuôi quân đánh thắng giặc Mỹ xâm lược",
                "Đem bán lấy thật nhiều tiền",
                "Chỉ để dành riêng cho người trong làng",
                "Gửi tặng các nước tư bản"
            ],
            "correctAnswer": "Hạt gạo gửi ra chiến trường nuôi quân đánh thắng giặc Mỹ xâm lược",
            "hint": "'Hạt gạo làng ta / Gửi ra tiền tuyến / Gửi về phương xa...'",
            "explanation": "Hạt gạo nghĩa tình hậu phương chia lửa cho tuyền tuyến miền Nam ruột thịt."
        },
        {
            "id": "vn35-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Vì sao hạt gạo bé nhỏ lại được ví như 'hạt vàng làng ta'?",
            "options": [
                "Vì hạt gạo chứa đựng bao mồ hôi, công sức, máu xương và tình yêu thương vô giá của con người",
                "Vì hạt gạo được dát bằng vàng thật",
                "Vì giá bán gạo đắt như vàng",
                "Vì vỏ trấu có màu vàng óng ánh"
            ],
            "correctAnswer": "Vì hạt gạo chứa đựng bao mồ hôi, công sức, máu xương và tình yêu thương vô giá của con người",
            "hint": "Giá trị thiêng liêng kết tinh từ mồ hôi nước mắt nuôi sống con người.",
            "explanation": "Hạt ngọc thực quý báu kết tinh tinh hoa đất trời và công sức tảo tần của nhân dân."
        },
        {
            "id": "vn35-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hình ảnh tương phản đặc sắc trong câu: 'Cua ngoi lên bờ / Mẹ em xuống cấy' có tác dụng nghệ thuật gì?",
            "options": [
                "Làm nổi bật đức hy sinh thầm lặng, sự chịu thương chịu khó phi thường của người mẹ nông dân",
                "Tả thói quen sinh học của loài cua đồng",
                "Khuyên người dân nên bắt cua thay vì cấy lúa",
                "Chỉ là chi tiết miêu tả ngẫu nhiên"
            ],
            "correctAnswer": "Làm nổi bật đức hy sinh thầm lặng, sự chịu thương chịu khó phi thường của người mẹ nông dân",
            "hint": "Cua có mai cứng còn không chịu nổi nóng phải ngoi lên bờ, mẹ vẫn lội xuống nước cấy lúa.",
            "explanation": "Đối lập lay động lòng người tôn vinh sự hy sinh vĩ đại của người mẹ Việt Nam."
        },
        {
            "id": "vn35-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Bài thơ 'Hạt gạo làng ta' nhắc nhở mỗi học sinh chúng ta thái độ sống nào?",
            "options": [
                "Phải biết nâng niu trân trọng từng hạt cơm, không lãng phí thức ăn và biết ơn người lao động",
                "Ăn uống thừa mứa thoải mái",
                "Chỉ thích ăn đồ ăn nhanh đắt tiền",
                "Không cần quan tâm lúa gạo từ đâu làm ra"
            ],
            "correctAnswer": "Phải biết nâng niu trân trọng từng hạt cơm, không lãng phí thức ăn và biết ơn người lao động",
            "hint": "'Ai ơi bưng bát cơm đầy / Dẻo thơm một hạt đắng cay muôn phần'.",
            "explanation": "Bài học quý báu về lòng biết ơn người lao động và ý thức tiết kiệm ngọc thực."
        }
    ],
    speedQuestions: [
        {
            "id": "vn35-s1",
            "prompt": "Dòng sông phù sa nào xuất hiện trong bài thơ?",
            "options": [
                "Sông Kinh Thầy",
                "Sông Hồng",
                "Sông Hương",
                "Sông Cửu Long"
            ],
            "correctAnswer": "Sông Kinh Thầy",
            "explanation": "Sông Kinh Thầy."
        },
        {
            "id": "vn35-s2",
            "prompt": "Ai là tác giả bài thơ 'Hạt gạo làng ta'?",
            "options": [
                "Trần Đăng Khoa",
                "Xuân Quỳnh",
                "Huy Cận",
                "Tô Hoài"
            ],
            "correctAnswer": "Trần Đăng Khoa",
            "explanation": "Trần Đăng Khoa."
        },
        {
            "id": "vn35-s3",
            "prompt": "Hạt gạo được ví quý báu như:",
            "options": [
                "Hạt vàng",
                "Hạt kim cương",
                "Hạt bạc",
                "Hạt ngọc trai"
            ],
            "correctAnswer": "Hạt vàng",
            "explanation": "'Hạt vàng làng ta'."
        }
    ]
  },
  'vn-b36': {
    practiceQuestions: [
        {
            "id": "vn36-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Khi làm bài văn tả người đang hoạt động, trọng tâm miêu tả là:",
            "options": [
                "Các cử chỉ, động tác, nét mặt, ánh mắt, lời nói và kết quả công việc của người đó",
                "Bộ quần áo người đó cất trong tủ",
                "Cây cối xung quanh nhà người đó",
                "Kể lại toàn bộ tiểu sử từ nhỏ"
            ],
            "correctAnswer": "Các cử chỉ, động tác, nét mặt, ánh mắt, lời nói và kết quả công việc của người đó",
            "hint": "Tả hoạt động cần tập trung vào các động từ chỉ cử chỉ, sự khéo léo và thái độ lao động.",
            "explanation": "Trọng tâm là các cử chỉ, động tác làm việc và thần thái của nhân vật."
        },
        {
            "id": "vn36-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Từ loại nào giữ vai trò chủ chốt trong đoạn văn tả hoạt động của người?",
            "options": [
                "Động từ",
                "Danh từ",
                "Đại từ",
                "Số từ"
            ],
            "correctAnswer": "Động từ",
            "hint": "Động từ thể hiện sự vận động, thao tác làm việc của cơ thể.",
            "explanation": "Động từ và các từ ngữ chỉ trạng thái hành động là nòng cốt khi tả hoạt động."
        },
        {
            "id": "vn36-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Đoạn văn sau tả ai đang làm gì: 'Bàn tay thoăn thoắt cầm phấn nắn nót từng nét chữ trên bảng đen, đôi mắt dõi xuống lớp đầy âu yếm khích lệ...'?",
            "options": [
                "Cô giáo đang giảng bài trên lớp",
                "Bác sĩ đang khám bệnh",
                "Công nhân đang xây tường",
                "Cầu thủ đang sút bóng"
            ],
            "correctAnswer": "Cô giáo đang giảng bài trên lớp",
            "hint": "Hình ảnh cầm phấn viết bảng và ánh mắt trìu mến nhìn học sinh.",
            "explanation": "Hình ảnh quen thuộc, thân thương của cô giáo đang say sưa giảng bài."
        },
        {
            "id": "vn36-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Để tả hoạt động của một chú công an giao thông đứng chốt, chi tiết nào là tiêu biểu nhất?",
            "options": [
                "Đứng thẳng người trang nghiêm, giơ chiếc gậy chỉ huy dứt khoát điều tiết dòng xe cộ",
                "Ngồi uống nước trà trong quán",
                "Cầm chổi quét dọn sân nhà",
                "Nằm ngủ trên võng"
            ],
            "correctAnswer": "Đứng thẳng người trang nghiêm, giơ chiếc gậy chỉ huy dứt khoát điều tiết dòng xe cộ",
            "hint": "Tư thế trang nghiêm và động tác giơ gậy chỉ huy điều khiển nhịp giao thông.",
            "explanation": "Hình ảnh người chiến sĩ cảnh sát giao thông dứt khoát, mẫn cán giữa ngã tư đường."
        },
        {
            "id": "vn36-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi tả người đang làm việc, ta có nên kết hợp tả ngoại hình không?",
            "options": [
                "Có, nên lồng ghép những nét ngoại hình gắn liền với công việc (giọt mồ hôi, ánh mắt tập trung, đôi bàn tay...)",
                "Tuyệt đối không được tả ngoại hình",
                "Chỉ tả ngoại hình, không tả việc làm",
                "Chỉ tả cảnh thời tiết xung quanh"
            ],
            "correctAnswer": "Có, nên lồng ghép những nét ngoại hình gắn liền với công việc (giọt mồ hôi, ánh mắt tập trung, đôi bàn tay...)",
            "hint": "Ngoại hình gắn với công việc làm tăng tính chân thực và truyền cảm.",
            "explanation": "Lồng ghép ánh mắt, nụ cười, vệt mồ hôi giúp bức chân dung hoạt động thêm chân thực."
        },
        {
            "id": "vn36-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Từ láy nào dưới đây gợi tả sự nhanh nhẹn, khéo léo của đôi bàn tay khi làm việc?",
            "options": [
                "Thoăn thoắt, nhịp nhàng",
                "Chậm chạp, lờ đờ",
                "Vụng về, lóng ngóng",
                "Run rẩy, ngập ngừng"
            ],
            "correctAnswer": "Thoăn thoắt, nhịp nhàng",
            "hint": "Các từ gợi sự thuần thục, nhanh và đều đặn.",
            "explanation": "'Thoăn thoắt', 'nhịp nhàng' tả sự khéo léo, nhanh nhẹn khi thao tác công việc."
        },
        {
            "id": "vn36-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Đoạn văn tả bạn học sinh chăm chỉ học bài: 'Nam ngồi ngay ngắn bên bàn học. Cậu chăm chú đọc từng trang sách, thỉnh thoảng lại dừng lại ghi chép vào cuốn sổ tay nhỏ. Gương mặt toát lên vẻ say mê lạ lùng.' Nét thành công của đoạn văn là:",
            "options": [
                "Khắc họa được thần thái tập trung, sự say mê tri thức qua từng cử chỉ nhỏ",
                "Đoạn văn có nhiều từ ngữ khó hiểu",
                "Kể được nhãn hiệu chiếc bàn học",
                "Miêu tả hết các cuốn sách trong phòng"
            ],
            "correctAnswer": "Khắc họa được thần thái tập trung, sự say mê tri thức qua từng cử chỉ nhỏ",
            "hint": "Cử chỉ tĩnh lặng nhưng toát lên thần thái say sưa với bài học.",
            "explanation": "Khắc họa sinh động thần thái và phẩm chất chăm chỉ, say mê học tập của nhân vật."
        },
        {
            "id": "vn36-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Để đoạn văn tả hoạt động của mẹ nấu cơm ấm cúng và xúc động hơn, người viết nên:",
            "options": [
                "Lồng cảm xúc yêu thương, sự trân trọng và biết ơn đối với bữa cơm chan chứa tình mẹ",
                "Liệt kê công thức nấu từng món ăn như sách nấu ăn",
                "Chỉ chê đồ ăn nấu chưa ngon",
                "Kể xem mẹ mua thức ăn hết bao nhiêu tiền"
            ],
            "correctAnswer": "Lồng cảm xúc yêu thương, sự trân trọng và biết ơn đối với bữa cơm chan chứa tình mẹ",
            "hint": "Tình cảm của người viết thổi hồn yêu thương vào từng cử chỉ của mẹ.",
            "explanation": "Lồng ghép tình cảm hiếu thảo làm bài văn ấm áp và lay động lòng người."
        }
    ],
    speedQuestions: [
        {
            "id": "vn36-s1",
            "prompt": "Khi tả hoạt động, loại từ nào dùng nhiều nhất?",
            "options": [
                "Động từ",
                "Số từ",
                "Đại từ",
                "Lượng từ"
            ],
            "correctAnswer": "Động từ",
            "explanation": "Động từ chỉ hoạt động."
        },
        {
            "id": "vn36-s2",
            "prompt": "Từ nào tả bước đi nhanh thoăn thoắt?",
            "options": [
                "Thoăn thoắt",
                "Chập chững",
                "Lê bước",
                "Lảo đảo"
            ],
            "correctAnswer": "Thoăn thoắt",
            "explanation": "Thoăn thoắt."
        },
        {
            "id": "vn36-s3",
            "prompt": "Tả hoạt động bác thợ rèn có hình ảnh:",
            "options": [
                "Quai búa nhịp nhàng",
                "Đọc sách trên bàn",
                "May áo bằng kim",
                "Gõ máy tính"
            ],
            "correctAnswer": "Quai búa nhịp nhàng",
            "explanation": "Quai búa chan chát trên đe sắt."
        }
    ]
  },
  'vn-b37': {
    practiceQuestions: [
        {
            "id": "vn37-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Bài thơ 'Đoàn thuyền đánh cá' được sáng tác bởi nhà thơ nào?",
            "options": [
                "Huy Cận",
                "Xuân Diệu",
                "Chế Lan Viên",
                "Tố Hữu"
            ],
            "correctAnswer": "Huy Cận",
            "hint": "Nhà thơ nổi tiếng viết bài thơ này trong chuyến đi thực tế vùng mỏ Quảng Ninh năm 1958.",
            "explanation": "Thi phẩm nổi tiếng của nhà thơ Huy Cận."
        },
        {
            "id": "vn37-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Đoàn thuyền đánh cá ra khơi vào thời điểm nào trong ngày?",
            "options": [
                "Lúc hoàng hôn buông xuống, mặt trời lặn xuống biển",
                "Lúc bình minh sáng sớm",
                "Lúc giữa trưa nắng gắt",
                "Lúc nửa đêm không trăng"
            ],
            "correctAnswer": "Lúc hoàng hôn buông xuống, mặt trời lặn xuống biển",
            "hint": "'Mặt trời xuống biển như hòn lửa / Sóng đã cài then đêm sập cửa...'",
            "explanation": "Ra khơi khi hoàng hôn buông xuống trên biển Đông."
        },
        {
            "id": "vn37-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khí thế của đoàn thuyền ra khơi được miêu tả hào hùng như thế nào?",
            "options": [
                "Đoàn thuyền ra khơi cùng tiếng hát cất lên rộn rã, cánh buồm căng gió như lướt sóng mây",
                "Đi trong lặng lẽ sợ hãi",
                "Thuyền bị hỏng máy trôi dạt",
                "Không ai dám cất tiếng nói"
            ],
            "correctAnswer": "Đoàn thuyền ra khơi cùng tiếng hát cất lên rộn rã, cánh buồm căng gió như lướt sóng mây",
            "hint": "'Đoàn thuyền đánh cá lại ra khơi / Câu hát căng buồm cùng gió khơi...'",
            "explanation": "Khí thế hăng hái, lạc quan với tiếng hát gọi cá hào sảng lướt sóng."
        },
        {
            "id": "vn37-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Biển cả quê hương hiện lên trong bài thơ đẹp đẽ và giàu có với những loài cá nào?",
            "options": [
                "Cá nhụ, cá chim, cá đé, cá song lấp lánh muôn màu như hoa đuốc",
                "Cá sấu và cá mập hung dữ",
                "Chỉ có vài con cá nhỏ trôi dạt",
                "Không có loài cá nào"
            ],
            "correctAnswer": "Cá nhụ, cá chim, cá đé, cá song lấp lánh muôn màu như hoa đuốc",
            "hint": "'Cá nhụ cá chim cùng cá đé / Cá song lấp lánh đuốc đen hồng...'",
            "explanation": "Biển bạc giàu có với muôn ngàn loài cá quý khoe sắc như bức tranh sơn mài."
        },
        {
            "id": "vn37-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Biện pháp nghệ thuật độc đáo trong câu: 'Mặt trời xuống biển như hòn lửa / Sóng đã cài then, đêm sập cửa' là:",
            "options": [
                "So sánh kết hợp nhân hóa",
                "Chỉ có so sánh",
                "Chỉ có nhân hóa",
                "Nói quá"
            ],
            "correctAnswer": "So sánh kết hợp nhân hóa",
            "hint": "Ví mặt trời như 'hòn lửa' (so sánh), sóng 'cài then', đêm 'sập cửa' (nhân hóa vũ trụ).",
            "explanation": "Vũ trụ bao la được nhân hóa như một ngôi nhà ấm cúng khổng lồ."
        },
        {
            "id": "vn37-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Cảnh đoàn thuyền đánh cá trở về vào sáng sớm được khắc họa thế nào?",
            "options": [
                "Đoàn thuyền chạy đua cùng mặt trời, khoang đầy ắp cá bạc lấp lánh mắt cá huy hoàng",
                "Về tay không vì bão lớn",
                "Thuyền về lúc trời tối mịt",
                "Các ngư dân mệt mỏi buông chèo"
            ],
            "correctAnswer": "Đoàn thuyền chạy đua cùng mặt trời, khoang đầy ắp cá bạc lấp lánh mắt cá huy hoàng",
            "hint": "'Đoàn thuyền chạy đua cùng mặt trời / Mặt trời đội biển nhô màu mới...'",
            "explanation": "Tư thế chiến thắng kỳ vĩ của con người làm chủ biển trời, khoang đầy ắp cá."
        },
        {
            "id": "vn37-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Cảm hứng chủ đạo bao trùm toàn bộ thi phẩm 'Đoàn thuyền đánh cá' là:",
            "options": [
                "Khúc ca ca ngợi vẻ đẹp trù phú của biển trời quê hương và niềm vui hăng say lao động làm chủ đất nước",
                "Nỗi sợ hãi trước sức mạnh hung dữ của đại dương",
                "Nỗi buồn xa xứ của người đánh cá",
                "Kể lại một vụ tai nạn trên biển"
            ],
            "correctAnswer": "Khúc ca ca ngợi vẻ đẹp trù phú của biển trời quê hương và niềm vui hăng say lao động làm chủ đất nước",
            "hint": "Bản anh hùng ca tráng lệ về con người mới làm chủ thiên nhiên, dựng xây Tổ quốc.",
            "explanation": "Khúc tráng ca ngợi ca con người lao động mới với tầm vóc kỳ vĩ sánh ngang vũ trụ."
        },
        {
            "id": "vn37-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hình ảnh con người lao động trong bài thơ có tư thế và tầm vóc như thế nào?",
            "options": [
                "Tầm vóc kỳ vĩ, hào hùng, sánh ngang cùng vũ trụ và làm chủ thiên nhiên đất trời",
                "Nhỏ bé và bất lực trước sóng gió",
                "Chỉ mong kiếm sống qua ngày",
                "Cam chịu số phận khó khăn"
            ],
            "correctAnswer": "Tầm vóc kỳ vĩ, hào hùng, sánh ngang cùng vũ trụ và làm chủ thiên nhiên đất trời",
            "hint": "'Thuyền ta lái gió với buồm trăng / Lướt giữa mây cao với biển bằng...'",
            "explanation": "Hình ảnh con người mới tràn đầy khí phách hiên ngang, tự tin làm chủ biển khơi."
        }
    ],
    speedQuestions: [
        {
            "id": "vn37-s1",
            "prompt": "Đoàn thuyền đánh cá ra khơi vào lúc:",
            "options": [
                "Hoàng hôn (chiều tối)",
                "Bình minh",
                "Buổi trưa",
                "Nửa đêm"
            ],
            "correctAnswer": "Hoàng hôn (chiều tối)",
            "explanation": "Mặt trời xuống biển."
        },
        {
            "id": "vn37-s2",
            "prompt": "Đoàn thuyền trở về vào lúc:",
            "options": [
                "Bình minh sáng sớm",
                "Buổi trưa",
                "Hoàng hôn",
                "Đêm khuya"
            ],
            "correctAnswer": "Bình minh sáng sớm",
            "explanation": "Chạy đua cùng mặt trời."
        },
        {
            "id": "vn37-s3",
            "prompt": "Tác giả bài thơ là ai?",
            "options": [
                "Huy Cận",
                "Hồ Chí Minh",
                "Trần Đăng Khoa",
                "Nguyễn Du"
            ],
            "correctAnswer": "Huy Cận",
            "explanation": "Huy Cận."
        }
    ]
  },
  'vn-b38': {
    practiceQuestions: [
        {
            "id": "vn38-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Các cặp từ nào dưới đây là các cặp từ hô ứng thường dùng để nối các vế câu ghép?",
            "options": [
                "vừa... đã...; chưa... đã...; mới... đã...; càng... càng...",
                "vì... nên...; do... nên...",
                "tuy... nhưng...; mặc dù... nhưng...",
                "nếu... thì...; giá... thì..."
            ],
            "correctAnswer": "vừa... đã...; chưa... đã...; mới... đã...; càng... càng...",
            "hint": "Các cặp phó từ, chỉ từ đi đôi với nhau biểu thị sự gắn kết chặt chẽ về hành động, mức độ.",
            "explanation": "Vừa... đã..., chưa... đã..., càng... càng... là các cặp từ hô ứng điển hình."
        },
        {
            "id": "vn38-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Điền cặp từ hô ứng thích hợp vào câu: 'Mặt trời ... mọc, sương mù ... tan biến.'",
            "options": [
                "vừa... đã...",
                "nếu... thì...",
                "tuy... nhưng...",
                "vì... nên..."
            ],
            "correctAnswer": "vừa... đã...",
            "hint": "Biểu thị hai hành động xảy ra nối tiếp nhau rất nhanh trong nháy mắt.",
            "explanation": "'vừa... đã...' biểu thị sự nối tiếp tức thì giữa hai hiện tượng."
        },
        {
            "id": "vn38-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Cặp từ hô ứng 'càng... càng...' trong câu: 'Trời càng mưa to, nước sông càng dâng cao' biểu thị mối quan hệ:",
            "options": [
                "Tăng tiến theo mức độ",
                "Tương phản đối lập",
                "Lựa chọn loại trừ",
                "Nguyên nhân kết quả đơn thuần"
            ],
            "correctAnswer": "Tăng tiến theo mức độ",
            "hint": "Mức độ của hành động vế sau tăng tiến tương ứng theo mức độ của vế trước.",
            "explanation": "'Càng... càng...' biểu thị sự tăng tiến tỷ lệ thuận về mức độ."
        },
        {
            "id": "vn38-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Điền cặp từ hô ứng thích hợp vào câu: 'Thủy Tinh dâng nước cao bao nhiêu, Sơn Tinh dâng núi cao ...':",
            "options": [
                "Bấy nhiêu",
                "Bấy chừ",
                "Bấy lâu",
                "Tất cả"
            ],
            "correctAnswer": "Bấy nhiêu",
            "hint": "Cặp đại từ chỉ số lượng tương ứng: 'bao nhiêu... bấy nhiêu...'",
            "explanation": "Cặp từ hô ứng 'bao nhiêu... bấy nhiêu...' gắn kết hai vế câu truyền thuyết."
        },
        {
            "id": "vn38-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong câu ghép nối bằng cặp từ hô ứng, ta có thể bỏ một trong hai từ của cặp từ hô ứng đi được không?",
            "options": [
                "Không được, vì các từ này luôn phải đi cặp với nhau mới đảm bảo cấu trúc và ý nghĩa",
                "Có thể bỏ tùy ý",
                "Chỉ cần giữ từ đầu tiên",
                "Chỉ cần giữ từ thứ hai"
            ],
            "correctAnswer": "Không được, vì các từ này luôn phải đi cặp với nhau mới đảm bảo cấu trúc và ý nghĩa",
            "hint": "Hô ứng có nghĩa là 'gọi nhau, đáp lời nhau', thiếu một từ câu sẽ cụt hoặc sai nghĩa.",
            "explanation": "Cặp từ hô ứng đi liền như một chỉnh thể không thể tách rời."
        },
        {
            "id": "vn38-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Cặp từ hô ứng nào diễn tả hành động xảy ra trước cả khi hành động khác kịp hoàn thành?",
            "options": [
                "Chưa... đã...",
                "Vừa... vừa...",
                "Đâu... đấy...",
                "Sao... vậy..."
            ],
            "correctAnswer": "Chưa... đã...",
            "hint": "Ví dụ: 'Chưa đi đến chợ đã hết tiền', 'Chưa nắng đã tắt'.",
            "explanation": "'Chưa... đã...' nhấn mạnh sự bất ngờ, diễn biến quá nhanh."
        },
        {
            "id": "vn38-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Chọn câu văn sử dụng cặp từ hô ứng diễn tả tình cảm gia đình thắm thiết nhất:",
            "options": [
                "Mẹ càng già yếu, em càng yêu thương và kính trọng mẹ nhiều hơn.",
                "Mẹ chưa đi làm đã về.",
                "Trời vừa mưa mẹ đã đi ra đường.",
                "Mẹ nói sao thì làm vậy."
            ],
            "correctAnswer": "Mẹ càng già yếu, em càng yêu thương và kính trọng mẹ nhiều hơn.",
            "hint": "Sự tăng tiến của lòng hiếu thảo theo năm tháng đời mẹ.",
            "explanation": "Thể hiện chiều sâu tình cảm tăng tiến chân thành, xúc động."
        },
        {
            "id": "vn38-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Nối vế câu bằng cặp từ hô ứng 'nào... nấy...' trong câu nào dưới đây là đúng chuẩn tiếng Việt?",
            "options": [
                "Người nào việc nấy",
                "Học nào thi nấy",
                "Ăn nào nói nấy",
                "Cây nào lá nấy"
            ],
            "correctAnswer": "Người nào việc nấy",
            "hint": "Thành ngữ quen thuộc chỉ sự phân công công việc rành mạch, đúng người đúng việc.",
            "explanation": "'Người nào việc nấy' phân công trách nhiệm rõ ràng."
        }
    ],
    speedQuestions: [
        {
            "id": "vn38-s1",
            "prompt": "Điền vào chỗ trống: Càng học ... thấy mình còn phải cố gắng:",
            "options": [
                "Càng",
                "Vừa",
                "Đã",
                "Chưa"
            ],
            "correctAnswer": "Càng",
            "explanation": "Càng... càng..."
        },
        {
            "id": "vn38-s2",
            "prompt": "Cặp từ 'vừa... đã...' biểu thị hành động xảy ra:",
            "options": [
                "Rất nhanh, nối tiếp tức thì",
                "Cách nhau nhiều năm",
                "Không bao giờ xảy ra",
                "Chậm chạp"
            ],
            "correctAnswer": "Rất nhanh, nối tiếp tức thì",
            "explanation": "Nối tiếp tức thì."
        },
        {
            "id": "vn38-s3",
            "prompt": "Điền vào chỗ trống: Chưa học bài ... đòi đi chơi:",
            "options": [
                "Đã",
                "Mới",
                "Vừa",
                "Càng"
            ],
            "correctAnswer": "Đã",
            "explanation": "Chưa... đã..."
        }
    ]
  },
  'vn-b39': {
    practiceQuestions: [
        {
            "id": "vn39-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Ước mơ lớn lao của bạn nhỏ tên Mát trong bài đọc là gì?",
            "options": [
                "Trồng thật nhiều cây xanh để tạo nên một khu rừng trù phú cho muông thú sinh sống",
                "Xây một tòa lâu đài bằng gỗ",
                "Chế tạo xe ô tô đua",
                "Đi tìm kho báu dưới lòng đất"
            ],
            "correctAnswer": "Trồng thật nhiều cây xanh để tạo nên một khu rừng trù phú cho muông thú sinh sống",
            "hint": "Tình yêu thiên nhiên và mong ước gieo màu xanh lên đồi trọc.",
            "explanation": "Mát ước mơ trồng cây gây dựng nên một khu rừng xanh tươi tốt."
        },
        {
            "id": "vn39-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Mát đã bắt đầu hành trình tạo dựng khu rừng từ việc làm nhỏ bé nào?",
            "options": [
                "Thu nhặt từng hạt giống cây rừng, ươm mầm trong những chiếc chậu nhỏ và đem trồng trên đồi",
                "Mua cả cánh rừng bằng tiền tiết kiệm",
                "Thuê máy bay thả hạt giống",
                "Chờ đợi người khác trồng giúp"
            ],
            "correctAnswer": "Thu nhặt từng hạt giống cây rừng, ươm mầm trong những chiếc chậu nhỏ và đem trồng trên đồi",
            "hint": "Bắt đầu từ những mầm non nhỏ bé được chăm sóc bằng cả trái tim kiên trì.",
            "explanation": "Tự tay nhặt hạt giống, kiên trì ươm mầm và trồng từng cây non."
        },
        {
            "id": "vn39-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Những khó khăn mà Mát phải đối mặt trong quá trình chăm sóc cây non là gì?",
            "options": [
                "Thời tiết khô hạn, đất đai sỏi đá cằn cỗi và sự nghi ngờ của những người xung quanh",
                "Bị thú dữ tấn công",
                "Không có dụng cụ tưới nước",
                "Khu rừng bị ngập lụt quanh năm"
            ],
            "correctAnswer": "Thời tiết khô hạn, đất đai sỏi đá cằn cỗi và sự nghi ngờ của những người xung quanh",
            "hint": "Đất khô sỏi đá và những lời bàn lùi không làm Mát nản chí.",
            "explanation": "Vượt qua thử thách của đất cằn, nắng hạn và sự hoài nghi của mọi người."
        },
        {
            "id": "vn39-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Điều gì đã giúp Mát không bỏ cuộc và kiên trì suốt bao năm tháng?",
            "options": [
                "Niềm tin mãnh liệt vào sức sống của cây xanh và tình yêu tha thiết đối với thiên nhiên Trái Đất",
                "Muốn được nổi tiếng trên truyền hình",
                "Được trả nhiều tiền công",
                "Bị bắt buộc phải làm"
            ],
            "correctAnswer": "Niềm tin mãnh liệt vào sức sống của cây xanh và tình yêu tha thiết đối với thiên nhiên Trái Đất",
            "hint": "Tình yêu cây cỏ trong sáng và sự kiên trì bền bỉ từ đáy lòng.",
            "explanation": "Tình yêu thiên nhiên vô điều kiện và niềm tin vào tương lai màu xanh."
        },
        {
            "id": "vn39-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Kết quả kỳ diệu sau nhiều năm nỗ lực của Mát là gì?",
            "options": [
                "Ngọn đồi trọc cằn cỗi ngày nào đã biến thành một khu rừng xanh ngát rộn rã tiếng chim muông về làm tổ",
                "Các cây đều chết khô",
                "Mát phải bỏ cuộc dọn đi nơi khác",
                "Khu rừng bị chặt phá hết"
            ],
            "correctAnswer": "Ngọn đồi trọc cằn cỗi ngày nào đã biến thành một khu rừng xanh ngát rộn rã tiếng chim muông về làm tổ",
            "hint": "Màu xanh chiến thắng sự cằn cỗi, chim muông kéo về ríu rít.",
            "explanation": "Đồi hoang biến thành khu rừng rợp bóng mát, hồi sinh sự sống muôn loài."
        },
        {
            "id": "vn39-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Thái độ của dân làng đối với Mát đã thay đổi như thế nào?",
            "options": [
                "Từ hoài nghi chuyển sang thán phục, biết ơn và cùng nhau chung tay bảo vệ khu rừng",
                "Vẫn tiếp tục chê cười",
                "Muốn chặt cây lấy gỗ",
                "Hoàn toàn dửng dưng không quan tâm"
            ],
            "correctAnswer": "Từ hoài nghi chuyển sang thán phục, biết ơn và cùng nhau chung tay bảo vệ khu rừng",
            "hint": "Hành động đẹp lan tỏa và lay động ý thức cộng đồng.",
            "explanation": "Mọi người khâm phục tấm lòng của Mát và cùng nhau gìn giữ màu xanh."
        },
        {
            "id": "vn39-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Thông điệp sâu sắc nhất mà câu chuyện 'Khu rừng của Mát' gửi đến mỗi chúng ta là:",
            "options": [
                "Mỗi hành động nhỏ bé nhưng kiên trì và xuất phát từ tình yêu thương có thể làm thay đổi thế giới",
                "Chỉ người lớn mới trồng được rừng",
                "Muốn có rừng chỉ cần đợi thiên nhiên tự mọc",
                "Không nên ước mơ những điều quá lớn lao"
            ],
            "correctAnswer": "Mỗi hành động nhỏ bé nhưng kiên trì và xuất phát từ tình yêu thương có thể làm thay đổi thế giới",
            "hint": "Một cánh én không làm nên mùa xuân, nhưng một người kiên trì có thể hồi sinh một cánh rừng.",
            "explanation": "Sức mạnh của niềm tin, sự kiên trì và tình yêu thiên nhiên có thể tạo nên điều kỳ diệu."
        },
        {
            "id": "vn39-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hình ảnh 'Khu rừng của Mát' là biểu tượng tuyệt đẹp cho:",
            "options": [
                "Sự hồi sinh kỳ diệu của sự sống và khát vọng sống hòa hợp giữa con người với Mẹ Thiên nhiên",
                "Nơi khai thác lâm sản kiếm lời",
                "Khu vườn bách thú thu nhỏ",
                "Mảnh đất bỏ hoang"
            ],
            "correctAnswer": "Sự hồi sinh kỳ diệu của sự sống và khát vọng sống hòa hợp giữa con người với Mẹ Thiên nhiên",
            "hint": "Ước mơ về một hành tinh xanh bền vững chan chứa sự sống.",
            "explanation": "Biểu tượng cho hành tinh xanh và sự chung sống hài hòa của con người cùng thiên nhiên."
        }
    ],
    speedQuestions: [
        {
            "id": "vn39-s1",
            "prompt": "Mát đã biến vùng đất nào thành khu rừng xanh?",
            "options": [
                "Đồi trọc cằn cỗi",
                "Bãi biển",
                "Lòng sông",
                "Sa mạc tuyết"
            ],
            "correctAnswer": "Đồi trọc cằn cỗi",
            "explanation": "Đồi trọc cằn cỗi."
        },
        {
            "id": "vn39-s2",
            "prompt": "Cây xanh được ví như gì của Trái Đất?",
            "options": [
                "Lá phổi xanh",
                "Chiếc ô",
                "Cột cờ",
                "Mái nhà"
            ],
            "correctAnswer": "Lá phổi xanh",
            "explanation": "Lá phổi xanh điều hòa không khí."
        },
        {
            "id": "vn39-s3",
            "prompt": "Từ nào trái nghĩa với 'cằn cỗi'?",
            "options": [
                "Màu mỡ, phì nhiêu",
                "Khô cằn",
                "Sỏi đá",
                "Bạc màu"
            ],
            "correctAnswer": "Màu mỡ, phì nhiêu",
            "explanation": "Màu mỡ phì nhiêu."
        }
    ]
  },
  'vn-b40': {
    practiceQuestions: [
        {
            "id": "vn40-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Câu nào dưới đây là câu ghép nối bằng quan hệ từ?",
            "options": [
                "Vì trời mưa bão lớn nên các chuyến tàu đều phải tạm dừng xuất bến.",
                "Các bạn học sinh đang chăm chỉ học bài.",
                "Buổi sáng sớm, đàn chim cất tiếng hót líu lo.",
                "Mùa xuân đã về trên khắp nẻo đường quê hương."
            ],
            "correctAnswer": "Vì trời mưa bão lớn nên các chuyến tàu đều phải tạm dừng xuất bến.",
            "hint": "Có cặp quan hệ từ 'Vì... nên...' nối hai vế câu có đủ chủ ngữ - vị ngữ.",
            "explanation": "Câu ghép có 2 vế câu nối bằng cặp quan hệ từ 'Vì... nên...'."
        },
        {
            "id": "vn40-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Điền cặp từ hô ứng thích hợp vào câu: 'Em ... học xong bài tập đọc thì các bạn ... rủ nhau sang chơi.'",
            "options": [
                "Vừa... đã...",
                "Vì... nên...",
                "Tuy... nhưng...",
                "Nếu... thì..."
            ],
            "correctAnswer": "Vừa... đã...",
            "hint": "Chỉ hai hành động xảy ra nối tiếp liền nhau.",
            "explanation": "Cặp từ hô ứng 'vừa... đã...' thể hiện sự tiếp nối nhanh chóng."
        },
        {
            "id": "vn40-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Xác định chủ ngữ của vế thứ hai trong câu ghép: 'Trời hửng nắng và muôn ngàn đóa hoa bừng tỉnh khoe sắc thắm':",
            "options": [
                "Muôn ngàn đóa hoa",
                "Trời",
                "Khoe sắc thắm",
                "Muôn ngàn"
            ],
            "correctAnswer": "Muôn ngàn đóa hoa",
            "hint": "Cái gì bừng tỉnh khoe sắc thắm ở vế thứ hai?",
            "explanation": "'Muôn ngàn đóa hoa' là chủ ngữ của vế câu thứ hai."
        },
        {
            "id": "vn40-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong bài thơ 'Đoàn thuyền đánh cá', hình ảnh 'câu hát căng buồm' là biện pháp tu từ độc đáo thể hiện:",
            "options": [
                "Niềm lạc quan phơi phới và sức mạnh tinh thần to lớn của người lao động tiếp sức cho con thuyền",
                "Tiếng hát quá to làm rách buồm",
                "Gió ngừng thổi nên phải hát",
                "Chiếc máy phát nhạc đặt trên thuyền"
            ],
            "correctAnswer": "Niềm lạc quan phơi phới và sức mạnh tinh thần to lớn của người lao động tiếp sức cho con thuyền",
            "hint": "Âm thanh tiếng hát vô hình hòa cùng ngọn gió hữu hình đẩy buồm rẽ sóng.",
            "explanation": "Hình ảnh lãng mạn hóa sức mạnh tinh thần hào hùng của con người mới."
        },
        {
            "id": "vn40-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi viết đoạn văn tả hoạt động của bác thợ mộc, chi tiết nào sau đây là phù hợp nhất?",
            "options": [
                "Đôi tay thoăn thoắt đẩy lưỡi bào bén ngót, từng dải phoi bào mỏng dính uốn lượn rơi xuống",
                "Bác ngồi kê đơn thuốc cho bệnh nhân",
                "Bác đang gieo mạ ngoài đồng",
                "Bác điều khiển máy bay trên bầu trời"
            ],
            "correctAnswer": "Đôi tay thoăn thoắt đẩy lưỡi bào bén ngót, từng dải phoi bào mỏng dính uốn lượn rơi xuống",
            "hint": "Động tác đẩy bào, phoi bào gỗ xoăn tít đặc trưng của nghề mộc.",
            "explanation": "Miêu tả chính xác động tác nghề nghiệp điêu luyện của người thợ mộc."
        },
        {
            "id": "vn40-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu tục ngữ nào dưới đây nói về sự gắn kết giữa con người và thiên nhiên đất trời trong lao động sản xuất?",
            "options": [
                "Nhất nước, nhì phân, tam cần, tứ giống",
                "Uống nước nhớ nguồn",
                "Ăn vóc học hay",
                "Lá lành đùm lá rách"
            ],
            "correctAnswer": "Nhất nước, nhì phân, tam cần, tứ giống",
            "hint": "Kinh nghiệm nông nghiệp quý báu truyền đời của người nông dân.",
            "explanation": "Bốn yếu tố cốt lõi của nghề trồng lúa nước truyền thống Việt Nam."
        },
        {
            "id": "vn40-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Tách câu ghép sau thành hai câu đơn: 'Mặt biển mênh mông gợn sóng và những cánh hải âu chao liệng đón gió.'",
            "options": [
                "Mặt biển mênh mông gợn sóng. Những cánh hải âu chao liệng đón gió.",
                "Mặt biển mênh mông. Gợn sóng và hải âu.",
                "Mặt biển và hải âu. Mênh mông chao liệng.",
                "Không thể tách thành hai câu đơn được."
            ],
            "correctAnswer": "Mặt biển mênh mông gợn sóng. Những cánh hải âu chao liệng đón gió.",
            "hint": "Bỏ quan hệ từ 'và', thay bằng dấu chấm để tách thành 2 câu đơn hoàn chỉnh ngữ pháp.",
            "explanation": "Mỗi vế câu đủ nòng cốt C-V độc lập nên dễ dàng tách thành 2 câu đơn."
        },
        {
            "id": "vn40-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Vẻ đẹp cuộc sống được ngợi ca xuyên suốt Chủ điểm 5 bắt nguồn từ đâu?",
            "options": [
                "Từ vẻ đẹp của lao động cần cù, tình yêu thương con người và sự hòa quyện với non sông đất nước",
                "Từ tiền tài và sự giàu sang phú quý",
                "Từ các trò chơi may rủi",
                "Từ việc nghỉ ngơi không phải làm việc"
            ],
            "correctAnswer": "Từ vẻ đẹp của lao động cần cù, tình yêu thương con người và sự hòa quyện với non sông đất nước",
            "hint": "Cuộc sống đẹp khi con người biết lao động, yêu thương và cống hiến.",
            "explanation": "Lao động chân chính và tình yêu thương tha thiết là cội nguồn của mọi vẻ đẹp cuộc đời."
        }
    ],
    speedQuestions: [
        {
            "id": "vn40-s1",
            "prompt": "'Mặt trời của mẹ, em nằm trên lưng' là thơ của:",
            "options": [
                "Nguyễn Khoa Điềm",
                "Trần Đăng Khoa",
                "Huy Cận",
                "Tô Hoài"
            ],
            "correctAnswer": "Nguyễn Khoa Điềm",
            "explanation": "Nguyễn Khoa Điềm."
        },
        {
            "id": "vn40-s2",
            "prompt": "Càng chăm học, em ... tiến bộ:",
            "options": [
                "Càng",
                "Vừa",
                "Đã",
                "Mới"
            ],
            "correctAnswer": "Càng",
            "explanation": "Càng... càng..."
        },
        {
            "id": "vn40-s3",
            "prompt": "Từ nào sau đây là quan hệ từ?",
            "options": [
                "Nên",
                "Bàn",
                "Chạy",
                "Xanh"
            ],
            "correctAnswer": "Nên",
            "explanation": "Quan hệ từ 'nên'."
        }
    ]
  },
  'vn-b41': {
    practiceQuestions: [
        {
            "id": "vn41-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Hội thổi cơm thi ở Đồng Văn bắt nguồn từ đâu trong lịch sử?",
            "options": [
                "Từ các cuộc tập trận và nấu cơm khao quân của các tướng lĩnh thời xưa bên dòng sông Đáy",
                "Từ một cuộc thi nấu ăn quốc tế",
                "Do các đầu bếp nhà hàng tổ chức",
                "Từ một lễ hội ở nước ngoài du nhập vào"
            ],
            "correctAnswer": "Từ các cuộc tập trận và nấu cơm khao quân của các tướng lĩnh thời xưa bên dòng sông Đáy",
            "hint": "Gắn liền với truyền thống rèn quân, luyện tài của cha ông thời đánh giặc giữ nước.",
            "explanation": "Bắt nguồn từ các cuộc tập trận thời xưa rèn luyện sự nhanh nhẹn, tháo vát của nghĩa quân."
        },
        {
            "id": "vn41-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Để bắt đầu cuộc thi nấu cơm, các đội phải vượt qua thử thách đầu tiên nào?",
            "options": [
                "Leo lên cây chuối cao trơn bôi mỡ để lấy que đóm lấy lửa",
                "Chạy marathon 10 km",
                "Bơi qua sông sâu",
                "Giải một bài toán khó"
            ],
            "correctAnswer": "Leo lên cây chuối cao trơn bôi mỡ để lấy que đóm lấy lửa",
            "hint": "Thử thách đòi hỏi sự khéo léo, dũng cảm và phối hợp đồng đội ăn ý.",
            "explanation": "Trò leo cây chuối lấy đóm lấy lửa vô cùng hào hứng, thử thách lòng dũng cảm và tài khéo."
        },
        {
            "id": "vn41-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Các công đoạn chuẩn bị nấu cơm trong hội thi diễn ra như thế nào?",
            "options": [
                "Mỗi người một việc: người giã gạo, người sàng sẩy, người lấy nước, người chụm lửa nấu cơm thoăn thoắt",
                "Dùng nồi cơm điện cắm điện nấu tự động",
                "Mua cơm nấu sẵn ngoài quán mang vào nộp",
                "Chỉ có một người làm từ đầu đến cuối"
            ],
            "correctAnswer": "Mỗi người một việc: người giã gạo, người sàng sẩy, người lấy nước, người chụm lửa nấu cơm thoăn thoắt",
            "hint": "Sự phân công lao động nhịp nhàng, gắn kết tinh thần đồng đội tuyệt vời.",
            "explanation": "Phối hợp nhịp nhàng: giã gạo, dần sàng, lấy nước, nhóm lửa tạo nên không khí tưng bừng."
        },
        {
            "id": "vn41-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Nồi cơm thi được nấu như thế nào trong khi các đội di chuyển quanh sân đình?",
            "options": [
                "Nồi cơm được treo vào một cần trúc uốn cong cắm sau lưng, vừa đi vừa nhóm lửa nấu",
                "Đặt trên bếp ga mini",
                "Nấu trong lò nướng hiện đại",
                "Đặt yên một chỗ dưới bếp lò gạch"
            ],
            "correctAnswer": "Nồi cơm được treo vào một cần trúc uốn cong cắm sau lưng, vừa đi vừa nhóm lửa nấu",
            "hint": "Cần trúc uốn cong giữ niêu cơm đung đưa theo bước chân đi uyển chuyển.",
            "explanation": "Đặc sắc ở chỗ vừa đi diễu hành vừa giữ ngọn lửa nấu cơm chín đều trên cần trúc."
        },
        {
            "id": "vn41-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Tiêu chuẩn để ban giám khảo chấm điểm và trao giải cho nồi cơm thắng cuộc là:",
            "options": [
                "Cơm chín dẻo, trắng thơm ngon, hạt cơm không bị khê, không bị sống và nấu đúng thời gian quy định",
                "Nồi cơm to nhất",
                "Đội nào hát to nhất thì thắng",
                "Cơm có nhiều màu sắc phẩm màu"
            ],
            "correctAnswer": "Cơm chín dẻo, trắng thơm ngon, hạt cơm không bị khê, không bị sống và nấu đúng thời gian quy định",
            "hint": "Đạt độ dẻo thơm tinh túy của hạt gạo quê hương.",
            "explanation": "Cơm dẻo thơm, trắng nõn, không khê khét và bảo đảm thời gian quy định."
        },
        {
            "id": "vn41-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Ý nghĩa văn hóa của hội thổi cơm thi ở Đồng Văn là gì?",
            "options": [
                "Gìn giữ nét đẹp truyền thống cha ông, tôn vinh hạt ngọc thực và rèn luyện sự khéo léo, đoàn kết cộng đồng",
                "Để bán cơm kiếm tiền",
                "Để phân biệt người giàu người nghèo",
                "Chỉ để cho vui không có ý nghĩa gì"
            ],
            "correctAnswer": "Gìn giữ nét đẹp truyền thống cha ông, tôn vinh hạt ngọc thực và rèn luyện sự khéo léo, đoàn kết cộng đồng",
            "hint": "Lễ hội dân gian bồi đắp tình đoàn kết xóm làng và tôn vinh văn minh lúa nước.",
            "explanation": "Tôn vinh văn hóa lúa nước, rèn luyện đức tính khéo léo và tinh thần cố kết cộng đồng."
        },
        {
            "id": "vn41-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Không khí ngày hội được tác giả miêu tả qua những từ ngữ gợi cảm nào?",
            "options": [
                "Náo nức, rộn rã tiếng reo hò, trống dong cờ mở tưng bừng náo nhiệt",
                "Vắng vẻ, hiu quạnh, im lìm",
                "Buồn tẻ, ảm đạm không bóng người",
                "Căng thẳng, đáng sợ"
            ],
            "correctAnswer": "Náo nức, rộn rã tiếng reo hò, trống dong cờ mở tưng bừng náo nhiệt",
            "hint": "Tiếng trống hội rộn ràng, tiếng reo hò cổ vũ vang dội sân đình.",
            "explanation": "Bầu không khí lễ hội dân gian tưng bừng, náo nức lòng người."
        },
        {
            "id": "vn41-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Qua hội thi, ta thấy được phẩm chất đáng quý nào của người nông dân Việt Nam?",
            "options": [
                "Sự cần cù, nhanh nhẹn, tháo vát, thông minh và tinh thần lạc quan yêu đời",
                "Tính ganh đua đố kỵ",
                "Sự bảo thủ lạc hậu",
                "Sự lười nhác"
            ],
            "correctAnswer": "Sự cần cù, nhanh nhẹn, tháo vát, thông minh và tinh thần lạc quan yêu đời",
            "hint": "Nhanh tay, khéo mắt, đoàn kết và luôn vui tươi trong lao động.",
            "explanation": "Đức tính tháo vát, khéo léo và tinh thần đoàn kết tuyệt vời của nhân dân ta."
        }
    ],
    speedQuestions: [
        {
            "id": "vn41-s1",
            "prompt": "Hội thổi cơm thi Đồng Văn bắt nguồn bên dòng sông nào?",
            "options": [
                "Sông Đáy",
                "Sông Hồng",
                "Sông Lam",
                "Sông Tiền"
            ],
            "correctAnswer": "Sông Đáy",
            "explanation": "Dòng sông Đáy."
        },
        {
            "id": "vn41-s2",
            "prompt": "Cần câu treo nồi cơm làm bằng cây:",
            "options": [
                "Cây trúc",
                "Cây sắt",
                "Cây bàng",
                "Cây cau"
            ],
            "correctAnswer": "Cây trúc",
            "explanation": "Cần trúc uốn cong."
        },
        {
            "id": "vn41-s3",
            "prompt": "Từ nào sau đây tả không khí lễ hội?",
            "options": [
                "Náo nhiệt",
                "Vắng ngắt",
                "Tĩnh mịch",
                "Âm u"
            ],
            "correctAnswer": "Náo nhiệt",
            "explanation": "Náo nhiệt."
        }
    ]
  },
  'vn-b42': {
    practiceQuestions: [
        {
            "id": "vn42-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Liên kết câu bằng cách lặp từ ngữ là gì?",
            "options": [
                "Lặp lại trong câu sau những từ ngữ đã xuất hiện ở câu trước để tạo sự liên kết mạch lạc giữa các câu",
                "Lặp lại một từ nhiều lần trong một câu văn",
                "Dùng từ trái nghĩa để nối",
                "Viết hoa lại từ ngữ đó"
            ],
            "correctAnswer": "Lặp lại trong câu sau những từ ngữ đã xuất hiện ở câu trước để tạo sự liên kết mạch lạc giữa các câu",
            "hint": "Phép lặp từ ngữ giữa các câu liền kề trong đoạn văn.",
            "explanation": "Lặp lại từ ngữ của câu trước vào câu sau nhằm gắn kết nội dung các câu trong đoạn."
        },
        {
            "id": "vn42-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Trong đoạn văn: 'Đền Thượng nằm chót vót trên đỉnh núi Nghĩa Lĩnh. Trước đền, những khóm hải đường đâm bông rực đỏ.', từ ngữ nào được lặp lại để liên kết câu?",
            "options": [
                "Đền",
                "Núi",
                "Rực đỏ",
                "Nằm"
            ],
            "correctAnswer": "Đền",
            "hint": "Từ 'đền' xuất hiện ở cả câu 1 và câu 2 nối kết chủ đề đoạn văn.",
            "explanation": "Từ 'đền' được lặp lại liên kết câu 2 với câu 1."
        },
        {
            "id": "vn42-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Tác dụng tích cực của phép lặp từ ngữ trong văn bản là:",
            "options": [
                "Giúp các câu trong đoạn gắn bó chặt chẽ với nhau về ý nghĩa và cùng hướng về một chủ đề chung",
                "Làm cho bài văn dài ra mà không cần nghĩ thêm ý",
                "Tạo nên sự đơn điệu lặp đi lặp lại",
                "Gây cảm giác nhàm chán cho người đọc"
            ],
            "correctAnswer": "Giúp các câu trong đoạn gắn bó chặt chẽ với nhau về ý nghĩa và cùng hướng về một chủ đề chung",
            "hint": "Tạo mối liên hệ hữu cơ, nhất quán về mặt ngữ nghĩa và chủ đề.",
            "explanation": "Gắn kết chặt chẽ ý nghĩa giữa các câu, giữ vững mạch chủ đề văn bản."
        },
        {
            "id": "vn42-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Cần phân biệt 'phép lặp từ ngữ liên kết câu' với lỗi gì khi viết văn?",
            "options": [
                "Lỗi lặp từ luộm thuộm (do vốn từ nghèo nàn, lặp vô ích không mục đích nghệ thuật)",
                "Lỗi chính tả",
                "Lỗi viết hoa chữ cái đầu câu",
                "Lỗi dùng câu quá dài"
            ],
            "correctAnswer": "Lỗi lặp từ luộm thuộm (do vốn từ nghèo nàn, lặp vô ích không mục đích nghệ thuật)",
            "hint": "Phép lặp có chủ đích liên kết khác với lỗi lặp từ vụng về, vô nghĩa.",
            "explanation": "Phân biệt phép lặp nghệ thuật với lỗi lặp từ ngữ luộm thuộm, vụng về."
        },
        {
            "id": "vn42-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong đoạn thơ: 'Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín. Tre hi sinh để bảo vệ con người.', từ ngữ được lặp lại là:",
            "options": [
                "Tre, giữ",
                "Người, nước",
                "Nhà, đồng",
                "Bảo vệ, hi sinh"
            ],
            "correctAnswer": "Tre, giữ",
            "hint": "Điệp từ 'Tre' và 'giữ' tạo nên nhịp điệu hào hùng, đanh thép của cây tre Việt Nam.",
            "explanation": "Từ 'Tre' và 'giữ' lặp lại vừa liên kết câu vừa tạo âm hưởng hào hùng xúc động."
        },
        {
            "id": "vn42-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Chọn từ ngữ thích hợp điền vào câu sau để tạo sự liên kết câu bằng cách lặp từ: 'Hoa sen tỏa hương thơm ngát khắp đầm. ... là biểu tượng thanh khiết của tâm hồn Việt Nam.'",
            "options": [
                "Hoa sen",
                "Cây bàng",
                "Hoa hồng",
                "Dòng sông"
            ],
            "correctAnswer": "Hoa sen",
            "hint": "Lặp lại chủ ngữ 'Hoa sen' ở câu 2.",
            "explanation": "Lặp lại 'Hoa sen' giữ vững mạch chủ đề ca ngợi loài hoa sen."
        },
        {
            "id": "vn42-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Đoạn văn sau có mắc lỗi lặp từ không: 'Hôm nay trời mưa. Trời mưa rất to. Vì trời mưa nên em ở nhà. Em ở nhà em xem ti vi.'?",
            "options": [
                "Có, đây là lỗi lặp từ vụng về, làm câu văn cụt lủn và nghèo nàn",
                "Không, đây là phép liên kết câu rất xuất sắc",
                "Chỉ lặp từ ở câu cuối",
                "Không có lỗi nào cả"
            ],
            "correctAnswer": "Có, đây là lỗi lặp từ vụng về, làm câu văn cụt lủn và nghèo nàn",
            "hint": "Lặp vô tội vạ các từ 'trời mưa', 'em ở nhà' khiến lời văn khô cứng, đơn điệu.",
            "explanation": "Đây là lỗi lặp từ luộm thuộm, cần dùng đại từ thay thế hoặc gộp câu."
        },
        {
            "id": "vn42-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Cách sửa đoạn văn mắc lỗi lặp từ trên hay và hợp lý nhất là:",
            "options": [
                "Hôm nay trời mưa rất to nên em không ra ngoài mà ở nhà đọc sách, xem ti-vi cùng gia đình.",
                "Giữ nguyên văn bản cũ",
                "Xóa hết chỉ để lại một chữ 'mưa'",
                "Thay tất cả chữ 'mưa' bằng chữ 'nắng'"
            ],
            "correctAnswer": "Hôm nay trời mưa rất to nên em không ra ngoài mà ở nhà đọc sách, xem ti-vi cùng gia đình.",
            "hint": "Gộp câu thành câu ghép mạch lạc, bổ sung chi tiết sinh động.",
            "explanation": "Câu văn được sắp xếp lại mạch lạc, giàu hình ảnh và không còn bị lặp luộm thuộm."
        }
    ],
    speedQuestions: [
        {
            "id": "vn42-s1",
            "prompt": "Phép lặp từ ngữ là lặp lại từ ngữ ở:",
            "options": [
                "Câu sau với câu trước",
                "Trong cùng 1 chữ",
                "Ở cuối sách",
                "Trong ngoặc đơn"
            ],
            "correctAnswer": "Câu sau với câu trước",
            "explanation": "Câu sau lặp từ của câu trước."
        },
        {
            "id": "vn42-s2",
            "prompt": "Lặp từ vô mục đích gây ra lỗi gì?",
            "options": [
                "Lỗi lặp từ luộm thuộm",
                "Lỗi chính tả",
                "Lỗi dấu câu",
                "Lỗi in ấn"
            ],
            "correctAnswer": "Lỗi lặp từ luộm thuộm",
            "explanation": "Lỗi lặp từ."
        },
        {
            "id": "vn42-s3",
            "prompt": "Phép lặp từ ngữ có tác dụng chính là:",
            "options": [
                "Liên kết câu trong đoạn",
                "Tạo vần thơ lục bát",
                "Tăng số trang viết",
                "Viết hoa danh từ"
            ],
            "correctAnswer": "Liên kết câu trong đoạn",
            "explanation": "Liên kết câu."
        }
    ]
  },
  'vn-b43': {
    practiceQuestions: [
        {
            "id": "vn43-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Cốm là thức quà thanh nhã đặc sản gắn liền với mùa nào và địa danh nào?",
            "options": [
                "Mùa thu Hà Nội (đặc biệt là làng Vòng)",
                "Mùa hè Đà Nẵng",
                "Mùa đông Sa Pa",
                "Mùa xuân Cần Thơ"
            ],
            "correctAnswer": "Mùa thu Hà Nội (đặc biệt là làng Vòng)",
            "hint": "Cốm làng Vòng đượm hương lúa non và sắc thu xứ Tràng An thanh lịch.",
            "explanation": "Cốm làng Vòng là thức quà mùa thu thanh tao nổi tiếng đất Hà thành."
        },
        {
            "id": "vn43-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Hạt cốm non được làm ra từ nguyên liệu chính là gì?",
            "options": [
                "Những bông lúa nếp non ngậm sữa ngọt ngào",
                "Hạt gạo tẻ phơi khô",
                "Hạt ngô nếp già",
                "Bột sắn dây ngào đường"
            ],
            "correctAnswer": "Những bông lúa nếp non ngậm sữa ngọt ngào",
            "hint": "Lúa nếp hoa vàng còn đẫm giọt sữa ngọt tinh khiết chắt lọc từ nắng gió đồng quê.",
            "explanation": "Làm từ bông lúa nếp non còn ngậm sữa thơm thanh khiết."
        },
        {
            "id": "vn43-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hạt cốm làng Vòng thường được gói trong loại lá nào để giữ trọn hương thơm thanh khiết?",
            "options": [
                "Lá sen tươi ướp hương mùa hạ hoặc lá ráy xanh mướt, buộc bằng sợi rơm vàng",
                "Giấy báo in chữ",
                "Túi ni lông màu đen",
                "Lá chuối khô cháy"
            ],
            "correctAnswer": "Lá sen tươi ướp hương mùa hạ hoặc lá ráy xanh mướt, buộc bằng sợi rơm vàng",
            "hint": "Lá sen gói trọn hương cốm, buộc sợi rơm vàng thơm mùi đồng ruộng.",
            "explanation": "Gói trong lá sen già đượm hương thanh khiết, buộc sợi rơm nếp vàng óng."
        },
        {
            "id": "vn43-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Nhà văn Thạch Lam từng ca ngợi cốm là thức quà đặc biệt như thế nào?",
            "options": [
                "Là thức quà thanh nhã và tinh khiết của đồng quê, mang trong mình cả linh hồn mùa thu đất Bắc",
                "Là món ăn nhanh đắt đỏ",
                "Chỉ dành riêng cho người giàu",
                "Món ăn khó nuốt"
            ],
            "correctAnswer": "Là thức quà thanh nhã và tinh khiết của đồng quê, mang trong mình cả linh hồn mùa thu đất Bắc",
            "hint": "Áng văn tinh tế của Thạch Lam trong 'Hà Nội ba mươi sáu phố phường'.",
            "explanation": "Cốm là kết tinh thanh nhã, giản dị mà thanh cao của đồng nội làng quê."
        },
        {
            "id": "vn43-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi thưởng thức món cốm, ta nên thưởng thức theo cách tao nhã nào?",
            "options": [
                "Ăn từng nhúm nhỏ, nhai thật chậm rãi để cảm nhận vị dẻo ngọt và hương thơm dìu dịu",
                "Ăn thật nhanh cho no bụng",
                "Đem nấu sôi sùng sục",
                "Ăn kèm với các loại gia vị cay nồng"
            ],
            "correctAnswer": "Ăn từng nhúm nhỏ, nhai thật chậm rãi để cảm nhận vị dẻo ngọt và hương thơm dìu dịu",
            "hint": "'Ăn cốm phải ăn từng chút ít, thong thả và ngẫm nghĩ...'",
            "explanation": "Thưởng thức thong thả để thấm thía vị ngọt thanh và hương thơm đồng nội."
        },
        {
            "id": "vn43-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Màu sắc tự nhiên của hạt cốm làng Vòng đạt chuẩn là màu gì?",
            "options": [
                "Màu xanh ngọc non dịu mát, mỏng manh như lá mạ",
                "Màu xanh phẩm màu chói gắt",
                "Màu đen sẫm",
                "Màu đỏ tươi"
            ],
            "correctAnswer": "Màu xanh ngọc non dịu mát, mỏng manh như lá mạ",
            "hint": "Sắc xanh mộc mạc tự nhiên của diệp lục lúa nếp non.",
            "explanation": "Màu xanh ngọc dịu mát, hạt cốm dẹt dẻo thơm tự nhiên."
        },
        {
            "id": "vn43-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Cốm non thường được người Hà Nội dùng làm món quà trang trọng gắn liền với nét đẹp phong tục nào?",
            "options": [
                "Làm sính lễ trong lễ ăn hỏi, đính hôn kết duyên đôi lứa (cốm hồng kết hợp quả hồng đỏ)",
                "Làm phần thưởng thi đấu thể thao",
                "Để cúng thần biển",
                "Để dự trữ mùa lũ"
            ],
            "correctAnswer": "Làm sính lễ trong lễ ăn hỏi, đính hôn kết duyên đôi lứa (cốm hồng kết hợp quả hồng đỏ)",
            "hint": "Cốm xanh sánh đôi với hồng đỏ biểu trưng cho sự hòa hợp, son sắt thủy chung.",
            "explanation": "Cốm non và hồng đỏ là biểu tượng duyên thắm lứa đôi trong phong tục cưới hỏi."
        },
        {
            "id": "vn43-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Tình cảm của tác giả đối với món cốm làng Vòng thể hiện nét đẹp tâm hồn nào?",
            "options": [
                "Sự nâng niu, trân trọng nét văn hóa ẩm thực tinh tế và tình yêu sâu lắng dành cho quê hương",
                "Sự tự mãn về đồ ăn vặt",
                "Chỉ thích ăn đồ ngọt",
                "Muốn quảng cáo mở tiệm bán cốm"
            ],
            "correctAnswer": "Sự nâng niu, trân trọng nét văn hóa ẩm thực tinh tế và tình yêu sâu lắng dành cho quê hương",
            "hint": "Tâm hồn thanh lịch, nhạy cảm biết trân quý những tinh hoa mộc mạc của quê cha đất tổ.",
            "explanation": "Tình yêu thiết tha với nét đẹp ẩm thực văn hóa thanh tao của đất Thăng Long."
        }
    ],
    speedQuestions: [
        {
            "id": "vn43-s1",
            "prompt": "Làng nghề làm cốm nổi tiếng nhất Hà Nội là:",
            "options": [
                "Làng Vòng",
                "Làng Gốm Bát Tràng",
                "Làng Vạn Phúc",
                "Làng Chuông"
            ],
            "correctAnswer": "Làng Vòng",
            "explanation": "Cốm làng Vòng."
        },
        {
            "id": "vn43-s2",
            "prompt": "Cốm được gói bằng lá gì để giữ hương thơm?",
            "options": [
                "Lá sen",
                "Lá chuối tiêu",
                "Lá bàng",
                "Lá dừa"
            ],
            "correctAnswer": "Lá sen",
            "explanation": "Lá sen."
        },
        {
            "id": "vn43-s3",
            "prompt": "Cốm là thức quà đặc trưng của mùa:",
            "options": [
                "Mùa thu",
                "Mùa xuân",
                "Mùa hè",
                "Mùa đông"
            ],
            "correctAnswer": "Mùa thu",
            "explanation": "Mùa thu."
        }
    ]
  },
  'vn-b44': {
    practiceQuestions: [
        {
            "id": "vn44-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Viết chương trình hoạt động nhằm mục đích gì?",
            "options": [
                "Lập kế hoạch cụ thể, khoa học để phân công nhiệm vụ và tiến hành một hoạt động tập thể đạt kết quả tốt nhất",
                "Để đọc giải trí lúc rảnh rỗi",
                "Viết một bức thư kể chuyện",
                "Làm thơ ca ngợi thiên nhiên"
            ],
            "correctAnswer": "Lập kế hoạch cụ thể, khoa học để phân công nhiệm vụ và tiến hành một hoạt động tập thể đạt kết quả tốt nhất",
            "hint": "Lập kế hoạch giúp công việc diễn ra chu đáo, không bị chồng chéo hay bỏ sót.",
            "explanation": "Lập chương trình giúp tổ chức công việc khoa học, phân công rõ ràng, đạt hiệu quả cao."
        },
        {
            "id": "vn44-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Một chương trình hoạt động thông thường gồm có mấy phần chính?",
            "options": [
                "3 phần: Mục đích; Phân công chuẩn bị; Chương trình cụ thể (tiến trình)",
                "1 phần duy nhất",
                "5 phần bắt buộc",
                "Không cần chia phần"
            ],
            "correctAnswer": "3 phần: Mục đích; Phân công chuẩn bị; Chương trình cụ thể (tiến trình)",
            "hint": "Cấu trúc 3 phần rõ ràng: Mục đích -> Chuẩn bị -> Tiến trình thực hiện.",
            "explanation": "Gồm 3 phần: Mục đích; Phân công chuẩn bị; Tiến trình cụ thể."
        },
        {
            "id": "vn44-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Phần 'Mục đích' trong chương trình hoạt động có nhiệm vụ:",
            "options": [
                "Nêu rõ lý do tổ chức hoạt động và ý nghĩa, kết quả cần đạt được của hoạt động đó",
                "Liệt kê danh sách tên tất cả học sinh",
                "Viết thời gian biểu ăn trưa",
                "Kể chuyện vui"
            ],
            "correctAnswer": "Nêu rõ lý do tổ chức hoạt động và ý nghĩa, kết quả cần đạt được của hoạt động đó",
            "hint": "Hoạt động này nhằm mục đích gì và rèn luyện điều gì cho các bạn?",
            "explanation": "Xác định rõ ý nghĩa, mục tiêu hoạt động hướng tới."
        },
        {
            "id": "vn44-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong phần 'Phân công chuẩn bị', yêu cầu quan trọng nhất là:",
            "options": [
                "Rõ người, rõ việc, rõ thời gian hoàn thành và rõ dụng cụ phương tiện cần thiết",
                "Chỉ giao việc cho bạn lớp trưởng",
                "Ai thích làm gì thì làm không cần ghi rõ",
                "Không cần chuẩn bị trước đồ dùng"
            ],
            "correctAnswer": "Rõ người, rõ việc, rõ thời gian hoàn thành và rõ dụng cụ phương tiện cần thiết",
            "hint": "Phân công cụ thể từng cá nhân, tổ nhóm để phát huy tinh thần trách nhiệm.",
            "explanation": "Rõ người, rõ việc, rõ thời hạn giúp mọi người chủ động thực hiện chu đáo."
        },
        {
            "id": "vn44-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hoạt động nào dưới đây rất cần lập một chương trình hoạt động chi tiết?",
            "options": [
                "Buổi cắm trại dã ngoại mừng ngày thành lập Đoàn 26/3 của toàn trường",
                "Việc một học sinh ngồi đọc sách 10 phút tại nhà",
                "Việc đi ngủ lúc chín giờ tối",
                "Việc ăn sáng hàng ngày"
            ],
            "correctAnswer": "Buổi cắm trại dã ngoại mừng ngày thành lập Đoàn 26/3 của toàn trường",
            "hint": "Hoạt động tập thể đông người với nhiều nội dung phức tạp.",
            "explanation": "Cắm trại dã ngoại là hoạt động tập thể lớn cần kế hoạch chi tiết, an toàn tuyệt đối."
        },
        {
            "id": "vn44-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong phần 'Chương trình cụ thể' (tiến trình), các hoạt động cần được sắp xếp theo:",
            "options": [
                "Trình tự thời gian diễn ra từ lúc bắt đầu đến khi kết thúc buổi hoạt động",
                "Xếp theo chữ cái tên người phụ trách",
                "Xếp việc khó làm trước, việc dễ làm sau ngẫu nhiên",
                "Không cần theo thứ tự nào"
            ],
            "correctAnswer": "Trình tự thời gian diễn ra từ lúc bắt đầu đến khi kết thúc buổi hoạt động",
            "hint": "Ghi rõ mốc giờ: 7h00 tập trung, 7h30 xuất phát, 8h30 khai mạc...",
            "explanation": "Sắp xếp theo thứ tự thời gian giúp các khâu diễn ra trôi chảy, đúng giờ."
        },
        {
            "id": "vn44-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Kế hoạch tổ chức 'Hội thi làm báo tường chào mừng ngày Nhà giáo Việt Nam 20/11' của chi đội lớp 5A thiếu mục nào sau đây sẽ dễ dẫn đến lúng túng khi chấm giải?",
            "options": [
                "Tiêu chí chấm điểm và cơ cấu giải thưởng",
                "Tên gọi của chi đội",
                "Lời chào mở đầu",
                "Chữ ký của ban chỉ huy chi đội"
            ],
            "correctAnswer": "Tiêu chí chấm điểm và cơ cấu giải thưởng",
            "hint": "Không có thang điểm tiêu chí cụ thể sẽ không thể đánh giá khách quan, công bằng.",
            "explanation": "Tiêu chí chấm điểm rõ ràng bảo đảm tính công minh, thuyết phục của hội thi."
        },
        {
            "id": "vn44-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Rèn luyện kỹ năng lập chương trình hoạt động từ tiểu học sẽ mang lại lợi ích gì cho tương lai?",
            "options": [
                "Hình thành tư duy logic, tác phong làm việc khoa học, kỹ năng lãnh đạo và quản lý thời gian hiệu quả",
                "Để sau này không cần làm việc",
                "Chỉ để được điểm cao môn Tiếng Việt",
                "Không có tác dụng gì trong cuộc sống sau này"
            ],
            "correctAnswer": "Hình thành tư duy logic, tác phong làm việc khoa học, kỹ năng lãnh đạo và quản lý thời gian hiệu quả",
            "hint": "Kỹ năng mềm thiết yếu của người công dân hiện đại và thành đạt.",
            "explanation": "Kỹ năng lập kế hoạch rèn tác phong làm việc chuyên nghiệp, có trách nhiệm và hiệu quả."
        }
    ],
    speedQuestions: [
        {
            "id": "vn44-s1",
            "prompt": "Phần đầu tiên của chương trình hoạt động là:",
            "options": [
                "Mục đích",
                "Phân công chuẩn bị",
                "Tiến trình",
                "Khen thưởng"
            ],
            "correctAnswer": "Mục đích",
            "explanation": "Mục đích."
        },
        {
            "id": "vn44-s2",
            "prompt": "Yêu cầu cốt lõi khi phân công chuẩn bị là:",
            "options": [
                "Rõ người, rõ việc, rõ thời gian",
                "Càng bí mật càng tốt",
                "Giao cho 1 người",
                "Không cần ghi ngày"
            ],
            "correctAnswer": "Rõ người, rõ việc, rõ thời gian",
            "explanation": "Rõ người, rõ việc."
        },
        {
            "id": "vn44-s3",
            "prompt": "Chương trình cụ thể được sắp xếp theo:",
            "options": [
                "Trình tự thời gian",
                "Tên bảng chữ cái",
                "Ngẫu nhiên",
                "Sở thích"
            ],
            "correctAnswer": "Trình tự thời gian",
            "explanation": "Trình tự thời gian."
        }
    ]
  },
  'vn-b45': {
    practiceQuestions: [
        {
            "id": "vn45-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Đàn t’rưng là nhạc cụ gõ truyền thống độc đáo của đồng bào các dân tộc vùng nào?",
            "options": [
                "Tây Nguyên hùng vĩ",
                "Đồng bằng Bắc Bộ",
                "Miền Tây Nam Bộ",
                "Vùng duyên hải Nam Trung Bộ"
            ],
            "correctAnswer": "Tây Nguyên hùng vĩ",
            "hint": "Cây đàn tre nứa ngân vang giữa rừng đại ngàn Tây Nguyên (Ba-na, Gia-rai, Ê-đê...).",
            "explanation": "Đàn t’rưng là nhạc cụ gõ bằng tre nứa nổi tiếng của núi rừng Tây Nguyên."
        },
        {
            "id": "vn45-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Đàn t’rưng được làm từ chất liệu tự nhiên nào của núi rừng?",
            "options": [
                "Những ống nứa hoặc ống tre có độ dài ngắn, to nhỏ khác nhau được ghép lại thành hàng",
                "Kim loại sắt thép đúc khuôn",
                "Đá vôi đẽo gọt",
                "Dây cước nhựa"
            ],
            "correctAnswer": "Những ống nứa hoặc ống tre có độ dài ngắn, to nhỏ khác nhau được ghép lại thành hàng",
            "hint": "Những ống nứa lồ ô khô gõ bằng dùi tạo nên những nốt nhạc cao vút hoặc trầm ấm.",
            "explanation": "Làm từ các ống nứa, tre tự nhiên xếp theo thứ tự tạo cao độ thang âm thanh thoát."
        },
        {
            "id": "vn45-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Âm thanh của tiếng đàn t’rưng được ví như những thanh âm nào của thiên nhiên?",
            "options": [
                "Tiếng suối róc rách, tiếng thác đổ ầm vang, tiếng chim hót líu lo và tiếng gió thổi đại ngàn",
                "Tiếng còi tàu hỏa rú lên",
                "Tiếng máy bay gầm rú",
                "Tiếng chuông báo thức điện tử"
            ],
            "correctAnswer": "Tiếng suối róc rách, tiếng thác đổ ầm vang, tiếng chim hót líu lo và tiếng gió thổi đại ngàn",
            "hint": "Tiếng đàn hòa vào hơi thở của suối reo, thác đổ, chim muông rừng già.",
            "explanation": "Âm thanh đàn t’rưng trong trẻo như suối ngàn, hùng vĩ như thác đổ Tây Nguyên."
        },
        {
            "id": "vn45-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Theo phong tục truyền thống của đồng bào Tây Nguyên, đàn t’rưng thường được tấu lên ở đâu?",
            "options": [
                "Trên nương rẫy để xua đuổi chim thú phá hoại mùa màng và trong những dịp lễ hội mừng lúa mới tại nhà rông",
                "Trong phòng ngủ kín cửa",
                "Trên các con tàu đánh cá biển khơi",
                "Trong các lớp học ở thành phố"
            ],
            "correctAnswer": "Trên nương rẫy để xua đuổi chim thú phá hoại mùa màng và trong những dịp lễ hội mừng lúa mới tại nhà rông",
            "hint": "Gắn liền với lao động nương rẫy và lễ hội cộng đồng buôn làng.",
            "explanation": "Đàn t'rưng dùng giữ nương rẫy và vang lên tưng bừng dịp hội cồng chiêng, mừng lúa mới."
        },
        {
            "id": "vn45-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hình ảnh người nghệ sĩ biểu diễn đàn t’rưng toát lên nét đẹp gì?",
            "options": [
                "Sự say mê, đôi tay lướt thoăn thoắt trên từng phím nứa với nụ cười rạng rỡ đắm say hồn nhạc",
                "Gương mặt căng thẳng buồn rầu",
                "Đứng bất động không cảm xúc",
                "Chỉ gõ bừa bãi không nhịp điệu"
            ],
            "correctAnswer": "Sự say mê, đôi tay lướt thoăn thoắt trên từng phím nứa với nụ cười rạng rỡ đắm say hồn nhạc",
            "hint": "Tâm hồn nghệ sĩ hòa vào từng rung động của ống tre, ống nứa.",
            "explanation": "Nét tài hoa, niềm say mê nghệ thuật toát lên vẻ đẹp phóng khoáng của con người Tây Nguyên."
        },
        {
            "id": "vn45-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Từ 'đại ngàn' trong nhan đề bài đọc mang ý nghĩa gì?",
            "options": [
                "Khu rừng nguyên sinh bạt ngàn, rộng lớn và hùng vĩ",
                "Cánh đồng bằng phẳng",
                "Dòng sông nhỏ",
                "Ngôi nhà sàn rộng"
            ],
            "correctAnswer": "Khu rừng nguyên sinh bạt ngàn, rộng lớn và hùng vĩ",
            "hint": "'Đại' là to lớn, 'ngàn' là rừng rậm trùng điệp.",
            "explanation": "'Đại ngàn' chỉ những cánh rừng nguyên sinh mênh mông, hùng vĩ ngút ngàn."
        },
        {
            "id": "vn45-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Ngày nay, tiếng đàn t’rưng không chỉ vang vọng giữa núi rừng Tây Nguyên mà còn:",
            "options": [
                "Vang xa trên các sân khấu lớn trong nước và quốc tế, trở thành sứ giả văn hóa độc đáo của Việt Nam",
                "Bị lãng quên không ai chơi nữa",
                "Chỉ để trong bảo tàng lịch sử",
                "Bị cấm biểu diễn"
            ],
            "correctAnswer": "Vang xa trên các sân khấu lớn trong nước và quốc tế, trở thành sứ giả văn hóa độc đáo của Việt Nam",
            "hint": "Nhạc cụ dân tộc được bạn bè năm châu tán thưởng và ngưỡng mộ.",
            "explanation": "Trở thành niềm tự hào âm nhạc truyền thống Việt Nam tỏa sáng trên trường quốc tế."
        },
        {
            "id": "vn45-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Vẻ đẹp của cây đàn t’rưng chứng minh điều gì về trí tuệ và tâm hồn người lao động dân gian?",
            "options": [
                "Tài năng sáng tạo tuyệt vời, biến những ống tre nứa mộc mạc của núi rừng thành kiệt tác âm nhạc rung động lòng người",
                "Sự may mắn ngẫu nhiên",
                "Do người nước ngoài phát minh hộ",
                "Tre nứa không có giá trị gì"
            ],
            "correctAnswer": "Tài năng sáng tạo tuyệt vời, biến những ống tre nứa mộc mạc của núi rừng thành kiệt tác âm nhạc rung động lòng người",
            "hint": "Từ vật liệu thô sơ bình dị nhất kiến tạo nên thanh âm tuyệt mỹ.",
            "explanation": "Trí tuệ dân gian và tâm hồn nghệ sĩ tài hoa, lạc quan của đồng bào các dân tộc thiểu số."
        }
    ],
    speedQuestions: [
        {
            "id": "vn45-s1",
            "prompt": "Đàn t'rưng là nhạc cụ của vùng nào?",
            "options": [
                "Tây Nguyên",
                "Bắc Bộ",
                "Nam Bộ",
                "Tây Bắc"
            ],
            "correctAnswer": "Tây Nguyên",
            "explanation": "Tây Nguyên."
        },
        {
            "id": "vn45-s2",
            "prompt": "Đàn t'rưng làm bằng vật liệu gì?",
            "options": [
                "Ống tre, nứa",
                "Kim loại đồng",
                "Gỗ lim",
                "Nhựa"
            ],
            "correctAnswer": "Ống tre, nứa",
            "explanation": "Ống tre nứa tự nhiên."
        },
        {
            "id": "vn45-s3",
            "prompt": "Âm thanh đàn t'rưng trong trẻo như:",
            "options": [
                "Tiếng suối reo",
                "Tiếng sấm nổ",
                "Tiếng còi xe",
                "Tiếng chuông reo"
            ],
            "correctAnswer": "Tiếng suối reo",
            "explanation": "Tiếng suối reo đại ngàn."
        }
    ]
  },
  'vn-b46': {
    practiceQuestions: [
        {
            "id": "vn46-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Liên kết câu bằng cách thay thế từ ngữ là cách làm như thế nào?",
            "options": [
                "Sử dụng đại từ hoặc từ ngữ đồng nghĩa ở câu sau để thay thế cho từ ngữ đã dùng ở câu trước",
                "Lặp lại y nguyên từ ngữ đó nhiều lần",
                "Dùng từ trái nghĩa đối lập",
                "Xóa từ đó đi không thay bằng từ nào"
            ],
            "correctAnswer": "Sử dụng đại từ hoặc từ ngữ đồng nghĩa ở câu sau để thay thế cho từ ngữ đã dùng ở câu trước",
            "hint": "Dùng đại từ hoặc từ đồng nghĩa thay thế giúp tránh lặp từ thô thiển.",
            "explanation": "Dùng đại từ hoặc từ đồng nghĩa thay thế từ ngữ câu trước nhằm liên kết mạch văn."
        },
        {
            "id": "vn46-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Trong đoạn văn: 'Hồ Chí Minh là vị cha già kính yêu của dân tộc. Người đã cống hiến trọn đời mình cho độc lập tự do.', từ nào được dùng để thay thế cho 'Hồ Chí Minh'?",
            "options": [
                "Người",
                "Dân tộc",
                "Đời mình",
                "Tự do"
            ],
            "correctAnswer": "Người",
            "hint": "Đại từ 'Người' thay thế tôn kính cho Chủ tịch Hồ Chí Minh.",
            "explanation": "Đại từ 'Người' thay thế cho danh từ riêng 'Hồ Chí Minh'."
        },
        {
            "id": "vn46-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Tác dụng của việc thay thế từ ngữ liên kết câu trong đoạn văn là:",
            "options": [
                "Vừa tạo mối liên kết chặt chẽ giữa các câu, vừa tránh được lỗi lặp từ đơn điệu, giúp lời văn linh hoạt, uyển chuyển",
                "Làm cho câu văn trở nên khó hiểu",
                "Để bài văn dài thêm gấp đôi",
                "Không có tác dụng gì"
            ],
            "correctAnswer": "Vừa tạo mối liên kết chặt chẽ giữa các câu, vừa tránh được lỗi lặp từ đơn điệu, giúp lời văn linh hoạt, uyển chuyển",
            "hint": "Tránh lặp từ nhàm chán và làm văn phong giàu tính biểu cảm.",
            "explanation": "Liên kết câu nhuần nhuyễn, tránh lặp vụng và làm câu văn sinh động hơn."
        },
        {
            "id": "vn46-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong đoạn văn: 'Hà Nội là thủ đô ngàn năm văn hiến của nước ta. Nơi đây lưu giữ biết bao di tích lịch sử quý báu.', cụm từ 'Nơi đây' thay thế cho:",
            "options": [
                "Hà Nội",
                "Nước ta",
                "Di tích lịch sử",
                "Thủ đô"
            ],
            "correctAnswer": "Hà Nội",
            "hint": "'Nơi đây' là từ chỉ địa điểm thay thế cho địa danh Hà Nội ở câu trước.",
            "explanation": "'Nơi đây' thay thế cho danh từ 'Hà Nội'."
        },
        {
            "id": "vn46-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Chọn từ đồng nghĩa thích hợp thay thế cho từ 'con voi' ở câu sau: 'Con voi lững thững bước đi trong rừng. ... là loài động vật to lớn và hiền lành.'",
            "options": [
                "Chú sổng (hoặc Bác tai to)",
                "Con hổ",
                "Bầy chim",
                "Con khỉ"
            ],
            "correctAnswer": "Chú sổng (hoặc Bác tai to)",
            "hint": "Tên gọi dân gian hoặc đặc điểm hình dáng nhân hóa của voi rừng.",
            "explanation": "'Chú sổng' (tên voi Tây Nguyên) hoặc 'Bác tai to' thay thế sinh động cho 'con voi'."
        },
        {
            "id": "vn46-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Đoạn văn sau dùng cách liên kết nào: 'Võ Nguyên Giáp là vị tướng tài ba của quân đội ta. Vị Đại tướng huyền thoại ấy đã chỉ huy chiến dịch Điện Biên Phủ toàn thắng.'?",
            "options": [
                "Liên kết câu bằng cách thay thế từ ngữ đồng nghĩa ('Vị Đại tướng huyền thoại ấy')",
                "Liên kết câu bằng cách lặp từ ngữ",
                "Dùng từ trái nghĩa",
                "Không có liên kết"
            ],
            "correctAnswer": "Liên kết câu bằng cách thay thế từ ngữ đồng nghĩa ('Vị Đại tướng huyền thoại ấy')",
            "hint": "Cụm danh từ đồng nghĩa ca ngợi tài năng thay thế cho tên riêng vị tướng.",
            "explanation": "Thay thế bằng cụm từ đồng nghĩa mang sắc thái ca ngợi, kính trọng."
        },
        {
            "id": "vn46-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Đoạn văn sau mắc lỗi lặp từ: 'Cây đa cổ thụ đứng sừng sững đầu làng. Cây đa cổ thụ đã chứng kiến bao thăng trầm của quê hương.' Hãy thay thế để câu văn hay nhất:",
            "options": [
                "Cây đa cổ thụ đứng sừng sững đầu làng. 'Chứng nhân ngàn năm ấy' (hoặc 'Cây') đã chứng kiến bao thăng trầm của quê hương.",
                "Giữ nguyên hai cụm từ 'Cây đa cổ thụ'",
                "Bỏ hẳn câu thứ hai",
                "Thay 'cây đa' bằng 'cây lúa'"
            ],
            "correctAnswer": "Cây đa cổ thụ đứng sừng sững đầu làng. 'Chứng nhân ngàn năm ấy' (hoặc 'Cây') đã chứng kiến bao thăng trầm của quê hương.",
            "hint": "Dùng hình ảnh ẩn dụ đồng nghĩa 'Chứng nhân ngàn năm ấy' tạo chiều sâu lịch sử xúc động.",
            "explanation": "Thay bằng 'Chứng nhân ngàn năm ấy' tạo nên hình ảnh văn học giàu sức gợi cảm."
        },
        {
            "id": "vn46-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "So sánh hai biện pháp liên kết: 'lặp từ ngữ' và 'thay thế từ ngữ', phát biểu nào sau đây là chính xác nhất?",
            "options": [
                "Cả hai đều tạo sự liên kết câu, nhưng 'thay thế từ ngữ' giúp bài văn đa dạng vốn từ và giàu sắc thái biểu cảm hơn",
                "Lặp từ ngữ luôn tốt hơn thay thế từ ngữ",
                "Thay thế từ ngữ làm câu văn mất liên kết",
                "Hai cách này hoàn toàn giống nhau không khác gì"
            ],
            "correctAnswer": "Cả hai đều tạo sự liên kết câu, nhưng 'thay thế từ ngữ' giúp bài văn đa dạng vốn từ và giàu sắc thái biểu cảm hơn",
            "hint": "Thay thế đòi hỏi vốn từ phong phú và tạo nên sự mượt mà, biến hóa cho lời văn.",
            "explanation": "Phép thay thế từ ngữ giúp văn phong phong phú, uyển chuyển và giàu giá trị tu từ."
        }
    ],
    speedQuestions: [
        {
            "id": "vn46-s1",
            "prompt": "Đại từ thay thế cho Bác Hồ là:",
            "options": [
                "Người",
                "Nó",
                "Hắn",
                "Chúng"
            ],
            "correctAnswer": "Người",
            "explanation": "Đại từ tôn kính 'Người'."
        },
        {
            "id": "vn46-s2",
            "prompt": "'Nơi đây' trong văn bản thường thay thế cho:",
            "options": [
                "Một địa điểm đã nhắc ở câu trước",
                "Một thời gian",
                "Một con vật",
                "Một đồ vật"
            ],
            "correctAnswer": "Một địa điểm đã nhắc ở câu trước",
            "explanation": "Địa điểm."
        },
        {
            "id": "vn46-s3",
            "prompt": "Phép thay thế từ ngữ giúp đoạn văn:",
            "options": [
                "Tránh lặp từ nhàm chán",
                "Thành thơ lục bát",
                "Có nhiều câu hỏi",
                "Ngắn đi một nửa"
            ],
            "correctAnswer": "Tránh lặp từ nhàm chán",
            "explanation": "Tránh lặp từ."
        }
    ]
  },
  'vn-b47': {
    practiceQuestions: [
        {
            "id": "vn47-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Đất Mũi Cà Mau là vùng đất nằm ở vị trí địa lý đặc biệt nào của Tổ quốc?",
            "options": [
                "Mảnh đất chóp mũi cực Nam thiêng liêng của dải đất hình chữ S Việt Nam",
                "Điểm cực Bắc trên đỉnh Lũng Cú",
                "Điểm cực Tây nơi biên giới",
                "Một hòn đảo ngoài đại dương xa xôi"
            ],
            "correctAnswer": "Mảnh đất chóp mũi cực Nam thiêng liêng của dải đất hình chữ S Việt Nam",
            "hint": "Cực Nam của Tổ quốc: 'Tổ quốc ta như một con tàu / Mũi Cà Mau đó mũi thuyền ta đó...'",
            "explanation": "Đất Mũi Cà Mau là điểm cực Nam thiêng liêng của Tổ quốc."
        },
        {
            "id": "vn47-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Loài cây đặc trưng biểu tượng gắn liền với rừng ngập mặn Cà Mau là cây gì?",
            "options": [
                "Cây đước",
                "Cây bàng",
                "Cây thông",
                "Cây phi lao"
            ],
            "correctAnswer": "Cây đước",
            "hint": "'Rừng đước bạt ngàn vươn ra biển lớn...'",
            "explanation": "Cây đước với bộ rễ cọc, rễ chùm vươn dài bám đất lấn biển."
        },
        {
            "id": "vn47-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Bộ rễ của cây đước có đặc điểm kỳ diệu nào giúp cây đứng vững trước sóng gió biển cả?",
            "options": [
                "Hàng ngàn chiếc rễ phụ mọc tua tủa như những chiếc kiềng sắt cắm sâu xuống bùn lầy giữ đất lấn biển",
                "Rễ cây rất ngắn mọc nông trên mặt đất",
                "Không có rễ",
                "Rễ trôi nổi tự do theo sóng nước"
            ],
            "correctAnswer": "Hàng ngàn chiếc rễ phụ mọc tua tủa như những chiếc kiềng sắt cắm sâu xuống bùn lầy giữ đất lấn biển",
            "hint": "Rễ đước chống đỡ thân cây, giữ từng hạt phù sa mở cõi bờ cõi non sông.",
            "explanation": "Hệ thống rễ cọc và rễ chống vững chãi như chân kiềng sắt giữ đất mở cõi."
        },
        {
            "id": "vn47-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hiện tượng kỳ thú nào ở Đất Mũi Cà Mau mà hiếm nơi nào trên đất liền nước ta có được?",
            "options": [
                "Đứng ở cùng một nơi có thể ngắm mặt trời mọc ở biển Đông và mặt trời lặn ở biển Tây",
                "Tuyết rơi quanh năm",
                "Đêm trăng sáng suốt hai mươi bốn giờ",
                "Không bao giờ có thủy triều"
            ],
            "correctAnswer": "Đứng ở cùng một nơi có thể ngắm mặt trời mọc ở biển Đông và mặt trời lặn ở biển Tây",
            "hint": "Mảnh đất vươn ra biển giữa hai vùng biển Đông và vịnh Thái Lan (biển Tây).",
            "explanation": "Nơi duy nhất trên đất liền cùng lúc ngắm bình minh biển Đông và hoàng hôn biển Tây."
        },
        {
            "id": "vn47-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Cảnh sinh hoạt của người dân Đất Mũi gắn liền với những phương tiện di chuyển nào?",
            "options": [
                "Xuồng máy, vỏ lãi, đò dọc đò ngang len lỏi qua mạng lưới kênh rạch chằng chịt",
                "Xe buýt điện chạy ngầm dưới đất",
                "Ngựa kéo xe trên đồi cao",
                "Cáp treo trên đỉnh núi"
            ],
            "correctAnswer": "Xuồng máy, vỏ lãi, đò dọc đò ngang len lỏi qua mạng lưới kênh rạch chằng chịt",
            "hint": "Giao thông thủy đặc thù của vùng sông nước miền Tây Nam Bộ.",
            "explanation": "Vỏ lãi, xuồng máy là phương tiện gắn bó máu thịt với đời sống sông nước Cà Mau."
        },
        {
            "id": "vn47-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Tại sao người ta nói đất ở Mũi Cà Mau là 'đất biết sinh sôi, đất biết nở hoa'?",
            "options": [
                "Vì phù sa sông biển bồi đắp và rừng đước tiên phong giữ đất, mỗi năm đất mũi lại lấn thêm ra biển hàng trăm mét",
                "Vì đất ở đây làm bằng vàng",
                "Vì có người chở đất từ nơi khác đến đổ",
                "Chỉ là lời nói ví von không có thật"
            ],
            "correctAnswer": "Vì phù sa sông biển bồi đắp và rừng đước tiên phong giữ đất, mỗi năm đất mũi lại lấn thêm ra biển hàng trăm mét",
            "hint": "Đất phù sa lấn biển mở rộng bờ cõi Tổ quốc mỗi ngày.",
            "explanation": "Rừng đước cùng phù sa bền bỉ lấn biển mở rộng lãnh thổ quê hương từng ngày."
        },
        {
            "id": "vn47-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Tình cảm của người lữ khách khi đặt chân đến cột mốc tọa độ quốc gia ở Đất Mũi là:",
            "options": [
                "Niềm xúc động thiêng liêng, lòng tự hào trào dâng và tình yêu nồng nàn với chủ quyền toàn vẹn lãnh thổ",
                "Cảm thấy mệt mỏi và muốn quay về ngay",
                "Bình thản như đi qua một nơi vô danh",
                "Chỉ lo chụp ảnh mà không suy nghĩ gì"
            ],
            "correctAnswer": "Niềm xúc động thiêng liêng, lòng tự hào trào dâng và tình yêu nồng nàn với chủ quyền toàn vẹn lãnh thổ",
            "hint": "Đứng nơi chót mũi Tổ quốc, lòng người lắng đọng tình yêu thiêng liêng đất mẹ.",
            "explanation": "Xúc động nghẹn ngào chạm tay vào mốc tọa độ thiêng liêng ở cực Nam Tổ quốc."
        },
        {
            "id": "vn47-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hình tượng cây đước Cà Mau còn là biểu tượng cho phẩm chất gì của con người Việt Nam?",
            "options": [
                "Ý chí kiên cường, bất khuất, sự đoàn kết một lòng và sức sống mãnh liệt trước giông bão cuộc đời",
                "Tính cách thích sống cô độc",
                "Sự yếu đuối trước thử thách",
                "Sự phù phiếm bên ngoài"
            ],
            "correctAnswer": "Ý chí kiên cường, bất khuất, sự đoàn kết một lòng và sức sống mãnh liệt trước giông bão cuộc đời",
            "hint": "Rừng đước đan bện vào nhau cản sóng gió bão tố bảo vệ xóm làng.",
            "explanation": "Biểu tượng cho tinh thần kiên trung, bất khuất và sức sống mãnh liệt của dân tộc Việt."
        }
    ],
    speedQuestions: [
        {
            "id": "vn47-s1",
            "prompt": "Cây gì là biểu tượng của rừng ngập mặn Cà Mau?",
            "options": [
                "Cây đước",
                "Cây bàng",
                "Cây đa",
                "Cây tre"
            ],
            "correctAnswer": "Cây đước",
            "explanation": "Cây đước."
        },
        {
            "id": "vn47-s2",
            "prompt": "Đất Mũi Cà Mau là điểm cực nào của nước ta?",
            "options": [
                "Cực Nam",
                "Cực Bắc",
                "Cực Đông",
                "Cực Tây"
            ],
            "correctAnswer": "Cực Nam",
            "explanation": "Cực Nam."
        },
        {
            "id": "vn47-s3",
            "prompt": "Phương tiện di chuyển phổ biến ở sông nước Cà Mau là:",
            "options": [
                "Vỏ lãi, xuồng máy",
                "Tàu hỏa",
                "Xe điện",
                "Xe ngựa"
            ],
            "correctAnswer": "Vỏ lãi, xuồng máy",
            "explanation": "Vỏ lãi, xuồng máy."
        }
    ]
  },
  'vn-b48': {
    practiceQuestions: [
        {
            "id": "vn48-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Câu nào dưới đây là câu ghép chỉ quan hệ tương phản?",
            "options": [
                "Tuy nhà xa nhưng bạn Nam luôn đi học đúng giờ.",
                "Vì trời mưa to nên đường bị ngập lụt.",
                "Nếu em chăm chỉ thì em sẽ đạt kết quả tốt.",
                "Trời càng mưa to, gió càng thổi mạnh."
            ],
            "correctAnswer": "Tuy nhà xa nhưng bạn Nam luôn đi học đúng giờ.",
            "hint": "Cặp quan hệ từ 'Tuy... nhưng...' thể hiện quan hệ tương phản.",
            "explanation": "'Tuy... nhưng...' biểu thị quan hệ tương phản đối lập giữa hai vế câu."
        },
        {
            "id": "vn48-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Điền cặp từ hô ứng thích hợp: 'Thủy Tinh dâng nước cao bao nhiêu, Sơn Tinh dâng núi cao ...':",
            "options": [
                "Bấy nhiêu",
                "Bấy chừ",
                "Bấy lâu",
                "Tất cả"
            ],
            "correctAnswer": "Bấy nhiêu",
            "hint": "'Bao nhiêu... bấy nhiêu...' là cặp từ hô ứng tương ứng số lượng.",
            "explanation": "Bấy nhiêu."
        },
        {
            "id": "vn48-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong đoạn văn: 'Tre là người bạn thân của nông dân Việt Nam. Nó gắn bó keo sơn với con người từ thuở lọt lòng.', từ 'nó' có tác dụng:",
            "options": [
                "Thay thế cho từ 'tre' để liên kết câu và tránh lặp từ",
                "Thay thế cho 'người bạn'",
                "Làm cho câu văn dài ra",
                "Chỉ để hỏi"
            ],
            "correctAnswer": "Thay thế cho từ 'tre' để liên kết câu và tránh lặp từ",
            "hint": "Đại từ 'nó' thay thế cho danh từ ở câu trước (phép thế).",
            "explanation": "Đại từ 'nó' thay thế cho 'Tre' nhằm liên kết câu và tránh lặp từ."
        },
        {
            "id": "vn48-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Đoạn văn sau sử dụng phép liên kết câu nào: 'Mùa thu Hà Nội đẹp dịu dàng. Mùa thu Hà Nội đượm hương cốm mới ngạt ngào.'?",
            "options": [
                "Phép lặp từ ngữ ('Mùa thu Hà Nội')",
                "Phép thay thế từ ngữ",
                "Phép nối bằng quan hệ từ",
                "Phép tỉnh lược"
            ],
            "correctAnswer": "Phép lặp từ ngữ ('Mùa thu Hà Nội')",
            "hint": "Cụm từ 'Mùa thu Hà Nội' được nhắc lại nguyên vẹn ở cả 2 câu.",
            "explanation": "Lặp lại cụm từ 'Mùa thu Hà Nội' để nhấn mạnh và liên kết câu."
        },
        {
            "id": "vn48-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi viết chương trình hoạt động, mục nào sau đây bắt buộc phải có để phân định rõ trách nhiệm?",
            "options": [
                "Phân công chuẩn bị (rõ người, rõ việc)",
                "Kể một câu chuyện tiếu lâm",
                "Vẽ tranh minh họa",
                "Hát một bài hát"
            ],
            "correctAnswer": "Phân công chuẩn bị (rõ người, rõ việc)",
            "hint": "Phần phân công trách nhiệm bảo đảm mọi người hoàn thành nhiệm vụ.",
            "explanation": "Phân công cụ thể giúp công việc được chuẩn bị chu đáo và đúng thời hạn."
        },
        {
            "id": "vn48-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hình ảnh người mẹ trong bài thơ 'Hạt gạo làng ta' hiện lên với phẩm chất nổi bật nào?",
            "options": [
                "Sự tảo tần, chịu thương chịu khó, giàu đức hy sinh vì con cái và hậu phương kháng chiến",
                "Sự kiêu sa quý phái",
                "Tính cách nóng nảy",
                "Sự thờ ơ với việc đồng áng"
            ],
            "correctAnswer": "Sự tảo tần, chịu thương chịu khó, giàu đức hy sinh vì con cái và hậu phương kháng chiến",
            "hint": "Nước như ai nấu mẹ vẫn lội xuống cấy lúa nuôi quân.",
            "explanation": "Đức hy sinh cao cả, cần cù chịu đựng gian khó của người mẹ nông dân."
        },
        {
            "id": "vn48-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Xác định câu ghép có các vế câu nối trực tiếp bằng dấu phẩy (không dùng quan hệ từ):",
            "options": [
                "Gió thổi ù ù, lá cây bay rào rào, cát bụi mù mịt khắp ngõ xóm.",
                "Gió thổi mạnh và mưa bắt đầu rơi.",
                "Vì gió to nên cây bị gãy cành.",
                "Mặc dù gió lạnh nhưng chúng em vẫn tập thể dục."
            ],
            "correctAnswer": "Gió thổi ù ù, lá cây bay rào rào, cát bụi mù mịt khắp ngõ xóm.",
            "hint": "Ba vế câu độc lập nối với nhau chỉ bằng dấu phẩy.",
            "explanation": "Nối trực tiếp bằng dấu phẩy tạo nhịp điệu dồn dập, biến chuyển nhanh."
        },
        {
            "id": "vn48-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Điểm cốt lõi nhất để phân biệt một câu đơn có nhiều vị ngữ với một câu ghép là:",
            "options": [
                "Câu ghép có từ 2 cụm Chủ ngữ - Vị ngữ trở lên không bao chứa nhau; câu đơn chỉ có 1 chủ ngữ chung",
                "Câu ghép luôn dài hơn câu đơn",
                "Câu ghép phải có dấu chấm than",
                "Câu đơn không bao giờ có dấu phẩy"
            ],
            "correctAnswer": "Câu ghép có từ 2 cụm Chủ ngữ - Vị ngữ trở lên không bao chứa nhau; câu đơn chỉ có 1 chủ ngữ chung",
            "hint": "Tiêu chí phân định ngữ pháp cốt lõi: số lượng kết cấu C-V độc lập.",
            "explanation": "Câu ghép có nhiều cụm C-V độc lập, trong khi câu đơn nhiều vị ngữ chỉ có 1 chủ ngữ chung."
        }
    ],
    speedQuestions: [
        {
            "id": "vn48-s1",
            "prompt": "'Tuy... nhưng...' là cặp từ chỉ quan hệ:",
            "options": [
                "Tương phản",
                "Nguyên nhân",
                "Điều kiện",
                "Tăng tiến"
            ],
            "correctAnswer": "Tương phản",
            "explanation": "Tương phản."
        },
        {
            "id": "vn48-s2",
            "prompt": "Càng... càng... là cặp từ:",
            "options": [
                "Hô ứng tăng tiến",
                "Quan hệ từ nguyên nhân",
                "Đại từ nghi vấn",
                "Số từ"
            ],
            "correctAnswer": "Hô ứng tăng tiến",
            "explanation": "Cặp từ hô ứng tăng tiến."
        },
        {
            "id": "vn48-s3",
            "prompt": "Cốm làng Vòng nổi tiếng của thành phố nào?",
            "options": [
                "Hà Nội",
                "Hải Phòng",
                "Đà Nẵng",
                "TP. Hồ Chí Minh"
            ],
            "correctAnswer": "Hà Nội",
            "explanation": "Hà Nội."
        }
    ]
  },
  'vn-b49': {
    practiceQuestions: [
        {
            "id": "vn-b49-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Văn Miếu – Quốc Tử Giám được coi là trường đại học đầu tiên của nước nào?",
            "options": [
                "Việt Nam",
                "Trung Quốc",
                "Lào",
                "Thái Lan"
            ],
            "correctAnswer": "Việt Nam",
            "hint": "Đây là di tích lịch sử nổi tiếng tọa lạc tại thủ đô Hà Nội.",
            "explanation": "Văn Miếu – Quốc Tử Giám (Hà Nội) được xây dựng từ thời Lý, là trường đại học đầu tiên của Việt Nam."
        },
        {
            "id": "vn-b49-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Bia đá ở Văn Miếu – Quốc Tử Giám dùng để khắc tên những ai?",
            "options": [
                "Các vị đỗ Tiến sĩ trong các khoa thi",
                "Các vị vua chúa thời Lý, Trần, Lê",
                "Những người thợ xây dựng Văn Miếu",
                "Các thương nhân giàu có thời xưa"
            ],
            "correctAnswer": "Các vị đỗ Tiến sĩ trong các khoa thi",
            "hint": "Bia này được gọi là bia Tiến sĩ nhằm tôn vinh nhân tài.",
            "explanation": "Bia Tiến sĩ tại Văn Miếu dùng để vinh danh những người đỗ đạt bảng vàng (Tiến sĩ) qua các kỳ thi Nho học thời phong kiến."
        },
        {
            "id": "vn-b49-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hiện nay ở Văn Miếu còn lưu giữ bao nhiêu tấm bia Tiến sĩ?",
            "options": [
                "82 tấm bia",
                "100 tấm bia",
                "50 tấm bia",
                "120 tấm bia"
            ],
            "correctAnswer": "82 tấm bia",
            "hint": "Con số này đã được UNESCO công nhận là Di sản tư liệu thế giới.",
            "explanation": "Văn Miếu – Quốc Tử Giám hiện còn lưu giữ nguyên vẹn 82 tấm bia Tiến sĩ đặt trên lưng rùa đá."
        },
        {
            "id": "vn-b49-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Triều đại nào trong lịch sử nước ta tổ chức nhiều khoa thi và có nhiều Tiến sĩ nhất?",
            "options": [
                "Triều Hậu Lê (thời Lê)",
                "Triều Lý",
                "Triều Trần",
                "Triều Nguyễn"
            ],
            "correctAnswer": "Triều Hậu Lê (thời Lê)",
            "hint": "Thời kỳ này rất coi trọng đạo Nho và khoa cử.",
            "explanation": "Theo bảng số liệu trong bài \"Nghìn năm văn hiến\", triều Lê tổ chức nhiều khoa thi nhất (104 khoa) và có số Tiến sĩ đông nhất (1780 người)."
        },
        {
            "id": "vn-b49-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu nói nổi tiếng khắc trên bia Tiến sĩ năm 1442 là gì?",
            "options": [
                "Hiền tài là nguyên khí của quốc gia",
                "Không thầy đố mày làm nên",
                "Học, học nữa, học mãi",
                "Học đi đôi với hành"
            ],
            "correctAnswer": "Hiền tài là nguyên khí của quốc gia",
            "hint": "Câu nói của Thân Nhân Trung khẳng định tầm quan trọng của người tài đối với sự hưng thịnh của đất nước.",
            "explanation": "Thân Nhân Trung đã viết: \"Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp.\""
        },
        {
            "id": "vn-b49-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Bài đọc \"Nghìn năm văn hiến\" thể hiện niềm tự hào sâu sắc nhất về truyền thống gì của dân tộc Việt Nam?",
            "options": [
                "Truyền thống hiếu học và coi trọng nhân tài",
                "Truyền thống đánh giặc ngoại xâm",
                "Truyền thống làm nông nghiệp lúa nước",
                "Truyền thống buôn bán giao thương"
            ],
            "correctAnswer": "Truyền thống hiếu học và coi trọng nhân tài",
            "hint": "Bài viết nói về trường đại học, các khoa thi và bia Tiến sĩ.",
            "explanation": "Bài đọc khẳng định Việt Nam có một nền văn hiến lâu đời, luôn đề cao tinh thần hiếu học và trân trọng hiền tài."
        },
        {
            "id": "vn-b49-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Vì sao người xưa lại đặt bia Tiến sĩ trên lưng những con rùa đá?",
            "options": [
                "Vì rùa là biểu tượng của sự trường tồn, bền vững và trường thọ",
                "Vì rùa đá dễ đục đẽo hơn các con vật khác",
                "Vì thời xưa nuôi rất nhiều rùa ở hồ nước Văn Miếu",
                "Vì rùa bơi giỏi giúp bia nổi được trên mặt nước"
            ],
            "correctAnswer": "Vì rùa là biểu tượng của sự trường tồn, bền vững và trường thọ",
            "hint": "Rùa là một trong bốn con vật tứ linh (Long, Lân, Quy, Phụng).",
            "explanation": "Trong văn hóa dân tộc, rùa tượng trưng cho sự vững chắc, bền bỉ và trường tồn qua thời gian, mang ý nghĩa tên tuổi của người tài sẽ lưu danh muôn thuở."
        },
        {
            "id": "vn-b49-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Từ \"văn hiến\" trong cụm từ \"Nghìn năm văn hiến\" mang ý nghĩa gì?",
            "options": [
                "Truyền thống văn hóa lâu đời và tốt đẹp",
                "Các cuốn sách cổ viết bằng chữ Hán",
                "Một loại văn thơ dùng để chúc tụng",
                "Trường học dạy chữ thời phong kiến"
            ],
            "correctAnswer": "Truyền thống văn hóa lâu đời và tốt đẹp",
            "hint": "Hiến ở đây chỉ những bậc hiền tài và thư tịch cổ quý giá.",
            "explanation": "\"Văn hiến\" là truyền thống văn hóa, tinh thần tốt đẹp và lâu đời của một quốc gia, gắn với nhiều bậc nhân tài và di sản quý báu."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b49-s1",
            "prompt": "Văn Miếu – Quốc Tử Giám tọa lạc tại tỉnh/thành phố nào?",
            "options": [
                "Hà Nội",
                "Huế",
                "Ninh Bình",
                "Đà Nẵng"
            ],
            "correctAnswer": "Hà Nội",
            "explanation": "Văn Miếu – Quốc Tử Giám nằm ở trung tâm thủ đô Hà Nội."
        },
        {
            "id": "vn-b49-s2",
            "prompt": "Ai là người thầy giáo tiêu biểu thời phong kiến được phụng thờ ở Văn Miếu?",
            "options": [
                "Chu Văn An",
                "Nguyễn Trãi",
                "Lê Quý Đôn",
                "Nguyễn Bỉnh Khiêm"
            ],
            "correctAnswer": "Chu Văn An",
            "explanation": "Thầy Chu Văn An từng giữ chức Tư nghiệp Quốc Tử Giám và được phụng thờ tại Văn Miếu."
        },
        {
            "id": "vn-b49-s3",
            "prompt": "Có bao nhiêu tấm bia Tiến sĩ ở Văn Miếu đã được công nhận là Di sản tư liệu thế giới?",
            "options": [
                "82",
                "80",
                "85",
                "79"
            ],
            "correctAnswer": "82",
            "explanation": "Hiện còn 82 bia Tiến sĩ nguyên vẹn tại Văn Miếu."
        }
    ]
  },
  'vn-b50': {
    practiceQuestions: [
        {
            "id": "vn-b50-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Từ ngữ nào dưới đây thường được dùng làm từ ngữ nối giữa các câu trong đoạn văn?",
            "options": [
                "Tuy nhiên",
                "Xanh ngắt",
                "Chạy nhảy",
                "Bàn ghế"
            ],
            "correctAnswer": "Tuy nhiên",
            "hint": "Tìm từ dùng để biểu thị mối quan hệ tương phản giữa câu trước và câu sau.",
            "explanation": "\"Tuy nhiên\" là từ ngữ nối dùng để biểu thị ý đối lập, chuyển tiếp giữa các câu."
        },
        {
            "id": "vn-b50-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Trong câu: \"Trời mưa rất to. Nhưng các bạn nhỏ vẫn đến lớp đúng giờ.\", từ nào đóng vai trò liên kết hai câu?",
            "options": [
                "Nhưng",
                "Trời",
                "Vẫn",
                "Đúng giờ"
            ],
            "correctAnswer": "Nhưng",
            "hint": "Từ đứng ở đầu câu thứ hai thể hiện quan hệ tương phản với câu thứ nhất.",
            "explanation": "Từ \"Nhưng\" ở đầu câu sau nối liền với nội dung của câu trước đó."
        },
        {
            "id": "vn-b50-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Nhóm từ nào dưới đây gồm toàn các từ ngữ nối biểu thị quan hệ nguyên nhân - kết quả?",
            "options": [
                "Vì vậy, do đó, bởi thế",
                "Tuy nhiên, mặc dù, nhưng",
                "Đồng thời, hơn nữa, ngoài ra",
                "Trước hết, tiếp theo, sau cùng"
            ],
            "correctAnswer": "Vì vậy, do đó, bởi thế",
            "hint": "Các từ này nêu ra kết quả bắt nguồn từ nguyên nhân đã nói ở câu trước.",
            "explanation": "\"Vì vậy, do đó, bởi thế\" là các từ nối biểu thị mối quan hệ nguyên nhân - kết quả."
        },
        {
            "id": "vn-b50-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Chọn từ ngữ nối thích hợp nhất điền vào chỗ chấm: \"Nam học bài rất chăm chỉ. ..., bạn ấy đã đạt điểm Mười trong kì thi.\"",
            "options": [
                "Vì vậy",
                "Tuy nhiên",
                "Mặc dù",
                "Nhưng"
            ],
            "correctAnswer": "Vì vậy",
            "hint": "Việc đạt điểm Mười là kết quả xứng đáng của việc chăm chỉ học tập.",
            "explanation": "Dùng \"Vì vậy\" để chỉ kết quả hợp lý diễn ra sau nguyên nhân ở câu trước."
        },
        {
            "id": "vn-b50-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Cặp câu nào dưới đây sử dụng từ ngữ nối biểu thị quan hệ bổ sung, nối tiếp ý?",
            "options": [
                "Hoa học rất giỏi Toán. Ngoài ra, bạn ấy còn vẽ tranh rất đẹp.",
                "Trời nắng chang chang. Nhưng bác nông dân vẫn ra đồng.",
                "Cậu ấy bị cảm lạnh. Vì thế, cậu ấy phải nghỉ học.",
                "Nếu ngày mai trời mưa thì chúng mình sẽ hoãn chuyến dã ngoại."
            ],
            "correctAnswer": "Hoa học rất giỏi Toán. Ngoài ra, bạn ấy còn vẽ tranh rất đẹp.",
            "hint": "Tìm từ mang ý nghĩa thêm vào, bổ sung thông tin mới.",
            "explanation": "\"Ngoài ra\" là từ ngữ nối dùng để bổ sung thêm một đặc điểm, thông tin mới cho câu trước."
        },
        {
            "id": "vn-b50-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Từ nối \"Trái lại\" được dùng khi nào?",
            "options": [
                "Khi muốn nêu một sự việc, tính chất hoàn toàn đối lập với điều vừa nói",
                "Khi muốn giải thích nguyên nhân",
                "Khi muốn liệt kê các sự việc theo trình tự thời gian",
                "Khi muốn kết luận toàn bộ bài viết"
            ],
            "correctAnswer": "Khi muốn nêu một sự việc, tính chất hoàn toàn đối lập với điều vừa nói",
            "hint": "\"Trái lại\" thể hiện sự tương phản, ngược chiều.",
            "explanation": "\"Trái lại\" dùng để nối hai câu có nội dung mang tính chất tương phản, đối nghịch nhau."
        },
        {
            "id": "vn-b50-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Đoạn văn: \"Trước hết, ta cần chuẩn bị đất trồng. Tiếp theo, ta gieo hạt giống vào hố. Cuối cùng, ta tưới nước đều đặn.\" sử dụng nhóm từ nối có tác dụng gì?",
            "options": [
                "Chỉ trình tự các bước thực hiện theo thời gian",
                "Chỉ nguyên nhân và kết quả của hành động",
                "Chỉ sự nhượng bộ và đối lập",
                "Chỉ sự so sánh hơn kém"
            ],
            "correctAnswer": "Chỉ trình tự các bước thực hiện theo thời gian",
            "hint": "\"Trước hết, Tiếp theo, Cuối cùng\" chỉ các bước nối tiếp nhau.",
            "explanation": "Các từ nối \"Trước hết, Tiếp theo, Cuối cùng\" giúp người đọc nắm bắt rõ ràng quy trình, trình tự thời gian của các công việc."
        },
        {
            "id": "vn-b50-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Việc sử dụng các từ ngữ nối trong bài văn giúp bài văn đạt được điều gì?",
            "options": [
                "Các ý, các câu liên kết chặt chẽ, mạch lạc và tự nhiên",
                "Bài văn dài hơn để đạt số lượng từ yêu cầu",
                "Các từ ngữ trở nên khó hiểu và trừu tượng hơn",
                "Không cần sử dụng dấu câu ngăn cách các câu"
            ],
            "correctAnswer": "Các ý, các câu liên kết chặt chẽ, mạch lạc và tự nhiên",
            "hint": "Từ nối là nhịp cầu gắn kết nội dung giữa các câu.",
            "explanation": "Từ nối giúp tạo sự mạch lạc, kết dính chặt chẽ về mặt ngữ nghĩa và cấu trúc giữa các câu, các đoạn trong bài văn."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b50-s1",
            "prompt": "Từ nào sau đây là từ ngữ nối chỉ quan hệ tương phản?",
            "options": [
                "Tuy nhiên",
                "Vì vậy",
                "Do đó",
                "Hơn nữa"
            ],
            "correctAnswer": "Tuy nhiên",
            "explanation": "\"Tuy nhiên\" chỉ mối quan hệ tương phản, đối lập giữa hai câu."
        },
        {
            "id": "vn-b50-s2",
            "prompt": "Điền từ nối: \"Tôi rất thích đọc sách. ..., tôi cũng rất mê đá bóng.\"",
            "options": [
                "Bên cạnh đó",
                "Mặc dù",
                "Bởi vì",
                "Nhờ đó"
            ],
            "correctAnswer": "Bên cạnh đó",
            "explanation": "\"Bên cạnh đó\" mang ý nghĩa bổ sung thông tin tương đồng."
        },
        {
            "id": "vn-b50-s3",
            "prompt": "Từ ngữ nối thường đứng ở vị trí nào trong câu?",
            "options": [
                "Đầu câu",
                "Giữa câu",
                "Cuối câu",
                "Sau dấu chấm than"
            ],
            "correctAnswer": "Đầu câu",
            "explanation": "Từ ngữ nối các câu thường được đặt ở đầu câu sau để dẫn dắt ý từ câu trước."
        }
    ]
  },
  'vn-b51': {
    practiceQuestions: [
        {
            "id": "vn-b51-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Nhân vật được ca ngợi là \"Người thầy của muôn đời\" trong bài đọc là ai?",
            "options": [
                "Chu Văn An",
                "Nguyễn Trãi",
                "Lương Thế Vinh",
                "Nguyễn Tất Thành"
            ],
            "correctAnswer": "Chu Văn An",
            "hint": "Ông là nhà giáo nổi tiếng đức độ thời nhà Trần.",
            "explanation": "Thầy Chu Văn An (1292 - 1370) là một nhà giáo mẫu mực, được người đời suy tôn là \"Vạn thế sư biểu\" (Người thầy của muôn đời)."
        },
        {
            "id": "vn-b51-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Học trò của thầy Chu Văn An dù đã làm đến chức quan lớn nhưng khi về thăm thầy vẫn giữ thái độ như thế nào?",
            "options": [
                "Kính cẩn, lễ phép và khiêm nhường từ cửa",
                "Tự hào khoe chức tước cao với thầy",
                "Được ngồi ngang hàng cùng thầy đàm đạo",
                "Bắt thầy phải chào đón long trọng"
            ],
            "correctAnswer": "Kính cẩn, lễ phép và khiêm nhường từ cửa",
            "hint": "Họ luôn ghi nhớ công ơn dạy dỗ và tôn kính đạo thầy trò.",
            "explanation": "Học trò của thầy dù đỗ đại khoa, làm quan lớn trong triều vẫn một mực cung kính, vái chào thầy từ xa và lắng nghe thầy chỉ bảo."
        },
        {
            "id": "vn-b51-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Sự việc nào chứng tỏ thầy Chu Văn An là một người vô cùng cương trực, chính trực?",
            "options": [
                "Dâng \"Thất trảm sớ\" xin chém 7 tên nịnh thần lộng hành",
                "Từ chối mọi học sinh nghèo đến xin học",
                "Không bao giờ nói chuyện với người lạ",
                "Đóng cửa trường học chuyển lên núi ở ẩn ngay từ đầu"
            ],
            "correctAnswer": "Dâng \"Thất trảm sớ\" xin chém 7 tên nịnh thần lộng hành",
            "hint": "Bản sớ nổi tiếng thể hiện sự dũng cảm chống lại gian thần bảo vệ đất nước.",
            "explanation": "Khi thấy vua quan bê tha, nịnh thần lộng hành, thầy Chu Văn An đã dũng cảm dâng \"Thất trảm sớ\" đòi chém 7 tên gian thần."
        },
        {
            "id": "vn-b51-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Sau khi bản \"Thất trảm sớ\" không được vua chấp thuận, thầy Chu Văn An đã làm gì?",
            "options": [
                "Treo mũ từ quan về núi Chí Linh dạy học và viết sách",
                "Nổi giận đem quân chống lại triều đình",
                "Bỏ sang nước khác sinh sống",
                "Tiếp tục ở lại làm quan nhận lương bổng"
            ],
            "correctAnswer": "Treo mũ từ quan về núi Chí Linh dạy học và viết sách",
            "hint": "Thầy xem thường bổng lộc, chỉ một lòng vì chính nghĩa và việc dạy học.",
            "explanation": "Khi ý kiến chính nghĩa không được tiếp nhận, thầy không màng danh lợi, xin từ quan về ở ẩn tại núi Phượng Hoàng (Chí Linh, Hải Dương) tiếp tục dạy học."
        },
        {
            "id": "vn-b51-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Chi tiết học trò của thầy Chu Văn An có cả Thuỷ Thần biến thành người đi học thể hiện điều gì?",
            "options": [
                "Đức độ và tài năng cảm hóa muôn loài của người thầy vĩ đại",
                "Thời xưa có rất nhiều thủy quái sống chung với con người",
                "Thầy Chu Văn An có phép thuật biến hóa thần thông",
                "Học trò của thầy toàn là những người biết bơi lặn giỏi"
            ],
            "correctAnswer": "Đức độ và tài năng cảm hóa muôn loài của người thầy vĩ đại",
            "hint": "Truyền thuyết dân gian nhằm ca ngợi nhân cách và uy tín to lớn của thầy.",
            "explanation": "Truyền thuyết Thủy Thần đến học và vâng lời thầy làm mưa cứu dân là hình ảnh tượng trưng tôn vinh nhân cách cao cả, tài đức của thầy lay chuyển cả trời đất."
        },
        {
            "id": "vn-b51-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu thành ngữ nào sau đây đúc kết sâu sắc nhất truyền thống đạo lý qua câu chuyện về thầy Chu Văn An?",
            "options": [
                "Tôn sư trọng đạo",
                "Lá lành đùm lá rách",
                "Có công mài sắt có ngày nên kim",
                "Ăn quả nhớ kẻ trồng cây"
            ],
            "correctAnswer": "Tôn sư trọng đạo",
            "hint": "Kính trọng người thầy và coi trọng đạo học.",
            "explanation": "Tấm gương của thầy và sự tôn kính của các học trò thể hiện rõ nét truyền thống \"Tôn sư trọng đạo\" của người Việt Nam."
        },
        {
            "id": "vn-b51-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Ý nào dưới đây giải thích chính xác nhất về danh hiệu \"Vạn thế sư biểu\"?",
            "options": [
                "Tấm gương mẫu mực của người thầy giáo cho muôn đời noi theo",
                "Người thầy dạy cho mười nghìn học sinh trong đời",
                "Người thầy đi dạy học ở một vạn ngôi trường",
                "Tấm bia đá được dựng trong mười nghìn năm"
            ],
            "correctAnswer": "Tấm gương mẫu mực của người thầy giáo cho muôn đời noi theo",
            "hint": "\"Vạn thế\" là muôn đời, \"sư biểu\" là khuôn mẫu người thầy.",
            "explanation": "\"Vạn thế sư biểu\" nghĩa là tấm gương người thầy giáo tiêu biểu, chuẩn mực cho muôn đời sau noi theo."
        },
        {
            "id": "vn-b51-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Thế hệ học sinh ngày nay cần học tập điều gì quý giá nhất từ tấm gương thầy Chu Văn An?",
            "options": [
                "Lòng yêu nước, tinh thần chính trực, hiếu học và trọng nghĩa khí",
                "Cách viết sớ chém người theo luật phong kiến",
                "Bỏ học lên núi ở ẩn khi gặp khó khăn",
                "Chỉ nghe lời những người có chức quyền giàu có"
            ],
            "correctAnswer": "Lòng yêu nước, tinh thần chính trực, hiếu học và trọng nghĩa khí",
            "hint": "Những phẩm chất đạo đức cao quý của một con người chính trực.",
            "explanation": "Học sinh học tập ở thầy tinh thần hiếu học, ngay thẳng, không vụ lợi cá nhân và hết lòng vì sự nghiệp chung của cộng đồng."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b51-s1",
            "prompt": "Tên sớ nổi tiếng mà thầy Chu Văn An dâng lên vua Trần là gì?",
            "options": [
                "Thất trảm sớ",
                "Bình Ngô đại cáo",
                "Hịch tướng sĩ",
                "Chiếu dời đô"
            ],
            "correctAnswer": "Thất trảm sớ",
            "explanation": "Thầy dâng \"Thất trảm sớ\" đòi chém 7 tên gian thần lộng hành."
        },
        {
            "id": "vn-b51-s2",
            "prompt": "Nơi thầy Chu Văn An về ở ẩn và dạy học thuộc địa danh nào?",
            "options": [
                "Núi Phượng Hoàng (Chí Linh)",
                "Núi Ba Vì",
                "Núi Yên Tử",
                "Núi Tản Viên"
            ],
            "correctAnswer": "Núi Phượng Hoàng (Chí Linh)",
            "explanation": "Thầy về ở ẩn và qua đời tại núi Phượng Hoàng (Chí Linh, Hải Dương)."
        },
        {
            "id": "vn-b51-s3",
            "prompt": "Thầy Chu Văn An từng giữ chức vụ gì tại Quốc Tử Giám?",
            "options": [
                "Tư nghiệp Quốc Tử Giám",
                "Hiệu trưởng tiểu học",
                "Trạng nguyên",
                "Thái sư"
            ],
            "correctAnswer": "Tư nghiệp Quốc Tử Giám",
            "explanation": "Thầy giữ chức Tư nghiệp (như chức hiệu trưởng ngày nay) của Quốc Tử Giám."
        }
    ]
  },
  'vn-b52': {
    practiceQuestions: [
        {
            "id": "vn-b52-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Mục đích chính của đoạn văn thể hiện tình cảm, cảm xúc là gì?",
            "options": [
                "Bày tỏ những suy nghĩ, cảm xúc chân thành về một người hoặc sự việc",
                "Liệt kê danh sách các đồ vật trong gia đình",
                "Kể lại một câu chuyện cổ tích hư cấu",
                "Hướng dẫn cách sử dụng một món đồ chơi"
            ],
            "correctAnswer": "Bày tỏ những suy nghĩ, cảm xúc chân thành về một người hoặc sự việc",
            "hint": "Tập trung vào cảm xúc, rung động của người viết.",
            "explanation": "Đoạn văn biểu cảm nhằm bộc lộ suy nghĩ, tình cảm, sự xúc động hay lòng biết ơn của người viết đối với đối tượng được nhắc đến."
        },
        {
            "id": "vn-b52-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Từ ngữ nào dưới đây thường dùng để bộc lộ cảm xúc trực tiếp trong câu?",
            "options": [
                "Biết bao, xúc động, yêu quý",
                "Chạy nhanh, nhảy cao",
                "Cái bàn, chiếc bút",
                "Màu xanh, hình tròn"
            ],
            "correctAnswer": "Biết bao, xúc động, yêu quý",
            "hint": "Đây là các từ chỉ trạng thái cảm xúc, tâm lý.",
            "explanation": "\"Biết bao, xúc động, yêu quý, kính trọng...\" là những từ biểu đạt trực tiếp cảm xúc của người viết."
        },
        {
            "id": "vn-b52-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Để đoạn văn thể hiện tình cảm thêm sâu sắc và sinh động, em nên kết hợp điều gì?",
            "options": [
                "Kết hợp nhắc lại kỉ niệm hoặc hành động cụ thể gợi niềm xúc động",
                "Dùng thật nhiều dấu chấm than liên tiếp",
                "Viết câu văn thật dài không cần dấu phẩy",
                "Sao chép nguyên văn lời của một bài hát bất kỳ"
            ],
            "correctAnswer": "Kết hợp nhắc lại kỉ niệm hoặc hành động cụ thể gợi niềm xúc động",
            "hint": "Cảm xúc bắt nguồn từ những hình ảnh, kỉ niệm có thật trong đời sống.",
            "explanation": "Gợi lại một kỉ niệm, chi tiết ấm áp (như ánh mắt thầy cô, bàn tay mẹ chai sần...) sẽ làm cho cảm xúc trở nên chân thực và lay động lòng người."
        },
        {
            "id": "vn-b52-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu nào dưới đây thể hiện tốt nhất tình cảm biết ơn sâu sắc đối với thầy cô giáo?",
            "options": [
                "Mỗi lời cô dạy như dòng suối mát lành nâng đỡ tâm hồn em từng ngày.",
                "Cô giáo em mặc chiếc áo dài màu xanh nhạt rất đẹp.",
                "Hôm nay cô cho cả lớp em làm bài kiểm tra hai mươi lăm phút.",
                "Lớp em có bốn mươi bạn học sinh cùng học một cô."
            ],
            "correctAnswer": "Mỗi lời cô dạy như dòng suối mát lành nâng đỡ tâm hồn em từng ngày.",
            "hint": "Câu văn sử dụng hình ảnh so sánh giàu cảm xúc để tri ân.",
            "explanation": "Câu này sử dụng hình ảnh so sánh giàu ý nghĩa biểu cảm để bộc lộ lòng biết ơn sâu nặng đối với công lao dạy dỗ của cô."
        },
        {
            "id": "vn-b52-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Một đoạn văn thể hiện tình cảm, cảm xúc thường có cấu trúc 3 phần là gì?",
            "options": [
                "Mở đoạn giới thiệu đối tượng; Thân đoạn nêu cảm xúc và kỉ niệm; Kết đoạn khẳng định lại tình cảm",
                "Mở bài kể chuyện; Thân bài tả ngoại hình; Kết bài tả trang phục",
                "Đoạn một nói về thời tiết; Đoạn hai kể tên bạn bè; Đoạn ba chào tạm biệt",
                "Chỉ cần viết một câu thật dài bày tỏ tình yêu thương"
            ],
            "correctAnswer": "Mở đoạn giới thiệu đối tượng; Thân đoạn nêu cảm xúc và kỉ niệm; Kết đoạn khẳng định lại tình cảm",
            "hint": "Bố cục chặt chẽ gồm mở đầu, phát triển cảm xúc và kết luận.",
            "explanation": "Cấu trúc hoàn chỉnh của đoạn văn biểu cảm gồm: Mở đoạn (giới thiệu người/sự việc), Thân đoạn (bộc lộ cảm xúc gắn với việc làm/kỉ niệm), Kết đoạn (khẳng định tình cảm bền vững)."
        },
        {
            "id": "vn-b52-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi viết đoạn văn thể hiện lòng kính yêu cha ông, các anh hùng liệt sĩ, người viết cần lưu ý điều gì về giọng điệu?",
            "options": [
                "Giọng điệu trang nghiêm, thành kính và tự hào",
                "Giọng điệu hài hước, bông đùa để vui nhộn",
                "Giọng điệu lạnh lùng, dửng dưng như kể việc người khác",
                "Giọng điệu giận dữ và gay gắt"
            ],
            "correctAnswer": "Giọng điệu trang nghiêm, thành kính và tự hào",
            "hint": "Tình cảm với những người đã ngã xuống vì Tổ quốc luôn cần sự tôn kính.",
            "explanation": "Khi viết về cha ông, các anh hùng liệt sĩ, giọng văn cần trang trọng, thành kính và chứa chan niềm tự hào dân tộc."
        },
        {
            "id": "vn-b52-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Đọc câu văn: \"Ôi, bàn tay của mẹ thô ráp vì sương gió, nhưng lại ấm áp diệu kì mỗi khi khẽ chạm vào trán con lúc con ốm!\" – Câu văn này sử dụng biện pháp nghệ thuật gì để làm nổi bật cảm xúc?",
            "options": [
                "Câu cảm thán kết hợp sự tương phản (thô ráp >< ấm áp diệu kì)",
                "Biện pháp chơi chữ và điệp từ",
                "Biện pháp nhân hóa đồ vật vô tri",
                "Câu hỏi tu từ không cần trả lời"
            ],
            "correctAnswer": "Câu cảm thán kết hợp sự tương phản (thô ráp >< ấm áp diệu kì)",
            "hint": "Bắt đầu bằng từ \"Ôi\" và đối lập giữa vẻ ngoài bàn tay với tình thương ấm áp.",
            "explanation": "Từ cảm thán \"Ôi\" cùng hình ảnh tương phản giữa đôi tay thô ráp vì lao động vất vả và tình cảm ấm áp chở che đã lay động lòng người sâu sắc."
        },
        {
            "id": "vn-b52-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Lỗi nào dưới đây là lỗi thường gặp nhất khiến đoạn văn biểu cảm trở nên sáo rỗng, không xúc động?",
            "options": [
                "Liệt kê từ ngữ xưng tụng hoa mỹ chung chung mà thiếu đi chi tiết, kỉ niệm thực tế",
                "Viết đúng chính tả và ngữ pháp tiếng Việt",
                "Sử dụng nhiều động từ miêu tả hành động cụ thể",
                "Chia đoạn văn có dấu chấm câu rõ ràng"
            ],
            "correctAnswer": "Liệt kê từ ngữ xưng tụng hoa mỹ chung chung mà thiếu đi chi tiết, kỉ niệm thực tế",
            "hint": "Văn học cần sự chân thực từ trái tim chứ không chỉ là lời nói suông hoa mỹ.",
            "explanation": "Một đoạn văn chỉ dùng những từ ngữ to tát mà không có hình ảnh hay kỷ niệm gắn bó cụ thể sẽ dễ trở nên khô khan, sáo rỗng."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b52-s1",
            "prompt": "Từ ngữ nào sau đây thích hợp nhất để bày tỏ lòng biết ơn?",
            "options": [
                "Tri ân sâu sắc",
                "Vô cùng thích thú",
                "Hết sức ngạc nhiên",
                "Rất tò mò"
            ],
            "correctAnswer": "Tri ân sâu sắc",
            "explanation": "\"Tri ân\" có nghĩa là ghi nhớ và đền đáp công ơn."
        },
        {
            "id": "vn-b52-s2",
            "prompt": "Đoạn văn biểu cảm cần bộc lộ điều gì là chủ đạo?",
            "options": [
                "Tình cảm, cảm xúc",
                "Các số liệu tính toán",
                "Quy trình kĩ thuật",
                "Tranh ảnh minh họa"
            ],
            "correctAnswer": "Tình cảm, cảm xúc",
            "explanation": "Đoạn văn biểu cảm lấy tình cảm, cảm xúc chân thành làm mạch cảm hứng chính."
        },
        {
            "id": "vn-b52-s3",
            "prompt": "Dấu câu nào thường được dùng ở cuối câu cảm thán biểu lộ cảm xúc dạt dào?",
            "options": [
                "Dấu chấm than (!)",
                "Dấu chấm hỏi (?)",
                "Dấu hai chấm (:)",
                "Dấu gạch ngang (-)"
            ],
            "correctAnswer": "Dấu chấm than (!)",
            "explanation": "Dấu chấm than (!) dùng để kết thúc câu cảm thán bộc lộ cảm xúc."
        }
    ]
  },
  'vn-b53': {
    practiceQuestions: [
        {
            "id": "vn-b53-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Tên khai sinh của Anh hùng Lao động Trần Đại Nghĩa là gì?",
            "options": [
                "Phạm Quang Lễ",
                "Trần Hưng Đạo",
                "Võ Nguyên Giáp",
                "Nguyễn Thái Học"
            ],
            "correctAnswer": "Phạm Quang Lễ",
            "hint": "Tên Trần Đại Nghĩa là tên do Bác Hồ đặt tặng ông.",
            "explanation": "Anh hùng Lao động Trần Đại Nghĩa tên thật là Phạm Quang Lễ, quê ở tỉnh Vĩnh Long."
        },
        {
            "id": "vn-b53-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Ai là người đã đặt tên mới \"Trần Đại Nghĩa\" cho kĩ sư Phạm Quang Lễ?",
            "options": [
                "Chủ tịch Hồ Chí Minh",
                "Đại tướng Võ Nguyên Giáp",
                "Bác Tôn Đức Thắng",
                "Nhà vua Bảo Đại"
            ],
            "correctAnswer": "Chủ tịch Hồ Chí Minh",
            "hint": "Vị cha già kính yêu của dân tộc đã gửi gắm lòng tin tưởng vào nghĩa lớn vì dân vì nước.",
            "explanation": "Năm 1946, khi theo Bác Hồ về nước kháng chiến, Bác đã đặt cho ông tên Trần Đại Nghĩa với mong muốn ông gánh vác việc đại nghĩa của dân tộc."
        },
        {
            "id": "vn-b53-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trước khi về nước tham gia kháng chiến, ông Phạm Quang Lễ đã du học và làm việc tại đâu với mức lương rất cao?",
            "options": [
                "Pháp",
                "Anh",
                "Mỹ",
                "Nga"
            ],
            "correctAnswer": "Pháp",
            "hint": "Đất nước ở châu Âu có thủ đô là Paris.",
            "explanation": "Ông từng theo học nhiều bằng kĩ sư tại Pháp và làm việc tại các viện nghiên cứu với mức lương cao cùng cuộc sống đầy đủ tiện nghi."
        },
        {
            "id": "vn-b53-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Đóng góp xuất sắc nhất của giáo sư Trần Đại Nghĩa trong cuộc kháng chiến chống thực dân Pháp là gì?",
            "options": [
                "Chế tạo thành công súng ba-dô-ca và súng không giật (SKZ) phá hủy xe tăng và đồn bốt giặc",
                "Chế tạo máy bay chiến đấu phản lực",
                "Đóng những con tàu ngầm quân sự lớn",
                "Sản xuất các thiết bị phát sóng truyền hình đầu tiên"
            ],
            "correctAnswer": "Chế tạo thành công súng ba-dô-ca và súng không giật (SKZ) phá hủy xe tăng và đồn bốt giặc",
            "hint": "Vũ khí hạng nặng giúp quân ta khắc chế xe bọc thép của quân Pháp.",
            "explanation": "Giáo sư đã cùng các cộng sự nghiên cứu chế tạo thành công súng ba-dô-ca, đạn bay, súng không giật (SKZ) giúp bộ đội tiêu diệt xe tăng và lô cốt địch."
        },
        {
            "id": "vn-b53-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hành động từ bỏ cuộc sống giàu sang ở nước ngoài về nước chịu đựng gian khổ kháng chiến cho thấy phẩm chất gì của Trần Đại Nghĩa?",
            "options": [
                "Lòng yêu nước nồng nàn và tinh thần xả thân vì độc lập dân tộc",
                "Sự bốc đồng, ngẫu hứng nhất thời",
                "Muốn tìm kiếm sự nổi tiếng nhanh chóng",
                "Muốn chứng tỏ mình thông minh hơn người khác"
            ],
            "correctAnswer": "Lòng yêu nước nồng nàn và tinh thần xả thân vì độc lập dân tộc",
            "hint": "Ông đặt lợi ích của Tổ quốc lên trên mọi lợi ích vật chất cá nhân.",
            "explanation": "Ông đã hy sinh quyền lợi riêng tư, một lòng theo tiếng gọi của Bác Hồ về phụng sự Tổ quốc trong hoàn cảnh kháng chiến muôn vàn khó khăn, gian khổ."
        },
        {
            "id": "vn-b53-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Giáo sư Trần Đại Nghĩa đã được Nhà nước phong tặng danh hiệu cao quý nào đầu tiên năm 1952?",
            "options": [
                "Anh hùng Lao động",
                "Nghệ sĩ Nhân dân",
                "Nhà giáo Nhân dân",
                "Thầy thuốc Ưu tú"
            ],
            "correctAnswer": "Anh hùng Lao động",
            "hint": "Danh hiệu dành cho những người có cống hiến đặc biệt xuất sắc trong lao động và sản xuất.",
            "explanation": "Tại Đại hội Chiến sĩ thi đua toàn quốc lần thứ nhất (1952), ông là một trong những người đầu tiên được phong tặng danh hiệu Anh hùng Lao động."
        },
        {
            "id": "vn-b53-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Tại sao có thể nói sự nghiệp chế tạo vũ khí của giáo sư Trần Đại Nghĩa là một kỳ tích phi thường?",
            "options": [
                "Vì trong điều kiện chiến khu thiếu thốn máy móc, nguyên liệu nhưng ông vẫn tạo ra vũ khí uy lực hiện đại",
                "Vì ông chỉ cần đọc sách một ngày là chế tạo xong vũ khí",
                "Vì quân địch đã tự đem máy móc sang viện trợ cho ông",
                "Vì ông mua sẵn vũ khí từ các nước phương Tây về dùng"
            ],
            "correctAnswer": "Vì trong điều kiện chiến khu thiếu thốn máy móc, nguyên liệu nhưng ông vẫn tạo ra vũ khí uy lực hiện đại",
            "hint": "Hoàn cảnh rừng núi chiến khu thiếu thốn đủ đường.",
            "explanation": "Ở chiến khu Việt Bắc giữa muôn vàn thiếu thốn về trang thiết bị và hóa chất, ông đã sáng tạo, tận dụng mọi nguyên liệu sẵn có để chế tạo vũ khí có sức công phá phi thường."
        },
        {
            "id": "vn-b53-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Từ \"Đại Nghĩa\" trong tên gọi mà Bác Hồ đặt mang ý nghĩa sâu sắc là gì?",
            "options": [
                "Nghĩa vụ lớn lao, việc nghĩa cao cả vì dân vì nước",
                "Người có vóc dáng to lớn khác thường",
                "Người có nhiều bạn bè thân thích",
                "Người biết kiếm nhiều tiền của cho gia đình"
            ],
            "correctAnswer": "Nghĩa vụ lớn lao, việc nghĩa cao cả vì dân vì nước",
            "hint": "Từ mang ý nghĩa phụng sự sự nghiệp cứu nước cứu dân.",
            "explanation": "\"Đại Nghĩa\" có nghĩa là việc nghĩa to lớn, đặt quyền lợi dân tộc và đất nước lên trên hết."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b53-s1",
            "prompt": "Trần Đại Nghĩa theo Bác Hồ từ Pháp về nước vào năm nào?",
            "options": [
                "1946",
                "1945",
                "1954",
                "1975"
            ],
            "correctAnswer": "1946",
            "explanation": "Năm 1946, sau chuyến thăm Pháp của Chủ tịch Hồ Chí Minh, ông đã cùng Bác về nước."
        },
        {
            "id": "vn-b53-s2",
            "prompt": "Loại vũ khí nào do giáo sư Trần Đại Nghĩa chế tạo nổi tiếng phá hủy xe tăng địch?",
            "options": [
                "Súng ba-dô-ca",
                "Súng bắn tỉa",
                "Kiếm thép",
                "Nỏ liên châu"
            ],
            "correctAnswer": "Súng ba-dô-ca",
            "explanation": "Súng ba-dô-ca do ông nghiên cứu chế tạo đã lập công lớn trong kháng chiến."
        },
        {
            "id": "vn-b53-s3",
            "prompt": "Quê hương của Anh hùng Trần Đại Nghĩa ở tỉnh nào?",
            "options": [
                "Vĩnh Long",
                "Đồng Tháp",
                "Bến Tre",
                "Cần Thơ"
            ],
            "correctAnswer": "Vĩnh Long",
            "explanation": "Ông sinh ra và lớn lên tại mảnh đất Vĩnh Long miền Tây Nam Bộ."
        }
    ]
  },
  'vn-b54': {
    practiceQuestions: [
        {
            "id": "vn-b54-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Thế nào là \"truyền thống\"?",
            "options": [
                "Lối sống, nếp nghĩ, tập quán tốt đẹp được truyền từ đời này sang đời khác",
                "Những đồ vật mới được phát minh gần đây",
                "Những bộ quần áo đắt tiền mua ở nước ngoài",
                "Một trò chơi mới xuất hiện trên mạng"
            ],
            "correctAnswer": "Lối sống, nếp nghĩ, tập quán tốt đẹp được truyền từ đời này sang đời khác",
            "hint": "\"Truyền\" là truyền lại, \"thống\" là mối nối tiếp liên tục.",
            "explanation": "Truyền thống là những giá trị tốt đẹp về đạo đức, văn hóa, lối sống được gìn giữ và trao truyền qua nhiều thế hệ."
        },
        {
            "id": "vn-b54-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Câu tục ngữ nào dưới đây thể hiện truyền thống \"Uống nước nhớ nguồn\" của dân tộc ta?",
            "options": [
                "Ăn quả nhớ kẻ trồng cây",
                "Học đi đôi với hành",
                "Môi hở răng lạnh",
                "Đi một ngày đàng học một sàng khôn"
            ],
            "correctAnswer": "Ăn quả nhớ kẻ trồng cây",
            "hint": "Nhắc nhở con cháu luôn biết ơn những người đi trước đã tạo dựng thành quả.",
            "explanation": "\"Ăn quả nhớ kẻ trồng cây\" là lời răn dạy muôn đời về đạo lý biết ơn tổ tiên, cha ông và những người có công với đất nước."
        },
        {
            "id": "vn-b54-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Dòng nào sau đây gồm các từ ngữ chỉ các truyền thống đạo đức quý báu của dân tộc Việt Nam?",
            "options": [
                "Yêu nước, hiếu học, nhân ái, đoàn kết",
                "Ích kỉ, tham lam, lười biếng",
                "Kiêu ngạo, tự ti, khoe khoang",
                "Xa hoa, lãng phí, bủn xỉn"
            ],
            "correctAnswer": "Yêu nước, hiếu học, nhân ái, đoàn kết",
            "hint": "Tìm những phẩm chất cao đẹp tạo nên bản sắc con người Việt Nam.",
            "explanation": "Dân tộc Việt Nam luôn tự hào với các truyền thống cao quý: yêu nước nồng nàn, tôn sư trọng đạo, hiếu học, thương người như thể thương thân."
        },
        {
            "id": "vn-b54-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Thành ngữ nào dưới đây ca ngợi truyền thống đoàn kết, thương yêu đùm bọc lẫn nhau?",
            "options": [
                "Lá lành đùm lá rách",
                "Vạn sự khởi đầu nan",
                "Gừng càng già càng cay",
                "Cháy nhà hàng xóm bình chân như vại"
            ],
            "correctAnswer": "Lá lành đùm lá rách",
            "hint": "Tương thân tương ái, người có điều kiện giúp đỡ người khó khăn.",
            "explanation": "\"Lá lành đùm lá rách\" ca ngợi tinh thần sẻ chia, tương trợ, giúp đỡ lẫn nhau trong hoạn nạn."
        },
        {
            "id": "vn-b54-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu thành ngữ nào sau đây thể hiện sâu sắc truyền thống tôn sư trọng đạo?",
            "options": [
                "Không thầy đố mày làm nên",
                "Gần mực thì đen gần đèn thì rạng",
                "Được mùa chớ phụ ngô khoai",
                "Có chí thì nên"
            ],
            "correctAnswer": "Không thầy đố mày làm nên",
            "hint": "Khẳng định vai trò dẫn đường chỉ lối vô cùng quan trọng của người thầy.",
            "explanation": "\"Không thầy đố mày làm nên\" khẳng định công lao to lớn và sự chỉ bảo tận tình của người thầy đối với sự thành bại của học trò."
        },
        {
            "id": "vn-b54-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Chọn từ thích hợp trong ngoặc điền vào chỗ chấm: \"Dù đi đâu về đâu, người Việt Nam luôn giữ gìn bản sắc và những nét đẹp ... của quê hương.\"",
            "options": [
                "truyền thống",
                "hiện đại",
                "ngoại lai",
                "tức thời"
            ],
            "correctAnswer": "truyền thống",
            "hint": "Những giá trị lâu đời được ông cha truyền lại.",
            "explanation": "\"Nét đẹp truyền thống\" chỉ những giá trị văn hóa tinh hoa được lưu truyền và gìn giữ từ bao đời."
        },
        {
            "id": "vn-b54-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Câu tục ngữ: \"Bầu ơi thương lấy bí cùng / Tuy rằng khác giống nhưng chung một giàn\" khuyên nhủ con người điều gì?",
            "options": [
                "Những người cùng sống trên một đất nước cần phải yêu thương, đoàn kết gắn bó keo sơn",
                "Nên trồng bí và bầu chung một mảnh vườn để tiết kiệm đất",
                "Bầu và bí có hình dáng và hương vị hoàn toàn giống nhau",
                "Không nên phân biệt các giống cây nông nghiệp"
            ],
            "correctAnswer": "Những người cùng sống trên một đất nước cần phải yêu thương, đoàn kết gắn bó keo sơn",
            "hint": "Mượn hình ảnh dây bầu dây bí để nói về tình đồng bào một bọc trăm con.",
            "explanation": "Câu ca dao mượn hình ảnh \"chung một giàn\" để nhắc nhở người dân cùng dòng máu Lạc Hồng phải biết yêu thương, tương trợ lẫn nhau."
        },
        {
            "id": "vn-b54-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hành động nào sau đây của học sinh thể hiện đúng đắn nhất việc kế thừa và phát huy truyền thống tốt đẹp của dân tộc?",
            "options": [
                "Chăm chỉ học tập, kính trọng thầy cô, lễ phép với ông bà cha mẹ và giúp đỡ bạn bè",
                "Chỉ chơi với những bạn có đồ dùng học tập đắt tiền",
                "Quên đi tiếng mẹ đẻ để học nói tiếng nước ngoài",
                "Không cần tìm hiểu các di tích lịch sử địa phương"
            ],
            "correctAnswer": "Chăm chỉ học tập, kính trọng thầy cô, lễ phép với ông bà cha mẹ và giúp đỡ bạn bè",
            "hint": "Biểu hiện cụ thể của hiếu thảo, tôn sư trọng đạo và đoàn kết tương ái.",
            "explanation": "Việc học sinh chăm ngoan, kính thầy yêu bạn, gìn giữ đạo lý gia đình chính là cách thiết thực nhất để tiếp nối truyền thống cha ông."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b54-s1",
            "prompt": "Từ nào sau đây ghép được với \"truyền thống\"?",
            "options": [
                "Nét đẹp truyền thống",
                "Bảng tính truyền thống",
                "Máy bay truyền thống",
                "Bóng đèn truyền thống"
            ],
            "correctAnswer": "Nét đẹp truyền thống",
            "explanation": "\"Nét đẹp truyền thống\" là cụm từ chuẩn diễn đạt giá trị tinh thần."
        },
        {
            "id": "vn-b54-s2",
            "prompt": "Thành ngữ: \"Con có cha như nhà có ...\" điền từ nào?",
            "options": [
                "nóc",
                "cột",
                "móng",
                "sân"
            ],
            "correctAnswer": "nóc",
            "explanation": "Thành ngữ: \"Con có cha như nhà có nóc\" nói về chỗ dựa vững chắc của người cha trong gia đình."
        },
        {
            "id": "vn-b54-s3",
            "prompt": "Truyền thống \"Tôn sư trọng đạo\" nhắc nhớ ta về đối tượng nào?",
            "options": [
                "Thầy cô giáo",
                "Thợ xây nhà",
                "Bác sĩ",
                "Thương gia"
            ],
            "correctAnswer": "Thầy cô giáo",
            "explanation": "\"Tôn sư\" nghĩa là tôn kính người thầy dạy dỗ mình."
        }
    ]
  },
  'vn-b55': {
    practiceQuestions: [
        {
            "id": "vn-b55-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Tác giả của bài thơ \"Việt Nam quê hương ta\" là nhà thơ nào?",
            "options": [
                "Nguyễn Đình Thi",
                "Tố Hữu",
                "Trần Đăng Khoa",
                "Huy Cận"
            ],
            "correctAnswer": "Nguyễn Đình Thi",
            "hint": "Tác giả của những bài thơ kháng chiến nổi tiếng như \"Đất nước\".",
            "explanation": "Bài thơ \"Việt Nam quê hương ta\" được trích từ trường ca \"Bài thơ Hắc Hải\" của nhà thơ Nguyễn Đình Thi."
        },
        {
            "id": "vn-b55-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Hai câu thơ đầu miêu tả cảnh đẹp nào của đất nước: \"Việt Nam đất nước ta ơi / Mênh mông biển lúa đâu trời đẹp hơn\"?",
            "options": [
                "Những cánh đồng lúa rộng mênh mông, bát ngát",
                "Những bãi cát trắng ven bờ biển xanh",
                "Đỉnh núi cao quanh năm mây phủ",
                "Phố phường đông đúc người xe qua lại"
            ],
            "correctAnswer": "Những cánh đồng lúa rộng mênh mông, bát ngát",
            "hint": "Nhắc đến \"biển lúa\" trải dài ngút ngàn tầm mắt.",
            "explanation": "\"Biển lúa\" là hình ảnh ẩn dụ tuyệt đẹp miêu tả cánh đồng lúa quê hương trù phú, bao la dập dờn như sóng biển."
        },
        {
            "id": "vn-b55-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hình ảnh nào gợi tả nét thanh bình, yên ả đặc trưng của làng quê Việt Nam trong bài thơ?",
            "options": [
                "Cánh cò bay lả rập rờn, mây mờ che đỉnh Trường Sơn sớm chiều",
                "Tiếng còi xe inh ỏi trên đường phố",
                "Những tòa nhà chọc trời san sát nhau",
                "Tiếng máy bay gầm rú trên bầu trời"
            ],
            "correctAnswer": "Cánh cò bay lả rập rờn, mây mờ che đỉnh Trường Sơn sớm chiều",
            "hint": "Cánh cò trắng muốt chao lượn trên đồng lúa thanh bình.",
            "explanation": "Hình ảnh cánh cò bay lả rập rờn kết hợp đỉnh Trường Sơn mây phủ mở ra khung cảnh thiên nhiên hùng vĩ mà êm đềm, đậm chất thơ."
        },
        {
            "id": "vn-b55-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu thơ \"Mặt người vất vả in sâu / Gái trai cũng một áo nâu nhuộm bùn\" gợi lên phẩm chất gì của con người Việt Nam?",
            "options": [
                "Cần cù, mộc mạc, chịu thương chịu khó trong lao động",
                "Thích mặc áo màu nâu để đi dự tiệc",
                "Không thích tắm rửa giặt giũ quần áo",
                "Lười biếng chỉ thích ngủ ngày"
            ],
            "correctAnswer": "Cần cù, mộc mạc, chịu thương chịu khó trong lao động",
            "hint": "Màu áo nâu và nỗi vất vả gắn liền với người nông dân lam lũ.",
            "explanation": "Câu thơ thể hiện sự mộc mạc, giản dị và tinh thần lao động cần cù, kiên cường vượt qua mọi nhọc nhằn của nhân dân ta."
        },
        {
            "id": "vn-b55-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hai câu thơ: \"Đất nghèo nuôi những anh hùng / Chìm trong máu lửa lại vùng đứng lên\" ca ngợi điều gì?",
            "options": [
                "Tinh thần bất khuất, kiên cường chống giặc ngoại xâm của dân tộc",
                "Đất nước có rất nhiều vàng bạc châu báu",
                "Người dân thích đốt lửa trong đêm tối",
                "Đất đai màu mỡ dễ trồng trọt hoa màu"
            ],
            "correctAnswer": "Tinh thần bất khuất, kiên cường chống giặc ngoại xâm của dân tộc",
            "hint": "Dù phải trải qua bao đau thương chiến tranh, nhân dân vẫn kiên cường vùng lên chiến thắng.",
            "explanation": "Câu thơ ca ngợi truyền thống yêu nước nồng nàn và ý chí quật cường, bất khuất của dân tộc Việt Nam trước mọi kẻ thù xâm lược."
        },
        {
            "id": "vn-b55-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Bài thơ được sáng tác theo thể thơ truyền thống nào của dân tộc?",
            "options": [
                "Thơ lục bát (câu 6 tiếng xen kẽ câu 8 tiếng)",
                "Thơ năm chữ",
                "Thơ bảy chữ",
                "Thơ tự do"
            ],
            "correctAnswer": "Thơ lục bát (câu 6 tiếng xen kẽ câu 8 tiếng)",
            "hint": "Thể thơ dân tộc mang âm hưởng ngọt ngào như lời ru.",
            "explanation": "Bài thơ được viết theo thể thơ lục bát nhịp nhàng, tha thiết, mang đậm hồn cốt dân tộc Việt Nam."
        },
        {
            "id": "vn-b55-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hình ảnh \"Súng gươm vứt bỏ lại hiền như xưa\" thể hiện nét đẹp tâm hồn nào của nhân dân ta?",
            "options": [
                "Yêu chuộng hòa bình, nhân hậu và bao dung khi chiến tranh kết thúc",
                "Không biết cách sử dụng vũ khí nên vứt đi",
                "Rất sợ cầm vũ khí chiến đấu",
                "Mất hết sức lực sau cuộc chiến"
            ],
            "correctAnswer": "Yêu chuộng hòa bình, nhân hậu và bao dung khi chiến tranh kết thúc",
            "hint": "Người Việt dũng cảm đánh đuổi kẻ thù nhưng khi thanh bình lại trở về với bản tính thuần hậu, bao dung.",
            "explanation": "Người dân Việt Nam anh dũng, kiên cường trong chiến đấu chống giặc, nhưng bản chất tâm hồn luôn hiền hòa, nhân ái và tha thiết khát khao hòa bình."
        },
        {
            "id": "vn-b55-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Cảm xúc bao trùm toàn bộ bài thơ \"Việt Nam quê hương ta\" là gì?",
            "options": [
                "Niềm tự hào, tình yêu quê hương đất nước tha thiết và niềm tin vào con người Việt Nam",
                "Nỗi buồn bã và chán nản trước thiên nhiên",
                "Sự hoang mang lo lắng cho tương lai",
                "Sự sợ hãi trước những thử thách gian khó"
            ],
            "correctAnswer": "Niềm tự hào, tình yêu quê hương đất nước tha thiết và niềm tin vào con người Việt Nam",
            "hint": "Âm điệu tự hào vang lên ngay từ câu gọi đầu tiên \"Việt Nam đất nước ta ơi\".",
            "explanation": "Toàn bộ bài thơ ngân vang niềm kiêu hãnh về non sông gấm vóc và tình yêu vô bờ bến với con người Việt Nam cần cù, dũng cảm và nhân hậu."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b55-s1",
            "prompt": "Điền từ còn thiếu: \"Mênh mông biển lúa đâu trời ... hơn\"",
            "options": [
                "đẹp",
                "rộng",
                "cao",
                "xa"
            ],
            "correctAnswer": "đẹp",
            "explanation": "Nguyên văn câu thơ: \"Mênh mông biển lúa đâu trời đẹp hơn\"."
        },
        {
            "id": "vn-b55-s2",
            "prompt": "Dãy núi nào được nhắc tới trong bài thơ: \"... mây mờ che đỉnh ... sớm chiều\"?",
            "options": [
                "Trường Sơn",
                "Hoàng Liên Sơn",
                "Ba Vì",
                "Bạch Mã"
            ],
            "correctAnswer": "Trường Sơn",
            "explanation": "Câu thơ: \"Cánh cò bay lả rập rờn / Mây mờ che đỉnh Trường Sơn sớm chiều\"."
        },
        {
            "id": "vn-b55-s3",
            "prompt": "Thể thơ lục bát có số chữ trong từng cặp câu là bao nhiêu?",
            "options": [
                "6 chữ và 8 chữ",
                "7 chữ và 7 chữ",
                "5 chữ và 5 chữ",
                "8 chữ và 8 chữ"
            ],
            "correctAnswer": "6 chữ và 8 chữ",
            "explanation": "Thơ lục bát gồm một câu sáu chữ (lục) đi liền với một câu tám chữ (bát)."
        }
    ]
  },
  'vn-b56': {
    practiceQuestions: [
        {
            "id": "vn-b56-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Trong chủ điểm \"Tiếp bước cha ông\", chủ đề chính được tìm hiểu là gì?",
            "options": [
                "Lòng yêu nước, truyền thống lịch sử vẻ vang và tinh thần hiếu học của dân tộc",
                "Các môn thể thao mạo hiểm dưới biển sâu",
                "Kĩ thuật lập trình máy tính điện tử",
                "Các hiện tượng thời tiết bão lũ tự nhiên"
            ],
            "correctAnswer": "Lòng yêu nước, truyền thống lịch sử vẻ vang và tinh thần hiếu học của dân tộc",
            "hint": "Tên chủ điểm gợi nhớ việc thế hệ sau nối tiếp truyền thống của cha ông.",
            "explanation": "Chủ điểm 7 ca ngợi truyền thống dựng nước và giữ nước, tinh thần hiếu học, sự cống hiến của các thế hệ cha anh đi trước."
        },
        {
            "id": "vn-b56-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Các biện pháp liên kết câu đã học gồm những biện pháp nào?",
            "options": [
                "Lặp từ ngữ, thay thế từ ngữ, dùng từ ngữ nối",
                "Đổi màu mực, viết hoa toàn bộ, gạch chân",
                "Dùng dấu hỏi chấm ở tất cả các câu",
                "Viết tắt các chữ cái đầu câu"
            ],
            "correctAnswer": "Lặp từ ngữ, thay thế từ ngữ, dùng từ ngữ nối",
            "hint": "Ba cách nối kết câu cơ bản về mặt ngữ nghĩa và từ vựng.",
            "explanation": "Ba biện pháp liên kết câu chủ yếu trong Tiếng Việt là: phép lặp từ ngữ, phép thay thế từ ngữ (đại từ, từ đồng nghĩa), và phép nối (từ ngữ nối)."
        },
        {
            "id": "vn-b56-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong đoạn: \"Văn Miếu – Quốc Tử Giám là niềm tự hào của người dân Hà Nội. Nơi đây đã đào tạo hàng nghìn bậc hiền tài cho đất nước.\" – Từ \"Nơi đây\" dùng phép liên kết gì?",
            "options": [
                "Phép thay thế từ ngữ (thay cho Văn Miếu – Quốc Tử Giám)",
                "Phép lặp từ ngữ",
                "Phép nối bằng quan hệ từ",
                "Không có phép liên kết nào"
            ],
            "correctAnswer": "Phép thay thế từ ngữ (thay cho Văn Miếu – Quốc Tử Giám)",
            "hint": "\"Nơi đây\" là đại từ chỉ nơi chốn thay thế cho danh từ ở câu 1 để tránh lặp.",
            "explanation": "\"Nơi đây\" được dùng để thay thế cho cụm từ \"Văn Miếu – Quốc Tử Giám\", tạo sự liên kết tự nhiên giữa hai câu."
        },
        {
            "id": "vn-b56-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Đoạn văn: \"Trần Đại Nghĩa có cuộc sống đủ đầy ở Paris. Tuy nhiên, ông đã nghe theo tiếng gọi của Bác Hồ trở về kháng chiến.\" sử dụng từ ngữ nối nào?",
            "options": [
                "Tuy nhiên",
                "Có",
                "Ở",
                "Trở về"
            ],
            "correctAnswer": "Tuy nhiên",
            "hint": "Từ đứng ở đầu câu sau chỉ sự tương phản với sự giàu sang nêu ở câu trước.",
            "explanation": "\"Tuy nhiên\" là từ ngữ nối chỉ quan hệ tương phản giữa câu trước và câu sau."
        },
        {
            "id": "vn-b56-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu tục ngữ: \"Uống nước nhớ nguồn\" khuyên con người điều gì?",
            "options": [
                "Luôn biết ơn, ghi nhớ công lao của những người đã giúp đỡ, tạo dựng thành quả cho mình",
                "Chỉ nên uống nước ở đầu nguồn suối trong lành",
                "Không được làm ô nhiễm nguồn nước ngầm",
                "Phải tiết kiệm nước ngọt trong sinh hoạt"
            ],
            "correctAnswer": "Luôn biết ơn, ghi nhớ công lao của những người đã giúp đỡ, tạo dựng thành quả cho mình",
            "hint": "Đạo lý nhớ ơn cội nguồn của người Việt.",
            "explanation": "\"Uống nước nhớ nguồn\" là đạo lý ngàn đời nhắc nhở mỗi chúng ta luôn biết ơn tổ tiên, cha ông và những người có công với đất nước."
        },
        {
            "id": "vn-b56-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi viết bài văn ca ngợi một tấm gương anh hùng dân tộc, người viết cần chú ý điều gì?",
            "options": [
                "Nêu rõ cuộc đời, chiến công tiêu biểu và bày tỏ lòng biết ơn, khâm phục chân thành",
                "Chỉ chép lại ngày tháng năm sinh của nhân vật",
                "Tự bịa ra các chiến công kì ảo không có thật trong lịch sử",
                "Chê bai các nhân vật lịch sử khác"
            ],
            "correctAnswer": "Nêu rõ cuộc đời, chiến công tiêu biểu và bày tỏ lòng biết ơn, khâm phục chân thành",
            "hint": "Tôn trọng sự thật lịch sử kết hợp biểu lộ tình cảm trân trọng.",
            "explanation": "Bài văn cần dựa trên sự thật lịch sử về chiến công, phẩm chất của nhân vật và gửi gắm tình cảm biết ơn sâu nặng của bản thân."
        },
        {
            "id": "vn-b56-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Đọc đoạn văn sau: \"Chu Văn An là người thầy mẫu mực. Thầy luôn dạy học trò lẽ sống ngay thẳng. Vì vậy, các thế hệ học trò đều một lòng kính phục thầy.\" Đoạn văn trên đã phối hợp những biện pháp liên kết câu nào?",
            "options": [
                "Phép lặp từ ngữ (\"thầy\"), phép thay thế (\"Thầy\") và phép nối (\"Vì vậy\")",
                "Chỉ dùng duy nhất phép lặp từ ngữ",
                "Chỉ dùng duy nhất phép so sánh",
                "Không sử dụng phép liên kết nào"
            ],
            "correctAnswer": "Phép lặp từ ngữ (\"thầy\"), phép thay thế (\"Thầy\") và phép nối (\"Vì vậy\")",
            "hint": "Quan sát từ \"Thầy\" thay thế cho \"Chu Văn An\", từ \"thầy\" được lặp lại và từ nối \"Vì vậy\".",
            "explanation": "Đoạn văn kết hợp nhuần nhuyễn phép thay thế (\"Thầy\" thay \"Chu Văn An\"), phép lặp (\"thầy\") và từ nối nguyên nhân - kết quả (\"Vì vậy\")."
        },
        {
            "id": "vn-b56-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Trách nhiệm của học sinh ngày nay trong việc \"Tiếp bước cha ông\" là gì?",
            "options": [
                "Ra sức rèn đức luyện tài, giữ gìn bản sắc dân tộc và góp phần xây dựng đất nước giàu mạnh",
                "Chỉ cần học thuộc lòng sách sử mà không cần hành động",
                "Đợi khi nào lớn lên mới cần rèn luyện bản thân",
                "Chỉ lo cho lợi ích của riêng cá nhân mình"
            ],
            "correctAnswer": "Ra sức rèn đức luyện tài, giữ gìn bản sắc dân tộc và góp phần xây dựng đất nước giàu mạnh",
            "hint": "Hành động thiết thực bằng việc học tập và rèn luyện đạo đức ngay từ hôm nay.",
            "explanation": "Tiếp bước cha ông đòi hỏi mỗi học sinh không ngừng nỗ lực học giỏi, rèn đức, biết ơn cội nguồn để mai sau trở thành công dân có ích dựng xây Tổ quốc."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b56-s1",
            "prompt": "Có mấy biện pháp liên kết câu cơ bản đã học?",
            "options": [
                "3 biện pháp (lặp, thay thế, dùng từ nối)",
                "2 biện pháp",
                "5 biện pháp",
                "1 biện pháp"
            ],
            "correctAnswer": "3 biện pháp (lặp, thay thế, dùng từ nối)",
            "explanation": "Ba biện pháp liên kết câu chính là: lặp từ ngữ, thay thế từ ngữ và dùng từ ngữ nối."
        },
        {
            "id": "vn-b56-s2",
            "prompt": "Từ \"Bởi thế\" trong đoạn văn đóng vai trò là gì?",
            "options": [
                "Từ ngữ nối",
                "Đại từ thay thế",
                "Danh từ chỉ đồ vật",
                "Động từ chỉ hành động"
            ],
            "correctAnswer": "Từ ngữ nối",
            "explanation": "\"Bởi thế\" là từ ngữ nối chỉ quan hệ nguyên nhân - kết quả."
        },
        {
            "id": "vn-b56-s3",
            "prompt": "Thành ngữ nào chỉ việc con cháu kế tục xứng đáng truyền thống của gia đình, dòng họ?",
            "options": [
                "Hổ phụ sinh hổ tử",
                "Cha mẹ sinh con trời sinh tính",
                "Con hơn cha là nhà có phúc",
                "Gần mực thì đen"
            ],
            "correctAnswer": "Con hơn cha là nhà có phúc",
            "explanation": "\"Con hơn cha là nhà có phúc\" ca ngợi thế hệ sau phát triển giỏi giang, rạng rỡ gia đình."
        }
    ]
  },
  'vn-b57': {
    practiceQuestions: [
        {
            "id": "vn-b57-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Tác giả của bài thơ \"Bài ca trái đất\" là ai?",
            "options": [
                "Định Hải",
                "Phạm Tiến Duật",
                "Huy Cận",
                "Xuân Quỳnh"
            ],
            "correctAnswer": "Định Hải",
            "hint": "Một nhà thơ quen thuộc với nhiều bài thơ hay viết cho thiếu nhi.",
            "explanation": "Bài thơ \"Bài ca trái đất\" do nhà thơ thiếu nhi Định Hải sáng tác."
        },
        {
            "id": "vn-b57-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Trong khổ thơ đầu, trái đất được so sánh với hình ảnh tuyệt đẹp nào?",
            "options": [
                "Quả bóng xanh bay giữa trời xanh",
                "Ngọn hải đăng sáng rực trong đêm",
                "Đĩa bay khổng lồ ngoài vũ trụ",
                "Bông hoa hướng dương rực rỡ"
            ],
            "correctAnswer": "Quả bóng xanh bay giữa trời xanh",
            "hint": "\"Trái đất này là của chúng mình / Quả bóng xanh bay giữa trời xanh\".",
            "explanation": "Tác giả ví trái đất như một \"quả bóng xanh\" khổng lồ bay lượn giữa không gian bao la, thuộc về trẻ thơ."
        },
        {
            "id": "vn-b57-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hình ảnh \"bồ câu trắng\" và \"hải âu\" trong bài thơ tượng trưng cho điều gì?",
            "options": [
                "Hòa bình, sự thân ái và khát vọng tự do bay lượn",
                "Bão táp và giông gió nguy hiểm",
                "Sự cô đơn lạnh lẽo giữa biển khơi",
                "Chiến tranh và xung đột ác liệt"
            ],
            "correctAnswer": "Hòa bình, sự thân ái và khát vọng tự do bay lượn",
            "hint": "Chim bồ câu trắng là sứ giả của hòa bình thế giới.",
            "explanation": "Bồ câu trắng vẫy cánh và chim hải âu chao lượn trên sóng biển tượng trưng cho ước mơ về một thế giới thanh bình, hòa thuận không có chiến tranh."
        },
        {
            "id": "vn-b57-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu thơ: \"Vàng, trắng, đen... dù da khác màu / Ta là nụ, là hoa của đất\" thể hiện tinh thần gì?",
            "options": [
                "Mọi trẻ em trên thế giới đều bình đẳng, đoàn kết và cùng là mầm non quý báu",
                "Chỉ những người da trắng mới được làm hoa",
                "Nên phân biệt đối xử theo màu da",
                "Mỗi màu da nên sống ở một hành tinh riêng"
            ],
            "correctAnswer": "Mọi trẻ em trên thế giới đều bình đẳng, đoàn kết và cùng là mầm non quý báu",
            "hint": "Khẳng định sự bình đẳng, tình bác ái giữa các màu da, dân tộc trên toàn cầu.",
            "explanation": "Tác giả khẳng định dù mang màu da nào thì trẻ em trên toàn thế giới đều bình đẳng, đáng yêu và là những nụ hoa tương lai của trái đất."
        },
        {
            "id": "vn-b57-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Tác giả bài thơ kêu gọi mọi người hãy cùng nhau hành động làm gì để bảo vệ cuộc sống?",
            "options": [
                "Chống lại bom đạn chiến tranh, bảo vệ màu xanh hòa bình cho trái đất",
                "Chế tạo thật nhiều vũ khí hạt nhân",
                "Khai thác cạn kiệt tài nguyên rừng và biển",
                "Xây dựng các pháo đài quân sự kiên cố"
            ],
            "correctAnswer": "Chống lại bom đạn chiến tranh, bảo vệ màu xanh hòa bình cho trái đất",
            "hint": "\"Hãy ngăn chặn bàn tay vũ trang / Cho nụ hoa xanh tốt trên cành\".",
            "explanation": "Bài thơ cất lên tiếng gọi tha thiết đòi hỏi hòa bình, ngăn chặn nguy cơ chiến tranh hạt nhân hủy diệt để trái đất mãi xanh tươi."
        },
        {
            "id": "vn-b57-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Điệp khúc \"Trái đất này là của chúng mình\" được lặp lại nhiều lần nhằm nhấn mạnh điều gì?",
            "options": [
                "Khẳng định quyền được sống trong hòa bình, hạnh phúc của trẻ em khắp năm châu",
                "Khẳng định trẻ em có nhiều tiền để mua trái đất",
                "Khẳng định người lớn không được phép sinh sống trên trái đất",
                "Khẳng định trái đất là tài sản riêng của một nhóm bạn"
            ],
            "correctAnswer": "Khẳng định quyền được sống trong hòa bình, hạnh phúc của trẻ em khắp năm châu",
            "hint": "Khẳng định quyền sống và làm chủ thế giới hòa bình của thế hệ trẻ.",
            "explanation": "Điệp từ điệp ngữ này khẳng định mạnh mẽ quyền làm chủ, quyền được yêu thương và vui sống trong hòa bình của mọi trẻ thơ trên hành tinh."
        },
        {
            "id": "vn-b57-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Biện pháp nghệ thuật nào được sử dụng nổi bật nhất trong câu thơ: \"Ta là nụ, là hoa của đất\"?",
            "options": [
                "So sánh và ẩn dụ",
                "Nhân hóa và đảo ngữ",
                "Chơi chữ đồng âm",
                "Nói quá phóng đại"
            ],
            "correctAnswer": "So sánh và ẩn dụ",
            "hint": "Ví \"ta\" (trẻ em) là \"nụ\", là \"hoa\" của đất mẹ.",
            "explanation": "Tác giả sử dụng biện pháp so sánh ngầm (ẩn dụ) ví trẻ em như những nụ hoa tươi tắn, kết tinh vẻ đẹp và sức sống tràn trề của đất mẹ."
        },
        {
            "id": "vn-b57-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Thông điệp nhân văn cao cả nhất mà bài thơ \"Bài ca trái đất\" muốn gửi gắm là gì?",
            "options": [
                "Hãy chung tay giữ gìn hòa bình, bảo vệ môi trường và yêu thương, đoàn kết nhân loại",
                "Trẻ em nên dành toàn bộ thời gian để chơi bóng xanh",
                "Hãy di cư sang hành tinh khác sinh sống",
                "Chỉ cần bảo vệ đất nước mình mà không cần quan tâm đến thế giới"
            ],
            "correctAnswer": "Hãy chung tay giữ gìn hòa bình, bảo vệ môi trường và yêu thương, đoàn kết nhân loại",
            "hint": "Một thông điệp toàn cầu về tình đoàn kết và hòa bình thế giới.",
            "explanation": "Bài thơ là lời hiệu triệu chan chứa tình nhân đạo, kêu gọi bảo vệ hòa bình, tôn trọng sự sống và thắt chặt tình hữu nghị giữa tất cả các dân tộc trên trái đất."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b57-s1",
            "prompt": "Trái đất được ví như quả bóng màu gì trong bài thơ?",
            "options": [
                "Quả bóng xanh",
                "Quả bóng đỏ",
                "Quả bóng vàng",
                "Quả bóng trắng"
            ],
            "correctAnswer": "Quả bóng xanh",
            "explanation": "Trong thơ viết: \"Quả bóng xanh bay giữa trời xanh\"."
        },
        {
            "id": "vn-b57-s2",
            "prompt": "Loài chim nào cùng với chim hải âu được nhắc đến trong bài thơ?",
            "options": [
                "Bồ câu",
                "Họa mi",
                "Đại bàng",
                "Sơn ca"
            ],
            "correctAnswer": "Bồ câu",
            "explanation": "Câu thơ: \"Bồ câu ơi, tiếng chim gù thương mến / Hải âu ơi, cánh chim vờn sóng biển\"."
        },
        {
            "id": "vn-b57-s3",
            "prompt": "Đối tượng nào được ví là \"nụ, là hoa của đất\"?",
            "options": [
                "Trẻ em",
                "Cây cối",
                "Các vì sao",
                "Mây trời"
            ],
            "correctAnswer": "Trẻ em",
            "explanation": "Trẻ em khắp năm châu được ví như những nụ hoa tươi thắm của đất mẹ."
        }
    ]
  },
  'vn-b58': {
    practiceQuestions: [
        {
            "id": "vn-b58-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Dấu hai chấm (:) thường được dùng để làm gì trong câu?",
            "options": [
                "Báo hiệu phần giải thích, thuyết minh hoặc báo hiệu lời nói trực tiếp",
                "Báo hiệu kết thúc một câu hỏi thắc mắc",
                "Báo hiệu câu đã kết thúc trọn vẹn ý nghĩa",
                "Báo hiệu cảm xúc vui sướng ngạc nhiên"
            ],
            "correctAnswer": "Báo hiệu phần giải thích, thuyết minh hoặc báo hiệu lời nói trực tiếp",
            "hint": "Sau dấu hai chấm thường là phần diễn giải cụ thể hoặc mở ngoặc kép trích lời nói.",
            "explanation": "Dấu hai chấm báo hiệu lời nói trực tiếp (phối hợp với dấu ngoặc kép hoặc gạch đầu dòng) hoặc báo hiệu phần giải thích, liệt kê cho bộ phận đứng trước."
        },
        {
            "id": "vn-b58-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Dấu gạch ngang (-) đặt ở đầu dòng có tác dụng gì?",
            "options": [
                "Đánh dấu lời nói trực tiếp của nhân vật trong cuộc đối thoại",
                "Nối các từ trong một liên danh",
                "Đánh dấu từ ngữ mỉa mai châm biếm",
                "Kết thúc một câu khẳng định"
            ],
            "correctAnswer": "Đánh dấu lời nói trực tiếp của nhân vật trong cuộc đối thoại",
            "hint": "Khi các nhân vật nói chuyện với nhau, lời thoại bắt đầu bằng dấu gạch ngang đầu dòng.",
            "explanation": "Dấu gạch ngang đặt ở đầu dòng dùng để đánh dấu chỗ bắt đầu lời nói trực tiếp của nhân vật trong đối thoại."
        },
        {
            "id": "vn-b58-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong câu: \"Hà Nội có nhiều di tích lịch sử nổi tiếng: Văn Miếu, Hoàng thành Thăng Long, Hồ Gươm.\", dấu hai chấm có tác dụng gì?",
            "options": [
                "Báo hiệu phần liệt kê làm rõ cho cụm từ \"nhiều di tích lịch sử nổi tiếng\"",
                "Báo hiệu lời nói của một hướng dẫn viên du lịch",
                "Ngăn cách chủ ngữ và vị ngữ trong câu",
                "Đánh dấu phần chú thích xen vào giữa câu"
            ],
            "correctAnswer": "Báo hiệu phần liệt kê làm rõ cho cụm từ \"nhiều di tích lịch sử nổi tiếng\"",
            "hint": "Kể tên cụ thể các di tích lịch sử.",
            "explanation": "Dấu hai chấm ở đây dùng để báo hiệu phần liệt kê cụ thể các danh lam thắng cảnh làm rõ nghĩa cho bộ phận đứng trước."
        },
        {
            "id": "vn-b58-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong câu: \"Mẹ tôi – người phụ nữ tần tảo cả đời – luôn dành trọn tình thương cho con cái.\", cặp dấu gạch ngang có tác dụng gì?",
            "options": [
                "Đánh dấu bộ phận chú thích, giải thích thêm trong câu",
                "Đánh dấu các ý liệt kê đầu dòng",
                "Nối các từ ngữ trong một liên danh địa danh",
                "Báo hiệu lời nói trực tiếp của mẹ"
            ],
            "correctAnswer": "Đánh dấu bộ phận chú thích, giải thích thêm trong câu",
            "hint": "Cụm từ \"người phụ nữ tần tảo cả đời\" làm rõ nghĩa thêm cho từ \"Mẹ tôi\".",
            "explanation": "Dấu gạch ngang dùng thành cặp ở giữa câu có tác dụng đánh dấu bộ phận chú thích, bổ sung thông tin giải thích cho từ ngữ đứng trước nó."
        },
        {
            "id": "vn-b58-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Dấu gạch ngang trong cụm từ: \"Tuyến đường sắt Hà Nội – Hải Phòng\" có tác dụng gì?",
            "options": [
                "Nối các từ trong một liên danh chỉ phạm vi địa lý",
                "Đánh dấu lời nói trực tiếp của hành khách",
                "Đánh dấu bộ phận chú thích trong câu",
                "Báo hiệu phần giải thích nguyên nhân"
            ],
            "correctAnswer": "Nối các từ trong một liên danh chỉ phạm vi địa lý",
            "hint": "Nối điểm đầu và điểm cuối của một tuyến đường.",
            "explanation": "Dấu gạch ngang dùng để nối các từ ngữ trong một liên danh (tuyến đường, khoảng cách, tổ hợp tên người...)."
        },
        {
            "id": "vn-b58-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi viết cuộc trò chuyện giữa hai bạn học sinh, ta cần phối hợp những dấu câu nào sau câu dẫn thoại?",
            "options": [
                "Dấu hai chấm ở cuối câu dẫn, xuống dòng dùng dấu gạch ngang đầu dòng",
                "Dấu chấm than ở cuối câu dẫn, xuống dòng viết chữ in hoa",
                "Dấu chấm hỏi ở cuối câu dẫn và dấu gạch nối giữa các từ",
                "Chỉ cần dùng dấu phẩy rồi viết tiếp trên cùng một dòng"
            ],
            "correctAnswer": "Dấu hai chấm ở cuối câu dẫn, xuống dòng dùng dấu gạch ngang đầu dòng",
            "hint": "Quy tắc trình bày hội thoại chuẩn trong văn bản tiếng Việt.",
            "explanation": "Cấu trúc thông thường: Câu dẫn thoại kết thúc bằng dấu hai chấm (:), sau đó xuống dòng mở đầu bằng dấu gạch ngang (-) để ghi lời nhân vật."
        },
        {
            "id": "vn-b58-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Đoạn văn sau có chỗ nào đặt dấu câu chưa hợp lý: \"Bác bảo vệ dặn chúng em. - Các cháu phải chú ý đóng cửa sổ trước khi ra về!\"?",
            "options": [
                "Sau chữ \"dặn chúng em\" phải dùng dấu hai chấm (:) thay vì dấu chấm (.)",
                "Không được dùng dấu gạch ngang ở đầu dòng thứ hai",
                "Cuối câu phải dùng dấu hỏi chấm (?) thay vì dấu than (!)",
                "Phải đặt chữ \"Bác bảo vệ\" trong dấu ngoặc kép"
            ],
            "correctAnswer": "Sau chữ \"dặn chúng em\" phải dùng dấu hai chấm (:) thay vì dấu chấm (.)",
            "hint": "Sau câu dẫn lời nói trực tiếp bắt buộc phải có dấu báo hiệu.",
            "explanation": "Lời dẫn thoại \"Bác bảo vệ dặn chúng em:\" phải kết thúc bằng dấu hai chấm để báo hiệu lời thoại theo sau."
        },
        {
            "id": "vn-b58-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Phân biệt sự khác nhau cơ bản giữa \"dấu gạch ngang\" (-) và \"dấu gạch nối\" (-)?",
            "options": [
                "Dấu gạch ngang là dấu câu; dấu gạch nối dùng để nối các tiếng trong từ phiên âm nước ngoài, viết ngắn hơn",
                "Hai dấu này hoàn toàn giống nhau về mọi chức năng ngữ pháp",
                "Dấu gạch nối dài hơn dấu gạch ngang gấp hai lần",
                "Dấu gạch nối chỉ dùng ở cuối câu cảm thán"
            ],
            "correctAnswer": "Dấu gạch ngang là dấu câu; dấu gạch nối dùng để nối các tiếng trong từ phiên âm nước ngoài, viết ngắn hơn",
            "hint": "Ví dụ: Pa-ri (gạch nối trong từ phiên âm); - Chào bạn! (gạch ngang đánh dấu lời thoại).",
            "explanation": "Dấu gạch ngang là dấu câu có chức năng ngữ pháp; còn dấu gạch nối không phải là dấu câu mà chỉ dùng nối các âm tiết trong từ mượn phiên âm tiếng nước ngoài (ví dụ: Lê-nin, Pa-ri)."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b58-s1",
            "prompt": "Dấu nào dùng để đánh dấu lời đối thoại của nhân vật khi xuống dòng?",
            "options": [
                "Dấu gạch ngang",
                "Dấu ngoặc đơn",
                "Dấu chấm lửng",
                "Dấu gạch chéo"
            ],
            "correctAnswer": "Dấu gạch ngang",
            "explanation": "Dấu gạch ngang đầu dòng dùng để đánh dấu lời nói trực tiếp của nhân vật."
        },
        {
            "id": "vn-b58-s2",
            "prompt": "Dấu hai chấm có thể báo hiệu phần gì sau nó?",
            "options": [
                "Phần giải thích hoặc liệt kê",
                "Phần câu hỏi nghi vấn",
                "Phần cảm thán ngạc nhiên",
                "Phần kết thúc bài văn"
            ],
            "correctAnswer": "Phần giải thích hoặc liệt kê",
            "explanation": "Dấu hai chấm báo hiệu phần liệt kê, giải thích hoặc dẫn lời nói."
        },
        {
            "id": "vn-b58-s3",
            "prompt": "Cặp dấu gạch ngang đặt giữa câu có tác dụng gì?",
            "options": [
                "Đánh dấu phần chú thích",
                "Đánh dấu từ ngữ lặp",
                "Đánh dấu câu nghi vấn",
                "Đánh dấu tên riêng"
            ],
            "correctAnswer": "Đánh dấu phần chú thích",
            "explanation": "Cặp dấu gạch ngang đóng khung phần giải thích, chú thích xen vào giữa câu."
        }
    ]
  },
  'vn-b59': {
    practiceQuestions: [
        {
            "id": "vn-b59-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Nhân vật chính trong câu chuyện \"Những con hạc giấy\" là ai?",
            "options": [
                "Cô bé Xa-xa-ki Xa-đa-cô",
                "Một bác sĩ người Mỹ",
                "Một phi công lái máy bay",
                "Một cô giáo người Nhật"
            ],
            "correctAnswer": "Cô bé Xa-xa-ki Xa-đa-cô",
            "hint": "Cô bé người Nhật Bản mắc bệnh hiểm nghèo do bom nguyên tử.",
            "explanation": "Câu chuyện xúc động kể về cô bé Xa-xa-ki Xa-đa-cô người Nhật Bản, nạn nhân của vụ ném bom nguyên tử xuống thành phố Hi-rô-si-ma."
        },
        {
            "id": "vn-b59-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Xa-đa-cô mắc phải căn bệnh phóng xạ nguy hiểm sau thảm họa nào?",
            "options": [
                "Vụ ném bom nguyên tử xuống thành phố Hi-rô-si-ma năm 1945",
                "Trận động đất và sóng thần lớn ở Tokyo",
                "Một vụ cháy nhà máy hóa chất",
                "Dịch bệnh truyền nhiễm mùa đông"
            ],
            "correctAnswer": "Vụ ném bom nguyên tử xuống thành phố Hi-rô-si-ma năm 1945",
            "hint": "Thảm họa chiến tranh thế giới thứ hai tại Nhật Bản.",
            "explanation": "Tháng 8 năm 1945, quân đội Mỹ ném bom nguyên tử xuống thành phố Hi-rô-si-ma khiến hàng trăm nghìn người thiệt mạng và nhiễm chất phóng xạ độc hại, trong đó có Xa-đa-cô."
        },
        {
            "id": "vn-b59-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Nằm trên giường bệnh, Xa-đa-cô đã tin vào truyền thuyết dân gian nào để nuôi hi vọng sống sót?",
            "options": [
                "Nếu gấp đủ 1.000 con hạc giấy thì ước nguyện khỏi bệnh sẽ thành hiện thực",
                "Nếu đếm được một nghìn ngôi sao băng thì sẽ sống lâu",
                "Nếu vẽ được một nghìn bức tranh hoa đào thì khỏi bệnh",
                "Nếu hái được một nghìn bông hoa cúc trắng sẽ trường sinh"
            ],
            "correctAnswer": "Nếu gấp đủ 1.000 con hạc giấy thì ước nguyện khỏi bệnh sẽ thành hiện thực",
            "hint": "Truyền thuyết về loài chim hạc bằng giấy ở xứ sở Phù Tang.",
            "explanation": "Theo truyền thuyết Nhật Bản, nếu ai gấp đủ 1.000 con hạc giấy, điều ước tha thiết của họ sẽ được thần linh biến thành hiện thực."
        },
        {
            "id": "vn-b59-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi biết chuyện của Xa-đa-cô, các bạn học sinh khắp nơi trên thế giới đã làm gì?",
            "options": [
                "Gấp hàng nghìn con hạc giấy gửi tới tấp về giường bệnh để động viên em",
                "Đến bệnh viện xin chữ ký của Xa-đa-cô",
                "Tổ chức đi du lịch vòng quanh nước Nhật",
                "Quên lãng câu chuyện vì không quen biết"
            ],
            "correctAnswer": "Gấp hàng nghìn con hạc giấy gửi tới tấp về giường bệnh để động viên em",
            "hint": "Tình đoàn kết và yêu thương xuyên biên giới của trẻ em thế giới.",
            "explanation": "Xúc động trước nghị lực của em, thiếu nhi Nhật Bản và khắp các nước trên thế giới đã gấp hàng vạn con hạc giấy gửi đến Hi-rô-si-ma để ủng hộ Xa-đa-cô."
        },
        {
            "id": "vn-b59-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Mặc dù đã gấp được 644 con hạc nhưng căn bệnh quái ác đã cướp đi sinh mệnh của em. Sau đó, bạn bè đã làm gì?",
            "options": [
                "Cùng nhau gấp tiếp số hạc còn lại và quyên góp xây tượng đài hòa bình tưởng niệm em",
                "Bỏ dở và đem đốt hết những con hạc giấy đi",
                "Không ai nhắc lại tên của em nữa",
                "Yêu cầu bồi thường tiền cho gia đình em"
            ],
            "correctAnswer": "Cùng nhau gấp tiếp số hạc còn lại và quyên góp xây tượng đài hòa bình tưởng niệm em",
            "hint": "Bức tượng đài cô bé giơ cao con hạc giấy tại Công viên Hòa bình.",
            "explanation": "Các bạn đã gấp đủ số hạc còn lại và vận động xây dựng Tượng đài Hòa bình tại Hi-rô-si-ma để khắc ghi ước nguyện của Xa-đa-cô."
        },
        {
            "id": "vn-b59-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Dòng chữ khắc dưới chân tượng đài tưởng niệm Xa-đa-cô thể hiện ước nguyện tha thiết gì?",
            "options": [
                "\"Đây là tiếng kêu của chúng tôi. Đây là lời nguyện cầu của chúng tôi: Hòa bình cho thế giới.\"",
                "\"Hãy làm cho đất nước chúng tôi giàu có hơn.\"",
                "\"Chúng tôi muốn chế tạo nhiều loại vũ khí hơn.\"",
                "\"Xin hãy nhớ tên tuổi của chúng tôi.\""
            ],
            "correctAnswer": "\"Đây là tiếng kêu của chúng tôi. Đây là lời nguyện cầu của chúng tôi: Hòa bình cho thế giới.\"",
            "hint": "Lời kêu gọi hòa bình tha thiết gửi tới toàn nhân loại.",
            "explanation": "Dòng chữ bất hủ dưới chân tượng đài thể hiện tiếng nói chung của thiếu nhi toàn cầu: khát khao một thế giới vĩnh viễn hòa bình, không còn chiến tranh tàn khốc."
        },
        {
            "id": "vn-b59-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hình ảnh \"con hạc giấy\" trong câu chuyện đã trở thành biểu tượng quốc tế cho điều gì?",
            "options": [
                "Khát vọng hòa bình, tình yêu cuộc sống và sự phản đối vũ khí hạt nhân",
                "Nghệ thuật gấp giấy đơn thuần để trang trí phòng ngủ",
                "Biểu tượng của các loài chim di cư mùa đông",
                "Món đồ chơi dành riêng cho trẻ em Nhật Bản"
            ],
            "correctAnswer": "Khát vọng hòa bình, tình yêu cuộc sống và sự phản đối vũ khí hạt nhân",
            "hint": "Một biểu tượng thiêng liêng lay động trái tim nhân loại.",
            "explanation": "Con hạc giấy đã vượt ra khỏi biên giới Nhật Bản, trở thành biểu tượng thiêng liêng của khát vọng hòa bình và lời cảnh tỉnh về sự tàn phá của vũ khí hạt nhân."
        },
        {
            "id": "vn-b59-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Bài đọc \"Những con hạc giấy\" khơi gợi trong mỗi chúng ta tình cảm và nhận thức gì sâu sắc?",
            "options": [
                "Lên án chiến tranh phi nghĩa, căm ghét vũ khí hạt nhân và chung tay gìn giữ hòa bình",
                "Nỗi sợ hãi khi đi du lịch nước ngoài",
                "Sự hoài nghi về tình cảm giữa trẻ em các nước",
                "Chỉ nên lo cho sự an toàn của riêng mình"
            ],
            "correctAnswer": "Lên án chiến tranh phi nghĩa, căm ghét vũ khí hạt nhân và chung tay gìn giữ hòa bình",
            "hint": "Ý thức bảo vệ hòa bình thế giới của thế hệ trẻ.",
            "explanation": "Câu chuyện giúp các em thấu hiểu nỗi đau do chiến tranh gây ra, từ đó nuôi dưỡng ý thức đấu tranh chống chiến tranh tàn khốc và bảo vệ cuộc sống hòa bình."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b59-s1",
            "prompt": "Xa-đa-cô là cô bé người nước nào?",
            "options": [
                "Nhật Bản",
                "Hàn Quốc",
                "Trung Quốc",
                "Việt Nam"
            ],
            "correctAnswer": "Nhật Bản",
            "explanation": "Cô bé Xa-đa-cô là người Nhật Bản, sống ở Hi-rô-si-ma."
        },
        {
            "id": "vn-b59-s2",
            "prompt": "Theo truyền thuyết, cần gấp bao nhiêu con hạc giấy để điều ước thành sự thật?",
            "options": [
                "1.000 con",
                "500 con",
                "100 con",
                "10.000 con"
            ],
            "correctAnswer": "1.000 con",
            "explanation": "Truyền thuyết Nhật Bản kể rằng gấp đủ 1.000 con hạc giấy sẽ được toại nguyện ước mơ."
        },
        {
            "id": "vn-b59-s3",
            "prompt": "Con hạc giấy ngày nay là biểu tượng cho điều gì?",
            "options": [
                "Hòa bình",
                "Sự giàu có",
                "Chiến tranh",
                "Sức mạnh quân sự"
            ],
            "correctAnswer": "Hòa bình",
            "explanation": "Hạc giấy là biểu tượng quốc tế cho khát vọng hòa bình và chống chiến tranh."
        }
    ]
  },
  'vn-b60': {
    practiceQuestions: [
        {
            "id": "vn-b60-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Sự kiện \"Giờ Trái Đất\" kêu gọi mọi người thực hiện hành động gì trong vòng một giờ đồng hồ?",
            "options": [
                "Tắt bớt các thiết bị điện và đèn chiếu sáng không cần thiết",
                "Không đi ra ngoài đường",
                "Không nói chuyện với nhau",
                "Tắt tất cả các loại quạt máy"
            ],
            "correctAnswer": "Tắt bớt các thiết bị điện và đèn chiếu sáng không cần thiết",
            "hint": "Hành động đơn giản nhằm tiết kiệm năng lượng và giảm phát thải khí nhà kính.",
            "explanation": "Chiến dịch Giờ Trái Đất kêu gọi người dân và doanh nghiệp tự nguyện tắt đèn cùng các thiết bị điện không cần thiết trong 60 phút để nâng cao ý thức bảo vệ môi trường."
        },
        {
            "id": "vn-b60-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Biểu tượng quen thuộc của chiến dịch Giờ Trái Đất là gì?",
            "options": [
                "60+",
                "100%",
                "24/7",
                "365"
            ],
            "correctAnswer": "60+",
            "hint": "60 phút tắt đèn và dấu cộng mang ý nghĩa hành động nhiều hơn thế.",
            "explanation": "Biểu tượng \"60+\" thể hiện thông điệp: không chỉ tắt đèn trong 60 phút của sự kiện mà còn tiếp tục có những hành động bảo vệ môi trường suốt 365 ngày trong năm."
        },
        {
            "id": "vn-b60-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Mục đích lớn nhất của việc tổ chức Giờ Trái Đất là gì?",
            "options": [
                "Nâng cao nhận thức cộng đồng về biến đổi khí hậu và thực hành tiết kiệm năng lượng",
                "Để mọi người có thời gian ngắm sao trời ban đêm",
                "Để các nhà máy điện được nghỉ ngơi sửa chữa",
                "Để tiết kiệm tiền mua bóng đèn mới"
            ],
            "correctAnswer": "Nâng cao nhận thức cộng đồng về biến đổi khí hậu và thực hành tiết kiệm năng lượng",
            "hint": "Tác động sâu rộng vào ý thức bảo vệ hành tinh xanh của mỗi cá nhân.",
            "explanation": "Chiến dịch nhằm lan tỏa thông điệp nhắc nhở mọi người thay đổi thói quen tiêu thụ năng lượng, giảm bớt tác hại của biến đổi khí hậu toàn cầu."
        },
        {
            "id": "vn-b60-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Một \"Thành phố thông minh\" (Smart City) có đặc điểm nổi bật nào dưới đây?",
            "options": [
                "Ứng dụng công nghệ hiện đại để quản lý giao thông, năng lượng và bảo vệ môi trường xanh sạch",
                "Tất cả mọi người đều là tiến sĩ hoặc kĩ sư tin học",
                "Chỉ có người máy sinh sống và làm việc",
                "Không có cây xanh nào mà toàn bộ là máy móc"
            ],
            "correctAnswer": "Ứng dụng công nghệ hiện đại để quản lý giao thông, năng lượng và bảo vệ môi trường xanh sạch",
            "hint": "Kết hợp hài hòa giữa công nghệ số và môi trường sinh thái trong lành.",
            "explanation": "Thành phố thông minh sử dụng cảm biến, trí tuệ nhân tạo và năng lượng tái tạo để vận hành hiệu quả giao thông, rác thải, điện nước và cải thiện chất lượng sống người dân."
        },
        {
            "id": "vn-b60-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Nguồn năng lượng nào sau đây là năng lượng sạch, thân thiện với môi trường được khuyến khích sử dụng?",
            "options": [
                "Năng lượng mặt trời, năng lượng gió",
                "Năng lượng từ việc đốt than đá",
                "Năng lượng từ việc đốt dầu mỏ",
                "Năng lượng từ đốt rác thải nhựa"
            ],
            "correctAnswer": "Năng lượng mặt trời, năng lượng gió",
            "hint": "Năng lượng tự nhiên tái tạo không thải ra khí độc hại gây hiệu ứng nhà kính.",
            "explanation": "Năng lượng mặt trời, gió, thủy triều là nguồn năng lượng tái tạo sạch, không gây ô nhiễm không khí và không làm cạn kiệt tài nguyên thiên nhiên."
        },
        {
            "id": "vn-b60-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Hành động nào của học sinh trong trường học góp phần hưởng ứng lối sống xanh?",
            "options": [
                "Tắt quạt và bóng điện khi ra khỏi lớp học, phân loại rác đúng nơi quy định",
                "Xả nước đầy bồn rửa tay mà không khóa van",
                "Vứt vỏ hộp sữa bừa bãi dưới gầm bàn",
                "Bật điều hòa ở nhiệt độ thật lạnh rồi mở tung cửa sổ"
            ],
            "correctAnswer": "Tắt quạt và bóng điện khi ra khỏi lớp học, phân loại rác đúng nơi quy định",
            "hint": "Thói quen tiết kiệm điện và giữ gìn vệ sinh lớp học.",
            "explanation": "Tắt điện quạt khi không dùng và bỏ rác đúng chỗ là những việc làm vừa sức, thể hiện nếp sống văn minh và tinh thần trách nhiệm với môi trường."
        },
        {
            "id": "vn-b60-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Vì sao sự phát triển của thành phố tương lai bắt buộc phải gắn liền với yếu tố \"xanh\" và \"bền vững\"?",
            "options": [
                "Vì nếu phát triển mà tàn phá thiên nhiên thì con người sẽ phải hứng chịu thiên tai, dịch bệnh và cạn kiệt sự sống",
                "Vì màu xanh làm cho thành phố chụp ảnh đẹp hơn",
                "Vì các công ty sơn muốn bán được nhiều sơn màu xanh",
                "Vì luật pháp quốc tế cấm xây dựng nhà cao tầng"
            ],
            "correctAnswer": "Vì nếu phát triển mà tàn phá thiên nhiên thì con người sẽ phải hứng chịu thiên tai, dịch bệnh và cạn kiệt sự sống",
            "hint": "Mối quan hệ mật thiết giữa sự sinh tồn của con người và hệ sinh thái.",
            "explanation": "Phát triển bền vững nghĩa là đáp ứng nhu cầu hiện tại mà không làm tổn hại đến khả năng sống của các thế hệ mai sau, đảm bảo môi trường sinh thái an toàn."
        },
        {
            "id": "vn-b60-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Ý nghĩa nhân văn của việc kết hợp \"Giờ Trái Đất\" và \"Xây dựng thành phố thông minh\" là gì?",
            "options": [
                "Khẳng định con người hiện đại vừa có trí tuệ phát triển khoa học kĩ thuật vừa có trái tim biết yêu thương và bảo vệ hành tinh xanh",
                "Kêu gọi con người quay trở lại thời kỳ nguyên thủy không dùng điện",
                "Thay thế toàn bộ công việc của con người bằng robot",
                "Giảm bớt thời gian làm việc trong ngày xuống một giờ"
            ],
            "correctAnswer": "Khẳng định con người hiện đại vừa có trí tuệ phát triển khoa học kĩ thuật vừa có trái tim biết yêu thương và bảo vệ hành tinh xanh",
            "hint": "Sự kết hợp giữa tiến bộ văn minh và tình yêu thiên nhiên.",
            "explanation": "Tiến bộ công nghệ phải song hành với trách nhiệm bảo vệ đất mẹ. Con người dùng trí tuệ để kiến tạo môi trường sống thông minh, an lành và hạnh phúc cho muôn loài."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b60-s1",
            "prompt": "Giờ Trái Đất thường được tổ chức vào ngày thứ Bảy cuối cùng của tháng mấy hàng năm?",
            "options": [
                "Tháng Ba",
                "Tháng Giêng",
                "Tháng Bảy",
                "Tháng Mười Hai"
            ],
            "correctAnswer": "Tháng Ba",
            "explanation": "Sự kiện Giờ Trái Đất thường diễn ra vào khoảng cuối tháng 3 hàng năm."
        },
        {
            "id": "vn-b60-s2",
            "prompt": "Số \"60+\" trong logo Giờ Trái Đất biểu thị điều gì?",
            "options": [
                "60 phút và hơn thế nữa",
                "60 năm thành lập",
                "60 bóng đèn",
                "60 quốc gia tham gia"
            ],
            "correctAnswer": "60 phút và hơn thế nữa",
            "explanation": "Ý nghĩa là tắt đèn trong 60 phút và duy trì ý thức xanh hơn thế nữa."
        },
        {
            "id": "vn-b60-s3",
            "prompt": "Phương tiện giao thông nào thân thiện với môi trường nhất?",
            "options": [
                "Xe đạp",
                "Xe máy chạy xăng",
                "Xe ô tô tải",
                "Tàu hỏa chạy dầu"
            ],
            "correctAnswer": "Xe đạp",
            "explanation": "Xe đạp không tiêu tốn nhiên liệu hóa thạch và không xả khói bụi độc hại."
        }
    ]
  },
  'vn-b61': {
    practiceQuestions: [
        {
            "id": "vn-b61-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Ba từ loại cơ bản đã học ở tiểu học là gì?",
            "options": [
                "Danh từ, Động từ, Tính từ",
                "Toán học, Tiếng Việt, Lịch sử",
                "Từ đồng âm, Từ nhiều nghĩa, Từ trái nghĩa",
                "Dấu chấm, Dấu phẩy, Dấu hai chấm"
            ],
            "correctAnswer": "Danh từ, Động từ, Tính từ",
            "hint": "Ba lớp từ chỉ sự vật, hành động/trạng thái và đặc điểm/tính chất.",
            "explanation": "Danh từ (chỉ sự vật), Động từ (chỉ hoạt động, trạng thái), Tính từ (chỉ đặc điểm, tính chất) là ba từ loại nòng cốt của tiếng Việt."
        },
        {
            "id": "vn-b61-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Từ nào dưới đây là một ĐỘNG TỪ?",
            "options": [
                "Nghiên cứu",
                "Học sinh",
                "Thông minh",
                "Quyển sách"
            ],
            "correctAnswer": "Nghiên cứu",
            "hint": "Từ chỉ hoạt động tìm tòi, khám phá khoa học.",
            "explanation": "\"Nghiên cứu\" là động từ chỉ hoạt động trí tuệ chuyên sâu. \"Học sinh\", \"Quyển sách\" là danh từ, \"Thông minh\" là tính từ."
        },
        {
            "id": "vn-b61-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Trong câu: \"Mùa xuân, trăm hoa đua nhau khoe sắc thắm.\", bộ phận \"Mùa xuân\" giữ chức vụ ngữ pháp gì trong câu?",
            "options": [
                "Trạng ngữ chỉ thời gian",
                "Chủ ngữ",
                "Vị ngữ",
                "Hô ngữ"
            ],
            "correctAnswer": "Trạng ngữ chỉ thời gian",
            "hint": "Trả lời cho câu hỏi: \"Khi nào?\".",
            "explanation": "\"Mùa xuân\" đứng ở đầu câu ngăn cách bởi dấu phẩy, trả lời cho câu hỏi \"Khi nào?\", đóng vai trò là trạng ngữ chỉ thời gian."
        },
        {
            "id": "vn-b61-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Câu nào dưới đây là một CÂU GHÉP có hai vế câu nối với nhau bằng cặp quan hệ từ?",
            "options": [
                "Vì trời mưa to nên đường làng trở nên lầy lội.",
                "Gió thổi mạnh làm đổ cây bàng cổ thụ ở sân trường.",
                "Nam và Tuấn cùng nhau đi đá bóng ở sân vận động.",
                "Dưới ánh nắng vàng rực rỡ, những cánh bướm chao lượn."
            ],
            "correctAnswer": "Vì trời mưa to nên đường làng trở nên lầy lội.",
            "hint": "Câu có 2 cụm C-V độc lập nối bằng cặp quan hệ từ \"Vì... nên...\".",
            "explanation": "Câu ghép có 2 vế: Vế 1: \"trời (C1) mưa to (V1)\", Vế 2: \"đường làng (C2) trở nên lầy lội (V2)\", nối bằng cặp quan hệ từ nguyên nhân - kết quả \"Vì... nên...\"."
        },
        {
            "id": "vn-b61-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Từ \"hay\" trong câu: \"Bạn thích học môn Toán hay môn Tiếng Việt?\" thuộc từ loại nào?",
            "options": [
                "Quan hệ từ",
                "Động từ",
                "Tính từ",
                "Danh từ"
            ],
            "correctAnswer": "Quan hệ từ",
            "hint": "Từ dùng để nối hai phương án lựa chọn.",
            "explanation": "Trong ngữ cảnh này, \"hay\" là quan hệ từ chỉ quan hệ lựa chọn giữa hai sự vật/hiện tượng."
        },
        {
            "id": "vn-b61-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Xác định từ loại của từ \"ước mơ\" trong hai câu sau: (1) \"Em ước mơ trở thành bác sĩ.\" và (2) \"Ước mơ của em đã trở thành sự thật.\"",
            "options": [
                "Ở câu (1) là động từ, ở câu (2) là danh từ",
                "Cả hai câu đều là danh từ",
                "Cả hai câu đều là động từ",
                "Ở câu (1) là tính từ, ở câu (2) là động từ"
            ],
            "correctAnswer": "Ở câu (1) là động từ, ở câu (2) là danh từ",
            "hint": "Câu (1) chỉ hành động mong ước; câu (2) có từ \"của em\" đi kèm làm chủ ngữ nên là danh từ.",
            "explanation": "Trong câu (1), \"ước mơ\" giữ vai trò vị ngữ chỉ hành động mong muốn (động từ). Trong câu (2), \"ước mơ\" làm chủ ngữ chỉ khái niệm (danh từ)."
        },
        {
            "id": "vn-b61-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Câu nào dưới đây là CÂU ĐƠN có nhiều vị ngữ?",
            "options": [
                "Con chim hót líu lo, chuyền từ cành này sang cành khác.",
                "Mặt trời mọc và sương mù tan dần.",
                "Tuy đêm đã khuya nhưng mẹ vẫn cặm cụi may áo.",
                "Nếu trời không mưa, chúng em sẽ đi cắm trại."
            ],
            "correctAnswer": "Con chim hót líu lo, chuyền từ cành này sang cành khác.",
            "hint": "Chỉ có 1 chủ ngữ (\"Con chim\") nhưng thực hiện 2 hành động nối tiếp nhau.",
            "explanation": "Câu này có 1 chủ ngữ là \"Con chim\" và 2 vị ngữ cùng bổ sung hành động: VN1 là \"hót líu lo\", VN2 là \"chuyền từ cành này sang cành khác\"."
        },
        {
            "id": "vn-b61-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Trong câu: \"Mặc dù đêm đã về khuya, ánh đèn trên bàn học của chị Lan vẫn sáng rực.\", hai vế câu biểu thị mối quan hệ gì?",
            "options": [
                "Tương phản, nhượng bộ",
                "Nguyên nhân - kết quả",
                "Điều kiện - kết quả",
                "Tăng tiến"
            ],
            "correctAnswer": "Tương phản, nhượng bộ",
            "hint": "Cặp từ nối \"Mặc dù... (vẫn)...\".",
            "explanation": "\"Mặc dù... vẫn...\" là cấu trúc biểu thị quan hệ tương phản (nhượng bộ) giữa hai vế câu ghép."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b61-s1",
            "prompt": "Từ \"rực rỡ\" thuộc từ loại nào?",
            "options": [
                "Tính từ",
                "Danh từ",
                "Động từ",
                "Đại từ"
            ],
            "correctAnswer": "Tính từ",
            "explanation": "\"Rực rỡ\" là tính từ chỉ đặc điểm màu sắc, ánh sáng chói lọi đẹp mắt."
        },
        {
            "id": "vn-b61-s2",
            "prompt": "Bộ phận trả lời câu hỏi: \"Ở đâu?\", \"Khi nào?\" trong câu được gọi là gì?",
            "options": [
                "Trạng ngữ",
                "Chủ ngữ",
                "Vị ngữ",
                "Bổ ngữ"
            ],
            "correctAnswer": "Trạng ngữ",
            "explanation": "Trạng ngữ là thành phần phụ của câu nêu thời gian, địa điểm, mục đích, phương tiện."
        },
        {
            "id": "vn-b61-s3",
            "prompt": "Cặp quan hệ từ \"Nếu... thì...\" biểu thị mối quan hệ gì?",
            "options": [
                "Giả thiết - kết quả",
                "Nguyên nhân - kết quả",
                "Tương phản",
                "Tăng tiến"
            ],
            "correctAnswer": "Giả thiết - kết quả",
            "explanation": "\"Nếu... thì...\" biểu thị mối quan hệ giả thiết (điều kiện) và kết quả."
        }
    ]
  },
  'vn-b62': {
    practiceQuestions: [
        {
            "id": "vn-b62-q1",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Thể loại văn miêu tả trọng tâm đã rèn luyện trong chương trình Tiếng Việt lớp 5 là gì?",
            "options": [
                "Tả cảnh và Tả người",
                "Tả đồ chơi và Tả loài cây",
                "Kể chuyện ngụ ngôn",
                "Viết kịch bản phim hài"
            ],
            "correctAnswer": "Tả cảnh và Tả người",
            "hint": "Hai thể loại văn miêu tả lớn được học xuyên suốt Học kì 1 và Học kì 2.",
            "explanation": "Chương trình Tiếng Việt 5 tập trung rèn luyện chuyên sâu hai thể loại văn miêu tả quan trọng: văn tả cảnh (HK1) và văn tả người (HK2)."
        },
        {
            "id": "vn-b62-q2",
            "level": 1,
            "levelName": "Khởi động",
            "type": "multiple_choice",
            "prompt": "Một bài văn hoàn chỉnh luôn phải đảm bảo bố cục mấy phần?",
            "options": [
                "3 phần (Mở bài, Thân bài, Kết bài)",
                "2 phần (Mở bài, Kết bài)",
                "4 phần (Mở đầu, Diễn biến, Cao trào, Kết thúc)",
                "1 phần duy nhất"
            ],
            "correctAnswer": "3 phần (Mở bài, Thân bài, Kết bài)",
            "hint": "Bố cục truyền thống kinh điển của mọi bài tập làm văn.",
            "explanation": "Mọi bài văn hoàn chỉnh đều có bố cục chặt chẽ gồm 3 phần: Mở bài (giới thiệu), Thân bài (miêu tả chi tiết/kể việc), Kết bài (nêu cảm nghĩ, đánh giá)."
        },
        {
            "id": "vn-b62-q3",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Cặp từ nào dưới đây là CẶP TỪ ĐỒNG ÂM?",
            "options": [
                "Bàn cờ - Bàn bạc việc lớp",
                "Mẹ - Má",
                "To lớn - Bé nhỏ",
                "Đỏ tươi - Đỏ rực"
            ],
            "correctAnswer": "Bàn cờ - Bàn bạc việc lớp",
            "hint": "Hai từ phát âm giống hệt nhau nhưng mang nghĩa hoàn toàn khác nhau không liên quan.",
            "explanation": "\"Bàn\" trong \"bàn cờ\" là danh từ chỉ đồ vật; còn \"bàn\" trong \"bàn bạc\" là động từ chỉ hoạt động trao đổi ý kiến. Chúng đồng âm nhưng nghĩa khác xa nhau."
        },
        {
            "id": "vn-b62-q4",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Từ \"chân\" trong câu: \"Dưới chân núi, dòng suối chảy róc rách.\" được dùng theo nghĩa nào?",
            "options": [
                "Nghĩa chuyển",
                "Nghĩa gốc",
                "Từ đồng âm",
                "Từ trái nghĩa"
            ],
            "correctAnswer": "Nghĩa chuyển",
            "hint": "Nghĩa gốc của \"chân\" là bộ phận nâng đỡ cơ thể người và động vật.",
            "explanation": "\"Chân núi\" là phần dưới cùng tiếp giáp với mặt đất của quả núi. Từ \"chân\" ở đây được dùng theo nghĩa chuyển dựa trên sự tương đồng về vị trí nâng đỡ bên dưới."
        },
        {
            "id": "vn-b62-q5",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Dấu câu nào được dùng ở cuối câu kể khi kết thúc trọn vẹn một thông báo?",
            "options": [
                "Dấu chấm (.)",
                "Dấu hỏi chấm (?)",
                "Dấu hai chấm (:)",
                "Dấu chấm lửng (...)"
            ],
            "correctAnswer": "Dấu chấm (.)",
            "hint": "Dấu câu cơ bản nhất kết thúc câu kể.",
            "explanation": "Dấu chấm đặt ở cuối câu trần thuật (câu kể) để báo hiệu câu văn đã diễn đạt hoàn chỉnh một ý trọn vẹn."
        },
        {
            "id": "vn-b62-q6",
            "level": 2,
            "levelName": "Vững vàng",
            "type": "multiple_choice",
            "prompt": "Khi làm bài thi môn Tiếng Việt, bước nào là quan trọng nhất trước khi bắt tay vào viết bài văn?",
            "options": [
                "Đọc kĩ đề, xác định đúng thể loại, đối tượng và lập dàn ý vắn tắt",
                "Viết ngay lập tức càng nhanh càng tốt",
                "Ngồi đợi các bạn xung quanh làm xong rồi xem theo",
                "Vẽ hình minh họa kín trang giấy kiểm tra"
            ],
            "correctAnswer": "Đọc kĩ đề, xác định đúng thể loại, đối tượng và lập dàn ý vắn tắt",
            "hint": "Phân tích đề và xây dựng khung sườn giúp bài văn không bị lạc đề hay sót ý.",
            "explanation": "Đọc kĩ đề và lập dàn ý giúp học sinh định hình rõ cấu trúc, sắp xếp luận điểm, lựa chọn từ ngữ và cảm xúc một cách mạch lạc, tránh lạc đề."
        },
        {
            "id": "vn-b62-q7",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Đoạn văn: \"Càng lên cao, gió càng thổi mạnh. Cây cối hai bên đường nghiêng ngả, lá rụng xào xạc theo từng cơn lốc.\" – Cặp từ hô ứng được sử dụng ở câu thứ nhất là gì?",
            "options": [
                "Càng... càng...",
                "Lên... cao...",
                "Mạnh... nghiêng...",
                "Theo... từng..."
            ],
            "correctAnswer": "Càng... càng...",
            "hint": "Cặp từ chỉ mức độ tăng tiến đồng thời giữa hai vế câu.",
            "explanation": "\"Càng... càng...\" là cặp từ hô ứng dùng để liên kết hai vế câu ghép, biểu thị sự phát triển tỷ lệ thuận về mức độ giữa hai hiện tượng."
        },
        {
            "id": "vn-b62-q8",
            "level": 3,
            "levelName": "Thử thách",
            "type": "multiple_choice",
            "prompt": "Hành trang Tiếng Việt quý giá nhất mà các em học sinh lớp 5 mang theo lên bậc Trung học cơ sở là gì?",
            "options": [
                "Vốn từ phong phú, kĩ năng đọc hiểu sâu sắc, khả năng diễn đạt lưu loát và tình yêu tiếng mẹ đẻ",
                "Khả năng học thuộc lòng văn mẫu dài dòng",
                "Tập chữ viết thật nhanh không cần thẳng hàng",
                "Nhiều quyển vở ghi chép để cất vào tủ lưu niệm"
            ],
            "correctAnswer": "Vốn từ phong phú, kĩ năng đọc hiểu sâu sắc, khả năng diễn đạt lưu loát và tình yêu tiếng mẹ đẻ",
            "hint": "Năng lực ngôn ngữ toàn diện và tình yêu với tiếng Việt trong sáng.",
            "explanation": "Nền tảng ngôn ngữ vững chắc, tư duy mạch lạc và tình cảm trân trọng tiếng Việt là hành trang vững chãi giúp các em tự tin học tập tốt ở các lớp trên."
        }
    ],
    speedQuestions: [
        {
            "id": "vn-b62-s1",
            "prompt": "Một bài tập làm văn chuẩn mực gồm mấy phần?",
            "options": [
                "3 phần (Mở bài, Thân bài, Kết bài)",
                "2 phần",
                "4 phần",
                "5 phần"
            ],
            "correctAnswer": "3 phần (Mở bài, Thân bài, Kết bài)",
            "explanation": "Bố cục 3 phần gồm: Mở bài, Thân bài, Kết bài."
        },
        {
            "id": "vn-b62-s2",
            "prompt": "Từ nào sau đây viết ĐÚNG chính tả tiếng Việt?",
            "options": [
                "Xinh xắn",
                "Sinh xắn",
                "Xinh sắn",
                "Sinh sắn"
            ],
            "correctAnswer": "Xinh xắn",
            "explanation": "\"Xinh xắn\" viết đúng chính tả âm đầu x - x."
        },
        {
            "id": "vn-b62-s3",
            "prompt": "Câu nói: \"Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau\" khuyên ta điều gì?",
            "options": [
                "Giao tiếp lịch sự, hòa nhã và tế nhị",
                "Không nên nói chuyện với ai",
                "Nên nói thật to để mọi người nghe",
                "Nói dối để lấy lòng người khác"
            ],
            "correctAnswer": "Giao tiếp lịch sự, hòa nhã và tế nhị",
            "explanation": "Câu tục ngữ răn dạy cách ứng xử văn minh, ăn nói hòa nhã, tôn trọng người khác."
        }
    ]
  },
};

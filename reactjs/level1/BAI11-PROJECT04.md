BÀI 10: PROJECT04 - Tạo ứng dụng Quiz Game


## Yêu cầu:

* Tạo 1 danh sách các câu hỏi.
* Mỗi câu hỏi có 1 câu trả lời.
* Người chơi trả lời đúng thì cộng 1 điểm.
* Người chơi trả lời sai thì ko cộng điểm.
* Sau khi trả lời thì sẽ có thông báo là chọn đúng hay sai, nếu chọn đúng hiện popup thông báo (Chúc mừng bạn được cộng 1 điểm)
* Có tổng cộng 10 câu hỏi.
* Có hiển thị đang làm tới câu nào, số điểm trên giao diện.
* Xem thêm Prototype để thiết kế Component tương ứng. 

## Kĩ thuật:
* Tạo 1 file json trong source code chứa danh sách câu hỏi - trả lời.
* Đọc dữ liệu từ file json đó và đổ lên lần lượt: Danh sách câu hỏi, đáp án.

* Thiết kế mô hình như sau:
```
QuizApp
└── Quiz
    ├── QuestionList
    |   └── Question
    |       └── Answer
    └── Results
```

* [Prototype](https://invis.io/7XC7F0CC8)
* Sử dụng `PropTypes` ở bài 10


## SOURCE CODE (đã hoàn thiện mẫu)
* [Link source code hoàn thiện](https://github.com/nvminhtu/React/tree/master/reactjs/project04)

## Làm sao để làm?


## Viết như thế nào (Step by Step)


## Source tham khảo:
* [React Quiz - Simple Tutorial](https://mitchgavan.com/react-quiz/)
* [React Quiz App - Check answer](https://github.com/bonham000/react-quiz-app)
* [React Quiz](https://github.com/davidrayoussef/react-quiz)
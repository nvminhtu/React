BÀI 10: PROJECT04 - Tạo ứng dụng Quiz Game


## Yêu cầu:

* Tạo 1 danh sách các câu hỏi.s
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

## SOURCE CODE (đã hoàn thiện mẫu)
* [Link source code hoàn thiện](https://github.com/nvminhtu/React/tree/master/reactjs/project04)

## Làm sao để làm?

* Sử dụng các code ES6 (ES6 syntax)
* Áp dụng: `string interpolation` và `computed property names`

## Viết như thế nào
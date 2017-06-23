# BÀI 13: FETCH DATA

## Nội dung

### 1.Làm thế nào để Request Ajax với Ajax?

* React JS: ko liên quan đến việc Fetch data.
* React JS: đơn giản để render Component => và nó nhận data chỉ từ 2 nơi (state và props)
* Để sử dụng data từ server: => đẩy data vào props và state
* Có nhiều cách để làm công việc trên: ví dụ như tạo service hoặc data model,...nhưng kết quả của chúng đều là trả về các Component rendering (state và props)

### 2. Sử dụng các HTTP Library để Fetch data.

Có nhiều loại như:
* [axios](https://github.com/mzabriskie/axios)
* [superagent](https://github.com/visionmedia/superagent)
* [fetch](https://github.com/github/fetch)

### 3. AJAX hoạt động như thế nào trong React JS?

* React JS là view => vì thế nó không có tính năng như là 1 networking, vì vậy để truyền dữ liệu từ Server qua React JS thì cần 2 bước:

+ download API data 

+ truyền data vào React như là các props

## Source code

* [Source code Fetch data với Axios](https://github.com/nvminhtu/React/blob/master/reactjs/level1/fetch-data)

## Nguồn tham khảo:

* [Ajax Request với AJAX](https://daveceddia.com/ajax-requests-in-react/)
* [Tìm hiểu vể AJAX chạy trong React JS như thế nào?](http://andrewhfarmer.com/how-ajax-works-react/) - bài này khá hay và cụ thể mọi người nên đọc


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

#### Flow:

React JS là view => vì thế nó không có tính năng như là 1 networking, vì vậy để truyền dữ liệu từ Server qua React JS thì cần 2 bước:

* Download API data 
* Truyền data vào React như là các props

![Diagram Full](https://github.com/nvminhtu/React/blob/master/reactjs/level1/bai13/diagram-full.png "Diagram Full")

#### JSON:

Các tốt nhất để truyền dữ liệu từ server => browser đó là JSON

![Diagram JSON](https://github.com/nvminhtu/React/blob/master/reactjs/level1/bai13/diagram-json.png "Diagram Json")

#### NETWORKING

Networking trong javascript phía Client được chỉ định với AJAX

![Diagram Networking](https://github.com/nvminhtu/React/blob/master/reactjs/level1/bai13/diagram-networking.png "Diagram Networking")

* Browser tạo ra các Networking/Ajax request thông qua XMLHtttpRequest API hoặc Fetch API, ngoài ra còn có nhiều thư viện javascript hỗ trợ.

#### DATASTORE 

![Diagram Data](https://github.com/nvminhtu/React/blob/master/reactjs/level1/bai13/diagram-data.png "Diagram Data")

* Một khi đã có Data vừa request từ server thì phải lưu trữ ở đâu đó, bình thường nếu ko sử dụng 1 Store Management cụ thể nào thì chúng ta sẽ lưu và truyền vào với Props.

* Nhưng nếu chúng ta sử dụng Redux hoặc Relay thì sẽ tốt cho việc quản lý Store.

## Source code

* [Source code Fetch data với Axios](https://github.com/nvminhtu/React/blob/master/reactjs/level1/fetch-data)

## Nguồn tham khảo:

* [Ajax Request với AJAX](https://daveceddia.com/ajax-requests-in-react/)
* [Tìm hiểu vể AJAX chạy trong React JS như thế nào?](http://andrewhfarmer.com/how-ajax-works-react/) - bài này khá hay và cụ thể mọi người nên đọc
* [Tổng quan hơn về AJAX trong REACT](http://andrewhfarmer.com/react-ajax-best-practices/) 
* [Hiểu về nhiều cách và cách sử dụng các công nghệ khác nhau để thực hiện việc fetch Data với AJAX](http://andrewhfarmer.com/react-ajax-best-practices/) - Thông qua State - Props (RootComponent) - Server, Container Component - Server, Redux Async - Server, GrapQL-Relay-React Component - Server)


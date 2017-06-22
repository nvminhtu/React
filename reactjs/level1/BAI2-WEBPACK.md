# BÀI 2: Webpack với React JS
Phần bài này nhắc lại những gì đã làm ở Bài 1

## Các lý do nên sử dụng webpack

* Nó bundle, đóng gói và giúp giảm dung lượng các file javascript của chúng ta.
* Tất cả các script được đóng gói ở `dist` với dung lượng nhẹ hơn.
* Thuận tiện cho việc code web app khi quá nhiều file.

## Các lệnh chạy Webpack

Nếu gặp lỗi khi gọi lệnh `webpack` - chúng ta thực hiện cài đặt thêm như sau
`npm install -g webpack webpack-dev-server`

* Để run Webpack bundle các file của chúng ta, chúng ta chạy lệnh sau trong thư mục source.
`webpack` 

* Để chạy live sever của webpack thực hiện lệnh sau
`webpack-dev-server` 

* Sau đó chúng ta vào: `http://localhost:8080/`
* Nếu cần coi log của Webpack `http://localhost:8080/webpack-dev-server`
* Nếu coi console.log của script chúng ta vào Debug của từng trình duyệt chạy và xem nhé.


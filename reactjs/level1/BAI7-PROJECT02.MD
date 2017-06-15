# BÀI 7: Đọc dữ liệu từ nhiều Feeds

## Tên Project: Đọc dữ liệu từ Github Source ( từ multi Feeds)
* Nội dung như project trước
* Đọc API và trả về, tuy nhiên lần này đọc từ nhiều Feeds cùng 1 lúc

* Ghi chú thêm: đọc thông tin từ Github
[Github API Documentation](https://developer.github.com/v3/repos/#get-branc)
* ví dụ branch master (https://api.github.com/repos/nvminhtu/React/)
* ví dụ show repos của 1 user (user-repos) (https://api.github.com/users/nvminhtu/repos)
* ví dụ show repos của 1 Organization (org-repos) (https://api.github.com/users/technetup/repos)
* ví dụ show thông tin của 1 user (user-info) (https://api.github.com/users/nvminhtu)

## Các bước cần làm
* Tạo 3 function để render cho 3 Feeds
* Tạo 3 button để click chọn muốn show Feeds nào (sử dụng state để truyền request)
* Sử dụng điều kiện để check state.mode === ??? kiểm tra cần mở và render GIT source nào


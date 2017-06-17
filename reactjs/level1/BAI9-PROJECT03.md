# BÀI 9: PROJECT03 - Đọc dữ liệu từ nhiều Feeds bằng cách gom và ko lặp lại hàm

## Yêu cầu:

* Kế thừa từ Project 02
* Nâng cấp bằng cách tránh lặp và viết lại hàm
* Cấu hình lại các hàm trong `componentWillMount()`
* Thay vì viết lại code fetch data từ nhiều source ta gom lại 1 hàm
* Source: (https://api.github.com/repos/nvminhtu/React/)
* Fetch data (commits hoặc pulls hoặc folks) 
* https://api.github.com/repos/nvminhtu/React/commits
* https://api.github.com/repos/nvminhtu/React/pulls
* https://api.github.com/repos/nvminhtu/React/folks

## SOURCE CODE (đã hoàn thiện mẫu)
* [Link source code hoàn thiện](https://github.com/nvminhtu/React/tree/master/reactjs/project03)

## Làm sao để làm?

* Sử dụng các code ES6 (ES6 syntax)
* Áp dụng: `string interpolation` và `computed property names`

## Viết như thế nào
```
fetchFeed(type) {
    ajax.get(`https://api.github.com/repos/nvminhtu/React/${type}`)
        .end((error, response) => {
            if (!error && response) {
                this.setState({ [type]: response.body });
            } else {
                console.log(`Error fetching ${type}`, error);
            }
        }
    );
}
```
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

* Thời lượng: 30 phút

## SOURCE CODE (đã hoàn thiện mẫu)
* [Link source code hoàn thiện](https://github.com/nvminhtu/React/tree/master/reactjs/project03)

## Làm sao để làm?

* Sử dụng các code ES6 (ES6 syntax)
* Áp dụng: `string interpolation` và `computed property names`

* [Xem thêm Template String - String interpolation](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings) - Nhúng biến string trong 1 template String
```
var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy haha!`)
```
* [Xem thêm về Computed property names](https://www.eventbrite.com/engineering/learning-es6-enhanced-object-literals/)
```
var foo = 'bar'
var baz = {}
baz[foo] = 'ponyfoo'
console.log(baz)
// <- { bar: 'ponyfoo' }
```
Computed property namese có nhiều cách viết, phía trên là đơn giản nhất, trong project thì ta chỉ xài để truyền tham số `type` vào trong 1 template string


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
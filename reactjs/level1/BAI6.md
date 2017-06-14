# BÀI 6: State vs Props 

## Cơ bản State và Props
Cần biết về 3 thứ:

* constructor()
* super()
* this.state (thuộc tính)

### constructor()
* Được gọi tự động mỗi khi 1 object được gọi,.
* Được gọi 1 lần cho mỗi object và ko cần gọi trực tiếp

### super()
* Hàm này có nghĩa gọi cùng tới phương thức trong class được chỉ định. Ví dụ như:
`class Detail extends React.Component { }`
* Hàm này như là 1 cách kế thừa (OOP) chúng ta đã biết, gọi hàm này giúp kế thừa những gì của class Cha (ở đây là React.Component)

### this.state
* Giá trị mặc định: undefined

=> Áp dụng 3 cái trên như sau.
> Đầu tiên: viết 1 hàm constructor()
> trong đó, gọi hàm super() để mà lớp cha (React.Component) có thể khởi tạo những cái cần thiết.
> Thiết lập `this.state` thành giá trị chứa các dữ liệu của chúng ta.

```
constructor(props) {
    super(props);

    this.state = {
        name: chance.first(),
        country: chance.country({ full: true })
    };
}
```

## Thay đổi state của React Component với setState()


## Sate và `Single Source of Truth`
## Render một mảng data (Arry of Data) với map() và JSX
## Các phần nâng cao và bài đọc khác về State và Props

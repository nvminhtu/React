# BÀI 15: COMPONENT LIFECYCLE

Tìm hiểu về 1 chu trình hoạt động của 1 Component trong REACT JS


## Nội dung

```
Tạm hiểu là "Vòng đời của React Component", nó cũng giống như chu trình sinh ra và phát triển của một con người, hiểu về life cycle thì đi mây về gió, uyển chuyển như giọt nước mùa thu :)). Các vòng đời của nó:

componentWillMount(): giai đoạn chuẩn bị render component lần đầu, chỉ sử dụng lần đầu tiên. Tạm hiểu đây là quá trình con đạp bụng mẹ, mẹ chuẩn bị sinh ra con ^_^
componentDidMount(): giai đoạn sau khi render ra component lần đầu. Tạm hiểu là giai đoạn sau khi sinh con.
componentDidUpdate(): giai đoạn component cập nhật lại khi có sự thay đổi của state và props.
componentWillReceiveProps: giai đoạn nhận props
Ví dụ ở component là ChatContainer mình có khởi tạo socket, nhưng khi user chuyển sang sử dụng component khác và ChatContainer không còn hiển thị trên trang nữa, tuy nhiên socket vẫn còn connect, như vậy thì tốn dung lượng quá. Vì vậy cho nên mình sẽ can thiện vào vòng đời componentWillUnmount() của ChatContainer để close socket khi component đó không còn hiển thị trên trang.


Như mình giới thiệu các vòng đời ở trên, thì mỗi vòng đời tùy theo mục đích sử dụng, mà các bạn sẽ xử lý ở giai đoạn phụ hợp. Nếu bạn mới bắt đầu thì bạn cũng chưa sử dụng nó nhiều đâu, hiểu là được rồi
```

Phần trên nguồn từ Internet nhé!!!

### Keywords tìm kiếm liên quan `Component Life Cycle`

* Mounting (ComponentWillMount và ComponentDidMount)

`ComponnentWillMount` - thường sử dụng this.setState() ở hàm này để tránh gọi lại (re-trigger) - do hàm này là hàm đầu tiên được gọi khi khởi tạo.

`ComponentDidMount` - được ngay sau khi React render Component

* Updating
* Unmounting

## Xem thông tin về các vòng đời (hàm sử dụng trong LifeCycle)?

[React Component Document](https://facebook.github.io/react/docs/react-component.html) - Tài liệu chính chủ Facebook nhé.

![React Component LifeCycle](https://github.com/nvminhtu/React/blob/master/reactjs/level1/bai14/react-component-lifecycle.jpeg "React Component LifeCycle")

## Nguồn tham khảo:

* [React Component Life Cycle - Medium](https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df)


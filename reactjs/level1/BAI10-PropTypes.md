# BÀI 11: PROP TYPES

## Lý do?

* App mở rộng => gặp nhiều bugs với việc kiểm tra kiểu dữ liệu.
* Với 1 số loại ứng dụng: Có thể sử dụng các Javascript extension như (Flow hoặc TypeScript) để kiểm tra kiểu dữ liệu.
* Nếu ko sử dụng những cái trên? => Facebook có hàng để xài => đó là `PropTypes`

## Ví dụ: (copy từ FB)
```
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```
> Tức là để kiểm tra thì thằng `PropTypes` nó cung cấp nhiều kiểu data (string, number,...)
> Warning: sẽ hiển thị ở Javascript  Console, và nó chỉ được check khi đang development (development mode).

## Source code cho Bài 11 - sử dụng PropStates

### Sử dụng PropStates để kiểm tra kiểu dữ liệu:

* Vì Components có nhiều thuộc tính cụ thể nào đó ta khai báo (gọi là `props` trong React) => nó có thể là bất cứ kiểu gì (type)
* Thông thường thì phải kiểm tra độ hợp lệ (validate) cho các props này.
* Nếu không muốn User thoải mái nhập bất cứ kiểu dữ liệu nào vào Components.
* Ok, vậy xài giải pháp của REACT thôi => gọi là `PropTypes`

* Tạo file /details/Bai11.js như sau

```
// BAI 11: PropTypes
// MyTitle Class
import React from 'react';

var MyTitle = React.createClass({
    propTypes: {
          title: React.PropTypes.string.isRequired,
    },
    render: function() {
          return <h1> {this.props.title} </h1>;
    }
});
   
export default MyTitle;
```

* Trong file index.js sửa lại như sau
```
import React from 'react';
import ReactDOM from 'react-dom';


import MyTitle from './pages/Bai11.js';

// truyền vào 1 kiểu dữ liệu là số
var data = 11;

ReactDOM.render(

    // Bai 11
    <MyTitle title={data} />,
    document.getElementById('app')
);

```

* Chạy source lại thì mở Console lên sẽ thấy báo lỗi như này
```
bundle.js:1004 Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `MyTitle`, expected `string`.
    in MyTitle
```
=> Xong

### Sử dụng `getDefaultProps()` để gán dữ liệu mặc định ban đầu  cho Props




## List các bài tham khảo:
* [Type Checking with PropTypes - Facebook Document](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

##


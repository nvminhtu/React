# BÀI 4: React Props + CHANCE Library (để thử nghiệm)

## React Props
* Sửa lại nội dung trong file `index.js`

```
import React from 'react';
import ReactDOM from 'react-dom';

import Detail from './pages/Detail';

ReactDOM.render(
    <Detail message="This is coming from props!" />,
    document.getElementById('app')
);
```
* Ở đây ta thấy message là 1 attribute của Detail Component

* Vì thế trong Component `Detail` của chúng ta cần làm là đọc thông tin từ attribute `message` (còn gọi là prop)

```
import React from 'react';

class Detail extends React.Component {
    render() {
        return <p>{this.props.message}</p>;
    }
}

export default Detail;
```

## Cài đặt thư viện `CHANCE`

* Vào terminal/CMD chúng ta gõ lệnh sau để cài đặt
`npm install --save chance`

* Cách sử dụng thư viện `CHANCE` - có thể kiếm tài liệu rồi tham khảo. [Thư viện Chance](http://chancejs.com)


* Để sử dụng Chance trong project ta import vào như sau:

* Mở file `Detail.js` thêm vào như sau:
`import Chance from 'chance';`

* Trong `render()` của file `Detail.js` chúng ta thay bằng thư viện chance
`return <p>Hello, {chance.first()}!</p>;`
Ở lệnh trên nó cho phép ta thay đổi ngẫu nhiên data cho first name().

Thư viện Chance này cho phép ta thay đổi dữ liệu 1 cách random, giúp ta test và demo code 1 cách hợp lý.


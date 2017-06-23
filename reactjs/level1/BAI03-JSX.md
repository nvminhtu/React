# BÀI 3: JSX - làm quen và sử dụng

* Tạo file 'src/pages/Detail.js' chúng ta tạo 1 Component đơn giản sau

Chúng ta tạo 1 component đơn giản tên `React`
```
import React from 'react';

class Detail extends React.Component {
    render() {
        return <p>This is React rendering HTML!</p>;
    }
}

export default Detail;

```

* Chỉnh sửa file `src/index.js`
```
import React from 'react';
import ReactDOM from 'react-dom';

import Detail from './pages/Detail';

ReactDOM.render(
    <Detail />, // gọi component Detail mà chúng ta đã tạo ở file Detail.js
    document.getElementById('app')
);
```

Một số ghi chú:
```
* Why does Detail.js have a capital letter? This isn't needed, but it's stylistically preferred.
* How does JSX know what <Detail /> means? We don't give the component a name inside Detail.js, so instead the name comes from the way we import it: if you use import Bob from './pages/Detail'; then you could write <Bob /> and it would work just fine. (But please don't do that if you value your sanity!)
* Can I put lots of components in Detail.js? You can if you want to, but again it's preferable not to if you value your sanity. Stick to one component per file if you can.
* Do I have to render stuff inside my component? No, but React does need something to render at this point. When you're a more experienced React developer you'll learn more about this.
```

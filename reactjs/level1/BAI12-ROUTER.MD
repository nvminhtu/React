# BÀI 12: ROUTER

## Nội dung:

Nếu bạn sử dụng 1 số trang web hiện nay, bạn sẽ thấy khi click vào 1 link nào đó, thì url change, nhưng trang sẽ không load lại hết thì đó là 1 ứng dụng SPA (Single page application). Vậy làm thế nào để làm điều đó trên React, xin giới thiệu với các bạn đó là React Router. React router khá dễ sử dụng, tài liệu chi tiết dễ hiểu.

## DOCUMENT

* [React Router Document](https://github.com/ReactTraining/react-router)


## List các bài tham khảo:

* [Coi về React Router](https://css-tricks.com/learning-react-router/)
* [Phân biệt React Router và các package của nó](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
* [Tutorial riêng về tạo và sử dụng React Router](https://github.com/reactjs/react-router-tutorial) - bao gồm (setup, rendering a route, nested, param, server rendering,...) - lưu ý là react router version 2.x (còn 4.x là ko chơi với code này được nữa nhé).
* [Tutorial hướng dẫn tạo Router với React Router v4.x](https://github.com/IrfanBaqui/react-router-v4-tutorial)
* [Blog hướng dẫn làm React Router với React Router v4.x](https://www.sigient.com/blog/movie-listings-application-with-react-router-v-4) - thấy bài này hoàn chỉnh có hướng dẫn khá OK.

## Follow bài này để làm step by step
* [Tạo 1 project từ đầu với React và React Router](https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669) - bài này hướng dẫn thực hành từ việc setup webpack, đến sử dụng React Router. 


## Step by step:

* Bài này ta tạo riêng 1 folder source giống các package trước, ta có thể clone setup như các project 1->4 đã làm. Đạt tên folder là `react-router` trong `level1`

* Sau khi clone và chạy thử `webpack-dev-server`, Ta cần cài React Router package (lưu ý nhớ cài ở thư mục chạy của project)

```
npm install --save react-router
```

* Sửa file App.js thành như sau
```
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const App = () => <h1>Hello World!</h1>
export default App

```

* index.js ta sẽ để nội dung như sau, rồi chạy và test thử

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

ReactDOM.render(
	<App />,
    document.getElementById('app')
);
```

* Mục tiêu của chúng ta là tách <App /> thành những trang riêng biệt vì thế ta chỉnh lại file App.js

```
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// bỏ dòng bên dưới đi
//const App = () => <h1>Hello World!</h1>

class App extends React.Component {
  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/address' component={Address} />
      </Router>
    );
  }
}

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>

export default App

```






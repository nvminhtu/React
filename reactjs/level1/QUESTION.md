# CÁC CÂU HỎI THƯỜNG GẶP
## 1. Stateless vs Statefull là gì ?
Trong Web Development ta nói tới khái niệm này, riêng với React thì ta đề cập tới Component.
> Cho nên phân ra:
* Stateless Component
* Statefull Component

### 1.1 Stateless Component

Xem ví dụ này
```
import React from 'react';

function HelloMessage({ name }) {
  return(
    <div>Hello {name}</div>
  );
};

HelloMessage.propTypes = { name: React.PropTypes.string };
HelloMessage.defaultProps = { name: 'World' };

ReactDOM.render(<HelloMessage name="Alice" />, mountNode);
```
Nhìn lên ta thấy các vấn đề sau:
* 1 Component quá đơn giản
* Nó có 1 số state (state ở đây là props)
* Kết quả trả về là DOM

Khi nào thì sử dụng?

Hoặc xem thêm ví dụ khác về `Stateless Component`
```
export default class Title extends Component {
 render() {
  return (
   <div>
    <h1>{this.props.username}</h1>
   </div>
  );
 };
};
//Here I am simply passing the value in as a prop to our component:
<Title username='tommy' />
//And to see how this is done using another components state:
<Title username={this.state.username} />
//when called within another component
```

### 1.2 Stateful Component
Xem ví dụ này

```
import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  componentDidMount() {
    console.log('Stateful component successfully mounted.');
  }

  _toggleLikeState = () => {
    this.setState({
      isLiked: this.state.isLiked
    });
  }

  render() {
    const { name } = this.props;
    const { isLiked } = this.state;

    return (
      <div>
        <h3>{ name }</h3>
        <span>{ isLiked ? 👍 : 👎 }</span>
        <button onClick={ this._toggleLikeState }>
          Toggle Like
        </button>
      </div>
    );
  }
}


HelloMessage.propTypes = { name: React.PropTypes.string };
HelloMessage.defaultProps = { name: 'World' };

ReactDOM.render(<Profile name="Alice" />, mountNode);
```
Nhìn vào ví dụ thì ta thấy nó có:
* Internal State (State bên trong)
* Component Lifecycle Hooks (các hooks của Component LifeCycle như constructor, componentDidMount)

Vậy khi nào nên xài `Stateful Component`?
* Cần có 1 state bên trong Component để xử lý ( như ví dụ trên là kiểm tra điều kiện) (Internal State)
* Cần chạy 1 hành động (action) nào đó khi Component được chỉ định tới(mount)


* 1 số ví dụ ta xài Stateful
When you need internal state
  > D3 graph
When you need to utilize a Component Lifecycle hook
>  request on mount
> Setup animations
> Access the raw DOM node for a 3rd party library

* 1 số bài viết Tiếng Anh tham khảo khác
[stateful vs stateless Component](https://medium.com/@juanguardado/stateful-vs-stateless-components-444b5aa21865)

## 2. Middleware trong Redux là gì ?
## 3. Khi 1 form đơn giản thì mình sử dung Uncontrolled Component hay luôn phải sử dụng Controlled Component để bản thân Component quản lý các input tốt hơn ?

## 4.What is the difference between NPM and YARN?

* [Answer](https://medium.com/@nikjohn/facebooks-yarn-vs-npm-is-yarn-really-better-1890b3ea6515)
* [How to use YARN](https://www.sitepoint.com/yarn-vs-npm/)
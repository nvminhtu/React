# BÀI 7: Khởi tạo 1 Project từ đầu

## Tên Project: Đọc dữ liệu từ Github Source.

* Đọc dữ liệu từ 1 source Github: Ví dụ (https://github.com/nvminhtu/React/)
* Fetch data và xử lý những data sẽ hiển thị.
* Code: sử dụng các kiến thức vừa học (Prop, State, Component, JSX)
* Kĩ thuật thêm: `superagent` đọc dữ liệu AJAX
* Thời gian thực hiện: 1 tiếng.

## Cấu hình chạy Project
* Sử dụng Webpack Dev Server
* Cài đặt
```
npm install -g webpack
npm install -g webpack-dev-server
``` 

* Cấu hình của Project 01

```
localhost:8080
```


## Các bước thực hiện

Xem lại các yêu cầu cần thực hiện trước khi làm project này:

```
How to install Webpack, Babel and React for development with ES6.
How to create a basic React component and import it into an application.
How to write simple JSX to render content.
How to use props to give a component values.
How to render several elements at once.
How to handle events such as onClick.
How to use state, and how it differs from props.
How to loop over and render data in an array.
```

* Cài đặt superagent để fetch data AJAX
```
npm install --save superagent
```

* Trong page `Detail.js` ở các bài trước ta thay thế như sau
```
// Detail page
import React from 'react';
import Chance from 'chance';
import ajax from 'superagent';

class Detail extends React.Component {
   
	// constructor
	constructor(props) {
		super(props);
	    this.state = { commits: [] };

	}
	
	// fetching data when componentWillMount()
	componentWillMount() {
	    ajax.get('https://api.github.com/repos/facebook/react/commits')
	        .end((error, response) => { // tell superagent - what to do when requests finish
	            if (!error && response) { // there no errors?
	                this.setState({ commits: response.body }); // set respone data -> commits then setState
	                console.dir(response.body); // Debug -> show data -> then we can show data in frontend
	            } else { // if has errors?
	                console.log('There was an error fetching from GitHub', error);
	            }
	        }
	    );
	}

    render() {
	    return (<div>
		    {this.state.commits.map((commit, index) => (
		        <p key={index}>Some commit data here.</p>
		    ))}
		    </div>);
	}
}

export default Detail;
```

* Trong đó ta import ajax từ superagent để có thể sử dụng ajax trong ứng dụng của ta
`import ajax from 'superagent';`

* Trong đó, ta xử lý dữ liệu trả về ở hàm `componentWillMount()`
```
componentWillMount() {
	    ajax.get('https://api.github.com/repos/facebook/react/commits')
	        .end((error, response) => { // tell superagent - what to do when requests finish
	            if (!error && response) { // there no errors?
	                this.setState({ commits: response.body }); // set respone data -> commits then setState
	                console.dir(response.body); // Debug -> show data -> then we can show data in frontend
	            } else { // if has errors?
	                console.log('There was an error fetching from GitHub', error);
	            }
	        }
	    );
	}
```	

* Ghi chú thêm: đọc thông tin từ Github
[Github API Documentation](https://developer.github.com/v3/repos/#get-branc)
* ví dụ branch master (https://api.github.com/repos/nvminhtu/React/)
* ví dụ commits của branch master (https://api.github.com/repos/nvminhtu/React/commits)
* ví dụ branch của Phú (https://api.github.com/repos/nvminhtu/React/branches/phu)

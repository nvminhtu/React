/* 
  + Tạo Question 
  + Question là 1 item => nên dùng dạng stateless component
  + Tham khảo thêm ở đây: https://facebook.github.io/react/docs/components-and-props.html
*/
import React from 'react';

function Question(props) {
	return (
		<h2 className="question">{props.content}</h2>
	);
}

// typechecking

Question.PropTypes = {
	content: React.PropTypes.string.isRequired
};

export default Question;
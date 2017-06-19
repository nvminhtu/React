
/* 
	+ QuestionCount
	+ presentation component 
*/

import React from 'react';

function QuestionCount(props) {
	return (
		<div className="QuestionCount">
			Question <span>{ props.counter}</span> of <span>{props.total}</span>
		</div>
	);
}

QuestionCount.PropTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
}

export default QuestionCount;
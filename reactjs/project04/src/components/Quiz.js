import React from './react';

import Question from './components/Question.js';
import AnswerOptions from './components/AnswerOptions.js';
import QuestionCount from './components/QuestionCount.js';

function Quiz(props) {
	return (
		<div className="Quiz">
			<QuestionCount
				counter = props.questionId
				total = props.questionTotal
			/>
			<Question content= props.question />
			<ul className="answerOptions">
			  {props.answerQuestion.map(renderAnswerOptions)}
			</ul>
		</div>
	);
}

export default Quiz;
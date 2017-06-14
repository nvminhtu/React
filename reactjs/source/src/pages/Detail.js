import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
    render() {
		/* 
			//#note: if-else condition
			return <p>
			{
				chance.first() == 'John' 
				? 'Hello, John!'
				: 'Hello, world!'
			}
		</p>; */
		
		/*  
			//#note: render several elements at once
			return <p> Hello, {chance.first()}.</p>
			<p>You're from {chance.country({full: true})}.</p>;
		*/
	}
}

export default Detail;
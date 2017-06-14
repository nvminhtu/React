import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
    /* #note: if else condition
	    render() {
			return <p>
			{
				chance.first() == 'John' 
				? 'Hello, John!'
				: 'Hello, world!'
			}
			</p>;
		} 
	*/
	render() {
	    return (<div>
	        <p>Hello, {chance.first()}.</p>
	        <p>He/She is from {chance.country({ full: true })}.</p>
	    </div>);
	}
}

export default Detail;
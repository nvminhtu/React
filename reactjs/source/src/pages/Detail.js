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

	/* #note: several elements in JSX
		render() {
		    return (<div>
		        <p>Hello, {chance.first()}.</p>
		        <p>He/She is from {chance.country({ full: true })}.</p>
		    </div>);
		}
	*/
	
	// constructor
	constructor(props) {
	    super(props);

	    this.state = {
	        name: chance.first(),
	        country: chance.country({ full: true })
	    };
	}
	
	// componentWillMount() {
	//    this.setState({
 //        	name: 'test'
 //      })
	// }
	
	buttonClicked(){
		console.log("Hello from here");
		
	}
	/* 
		// event trong JSX
		buttonClicked() {
			console.log('Button was clicked!');
		}
	*/


	render() {
        return (<div>
            <p>Hello, {this.state.name}.</p>
            <p>You're from {this.state.country}.</p>
            <button onClick={this.buttonClicked}>Click me please!</button>
        </div>);
    }
}

export default Detail;
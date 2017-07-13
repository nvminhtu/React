// Component: OneFeed
import React from 'react';
import Chance from 'chance';
import ajax from 'superagent';

// intro: đọc data từ https://api.github.com/repos/nvminhtu/React
// https://developer.github.com/v3/repos/#get-branc
class OneFeed extends React.Component {
   
	// constructor
	constructor(props) {
		super(props);
	    this.state = { commits: [] };
	}
	
	// fetching data when componentWillMount()
	componentWillMount() {
	    ajax.get('https://api.github.com/repos/nvminhtu/React/commits')
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
	    return (<div>Hello hehe</div>);
	}
}

export default OneFeed;
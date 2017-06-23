import React from 'react';

// khai bao 1 Counter don gian
const BasicCounter = React.createClass({

	getDefaultProps: function() {
		console.log('test Default Props');
		return {
			title: 'Basic Counter!!!'
		}
	},

	getInitialState: function() {
	 	console.log('khoi tao State');
	 	return {
	 		count: 0
	 	}
	},
    
	render: function() {
        console.log('chạy hàm render');
        return (
            <div>
            	<h1>{this.props.title}</h1>
            	<div>{this.state.count}</div>
            
	        	/* Tạo event cho button tăng giảm Counter */
	        	<input type="button" value="+" onClick={} />
	        	<input type="button" value="-" onClick={} />
        	</div>
        );
    },
	/* Các hàm tăng giảm Counter */
	handleIncrement: function() {
		let newcount = this.state.count + 1;
		this.setState({ count: newcount });
	},
	handleDecrement: function() {
		let newcount = this.state.count - 1;
		this.setState({ count: newcount});
	},

	/* Type Checking cho Counter */
	propTypes: function() {
		title: React.propTypes.number	
	}

});

export default BasicCounter;
import React from 'react';

// khai bao 1 Counter don gian
const AdvancedCounter = React.createClass({

	getDefaultProps: function() {
		console.log('test Default Props');
		return {
			title: 'Advanced Counter!!!',
			step: 1
		}
	},

	getInitialState: function() {
	 	console.log('khoi tao State');
	 	return {
	 		count: (this.props.initialCount || 0)
	 	}
	},
    
	render: function() {
        console.log('chạy hàm render');

        var step = this.props.step;
        return (
            <div>
            	<h1>{this.props.title}</h1>
            	<div>{this.state.count}</div>
            
	        	{/* Tạo event cho button tăng giảm Counter */}
	        	<input type="button" value="-" onClick={this.updateCounter.bind(this, -step)} />
	        	<input type="button" value="+" onClick={this.updateCounter.bind(this,step)} />
        	</div>
        );
    },

    updateCounter: function (value) {
    	var newCount = this.state.count + value;
    	this.setState({ count: newCount });
    },

	/* Type Checking cho Counter */
	propTypes: {
		title: React.PropTypes.string,
		step: React.PropTypes.number,
		initialCount: React.PropTypes.number
	}

});

export default AdvancedCounter;
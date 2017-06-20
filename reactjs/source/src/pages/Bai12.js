// BAI 12: React Router
import React from 'react';

var BookDetail = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'Nhóm này rất siêng đấy!'
		};
	},

    render: function() {
      return <h1> {this.props.title} </h1>;
    }
});
   
export default BookDetail;
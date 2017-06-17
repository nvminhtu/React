// BAI 11: PropTypes
// MyTitle Class
import React from 'react';

/* Kiểm tra kiểu dữ liệu */
/* var MyTitle = React.createClass({
    propTypes: {
          title: React.PropTypes.string.isRequired,
    },
    render: function() {
          return <h1> {this.props.title} </h1>;
    }
});
*/ 

/* Gán dữ liệu mặc định cho Props s*/

var MyTitle = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'Nhóm này rất siêng đấy!'
		};
	},

    render: function() {
          return <h1> {this.props.title} </h1>;
    }
});
   
export default MyTitle;
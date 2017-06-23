import React from 'react';
import Axios from 'axios';

// khai bao 1 Counter don gian
const FetchCounter = React.createClass({
    
	getInitialState: function() {
        return {
            data: null,
            fetching: false,
            error: null
        };
    },
    
    render: function() {
        if (this.props.fetching) {
            return <div>Loading...</div>;
        }
        
        if (this.props.error) {
            return (
                <div className='error'>
                    {this.state.error.message}
                </div>
            );
        }
        
        {/* Đổ data vào đây */}
        //return <Counter {...data} />
        return <div>Test Fetch data</div>
    },
    
    componentDidMount: function() {
        this.setState({fetching: true});
        
        Axios.get(this.props.url).then(function(res) {
            this.setState({data: res.data, fetching: false});
        }).catch(function(res) {
            this.setState({error: res.data, fetching: false});
        });
    }
});

export default FetchCounter;
import React from 'react';
import Chance from 'chance';


class Detail extends React.Component{
    render() {
        // return <p>{this.props.message}</p>
        return <p>Hello, { chance.first()}!</p>
    }
}

export default Detail;
import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
    render() {
        return <p>Hello, {chance.first()}!</p>;
    }
}

export default Detail;
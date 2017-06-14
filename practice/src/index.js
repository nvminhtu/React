import React from 'react';
import ReactDOM from 'react-dom';
class Demo extends React.Component {
    render(){
        return (
            <h1>Hello ReactJS</h1>
        );
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('app')
)
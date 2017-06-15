import React from 'react';
import ReactDOM from 'react-dom';
import DetailComponent from './pages/Detail'
class Demo extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello ReactJS</h1>
                <DetailComponent/>
            </div>
            
        );
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('app')
)
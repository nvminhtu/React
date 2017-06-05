import React from 'react';

import './Demo.css';
var hoTen ="bui phu";
class Demo extends React.Component{
    render(){
        return (
            <div>
             <h1 className="text"> {hoTen} say  Hello ReactJS with Demo Component</h1>
             <Other />
            </div>
           
        );
    }
}
class Other extends React.Component{
    render(){
        return (
            <h1 className="text">Hello ReactJS with Other Component</h1>
        );
    }
}

export default Demo;
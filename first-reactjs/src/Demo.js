import React from 'react';

import './Demo.css';

class Demo extends React.Component{
   constructor(props){
       super(props);
      this.hoTen ="ReactJS";
   }
    render(){
        return (
            <div>
            
             <h1 className="text">{this.hoTen} say  Hello ReactJS with Demo Component</h1>
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

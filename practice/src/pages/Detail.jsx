import React from 'react';
export default class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.state.count = this.state.count + 1;
        this.setState(this.state);
        console.log( this.state.count);      
    }
    render(){
        return <h3 onClick={this.handleClick} >This is a Detail Component</h3>
    }
}
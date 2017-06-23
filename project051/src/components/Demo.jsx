import React from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.mang = ['a','b','c'];
    }
    render(){
        return (
            <div>
                <h3 className="demo" >demo</h3>
                {
                    this.mang.map((e,i)=> (
                        <div key={i} > {e} </div>
                    ))
                }
            </div>
        );
    }
}
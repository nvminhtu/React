import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Item from './Item.jsx';
import Add from './Add.jsx';
export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists : []
        }
        this.listAdd = this.listAdd.bind(this);
    }
    listAdd(value){
        this.state.lists.push(value);
        this.setState(this.state);
    }
    render(){
        return (
            <div>
                <Add addItem={this.listAdd} />
                <div>
                    {
                        this.state.lists.map((item,index)=>{
                             return <Item key={index}>{item}</Item>
                        })
                    }
                </div>
            </div>
        );
    }
}
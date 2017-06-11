import React from 'react';
import {connect} from 'react-redux';
import { actionDeleteItem} from '../Action.jsx';
class Item extends React.Component {
    constructor(props){
        super(props);
        this.deteleItem = this.deteleItem.bind(this);
        this.dispatch = props.dispatch;
    }
    deteleItem(){
        let {index} = this.props;
        this.dispatch(actionDeleteItem(index));
    }
    render(){
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.deteleItem} >Delete</button>
            </div>
        );
    }
}
export default connect()(Item);
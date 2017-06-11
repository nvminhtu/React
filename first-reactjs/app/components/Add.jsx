import React from 'react';
import {connect} from 'react-redux';
import { actionAddItem,actionIsAdding} from '../Action.jsx';
class Add extends React.Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.toggleAdding = this.toggleAdding.bind(this);
        this.dispatch = props.dispatch;
    }
    addItem(){
        this.dispatch(actionAddItem(this.refs.txt.value));
        this.dispatch(actionIsAdding());
    }
    toggleAdding(){
        this.dispatch(actionIsAdding());
    }
    render(){
        if(!this.props.isAdding){
            return <button onClick={this.toggleAdding}>+</button>
        }
        return (
            <div>
            <form>
                <input type="text" ref='txt' />
                <button onClick={this.addItem} onKeyPress={ () => {
                    if(event.keyCode == 13) this.addItem;
                }} >Add</button>
            </form>
                
            </div>
           
        );
    }
}
export default connect((state)=>(
    {isAdding: state.isAdding}
))(Add);
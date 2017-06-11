import React from 'react';
import Add  from './Add.jsx';
import Item  from './Item.jsx';
import {connect} from 'react-redux';
class List extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Add  />
                {
                    this.props.lists.map((value,index)=>(
                        <Item key={index} index={index}  >{value}</Item>
                    ))
                }
            </div>        
        );
    }
}
export default connect(function(state){
    return {lists : state.lists};
})(List);

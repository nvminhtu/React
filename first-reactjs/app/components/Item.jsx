import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
export default class Item extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p>{this.props.children} - </p>
            </div>
        );
    }
}

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
export default class Add extends Component {
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.state = {
            txt : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.state.txt = e.target.value;
        this.setState(this.state);
    }
    add(){
        if(isNaN(this.state.txt) === true && this.state.txt != ""){
            this.props.addItem(this.state.txt);
            this.state.txt = '';
        }
    }
    render(){
        return (
            <div>
                <input type='text' value={this.state.txt} onChange={this.handleChange} />
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}
Add.propTypes = {
    addItem : PropTypes.func
}
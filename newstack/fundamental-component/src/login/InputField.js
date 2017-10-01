import React, { Component } from 'react';

class InputField extends Component {
  handleChange = (e) => {
    const result = this.props.validateRule;
    const testString = result.test(e.target.value)
    this.props.onChangeInputField(testString, this.props.inputType);
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.labelText}</label>
        <input type={this.props.inputType} className="form-control" id={this.props.id} placeholder={this.props.inputClassName} onChange={this.handleChange} />
      </div>
    );
  }
}

export default InputField;

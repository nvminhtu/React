import React, { Component } from 'react';
import './Login.css';
import InputField from './InputField';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      disabled: true
    };
    this.data = {
      email: false,
      password: false
    }
  }

  onChangeInput = (result, InputType) => {
    let message = '';
    let disabled = true;
    if(!result) {
      if(InputType === 'email') {
        message = 'Invalid Email';
      }
      if(InputType === 'password') {
        message = `* Contain at least 8 characters,\
        * Contain at least 1 number,
        * Contain at least 1 lowercase character (a-z),
        * Contain at least 1 uppercase character (A-Z),
        * Contains only 0-9a-zA-Z`;
      }
    } else {
      message = '';
      if(InputType === 'email') {
        this.data.email = true;
      } else if(InputType === 'password') {
        this.data.password = true;
      }
      //if all field is input (true) set disabled false
      disabled = (this.data.email && this.data.password) ? false : true;
    }
    this.setState({
      message: message,
      disabled: disabled
    });
  }

  render() {
    //rule
    const email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return (
      <div className="form-login">
        <form>
          <div className="form-group">
            <InputField
              id="exampleInputEmail1"
              labelText="Email Address"
              placeholder="Email"
              inputType="email"
              inputClassName="Email"
              validateRule={email}
              onChangeInputField={this.onChangeInput}
            />
          </div>
          <div className="form-group">
              <InputField
                id="exampleInputEmail1"
                labelText="Email Address"
                placeholder="Password"
                inputType="password"
                inputClassName="Password"
                validateRule={password}
                onChangeInputField={this.onChangeInput}
              />
            </div>
          <p className="message">{this.state.message}</p>
          <button type="submit" className="btn btn-default" disabled={this.state.disabled}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;

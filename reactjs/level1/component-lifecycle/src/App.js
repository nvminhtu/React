import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BasicCounter from './components/BasicCounter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component Life Cycle</h2>
        </div>
        <div className="Counter">
          <BasicCounter />
        </div>
      </div>
    );
  }
}

export default App;

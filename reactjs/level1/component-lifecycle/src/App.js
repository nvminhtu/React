import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BasicCounter from './components/BasicCounter.js';
import AdvancedCounter from './components/AdvancedCounter.js';
import FetchCounter from './components/FetchCounter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component Life Cycle</h2>
        </div>
        <div className="Counter">
          <AdvancedCounter />
        </div>
      </div>
    );
  }
}

export default App;

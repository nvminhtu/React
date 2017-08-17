import React, { Component } from 'react';
import Hello from './components/Hello/Hello';
import MessageContainer from './components/MessageContainer/MessageContainer';
import PanelContainer from './components/PanelContainer/PanelContainer';

// customize CSS (call component from react-bootstrap)
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* <Hello /> */}
        {/* <MessageContainer /> */}
        <PanelContainer />
      </div>
    );
  }
}

export default App;

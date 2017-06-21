import React, { Component } from 'react';
import movies from './movies.json';
import logo from './svg/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="featured-movies__header">
	        Featured Movies
	    </h2>
      </div>
    );
  }
}

export default App;
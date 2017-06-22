import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Phim hay</h2>
            <Link to="/">Home</Link>
            <Link to="/Movies">Movies</Link>
          </div>

          <div className="container">
            <Match exactly pattern="/" component={Home} />
            <Match exactly pattern="/movies" component={Movies} />
            <Match pattern="/movies/:movieId" component={Movie} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
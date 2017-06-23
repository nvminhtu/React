import React, { Component } from 'react';
import {BrowserRouter as Router , Link , Route,Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import FeaturedMovie from './project05/components/FeaturedMovie';
import Home from './project05/components/Home';
import Movie from './project05/components/Movie';
import Movies from './project05/components/Movies';
import PageNotFound from './project05/components/PageNotFound';
class App extends Component {
  constructor(props){
    super(props);
   
    
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header" >
            <h2>Phim Hay</h2>
            <Link to="/">Home</Link> 
            <Link to="/movies" >Movies</Link>
          </div>
          <div className="container" >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies" component={Movies} />
              <Route path="/movies/:id" component={Movie} />
              <Route component={PageNotFound}/>
            </Switch>
            
          </div>
         
        </div>
      </Router>    
    );
  }
}

export default App;

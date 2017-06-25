import React, { Component } from 'react';
import {BrowserRouter as Router , NavLink , Route , Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FeaturedMovie from './project05/components/FeaturedMovie';
import Home from './project05/components/Home';
import Movie from './project05/components/Movie';
import Movies from './project05/components/Movies';
import PageNotFound from './project05/components/PageNotFound';
import OldSchoolMenuLink from './project05/components/OldSchoolMenuLink';
import TestHome from './project05/components/TestHome';
import TestAbout from './project05/components/TestAbout';
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="Appa">
          <div className="App-header" >
            <h2>Phim Hay</h2>
            <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
            <OldSchoolMenuLink to="/About/xxx" label="About"/>
            <hr/>
          </div>
          <div className="container" >
          <Route path="/" exact component={TestHome} />
          <Route path="/about/:name" component={TestAbout} />

            
          </div>
         
        </div>
      </Router>    
    );
  }
}

export default App;

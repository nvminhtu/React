import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    let dataURL = "http://minhtu.net/wp-json/wp/v2/movies";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res
        })
      })
  }{
  render() {
    
    // arrow Function for movies variables (let)
    let movies = this.state.movies.map((movie,index)=> {
      return <div key={index}>
          <p><strong>Title:</strong> {movie.title.rendered}</p>
          <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
          <p><strong>Rating:</strong> {movie.acf.rating}</p>
          <div><strong>Description:</strong><div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
      </div>
    });

    return (
        <div>
          <h2>Movie Listing 2017</h2>
          {movies}
        </div>
      )
  }
}

export default App;

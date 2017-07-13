import React from 'react';
import Link from 'react-router/Link';
import movies from '../movies.json';

const Movies = () => (
  <div>
    <h2 className="movies-header">
        Danh sách Phim
    </h2>

    <hr />

    <div className="movie-listings">
      {movies.map((movie,i)=>(
        <div key={i}>
          <div className="moive-image">
            <Link to={`/movies/${movie.id}`}>
              <img alt={movie.name} src={movie.image} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Movies;
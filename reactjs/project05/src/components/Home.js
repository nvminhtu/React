import React from 'react';
import movies from '../movies.json';
import FeaturedMovie from './FeaturedMovie';

const Home = () => {
  
 // const topFour = movies.slice(0, 4);
  //console.log(topFour);

  return (
    <div>
      <h2 className="featured-movies">
        Featured Movies
      </h2>

      <hr />

      <div className="featured-movies">
        {movies.map((movie, i) => (
          <FeaturedMovie
            movie={movie}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
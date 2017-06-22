import React from 'react';
import movies from '../movies.json';
import FeaturedMovie from './FeaturedMovie';

  const Home = () => {
    // lấy 4 phim đầu tiên trong file json đã khai báo
    const topFour = movies.slice(0, 4);

    return (
      <div>
        <h2 className="featured-movies__header">
          Phim nổi bật
        </h2>

        <hr />
        
        <div className="featured-movies">
          {topFour.map((movie, i) => (
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
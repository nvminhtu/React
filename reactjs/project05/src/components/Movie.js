import React, { PropTypes } from 'react';
import movies from '../movies.json';

// Khai báo Movie (các kiểu Component này gọi là: stateless component)
const Movie = ({ params: { movieId } }) => {
  
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find?v=example
  // movies là 1 array các đối tượng (object) 
  // ở TH này ta cần tìm chính xác id của movie => dùng hàm find()
  // hàm find giúp trả về giá trị của phần tử đầu tiên mà thỏa mãn yêu cầu ràng buộc chúng ta qui định

  const movie = movies.find(
    movie => movie.id === parseInt(movieId, 10)
    // hàm parseInt: https://www.w3schools.com/jsref/jsref_parseint.asp 
    // hàm arrow: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  );
  // hàm trên giúp truy xuất phần tử trong 1 một mảng

  return (
    <div>
      <div className="movie-title">
        <h2>{movie.name}</h2>

        <hr />
      </div>

      <div className="movie-container">
        <div className="movie-image">
          <img src={movie.image} />
        </div>

        <div className="movie-information">
          <p><b>Director:</b> {movie.director}</p>
          <p><b>Release Date:</b> {movie.released}</p>
          <p><b>Description:</b> {movie.description} </p>
        </div>
      </div>

      <div className="movie-reviews">
        <h2>Reviews</h2>

        <hr />
        
        {movie.reviews.map((review, i) => (
          <div key={i} className="movie-review">
            <h3>
              {review.title} <span className="review-author">by {review.author}</span>
            </h3>

            <p>{review.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Movie.propTypes = {
  params: PropTypes.shape({
    movieId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
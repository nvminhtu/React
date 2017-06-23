import React from 'react';
import movies from '../movies.json';

export default class Movie extends React.Component {
    constructor(props){
        super(props);
        this.movie = movies.find((movie)=>
            movie.id === parseInt(props.match.params.id,10)
        );
    }
    render(){
        return (      
            <div>
                <div className="movie-title">
                    <h2>{this.movie.name}</h2>

                    <hr />
                </div>

                <div className="movie-container">
                    <div className="movie-image">
                    <img src={this.movie.image} />
                    </div>

                    <div className="movie-information">
                    <p><b>Director:</b> {this.movie.director}</p>
                    <p><b>Release Date:</b> {this.movie.released}</p>
                    <p><b>Description:</b> {this.movie.description} </p>
                    </div>
                </div>

                <div className="movie-reviews">
                    <h2>Reviews</h2>

                    <hr />
            
                    {this.movie.reviews.map((review, i) => (
                    <div key={i} className="movie-review">
                        <h3>
                        {review.title} <span className="review-author">by {review.author}</span>
                        </h3>

                        <p>{review.body}</p>
                    </div>
                    ))}
                </div>
            </div>
        )      
    }
}
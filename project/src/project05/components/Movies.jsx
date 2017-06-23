import React from 'react';
import {Link} from 'react-router-dom';
import movies from '../movies.json';

export default class Movies extends React.Component {
    render(){
        return (
            <div>
                <h2 className="movies-header">
                    Danh sách Phim
                </h2>

                <hr />
                <div className="featured-movie" >
                    {movies.map((movie,i)=>(
                        <div key={i}>
                            <div className="featured-movie__image" >
                                <Link to={`/movies/${movie.id}`}>
                                    <img alt={movie.name} src={movie.image} />
                                </Link>    
                            </div>
                        </div>
                    ))}
                </div>  

            </div>
        )
    }
}


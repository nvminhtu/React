import React from 'react';

import FeaturedMovie from './FeaturedMovie';
import movies from '../movies.json';
let moviesArray = movies.slice(0,4);
export default class Home extends React.Component {
    render(){
        return (
            <div>
                <h2 className="featured-movies">Phim Nổi Bật </h2>
                <hr />
                <div className="featured-movies">
                {
                    moviesArray.map((movie,index)=>(              
                        <FeaturedMovie key={index} movie={movie} />
                    ))
                }
                </div>         
          </div>        
        );
    }
}
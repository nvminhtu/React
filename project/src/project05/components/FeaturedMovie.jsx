import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import movies from '../movies.json';

export default class FeaturedMovie extends React.Component {

    render(){
        return (
           
            <div className="featured-movie" >
                <div className="featured-movie__image" >
                    <Link to = {`/movies/${this.props.movie.id}`} >
                        <img src={this.props.movie.image} alt={this.props.movie.name} />
                    </Link>      
                </div>
                <div className="featured-movie__info" >
                    <p><b>{this.props.movie.name}</b></p>
                    <p>{this.props.movie.director}</p>
                    <p>{this.props.movie.released}</p>
                </div>
            </div>             
        )
    }
}
FeaturedMovie.propTypes = {
    movie : PropTypes.shape({
        director : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        released : PropTypes.string.isRequired,
        image: PropTypes.string.isRequied,
        id: PropTypes.string.isRequired
    }).isRequired
}
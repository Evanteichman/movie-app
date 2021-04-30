import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import heartIcon from '../images/heart-icon.png';

function OneMovie( {movie} ) {

    

    return (
        
        <div className="movie-info">
            {movie.poster_path === null ?
            <img className="poster" src={noPoster} alt="No poster available." /> : 
            <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster" />
            }
            <div className="overlay-up">
                <h2 className="vote">{movie.vote_average}</h2>
                <img className="heart" src={heartIcon} alt="Hart Icon"/>
                <h3 className="movie-title">{movie.title}</h3>
            </div>  
            <div className="overlay">
                <p className="release-date">{movie.release_date}</p>
                <p className="description" id="text">{movie.overview}</p> 
                {/* Not the correct location... */}
                <Link to='/'>More Info</Link>
            </div>
        </div>
        
    )
}

export default OneMovie;
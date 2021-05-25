import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import FavouriteHeart from './FavoriteHeart';

function OneMovie({ movie }) {

    return (

        <div className="movie-info">
            <Link to={`/movieinfo/${movie.id}`}>
                {movie.poster_path === null ?
                    <img className="poster" src={noPoster} alt="No poster available." /> :
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster" />
                }
            </Link>
            <div className="overlay-up">
                <h2 className="vote">{movie.vote_average}</h2>
                <FavouriteHeart movie={movie} />
                <Link to={`/movieinfo/${movie.id}`}><h3 className="movie-title">{movie.title}</h3></Link>
            </div>
            <div className="overlay">
                <p className="release-date">{movie.release_date}</p>
                <p className="description" id="text">{movie.overview}</p>
                <Link to={`/movieinfo/${movie.id}`}>More Info</Link>
            </div>
        </div>

    )
}

export default OneMovie;
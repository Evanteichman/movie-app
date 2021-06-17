import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { appTitle, TOKEN } from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';
import FavouriteHeart from '../components/FavoriteHeart';
import useGlobal from '../store/globalAppState';


const MovieInfo = () => {

    const { id } = useParams();
    const { genre } = useParams();
    const { movie } = useParams();
    const [movieData, setMovieData] = useState(null);
    const globalAndActions = useGlobal();
    const globalActions = globalAndActions[1];

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    useEffect(() => {
        globalActions.setSearchMovies([]);
        globalActions.setToggleSearch(false);

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + TOKEN
                }
            });
            const data = await res.json();

            setMovieData(data);
        }
        fetchMovies();
    }, [id]);

    return (
        <div className="wrapper">

            {movieData !== null &&
                <div className="movie-info-wrapper">
                    <div className="movie-poster">
                        {movieData.poster_path === null ?
                            <img className="single-poster" src={noPoster} alt="No poster available." /> :
                            <img className="single-poster" src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="Movie Poster" />
                        }
                        <FavouriteHeart className="movieinfo-fav" movie={movieData} />

                    </div>
                    <section className="movie-single-title">
                        <h2 className="title">{movieData.title}</h2>
                        <h2 className="rating">{movieData.vote_average}</h2>
                    </section>
                    <div className="info">
                        <section className="overview">
                            {movieData.overview == null ? <p>No Overview Available</p> : <p>{movieData.overview}</p>}
                        </section>
                        <section className="details">
                            <div>
                                <h3 className="release-date-title"> Release Date:</h3>
                                {movieData.release_date.length == 0 ? <p className="release-date">No Release Date</p> : <p className="release-date">{movieData.release_date}</p>}
                            </div>
                            <div>
                                <h3 className="run-time-title"> Run Time:</h3>
                                {movieData.runtime.length == 0 ? <p className="run-time">No Runtime Available</p> : <p className="run-time">{movieData.runtime} minutes</p>}
                            </div>
                            <div>
                                <h3 className="genre-title"> Genre(s):</h3>

                                {movieData.genres.length == 0 ? <p className="genre">No Genre Available</p> : <p className="genre">{movieData.genres[0].name}</p>}

                            </div>
                        </section>
                    </div>
                </div>
            }
        </div>


    );
}

export default MovieInfo;
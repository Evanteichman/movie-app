import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeartIcon from '../images/heart-icon.png';
import { appTitle, TOKEN } from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';
import heartIcon from '../images/heart-icon.png';
import setGenres from '../utilities/genres';
import FavouriteHeart from '../components/FavoriteHeart';


const MovieInfo = () => {

    const { id } = useParams();

    const { genre } = useParams();

    const { movie } = useParams();


    //const [category, setCategory] = useState('popular');

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    useEffect(() => {

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
            // console.log(data);
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
                <FavouriteHeart className="movieinfo-fav" movie={movieData}/>
                {/* <img className="heart-single" src={HeartIcon} alt="filled heart icon"/> */}

            </div>
            <section className="movie-single-title">
                <h2 className="title">{movieData.title}</h2>
                <h2 className="rating">{movieData.vote_average}</h2>
            </section>            
            <div className="info">
                <section className="overview">
                {movieData.overview == null ? <p>No Overview Available</p> : <p>{movieData.overview}</p> }
                </section> 
                <section className="details">  
                    <div>
                        <h3 className="release-date-title"> Release Date:</h3>
                        {movieData.release_date == null ? <p>No Release Date</p> : <p className="release-date">{movieData.release_date} minutes</p>} 
                    </div>
                    <div>
                        <h3 className="run-time-title"> Run Time:</h3>
                        {movieData.runtime == null ? <p>No Runtime Available</p> : <p className="run-time">{movieData.runtime} minutes</p>} 
                    </div>
                    <div>
                        <h3 className="genre-title"> Genre(s):</h3>
                        {!movieData.genres[0].name  ? <p>No Genre Available</p> : <p className="genre">{movieData.genres[0].name}</p>}
                    </div>                    
                </section>       
            </div>
        </div>
        }
        
    </div>

    );
}

export default MovieInfo;
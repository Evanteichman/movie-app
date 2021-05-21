import useGlobal from '../store/globalAppState';

function PageSearchResults() {
    const [globalState] = useGlobal();

    return (
        <div></div>
        // <div className="movie-info">
        //     {movies.poster_path === null ?
        //         <img className="poster" src={noPoster} alt="No poster available." /> :
        //         <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Movie Poster" />
        //     }
        //     <div className="overlay-up">
        //         <h2 className="vote">{movies.vote_average}</h2>
        //         <FavouriteHeart movie={movies} />
        //         {/* <img className="heart" src={heartIcon} alt="Hart Icon"/> */}
        //         <h3 className="movie-title">{movies.title}</h3>
        //     </div>
        //     <div className="overlay">
        //         <p className="release-date">{movies.release_date}</p>
        //         <p className="description" id="text">{movie.overview}</p>
        //         <Link to={`/movieinfo/${movies.id}`}>More Info</Link>
        //     </div>
        // </div>
    )
}

export default PageSearchResults;

import OneMovie from './OneMovie';



function Movies({ moviesData }) {
    return (
        <div className="movie-list">
            {moviesData.map(movie => <OneMovie key={movie.id} movie={movie} />)}
        </div>
    )
}

export default Movies;






//import FavoriteHeart from '../components/FavoriteHeart';
//import monsterHunter from '../images/monsterHunter.jpg';
//import heartIcon from '../images/heart-icon.png';
import OneMovie from './OneMovie';



function Movies( {moviesData} ) {
    return (
        <div className="movie-list">
            {moviesData.map(movie => <OneMovie key={movie.id} movie={movie} />)}
        </div>
    )
}

export default Movies;






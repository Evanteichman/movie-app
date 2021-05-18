import {useState, useEffect} from 'react';
import useGlobal from '../store/globalAppState';
import { Link } from 'react-router-dom';
import Nav from '../components/NavMenu';
import { appTitle } from '../globals/globals';
import RedDot from '../images/red-dot-poster.jpg';
import HeartIcon from '../images/heart-icon.png';
import FilledHeartIcon from '../images/filled-heart-icon.png';
import MovieInfo from '../pages/MovieInfo';
import '../scss/main.scss';
import Movies from '../components/Movies';


function Favourites() {

    const[globalState, globalActions] = useGlobal();
    const [favourited, setFavourited] = useState([]);

    useEffect(() => {
        globalActions.setFavs();
        setFavourited(true);
    }, [globalActions]);


    return (
        <div className="wrapper">
        <h1 className="favourites-title">Favourites</h1>




        {globalState.favs.length === 0 ? 
        <div className="no-favourites">
            <h3>No Favourites yet. Click the <img className="no-fav-heart"src={HeartIcon} alt="heart-icon" /> icon to add movies to your favourites list!</h3>
        </div>:
        (favourited && <Movies moviesData={globalState.favs} checkFav={true}/>)}

        
             </div> 
     





    );
}

export default Favourites;
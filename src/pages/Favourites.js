import { Link } from 'react-router-dom';
import Nav from '../components/NavMenu';
import { appTitle } from '../globals/globals';
import RedDot from '../images/red-dot-poster.jpg';
import HeartIcon from '../images/heart-icon.png';
import FilledHeartIcon from '../images/filled-heart-icon.png';
import MovieInfo from '../pages/MovieInfo';

const Favourites = () => {

    return (
        <div className="wrapper">
        <h1>Favourites</h1>
        <div className="no-favourites">
            <h3>No Favourites yet. Click the <img src={HeartIcon} alt="heart icon" /> icon to add movies to your favourites list!</h3>
        </div>


        <div className="movie-poster">
             <img src={RedDot} alt="red dot poster" />
             <div className="overlay">
                 <h3 className="title">Red Dot</h3>
                 <h3 className="rating">6.2</h3>
                 <img src={FilledHeartIcon} alt="filled heart icon"/>
                 <h4 className="release-date"> February 11, 2021</h4>
                 <p className="movie-info">On a hiking trip to rekindle their marriage, a couple finds themselves fleeing for their lives in the unforgiving wilderness from an... <Link to="/movieinfo">MORE INFO</Link> 
                 </p> 
                
             </div>
        </div>



</div>







    );
}

export default Favourites;
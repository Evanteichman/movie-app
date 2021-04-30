import { Link } from 'react-router-dom';
import Nav from '../components/NavMenu';
import { appTitle } from '../globals/globals';
import RedDot from '../images/red-dot-poster.jpg';
import HeartIcon from '../images/heart-icon.png';
import FilledHeartIcon from '../images/filled-heart-icon.png';
import MovieInfo from '../pages/MovieInfo';
import '../scss/main.scss';


const Favourites = () => {
    const MAX_LENGTH = 250;


    return (
        <div className="wrapper">
        <h1>Favourites</h1>
        <div className="no-favourites hidden">
            <h3>No Favourites yet. Click the <img src={HeartIcon} alt="heart icon" /> icon to add movies to your favourites list!</h3>
        </div>

        <div className="favourites-list">

        <div className="movie-info">
             <img class="poster" src={RedDot} alt="red dot poster" />
             <div className="overlay-up">
                 <h2 className="rating">6.2</h2>
                 
                 <h3 className="movie-title">Red Dot</h3>
                 
                 <img className="heart" src={FilledHeartIcon} alt="filled heart icon"/>
                 </div>
                 <div className="overlay">
                 <h4 className="release-date"> February 11, 2021</h4>
                 {/* below will attempt to shorten description to 250 characters */}
                    {/* {text.length > MAX_LENGTH ? (
                        <div>
                            {`${movie.description}`}
                        </div>
                                        ):<div></div>} */}

                 <p className="description">
                     
                     On a hiking trip to rekindle their marriage, a couple finds themselves fleeing for their lives in the unforgiving wilderness from an... <Link to="/movieinfo">MORE INFO</Link> 
                 </p> 
                 </div>
                 </div>

                 <div className="movie-info">
             <img class="poster" src={RedDot} alt="red dot poster" />
             <div className="overlay-up">
                 <h2 className="rating">6.2</h2>
                 
                 <h3 className="movie-title">Red Dot</h3>
                 
                 <img className="heart" src={FilledHeartIcon} alt="filled heart icon"/>
                 </div>
                 <div className="overlay">
                 <h4 className="release-date"> February 11, 2021</h4>
                 <p className="description">On a hiking trip to rekindle their marriage, a couple finds themselves fleeing for their lives in the unforgiving wilderness from an... <Link to="/movieinfo">MORE INFO</Link> 
                 </p> 
                 </div>
                
             </div>

             <div className="movie-info">
             <img class="poster" src={RedDot} alt="red dot poster" />
             <div className="overlay-up">
                 <h2 className="rating">6.2</h2>
                 
                 <h3 className="movie-title">Red Dot</h3>
                 
                 <img className="heart" src={FilledHeartIcon} alt="filled heart icon"/>
                 </div>
                 <div className="overlay">
                 <h4 className="release-date"> February 11, 2021</h4>
                 <p className="description">On a hiking trip to rekindle their marriage, a couple finds themselves fleeing for their lives in the unforgiving wilderness from an... <Link to="/movieinfo">MORE INFO</Link> 
                 </p> 
                 </div>
                
             </div>
             </div>
        </div>











    );
}

export default Favourites;
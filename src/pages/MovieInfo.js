import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { appTitle } from '../globals/globals';
import RedDot from '../images/red-dot-poster.jpg';
import HeartIcon from '../images/heart-icon.png';
import FilledHeartIcon from '../images/filled-heart-icon.png';

const MovieInfo = () => {

    return (
        <div className="wrapper">
        <h1>Movie Info</h1>
        <div className="no-favourites">
           
        </div>


        <div className="movie-poster">
             <img src={RedDot} alt="red dot poster" />
             <div className="movie-information">
                 <h3 className="title">Red Dot</h3>
                 <h3 className="rating">6.2</h3>
                 <img src={HeartIcon} alt="filled heart icon"/>
                    <p>On a hiking trip to rekindle their marriage, a couple finds themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.</p>





                 <h4 className="release-date-title"> Release Date:</h4>
                  <p className="release-date">February 11, 2021</p>
                  <h4 className="run-time-title"> Run Time:</h4>
                  <p className="run-time">86 minutes</p>
                  <h4 className="genre-title"> Genre(s):</h4>
                  <p className="genre">Drama, Thriller, Horror</p>
                
             </div>
        </div>



</div>







    );
}

export default MovieInfo;
//const imageFolderPath = process.env.PUBLIC_URL + '/images/';
import monsterHunter from '../images/monsterHunter.jpg';
import heartIcon from '../images/heartIcon.png'
import '../scss/main.scss';

function Movies() {
    return (
        <div className='movie-list'>
            <div className='movie-info'>
                <img className="poster" src={monsterHunter} alt="'Monster Hunter' movie poster."/>
                <div className="overlay-up">
                    <h2>7.2</h2>
                    <img className="heart" src={heartIcon} alt="Hart Icon"/>
                    <h3 className="movie-title">Monster Hunter</h3>
                </div>
                <div className="overlay">
                    <p className="release-date">December 3, 2020</p>
                    <p className="description">A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity... <a href="#">More Info</a> </p>
                </div>
            </div>   
            <div className='movie-info'>
                <img className="poster" src={monsterHunter} alt="'Monster Hunter' movie poster."/>
                <div className="overlay-up">
                    <h2>7.2</h2>
                    <img className="heart" src={heartIcon} alt="Hart Icon"/>
                    <h3 className="movie-title">Monster Hunter</h3>
                </div>
                <div className="overlay">
                    <p className="release-date">December 3, 2020</p>
                    <p className="description">A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity... <a href="#">More Info</a> </p>
                </div>
            </div> 
            <div className='movie-info'>
                <img className="poster" src={monsterHunter} alt="'Monster Hunter' movie poster."/>
                <div className="overlay-up">
                    <h2>7.2</h2>
                    <img className="heart" src={heartIcon} alt="Hart Icon"/>
                    <h3 className="movie-title">Monster Hunter</h3>
                </div>
                <div className="overlay">
                    <p className="release-date">December 3, 2020</p>
                    <p className="description">A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity... <a href="#">More Info</a> </p>
                </div>
            </div> 
            <div className='movie-info'>
                <img className="poster" src={monsterHunter} alt="'Monster Hunter' movie poster."/>
                <div className="overlay-up">
                    <h2>7.2</h2>
                    <img className="heart" src={heartIcon} alt="Hart Icon"/>
                    <h3 className="movie-title">Monster Hunter</h3>
                </div>
                <div className="overlay">
                    <p className="release-date">December 3, 2020</p>
                    <p className="description">A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity... <a href="#">More Info</a> </p>
                </div>
            </div> 
        </div>
    )
}

export default Movies;

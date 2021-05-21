import useGlobal from '../store/globalAppState';
import heartFull from '../images/heart-full.png';
import heartEmpty from '../images/heart-icon.png';


function FavouriteHeart({ movie }) {
    const [globalState, globalActions] = useGlobal();

    function isFav(id){
        if(globalState.favs.length === 0){
            return false;
        }

        return globalState.favs.some((movie) => movie.id === id);
    }
      
    return( 
        <div className="fav-heart-icon">
            {isFav(movie.id) ?
                <button className="btn-favourite" 
                        onMouseDown={ (e) => { e.preventDefault(); }}

                        onClick={() => { globalActions.removeFav(movie.id); }}>

                    <span className="sr-only">Remove favourited movies</span>

                    <img src={heartFull} alt="Full Heart" />
                </button> :
                <button className="btn-favourite" 
                        onMouseDown={ (e) => { e.preventDefault(); }}

                        onClick={() => { globalActions.addFav(movie); }}>

                    <span className="sr-only">Add to favourited movies</span>
                    
                    <img src={heartEmpty} alt="Empty Heart" />
                </button>
            }
        </div>
    );
}

export default FavouriteHeart;
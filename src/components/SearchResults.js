import React from 'react';
import { useEffect, useState } from 'react';
import Searchbox from './Searchbox';
import Header from './Header';
import useGlobal from '../store/globalAppState';
import noPoster from '../images/no-movie-poster.jpg';
import { Link } from 'react-router-dom';


function SearchResults() {
    const globalAndActions = useGlobal();
    const globalActions = globalAndActions[1];
    const [globalState] = useGlobal();




    return (

        <div>
            {console.log(globalState.searchResults)}

            {globalState.searchResults && globalState.searchResults.map((movies) => (<div>

                <Link className="movie-link" to={`/movieinfo/${movies.id}`} >

                    <div className="">
                        {movies.poster_path === null ?
                            <img className="search-poster" src={noPoster} alt="No poster available." /> :
                            <img className="search-poster" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Movie Poster" />}

                    </div>

                    <div className="search-info">
                        <div className="movie-link-title">
                            {movies.title}
                        </div>
                        <div>
                            <p className="release-info">{movies.release_date}</p>
                        </div>
                    </div>

                </Link>

            </div>))
            }
        </div >
    )
}


export default SearchResults;
import React from 'react';
import { useEffect, useState } from 'react';
import Searchbox from './Searchbox';
import Header from './Header';
import useGlobal from '../store/globalAppState';
import noPoster from '../images/no-movie-poster.jpg';
import { Link } from 'react-router-dom';


function SearchResults() {
    const [globalState] = useGlobal();



    return (

        <div>
            {console.log(globalState.searchResults)}

            {globalState.searchResults && globalState.searchResults.map((movies) => (<div>

                <Link to={`/movieinfo/${movies.id}`}>
                    <div className="searchLink">
                        {movies.title}
                    </div>

                    {/* {movies.poster_path === null ?
                    <img className="poster" src={noPoster} alt="No poster available." /> :
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Movie Poster" />} */}



                </Link>



            </div>))}
        </div>
    )
}


export default SearchResults;
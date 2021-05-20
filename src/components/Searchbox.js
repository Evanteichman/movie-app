import { react, UseState } from 'react';
import useGlobal from '../store/globalAppState';
import { NavLink } from 'react-router-dom';
import SearchResults from './SearchResults';

const Searchbox = ({ getSearch }) => {
    // const [globalState] = useGlobal();

    // const topFive = globalState.searchResults.splice(0, 5);

    // console.log(topFive);

    return (
        <div>
            <div className="search">
                <div className="container">
                    <input
                        type="text"
                        placeholder="Search . . ."
                        onChange={(event) => getSearch(event.target.value)} />

                </div>
            </div>
            <div className="search-results-container">
                <SearchResults />
            </div>
        </div>
    )
}

export default Searchbox;
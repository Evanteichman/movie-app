import SearchResults from './SearchResults';
import { useEffect, useState, useRef } from 'react';
import useGlobal from '../store/globalAppState';

const Searchbox = ({ getSearch }) => {
    // const [toggleSearch, setToggleSearch] = useState(false);
    const globalAndActions = useGlobal();
    const globalActions = globalAndActions[1];
    const globalState = globalAndActions[0];
    const [searchValue, setSearchValue] = useState('');


    const toggleSearchBar = () => {
        globalActions.setToggleSearch(!globalState.toggleSearch);
    }

    const node = useRef();
    const nodeInput = useRef()

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click 
        globalActions.setToggleSearch(false);
        // nodeInput.value ="";
    };

    const handleChange = (e) =>{
        setSearchValue(e.target.value);
        getSearch(e.target.value);
    }

    const clearInput = () =>{
        setSearchValue("");
    }


    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div ref={node}>

            <svg className="search-icon" onClick={toggleSearchBar} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>

            <div className={!globalState.toggleSearch ? 'search-content' : 'search-content active'}>
                <div>
                    <input ref={nodeInput} type="text" placeholder="Search movie titles..."
                        onChange={handleChange} value={searchValue} />
                </div>
            </div>

            <div className="search-results-container">
                <SearchResults clearInput={clearInput} />
            </div>
        </div>
    )
}

export default Searchbox;
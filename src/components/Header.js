import { useEffect, useState } from 'react';
import Nav from './NavMenu';
import Logo from '../images/fresh-flix.png';
import Searchbox from './Searchbox';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import useGlobal from '../store/globalAppState';

function Header() {

    const [nav, setNav] = useState(false);
    // const [searchValue, setSearchValue] = useState('');
    // const [movies, setMovies] = useState([]);
    const globalAndActions = useGlobal();
    const globalActions = globalAndActions[1];
    const [globalState] = useGlobal();

    const toggleNav = () => {
        setNav(!nav);
    }
    function getSearch(searchValue) {

        const getMovieRequest = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=d53a15d5d3ae63a24027095be1b24d94&language=en-US&query=${searchValue}&page=1&include_adult=false`;

            const response = await fetch(url);
            const responseJson = await response.json();
            // const topFive = responseJson.results.splice(0, 5);

            if (responseJson) {
                globalActions.setSearchMovies(responseJson.results);
            } else {
                return;
            }
        }
        getMovieRequest();
    }

    return (
        <div>
            <header>
                <div className="menu-wrapper" onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={toggleNav}>
                    <div className={!nav ? 'hamburger-menu' : 'hamburger-menu animate'}></div>
                </div>

                <div className="site-logo">
                    <NavLink to="/" exact><img className="logo" src={Logo} alt="Fresh Flix Logo" /></NavLink>
                </div>

                <Nav toggleNav={nav} />
                <Searchbox getSearch={getSearch} />


            </header>



        </div>
    );
}

export default Header;
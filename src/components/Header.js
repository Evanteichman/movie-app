import { useEffect, useState } from 'react';
import Nav from './NavMenu';
import Logo from '../images/fresh-flix.png';
import Searchbox from './Searchbox';

const Header = () => {

    const [nav, setNav] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);

    const toggleNav = () => {
        setNav(!nav);
    }

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d53a15d5d3ae63a24027095be1b24d94&language=en-US&query=${searchValue}&page=1&include_adult=false`;

        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(url);
        console.log(responseJson);


        // in tutorial state is used here, try to get everything working the console then we can work on outputting the data
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);


    return (
        <div>
            <header>
                <div className="menu-wrapper" onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={toggleNav}>
                    <div className={!nav ? 'hamburger-menu' : 'hamburger-menu animate'}></div>
                </div>
                <div className="site-logo">

                    <img className="logo" src={Logo} alt="Fresh Flix Logo" />

                </div>
                <Nav toggleNav={nav} />
                <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
                {/* <div className="search">
                    <div className="container">
                        <input type="text" placeholder="Search . . ." required/>
                    </div>
                </div> */}

            </header>

        </div>
    );
}

export default Header;
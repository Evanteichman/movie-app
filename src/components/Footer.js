import { getYear } from '../utilities/utilities';
import { NavLink } from 'react-router-dom';
import TMDBLogo from '../images/logo.svg';
import Logo from '../images/fresh-flix.png';

const Footer = ({ copyright, author1, author2, author3 }) => (
    <footer>
        <div className="footer-logo">
            <NavLink to="/" exact><img className="logo" src={Logo} alt="Fresh Flix Logo" /></NavLink>
        </div>

        <div className="copyright-names">

            <p>&copy; {copyright} Fresh Flix </p>
            <p> Built by: <NavLink to="/" >{author1}</NavLink>, <NavLink to="/" >{author2}</NavLink>, and <NavLink to="/" >{author3}</NavLink></p>
        </div>

        <div className="footer-nav">
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favourites">Favourites</NavLink></li>
        </div>

        <div className="tmdb-logo">
            <p>For Educational Purposes Only</p>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                <img className="tmdb-footer-logo" src={TMDBLogo} alt="The Movie Database logo"></img>
            </a>
        </div>
    </footer>
);

Footer.defaultProps = {
    author1: 'Kaaren Corrigan',
    author2: 'Elena Ungureanu',
    author3: 'Evan Teichman',
    copyright: getYear()
}

export default Footer;
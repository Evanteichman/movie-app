import { useState } from 'react';
import Nav from './NavMenu';
import Logo from '../images/fresh-flix.png';

const Header = (  ) => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }
    return (
        <div>
            <header>
                <div className="menu-wrapper"onMouseDown={(e) => { e.preventDefault(); }}
                        onClick={toggleNav}>
                    <div className={!nav ? 'hamburger-menu' : 'hamburger-menu animate'}></div>
                </div>
                <div className="site-logo">

                    <img className="logo" src={Logo} alt="Fresh Flix Logo"/>

                </div>
                <Nav toggleNav={nav}/>
                <div className="search">
                    <div className="container">
                        <input type="text" placeholder="Search . . ." required/>
                    </div>
                </div>
                
            </header>

        </div>
    );
}

export default Header;
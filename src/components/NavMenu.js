import { NavLink } from 'react-router-dom';

const Nav = ( {toggleNav} ) => {

    // function closeNav(e){
    //     if(window.innerWidth < 600){
    //         handleShowHideNav();
    //     }else{
    //         e.target.blur();
    //     }
    // }
    
    return (
        <nav className={toggleNav ? "open" : "close"} onClick={toggleNav}>
            <ul className="nav-menu">
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/favourites">Favourites</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;
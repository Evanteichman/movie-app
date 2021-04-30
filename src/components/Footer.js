import { getYear } from '../utilities/utilities';
import { NavLink } from 'react-router-dom';

const Footer = ({ copyright, author1, author2, author3 }) => (
	<footer>
        <p>&copy; <NavLink to="/" >{author1}</NavLink></p>
        <p>&copy; <NavLink to="/" >{author2}</NavLink></p>
        <p>&copy; <NavLink to="/" >{author3}</NavLink></p>
    </footer>
);

Footer.defaultProps = {
    author1: 'Kaaren Corrigan',
    author2: 'Elena Ungureanu', 
    author3: 'Evan Teichman',
    copyright: getYear()
}

export default Footer;
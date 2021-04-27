import { getYear } from '../utilities/utilities';

const Footer = ({ copyright, author }) => (
	<footer>
        <p>&copy; {author} {copyright} </p>
    </footer>
);

Footer.defaultProps = {
    author: 'Kaaren Corrigan',
    copyright: getYear()
}

export default Footer;
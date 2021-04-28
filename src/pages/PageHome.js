import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Movies from '../components/Movies';
import '../scss/main.scss';

const PageHome = () => {

    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

    return (
        <section>
            <Banner />
            <Categories />
            <Movies />
        </section>
    );

};

export default PageHome;
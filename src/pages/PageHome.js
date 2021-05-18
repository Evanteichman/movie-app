import { useEffect, useState } from 'react';
import { appTitle, TOKEN, apiKey } from '../globals/globals';
// import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Movies from '../components/Movies';
import Slideshow from '../components/Slideshow';
import SearchResults from './SearchResults';
import SearchBox from '../components/Searchbox';


function PageHome() {

    const [category, setCategory] = useState('popular');
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + TOKEN
                }
            });
            const moviesData = await res.json();
            const first12Movies = moviesData.results.splice(0, 12);
            // console.log(first12Movies);
            setMoviesData(first12Movies);


        }

        //   console.log(`https://api.themoviedb.org/3/movie/popular?api_key=d53a15d5d3ae63a24027095be1b24d94&language=en-US&page=1`);

        fetchMovies();

    }, [category]);


    const handleChangeCategory = (category) => {
        setCategory(category);
    }

    return (
        <main>
            <section>
                <Slideshow />
            </section>
            <section>
                <Categories
                    category={category}
                    handleChangeCategory={handleChangeCategory} />
            </section>
            <section>
                {moviesData !== null && <Movies moviesData={moviesData} />}
            </section>
            <SearchResults />
        </main>
    );

};

export default PageHome;
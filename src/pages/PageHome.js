import { useEffect, useState } from 'react';
import { appTitle, TOKEN } from '../globals/globals';
import Categories from '../components/Categories';
import Movies from '../components/Movies';
import Slideshow from '../components/Slideshow';

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
            setMoviesData(first12Movies);
        }
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
        </main>
    )
}

export default PageHome;
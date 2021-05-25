import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Logo from '../images/logo.svg'

function PageAbout() {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main>
            <section className="about">
                <h2>About Fresh Flix</h2>
                <div className="about-us">
                    <p>Welcome to Fresh Flix! This site is a dynamic movie database, created by <span className="tmdb">Kaaren</span>, <span className="tmdb">Elena</span> and <span className="tmdb">Evan</span>, that allows you to discover new movies based on popularity, ratings and release date.</p>

                    <p>Here you can find out more about the movie's plot, curent rating, release date, and even favourite the movies you want to remember!</p>

                    <p>Clicking the little red heart on the movie poster will automatically add that movie to your favourites list, so you can keep them all in one, easy to find, place.</p>
                </div>
                <div class="tmdb-section about-us">
                    <p>Fresh Flix uses the <span className="tmdb">TMDb</span> API but is not endorsed or certified by <span className="tmdb"> TMDb</span>.</p>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={Logo} alt="The Movie Database logo"></img>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default PageAbout
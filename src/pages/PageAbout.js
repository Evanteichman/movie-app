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
                    <p>Welcome to Fresh Flix! This site is a dynamic movie database that allows you to discover new movies based on popularity, ratings ans release date.</p>
                    <p>Here you can find out more about the movie's plot, curent rating, release date, and even fvorite the movies you want to remember!</p>
                    <p>Clicking the little red heart on the movie poster will automatically add that movie to your favorites list, so you can keep them all in one, easy to find, place.</p>
                </div>
                <div class="tmdb-section about-us">
                    <p>Fresh Flix uses the <span className="tmbd">TMDb</span> API but is not endorsed or certified by <span className="tmbd"> TMDb</span>.</p>
                    <p><img className="logo" src={Logo} alt="The Movie Database logo"></img></p> 
                </div>
            </section>
       </main>
    )
}

export default PageAbout
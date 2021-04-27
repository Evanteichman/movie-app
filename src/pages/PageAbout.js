import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

function PageAbout() {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main>
            <section>
                <h2>About Fresh Flix</h2>
                <p>Welcome to Fresh Flix! This site is a dynamic movie database that assows you to discover new movies based on popularity, ratings ans release date.</p>
                <p>Here you can find out more about the movie's plot, curent rating, release date, and even fvorite the movies you want to remember!</p>
                <p>Clicking the little red heart on the movie poster will automatically add that movie to your favorites list, so you can keep them all in one, easy to find, place.</p>
            </section>
        </main>
    )
}

export default PageAbout
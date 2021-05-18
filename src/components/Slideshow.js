import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { appTitle, TOKEN, apiKey } from '../globals/globals';
import PageHome from '../pages/PageHome';



function Slideshow() {

  const [index, setIndex] = useState(0);
  const [moviesData, setMoviesData] = useState(null);
  const [backdrops, setBackDrops] = useState(null);
  const timeoutRef = useRef(null);
  const delay = 10000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  // test

  useEffect(() => {

    const fetchMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + TOKEN
        }
      });
      const moviesData = await res.json();
      const topFiveMovies = moviesData.results.splice(0, 5);
      // console.log(topFiveMovies);
      setMoviesData(topFiveMovies);
      // console.log(topFiveMovies[0].backdrop_path);
      const imageArray = topFiveMovies.map(movie => `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);
      // console.log(imageArray);
      setBackDrops(imageArray);

      resetTimeout();
      timeoutRef.current = setTimeout(() =>
        setIndex((prevIndex) =>
          prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
        ),
        delay
      );

    }

    fetchMovies();

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      {backdrops !== null && <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {backdrops.map((backdrop, index) => (
          <div
            className="slide"
            key={index}

          ><img src={backdrop} alt="movie backdrop" /></div>
        ))}
      </div>}

      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))} */}
      {/* </div> */}
    </div>
  );
}

// ReactDOM.render(<Slideshow />, document.getElementById("App"));

export default Slideshow;

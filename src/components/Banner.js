import React from 'react';

function Banner({ splashImage, splashAlt }) {
    return (
        <div className="banner">
            <img src={`https://image.tmdb.org/t/p/w500/${splashImage}`} alt={splashAlt} />

        </div>
    )
}

export default Banner;





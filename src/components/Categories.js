import React from 'react';
import '../scss/main.scss';

const categories = ['popular', 'top_rated', 'upcoming', 'now_playing']
const categoryName = ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'];

const makeCategoryOption = (categories) => {
    return categories.map((categoryGroup, i) => {
        return (
            <div className="button">
                <button key={i} value={categoryGroup}>{categoryName[i]}</button>
            </div>
        )
    });
}

const Categories = (props) => {
    const handleChangeCategory = (e) => {
        e.preventDefault();
        const loc = e.target.value;
        props.handleChangeCategory(loc);
    }
    return (
        <div className="categories">

            <div name="selectCategories"
                id="selectCategories"
                className="selection"
                onClick={handleChangeCategory}>
                {makeCategoryOption(categories, props.category)}
            </div>

        </div>

    )
}

export default Categories

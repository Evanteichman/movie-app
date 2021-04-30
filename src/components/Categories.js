import React from 'react';
import '../scss/main.scss';

const categories = ['popular', 'top_rated', 'upcoming', 'now_playing']
const categoryName = ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'];

const makeCategoryOption = (categories) => {
   return categories.map((categoryGroup, i) => {
       return(
           <option key={i} value={categoryGroup}>{categoryName[i]}</option>
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
            <form>
                <select name="selectCategories" 
                        id="selectCategories"
                        className="selection"
                        onChange={handleChangeCategory}>
                    {makeCategoryOption(categories, props.category)}        
                </select>
            </form>
        </div>

    )
}

export default Categories

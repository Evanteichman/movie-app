import '../scss/main.scss';

function CategoriesButton() {
    return (
        <div className="categories">
            <form action="">
                <select name="selectCategories" id="selectCategories" className="selection">
                    <option value="popular">Popular</option>
                    <option value="top-rated">Top Rated</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="now-playing">Now Playing</option>
                </select>
            </form>
        </div>
    )
}

export default CategoriesButton

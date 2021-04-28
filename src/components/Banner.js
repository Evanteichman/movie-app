import banner from '../images/banner.jpg';
import '../scss/main.scss';

function Banner() {
    return (
        <div className="banner">
            <img src={banner} alt="'Monster Hunter' movie poster."/>
        </div>
    )
}

export default Banner

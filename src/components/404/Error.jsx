import "../../error.css";
import error2 from "../../../public/404.png"

export default function Error() {
    return (                
        <div className="stars bg-purple">
            <div className="custom-navbar">
                <div className="brand-logo">
                    <img src="http://salehriaz.com/404Page/img/logo.svg" width="80px" alt="Logo"/>
                </div>
            </div>
            <div className="central-body">
                <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="404"/>
                <a href="http://salehriaz.com/404Page/404.html" className="btn-go-home" target="_blank" rel="noopener noreferrer">
                    GO BACK HOME
                </a>
            </div>
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="Rocket"/>
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="Earth"/>
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="Moon"/>
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="Astronaut"/>
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
        </div>
    );
}

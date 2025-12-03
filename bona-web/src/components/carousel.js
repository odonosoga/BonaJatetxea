import React from "react";
import car1 from "../img/car1.jpg";
import car2 from "../img/car2.jpg";
import car3 from "../img/car3.jpg";
import { Image } from "react-bootstrap";

const CustomCarousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">

            <div className="carousel-inner">

                <div className="carousel-item active">
                    <Image 
                        src={car1} 
                        className="d-block" 
                        style={{ width: "100vw", height: "100vh" }}
                        alt=""
                    />
                </div>

                <div className="carousel-item">
                    <Image 
                        src={car2} 
                        className="d-block" 
                        style={{ width: "100vw", height: "100vh" }}
                        alt=""
                    />
                </div>

                <div className="carousel-item">
                    <Image 
                        src={car3} 
                        className="d-block" 
                        style={{ width: "100vw", height: "100vh" }}
                        alt=""
                    />
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>
    );
};

export default CustomCarousel;

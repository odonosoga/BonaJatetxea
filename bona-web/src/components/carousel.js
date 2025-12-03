import React from "react";
import car1 from "../img/car1.jpg";
import car2 from "../img/car2.jpg";
import car3 from "../img/car3.jpg";

const CustomCarousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fullscreen"
      data-bs-ride="carousel"   // opcional: autoplay
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={car1} className="d-block w-100" alt="Primera imagen" style={{ height: "70vh", objectFit: "cover" }} />
        </div>
        <div className="carousel-item">
          <img src={car2} className="d-block w-100" alt="Segunda imagen" style={{ height: "70vh", objectFit: "cover" }}/>
        </div>
        <div className="carousel-item">
          <img src={car3} className="d-block w-100" alt="Tercera imagen" style={{ height: "70vh", objectFit: "cover" }}/>
        </div>
      </div>

      {/* Flechas */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>

      {/* Puntos indicadores (opcional pero recomendado) */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  );
};

export default CustomCarousel;
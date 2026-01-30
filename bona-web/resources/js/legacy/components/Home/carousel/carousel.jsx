import React, { useEffect } from "react";
import car1 from "../../../img/car1.jpg";
import car2 from "../../../img/car2.jpg";
import car3 from "../../../img/car3.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CustomCarousel = () => {
  useEffect(() => {
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement && window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 5000,
        wrap: true,
        touch: true
      });
      return () => carousel.dispose();
    }
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fullscreen"
      data-bs-ride="carousel"
    >
      {/* Imágenes con overlay claro */}
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <img 
            src={car1} 
            className="d-block w-100" 
            alt="Primera imagen" 
            style={{ 
              height: "85vh", 
              objectFit: "cover",
              filter: "brightness(0.65) contrast(1.05)"
            }} 
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></div>
        </div>
        
        <div className="carousel-item position-relative">
          <img 
            src={car2} 
            className="d-block w-100" 
            alt="Segunda imagen" 
            style={{ 
              height: "85vh", 
              objectFit: "cover",
              filter: "brightness(0.65) contrast(1.05)"
            }} 
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></div>
        </div>
        
        <div className="carousel-item position-relative">
          <img 
            src={car3} 
            className="d-block w-100" 
            alt="Tercera imagen" 
            style={{ 
              height: "85vh", 
              objectFit: "cover",
              filter: "brightness(0.65) contrast(1.05)"
            }} 
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></div>
        </div>
      </div>

      {/* CUADRADO MUY ANCHO Y ULTRA CENTRADO - POCO TRANSPARENTE */}
      <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle z-3">
        <div className="text-center bg-white bg-opacity-80 p-5 rounded-5 shadow-xl border border-white border-4 mx-auto" 
             style={{ 
               width: "85%", 
               maxWidth: "900px",
               minWidth: "700px",
               backdropFilter: "blur(20px)"
             }}>
          
          <h1 className="display-2 fw-bold text-dark mb-4">Bona Jatetxea</h1>
          
          <p className="text-dark mb-5 fs-3 fw-semibold lh-lg">
            La mejor cocina tradicional vasca con ingredientes de máxima calidad
          </p>
          
          {/* BOTONES */}
          <div className="d-flex gap-4 justify-content-center flex-wrap">
            <a href="/login" className="btn btn-outline-dark btn-xl px-6 py-3 fw-bold fs-4 shadow-lg">
              Iniciar Sesión
            </a>
            <a href="/reservas" className="btn btn-dark btn-xl px-6 py-3 fw-bold fs-4 shadow-lg">
              Reservar Mesa
            </a>
          </div>
          
          <div className="mt-5 text-muted fs-6">
            Teléfono: 945 123 456 | Gasteiz, Araba
          </div>
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

      {/* Indicadores */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"/>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"/>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"/>
      </div>
    </div>
  );
};

export default CustomCarousel;

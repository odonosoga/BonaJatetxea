import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import car1 from "../../../img/car1.jpg";
import car2 from "../../../img/car2.jpg";
import car3 from "../../../img/car3.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './carousel.css';

const CustomCarousel = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement && window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 5,
        wrap: true,
        touch: true
      });
      return () => carousel.dispose();
    }
  }, []);

  return (
    <div id="carouselExample" className="carousel slide carousel-fullscreen" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <img src={car1} className="d-block w-100" alt="Primera imagen" style={{ height: "83vh", objectFit: "cover", filter: "brightness(0.7) contrast(1.1)" }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-20"></div>
        </div>
        <div className="carousel-item position-relative">
          <img src={car2} className="d-block w-100" alt="Segunda imagen" style={{ height: "83vh", objectFit: "cover", filter: "brightness(0.7) contrast(1.1)" }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-20"></div>
        </div>
        <div className="carousel-item position-relative">
          <img src={car3} className="d-block w-100" alt="Tercera imagen" style={{ height: "83vh", objectFit: "cover", filter: "brightness(0.7) contrast(1.1)" }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-20"></div>
        </div>
      </div>

      {/* 🎯 TARJETA COMPACTA - TIPOGRAFÍA ESPECIAL SOLO EN TÍTULO */}
      <div className="carousel-caption d-flex justify-content-center">
        <div className="text-center p-5 rounded-5 shadow-xl mx-auto position-relative glass-card" style={{ width: "95%", maxWidth: "1100px", minWidth: "800px" }}>
          
          {/* TÍTULO - ÚNICO CON TIPOGRAFÍA ESPECIAL Y COLOR ROJO */}
          <h1 className="display-2 fw-bold mb-4 drop-shadow-text special-font" 
              style={{ 
                fontFamily: "'Playfair Display', 'Georgia', serif", 
                fontWeight: "800",
                color: "#dc3545"
              }}>
            {t('carousel.title')}
          </h1>
          
          {/* HORARIOS - DÍAS TRADUCIBLES + HORAS FIJAS */}
          <div className="mb-5 text-white fw-semibold drop-shadow-text horarios-section">
            <i className="fas fa-clock me-3 text-warning"></i>
            {t('carousel.hours.monThu')} 13:00-16:00 | 20:30-23:00<br/>
            {t('carousel.hours.friSat')} 13:00-16:30 | 20:30-23:30<br/>
            {t('carousel.hours.sun')} 13:00-16:00
          </div>

          {/* BOTONES CENTRADOS - MISMO TAMAÑO SIEMPRE */}
          <div className="d-flex gap-4 justify-content-center flex-wrap mx-auto w-100 mb-4">
            <a href="/login" className="btn btn-outline-company btn-xl flex-fill text-nowrap px-6 py-3 fw-bold fs-4 shadow-lg company-btn min-width-btn">
              {t('carousel.login')}
            </a>
            <a href="/reservas" className="btn btn-company btn-xl flex-fill text-nowrap px-6 py-3 fw-bold fs-4 shadow-lg company-btn min-width-btn">
              {t('carousel.reserve')}
            </a>
          </div>

          {/* CONTACTO SIMPLE */}
          <div className="text-white fs-6 drop-shadow-text opacity-90">
            {t('carousel.contact')}
          </div>
        </div>
      </div>

      {/* BOTONES NAVEGACIÓN */}
      <button className="carousel-control-prev company-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{t('carousel.prev')}</span>
      </button>
      <button className="carousel-control-next company-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{t('carousel.next')}</span>
      </button>

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active company-indicator" aria-current="true" aria-label={t('carousel.slide1')}/>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" className="company-indicator" aria-label={t('carousel.slide2')}/>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" className="company-indicator" aria-label={t('carousel.slide3')}/>
      </div>
    </div>
  );
};

export default CustomCarousel;

import React from "react";
import { BsWhatsapp, BsInstagram, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ff8181" }} className="text-dark py-4 py-md-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* Izquierda - Info del restaurante */}
          <div className="col-12 col-md-5 col-lg-4 text-center text-md-start mb-3 mb-md-0">
            <h4 className="fw-bold mb-2">Bona Jatetxea</h4>
            <p className="mb-0 small">
              Kale Nagusia, 123 • Donostia<br />
              <strong>943 123 456</strong> • <a href="mailto:info@bonarestaurante.com" className="text-dark text-decoration-none">info@bonarestaurante.com</a>
            </p>
          </div>

          {/* Centro/Derecha - Redes sociales en una sola línea */}
          <div className="col-12 col-md-7 col-lg-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-4 flex-wrap">
              <a
                href="https://wa.me/34666123456"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center gap-2 fw-bold"
              >
                <BsWhatsapp size={26} />
                <span className="d-none d-sm-inline">666 123 456</span>
              </a>

              <a
                href="https://instagram.com/bona_jatetxea"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center gap-2 fw-bold"
              >
                <BsInstagram size={26} />
                <span>@bona_jatetxea</span>
              </a>

              <a
                href="https://twitter.com/bona_jatetxea"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center gap-2 fw-bold"
              >
                <BsTwitterX size={26} />
                <span>@bona_jatetxea</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - más discreto */}
        <div className="text-center mt-4 pt-3 border-top border-dark">
          <small className="fw-medium">
            © {new Date().getFullYear()} Bona Jatetxea. Eskubide guztiak erreserbatuta.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

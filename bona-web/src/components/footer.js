import React from "react";
import { Container } from "react-bootstrap";
const Footer = () =>{
    return (
 <footer style={{ backgroundColor:'#ff8181', }} className="py-4">
        <Container>
          <div className="text-center">
            {/* Logo/Texto principal */}
            <h4 className="mb-3">Bona Restaurant</h4>
            
            {/* Redes sociales centradas */}
            <div className="social-links mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white mx-3 text-decoration-none">
                <span className="fs-4">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white mx-3 text-decoration-none">
                <span className="fs-4">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white mx-3 text-decoration-none">
                <span className="fs-4">Twitter</span>
              </a>
            </div>
            
            {/* Contacto */}
            <div className="contact-info mb-4">
              <p className="mb-1">Kale Nagusia, 123 - Donostia</p>
              <p className="mb-1">943 123 456 | info@bonarestaurante.com</p>
            </div>
            
            {/* Copyright */}
            <div className="border-top border-black pt-3">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Bona Web Gunea.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    );
}

export default Footer;
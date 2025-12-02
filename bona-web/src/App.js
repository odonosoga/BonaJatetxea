import React from 'react';
import { Container, Navbar, Nav, Button, Image} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          
          <Navbar.Brand href="#home"> <Image 
              src="/BonaLogoa.png" 
              alt="Bona Restaurant Logo"
              width="auto"
              height="60"
              className="d-inline-block align-top me-2"
            />Bona Web Gunea</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Hasiera</Nav.Link>
              <Nav.Link href="#features">Erreserbak</Nav.Link>
              <Nav.Link href="#pricing">Prezioak</Nav.Link>
              <Nav.Link href="#platerMota">Plater motak</Nav.Link>
            </Nav>
            
            <Button variant="outline-light">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Main content*/}
      <Container>

      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
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
            <div className="border-top pt-3">
              <p className="mb-0 text-white">
                &copy; {new Date().getFullYear()} Bona Web Gunea.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
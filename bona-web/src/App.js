import React from 'react';
import { Container, Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Bona Web Gunea</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Hasiera</Nav.Link>
              <Nav.Link href="#features">Erreserbak</Nav.Link>
              <Nav.Link href="#pricing">Prezioak</Nav.Link>
              <Nav.Link href="#pricing">Plater motak</Nav.Link>
            </Nav>
            <Button variant="outline-light">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido principal */}
      <Container>
      
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 py-4">
        <Container>
          <p className="text-center mb-0">
            &copy; {new Date().getFullYear()} Bona Web Gunea
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
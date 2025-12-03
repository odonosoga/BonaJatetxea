import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import '../App.css';
const  Header = () => {
    return (
         <Navbar style={{ backgroundColor:'#ff8181', }} variant="dark" expand="lg" className="mb-4">
        <Container>
          
          <Navbar.Brand href="#home" style={{ color: 'black', }}> <Image  src="/BonaLogoa.png" alt="Bona Restaurant Logo" width="auto" height="100" className="d-inline-block align-top me-2 mb-0" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="me-auto">
              <Nav.Link className="nav-link-custom" href="#home">Hasiera</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#features">Erreserbak</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#platerMotak">Plater motak</Nav.Link>
            </Nav>
            <Button style={{ color: 'black', }} variant="outline-dark">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default Header;
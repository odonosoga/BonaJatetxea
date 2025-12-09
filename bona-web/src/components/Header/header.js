import React from "react";
import { Navbar, Container, Nav, Button, Image, Stack } from "react-bootstrap";
import {BsClock} from "react-icons/bs"; // npm install react-icons
import "../Header/header.css";

const Header = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#ff8181", minHeight: "97px" }}
      variant="dark"
      expand="lg"
      fixed="top"
      className="shadow-sm"
    >
      <Container fluid className="px-4">
        {/* Logo */}
        <Navbar.Brand href="#home">
          <Image
            src="/BonaLogoa.png"
            alt="Bona Restaurant Logo"
            height="85"
            className="d-inline-block align-top"
            style={{ maxHeight: "85px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="bona-navbar-nav" />

        <Navbar.Collapse id="bona-navbar-nav">
          {/* Menú principal */}
          <Nav className="mx-auto text-center text-lg-start">
            <Nav.Link href="#home" className="nav-link-custom px-3">
              Hasiera
            </Nav.Link>
            <Nav.Link href="#erreserbak" className="nav-link-custom px-3">
              Erreserbak
            </Nav.Link>
            <Nav.Link href="#plater-motak" className="nav-link-custom px-3">
              Plater motak
            </Nav.Link>
            <Nav.Link href="#kontaktua" className="nav-link-custom px-3">
              Kontaktua
            </Nav.Link>
          </Nav>

          {/* Lado derecho - Info + acciones */}
          <Stack
            direction="horizontal"
            gap={3}
            className="align-items-center flex-wrap justify-content-center justify-content-lg-end"
          >

            {/* Horario rápido */}
            <div className="text-dark d-none d-lg-flex align-items-center gap-2">
              <BsClock size={18} />
              <small className="fw-medium">12:00–16:00</small>
              <BsClock size={18} />
              <small className="fw-medium">19:00–23:00</small>
            </div>
            
            

            {/* Botón Login (admin) */}
            <Button variant="outline-dark" size="sm" className="ms-2">
              Login
            </Button>

           
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
import React, { useRef, useState } from "react";
import { Navbar, Container, Nav, Button, Image, Stack, Modal, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom"; // ← NUEVO
import { BsClock } from "react-icons/bs";
import "../Header/header.css";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pasahitza, setPassword] = useState("");
  const [error, setError] = useState("");



  const handleShow = () => setLogin(true);
  const handleClose = () => {
    setLogin(false);
    setError("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pasahitza) {
      setError("Mesedez, Emaila eta Pasahitza bete itzazu!!");
      return;
    }
    handleClose();
  };



  return (
    <>


      <Navbar
        style={{
          background: "linear-gradient(135deg, #C34F5A 0%, #541412 100%)",
        }}
        variant="dark"
        expand="lg"
        fixed="top"
        className="shadow-sm header-top"
      >
        <Container fluid className="px-4">
          {/* Logo - Home */}
          <Navbar.Brand as={Link} to="/" style={{ cursor: "pointer" }}>
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
            <Nav className="me-auto text-center text-lg-start">
              <Nav.Link as={Link} to="/" className="nav-link-custom px-3">
                Hasiera
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/kontaktua"
                className="nav-link-custom px-3"
              >
                Kontaktua
              </Nav.Link>
              {/* Otros enlaces futuros */}
              <Nav.Link as={Link}
                to="/erreserbak" className="nav-link-custom px-3">
                Erreserbak
              </Nav.Link>
              <Nav.Link as={Link}
                to="/erregistroa"
                className="nav-link-custom px-3">
                Plater motak
              </Nav.Link>
            </Nav>
            <Stack
              direction="horizontal"
              gap={3}
              className="align-items-center flex-wrap justify-content-center justify-content-lg-end"
            >
              <div className="d-none d-lg-flex flex-column">
                <div className="d-flex align-items-center gap-2">
                  <BsClock size={18} />
                  <small className="fw-medium">12:00–16:00</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <BsClock size={18} />
                  <small className="fw-medium">19:00–23:00</small>
                </div>
              </div>
              <Button variant="outline-dark" size="sm" className="login-btn ms-2 " id="btn" onClick={handleShow}>
                Login
              </Button>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={login} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Saioa Hasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="pasahitza">
              <Form.Label>Pasahitza</Form.Label>
              <Form.Control type="password" placeholder="Pasahitza" value={pasahitza} onChange={(e) => setPassword(e.target.value)}>

              </Form.Control>
            </Form.Group>
            <Form.Label className="d-flex justify-content-center">Ez daukazu kontua? {" "}<Link to="/erregistroa" className="text-primary" onClick={handleClose}> Erregistratu hemen
            </Link>
            </Form.Label>
            <Button variant="primary" type="submit" className="w-100">
              Hasi
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Header;

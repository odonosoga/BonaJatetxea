import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Image, Modal, Form, Alert, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import "../Header/header.css";
import postre2 from "../../img/postre2.jpg";
import { Trash3 } from "react-bootstrap-icons";


const Header = () => {
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState(false);
  const [email, setEmail] = useState("");
  const [pasahitza, setPassword] = useState("");
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleShowLogin = () => setLogin(true);
  const handleCloseLogin = () => {
    setLogin(false);
    setError("");
    setEmail("");
    setPassword("");
  };

  const handleShowCart = () => setCart(true);
  const handleCloseCart = () => setCart(false);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!email || !pasahitza) {
      setError("Mesedez, Emaila eta Pasahitza bete itzazu!!");
      return;
    }
    handleCloseLogin();
  };

  return (
    <>
      {/* HEADER FIJO */}
      <section className="header-section text-white shadow-sm">
        {/* TOPBAR */}
        <div className="topbar d-flex justify-content-between align-items-center px-4 py-2">
          <div className="topbar-left d-flex flex-column flex-sm-row align-items-center gap-3">
            <Image src="/BonaLogoa.png" alt="Bona Restaurant Logo" height="70" />
          </div>

          <div className="topbar-right d-flex align-items-center gap-3">
            <div className="topbar-hours d-flex flex-column text-end me-2">
              <div className="d-flex align-items-center gap-2 justify-content-end">
                <BsClock size={18} />
                <small>12:00–16:00</small>
              </div>
              <div className="d-flex align-items-center gap-2 justify-content-end">
                <BsClock size={18} />
                <small>19:00–23:00</small>
              </div>
            </div>

            <Button className="karrito-btn" size="sm" onClick={handleShowCart}>
              <FaShoppingCart size={20} />
            </Button>
            <Button
              variant="outline-light"
              size="sm"
              className="login-btn"
              onClick={handleShowLogin}
            >
              Login
            </Button>
          </div>
        </div>

        {/* NAVBAR */}
        <Navbar
          expand="lg"
          className="border-top border-dark-subtle"
          expanded={expanded}
          onToggle={(val) => setExpanded(val)}
          collapseOnSelect
        >
          <Container fluid className="px-4 nav-container">
            <Navbar.Toggle
              aria-controls="bona-navbar-nav"
              onClick={() => setExpanded((prev) => !prev)}
            />
            <Navbar.Collapse id="bona-navbar-nav">
              <Nav className="mx-auto text-center">
                <Nav.Link
                  as={Link}
                  to="/"
                  className="nav-link-custom px-3"
                  onClick={() => setExpanded(false)}
                >
                  Hasiera
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/kontaktua"
                  className="nav-link-custom px-3"
                  onClick={() => setExpanded(false)}
                >
                  Kontaktua
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/erreserbak"
                  className="nav-link-custom px-3"
                  onClick={() => setExpanded(false)}
                >
                  Erreserbak
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/menu"
                  className="nav-link-custom px-3"
                  onClick={() => setExpanded(false)}
                >
                  Plater motak
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/ordutegia"
                  className="nav-link-custom px-3"
                  onClick={() => setExpanded(false)}
                >
                  Ordutegia
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/pendiente"
                  className="nav-link-custom px-3"
                  onClick={() => setExpanded(false)}
                >
                  Bidalketak
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      {/* Espacio para que el contenido no quede tapado */}
      <div style={{ height: "0px" }}></div>

      {/* MODAL LOGIN */}
      <Modal show={login} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Saioa Hasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmitLogin}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pasahitza">
              <Form.Label>Pasahitza</Form.Label>
              <Form.Control
                type="password"
                placeholder="Pasahitza"
                value={pasahitza}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Label className="d-flex justify-content-center">
              Ez daukazu kontua?{" "}
              <Link to="/erregistroa" className="text-primary" onClick={handleCloseLogin}>
                Erregistratu hemen
              </Link>
            </Form.Label>
            <Button  type="submit" className="hasi-btn w-100 fw-bold">
              Hasi
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* MODAL CARRITO */}
      <Modal show={cart} onHide={handleCloseCart} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Laburpena</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <Card className="mb-3 shadow-sm p-2">
                  <Row className="align-items-center g-0 d-flex justify-content-between">
                    <Col md={8} className="d-flex">
                      <img
                        src={postre2}
                        alt="Postre"
                        style={{
                          width: "175px",
                          height: "125px",
                          objectFit: "cover",
                          marginRight: "10px",
                          borderRadius: "20px"
                        }}
                      />
                      <div className="d-flex flex-column justify-content-center">
                        <label>Izena: Postre</label>
                        <label>Cantidad: 1</label>
                        <label>Precio: 5€</label>
                      </div>
                    </Col>
                    <Col md={4} className="d-flex justify-content-end">
                      <div
                        className="align-self-center trash-icon"
                      >
                        <Trash3 size={24} />
                      </div>
                    </Col>
                  </Row>
                </Card>

                <h4 className="text-center fw-bold mt-3">Totala: 5€</h4>
                <div className="d-flex justify-content-center mt-3" id="konfirmatu">
                  <Button variant="success">Bidalketa Konfirmatu</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;

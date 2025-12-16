import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Image, Stack, Modal, Form, Alert, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import "../Header/header.css";
import postre2 from "../../img/postre2.jpg";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState(false);
  const [email, setEmail] = useState("");
  const [pasahitza, setPassword] = useState("");
  const [error, setError] = useState("");

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
      <Navbar
        style={{ background: "linear-gradient(135deg, #C34F5A 0%, #541412 100%)" }}
        variant="dark"
        expand="lg"
        fixed="top"
        className="shadow-sm header-top"
      >
        <Container fluid className="px-4">
          <Navbar.Brand as={Link} to="/" style={{ cursor: "pointer" }}>
            <Image src="/BonaLogoa.png" alt="Bona Restaurant Logo" height="85" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="bona-navbar-nav" />
          <Navbar.Collapse id="bona-navbar-nav">
            <Nav className="me-auto text-center text-lg-start">
              <Nav.Link as={Link} to="/" className="nav-link-custom px-3">Hasiera</Nav.Link>
              <Nav.Link as={Link} to="/kontaktua" className="nav-link-custom px-3">Kontaktua</Nav.Link>
              <Nav.Link as={Link} to="/erreserbak" className="nav-link-custom px-3">Erreserbak</Nav.Link>
              <Nav.Link as={Link} to="/menu" className="nav-link-custom px-3">Plater motak</Nav.Link>
            </Nav>

            <Stack direction="horizontal" gap={3} className="align-items-center flex-wrap justify-content-center justify-content-lg-end">
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

              <Button variant="outline-light" className="d-flex align-items-center" onClick={handleShowCart}>
                <FaShoppingCart size={20} />
              </Button>

              <Button variant="outline-dark" size="sm" className="login-btn ms-2" onClick={handleShowLogin}>
                Login
              </Button>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal Login */}
      <Modal show={login} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Saioa Hasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmitLogin}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pasahitza">
              <Form.Label>Pasahitza</Form.Label>
              <Form.Control type="password" placeholder="Pasahitza" value={pasahitza} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Label className="d-flex justify-content-center">
              Ez daukazu kontua? <Link to="/erregistroa" className="text-primary" onClick={handleCloseLogin}>Erregistratu hemen</Link>
            </Form.Label>
            <Button variant="primary" type="submit" className="btn-login w-100">Hasi</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal Carrito */}
      <Modal show={cart} onHide={handleCloseCart} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Laburpena</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <Card className="mb-3 shadow-sm p-2" id="carrito">
                  <Row className="align-items-center g-0 d-flex justify-content-between">
                    <Col md={8} className="d-flex">
                      <img src={postre2} alt="Postre" style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }} />
                      <div className="d-flex flex-column justify-content-center">
                        <label>Izena: Postre</label>
                        <label>Cantidad: 1</label>
                        <label>Precio: 5€</label>
                      </div>
                    </Col>
                    <Col md={4} className="d-flex justify-content-end">
                      <Button variant="danger" className="align-self-center">Eliminar</Button>
                    </Col>
                  </Row>
                </Card>

                <h4 className="text-center fw-bold mt-3">Totala: 5€</h4>
                <div className="d-flex justify-content-center mt-3">
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

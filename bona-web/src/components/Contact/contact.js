import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsClock } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  return (
    <section id="kontaktua" className="pt-5 pb-2 contact-section ">
      <Container>
        {/* Título */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Kontaktua</h2>
          <p className="lead text-muted mb-0">
            Gurekin harremanetan jar zaitez
          </p>
        </div>

        <Row className="g-5">
          {/* Información de contacto */}
          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm contact-card">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-4 text-center">Datuak</h5>

                {/* Dirección */}
                <div className="d-flex align-items-start mb-4 contact-item"> 
                  <BsGeoAlt className="mt-1 me-3 text-danger fs-4" />
                  <div>
                    <a href="tel:+34943123456" className="text-decoration-none">
                      <strong>Kale Nagusia, 123</strong>
                    </a>
                    <br />
                    <small className="text-muted">Donostia - San Sebastián</small>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="d-flex align-items-start mb-4 contact-item">
                  <BsTelephone className="mt-1 me-3 text-danger fs-4" />
                  <div>
                    <a href="tel:943123456" className="text-decoration-none">
                      <strong>943 123 456</strong>
                    </a>
                    <br />
                    <small className="text-muted">WhatsApp: 666 123 456</small>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-start mb-4 contact-item">
                  <BsEnvelope className="mt-1 me-3 text-danger fs-4" />
                  <div>
                    <a
                      href="mailto:info@bonarestaurante.com"
                      className="text-decoration-none"
                    >
                      <strong>info@bonarestaurante.com</strong>
                    </a>
                  </div>
                </div>

                {/* Horario */}
                <div className="d-flex align-items-start contact-item">
                  <BsClock className="mt-1 me-3 text-danger fs-4" />
                  <div>
                    <strong>Ordutegiak</strong>
                    <div>
                      <small>12:00–16:00</small>
                    </div>
                    <div>
                      <small>19:00–23:00</small>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulario */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4 p-lg-5">
                <h5 className="fw-bold mb-4">Kontsulta</h5>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="fw-medium">Izena</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Zure izena"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="fw-medium">Emaila</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="email@adibidea.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group>
                    <Form.Label className="fw-medium">Telefonoa</Form.Label>
                    <Form.Control type="tel" placeholder="666 123 456" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">Mezua</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Zure mezua..."
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 btn-contact py-3 fw-bold"
                  >
                    Bidali mezua
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

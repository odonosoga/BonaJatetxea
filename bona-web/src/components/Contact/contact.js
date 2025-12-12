// Contact.js
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <section id="kontaktua" className="pb-2 contact-section">
      <Container>
        {/* Título */}
        <div className="text-center mb-4">
          
          <h2 className="display-5 fw-bold text-dark mb-2">Kontaktua</h2>
          <p className="lead text-muted mb-0">
            Idatzi zure ideia, galdera edo eskaera eta harremanetan jarriko gara.
          </p>
        </div>

        <Row className="g-5 justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4 p-lg-5">
                <h5 className="fw-bold mb-4">Kontsulta</h5>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="fw-medium d-flex align-items-start">Izena</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Zure izena"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="fw-medium d-flex align-items-start">Emaila</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="email@adibidea.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium d-flex align-items-start">Telefonoa</Form.Label>
                    <Form.Control type="tel" placeholder="666 123 456" />
                  </Form.Group>

                  {/* Motivo de la consulta */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium d-flex align-items-start">Zeri buruz?</Form.Label>
                    <Form.Select>
                      <option>Aukeratu aukera bat</option>
                      <option>Informazio orokorra</option>
                      <option>Hitzordu bat eskatu</option>
                      <option>Aipu edo aurrekontua</option>
                      <option>Beste bat</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium d-flex align-items-start">Mezua</Form.Label>
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

                  {/* Microcopy debajo del botón */}
                  <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: "0.9rem" }}>
                    Normalean 24-48 orduren buruan erantzuten dugu.
                  </p>
                </Form>
              </Card.Body>
            </Card>

            {/* Bloque de confianza debajo de la card */}
            <div className="text-center mt-4">
              <p className="text-muted mb-1" style={{ fontSize: "0.95rem" }}>
                Zalantzarik baduzu, lasai idatzi: laguntzeko gaude.
              </p>
              <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                Ez partekatu inoiz pasahitzik edo datu konfidentzialik mezu honetan.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

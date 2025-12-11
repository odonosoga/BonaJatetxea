import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./register.css";
import register from "../../img/register.jpg";

const Register = () => {
  return (
    <section id="erregistroa" className="register-section">
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center order-1 order-md-1"
          >
            <div className="register-form">
              <h2 className="text-center fw-bold text-dark fs-4 mb-3">Erregistratu</h2>
              <Form>
                <Row className="g-2">
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Izena</Form.Label>
                      <Form.Control type="text" placeholder="Izena" className="w-100" required />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Abizena</Form.Label>
                      <Form.Control type="text" placeholder="Abizena" className="w-100" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2 mt-1">
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Telefonoa</Form.Label>
                      <Form.Control type="text" placeholder="Telefonoa" className="w-100" required />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Jaiotze-Data</Form.Label>
                      <Form.Control type="date" placeholder="yyyy/mm/dd" className="w-100" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2 mt-1">
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Helbidea</Form.Label>
                      <Form.Control type="text" placeholder="Kalea, Pisua" className="w-100" required />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Posta Kodea</Form.Label>
                      <Form.Control type="text" placeholder="CP" className="w-100" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2 mt-1">
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Email</Form.Label>
                      <Form.Control type="text" placeholder="Email" className="w-100" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2 mt-1">
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Pasahitza</Form.Label>
                      <Form.Control type="password" placeholder="Pasahitza" className="w-100" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2 mt-1">
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-start">Pasahitza Konfirmatu</Form.Label>
                      <Form.Control type="password" placeholder="Pasahitza" className="w-100" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2 mt-3">
                  <Col>
                    <Form.Group className="d-flex justify-content-center">
                      <Form.Control type="button" value="Erregistratu" className="w-50 fw-bold" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="order-2 order-md-2"
            style={{
              backgroundImage: `url(${register})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100%",
             
            }}
          >
            {/* la columna ahora es solo background */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;

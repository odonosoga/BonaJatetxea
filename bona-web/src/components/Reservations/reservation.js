import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsClock } from "react-icons/bs";
import "./reservation.css"

const Reserva = () => {
    const [hasOpari, setHasOpari] = useState(null);
    const [hasTimeMorningNight, setTime] = useState(null);
    return (
        
        <section id="kontaktua" className=" pb-2 reservation-section"> 
        <Container>
          {/* Título */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Kontaktua</h2>
            <p className="lead text-muted mb-0">Egin zure erreserba!</p>
          </div>

          <Row className="g-5">
            {/* Información de contacto */}
            <Col lg={4}>
              <Card className="h-100 border-0 shadow-sm reservation-card">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-4 text-center">Datuak</h5>
                  
                  {/* Dirección */}
                  <div className="d-flex align-items-start mb-4 reservation-item">
                    <BsGeoAlt className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <strong>Kale Nagusia, 123</strong><br />
                      <small className="text-muted">Donostia - San Sebastián</small>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="d-flex align-items-start mb-4 reservation-item">
                    <BsTelephone className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <a href="tel:+34943123456" className="text-decoration-none">
                        <strong>943 123 456</strong>
                      </a><br />
                      <small className="text-muted">WhatsApp: 666 123 456</small>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex align-items-start mb-4 reservation-item">
                    <BsEnvelope className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <a href="mailto:info@bonarestaurante.com" className="text-decoration-none">
                        <strong>info@bonarestaurante.com</strong>
                      </a>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="d-flex align-items-start reservation-item">
                    <BsClock className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <strong>Ordutegiak</strong>
                      <div><small>12:00–16:00</small></div>
                      <div><small>19:00–23:00</small></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Formulario */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4 p-lg-5">
                  <h5 className="fw-bold mb-4">Datuak bete</h5>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">Emaila</Form.Label>
                          <Form.Control type="text" className="mb-3" placeholder="email@adibidea.com" required />
                          <Form.Control type="text" placeholder="sartu berriro" required />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                            <Form.Label className="fw-medium">Opari-kode bat duzu?</Form.Label>
                            <div className="d-flex justify-content-center gap-3 mt-2">
                            <Form.Check
                                type="radio"
                                name="opariKodea"
                                id="opari-bai"
                                label="Bai"
                                value="bai"
                                onChange={() => setHasOpari(true)}
                            />
                            <Form.Check
                                type="radio"
                                name="opariKodea"
                                id="opari-ez"
                                label="Ez"
                                value="ez"
                                onChange={() => setHasOpari(false)}
                            />
                            </div>
                        {hasOpari && (
                            <div className="mt-3 d-flex align-items-center justify-content-center">
                                <Form.Label className="me-2 mb-0">Sartu kodea</Form.Label>
                                <Form.Control type="text" placeholder="OPARI-12345" style={{ maxWidth: "200px" }} required/>
                            </div>
                        )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="fw-medium">Sartu Izena</Form.Label>
                            <Form.Control type="text" placeholder="Izena" required/>
                          </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                          <Form.Group className="mb-4">
                            <Form.Label className="fw-medium">Sartu Abizena</Form.Label>
                            <Form.Control type="text" placeholder="Abizena" required />
                          </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">Pertsona kopurua</Form.Label>
                          <Form.Control type="number" min={1} max={12} required/>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">Mugikor zenbakia</Form.Label>
                          <Form.Control type="number" placeholder="123-45-67-89" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}" required/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-3">
                        <p><strong>GARRANTZITSUA: Mesedez, egiaztatu mugikorraren zenbakia zuzena dela; izan ere, zenbaki okerra jasotzen badugu edo Whatsapp aktibatua ez badaukagu, erreserba bertan behera utzi beharko dugu segurtasunagatik</strong></p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">data</Form.Label>
                          <Form.Control type="date"></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6} >
                        <Form.Label className="fw-fw-medium">Noiz?</Form.Label>
                          <div className="d-flex justify-content-center gap-3 mt-2">
                            <Form.Check
                                  type="radio"
                                  name="ordua"
                                  id="ordua-gauez"
                                  label="Goizes"
                                  value="goizes"
                                  onChange={() => setTime('goizes')}
                              />
                              <Form.Check
                                  type="radio"
                                  name="ordua"
                                  id="ordua-gauez"
                                  label="Gauez"
                                  value="gauez"
                                  onChange={() => setTime('gauez')}
                              />
                          </div>
                         
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Hautatu zein lokalen bazkalduko duzun </Form.Label>
                          <select className="form-select">
                            <option selected>- Lokala -</option>
                            <option value="bona-center">Bona Center (Donostia)</option>
                            <option value="bona-gros">Bona Gros (Donostia)</option>
                            <option value="bona-anoeta">Bona Anoeta (Donostia)</option>
                            <option value="bona-azpeitia">Bona Vitoria-Gazteiz</option>
                            <option value="bona-arrasate">Bona Arrasate</option>
                          </select>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                         {hasTimeMorningNight === 'goizes' && (
                            <div className=" d-flex align-items-center justify-content-center">
                              <Form.Group>
                                <Form.Label>Hautatu ordua</Form.Label>
                                <select className="form-select">
                                  <option selected>- Ordua -</option>
                                  <option>12:00</option>
                                  <option>12:45</option>
                                  <option>13:30</option>
                                  <option>14:15</option>
                                  <option>15:00</option>
                                  <option>15:45</option>
                                </select>
                              </Form.Group>
                            </div>
                          )}
                          {hasTimeMorningNight === 'gauez' && (
                            <div className=" d-flex align-items-center justify-content-center">
                              <Form.Group>
                                <Form.Label>Hautatu ordua</Form.Label>
                                <select className="form-select">
                                  <option selected>- Ordua -</option>
                                  <option>19:00</option>
                                  <option>19:45</option>
                                  <option>20:30</option>
                                  <option>21:15</option>
                                  <option>22:00</option>
                                  <option>22:45</option>
                                </select>
                              </Form.Group>
                            </div>
                          )}
                      </Col>
                    </Row>

                    <Button type="submit" className="w-100 btn-contact py-3 fw-bold">
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

export default Reserva;
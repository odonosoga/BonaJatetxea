import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsClock } from "react-icons/bs";
import heroImg from "../../img/reservation.jpg";
import "./reservation.css";

const HeroReserva = () => (
  <section
    className="hero-reserva"
    style={{
      backgroundImage: `url(${heroImg})`,
    }}
  >
    <div className="hero-overlay">
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={8} className="text-center text-white">
            <h1 className="display-4 fw-bold mb-3">Egin zure erreserba</h1>
            <p className="lead mb-0">
              Bona jatetxeetako batean esperientzia berezia bizitzeko prest?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

const Reserva = () => {
  const [hasOpari, setHasOpari] = useState(null);
  const [timeError, setTimeError] = useState(false);
  const [hasTimeMorningNight, setTime] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!hasTimeMorningNight) {
      setTimeError(true);
    } else {
      setTimeError(false);
    }

    setValidated(true);
  };

  return (
    <>
      <HeroReserva />

      <section id="reservation" className="pb-2 reservation-section">
        <Container>
          <Row className="g-5">
            {/* Información de contacto */}
            <Col lg={4}>
              <Card className="h-100 border-0 shadow-sm reservation-card">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-4 text-center">Datuak</h5>

                  <div className="d-flex align-items-start mb-4 reservation-item">
                    <BsGeoAlt className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <strong>Kale Nagusia, 123</strong>
                      <br />
                      <small className="text-muted">
                        Donostia - San Sebastián
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4 reservation-item">
                    <BsTelephone className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <a
                        href="tel:+34943123456"
                        className="text-decoration-none"
                      >
                        <strong>943 123 456</strong>
                      </a>
                      <br />
                      <small className="text-muted">WhatsApp: 666 123 456</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4 reservation-item">
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

                  <div className="d-flex align-items-start reservation-item">
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

                  {/* Mapa de localizaciones */}
                  <Row className="mt-4">
                    <Col>
                      <h5 className="fw-bold mb-3 text-center">
                        Gure kokapenak mapan
                      </h5>
                      <div className="map-wrapper">
                        <iframe
                          src="https://www.google.com/maps/d/embed?mid=1AvqjeDnNLnJqmyiyI95GKL7igg_4LyQ&hl=es&ehbc=2E312F"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Mapa de restaurantes"
                        ></iframe>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Formulario */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4 p-lg-5">
                  <h5 className="fw-bold mb-4">Datuak bete</h5>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col md={6} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label className="fw-medium">Emaila</Form.Label>
                      <Form.Control
                        type="email"                     // ← tipo email
                        placeholder="email@adibidea.com"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Mesedez, sartu email baliozko bat.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">
                            Opari-kode bat duzu?
                          </Form.Label>
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
                              <Form.Label className="me-2 mb-0">
                                Sartu kodea
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="OPARI-12345"
                                style={{ maxWidth: "200px" }}
                                required
                              />
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">Sartu Izena</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Izena"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Mesedez, sartu izena.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-medium">Sartu Abizena</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Abizena"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Mesedez, sartu abizena.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">
                            Pertsona kopurua
                          </Form.Label>
                          <Form.Control
                            type="number"
                            min={1}
                            max={12}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">
                            Mugikor zenbakia
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="123-45-67-89"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="mb-3">
                        <p>
                          <strong>
                            GARRANTZITSUA: Mesedez, egiaztatu mugikorraren zenbakia
                            zuzena dela; izan ere, zenbaki okerra jasotzen badugu edo
                            Whatsapp aktibatua ez badaukagu, erreserba bertan behera utzi
                            beharko dugu segurtasunagatik.
                          </strong>
                        </p>
                      </Col>
                    </Row>

                    {/* Fila 1: Data (izq) + Noiz (dcha) */}
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">Data</Form.Label>
                          <Form.Control type="date" required />
                          <Form.Control.Feedback type="invalid">
                            Hautatu data.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group className="mb-3" controlId="noiz">
                          <Form.Label className="fw-medium text-center w-100">
                            Noiz?
                          </Form.Label>
                          <div className="d-flex justify-content-center gap-3 mt-2">
                            <Form.Check
                              type="radio"
                              name="ordua"
                              id="ordua-goizez"
                              label="Goizez"
                              value="goizez"
                              required
                              isInvalid={timeError}
                              onChange={() => {
                                setTime("goizez");
                                setTimeError(false);
                              }}
                            />
                            <Form.Check
                              type="radio"
                              name="ordua"
                              id="ordua-gauez"
                              label="Gauez"
                              value="gauez"
                              required
                              isInvalid={timeError}
                              onChange={() => {
                                setTime("gauez");
                                setTimeError(false);
                              }}
                            />
                          </div>
                          {timeError && (
                            <div className="invalid-feedback d-block text-center">
                              Aukeratu Goizez edo Gauez.
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Fila 2: Lokala (izq) + Ordua (dcha) */}
                    <Row>
  {/* Hora: primero en móvil, a la derecha en md+ */}
  <Col
    xs={12}
    md={6}
    className="mb-3 order-1 order-md-2"
  >
    {hasTimeMorningNight && (
      <Form.Group>
        <Form.Label>Hautatu ordua *</Form.Label>
        <Form.Select required defaultValue="">
          <option value="" disabled>
            - Ordua -
          </option>
          {hasTimeMorningNight === "goizez" && (
            <>
              <option>12:00</option>
              <option>12:45</option>
              <option>13:30</option>
              <option>14:15</option>
              <option>15:00</option>
              <option>15:45</option>
            </>
          )}
          {hasTimeMorningNight === "gauez" && (
            <>
              <option>19:00</option>
              <option>19:45</option>
              <option>20:30</option>
              <option>21:15</option>
              <option>22:00</option>
              <option>22:45</option>
            </>
          )}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Hautatu ordua.
        </Form.Control.Feedback>
      </Form.Group>
    )}
  </Col>

  {/* Lokala: segundo en móvil, a la izquierda en md+ */}
  <Col
    xs={12}
    md={6}
    className="mb-3 order-2 order-md-1"
  >
    <Form.Group>
      <Form.Label>
        Hautatu zein lokalen bazkalduko duzun
      </Form.Label>
      <Form.Select required defaultValue="">
        <option value="" disabled>
          - Lokala -
        </option>
        <option value="bona-center">
          Bona Center - Nafarroa Hiribidea, 2, 20013 Donostia /
          San Sebastián, Gipuzkoa
        </option>
        <option value="bona-tolosa">
          Bona Tolosa - San Frantzisko Pasealekua Ibilbidea, 8,
          20400 Tolosa, Gipuzkoa
        </option>
        <option value="bona-mutriku">
          Bona Mutriku - Erdiko Kalea, 23, 20830 Mutriku, Gipuzkoa
        </option>
        <option value="bona-gazteiz">
          Bona Vitoria-Gazteiz - Francia Kalea, 24, 01002
          Vitoria-Gasteiz, Araba
        </option>
        <option value="bona-arrasate">
          Bona Bilbao - Ercilla Kalea, 22, Abando, 48009 Bilbao,
          Bizkaia
        </option>
        <option value="bona-estella">
          Bona Estella - Pl. los Fueros, 24, 31200 Estella, Navarra
        </option>
        <option value="bona-pamplona">
          Bona Pamploma - Av. del Ejército, 30, 31002 Pamplona,
          Navarra
        </option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Hautatu lokala.
      </Form.Control.Feedback>
    </Form.Group>
  </Col>
</Row>

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
    </>
  );
};

export default Reserva;

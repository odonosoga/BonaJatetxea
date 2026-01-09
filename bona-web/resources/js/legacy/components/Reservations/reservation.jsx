// PÁGINA: Reserva / Erreserbak
// Traducciones necesarias: reservation.heroTitle, reservation.heroText, 
// reservation.infoTitle, reservation.address, reservation.city, reservation.phone, 
// reservation.whatsapp, reservation.email, reservation.hoursTitle, reservation.hoursLunch, 
// reservation.hoursDinner, reservation.mapTitle, reservation.formTitle, 
// reservation.emailLabel, reservation.emailPlaceholder, reservation.emailRepeatPlaceholder, 
// reservation.emailFeedback, reservation.giftCodeQuestion, reservation.giftCodeYes, 
// reservation.giftCodeNo, reservation.giftCodeInputLabel, reservation.giftCodePlaceholder, 
// reservation.nameLabel, reservation.namePlaceholder, reservation.nameFeedback, 
// reservation.surnameLabel, reservation.surnamePlaceholder, reservation.surnameFeedback, 
// reservation.peopleLabel, reservation.phoneLabel, reservation.phonePlaceholder, 
// reservation.phoneWarning, reservation.dateLabel, reservation.dateFeedback, 
// reservation.timeQuestion, reservation.timeMorning, reservation.timeEvening, 
// reservation.timeError, reservation.hourLabel, reservation.hourPlaceholder, 
// reservation.hourFeedback, reservation.locationLabel, reservation.locationPlaceholder, 
// reservation.locationFeedback, reservation.submitButton

import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsClock } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import heroImg from "../../img/reservation.jpg";
import "./reservation.css";

const HeroReserva = () => {
  const { t } = useTranslation();

  return (
    <section
      className="hero-reserva"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <Container className="h-100">
          <Row className="h-100 align-items-center justify-content-center">
            <Col md={8} className="text-center text-white">
              <h1 className="display-4 fw-bold mb-3">
                {t("reservation.heroTitle")}
              </h1>
              <p className="lead mb-0">
                {t("reservation.heroText")}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

const Reserva = () => {
  const { t } = useTranslation();
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
                  <h5 className="fw-bold mb-4 text-center">
                    {t("reservation.infoTitle")}
                  </h5>

                  <div className="d-flex align-items-start mb-4 reservation-item">
                    <BsGeoAlt className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <strong>{t("reservation.address")}</strong>
                      <br />
                      <small className="text-muted">
                        {t("reservation.city")}
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4 reservation-item">
                    <BsTelephone className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <a href="tel:+34943123456" className="text-decoration-none">
                        <strong>{t("reservation.phone")}</strong>
                      </a>
                      <br />
                      <small className="text-muted">
                        WhatsApp: {t("reservation.whatsapp")}
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4 reservation-item">
                    <BsEnvelope className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <a href="mailto:info@bonarestaurante.com" className="text-decoration-none">
                        <strong>{t("reservation.email")}</strong>
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start reservation-item">
                    <BsClock className="mt-1 me-3 text-danger fs-4" />
                    <div>
                      <strong>{t("reservation.hoursTitle")}</strong>
                      <div>
                        <small>{t("reservation.hoursLunch")}</small>
                      </div>
                      <div>
                        <small>{t("reservation.hoursDinner")}</small>
                      </div>
                    </div>
                  </div>

                  <Row className="mt-4">
                    <Col>
                      <h5 className="fw-bold mb-3 text-center">
                        {t("reservation.mapTitle")}
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
                  <h5 className="fw-bold mb-4">{t("reservation.formTitle")}</h5>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="email">
                          <Form.Label className="fw-medium">
                            {t("reservation.emailLabel")}
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder={t("reservation.emailPlaceholder")}
                            required
                          />
                          <Form.Control
                            type="email"
                            placeholder={t("reservation.emailRepeatPlaceholder")}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {t("reservation.emailFeedback")}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">
                            {t("reservation.giftCodeQuestion")}
                          </Form.Label>
                          <div className="d-flex justify-content-center gap-3 mt-2">
                            <Form.Check
                              type="radio"
                              name="opariKodea"
                              id="opari-bai"
                              label={t("reservation.giftCodeYes")}
                              value="bai"
                              onChange={() => setHasOpari(true)}
                            />
                            <Form.Check
                              type="radio"
                              name="opariKodea"
                              id="opari-ez"
                              label={t("reservation.giftCodeNo")}
                              value="ez"
                              onChange={() => setHasOpari(false)}
                            />
                          </div>
                          {hasOpari && (
                            <div className="mt-3 d-flex align-items-center justify-content-center">
                              <Form.Label className="me-2 mb-0">
                                {t("reservation.giftCodeInputLabel")}
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder={t("reservation.giftCodePlaceholder")}
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
                          <Form.Label className="fw-medium">
                            {t("reservation.nameLabel")}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={t("reservation.namePlaceholder")}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {t("reservation.nameFeedback")}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-medium">
                            {t("reservation.surnameLabel")}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={t("reservation.surnamePlaceholder")}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {t("reservation.surnameFeedback")}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">
                            {t("reservation.peopleLabel")}
                          </Form.Label>
                          <Form.Control type="number" min={1} max={12} required />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">
                            {t("reservation.phoneLabel")}
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder={t("reservation.phonePlaceholder")}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="mb-3">
                        <p>
                          <strong>{t("reservation.phoneWarning")}</strong>
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-medium">
                            {t("reservation.dateLabel")}
                          </Form.Label>
                          <Form.Control type="date" required />
                          <Form.Control.Feedback type="invalid">
                            {t("reservation.dateFeedback")}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group controlId="noiz">
                          <Form.Label className="fw-medium text-center w-100">
                            {t("reservation.timeQuestion")}
                          </Form.Label>
                          <div className="d-flex justify-content-center gap-3 mt-2">
                            <Form.Check
                              type="radio"
                              name="ordua"
                              id="ordua-goizez"
                              label={t("reservation.timeMorning")}
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
                              label={t("reservation.timeEvening")}
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
                              {t("reservation.timeError")}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={6} className="mb-3 order-1 order-md-2">
                        {hasTimeMorningNight && (
                          <Form.Group>
                            <Form.Label>{t("reservation.hourLabel")}</Form.Label>
                            <Form.Select required defaultValue="">
                              <option value="" disabled>
                                {t("reservation.hourPlaceholder")}
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
                              {t("reservation.hourFeedback")}
                            </Form.Control.Feedback>
                          </Form.Group>
                        )}
                      </Col>

                      <Col xs={12} md={6} className="mb-3 order-2 order-md-1">
                        <Form.Group>
                          <Form.Label>{t("reservation.locationLabel")}</Form.Label>
                          <Form.Select required defaultValue="">
                            <option value="" disabled>
                              {t("reservation.locationPlaceholder")}
                            </option>
                            <option value="bona-center">
                              Bona Center - Nafarroa Hiribidea, 2, 20013 Donostia / San Sebastián, Gipuzkoa
                            </option>
                            <option value="bona-tolosa">
                              Bona Tolosa - San Frantzisko Pasealekua Ibilbidea, 8, 20400 Tolosa, Gipuzkoa
                            </option>
                            <option value="bona-mutriku">
                              Bona Mutriku - Erdiko Kalea, 23, 20830 Mutriku, Gipuzkoa
                            </option>
                            <option value="bona-gazteiz">
                              Bona Vitoria-Gazteiz - Francia Kalea, 24, 01002 Vitoria-Gasteiz, Araba
                            </option>
                            <option value="bona-bilbao">
                              Bona Bilbao - Ercilla Kalea, 22, Abando, 48009 Bilbao, Bizkaia
                            </option>
                            <option value="bona-estella">
                              Bona Estella - Pl. los Fueros, 24, 31200 Estella, Navarra
                            </option>
                            <option value="bona-pamplona">
                              Bona Pamplona - Av. del Ejército, 30, 31002 Pamplona, Navarra
                            </option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {t("reservation.locationFeedback")}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button type="submit" className="w-100 btn-contact py-3 fw-bold">
                      {t("reservation.submitButton")}
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
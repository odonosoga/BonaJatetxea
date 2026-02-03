import React from "react"; // Quitamos useState porque Inertia maneja el estado
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm, usePage } from '@inertiajs/react'; // ✅ Inertia
import heroImg from "../../img/contact.png";
import "./contact.css";

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
                {t("contact.heroTitle")}
              </h1>
              <p className="lead mb-0">
                {t("contact.heroText")}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  // Obtenemos errores y mensajes flash desde Inertia (props globales)
  const { errors, flash } = usePage().props;

  // ✅ Inicializamos useForm de Inertia
  const { data, setData, post, processing, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/kontaktua');
  };
  

  return (
    <>
      <HeroReserva />
      <section id="kontaktua" className="pb-2 contact-section">
        <Container>
          <Row className="g-5 justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4 p-lg-5">
                  <h5 className="fw-bold mb-4">{t("contact.formTitle")}</h5>

                  {/* ✅ Mensaje de éxito si existe en flash.success */}
                  {flash?.success && (
                    <div className="alert alert-success mb-4">
                        {flash.success}
                    </div>
                  )}

                  <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="contactName">
                          <Form.Label className="fw-medium d-flex align-items-start">
                            {t("contact.nameLabel")}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={t("contact.namePlaceholder")}
                            value={data.name} 
                            onChange={(e) => setData('name', e.target.value)} 
                            isInvalid={!!errors.name}   
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name || t("contact.nameFeedback")}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group controlId="contactEmail">
                          <Form.Label className="fw-medium d-flex align-items-start">
                            {t("contact.emailLabel")}
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder={t("contact.emailPlaceholder")}
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            isInvalid={!!errors.email}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email || t("contact.emailFeedback")}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="contactPhone">
                      <Form.Label className="fw-medium d-flex align-items-start">
                        {t("contact.phoneLabel")}
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder={t("contact.phonePlaceholder")}
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        isInvalid={!!errors.phone}
                      />
                       <Form.Control.Feedback type="invalid">
                            {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactReason">
                      <Form.Label className="fw-medium d-flex align-items-start">
                        {t("contact.reasonLabel")}
                      </Form.Label>
                      <Form.Select 
                        required
                        value={data.reason}
                        onChange={(e) => setData('reason', e.target.value)}
                        isInvalid={!!errors.reason}
                      >
                        <option value="">{t("contact.reasonPlaceholder")}</option>
                        <option value="info">{t("contact.reasonOptions.info")}</option>
                        <option value="appointment">{t("contact.reasonOptions.appointment")}</option>
                        <option value="quote">{t("contact.reasonOptions.quote")}</option>
                        <option value="other">{t("contact.reasonOptions.other")}</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.reason || t("contact.reasonFeedback")}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="contactMessage">
                      <Form.Label className="fw-medium d-flex align-items-start">
                        {t("contact.messageLabel")}
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder={t("contact.messagePlaceholder")}
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        isInvalid={!!errors.message} 
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}  
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      type="submit"
                      className="w-100 btn-contact py-3 fw-bold"
                      disabled={processing} 
                    >
                      {processing ? 'Bidaltzen...' : t("contact.submitButton")}
                    </Button>

                    <p
                      className="text-center text-muted mt-3 mb-0"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {t("contact.responseTime")}
                    </p>
                  </Form>
                </Card.Body>
              </Card>

              <div className="text-center mt-4">
                <p
                  className="text-muted mb-1"
                  style={{ fontSize: "0.95rem" }}
                >
                  {t("contact.helpText")}
                </p>
                <p
                  className="text-muted mb-0"
                  style={{ fontSize: "0.85rem" }}
                >
                  {t("contact.privacyText")}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;

// PÁGINA/SECCIÓN: CTA (Llamada a la acción)
// Traducciones necesarias: cta.title, cta.description, cta.button

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './cta.css';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="display-5 fw-bold text-dark mb-4">
              {t("cta.title")}
            </h2>
            <p className="lead text-muted mb-4">
              {t("cta.description")}
            </p>
            <Button 
              as="a" 
              href="/erreserbak" 
              size="lg" 
              className="cta-button px-5 py-3 fw-bold rounded-pill"
            >
              {t("cta.button")}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
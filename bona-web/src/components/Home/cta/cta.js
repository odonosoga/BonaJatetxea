import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './cta.css';

const CTA = () => {
  return (
    <section className="py-5 bg-gradient">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="display-5 fw-bold text-dark mb-4">Maizter egiteko ordua da!</h2>
            <p className="lead text-muted mb-4">
              Astelehenetik osteguna %15 deskontua 2+ pertsonentarako
            </p>
            <Button 
              as="a" 
              href="/kontaktua" 
              size="lg" 
              className="cta-button px-5 py-3 fw-bold rounded-pill"
            >
              Erreserba egin orain
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;

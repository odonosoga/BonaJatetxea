// PÁGINA/SECCIÓN: Testimonials (Testimonios)
// Traducciones necesarias: testimonials.title, testimonials.subtitle, 
// testimonials.review1.text, testimonials.review1.author,
// testimonials.review2.text, testimonials.review2.author,
// testimonials.review3.text, testimonials.review3.author

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import './testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5" style={{ backgroundColor: '#8d3236' }}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold text-white mb-3">
              {t("testimonials.title")}
            </h2>
            <p className="lead text-white-50">
              {t("testimonials.subtitle")}
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="border-0 bg-transparent text-white h-100 testimonial-card">
              <Card.Body className="p-4">
                <div className="stars mb-3 d-flex">
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning" />
                </div>
                <p className="mb-3">"{t("testimonials.review1.text")}"</p>
                <small className="text-white-50 fw-medium">
                  {t("testimonials.review1.author")}
                </small>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 bg-transparent text-white h-100 testimonial-card">
              <Card.Body className="p-4">
                <div className="stars mb-3 d-flex">
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning" />
                </div>
                <p className="mb-3">"{t("testimonials.review2.text")}"</p>
                <small className="text-white-50 fw-medium">
                  {t("testimonials.review2.author")}
                </small>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 bg-transparent text-white h-100 testimonial-card">
              <Card.Body className="p-4">
                <div className="stars mb-3 d-flex">
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning" />
                </div>
                <p className="mb-3">"{t("testimonials.review3.text")}"</p>
                <small className="text-white-50 fw-medium">
                  {t("testimonials.review3.author")}
                </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
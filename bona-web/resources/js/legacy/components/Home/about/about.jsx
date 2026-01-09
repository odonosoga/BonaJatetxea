import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import './about.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold text-dark mb-3">
              {t("about.title")}
            </h2>
            <p className="lead text-muted">
              {t("about.description")}
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="border-0 shadow h-100 rounded-4 hover-card">
              <Card.Body className="text-center p-5">
                <BsStarFill className="text-warning fs-1 mb-3" />
                <h5 className="fw-bold mb-3">
                  {t("about.card1.title")}
                </h5>
                <p className="text-muted">
                  {t("about.card1.text")}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow h-100 rounded-4 hover-card">
              <Card.Body className="text-center p-5">
                <BsStarFill className="text-warning fs-1 mb-3" />
                <h5 className="fw-bold mb-3">
                  {t("about.card2.title")}
                </h5>
                <p className="text-muted">
                  {t("about.card2.text")}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow h-100 rounded-4 hover-card">
              <Card.Body className="text-center p-5">
                <BsStarFill className="text-warning fs-1 mb-3" />
                <h5 className="fw-bold mb-3">
                  {t("about.card3.title")}
                </h5>
                <p className="text-muted">
                  {t("about.card3.text")}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
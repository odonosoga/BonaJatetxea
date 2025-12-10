import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#8d3236' }}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold text-white mb-3">Zergatik aukeratu gure jatetxea?</h2>
            <p className="lead text-white-50">Bezeroen iritziak</p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="border-0 bg-transparent text-white h-100 testimonial-card">
              <Card.Body className="p-4">
                <div className="stars mb-3">
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning" />
                </div>
                <p className="mb-3">"Kokapen ezin hobea eta jatekoa... miresgarria!"</p>
                <small className="text-white-50 fw-medium">Marta G., Google</small>
              </Card.Body>
            </Card>
          </Col>
          {/* Repite para las otras 2 tarjetas */}
          <Col lg={4}>
            <Card className="border-0 bg-transparent text-white h-100 testimonial-card">
              <Card.Body className="p-4">
                <div className="stars mb-3">
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning" />
                </div>
                <p className="mb-3">"Txuletoiaren puntua perfektua. Datorren astean bueltatuko gara."</p>
                <small className="text-white-50 fw-medium">Iker B., Tripadvisor</small>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 bg-transparent text-white h-100 testimonial-card">
              <Card.Body className="p-4">
                <div className="stars mb-3">
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning me-1" />
                  <BsStarFill className="text-warning" />
                </div>
                <p className="mb-3">"Langileak oso atseginak eta arreta handizkoa."</p>
                <small className="text-white-50 fw-medium">Ana M., Facebook</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

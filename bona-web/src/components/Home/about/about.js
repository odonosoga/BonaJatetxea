import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import './about.css';

const About = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold text-dark mb-3">Guri buruz</h2>
            <p className="lead text-muted">
              Donostiako bihotzean, 20 urte baino gehiagoko esperientziarekin. 
              Euskal sukaldaritza goxoa, lehengoen errezetekin.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="border-0 shadow h-100 rounded-4 hover-card">
              <Card.Body className="text-center p-5">
                <BsStarFill className="text-warning fs-1 mb-3" />
                <h5 className="fw-bold mb-3">Kalitatezko materia primak</h5>
                <p className="text-muted">
                  Tokiko arrantza eta barazkiak egunero merkatuetatik.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow h-100 rounded-4 hover-card">
              <Card.Body className="text-center p-5">
                <BsStarFill className="text-warning fs-1 mb-3" />
                <h5 className="fw-bold mb-3">Familiarako giroa</h5>
                <p className="text-muted">
                  80 pertsonaentzako edukiera, ospakizunetarako perfektua.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow h-100 rounded-4 hover-card">
              <Card.Body className="text-center p-5">
                <BsStarFill className="text-warning fs-1 mb-3" />
                <h5 className="fw-bold mb-3">Menu egokituak</h5>
                <p className="text-muted">
                  Celiacosen eta alergienen menua espezializatua.
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

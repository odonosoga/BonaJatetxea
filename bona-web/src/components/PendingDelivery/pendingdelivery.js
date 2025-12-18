import React from 'react';
import DeliveryCard from './deliverycard';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import './pendingdelivery.css';

const deliveriesMock = [
  { id: 124, cliente: 'Juan Pérez', adress: 'Kale Nagusia 123', total: 25.50, time: '14:30', items: 3, distance: '1.2km' },
  { id: 125, cliente: 'María García', adress: 'Plaza Berria 45', total: 18.90, time: '15:15', items: 2, distance: '800m' },
  { id: 126, cliente: 'Pedro López', adress: 'Av. Nagusia 78', total: 32.00, time: '16:00', items: 5, distance: '2.1km' },
  { id: 127, cliente: 'Ana Ruiz', adress: 'Kale Eguzkia 12', total: 14.75, time: '16:30', items: 1, distance: '450m' },
  { id: 128, cliente: 'Carlos Vega', adress: 'Ibaia Ibilbidea 56', total: 41.20, time: '17:00', items: 7, distance: '3.4km' }
];

const PendingDelivery = () => {
  return (
    <section className="pendingdelivery-section min-vh-100">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1 pt-5">Zain dauden eskaerak</h2>
            <Badge bg="danger" className="fs-6">5 eskuragarri</Badge>
          </div>
          <div className="text-end">
            <small className="text-muted">Duela 2 min eguneratua</small>
          </div>
        </div>
        
        <Row xs={1} sm={2} lg={3} className="g-4">
          {deliveriesMock.map(delivery => (
            <Col key={delivery.id}>
              <DeliveryCard delivery={delivery} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PendingDelivery;

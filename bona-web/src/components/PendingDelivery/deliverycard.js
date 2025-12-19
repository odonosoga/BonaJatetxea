import React from 'react';
import { Card, Button, Badge, Stack } from 'react-bootstrap';
import { BsBoxSeam, BsClockFill, BsGeoAltFill } from 'react-icons/bs';
import './deliverycard.css';

const DeliveryCard = ({ delivery }) => {
  return (
    <Card className="delivery-card shadow-sm border-0">
      <Card.Header className="card-header bg-opacity-10 pb-3">
        <Stack direction="horizontal" gap={2} className="align-items-center">
          <div className="p-2 bg-danger rounded-circle">
            <BsBoxSeam size={28} className='text-white bg'/>
          </div>
          <div>
            <div className="fw-bold small text-white"># {delivery.id}</div>
            <Badge bg="warning">ZAIN</Badge>
          </div>
        </Stack>
      </Card.Header>
      
      <Card.Body>
        <h6 className="fw-bold mb-3">{delivery.cliente}</h6>
        <div className="mb-3">
          <div className="d-flex align-items-center gap-2 mb-1">
            <BsGeoAltFill size={14} className="text-muted" />
            <small className="text-muted">{delivery.adress}</small>
          </div>
          <div className="d-flex align-items-center gap-2">
            <BsClockFill size={14} className="text-muted" />
            <small className="text-muted">{delivery.time}</small>
            <Badge bg="secondary" className="ms-auto">{delivery.distance}</Badge>
          </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-end mt-auto">
          <div>
            <small className="text-muted">Produktu kopurua: {delivery.items}</small>
          </div>
          <div className="text-end">
            <div className="h5 fw-bold text-success mb-1">€{delivery.total}</div>
            <Button size="sm" className="delivery-btn fw-bold px-3 py-2">
              Eskaera onartu
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeliveryCard;

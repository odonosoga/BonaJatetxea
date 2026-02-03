import React from 'react';
import { Card, Button, Badge, Stack } from 'react-bootstrap';
import { BsBoxSeam, BsClockFill, BsGeoAltFill, BsTruck } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import './deliverycard.css';

const DeliveryCard = ({ delivery, onAccept, accepted = false }) => {
  const { t } = useTranslation();

  return (
    <Card className="delivery-card shadow-sm border-0">
      <Card.Header className="card-header bg-opacity-10 pb-3">
        <Stack direction="horizontal" gap={2} className="align-items-center">
          <div className="p-2 bg-danger rounded-circle">
            {delivery.eskaerarenEgoera === 'bidalketan' ? 
              <BsTruck size={28} className='text-white'/> : 
              <BsBoxSeam size={28} className='text-white'/>
            }
          </div>
          <div>
            <div className="fw-bold small text-white"># {delivery.id_eskaera}</div>
            <Badge bg={delivery.eskaerarenEgoera === 'bidalketan' ? "info" : "warning"}>
              {delivery.eskaerarenEgoera === 'bidalketan' ? 'Bidalketan' : 'Zain'}
            </Badge>
          </div>
        </Stack>
      </Card.Header>
      
      <Card.Body>
        <h6 className="fw-bold mb-3">{delivery.entregaHelbidea}</h6>
        <div className="mb-3">
          <div className="d-flex align-items-center gap-2 mb-1">
            <BsGeoAltFill size={14} className="text-muted" />
            <small className="text-muted">{delivery.entregaHelbidea}</small>
          </div>
          <div className="d-flex align-items-center gap-2">
            <BsClockFill size={14} className="text-muted" />
            <small className="text-muted">{delivery.eskaeraData}</small>
            <Badge bg="secondary" className="ms-auto">{delivery.ordainketaMota}</Badge>
          </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-end mt-auto">
          <small className="text-muted">
            {delivery.eskaerarenEgoera}
          </small>
          <div className="text-end">
            <Button 
              size="sm" 
              className="delivery-btn fw-bold px-3 py-2"
              onClick={onAccept}
              disabled={accepted}
            >
              {accepted ? 'Bidalketan' : t("delivery.acceptButton", { defaultValue: 'Onartu' })}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeliveryCard;

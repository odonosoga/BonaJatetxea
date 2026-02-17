import React from 'react';
import { Card, Button, Badge, Stack } from 'react-bootstrap';
import { BsBoxSeam, BsClockFill, BsGeoAltFill, BsTruck, BsCheckCircleFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import './deliverycard.css';

const DeliveryCard = ({ 
  delivery, 
  onAccept, 
  onDeliver, 
  accepted = false, 
  delivered = false 
}) => {
  const { t } = useTranslation();

  const getStatusIcon = () => {
    switch (delivery.eskaerarenEgoera) {
      case 'bidalketan':
        return <BsTruck size={28} className='text-white'/>;
      case 'entregatuta':
        return <BsCheckCircleFill size={28} className='text-white'/>;
      default:
        return <BsBoxSeam size={28} className='text-white'/>;
    }
  };

  const getStatusColor = () => {
    switch (delivery.eskaerarenEgoera) {
      case 'bidalketan':
        return 'info';
      case 'entregatuta':
        return 'success';
      default:
        return 'warning';
    }
  };

  const getStatusText = () => {
    switch (delivery.eskaerarenEgoera) {
      case 'bidalketan':
        return t('delivery.bidalketan');
      case 'entregatuta':
        return t('delivery.entregatuta');
      default:
        return t('delivery.zain');
    }
  };

  const getHeaderBg = () => {
    switch (delivery.eskaerarenEgoera) {
      case 'bidalketan':
        return 'bg-info bg-opacity-10';
      case 'entregatuta':
        return 'bg-success bg-opacity-10';
      default:
        return 'bg-danger bg-opacity-10';
    }
  };

  const showAcceptButton = !accepted && !delivered && onAccept;
  const showDeliverButton = accepted && !delivered && onDeliver;

  return (
    <Card className="delivery-card shadow-sm border-0">
      <Card.Header className={`card-header ${getHeaderBg()} pb-3`}>
        <Stack direction="horizontal" gap={2} className="align-items-center">
          <div className={`p-2 rounded-circle ${
            delivery.eskaerarenEgoera === 'bidalketan' ? 'bg-info' :
            delivery.eskaerarenEgoera === 'entregatuta' ? 'bg-success' : 'bg-danger'
          }`}>
            {getStatusIcon()}
          </div>
          <div>
            <div className="fw-bold small text-white"># {delivery.id_eskaera}</div>
            <Badge bg={getStatusColor()}>
              {getStatusText()}
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
            {t('delivery.status', { status: delivery.eskaerarenEgoera })}
          </small>
          <div className="text-end">
            {showAcceptButton && (
              <Button 
                size="sm" 
                className="delivery-btn fw-bold px-3 py-2 bg-danger text-white border-0"
                onClick={onAccept}
              >
                {t('delivery.acceptButton')}
              </Button>
            )}
            
            {showDeliverButton && (
              <Button 
                size="sm" 
                className="delivery-btn fw-bold px-3 py-2 bg-success text-white border-0"
                onClick={onDeliver}
              >
                {t('delivery.deliverButton')}
              </Button>
            )}
            
            {delivered && (
              <div className="p-2">
                <Badge bg="success" className="fs-6 px-3 py-2">
                  {t('delivery.delivered')}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeliveryCard;

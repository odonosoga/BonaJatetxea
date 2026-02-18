import React, { useState } from 'react';
import { Card, Button, Badge, Stack, InputGroup, Form } from 'react-bootstrap';
import { BsBoxSeam, BsClockFill, BsGeoAltFill, BsTruck, BsCheckCircleFill, BsKeyFill } from 'react-icons/bs';
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
  const [codigoInput, setCodigoInput] = useState('');
  const [codigoError, setCodigoError] = useState(false);

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
        return 'bg-info bg-opacity-90';
      case 'entregatuta':
        return 'bg-success bg-opacity-90';
      default:
        return 'bg-danger bg-opacity-90';
    }
  };

  const showAcceptButton = !accepted && !delivered && onAccept;
  const showDeliverButton = accepted && !delivered && onDeliver;

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
    setCodigoInput(value);
    if (codigoError && value.length > 0) {
      setCodigoError(false);
    }
  };

  const handleDeliverWithCode = () => {
    if (codigoInput.length !== 5 || codigoInput !== delivery.entregaKodea) {
      setCodigoError(true);
      return;
    }
    setCodigoError(false);
    setCodigoInput('');
    onDeliver(delivery.id_eskaera);
  };

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
            <Badge bg={getStatusColor()} className="mt-1">
              {getStatusText()}
            </Badge>
          </div>
        </Stack>
      </Card.Header>
      
      <Card.Body className="p-3">
        {/* INFO PRINCIPAL MISMA ALTURA */}
        <h6 className="fw-bold mb-3 text-dark">{delivery.entregaHelbidea}</h6>
        
        <div className="info-section mb-3">
          {/* Dirección */}
          <div className="info-row mb-2">
            <BsGeoAltFill size={14} className="text-muted me-2" />
            <small className="text-muted fw-medium flex-grow-1">{delivery.entregaHelbidea}</small>
          </div>
          
          {/* Fecha + pago */}
          <div className="info-row">
            <BsClockFill size={14} className="text-muted me-2" />
            <small className="text-muted fw-medium flex-grow-1">{delivery.eskaeraData}</small>
            <Badge bg="secondary" className="fw-semibold">{delivery.ordainketaMota}</Badge>
          </div>
        </div>

        {/* 🔐 CÓDIGO INTEGRADO - SIN FONDO ROJO */}
        {showDeliverButton && (
          <div className="code-section mb-4 p-3 bg-light rounded-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <BsKeyFill size={18} className="me-3 text-primary fw-bold fs-5" />
              <div>
                <h6 className="mb-1 fw-bold text-dark">Kodea baieztatu</h6>
                <small className="text-muted">Bezeroari eska 5 digituen kodea</small>
              </div>
            </div>
            
            <InputGroup size="lg" className="mb-2">
              <Form.Control 
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="12345"
                maxLength="5"
                value={codigoInput}
                onChange={handleInputChange}
                className={`code-input ${codigoError ? 'is-invalid' : ''}`}
                autoFocus
              />
              <Button 
                className="delivery-btn px-5 fw-bold"
                onClick={handleDeliverWithCode}
                disabled={codigoInput.length !== 5}
              >
                Entregatu
              </Button>
            </InputGroup>
            
            {codigoError && (
              <div className="alert alert-danger p-2 small mb-0 border-0">
                <strong>Kode okerra</strong> - Berriro eska bezeroari
              </div>
            )}
          </div>
        )}
        
        {/* BOTONES ABAJO */}
        <div className="d-flex justify-content-between align-items-end mt-auto">
          <small className="text-muted fw-medium">
            {t('delivery.status', { status: delivery.eskaerarenEgoera })}
          </small>
          <div className="text-end">
            {showAcceptButton && (
              <Button 
                size="sm" 
                className="delivery-btn fw-bold px-4 py-2 text-white border-0 w-100"
                onClick={onAccept}
              >
                Onartu
              </Button>
            )}
            
            {delivered && (
              <div className="p-3 bg-success bg-opacity-10 rounded-3">
                <Badge bg="success" className="fs-5 px-4 py-2 fw-bold w-100">
                  Entregatuta
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

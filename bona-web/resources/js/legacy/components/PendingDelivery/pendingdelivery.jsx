import React, { useState, useEffect } from 'react';
import DeliveryCard from './deliverycard';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './pendingdelivery.css';

const PendingDelivery = () => {
  const { t } = useTranslation();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/eskaerak');
      setOrders(response.data || []);
    } catch (error) {
      console.error('Error:', error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.patch(`/eskaerak/${id}`, {
        eskaerarenEgoera: 'bidalketan'
      });
      fetchOrders();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const zainOrders = Array.isArray(orders) ? orders.filter(o => o.eskaerarenEgoera === 'zain') : [];
  const bidalketanOrders = Array.isArray(orders) ? orders.filter(o => o.eskaerarenEgoera === 'bidalketan') : [];

  if (loading) {
    return (
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-danger" role="status"></div>
          <div className="mt-2">{t('pending.loading')}</div>
        </div>
      </Container>
    );
  }

  return (
    <section className="pendingdelivery-section min-vh-100">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1 pt-5">{t('pending.title')}</h2>
          </div>
          <small className="text-muted">{t('pending.autoRefresh')}</small>
        </div>
        
        {/* ZAIN DAUDEN */}
        <div className="mb-5">
          <h4 className="fw-bold mb-3 text-danger">{t('pending.zainTitle')}</h4>
          <Row xs={1} sm={2} lg={3} className="g-4">
            {zainOrders.length === 0 ? (
              <Col xs={12} className="text-center py-5">
                <div className="text-muted">{t('pending.noZain')}</div>
              </Col>
            ) : (
              zainOrders.map(order => (
                <Col key={order.id_eskaera}>
                  <DeliveryCard 
                    delivery={order} 
                    onAccept={() => handleAccept(order.id_eskaera)}
                  />
                </Col>
              ))
            )}
          </Row>
        </div>

        {/* BIDALKETAN DAUDEN */}
        <div>
          <h4 className="fw-bold mb-3 text-info">
            {t('pending.bidalketaTitle')} <Badge bg="info">{bidalketanOrders.length}</Badge>
          </h4>
          <Row xs={1} sm={2} lg={3} className="g-4">
            {bidalketanOrders.length === 0 ? (
              <Col xs={12} className="text-center py-5">
                <div className="text-muted">{t('pending.noBidalketa')}</div>
              </Col>
            ) : (
              bidalketanOrders.map(order => (
                <Col key={order.id_eskaera}>
                  <DeliveryCard delivery={order} accepted={true} />
                </Col>
              ))
            )}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PendingDelivery;

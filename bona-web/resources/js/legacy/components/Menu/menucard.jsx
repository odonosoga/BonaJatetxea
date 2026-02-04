import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { usePage } from '@inertiajs/react'; 
import { useCart } from '../cartcontext/CartContext'; 
import './menucard.css';

const MenuCard = ({ dish, cantidad, setCantidad }) => {
  const { t } = useTranslation();
  const { auth } = usePage().props; 
  const { addToCart } = useCart(); 

  const handleAddClick = () => {
    if (!auth.user) {
      const event = new CustomEvent('open-login-modal');
      window.dispatchEvent(event);
      return;
    }
    if (addToCart) {
      addToCart(dish, cantidad);
    }
  };

  return (
    <Card className="menu-card shadow-sm border-0 mb-4 h-100 overflow-hidden" style={{ borderRadius: '15px' }}>
      <Card.Header className="menu-card-header border-0 p-2 text-center" style={{ backgroundColor: '#fdf8f4' }}>
        <img 
          src={dish.img} 
          alt={dish.name} 
          style={{ 
            width: '100%', 
            height: '190px', 
            objectFit: 'cover',
            borderRadius: '12px' 
          }} 
        />
        <h4 className="mt-2 fw-bold mb-0" style={{ color: '#fdf8f4', fontSize: '1.1rem' }}>
            {dish.name}
        </h4>
      </Card.Header>

      <Card.Body className="d-flex flex-column px-3 py-1 bg-white text-dark text-start">
        <div className="menu-info text-start" style={{ flex: '1' }}>
          <p className="mb-1 text-start" style={{ fontSize: '1rem', lineHeight: '1.2' }}>
            <strong>{t("menu.labelDescription")}:</strong> {dish.description}
          </p>
          <p className="mb-1 text-start" style={{ fontSize: '1rem', lineHeight: '1.2' }}>
            <strong>{t("menu.labelIngredients")}:</strong> {dish.ingredients}
          </p>
          
          {/* Eliminado mt-1 para que el precio suba */}
          <div className="text-start mt-0">
            <span className="fw-bold" style={{ fontSize: '1.2rem', color: '#C34F5A' }}>
              {dish.price}€
            </span>
          </div>
        </div>

        {/* CONTENEDOR DE BOTONES: Eliminado pt-1 para reducir margen con el precio */}
        <div className="d-flex justify-content-between align-items-center border-top pt-2 pb-2">
          <Button 
            className="menu-btn fw-bold px-3 py-2" // ✅ Aumentado height con py-2
            style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}
            onClick={handleAddClick}
          >
            {t("menu.buttonAdd")}
          </Button>

          {/* Selector de cantidad con height ajustado */}
          <div 
            className="d-flex align-items-center gap-2 bg-light rounded-pill px-2 border-0"
            style={{ height: '42px' }} // ✅ Altura fija para que combine con el botón
          >
            <Button
              size="sm"
              className="menu-botonkant border-0 bg-transparent text-dark fw-bold"
              style={{ fontSize: '1.2rem', padding: '0 5px' }}
              onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
            > - </Button>
            <span className="fw-bold" style={{ fontSize: '1.1rem' }}>
                {cantidad}
            </span>
            <Button
              size="sm"
              className="menu-botonkant border-0 bg-transparent text-dark fw-bold"
              style={{ fontSize: '1.2rem', padding: '0 5px' }}
              onClick={() => setCantidad(cantidad + 1)}
            > + </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
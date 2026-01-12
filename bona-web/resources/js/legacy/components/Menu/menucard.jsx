// COMPONENTE: MenuCard
// Traducciones necesarias: menu.labelDescription, menu.labelIngredients, menu.labelPrice, menu.buttonAdd

import React from 'react';
import { Card, Button, Stack } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './menucard.css';

const MenuCard = ({ dish, cantidad, setCantidad }) => {
  const { t } = useTranslation();

  return (
    <Card className="delivery-card shadow-sm border-0 mb-4">
      {/* Header rojo con imagen y nombre */}
      <Card.Header className="card-header d-flex align-items-center gap-3 p-3">
        <img 
          src={dish.img} 
          alt={dish.name} 
          style={{ width: '80%', height: '200px', objectFit: 'cover', borderRadius: '8px', display:'flex', justifyContent:'center'  }}
        />
        <h5 className="text-white mb-0">{dish.name}</h5>
      </Card.Header>

      <Card.Body className="d-flex flex-column">
        <p className="mb-1">
          <strong>{t("menu.labelDescription")}:</strong> {dish.description}
        </p>
        <p className="mb-1">
          <strong>{t("menu.labelIngredients")}:</strong> {dish.ingredients}
        </p>
        <p className="mb-2">
          <strong>{t("menu.labelPrice")}:</strong> €{dish.price}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Button 
            size="sm" 
            className="delivery-btn fw-bold px-3 py-2"
          >
            {t("menu.buttonAdd")}
          </Button>

          <div className="d-flex align-items-center gap-2">
            <Button 
              size="sm" 
              className="btn-outline-light" 
              onClick={() => setCantidad(prev => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </Button>
            <span className="mx-2">{cantidad}</span>
            <Button 
              size="sm" 
              className="btn-outline-light" 
              onClick={() => setCantidad(prev => prev + 1)}
            >
              +
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;

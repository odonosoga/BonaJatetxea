import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './menucard.css';

const MenuCard = ({ dish, cantidad, setCantidad }) => {
  const { t } = useTranslation();

  return (
    <Card className="menu-card shadow-sm border-0 mb-4">
      <Card.Header className="menu-card-header">
        <img src={dish.img} alt={dish.name} />
        <h5>{dish.name}</h5>
      </Card.Header>

      <Card.Body className="d-flex flex-column menu-card-body">
        <div>
          <p className="mb-1">
            <strong>{t("menu.labelDescription")}:</strong> {dish.description}
          </p>
          <p className="mb-1">
            <strong>{t("menu.labelIngredients")}:</strong> {dish.ingredients}
          </p>
          <p className="mb-2">
            <strong>{t("menu.labelPrice")}:</strong> €{dish.price}
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Button size="sm" className="menu-btn fw-bold px-3 py-2">
            {t("menu.buttonAdd")}
          </Button>

          <div className=" d-flex align-items-center gap-2">
            <Button
              size="sm"
              className="menu-botonkant"
              onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
            >
              -
            </Button>
            <span>{cantidad}</span>
            <Button
              size="sm"
              className="menu-botonkant"
              onClick={() => setCantidad(cantidad + 1)}
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

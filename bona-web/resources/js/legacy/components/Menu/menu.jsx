import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import heroImg from "../../img/menu.jpeg";
import './menu.css';

import sopa from "../../img/lentejas.jpg";
import crema from "../../img/crema.jpg";
import pollo from "../../img/pollo.jpg";
import carne2 from "../../img/carne2.jpg";
import pescado from "../../img/pescado.jpeg";
import pescado2 from "../../img/pescado2.jpg";
import ensalada from "../../img/ensalada.jpg";
import pisto from "../../img/pisto.jpg";
import pasta from "../../img/pasta.jpeg";
import arroz from "../../img/arroz.jpg";
import postre1 from "../../img/postre1.jpg";
import postre2 from "../../img/postre2.jpg";
import MenuCard from './menucard';

const HeroReserva = () => {
  const { t } = useTranslation();

  return (
    <section
      className="hero-reserva"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <Container className="h-100">
          <Row className="h-100 align-items-center justify-content-center">
            <Col md={8} className="text-center text-white">
              <h1 className="display-4 fw-bold mb-3">
                {t("menu.heroTitle")}
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

const Menu = () => {
  const { t } = useTranslation();

  // Array de platos solo con la key y sección
  const [platos, setPlatos] = useState([
    { id: 1, img: sopa, key: "lentilSoup", section: t("menu.sectionStarters"), price: 5, cantidad: 1 },
    { id: 2, img: crema, key: "garlicCream", section: t("menu.sectionStarters"), price: 4, cantidad: 1 },
    { id: 3, img: pollo, key: "roastChicken", section: t("menu.sectionMeat"), price: 8, cantidad: 1 },
    { id: 4, img: carne2, key: "beefTenderloin", section: t("menu.sectionMeat"), price: 10, cantidad: 1 },
    { id: 5, img: pescado, key: "grilledFish", section: t("menu.sectionFish"), price: 12, cantidad: 1 },
    { id: 6, img: pescado2, key: "bakedSalmon", section: t("menu.sectionFish"), price: 14, cantidad: 1 },
    { id: 7, img: ensalada, key: "mixedSalad", section: t("menu.sectionVegetables"), price: 5, cantidad: 1 },
    { id: 8, img: pisto, key: "homemadePisto", section: t("menu.sectionVegetables"), price: 6, cantidad: 1 },
    { id: 9, img: pasta, key: "spaghettiBolognese", section: t("menu.sectionPastaRice"), price: 7, cantidad: 1 },
    { id: 10, img: arroz, key: "seafoodPaella", section: t("menu.sectionPastaRice"), price: 6, cantidad: 1 },
    { id: 11, img: postre1, key: "grandmaCake", section: t("menu.sectionDesserts"), price: 3, cantidad: 1 },
    { id: 12, img: postre2, key: "frenchToast", section: t("menu.sectionDesserts"), price: 4, cantidad: 1 },
  ]);

  const grouped = platos.reduce((acc, dish) => {
    if (!acc[dish.section]) acc[dish.section] = [];
    acc[dish.section].push(dish);
    return acc;
  }, {});

  return (
    <>
      <HeroReserva />

      <section id="menua" className="menu-section">
        <Container fluid className="p-4 d-flex flex-column align-items-center">
          {Object.keys(grouped).map((section) => (
            <div key={section} className="w-100 mb-5">
              <h3 className="text-center mb-4">{section}</h3>
              <Row className="g-4 justify-content-center">
                {grouped[section].map(dish => (
                  <Col key={dish.id} md={6} lg={4}>
                    <MenuCard 
                      dish={{
                        ...dish,
                        name: t(`menu.dishes.${dish.key}.name`),
                        description: t(`menu.dishes.${dish.key}.description`),
                        ingredients: t(`menu.dishes.${dish.key}.ingredients`)
                      }}
                      cantidad={dish.cantidad} 
                      setCantidad={(newCantidad) => {
                        setPlatos(prev => prev.map(d => d.id === dish.id ? {...d, cantidad: newCantidad} : d));
                      }} 
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Menu;

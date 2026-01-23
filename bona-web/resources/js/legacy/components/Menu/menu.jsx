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

const HeroMenu = () => {
  const { t } = useTranslation();

  return (
    <section
      className="hero-menu"
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

  const [platos, setPlatos] = useState([
    { id: 1, img: sopa, sectionKey: "starters", key: "lentilSoup", price: 5, cantidad: 1 },
    { id: 2, img: crema, sectionKey: "starters", key: "garlicCream", price: 4, cantidad: 1 },
    { id: 3, img: pollo, sectionKey: "meat", key: "roastChicken", price: 8, cantidad: 1 },
    { id: 4, img: carne2, sectionKey: "meat", key: "beefTenderloin", price: 10, cantidad: 1 },
    { id: 5, img: pescado, sectionKey: "fish", key: "grilledFish", price: 12, cantidad: 1 },
    { id: 6, img: pescado2, sectionKey: "fish", key: "bakedSalmon", price: 14, cantidad: 1 },
    { id: 7, img: ensalada, sectionKey: "vegetables", key: "mixedSalad", price: 5, cantidad: 1 },
    { id: 8, img: pisto, sectionKey: "vegetables", key: "homemadePisto", price: 6, cantidad: 1 },
    { id: 9, img: pasta, sectionKey: "pastaRice", key: "spaghettiBolognese", price: 7, cantidad: 1 },
    { id: 10, img: arroz, sectionKey: "pastaRice", key: "seafoodPaella", price: 6, cantidad: 1 },
    { id: 11, img: postre1, sectionKey: "desserts", key: "grandmaCake", price: 3, cantidad: 1 },
    { id: 12, img: postre2, sectionKey: "desserts", key: "frenchToast", price: 4, cantidad: 1 },
  ]);

  // ✅ TRADUCE sectionKey → sectionName
  const grouped = platos.reduce((acc, dish) => {
    const sectionKey = dish.sectionKey;
    const sectionName = t(`menu.section${sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}`);
    
    if (!acc[sectionName]) {
      acc[sectionName] = [];
    }
    acc[sectionName].push(dish);
    return acc;
  }, {});

  return (
    <>
      <HeroMenu />

      <section id="menua" className="menu-section">
        <Container fluid className="p-4 d-flex flex-column align-items-center">
          <div className="menu-cards-wrapper w-100">
            {Object.keys(grouped).map((sectionName) => (
              <div key={sectionName} className="mb-5">
                {/* ✅ sectionName YA TRADUCIDO */}
                <h3 className="text-center mb-4">{sectionName}</h3>
                <Row className="g-4 justify-content-center">
                  {grouped[sectionName].map(dish => (
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default Menu;

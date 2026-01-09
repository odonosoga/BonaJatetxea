// PÁGINA: Menu / Karta
// Traducciones necesarias: menu.heroTitle,
// menu.sectionStarters, menu.sectionMeat, menu.sectionFish, menu.sectionVegetables,
// menu.sectionPastaRice, menu.sectionDesserts,
// menu.labelName, menu.labelDescription, menu.labelIngredients, menu.labelPrice,
// menu.buttonAdd

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./menu.css";
import sopa from "../../img/lentejas.jpg";
import pollo from "../../img/pollo.jpg";
import pescado from "../../img/pescado.jpeg";
import pescado2 from "../../img/pescado2.jpg";
import ensalada from "../../img/ensalada.jpg";
import pisto from "../../img/pisto.jpg";
import crema from "../../img/crema.jpg";
import carne2 from "../../img/carne2.jpg";
import pasta from "../../img/pasta.jpeg";
import arroz from "../../img/arroz.jpg";
import postre1 from "../../img/postre1.jpg";
import postre2 from "../../img/postre2.jpg";
import heroImg from "../../img/menu.jpeg";

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

  const [cantidadSopa, setCantidadSopa] = useState(1);
  const [cantidadCrema, setCantidadCrema] = useState(1);
  const [cantidadPollo, setCantidadPollo] = useState(1);
  const [cantidadCarne2, setCantidadCarne2] = useState(1);
  const [cantidadPescado, setCantidadPescado] = useState(1);
  const [cantidadPescado2, setCantidadPescado2] = useState(1);
  const [cantidadEnsalada, setCantidadEnsalada] = useState(1);
  const [cantidadPisto, setCantidadPisto] = useState(1);
  const [cantidadPasta, setCantidadPasta] = useState(1);
  const [cantidadArroz, setCantidadArroz] = useState(1);
  const [cantidadPostre1, setCantidadPostre1] = useState(1);
  const [cantidadPostre2, setCantidadPostre2] = useState(1);

  return (
    <>
      <HeroReserva />

      <section id="menua" className="menu-section">
        <Container fluid className="p-0 d-flex flex-column align-items-center">
          <div className="menu-card p-4 w-100">
            {/* Koilara Platerrak */}
            <h3 className="mb-3 text-center">{t("menu.sectionStarters")}</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={sopa}
                  alt="Sopa"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Lekale-Sopea
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Berotutako eta elikagarria lekale-sopea
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Lekaleak, azenarioa, patata, tipula, baratxuria
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 5€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadSopa((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadSopa}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadSopa((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img
                  src={crema}
                  alt="Crema"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Baratxuri-Krema
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Baratxuri freskoekin egindako krema leuna
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Azenarioa, kalabazin, patata, tipula
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 4€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadCrema((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadCrema}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadCrema((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Haragia */}
            <h3 className="mb-3 text-center">{t("menu.sectionMeat")}</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={pollo}
                  alt="Pollo"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Oilar-Erribera Asada
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Oilar xurgatua eta goxoa labean egina
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Oilar-erribera, olio berdea, gatza, piperra, baratxuria
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 8€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPollo((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPollo}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPollo((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img
                  src={carne2}
                  alt="Carne 2"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Txahal-Solomiloa Patata Purearekin
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Solomiloa labean egina, patata purearekin
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Txahal-solomiloa, gatza, piperra, olio berdea, patata, gurina, esnea
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 10€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadCarne2((prev) =>
                            prev > 1 ? prev - 1 : 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadCarne2}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadCarne2((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Arraina */}
            <h3 className="mb-3 text-center">{t("menu.sectionFish")}</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={pescado}
                  alt="Pescado"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Arrain Planoa
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Eguneko arrain freskoa planan egina
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Arraina, limoi, olioa, gatza
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 12€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPescado((prev) =>
                            prev > 1 ? prev - 1 : 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPescado}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPescado((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img
                  src={pescado2}
                  alt="Pescado 2"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Labean egindako Izokina
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Izokina labean egina, belar freskoekin
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Izokina, limoi, baratxuria, olioa
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 14€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPescado2((prev) =>
                            prev > 1 ? prev - 1 : 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPescado2}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPescado2((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Barazkiak */}
            <h3 className="mb-3 text-center">{t("menu.sectionVegetables")}</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={ensalada}
                  alt="Ensalada"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Nahasketa-Entsalada
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Letxuga, tomate eta tipula freskoko nahasketa
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Letxuga, tomatea, tipula, olibak, olioa
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 5€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadEnsalada((prev) =>
                            prev > 1 ? prev - 1 : 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadEnsalada}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadEnsalada((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img
                  src={pisto}
                  alt="Pisto"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Pisto Etxekoa
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Baratxuri tradizionaleko estofatua
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Tomatea, kalabazin, piperra, tipula, olioa
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 6€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPisto((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPisto}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPisto((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Pasta eta Arroza */}
            <h3 className="mb-3 text-center">{t("menu.sectionPastaRice")}</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={pasta}
                  alt="Pasta"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Espageti Boloñesa
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Etxeko boloñesa saltsa goxodun pasta
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Espagetiak, haragia, tomate, tipula, baratxuria
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 7€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPasta((prev) =>
                            prev > 1 ? prev - 1 : 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPasta}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPasta((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img
                  src={arroz}
                  alt="Arroz"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Marisko-paella
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Arroza, ganbak eta muskuiluak dituen paella tradizionala
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Arroza, ganbak, muskuiluak, kalamarrua, piperrak, baratxuria, olio berdea, gatza, azafrán
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 6€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadArroz((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadArroz}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadArroz((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Postreak */}
            <h3 className="mb-3 text-center">{t("menu.sectionDesserts")}</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={postre1}
                  alt="Postre1"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Amonaren Tarta
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Galleta eta kremazko geruzekin egindako tarta goxoa
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> María galletak, esnea, azukrea, arrautzak, gurina, bainilla esentzia
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 3€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPostre1((prev) =>
                            prev > 1 ? prev - 1 : 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPostre1}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPostre1((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img
                  src={postre2}
                  alt="Postre2"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>{t("menu.labelName")}:</strong> Torrija
                  </label>
                  <label>
                    <strong>{t("menu.labelDescription")}:</strong> Torrija kremazkoa, kókoa izozkiarekin
                  </label>
                  <label>
                    <strong>{t("menu.labelIngredients")}:</strong> Ogi xerra, esnea, azukrea, kanela hautsean, arrautzak, oliba olioa, limoiko zurtoina
                  </label>
                  <label>
                    <strong>{t("menu.labelPrice")}:</strong> 4€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">
                      {t("menu.buttonAdd")}
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPostre2((prev) =>
                            prev > 1 ? prev - 1 : 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPostre2}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() =>
                          setCantidadPostre2((prev) => prev + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Menu;
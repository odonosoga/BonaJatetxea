import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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

const HeroReserva = () => (
  <section
    className="hero-reserva"
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    <div className="hero-overlay">
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={8} className="text-center text-white">
            <h1 className="display-4 fw-bold mb-3">Karta</h1>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

const Menu = () => {
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
            <h3 className="mb-3 text-center">Zapore Platerrak</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={sopa}
                  alt="Sopa"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>Izena:</strong> Lekale-Sopea
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Berotutako eta elikagarria
                    lekale-sopea
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Lekaleak, azenarioa, patata,
                    tipula, baratxuria
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 5€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
                    <strong>Izena:</strong> Baratxuri-Krema
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Baratxuri freskoekin
                    egindako krema leuna
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Azenarioa, kalabazin, patata,
                    tipula
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 4€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
            <h3 className="mb-3 text-center">Haragia</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={pollo}
                  alt="Pollo"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>Izena:</strong> Oilar-Erribera Asada
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Oilar xurgatua eta goxoa
                    labean egina
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Oilar-erribera, olio berdea,
                    gatza, piperra, baratxuria
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 8€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
                    <strong>Izena:</strong> Txahal-Solomiloa Patata Purearekin
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Solomiloa labean egina,
                    patata purearekin
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Txahal-solomiloa, gatza,
                    piperra, olio berdea, patata, gurina, esnea
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 10€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
            <h3 className="mb-3 text-center">Arrainak</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={pescado}
                  alt="Pescado"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>Izena:</strong> Arrain Planoa
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Eguneko arrain freskoa
                    planan egina
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Arraina, limoi, olioa, gatza
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 12€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
                    <strong>Izena:</strong> Labean egindako Izokina
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Izokina labean egina, belar
                    freskoekin
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Izokina, limoi, baratxuria,
                    olioa
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 14€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
            <h3 className="mb-3 text-center">Barazkiak</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={ensalada}
                  alt="Ensalada"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>Izena:</strong> Nahasketa-Entsalada
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Letxuga, tomate eta tipula
                    freskoko nahasketa
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Letxuga, tomatea, tipula, olibak,
                    olioa
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 5€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
                    <strong>Izena:</strong> Pisto Etxekoa
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Baratxuri tradizionaleko
                    estofatua
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Tomatea, kalabazin, piperra,
                    tipula, olioa
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 6€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
            <h3 className="mb-3 text-center">Pasta eta Arroza</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={pasta}
                  alt="Pasta"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>Izena:</strong> Espageti Boloñesa
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Etxeko boloñesa saltsa
                    goxodun pasta
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Espagetiak, haragia, tomate,
                    tipula, baratxuria
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 7€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
                    <strong>Izena:</strong> Marisko-paella
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Arroza, ganbak eta
                    muskuiluak dituen paella tradizionala
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Arroza, ganbak, muskuiluak,
                    kalamarrua, piperrak, baratxuria, olio berdea, gatza,
                    azafrán
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 6€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
            <h3 className="mb-3 text-center">Postreak</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img
                  src={postre1}
                  alt="Postre1"
                  className="div-img me-md-3 mb-3 mb-md-0 img-fluid"
                />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label>
                    <strong>Izena:</strong> Amonaren Tarta
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Galleta eta kremazko
                    geruzekin egindako tarta goxoa
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> María galletak, esnea, azukrea,
                    arrautzak, gurina, bainilla esentzia
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 3€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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
                    <strong>Izena:</strong> Torrija
                  </label>
                  <label>
                    <strong>Deskribapena:</strong> Torrija kremazkoa, kókoa
                    izozkiarekin
                  </label>
                  <label>
                    <strong>Osagaiak:</strong> Ogi xerra, esnea, azukrea,
                    kanela hautsean, arrautzak, oliba olioa, limoiko zurtoina
                  </label>
                  <label>
                    <strong>Prezioa:</strong> 4€
                  </label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
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

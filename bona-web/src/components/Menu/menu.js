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
            <p className="lead mb-0">
              Idatzi zure ideia, galdera edo eskaera eta harremanetan jarriko gara.
            </p>
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
            <h3 className="mb-3 text-center">Koilara Platerrak</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img src={sopa} alt="Sopa" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadSopa(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadSopa}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadSopa(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img src={crema} alt="Crema" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadCrema(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadCrema}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadCrema(prev => prev + 1)}
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
                <img src={pollo} alt="Pollo" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPollo(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPollo}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPollo(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img src={carne2} alt="Carne 2" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadCarne2(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadCarne2}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadCarne2(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

            </Row>

            {/* Arraina */}
            <h3 className="mb-3 text-center">Arraina</h3>
            <Row className="d-flex justify-content-center align-items-start mb-4 w-100">

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                <img src={pescado} alt="Pescado" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPescado(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPescado}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPescado(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img src={pescado2} alt="Pescado 2" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPescado2(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPescado2}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPescado2(prev => prev + 1)}
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
                <img src={ensalada} alt="Ensalada" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadEnsalada(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadEnsalada}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadEnsalada(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img src={pisto} alt="Pisto" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPisto(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPisto}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPisto(prev => prev + 1)}
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
                <img src={pasta} alt="Pasta" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPasta(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPasta}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPasta(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img src={arroz} alt="Arroz" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadArroz(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadArroz}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadArroz(prev => prev + 1)}
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
                <img src={postre1} alt="Postre 1" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPostre1(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPostre1}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPostre1(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="janari-col d-flex flex-column flex-md-row align-items-center">
                <img src={postre2} alt="Postre 2" className="div-img me-md-3 mb-3 mb-md-0" />
                <div className="d-flex flex-column justify-content-center align-items-md-start align-items-center m-3">
                  <label className="fw-bold">Izena:</label>
                  <label className="fw-bold">Deskripzioa:</label>
                  <label className="fw-bold">Osagaiak:</label>
                  <label className="fw-bold">Prezioa:</label>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <button className="btn btn-success btn-sm">Gehitu</button>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPostre2(prev => (prev > 1 ? prev - 1 : 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{cantidadPostre2}</span>
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setCantidadPostre2(prev => prev + 1)}
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

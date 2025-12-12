import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./menu.css";
import sopa from "../../img/images.jpeg";
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

const Menu = () => {
    return (
        <section id="menua" className="menu-section">
            <Container fluid className="p-0 d-flex flex-column align-items-center">
                <h2 className="text-center mb-4">Menu</h2>

                <div className="menu-card p-4">

                    {/* Kozulekuko Platerak */}
                    <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                        <div className="offset-5 d-flex justify-content-center">
                            <h3>Koilarako Platerak</h3>
                        </div>
                        <div>
                            <select className="form-select">
                                <option>Prezio ↓</option>
                                <option>Prezio ↑</option>
                                <option>Alfabetikoki ↓</option>
                                <option>Alfabetikoki ↑</option>
                            </select>
                        </div>
                    </div>


                    <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
                        <Col className="janari-col d-flex mb-3 mb-md-0">
                            <img src={sopa} alt="Sopa" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>

                        <Col className="d-flex">
                            <img src={crema} alt="Crema" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>
                    </Row>

                    {/* Haragia */}
                    <h3 className="mb-3">Haragia</h3>
                    <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
                        <Col className="janari-col d-flex mb-3 mb-md-0">
                            <img src={pollo} alt="Pollo" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>

                        <Col className="d-flex">
                            <img src={carne2} alt="Carne 2" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>
                    </Row>

                    {/* Arraina */}
                    <h3 className="mb-3">Arraina</h3>
                    <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
                        <Col className="janari-col d-flex mb-3 mb-md-0">
                            <img src={pescado} alt="Pescado" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>

                        <Col className="d-flex">
                            <img src={pescado2} alt="Pescado 2" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>
                    </Row>

                    {/* Barazkiak */}
                    <h3 className="mb-3">Barazkiak</h3>
                    <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
                        <Col className="janari-col d-flex mb-3 mb-md-0">
                            <img src={ensalada} alt="Ensalada" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>

                        <Col className="d-flex">
                            <img src={pisto} alt="Pisto" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>
                    </Row>


                    {/* Pasta eta Arroza */}
                    <h3 className="mb-3">Pasta eta Arroza</h3>
                    <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
                        <Col className="janari-col d-flex mb-3 mb-md-0">
                            <img src={pasta} alt="Pasta" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <img src={arroz} alt="Arroz" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>
                    </Row>

                    {/* Postreak */}
                    <h3 className="mb-3">Postreak</h3>
                    <Row className="d-flex justify-content-center align-items-start mb-4 w-100">
                        <Col className="janari-col d-flex mb-3 mb-md-0">
                            <img src={postre1} alt="Postre 1" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <img src={postre2} alt="Postre 2" className="div-img me-2" />
                            <div className="d-flex flex-column justify-content-center align-items-start m-3">
                                <label className="fw-bold">Izena:</label>
                                <label className="fw-bold">Deskripzioa:</label>
                                <label className="fw-bold">Osagaiak:</label>
                                <label className="fw-bold">Prezioa:</label>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </section>
    );
};

export default Menu;

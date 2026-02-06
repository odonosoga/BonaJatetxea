import { Col, Container, Form, Row, Modal, Card } from 'react-bootstrap';
import { useForm, router } from '@inertiajs/react';
import './payform.css';
import { useState } from 'react';
import { CreditCard, LockFill, BagCheckFill } from 'react-bootstrap-icons'; 
import { useCart } from '../cartcontext/CartContext'; 

const PayForm = () => {
    const { cartItems, cartTotal, clearCart } = useCart(); 
    const { data, setData } = useForm({ payment_method: 'visa' });
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleFinalize = () => {
        clearCart(); 
        router.visit('/');
    };

    return (
        <section id="ordainketa" className="register-section py-5">
            <Container>
                <Row className="align-items-end">
                    {/* COLUMNA IZQUIERDA: FORMULARIO */}
                    <Col xs={12} lg={7}>
                        <div className="register-form w-100 shadow-sm bg-white p-4" style={{ borderRadius: '15px' }}>
                            <h2 className="fw-bold text-dark fs-4 mb-4 text-center">
                                Ordainketa Formularioa
                            </h2>
                            
                            <Form onSubmit={handleSubmit}>
                                <h6 className="text-uppercase fw-bold text-muted small mb-3">Bidalketa Datuak</h6>
                                <Row className="g-2">
                                    <Col md={6}><Form.Group className="mb-3"><Form.Label className="fw-medium">Izena</Form.Label><Form.Control type="text" required /></Form.Group></Col>
                                    <Col md={6}><Form.Group className="mb-3"><Form.Label className="fw-medium">Abizena</Form.Label><Form.Control type="text" required /></Form.Group></Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">Email Helbidea</Form.Label>
                                    <Form.Control type="email" required />
                                </Form.Group>

                                <Row className="g-2">
                                    <Col md={8}><Form.Group className="mb-3"><Form.Label className="fw-medium">Helbidea</Form.Label><Form.Control type="text" required /></Form.Group></Col>
                                    <Col md={4}><Form.Group className="mb-3"><Form.Label className="fw-medium">Posta Kodea</Form.Label><Form.Control type="text" required /></Form.Group></Col>
                                </Row>

                                <hr className="my-4" />
                                <h6 className="text-uppercase fw-bold text-muted small mb-3 d-flex align-items-center">
                                    <CreditCard className="me-2" /> Ordainketa Metodoa
                                </h6>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">Txartel Mota</Form.Label>
                                    <Form.Select value={data.payment_method} onChange={(e) => setData('payment_method', e.target.value)}>
                                        <option value="visa">Visa</option>
                                        <option value="mastercard">Mastercard</option>
                                        <option value="amex">American Express</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">Txartel Zenbakia</Form.Label>
                                    <Form.Control type="text" placeholder="0000 0000 0000 0000" required />
                                </Form.Group>

                                <Row className="g-2">
                                    <Col md={7}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">Iraungitze-data</Form.Label>
                                            <Form.Control type="text" placeholder="MM/YY" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={5}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">CVV</Form.Label>
                                            <Form.Control type="password" placeholder="123" maxLength="3" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="text-muted small mb-4 d-flex align-items-center">
                                    <LockFill className="me-1 text-success" /> Ordainketa segurua eta enkriptatua.
                                </div>

                                <button type="submit" className="btn-register fw-bold w-100 py-3">
                                    Bidalketa Konfirmatu
                                </button>
                            </Form>
                        </div>
                    </Col>

                    {/* COLUMNA DERECHA: RESUMEN DEL PEDIDO */}
                    <Col xs={12} lg={5} className="mt-4 mt-lg-0">
                        <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
                            <Card.Header className="bg-register text-white py-3" style={{ borderRadius: '15px 15px 0 0' }}>
                                <h5 className="mb-0 fs-6 d-flex align-items-center">
                                    <BagCheckFill className="me-2" /> Eskaeraren Laburpena
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                            <div className="d-flex align-items-center">
                                                <img 
                                                    src={item.img} 
                                                    alt={item.name} 
                                                    style={{ 
                                                        width: '50px', 
                                                        height: '50px', 
                                                        objectFit: 'cover', 
                                                        borderRadius: '8px',
                                                        marginRight: '12px'
                                                    }} 
                                                />
                                                <div>
                                                    <div className="fw-bold small">{item.name}</div>
                                                    <div className="text-muted small">Kopurua: {item.quantity}</div>
                                                </div>
                                            </div>
                                            <span className="fw-bold text-register">{item.price * item.quantity}€</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 pt-2 border-top">
                                    <div className="d-flex justify-content-between fw-bold fs-5">
                                        <span>GUZTIRA:</span>
                                        <span className="text-register">{cartTotal}€</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* MODAL DE AGRADECIMIENTO */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered backdrop="static">
                <Modal.Body className="text-center py-5">
                    <h2 className="fw-bold mb-3" style={{ color: '#8d3236' }}>
                        Eskerrik asko zure erosketarengatik!
                    </h2>
                    <h5 className="text-muted">Ahalik eta azkarren iritsiko da.</h5>
                </Modal.Body>
                <Modal.Footer className="border-0 justify-content-center">
                    <button className="btn-register px-5 py-2" onClick={handleFinalize}>
                        Hasierara Itzuli
                    </button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default PayForm;
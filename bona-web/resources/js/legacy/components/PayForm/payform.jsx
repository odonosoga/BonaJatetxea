import { Col, Container, Form, Row, Modal, Card } from 'react-bootstrap';
import { useForm, router } from '@inertiajs/react';
import './payform.css';
import { useState } from 'react';
import { CreditCard, LockFill, BagCheckFill } from 'react-bootstrap-icons'; 
import { useCart } from '../cartcontext/CartContext'; 

const PayForm = () => {
    const { cartItems, cartTotal, clearCart } = useCart(); 
    
    const { data, setData, post, processing, errors, reset } = useForm({ 
        name: '',
        surname: '',
        email: '',
        address: '',
        postal_code: '',
        payment_method: 'visa',
        cartItems: [],
        cartTotal: 0
    });
    
    const [showModal, setShowModal] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('📤 Enviando:', data);
        
        post('/eskaerak', {
            onSuccess: () => {
                console.log('✅ Controller OK - Mostrando popup');
                setSubmitSuccess(true);
                setShowModal(true);  // 🔥 POPUP SIEMPRE
            },
            onError: (errors) => {
                console.error('❌ Error:', errors);
            }
        });
    };

    const handleFinalize = () => {
        reset();
        clearCart();
        setShowModal(false);
        setSubmitSuccess(false);
        router.visit('/');
    };

    return (
        <section id="ordainketa" className="register-section py-5">
            <Container>
                <Row className="align-items-end">
                    <Col xs={12} lg={7}>
                        <div className="register-form w-100 shadow-sm bg-white p-4" style={{ borderRadius: '15px' }}>
                            <h2 className="fw-bold text-dark fs-4 mb-4 text-center">Ordainketa Formularioa</h2>
                            
                            {Object.keys(errors).length > 0 && (
                                <div className="alert alert-danger small p-3 mb-3">
                                    <strong>❌ Erroak:</strong><br/>
                                    {Object.entries(errors).map(([field, msg]) => (
                                        <small key={field} className="d-block">{field}: {msg}</small>
                                    ))}
                                </div>
                            )}
                            
                            <Form onSubmit={handleSubmit}>
                                <h6 className="text-uppercase fw-bold text-muted small mb-3">📍 Bidalketa Datuak</h6>
                                
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-medium small mb-1">Izena *</Form.Label>
                                            <Form.Control 
                                                type="text" required 
                                                placeholder="Zure izena"
                                                value={data.name || ''}
                                                onChange={e => setData('name', e.target.value)}
                                                className={errors.name ? 'is-invalid' : ''}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-medium small mb-1">Abizena *</Form.Label>
                                            <Form.Control 
                                                type="text" required 
                                                placeholder="Zure abizena"
                                                value={data.surname || ''}
                                                onChange={e => setData('surname', e.target.value)}
                                                className={errors.surname ? 'is-invalid' : ''}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-medium small mb-1">📧 Email *</Form.Label>
                                    <Form.Control 
                                        type="email" required 
                                        placeholder="email@adibidea.com"
                                        value={data.email || ''}
                                        onChange={e => setData('email', e.target.value)}
                                        className={errors.email ? 'is-invalid' : ''}
                                    />
                                </Form.Group>

                                <Row className="g-3 mt-2">
                                    <Col md={8}>
                                        <Form.Group>
                                            <Form.Label className="fw-medium small mb-1">🏠 Helbidea *</Form.Label>
                                            <Form.Control 
                                                type="text" required 
                                                placeholder="Kale izena 123"
                                                value={data.address || ''}
                                                onChange={e => setData('address', e.target.value)}
                                                className={errors.address ? 'is-invalid' : ''}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="fw-medium small mb-1">📮 Posta kodea</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="20000"
                                                value={data.postal_code || ''}
                                                onChange={e => setData('postal_code', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <hr className="my-4" />
                                <h6 className="text-uppercase fw-bold text-muted small mb-3 d-flex align-items-center">
                                    <CreditCard className="me-2" size={18} /> 💳 Ordainketa (Demo)
                                </h6>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium small mb-1">Txartel mota</Form.Label>
                                    <Form.Select 
                                        value={data.payment_method}
                                        onChange={e => setData('payment_method', e.target.value)}
                                    >
                                        <option value="visa">💳 Visa</option>
                                        <option value="mastercard">💳 Mastercard</option>
                                        <option value="amex">💳 Amex</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium small mb-1">Txartel zenbakia (demo)</Form.Label>
                                    <Form.Control type="text" placeholder="0000 0000 0000 0000" />
                                </Form.Group>

                                <Row className="g-3">
                                    <Col md={8}>
                                        <Form.Group>
                                            <Form.Label className="fw-medium small mb-1">Iraungitze data</Form.Label>
                                            <Form.Control type="text" placeholder="MM/AA" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="fw-medium small mb-1">CVV</Form.Label>
                                            <Form.Control type="password" placeholder="123" maxLength="3" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="text-success small mt-3 p-2 bg-success bg-opacity-10 rounded">
                                    🔒 Ordainketa <strong>segurua</strong> eta enkriptatua
                                </div>

                                <button 
                                    className="btn-register fw-bold w-100 py-3 mt-4 fs-6 shadow-sm"
                                    type="submit" 
                                    disabled={processing || cartItems.length === 0}
                                >
                                    {processing ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            ⏳ Prozesatzen...
                                        </>
                                    ) : (
                                        `🛒 Konfirmatu eskaera (${cartTotal.toFixed(2)}€)`
                                    )}
                                </button>
                            </Form>
                        </div>
                    </Col>

                    <Col xs={12} lg={5} className="mt-4 mt-lg-0">
                        <Card className="shadow h-100 border-0" style={{borderRadius: '20px'}}>
                            <Card.Header className="bg-gradient text-white py-4" 
                                style={{borderRadius: '20px 20px 0 0', background: 'linear-gradient(135deg, #8d3236 0%, #b83b3d 100%)'}}>
                                <h5 className="mb-0 fw-bold fs-6 d-flex align-items-center justify-content-between">
                                    <span><BagCheckFill className="me-2" size={22} /> Laburpena</span>
                                    <Badge bg="light" className="text-dark fs-6">{cartItems.length} item</Badge>
                                </h5>
                            </Card.Header>
                            <Card.Body className="p-3">
                                <div style={{maxHeight: '320px', overflowY: 'auto'}}>
                                    {cartItems.length ? (
                                        cartItems.map((item, i) => (
                                            <div key={item.id || i} className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                                                <div className="d-flex align-items-center">
                                                    <img src={item.img || '/placeholder-food.jpg'} alt={item.name}
                                                        style={{
                                                            width: '50px', height: '50px', objectFit: 'cover',
                                                            borderRadius: '12px', marginRight: '12px'
                                                        }} 
                                                    />
                                                    <div>
                                                        <div className="fw-bold small lh-1">{item.name}</div>
                                                        <small className="text-muted">×{item.quantity}</small>
                                                    </div>
                                                </div>
                                                <strong className="text-register fs-6">
                                                    {(item.price * item.quantity).toFixed(2)}€
                                                </strong>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-4 text-muted">
                                            <BagCheckFill size={48} className="mb-2 opacity-50" />
                                            <div>Carrito hutsa</div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-3 bg-light rounded mt-3">
                                    <div className="d-flex justify-content-between fs-5 fw-bold">
                                        <span>GUZTIRA:</span>
                                        <span className="text-register fs-3">{cartTotal.toFixed(2)}€</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* 🔥 POPUP INDEPENDIENTE DEL FLASH */}
            <Modal show={showModal} centered backdrop="static" keyboard={false}>
                <Modal.Body className="text-center p-5">
                    <div className="mb-4 p-4 bg-success bg-opacity-10 border border-success rounded-4">
                        <svg className="text-success mb-3" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                            <polyline points="5,9 7,11 11,5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                        <h3 className="fw-bold text-success mb-2">Eskaera ongi!</h3>
                        <p className="text-success-emphasis small">📧 Emaila entrega kodearekin bidalia</p>
                    </div>
                    <h4 className="fw-bold mb-3" style={{color: '#8d3236'}}>
                        Eskerrik asko zure konfiantzagatik! 🙏
                    </h4>
                    <p className="text-muted mb-4">
                        🚚 Ahalik eta azkarren iritsiko da zure etxera.<br/>
                        <small>Jarraitu eskaera my-account → bidalketak</small>
                    </p>
                </Modal.Body>
                <Modal.Footer className="border-0 justify-content-center p-4">
                    <button className="btn btn-register px-5 py-3 fw-bold shadow-sm fs-6" onClick={handleFinalize}>
                        <BagCheckFill className="me-2" /> Hasierara itzuli
                    </button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default PayForm;

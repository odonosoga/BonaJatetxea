import { router, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { BagCheckFill, CreditCard, LockFill } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useCart } from '../cartcontext/CartContext';
import './payform.css';

const PayForm = () => {
    const { t } = useTranslation();
    const { cartItems, cartTotal, clearCart } = useCart();
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        payment_method: 'visa',
        address: '',
        name: '',
        surname: '',
        email: '',
        postal_code: '',
        card_number: '',
        expiry_date: '',
        cvv: '',
        cartItems: [],
        cartTotal: 0,
    });

    const [showModal, setShowModal] = useState(false);
    const [cardError, setCardError] = useState('');
    const [expiryError, setExpiryError] = useState('');
    const [postalError, setPostalError] = useState(''); // Nuevo estado para error de CP

    useEffect(() => {
        setData((prev) => ({
            ...prev,
            cartItems: cartItems,
            cartTotal: cartTotal,
        }));
    }, [cartItems, cartTotal]);

    useEffect(() => {
        if (flash.success) {
            setShowModal(true);
        }
    }, [flash]);

    // Validación y formato del Código Postal (Solo 5 números)
    const handlePostalCodeChange = (e) => {
        // Solo permite números y máximo 5 caracteres
        const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
        setData('postal_code', value);

        if (value.length > 0 && value.length < 5) {
            setPostalError(t('payform.validation.postalCodeIncomplete') || "5 digitu izan behar ditu");
        } else {
            setPostalError('');
        }
    };

    // Formatea número de tarjeta: 4444 4444 4444 4444
    const handleCardNumberChange = (e) => {
        const value = e.target.value
            .replace(/\s/g, '')
            .replace(/[^0-9]/g, '')
            .slice(0, 16);

        const formatted = value.replace(/(.{4})/g, '$1 ').trim();
        setData('card_number', formatted);

        if (value.length > 0 && value.length < 16) {
            setCardError(t('payform.validation.cardIncomplete'));
        } else {
            setCardError('');
        }
    };

    // Formatea y valida fecha de caducidad: MM/YY
    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);

        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }

        setData('expiry_date', value);

        // Validación de fecha
        if (value.length === 5) {
            const [month, year] = value.split('/');
            const monthNum = parseInt(month, 10);
            const yearNum = parseInt('20' + year, 10);
            const now = new Date();
            const currentMonth = now.getMonth() + 1;
            const currentYear = now.getFullYear();

            if (monthNum < 1 || monthNum > 12) {
                setExpiryError(t('payform.validation.invalidMonth'));
            } else if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
                setExpiryError(t('payform.validation.cardExpired'));
            } else {
                setExpiryError('');
            }
        } else {
            setExpiryError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones finales antes de enviar
        const cardDigits = data.card_number.replace(/\s/g, '');
        
        if (data.postal_code.length !== 5) {
            setPostalError(t('payform.validation.postalCodeIncomplete') || "5 digitu izan behar ditu");
            return;
        }

        if (cardDigits.length !== 16) {
            setCardError(t('payform.validation.cardIncomplete'));
            return;
        }

        if (data.expiry_date.length !== 5 || expiryError) {
            setExpiryError(t('payform.validation.expiryIncomplete'));
            return;
        }

        if (postalError || cardError || expiryError) {
            return;
        }

        post('/eskaerak', {
            preserveScroll: true,
            onError: (errors) => {
                console.error('❌ Error validación:', errors);
            },
        });
    };

    const handleFinalize = () => {
        clearCart();
        setShowModal(false);
        router.visit('/');
    };

    return (
        <section id="ordainketa" className="register-section py-5">
            <Container>
                <Row className="align-items-end">
                    <Col xs={12} lg={7}>
                        <div className="register-form w-100 bg-white p-4 shadow-sm" style={{ borderRadius: '15px' }}>
                            <h2 className="fw-bold text-dark fs-4 mb-4 text-center">
                                {t('payform.title')}
                            </h2>

                            {Object.keys(errors).length > 0 && (
                                <div className="alert alert-danger">
                                    {Object.values(errors).map((err, i) => (
                                        <div key={i}>{err}</div>
                                    ))}
                                </div>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <h6 className="text-uppercase fw-bold small mb-3 text-muted">
                                    {t('payform.shipping.title')}
                                </h6>
                                <Row className="g-2">
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('payform.fields.name.label')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                required
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('payform.fields.surname.label')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                required
                                                value={data.surname}
                                                onChange={(e) => setData('surname', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">
                                        {t('payform.fields.email.label')}
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                </Form.Group>

                                <Row className="g-2">
                                    <Col md={8}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('payform.fields.address.label')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                required
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                placeholder={t('payform.fields.address.placeholder')}
                                            />
                                            {/* Eliminado el hint de autocompletado */}
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('payform.fields.postal_code.label')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                required
                                                value={data.postal_code}
                                                onChange={handlePostalCodeChange}
                                                maxLength="5"
                                                placeholder="20000"
                                                className={postalError ? 'is-invalid' : ''}
                                            />
                                            {postalError && (
                                                <Form.Text className="text-danger">
                                                    {postalError}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <hr className="my-4" />
                                <h6 className="text-uppercase fw-bold small d-flex align-items-center mb-3 text-muted">
                                    <CreditCard className="me-2" />
                                    {t('payform.payment.title')}
                                </h6>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">
                                        {t('payform.payment.cardType')}
                                    </Form.Label>
                                    <Form.Select
                                        value={data.payment_method}
                                        onChange={(e) => setData('payment_method', e.target.value)}
                                    >
                                        <option value="visa">{t('payform.payment.methods.visa')}</option>
                                        <option value="mastercard">{t('payform.payment.methods.mastercard')}</option>
                                        <option value="amex">{t('payform.payment.methods.amex')}</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">
                                        {t('payform.payment.cardNumber')}
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={t('payform.payment.cardNumberPlaceholder')}
                                        required
                                        value={data.card_number}
                                        onChange={handleCardNumberChange}
                                        maxLength="19"
                                        className={cardError ? 'is-invalid' : ''}
                                    />
                                    {cardError && (
                                        <Form.Text className="text-danger">
                                            {cardError}
                                        </Form.Text>
                                    )}
                                </Form.Group>

                                <Row className="g-2">
                                    <Col md={7}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('payform.payment.expiry')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder={t('payform.payment.expiryPlaceholder')}
                                                required
                                                value={data.expiry_date}
                                                onChange={handleExpiryChange}
                                                maxLength="5"
                                                className={expiryError ? 'is-invalid' : ''}
                                            />
                                            {expiryError && (
                                                <Form.Text className="text-danger">
                                                    {expiryError}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col md={5}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('payform.payment.cvv')}
                                            </Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder={t('payform.payment.cvvPlaceholder')}
                                                maxLength="3"
                                                required
                                                value={data.cvv}
                                                onChange={(e) => setData('cvv', e.target.value.replace(/[^0-9]/g, ''))}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="small d-flex align-items-center mb-4 text-muted">
                                    <LockFill className="text-success me-1" />
                                    {t('payform.payment.secureText')}
                                </div>

                                <button
                                    type="submit"
                                    className="btn-register fw-bold w-100 py-3"
                                    disabled={processing || cartItems.length === 0}
                                >
                                    {processing
                                        ? t('payform.actions.processing')
                                        : t('payform.actions.confirmShipping')}
                                </button>
                            </Form>
                        </div>
                    </Col>

                    <Col xs={12} lg={5} className="mt-lg-0 mt-4">
                        <Card className="border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                            <Card.Header className="bg-register py-3 text-white" style={{ borderRadius: '15px 15px 0 0' }}>
                                <h5 className="fs-6 d-flex align-items-center mb-0">
                                    <BagCheckFill className="me-2" />
                                    {t('payform.summary.title')}
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-2">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                        marginRight: '12px',
                                                    }}
                                                />
                                                <div>
                                                    <div className="fw-bold small">{item.name}</div>
                                                    <div className="small text-muted">
                                                        {t('payform.summary.quantity', { quantity: item.quantity })}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="fw-bold text-register">
                                                {item.price * item.quantity}€
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-top mt-3 pt-2">
                                    <div className="d-flex justify-content-between fw-bold fs-5">
                                        <span>{t('payform.summary.totalLabel')}</span>
                                        <span className="text-register">{cartTotal}€</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered backdrop="static">
                <Modal.Body className="py-5 text-center">
                    <h2 className="fw-bold mb-3" style={{ color: '#8d3236' }}>
                        {t('payform.modal.thanksTitle')}
                    </h2>
                    <h5 className="text-muted">{t('payform.modal.emailSent')}</h5>
                    <h5 className="text-muted">{t('payform.modal.shippingSoon')}</h5>
                </Modal.Body>
                <Modal.Footer className="justify-content-center border-0">
                    <button className="btn-register px-5 py-2" onClick={handleFinalize}>
                        {t('payform.modal.backHome')}
                    </button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default PayForm;

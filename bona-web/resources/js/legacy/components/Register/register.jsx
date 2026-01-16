import { Col, Container, Form, Row, Alert, Modal } from 'react-bootstrap';
import { useForm, usePage, router } from '@inertiajs/react';
import register from '../../img/register.jpg';
import './register.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Register = () => {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        surname: '',
        phone: '',
        birth_date: '',
        address: '',
        postal_code: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const { flash } = usePage().props;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setShowModal(true);
        }
    }, [flash]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/erregistratu', {
            onSuccess: () => {
                setShowModal(true);
            }
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        router.visit('/');
    };

    return (
        <section id="erregistroa" className="register-section pt-5">
            <Container fluid className="p-0">
                <Row className="g-0">
                    <Col xs={12} md={6} className="d-flex justify-content-center order-md-1 order-1">
                        <div className="register-form">
                            <h2 className="fw-bold text-dark fs-4 mb-3 text-center">
                                {t('register.title')}
                            </h2>

                            {flash?.success && (
                                <Alert variant="success" className="mb-3">
                                    {flash.success} ⏰ 15 min
                                </Alert>
                            )}
                            {flash?.error && (
                                <Alert variant="danger" className="mb-3">
                                    {flash.error}
                                </Alert>
                            )}
                            
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="g-2">
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                {t('register.name')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                isInvalid={!!errors.name}
                                                placeholder={t('register.name.placeholder')}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('register.surname')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.surname}
                                                onChange={(e) => setData('surname', e.target.value)}
                                                isInvalid={!!errors.surname}
                                                placeholder={t('register.surname.placeholder')}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.surname}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('register.phone')}
                                            </Form.Label>
                                            <Form.Control
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                isInvalid={!!errors.phone}
                                                placeholder={t('register.phone.placeholder')}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">
                                                {t('register.birth_date')}
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={data.birth_date}
                                                onChange={(e) => setData('birth_date', e.target.value)}
                                                isInvalid={!!errors.birth_date}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.birth_date}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                {t('register.address')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                isInvalid={!!errors.address}
                                                placeholder={t('register.address.placeholder')}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                {t('register.postal_code')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.postal_code}
                                                onChange={(e) => setData('postal_code', e.target.value)}
                                                isInvalid={!!errors.postal_code}
                                                placeholder={t('register.postal_code.placeholder')}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.postal_code}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                {t('register.email')}
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                isInvalid={!!errors.email}
                                                placeholder={t('register.email.placeholder')}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                {t('register.password')}
                                            </Form.Label>
                                            <Form.Control
                                                type="password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                isInvalid={!!errors.password}
                                                placeholder={t('register.password.placeholder')}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                {t('register.password_confirmation')}
                                            </Form.Label>
                                            <Form.Control
                                                type="password"
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                isInvalid={!!errors.password_confirmation}
                                                placeholder={t('register.password_confirmation.placeholder')}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.password_confirmation}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-3">
                                    <Col>
                                        <Form.Group className="d-flex justify-content-center">
                                            <Form.Control
                                                type="submit"
                                                value={t('register.submit')}
                                                disabled={processing}
                                                className="btn-register fw-bold w-100 py-3"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className="order-md-2 order-2" style={{
                        backgroundImage: `url(${register})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100%',
                    }} />
                </Row>
            </Container>

            {/* ✅ MODAL 100% i18n */}
            <Modal show={showModal} onHide={handleCloseModal} centered size="md">
                <Modal.Header closeButton className="bg-register text-white border-0">
                    <Modal.Title className="fs-4 fw-bold">
                        ✅ {t('register.modal.title')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center py-4">
                    <div className="mb-4">
                        <i className="bi bi-envelope-check-fill fs-1 text-register"></i>
                    </div>
                    <h5 className="fw-bold text-dark mb-3">
                        {t('register.modal.message')}
                    </h5>
                    <p className="text-muted mb-4">
                        {t('register.modal.check_inbox')}
                    </p>
                    <div className="bg-light p-3 rounded-3 mb-4">
                        <strong className="text-register">{data.email}</strong>
                    </div>
                    <p className="text-success fw-medium">
                        {t('register.modal.timer')}
                    </p>
                </Modal.Body>
                <Modal.Footer className="border-0 justify-content-center">
                    <button 
                        className="btn btn-register px-5 py-2" 
                        onClick={handleCloseModal}
                    >
                        OK
                    </button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Register;

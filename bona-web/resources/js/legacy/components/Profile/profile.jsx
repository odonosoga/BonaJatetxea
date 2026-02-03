import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FaUserCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './profile.css'; 

const Profile = () => {
    const { t } = useTranslation();
    const { auth, flash, errors } = usePage().props;
    const user = auth.user;

    const [editing, setEditing] = useState(false);
    const [validated, setValidated] = useState(false);

    const form = useForm({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        birth_date: user.birth_date || '',
        address: user.address || '',
        postal_code: user.postal_code || '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formElement = event.currentTarget;

        if (formElement.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        form.put('/profile', {  
            onSuccess: () => setEditing(false),
        });
    };

    return (
        <section className="profile-section"> 
            <Head title={`Perfil - BonaJatetxea`} />

            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card className="border-0 shadow-sm rounded-4 bg-bonajatetxea-card">
                            <Card.Header className="border-0 d-flex align-items-center gap-3">
                                <FaUserCircle size={40} />
                                <div>
                                    <h4 className="mb-0 fw-bold">{t('profile.title') || 'Tu perfil'}</h4>
                                    <small className="opacity-75">{t('profile.subtitle') || 'Aquí puedes ver y actualizar tus datos personales'}</small>
                                </div>
                            </Card.Header>

                            <Card.Body className="p-4">
                                {flash?.success && (
                                    <Alert variant="success" className="mb-4 border-0 rounded-3">
                                        {flash.success}
                                    </Alert>
                                )}

                                {!editing && (
                                    <>
                                        <Row className="mb-3">
                                            <Col xs={5} className="fw-semibold text-muted">{t('profile.name') || 'Nombre'}:</Col>
                                            <Col xs={7}>{user.name}</Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col xs={5} className="fw-semibold text-muted">Email:</Col>
                                            <Col xs={7}>{user.email}</Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col xs={5} className="fw-semibold text-muted">{t('profile.phone') || 'Teléfono'}:</Col>
                                            <Col xs={7}>{user.phone || '-'}</Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col xs={5} className="fw-semibold text-muted">{t('profile.birthDate') || 'Fecha de nacimiento'}:</Col>
                                            <Col xs={7}>{user.birth_date || '-'}</Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col xs={5} className="fw-semibold text-muted">{t('profile.address') || 'Dirección'}:</Col>
                                            <Col xs={7}>{user.address || '-'}</Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col xs={5} className="fw-semibold text-muted">{t('profile.postalCode') || 'Código postal'}:</Col>
                                            <Col xs={7}>{user.postal_code || '-'}</Col>
                                        </Row>

                                        <div className="d-flex justify-content-end mt-4">
                                            <Button className="btn-profile px-4" onClick={() => setEditing(true)}>
                                                {t('profile.edit') || 'Cambiar datos'}
                                            </Button>
                                        </div>
                                    </>
                                )}

                                {editing && (
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="g-3">
                                            {/* Izena */}
                                            <Col md={6}>
                                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                                    {t('profile.name') || 'Nombre'}
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={form.data.name}
                                                    onChange={e => form.setData('name', e.target.value)}
                                                    required
                                                    isInvalid={!!errors.name || !!form.errors.name}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.name || form.errors.name || 'Name is required.'}
                                                </Form.Control.Feedback>
                                            </Col>

                                            {/* EMAIL */}
                                            <Col md={6}>
                                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                                    Email
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    value={form.data.email}
                                                    onChange={e => form.setData('email', e.target.value)}
                                                    required
                                                    disabled
                                                    isInvalid={!!errors.email || !!form.errors.email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email || form.errors.email || 'Email is required.'}
                                                </Form.Control.Feedback>
                                            </Col>

                                            {/* TELEFONO */}
                                            <Col md={6}>
                                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                                    {t('profile.phone') || 'Teléfono'}
                                                </Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    value={form.data.phone}
                                                    onChange={e => form.setData('phone', e.target.value)}
                                                    required
                                                    isInvalid={!!errors.phone || !!form.errors.phone}
                                                    placeholder="666 123 456"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.phone || form.errors.phone || 'Phone is required.'}
                                                </Form.Control.Feedback>
                                            </Col>

                                            {/* BirthDate */}
                                            <Col md={6}>
                                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                                    {t('profile.birthDate') || 'Fecha de nacimiento'}
                                                </Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    value={form.data.birth_date || ''}
                                                    onChange={e => form.setData('birth_date', e.target.value)}
                                                    required
                                                    isInvalid={!!errors.birth_date || !!form.errors.birth_date}
                                                    max={new Date().toISOString().split('T')[0]}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.birth_date || form.errors.birth_date || 'Birth date is required.'}
                                                </Form.Control.Feedback>
                                            </Col>

                                            {/* Helbidea */}
                                            <Col md={12}>
                                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                                    {t('profile.address') || 'Dirección'}
                                                </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={2}
                                                    value={form.data.address}
                                                    onChange={e => form.setData('address', e.target.value)}
                                                    required
                                                    isInvalid={!!errors.address || !!form.errors.address}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.address || form.errors.address || 'Address is required.'}
                                                </Form.Control.Feedback>
                                            </Col>

                                            {/* POstalKode */}
                                            <Col md={6}>
                                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                                    {t('profile.postalCode') || 'Código postal'}
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={form.data.postal_code}
                                                    onChange={e => form.setData('postal_code', e.target.value)}
                                                    required
                                                    isInvalid={!!errors.postal_code || !!form.errors.postal_code}
                                                    placeholder="Ej: 20013"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.postal_code || form.errors.postal_code || 'Postal code is required.'}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Row>

                                        <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                                            <Button
                                                variant="light"
                                                className="px-4 rounded-3 fw-bold text-muted "
                                                type="button"
                                                onClick={() => {
                                                    form.reset();
                                                    setEditing(false);
                                                    setValidated(false);
                                                }}
                                            >
                                                {t('profile.cancel') || 'Cancelar'}
                                            </Button>
                                            <Button
                                                type="submit"
                                                className="btn-profile px-5 py-2"
                                                disabled={form.processing}
                                            >
                                                {form.processing
                                                    ? (t('profile.saving') || 'Guardando...')
                                                    : (t('profile.save') || 'Guardar cambios')}
                                            </Button>
                                        </div>
                                    </Form>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Profile;

import { Col, Container, Form, Row } from 'react-bootstrap';
import register from '../../img/register.jpg';
import './register.css';

import { useForm } from '@inertiajs/react';

const Register = () => {
    // Asegúrate de que los nombres coincidan exactamente con el value y setData
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        surname: '',
        phone: '',
        birth_date: '',
        address: '',
        postal_code: '', // Usar guion bajo si así lo prefieres
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Cambia route(...) por la URL directa entre comillas
        post('/erregistratu');
    };
    return (
        <section id="erregistroa" className="register-section pt-5">
            <Container fluid className="p-0">
                <Row className="g-0">
                    <Col
                        xs={12}
                        md={6}
                        className="d-flex justify-content-center order-md-1 order-1"
                    >
                        <div className="register-form">
                            <h2 className="fw-bold text-dark fs-4 mb-3 text-center">
                                Erregistratu
                            </h2>
                            <Form
                                noValidate
                                onSubmit={handleSubmit}
                            >
                                <Row className="g-2">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                Izena
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Izena"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Mesedez, sartu izena.
                                            </Form.Control.Feedback>
                                            {errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Abizena</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.surname}
                                                onChange={(e) => setData('surname', e.target.value)}
                                                placeholder="Abizena"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Mesedez, sartu abizena.
                                            </Form.Control.Feedback>
                                            {errors.surname && <Form.Control.Feedback type="invalid">{errors.surname}</Form.Control.Feedback>}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Telefonoa</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                placeholder="Telefonoa"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Mesedez, sartu telefonoa.
                                            </Form.Control.Feedback>
                                            {errors.phone && <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Jaiotze-Data
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={data.birth_date}
                                                onChange={(e) => setData('birth_date', e.target.value)}
                                                placeholder="Jaiotze-Data"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Hautatu jaiotze-data.
                                            </Form.Control.Feedback>
                                            {errors.birth_date && <Form.Control.Feedback type="invalid">{errors.birth_date}</Form.Control.Feedback>}

                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                Helbidea
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                placeholder="Helbidea"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Mesedez, sartu helbidea.
                                            </Form.Control.Feedback>
                                            {errors.address && <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>}

                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                Posta Kodea
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.postal_code}
                                                onChange={(e) => setData('postal_code', e.target.value)}
                                                placeholder="Posta Kodea"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Mesedez, sartu posta kodea.
                                            </Form.Control.Feedback>
                                            {errors.postal_code && <Form.Control.Feedback type="invalid">{errors.postal_code}</Form.Control.Feedback>}

                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                Email
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder="Email"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Mesedez, sartu email-a
                                            </Form.Control.Feedback>
                                            {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}

                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                Pasahitza
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                placeholder="Pasahitza"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Mesedez sartu Pasahitza.
                                            </Form.Control.Feedback>
                                            {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-1">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="fw-medium d-flex align-items-start">
                                                Pasahitza Konfirmatu
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                placeholder="Pasahitza Konfirmatu"
                                                required
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Mesedez, sartu pasahitza
                                                berriro.
                                            </Form.Control.Feedback>
                                            {errors.password_confirmation && <Form.Control.Feedback type="invalid">{errors.password_confirmation}</Form.Control.Feedback>}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-3">
                                    <Col>
                                        <Form.Group className="d-flex justify-content-center">
                                            <Form.Control
                                                type="submit"
                                                value="Erregistratu"
                                                disabled={processing}
                                                className="btn-register fw-bold w-100 py-3"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>

                    <Col
                        xs={12}
                        md={6}
                        className="order-md-2 order-2"
                        style={{
                            backgroundImage: `url(${register})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '100%',
                        }}
                    >
                        {/* la columna ahora es solo background */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;

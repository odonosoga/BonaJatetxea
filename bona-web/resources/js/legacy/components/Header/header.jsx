import { Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import {
    Alert,
    Button,
    Card,
    Col,
    Container,
    Dropdown,
    Form,
    Modal,
    Nav,
    Navbar,
    Row,
} from 'react-bootstrap';
import {
    BoxArrowRight,
    FilePersonFill,
    Globe,
    Key,
    PersonFill,
    Trash3,
} from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { BsClock } from 'react-icons/bs';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './header.css';

import BonaLogoa from '../../img/BonaLogoa.png';
import postre2 from '../../img/postre2.jpg';

const Header = () => {
    const { auth, flash, url } = usePage().props;
    const user = auth?.user;
    const role = user?.role || null;

    const { t, i18n } = useTranslation();
    const [login, setLogin] = useState(false);
    const [cart, setCart] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (flash?.require_auth) {
            setLogin(true);
        }
    }, [flash?.require_auth]);

     useEffect(() => {
    const updateActiveLink = () => {
        const navLinks = document.querySelectorAll('.nav-link-custom');
        navLinks.forEach((link) => link.classList.remove('active'));

        const currentPath = window.location.pathname;

        const currentLink = Array.from(navLinks).find((link) => {
            const href = link.getAttribute('href') || '';
            return href === currentPath;
        });

        if (currentLink) {
            currentLink.classList.add('active');
        }
    };

<<<<<<< HEAD
    // Ejecutar inmediatamente
    updateActiveLink();
    
    // Escuchar cambios de URL (SPA navigation)
    window.addEventListener('popstate', updateActiveLink);
    
    // Cleanup
    return () => window.removeEventListener('popstate', updateActiveLink);
}, []);
=======
  const handleLogout = () => {
    post("/logout", {
      onSuccess: () => {
        window.location.href = '/';
      },
    });
  };
>>>>>>> 17c077b (no se que hay)

    const handleShowLogin = () => setLogin(true);
    const handleCloseLogin = () => {
        setLogin(false);
        reset();
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        post('/login', {
            onSuccess: () => {
                handleCloseLogin();
                window.location.reload();
            },
        });
    };

    const handleLogout = () => {
        post('/logout');
    };

    const handleShowCart = () => setCart(true);
    const handleCloseCart = () => setCart(false);

    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    return (
        <>
            {/* HEADER TOPBAR */}
            <section className="header-section text-white shadow-sm">
                <div className="topbar d-flex justify-content-between align-items-center px-4 py-2">
                    <div className="topbar-left d-flex flex-column flex-sm-row align-items-center gap-3">
                        <img
                            src={BonaLogoa}
                            alt="Logo"
                            height="90"
                            width={120}
                        />
                    </div>

                    <div className="topbar-right d-flex align-items-center gap-3">
                        <div className="topbar-hours d-none d-md-flex flex-column me-2 text-end">
                            <div className="d-flex align-items-center justify-content-end gap-2">
                                <BsClock size={18} />
                                <small>{t('hours.lunch')}</small>
                            </div>
                            <div className="d-flex align-items-center justify-content-end gap-2">
                                <BsClock size={18} />
                                <small>{t('hours.dinner')}</small>
                            </div>
                        </div>

                        <Dropdown align="end">
                            <Dropdown.Toggle
                                id="dropdown-language"
                                variant="outline-light"
                                size="sm"
                                className="header-btn language-dropdown-toggle d-inline-flex align-items-center"
                            >
                                <Globe size={18} className="me-2" />
                                <span className="d-none d-sm-inline">
                                    {t('nav.language')}
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="language-dropdown-menu">
                                <Dropdown.Item onClick={() => changeLanguage('es')}>
                                    <span className="d-flex align-items-center">
                                        <Globe className="me-2" size={16} />
                                        Castellano
                                    </span>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => changeLanguage('eu')}>
                                    <span className="d-flex align-items-center">
                                        <Globe className="me-2" size={16} />
                                        Euskara
                                    </span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown align="end">
                            <Dropdown.Toggle
                                id="dropdown-user"
                                variant="outline-light"
                                size="sm"
                                className="header-btn user-dropdown-toggle d-inline-flex align-items-center"
                            >
                                <FaUser size={18} className="me-2" />
                                <span>
                                    {auth?.user
                                        ? auth.user.name
                                        : t('nav.account')}
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="user-dropdown-menu">
                                <Dropdown.Item onClick={handleShowCart}>
                                    <span className="d-flex align-items-center">
                                        <FaShoppingCart className="me-2" size={16} />
                                        {t('cart.title')}
                                    </span>
                                </Dropdown.Item>
                                <Dropdown.Divider />

                                {!auth?.user ? (
                                    <>
                                        <Dropdown.Item onClick={handleShowLogin}>
                                            <span className="d-flex align-items-center">
                                                <Key className="me-2" size={16} />
                                                {t('login.button')}
                                            </span>
                                        </Dropdown.Item>
                                        <Dropdown.Item as={Link} href="/erregistroa">
                                            <span className="d-flex align-items-center">
                                                <FilePersonFill className="me-2" size={16} />
                                                {t('login.registerHere')}
                                            </span>
                                        </Dropdown.Item>
                                    </>
                                ) : (
                                    <>
                                        <Dropdown.Item disabled>
                                            <span className="d-flex align-items-center">
                                                <PersonFill className="me-2" size={16} />
                                                {auth.user.name}
                                            </span>
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout}>
                                            <span className="d-flex align-items-center">
                                                <BoxArrowRight className="me-2" size={16} />
                                                Logout
                                            </span>
                                        </Dropdown.Item>
                                    </>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                {/* NAVBAR */}
                <Navbar
                    expand="lg"
                    className="border-top border-dark-subtle"
                    expanded={expanded}
                    onToggle={(val) => setExpanded(val)}
                >
                    <Container fluid className="nav-container px-4">
                        <Navbar.Toggle aria-controls="main-navbar" />
                        <Navbar.Collapse id="main-navbar">
                            <Nav className="mx-auto text-center">
                                {role === 'Langile' && auth?.user ? (
                                    <>
                                        <Nav.Link
                                            as={Link}
                                            href="/ordutegia"
                                            className="nav-link-custom px-3"
                                            onClick={() => setExpanded(false)}
                                        >
                                            {t('nav.schedule')}
                                        </Nav.Link>
                                        <Nav.Link
                                            as={Link}
                                            href="/bidalketak"
                                            className="nav-link-custom px-3"
                                            onClick={() => setExpanded(false)}
                                        >
                                            {t('nav.delivery')}
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link
                                            as={Link}
                                            href="/"
                                            className="nav-link-custom px-3"
                                            onClick={() => setExpanded(false)}
                                        >
                                            {t('nav.home')}
                                        </Nav.Link>

                                        <Nav.Link
                                            as={Link}
                                            href="/kontaktua"
                                            className="nav-link-custom px-3"
                                            onClick={() => setExpanded(false)}
                                        >
                                            {t('nav.contact')}
                                        </Nav.Link>

                                        <Nav.Link
                                            as={Link}
                                            href="/menu"
                                            className="nav-link-custom px-3"
                                            onClick={() => setExpanded(false)}
                                        >
                                            {t('nav.menu')}
                                        </Nav.Link>

                                        {role === 'Bezero' && (
                                            <Nav.Link
                                                as={Link}
                                                href="/erreserbak"
                                                className="nav-link-custom px-3"
                                                onClick={(e) => {
                                                    if (!auth?.user || role !== 'Bezero') {
                                                        e.preventDefault();
                                                        setLogin(true);
                                                        return;
                                                    }
                                                    setExpanded(false);
                                                }}
                                            >
                                                {t('nav.reservations')}
                                            </Nav.Link>
                                        )}

                                        {role !== 'Bezero' &&
                                            role !== 'Langile' &&
                                            auth?.user && (
                                                <>
                                                    <Nav.Link
                                                        as={Link}
                                                        href="/ordutegia"
                                                        className="nav-link-custom px-3"
                                                        onClick={() => setExpanded(false)}
                                                    >
                                                        {t('nav.schedule')}
                                                    </Nav.Link>
                                                    <Nav.Link
                                                        as={Link}
                                                        href="/bidalketak"
                                                        className="nav-link-custom px-3"
                                                        onClick={() => setExpanded(false)}
                                                    >
                                                        {t('nav.delivery')}
                                                    </Nav.Link>
                                                </>
                                            )}
                                    </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>

            <div style={{ height: '0px' }}></div>

            {/* MODAL LOGIN */}
            <Modal show={login} onHide={handleCloseLogin} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('login.modalTitle')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errors.email && (
                        <Alert variant="danger">{errors.email}</Alert>
                    )}
                    <Form onSubmit={handleSubmitLogin}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>{t('login.email')}</Form.Label>
                            <Form.Control
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>{t('login.password')}</Form.Label>
                            <Form.Control
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Label className="d-flex justify-content-center">
                            {t('login.noAccount')}{' '}
                            <Link
                                href="/erregistroa"
                                className="ms-1 text-primary"
                                onClick={handleCloseLogin}
                            >
                                {t('login.registerHere')}
                            </Link>
                        </Form.Label>
                        <Button
                            type="submit"
                            className="hasi-btn fw-bold w-100"
                            disabled={processing}
                        >
                            {t('login.submit')}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* MODAL CARRITO */}
            <Modal show={cart} onHide={handleCloseCart} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{t('cart.title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={12}>
                                <Card className="mb-3 p-2 shadow-sm">
                                    <Row className="align-items-center g-0 d-flex justify-content-between">
                                        <Col md={8} className="d-flex">
                                            <img
                                                src={postre2}
                                                alt="Postre"
                                                style={{
                                                    width: '175px',
                                                    height: '125px',
                                                    objectFit: 'cover',
                                                    marginRight: '10px',
                                                    borderRadius: '20px',
                                                }}
                                            />
                                            <div className="d-flex flex-column justify-content-center">
                                                <label>
                                                    {t('cart.itemName')}: Postre
                                                </label>
                                                <label>
                                                    {t('cart.quantity')}: 1
                                                </label>
                                                <label>
                                                    {t('cart.price')}: 5€
                                                </label>
                                            </div>
                                        </Col>
                                        <Col
                                            md={4}
                                            className="d-flex justify-content-end"
                                        >
                                            <div className="align-self-center trash-icon">
                                                <Trash3 size={24} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>

                                <h4 className="fw-bold mt-3 text-center">
                                    {t('cart.total')}: 5€
                                </h4>
                                <div className="d-flex justify-content-center mt-3">
                                    <Button className="konf-btn">
                                        {t('cart.confirmButton')}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;

import { Link, useForm, usePage, router } from '@inertiajs/react';
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
   Badge,
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
import { RiDashboardFill } from 'react-icons/ri';
import './header.css';

import BonaLogoa from '../../img/BonaLogoa.png';
import { useCart } from '../cartcontext/CartContext';

const Header = () => {
   const { auth, flash } = usePage().props;
   const user = auth?.user;
   const role = user?.role || null;

   const { t, i18n } = useTranslation();

   const [login, setLogin] = useState(false);
   const [cart, setCart] = useState(false);
   const [expanded, setExpanded] = useState(false);

   const { cartItems, removeFromCart, cartTotal, totalItems, clearCart } = useCart();

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
       const handleOpenLogin = () => setLogin(true);
       document.addEventListener('open-login-modal', handleOpenLogin);
       return () => document.removeEventListener('open-login-modal', handleOpenLogin);
   }, []);

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

       updateActiveLink();
       window.addEventListener('popstate', updateActiveLink);
       return () => window.removeEventListener('popstate', updateActiveLink);
   }, []);

   const handleLogout = () => {
       post('/logout', {
           onSuccess: () => {
               window.location.href = '/';
           },
       });
   };

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

   const handleShowCart = () => setCart(true);
   const handleCloseCart = () => setCart(false);

   // FUNCIÓN CORREGIDA: Redirige a la página de pago
   const handleConfirmCheckout = () => {
       setCart(false); // Cierra el modal
       router.visit('/payform'); // Asegúrate de que esta ruta existe en tu web.php
   };

   const changeLanguage = (lng) => i18n.changeLanguage(lng);

   return (
       <>
           <section className="header-section text-white shadow-sm">
               <div className="topbar d-flex justify-content-between align-items-center px-4 py-2">
                   <div className="topbar-left d-flex flex-column flex-sm-row align-items-center gap-3">
                       <Link href="/">
                           <img src={BonaLogoa} alt="Bona Jatetxea" height="90" width={120} />
                       </Link>
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
                               <span className="d-none d-sm-inline">{t('nav.language')}</span>
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
                               className="header-btn user-dropdown-toggle d-inline-flex align-items-center position-relative"
                           >
                               <FaUser size={18} className="me-2" />
                               <span>{auth?.user ? auth.user.name : t('nav.account')}</span>

                               {totalItems > 0 && (
                                   <Badge
                                       pill
                                       bg="danger"
                                       className="position-absolute top-0 start-100 translate-middle"
                                       style={{ fontSize: '0.65rem' }}
                                   >
                                       {totalItems}
                                   </Badge>
                               )}
                           </Dropdown.Toggle>

                           <Dropdown.Menu className="user-dropdown-menu">
                               <Dropdown.Item onClick={handleShowCart}>
                                   <span className="d-flex align-items-center justify-content-between">
                                       <span className="d-flex align-items-center">
                                           <FaShoppingCart className="me-2" size={16} />
                                           {t('cart.title')}
                                       </span>
                                       {totalItems > 0 && <Badge bg="dark">{totalItems}</Badge>}
                                   </span>
                               </Dropdown.Item>
                               <Dropdown.Divider />

                               {auth?.user ? (
                                   <>
                                       <Dropdown.Item as={Link} href="/profile">
                                           <span className="d-flex align-items-center">
                                               <PersonFill className="me-2" size={16} />
                                               {auth.user.name}
                                           </span>
                                       </Dropdown.Item>

                                       {role === 'Admin' && (
                                           <>
                                               <Dropdown.Divider />
                                               <Dropdown.Item as={Link} href="/admin">
                                                   <span className="d-flex align-items-center">
                                                       <RiDashboardFill className="me-2" size={16} />
                                                       Dashboard
                                                   </span>
                                               </Dropdown.Item>
                                           </>
                                       )}

                                       <Dropdown.Divider />
                                       <Dropdown.Item onClick={handleLogout} className="text-danger">
                                           <span className="d-flex align-items-center">
                                               <BoxArrowRight className="me-2" size={16} />
                                               Logout
                                           </span>
                                       </Dropdown.Item>
                                   </>
                               ) : (
                                   <>
                                       <Dropdown.Item onClick={() => setLogin(true)}>
                                           <span className="d-flex align-items-center">
                                               <Key className="me-2" size={16} />
                                               {t('login.button')}
                                           </span>
                                       </Dropdown.Item>
                                       <Dropdown.Item className="dropdown-register-cta" as={Link} href="/erregistroa">
                                           <span className="d-flex align-items-center">
                                               <FilePersonFill className="me-2" size={16} />
                                               {t('login.registerHere')}
                                           </span>
                                       </Dropdown.Item>
                                   </>
                               )}
                           </Dropdown.Menu>
                       </Dropdown>
                   </div>
               </div>

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
                                       <Nav.Link as={Link} href="/ordutegia" className="nav-link-custom px-3" onClick={() => setExpanded(false)}>
                                           {t('nav.schedule')}
                                       </Nav.Link>
                                       <Nav.Link as={Link} href="/bidalketak" className="nav-link-custom px-3" onClick={() => setExpanded(false)}>
                                           {t('nav.delivery')}
                                       </Nav.Link>
                                   </>
                               ) : (
                                   <>
                                       <Nav.Link as={Link} href="/" className="nav-link-custom px-3" onClick={() => setExpanded(false)}>
                                           {t('nav.home')}
                                       </Nav.Link>
                                       <Nav.Link as={Link} href="/kontaktua" className="nav-link-custom px-3" onClick={() => setExpanded(false)}>
                                           {t('nav.contact')}
                                       </Nav.Link>
                                       <Nav.Link as={Link} href="/menu" className="nav-link-custom px-3" onClick={() => setExpanded(false)}>
                                           {t('nav.menu')}
                                       </Nav.Link>
                                       {role === 'Bezero' && (
                                           <Nav.Link
                                               as={Link}
                                               href="/erreserba"
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
                                       {role !== 'Bezero' && role !== 'Langile' && auth?.user && (
                                           <>
                                               <Nav.Link as={Link} href="/ordutegia" className="nav-link-custom px-3" onClick={() => setExpanded(false)}>
                                                   {t('nav.schedule')}
                                               </Nav.Link>
                                               <Nav.Link as={Link} href="/bidalketak" className="nav-link-custom px-3" onClick={() => setExpanded(false)}>
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

           <Modal show={login} onHide={handleCloseLogin} centered>
               <Modal.Header closeButton>
                   <Modal.Title>{t('login.modalTitle')}</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   {errors.email && <Alert variant="danger">{errors.email}</Alert>}
                   {errors.password && <Alert variant="danger">{errors.password}</Alert>}
                   <Form onSubmit={handleSubmitLogin}>
                       <Form.Group className="mb-3" controlId="email">
                           <Form.Label>{t('login.email')}</Form.Label>
                           <Form.Control
                               type="email"
                               placeholder={t('login.emailPlaceholder')}
                               value={data.email}
                               onChange={(e) => setData('email', e.target.value)}
                           />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="password">
                           <Form.Label>{t('login.password')}</Form.Label>
                           <Form.Control
                               type="password"
                               placeholder={t('login.passwordPlaceholder')}
                               value={data.password}
                               onChange={(e) => setData('password', e.target.value)}
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
                           className="hasi-btn fw-bold w-100 mt-3"
                           disabled={processing}
                       >
                           {t('login.submit')}
                       </Button>
                   </Form>
               </Modal.Body>
           </Modal>

           <Modal show={cart} onHide={handleCloseCart} centered size="lg">
               <Modal.Header closeButton>
                   <Modal.Title>{t('cart.title')}</Modal.Title>
               </Modal.Header>
               <Modal.Body className="text-dark">
                   {cartItems.length === 0 ? (
                       <div className="text-center py-4 text-muted">
                           <h5>{t('cart.empty')}</h5>
                           <p className="mb-0">{t('cart.emptyMessage')}</p>
                       </div>
                   ) : (
                       <>
                           <div style={{ maxHeight: '450px', overflowY: 'auto' }}>
                               {cartItems.map((item) => (
                                   <Card
                                       key={item.id}
                                       className="mb-3 p-2 shadow-sm bg-light border-0 overflow-hidden"
                                   >
                                       <Row className="align-items-center g-0 d-flex justify-content-between">
                                           <Col md={8} className="d-flex align-items-center">
                                               <img
                                                   src={item.img}
                                                   alt={item.name}
                                                   style={{
                                                       width: '150px',
                                                       height: '110px',
                                                       objectFit: 'cover',
                                                       marginRight: '15px',
                                                       borderRadius: '12px',
                                                   }}
                                               />
                                               <div className="d-flex flex-column justify-content-center">
                                                   <label className="fw-bold fs-5">
                                                       {item.name}
                                                   </label>
                                                   <label>
                                                       {t('cart.quantity')}:{' '}
                                                       <span className="fw-bold">
                                                           {item.quantity}
                                                       </span>
                                                   </label>
                                                   <label className="fw-bold text-primary">
                                                       {item.price * item.quantity}€
                                                   </label>
                                               </div>
                                           </Col>
                                           <Col md={4} className="d-flex justify-content-end">
                                               <div className="align-self-center px-3">
                                                   <Trash3
                                                       size={24}
                                                       className="text-danger"
                                                       style={{ cursor: 'pointer' }}
                                                       onClick={() =>
                                                           removeFromCart(item.id)
                                                       }
                                                   />
                                               </div>
                                           </Col>
                                       </Row>
                                   </Card>
                               ))}
                           </div>
                           <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                               <h4 className="fw-bold mb-0">
                                   {t('cart.total')}: <span className="text-primary">{cartTotal}€</span>
                               </h4>
                               <div className="d-flex gap-2">
                                   <Button
                                       variant="outline-secondary"
                                       size="sm"
                                       onClick={clearCart}
                                   >
                                       {t('cart.clearButton')}
                                   </Button>
                                   <Button 
                                       className="konf-btn px-4 fw-bold"
                                       onClick={handleConfirmCheckout}
                                   >
                                       {t('cart.confirmButton')}
                                   </Button>
                               </div>
                           </div>
                       </>
                   )}
               </Modal.Body>
           </Modal>
       </>
   );
};

export default Header;
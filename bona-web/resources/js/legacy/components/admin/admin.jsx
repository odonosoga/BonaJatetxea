import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Tab, Table, Button, Modal, Form, Alert, Badge, Card } from 'react-bootstrap';
import { Head, Link, usePage, router, useForm } from '@inertiajs/react';
import { GrUserWorker } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; // ✅ Añadir i18n
import './admin.css';

const route = window.route;

const AdminComponent = ({ users, activeTab = 'langile' }) => {
    const { t } = useTranslation(); // ✅ Hook de traducción
    const { flash } = usePage().props;
    const [key, setKey] = useState(activeTab);
    const [editingUser, setEditingUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    // Form para EDITAR
    const editForm = useForm({
        name: '', email: '', phone: '', birth_date: '', address: '', postal_code: '', mota: ''
    });

    // Form para CREAR Langile
    const createForm = useForm({
        name: '', email: '', password: '', phone: '', birth_date: '', address: '', postal_code: '', mota: ''
    });

    const deleteUser = (userId) => {
        if (confirm(t('admin.confirmDelete'))) {
            router.delete(route ? route('admin.users.destroy', userId) : `/admin/users/${userId}`);
        }
    };

    const handleEditClick = (user) => {
        setEditingUser(user);
        editForm.setData({
            name: user.name,
            email: user.email,
            phone: user.phone || '',
            birth_date: user.birth_date || '',
            address: user.address || '',
            postal_code: user.postal_code || '',
            mota: user.langile?.mota || ''
        });
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setEditingUser(null);
        editForm.reset();
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!editingUser) return;

        const url = route ? route('admin.users.update', editingUser.id) : `/admin/users/${editingUser.id}`;
        editForm.put(url, {
            onSuccess: () => handleCloseModal()
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        const url = route ? route('admin.users.langile.store') : '/admin/users/langile';
        createForm.post(url, {
            onSuccess: () => {
                createForm.reset();
            }
        });
    };

    const langileList = users.data.filter(u => u.role === 'Langile');
    const bezeroList = users.data.filter(u => u.role === 'Bezero');

    return (
        <section className="admin-section">
            <Head title={`${t('admin.title')} - BonaJatetxea`} />
            
            <Container fluid className="p-0 h-100">
                <Row className="g-0 min-vh-100">
                    
                    {/* SIDEBAR */}
                    <Col md={3} lg={2} className="admin-sidebar d-flex flex-column p-4 text-white">
                        <h3 className="fw-bold mb-5 text-center">{t('admin.panelTitle')}</h3>
                        
                        <Nav variant="pills" className="flex-column gap-3" activeKey={key} onSelect={(k) => setKey(k)}>
                            <Nav.Item>
                                <Nav.Link eventKey="langile" className="admin-nav-link text-white">
                                    <div className="d-flex align-items-center gap-2">
                                        <GrUserWorker size={20} />
                                        <span>{t('admin.workers')}</span>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="bezero" className="admin-nav-link text-white">
                                    <div className="d-flex align-items-center gap-2">
                                        <FaUser size={20} />
                                        <span>{t('admin.customers')}</span>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    {/* CONTENIDO PRINCIPAL */}
                    <Col md={9} lg={10} className="admin-content p-5 bg-light">
                        <div className="d-md-none mb-4">
                            <h1 className="fw-bold text-register">{t('admin.panelTitle')}</h1>
                        </div>

                        {flash.success && (
                            <Alert variant="success" className="mb-4 shadow-sm border-0 rounded-3">
                                {flash.success}
                            </Alert>
                        )}

                        <Tab.Container activeKey={key}>
                            <Tab.Content>
                                
                                {/* TAB: LANGILE */}
                                <Tab.Pane eventKey="langile">
                                    <h2 className="text-dark fw-bold mb-4">{t('admin.workerManagement')}</h2>
                                    
                                    <Card className="border-0 shadow-sm mb-5 rounded-4 card-form">
                                        <Card.Body className="p-4">
                                            <h5 className="fw-bold text-register mb-4">{t('admin.newWorker')}</h5>
                                            <Form onSubmit={handleCreate}>
                                                <Row className="g-3">
                                                    <Col md={6}>
                                                        <Form.Control 
                                                            className="form-control-lg fs-6" 
                                                            placeholder={`${t('admin.name')} *`} 
                                                            value={createForm.data.name} 
                                                            onChange={e => createForm.setData('name', e.target.value)} 
                                                            required 
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Control 
                                                            className="form-control-lg fs-6" 
                                                            placeholder={`${t('admin.email')} *`} 
                                                            type="email" 
                                                            value={createForm.data.email} 
                                                            onChange={e => createForm.setData('email', e.target.value)} 
                                                            required 
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Control 
                                                            className="form-control-lg fs-6" 
                                                            placeholder={`${t('admin.password')} *`} 
                                                            type="password" 
                                                            value={createForm.data.password} 
                                                            onChange={e => createForm.setData('password', e.target.value)} 
                                                            required 
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Control 
                                                            className="form-control-lg fs-6" 
                                                            placeholder={`${t('admin.position')} *`} 
                                                            value={createForm.data.mota} 
                                                            onChange={e => createForm.setData('mota', e.target.value)} 
                                                            required 
                                                        />
                                                    </Col>
                                                    
                                                    <Col md={4}>
                                                        <Form.Control 
                                                            placeholder={t('admin.phone')} 
                                                            value={createForm.data.phone} 
                                                            onChange={e => createForm.setData('phone', e.target.value)} 
                                                        />
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Control 
                                                            placeholder={t('admin.address')} 
                                                            value={createForm.data.address} 
                                                            onChange={e => createForm.setData('address', e.target.value)} 
                                                        />
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Control 
                                                            placeholder={t('admin.postalCode')} 
                                                            value={createForm.data.postal_code} 
                                                            onChange={e => createForm.setData('postal_code', e.target.value)} 
                                                        />
                                                    </Col>
                                                    
                                                    <Col md={12} className="mt-4">
                                                        <Form.Control 
                                                            type="submit" 
                                                            value={createForm.processing ? t('admin.creating') : t('admin.addWorker')} 
                                                            className="btn-register w-100 py-2" 
                                                            disabled={createForm.processing} 
                                                        />
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Card.Body>
                                    </Card>

                                    <div className="table-responsive bg-white rounded-4 shadow-sm p-3">
                                        <Table hover className="align-middle mb-0 table-borderless">
                                            <thead className="bg-light text-secondary border-bottom">
                                                <tr>
                                                    <th className="ps-3">{t('admin.name')}</th>
                                                    <th>{t('admin.email')}</th>
                                                    <th>{t('admin.position')}</th>
                                                    <th className="text-end pe-3">{t('admin.actions')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {langileList.map(user => (
                                                    <tr key={user.id} className="border-bottom">
                                                        <td className="fw-bold ps-3 text-dark">{user.name}</td>
                                                        <td className="text-muted">{user.email}</td>
                                                        <td><Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill">{user.langile?.mota || 'N/A'}</Badge></td>
                                                        <td className="text-end pe-3">
                                                            <Button variant="link" className="text-primary text-decoration-none fw-bold me-2" onClick={() => handleEditClick(user)}>
                                                                {t('admin.edit')}
                                                            </Button>
                                                            <Button variant="link" className="text-danger text-decoration-none fw-bold" onClick={() => deleteUser(user.id)}>
                                                                {t('admin.delete')}
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>

                                {/* TAB: BEZERO */}
                                <Tab.Pane eventKey="bezero">
                                    <h2 className="text-dark fw-bold mb-4">{t('admin.customerManagement')}</h2>
                                    <div className="table-responsive bg-white rounded-4 shadow-sm p-3">
                                        <Table hover className="align-middle mb-0 table-borderless">
                                            <thead className="bg-light text-secondary border-bottom">
                                                <tr>
                                                    <th className="ps-3">{t('admin.name')}</th>
                                                    <th>{t('admin.email')}</th>
                                                    <th>{t('admin.phone')}</th>
                                                    <th className="text-end pe-3">{t('admin.actions')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bezeroList.map(user => (
                                                    <tr key={user.id} className="border-bottom">
                                                        <td className="fw-bold ps-3 text-dark">{user.name}</td>
                                                        <td className="text-muted">{user.email}</td>
                                                        <td className="text-muted">{user.phone || '-'}</td>
                                                        <td className="text-end pe-3">
                                                            <Button variant="link" className="text-primary text-decoration-none fw-bold me-2" onClick={() => handleEditClick(user)}>
                                                                {t('admin.edit')}
                                                            </Button>
                                                            <Button variant="link" className="text-danger text-decoration-none fw-bold" onClick={() => deleteUser(user.id)}>
                                                                {t('admin.delete')}
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {bezeroList.length === 0 && (
                                                    <tr>
                                                        <td colSpan="4" className="text-center py-5 text-muted">
                                                            {t('admin.noCustomers')}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            {/* MODAL EDITAR */}
            <Modal show={showEditModal} onHide={handleCloseModal} centered size="lg" className="admin-modal">
                <Modal.Header closeButton className="bg-register text-white border-0">
                    <Modal.Title className="fw-bold fs-5">
                        {t('admin.editUser')} {editingUser?.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 bg-white">
                    <Form onSubmit={handleUpdate}>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                    {t('admin.name')}
                                </Form.Label>
                                <Form.Control value={editForm.data.name} onChange={e => editForm.setData('name', e.target.value)} required />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                    {t('admin.email')}
                                </Form.Label>
                                <Form.Control type="email" value={editForm.data.email} onChange={e => editForm.setData('email', e.target.value)} required />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                    {t('admin.phone')}
                                </Form.Label>
                                <Form.Control value={editForm.data.phone} onChange={e => editForm.setData('phone', e.target.value)} />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                    {t('admin.birthDate')}
                                </Form.Label>
                                <Form.Control type="date" value={editForm.data.birth_date} onChange={e => editForm.setData('birth_date', e.target.value)} />
                            </Col>
                            {editingUser?.role === 'Langile' && (
                                <Col md={12}>
                                    <Form.Label className="fw-medium text-secondary small text-uppercase">
                                        {t('admin.position')}
                                    </Form.Label>
                                    <Form.Control value={editForm.data.mota} onChange={e => editForm.setData('mota', e.target.value)} />
                                </Col>
                            )}
                            <Col md={12}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">
                                    {t('admin.address')}
                                </Form.Label>
                                <Form.Control as="textarea" rows={2} value={editForm.data.address} onChange={e => editForm.setData('address', e.target.value)} />
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                            <Button variant="light" onClick={handleCloseModal} className="px-4 rounded-3 fw-bold text-muted">
                                {t('admin.cancel')}
                            </Button>
                            <Button type="submit" className="btn-register px-5 py-2" disabled={editForm.processing}>
                                {editForm.processing ? t('admin.saving') : t('admin.saveChanges')}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default AdminComponent;

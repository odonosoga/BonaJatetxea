import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Tab, Table, Button, Modal, Form, Alert, Badge, Card } from 'react-bootstrap';
import { Head, Link, usePage, router, useForm } from '@inertiajs/react';
import './admin.css'; // Asegúrate de crear este archivo con el CSS de abajo

// ✅ FIX: Definir 'route' desde window para evitar errores si no está global
const route = window.route; 

const AdminComponent = ({ users, activeTab = 'langile' }) => {
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

    // --- ACCIONES (Lógica original intacta) ---
    const deleteUser = (userId) => {
        if (confirm('¿Estás seguro de eliminar este usuario?')) {
            // Usa route() si existe, o fallback a URL manual
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
        
        // ✅ FIX: Evita error si editingUser es null
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
                // Opcional: mostrar mensaje éxito manual si flash tarda
            }
        });
    };

    // Filtros de usuarios
    const langileList = users.data.filter(u => u.role === 'Langile');
    const bezeroList = users.data.filter(u => u.role === 'Bezero');

    return (
        <section className="admin-section">
            <Head title="Admin Panel - BonaJatetxea" />
            
            <Container fluid className="p-0 h-100">
                <Row className="g-0 min-vh-100">
                    
                    {/* SIDEBAR */}
                    <Col md={3} lg={2} className="admin-sidebar d-flex flex-column p-4 text-white">
                        <h3 className="fw-bold mb-5 text-center">🛠️ Admin Panel</h3>
                        
                        <Nav variant="pills" className="flex-column gap-3" activeKey={key} onSelect={(k) => setKey(k)}>
                            <Nav.Item>
                                <Nav.Link eventKey="langile" className="admin-nav-link text-white">
                                    👷 Trabajadores
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="bezero" className="admin-nav-link text-white">
                                    👥 Clientes
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className="mt-auto text-center pt-5">
                            {/* Link directo a dashboard */}
                            <Link href="/dashboard" className="btn btn-outline-light w-100 fw-bold rounded-pill">
                                ← Volver Dashboard
                            </Link>
                        </div>
                    </Col>

                    {/* CONTENIDO PRINCIPAL */}
                    <Col md={9} lg={10} className="admin-content p-5 bg-light">
                        
                        {/* Header móvil (solo visible en pantallas peques) */}
                        <div className="d-md-none mb-4">
                            <h1 className="fw-bold text-register">Admin Panel</h1>
                        </div>

                        {/* Alertas Flash */}
                        {flash.success && (
                            <Alert variant="success" className="mb-4 shadow-sm border-0 rounded-3">
                                ✅ {flash.success}
                            </Alert>
                        )}

                        <Tab.Container activeKey={key}>
                            <Tab.Content>
                                
                                {/* --- TAB: LANGILE --- */}
                                <Tab.Pane eventKey="langile">
                                    <h2 className="text-dark fw-bold mb-4">Gestión de Trabajadores</h2>
                                    
                                    {/* Formulario Crear (Estilo Card limpia) */}
                                    <Card className="border-0 shadow-sm mb-5 rounded-4 card-form">
                                        <Card.Body className="p-4">
                                            <h5 className="fw-bold text-register mb-4">✨ Nuevo Trabajador</h5>
                                            <Form onSubmit={handleCreate}>
                                                <Row className="g-3">
                                                    <Col md={6}>
                                                        <Form.Control className="form-control-lg fs-6" placeholder="Nombre *" value={createForm.data.name} onChange={e => createForm.setData('name', e.target.value)} required />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Control className="form-control-lg fs-6" placeholder="Email *" type="email" value={createForm.data.email} onChange={e => createForm.setData('email', e.target.value)} required />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Control className="form-control-lg fs-6" placeholder="Contraseña *" type="password" value={createForm.data.password} onChange={e => createForm.setData('password', e.target.value)} required />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Control className="form-control-lg fs-6" placeholder="Puesto (Mota) *" value={createForm.data.mota} onChange={e => createForm.setData('mota', e.target.value)} required />
                                                    </Col>
                                                    
                                                    {/* Campos extra */}
                                                    <Col md={4}><Form.Control placeholder="Teléfono" value={createForm.data.phone} onChange={e => createForm.setData('phone', e.target.value)} /></Col>
                                                    <Col md={4}><Form.Control placeholder="Dirección" value={createForm.data.address} onChange={e => createForm.setData('address', e.target.value)} /></Col>
                                                    <Col md={4}><Form.Control placeholder="Código Postal" value={createForm.data.postal_code} onChange={e => createForm.setData('postal_code', e.target.value)} /></Col>
                                                    
                                                    <Col md={12} className="mt-4">
                                                        <Form.Control 
                                                            type="submit" 
                                                            value={createForm.processing ? "Creando..." : "Añadir Langile"} 
                                                            className="btn-register w-100 py-2" 
                                                            disabled={createForm.processing} 
                                                        />
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Card.Body>
                                    </Card>

                                    {/* Tabla Langile */}
                                    <div className="table-responsive bg-white rounded-4 shadow-sm p-3">
                                        <Table hover className="align-middle mb-0 table-borderless">
                                            <thead className="bg-light text-secondary border-bottom">
                                                <tr>
                                                    <th className="ps-3">Nombre</th>
                                                    <th>Email</th>
                                                    <th>Puesto</th>
                                                    <th className="text-end pe-3">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {langileList.map(user => (
                                                    <tr key={user.id} className="border-bottom">
                                                        <td className="fw-bold ps-3 text-dark">{user.name}</td>
                                                        <td className="text-muted">{user.email}</td>
                                                        <td><Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill">{user.langile?.mota || 'N/A'}</Badge></td>
                                                        <td className="text-end pe-3">
                                                            <Button variant="link" className="text-primary text-decoration-none fw-bold me-2" onClick={() => handleEditClick(user)}>Editar</Button>
                                                            <Button variant="link" className="text-danger text-decoration-none fw-bold" onClick={() => deleteUser(user.id)}>Eliminar</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>

                                {/* --- TAB: BEZERO --- */}
                                <Tab.Pane eventKey="bezero">
                                    <h2 className="text-dark fw-bold mb-4">Gestión de Clientes</h2>
                                    <div className="table-responsive bg-white rounded-4 shadow-sm p-3">
                                        <Table hover className="align-middle mb-0 table-borderless">
                                            <thead className="bg-light text-secondary border-bottom">
                                                <tr>
                                                    <th className="ps-3">Nombre</th>
                                                    <th>Email</th>
                                                    <th>Teléfono</th>
                                                    <th className="text-end pe-3">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bezeroList.map(user => (
                                                    <tr key={user.id} className="border-bottom">
                                                        <td className="fw-bold ps-3 text-dark">{user.name}</td>
                                                        <td className="text-muted">{user.email}</td>
                                                        <td className="text-muted">{user.phone || '-'}</td>
                                                        <td className="text-end pe-3">
                                                            <Button variant="link" className="text-primary text-decoration-none fw-bold me-2" onClick={() => handleEditClick(user)}>Editar</Button>
                                                            <Button variant="link" className="text-danger text-decoration-none fw-bold" onClick={() => deleteUser(user.id)}>Eliminar</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {bezeroList.length === 0 && <tr><td colSpan="4" className="text-center py-5 text-muted">No hay clientes registrados.</td></tr>}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            {/* MODAL EDITAR (Estilo Register idéntico) */}
            <Modal show={showEditModal} onHide={handleCloseModal} centered size="lg" className="admin-modal">
                <Modal.Header closeButton className="bg-register text-white border-0">
                    <Modal.Title className="fw-bold fs-5">✏️ Editar Usuario: {editingUser?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 bg-white">
                    <Form onSubmit={handleUpdate}>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">Nombre</Form.Label>
                                <Form.Control value={editForm.data.name} onChange={e => editForm.setData('name', e.target.value)} required />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">Email</Form.Label>
                                <Form.Control type="email" value={editForm.data.email} onChange={e => editForm.setData('email', e.target.value)} required />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">Teléfono</Form.Label>
                                <Form.Control value={editForm.data.phone} onChange={e => editForm.setData('phone', e.target.value)} />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">F. Nacimiento</Form.Label>
                                <Form.Control type="date" value={editForm.data.birth_date} onChange={e => editForm.setData('birth_date', e.target.value)} />
                            </Col>
                            {editingUser?.role === 'Langile' && (
                                <Col md={12}>
                                    <Form.Label className="fw-medium text-secondary small text-uppercase">Puesto (Mota)</Form.Label>
                                    <Form.Control value={editForm.data.mota} onChange={e => editForm.setData('mota', e.target.value)} />
                                </Col>
                            )}
                            <Col md={12}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">Dirección</Form.Label>
                                <Form.Control as="textarea" rows={2} value={editForm.data.address} onChange={e => editForm.setData('address', e.target.value)} />
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                            <Button variant="light" onClick={handleCloseModal} className="px-4 rounded-3 fw-bold text-muted">Cancelar</Button>
                            <Button type="submit" className="btn-register px-5 py-2" disabled={editForm.processing}>
                                {editForm.processing ? 'Guardando...' : 'Guardar Cambios'}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default AdminComponent;

import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Table, Button, Modal, Form, Alert, Badge, Card, Pagination, InputGroup, FormControl } from 'react-bootstrap';
import { Head, usePage, router, useForm } from '@inertiajs/react';
import { GrUserWorker } from "react-icons/gr";
import { FaUser, FaSearch, FaTrashRestore } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './admin.css';

const route = window.route;

const AdminComponent = ({ users, recoveryUsers = [], activeTab = 'langile' }) => {
    const { t } = useTranslation();
    const { flash } = usePage().props;
    const [key, setKey] = useState(activeTab);
    const [editingUser, setEditingUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    // Estados buscador y paginación
    const [searchLangile, setSearchLangile] = useState('');
    const [searchBezero, setSearchBezero] = useState('');
    const [searchRecovery, setSearchRecovery] = useState('');
    const [currentPageLangile, setCurrentPageLangile] = useState(1);
    const [currentPageBezero, setCurrentPageBezero] = useState(1);
    const [currentPageRecovery, setCurrentPageRecovery] = useState(1);
    const itemsPerPage = 10;

    // Estados modal restaurar con contraseña
    const [showRestoreModal, setShowRestoreModal] = useState(false);
    const [restoreTarget, setRestoreTarget] = useState(null);
    const [restorePassword, setRestorePassword] = useState('');
    const [restorePasswordConfirm, setRestorePasswordConfirm] = useState('');
    const [restoreError, setRestoreError] = useState('');
    const [restoreProcessing, setRestoreProcessing] = useState(false);

    // Forms
    const editForm = useForm({
        name: '', email: '', phone: '', birth_date: '', address: '', postal_code: '', mota: ''
    });

    const createForm = useForm({
        name: '', email: '', password: '', password_confirmation: '', phone: '',
        birth_date: '', address: '', postal_code: '', mota: ''
    });

    // Filtrado y paginación
    const filterAndPaginate = (data, search, currentPage) => {
        const filtered = data.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
        const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
        const totalPages = Math.ceil(sorted.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const paginated = sorted.slice(start, start + itemsPerPage);
        return { paginated, totalPages, totalCount: sorted.length };
    };

    const langileData = filterAndPaginate(users.data.filter(u => u.role === 'Langile'), searchLangile, currentPageLangile);
    const bezeroData = filterAndPaginate(users.data.filter(u => u.role === 'Bezero'), searchBezero, currentPageBezero);
    const recoveryData = filterAndPaginate(recoveryUsers, searchRecovery, currentPageRecovery);

    const handlePageChange = (newPage, type) => {
        if (type === 'langile') setCurrentPageLangile(newPage);
        else if (type === 'bezero') setCurrentPageBezero(newPage);
        else setCurrentPageRecovery(newPage);
    };

    const renderPagination = (totalPages, currentPage, type) => {
        if (totalPages <= 1) return null;
        return (
            <Pagination className="justify-content-center mt-4">
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1, type)} disabled={currentPage === 1} />
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                    if (page === 1 || page === totalPages || (page >= currentPage - 2 && page <= currentPage + 2)) {
                        return (
                            <Pagination.Item key={page} active={page === currentPage} onClick={() => handlePageChange(page, type)}>
                                {page}
                            </Pagination.Item>
                        );
                    } else if (page === currentPage - 3 || page === currentPage + 3) {
                        return <Pagination.Ellipsis key={page} disabled />;
                    }
                    return null;
                })}
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1, type)} disabled={currentPage === totalPages} />
            </Pagination>
        );
    };

    const deleteUser = (userId) => {
        if (confirm(t('admin.confirmDelete'))) {
            router.delete(route ? route('admin.users.destroy', userId) : `/admin/users/${userId}`, {
                preserveScroll: true,
            });
        }
    };

    // Abrir modal de restaurar
    const handleRestoreClick = (user) => {
        setRestoreTarget(user);
        setRestorePassword('');
        setRestorePasswordConfirm('');
        setRestoreError('');
        setShowRestoreModal(true);
    };

    // Confirmar restauración con contraseña
    const handleRestoreConfirm = () => {
        if (restorePassword.length < 8) {
            setRestoreError('Pasahitzak 8 karaktere izan behar ditu gutxienez.');
            return;
        }
        if (restorePassword !== restorePasswordConfirm) {
            setRestoreError('Pasahitzak ez datoz bat.');
            return;
        }
        setRestoreProcessing(true);
        router.post(
            route ? route('admin.users.restore', restoreTarget.id) : `/admin/users/${restoreTarget.id}/restore`,
            { password: restorePassword },
            {
                onSuccess: () => {
                    setShowRestoreModal(false);
                    setRestoreProcessing(false);
                },
                onError: () => {
                    setRestoreProcessing(false);
                    setRestoreError('Errorea gertatu da. Saiatu berriro.');
                }
            }
        );
    };

    const permanentDelete = (userId) => {
        if (confirm('Erabiltzailea betirako ezabatu nahi duzu? Ekintza hau ezin da desegin.')) {
            router.delete(
                route ? route('admin.users.forceDelete', userId) : `/admin/users/${userId}/force-delete`,
                { preserveScroll: true }
            );
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
            mota: user.langile?.mota || user.mota || ''
        });
        editForm.clearErrors();
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setEditingUser(null);
        editForm.reset();
        editForm.clearErrors();
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!editingUser) return;
        const url = route ? route('admin.users.update', editingUser.id) : `/admin/users/${editingUser.id}`;
        editForm.put(url, {
            onSuccess: () => handleCloseModal(),
            preserveScroll: true
        });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        if (createForm.data.password !== createForm.data.password_confirmation) {
            createForm.setError('password_confirmation', t('admin.passwordsDontMatch') || 'Las contraseñas no coinciden');
            return;
        }
        const url = route ? route('admin.users.langile.store') : '/admin/users/langile';
        createForm.post(url, {
            preserveScroll: true,
            onSuccess: () => { createForm.reset(); },
            onError: (errors) => { console.error("Errores de validación:", errors); }
        });
    };

    const tipoTrabajadorOptions = [
        { value: 'Banatzaile', label: 'Banatzaile' },
        { value: 'Garbitzaile', label: 'Garbitzaile' },
        { value: 'Sukaldari', label: 'Sukaldari' },
        { value: 'Zerbitzari', label: 'Zerbitzari' }
    ];

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
                            <Nav.Item>
                                <Nav.Link eventKey="recovery" className="admin-nav-link text-white">
                                    <div className="d-flex align-items-center gap-2">
                                        <FaTrashRestore size={20} />
                                        <span>Erabiltzaileak Berreskuratu</span>
                                        {recoveryUsers.length > 0 && (
                                            <Badge bg="danger" pill className="ms-1">{recoveryUsers.length}</Badge>
                                        )}
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    {/* CONTENIDO */}
                    <Col md={9} lg={10} className="admin-content p-5 bg-light">

                        {flash.success && (
                            <Alert variant="success" className="mb-4 shadow-sm border-0 rounded-3">{flash.success}</Alert>
                        )}
                        {flash.error && (
                            <Alert variant="danger" className="mb-4 shadow-sm border-0 rounded-3">{flash.error}</Alert>
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
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.name') || 'Nombre'} *</Form.Label>
                                                        <Form.Control className="form-control-lg fs-6" value={createForm.data.name} onChange={e => createForm.setData('name', e.target.value)} isInvalid={!!createForm.errors.name} required />
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.name}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.email') || 'Email'} *</Form.Label>
                                                        <Form.Control className="form-control-lg fs-6" type="email" value={createForm.data.email} onChange={e => createForm.setData('email', e.target.value)} isInvalid={!!createForm.errors.email} required />
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.email}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.password') || 'Contraseña'} *</Form.Label>
                                                        <Form.Control className="form-control-lg fs-6" type="password" value={createForm.data.password} onChange={e => createForm.setData('password', e.target.value)} isInvalid={!!createForm.errors.password} required />
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.password}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.confirmPassword') || 'Confirmar Contraseña'} *</Form.Label>
                                                        <Form.Control className="form-control-lg fs-6" type="password" value={createForm.data.password_confirmation} onChange={e => createForm.setData('password_confirmation', e.target.value)} isInvalid={!!createForm.errors.password_confirmation} required />
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.password_confirmation}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.phone') || 'Número'} *</Form.Label>
                                                        <Form.Control className="form-control-lg fs-6" value={createForm.data.phone} onChange={e => createForm.setData('phone', e.target.value)} isInvalid={!!createForm.errors.phone} required />
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.phone}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.birthDate') || 'Fecha de Cumpleaños'} *</Form.Label>
                                                        <Form.Control className="form-control-lg fs-6" type="date" value={createForm.data.birth_date} onChange={e => createForm.setData('birth_date', e.target.value)} isInvalid={!!createForm.errors.birth_date} required />
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.birth_date}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={12}>
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.workerType') || 'Tipo de Trabajador'} *</Form.Label>
                                                        <Form.Select className="form-control-lg fs-6" value={createForm.data.mota} onChange={e => createForm.setData('mota', e.target.value)} isInvalid={!!createForm.errors.mota} required>
                                                            <option value="">{t('admin.selectType') || 'Seleccionar tipo...'}</option>
                                                            {tipoTrabajadorOptions.map((option) => (
                                                                <option key={option.value} value={option.value}>{option.label}</option>
                                                            ))}
                                                        </Form.Select>
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.mota}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.address') || 'Dirección'} *</Form.Label>
                                                        <Form.Control className="form-control-lg fs-6" value={createForm.data.address} onChange={e => createForm.setData('address', e.target.value)} isInvalid={!!createForm.errors.address} required />
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.address}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.postalCode') || 'Código Postal'} *</Form.Label>
                                                        <Form.Control className="form-control-lg fs-6" value={createForm.data.postal_code} onChange={e => createForm.setData('postal_code', e.target.value)} isInvalid={!!createForm.errors.postal_code} required />
                                                        <Form.Control.Feedback type="invalid">{createForm.errors.postal_code}</Form.Control.Feedback>
                                                    </Col>
                                                    <Col md={12} className="mt-4">
                                                        <Form.Control type="submit" value={createForm.processing ? t('admin.creating') : t('admin.addWorker')} className="btn-register w-100 py-2" disabled={createForm.processing} />
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Card.Body>
                                    </Card>

                                    <InputGroup className="mb-4" style={{ maxWidth: '400px' }}>
                                        <InputGroup.Text className="bg-white border-end-0"><FaSearch className="text-muted" /></InputGroup.Text>
                                        <FormControl className="border-start-0 ps-0" placeholder={t('admin.searchByName') || 'Buscar trabajador...'} value={searchLangile} onChange={(e) => { setSearchLangile(e.target.value); setCurrentPageLangile(1); }} />
                                    </InputGroup>

                                    <div className="table-responsive bg-white rounded-4 shadow-sm p-3">
                                        <Table hover className="align-middle mb-0 table-borderless">
                                            <thead className="bg-light text-secondary border-bottom">
                                                <tr>
                                                    <th className="ps-3">ID</th>
                                                    <th className="ps-3">{t('admin.name')}</th>
                                                    <th>{t('admin.position')}</th>
                                                    <th>{t('admin.email')}</th>
                                                    <th className="text-end pe-3">{t('admin.actions')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {langileData.paginated.map(user => (
                                                    <tr key={user.id} className="border-bottom">
                                                        <td className="fw-bold ps-3 text-dark fs-6">{user.id}</td>
                                                        <td className="fw-bold ps-3 text-dark">{user.name}</td>
                                                        <td><Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill">{user.langile?.mota || user.mota || 'N/A'}</Badge></td>
                                                        <td className="text-muted">{user.email}</td>
                                                        <td className="text-end pe-3">
                                                            <Button variant="link" className="text-primary text-decoration-none fw-bold me-2" onClick={() => handleEditClick(user)}>{t('admin.edit')}</Button>
                                                            <Button variant="link" className="text-danger text-decoration-none fw-bold" onClick={() => deleteUser(user.id)}>{t('admin.delete')}</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {langileData.paginated.length === 0 && (
                                                    <tr><td colSpan="5" className="text-center py-5 text-muted">{searchLangile ? 'No se encontraron resultados' : 'No hay trabajadores'}</td></tr>
                                                )}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {renderPagination(langileData.totalPages, currentPageLangile, 'langile')}
                                </Tab.Pane>

                                {/* TAB: BEZERO */}
                                <Tab.Pane eventKey="bezero">
                                    <h2 className="text-dark fw-bold mb-4">{t('admin.customerManagement')}</h2>

                                    <InputGroup className="mb-4" style={{ maxWidth: '400px' }}>
                                        <InputGroup.Text className="bg-white border-end-0"><FaSearch className="text-muted" /></InputGroup.Text>
                                        <FormControl className="border-start-0 ps-0" placeholder='Buscar cliente...' value={searchBezero} onChange={(e) => { setSearchBezero(e.target.value); setCurrentPageBezero(1); }} />
                                    </InputGroup>

                                    <div className="table-responsive bg-white rounded-4 shadow-sm p-3">
                                        <Table hover className="align-middle mb-0 table-borderless">
                                            <thead className="bg-light text-secondary border-bottom">
                                                <tr>
                                                    <th className="ps-3">ID</th>
                                                    <th className="ps-3">{t('admin.name')}</th>
                                                    <th>{t('admin.email')}</th>
                                                    <th>{t('admin.phone')}</th>
                                                    <th className="text-end pe-3">{t('admin.actions')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bezeroData.paginated.map(user => (
                                                    <tr key={user.id} className="border-bottom">
                                                        <td className="fw-bold ps-3 text-dark fs-6">{user.id}</td>
                                                        <td className="fw-bold ps-3 text-dark">{user.name}</td>
                                                        <td className="text-muted">{user.email}</td>
                                                        <td className="text-muted">{user.phone || '-'}</td>
                                                        <td className="text-end pe-3">
                                                            <Button variant="link" className="text-primary text-decoration-none fw-bold me-2" onClick={() => handleEditClick(user)}>{t('admin.edit')}</Button>
                                                            <Button variant="link" className="text-danger text-decoration-none fw-bold" onClick={() => deleteUser(user.id)}>{t('admin.delete')}</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {bezeroData.paginated.length === 0 && (
                                                    <tr><td colSpan="5" className="text-center py-5 text-muted">No hay clientes</td></tr>
                                                )}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {renderPagination(bezeroData.totalPages, currentPageBezero, 'bezero')}
                                </Tab.Pane>

                                {/* TAB: RECOVERY */}
                                <Tab.Pane eventKey="recovery">
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <FaTrashRestore size={28} className="text-warning" />
                                        <h2 className="text-dark fw-bold mb-0">Erabiltzaileak Berreskuratu</h2>
                                    </div>

                                    <Alert variant="warning" className="border-0 rounded-3 mb-4 shadow-sm">
                                        <strong>⚠️ Oharra:</strong> Hemen ezabatutako erabiltzaileak agertzen dira. Berreskuratzean pasahitz berria ezarri beharko duzu.
                                    </Alert>

                                    <InputGroup className="mb-4" style={{ maxWidth: '400px' }}>
                                        <InputGroup.Text className="bg-white border-end-0"><FaSearch className="text-muted" /></InputGroup.Text>
                                        <FormControl className="border-start-0 ps-0" placeholder="Bilatu izena..." value={searchRecovery} onChange={(e) => { setSearchRecovery(e.target.value); setCurrentPageRecovery(1); }} />
                                    </InputGroup>

                                    <div className="table-responsive bg-white rounded-4 shadow-sm p-3">
                                        <Table hover className="align-middle mb-0 table-borderless">
                                            <thead className="bg-light text-secondary border-bottom">
                                                <tr>
                                                    <th className="ps-3">ID</th>
                                                    <th className="ps-3">Izena</th>
                                                    <th>Rola</th>
                                                    <th>Email</th>
                                                    <th className="text-end pe-3">Ekintzak</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {recoveryData.paginated.map(user => (
                                                    <tr key={user.id} className="border-bottom">
                                                        <td className="fw-bold ps-3 text-dark fs-6">{user.id}</td>
                                                        <td className="fw-bold ps-3 text-dark">{user.name}</td>
                                                        <td>
                                                            <Badge bg={user.role === 'Langile' ? 'warning' : 'info'} text="dark" className="px-3 py-2 rounded-pill">
                                                                {user.role || 'N/A'}
                                                            </Badge>
                                                        </td>
                                                        <td className="text-muted">{user.email}</td>
                                                        <td className="text-end pe-3">
                                                            <Button variant="link" className="text-success text-decoration-none fw-bold me-2" onClick={() => handleRestoreClick(user)}>
                                                                Berreskuratu
                                                            </Button>
                                                            <Button variant="link" className="text-danger text-decoration-none fw-bold" onClick={() => permanentDelete(user.id)}>
                                                                Betirako Ezabatu
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {recoveryData.paginated.length === 0 && (
                                                    <tr><td colSpan="5" className="text-center py-5 text-muted">{searchRecovery ? 'Ez da emaitzarik aurkitu' : 'Ez dago erabiltzaile ezabaturik'}</td></tr>
                                                )}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {renderPagination(recoveryData.totalPages, currentPageRecovery, 'recovery')}
                                    {recoveryData.totalCount > 0 && (
                                        <div className="text-center text-muted mt-2 small">
                                            {recoveryData.paginated.length} / {recoveryData.totalCount} erabiltzaile erakusten
                                        </div>
                                    )}
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            {/* MODAL EDITAR */}
            <Modal show={showEditModal} onHide={handleCloseModal} centered size="lg" className="admin-modal">
                <Modal.Header closeButton className="bg-register text-white border-0">
                    <Modal.Title className="fw-bold fs-5">{t('admin.editUser')} {editingUser?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 bg-white">
                    <Form onSubmit={handleUpdate}>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.name')}</Form.Label>
                                <Form.Control value={editForm.data.name} onChange={e => editForm.setData('name', e.target.value)} isInvalid={!!editForm.errors.name} required />
                                <Form.Control.Feedback type="invalid">{editForm.errors.name}</Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.email')}</Form.Label>
                                <Form.Control type="email" value={editForm.data.email} onChange={e => editForm.setData('email', e.target.value)} isInvalid={!!editForm.errors.email} required />
                                <Form.Control.Feedback type="invalid">{editForm.errors.email}</Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.phone')}</Form.Label>
                                <Form.Control value={editForm.data.phone} onChange={e => editForm.setData('phone', e.target.value)} isInvalid={!!editForm.errors.phone} />
                                <Form.Control.Feedback type="invalid">{editForm.errors.phone}</Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.birthDate')}</Form.Label>
                                <Form.Control type="date" value={editForm.data.birth_date} onChange={e => editForm.setData('birth_date', e.target.value)} isInvalid={!!editForm.errors.birth_date} />
                                <Form.Control.Feedback type="invalid">{editForm.errors.birth_date}</Form.Control.Feedback>
                            </Col>
                            {editingUser?.role === 'Langile' && (
                                <Col md={12}>
                                    <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.workerType')}</Form.Label>
                                    <Form.Select value={editForm.data.mota} onChange={e => editForm.setData('mota', e.target.value)} isInvalid={!!editForm.errors.mota}>
                                        <option value="">{t('admin.selectType')}</option>
                                        {tipoTrabajadorOptions.map((option) => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">{editForm.errors.mota}</Form.Control.Feedback>
                                </Col>
                            )}
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.address')}</Form.Label>
                                <Form.Control value={editForm.data.address} onChange={e => editForm.setData('address', e.target.value)} isInvalid={!!editForm.errors.address} />
                                <Form.Control.Feedback type="invalid">{editForm.errors.address}</Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-medium text-secondary small text-uppercase">{t('admin.postalCode')}</Form.Label>
                                <Form.Control value={editForm.data.postal_code} onChange={e => editForm.setData('postal_code', e.target.value)} isInvalid={!!editForm.errors.postal_code} />
                                <Form.Control.Feedback type="invalid">{editForm.errors.postal_code}</Form.Control.Feedback>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                            <Button variant="light" onClick={handleCloseModal} className="px-4 rounded-3 fw-bold text-muted">{t('admin.cancel')}</Button>
                            <Button type="submit" className="btn-register px-5 py-2" disabled={editForm.processing}>
                                {editForm.processing ? t('admin.saving') : t('admin.saveChanges')}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* MODAL BERRESKURATU - Pedir contraseña nueva */}
            <Modal show={showRestoreModal} onHide={() => setShowRestoreModal(false)} centered className="admin-modal">
                <Modal.Header closeButton className="bg-success text-white border-0">
                    <Modal.Title className="fw-bold fs-5">
                        Berreskuratu: {restoreTarget?.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 bg-white">
                    <p className="text-muted mb-4">
                        Erabiltzailearen kontu berria sortzeko, pasahitz berri bat ezarri behar duzu.
                    </p>
                    {restoreError && (
                        <Alert variant="danger" className="border-0 rounded-3">{restoreError}</Alert>
                    )}
                    <Row className="g-3">
                        <Col md={12}>
                            <Form.Label className="fw-medium text-secondary small text-uppercase">Pasahitz Berria *</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Gutxienez 8 karaktere..."
                                value={restorePassword}
                                onChange={e => { setRestorePassword(e.target.value); setRestoreError(''); }}
                            />
                        </Col>
                        <Col md={12}>
                            <Form.Label className="fw-medium text-secondary small text-uppercase">Pasahitza Berretsi *</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Errepikatu pasahitza..."
                                value={restorePasswordConfirm}
                                onChange={e => { setRestorePasswordConfirm(e.target.value); setRestoreError(''); }}
                            />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="border-0 bg-white px-4 pb-4">
                    <Button variant="light" onClick={() => setShowRestoreModal(false)} className="px-4 rounded-3 fw-bold text-muted">
                        Utzi
                    </Button>
                    <Button
                        className="btn-register px-5 py-2"
                        onClick={handleRestoreConfirm}
                        disabled={restoreProcessing}
                    >
                        {restoreProcessing ? 'Berreskuratzen...' : 'Berreskuratu'}
                    </Button>
                </Modal.Footer>
            </Modal>

        </section>
    );
};

export default AdminComponent;
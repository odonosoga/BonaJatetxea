import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { usePage } from '@inertiajs/react';
import "./Schedule.css";

const Schedule = () => {
  const { t } = useTranslation();
  const pageProps = usePage().props;
  const { langileak = [] } = pageProps;

  const [newWorker, setNewWorker] = useState({
    name: "", role: "",
    monday: "", tuesday: "", wednesday: "",
    thursday: "", friday: "", saturday: "", sunday: ""
  });

  // ✅ ORDENAR langileak del seeder: mota → name
  const sortedLangileak = [...langileak].sort((a, b) => {
    const roleA = (a.mota || a.role || '').toLowerCase();
    const roleB = (b.mota || b.role || '').toLowerCase();
    if (roleA < roleB) return -1;
    if (roleA > roleB) return 1;

    const nameA = (a.name || '').toLowerCase();
    const nameB = (b.name || '').toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  // ✅ INICIALIZAR workers CON DATOS REALES del seeder
  const [workers, setWorkers] = useState(
    sortedLangileak.map(worker => ({
      id: worker.id,
      name: worker.name,
      role: worker.mota,
      mota: worker.mota,
      monday: worker.monday || "",
      tuesday: worker.tuesday || "",
      wednesday: worker.wednesday || "",
      thursday: worker.thursday || "",
      friday: worker.friday || "",
      saturday: worker.saturday || "",
      sunday: worker.sunday || ""
    }))
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorker(prev => ({ ...prev, [name]: value }));
  };

  const handleAddWorker = (e) => {
    e.preventDefault();
    if (!newWorker.name || !newWorker.role) return;

    const workerData = sortedLangileak.find(w => w.id == newWorker.name);
    if (!workerData) return;

    const exists = workers.some(w => w.id == newWorker.name);
    if (exists) {
      alert(`${workerData.name} ${t("schedule.workerAlreadyAdded")}`);
      return;
    }

    setWorkers(prev => [...prev, {
      id: newWorker.name, 
      name: workerData.name,
      role: newWorker.role,
      mota: newWorker.role,
      monday: newWorker.monday,
      tuesday: newWorker.tuesday,
      wednesday: newWorker.wednesday,
      thursday: newWorker.thursday,
      friday: newWorker.friday,
      saturday: newWorker.saturday,
      sunday: newWorker.sunday
    }]);

    setNewWorker({
      name: "", role: "", monday: "", tuesday: "", wednesday: "",
      thursday: "", friday: "", saturday: "", sunday: ""
    });
  };

  const handleSaveTable = () => {
    if (workers.length === 0) {
      alert('Añade trabajadores primero');
      return;
    }

    fetch(route('ordutegia.store'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify({ workers })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert('¡Guardado correctamente!');
      } else {
        alert('Error: ' + data.message);
      }
    })
    .catch(error => {
      alert('Error de conexión');
    });
  };

  return (
    <section id="schedule" className="schedule-section">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="fw-bold mb-2 mt-5 pt-5">
              {t("schedule.title")}
            </h2>
            <p className="text-muted mb-4">
              {t("schedule.description")}
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Tabla con DATOS REALES del seeder */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm h-100 schedule-card-table">
              <Card.Body className="p-3 p-lg-4">
                <h5 className="fw-bold mb-3">{t("schedule.tableWeek")}</h5>
                <div className="table-responsive">
                  <Table striped bordered hover size="sm" className="schedule-table">
                    <thead className="text-center align-middle">
                      <tr>
                        <th>{t("schedule.columnWorker")}</th>
                        <th>{t("schedule.columnRole")}</th>
                        <th>{t("schedule.days.monday")}</th>
                        <th>{t("schedule.days.tuesday")}</th>
                        <th>{t("schedule.days.wednesday")}</th>
                        <th>{t("schedule.days.thursday")}</th>
                        <th>{t("schedule.days.friday")}</th>
                        <th>{t("schedule.days.saturday")}</th>
                        <th>{t("schedule.days.sunday")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workers.map((w) => (
                        <tr key={w.id}>
                          <td><strong>{w.name}</strong></td>
                          <td>{w.role}</td>
                          <td>{w.monday || "—"}</td>
                          <td>{w.tuesday || "—"}</td>
                          <td>{w.wednesday || "—"}</td>
                          <td>{w.thursday || "—"}</td>
                          <td>{w.friday || "—"}</td>
                          <td>{w.saturday || "—"}</td>
                          <td>{w.sunday || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulario CON NUEVO BOTÓN */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm h-100 schedule-card-form">
              <Card.Body className="p-3 p-lg-4">
                <h5 className="fw-bold mb-3 text-white">
                  {t("schedule.formTitle")}
                </h5>
                <Form onSubmit={handleAddWorker}>
                  <Form.Group className="mb-3">
                    <Form.Label className="schedule-form-label text-white">
                      {t("schedule.nameLabel")}
                    </Form.Label>
                    <Form.Select
                      name="name"
                      value={newWorker.name}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">{t("schedule.namePlaceholder")}</option>
                      {sortedLangileak.map((worker) => (
                        <option key={worker.id} value={worker.id}>
                          {worker.name} ({worker.mota || worker.role})
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="schedule-form-label text-white">
                      {t("schedule.roleLabel")}
                    </Form.Label>
                    <Form.Select
                      name="role"
                      value={newWorker.role}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">{t("schedule.rolePlaceholder")}</option>
                      <option value="Sukaldari">{t("schedule.roleOptions.cook")}</option>
                      <option value="Zerbitzari">{t("schedule.roleOptions.waiter")}</option>
                      <option value="Banatzaile">{t("schedule.roleOptions.delivery")}</option>
                      <option value="Garbitzailea">{t("schedule.roleOptions.cleaner")}</option>
                    </Form.Select>
                  </Form.Group>

                  {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                    <Form.Group key={day} className="mb-2">
                      <Form.Label className="schedule-form-label text-white">
                        {t(`schedule.days.${day}`)}
                      </Form.Label>
                      <Form.Select
                        name={day}
                        value={newWorker[day]}
                        onChange={handleChange}
                        className="schedule-form-select"
                      >
                        <option value="">{t("schedule.daySelectPlaceholder")}</option>
                        <option value="12:00–16:00">12:00–16:00</option>
                        <option value="19:00–23:00">19:00–23:00</option>
                        <option value="12:00–16:00 / 19:00–23:00">12:00–16:00 / 19:00–23:00</option>
                        <option value="Libre">Libre</option>
                      </Form.Select>
                    </Form.Group>
                  ))}
                  {/* Botón original */}
                  <Button type="submit" className="w-100 schedule-save-button fw-bold">
                    {t("schedule.submitButton")}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Schedule;

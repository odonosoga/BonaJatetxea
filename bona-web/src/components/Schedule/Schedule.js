// Schedule.jsx
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import "./Schedule.css";

const Schedule = () => {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      name: "Trabajador 1",
      role: "Camarero",
      monday: "12:00–16:00 / 19:00–23:00",
      tuesday: "12:00–16:00 / 19:00–23:00",
      wednesday: "Libre",
      thursday: "12:00–16:00 / 19:00–23:00",
      friday: "12:00–16:00 / 19:00–23:00",
      saturday: "12:00–16:00 / 19:00–23:00",
      sunday: "Libre",
    },
  ]);

  const [newWorker, setNewWorker] = useState({
    name: "",
    role: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorker((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddWorker = (e) => {
    e.preventDefault();

    if (!newWorker.name || !newWorker.role) return;

    setWorkers((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newWorker,
      },
    ]);

    setNewWorker({
      name: "",
      role: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    });
  };

  return (
    <section id="schedule" className="schedule-section py-5">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="fw-bold">Horarios de trabajadores</h2>
            <p className="text-muted mb-0">
              Gestiona los turnos semanales de cada trabajador.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Tabla de horarios */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm h-100 schedule-card-table">
              <Card.Body className="p-3 p-lg-4">
                <h5 className="fw-bold mb-3">Semana actual</h5>
                <div className="table-responsive">
                  <Table
                    striped
                    bordered
                    hover
                    size="sm"
                    className="schedule-table"
                  >
                    <thead className="text-center align-middle">
                      <tr>
                        <th>Trabajador</th>
                        <th>Rol</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workers.map((w) => (
                        <tr key={w.id}>
                          <td>{w.name}</td>
                          <td>{w.role}</td>
                          <td>{w.monday}</td>
                          <td>{w.tuesday}</td>
                          <td>{w.wednesday}</td>
                          <td>{w.thursday}</td>
                          <td>{w.friday}</td>
                          <td>{w.saturday}</td>
                          <td>{w.sunday}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulario para añadir/editar horarios */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm h-100 schedule-card-form">
              <Card.Body className="p-3 p-lg-4">
                <h5 className="fw-bold mb-3">Añadir trabajador</h5>
                <Form onSubmit={handleAddWorker}>
                  {/* Nombre */}
                  <Form.Group className="mb-3">
                    <Form.Label className="schedule-form-label">
                      Nombre
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={newWorker.name}
                      onChange={handleChange}
                      placeholder="Nombre trabajador"
                      required
                      className="schedule-form-input"
                    />
                  </Form.Group>

                  {/* Rol */}
                  <Form.Group className="mb-3">
                    <Form.Label className="schedule-form-label">
                      Rol
                    </Form.Label>
                    <Form.Select
                      name="role"
                      value={newWorker.role}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">- Hautatu langilearen rol -</option>
                      <option value="Sukaldaria">Sukaldaria</option>
                      <option value="Zerbitzaria">Zerbitzaria</option>
                      <option value="Banatzailea">Banatzailea</option>
                      <option value="Garbitzailea">Garbitzailea</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Lunes */}
                  <Form.Group className="mb-2">
                    <Form.Label className="schedule-form-label">
                      Lunes
                    </Form.Label>
                    <Form.Select
                      name="monday"
                      value={newWorker.monday}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">- Aukeratu -</option>
                      <option value="12:00–16:00 / 19:00–23:00">
                        12:00–16:00 / 19:00–23:00
                      </option>
                      <option value="Libre">Libre</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Martes */}
                  <Form.Group className="mb-2">
                    <Form.Label className="schedule-form-label">
                      Asteartea
                    </Form.Label>
                    <Form.Select
                      name="tuesday"
                      value={newWorker.tuesday}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">- Aukeratu -</option>
                      <option value="12:00–16:00 / 19:00–23:00">
                        12:00–16:00 / 19:00–23:00
                      </option>
                      <option value="Libre">Libre</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Miércoles */}
                  <Form.Group className="mb-2">
                    <Form.Label className="schedule-form-label">
                      Miércoles
                    </Form.Label>
                    <Form.Select
                      name="wednesday"
                      value={newWorker.wednesday}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">- Aukeratu -</option>
                      <option value="12:00–16:00 / 19:00–23:00">
                        12:00–16:00 / 19:00–23:00
                      </option>
                      <option value="Libre">Libre</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Jueves */}
                  <Form.Group className="mb-2">
                    <Form.Label className="schedule-form-label">
                      Jueves
                    </Form.Label>
                    <Form.Select
                      name="thursday"
                      value={newWorker.thursday}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">- Aukeratu -</option>
                      <option value="12:00–16:00 / 19:00–23:00">
                        12:00–16:00 / 19:00–23:00
                      </option>
                      <option value="Libre">Libre</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Viernes */}
                  <Form.Group className="mb-2">
                    <Form.Label className="schedule-form-label">
                      Viernes
                    </Form.Label>
                    <Form.Select
                      name="friday"
                      value={newWorker.friday}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">- Aukeratu -</option>
                      <option value="12:00–16:00 / 19:00–23:00">
                        12:00–16:00 / 19:00–23:00
                      </option>
                      <option value="Libre">Libre</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Sábado */}
                  <Form.Group className="mb-2">
                    <Form.Label className="schedule-form-label">
                      Sábado
                    </Form.Label>
                    <Form.Select
                      name="saturday"
                      value={newWorker.saturday}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">- Aukeratu -</option>
                      <option value="12:00–16:00 / 19:00–23:00">
                        12:00–16:00 / 19:00–23:00
                      </option>
                      <option value="Libre">Libre</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Domingo */}
                  <Form.Group className="mb-3">
                    <Form.Label className="schedule-form-label">
                      Domingo
                    </Form.Label>
                    <Form.Select
                      name="sunday"
                      value={newWorker.sunday}
                      onChange={handleChange}
                      required
                      className="schedule-form-select"
                    >
                      <option value="">- Aukeratu -</option>
                      <option value="12:00–16:00 / 19:00–23:00">
                        12:00–16:00 / 19:00–23:00
                      </option>
                      <option value="Libre">Libre</option>
                    </Form.Select>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 schedule-save-button fw-bold"
                  >
                    Guardar horario
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

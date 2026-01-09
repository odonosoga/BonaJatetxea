// PÁGINA: Schedule / Ordutegia (Langileen ordutegiak)
// Traducciones necesarias: schedule.title, schedule.description, schedule.tableWeek,
// schedule.columnWorker, schedule.columnRole, schedule.days.monday, schedule.days.tuesday,
// schedule.days.wednesday, schedule.days.thursday, schedule.days.friday, schedule.days.saturday,
// schedule.days.sunday, schedule.formTitle, schedule.nameLabel, schedule.namePlaceholder,
// schedule.roleLabel, schedule.rolePlaceholder, schedule.roleOptions.*,
// schedule.daySelectPlaceholder, schedule.submitButton

import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Schedule.css";

const Schedule = () => {
  const { t } = useTranslation();

  const [workers, setWorkers] = useState([
    // Sukaldaria
    {
      id: 1,
      name: "Langile 1",
      role: "Sukaldaria",
      monday: "Libre",
      tuesday: "12:00–16:00 / 19:00–23:00",
      wednesday: "12:00–16:00",
      thursday: "19:00–23:00",
      friday: "12:00–16:00 / 19:00–23:00",
      saturday: "12:00–16:00",
      sunday: "Libre",
    },
    {
      id: 2,
      name: "Langile 2",
      role: "Sukaldaria",
      monday: "12:00–16:00 / 19:00–23:00",
      tuesday: "Libre",
      wednesday: "19:00–23:00",
      thursday: "12:00–16:00",
      friday: "19:00–23:00",
      saturday: "12:00–16:00 / 19:00–23:00",
      sunday: "Libre",
    },

    // Zerbitzaria
    {
      id: 3,
      name: "Langile 3",
      role: "Zerbitzaria",
      monday: "12:00–16:00",
      tuesday: "19:00–23:00",
      wednesday: "Libre",
      thursday: "12:00–16:00 / 19:00–23:00",
      friday: "12:00–16:00",
      saturday: "19:00–23:00",
      sunday: "Libre",
    },
    {
      id: 4,
      name: "Langile 4",
      role: "Zerbitzaria",
      monday: "19:00–23:00",
      tuesday: "12:00–16:00",
      wednesday: "12:00–16:00 / 19:00–23:00",
      thursday: "Libre",
      friday: "19:00–23:00",
      saturday: "12:00–16:00",
      sunday: "Libre",
    },

    // Banatzailea
    {
      id: 5,
      name: "Langile 5",
      role: "Banatzailea",
      monday: "Libre",
      tuesday: "Libre",
      wednesday: "12:00–16:00",
      thursday: "19:00–23:00",
      friday: "12:00–16:00 / 19:00–23:00",
      saturday: "12:00–16:00",
      sunday: "19:00–23:00",
    },
    {
      id: 6,
      name: "Langile 6",
      role: "Banatzailea",
      monday: "12:00–16:00 / 19:00–23:00",
      tuesday: "12:00–16:00",
      wednesday: "19:00–23:00",
      thursday: "Libre",
      friday: "Libre",
      saturday: "19:00–23:00",
      sunday: "12:00–16:00",
    },

    // Garbitzailea
    {
      id: 7,
      name: "Langile 7",
      role: "Garbitzailea",
      monday: "12:00–16:00",
      tuesday: "12:00–16:00 / 19:00–23:00",
      wednesday: "Libre",
      thursday: "19:00–23:00",
      friday: "12:00–16:00",
      saturday: "Libre",
      sunday: "19:00–23:00",
    },
    {
      id: 8,
      name: "Langile 8",
      role: "Garbitzailea",
      monday: "19:00–23:00",
      tuesday: "Libre",
      wednesday: "12:00–16:00 / 19:00–23:00",
      thursday: "12:00–16:00",
      friday: "19:00–23:00",
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
          {/* Tabla de horarios */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm h-100 schedule-card-table">
              <Card.Body className="p-3 p-lg-4">
                <h5 className="fw-bold mb-3">{t("schedule.tableWeek")}</h5>
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

          {/* Formulario para añadir langilea */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm h-100 schedule-card-form">
              <Card.Body className="p-3 p-lg-4">
                <h5 className="fw-bold mb-3 text-white">
                  {t("schedule.formTitle")}
                </h5>
                <Form onSubmit={handleAddWorker}>
                  {/* Izena */}
                  <Form.Group className="mb-3">
                    <Form.Label className="schedule-form-label text-white">
                      {t("schedule.nameLabel")}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={newWorker.name}
                      onChange={handleChange}
                      placeholder={t("schedule.namePlaceholder")}
                      required
                      className="schedule-form-input"
                    />
                  </Form.Group>

                  {/* Rola */}
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
                      <option value="Sukaldaria">{t("schedule.roleOptions.cook")}</option>
                      <option value="Zerbitzaria">{t("schedule.roleOptions.waiter")}</option>
                      <option value="Banatzailea">{t("schedule.roleOptions.delivery")}</option>
                      <option value="Garbitzailea">{t("schedule.roleOptions.cleaner")}</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Días de la semana (todos iguales) */}
                  {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                    <Form.Group key={day} className="mb-2">
                      <Form.Label className="schedule-form-label text-white">
                        {t(`schedule.days.${day}`)}
                      </Form.Label>
                      <Form.Select
                        name={day}
                        value={newWorker[day]}
                        onChange={handleChange}
                        required
                        className="schedule-form-select"
                      >
                        <option value="">{t("schedule.daySelectPlaceholder")}</option>
                        <option value="12:00–16:00">12:00–16:00</option>
                        <option value="19:00–23:00">19:00–23:00</option>
                        <option value="12:00–16:00 / 19:00–23:00">
                          12:00–16:00 / 19:00–23:00
                        </option>
                        <option value="Libre">Libre</option>
                      </Form.Select>
                    </Form.Group>
                  ))}

                  <Button
                    type="submit"
                    className="w-100 schedule-save-button fw-bold"
                  >
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
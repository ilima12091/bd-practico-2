import React, { useState } from 'react'
import Modal from '../modal/Modal'
import { Row, Col, Form, Button } from "react-bootstrap"
import { peopleTypes } from '../../data/people/filtersFields';
import usePerson from '../../hooks/usePerson';
import "./personEditModal.css";

export default function PersonEditModal({
  show,
  data,
  setModalConfig,
  setReload
}) {
  const { handleEditPerson } = usePerson();

  if (!show) return null;

  const [formData, setFormData] = useState({
    ci: data.ci,
    name: data.name,
    roles: data.roles
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const { ci, name } = formData;
    if (ci && name) {
      await handleEditPerson(formData);
      setModalConfig({
        show: false,
        data: null
      });
      setReload(true);
    }
  };

  const handleCheckedChange = (value) => {
    setFormData({
      ...formData,
      roles: formData.roles.includes(value) ? formData.roles.filter((role) => role !== value) : [...formData.roles, value]
    });
  };

  return (
    <Modal
      show={show}
      title="Edición"
      setModalConfig={setModalConfig}
    >
      <Form onSubmit={onSubmit}>
        <Row>
          <Col md="12" className="my-2">
            <Form.Label>CI</Form.Label>
            <Form.Control value={formData.ci} disabled />
          </Col>
          <Col md="12" className="my-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </Col>
          <Col md="12" className="my-2">
            <Form.Label>Roles</Form.Label>
            <div className="d-flex gap-2 checkboxes">
              {peopleTypes.filter((el) => !["", "estudiante,profesor"].includes(el.value)).map((el) => (
                <Form.Check
                  key={el.value}
                  id={el.value}
                  type="checkbox"
                  label={el.label}
                  checked={formData.roles.includes(el.value)}
                  onChange={(e) => handleCheckedChange(el.value)}
                />
              ))}
            </div>
          </Col>
          <Col md="12" className="d-flex justify-content-center mt-3">
            <Button type="submit">
              Guardar
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

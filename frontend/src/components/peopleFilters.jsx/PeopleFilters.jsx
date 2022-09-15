import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap"
import { peopleTypes } from "../../data/people/filtersFields";
import "./peopleFilters.css"

export default function PeopleFilters({ filters, setFilters, setReload }) {
  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => {
      return {
        ...prevFilters,
        [key]: value
      }
    })
  }

  return (
    <Row className="border-bottom">
      <Col md="4" sm="12" className="my-3">
        <Form.Select onChange={(e) => handleFilterChange("role", e.target.value)} value={filters.role}>
          {peopleTypes.map((el) => <option key={el.value} value={el.value}>{el.label}</option>)}
        </Form.Select>
      </Col>
      <Col md="4" sm="12" className="my-3">
        <Form.Control placeholder="Ingrese una cédula" type="number" value={filters.ci} onChange={(e) => handleFilterChange("ci", e.target.value)} />
      </Col>
      <Col md="4" className="d-flex align-items-center">
        <Button onClick={() => setReload(true)}>
          Buscar
        </Button>
      </Col>
    </Row>
  )
}

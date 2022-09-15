import React from 'react'
import { Row, Col } from "react-bootstrap";
import tableColumns from '../../data/people/tableColumns';
import usePeople from '../../hooks/usePeople';
import Table from '../table/Table';

export default function PeopleList({ filters, reload, setReload, setModalConfig }) {
  const { people } = usePeople(filters, reload, setReload);

  const handleEditPress = (row) => {
    setModalConfig({
      show: true,
      data: row,
    });
  }

  return (
    <Row>
      <Col md="12">
        <Table
          tableColumns={tableColumns(handleEditPress)}
          {...people}
        />
      </Col>
    </Row>
  )
}

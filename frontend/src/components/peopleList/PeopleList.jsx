import React from 'react'
import { Row, Col } from "react-bootstrap";
import tableColumns from '../../data/people/tableColumns';
import usePeople from '../../hooks/usePeople';
import Table from '../table/Table';
import usePerson from './../../hooks/usePerson';

export default function PeopleList({ filters, reload, setReload, setModalConfig }) {
  const { people } = usePeople(filters, reload, setReload);
  const { handleDeletePerson } = usePerson();

  const handleEditPress = (row) => {
    setModalConfig({
      show: true,
      data: row,
    });
  }

  const handleDeletePress = async (row) => {
    await handleDeletePerson(row.ci);
    setReload(true);
  }

  const columns = tableColumns(handleEditPress, handleDeletePress);

  return (
    <Row>
      <Col md="12">
        <Table
          tableColumns={columns}
          {...people}
        />
      </Col>
    </Row>
  )
}

import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Header from '../../components/header/Header';
import PeopleFilters from '../../components/peopleFilters.jsx/PeopleFilters';
import PeopleList from '../../components/peopleList/PeopleList';
import PersonEditModal from '../../components/personEditModal/PersonEditModal';

export default function Home() {
  const [filters, setFilters] = useState({})
  const [reload, setReload] = useState(true);
  const [modalConfig, setModalConfig] = useState({
    show: false,
    data: null,
  })

  return (
    <Container fluid>
      <Header />
      <PeopleFilters filters={filters} setFilters={setFilters} setReload={setReload} />
      <PeopleList filters={filters} reload={reload} setReload={setReload} setModalConfig={setModalConfig} />
      <PersonEditModal {...modalConfig} setModalConfig={setModalConfig} />
    </Container>
  )
}

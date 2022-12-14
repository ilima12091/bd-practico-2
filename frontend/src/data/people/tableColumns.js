import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const tableColumns = (handleEditPress, handleDeletePress) => [
  {
    label: "Nombre",
    key: "name",
  },
  {
    label: "CI",
    key: "ci",
  },
  {
    label: "Rol",
    key: "roles",
    customComponent: (row) => {
      const { roles } = row;
      return roles.join("-");
    },
  },
  {
    label: "Acciones",
    customComponent: (row) => {
      return (
        <ButtonGroup>
          <Button variant="primary" onClick={() => handleEditPress(row)}>
            Editar
          </Button>
          <Button variant="danger" onClick={() => handleDeletePress(row)}>
            Eliminar
          </Button>
        </ButtonGroup>
      );
    },
  },
];

export default tableColumns;

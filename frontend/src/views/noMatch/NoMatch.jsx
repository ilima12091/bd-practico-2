import React from 'react'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./noMatch.css";

export default function NoMatch() {
  return (
    <Container className="no-match">
      <h1>
        Página no encontrada, vuelva al <Link to="/">inicio</Link>
      </h1>
    </Container>
  )
}

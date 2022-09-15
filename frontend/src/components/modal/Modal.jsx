import React from 'react'
import { Modal as BTModal } from "react-bootstrap";

export default function Modal({ title, children, show, setModalConfig }) {
  const handleHidePress = () => {
    setModalConfig({
      show: false,
      data: null,
    });
  }

  return (
    <BTModal show={show} onHide={() => handleHidePress()}>
      <BTModal.Header closeButton>
        <BTModal.Title>{title}</BTModal.Title>
      </BTModal.Header>
      <BTModal.Body>
        {children}
      </BTModal.Body>
    </BTModal>
  )
}

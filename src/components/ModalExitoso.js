import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalExitoso = (props) => {
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton />
        <Modal.Body>Cambios guardados con exito</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalExitoso;

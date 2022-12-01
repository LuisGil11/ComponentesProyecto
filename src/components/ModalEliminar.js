import React from "react";
import { Button, ModalHeader } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalEliminar = () => {
  return (
    <Modal className="fade bg-danger" id="modal">
      <Modal.Dialog>
        <Modal.content>
          <ModalHeader>
            <h1>Eliminar</h1>
            <Button
              className="btn-close"
              data-bs-dismiss="modal"
              data-bs-target="#modal"
            ></Button>
          </ModalHeader>
          <Modal.Body>Esta seguro que desea eliminar</Modal.Body>
        </Modal.content>
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalEliminar;

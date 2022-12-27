import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearMotivoRetiro = () => {
  const [NombreMotivoRetiro, setNombreMotivoRetiro] = useState("");
  const [DescMotivoRetiro, setDescMotivoRetiro] = useState("");
  const handleNombreMotivoRetiro = (event) => {
    setNombreMotivoRetiro(event.target.value);
  };
  const handleDescMotivoRetiro = (event) => {
    setDescMotivoRetiro(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreMotivoRetiro, DescMotivoRetiro);
    setNombreMotivoRetiro("");
    setDescMotivoRetiro("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Agregar Motivo Retiro</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Nombre del Motivo Retiro</FormLabel>
            <div>
              <input
                value={NombreMotivoRetiro}
                type="text"
                className="form-control bg-transparent"
                placeholder="MotivoRetiro"
                onChange={handleNombreMotivoRetiro}
              />
            </div>
            <div className="mt-3">
              <FormLabel>Descripcion</FormLabel>
              <textarea
                value={DescMotivoRetiro}
                className="form-control"
                rows="4"
                onChange={handleDescMotivoRetiro}
              ></textarea>
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear MotivoRetiro
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearMotivoRetiro;

import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearMedicamento = () => {
  const [NombreMedicamento, setNombreMedicamento] = useState("");
  const [DescMedicamento, setDescMedicamento] = useState("");
  const handleNombreMedicamento = (event) => {
    setNombreMedicamento(event.target.value);
  };
  const handleDescMedicamento = (event) => {
    setDescMedicamento(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreMedicamento, DescMedicamento);
    setNombreMedicamento("");
    setDescMedicamento("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Agregar Medicamento</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Nombre del Medicamento</FormLabel>
            <div>
              <input
                value={NombreMedicamento}
                type="text"
                className="form-control bg-transparent"
                placeholder="Medicamento"
                onChange={handleNombreMedicamento}
              />
            </div>
            <div className="mt-3">
              <FormLabel>Descripcion</FormLabel>
              <textarea
                value={DescMedicamento}
                className="form-control"
                rows="4"
                onChange={handleDescMedicamento}
              ></textarea>
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear Medicamento
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearMedicamento;

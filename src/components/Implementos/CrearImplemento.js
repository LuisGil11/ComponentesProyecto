import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearImplemento = () => {
  const [NombreImplemento, setNombreImplemento] = useState("");
  const [DescImplemento, setDescImplemento] = useState("");

  const handleNombreImplemento = (event) => {
    setNombreImplemento(event.target.value);
  };
  const handleDescImplemento = (event) => {
    setDescImplemento(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreImplemento, DescImplemento);
    setNombreImplemento("");
    setDescImplemento("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Agregar Implemento</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Nombre del Implemento</FormLabel>
            <div>
              <input
                value={NombreImplemento}
                type="text"
                className="form-control bg-transparent"
                placeholder="Implemento"
                onChange={handleNombreImplemento}
              />
            </div>
            <div className="mt-3">
              <FormLabel>Descripcion</FormLabel>
              <textarea
                value={DescImplemento}
                className="form-control"
                rows="4"
                onChange={handleDescImplemento}
              ></textarea>
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear Implemento
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearImplemento;

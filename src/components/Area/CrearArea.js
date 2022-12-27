import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearArea = () => {
  const [NombreArea, setNombreArea] = useState("");
  const [DescArea, setDescArea] = useState("");
  const [TipoArea, setTipoArea] = useState("");
  const handleNombreArea = (event) => {
    setNombreArea(event.target.value);
  };
  const handleDescArea = (event) => {
    setDescArea(event.target.value);
  };
  const handleTipoArea = (event) => {
    setTipoArea(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreArea, DescArea, TipoArea);
    setNombreArea("");
    setDescArea("");
    setTipoArea("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Agregar Area</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Nombre del Area</FormLabel>
            <div>
              <input
                value={NombreArea}
                type="text"
                className="form-control bg-transparent"
                placeholder="Area"
                onChange={handleNombreArea}
              />
            </div>
            <div className="mt-2">
              <FormLabel>Descripcion</FormLabel>
              <textarea
                value={DescArea}
                className="form-control"
                rows="4"
                onChange={handleDescArea}
              ></textarea>
            </div>
            <FormLabel className="mt-2">Tipo de Area</FormLabel>
            <div>
              <input
                value={TipoArea}
                type="text"
                className="form-control bg-transparent"
                placeholder="Tipo de area"
                onChange={handleTipoArea}
              />
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear Area
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearArea;

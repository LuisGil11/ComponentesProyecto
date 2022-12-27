import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearPelaje = () => {
  const [NombrePelaje, setNombrePelaje] = useState("");
  const [AbrevPelaje, setAbrevPelaje] = useState("");
  const handleNombrePelaje = (event) => {
    setNombrePelaje(event.target.value);
  };
  const handleAbrevPelaje = (event) => {
    setAbrevPelaje(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombrePelaje, AbrevPelaje);
    setNombrePelaje("");
    setAbrevPelaje("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Agregar Pelaje</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Nombre del Pelaje</FormLabel>
            <div>
              <input
                value={NombrePelaje}
                type="text"
                className="form-control bg-transparent"
                placeholder="Pelaje"
                onChange={handleNombrePelaje}
              />
            </div>
            <div className="mt-3">
              <FormLabel>Abreviatura del Pelaje</FormLabel>
              <div>
                <input
                  type="text"
                  className="form-control bg-transparent"
                  value={AbrevPelaje}
                  maxLength={3}
                  onChange={handleAbrevPelaje}
                ></input>
              </div>
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Agregar Pelaje
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearPelaje;

import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearRestaurante = () => {
  const [NombreRestaurante, setNombreRestaurante] = useState("");
  const [DescRestaurante, setDescRestaurante] = useState("");
  const [CapacidadRestaurante, setCapacidadRestaurante] = useState("");
  const handleNombreRestaurante = (event) => {
    setNombreRestaurante(event.target.value);
  };
  const handleDescRestaurante = (event) => {
    setDescRestaurante(event.target.value);
  };
  const handleCapacidadRestaurante = (event) => {
    setCapacidadRestaurante(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreRestaurante, DescRestaurante, CapacidadRestaurante);
    setNombreRestaurante("");
    setDescRestaurante("");
    setCapacidadRestaurante("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Agregar Restaurante</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Nombre del Restaurante</FormLabel>
            <div>
              <input
                value={NombreRestaurante}
                type="text"
                className="form-control bg-transparent"
                placeholder="Restaurante"
                onChange={handleNombreRestaurante}
              />
            </div>
            <div className="mt-3">
              <FormLabel>Descripcion</FormLabel>
              <textarea
                value={DescRestaurante}
                className="form-control"
                rows="4"
                onChange={handleDescRestaurante}
              ></textarea>
            </div>
            <FormLabel>Capacidad del Restaurante</FormLabel>
            <div>
              <input
                value={CapacidadRestaurante}
                type="number"
                className="form-control bg-transparent"
                placeholder="Capacidad de Restaurante"
                onChange={handleCapacidadRestaurante}
              />
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear Restaurante
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearRestaurante;

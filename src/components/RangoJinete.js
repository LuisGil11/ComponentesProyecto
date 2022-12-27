import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const RangoJinete = () => {
  const [pesoMax, setPesoMax] = useState("");
  const [pesoMin, setPesoMin] = useState("");
  const [NombreRango, setNombreRango] = useState("");
  const [DescRango, setDescRango] = useState("");

  const handlePesoMin = (event) => {
    setPesoMin(event.target.value);
  };
  const handlePesoMax = (event) => {
    setPesoMax(event.target.value);
  };
  const handleNombreRango = (event) => {
    setNombreRango(event.target.value);
  };
  const handleDescRango = (event) => {
    setDescRango(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreRango, DescRango, pesoMax, pesoMin);
    setNombreRango("");
    setDescRango("");
    setPesoMin("");
    setPesoMax("");
  };

  return (
    <div className="mt-3">
      <h2 className="mx-5">Crear Rango de Jinete</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Nombre del rango</FormLabel>
            <div>
              <input
                value={NombreRango}
                type="text"
                className="form-control bg-transparent"
                placeholder="rango"
                onChange={handleNombreRango}
              />
            </div>
            <div className="mt-3">
              <FormLabel>Descripcion</FormLabel>
              <textarea
                value={DescRango}
                className="form-control"
                rows="4"
                onChange={handleDescRango}
              ></textarea>
            </div>
            <div className="mt-3">
              <FormLabel>Peso minimo</FormLabel>
              <input
                value={pesoMin}
                type="number"
                className="form-control"
                placeholder="0 Kg"
                onChange={handlePesoMin}
              />
            </div>
            <div className="mt-3">
              <FormLabel>Peso maximo</FormLabel>
              <input
                value={pesoMax}
                type="number"
                className="form-control"
                placeholder="0 Kg"
                onChange={handlePesoMax}
              />
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear Rango
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RangoJinete;

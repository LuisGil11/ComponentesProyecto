import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearLugar = () => {
  const [NombreEstado, setNombreEstado] = useState("");
  const [NombreMunicipio, setNombreMunicipio] = useState("");
  const [NombreParroquia, setNombreParroquia] = useState("");
  const handleNombreEstado = (event) => {
    setNombreEstado(event.target.value);
  };
  const handleNombreMunicipio = (event) => {
    setNombreMunicipio(event.target.value);
  };
  const handleNombreParroquia = (event) => {
    setNombreParroquia(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();

    const Estado = [
      {
        tipoLugar: "Estado",
        nombre: NombreEstado,
      },
    ];
    const Municipio = [
      {
        tipoLugar: "Municipio",
        nombre: NombreMunicipio,
      },
    ];
    const Parroquia = [
      {
        tipoLugar: "Parroquia",
        nombre: NombreParroquia,
      },
    ];
    console.warn(
      Estado.tipoLugar,
      Estado.nombre,
      Municipio.tipoLugar,
      Municipio.nombre,
      Parroquia.tipoLugar,
      Parroquia.nombre
    );
    setNombreEstado("");
    setNombreMunicipio("");
    setNombreParroquia("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Direccion</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Estado</FormLabel>
            <div>
              <input
                value={NombreEstado}
                type="text"
                className="form-control bg-transparent"
                placeholder="Estado"
                onChange={handleNombreEstado}
              />
            </div>
            <FormLabel className="fw-bold">Municipio</FormLabel>
            <div>
              <input
                value={NombreMunicipio}
                type="text"
                className="form-control bg-transparent"
                placeholder="Municipio"
                onChange={handleNombreMunicipio}
              />
            </div>
            <FormLabel className="fw-bold">Parroquia</FormLabel>
            <div>
              <input
                value={NombreParroquia}
                type="text"
                className="form-control bg-transparent"
                placeholder="Parroquia"
                onChange={handleNombreParroquia}
              />
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear Lugar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearLugar;

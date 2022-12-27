import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearCategoriaCarrera = () => {
  const [NombreCategoriaCarrera, setNombreCategoriaCarrera] = useState("");
  const handleNombreCategoriaCarrera = (event) => {
    setNombreCategoriaCarrera(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreCategoriaCarrera);
    setNombreCategoriaCarrera("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Agregar Cuerpo de Diferencia</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">
              Nombre de la categoria
            </FormLabel>
            <div>
              <input
                value={NombreCategoriaCarrera}
                type="text"
                className="form-control bg-transparent"
                placeholder="Categoria de la Carrera"
                onChange={handleNombreCategoriaCarrera}
              />
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear Categoria
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearCategoriaCarrera;

import React, { useState } from "react";
import { Button, Card, Form, FormLabel } from "react-bootstrap";

const CrearCuerpoDiferencia = () => {
  const [NombreCuerpoDiferencia, setNombreCuerpoDiferencia] = useState("");
  const handleNombreCuerpoDiferencia = (event) => {
    setNombreCuerpoDiferencia(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreCuerpoDiferencia);
    setNombreCuerpoDiferencia("");
  };
  return (
    <div className="mt-3">
      <h2 className="mx-5">Agregar Cuerpo de Diferencia</h2>
      <Card className="mx-5">
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">
              Nombre del Cuerpo de Diferencia
            </FormLabel>
            <div>
              <input
                value={NombreCuerpoDiferencia}
                type="text"
                className="form-control bg-transparent"
                placeholder="Cuerpo de Diferencia"
                onChange={handleNombreCuerpoDiferencia}
              />
            </div>
          </Form>
          <Button
            className="mt-3 float-end"
            size="lg"
            type="submit"
            onClick={handleData}
          >
            Crear Cuerpo de Diferencia
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrearCuerpoDiferencia;

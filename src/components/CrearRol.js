import React, { useState } from "react";
import { Container, Card, Form, FormLabel, Button } from "react-bootstrap";
import OpcionRol from "./OpcionRol";

const CrearRol = () => {
  const VistasCrear = ["Propietarios", "Studs", "Eventos", "Carreras"];
  const VistasLeer = [
    "Propietarios",
    "Studs",
    "Eventos",
    "Carreras",
    "Estadisticas",
  ];
  const VistasActualizar = [
    "Propie",
    "Studs",
    "Todito",
    "Alguna cosita que otra",
  ];
  const VistasEliminar = [
    "Propie",
    "Studs",
    "Todito",
    "Alguna cosita que otra",
  ];

  const [info, setInfo] = useState(VistasCrear);
  const [opcion, setOpcion] = useState("Crear");

  const MuestraInfo = () => {
    if (opcion === "Crear") setInfo(VistasCrear);
    else if (opcion === "Leer") setInfo(VistasLeer);
    else if (opcion === "Actualizar") setInfo(VistasActualizar);
    else if (opcion === "Eliminar") setInfo(VistasEliminar);
    {
      console.log("hola");
    }
  };

  const CambiaOpcionCrear = (event) => {
    setOpcion("Crear");
    MuestraInfo();
  };
  const CambiaOpcionLeer = (event) => {
    setOpcion("Leer");
    MuestraInfo();
  };
  const CambiaOpcionActualizar = (event) => {
    setOpcion("Actualizar");
    MuestraInfo();
  };
  const CambiaOpcionEliminar = (event) => {
    setOpcion("Eliminar");
    MuestraInfo();
  };

  return (
    <Container>
      <Card className="mx-5">
        <Card.Header>
          <h2>Crear Roles</h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <FormLabel className="fw-bold">Nombre del rol</FormLabel>
            <div>
              <input
                type="text"
                className="form-control bg-transparent"
                placeholder="Usuario"
              />
            </div>
            <FormLabel className="mt-5">Privilegios</FormLabel>
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <Button onClick={CambiaOpcionCrear}>Crear</Button>
                  </li>
                  <li className="nav-item">
                    <Button onClick={CambiaOpcionLeer}>Leer</Button>
                  </li>
                  <li className="nav-item">
                    <Button onClick={CambiaOpcionActualizar}>Actualizar</Button>
                  </li>
                  <li className="nav-item">
                    <Button onClick={CambiaOpcionEliminar}>Eliminar</Button>
                  </li>
                </ul>
              </div>
              <Card.Body>
                {info.map((t) => (
                  <OpcionRol info={t} />
                ))}
              </Card.Body>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CrearRol;

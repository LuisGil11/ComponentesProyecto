import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardMedicamento } from "./CardMedicamento";

export const PagMedicamento = (props) => {
  return (
    <Container>
      <Row className="row-cols-4">
        {props.medicamentos.map((med) => (
          <CardMedicamento
            nombre={med.nombre}
            descripcion={med.descripcion}
            key={med.key}
          />
        ))}
      </Row>
    </Container>
  );
};

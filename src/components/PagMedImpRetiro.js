import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardMedicamento } from "./CardMedImpRetiro";

export const PagMedImpRetiro = (props) => {
  return (
    <Container>
      <h2 className="text-center mt-4">{props.titulo}</h2>
      <Row className="row-cols-4">
        {props.items.map((item) => (
          <CardMedicamento
            nombre={item.nombre}
            descripcion={item.descripcion}
            key={item.key}
          />
        ))}
      </Row>
    </Container>
  );
};

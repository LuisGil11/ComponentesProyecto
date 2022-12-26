import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardEjemplar from "./CardEjemplar";
import caballo1 from "../assets/caballo1.jpg";
import caballo2 from "../assets/caballo2.jpg";
import caballo3 from "../assets/caballo3.jpg";

const VerEjemplares = (props) => {
  
    const Ejemplares = [
        {
          imagen: caballo1,
          nombre: "El burlon",
          numero: 5,
          pelaje: "SuavePa",
          sexo: "M",
          padre: "Luchito",
          madre: "teresita",
          stud: "los toros del hood ",
          fecha_nac: "20/03/04",
        },
        {
          imagen: caballo2,
          nombre: "EL caballo WHITTEE",
          numero: 7,
          pelaje: "RUlos Chidos",
          sexo: "M",
        },
        {
          imagen: caballo3,
          nombre: "TIro al blanco",
          numero: 10,
          pelaje: "Blanquito",
          sexo: "M",
        },
      ];

    return (
    <div>
      <Container>
        <Row className="row-cols-2">
         {}
        </Row>
      </Container>
    </div>
  );
};

export default VerEjemplares;

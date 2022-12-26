import React from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import caballo1 from "../assets/caballo1.jpg";
import caballo2 from "../assets/caballo2.jpg";
import caballo3 from "../assets/caballo3.jpg";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";

const CardN = (props) => {
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
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
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
        <Row className="justify-content-center">
          <Col className="mt-5">
                <Card className="mx-5">
                <Card.Header>
                    <h2>{props.nombre}</h2>
                </Card.Header>
              <Card.Body className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <Image
                      style={{ width: "180px", borderRadius: "10px" }}
                      src={props.imagen}
                      alt="/"
                      fluid
                      />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <Card.Text className="fw-bold">
                      <div className="mt-4">Stud: <span className="text-muted">{props.stud}</span></div>
                      <div className="mt-2">
                        Entrenador: <span className="text-muted">{props.entrenador}</span>
                      </div>

                      <div
                        className="d-flex justify-content-center rounded-3 p-2 mt-3"
                        style={{ backgroundColor: "#efefef" }}
                        >
                        <div>
                          <p className="small mb-1 fw-bold">
                            Mejor posicion
                          </p>
                          <p className="mb-0 text-center text-muted">
                            {props.mejorPos} (
                            {props.cantidad2do})
                          </p>
                        </div>
                        <div className="px-3">
                          <p className="small fw-bold mb-1">Edad</p>
                          <p className="mb-0 text-center text-muted">8</p>
                        </div>
                        <div>
                          <p className="small fw-bold mb-1">Ganancia</p>
                          <p className="mb-0 text-center text-muted">
                            {props.ganancia}
                          </p>
                        </div>
                      </div>
                    </Card.Text>
                    <div className="d-flex pt-1 justify-content-end mt-4">
                      <Button className="btn btn-light btn-outline-primary btn-sm mx-1">
                        Ver mas
                      </Button>
                      <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                        <img src={edit} alt="/" width={20} />
                      </Button>

                      <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
                        <img src={trash} alt="/" width={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardN;

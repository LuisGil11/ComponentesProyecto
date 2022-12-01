import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";
import Card from "react-bootstrap/Card";
import ModalEliminar from "./ModalEliminar";

const ConsultaEjemplar = (props) => {
  return (
    <div>
      <Container>
        <Card className="mb-3 mt-3 bg-info bg-opacity-25">
          <Card.Header>
            <h1>
              {props.ejemplar[0].nombre} ({props.ejemplar[0].numero})
            </h1>
          </Card.Header>
          <Card.Body>
            <Row className="align-items-center">
              <Col className="col-3">
                <img
                  className="card-img-center w-50 h-50 mx-auto"
                  src={props.ejemplar[0].imagen}
                  alt="/"
                />
              </Col>
              <Col>
                <FormGroup className="row">
                  <FormLabel for="staticEmail" className="col-2 col-form-label text-primary">
                    Nombre:
                  </FormLabel>
                  <div class="col-10">
                    <input
                      type="text"
                      readonly
                      class="form-control-plaintext"
                      id="staticEmail"
                      value={props.ejemplar[0].nombre}
                    />
                  </div>
                </FormGroup>
                {/* <Row>
                    <Col className="col-5">Padre: {props.ejemplar[0].padre}</Col>
                    <Col>Madre: {props.ejemplar[0].madre}</Col>
                  </Row>
                  <Row>
                    <Col className="col-5">Stud: {props.ejemplar[0].stud}</Col>
                    <Col>Pelaje: {props.ejemplar[0].pelaje}</Col>
                  </Row>

                  <Row>
                    <Col className="col-5">Sexo: {props.ejemplar[0].sexo}</Col>
                    <Col>Fecha Nacimiento: {props.ejemplar[0].fecha_nac}</Col>
                  </Row>

                  <Row>
                    <Col className="d-flex justify-content-end">
                      <div className="btn-toolbar">
                        <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                          <img src={edit} alt="/" width={20} />
                        </Button>

                        <Button
                          className="btn btn-light btn-outline-danger btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modal"
                        >
                          <img src={trash} alt="/" width={20} />
                        </Button>
                        <ModalEliminar id="modal" />
                      </div>
                    </Col>
                  </Row> */}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ConsultaEjemplar;

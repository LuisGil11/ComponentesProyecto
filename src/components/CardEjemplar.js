import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";
import Card from "react-bootstrap/Card";
import ModalEliminar from "./ModalEliminar";

const CardEjemplar = (props) => {
  return (
    <div>
      <Container>
        {props.ejemplares.map((ejemplar) => (
          <Card className="mb-3 mt-3">
            <Card.Header>
              <h1>
                {ejemplar.nombre} ({ejemplar.numero})
              </h1>
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col className="col-3">
                  <img
                    className="card-img-center w-50 h-50 mx-auto"
                    src={ejemplar.imagen}
                    alt="/"
                  />
                </Col>
                <Col>
                  <Row>
                    <Col className="col-5">Padre: {ejemplar.padre}</Col>
                    <Col>Madre: {ejemplar.madre}</Col>
                  </Row>
                  <Row>
                    <Col className="col-5">Stud: {ejemplar.stud}</Col>
                    <Col>Pelaje: {ejemplar.pelaje}</Col>
                  </Row>

                  <Row>
                    <Col className="col-5">Sexo: {ejemplar.sexo}</Col>
                    <Col>Fecha Nacimiento: {ejemplar.fecha_nac}</Col>
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
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
        <div className="d-grid">
            <Button type="submit" className="btn btn-primary">
              Agregar Ejemplar
            </Button>
          </div>
      </Container>
    </div>
  );
};

export default CardEjemplar;

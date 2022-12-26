import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, FormLabel, Image } from "react-bootstrap";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";
import Card from "react-bootstrap/Card";
import ModalEliminar from "./ModalEliminar";

const CardEjemplar = (props) => {
  return (
    <div>
      <Container>
        {props.ejemplares.map((ejemplar) => (
          <Card className="mb-3 mt-3 w-100">
            <Card.Header>
              <h2>{ejemplar.nombre}</h2>
            </Card.Header>
            <Card.Body>
                {/* 
                <FormLabel className="fw-bold px-2 py-2">Entrenador: </FormLabel>
                <text>{ejemplar.padre}</text> */}
              <Row className="align-items-center">
                <Col className="col-3">
                <Image
                  className="thumbnail mx-2"
                  src={ejemplar.imagen}
                  alt="/"
                  width={125}
                  height={125}
                  align="start"
                  rounded={20}
                />
                </Col>
                <Col>
                  <Row>
                    <Col className="col-5">
                      <FormLabel className="fw-bold my-auto">Padre: </FormLabel>
                      {ejemplar.padre}
                    </Col>
                    <Col><FormLabel className="fw-bold my-auto">Madre: </FormLabel>
                     {ejemplar.madre}</Col>
                  </Row>
                  <Row>
                    <Col className="col-5"><FormLabel className="fw-bold my-auto">Stud: </FormLabel> {ejemplar.stud}</Col>
                    <Col><FormLabel className="fw-bold my-auto">pelaje: </FormLabel> {ejemplar.pelaje}</Col>
                  </Row>

                  <Row>
                    <Col className="col-5"><FormLabel className="fw-bold my-auto">Sexo: </FormLabel> {ejemplar.sexo}</Col>
                    <Col><FormLabel className="fw-bold my-auto">Fecha de nacimiento: </FormLabel> {ejemplar.fecha_nac}</Col>
                  </Row>

                  <Row>
                    
                    <Col className="d-flex justify-content-end mt-2">
                      <div className="btn-toolbar">
                      <Button className="btn btn-light btn-outline-primary btn-sm mx-1">
                          Ver mas
                        </Button>
                        <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                          <img src={edit} alt="/" width={20} />
                        </Button>

                        <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
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

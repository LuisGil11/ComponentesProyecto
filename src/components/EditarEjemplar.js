import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Button,
  FormGroup,
  FormLabel,
  FormSelect,
  FormCheck,
  Form,
} from "react-bootstrap";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";
import Card from "react-bootstrap/Card";
import ModalEliminar from "./ModalEliminar";

const ConsultaEjemplar = (props) => {
  return (
    <div>
      <Container>
        <Card className="mb-3 mt-3 bg-info bg-opacity-25 mx-5">
          <Card.Header className="text-center d-flex justify-content-center align-content-center">
            <h3 className="fw-bold">
              {props.ejemplar[0].nombre}
            </h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Row className="mt-3">
                  <FormGroup>
                    <FormLabel>Nro. Tatuaje Labial</FormLabel>
                    <FormSelect className="bg-transparent" readony>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row className="mt-3">
                  <FormGroup>
                    <FormLabel>Pelaje</FormLabel>
                    <FormSelect className="bg-transparent" readony>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row className="mt-3">
                  <FormGroup>
                    <FormLabel>Stud</FormLabel>
                    <FormSelect className="bg-transparent" readony>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row className="mt-3">
                  <FormGroup>
                    <FormLabel>Padre del ejemplar</FormLabel>
                    <FormSelect className="bg-transparent" readony>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row>
                  <Row className="mt-3">
                    <FormGroup>
                      <FormLabel>Puesto Caballeriza</FormLabel>
                      <FormSelect className="bg-transparent" readony>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </FormSelect>
                    </FormGroup>
                  </Row>
                </Row>
              </Col>
              <Col className="mt-3">
                <Row>
                  <FormGroup>
                    <FormLabel>Numero</FormLabel>
                    <FormSelect className="bg-transparent" readony>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row className="mt-3">
                  <FormLabel>Fecha de nacimiento</FormLabel>
                  <div>
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      value={props.ejemplar[0].fecha_nac}
                    />
                  </div>
                </Row>
                <Row>
                  <h6 className="fw-bold mt-4" itemType="radio">
                    Genero:
                  </h6>
                  <Form>
                    <FormCheck className="form-check-inline">
                      <input
                        class="form-check-input mx-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Masculino
                      </label>
                    </FormCheck>
                    <FormCheck className="form-check-inline">
                      <input
                        class="form-check-input mx-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Femenino
                      </label>
                    </FormCheck>
                  </Form>
                </Row>
                <Row className="mt-3">
                  <FormGroup>
                    <FormLabel>Madre del ejemplar</FormLabel>
                    <FormSelect className="bg-transparent" readony>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
                <Row className="mt-3">
                  <FormGroup>
                    <FormLabel>Puesto dentro de la Caballeriza</FormLabel>
                    <FormSelect className="bg-transparent" readony>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Row>
              </Col>
              <Col className="justify-content-center">
                <img
                  className=" w-50 h-50"
                  src={props.ejemplar[0].imagen}
                  alt="/"
                />
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button className="btn btn-success btn-outline-success btn-sm mx-1 text-light">
              Confirmar
            </Button>

            <Button
              className="btn btn-danger text-light btn-outline-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              Cancelar
            </Button>
            <ModalEliminar id="modal" />
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default ConsultaEjemplar;

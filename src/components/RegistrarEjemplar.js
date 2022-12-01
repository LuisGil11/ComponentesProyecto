import React from "react";
import {
  Container,
  Card,
  Form,
  FormLabel,
  Row,
  Col,
  Button,
  FormCheck,
  FormGroup,
  FormSelect,
  FormControl,
} from "react-bootstrap";

const RegistrarEjemplar = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card>
          <Card.Body className="px-4">
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
              Registro de Ejemplar
            </h3>

            <Row className="align-items-center">
              <Col md="6">
                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                  <FormLabel>Nombre del ejemplar</FormLabel>
                </div>
              </Col>

              <Col md="6">
                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                  <FormLabel>Numero del ejemplar</FormLabel>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col md="6">
                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                  <FormLabel>Numero de tatuaje labial</FormLabel>
                </div>
              </Col>

              <Col>
                <div className=" mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                  <FormLabel>Precio del Ejemplar</FormLabel>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center my-2">
              <Col md="6">
                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                  <FormLabel>Fecha de nacimiento</FormLabel>
                </div>
              </Col>
              <Col md="6">
                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                  <FormLabel>Peso del Ejemplar</FormLabel>
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col className="col-6">
                <FormGroup>
                  <FormLabel>Padre del Ejemplar</FormLabel>
                  <FormSelect>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </FormSelect>
                </FormGroup>
              </Col>
              <Col className="col-6">
                <FormGroup>
                  <FormLabel>Madre del Ejemplar</FormLabel>
                  <FormSelect>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </FormSelect>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <FormLabel>Imagen</FormLabel>
                <input className="form-control" type="file" id="formFile" />
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>Propietario</FormLabel>
                  <FormSelect>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>Luchito Suarez</option>
                    <option>Landon Donovan</option>
                  </FormSelect>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-2 align-content-center align-items-center">
              <Col className="col-6">
                <FormGroup>
                  <FormLabel>Hara de procedencia</FormLabel>
                  <FormSelect>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </FormSelect>
                </FormGroup>
              </Col>
              <Col>
                <h6 className="fw-bold" itemType="radio">
                  Genero:
                </h6>
                <FormCheck>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Masculino
                  </label>
                </FormCheck>
                <FormCheck>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Femenino
                  </label>
                </FormCheck>
              </Col>
            </Row>
            <Button className="mb-4 mt-4" size="lg">
              Registrar
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default RegistrarEjemplar;

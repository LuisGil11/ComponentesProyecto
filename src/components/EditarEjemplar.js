import React, { useState } from "react";
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
  const [numeroEjemplar, setNumeroEjemplar] = useState(props.numero);
  const [tatlabialEjemplar, setTatlabialEjemplar] = useState(props.tatLabial);
  const [precioEjemplar, setPrecioEjemplar] = useState(props.precio);
  const [fecha_nacEjemplar, setFecha_nacEjemplar] = useState(props.fecha_nac);
  const [pesoEjemplar, setPesoEjemplar] = useState(props.peso);
  const [padreEjemplar, setPadreEjemplar] = useState(props.padre);
  const [madreEjemplar, setMadreEjemplar] = useState([props.madre]);
  const [imagenEjemplar, setImagenEjemplar] = useState(props.imagen);
  const [propietarioEjemplar, setPropietarioEjemplar] = useState(
    props.propietario
  );
  const [haraEjemplar, setHaraEjemplar] = useState(props.hara);
  const [pelajeEjemplar, setPelajeEjemplar] = useState(props.pelaje);
  const [generoEjemplar, setGeneroEjemplar] = useState(props.genero);

  const handleData = (event) => {
    console.log(generoEjemplar);
    event.preventDefault();
    console.warn(
      "all data",
      numeroEjemplar,
      tatlabialEjemplar,
      precioEjemplar,
      fecha_nacEjemplar,
      pesoEjemplar,
      padreEjemplar,
      madreEjemplar,
      imagenEjemplar,
      propietarioEjemplar,
      haraEjemplar,
      generoEjemplar,
      pelajeEjemplar
    );
    setNumeroEjemplar(numeroEjemplar);
    setTatlabialEjemplar(tatlabialEjemplar);
    setPrecioEjemplar(precioEjemplar);
    setFecha_nacEjemplar(fecha_nacEjemplar);
    setPesoEjemplar(pesoEjemplar);
    setPadreEjemplar(padreEjemplar);
    setMadreEjemplar(madreEjemplar);
    setImagenEjemplar(imagenEjemplar);
    setPropietarioEjemplar(propietarioEjemplar);
    setHaraEjemplar(haraEjemplar);
    setPelajeEjemplar(pelajeEjemplar);
    setGeneroEjemplar(generoEjemplar);
  };
  const handleNumero = (event) => {
    setNumeroEjemplar(event.target.value);
  };
  const handleTatlabial = (event) => {
    setTatlabialEjemplar(event.target.value);
  };
  const handlePrecio = (event) => {
    setPrecioEjemplar(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setFecha_nacEjemplar(event.target.value);
  };
  const handlePeso = (event) => {
    setPesoEjemplar(event.target.value);
  };
  const handlePadre = (event) => {
    setPadreEjemplar(event.target.value);
  };
  const handleMadre = (event) => {
    setMadreEjemplar(event.target.value);
  };
  const handleImagen = (event) => {
    setImagenEjemplar(event.target.value);
  };
  const handlePropietario = (event) => {
    setPropietarioEjemplar(event.target.value);
  };
  const handleHara = (event) => {
    setHaraEjemplar(event.target.value);
  };
  const handlePelaje = (event) => {
    setPelajeEjemplar(event.target.value);
  };
  const handleGenero = (event) => {
    setGeneroEjemplar(event.target.value);
  };
  return (
    <div>
      <Container>
        <Card className="mb-3 mt-3 bg-info bg-opacity-25 mx-5">
          <Card.Header className="text-center d-flex justify-content-center align-content-center">
            <h3 className="fw-bold">{props.ejemplar[0].nombre}</h3>
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
                  <Form></Form>
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

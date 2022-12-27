import React, { useState } from "react";
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
import ModalExitoso from "./ModalExitoso";

const RegistrarEjemplar = () => {
  const [nombreEjemplar, setNombreEjemplar] = useState("");
  const [numeroEjemplar, setNumeroEjemplar] = useState("");
  const [tatlabialEjemplar, setTatlabialEjemplar] = useState(0);
  const [precioEjemplar, setPrecioEjemplar] = useState(0);
  const [fecha_nacEjemplar, setFecha_nacEjemplar] = useState(0);
  const [pesoEjemplar, setPesoEjemplar] = useState("");
  const [padreEjemplar, setPadreEjemplar] = useState("");
  const [madreEjemplar, setMadreEjemplar] = useState("");
  const [imagenEjemplar, setImagenEjemplar] = useState("");
  const [propietarioEjemplar, setPropietarioEjemplar] = useState("");
  const [haraEjemplar, setHaraEjemplar] = useState("");
  const [pelajeEjemplar, setPelajeEjemplar] = useState("");
  const [generoEjemplar, setGeneroEjemplar] = useState("");

  const handleData = (event) => {
    console.log(generoEjemplar);
    event.preventDefault();
    console.warn(
      "all data",
      nombreEjemplar,
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
    setNombreEjemplar("");
    setNumeroEjemplar("");
    setTatlabialEjemplar("");
    setPrecioEjemplar("");
    setFecha_nacEjemplar("");
    setPesoEjemplar("");
    setPadreEjemplar("");
    setMadreEjemplar("");
    setImagenEjemplar("");
    setPropietarioEjemplar("");
    setHaraEjemplar("");
    setPelajeEjemplar("");
    setGeneroEjemplar("");
  };
  const handleNombre = (event) => {
    setNombreEjemplar(event.target.value);
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
  const handleModal = () => {
    <ModalExitoso show={true} />;
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5">
          <Card.Body className="px-4">
            <Form onSubmit={handleData}>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Ejemplar
              </h3>

              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={nombreEjemplar}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleNombre}
                    />
                    <FormLabel>Nombre del ejemplar</FormLabel>
                  </div>
                </Col>

                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={numeroEjemplar}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleNumero}
                    />
                    <FormLabel>Numero del ejemplar</FormLabel>
                  </div>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={tatlabialEjemplar}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleTatlabial}
                    />
                    <FormLabel>Numero de tatuaje labial</FormLabel>
                  </div>
                </Col>

                <Col>
                  <div className=" mb-3 form-floating">
                    <input
                      value={precioEjemplar}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePrecio}
                    />
                    <FormLabel>Precio del Ejemplar</FormLabel>
                  </div>
                </Col>
              </Row>

              <Row className="align-items-center my-2">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={fecha_nacEjemplar}
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleFecha_nac}
                    />
                    <FormLabel>Fecha de nacimiento</FormLabel>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={pesoEjemplar}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePeso}
                    />
                    <FormLabel>Peso del Ejemplar</FormLabel>
                  </div>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col className="col-6">
                  <FormGroup>
                    <FormLabel>Padre del Ejemplar</FormLabel>
                    <FormSelect onChange={handlePadre} value={padreEjemplar}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Col>
                <Col className="col-6">
                  <FormGroup>
                    <FormLabel>Madre del Ejemplar</FormLabel>
                    <FormSelect onChange={handleMadre} value={madreEjemplar}>
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
                  <input
                    value={imagenEjemplar}
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={handleImagen}
                  />
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Propietario</FormLabel>
                    <FormSelect onChange={handlePropietario} value={propietarioEjemplar}>
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
                    <FormSelect onChange={handleHara} value={haraEjemplar}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Pelaje</FormLabel>
                    <FormSelect onChange={handlePelaje} value={pelajeEjemplar}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </FormSelect>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <h6 className="fw-bold mt-2" itemType="radio">
                    Genero:
                  </h6>
                  <FormCheck>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="masculino"
                      value={"M"}
                      onChange={handleGenero}
                    />
                    <label>Masculino</label>
                    <span> </span>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="femenino"
                      value={"F"}
                      onChange={handleGenero}
                    />
                    <label>Femenino</label>
                  </FormCheck>
                </Col>
              </Row>
              <Button
                className="mb-4 mt-4 align"
                size="lg"
                type="submit"
                onClick={handleData}
              >
                Registrar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default RegistrarEjemplar;

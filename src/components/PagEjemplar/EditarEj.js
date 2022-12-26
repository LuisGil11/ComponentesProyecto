import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  Button,
  Form,
  FormCheck,
  InputGroup,
  FormLabel,
  FormGroup,
  FormSelect,
} from "react-bootstrap";
import caballo1 from "../../assets/caballo1.jpg";
import caballo2 from "../../assets/caballo2.jpg";
import caballo3 from "../../assets/caballo3.jpg";
import Tabla from "../Tabla";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";

const EditarEj = (props) => {
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
  const [generoEjemplar, setGeneroEjemplar] = useState("");
  const [studEjemplar, setStudEjemplar] = useState("");
  const [pelajeEjemplar, setPelajeEjemplar] = useState("");

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
      studEjemplar,
      pelajeEjemplar
    );
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
  const handleStud = (event) => {
    setStudEjemplar(event.target.value);
  };

  return (
    <div>
      <Container>
        <Card className="mx-5 mb-3">
          <Card.Header>
            <h2>{props.nombre}</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleData}>
              <Row className="align-items-center">
                <Col className="col-3">
                  <Image src={props.imagen} width={200} rounded={20} alt="/" />
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">Imagen</FormLabel>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={handleImagen}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">Stud</FormLabel>
                            <FormSelect onChange={handleStud}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>Luchito Suarez</option>
                              <option>Landon Donovan</option>
                            </FormSelect>
                          </FormGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">
                              Fecha de nacimiento
                            </FormLabel>
                            <input
                              type="date"
                              className="form-control"
                              onChange={handleFecha_nac}
                            />
                          </FormGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">Numero</FormLabel>
                          <input
                            type="number"
                            className="form-control"
                            onChange={handleNumero}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">
                              Hara de procedencia
                            </FormLabel>
                            <FormSelect onChange={handleHara}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>Luchito Suarez</option>
                              <option>Landon Donovan</option>
                            </FormSelect>
                          </FormGroup>
                        </li>
                        <li className="display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">Pelaje</FormLabel>
                            <FormSelect onChange={handlePelaje}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>Luchito Suarez</option>
                              <option>Landon Donovan</option>
                            </FormSelect>
                          </FormGroup>
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">
                              Padre del Ejemplar
                            </FormLabel>
                            <FormSelect>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>Luchito Suarez</option>
                              <option>Landon Donovan</option>
                            </FormSelect>
                          </FormGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">
                              Madre del Ejemplar
                            </FormLabel>
                            <FormSelect>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>Luchito Suarez</option>
                              <option>Landon Donovan</option>
                            </FormSelect>
                          </FormGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">Precio</FormLabel>
                          <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <input type="number" className="form-control" />
                          </InputGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">Peso</FormLabel>
                          <InputGroup>
                            <InputGroup.Text>Kg</InputGroup.Text>
                            <input type="number" className="form-control" />
                          </InputGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">
                              Caballeriza (Puesto)
                            </FormLabel>
                            <FormSelect>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>Luchito Suarez</option>
                              <option>Landon Donovan</option>
                            </FormSelect>
                          </FormGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <h6 className="fw-bold mt-4" itemType="radio">
                            Genero:
                          </h6>
                          <FormCheck>
                            <input
                              className="form-check-input mx-2"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label className="form-check-label">
                              Masculino
                            </label>
                            <span> </span>
                            <input
                              className="form-check-input mx-2"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label className="form-check-label">Femenino</label>
                          </FormCheck>
                        </li>
                        <li>
                          <Col className="d-flex justify-content-end">
                            <div className="d-flexjustify-content-end mt-5">
                              <Button className="btn btn-success text-light btn-sm mx-1">
                                Confirmar
                              </Button>

                              <Button className="btn btn-danger text-light btn-sm mx-1">
                                Cancelar
                              </Button>
                            </div>
                          </Col>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default EditarEj;

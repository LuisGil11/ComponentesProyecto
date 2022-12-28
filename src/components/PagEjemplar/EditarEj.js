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
  const [nombreEjemplar, setNombreEjemplar] = useState(props.nombre);
  const [numeroEjemplar, setNumeroEjemplar] = useState(props.numero);
  const [tatlabialEjemplar, setTatlabialEjemplar] = useState(props.tatLabial);
  const [precioEjemplar, setPrecioEjemplar] = useState(props.precio);
  const [fecha_nacEjemplar, setFecha_nacEjemplar] = useState(props.fecha_nac);
  const [pesoEjemplar, setPesoEjemplar] = useState(props.peso);
  const [padreEjemplar, setPadreEjemplar] = useState(props.padre);
  const [madreEjemplar, setMadreEjemplar] = useState(props.madre);
  const [imagenEjemplar, setImagenEjemplar] = useState(props.imagen);
  const [propietarioEjemplar, setPropietarioEjemplar] = useState(
    props.propietario
  );
  const [haraEjemplar, setHaraEjemplar] = useState(props.hara);
  const [studEjemplar, setStudEjemplar] = useState(props.stud);
  const [pelajeEjemplar, setPelajeEjemplar] = useState(props.pelaje);
  const [puestoEjemplar, setPuestoEjemplar] = useState(props.puesto);

  // key={Ejemplares[0].nombre}
  // imagen={Ejemplares[0].imagen}
  // nombre={Ejemplares[0].nombre}
  // numero={Ejemplares[0].numero}
  // pelaje={Ejemplares[0].pelaje}
  // sexo={Ejemplares[0].sexo}
  // padre={Ejemplares[0].padre}
  // madre={Ejemplares[0].madre}
  // stud={Ejemplares[0].stud}
  // fecha_nac={Ejemplares[0].fecha_nac}
  // entrenador={Ejemplares[0].entrenador}
  // mejorPos={Ejemplares[0].mejorPos}
  // cantidad2do={Ejemplares[0].cantidad2do}
  // ganancia={Ejemplares[0].ganancia}
  // tatLabial={Ejemplares[0].labial}
  // precio={Ejemplares[0].precio}
  // peso={Ejemplares[0].peso}
  // propietario={Ejemplares[0].propietario}
  // hara={Ejemplares[0].hara}

  const handleData = (event) => {
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
      studEjemplar,
      pelajeEjemplar,
      puestoEjemplar
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
  const handlePuesto = (event) => {
    setPuestoEjemplar(event.target.value);
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
                            <FormSelect
                              onChange={handleStud}
                              value={studEjemplar}
                            >
                              <option>{props.stud}</option>
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
                              value={fecha_nacEjemplar}
                              type="date"
                              className="form-control"
                              onChange={handleFecha_nac}
                            />
                          </FormGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">Numero</FormLabel>
                          <input
                            value={numeroEjemplar}
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
                            <FormSelect
                              onChange={handleHara}
                              value={haraEjemplar}
                            >
                              <option>{haraEjemplar}</option>
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
                            <FormSelect
                              onChange={handlePelaje}
                              value={pelajeEjemplar}
                            >
                              <option>{pelajeEjemplar}</option>
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
                            <FormSelect
                              onChange={handlePadre}
                              value={padreEjemplar}
                            >
                              <option>{padreEjemplar}</option>
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
                            <FormSelect
                              onChange={handleMadre}
                              value={madreEjemplar}
                            >
                              <option>{madreEjemplar}</option>
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
                            <input
                              type="number"
                              className="form-control"
                              value={precioEjemplar}
                              onChange={handlePrecio}
                            />
                          </InputGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">Peso</FormLabel>
                          <InputGroup>
                            <InputGroup.Text>Kg</InputGroup.Text>
                            <input
                              type="number"
                              className="form-control"
                              value={pesoEjemplar}
                              onChange={handlePeso}
                            />
                          </InputGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">
                              Caballeriza (Puesto)
                            </FormLabel>
                            <FormSelect
                              value={puestoEjemplar}
                              onChange={handlePuesto}
                            >
                              <option>{puestoEjemplar}</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>Luchito Suarez</option>
                              <option>Landon Donovan</option>
                            </FormSelect>
                          </FormGroup>
                        </li>
                        <li>
                          <Col className="d-flex justify-content-end">
                            <div className="d-flexjustify-content-end mt-5">
                              <Button
                                className="btn btn-success text-light btn-sm mx-1"
                                onClick={handleData}
                              >
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

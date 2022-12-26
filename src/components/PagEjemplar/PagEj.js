import React from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import caballo1 from "../../assets/caballo1.jpg";
import caballo2 from "../../assets/caballo2.jpg";
import caballo3 from "../../assets/caballo3.jpg";
import Tabla from "../Tabla";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";

const PagEj = () => {
  const Ejemplares = [
    {
      imagen: caballo1,
      nombre: "El burlon",
      numero: 5,
      numero_tatuaje_labial: 27,
      peso: 156,
      precio: 256000,
      hara: "Potricos de Sevilla",
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

  let columnas1 = (
    <tr>
      <th>Nombre</th>
      <th>Caballeriza</th>
      <th>Puesto</th>
      <th>Fecha_Ingreso</th>
      <th>Stud</th>
    </tr>
  );

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="mx-5">
              <Card.Header>
                <h2>{Ejemplares[0].nombre}</h2>
              </Card.Header>
              <Card.Body>
                <Row className="align-items-center">
                  <Col className="col-3">
                    <Image
                      src={Ejemplares[0].imagen}
                      width={200}
                      rounded={20}
                      alt="/"
                    />
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <ul class="list-unstyled mb-1-9">
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Entrenador:
                            </span>{" "}
                            <span>{Ejemplares[0].entrenador}</span>
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Stud:
                            </span>{" "}
                            {Ejemplares[0].stud}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Fecha de nacimiento:
                            </span>{" "}
                            {Ejemplares[0].fecha_nac}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Numero:
                            </span>{" "}
                            {Ejemplares[0].numero}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Hara de procedencia:
                            </span>{" "}
                            {Ejemplares[0].hara}
                          </li>
                          <li class="display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Pelaje:
                            </span>{" "}
                            {Ejemplares[0].pelaje}
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <ul class="list-unstyled mb-1-9">
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Padre:
                            </span>{" "}
                            <span>{Ejemplares[0].padre}</span>
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Madre:
                            </span>{" "}
                            {Ejemplares[0].madre}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Precio:
                            </span>{" "}
                            {Ejemplares[0].precio}$
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Peso:
                            </span>{" "}
                            {Ejemplares[0].peso} Kg
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Sexo:
                            </span>{" "}
                            {Ejemplares[0].sexo}
                          </li>
                          <li>
                            <div className="d-flex pt-1 justify-content-end mt-4">
                              <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                                <img src={edit} alt="/" width={20} />
                              </Button>

                              <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
                                <img src={trash} alt="/" width={20} />
                              </Button>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <div className="mt-5">
              <h2 className="ms-5">Tablas</h2>
              <Card className="mb-3 mx-5">
                <Card.Body>
                  <h3 className="mt-2 text-center">Propietarios</h3>
                  <Tabla
                    columnas={columnas1}
                    informacion={Ejemplares}
                    funcion={(x) => (
                      <tr>
                        <td>{`${x.nombre}`}</td>
                        <td>{`${x.caballeriza}`}</td>
                        <td>{`${x.puesto}`}</td>
                        <td>{`${x.fecha_ingreso}`}</td>
                        <td>{`${x.stud}`}</td>
                      </tr>
                    )}
                  ></Tabla>
                  <h3 className="mt-4 text-center">Propietarios</h3>
                  <Tabla
                    columnas={columnas1}
                    informacion={Ejemplares}
                    funcion={(x) => (
                      <tr>
                        <td>{`${x.nombre}`}</td>
                        <td>{`${x.caballeriza}`}</td>
                        <td>{`${x.puesto}`}</td>
                        <td>{`${x.fecha_ingreso}`}</td>
                        <td>{`${x.stud}`}</td>
                      </tr>
                    )}
                  ></Tabla>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PagEj;

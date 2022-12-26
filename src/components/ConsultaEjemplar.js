import React from "react";
import { Card, Container, Col, Row, FormLabel } from "react-bootstrap";

const ConsultaEjemplar = () => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Header className="text-center d-flex justify-content-center align-content-center">
            <h3 className="fw-bold">Luchito</h3>
          </Card.Header>
          <Card.Body>
            <Col>
              <Row>
                <FormLabel>
                  <text className="fw-bold">Nro. Tatuaje Labial: </text>
                  <text>5</text>
                </FormLabel>
              </Row>
              <Row>
                <FormLabel>
                  <text className="fw-bold">Pelaje: </text>
                  <text>5</text>
                </FormLabel>
              </Row>
              <Row>
                <FormLabel>
                  <text className="fw-bold">Stud: </text>
                  <text>5</text>
                </FormLabel>
              </Row>
              <Row>
                <FormLabel>
                  <text className="fw-bold">Padre: </text>
                  <text>5</text>
                </FormLabel>
              </Row>
              <Row>
                <FormLabel>
                  <text className="fw-bold">Puesto Caballeriza: </text>
                  <text>5</text>
                </FormLabel>
              </Row>
            </Col>
            <Col>
              
            </Col>
            <Col></Col>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ConsultaEjemplar;

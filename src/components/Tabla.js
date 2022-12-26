import React, { Fragment } from "react";
import { Row, Table } from "react-bootstrap";

function Tabla(props) {
  return (
    <Fragment>
      <Row className="text-center">
        <h5 className="fw-bold mb-2 mt-1">{props.titulo}</h5>
      </Row>

      <Row>
        <Table className="table-responsive">
          <thead>{props.columnas}</thead>
          <tbody>{props.informacion.map(props.funcion)}</tbody>
        </Table>
      </Row>
    </Fragment>
  );
}

export default Tabla;
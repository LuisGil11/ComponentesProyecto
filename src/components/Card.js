import React from "react";
import Container from "react-bootstrap/Container";

const Card = () => {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="row">Imagen</div>
              <div className="row">valor</div>
            </div>
            <div className="col">nombre</div>
            <div className="col">apellido</div>
          </div>
        </div>
        <div className="col">Ejemplar 2</div>
      </div>
      <Container>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>First</th>
                        <th>First</th>
                        <th>First</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </Container>
    </Container>
  );
};

export default Card;

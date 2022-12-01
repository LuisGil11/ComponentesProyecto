import React from "react";
import { Button, Container, Form, FormLabel } from "react-bootstrap";

const RegisterCardSinCuadrito = () => {
  return (
    <Container>
      <div className="mt-5">
        <Form className="form-floating">
          <h3>Registrarse</h3>
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
            <FormLabel>First name</FormLabel>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
            <FormLabel>Last name</FormLabel>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
            <FormLabel>Email address</FormLabel>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <FormLabel>Password</FormLabel>
          </div>
          <div className="d-grid">
            <Button type="submit" className="btn btn-primary">
              Registrarse
            </Button>
          </div>
          <p className="forgot-password text-right">
            Ya estas registrado? <a href="/sign-in">inicia sesion</a>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default RegisterCardSinCuadrito;

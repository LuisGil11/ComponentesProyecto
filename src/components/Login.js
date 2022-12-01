import React from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Card className="mt-5">
        <Card.Header>
          <h3>Login</h3>
        </Card.Header>
        <Card.Body>
          <Form className="form-floating m-3">
            <div className="mb-3 form-floating">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
              <FormLabel>Email</FormLabel>
            </div>
            <div className="mb-3 form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <FormLabel>Contrasena</FormLabel>
            </div>
            <div className="d-grid">
              <Button type="submit" className="btn btn-primary">
                Login
              </Button>
            </div>
            <p className="forgot-password text-right">
              No tienes una cuenta, <a href="/register">registrate</a>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login

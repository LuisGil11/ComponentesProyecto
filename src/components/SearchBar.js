import React from "react";
import { Container, Form, FormLabel, InputGroup } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Container>
        <Form className="form-floating m-3">
          <div className="mb-3 form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
            <FormLabel>Buscar</FormLabel>
          </div>
        </Form>
    </Container>
  );
};

export default SearchBar;

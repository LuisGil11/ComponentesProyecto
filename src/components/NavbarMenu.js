import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/LaRinconadaPapa.png";
import perfil from "../assets/person-circle.svg";
import tuerquita from "../assets/gear.svg";

const NavbarMenu = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Nav.Link href="#">
          <img src={logo} alt="/" width={60} height={60} />
        </Nav.Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Resultados
            </a>
          </li>
          <li className="nav-item">
            <a
              href="ejemplares"
              className="nav-link"
              data-bs-target="ejemplares"
              data-bs-toggle="ejemplares"
            >
              Ejemplares
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Jinetes
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Studs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Propietarios
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Entrenadores
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Eventos
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Apuestas
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <img
                className="btn"
                data-bs-toggle="button"
                aria-pressed="false"
                src={perfil}
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <img
                className="btn"
                data-bs-toggle="button"
                aria-pressed="false"
                src={tuerquita}
              />
            </a>
          </li>
        </ul>
      </Container>
    </Navbar>

    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     {/* <Navbar.Brand>
    //       <img src={logo} alt='/'/>
    //     </Navbar.Brand> */}
    //     <Navbar.Brand href="#home">Hipodromo La Rinconada</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavbarMenu;

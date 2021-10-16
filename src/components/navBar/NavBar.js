import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar className="main-navbar sticky-top" expand="lg">
      <Container fluid className="m-2">
        <Link className="navbar-brand" to="/">
          <img src="" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-2 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link text-light" exact to="/home">
              Inicio
            </Link>
            <Link className="nav-link text-light" exact to="/about">
              Acerca de
            </Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar className="main-navbar sticky-top" expand="lg">
      <Container fluid className="m-2">
        <NavLink className="navbar-brand" to="/">
          <img src="" alt="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-2 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link text-light"
              exact
              to="/home"
              activeClassName="active-nav"
            >
              Inicio
            </NavLink>
            <NavLink
              className="nav-link text-light"
              exact
              to="/about"
              activeClassName="active-nav"
            >
              Acerca de
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

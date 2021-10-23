import React, { useState } from "react";
import Logo from "../../images/logo.png";
import "./logo.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

export default function NavBar(props) {
  const [busqueda, setBusqueda] = useState("");

  const history = useHistory();
  const location = useLocation();

  function onHandleSubmit(e) {
    e.preventDefault();
    history.push("/home");
    props.buscarCartas(busqueda.toLowerCase());
  }

  return (
    <Navbar className="main-navbar sticky-top" expand="lg">
      <Container fluid className="m-2">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" className="logo-color" />
        </Link>
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
              activeClassName="active-link"
            >
              Inicio
            </NavLink>
            <NavLink
              className="nav-link text-light"
              exact
              to="/about"
              activeClassName="active-link"
            >
              Acerca de
            </NavLink>
          </Nav>

          {location.pathname === "/home" && (
            <Form className="d-flex" onSubmit={(e) => onHandleSubmit(e)}>
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                value={busqueda}
                onChange={(e) => {
                  setBusqueda(e.target.value);
                }}
              />
              <Button
                variant="outline-warning"
                className="boton-uno d-flex"
                type="submit"
              >
                Buscar
                <BiSearchAlt size="25px" className="p-1" />
              </Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

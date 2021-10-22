import React from "react";
import { Badge, Form, Button, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./contacto.css";

function validacion(input) {
  let errores = [];

  if (!input.nombre) {
    errores.nombre = "Nombre is required";
  }

  if (!input.email) {
    errores.email = "Email is required";
  } else if (
    !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      input.email
    )
  ) {
    errores.email = "Email must be an email";
  }

  if (!input.mensaje) {
    errores.mensaje = "Mensaje is required";
  } else if (String(input.mensaje).length > 256) {
    errores.mensaje = "The subject requires a maximum of 256 characters";
  } else if (String(input.mensaje).length < 10) {
    errores.mensaje = "The subject requires a minimum of 10 characters";
  }
  return errores;
}

export default function About() {
  const history = useHistory();

  const [state, setState] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [fails, setFails] = useState({
    nombre: "Nombre is required",
    email: "Email is required",
    mensaje: "Mensaje is required",
  });

  function onsubmitform(e) {
    history.push("/home");
    alert("Muchas gracias,pronto nos contactaremos con usted!");
  }

  const redirecthome = () => {
    history.push("/home");
  };

  function onHandleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    setFails(
      validacion({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div className="text-center container" style={{ paddingTop: "1rem" }}>
      <h2 style={{ textAlign: "left" }}>
        <Badge bg="success badgeDorada">Contacto</Badge>
      </h2>
      <Form style={{ textAlign: "left" }} onSubmit={(e) => onsubmitform(e)}>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "white" }}>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={state.nombre}
            onChange={(e) => onHandleChange(e)}
          />
          {fails.nombre ? (
            <p style={{ color: "#f9baba" }}>{fails.nombre}</p>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "white" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={state.email}
            onChange={(e) => onHandleChange(e)}
          />
          {fails.email ? (
            <p style={{ color: "#f9baba" }}>{fails.email}</p>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ color: "white" }}>Mensaje</Form.Label>

          <Form.Control
            as="textarea"
            name="mensaje"
            rows={3}
            style={{ height: "15rem" }}
            value={state.mensaje}
            onChange={(e) => onHandleChange(e)}
          />
          {fails.mensaje ? (
            <p style={{ color: "#f9baba" }}>{fails.mensaje}</p>
          ) : null}
        </Form.Group>
        <Row>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              className="button-cancelar"
              onClick={() => {
                redirecthome();
              }}
              size="lg"
              variant="outline-danger"
              style={{ color: "white" }}
            >
              Cancelar
            </Button>

            <Button
              className="button-enviar"
              size="lg"
              variant="outline-success"
              type="submit"
              style={{ color: "white" }}
              disabled={
                fails.email || fails.nombre || fails.mensaje ? true : false
              }
            >
              Enviar
            </Button>
          </Container>
        </Row>
      </Form>
    </div>
  );
}

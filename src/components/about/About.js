import React from "react";
import { Card, Row, Container, Col, Badge } from "react-bootstrap";
import NavBar from "../navBar/NavBar";
import Nico from "./nicolas.jpg";
import Sergio from "./sergio.jpg";

export default function About() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "1rem" }}>
        <h2 style={{ textAlign: "center", paddingbottom: "1rem" }}>
          <Badge bg="dark">Desarrolladores</Badge>
        </h2>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="card text-white bg-dark mb-3">
                <Card.Img
                  variant="top"
                  src={Nico}
                  className="mx-auto"
                  style={{ height: "20rem", width: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>Jorge Nicolas Yañez</Card.Title>
                  <Card.Text>
                    Estudiante avanzado de Ingenieria Informatica en facultad de
                    Ingenieria FI-UNJu
                  </Card.Text>
                  <Card.Text>Email: </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card text-white bg-dark mb-3">
                <Card.Img
                  variant="top"
                  src={Sergio}
                  className="mx-auto"
                  style={{ height: "20rem", width: "auto" }}
                />
                <Card.Body>
                  <Card.Title>Sergio Alberto Montesino</Card.Title>
                  <Card.Text>
                    Estudiante avanzado de Ingenieria Informatica en facultad de
                    Ingenieria FI-UNJu
                  </Card.Text>
                  <Card.Text>Email: 41047859@fi.unju.edu.ar</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

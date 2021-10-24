import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import NavBar from "../navBar/NavBar";
import Nico from "../../images/nicolas.jpg";
import Sergio from "../../images/sergio.jpg";
import "./about.css";
import { BsGithub, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function About() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "1rem" }}>
        <h2 style={{ textAlign: "center", paddingbottom: "1rem" }}>
          <Badge className="p-3" bg="dark card-titulo">
            Desarrolladores
          </Badge>
        </h2>
        <div className="contenedor">
          <Card
            className="mb-3 card-about"
            style={{ maxWidth: "830px", padding: "10px" }}
          >
            <Row className="g-0">
              <Col md={4}>
                <Card.Img
                  variant="top"
                  src={Nico}
                  className="mx-auto"
                  style={{ height: "20rem", width: "15rem" }}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title style={{ paddingTop: "15px" }}>
                    Jorge Nicolas Yañez
                  </Card.Title>
                  <Card.Text style={{ paddingTop: "30px" }}>
                    Estudiante avanzado de Ingenieria Informatica en facultad de
                    Ingenieria FI-UNJu
                  </Card.Text>
                  <Card.Text style={{ paddingTop: "30px" }}>
                    Email: nicojny96@gmail.com
                  </Card.Text>
                  <Card.Link
                    href="https://www.facebook.com/nico.yanez.9/"
                    target="_blank"
                  >
                    <BsFacebook className="icono-social" size="30px" />
                  </Card.Link>
                  <Card.Link
                    href="https://www.linkedin.com/in/nicolas-ya%C3%B1ez-b40014198/"
                    target="_blank"
                  >
                    <BsLinkedin className="icono-social" size="30px" />
                  </Card.Link>
                  <Card.Link
                    href="https://www.instagram.com/nicojny96/"
                    target="_blank"
                  >
                    <BsInstagram className="icono-social" size="30px" />
                  </Card.Link>
                  <Card.Link href="https://github.com/" target="_blank">
                    <BsGithub className="icono-social" size="30px" />
                  </Card.Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card
            className="mb-3 card-about"
            style={{ maxWidth: "800px", padding: "10px" }}
          >
            <Row className="g-0">
              <Col md={4}>
                <Card.Img
                  variant="top"
                  src={Sergio}
                  className="mx-center"
                  style={{
                    height: "20rem",
                    width: "auto",
                  }}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Sergio Alberto Montesino</Card.Title>
                  <Card.Text style={{ paddingTop: "30px" }}>
                    Estudiante avanzado de Ingenieria Informatica en facultad de
                    Ingenieria FI-UNJu
                  </Card.Text>
                  <Card.Text style={{ paddingTop: "30px" }}>
                    Email: 41047859@fi.unju.edu.ar
                  </Card.Text>
                  <Card.Link
                    href="https://www.facebook.com/sergioalberti.lovecristo"
                    target="_blank"
                  >
                    <BsFacebook className="icono-social" size="30px" />
                  </Card.Link>
                  <Card.Link
                    href="https://www.instagram.com/zerjiny"
                    target="_blank"
                  >
                    <BsInstagram className="icono-social" size="30px" />
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/SerAlberto"
                    target="_blank"
                  >
                    <BsGithub className="icono-social" size="30px" />
                  </Card.Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
}

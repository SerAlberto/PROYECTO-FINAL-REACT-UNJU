import React from "react";
import { Card,CardGroup,Row,Container,Col,Badge } from "react-bootstrap";
import Nico from './nicolas.jpg'
import Sergi from './sergio.jpg'


export default function About() {
  return (
    <div style={{paddingTop:"1rem"}}>
      <h2 style={{textAlign:"center",paddingbottom:"1rem"}}  ><Badge  bg="success">Desarrolladores</Badge></h2>
      <Container style={{display:"flex",justifyContent:"space-between"}}>
            <Row xs={1} md={2} className="g-4">
            <Col>
              <Card class="card text-white bg-success mb-3">
                <Card.Img variant="top" src={Nico}  className="mx-auto" style={{ height: "20rem", width: "15rem"}}/>
                <Card.Body>
                  <Card.Title>Jorge Nicolas Yañez</Card.Title>
                  <Card.Text>
                     Estudiante avanzado de Ingenieria Informatica en facultad de Ingenieria FI-UNJu
                  </Card.Text>
                  <Card.Text>
                     Email: sergioalbertomontesino@gmail.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

             <Col>
            <Card >
            <Card.Img variant="top" src={Sergi}  className="mx-auto" style={{ height: "20rem", width: "15rem"}}/>
              <Card.Body>
                <Card.Title>Sergio Alberto Montesino</Card.Title>
                <Card.Text>
                   Estudiante avanzado de Ingenieria Informatica en facultad de Ingenieria FI-UNJu
                </Card.Text>
                <Card.Text>
                   Email: 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      </Row>
      </Container>
    </div>
  );
}

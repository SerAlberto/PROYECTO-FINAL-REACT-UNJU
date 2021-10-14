import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Spinner, Container } from "react-bootstrap";

export default function Home() {
  const [state, setState] = useState({
    id_mazo: null,
    cartas_mazo: [],
  });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(({ data }) => {
          setState({ deck_id: data.deck_id });
          axios
            .get(
              `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=20`
            )
            .then(({ data }) => {
              setState({ cartas_mazo: data.cards });
              console.log(data);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <Container>
      {state.cartas_mazo?.length === 0 ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner
            style={{ height: "100px", width: "100px" }}
            animation="border"
            variant="success"
          />
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-3">
          {state.cartas_mazo?.map((carta, index) => (
            <Col key={index}>
              <Card className="p-2 text-center">
                <Card.Img
                  variant="top"
                  className="mx-auto"
                  src={carta.image}
                  style={{ height: "auto", width: "10rem" }}
                />
                <Card.Body>
                  <Card.Title>{carta.suit}</Card.Title>
                  <Card.Text>Valor: {carta.value}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

import React from "react";
import { Row, Container, Carousel } from "react-bootstrap";
import "./landingPage.css";
import Logo from "../../images/logo.png";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LandingPage() {
  const history = useHistory();
  const redirecthome = () => {
    history.push("/home");
  };

  const redirectabout = () => {
    history.push("/about");
  };

  const [state, setState] = useState({
    cartasMazo: [],
    image: [],
  });

  useEffect(() => {
    async function fetchData() {
      setState({
        cartasMazo: [],
      });
      await axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(({ data }) => {
          axios
            .get(
              `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=3`
            )
            .then(({ data }) => {
              setState({
                cartasMazo: data.cards,
                image: data.cards.map((e) => {
                  return e.image;
                }),
              });
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="bg">
      <div className="content">
        <div>
          <Carousel>
            {state.cartasMazo.map((amigo, index) => (
              <Carousel.Item key={index} interval={2500}>
                <img
                  src={`${amigo.image}`}
                  alt="First slide"
                  style={{ width: "150px", height: "200px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="sup" style={{ paddingTop: "20px" }}>
          <img
            src={Logo}
            alt="logo"
            className="logo-color"
            style={{ width: "auto", height: "100px" }}
          />
        </div>

        <h2 className="sup" style={{ color: "white", paddingTop: "20px" }}>
          Deck of Card
        </h2>

        <Row className="sup" style={{ paddingTop: "20px" }}>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button
              onClick={() => {
                redirecthome();
              }}
              className="m-3 boton boton-uno"
            >
              <span>Inicio</span>
            </button>

            <button
              onClick={() => {
                redirectabout();
              }}
              className="m-3 boton boton-uno"
            >
              <span>Acerca de</span>
            </button>
          </Container>
        </Row>
      </div>
    </div>
  );
}

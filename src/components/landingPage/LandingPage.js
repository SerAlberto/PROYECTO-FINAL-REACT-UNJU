import React from "react";
import { Row, Container, Carousel,Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./landingPage.css";
import Logo from "../../images/logo.png";
import Naipe from "../../images/reversaNaipe2.jpg";
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
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setState({
        cartasMazo: [],
      });
      setCargando(true);
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
              setCargando(false);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="bg" >
      <div className="content" style={{marginTop:"70px"}}>
        <div className="mt-5" >
          {cargando ? (
            <img
            
              className="animate__animated animate__headShake"
              src={Naipe}
              alt="reversa"
              style={{ width: "auto", height: "300px" }}
            />
          ) : (
            <Carousel>
              {state.cartasMazo.map((amigo, index) => (
                <Carousel.Item key={index} interval={2500}>
                  <img
                    className="animate__animated animate__fadeIn"
                    src={`${amigo.image}`}
                    alt="First slide"
                    style={{ width: "auto", height: "300px" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
        <div className="sup" style={{ paddingTop: "20px" }}>
          <img
            src={Logo}
            alt="logo"
            className="logo-color"
            style={{ width: "250px", height: "auto" }}
          />
        </div>

        <h2 className="sup" style={{ color: "white", paddingTop: "20px" }}>
          Deck of Card
        </h2>

        <Row className="sup" >
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              onClick={() => {
                redirecthome();
              }}
              className="m-4 dark"
              variant="dark"
              style={{height:"70px", width:"180px"}}
            >
              <span>Inicio</span>
            </Button>

            <Button
              onClick={() => {
                redirectabout();
              }}
              className="m-4  dark"
              variant="dark"
              style={{height:"70px", width:"180px"}}
            >
              <span>Acerca de</span>
            </Button>
          </Container>
        </Row>
      </div>
    </div>
  );
}

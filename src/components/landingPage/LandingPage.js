import React from "react";
import { Card, Row, Container, Col, Badge,Button,Carousel } from "react-bootstrap";
import "./landingPage.css";
import Logo from "../../images/logo.png"
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
    image:[]
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
                image: data.cards.map((e) =>{
                  return e.image
                })
                

              });
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);
  

  console.log(state.image);


  return (
    <div className="bg">
        <div className="conten">

        
          <div>
          <Carousel>
              {state.cartasMazo.map((amigo) => (
              <Carousel.Item interval={2500}>
                    <img
                      src={`${amigo.image}`}
                      alt="First slide"
                      style ={{width:"150px",height:"200px"}}
                    />
              </Carousel.Item>
              ))}
          </Carousel>
        </div>
          <div className="sup" style={{paddingTop:"20px"}}>
          <img src={Logo} alt="logo" className="logo-color" style={{width:"300px",height:"100px"}} />
          </div>

          <h2 className="sup" style={{color:"white",paddingTop:"20px"}}>Deck of Card</h2>

          <Row className="sup" style={{paddingTop:"20px"}}>
              <Container
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  className="button-style"
                  onClick={() => {
                    redirecthome();
                  }}
                  size="lg"
                  style={{color:"black",marginRight:"10px"}}
                >
                  Inicio
                </Button>

                <Button
                onClick={() => {
                  redirectabout();
                }}
                className="button-style"
                  size="lg"
                  style={{color:"black",marginLeft:"10px"}}
                >
                  Acerca de
                </Button>
              </Container>
            </Row>

        </div>
    </div>
  );
}

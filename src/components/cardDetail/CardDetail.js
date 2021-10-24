import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import "./cardDetail.css";
import NavBar from "../navBar/NavBar";
import Naipe from "../../images/reversaNaipe2.jpg";

export default function CardDetail({ mazo }) {
  const params = useParams();
  const history = useHistory();
  const [detalleCarta, setDetalleCarta] = useState(null);

  useEffect(() => {
    if (Object.keys(params).length !== 0 && mazo.length !== 0) {
      setDetalleCarta(mazo.find((element) => element.code === params.idCarta));
    } else {
      history.push("/home");
    }
  }, [params, history, mazo]);

  return (
    <>
      <NavBar />
      <div className="cardDetail ">
        <div>
          <h4>
            {detalleCarta?.suit === "SPADES" ||
            detalleCarta?.suit === "CLUBS" ? (
              <Badge
                className="animate__animated animate__lightSpeedInLeft"
                pill
                bg="primary"
              >
                Tipo: {detalleCarta?.suit}
              </Badge>
            ) : (
              <Badge
                className="animate__animated animate__lightSpeedInLeft"
                pill
                bg="danger"
              >
                Tipo: {detalleCarta?.suit}
              </Badge>
            )}

            <Badge
              className="mx-3 animate__animated animate__lightSpeedInRight"
              pill
              bg="info"
            >
              Valor: {detalleCarta?.value}
            </Badge>
          </h4>
          <div className="contenedorCardAnimate animate__animated animate__zoomInDown">
            <div className="carta">
              <div className="lado frente">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={detalleCarta?.image}
                  alt="frontal"
                />
              </div>

              <div className="lado atras">
                <img
                  src={Naipe}
                  style={{ width: "100%", height: "100%" }}
                  alt="reversa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/* <Card className="p-3 detail">
          <Row className="g-0" style={{ minWidth: "500px" }}>
            <Col md={4}>
              <Card.Img
                style={{ width: "auto", height: "200px" }}
                src={detalleCarta?.image}
              />
            </Col>
            <Col md={8}>
              <Card.Body style={{ height: "100%" }}>
                <Card.Title>{detalleCarta?.suit} </Card.Title>
                <hr />

                <Card.Text
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: "100px" }}
                >
                  <small className="text-medium-emphasis">
                    Valor: {detalleCarta?.value}
                  </small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card> */

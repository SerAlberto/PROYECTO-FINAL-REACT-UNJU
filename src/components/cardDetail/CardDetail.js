import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import "./cardDetail.css";
import NavBar from "../navBar/NavBar";

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
      <div className="cardDetail">
        <Card className="p-3 detail">
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
        </Card>
      </div>
    </>
  );
}

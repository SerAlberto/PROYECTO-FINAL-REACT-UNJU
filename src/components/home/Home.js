import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Container } from "react-bootstrap";
import Select from "react-select";
import { PuffLoader } from "react-spinners";
import { Link } from "react-router-dom";

import "./cards-pocker.css";
import SideBar from "./SideBar";
import NavBar from "../navBar/NavBar";

export default function Home({ mazo, setMazo }) {
  const resultadoBusqueda = "No se encontró ninguna carta";
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    cartasMazo: mazo,
    cartasMazoFiltro: mazo,
    cartasMazoMostrar: mazo,
  });

  const [busquedaValorTipo, setBusquedaValorTipo] = useState({
    valor: true,
    tipo: true,
  });
  const [filtroColor, setFiltroColor] = useState({
    rojo: true,
    negro: true,
  });

  const cantidadCartasSelect = [
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
    { value: "32", label: "32" },
    { value: "33", label: "33" },
    { value: "34", label: "34" },
    { value: "35", label: "35" },
    { value: "36", label: "36" },
    { value: "37", label: "37" },
    { value: "38", label: "38" },
    { value: "39", label: "39" },
    { value: "40", label: "40" },
    { value: "41", label: "41" },
    { value: "42", label: "42" },
    { value: "43", label: "43" },
    { value: "44", label: "44" },
    { value: "45", label: "45" },
    { value: "46", label: "46" },
    { value: "47", label: "47" },
    { value: "48", label: "48" },
    { value: "49", label: "49" },
    { value: "50", label: "50" },
    { value: "51", label: "51" },
    { value: "52", label: "52" },
  ];
  const [cantidadCartas, setCantidadCartas] = useState(cantidadCartasSelect[0]);

  //Actualizamos por primera vez y cada vez q cambiemos seleccionemos un valor del select
  useEffect(() => {
    async function fetchData() {
      setState({
        cartasMazo: [],
        cartasMazoFiltro: [],
        cartasMazoMostrar: [],
      });
      setLoading(true);
      await axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(({ data }) => {
          axios
            .get(
              `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=${cantidadCartas.value}`
            )
            .then(({ data }) => {
              setState({
                cartasMazo: data.cards,
                cartasMazoFiltro: data.cards,
                cartasMazoMostrar: data.cards,
              });
              setLoading(false);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, [cantidadCartas]);

  function buscarCartas(filtrarBusqueda) {
    var filtro = state.cartasMazo.filter((item) => {
      if (
        (busquedaValorTipo.valor &&
          item.value.toString().toLowerCase().includes(filtrarBusqueda)) ||
        (busquedaValorTipo.tipo &&
          item.suit.toLowerCase().includes(filtrarBusqueda))
      ) {
        return item;
      } else {
        return null;
      }
    });
    console.log(filtro);
    setState({ ...state, cartasMazoFiltro: filtro, cartasMazoMostrar: filtro });
  }

  async function devolverCartasAlMazo() {
    setMazo(state.cartasMazo);
  }

  return (
    <>
      <NavBar buscarCartas={buscarCartas} />
      <div className=" d-flex">
        <SideBar
          state={state}
          setState={setState}
          busquedaValorTipo={busquedaValorTipo}
          setBusquedaValorTipo={setBusquedaValorTipo}
          filtroColor={filtroColor}
          setFiltroColor={setFiltroColor}
        />

        <Container className="mt-3">
          <p className="text-light">
            Seleccione la cantidad de cartas que desea visualizar
          </p>
          <Select
            defaultValue={cantidadCartasSelect[0]}
            className="text-dark mb-3"
            options={cantidadCartasSelect}
            isSearchable
            onChange={setCantidadCartas}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: "orange",
                primary: "black",
              },
            })}
          />
          {state.cartasMazoMostrar?.length === 0 ? (
            <div className="d-flex justify-content-center mt-5">
              {loading ? (
                <PuffLoader color="#fff" size={150} />
              ) : (
                <h3 className="text-warning">{resultadoBusqueda}</h3>
              )}
            </div>
          ) : (
            <Row sm={1} md={2} lg={3} xl={4} className="g-4 mt-3 mb-3">
              {state.cartasMazoMostrar?.map((carta, index) => (
                <Col key={index}>
                  <Link
                    to={`/cardDetail/${carta.code}`}
                    onClick={() => {
                      devolverCartasAlMazo();
                    }}
                  >
                    <Card className="p-2 text-center mx-auto card-pocker">
                      <Card.Img
                        variant="top"
                        className="mx-auto card"
                        src={carta.image}
                        style={{
                          height: "auto",
                          width: "10rem",
                          borderRadius: "10px",
                        }}
                      />
                      <Card.Body>
                        <Card.Title>{carta.suit}</Card.Title>
                        <Card.Text>Valor: {carta.value}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </>
  );
}

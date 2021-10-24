import React, { useState } from "react";
import "./sidebar.css";
import Select from "react-select";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function SideBar({
  state,
  setState,
  filtroColor,
  setFiltroColor,
  setCantidadCartas,
  cantidadCartasSelect,
}) {
  const opcionesOrden = [
    { value: "ascendente", label: "Ascendente" },
    { value: "descendente", label: "Descendente" },
  ];
  const [orden, setOrden] = useState([]);

  const tiposCartasSelect = [
    { value: "TODOS", label: "Todos" },
    { value: "SPADES", label: "Pica" },
    { value: "CLUBS", label: "Trébol" },
    { value: "DIAMONDS", label: "Diamante" },
    { value: "HEARTS", label: "Corazón" },
  ];
  const [filtroTipo, setFiltroTipo] = useState(tiposCartasSelect[0]);

  function agregarAtributoOrden(cartas) {
    const valor = [
      "ACE",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "JACK",
      "QUEEN",
      "KING",
    ];

    cartas.map((carta) => {
      var bandera = true;
      for (let index = 0; index < 14 && bandera; index++) {
        if (carta.value === valor[index]) {
          carta.orden = index;
          bandera = false;
        }
      }
      return carta;
    });
  }

  function filtracionEspecifica() {
    let cartasFiltro = state.cartasMazoFiltro;
    //Llamo a la función para asignarle un valor numerico a cada carta, por ej, "A" = 0 , "1" = 1, etc
    agregarAtributoOrden(cartasFiltro);

    cartasFiltro = aplicarFiltroColor();
    if (filtroTipo.value !== "TODOS") {
      cartasFiltro = aplicarFiltroTipo(cartasFiltro);
    }

    //Aquí orden las cartas de acuerdo a los valores de las cartas
    switch (orden.value) {
      case "ascendente":
        cartasFiltro = cartasFiltro.sort((a, b) => {
          if (a.orden < b.orden) return -1;
          if (a.orden > b.orden) {
            return 1;
          } else return null;
        });

        break;
      case "descendente":
        cartasFiltro = cartasFiltro.sort((a, b) => {
          if (a.orden < b.orden) return 1;
          if (a.orden > b.orden) {
            return -1;
          } else return null;
        });
        break;
      default:
        break;
    }
    cartasFiltro.map((carta) => {
      delete carta.orden;
      return carta;
    });

    //Asigno lo ordenado a cartasMazoFiltro para q se muestre en pantalla
    setState({ ...state, cartasMazoMostrar: cartasFiltro });
  }

  function aplicarFiltroColor() {
    let mazoColor = state.cartasMazoFiltro.filter((item) => {
      if (
        (filtroColor.negro &&
          (item.suit === "SPADES" || item.suit === "CLUBS")) ||
        (filtroColor.rojo &&
          (item.suit === "HEARTS" || item.suit === "DIAMONDS"))
      ) {
        return item;
      } else {
        return null;
      }
    });
    return mazoColor;
  }

  function aplicarFiltroTipo(filtro) {
    let mazoColor = filtro.filter((item) => {
      if (filtroTipo.value === item.suit) {
        return item;
      } else {
        return null;
      }
    });
    return mazoColor;
  }

  function filtrarColor(e) {
    //Filtramos las cartas por color
    if (
      (!e.target.checked && filtroColor.rojo && filtroColor.negro) ||
      e.target.checked
    ) {
      setFiltroColor({
        ...filtroColor,
        [e.target.name]: e.target.checked,
      });
    }
  }

  return (
    <>
      <div style={{ minWidth: "15rem" }}></div>
      <div className="sidebar">
        <h5 className="mt-3">Filtros</h5>
        <hr />
        <div class="d-flex justify-content-between mb-1">
          Cantidad
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="button-tooltip-2">
                Seleccione la cantidad de cartas que desee visualizar
              </Tooltip>
            }
          >
            <span>
              <BsFillQuestionCircleFill
                size={20}
                className="my-auto text-danger"
              />
            </span>
          </OverlayTrigger>
        </div>
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
        <div class="d-flex justify-content-between mb-1">
          Orden
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="button-tooltip-2">Seleccione un orden</Tooltip>
            }
          >
            <span>
              <BsFillQuestionCircleFill
                size={20}
                className="my-auto text-danger"
              />
            </span>
          </OverlayTrigger>
        </div>
        <Select
          className="text-dark mb-3"
          options={opcionesOrden}
          placeholder="Selecciona..."
          isSearchable={false}
          onChange={setOrden}
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
        <div class="d-flex justify-content-between mb-1">
          Color
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="button-tooltip-2">
                Seleccione un color de carta
              </Tooltip>
            }
          >
            <span>
              <BsFillQuestionCircleFill
                size={20}
                className="my-auto text-danger"
              />
            </span>
          </OverlayTrigger>
        </div>
        <Form>
          <div className="mb-3">
            <Form.Check
              inline
              checked={filtroColor.rojo}
              label="Rojo"
              name="rojo"
              onClick={(e) => {
                filtrarColor(e);
              }}
              type="checkbox"
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              checked={filtroColor.negro}
              label="Negro"
              name="negro"
              onClick={(e) => {
                filtrarColor(e);
              }}
              type="checkbox"
              id={`inline-checkbox-2`}
            />
          </div>
        </Form>
        <div class="d-flex justify-content-between mb-1">
          Tipo
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="button-tooltip-2">
                Seleccione un tipo de carta
              </Tooltip>
            }
          >
            <span>
              <BsFillQuestionCircleFill
                size={20}
                className="my-auto text-danger"
              />
            </span>
          </OverlayTrigger>
        </div>
        <Select
          className="text-dark mb-3"
          defaultValue={tiposCartasSelect[0]}
          options={tiposCartasSelect}
          placeholder="Selecciona..."
          isSearchable
          onChange={setFiltroTipo}
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
        <hr />
        <Button
          className="mb-3 d-flex mx-auto"
          variant="outline-info"
          onClick={() => filtracionEspecifica()}
        >
          Aplicar filtros
          <FiFilter size="15px" className="m-1" />
        </Button>
      </div>
    </>
  );
}

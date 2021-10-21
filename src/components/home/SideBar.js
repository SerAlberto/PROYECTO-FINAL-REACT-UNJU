import React, { useState } from "react";
import "./sidebar.css";
import Select from "react-select";
import { Button, Form } from "react-bootstrap";

export default function SideBar({
  state,
  setState,
  busquedaValorTipo,
  setBusquedaValorTipo,
  filtroColor,
  setFiltroColor,
}) {
  const opcionesOrden = [
    { value: "ascendente", label: "Ascendente" },
    { value: "descendente", label: "Descendente" },
  ];
  const [orden, setOrden] = useState([]);

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

  function filtroValorTipo(e) {
    //Filtramos la busqueda en tiempo real por valor o por tipo
    if (
      (!e.target.checked &&
        busquedaValorTipo.tipo &&
        busquedaValorTipo.valor) ||
      e.target.checked
    ) {
      setBusquedaValorTipo({
        ...busquedaValorTipo,
        [e.target.name]: e.target.checked,
      });
    }
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
        <h5>Filtros</h5>
        Orden:
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
        Color:
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
        <hr />
        <Button
          className="mb-3"
          variant="outline-warning"
          onClick={() => filtracionEspecifica()}
        >
          Aplicar filtros
        </Button>
        Buscar por:
        <Form>
          <div className="mb-3">
            <Form.Check
              inline
              checked={busquedaValorTipo.valor}
              label="Valor"
              name="valor"
              onClick={(e) => {
                filtroValorTipo(e);
              }}
              type="checkbox"
              id={`inline-checkbox-1`}
            />
            <Form.Check
              inline
              checked={busquedaValorTipo.tipo}
              label="Tipo"
              name="tipo"
              onClick={(e) => {
                filtroValorTipo(e);
              }}
              type="checkbox"
              id={`inline-checkbox-2`}
            />
          </div>
        </Form>
      </div>
    </>
  );
}

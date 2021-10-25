import React from "react";
import NavBar from "../navBar/NavBar";
import CuatroCorazon from "../../images/cuatroCorazon.png";
import Cero from "../../images/cero404.png";
import Cuatro from "../../images/cuatro404.png";
import "./page404.css";

export default function Page404() {
  return (
    <>
      <NavBar />
      <div className="contenedorPage404">
        <div className="d-inline-block contenedorCuatro">
          <img className="animacionBrilloCuatro" src={Cuatro} alt="4" />
          <div className="carta-animacion">
            <img className="animate__hinge" src={CuatroCorazon} alt="4" />
          </div>
        </div>
        <div className="d-inline-block contenedorCero">
          <img
            className="animacionBrilloCero"
            style={{ height: "2000px", width: "auto" }}
            src={Cero}
            alt="0"
          />
        </div>
        <img className="animacionBrilloCuatro" src={Cuatro} alt="4" />
      </div>
    </>
  );
}

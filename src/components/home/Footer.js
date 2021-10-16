import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="main-footer ">
      <div className="container">
        <div className="row">
          <h5>Síguenos en nuestras redes sociales</h5>
          <div className="col-md-6 col-sm-12">
            <p className="col-sm mb-0">Sergio Alberto Montesino</p>
            <BsFacebook />
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="col-sm mb-0">Jorge Nicolás Yáñez</p>
            <BsFacebook />
          </div>
        </div>
        <Link
          className=""
          to="/contact"
          style={{ textDecoration: "none", width: "auto" }}
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
}

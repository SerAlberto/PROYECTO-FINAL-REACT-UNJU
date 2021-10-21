import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <h5 className="text-light">Síguenos en nuestras redes sociales</h5>
          <div className="col-md-6 col-sm-12">
            <p className="col-sm mb-0">Sergio Alberto Montesino</p>
            <a
              className="text-light"
              rel="noreferrer"
              href="https://www.facebook.com/sergioalberti.lovecristo"
              target="_blank"
            >
              <BsFacebook size="30px" />
            </a>
          </div>

          <div className="col-md-6 col-sm-12">
            <p className="col-sm mb-0">Jorge Nicolás Yáñez</p>
            <a
              className="text-light"
              rel="noreferrer"
              href="https://www.facebook.com/nico.yanez.9/"
              target="_blank"
            >
              <BsFacebook size="30px" />
            </a>
          </div>
        </div>
        <Link
          className="text-light"
          to="/contact"
          style={{ textDecoration: "none", width: "auto" }}
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
}

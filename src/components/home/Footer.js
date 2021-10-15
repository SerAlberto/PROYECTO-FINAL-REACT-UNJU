import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer text-light">
      <div className="container">
        <div className="row">
          <p className="col-sm mb-0">
            Términos y Condiciones <br /> &copy;{new Date().getFullYear()} Todos
            los derechos reservados
          </p>
          <div>
            <Link
              className="text-light"
              to="/contact"
              style={{ textDecoration: "none", width: "auto" }}
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

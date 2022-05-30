import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../services/utils";

export const Header = ({ movie }) => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light col-12 ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-info ">
          Buscador de películas
        </Link>
        <div className="col-3 ms-auto me-0 text-end">
          <Link to="/popular" className="btn btn-lg btn-info text-light mx-4">
            Top 10 películas
          </Link>
          <Link to="/" className="btn btn-outline-info btn-lg text-dark ">
            Series
          </Link>
        </div>
      </div>
    </nav>
  );
};

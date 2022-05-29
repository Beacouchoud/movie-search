import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../services/utils";

export const Header = ({ movie }) => {
  return (
    <nav class="navbar fixed-top navbar-light bg-light col-12 ">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand text-info ">
          Buscador de películas
        </Link>

        <Link to="/" class="btn btn-outline-info text-dark">
          Series
        </Link>
      </div>
    </nav>
  );
};

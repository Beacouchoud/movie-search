import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ searchSeries, setSearchSeries }) => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light col-12 ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-info fs-3">
          <FontAwesomeIcon icon={faVideo} className="me-2" />
          Buscador de {searchSeries ? "series" : "películas"}
        </Link>
        <div className="col-3 ms-auto me-0 text-end">
          <Link to="/popular" className="btn btn-lg btn-info text-light">
            Top 10 {searchSeries ? "series" : "películas"}
          </Link>
          <Link to="" className="btn btn-outline-info btn-lg text-dark ms-3" onClick={() => setSearchSeries(!searchSeries)}>
            {searchSeries ? "Películas" : "Series"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

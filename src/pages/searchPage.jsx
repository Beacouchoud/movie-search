import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { SearchBar } from "../components/searchBar";

export const SearchPage = ({}) => {

    const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="row my-5">
          <Header></Header>
        </div>
        <div className="row my-5">
          <div className="col-2 m-auto">
            <Link to="/popular" className="btn btn-lg btn-info text-light">
              Top 10 películas
            </Link>
          </div>
          <div className="col-6 m-auto">
            <SearchBar></SearchBar>
          </div>
          <div className="col-2 m-auto">
            <select class="form-select form-select-lg " aria-label=".form-select-lg example">
              <option selected>Todos los géneros</option>
              <option value="1">Romantica</option>
              <option value="2">Drama</option>
              <option value="3">Comedia</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

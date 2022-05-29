import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../services/utils";

export const MovieCard = ({ movie, type, index }) => {
  return (
    <div class="card p-2 mb-5 mx-2 col-3">
      {type === "top10" && <div class="card-header text-info fw-bold bg-transparent">Top {++index}</div>}
      <img src={BASE_IMG_URL + (movie.poster_path || movie.backdrop_path)} class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{movie.title}</h5>
        <Link to={`/${movie.id}`} class="btn btn-info text-light mt-auto w-50 mx-auto">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

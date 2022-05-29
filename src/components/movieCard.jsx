import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../services/utils";

export const MovieCard = ({movie}) => {
  return (
<div class="card p-2 my-2 ">
  <img src={BASE_IMG_URL+(movie.poster_path || movie.backdrop_path)}class="card-img-top" alt="..."/>
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">{movie.title}</h5>
    <Link to={`/${movie.id}`} class="btn btn-info text-light mt-auto w-50 mx-auto">Ver detalles</Link>
  </div>
</div>
  );
};

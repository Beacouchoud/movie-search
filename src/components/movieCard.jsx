import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../services/utils";

export const MovieCard = ({ movie, type, index }) => {
  return (
    <div className="card p-2 mb-5 mx-2 col-3">
      {type === "top10" && <div className="card-header text-info fw-bold bg-transparent">Top {++index}</div>}
      {(BASE_IMG_URL + (movie?.poster_path || movie?.backdrop_path)) && (
        <img src={BASE_IMG_URL + (movie?.poster_path || movie?.backdrop_path)} className="card-img-top" alt="..." />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title || movie.name}</h5>
        <Link to={`/${movie.id}`} className="btn btn-info text-light mt-auto w-50 mx-auto">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

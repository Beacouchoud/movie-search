import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Spinner } from "../components/spinner";
import { API_KEY, BASE_IMG_URL, BASE_MOVIE_URL, BASE_SERIE_URL, LANG_ES } from "../services/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export const DetailsPage = ({ searchSeries, setSearchSeries }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  const params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    setIsLoading(true);
    searchSeries ? 
    fetch(BASE_SERIE_URL + movieId + API_KEY + LANG_ES)
      .then((response) => response.json())
      .then((serie) => {
        setMovie(serie);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
    :fetch(BASE_MOVIE_URL + movieId + API_KEY + LANG_ES)
      .then((response) => response.json())
      .then((movie) => {
        setMovie(movie);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, []);
  return (
    <div className="container">
      <div className="row my-5">
        <Header  searchSeries={searchSeries} setSearchSeries={setSearchSeries}></Header>
      </div>
      <div className="row row-cols-2 mx-auto">
        {isLoading && <Spinner></Spinner>}
        {movie && (
          <>
            <div className="col4 pt-3">
              <figure className="figure">
                <img
                  src={BASE_IMG_URL + (movie.poster_path || movie.backdrop_path)}
                  className="card-img-top figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">{movie?.tagline}</figcaption>
              </figure>
            </div>
            <div className="col4 d-flex flex-column text-start justify-content-between pt-3 pb-5">
              <div>
                <p className="fw-bold fs-5 text-info">T??tulo</p>
                <p>{movie.title || movie.name}</p>
              </div>
              <div>
                <p className="fw-bold fs-5 text-info">T??tulo original</p>
                <p>{movie.original_title || movie.original_name}</p>
              </div>
              <div>
                <p className="fw-bold fs-5 text-info">Fecha de lanzamiento</p>
                <p>{movie.release_date || movie.first_air_date}</p>
              </div>
              <div>
                <p className="fw-bold fs-5 text-info">Sinopsis</p>
                <p>{movie.overview}</p>
              </div>
              <div>
                <p className="fw-bold fs-5 text-info">Puntuaci??n</p>
                <p> <FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon> {movie.vote_average}</p>
              </div>
              <div className="d-flex">
                {/* <p className="fw-bold fs-5 text-info w-100">G??neros</p> */}
                {movie.genres.map((genre, index) => (
                  <h5> <span className="badge rounded-pill bg-info me-3"> {genre.name}</span> </h5>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

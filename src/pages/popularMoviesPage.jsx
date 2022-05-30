import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { MovieCard } from "../components/movieCard";
import { Spinner } from "../components/spinner";
import { POPULAR_MOVIES_URL, POPULAR_SERIES_URL } from "../services/utils";

export const PopularMoviesPage = ({ searchSeries, setSearchSeries }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState();
  const [popularSeries, setPopularSeries] = useState();
  useEffect(() => {
    setIsLoading(true);
    searchSeries
      ? fetch(POPULAR_SERIES_URL)
          .then((response) => response.json())
          .then((series) => {
            setPopularSeries(series.results);
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          })
      : fetch(POPULAR_MOVIES_URL)
          .then((response) => response.json())
          .then((movies) => {
            setPopularMovies(movies.results);
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          });
  }, [searchSeries]);
  return (
    <div className="container-fluid">
      <div className="row my-5">
        <Header searchSeries={searchSeries} setSearchSeries={setSearchSeries}></Header>
      </div>
      <div className="row">
        {" "}
        <div className="col-8 m-auto">
          {isLoading && <Spinner></Spinner>}
          {searchSeries && (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex justify-content-evenly">
              {popularSeries.slice(0, 10).map((serie, index) => (
                <MovieCard movie={serie} key={serie.id} index={index} type={"top10"}></MovieCard>
              ))}
            </div>
          )}
          {!searchSeries && (popularMovies && (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex justify-content-evenly">
              {popularMovies.slice(0, 10).map((movie, index) => (
                <MovieCard movie={movie} key={movie.movieId} index={index} type={"top10"}></MovieCard>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

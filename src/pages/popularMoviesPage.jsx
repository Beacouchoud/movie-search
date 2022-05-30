import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { MovieCard } from "../components/movieCard";
import { Spinner } from "../components/spinner";
import { POPULAR_MOVIES_URL } from "../services/utils";

export const PopularMoviesPage = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch(POPULAR_MOVIES_URL)
      .then((response) => response.json())
      .then((movies) => {
        setPopularMovies(movies.results);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row my-5">
        <Header></Header>
      </div>
      <div className="row">
        {" "}
        <div className="col-8 m-auto">
          {isLoading && <Spinner></Spinner>}
          {popularMovies && (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex justify-content-evenly">
              {popularMovies.slice(0,10).map((movie, index) => (
                <MovieCard movie={movie} key={movie.movieId} index={index} type={"top10"}></MovieCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

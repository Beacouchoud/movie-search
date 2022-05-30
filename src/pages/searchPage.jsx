import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { MovieCard } from "../components/movieCard";
import { SearchBar } from "../components/searchBar";
import { Spinner } from "../components/spinner";
import { LATEST_MOVIES_URL } from "../services/utils";

export const SearchPage = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(LATEST_MOVIES_URL)
      .then((response) => response.json())
      .then((moviesList) => {
        setMovies(moviesList.results);
        setTimeout(() => {
          setIsLoading(false);
          setShowMessage(true);
        }, 1000);
      });
  }, []);

  const vaciar =()=> {
    debugger;
    setMovies(null);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row my-5">
          <Header></Header>
        </div>
        <div className="row my-5">
          <div className="col-6 m-auto">
            <SearchBar
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              setIsLoading={setIsLoading}
              setMovies={setMovies}
              vaciar={vaciar}
              movies={movies}
              setShowMessage={setShowMessage}
            ></SearchBar>
          </div>

        </div>
        <div className="row">
          <div className="col-8 m-auto">
            {isLoading && <Spinner></Spinner>}

            {movies && (
              <>
                {showMessage && <h3 className="mb-5">Ahora en cines</h3>}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex justify-content-evenly">
                  {movies.map((movie, index) => (
                    <MovieCard className="col" movie={movie} key={index}></MovieCard>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

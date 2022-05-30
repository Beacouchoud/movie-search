import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { MovieCard } from "../components/movieCard";
import { SearchBar } from "../components/searchBar";
import { Spinner } from "../components/spinner";

export const SearchPage = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    movies && movies.length < 1 ? setShowNoResults(true) : setShowNoResults(false);
  }, [movies]);

  return (
    <>
      <div className="container-fluid">
        <div className="row my-5">
          <Header></Header>
        </div>
        <div className="row my-5">
          <div className="col-10 m-auto">
            <SearchBar
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              setIsLoading={setIsLoading}
              setMovies={setMovies}
              movies={movies}
              setShowMessage={setShowMessage}
              setShowNoResults={setShowNoResults}
            ></SearchBar>
          </div>
        </div>
        <div className="row">
          <div className="col-8 m-auto">
            {isLoading && <Spinner></Spinner>}
            {(!!isLoading || movies) && (
              <>
                {showMessage && <h3 className="mb-5">Ahora en cines</h3>}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex justify-content-evenly">
                  {movies && movies.map((movie, index) => (
                    <MovieCard className="col" movie={movie} key={index}></MovieCard>
                  ))}
                </div>
              </>
            )}
            {showNoResults && <p className="h2 text-info">No hay resultados para su busqueda</p>}
          </div>
        </div>
      </div>
    </>
  );
};

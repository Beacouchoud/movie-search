import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { MovieCard } from "../components/movieCard";
import { SearchBar } from "../components/searchBar";
import { Spinner } from "../components/spinner";

export const SearchPage = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState();
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
            <SearchBar 
                setSearchTerm={setSearchTerm} 
                searchTerm={searchTerm} 
                setIsLoading={setIsLoading} 
                setMovies={setMovies}>       
            </SearchBar>
          </div>
          <div className="col-2 m-auto">
            <select class="form-select form-select-lg" defaultValue={0} aria-label=".form-select-lg example">
              <option value="0">Todos los géneros</option>
              <option value="1">Romantica</option>
              <option value="2">Drama</option>
              <option value="3">Comedia</option>
            </select>
          </div>
        </div>
        <div className="row">
            <div className="col-8 m-auto">
            {isLoading && <Spinner></Spinner>}
            {movies && (
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex justify-content-evenly">
              {movies.map((movie, index) => (
                <MovieCard class="col" movie={movie}></MovieCard>
              ))}
            </div>
          )}
            </div>
        </div>
      </div>
    </>
  );
};

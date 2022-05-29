import React from "react";
import { BASE_SEARCH_MOVIE_URL } from "../services/utils";

export const SearchBar = ({ setSearchTerm, searchTerm, setIsLoading, setMovies }) => {
  const searchMovies = () => {
    setIsLoading(true);
    fetch(BASE_SEARCH_MOVIE_URL + searchTerm)
      .then((response) => response.json())
      .then((movies) => {
        console.log(movies.results);
        setMovies(movies.results);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
    searchMovies();
  };

  return (
    <form class="d-flex" onSubmit={handleForm}>
      <input
        class="form-control form-control-lg"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(ev) => setSearchTerm(ev.target.value)}
      />
      <button class="btn btn-outline-info" type="button" onClick={searchMovies}>
        Buscar
      </button>
    </form>
  );
};

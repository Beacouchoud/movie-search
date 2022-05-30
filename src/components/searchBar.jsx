import React, { useEffect, useState } from "react";
import { BASE_SEARCH_MOVIE_URL, LATEST_MOVIES_URL } from "../services/utils";
import { GenreSelector } from "./genreSelector";
import "../static/styles/forms.css";

export const SearchBar = ({ setSearchTerm, searchTerm, setIsLoading, setMovies, setShowMessage }) => {
  const [genre, setGenre] = useState(0);

  const searchMovies = async () => {
    setIsLoading(true);
    let moviesList = [];
    let response;
    if (searchTerm === "") {
      let page = 0;
      let totalPages;
      do {
        page++;
        response = await fetch(LATEST_MOVIES_URL + "&page=" + page);
        const moviesResult = await response.json();
        totalPages = moviesResult.total_pages;
        if (genre === 0 || genre === "0") {
          moviesList.push(...moviesResult.results);
        } else {
          console.log(moviesResult.results.filter((movie) => movie.genre_ids.includes(+genre)));
          moviesList.push(...moviesResult.results.filter((movie) => movie.genre_ids.includes(+genre)));
        }
      } while (page < totalPages);
    } else {
      let page = 1;
      while (moviesList?.length < 20) {
        if (page > 25) break;
        response = await fetch(BASE_SEARCH_MOVIE_URL + searchTerm + "&page=" + page);
        const moviesResult = await response.json();

        if (+genre === 0) moviesList.push(...moviesResult.results);
        else moviesList.push(...moviesResult.results.filter((movie) => movie.genre_ids.includes(+genre)));
        page++;
      }
    }

    setMovies(moviesList);
    setIsLoading(false);
    setShowMessage(false);
  };
  const handleForm = (ev) => {
    ev.preventDefault();
    searchMovies();
  };

  useEffect(() => {
    console.log(genre);
    searchMovies();
  }, [genre]);

  return (
    <form className="d-flex" onSubmit={handleForm}>
      <div className="input-group">
        <span>
          <GenreSelector setGenre={setGenre} className="flex-shrink-1 flex-grow-0 "></GenreSelector>
        </span>
        <input
          className="form-control form-control-lg flex-grow-1"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <span>
          <button className="btn btn-outline-info btn-lg" type="button" onClick={searchMovies}>
            Buscar
          </button>
        </span>
      </div>
    </form>
  );
};

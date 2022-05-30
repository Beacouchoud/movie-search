import React, { useEffect, useState } from "react";
import { BASE_SEARCH_MOVIE_URL, LATEST_MOVIES_URL, POPULAR_MOVIES_URL } from "../services/utils";
import { GenreSelector } from "./genreSelector";
import "../static/styles/forms.css";
import { SearchTypeSelector } from "./searchTypeSelector";

export const SearchBar = ({ setSearchTerm, searchTerm, setIsLoading, setMovies, setShowMessage }) => {
  const [genre, setGenre] = useState(0);
  const [searchType, setSearchType] = useState("1");

  const searchMovies = async () => {
    console.log("by  title");
    setIsLoading(true);
    let moviesList = [];
    let response;
    let page = 0;
    let totalPages = 0;
    if (searchTerm === "") {
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
      } while (page <= totalPages);
    } else {
      let page = 1;
      do {
        if (page > 25) break;
        response = await fetch(BASE_SEARCH_MOVIE_URL + searchTerm + "&page=" + page);
        const moviesResult = await response.json();
        totalPages = moviesResult.total_pages;
        if (+genre === 0) moviesList.push(...moviesResult.results);
        else moviesList.push(...moviesResult.results.filter((movie) => movie.genre_ids.includes(+genre)));
        page++;
      } while (page <= totalPages);
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
    handleSearch();
  }, [genre, searchType]);

  const searchMoviesByOriginalTitle = async () => {
    console.log("by original title");
    setIsLoading(true);
    let moviesList = [];
    let response;
    let page = 0;
    let totalPages = 0;
    if (searchTerm === "") {
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
      } while (page <= totalPages);
    } else {
      let page = 1;
      do {
        if (page > 25) break;
        response = await fetch(BASE_SEARCH_MOVIE_URL + searchTerm + "&page=" + page);
        const moviesResult = await response.json();
        totalPages = moviesResult.total_pages;
        if (+genre === 0) moviesList.push(...moviesResult.results.filter((movie) => movie.adult === false));
        else
          moviesList.push(
            ...moviesResult.results.filter(
              (movie) => movie.genre_ids.includes(+genre) && movie.original_title.includes(searchTerm) && movie.adult === false
            )
          );
        page++;
      } while (page <= totalPages);
    }
    setMovies(moviesList);
    setIsLoading(false);
    setShowMessage(false);
  };

  const searchMoviesByOverview = async () => {
    console.log("by  overview");
    setIsLoading(true);
    let moviesList = [];
    let response;
    let page = 0;
    let totalPages = 0;
    if (searchTerm === "") {
      do {
        page++;
        response = await fetch(LATEST_MOVIES_URL + "&page=" + page);
        const moviesResult = await response.json();
        totalPages = moviesResult.total_pages;
        if (genre === 0 || genre === "0") {
          moviesList.push(...moviesResult.results);
        } else {
          console.log(moviesResult.results.filter((movie) => movie.genre_ids.includes(+genre) && movie.adult === false));
          moviesList.push(...moviesResult.results.filter((movie) => movie.genre_ids.includes(+genre) && movie.adult === false));
        }
      } while (page <= totalPages);
    } else {
      let page = 1;
      do {
        response = await fetch(POPULAR_MOVIES_URL + "&page=" + page);
        const moviesResult = await response.json();
        totalPages = moviesResult.total_pages;
        if (+genre === 0)
          moviesList.push(...moviesResult.results.filter((movie) => movie.overview.includes(searchTerm) && movie.adult === false));
        else
          moviesList.push(
            ...moviesResult.results.filter(
              (movie) => movie.genre_ids.includes(+genre) && movie.overview.includes(searchTerm) && movie.adult === false
            )
          );
        page++;
      } while (page <= 100);
    }
    setMovies(moviesList);
    setIsLoading(false);
    setShowMessage(false);
  };

  const handleSearch = () => {
    console.log(searchType);
    searchType === "1" ? searchMovies() : searchType === "2" ? searchMoviesByOriginalTitle() : searchMoviesByOverview();
  };

  return (
    <form className="d-flex" onSubmit={handleForm}>
      <div className="input-group">
        <span>
          <GenreSelector setGenre={setGenre} className="flex-shrink-1 flex-grow-0 "></GenreSelector>
        </span>
        <span>
          <SearchTypeSelector setSearchType={setSearchType} className="flex-shrink-1 flex-grow-0 "></SearchTypeSelector>
        </span>
        <input
          className="form-control form-control-lg flex-grow-1"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <span>
          <button className="btn btn-outline-info btn-lg" type="button" onClick={handleSearch}>
            Buscar
          </button>
        </span>
      </div>
    </form>
  );
};

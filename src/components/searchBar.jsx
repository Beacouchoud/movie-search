import React, { useEffect, useState } from "react";
import {
  BASE_SEARCH_MOVIE_URL,
  BASE_SEARCH_SERIE_URL,
  LATEST_MOVIES_URL,
  LATEST_SERIES_URL,
  POPULAR_MOVIES_URL,
  POPULAR_SERIES_URL,
} from "../services/utils";
import { GenreSelector } from "./genreSelector";
import "../static/styles/forms.css";
import { SearchTypeSelector } from "./searchTypeSelector";

export const SearchBar = ({ setSearchTerm, searchTerm, setIsLoading, setMovies, setShowMessage, searchSeries }) => {
  const [genre, setGenre] = useState(0);
  const [searchType, setSearchType] = useState("1");
  let page = 0;
  let response;
  let moviesList = [];
  let totalPages = 0;

  const getLatestMovies = async () => {
    let LATEST_URL = searchSeries ? LATEST_SERIES_URL : LATEST_MOVIES_URL;
    do {
      page++;
      response = await fetch(LATEST_URL + "&page=" + page);
      const moviesResult = await response.json();
      totalPages = moviesResult.total_pages;
      if (+genre === 0) {
        moviesList.push(...moviesResult.results.filter((movie) => (!!movie.adult ? movie.adult === false : movie)));
      } else {
        moviesList.push(...moviesResult.results.filter((movie) => movie.genre_ids.includes(+genre)));
      }
    } while (page <= totalPages);
    setMovies(moviesList);
    setShowMessage(true);
  };

  const getMoviesWithSearchterm = async () => {
    if (searchType === "1" || searchType === "2") {
      let SEARCH_URL = searchSeries ? BASE_SEARCH_SERIE_URL : BASE_SEARCH_MOVIE_URL;
      do {
        page++;
        if (page > 25) break;

        response = await fetch(SEARCH_URL + searchTerm + "&page=" + page);
        const moviesResult = await response.json();
        totalPages = moviesResult.total_pages;
        if (+genre === 0) moviesList.push(...moviesResult.results.filter((movie) => (!!movie.adult ? movie.adult === false : movie)));
        else {
          if (searchType === "1") moviesList.push(...moviesResult.results.filter((movie) => movie?.genre_ids.includes(+genre)));
          else if (searchType === "2")
            moviesList.push(
              ...moviesResult.results.filter((movie) =>
                movie.genre_ids.includes(+genre) && movie.original_title.includes(searchTerm) && !!movie.adult
                  ? movie.adult === false
                  : movie
              )
            );
        }
      } while (page <= totalPages);
    } else {
      let POPULAR_URL = searchSeries ? POPULAR_SERIES_URL : POPULAR_MOVIES_URL;
      do {
        page++;
        response = await fetch(POPULAR_URL + "&page=" + page);
        const moviesResult = await response.json();
        totalPages = moviesResult.total_pages;
        if (+genre === 0)
          moviesList.push(
            ...moviesResult.results.filter((movie) =>
              movie.overview.includes(searchTerm) && !!movie.adult ? movie.adult === false : movie
            )
          );
        else
          moviesList.push(
            ...moviesResult.results.filter((movie) =>
              movie.genre_ids.includes(+genre) && movie.overview.includes(searchTerm) && !!movie.adult ? movie.adult === false : movie
            )
          );
      } while (page <= 100);
    }
    setMovies(moviesList);
    setShowMessage(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
  }, [genre, searchType, searchSeries]);

  const handleSearch = () => {
    setIsLoading(true);
    setMovies(null);
    searchType === "1" ? searchMovies() : searchType === "2" ? searchMoviesByOriginalTitle() : searchMoviesByOverview();
  };

  const handleReset = () => {
    setSearchTerm("");
    setSearchType("1");
    setGenre("0");
  };

  const searchMovies = async () => {
    searchTerm === "" ? await getLatestMovies() : await getMoviesWithSearchterm();
    setIsLoading(false);
  };

  const searchMoviesByOriginalTitle = async () => {
    searchTerm === "" ? await getLatestMovies() : await getMoviesWithSearchterm();

    setIsLoading(false);
  };

  const searchMoviesByOverview = async () => {
    searchTerm === "" ? await getLatestMovies() : await getMoviesWithSearchterm();
    setIsLoading(false);
  };

  return (
    <form className="d-flex" onSubmit={handleForm}>
      <div className="input-group">
        <span>
          <GenreSelector
            setGenre={setGenre}
            genre={genre}
            searchSeries={searchSeries}
            className="flex-shrink-1 flex-grow-0 "
          ></GenreSelector>
        </span>
        <span>
          <SearchTypeSelector
            setSearchType={setSearchType}
            searchType={searchType}
            className="flex-shrink-1 flex-grow-0 "
          ></SearchTypeSelector>
        </span>
        <input
          className="form-control form-control-lg flex-grow-1"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <span>
          <button className="btn btn-outline-info btn-lg" type="button" onClick={handleSearch}>
            Buscar
          </button>
        </span>
        <span>
          <button className="btn btn-outline-info btn-lg" type="button" onClick={handleReset}>
            Limpiar
          </button>
        </span>
      </div>
    </form>
  );
};

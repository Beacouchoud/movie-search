import React, { useEffect, useRef, useState } from "react";
import { GET_GENRES_TV_URL, GET_GENRES_URL } from "../services/utils";
import "../static/styles/spinner.css";

export const GenreSelector = ({ setGenre, genre, searchSeries }) => {
  const [genres, setGenres] = useState();
  let URL = searchSeries ? GET_GENRES_TV_URL : GET_GENRES_URL;
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((genres) => {
        setGenres(genres);
      });
  }, [searchSeries]);

  return (
    <select
      onChange={(ev) => setGenre(ev.target.value)}
      className="form-select form-select-lg"
      value={genre}
      aria-label=".form-select-lg example"
    >
      <option value="0">Todos los géneros</option>
      {genres &&
        genres.genres.map((genre, index) => (
          <option value={genre.id} key={index}>
            {genre.name}
          </option>
        ))}
    </select>
  );
};

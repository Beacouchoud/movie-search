import React, { useEffect, useRef, useState } from "react";
import { GET_GENRES_URL } from "../services/utils";
import "../static/styles/spinner.css";

export const SearchTypeSelector = ({ setSearchType, searchType }) => {
  const searchTypes = [
    {
      id: "1",
      label: "Buscar por título",
    },
    { id: "2", label: "Buscar por título original" },
    { id: "3", label: "Buscar por sinopsis" },
  ];

  return (
    <select
      onChange={(ev) => setSearchType(ev.target.value)}
      className="form-select form-select-lg"
      value={searchType}
      aria-label=".form-select-lg example"
    >
      {searchTypes &&
        searchTypes.map((type, index) => (
          <option value={type.id} key={index}>
            {type.label}
          </option>
        ))}
    </select>
  );
};

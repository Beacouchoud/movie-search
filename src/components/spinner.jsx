import React from "react";
import "../static/styles/spinner.css";

export const Spinner = ({}) => {
  return (
    <div className="col-12 d-flex justify-content-center loading-container">
      <div class="spinner-border text-info spinner-border big-spinner align-self-center" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

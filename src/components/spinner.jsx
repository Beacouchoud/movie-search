import React from "react";
import "../static/styles/spinner.css";

export const Spinner = ({}) => {
  return (
    <div className="col-12 d-flex justify-content-center loading-container">
      <div className="spinner-border text-info spinner-border big-spinner align-self-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

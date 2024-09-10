import React from "react";
import "../App.css";

function Button({ searchCity }) {
  return (
    <>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={searchCity}
      >
        Buscar
      </button>
    </>
  );
}

export default Button;

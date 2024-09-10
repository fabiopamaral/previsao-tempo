import React from "react";
import "../App.css";

function CityInput({ city, setCity }) {
  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="Digite o nome da cidade"
        aria-label="Digite o nome da cidade"
        aria-describedby="button-addon2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </>
  );
}

export default CityInput;

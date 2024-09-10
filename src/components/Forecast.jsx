import React from "react";
import "./styles/Forecast.css";

function Forecast({ forecast }) {
  const getDayOfWeek = (dt) => {
    const date = new Date(dt * 1000);
    const daysOfWeek = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    return daysOfWeek[date.getDay()]; // Obter o dia da semana
  };

  return (
    <div className="weather-container">
      <h3>Previsão para os próximos dias</h3>
      <div className="forecast-wrapper">
        {forecast.map((forecast) => (
          <div key={forecast.dt} className="forecast-container">
            <h4>{getDayOfWeek(forecast.dt)}</h4>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
            />
            <p>{forecast.weather[0].description}</p>
            <p>
              Máx: {Math.floor(forecast.main.temp_min)}ºC / Min:{" "}
              {Math.floor(forecast.main.temp_max)} ºC
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;

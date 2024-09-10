import React from "react";
import "./styles/Weather.css";

function Weather({ weather }) {
  if (!weather || !weather.weather) {
    return null;
  }

  return (
    <div className="weather-container" key={weather.id}>
      <h2>{weather.name}</h2>
      <div className="main-weather">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
        <p>{Math.floor(weather.main.temp)} ºC</p>
      </div>
      <p className="weather-description">{weather.weather[0].description}</p>
      <div className="weather-secondary-container">
        <p>Sensação térmica: {Math.floor(weather.main.feels_like)} ºC</p>
        <p>Umidade: {weather.main.humidity} %</p>
        <p>Pressão: {weather.main.pressure} hPa</p>
      </div>
    </div>
  );
}

export default Weather;

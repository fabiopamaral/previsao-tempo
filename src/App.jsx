import "./App.css";
import axios from "axios";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import CityInput from "./components/CityInput";
import Button from "./components/Button";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const apiKey = "3a04c7315dde5a5a1c7ad16d80e55343";

  const searchCity = async () => {
    try {
      const api = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      setWeather(api.data);
      showForecast();
    } catch (error) {
      console.log("Erro ao buscar a cidade " + error);
    }
  };

  const showForecast = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const filteredForecast = response.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(filteredForecast.slice(0, 5));
    } catch (error) {
      console.log("Erro ao exibir a previsão: " + error);
    }
  };

  return (
    <div className=" container-fluid">
      <h1>Previsão do Tempo</h1>
      <div className="buttonGroup input-group mb-3">
        <CityInput city={city} setCity={setCity} />
        <Button searchCity={searchCity} />
      </div>
      {weather && <Weather weather={weather} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;

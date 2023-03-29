import axios from "axios";
import React, { useEffect, useState } from "react";
import { WEATHER_API_URL } from "../../constants/weatherApiUrl";

const Weather = () => {
  const [weatherObject, setWeatherObject] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const response = await axios.get(WEATHER_API_URL);
      setWeatherObject(response.data);
    }

    getWeather();
  }, []);

  let weatherIconUrl = `https://openweathermap.org/img/w/${weatherObject?.weather[0].icon}.png`;

  const convertToCelsius = () => {
    return Math.ceil(weatherObject.main.temp - 273.15);
  };

  return weatherObject ? (
    <div className="weather-component me-5">
      <img src={weatherIconUrl} alt="weather icon" />
      {convertToCelsius()} °
    </div>
  ) : (
    ""
  );
};

export default Weather;

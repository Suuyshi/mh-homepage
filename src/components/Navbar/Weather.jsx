import React, { useEffect, useState } from "react";
import { getWeather } from "../../services/weatherService";

const Weather = () => {
  const [weatherObject, setWeatherObject] = useState({});
  const [weatherIcon, setWeatherIcon] = useState();

  // const fetchWeather = () => {
  //     getWeather()
  //       .then((response) => {
  //         setWeatherObject(response);
  //         if (response) {
  //           const iconCode = response.weather[0].icon;
  //           setWeatherIcon(
  //             "http://openweathermap.org/img/w/" + iconCode + ".png"
  //           );
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   useEffect(() => {
  //     fetchWeather();

  //     // setWeatherIcon(weatherObject.weather[0].icon);
  //   }, []);

  return (
    <div className="weather-component">
      <img src={weatherIcon} alt="weather icon" />
    </div>
  );
};

export default Weather;

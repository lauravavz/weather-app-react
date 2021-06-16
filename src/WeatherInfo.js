import React, { useState } from "react";
import axios from "axios";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function search() {
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9b707c9a800bc82a565bfc394bcf972&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  function handleResponse(response) {
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    icon: response.data.weather[0].icon,
  });
}

if(weatherData.ready) {
return (
  <div className="Temperature">
    <form id="search-form" onSubmit={handleSubmit}>
            <input type="search" placeholder=" 🔍 Search city" id="city-input" autoComplete="off" onChange={handleCityChange}/>
            <input type="submit" id="search-button" value="Search" />
        </form>

   <h3 id="date"><FormattedDate date={weatherData.date} /></h3>
    <h1 id="current-city">{weatherData.city}</h1>
    <WeatherTemperature celsius={weatherData.temperature}/>
    <h3 id="weather-condition" className="text-capitalize">{weatherData.description}
    </h3>
    <div className="main-icon">
    <WeatherIcon code={weatherData.icon} />
    </div>
    <Forecast coordinates={weatherData.coordinates} icon={weatherData.icon}/>
  </div>
  
  );
}
else {
  search();
  return "Loading"
}
}
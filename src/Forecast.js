import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

if (loaded) {
  return (
    <div className="row">
      {forecast.map(function (dailyForecast, index) {
        if (index < 5)
      return (
      <div className="col-sm" key={index}>
       <WeatherForecastDay data={dailyForecast}/>
      </div>
  );
  })}
  </div>
  );
}
   else {
     
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
   let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=c9b707c9a800bc82a565bfc394bcf972&units=metric`;
   axios.get(apiUrl).then(handleResponse);

   return null;
   }

}
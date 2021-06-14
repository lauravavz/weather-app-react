import React from "react";
import Forecast from "./Forecast";

export default function WeatherForecastDay(props) {
function maxTemperature() {
let temperature = Math.round(props.data.temp.max);
return `${temperature}°`;
}

function minTemperature() {
let temperature = Math.round(props.data.temp.min);
return `${temperature}°`;
}

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
return days[day];
}


    return (
        <div>
       <img src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`} className="forecast-icon" alt="weather icon"/>
        <div className="col">
          {maxTemperature()}/ {minTemperature()}</div>
          <div className="col">{day()}
          </div>
          </div>
    );
}
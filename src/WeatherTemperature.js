import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
   
        return(
        <div className="WeatherTemperature">
            <h2 id="temperature">
                {Math.round(props.celsius)}°C 
            </h2>
        </div>);
    }
    
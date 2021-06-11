import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius')
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === 'celsius') {
        return(
        <div className="WeatherTemperature">
            <h2 id="temperature">{Math.round(props.celsius)}<span className="units">°C | <a href="/" onClick={showFahrenheit} className="fahrenheit">°F</a></span></h2>
        </div>);
    }
    else {
        let fahrenheit = (props.celsius * 9)/5 + 32;
        return (
            <div className="WeatherTemperature">
            <h2 id="temperature">{Math.round(fahrenheit)}<span className="units"><a href="/" onClick={showCelsius} className="celsius">°C</a> | °F</span></h2>
        </div>);
        
    }

}
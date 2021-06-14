import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
function handleResponse(response) {
  console.log(response.data);
}

  let longitude = props.coordinate.lon;
  let latitude = props.coordinates.lat;
   let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=c9b707c9a800bc82a565bfc394bcf972&unitis=metric`;
   axios.get(apiUrl).then(handleResponse);
return (
    <div className="row">
      <div className="col-sm">
        <i className="fas fa-sun"></i>
        <div className="col">
          12°/15°
          <div className="col">Mon</div>
        </div>
      </div>
      <div className="col-sm">
        <i className="fas fa-cloud-showers-heavy"></i>
        <div className="col">
          10°/14°
          <div className="col">Tues</div>
        </div>
      </div>
      <div className="col-sm">
        <i className="fas fa-sun"></i>
        <div class="col">
          12°/14°
          <div className="col">Wed</div>
        </div>
      </div>
      <div className="col-sm">
        <i className="fas fa-cloud-sun"></i>
        <div className="col">
          11°/15°
          <div className="col">Thu</div>
        </div>
      </div>
      <div className="col-sm">
        <i className="fas fa-cloud-sun"></i>
        <div className="col">
          12°/16°
          <div className="col">Fri</div>
        </div>
      </div>
    </div>
  );
}
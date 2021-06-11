import React from "react";
import "./Forecast.css";

export default function Forecast() {
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
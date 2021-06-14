import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import './App.css';

export default function App() {
  return (
    <div className="container">
    <div className="App">
      <WeatherInfo defaultCity="Miami"/>
      
      <Footer />
    </div>
    </div>
    
  );
}
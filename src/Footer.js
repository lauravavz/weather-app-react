
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="footer-text">
      This project was coded by Laura Vavasseur and is{" "}
      <a href="https://github.com/lauravavz/weather-app-react" target="_blank" rel="noopener noreferrer">
        open sourced on GitHub
      </a>{" "}
      and hosted on Netlify
    </p>
  );
}
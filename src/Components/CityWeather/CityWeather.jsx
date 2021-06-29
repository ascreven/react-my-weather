import React from 'react';
import { Link } from 'react-router-dom';

import './city-weather.css';

function CityWeather({ city }) {

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-auto">
          <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png` }className="img-fluid rounded-start" alt="weather icon" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="city-weather__title">{city.name}</h5>
            <p className="card-text">
              <small className="text-muted">Last updated: {city.dt}</small>
            </p>
            <ul className="city-weather__list">
              <li>Current Weather: {city.main.temp}</li>
              <li>High: {city.main.temp_max}</li>
              <li>Low: {city.main.temp_min}</li>
              <li>Humidity: {city.main.humidity}</li>
            </ul>
            <Link className="btn btn-primary" to={`/${city.id}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityWeather;

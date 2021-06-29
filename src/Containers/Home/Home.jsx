import React from 'react';
import { connect } from 'react-redux';
import CityWeather from '../../Components/CityWeather/CityWeather';

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

function Home({ cities }) {
  return (
    <div className="row">
      {cities.map((city, index) => (
        <div className="col-4" key={`city-${index}`}>
          <CityWeather city={city} />
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Home);

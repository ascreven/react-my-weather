import React from 'react';
import { Link } from 'react-router-dom';
import AddCityForm from './AddCityForm/AddCityForm';

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Weather
        </Link>
        <AddCityForm />
      </div>
    </nav>
  );
}

export default Header;

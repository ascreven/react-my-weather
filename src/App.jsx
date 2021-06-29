import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CityDetails from './Containers/CityDetails/CityDetails';
import Home from './Containers/Home/Home';
import Header from './Components/Header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container py-4">
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={CityDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;

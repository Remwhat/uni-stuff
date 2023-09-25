import React from 'react';
import { HotelsView } from './hotelsview';

import { HotelDetails } from './hoteldetails';

import { Navbar } from './navbar.jsx';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/hotelsview/:searchNow?" component={HotelsView}></Route>
        <Route path="/hoteldetails/:hotelID?" element={HotelDetails}></Route>
        <Redirect to="/hotelsview/all"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
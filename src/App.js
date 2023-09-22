import React from 'react';
import { HotelsView } from './hotelsview';
import { Navbar } from './navbar.jsx';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/hotelsview/:searchNow?" component={HotelsView}></Route>

        <Redirect to="/hotelsview/all"></Redirect>
      </Router>
    </div>
  );
}

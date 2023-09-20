import React from 'react';
import { HotelsView } from './hotelsview';
import { Navbar } from './navbar.jsx';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <HotelsView></HotelsView>
      <Navbar />
    </div>
  );
}

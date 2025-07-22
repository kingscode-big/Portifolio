 import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Menu from './Menu';
import Appointment from './Appointment';

export default function Header() {
  return (
    <>
      <section>
        <div className="App-header-container">

          {/* Header Title and Hamburger Menu */}
          <div className="App-tiltle-title">
            <h1 className="App-header-title">K .Nnamdi</h1>
            <Menu />
          </div>

          {/* Navigation Links */}
          <div className="App-link-container">
            <ul className="App-ul">
              <li className="App-links">
                <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
              </li>
              <li className="App-links">
                <Link to="/aboupage" style={{ textDecoration: 'none' }}>About</Link>
              </li>
              <li className="App-links">
                <Link to="/projectspage" style={{ textDecoration: 'none' }}>Projects</Link>
              </li>
              <li className="App-links">
                <Link to="/servicepage" style={{ textDecoration: 'none' }}>Services</Link>
              </li>
              <li className="App-links">
                <Link to="/contactpage" style={{ textDecoration: 'none' }}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Appointment Modal Trigger */}
          <Appointment />

        </div>
      </section>
    </>
  );
}

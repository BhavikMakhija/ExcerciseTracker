import React, { Component } from 'react';
import { Link, useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import './navbar.css'

/* 
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
        <Link to="/" className="navbar-link" >Exercises</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create"  className="navbar-link" >Create Exercise Log</Link>
        </li>
        <li className="navbar-item">
        <Link to="/user"  className="navbar-link" >Create User</Link>
        </li>
        </ul>
        </div>
      </nav>
    */

export default class Navbar extends Component {
  

  render() {
    return (
      <nav className="navbar">
      <div className="container">
        <div className="nav-logo">
        <NavLink to="/" className="navbar-brand">Bhavik's Tracker</NavLink>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Exercises</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create Exercise Log</NavLink>
            </li>
            <li>
              <NavLink to="/user">Create User</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    );
  }
}


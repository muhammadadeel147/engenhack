import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <h1 className="navbar-title">Mental Health</h1>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/articles">Articles</Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

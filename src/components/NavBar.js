import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        <Link to="/home" className="nav-link">Home</Link>
    </li>
    <li className="nav-item">
        <Link to="/about-us" className="nav-link">About Us</Link>
    </li>
    <li className="nav-item">
        <Link to="/profile" className="nav-link">Profile</Link>
    </li>
    </ul>

    </nav>
  );
};

export default NavBar;

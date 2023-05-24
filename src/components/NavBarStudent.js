import React from 'react';
import { Link } from 'react-router-dom';
import MAGIC from './img/MagicMindsIcon.png';
import Translate from './Translate';

const NavBarStudent = () => {
    return (

      <nav className="navbarstudent">
      <div className="navbar-icon">
      <img src={MAGIC} alt="Icon" />
      </div>
      <ul className="navbar-nav mr-auto">
      <Translate/>
      <li className="nav-item">
          <Link to="/student" className="nav-link">Dashboard</Link>
      </li>
      <li className="nav-item">
          <Link to="/about-us-student" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
          <Link to="/faq-student" className="nav-link">FAQ</Link>
      </li>
      <li className="nav-item">
        <Link to="/home" className="nav-link">Switch View</Link>
    </li>
      </ul>
  
      </nav>
    );
  };
  
  export default NavBarStudent;
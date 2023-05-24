import React from 'react';
import { Link } from 'react-router-dom';
import MAGIC from './img/MagicMindsIcon.png';
import Translate from './Translate';

const NavBarLanding = () => {
    return (

      <nav className="navbarlanding">
      <div className="navbar-icon">
      <img src={MAGIC} alt="Icon" />
      </div>
      <Translate/>

      </nav>
    );
  };
  
  export default NavBarLanding;
import React from 'react';
import { Link } from 'react-router-dom';
import MAGIC from './img/MagicMindsIcon.png';
import Translate from './Translate';

const NavBarSpanish = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <img src={MAGIC} alt="Logotipo de Mentes Magicas" />
      </div>
    <ul className="navbar-nav mr-auto">
      <Translate/>
    <li className="nav-item">
        <Link to="/home" className="nav-link">Tablero</Link>
    </li>
    <li className="nav-item">
        <Link to="/about-us" className="nav-link">Sobre Nosotros</Link>
    </li>
    <li className="nav-item">
        <Link to="/faq" className="nav-link">Preguntas Frecuentes</Link>
    </li>
    <li className="nav-item">
        <Link to="/student" className="nav-link">Cambiar Vista</Link>
    </li>
    </ul>

    </nav>
  );
};

export default NavBarSpanish;
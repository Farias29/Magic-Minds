import React from 'react';
import { Link } from 'react-router-dom';


const Cards = ({ title, link, image }) => {
  return (
    <div className="card-container">
      <Link to={link}>
        <h1 className="card-title">{title}</h1>
        <div className="card" style={{ backgroundImage: `url(${image})`, backgroundSize:"contain"}}>
          <div className="card-body">
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;

import React from 'react';
import { Link } from 'react-router-dom';


const Cards = ({ title, description, link, image }) => {
  return (
    <div className="card-container">
      <Link to={link}>
        <div className="card" style={{ backgroundImage: `url(${image})`, backgroundSize:"contain"}}>
          <div className="card-body">
            <h1 className="card-title">{title}</h1>
            <h3 className="card-text">{description}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;

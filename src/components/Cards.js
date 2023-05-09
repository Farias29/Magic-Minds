import React from 'react';
import { Link } from 'react-router-dom';


const Cards = ({ title, description, link }) => {
  return (
    <div className="card-container">
      <Link to={link}>
        <div className="card">
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

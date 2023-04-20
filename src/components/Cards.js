import React from 'react';
import { Link } from 'react-router-dom';


const Cards = ({ title, description, link }) => {
  return (
    <div className="card-container">
      <Link to={link}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;

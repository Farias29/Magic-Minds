import React from 'react';

const ResourceCards = ({ title, image, link }) => {
    return (
      <div className="card-container">
         <a href={link}>
          <h1 className="card-title">{title}</h1>
          <div className="card" style={{ backgroundImage: `url(${image})`, backgroundSize:"contain"}}>
            <div className="card-body">
            </div>
          </div>
        </a>
      </div>
    );
  };

export default ResourceCards;

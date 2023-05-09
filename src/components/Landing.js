import React from 'react';
import Cards from './Cards';

function Landing() {
  return (
    <div>
      <h1>Welcome to Youth Education Initiative!</h1>
      <h2>Select your view</h2>
      <div className='card-container-landing'>
      <Cards 
        link ="/student"
        title="Student"
        description="Click if you are a student"
        />
      <Cards
        link="/home" 
        title="Parent"
        description="Click if you are a parent"/>   
      </div>
    </div>
  );
}

export default Landing;
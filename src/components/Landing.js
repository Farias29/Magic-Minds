import React from 'react';
import Cards from './Cards';
import STUDENT from './img/STUDENT.jpg';
import PARENT from './img/PARENT.png';

function Landing() {
  return (
    <div>
      <h1 className='eng'>Welcome to Magic Minds </h1>
      <h1 className='es'>Bienvenidos a Mentes Mágicas</h1>
      <h2>Select your view</h2>
      <div className='card-container-landing'>
      <Cards 
        link ="/student"
        title="Student"
        image={STUDENT}
        />
      <Cards
        link="/home" 
        title="Parent"
        image={PARENT}/> 
      </div>
    </div>
  );
}

export default Landing;
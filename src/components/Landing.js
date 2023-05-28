import React from 'react';
import Cards from './Cards';
import STUDENT from './img/STUDENT.jpg';
import PARENT from './img/PARENT.png';
import NavBarLanding from './NavBarLanding';

function Landing() {
  return (
    <div>
      <div className='en'>
      <NavBarLanding/>
      <h1>Welcome to Magic Minds</h1>
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

     <div className='es'>
      <NavBarLanding/>
      <h1>Bienvinido a Mentes Mágicas</h1>
      <h2>Seleccione su vista</h2>
      <div className='card-container-landing'>
      <Cards
        link ="/student"
        title="Estudiante"
        image={STUDENT}
        />
      <Cards
        link="/home" 
        title="Padres"
        image={PARENT}/> 
      </div>  
     </div>
    </div>
  );
}

export default Landing;
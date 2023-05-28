import React from 'react';
import Cards from './Cards';
import NavBar from './NavBar';
import TUTORING from './img/TUTORING.png';
import SUPPLIES from './img/SUPPLIES.jpg';
import DEVICES from './img/DEVICES.jpg';
import NavBarSpanish from './NavBarSpanish';

function Home() {
  return (
    <div className="home">
      <div className='en'>
      <NavBar/>
      <h1>Parent View</h1>
      <Cards 
        title="Tutoring Services"
        image={TUTORING}
        link="/tutoringservices"/>
      <Cards 
        title="School Supplies"
        image={SUPPLIES}
        link="/schoolsupplies"/>
      <Cards 
        title="Affordable Devices"
        image={DEVICES}
        link="/affordabledevices"/>
    </div>

    <div className='es'>
      <NavBarSpanish/>
      <h1>Vista del Padre</h1>
      <Cards 
        title="Servicios de Tutoría"
        image={TUTORING}
        link="/tutoringservices"/>
      <Cards 
        title="Materiales Escolares"
        image={SUPPLIES}
        link="/affordabledevices"/>
      <Cards 
        title="Tecnología Accesible"
        image={DEVICES}
        link="/affordabledevices"/>
    </div>
    </div>
  );
}

export default Home;

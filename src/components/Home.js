import React from 'react';
import Cards from './Cards';
import NavBar from './NavBar';
import TUTORING from './img/TUTORING.png';
import SUPPLIES from './img/SUPPLIES.jpg';
import DEVICES from './img/DEVICES.jpg';
import LanguageSelector from './LanguageSelector';

function Home() {
  return (
    <div className="home">
      <NavBar/>
      <h1>Parent View</h1>
      <Cards 
        title="Tutoring Services"
        image={TUTORING}/>
      <Cards 
        title="School Supplies"
        image={SUPPLIES}/>
      <Cards 
        title="Affordable Devices"
        image={DEVICES}/>
    </div>
  );
}

export default Home;

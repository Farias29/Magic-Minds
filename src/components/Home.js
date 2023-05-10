import React from 'react';
import Cards from './Cards';
import NavBar from './NavBar';
import LanguageSelector from './LanguageSelector';

function Home() {
  return (
    <div className="home">
      <NavBar/>
      <h1>Parent View</h1>
      <Cards 
        title="Tutoring services"
        description="This is the description for Resource 1"/>
      <Cards 
        title="School supplies"
        description="This is the description for Resource 1"/>
      <Cards 
        title="Online resources"
        description="This is the description for Resource 1"/>
      <Cards 
        title="Educational Games"
        description="This is the description for Resource 1"/>
      <Cards 
        title="FAQ"
        description="This is the description for Resource 1"/>
    </div>
  );
}

export default Home;

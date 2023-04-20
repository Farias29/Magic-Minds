import React from 'react';
import Cards from './Cards';

function Home() {
  return (
    <div className="home">
      <h1>Education for all!</h1>
      <p>Check out these resources!</p>
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

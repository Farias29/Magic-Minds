import React from 'react';
import Cards from './Cards';
import NavBarStudent from './NavBarStudent';

function Student() {
  return (
    <div className="student">
    <NavBarStudent/>
      <h1>Education for all!</h1>
      <Cards 
        title="Art"
        description="This is the description for Resource 1"/>
      <Cards 
        title="History"
        description="This is the description for Resource 1"/>
      <Cards 
        title="Math"
        description="This is the description for Resource 1"/>
      <Cards 
        title="Reading"
        description="This is the description for Resource 1"/>
      <Cards 
        title="Science"
        description="This is the description for Resource 1"/>
      <Cards 
        title="Writing"
        description="This is the description for Resource 1"/>

    </div>
  );
}

export default Student;

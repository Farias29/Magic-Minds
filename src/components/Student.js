import React from 'react';
import Cards from './Cards';
import NavBarStudent from './NavBarStudent';
import Math from './Math';
import Writing from './Writing';
import MATH from './img/MATH.jpeg';
import ART from './img/ART.jpeg';
import READING from './img/READING.jpeg';
import SCIENCE from './img/SCIENCE.jpeg';
import SOCIAL from './img/SOCIAL-STUDIES.jpeg';
import WRITING from './img/WRITING.jpeg';





function Student() {
  return (
    <div className="student">
    <NavBarStudent/>
      <h1>Student View</h1>
      <Cards 
        title="Art"
        description="This is the description for Resource 1"
        image={ART}/>
      <Cards 
        title="Social Studies"
        description="This is the description for Resource 1"
        image={SOCIAL}/>
      <Cards 
        title="Math"
        description="This is the description for Resource 1"
        link="/math"
        image={MATH}/>
      <Cards 
        title="Reading"
        description="This is the description for Resource 1"
        image={READING}/>
      <Cards 
        title="Science"
        description="This is the description for Resource 1"
        image={SCIENCE}/>
      <Cards 
        title="Writing"
        description="This is the description for Resource 1"
        link="/writing"
        image={WRITING}/>
    </div>
  );
}

export default Student;

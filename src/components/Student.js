import React from 'react';
import Cards from './Cards';
import NavBarStudent from './NavBarStudent';
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
      <h1 className='en'>Student View</h1>
      <h1 className='es'>Vista del Estudiante</h1>
      <Cards 
        title="Art"
        link="/art"
        image={ART}/>

      <Cards 
        title="Social Studies"
        link="/socialstudies"
        image={SOCIAL}/>
      <Cards 
        title="Math"
        link="/math"
        image={MATH}/>
      <Cards 
        title="Reading"
        link="/reading"
        image={READING}/>
      <Cards 
        title="Science"
        link="/science"
        image={SCIENCE}/>
      <Cards 
        title="Writing"
        link="/writing"
        image={WRITING}/>
    </div>
  );
}

export default Student;

import React from 'react';
import Cards from './Cards';
import NavBarStudent from './NavBarStudent';
import NavBarStudentSpanish from './NavBarStudentSpanish';
import MATH from './img/MATH.jpeg';
import ART from './img/ART.jpeg';
import READING from './img/READING.jpeg';
import SCIENCE from './img/SCIENCE.jpeg';
import SOCIAL from './img/SOCIAL-STUDIES.jpeg';
import WRITING from './img/WRITING.jpeg';


function Student() {
  return (
    <div className="student">
    <div className='en'>
    <NavBarStudent/>
      <h1>Student View</h1>
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

        <div className='es'>
    <NavBarStudentSpanish/>
      <h1>Vista del estudiante</h1>
      <Cards 
        title="Arte"
        link="/art"
        image={ART}/>

      <Cards 
        title="Ciencias Sociales"
        link="/socialstudies"
        image={SOCIAL}/>
      <Cards 
        title="Matemática"
        link="/math"
        image={MATH}/>
      <Cards 
        title="Lectura"
        link="/reading"
        image={READING}/>
      <Cards 
        title="Ciencia"
        link="/science"
        image={SCIENCE}/>
      <Cards 
        title="Escritura"
        link="/writing"
        image={WRITING}/>
        </div>
    </div>
  );
}

export default Student;

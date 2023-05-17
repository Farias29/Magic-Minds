import React from 'react';
import NavBar from './NavBar';
import VIDEO from './img/VIDEO.mp4';



function AboutUs() {
  return (
    <div>
      <NavBar/>
      <h1>About Us</h1>

        <h2>
          UN SDG 4: Quality Education
        </h2>

        <p>
          Our goal is to address the fourth UN SDG of Quality Education by providing elementary students below the poverty line in 
          Washington State with free access to educational resources, such as books, technology, and learning materials. We aim to alleviate 
          the disadvantage faced by low-income families due to limited access to resources and funding, which can hinder academic performance 
          and upward socioeconomic mobility. Our solution seeks to promote equity in education and reduce inequalities across race, class, 
          and gender. We will measure the success of our solution through standardized test scores and student satisfaction surveys.
        </p>

        
        <div >
            <h2 ><cite><a
                href="https://www.youtube.com/watch?v=4HXyJmY--gM">Understand Goal 4: Quality Education</a></cite></h2>
            
            <video controls>
                <source src= {VIDEO} type="video/mp4" />
            </video>
        </div>
        
    </div>
  );
}

export default AboutUs;

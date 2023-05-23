import React from 'react';
import NavBar from './NavBar';
import VIDEO from './img/VIDEO.mp4';
import INFOGRAPHIC from './img/INFOGRPAHIC.png'


function AboutUs() {
  return (
    
    <div>
      <NavBar/>
      <h1>About Us</h1>

      <div>
        <div className='row'>
          <div className='column'>
            <h2>SDG 4: Quality Education</h2>
            <p>
              The goal of UN SDG 4 Quality Education is to ensure quality education for all individuals around the world. A quality education 
              is vital in fostering a peaceful and flourishing society. Education provides individuals with the knowledge and skills that allow 
              them to positively contribute to communities and drive change. SDG 4 also makes note of the socioeconomic implications that education 
              has. Quality education is a fundamental human right and is key in upward mobility and economic development. A global education 
              crisis was caused by the COVID-19 pandemic, leading to millions of children experiencing major disruptions to their education. 
              School closures and disruptions have had unequal effects on students, as “girls, children from disadvantaged backgrounds, those 
              living in rural areas, children with disabilities and children from ethnic minorities” have suffered more than their peers (un.org). 
              In a rapidly changing world, it is also important to address the digital divide in education. Unless the gap between the 
              “under-connected and highly digitalized countries” is addressed, inequalities in education will persist (un.org). By emphasizing 
              the importance of quality education and making strides of improvement, we can work towards breaking the cycle of poverty, minimize 
              inequalities, and cultivate a more inclusive society.
            </p>
          </div>
          <div className='column'>
          <h2><cite><a
                href="https://www.youtube.com/watch?v=4HXyJmY--gM">Understand Goal 4: Quality Education</a></cite></h2>
            
            <video controls width="75%">
                <source src= {VIDEO} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <h2><cite><a href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2022/07/Goal-4-infographic.pdf">INFOGRAPHIC: QUALITY EDUCATION</a></cite></h2>
            <img src={INFOGRAPHIC} alt="INFOGRAPHIC of quality education from the UN"/>
            
          </div>
          <div className='column'>
            <h2>Our Goal</h2>
            <p>
              Our goal is to address the fourth UN SDG of Quality Education by providing elementary students below the poverty line in 
              Washington State with free access to educational resources, such as books, technology, and learning materials. We aim to alleviate 
              the disadvantage faced by low-income families due to limited access to resources and funding, which can hinder academic performance 
              and upward socioeconomic mobility. Our solution seeks to promote equity in education and reduce inequalities across race, class, 
              and gender. 
            </p>
          </div>
        </div>
      </div>

        
    </div>
  );
}

export default AboutUs;

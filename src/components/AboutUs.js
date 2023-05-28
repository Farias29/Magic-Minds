import React from 'react';
import NavBar from './NavBar';
import NavBarSpanish from './NavBarSpanish';
import VIDEO from './img/VIDEO.mp4';
import INFOGRAPHIC from './img/INFOGRPAHIC.png'

function AboutUs() {
  return (
    <div>
      <div className='en'> 
        <NavBar/>
        <h1>About Us</h1>
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
                <source src= {VIDEO} type="video/mp4" alt="Video explaining UN SDG 4, Quality Education" />
            </video>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <h2><cite><a href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2022/07/Goal-4-infographic.pdf">INFOGRAPHIC: QUALITY EDUCATION</a></cite></h2>
            <img src={INFOGRAPHIC} alt="Infographic of quality education from the UN"/>
            
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

      <div className='es'> 
        <NavBarSpanish/>
        <h1>Sobre Nosotros</h1>
        <div className='row'>
          <div className='column'>
            <h2>ODS 4: Educación de Calidad</h2>
            <p>
              El objetivo del ODS 4 de la ONU, Educación de calidad, es garantizar una educación de calidad para todas las personas en todo el mundo.
              Una educación de calidad es vital para fomentar una sociedad pacífica y floreciente. La educación proporciona a las personas el
              conocimiento y las habilidades que les permiten contribuir positivamente a las comunidades e impulsar el cambio. El ODS 4 también toma
              nota de las implicaciones socioeconómicas que tiene la educación. La educación de calidad es un derecho humano fundamental y es clave
              para la movilidad ascendente y el desarrollo económico. La pandemia de COVID-19 provocó una crisis educativa mundial, que provocó que
              millones de niños experimentaran grandes interrupciones en su educación. El cierre de escuelas y las interrupciones han tenido efectos
              desiguales en los estudiantes, ya que "las niñas, los niños de entornos desfavorecidos, los que viven en zonas rurales, los niños con
              discapacidad y los niños de minorías étnicas" han sufrido más que sus compañeros (un.org). En un mundo que cambia rápidamente, también
              es importante abordar la brecha digital en la educación. A menos que se aborde la brecha entre los "países subconectados y altamente
              digitalizados", persistirán las desigualdades en la educación (un.org). Al enfatizar la importancia de una educación de calidad y
              avanzar hacia la mejora, podemos trabajar para romper el ciclo de la pobreza, minimizar las desigualdades y cultivar una sociedad más
              inclusiva.
            </p>
          </div>
          <div className='column'>
          <h2><cite><a
                href="https://www.youtube.com/watch?v=4HXyJmY--gM">Comprende el Objetivo 4: Educación de Calidad</a></cite></h2>
            
            <video controls width="75%">
                <source src= {VIDEO} type="video/mp4" alt= "Video sobre el ODS 4 de la ONU, Educación de Calidad"/>
            </video>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <h2><cite><a href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2022/07/Goal-4-infographic.pdf">Infografía: Educación de Calidad</a></cite></h2>
            <img src={INFOGRAPHIC} alt="Infografía de la ONU sobre la educación de calidad"/>
            
          </div>
          <div className='column'>
            <h2>Nuestro Objetivo</h2>
            <p>
            Nuestro objetivo es aborda el cuarto ODS de la ONU de Educación de Calidad al proporcionar a los estudiantes de primaria por debajo de la
            línea de pobreza en el estado de Washington acceso gratuito a recursos educativos, como libros, tecnología y materiales de aprendizaje.
            Nuestro objetivo es aliviar la desventaja que enfrentan las familias de bajos ingresos debido al acceso limitado a los recursos y la
            financiación, que puede obstaculizar el rendimiento académico y la movilidad socioeconómica ascendente. Nuestra solución busca promover
            la equidad en la educación y reducir las desigualdades entre razas, clases y géneros.
            </p>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default AboutUs;
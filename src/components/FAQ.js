import React from 'react';
import NavBar from './NavBar';
import NavBarSpanish from './NavBarSpanish';

function FAQ() {
  function toggleFunction() {
    var x = document.getElementById("answer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div>
      <div className='en'>
        <NavBar/>
        <h1>Frequently Asked Questions</h1>
        <p>We believe that addressing the educational inequities faced by students living in poverty is a critical issue. 
          By providing free access to educational resources, we can help level the playing field and improve academic outcomes for disadvantaged students. 
          Education is essential for breaking the cycle of poverty and increasing upward socioeconomic mobility. 
          Additionally, providing equitable education opportunities can help reduce inequalities across race, class, and gender. 
          Measuring outcomes through standardized test scores and student satisfaction surveys can help determine the effectiveness of our solution and guide future improvements.</p>

          <div className="faq-container">
            <div className="faq">
              <h2 className="question">What are the different "views"?</h2>
              <p className="answer">Our website offers two different views to offer a more customized and enhanced user
              experience. The student view is organized by school subject where the user can explore educational games and
              learning resources. The parent view offers a different set of resources, such as tutoring and other ways to
              help your child succeed! </p>
            </div>
            <div className="faq">
              <h2 className="question">How can I best support my child?</h2>
              <p className="answer">Here at Magic Minds, we believe in equitable eduation and success for all students.
              Making sure your student has the support they need is crucial to success both in the classroom and life. Here 
              are some tips to help you support your student to the best of your abilities!</p>
              <ol>
                <li className='tip'>Attend Back-To-School Night & Parent-Teacher Conferences </li>
                <p>Being involved in your child's education is a great way to support them. These types of school events
                   can help parents stay informed about the progress of their child's education and any special programs that the school
                   offers. Meetings with faculty are great ways to get to know your child's educator and any expectations they might have.
                   They also provide a channel with which parents can discuss ways to best help their students succeed.
                </p>
                <li className='tip'>Reinforce Expectations Surrounding Homework</li>
                <p>
                  While younger students may not yet understand the benefits of homework, it is important to support expectations 
                  surrounding homework. Homework cements learning done in the classroom and helps build a sense of responsibility. 
                  Parents can help by creating a productive and conducive study environment for they're students, as well as by setting 
                  clear expectations and establsih consistent routines. This will help build good habits from a young age.
                </p>
                <li className='tip'>Set Your Student Up For Success!</li>
                <p>
                  It's no secret that breakfast is the most important meal of the day. Support your student by making sure they 
                  are prepared for the day, both physically and mentally! A hearty, nutritious breakfast and a good night's rest 
                  go a long way in helping student's succeed while at school.
                </p>
              </ol>
            </div>
            <div className="faq">
              <h2 className="question">Why should I use Magic Minds?</h2>
              <p className="answer">Magic Minds is here to help. We understand the importance of the education of youth, but we 
              also understand how difficult it can be to support young students academically, especially for lower income families. We want to help bridge the gap in education 
              by providing a wealth of information and resources. We have resources for students to help them practice their skills 
              outside the classroom and encourage the learning progression. We also provide resources for parents and families, so that they 
              have the knowledge to better support their students. </p>
            </div>
            
          </div>
      </div>

      <div className='es'>
      <NavBarSpanish/>
      <h1>Preguntas Frecuentes</h1>
      <p>Creemos que abordar las desigualdades educativas que enfrentan los estudiantes que viven en la pobreza es un tema crítico. Al proporcionar acceso gratuito a recursos
        educativos, podemos ayudar a nivelar el campo de juego y mejorar los resultados académicos para los estudiantes desfavorecidos. La educación es esencial para romper el
        ciclo de la pobreza y aumentar la movilidad socioeconómica ascendente. Además, proporcionar oportunidades de educación equitativas puede ayudar a reducir las desigualdades
        entre raza, clase y género. La medición de los resultados a través de puntajes de pruebas estandarizadas y encuestas de satisfacción de los estudiantes puede ayudar a
        determinar la efectividad de nuestra solución y guiarnos para mejorar en el futuro.</p>

        <div className="faq-container">
          <div className="faq">
            <h2 className="question">¿Cuáles son las diferentes "vistas"?</h2>
            <p id="answer">Nuestro sitio web ofrece dos vistas diferentes para ofrecer una experiencia de usuario más personalizada y mejorada.
            La vista del estudiante está organizada por asignatura escolar donde el usuario puede explorar juegos educativos y recursos de
            aprendizaje. ¡La vista para padres ofrece un conjunto diferente de recursos, como tutoría y otras formas de ayudar a su hijo a
            tener éxito!</p>
          </div>
          <div className="faq">
            <h2 className="question">¿Cómo puedo apoyar mejor a mi hijo?</h2>
            <p className="answer"> </p>
          </div>
          <div className="faq">
            <h2 className="question">¿Por qué debería usar Mentes Mágicas?</h2>
            <p className="answer"> </p>
          </div>
          
        </div>
        </div>
    </div>
    
  );  
}

export default FAQ;
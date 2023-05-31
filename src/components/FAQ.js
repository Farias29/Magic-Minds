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
                  Parents can help by creating a productive and conducive study environment for their students, as well as by setting 
                  clear expectations and establish consistent routines. This will help build good habits from a young age.
                </p>
                <li className='tip'>Set Your Student Up For Success!</li>
                <p>
                  It's no secret that breakfast is the most important meal of the day. Support your student by making sure they 
                  are prepared for the day, both physically and mentally! A hearty, nutritious breakfast and a good night's rest 
                  go a long way in helping students succeed while at school.
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
              <p className="answer">Aquí en Mentes Magicas, creemos en la educación equitativa y el éxito para todos los estudiantes.
              Nos aseguramos de que su estudiante tenga el apoyo que necesita porque creemos que es crucial para el éxito tanto en la
              clase como en la vida. ¡Aquí hay algunos consejos para ayudarlo a apoyar a su estudiante lo mejor que pueda!</p>
              <ol>
                <li className='tip'>Asistir a la junta de regreso a clases y a las conferencias de padres y maestros </li>
                <p>Participar en la educación de su hijo es una manera  excelente de apoyarlo. Este tipo de eventos escolares pueden ayudar
                  a los padres a mantenerse informados sobre el progreso de la educación de sus hijos y cualquier programa especial que ofrezca
                  la escuela. Las reuniones con los profesores es una manera excelente para conocer al educador de su hijo y cualquier expectativa
                  que puedan tener. También proporcionan un canal con el que los padres puedan placticar como ayudar mejor a sus estudiantes.
                </p>
                <li className='tip'>Reforzar las expectativas en torno a la tarea</li>
                <p>
                Si bien es posible que los estudiantes más jóvenes aún no entiendan los beneficios de la tarea, es importante apoyar las expectativas
                que rodean la tarea. La tarea consolida el aprendizaje realizado en el aula y ayuda a construir un sentido de responsabilidad. Los padres
                pueden ayudar creando un ambiente de estudio productivo y propicio para sus estudiantes, así como estableciendo expectativas claras y
                estableciendo rutinas consistentes. Esto ayudará a construir buenos hábitos desde una edad temprana.
                </p>
                <li className='tip'>¡Prepara a tu estudiante para el éxito!</li>
                <p>
                No es ningún secreto que el desayuno es la comida más importante del día. ¡Apoye a su estudiante asegurándose de que esté preparado para
                el día, tanto físicamente como mentalmente! Un desayuno abundante y nutritivo y una buen descanso ayudan mucho a los estudiantes a tener
                éxito mientras están en la escuela.
                </p>
              </ol>
            </div>
            <div className="faq">
              <h2 className="question">¿Por qué debería usar Mentes Mágicas?</h2>
              <p className="answer">Mentes Mágicas está aquí para ayudar. Entendemos la importancia de la educación de los jóvenes, pero también entendemos
              lo difícil que puede ser apoyar académicamente a los jóvenes estudiantes, especialmente para las familias de bajos ingresos. Queremos ayudar a
              cerrar la brecha en la educación de la información y los recursos. Tenemos recursos para que los estudiantes los ayuden a practicar sus habilidades
              fuera del aula y fomentar la progresión del aprendizaje. También proporcionamos recursos para padres y familias, para que tengan el conocimiento
              para apoyar mejor a sus estudiantes. </p>
            </div>
        </div>
    </div>
    </div>
    
  );  
}

export default FAQ;
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

        <div class="faq-container">
          <div class="faq">
            <button onclick="toggleFunction()" class="question">What are the different "views"?</button>
            <p id="answer">Our website offers two different views to offer a more customized and enhanced user
            experience. The student view is organized by school subject where the user can explore educational games and
            learning resources. The parent view offers a different set of resources, such as tutoring and other ways to
            help your child succeed!</p>
          </div>
          <div class="faq">
            <h2 class="question">How can I best support my child?</h2>
            <p class="answer">Here at Magic Minds, we believe in equity in education... more stuff </p>
          </div>
          <div class="faq">
            <h2 class="question">Why should I use Magic Minds?</h2>
            <p class="answer">Answer 3</p>
          </div>
          <div class="faq">
            <h2 class="question">How should I use Magic Minds?</h2>
            <p class="answer">Answer 4</p>
          </div>
          <div class="faq">
            <h2 class="question">Is Magic Minds safe for my child to use?</h2>
            <p class="answer">Answer 5</p>
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

        <div class="faq-container">
          <div class="faq">
            <button onclick="toggleFunction()" class="question">¿Cuáles son las diferentes "vistas"?</button>
            <p id="answer">Nuestro sitio web ofrece dos vistas diferentes para ofrecer una experiencia de usuario más personalizada y mejorada.
            La vista del estudiante está organizada por asignatura escolar donde el usuario puede explorar juegos educativos y recursos de
            aprendizaje. ¡La vista para padres ofrece un conjunto diferente de recursos, como tutoría y otras formas de ayudar a su hijo a
            tener éxito!</p>
          </div>
          <div class="faq">
            <h2 class="question">¿Cómo puedo apoyar mejor a mi hijo?</h2>
            <p class="answer"> </p>
          </div>
          <div class="faq">
            <h2 class="question">¿Por qué debería usar Mentes Mágicas?</h2>
            <p class="answer"> </p>
          </div>
          <div class="faq">
            <h2 class="question">¿Cómo debo usar Mentes Mágicas?</h2>
            <p class="answer"> </p>
          </div>
          <div class="faq">
            <h2 class="question">¿Es seguro que mis hijos usen Mentes Mágicas?</h2>
            <p class="answer"> </p>
          </div>
        </div>
        </div>
    </div>
    
  );  
}

export default FAQ;
import React from 'react';
import NavBar from './NavBar';

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
            <h2 class="question">Is Magic Minds safe for my shild to use?</h2>
            <p class="answer">Answer 5</p>
          </div>
          
        </div>
    </div>
    
  );  
}

export default FAQ;
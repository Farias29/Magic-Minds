import React from 'react';
import NavBar from './NavBar';

function FAQ() {
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
            <h2 class="question">Question 1</h2>
            <p class="answer">Answer 1</p>
          </div>
          <div class="faq">
            <h2 class="question">Question 2</h2>
            <p class="answer">Answer 2</p>
          </div>
          
        </div>
    </div>
  );
}

export default FAQ;
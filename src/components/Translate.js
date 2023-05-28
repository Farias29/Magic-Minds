import React from 'react';
import { useState } from 'react';
const Translate = () => {
  const [language, setLanguage] = useState("ES");

    const translate = () => {
      let english = document.querySelector('.es').style.display === 'block';
      if(!english) {
        document.querySelector('.en').style.display = 'none';
        document.querySelector('.es').style.display = 'block';
        english = document.querySelector('.en').style.display = 'none';
        } else {
          english = document.querySelector('.en').style.display = 'display';
          document.querySelector('.en').style.display = 'block';
          document.querySelector('.es').style.display = 'none';
        }
      };
  return (
    <button className="translate-button" onClick={translate} >
      ES | EN
    </button>
  );
};

export default Translate;
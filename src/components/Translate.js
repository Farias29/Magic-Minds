import React from 'react';

const Translate = () => {

let language = "es";

    const translate = () => {

        document.querySelector('.eng').style.display = 'none';
        document.querySelector('.es').style.display = 'block';
        language = "eng";
      };
  return (
    <button className="translate-button" onClick={translate} value="eng">
    </button>
  );
};

export default Translate;
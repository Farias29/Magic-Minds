import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButtonSpanish = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button className="back-button" onClick={goBack}>
      Volver
    </button>
  );
};

export default BackButtonSpanish;
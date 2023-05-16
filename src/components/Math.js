import React from 'react';
import Cards from './Cards';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import BackButton from './BackButton';

function Math() {
  return (
    <div className="math">
      <h1>Math</h1>
      <BackButton/>
      <Link 
        title="Game 1"
        />
      <Link
        title="Game 2"
        />
      <Link
        title="Learning Resource"
        />
      <Link
        title="Learning Resource"
        />
    </div>
  );
}

export default Math;
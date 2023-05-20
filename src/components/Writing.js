import React, { useState } from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import ABCYA from './img/ABCYA.png';
import FUN from './img/FUN.png';
import TOPMARKS from './img/TOPMARKS.jpg';
import EDUCATION from './img/EDUCATION.png';
import GREAT from './img/GREAT.png';

const Writing = () => {
  const [selectedCategory, setSelectedCategory] = useState('Games');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getResourcesByCategory = () => {
    const resources = {
      Games: [
        {
          title: 'ABCYA',
          link: 'https://www.abcya.com/games/category/writing',
          image: ABCYA,
        },
        {
          title: 'Fun English Games',
          link: 'https://www.funenglishgames.com/writinggames.html',
          image: FUN,
        },
        {
          title: 'Topmarks',
          link: 'https://www.topmarks.co.uk/english-games/5-7-years/letters-and-sounds',
          image: TOPMARKS,
        },
      ],
      Practice: [
        {
          title: 'Education.com',
          link: 'https://www.education.com/worksheets/writing/',
          image: EDUCATION,
        },
        {
          title: 'Great!',
          link: 'https://www.greatschools.org/gk/worksheets/?category=writing-2',
          image: GREAT,
        },
      ],
    };

    return resources[selectedCategory];
  };

  

  const renderResources = () => {
    const resources = getResourcesByCategory();

    return resources.map((resource, index) => (
      <ResourceCards key={index} title={resource.title} image={resource.image} link={resource.link} />
    ));
  };

  return (
    <div className="writing">
      <h1>Writing</h1>
      <BackButton />
      <div>
        <label htmlFor="category-select">Select Category:</label>
        <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Games">Games</option>
          <option value="Practice">Practice</option>
        </select>
      </div>
      <div className="resource-container">{renderResources()}</div>
    </div>
  );
};
export default Writing;
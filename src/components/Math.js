import React, { useState } from 'react';
import Cards from './Cards';
import BackButton from './BackButton';

const Math = () => {
  const [selectedCategory, setSelectedCategory] = useState('Games');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getResourcesByCategory = () => {
    const resources = {
      Games: [
        {
          title: 'Game 1',
          link: '/game2',
          image: 'path/to/game1.png',
        },
        {
          title: 'Game 2',
          link: '/game2',
          image: 'path/to/game2.png',
        },
      ],
      Practice: [
        {
          title: 'Practice Resource 1',
          link: '/practice1',
          image: 'path/to/practice1.png',
        },
        {
          title: 'Practice Resource 2',
          link: '/practice2',
          image: 'path/to/practice2.png',
        },
      ],
    };

    return resources[selectedCategory];
  };

  const renderResources = () => {
    const resources = getResourcesByCategory();

    return resources.map((resource, index) => (
      <Cards key={index} title={resource.title} link={resource.link} image={resource.image} />
    ));
  };

  return (
    <div className="math">
      <h1>Math</h1>
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

export default Math;
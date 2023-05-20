import React, { useState } from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import SPLASH from './img/SPLASH.jpg';
import LEARN from './img/LEARN.png';
import BLASTER from './img/BLASTER.jpg';
import PLAYGROUND from './img/PLAYGROUND.png';

const Math = () => {
  const [selectedCategory, setSelectedCategory] = useState('Games');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getResourcesByCategory = () => {
    const resources = {
      Games: [
        {
          title: 'Splash Math',
          link: 'https://www.splashlearn.com/math-games',
          image:SPLASH,
        },
        {
          title: 'Math Playground',
          link: 'https://www.mathplayground.com/',
          image:PLAYGROUND,
        },
        {
          title: 'Math Blaster',
          link: 'http://www.mathblaster.com/default.aspx',
          image:BLASTER,
        },
      ],
      Practice: [
        {
          title: 'Splash Math Practice',
          link: 'https://www.splashlearn.com/resources',
          image:LEARN,
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
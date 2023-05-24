import React, { useState } from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import TATE from './img/TATE.jpg';
import QUICK from './img/QUICK.jpg';
import ARTPBS from './img/ARTPBS.png';
import TATEKIDS from './img/TATEKIDS.png';
import QUIZZES from './img/QUIZZES.png';

const Art = () => {
  const [selectedCategory, setSelectedCategory] = useState('Games');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getResourcesByCategory = () => {
    const resources = {
      Games: [
        {
          title: 'Tate Paint',
          link: 'https://www.tate.org.uk/kids/games-quizzes/tate-paint',
          image: TATE,
        },
        {
          title: 'Quick, Draw!',
          link: 'https://quickdraw.withgoogle.com/',
          image: QUICK,
        },
        {
          title: 'PBS Kids Art',
          link: 'https://pbskids.org/games/the-arts',
          image: ARTPBS,
        },
      ],
      Practice: [
        {
          title: 'Tate Kids',
          link: 'https://www.tate.org.uk/kids/games-quizzes',
          image: TATEKIDS,
        },
        {
          title: 'Education Quizzes',
          link: 'https://www.educationquizzes.com/ks2/art-and-design/',
          image: QUIZZES,
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
    <div className="art">
      <h1 className='en'>Art</h1>
      <h1 className='es'>Arte</h1>
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
export default Art;
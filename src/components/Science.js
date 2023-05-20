import React, { useState } from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import ABCYA from './img/ABCYA.png';
import NASA from './img/NASA.png';
import KIDS from './img/KIDS.png';
import IXLSCIENCE from './img/IXLSCIENCE.png';
import SUPER from './img/SUPER.jpg';

const Science = () => {
  const [selectedCategory, setSelectedCategory] = useState('Games');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getResourcesByCategory = () => {
    const resources = {
      Games: [
        {
          title: 'ABCYA Science',
          link: 'https://www.abcya.com/games/category/science',
          image: ABCYA,
        },
        {
          title: 'NASA Games',
          link: 'https://www.nasa.gov/kidsclub/index.html',
          image: NASA,
        },
        {
          title: 'National Geo Kids',
          link: 'https://kids.nationalgeographic.com/games/',
          image: KIDS,
        },
      ],
      Practice: [
        {
          title: 'IXL Science',
          link: 'https://www.ixl.com/science',
          image: IXLSCIENCE,
        },
        {
          title: 'Super Teacher',
          link: 'https://www.superteacherworksheets.com/full-science.html',
          image: SUPER,
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
    <div className="science">
      <h1>Science</h1>
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
export default Science;
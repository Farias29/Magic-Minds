import React, { useState } from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import BackButtonSpanish from './BackButtonSpanish';
import ICIVICS from './img/ICIVICS.png';
import MISSION from './img/MISSION.jpg';
import BBC from './img/BBC.jpg';
import IXL from './img/IXL.png';
import NavBarLanding from './NavBarLanding';

const SocialStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('Games');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getResourcesByCategory = () => {
    const resources = {
      Games: [
        {
          title: 'iCivics',
          link: 'https://www.icivics.org/games',
          image: ICIVICS,
        },
        {
          title: 'Mission US',
          link: 'https://www.mission-us.org/games/for-crown-or-colony/',
          image: MISSION,
        },
        {
        title: 'BBC History',
        link: 'https://www.bbc.co.uk/history/forkids/index.shtml',
        image: BBC,
      },
      ],
      Practice: [
        {
          title: 'IXL Social Studies',
          link: 'https://www.ixl.com/social-studies',
          image: IXL,
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
<div className="socialstudies">
      <div className='en'>
      <NavBarLanding/>
      <h1>Social Studies</h1>
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

      <div className='es'>
      <NavBarLanding/>
      <h1>Ciencias Sociales</h1>
      <BackButtonSpanish />
      <div>
        <label htmlFor="category-select">Seleccione Categoría:</label>
        <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Games">Juegos</option>
          <option value="Practice">Practica</option>
        </select>
      </div>
      <div className="resource-container">{renderResources()}</div>
      </div>
    </div>
  );
};
export default SocialStudies;
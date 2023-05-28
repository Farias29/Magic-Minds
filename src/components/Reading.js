import React, { useState } from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import BackButtonSpanish from './BackButtonSpanish';
import PBS from './img/PBS.jpg';
import MONSTER from './img/MONSTER.png';
import SPLASHREADING from './img/SPLASHREADING.png';
import IXLREADING from './img/IXLREADING.png';
import NavBarLanding from './NavBarLanding';


const Reading = () => {
  const [selectedCategory, setSelectedCategory] = useState('Games');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getResourcesByCategory = () => {
    const resources = {
      Games: [
        {
          title: 'PBS Kids Reading',
          link: 'https://pbskids.org/games/reading',
          image: PBS,
        },
        {
          title: 'Teach Your Monster',
          link: 'https://www.teachyourmonster.org/teachyourmonstertoread?gclid=CjwKCAjw3ueiBhBmEiwA4BhspIFJlrc8QICyqa0IDW0fjuqO3dXSFm0CkXKNeMeghXohAE1apwpTSBoC4ScQAvD_BwE',
          image: MONSTER,
        },
        {
          title: 'Splash Reading',
          link: 'https://www.splashlearn.com/cpc/ela/reading-games?adCampaign=17251785775&adGroup=136918314219&targetid=kwd-308481305&adTag=reading%20games%20for%20kids&adID=650319547879&ipad_blocker_disabled=1&gclid=CjwKCAjw3ueiBhBmEiwA4BhspIp6778N_JXOvVmvsv5OXxALtwoCxlMkqOWyPPBvM_4BJwKkx89NMxoCePUQAvD_BwE',
          image: SPLASHREADING,
        },
      ],
      Practice: [
        {
          title: 'IXL Reading',
          link: 'https://www.ixl.com/ela/reading-comprehension?partner=google&campaign=12645125486&adGroup=120350762779&gclid=CjwKCAjw3ueiBhBmEiwA4BhspOItjJIx9tD-jfrqQn_RsQbDPsOPx1ZzFJa1j_S3R8xLVkQw_tnM2xoCcgMQAvD_BwE',
          image: IXLREADING,
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
    <div className="reading">
      <div className='en'>
      <NavBarLanding/>
      <h1>Reading</h1>
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
      <h1>Lectura</h1>
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
export default Reading;
import React from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import NavBarLanding from './NavBarLanding';
import BackButtonSpanish from './BackButtonSpanish';
import CLUBZ from './img/CLUBZ.jpg';
import GOPEER from './img/GOPEER.jpg';
import DYSLEXIA from './img/DYSLEXIA.png';

const TutoringServices = () => {
  return (
    <div className="tutoringservices">
      <div className='en'>
      <NavBarLanding/>
      <h1>Tutoring Services</h1>
      <BackButton />
      <div>
        <ResourceCards
        title="Club Z"
        link="https://clubztutoring.com/"
        image={CLUBZ} />
        <ResourceCards 
        title="GoPeer"
        link="https://gopeer.org/"
        image={GOPEER} />
        <ResourceCards
        title="Dyslexia Centers"
        link="https://www.childrensdyslexiacenters.org/"
        image={DYSLEXIA} />
      </div>
      </div>

      <div className='es'>
      <NavBarLanding/>
      <h1>Servicios de Tutoría</h1>
      <BackButtonSpanish />
      <div>
      <ResourceCards
        title="Club Z"
        link="https://clubztutoring.com/"
        image={CLUBZ} />
        <ResourceCards 
        title="GoPeer"
        link="https://gopeer.org/"
        image={GOPEER} />
        <ResourceCards
        title="Dyslexia Centers"
        link="https://www.childrensdyslexiacenters.org/"
        image={DYSLEXIA} />
      </div>
      </div>
    </div>
  );
};
export default TutoringServices;
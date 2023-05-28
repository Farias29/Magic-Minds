import React from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import NavBarLanding from './NavBarLanding';
import BackButtonSpanish from './BackButtonSpanish';

const TutoringServices = () => {
  return (
    <div className="tutoringservices">
      <div className='en'>
      <NavBarLanding/>
      <h1>Tutoring Services</h1>
      <BackButton />
      <div>
        <ResourceCards />
        <ResourceCards />
        <ResourceCards />
      </div>
      </div>

      <div className='es'>
      <NavBarLanding/>
      <h1>Servicios de Tutoría</h1>
      <BackButtonSpanish />
      <div>
        <ResourceCards />
        <ResourceCards />
        <ResourceCards />
      </div>
      </div>
    </div>
  );
};
export default TutoringServices;
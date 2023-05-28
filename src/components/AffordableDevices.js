import React from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import NavBarLanding from './NavBarLanding';
import BackButtonSpanish from './BackButtonSpanish';

const AffordableDevices = () => {
  return (
    <div className="affordabledevices">
      <div className='en'>
      <NavBarLanding/>
      <h1>Affordable Devices</h1>
      <BackButton />
      <div>
      <ResourceCards />
      <ResourceCards />
      <ResourceCards />
      </div>
      </div>

      <div className='es'>
      <NavBarLanding/>
      <h1>Tecnología Accesible</h1>
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
export default AffordableDevices;
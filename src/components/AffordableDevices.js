import React from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import NavBarLanding from './NavBarLanding';
import BackButtonSpanish from './BackButtonSpanish';
import FCC from './img/FCC.png';
import GIVE from './img/GIVE.jpg';
import SAFELINK from './img/SAFELINK.jpg';

const AffordableDevices = () => {
  return (
    <div className="affordabledevices">
      <div className='en'>
      <NavBarLanding/>
      <h1>Affordable Devices</h1>
      <BackButton />
      <div>
      <ResourceCards
        title="ACP (fcc.gov)"
        link="https://www.fcc.gov/affordable-connectivity-program"
        image={FCC} />
        <ResourceCards 
        title="give IT. get IT."
        link="https://www.giveitgetit.org/get-it/"
        image={GIVE} />
        <ResourceCards
        title="SafeLink Wireless"
        link="https://www.safelinkwireless.com/Enrollment/Safelink/en/Web/www/default/index.html#!/newHome?PromotionCode=WASL781&msclkid=0d36efd2ddcb1310b9ce8ba004d14fb0&utm_source=bing&utm_medium=cpc&utm_campaign=SafeLink%20Non%20Calif&utm_term=Affordable%20Connectivity%20Program&utm_content=ACP"
        image={SAFELINK} />
      </div>
      </div>

      <div className='es'>
      <NavBarLanding/>
      <h1>Tecnología Accesible</h1>
      <BackButtonSpanish />
      <div>
      <ResourceCards
        title="ACP (fcc.gov)"
        link="https://www.fcc.gov/affordable-connectivity-program"
        image={FCC} />
        <ResourceCards 
        title="give IT. get IT."
        link="https://www.giveitgetit.org/get-it/"
        image={GIVE} />
        <ResourceCards
        title="SafeLink Wireless"
        link="https://www.safelinkwireless.com/Enrollment/Safelink/en/Web/www/default/index.html#!/newHome?PromotionCode=WASL781&msclkid=0d36efd2ddcb1310b9ce8ba004d14fb0&utm_source=bing&utm_medium=cpc&utm_campaign=SafeLink%20Non%20Calif&utm_term=Affordable%20Connectivity%20Program&utm_content=ACP"
        image={SAFELINK} />
      </div>
      </div>
    </div>
  );
};
export default AffordableDevices;
import React from 'react';
import ResourceCards from './ResourceCards';
import BackButton from './BackButton';
import NavBarLanding from './NavBarLanding';
import BackButtonSpanish from './BackButtonSpanish';
import DISCOUNT from './img/DISCOUNT.jpeg';
import WALMART from './img/WALMART.jpg';
import BAGS from './img/BAGS.png';

const SchoolSupplies = () => {
  return (
    <div className="schoolsupplies">
      <div className='en'>
      <NavBarLanding/>
      <h1>School Supplies</h1>
      <BackButton />
      <div>
      <ResourceCards 
        title="Discount School Supply"
        link="https://www.discountschoolsupply.com/"
        image={DISCOUNT}/>
      <ResourceCards
        title="Walmart"
        link="https://www.walmart.com/cp/school-supplies/1086045"
        image={WALMART}/>
      <ResourceCards        
        title="Bags In Bulk"
        link="https://bagsinbulk.com/collections/wholesale-school-supplies"
        image={BAGS}/>
      </div>
      </div>

      <div className='es'>
      <NavBarLanding/>
      <h1>Materiales Escolares</h1>
      <BackButtonSpanish />
      <div>
      <ResourceCards 
        title="Discount School Supply"
        link="https://www.discountschoolsupply.com/"
        image={DISCOUNT}/>
      <ResourceCards
        title="Walmart"
        link="https://www.walmart.com/cp/school-supplies/1086045"
        image={WALMART}/>
      <ResourceCards        
        title="Bags In Bulk"
        link="https://bagsinbulk.com/collections/wholesale-school-supplies"
        image={BAGS}/>
      </div>
      </div>
    </div>
  );
};
export default SchoolSupplies;
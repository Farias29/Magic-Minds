import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './components/Cards';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import AboutUsStudent from './components/AboutUsStudent';
import Student from './components/Student';
import './index.css';
import FAQ from './components/FAQ';
import Math from './components/Math';
import Writing from './components/Writing';
import SocialStudies from './components/SocialStudies';
import Science from './components/Science';
import Art from './components/Art';
import Reading from './components/Reading';
import TutoringServices from './components/TutoringServices';
import SchoolSupplies from './components/SchoolSupplies';
import AffordableDevices from './components/AffordableDevices';

function App() {
  return (
    <Router>
      <div>
        <Switch>  
          <Route exact path="/" component={Landing} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/about-us-student" component={AboutUsStudent} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/nav-bar" component={NavBar} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/math" component={Math} />
          <Route exact path="/writing" component={Writing} />        
          <Route exact path="/socialstudies" component={SocialStudies} />
          <Route exact path="/science" component={Science} />  
          <Route exact path="/reading" component={Reading} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/tutoringservices" component={TutoringServices} />
          <Route exact path="/schoolsupplies" component={SchoolSupplies} />
          <Route exact path="/affordabledevices" component={AffordableDevices} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

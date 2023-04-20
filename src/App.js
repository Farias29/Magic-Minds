import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './components/Cards';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/nav-bar" component={NavBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

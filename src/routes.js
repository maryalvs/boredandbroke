import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import LoginCreateAccount from './components/LoginCreateAccount/LoginCreateAccount';
import SavedActivities from './components/SavedActivities/SavedActivities';
import Settings from './components/Settings/Settings';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/Homepage" component={Homepage} />
        <Route exact path="/LoginCreateAccount" component={LoginCreateAccount} />
        <Route exact path="/SavedActivities" component={SavedActivities} />
        <Route exact path="/Settings" component={Settings} />
      </div>
    </Router>
  )
};

export default Routes;

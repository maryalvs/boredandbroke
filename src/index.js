import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
// import injectSheet from 'react-jss';
// import './index.css';
import PropTypes from 'prop-types';
import Homepage from './components/Homepage/Homepage.js';
import LoginCreateAccount from './components/LoginCreateAccount/LoginCreateAccount.js';
import SavedActivities from './components/SavedActivities/SavedActivities.js';
import Settings from './components/Settings/Settings.js';
import Loading from './components/Homepage/Loading.js';
import App from './containers/AppContainer';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger());
export const store = createStore(rootReducer, middleware);

const propTypes = {
    classes: PropTypes.object.isRequired,
};


const styles = {
    main: {
        backgroundColor: '#64d8ed',
        width: '43px',
        textAlign: 'center',
    },
};


class BoredAndBroke extends React.Component {
  render() {
    // const status = 'This is our project:';
    const loggedIn = true;
    const { classes } = this.props;
    return (

// note: may not need the <Switch> to wrap the route below
// <Route exact path="/" render={() => (
//   loggedIn ? (
//     <Redirect to="/Homepage"/>
//   ) : (
//     <Redirect to="/LoginCreateAccount"/>
//   )
// )}/>


         <Router>
             <div>
                 <ul>

                     <li><Link to="/Homepage">Homepage</Link></li>
                     <li><Link to="/SavedActivities">SavedActivities</Link></li>
                     <li><Link to="/Settings">Settings</Link></li>
                     <li><Link to="/LoginCreateAccount">LoginCreateAccount</Link></li>
                 </ul>

                 <Switch>
                     <Route exact path="/" component={App} />
                     <Route path="/Homepage" component={Homepage}/>
                     <Route path="/SavedActivities" component={SavedActivities}/>
                     <Route path="/Settings" component={Settings}/>
                     <Route path="/LoginCreateAccount" component={LoginCreateAccount}/>
                     <Route path="/Loading" component={Loading}/>
                </Switch>
            </div>
         </Router>
      );
    }
  }

BoredAndBroke.propTypes = propTypes;

ReactDOM.render(
  <Provider store={store}>
    <BoredAndBroke
      classes={styles.main}
    />
  </Provider>,
  document.getElementById('root')
);

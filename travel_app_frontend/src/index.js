import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './pages/App';
import Trips from './pages/Trips';
import NewTrip from './pages/NewTrip';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import registerServiceWorker from './registerServiceWorker';
import Register from './pages/Register';


ReactDOM.render(
  <Router>
    <div>
      <Route
        exact
        path='/'
        component={App}
      />
      <Route
        exact
        path='/Register'
        component={Register}
      />
      <Route
        exact
        path='/Login'
        component={Login}
      />
      <Route
        exact
        path='/Trips'
        component={Trips}
      />
      <Route
        exact
        path='/NewTrip'
        component={NewTrip}
      />
      <Route
        exact
        path='/Register'
        component={Register}
      />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

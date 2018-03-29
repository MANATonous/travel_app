import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './pages/App';
import Trips from './pages/Trips';
import NewTrip from './pages/NewTrip';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <Route
        exact
        path='/trips'
        component={Trips}
      />
      <Route
        exact
        path='/'
        component={App}
      />
      <Route
      exact
      path='/newtrip'
      component={NewTrip}
      />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

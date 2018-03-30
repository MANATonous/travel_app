import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './pages/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import registerServiceWorker from './registerServiceWorker';
import Trips from './pages/Trips.js';
import NewTrip from './pages/NewTrip';
import JoinTrip from './pages/JoinTrip';



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
        path='/register'
        component={Register}
      />
      <Route
        exact
        path='/Login'
        component={Login}
      />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

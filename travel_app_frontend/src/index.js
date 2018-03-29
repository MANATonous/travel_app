import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Trips from './Trips';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Register from './pages/Register';


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
        path='/Register'
        component={Register}
      />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

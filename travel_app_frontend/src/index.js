import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Trips from './Trips';
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
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

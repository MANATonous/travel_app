import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './pages/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <Route
        exact
        path='/register'
        component={Register}
      />
      <Route
        exact
        path='/login'
        component={Login}
      />
      <Route
        path='/'
        component={App}
      />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

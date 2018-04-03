import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './pages/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import registerServiceWorker from './registerServiceWorker';
import MessageBoard from './pages/MessageBoard'

ReactDOM.render(
  <Router>
    <div>
      <Route
        path='/'
        component={App}/>
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
<<<<<<< HEAD
=======
      <Route
        exact
        path='/NewEvent'
        component={NewEvent}
      />
      <Route
        exact
        path='/MessageBoard'
        component={MessageBoard}
      />
>>>>>>> d6811d07ee3872489b03fce4245844b10d1a39d7
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

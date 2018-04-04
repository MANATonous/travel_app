import React, { Component } from 'react';
import '../css/App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Trip from './Trip';
import AuthService from '../services/AuthService'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Auth = new AuthService()

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/Login' component={Login} />
            <Route path='/' component={Dashboard} />
            <Route path='/Trip/:id' component={Trip} />
            <Route path='/Trip/' component={Trip} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

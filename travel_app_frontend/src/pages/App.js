import React, { Component } from 'react';
import '../css/App.css';
import withAuth from '../services/withAuth'
import Dashboard from './Dashboard';
import NewTrip from './NewTrip';
import AuthService from '../services/AuthService'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trip from './Trip';

const Auth = new AuthService()

class App extends Component {

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login')
  }

  render() {
    return (
      <div>
        <button type="button" className="logout" onClick={this.handleLogout.bind(this)}>Logout
        </button>
        <Router>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/NewTrip' component={NewTrip} />
            <Route path='/Trip/:id' component={Trip} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth(App);

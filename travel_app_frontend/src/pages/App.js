import React, { Component } from 'react';
import '../css/App.css';
import withAuth from '../services/withAuth'
import Trips from './Trips';
import NewTrip from './NewTrip';
import AuthService from '../services/AuthService'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            <Route exact path='/' component={Trips}/>
            <Route path='/NewTrip' component={NewTrip} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth(App);

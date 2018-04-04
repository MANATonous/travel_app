import React, { Component } from 'react';
import '../css/App.css';
import withAuth from '../services/withAuth'
import Dashboard from './Dashboard';
import NewTrip from './NewTrip';
import JoinTrip from './JoinTrip';
import AuthService from '../services/AuthService'
import { CardDeck, Navbar, NavbarBrand, Nav, DropdownToggle, Dropdown, DropdownItem,Collapse, DropdownMenu, NavbarToggler, NavItem, NavLink, jumbotron, dropdown, menu } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trip from './Trip';

const Auth = new AuthService()

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    collapsed: true
  }
this.toggleNavbar = this.toggleNavbar.bind(this);
}
  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login')
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"><h1>Trippin Out!</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar align="right">
              <NavItem>
                <NavLink href="/Trips">My Trips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Trips">My Past Trips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Login" onClick={this.handleLogout.bind(this)} className="logout">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Router>
          <Switch>
            <Route path='/NewTrip' component={NewTrip} />
            <Route path='/JoinTrip' component={JoinTrip} />
            <Route path='/Trip/:id' component={Trip} />
            <Route path='/Trip/' component={Trip} />
            <Route exact path='/' component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth(App);

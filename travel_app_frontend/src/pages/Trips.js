import React, { Component } from 'react';
import { CardDeck, Navbar, NavbarBrand, Nav, DropdownToggle, Dropdown, DropdownItem, DropdownMenu, NavbarToggler, Collapse, NavItem, NavLink, jumbotron, dropdown, menu } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/Trips.css';
import '../css/AuthUserNavFooter.css';

class Trips extends Component {

  constructor(props){
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      trips: [],
      collapsed: true
    }
      this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/trips`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      this.setState({trips: parsedResponse})
    })
  }

  render(){
    return(
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
              <NavLink href="/Trips">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
        <div className= "jumbotron">
          <p className= "lead"> Create and Manage Trips with Friends and Family </p>
          <hr className= "my-4" />
          <Link to="/NewTrip">
            <button type="button" className="btn btn-primary btn-lg btn-block " id= "button1">Create New Trip</button>
          </Link>
          <Link to="/NewTrip">
            <button type="button" className="btn btn-primary btn-lg btn-block"  id= "button2">Join A Trip</button>
          </Link>
        </ div>
          <div className= "jumbotron">
            <h1 className="label"> Your Trips </h1>
            <hr className= "my-4" />
        <CardDeck className="card-deck">
          {this.state.trips.map((trips, index) => {
            return(
              <div className="card" key={index}>
                <h3 className="card-header">{trips.title}</h3>
                <div className="card-body">
                  <h6 className="card-subtitle text-muted">{trips.start_date} to {trips.end_date}</h6>
                </div>
                <img className= "tripsImage" src="https://images.pexels.com/photos/6934/beach-vacation-water-summer.jpg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Vacation Scene" />
                <div className="card-body">
                  <p className="card-text">{trips.description}</p>
                </div>
                <div className="card-body">
                  <a href="" className="card-link">{trips.link}</a>
                </div>
              </div>
            )
          })}
        </CardDeck>
        </div>
      </div>
    );
  }
}

export default Trips;

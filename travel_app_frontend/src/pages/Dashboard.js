import React, { Component } from 'react';
import { CardDeck, Navbar, NavbarBrand, Nav, DropdownToggle, Dropdown, DropdownItem,Collapse, DropdownMenu, NavbarToggler, NavItem, NavLink, jumbotron, dropdown, menu } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/AuthUserNavFooter.css';
import '../css/Dashboard.css';

class Dashboard extends Component {

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
    localStorage.getItem('trip_id') !== null ? localStorage.setItem('trip_id', null) : localStorage.getItem('trip_id')
    fetch(`${this.state.apiUrl}/trips.json`)
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
                <Link to={`/Trip/${trips.id}`}>
                  <h3 className="card-header">{trips.title}</h3>
                </Link>
                <div className="card-body">
                  <h6 className="card-subtitle text-muted">{trips.start_date} to {trips.end_date}</h6>
                </div>
                <img className= "tripsImage" src="https://images.pexels.com/photos/6934/beach-vacation-water-summer.jpg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Vacation Scene" />
                <div className="card-body">
                  <p className="card-text">{trips.description}</p>
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

export default Dashboard;

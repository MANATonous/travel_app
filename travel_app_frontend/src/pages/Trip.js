import React, { Component } from 'react';
import MessageBoard from './MessageBoard';
import Itinerary from './Itinerary';
import NewEvent from './NewEvent'
import withAuth from '../services/withAuth'
import {Button, Jumbotron} from 'react-bootstrap';
import Navigation from './Navigation';

const apiURL = 'http://localhost:3000'

class Trip extends Component {
  constructor(props){
    super(props)
    this.state = {
      external_api_url: "app.ticketmaster.com/discovery/v2/events.json?city=",
      external_api_key: "&apikey=57Of7IGq5nsa1M1zV1uI5HkqDopxqWjD",
      trip: [],
      active: false,
    }
    this.toggleComponent = this.toggleComponent.bind(this)
  }

  toggleComponent() {
    this.setState(prevState => ({active : !this.state.active}))
  }

  getTripId(){
    if (this.props.trip_id === null) {
      return localStorage.getItem('trip_id')
    }
   else {
     localStorage.setItem('trip_id', this.props.trip_id)
     return this.props.trip_id
  }}

  componentWillMount(){

    // When the component mounts we want see if an object exists in local storage, if yes, load the object,
    //if not pull it from props.match.params.id and save it to local storage
    const tripID = this.getTripId()

    this.setState({newEventStatus: false})

    fetch(`${apiURL}/find_trip/${tripID}.json`)
    .then((rawResponse) =>{
      console.log(rawResponse.body.json());
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      this.setState({trip: parsedResponse[0]})
    })
  }

  getTicketInfo(){
    fetch(`${this.state.external_api_url}${this.state.trip.city}${this.state.external_api_key}`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      const events = parsedResponse._embedded.events
      console.log(events);
    })
  }

  render() {
    this.state.trip.city ? this.getTicketInfo() : null
    return(
      <div>
        <Navigation />
        <Jumbotron>
          <h2>{this.state.trip.title} <br/></h2>
          <h5>{this.state.trip.start_date} to {this.state.trip.end_date} <br/>
          {this.state.trip.city}, {this.state.trip.state} {this.state.trip.country} <br/>
          {this.state.trip.description} </h5> <br />
          <img src={this.state.trip.photo} alt="Trip"/>
        </Jumbotron>
      <div className="MessageBoard container">
        <MessageBoard />
      </div>
      <div className="toggle-form">
        {this.state.active && <NewEvent />}
        <Button type="button" className="btn btn-primary btn-lg" onClick={this.toggleComponent.bind(this)}>
          Add New Event!
        </Button>
      </div>
        <Itinerary />
      </div>
    )
  }
}

export default withAuth(Trip);

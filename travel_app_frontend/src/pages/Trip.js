import React, { Component } from 'react';
import MessageBoard from './MessageBoard';
import Itinerary from './Itinerary';
import NewEvent from './NewEvent'
import withAuth from '../services/withAuth'
import {Button, Jumbotron} from 'react-bootstrap';
import Navigation from './Navigation';
import TicketmasterAPI from './TicketmasterAPI'

const apiURL = 'http://localhost:3000'

class Trip extends Component {
  constructor(props){
    super(props)
    this.toggleComponent = this.toggleComponent.bind(this)
    this.state = {
      trip: [],
      active: false,
    }
  }

  toggleComponent() {
    this.setState(prevState => ({active : !this.state.active}))
  }

  // <TicketmasterAPI />

  componentWillMount(){
    // When the component mounts we want see if an object exists in local storage, if yes, load the object,
    //if not pull it from props.match.params.id and save it to local storage
    const tripID = this.props.trip_id

    this.setState({newEventStatus: false})

    fetch(`${apiURL}/find_trip/${tripID}.json`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      this.setState({trip: parsedResponse[0]})
    })
  }

  renderAPI(){
    if (this.state.trip.city != undefined) {
      localStorage.setItem("city", this.state.trip.city)
      return <TicketmasterAPI />
    }
  }

  render() {
    return(
      <div>
        <Navigation />
        {this.renderAPI()}
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

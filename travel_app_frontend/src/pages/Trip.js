import React, { Component } from 'react';
import MessageBoard from './MessageBoard';
import Itinerary from './Itinerary';
import NewEvent from './NewEvent'
import withAuth from '../services/withAuth'
import {Button} from 'react-bootstrap';

const apiURL = 'http://localhost:3000'

class Trip extends Component {
  constructor(props){
    super(props)
    this.state = {
      trip: [],
      trip_id: '',
      active: false,
    }
    this.toggleComponent = this.toggleComponent.bind(this)
  }

  toggleComponent() {
    this.setState(prevState => ({active : !this.state.active}))
  }

  getTripId(){
    console.log(this.props.match)
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
    const tripID = {
      trip_id: this.getTripId()
    }

    this.setState({newEventStatus: false})

    fetch(`${apiURL}/find_trip`,
      {
        body: JSON.stringify(tripID),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      this.setState({trip: parsedResponse})
      console.log('trip', this.state.trip)
    })
    this.setState({trip_id: tripID.trip_id})
  }

  render() {
    return(
      <div>
        <jumbotron>
          <h2>{this.state.trip.title} <br/></h2>
          <h5>{this.state.trip.start_date} to {this.state.trip.end_date} <br/>
          {this.state.trip.city}, {this.state.trip.state} {this.state.trip.country} <br/>
          {this.state.trip.description} </h5> <br />
        </jumbotron>
      <div className="MessageBoard">
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

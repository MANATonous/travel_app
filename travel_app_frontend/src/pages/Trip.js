import React, { Component } from 'react';
import '../css/Trip.css';
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
        <div classname="api">
          {this.renderAPI()}
        </div>
        <div className="wrapper">
            <div className="tripinfo">
              <h2>{this.state.trip.title} <br/></h2>
              <img className="trip-photo" src="http://vyfhealth.com/wp-content/uploads/2015/10/yoga-placeholder1.jpg" />
              <p className="trip-details">
                <b>Date:</b> {this.state.trip.start_date} - {this.state.trip.end_date}
                <br/>
                Location: {this.state.trip.city},  {this.state.trip.state}
                <br/>
                Trip Details:<br/>
                {this.state.trip.description}
              </p>
            </div>
            <div className="itinerary-row">
            <div className="toggle-form"    id="toggle-form">
              <Button type="button" className="btn btn-primary btn-lg" onClick={this.toggleComponent.bind(this)}>
                Add New Event!
              </Button>
              {this.state.active && <NewEvent />}
            </div>
            <Itinerary />
            </div>
            <div className="MessageBoard">
              <MessageBoard />
            </div>
          </div>
        </div>
      )
    }
  }


export default withAuth(Trip);

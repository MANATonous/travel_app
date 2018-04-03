import React, { Component } from 'react';
import MessageBoard from './MessageBoard';
import Itinerary from './Itinerary';
import NewEvent from './NewEvent'

const apiURL = 'http://localhost:3000'
class Trip extends Component {
  constructor(props){
    super(props)
    this.state = {
      trip: [],
      trip_id: '',
      active: false
    }
    this.toggleComponent = this.toggleComponent.bind(this)
  }

  toggleComponent() {
    this.setState(prevState => ({active : !this.state.active}))
  }

  getTripId(){
    if (this.props.match.params.id === null) {
      debugger
      return localStorage.getItem('trip_id')
    }
   else {
     localStorage.setItem('trip_id', this.props.match.params.id)
     return this.props.match.params.id
  }}

  componentWillMount(){

    // When the component mounts we want see if an object exists in local storage, if yes, load the object,
    //if not pull it from props.match.params.id and save it to local storage
    const tripID = {
      trip_id: this.getTripId()
    }

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

  // componentDidMount(){
  //
  // }

  render() {
    return(
      <div>
        {this.state.trip.title} <br/>
        {this.state.trip.start_date} to {this.state.trip.end_date} <br/>
        {this.state.trip.city}, {this.state.trip.state} <br/>
        {this.state.trip.country} <br/>
        {this.state.trip.description} <br />
        <MessageBoard />
        <div className="toggle-form">
          {this.state.active && <NewEvent />}
          <button type="button" onClick={this.toggleComponent.bind(this)}>
            toggle
          </button>
        </div>
        <Itinerary />
      </div>
    )
  }
}

export default Trip;

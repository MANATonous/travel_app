import React, { Component } from 'react';

const apiURL = 'http://localhost:3000'
class Trip extends Component {
  constructor(props){
    super(props)
    this.state = {
      trip: []
    }
  }

  componentWillMount(){

    const tripID = {
      trip_id: this.props.match.params.id
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
      console.log(this.state.trip)
    })
  }

  render() {
    return(
      <div>
        {this.state.trip.title} <br/>
        {this.state.trip.start_date} to {this.state.trip.end_date} <br/>
        {this.state.trip.city}, {this.state.trip.state} <br/>
        {this.state.trip.country} <br/>
        {this.state.trip.description}
      </div>
    )
  }
}

export default Trip;

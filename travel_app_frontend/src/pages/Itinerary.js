import React, { Component } from 'react';
import NewEvent from './NewEvent';
import '../css/Trip.css';
import {Table} from 'reactstrap';

class Itinerary extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiUrl: 'http://localhost:3000',
      events: []
    }
  }

  componentWillMount(){
    const trip_id = localStorage.getItem('trip_id')
    fetch(`${this.state.apiUrl}/events_by_trip/${trip_id}.json`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      this.setState({events: parsedResponse})
    })
  }

  render(){
    return(
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event Name</th>
              <th>Location</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
          {this.state.events.map((events, index) =>{
            return(
              <tr key={index}>
                <td>{events.date}</td>
                <td>{events.title}</td>
                <td>{events.location}</td>
                <td>{events.description}</td>
                <td>{events.link}</td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    )
  }

}

export default Itinerary;

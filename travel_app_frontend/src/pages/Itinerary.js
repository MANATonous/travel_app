import React, { Component } from 'react';
import NewEvent from './NewEvent';

class Itinerary extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiUrl: 'http://localhost:3000',
      events: []
    }
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/events`)
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
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">Date</th>
              <th scope="col">Title</th>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
          {this.state.events.map((events, index) =>{
            return(
              <tr className="table-primary" key={index}>
                <td>{events.date}</td>
                <td>{events.title}</td>
                <td>{events.location}</td>
                <td>{events.description}</td>
                <td>{events.link}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Itinerary;

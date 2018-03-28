import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row} from 'reactstrap'
import './Trips.css';

class Trips extends Component {

  constructor(props){
    super(props)
    this.state = {
      trips: [
        {
          id: 1,
          title: 'Las Vegas',
          description: 'Rachel and Ross wedding',
          city: 'Las Vegas',
          state: 'NV',
          country: 'USA',
          start_date: '2018-08-22',
          end_date: '2018-08-24',
          link: 'www.google.com'
        },
        {
          id: 2,
          title: 'London',
          description: 'Ross Other Wedding, to that one girl',
          city: 'London',
          state: 'NA',
          country: 'UK',
          start_date: '2015-09-15',
          end_date: '2015-09-29',
          link: 'www.friends.com'
        },
        {
          id: 3,
          title: 'New York',
          description: 'Ross first wedding to the lesbian',
          city: 'New York',
          state: 'NY',
          country: 'USA',
          start_date: '2013-03-29',
          end_date: '2013-04-15',
          link: 'www.hey.com'
        }
      ]
    }
  }

  render(){
    return(
      <div>
        {this.state.trips.map((trips, index) => {
          return(
            <div className="card" key={index}>
              <h3 className="card-header">{trips.title}</h3>
              <div className="card-body">
                <h6 className="card-subtitle text-muted">{trips.start_date} to {trips.end_date}</h6>
              </div>
              <img className= "tripsImage" src="https://images.pexels.com/photos/6934/beach-vacation-water-summer.jpg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Vacation Stock Photo" />
              <div className="card-body">
                <p className="card-text">{trips.description}</p>
              </div>
              <div className="card-body">
                <a href="#" className="card-link">{trips.link}</a>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Trips;

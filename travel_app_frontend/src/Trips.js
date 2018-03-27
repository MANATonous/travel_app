import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row} from 'reactstrap'
import './Trips.css';



class Trips extends Component {
  constructor(props){
    super()
      this.state = {
        trips: [
          {
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
          <div class="card">

            <h3 class="card-header">Name for the event</h3>
            <div class="card-body">
              <h6 class="card-subtitle text-muted">Date for the event</h6>
            </div>
            <img className= "tripsImage" src="https://images.pexels.com/photos/6934/beach-vacation-water-summer.jpg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Vacation Stock Photo" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            </div>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
            </div>

        </div>
      </div>
    );
  }
}

export default Trips;

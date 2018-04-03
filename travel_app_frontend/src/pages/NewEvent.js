import React, { Component } from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import '../css/NewTrip.css';
import AuthService from '../services/AuthService';

class NewEvent extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      apiURL: 'http://localhost:3000',
      errors: '',
      trip_id: '',
      form: {
        title: '',
        location: '',
        description: '',
        link: '',
        date: '',
        trip: ''
      }
    }
  }

  handleChange(e){
    console.log(this.props.trip);
    e.preventDefault()
    const { form } = this.state
    form[e.target.name] = e.target.value
    form.user_id = this.Auth.getUserId()

    this.setState({ form })
  }

  // componentWillMount() {
  //   this.state.form.trip_id = this.props.match.params.id
  // }





  newTripSubmit(event){
    //when a submission happens we are NOT sending a url with parameters, opting to send json state object instead
    event.preventDefault()
    //set new event to state
    const newEvent = this.state.form
    //send json version of new event to backend api with post method
    fetch(`${this.state.apiURL}/events`,
      {
        body: JSON.stringify(newTrip),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse) => { //process response
      return Promise.all([rawResponse.status, rawResponse.json()])
    })
    .then((parsedResponse) =>{ //if response is error, update this.state.error
      if (parsedResponse[0] === 422) {
        this.setState({errors: 'Invalid Inputs'})
      } else { //(temporarily) set alert=success
        //todo redirect to login
        this.setState({errors: null})
        alert('Success')
      }})
  }

  render(){
    // console.log(this.state.form)
    return(
      <Form className="form" onSubmit={this.newTripSubmit.bind(this)}>

        <Row>
          <div className="form-group">
            <label className="col-form-label col-form-label-lg title">Title</label>
            <input className="form-control form-control-lg title" type="text" placeholder="Title" name="title" value={this.state.form.title} onChange={this.handleChange.bind(this)} id="inputLarge" />
          </div>
        </Row>

        <Row>
          <Col>
            <div className="form-group">
              <label className="col-form-label col-form-label-lg city">City</label>
              <input className="form-control form-control-lg" type="text" placeholder="City" name="city" value={this.state.form.city} onChange={this.handleChange.bind(this)} id="inputLarge" />
            </div>
          </Col>
          <Col>
            <div className="form-group">
              <label className="col-form-label col-form-label-lg state">State</label>
              <input className="form-control form-control-lg" type="text" placeholder="State" name="state" value={this.state.form.state} onChange={this.handleChange.bind(this)} id="inputLarge" />
            </div>
          </Col>
          <Col>
            <div className="form-group">
              <label className="col-form-label col-form-label-lg country">Country</label>
              <input className="form-control form-control-lg" type="text" placeholder="Country" name="country" value={this.state.form.country} onChange={this.handleChange.bind(this)} id="inputLarge" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="form-group">
              <label className="col-form-label col-form-label-lg start_date">Start Date</label>
              <input className="form-control form-control-lg" type="date" placeholder="Start Date" name="start_date" value={this.state.form.start_date} onChange={this.handleChange.bind(this)} id="inputLarge" />
            </div>
          </Col>
          <Col>
            <div className="form-group">
              <label className="col-form-label col-form-label-lg end_date">End Date</label>
              <input className="form-control form-control-lg" type="date" placeholder="End Date" name="end_date" value={this.state.form.end_date} onChange={this.handleChange.bind(this)} id="inputLarge" />
            </div>
          </Col>
        </Row>

        <Row>
          <div className="form-group text-area">
            <label className="description">Description</label>
            <textarea className="form-control" id="exampleTextarea" rows="5" placeholder="Add ideas for your trip here! Events, Adventures, and Explorations!" name="description" value={this.state.form.description} onChange={this.handleChange.bind(this)}></textarea>
          </div>
        </Row>

        <Row>
          <div className="form-group text-area">
            <label className="link">Links</label>
            <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Add links that pertain to your trip here..." name="link" value={this.state.form.link} onChange={this.handleChange.bind(this)}></textarea>
          </div>
        </Row>

        <Row>
          <input type="submit" className="btn btn-primary submit" value="Submit"  />
        </Row>

      </Form>
    )
  }
}

export default NewEvent;
